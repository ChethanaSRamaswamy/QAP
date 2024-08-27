/* eslint-disable camelcase */
const db = require('../../utilities/db/mysql/mysql_provider');
const DataDefinitionModel = require('../models/DataDefinitionModel');
const DataDefinitionMultiValuesController = require('./DataDefinitionMultiValuesController.js');

class DataDefinitionController {
  // TODO: Take care of region
  async fetchDataDefinitions({
    brandLocale = '',
    feature = '',
    setNo,
    region = '',
    brand = '',
    locale = '',
    key = '',
  }) {
    if (setNo === 0) {
      // No set so use the data from data_definitions table
      const params = [];
      let qSql = `select data_definition_id, data_key, data_value, dd.brand_id,
                  dd.locale_id, brand_locale, feature, page, platform, region_name, has_input_set
                  from helix.data_definitions dd inner join locales l 
                  on (dd.locale_id = l.locale_id) 
                  inner join brands b on (dd.brand_id = b.brand_id) 
                  where true`;

      if (feature !== '') {
        qSql += ' and feature = ? ';
        params.push(feature);
      }

      if (brandLocale !== '') {
        qSql += ' and brand_locale = ? ';
        params.push(brandLocale);
      }

      if (region !== '') {
        qSql += ' and region_name = ? ';
        params.push(region);
      }

      if (brand !== '') {
        qSql += ' and  b.brand_prefix = ? ';
        params.push(brand);
      }

      if (locale !== '') {
        qSql += ' and l.locale_prefix = ? ';
        params.push(locale);
      }

      if (key !== '') {
        qSql += ' and data_key = ? ';
        params.push(key);
      }

      const results = await db.MySQLProvider.executeQuery(qSql, params);
      const dataDefinitions = [];

      for (let i = 0; i < results.length; i++) {
        const {
          data_definition_id: dataId,
          data_key: dataKey,
          data_value: dataValue,
          brand_id: brandId,
          locale_id: localeId,
          brand_locale: bLocale,
          feature: fName,
          page,
          platform,
          region_name: rName,
          has_input_set: hasInputSet,
        } = results[i];

        const objDDM = new DataDefinitionModel({
          dataId,
          dataKey,
          dataValue,
          brandId,
          localeId,
          brandLocale: bLocale,
          feature: fName,
          page,
          platform,
          region: rName,
          hasInputSet,
          setNo, // No set data file/input
        });
        dataDefinitions.push(objDDM);
      }

      db.MySQLProvider.disconnect();
      return dataDefinitions;
    } else {
      // Has set values so use the data from data_definitions_multi_values table
      const objDDMVC = new DataDefinitionMultiValuesController();
      const multiDataset = await objDDMVC.fetchDataDefinitionMultiValues(
        brandLocale,
        feature,
        setNo
      );
      return multiDataset;
    }
  }
  async fetchDataDefinitionsByFeature(feature) {
    const qSql = `select brand_locale, data_key, data_value, data_definition_id
                from data_definitions where feature = ? order by brand_locale`;

    const params = [feature];
    const results = await db.MySQLProvider.executeQuery(qSql, params);

    const indexData = results.reduce((accumulator, obj) => {
      const acc = accumulator;
      const { data_definition_id, data_key, data_value, brand_locale } = obj;

      if (!acc[brand_locale]) {
        acc[brand_locale] = [];
      }

      acc[brand_locale].push({
        data_key,
        data_definition_id,
        data_value,
        brand_locale,
        feature,
      });
      return acc;
    }, {});

    db.MySQLProvider.disconnect();
    return new Map(Object.entries(indexData));
  }
}

module.exports = DataDefinitionController;
