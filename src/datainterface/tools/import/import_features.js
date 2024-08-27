const db = require('../../../utilities/db/mysql/mysql_provider');
const dd = require('../../data/deployment_data');
const importHelper = require('./import_helper');
const Logger = require('../../../utilities/logger');
const Util = require('../../../utilities/util');

const { userId } = Util.getEnvironmentVariables();

const printHelp = () => {
  console.log(`
  Usage: node import_selector.js --method "importFeatures"

  importFeatures method is used to import features from deployment file to DB
  
  --help       Show this help message and exit
  --quiet      Suppress verbose message 
  
  Examples:
  node import_selector.js --method "importFeatures" 
  `);
};

async function importFeatures(args) {
  let { help, quiet = false } = args;

  if (importHelper.doHelp(help)) {
    printHelp();
    return;
  }

  console.log(`Importing various features`);

  for (let i = 0; i < dd.features.length; i++) {
    let feature = dd.features[i][0];
    let isActive = dd.features[i][1];
    let params = [];
    let cSql = '';

    let qSql = `select feature_id from features where feature_name = ?`;
    let results = await db.MySQLProvider.getValue(qSql, [feature]);

    Logger.log(`Importing ${feature}`, quiet);

    // Record exists
    if (results !== null) {
      cSql = `update features set feature_name = ?, is_active = ?,\
              modified_by = ? where feature_id = ${results}`;
      params = [feature, isActive, userId];
    } else {
      cSql = `insert into features (feature_name, created_by)\
              values (?, ?);`;
      params = [feature, userId];
    }

    await db.MySQLProvider.insertRecord(cSql, params);
  }
  db.MySQLProvider.disconnect();
}

module.exports = importFeatures;
