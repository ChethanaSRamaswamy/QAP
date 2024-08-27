const db = require('../../utilities/db/mysql/mysql_provider');
const TestCoverageModel = require('../models/TestCoverageModel');
const BrandModel = require('../models/BrandModel');
const LocaleModel = require('../models/LocaleModel');
const FeatureScenarioModel = require('../models/FeatureScenarioModel');

class TestCoverageController {
  TestCoverageController() {}

  // eslint-disable-next-line max-params
  async fetchTestCoverageInfo({
    brandPrefix = '',
    localePrefix = '',
    featuresList = [],
    pcTag = '',
    mobileTag = '',
    region = '',
    testCoverageStatus = [1, 2, 3],
  }) {
    const params = [];
    const tags = [];
    const testCovarages = [];
    let qSql = `select b.brand_id, b.brand_name, b.brand_prefix, l.locale_id, l.locale_prefix, region_name, l.locale_name, 
                f.feature_id, f.feature_name, s.scenario_id, s.scenario_name,fs.feature_scenario_id, fs.feature_id, fs.scenario_id, 
                fs.feature_scenario_code, fs.tag, fs.is_pc 'fsispc', tc.is_pc 'tcispc', tc.is_active 'tcisactive', 
                tc.test_coverage_id, concat(brand_prefix, '-', locale_prefix) 'brand_locale'  
                from test_coverage tc 
                inner join brands b on (tc.brand_id = b.brand_id) 
                inner join locales l on (tc.locale_id = l.locale_id) 
                inner join feature_scenarios fs on (tc.feature_scenario_id = fs.feature_scenario_id) 
                inner join scenarios s on (s.scenario_id = fs.scenario_id)
                inner join features f on (fs.feature_id = f.feature_id) 
                where f.is_active = 1  and s.is_active = 1 and fs.is_active = 1
                and b.is_active = 1 and l.is_active = 1`;

    qSql += ' and tc.is_active in ( ? ) ';
    params.push(testCoverageStatus);

    if (brandPrefix !== '') {
      qSql += ' and b.brand_prefix = ? ';
      params.push(brandPrefix);
    }
    if (localePrefix !== '') {
      qSql += ' and l.locale_prefix = ? ';
      params.push(localePrefix);
    }
    if (featuresList.length > 0) {
      qSql += ' and f.feature_name in ( ? ) ';
      params.push(featuresList);
    }

    if (region !== '') {
      qSql += ' and region_name = ? ';
      params.push(region);
    }

    if (pcTag !== '') {
      tags.push(`'${pcTag}'`);
    }
    if (mobileTag !== '') {
      tags.push(`'${mobileTag}'`);
    }

    if (tags.length !== 0) {
      qSql += ` and tag in ( ${tags.join(',')} ) `;
    }

    qSql += ` order by region_name, brand_name, locale_name, feature_name, scenario_name, tag `;

    const results = await db.MySQLProvider.executeQuery(qSql, params);
    db.MySQLProvider.disconnect();

    if (results.length === 0) {
      return testCovarages;
    }

    for (let i = 0; i < results.length; i++) {
      const {
        test_coverage_id: tcId,
        brand_id: bId,
        brand_name: bName,
        brand_prefix: bPrefix,
        locale_id: lId,
        locale_prefix: lPrefix,
        region_name: rName,
        locale_name: lName,
        feature_id: fId,
        feature_name: fName,
        scenario_id: sId,
        scenario_name: sName,
        feature_scenario_id: fsId,
        feature_scenario_code: fsCode,
        fsispc,
        tcispc,
        tag,
        tcisactive,
      } = results[i];

      testCovarages.push(
        new TestCoverageModel(
          tcId,
          new BrandModel(bId, bName, bPrefix),
          new LocaleModel(lId, lName, lPrefix, rName),
          new FeatureScenarioModel(
            fsId,
            fId,
            fName,
            sId,
            sName,
            fsCode,
            tag,
            fsispc,
            true
          ),
          tcispc,
          tcisactive
        )
      );
    }
    db.MySQLProvider.disconnect();

    return testCovarages;
  }

  async disableTestCoverage(tags, brandId, localeId) {
    const params = [tags, brandId, localeId];
    const qSql = `update test_coverage tc inner join feature_scenarios fs
                on (tc.feature_scenario_id = fs.feature_scenario_id)
                set tc.is_active = 0 where tag in ( ? )
                and brand_id = ? and locale_id = ?`;

    await db.MySQLProvider.insertRecord(qSql, params);

    db.MySQLProvider.disconnect();
  }
}

module.exports = TestCoverageController;
