const path = require('path');
const db = require('../../../utilities/db/mysql/mysql_provider');
const xlsx = require('xlsx');
const importHelper = require('./import_helper');
const importTestCoverage = require('./import_test_coverage');
const Logger = require('../../../utilities/logger');
const Util = require('../../../utilities/util');

const { userId } = Util.getEnvironmentVariables();

const printHelp = () => {
  console.log(`
  Usage: node import_selector.js --method "readDataFromMultiFile" [options]

  readDataFromMultiFile method is used to upload your Multi_data xlsx file
  
  Options:
  The following options are mandatory.  
  --feature    Name of the Feature you want to upload your XLSX file
  --filepath   Path of the XLSX file you want to upload
  
  The following option is required if you upload your file from a Jenkins job 
  --sourcefilename    Should be set from the job
  
  --help       Show this help message and exit
  --quiet      Suppress verbose message 
  
  Examples:
  node import_selector.js --method "readDataFromMultiFile" --feature "ROM" --filepath "rom/data/rom_multi_newdata_global.xlsx" 
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
  if (!fileName.includes('multi')) {
    throw new Error(
      'Please check whether you are importing Multidata CSV file'
    );
  }
};

async function readDataFromMultiFile(args) {
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

  if (!(await importHelper.isValidFeature(feature))) {
    console.log(`The feature "${feature}" is not available in the master`);
    return;
  }

  console.log(
    `Importing ${feature}'s multi data file - ${path.basename(filePath)}`
  );

  const file = xlsx.readFile(filePath);

  let masterDataDefinitions = [];
  let errorMessage = '';

  let sheets = file.SheetNames; // Get all the sheet names
  sheets = sheets.filter((item) => item !== 'master'); // Remove master sheet from the list

  // Process master sheet first
  masterDataDefinitions = xlsx.utils.sheet_to_json(file.Sheets['master'], {
    defval: '',
  });

  let coverageInfo = [];
  for (let iCnt = 0; iCnt < masterDataDefinitions.length; iCnt++) {
    let row = masterDataDefinitions[iCnt];

    for (let [brandLocalePrefix, dataNewValue] of Object.entries(row)) {
      let qSql = `select locale_id, brand_id from locales join brands where\
                  concat(brand_prefix, '-', locale_prefix) = ?`;

      let params = [brandLocalePrefix];
      let results = [];

      if (brandLocalePrefix.includes('-')) {
        results = await db.MySQLProvider.executeQuery(qSql, params);
      }

      for (let i = 0; i < results.length; i++) {
        let { locale_id, brand_id } = results[i];
        if (locale_id !== undefined && brand_id !== undefined) {
          let cSql = '';
          let insertParam = [];
          let dataKey = row['BrandLocale'].trim();

          Logger.log(`Importing ${dataKey} of ${brandLocalePrefix}`, quiet);

          const [bPrefix, lPrefix] = brandLocalePrefix.split('-');
          if (dataKey.includes('spec_')) {
            let tag = dataKey.split('_')[1]?.toUpperCase();
            coverageInfo.push([bPrefix, lPrefix, tag, parseInt(dataNewValue)]);
            continue;
          }

          // Find whether the data exists
          let qSql = `select data_value, data_definition_id from data_definitions where\
                   feature=? and brand_id=? and locale_id=? and data_key=?`;

          params = [feature, brand_id, locale_id, dataKey];
          let currentDataDetails = await db.MySQLProvider.executeQuery(
            qSql,
            params
          );

          if (currentDataDetails.length >= 1) {
            // Insert into history table if the data value is changed
            let dataCurrentValue = currentDataDetails[0].data_value;
            let dataId = currentDataDetails[0].data_definition_id;

            if (dataCurrentValue !== dataNewValue) {
              cSql = `insert into history_data_definitions\
                  (data_definition_id, data_key, data_old_value,\
                  data_new_value, feature, created_by) values\
                  (?, ?, ?, ?, ?, ?);`;
              insertParam = [
                dataId,
                dataKey,
                dataCurrentValue,
                dataNewValue.toString().trim(),
                feature,
                userId,
              ];
              await db.MySQLProvider.insertRecord(cSql, insertParam);

              // Update the locator definition table with new value
              // console.log(dataCurrentValue, dataNewValue, dataId);
              cSql = `update data_definitions set data_value=?, modified_by=?, modified_on=now()\
                  where data_definition_id=?`;
              insertParam = [dataNewValue, userId, dataId];
              // await db.MySQLProvider.insertRecord(cSql, insertParam);
            }
          } else {
            cSql = `insert into data_definitions\
                (brand_id, locale_id, brand_locale, data_key,\
                data_value, feature, has_input_set, created_by ) values\
                (?, ?, ?, ?, ?, ?, ?, ?);`;

            insertParam = [
              brand_id,
              locale_id,
              brandLocalePrefix,
              dataKey.trim(),
              dataNewValue.toString().trim(),
              feature,
              1,
              userId,
            ];

            await db.MySQLProvider.insertRecord(cSql, insertParam);
          }
        }
      }
    }
  }

  // Process set values
  for (let iSet = 0; iSet < sheets.length; iSet++) {
    let dataDefinitions = xlsx.utils.sheet_to_json(file.Sheets[sheets[iSet]], {
      defval: '',
    });

    console.log(`\nProcessing '${sheets[iSet]}' sheet...`);
    let brandLocales =
      "'" +
      Object.keys(dataDefinitions[0])
        .filter((item) => item.includes('-'))
        .join("', '") +
      "'";

    let qSql = '';
    let params = [];
    let results = [];
    // Sheet name should be set-3
    let setNo = sheets[iSet].split('-')[1];

    qSql = `delete  a FROM data_definitions_multi_values a inner join data_definitions b
            on (a.data_definition_id = b.data_definition_id) where b.feature = ? and
            b.brand_locale in ( ${brandLocales}) and a.set_no = ?`;
    params = [feature, setNo];
    results = await db.MySQLProvider.executeQuery(qSql, params);
    /*     
    qSql = `select  brand_locale, ifnull(max(a.set_no) + 1 , 1) 'set_no'\
                FROM data_definitions_multi_values a inner join\
                data_definitions b on (a.data_definition_id = b.data_definition_id)\
                where b.feature = ? and b.brand_locale in ( ${brandLocales}) group by brand_locale`;
    params = [feature];
      results = await db.MySQLProvider.executeQuery(qSql, params);
    let maxSet = {};
    results = results.map((item) => {
      maxSet[item.brand_locale] = item.set_no;
      return { [item.brand_locale]: item.set_no };
    }); 
    */

    for (let iCnt = 0; iCnt < dataDefinitions.length; iCnt++) {
      let row = dataDefinitions[iCnt];

      for (let [brandLocalePrefix, dataSetValue] of Object.entries(row)) {
        // TODO: this query will be executed multiple values other than brand-locale
        qSql = `select locale_id, brand_id from locales join brands where\
            concat(brand_prefix, '-', locale_prefix) = ?`;

        results = [];
        if (brandLocalePrefix.includes('-')) {
          params = [brandLocalePrefix];
          results = await db.MySQLProvider.executeQuery(qSql, params);
        }

        for (let i = 0; i < results.length; i++) {
          let { locale_id, brand_id } = results[i];
          if (locale_id !== undefined && brand_id !== undefined) {
            let cSql = '';
            let insertParam = [];
            let dataKey = row['BrandLocale'];
            console.log(
              'Importing ' + row['BrandLocale'],
              ' of ',
              brandLocalePrefix
            );

            /*   setNo =
              typeof maxSet[brandLocalePrefix] === 'undefined'
                ? 1
                : maxSet[brandLocalePrefix]; */

            // Find whether the data exists
            qSql = `select data_value, data_definition_id from data_definitions where\
                     feature=? and brand_id=? and locale_id=? and data_key=?`;

            params = [feature, brand_id, locale_id, dataKey];
            let currentDataDetails = await db.MySQLProvider.executeQuery(
              qSql,
              params
            );

            if (currentDataDetails.length >= 1) {
              let dataId = currentDataDetails[0].data_definition_id;

              cSql = `insert into data_definitions_multi_values\
                  (data_definition_id, data_key, data_value, set_no, created_by) values\
                  (?, ?, ?, ?, ?);`;

              insertParam = [
                dataId,
                dataKey.trim(),
                dataSetValue.toString().trim(),
                setNo,
                userId,
              ];

              await db.MySQLProvider.insertRecord(cSql, insertParam);
            } else {
              errorMessage +=
                row['BrandLocale'] +
                ' of ' +
                brandLocalePrefix +
                ' in ' +
                sheets[iSet] +
                ' is not in master sheet\n';
            }
          }
        }
      }
    }
  }
  if (errorMessage !== '') {
    console.log('\nPlease verify the following issues\n' + errorMessage);
  }

  db.MySQLProvider.disconnect();

  if (coverageInfo.length > 0) {
    console.log('\nImporting test coverage details...\n');
    importTestCoverage({ coverageInfo, quiet });
  }
}

module.exports = readDataFromMultiFile;
