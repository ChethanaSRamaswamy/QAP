const LocatorDefinitionController = require('../controllers/LocatorDefinitionController');
const DataDefinitionController = require('../controllers/DataDefinitionController');
const SiteDefinitionController = require('../controllers/SiteDefinitionController');

class ScriptDataProvider {
  static async Initializer(tags, feature, scenario, setNo = 0) {
    // INFO: ELCelerate's testCoverage won't have a device
    // like GUPC or GUMOB, has only the scenario tag like GU
    const [brand, locale, device] = tags;
    let locatorDefinitions = null,
      dataDefinitions = null,
      siteDefinition = null;
    let isError = false;
    const messages = [];

    ({ locatorDefinitions, dataDefinitions, siteDefinition } =
      await ScriptDataProvider.generator(
        `${brand}-${locale}`,
        feature,
        scenario + device,
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
    }

    if (dataDefinitions.length === 0) {
      isError = true;
      messages.push(
        `There are no data definitions for ${brand}-${locale} in the database`
      );
    }

    // TODO: Create classes for exceptions
    return {
      locatorDefinitions,
      dataDefinitions,
      siteDefinition,
      NullDataException: { error: isError, message: messages },
    };
  }

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

module.exports = ScriptDataProvider;
