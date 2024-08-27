const db = require('../../utilities/db/mysql/mysql_provider');
const AutoHealModel = require('../models/AutoHealModel');

class AutoHealController {
  AutoHealController() {}

  async fetchAutoHealData(
    brandLocale,
    featureName,
    locatorValue,
    locatorKey = ''
  ) {
    const params = [brandLocale, featureName, locatorValue];

    let sql = `select auto_heal_id, target_info, parent, previous_sibiling, 
               next_sibiling, first_child, last_child, l.locator_definition_id,
               locator_key, locator_value, brand_id, locale_id, brand_locale, feature, 
               page, platform, page_url, locator_healed_value,
               xcoordinate, ycoordinate, width, height 
               from helix.auto_heal h inner join locator_definitions l on 
               (h.locator_definition_id = l.locator_definition_id)
               where brand_locale = ? and feature = ? and locator_value = ?`;

    if (locatorKey !== '') {
      // This will be set only for duplicate selectors
      sql += ' and locator_key = ?';
      params.push(locatorKey);
    }

    const results = await db.MySQLProvider.executeQuery(sql, params);
    const autoHealData = [];

    // Ideally results array should have only one value but
    // If there are more than one locators with same value then
    // it will have more than one element
    for (let i = 0; i < results.length; i++) {
      const {
        auto_heal_id: autoHealId,
        target_info: targetInfo,
        parent,
        previous_sibiling: previousSibiling,
        next_sibiling: nextSibiling,
        first_child: firstChild,
        last_child: lastChild,
        locator_definition_id: locatorDefinitionId,
        locator_key: lKey,
        locator_value: lValue,
        brand_id: brandId,
        locale_id: localeId,
        brand_locale: bLocale,
        feature,
        page,
        platform,
        page_url: pageUrl,
        locator_healed_value: locatorHealedValue,
        xcoordinate,
        ycoordinate,
        width,
        height,
      } = results[i];

      autoHealData.push(
        new AutoHealModel(
          autoHealId,
          locatorDefinitionId,
          lKey,
          lValue.trim(),
          targetInfo,
          parent,
          previousSibiling,
          nextSibiling,
          firstChild,
          lastChild,
          brandId,
          localeId,
          bLocale,
          feature,
          page,
          platform,
          pageUrl,
          locatorHealedValue,
          xcoordinate,
          ycoordinate,
          width,
          height
        )
      );
    }

    return autoHealData;
  }

  async updateHealedData(autoHealId, locatorHealedValue) {
    const cSql =
      'update auto_heal set locator_healed_value = ? where auto_heal_id = ?';

    const params = [locatorHealedValue, autoHealId];
    await db.MySQLProvider.insertRecord(cSql, params);
  }

  async updateLocationAndDimensions(
    autoHealId,
    xcoordinate,
    ycoordinate,
    width,
    height
  ) {
    const cSql = `update auto_heal set xcoordinate = ?,
       ycoordinate = ?, width = ?, height = ?
       where auto_heal_id = ?`;

    const params = [xcoordinate, ycoordinate, width, height, autoHealId];
    await db.MySQLProvider.insertRecord(cSql, params);
  }
}

module.exports = AutoHealController;
