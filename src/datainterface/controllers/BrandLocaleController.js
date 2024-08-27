const db = require('../../utilities/db/mysql/mysql_provider');
const Util = require('../../utilities/util');
const BrandLocaleModel = require('../models/BrandLocaleModel');

class BrandLocaleController {
  constructor() {}
  /**
   * enableSyntheticTests is used to enable or disable a synthetic test.
   * @param {String} device - PC or Mobile.
   * @param {String} brandLocale - Brand market. E.g.: "AV-US".
   * @param {Number} enable - Enable/disable flag. It is either 1 or 0.
   * @returns {void}
   */
  async enableSyntheticTests(device, brandLocale, enable) {
    const { userId } = Util.getEnvironmentVariables();

    let stCol = 'enable_pc_sm';
    if (device === Util.devices.mobile) {
      stCol = 'enable_mob_sm';
    }

    const cSql = `update brand_locales set modified_on = now(), 
    modified_by = ?, ${stCol} = ? where brand_locale_prefix = ?`;

    const params = [userId, enable, brandLocale];
    await db.MySQLProvider.insertRecord(cSql, params);
    db.MySQLProvider.disconnect();
  }

  /**
   * fetchSTAlertStatusOfASite is used to get the details of synthetic test
   * notification of a brand site.
   * @param {String} device - PC or Mobile.
   * @param {String} brandLocale - Brand market. E.g.: "AV-US".
   * @returns {Number} - A flag (0 or 1) is returned.
   */
  async fetchSTAlertStatusOfASite(device, brandLocale) {
    let stCol = 'enable_pc_sm';
    if (device === Util.devices.mobile) {
      stCol = 'enable_mob_sm';
    }
    const qSql = `select ${stCol} 'STStatus' from brand_locales where brand_locale_prefix = ?`;
    const stStatus = await db.MySQLProvider.getValue(qSql, [brandLocale]);
    db.MySQLProvider.disconnect();
    return stStatus;
  }

  /**
   * fetchSTAlertStatuses is used to get the details of synthetic test
   * notifications for a set of sites.
   * @param {String} brandLocales - Brand market. E.g.: "AV-US".
   * @returns {Object} - An array of BrandLocaleModel objects.
   */
  async fetchSTAlertStatuses(brandLocales) {
    const qSql = `select brand_locales_id, brand_name, brand_prefix,
                  locale_name, locale_prefix, brand_locale_prefix,
                  enable_mob_sm, enable_pc_sm from brand_locales bl 
                  inner join locales l on (l.locale_id = bl.locale_id)
                  inner join brands b on (b.brand_id = bl.brand_id)
                  where l.is_active = 1 and b.is_active = 1 
                  and brand_locale_prefix in ( ? )`;
    const params = [brandLocales];
    const results = await db.MySQLProvider.executeQuery(qSql, params);

    const sites = [];
    for (let iCnt = 0; iCnt < results.length; iCnt++) {
      const {
        brand_locales_id: brandLocaleId,
        enable_mob_sm: hasMobileSM,
        enable_pc_sm: hasPCSM,
        brand_name: brandName,
        locale_name: localeName,
        brand_prefix: brandPrefix,
        locale_prefix: localePrefix,
        brand_locale_prefix: brandLocale,
      } = results[iCnt];

      sites.push(
        new BrandLocaleModel({
          brandLocaleId,
          brandName,
          brandPrefix,
          localeName,
          localePrefix,
          brandLocale,
          hasPCSM,
          hasMobileSM,
        })
      );
    }

    db.MySQLProvider.disconnect();
    return sites;
  }
}

module.exports = BrandLocaleController;
