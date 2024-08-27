const db = require('../../utilities/db/mysql/mysql_provider');
const FeatureModel = require('../models/FeatureModel');

class FeatureController {
  FeatureController() {}

  async getFeatureId(feature) {
    const qSql = `select feature_id from features where feature_name = ?`;
    const featureId = await db.MySQLProvider.getValue(qSql, [feature]);
    db.MySQLProvider.disconnect();
    return featureId;
  }

  async fetchFeatureByName(featureName) {
    const qSql = `select feature_id, feature_name, feature_prefix 
                from features where is_active = 1 and feature_name = ?`;

    const results = await db.MySQLProvider.executeQuery(qSql, [featureName]);

    db.MySQLProvider.disconnect();

    return new FeatureController().mapQueryResult(results);
  }

  async fetchFeatures() {
    const qSql = `select feature_id, feature_name, feature_prefix 
                from features where is_active = 1 order by feature_name`;

    const results = await db.MySQLProvider.executeQuery(qSql);

    db.MySQLProvider.disconnect();

    return new FeatureController().mapQueryResult(results);
  }

  mapQueryResult = (results) => {
    const features = [];

    for (let i = 0; i < results.length; i++) {
      const {
        feature_id: fId,
        feature_name: fName,
        feature_prefix: fPrefix,
      } = results[i];
      features.push(new FeatureModel(fId, fName, fPrefix));
    }
    return features;
  };
}

module.exports = FeatureController;
