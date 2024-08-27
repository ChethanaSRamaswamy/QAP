// INFO: disabled few lint rules as they are cleaned up in another PR
/* eslint-disable node/no-unsupported-features/node-builtins */
/* eslint-disable prefer-const */
/* eslint-disable camelcase */
const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
const { performance } = require('perf_hooks');
const Util = require('../../../utilities/util');
const db = require('../../../utilities/db/mysql/mysql_provider');
const BrandController = require('../../controllers/BrandController');
const LocaleController = require('../../controllers/LocaleController');
const DataDefinitionController = require('../../controllers/DataDefinitionController');
const importHelper = require('./import_helper');
const Logger = require('../../../utilities/logger');

const { userId } = Util.getEnvironmentVariables();

const printHelp = () => {
  console.log(`
    Usage: node import_selector.js --method "readFromDataFile" [options]
  
    readFromDataFile method is used to upload your Data CSV files
    
    Options:
    The following options are mandatory.  
    --feature    Name of the Feature you want to upload your CSV files
    --filepath   Path of the CSV file you want to upload
    
    The following option is required if you upload your file from a Jenkins job 
    --sourcefilename    Should be set from the job
    
    --help       Show this help message and exit
    --quiet      Suppress verbose message 
    
    Examples:
    node import_selector.js --method "readFromDataFile" --feature "GNAV Footer" --filepath "gnav_footer/data/tmo_newdata_global.csv" 
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
  if (!fileName.includes('data')) {
    throw new Error('Please check whether you are importing Data CSV file');
  }
};

const readFromDataFile = async (args, callback) => {
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

  let coverageInfo = [];

  const skipColumns = ['tt', 'BrandLocale'];

  const brands = await new BrandController().fetchBrands();
  const locales = await new LocaleController().fetchLocales();
  const data =
    await new DataDefinitionController().fetchDataDefinitionsByFeature(feature);

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
  let dataDefinitions = [];

  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', async (row) => {
      dataDefinitions.push(row);
    })
    .on('end', async () => {
      for (let iCnt = 0; iCnt < dataDefinitions.length; iCnt++) {
        const row = dataDefinitions[iCnt];
        let cSql = '';
        const dataValues = [];

        for (let [key, dataModifiedValue] of Object.entries(row)) {
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
          const dataKey = row['BrandLocale']?.trim();

          const dataNewValue = dataModifiedValue.trim();

          if (dataKey.includes('spec_')) {
            let tag = dataKey.split('_')[1]?.toUpperCase();
            coverageInfo.push([bPrefix, lPrefix, tag, parseInt(dataNewValue)]);
            continue;
          }

          let record = importHelper.findRecordByKey(
            data,
            key,
            'data_key',
            dataKey
          );

          let dataInStore = [];
          if (record !== null && record !== undefined) {
            dataInStore = [record];
          }

          Logger.log(`Importing ${dataKey} of ${key}`, quiet);

          if (dataInStore.length >= 1) {
            // Insert history table if the data value is changed
            let dataInStoreValue = dataInStore[0].data_value.trim();
            let dataId = dataInStore[0].data_definition_id;
            const dataInStoreKey = dataInStore[0].data_key;

            if (
              dataInStoreValue !== dataNewValue ||
              (dataInStoreKey.toLowerCase() === dataKey.toLowerCase() &&
                dataInStoreKey !== dataKey)
            ) {
              cSql = `insert into history_data_definitions
                    (data_definition_id, data_key, data_old_value,
                    data_new_value, feature, created_by) values
                    (?, ?, ?, ?, ?, ?);`;
              insertParam = [
                dataId,
                dataKey,
                dataInStoreValue,
                dataNewValue,
                feature,
                userId,
              ];
              await db.MySQLProvider.insertRecord(cSql, insertParam);

              // Update the data definition table with new value
              // console.log(dataCurrentValue, dataNewValue, dataId);
              cSql = `update data_definitions set data_value=?,
                      data_key = ?, modified_by = ?, modified_on = now()
                      where data_definition_id = ?`;
              insertParam = [dataNewValue, dataKey, userId, dataId];
              await db.MySQLProvider.insertRecord(cSql, insertParam);
            }
          } else {
            // No matching record so insert the record using bulk insert
            dataValues.push({
              brand_id: brand_id,
              locale_id: locale_id,
              brand_locale: key,
              data_key: dataKey,
              data_value: dataNewValue,
              feature: feature,
              created_by: userId,
            });
          }
        }

        if (dataValues.length > 0) {
          cSql = `insert into data_definitions (brand_id, locale_id, 
                  brand_locale, data_key, data_value, feature, created_by) values ?`;

          const batch = dataValues.map((record) => [
            record.brand_id,
            record.locale_id,
            record.brand_locale,
            record.data_key,
            record.data_value,
            record.feature,
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
        `Processed ${dataDefinitions.length} rows in ${Util.timetaken(
          start,
          end
        )}`
      );

      db.MySQLProvider.disconnect();

      if (coverageInfo.length > 0) {
        // Importing test coverage details
        // await importTestCoverage({ coverageInfo, quiet });
      }

      if (callback !== undefined) {
        callback(null, 'ok');
      }
    })
    .on('error', function (error) {
      db.MySQLProvider.disconnect();
      console.log(error.message);
    });
};

module.exports = readFromDataFile;
