const assert = require('assert');
const ScriptDataProvider = require('../../../datainterface/providers/script_data_provider');
const Util = require('../../../utilities/util.js');
class ScriptDataAdapter {
  /**
   * getScriptData function retrieve data from QAP for the given brand and market.
   * The return data is an object that contains locatorData, testData, siteData.
   * - To get a locator, use locatorData.yourKey, ex: locatorData.addToBag
   * - To get a test data, use testData.yourKey, ex: testData.pincode
   * - To get a prod url, use siteData.prodUrl
   * - To get the url being tested, use siteData.executionContext.url
   * - To get the admin url being tested, use siteData.executionContext.adminUrl
   *
   * @param {Array<string>} tags - Send tags in format [brand, locale, device], ex: [AV, US, PC].
   * @param {string} feature - Feature name, ex: Checkout.
   * @param {string} title - Your test title with annotation.
   * @param {number} [setNo=0] - Required only for multi-dataset tests like ROM & RAMP. Default is 0
   * @returns {object} -  Returns an object.returns an object that contains {locatorData, testData, siteData}
   * @property {object} locatorData - Locator details.
   * @property {string} locatorData.addToBag - Add to bag locator.
   * @property {object} testData - Test data.
   * @property {string} testData.firstname - First name from test data.
   * @property {object} siteData - Site information.
   * @property {string} siteData.url - Url of the site being executed.
   */
  static getScriptData = async (tags, feature, title, setNo = 0) => {
    const testTags = title.match(/@(\w+)/g) || [];
    const scenario = testTags.map((tag) => tag.replace('@', ''))[0];

    const {
      locatorDefinitions,
      dataDefinitions,
      siteDefinition: siteData,
      NullDataException,
    } = await ScriptDataProvider.Initializer(tags, feature, scenario, setNo);

    // Abort, if there is any error while setting up the locators and test data
    if (NullDataException.isError) {
      assert(false, NullDataException.message.join('\n'));
    }

    const locatorData = {},
      testData = {};

    // Setup test data
    for (let i = 0; i < dataDefinitions.length; i++) {
      testData[dataDefinitions[i].dataKey] = dataDefinitions[i].dataValue;
    }

    // Setup locator data
    for (let i = 0; i < locatorDefinitions.length; i++) {
      locatorData[locatorDefinitions[i].locatorKey] =
        locatorDefinitions[i].locatorValue;
    }

    return { locatorData, testData, siteData };
  };

  /**
   * getMultiDatasets is a function to generate set numberss from
   * DATASETS variable. This function is used in features like ROM and RAMP
   * where we need to test the scripts with multiple test datasets.
   * @returns {Array<number>} sets - An array of set numbers like [1,2,3]
   */
  static getMultiDatasets = () => {
    /**
     * Different datasets as comma separated values.
     * @constant {string} DATASETS
     */
    const { DATASETS } = process.env;
    const ds = DATASETS;

    /**
     *
     * Dataset array (generated by converting DATASETS to array)
     * @constant {Array<string>} sets
     */
    let sets = [1]; // Default set

    if (ds) {
      if (ds.includes(',')) {
        sets = ds.split(',').map((item) => parseInt(item.trim()));
      } else if (ds.includes('..')) {
        const range = ds.split('..');
        const start = parseInt(range[0]);
        const end = parseInt(range[1]);
        sets = Util.range(start, end);
      } else {
        sets = [parseInt(ds)];
      }
    }

    return sets;
  };

  /**
   * This function isTestEligible is to check if the test is in
   * the automation coverage and skip otherwise.
   *
   * @param {object} testInfo is an object provided by Playwright
   * and has title as one of the key
   * @param {string} tags is the string in the format of
   * 'BR-LOCALE-DEVICE-SCENARIO'
   * @returns {boolean} canSkipTest is true if the scenario is not applicable
   * and the test to be skipped
   */
  static isTestEligible(testInfo, tags) {
    // To skip a particular test when the test is not supported
    const SKIP = 'SKIP';
    // To run the test when --grep is not used to provide the annotation
    // but to run all the tests in a test.js file
    const EMPTY = 'EMPTY';
    if (tags !== null) {
      return false;
    }
    if (tags.includes(EMPTY)) {
      return false;
    }
    const title = testInfo.title;
    // Extracting the value after the @ symbol
    const match = title.match(/@(\w+)/);
    const scenarioAnnotation = match ? match[1] : SKIP;
    const canSkipTest = tags.indexOf(scenarioAnnotation) === -1;
    if (canSkipTest) {
      console.log(
        `${tags} is not in the automation coverage and hence it is skipped`
      );
    }
    return canSkipTest;
  }
}

module.exports = ScriptDataAdapter;
