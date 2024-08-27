const LocatorDefinitionController = require('../controllers/LocatorDefinitionController');
const DataDefinitionController = require('../controllers/DataDefinitionController');
const SiteDefinitionController = require('../controllers/SiteDefinitionController');

class Hengine {
  Hengine() {}

  static async Initializer(tags, feature, that, setNo = 0) {
    const [brand, locale, testCoverage] = tags;
    let locatorDefinitions = null,
      dataDefinitions = null,
      siteDefinition = null;
    let isError = false;
    const messages = [];
    const source = that;

    ({ locatorDefinitions, dataDefinitions, siteDefinition } =
      await Hengine.generator(
        `${brand}-${locale}`,
        feature,
        testCoverage,
        setNo
      ));

    if (siteDefinition.brandLocale === undefined) {
      isError = true;
      messages.push(
        `There are no site details for ${brand}-${locale} in the database`
      );
    }

    if (locatorDefinitions.length === 0) {
      isError = true;
      messages.push(
        `There are no locator details for ${brand}-${locale} in the database`
      );
    } else if (source !== undefined) {
      // Setup locators
      for (let i = 0; i < locatorDefinitions.length; i++) {
        source[locatorDefinitions[i].locatorKey] =
          locatorDefinitions[i].locatorValue;
      }
    }

    if (dataDefinitions.length === 0) {
      isError = true;
      messages.push(
        `There are no data definitions for ${brand}-${locale} in the database`
      );
    } else if (source !== undefined) {
      // Setup common data
      for (let i = 0; i < dataDefinitions.length; i++) {
        source.CommonData[dataDefinitions[i].dataKey] =
          dataDefinitions[i].dataValue;
      }
    }

    return {
      locatorDefinitions,
      dataDefinitions,
      siteDefinition,
      source,
      NullDataException: { error: isError, message: messages },
    };
  }

  // TODO: Add region in DB and use it while querying
  // Brand, locale, feature, region - should be used to query the DB
  static async generator(brandLocale, feature, testCoverage = '', setNo = 0) {
    const locatorDefinitions =
      await new LocatorDefinitionController().fetchLocatorDefinitions(
        brandLocale,
        feature
      );

    const dataDefinitions =
      await new DataDefinitionController().fetchDataDefinitions({
        brandLocale,
        feature,
        setNo,
      });

    const siteDefinition =
      await new SiteDefinitionController().fetchSiteDefinitions(
        brandLocale,
        feature,
        testCoverage
      );

    return { locatorDefinitions, dataDefinitions, siteDefinition };
  }
}

// D:\Projects\Helix\Sourcecode\helix\helix-app\src\automation\specs
// gauge run NewGEN.spec
// gauge run --parallel -n=8 NewGEN.spec
// cls && gauge run --parallel -n=8 NewGEN.spec AVUSMPPSPP.spec AVAUSTORELOCPC.spec BBAUSTORELOCPC.spec DAUSSANITYSEARCHPC.spec DJUKSANITYSEARCHPC.spec

module.exports = Hengine;
