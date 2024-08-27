const BrandController = require('../controllers/BrandController');
const LocaleController = require('../controllers/LocaleController');
const SiteDefinitionController = require('../controllers/SiteDefinitionController');
const Util = require('../../utilities/util');

class SuiteProvider {
  static async fetchTestableSites() {
    const brands = await new BrandController().fetchBrands();
    const locales = await new LocaleController().fetchLocales();
    const supportedSites =
      await new SiteDefinitionController().fetchAllSiteDefinitions();

    return {
      brands,
      locales,
      supportedSites,
    };
  }

  /** fetchTestCoverages function is to fetch the coverage for the tenant
   * @returns {Array<number>} An array containing test coverages.
   * Eg. [2, 3] is considered as the scope for ELCelerate
   */
  static fetchTestCoverages() {
    return [Util.tenant.elcelerate, Util.tenant.helix + Util.tenant.elcelerate];
  }
}

module.exports = SuiteProvider;
