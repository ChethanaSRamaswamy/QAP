const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
const { performance } = require('perf_hooks');
const Util = require('../../../utilities/util');
const db = require('../../../utilities/db/mysql/mysql_provider');
const BrandController = require('../../controllers/BrandController');
const LocaleController = require('../../controllers/LocaleController');
const LocatorDefinitionController = require('../../controllers/LocatorDefinitionController');
const importHelper = require('./import_helper');
const Logger = require('../../../utilities/logger');

const { userId } = Util.getEnvironmentVariables();

const printHelp = () => {
  console.log(`
  Usage: node import_selector.js --method "readFromIdFile" [options]

  readFromIdFile method is used to upload your ID CSV files
  
  Options:
  The following options are mandatory.  
  --feature    Name of the Feature you want to upload your CSV files
  --filepath   Path of the CSV file you want to upload
  
  The following option is required if you upload your file from a Jenkins job 
  --sourcefilename    Should be set from the job
  
  --help       Show this help message and exit
  --quiet      Suppress verbose message 
  
  Examples:
  node import_selector.js --method "readFromIdFile" --feature "GNAV Footer" --filepath "gnav_footer/data/tmo_newid_global.csv" 
  `);
};

const validateArgs = (filePath, feature, sourceFileName) => {
  if (feature === '') {
    throw new Error('Feature is missing');
  } else if (filePath === '') {
    throw new Error('File path is missing');
  }
  const fileName =
    sourceFileName === ''
      ? path.basename(filePath).toLowerCase()
      : sourceFileName.toLowerCase();
  if (!fileName.includes('id')) {
    throw new Error('Please check whether you are importing Id CSV file');
  }
};

const readFromIdFile = async (args, callback) => {
  let {
    filepath: filePath = '',
    feature: feature = '',
    sourcefilename: sourceFileName = '',
    help,
    quiet = false,
  } = args;

  if (importHelper.doHelp(help)) {
    printHelp();
    return;
  }

  feature = feature.trim();
  filePath = filePath.trim();
  validateArgs(filePath, feature, sourceFileName);

  const start = performance.now();

  if (!(await importHelper.isValidFeature(feature))) {
    console.log(`The feature "${feature}" is not available in the master`);
    return;
  }

  const skipColumns = ['tt', 'Page', 'BrandLocale'];
  const brands = await new BrandController().fetchBrands();
  const locales = await new LocaleController().fetchLocales();
  const locators =
    await new LocatorDefinitionController().fetchLocatorsByFeature(feature);
  console.log(`Importing ${path.basename(filePath)}`);

  const indexBrands = importHelper.createLookup(
    brands,
    'brandPrefix',
    'brandId'
  );
  const indexLocales = importHelper.createLookup(
    locales,
    'localePrefix',
    'localeId'
  );
  const errorMessages = [];

  let selectorDefinitions = [];

  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', async (row) => {
      selectorDefinitions.push(row);
    })
    .on('end', async () => {
      for (let iCnt = 0; iCnt < selectorDefinitions.length; iCnt++) {
        const row = selectorDefinitions[iCnt];
        let cSql = '';
        let locatorValues = [];

        for (let [key, locatorModifiedValue] of Object.entries(row)) {
          if (skipColumns.includes(key.trim())) {
            continue;
          }

          const [bPrefix, lPrefix] = key.split('-');
          const brand_id = importHelper.findIdByPrefix(bPrefix, indexBrands);
          const locale_id = importHelper.findIdByPrefix(lPrefix, indexLocales);

          if (brand_id === null) {
            errorMessages.push(`Brand '${bPrefix}' is missing in master`);
            continue;
          }

          if (locale_id === null) {
            errorMessages.push(`Locale '${lPrefix}' is missing in master`);
            continue;
          }

          let insertParam = [];
          const locatorKey = row['BrandLocale']?.trim();
          const page = row['Page'];
          const locatorNewValue = locatorModifiedValue.trim();

          if (locatorKey === '') {
            errorMessages.push('Locator key cannot be empty');
            continue;
          }
          const record = importHelper.findRecordByKey(
            locators,
            key,
            'locator_key',
            locatorKey
          );
          let locatorInStore = [];
          if (record !== null && record !== undefined) {
            locatorInStore = [record];
          }

          Logger.log(`Importing ${locatorKey} of ${key}`, quiet);

          if (locatorInStore.length >= 1) {
            // Insert history table if the locator value is changed
            const locatorInStoreValue = locatorInStore[0].locator_value.trim();
            const locatorId = locatorInStore[0].locator_definition_id;
            const locatorInStoreKey = locatorInStore[0].locator_key;

            if (
              locatorInStoreValue !== locatorNewValue ||
              (locatorInStoreKey.toLowerCase() === locatorKey.toLowerCase() &&
                locatorInStoreKey !== locatorKey)
            ) {
              cSql = `insert into history_locator_definitions
                    (locator_definition_id, locator_key, locator_old_value,
                    locator_new_value, feature, created_by) values
                    (?, ?, ?, ?, ?, ?);`;
              insertParam = [
                locatorId,
                locatorKey,
                locatorInStoreValue,
                locatorNewValue,
                feature,
                userId,
              ];
              await db.MySQLProvider.insertRecord(cSql, insertParam);

              // Update the locator definition table with new value
              cSql = `update locator_definitions set locator_value=?,
                      locator_key = ?, modified_by = ?, modified_on = now()
                      where locator_definition_id= ?`;
              insertParam = [locatorNewValue, locatorKey, userId, locatorId];
              await db.MySQLProvider.insertRecord(cSql, insertParam);
            }
          } else {
            // No matching record so insert the record using bulk insert
            locatorValues.push({
              brand_id: brand_id,
              locale_id: locale_id,
              brand_locale: key,
              locator_key: locatorKey,
              locator_value: locatorNewValue,
              feature: feature,
              page: page?.trim(),
              created_by: userId,
            });
          }
        }

        if (locatorValues.length > 0) {
          cSql = `insert into locator_definitions (brand_id, locale_id, 
                    brand_locale, locator_key, locator_value, 
                    feature, page, created_by) values ?`;

          const batch = locatorValues.map((record) => [
            record.brand_id,
            record.locale_id,
            record.brand_locale,
            record.locator_key,
            record.locator_value,
            record.feature,
            record.page,
            record.created_by,
          ]);

          await db.MySQLProvider.executeQuery(cSql, [batch]);
        }
      }
      if (errorMessages.length > 0) {
        console.log(Util.removeDuplicateEntries(errorMessages).join('\n'));
      }
      const end = performance.now();
      console.log(
        `Processed ${selectorDefinitions.length} rows in ${Util.timetaken(
          start,
          end
        )}`
      );
      db.MySQLProvider.disconnect();
      if (callback !== undefined) {
        callback(null, 'ok');
      }
    })
    .on('error', function (error) {
      db.MySQLProvider.disconnect();
      console.log(error.message);
    });
};

module.exports = readFromIdFile;
