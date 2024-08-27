const db = require('../../utilities/db/mysql/mysql_provider');
const DataDefinitionModel = require('../models/DataDefinitionModel');

class DataDefinitionMultiValuesController {
  async fetchDataDefinitionMultiValues(brandLocale, featureName, setNo) {
    const qSql = `select a.data_definition_multi_values_id, a.data_definition_id,
    a.data_key, a.data_value, a.set_no, b.brand_id, b.locale_id, b.brand_locale,
    b.feature, b.page, b.platform, b.has_input_set from data_definitions_multi_values a
    inner join data_definitions b on (a.data_definition_id = b.data_definition_id)
    where brand_locale = ? and feature = ? and set_no = ?`;

    const params = [brandLocale, featureName, setNo];
    const results = await db.MySQLProvider.executeQuery(qSql, params);
    const dataDefinitions = [];
    // console.log(results);
    for (let i = 0; i < results.length; i++) {
      const {
        data_definition_id: dataId,
        data_key: dataKey,
        data_value: dValue,
        brand_id: brandId,
        locale_id: localeId,
        feature,
        page,
        platform,
        has_input_set: hasInputSet,
      } = results[i];

      const dataValue = dValue.trim();
      const objDDM = new DataDefinitionModel({
        dataId,
        dataKey,
        dataValue,
        brandId,
        localeId,
        brandLocale,
        feature,
        page,
        platform,
        hasInputSet,
        setNo,
      });
      dataDefinitions.push(objDDM);
    }

    db.MySQLProvider.disconnect();
    return dataDefinitions;
  }
}

module.exports = DataDefinitionMultiValuesController;
