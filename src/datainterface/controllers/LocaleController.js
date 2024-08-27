const db = require('../../utilities/db/mysql/mysql_provider');
const LocaleModel = require('../models/LocaleModel');

class LocaleController {
  localeController() {}

  async fetchLocales() {
    const qSql = `select locale_id, locale_name, locale_prefix, region_name,
    elc_code from locales where is_active = 1 order  by locale_name`;

    const results = await db.MySQLProvider.executeQuery(qSql);

    const locales = [];

    for (let i = 0; i < results.length; i++) {
      const {
        locale_id: lId,
        locale_name: lName,
        locale_prefix: lPrefix,
        region_name: rName,
        elc_code: elcCode,
      } = results[i];
      locales.push(new LocaleModel(lId, lName, lPrefix, rName, elcCode));
    }

    db.MySQLProvider.disconnect();

    return locales;
  }
}

module.exports = LocaleController;
