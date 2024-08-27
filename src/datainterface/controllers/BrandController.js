const db = require('../../utilities/db/mysql/mysql_provider');
const BrandModel = require('../models/BrandModel');

class BrandController {
  BrandController() {}

  async fetchBrands() {
    const qSql = `select brand_id, brand_name, brand_prefix, elc_code from
                  brands where is_active = 1 order by brand_name`;

    const results = await db.MySQLProvider.executeQuery(qSql);

    const brands = [];

    for (let i = 0; i < results.length; i++) {
      const {
        brand_id: brandId,
        brand_name: brandName,
        brand_prefix: brandPrefix,
        elc_code: elcCode,
      } = results[i];
      brands.push(new BrandModel(brandId, brandName, brandPrefix, elcCode));
    }

    db.MySQLProvider.disconnect();
    return brands;
  }
}

module.exports = BrandController;
