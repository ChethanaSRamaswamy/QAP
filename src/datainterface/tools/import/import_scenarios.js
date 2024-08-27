const db = require('../../../utilities/db/mysql/mysql_provider');
const dd = require('../..//data/deployment_data');
const importHelper = require('./import_helper');
const Logger = require('../../../utilities/logger');
const Util = require('../../../utilities/util');

const { userId } = Util.getEnvironmentVariables();

const printHelp = () => {
  console.log(`
  Usage: node import_selector.js --method "importScenarios"

  importScenarios method is used to import scenarios from deployment file to DB
  
  --help       Show this help message and exit
  --quiet      Suppress verbose message 
  
  Examples:
  node import_selector.js --method "importScenarios" 
  `);
};

async function importScenarios(args) {
  let { help, quiet = false } = args;

  if (importHelper.doHelp(help)) {
    printHelp();
    return;
  }

  console.log(`Importing various scenarios`);

  for (let i = 0; i < dd.scenarios.length; i++) {
    let scenario = dd.scenarios[i][0];
    let isActive = dd.scenarios[i][1];
    let params = [];
    let cSql = '';

    let qSql = `select scenario_id from scenarios where scenario_name = ?`;

    let results = await db.MySQLProvider.getValue(qSql, [scenario]);

    Logger.log(`Importing ${scenario}`, quiet);

    // Record exists
    if (results !== null) {
      cSql = `update scenarios set scenario_name = ?, is_active = ?,\
              modified_by = ? where scenario_id = ${results}`;
      params = [scenario, isActive, userId];
    } else {
      cSql = `insert into scenarios (scenario_name, created_by)\
              values (?, ?);`;
      params = [scenario, userId];
    }
    await db.MySQLProvider.insertRecord(cSql, params);
  }
  db.MySQLProvider.disconnect();
}

module.exports = importScenarios;
