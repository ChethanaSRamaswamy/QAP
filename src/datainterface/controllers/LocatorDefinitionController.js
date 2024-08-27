const db = require('../../utilities/db/mysql/mysql_provider');
const LocatorDefinitionModel = require('../models/LocatorDefinitionModel');

class LocatorDefinitionController {
  LocatorDefinitionController() {}

  async fetchLocatorDefinitions(brandLocale = '', feature = '', region = '') {
    const params = [];
    let qSql = `select locator_definition_id, locator_key, 
    locator_type, locator_value, brand_id, ld.locale_id,
    brand_locale, feature, page, platform, region_name
    from locator_definitions ld inner join locales l 
    on ( ld.locale_id = l.locale_id) where true`;

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

    const results = await db.MySQLProvider.executeQuery(qSql, params);
    const locatorDefinitions = [];

    for (let i = 0; i < results.length; i++) {
      const {
        locator_definition_id: ldId,
        locator_key: lKey,
        locator_value: lValue,
        brand_id: bId,
        locale_id: lId,
        brand_locale: bLocale,
        feature: fName,
        page,
        platform,
        region_name: rName,
      } = results[i];

      locatorDefinitions.push(
        new LocatorDefinitionModel(
          ldId,
          lKey,
          lValue.trim(),
          bId,
          lId,
          bLocale,
          fName,
          page,
          platform,
          rName
        )
      );
    }

    db.MySQLProvider.disconnect();

    return locatorDefinitions;
  }

  async fetchLocatorsByFeature(feature) {
    const qSql = `select brand_locale, locator_key, locator_value, locator_definition_id
                from locator_definitions where feature = ? order by brand_locale`;

    const params = [feature];
    const results = await db.MySQLProvider.executeQuery(qSql, params);

    const indexLocators = results.reduce((accumulator, obj) => {
      const acc = accumulator;
      const {
        locator_definition_id,
        locator_key,
        locator_value,
        brand_locale,
      } = obj;

      if (!acc[brand_locale]) {
        acc[brand_locale] = [];
      }

      acc[brand_locale].push({
        locator_key,
        locator_definition_id,
        locator_value,
      });
      return acc;
    }, {});

    db.MySQLProvider.disconnect();
    return new Map(Object.entries(indexLocators));
  }
}

module.exports = LocatorDefinitionController;
