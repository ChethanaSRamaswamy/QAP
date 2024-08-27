const db = require('../../utilities/db/mysql/mysql_provider');
const FeatureScenarioModel = require('../models/FeatureScenarioModel');

class FeatureScenarioController {
  FeatureScenarioController() {}

  async fetchFeatureScenarios(
    featureId = '',
    scenarioId = '',
    featureName = ''
  ) {
    const params = [];
    let qSql = `select feature_scenario_id, f.feature_id, f.feature_name, s.scenario_id, s.scenario_name,
                feature_scenario_code, tag, fs.is_pc, fs.is_active
                from feature_scenarios fs
                inner join features f on (fs.feature_id = f.feature_id)
                inner join scenarios s on (fs.scenario_id = s.scenario_id) where true`;

    if (featureId !== '') {
      qSql += ' and f.feature_id = ? ';
      params.push(featureId);
    }

    if (scenarioId !== '') {
      qSql += ' and s.scenario_id = ? ';
      params.push(scenarioId);
    }

    if (featureName !== '') {
      qSql += ' and f.feature_name = ? ';
      params.push(featureName);
    }

    qSql += ' order by f.feature_name, s.scenario_name, tag';

    const results = await db.MySQLProvider.executeQuery(qSql, params);
    const featureScenarios = [];

    for (let i = 0; i < results.length; i++) {
      const {
        feature_scenario_id: fsId,
        feature_id: fId,
        feature_name: fName,
        scenario_id: sId,
        scenario_name: sName,
        feature_scenario_code: fsCode,
        tag,
        is_pc: isPC,
        is_active: isActive,
      } = results[i];

      featureScenarios.push(
        new FeatureScenarioModel(
          fsId,
          fId,
          fName,
          sId,
          sName,
          fsCode,
          tag,
          isPC,
          isActive
        )
      );
    }

    db.MySQLProvider.disconnect();

    return featureScenarios;
  }

  async disableFeatureScenarios(tags) {
    const params = [];
    const qSql = `update feature_scenarios set is_active = 0
                where tag in ( ? )`;
    params.push(tags);

    await db.MySQLProvider.insertRecord(qSql, params);

    db.MySQLProvider.disconnect();
  }
}

/*
(async function () {
  let op = await new FeatureScenarioController().fetchFeatureScenarios();
  console.log(op);
})();
*/

module.exports = FeatureScenarioController;
