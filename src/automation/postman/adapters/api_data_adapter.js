const ScriptDataProvider = require('../../../datainterface/providers/script_data_provider');
class ApiDataAdapter {
  static getScriptData = async (tags, feature) => {
    const scenario = 'API'; // TODO: Just faking the scenario by adding API
    const {
      locatorDefinitions,
      dataDefinitions,
      siteDefinition: siteData,
      NullDataException,
    } = await ScriptDataProvider.Initializer(tags, feature, scenario);

    // Abort, if there is any error while setting up the locators and test data
    if (NullDataException.isError) {
      assert(false, NullDataException.message.join('\n'));
    }

    const testData = {};
    // Setup test data
    for (let i = 0; i < dataDefinitions.length; i++) {
      testData[dataDefinitions[i].dataKey] = dataDefinitions[i].dataValue;
    }

    // const locatorData = {};
    // // Setup locator data
    // for (let i = 0; i < locatorDefinitions.length; i++) {
    //   locatorData[locatorDefinitions[i].locatorKey] =
    //     locatorDefinitions[i].locatorValue;
    // }
    // return { locatorData, testData, siteData };
    return { testData, siteData };
  };
}

module.exports = ApiDataAdapter;
