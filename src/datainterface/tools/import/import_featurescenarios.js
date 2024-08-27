const db = require('../../../utilities/db/mysql/mysql_provider');
const dd = require('../../data/deployment_data');
const importHelper = require('./import_helper');
const Util = require('../../../utilities/util');
const Logger = require('../../../utilities/logger');

const { userId } = Util.getEnvironmentVariables();

const printHelp = () => {
  console.log(`
  Usage: node import_selector.js --method "importFeatureScenarios"

  importFeatureScenarios method is used to import feature's scenarios from deployment file to DB
  
  --help       Show this help message and exit
  --quiet      Suppress verbose message 
  
  Examples:
  node import_selector.js --method "importFeatureScenarios" 
  `);
};

async function importFeatureScenarios(args) {
  let { help, quiet = false } = args;

  if (importHelper.doHelp(help)) {
    printHelp();
    return;
  }

  console.log(`Importing various feature/scenario mappings`);
  let warnMessages = [];

  for (let iCnt = 0; iCnt < dd.tcName.length; iCnt++) {
    let code = dd.tcName[iCnt][0];
    let feature = dd.tcName[iCnt][1];
    let scenario = dd.tcName[iCnt][2];
    let pcTag = dd.tcName[iCnt][3];
    let mobileTag = dd.tcName[iCnt][4];
    let isActivePC = dd.tcName[iCnt][5] || 0;
    let isActiveMobile = dd.tcName[iCnt][6] || 0;
    let params = [];
    let tags = [];

    let cSql = '';

    let qSql = `select scenario_id from scenarios where scenario_name = ?`;
    let scenarioId = await db.MySQLProvider.getValue(qSql, [scenario]);
    if (scenarioId === null) {
      warnMessages.push(
        `Scenario "${scenario}" is not available in the master`
      );
      continue;
    }

    qSql = `select feature_id from features where feature_name = ?`;
    let featureId = await db.MySQLProvider.getValue(qSql, [feature]);
    if (featureId === null) {
      warnMessages.push(`Feature "${feature}" is not available in the master`);
      continue;
    }

    tags = [pcTag, mobileTag];

    for (let jCnt = 0; jCnt < tags.length; jCnt++) {
      let tag = tags[jCnt];
      let isActive = isActivePC;
      let isPC = 1;
      if (tag.toLocaleLowerCase().includes('mob')) {
        isActive = isActiveMobile;
        isPC = 0;
      }

      Logger.log(`Importing ${tag}`, quiet);
      qSql = `select feature_scenario_id from feature_scenarios\
              where feature_id = ? and scenario_id = ? and tag = ?`;
      params = [featureId, scenarioId, tag];
      let results = await db.MySQLProvider.getValue(qSql, params);

      // Record exists
      if (results !== null) {
        cSql = `update feature_scenarios set feature_scenario_code = ?, 
                is_active = ?, modified_by = ?, modified_on = now()
                where feature_scenario_id = ${results}`;
        params = [code, isActive, userId];
      } else {
        cSql = `insert into feature_scenarios (feature_id, scenario_id, feature_scenario_code, 
              tag, is_pc, is_active, created_by) values (?, ?, ?, ?, ?, ?, ?);`;
        params = [featureId, scenarioId, code, tag, isPC, isActive, userId];
      }

      await db.MySQLProvider.insertRecord(cSql, params);
    }
  }
  db.MySQLProvider.disconnect();
  if (warnMessages.length > 0) {
    console.log(Util.removeDuplicateEntries(warnMessages).join('\n'));
    process.exitCode = 1;
    // process.env.JENKINS_URL
  }
}

module.exports = importFeatureScenarios;
