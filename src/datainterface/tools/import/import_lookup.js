const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
const db = require('../../../utilities/db/mysql/mysql_provider');
const Util = require('../../../utilities/util');
const BrandController = require('../../controllers/BrandController');
const LocaleController = require('../../controllers/LocaleController');
const importHelper = require('./import_helper');
const Logger = require('../../../utilities/logger');

const printHelp = () => {
  console.log(`
  Usage: node import_selector.js --method "readFromLookupFile" [options]

  readFromLookupFile method is used to upload your Lookup CSV file
  
  Options:
  The following options are mandatory.  
  --filePath   Path of the CSV file you want to upload
  
  The following option is required if you upload your file from a Jenkins job 
  --sourcefilename    Should be set from the job
  
  --help       Show this help message and exit
  --quiet      Suppress verbose message 
  
  Examples:
  node import_selector.js --method "readFromLookupFile" --filepath "helix-app/src/automation/data/Lookup.csv" 
  `);
};

const validateArgs = (filePath, sourceFileName = '') => {
  if (filePath === '') {
    throw new Error('File path is missing');
  }
  let fileName =
    sourceFileName === ''
      ? path.basename(filePath).toLowerCase()
      : sourceFileName.toLowerCase();
  if (!fileName.includes('lookup')) {
    throw new Error('Please check whether you are importing Lookup CSV file');
  }
};

async function readFromLookupFile(args, callback) {
  let {
    filepath: filePath = '',
    sourcefilename: sourceFileName = '',
    help,
    quiet = false,
  } = args;

  if (importHelper.doHelp(help)) {
    printHelp();
    return;
  }

  filePath = filePath.trim();
  validateArgs(filePath, sourceFileName);
  console.log(`Importing lookup file - ${path.basename(filePath)}`);

  let brandLocaleDefinitions = [];

  fs.createReadStream(filePath)
    .pipe(csv({ mapHeaders: ({ header, index }) => `${header}_${index}` })) //  { headers: false, skipLines: 1 }
    .on('data', async (row) => {
      brandLocaleDefinitions.push(row);
    })
    .on('end', async () => {
      // TODO: Check duplicates and insert, don't truncate the table
      await db.MySQLProvider.executeQuery('truncate brand_locales');

      const skipColumns = ['tt_0', 'BrandLocale_1', 'GN-GN_2'];

      const brands = await new BrandController().fetchBrands();
      const locales = await new LocaleController().fetchLocales();

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
      let siteDefinitions = {};

      for (let iCnt = 0; iCnt < brandLocaleDefinitions.length; iCnt++) {
        let row = brandLocaleDefinitions[iCnt];

        let colName = '';
        let column = row['BrandLocale_1'];
        let doBrandCheck = false;

        if (column === 'brandLocale') {
          colName = 'brand_locale_prefix';
          doBrandCheck = true;
        } else if (column === 'produrl') {
          colName = 'prod_url';
        } else if (column === 'stageurlActual') {
          colName = 'stage_url';
        } else if (column === 'localeInfo') {
          colName = 'language';
        }

        for (let [key, value] of Object.entries(row)) {
          if (skipColumns.includes(key.trim())) {
            continue;
          }
          if (doBrandCheck) {
            const [bPrefix, lPrefix] = value.split('-');
            let brand_id = importHelper.findIdByPrefix(bPrefix, indexBrands);
            let locale_id = importHelper.findIdByPrefix(lPrefix, indexLocales);

            if (brand_id === null) {
              errorMessages.push(`Brand '${bPrefix}' is missing in master`);
              continue;
            }

            if (locale_id === null) {
              errorMessages.push(`Locale '${lPrefix}' is missing in master`);
              continue;
            }

            siteDefinitions[key] = {
              brand_id,
              locale_id,
            };
          }
          if (siteDefinitions[key] !== undefined) {
            siteDefinitions[key][colName] = value;
          }
        }
      }

      for (let [key, value] of Object.entries(siteDefinitions)) {
        let {
          brand_locale_prefix,
          brand_id,
          locale_id,
          prod_url,
          stage_url,
          language = 'en_EN',
        } = value;
        let cSql = `insert into brand_locales\
        (brand_id, locale_id, brand_locale_prefix, prod_url, stage_url, language) values\
         (?, ?, ?, ?, ?, ?);`;

        Logger.log(`Importing ${brand_locale_prefix}`, quiet);
        let insertParam = [
          brand_id,
          locale_id,
          brand_locale_prefix,
          prod_url,
          stage_url,
          language,
        ];
        await db.MySQLProvider.insertRecord(cSql, insertParam);
      }

      await db.MySQLProvider.disconnect();
      if (errorMessages.length > 0) {
        console.log(Util.removeDuplicateEntries(errorMessages).join('\n'));
      }
      if (callback !== undefined) {
        callback(null, 'ok');
      }
    })
    .on('error', function (error) {
      db.MySQLProvider.disconnect();
      console.log(error.message);
    });
}

module.exports = readFromLookupFile;
