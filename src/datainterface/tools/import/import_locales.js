const db = require('../../../utilities/db/mysql/mysql_provider');
const dd = require('../../data/deployment_data');
const importHelper = require('./import_helper');
const Logger = require('../../../utilities/logger');
const Util = require('../../../utilities/util');

const { userId } = Util.getEnvironmentVariables();

const printHelp = () => {
  console.log(`
  Usage: node import_selector.js --method "importLocales"

  importLocales method is used to import locales from deployment file to DB
  
  --help       Show this help message and exit
  --quiet      Suppress verbose message 
  
  Examples:
  node import_selector.js --method "importLocales" 
  `);
};

async function importLocales(args) {
  let { help, quiet = false } = args;

  if (importHelper.doHelp(help)) {
    printHelp();
    return;
  }

  console.log(`Importing various locales`);

  for (let i = 0; i < dd.localeName.length; i++) {
    let localePrefix = dd.localeName[i][0];
    let region = dd.localeName[i][1];
    let locale = dd.localeName[i][2];
    let isActive = dd.localeName[i][3];
    let cSql = '';
    let params = [];

    let qSql = `select locale_id from locales where locale_name = ?`;
    let results = await db.MySQLProvider.getValue(qSql, [locale]);

    Logger.log(`Importing ${locale}`, quiet);
    params = [locale, localePrefix, region, isActive, userId];
    // Record exists
    if (results !== null) {
      cSql = `update locales set locale_name = ?, locale_prefix = ?,\
              region_name = ?, is_active = ?, modified_by = ? \
              where locale_id = ${results}`;
    } else {
      cSql = `insert into locales (locale_name, locale_prefix, region_name, is_active, created_by)\
              values (?, ?, ?, ?, ?);`;
    }
    await db.MySQLProvider.insertRecord(cSql, params);
  }
  db.MySQLProvider.disconnect();
}

module.exports = importLocales;
