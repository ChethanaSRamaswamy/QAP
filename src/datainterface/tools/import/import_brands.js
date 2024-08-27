const db = require('../../../utilities/db/mysql/mysql_provider');
const dd = require('../../data/deployment_data');
const importHelper = require('./import_helper');
const Logger = require('../../../utilities/logger');
const Util = require('../../../utilities/util');

const { userId } = Util.getEnvironmentVariables();

const printHelp = () => {
  console.log(`
  Usage: node import_selector.js --method "importBrands"

  importBrands method is used to import brands from deployment file to DB
  
  --help       Show this help message and exit
  --quiet      Suppress verbose message 
  
  Examples:
  node import_selector.js --method "importBrands" 
  `);
};

async function importBrands(args) {
  let { help, quiet = false } = args;

  if (importHelper.doHelp(help)) {
    printHelp();
    return;
  }

  console.log(`Importing various brands`);

  for (let i = 0; i < dd.brandName.length; i++) {
    let brandPrefix = dd.brandName[i][0];
    let brand = dd.brandName[i][1];
    let isActive = dd.brandName[i][2];
    let params = [];
    let cSql = '';

    let qSql = `select brand_id from brands where brand_name = ?`;
    let results = await db.MySQLProvider.getValue(qSql, [brand]);

    Logger.log(`Importing ${brand}`, quiet);
    params = [brand, brandPrefix, isActive, userId];
    // Brand exists
    if (results !== null) {
      cSql = `update brands set brand_name = ?, brand_prefix = ?,\
              is_active = ?, modified_by = ?\
              where brand_id = ${results}`;
    } else {
      cSql = `insert into brands (brand_name, brand_prefix, is_active, created_by)\
            values (?, ?, ?, ?);`;
    }
    await db.MySQLProvider.insertRecord(cSql, params);
  }
  db.MySQLProvider.disconnect();
}

module.exports = importBrands;
