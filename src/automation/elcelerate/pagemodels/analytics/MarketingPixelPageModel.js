const PageModel = require('../PageModel');
const Util = require('../../../../utilities/util');

class MarketingPixelPageModel extends PageModel {
  /**
   * Creates an instance of MarketingPixelPageModel.
   *
   * @param {Object} testInfo - Information about the test.
   * @param {Page} page - The Playwright page object.
   * @param {Object} data - Data (locatorData, testData, siteData) for the test.
   * @param {Object} payloadData - Array to store URL and postData of intercepted requests
   * @param {Object} commonTags - Contains the common tags details for all region.
   */
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
    this.payloadData = [];
    this.analFlag = false;
  }

  /**
   * Compares expected data with actual data and logs the verification status for each key-value pair.
   *
   * @param {Object} expectedData - The expected data to be compared.
   * @param {Object} actualData - The actual data for comparison.
   * @memberof MarketingPixelPageModel
   */
  compareJsonOfMP = (expectedData, actualData) => {
    const expectedKeys = Object.keys(expectedData);
    const jsonData = JSON.parse(actualData);
    expectedKeys.forEach((key) => {
      const expectedValue = expectedData[key];
      let actualValue = this.checkEntries(jsonData, key);
      if (actualValue === 'object') {
        actualValue = this.checkEntries(actualValue, key);
      } else if (
        expectedValue === actualValue ||
        actualValue.includes(expectedValue)
      ) {
        console.log(`'${key}': ${JSON.stringify(actualValue)} is verified`);
      } else {
        console.log(
          `'${key}': ${JSON.stringify(expectedValue)} is not verified`
        );
      }
    });
  };

  /**  The tags captured from the regexed braze marketing pixel are verified against the expected data, stored in JSON.
   *
   * @param {Object} jsonObj - An array of objects
   * @param {String} expectedKey - expected key to be verifird
   * @returns {Promise<String>} - A promise that resolves after getting actual value for the expected key, if that key is available in the tag.
   * @memberof MarketingPixelPageModel
   */
  checkEntries = (jsonObj, expectedKey) => {
    let actualValue = '';
    let actualKey = '';
    // eslint-disable-next-line no-restricted-syntax
    for (const key in jsonObj) {
      let value = jsonObj[key];
      if (typeof value === 'object') {
        if (Array.isArray(value)) {
          value.forEach((item) => {
            if (JSON.stringify(item).includes(expectedKey)) {
              value = this.checkEntries(item, expectedKey);
              actualValue = value;
              return value;
            }
          });
        } else {
          if (JSON.stringify(value).includes(JSON.stringify(expectedKey))) {
            value = this.checkEntries(value, expectedKey);
            actualValue = value;
            return value;
          }
        }
        if (expectedKey === actualKey) {
          console.log(
            'expectedKey=> ',
            actualKey,
            'actualValue=> ',
            actualValue
          );
          return actualValue;
        }
      } else if (expectedKey === key) {
        actualKey = key;
        actualValue = value;
        return value;
      }
    }
    return actualValue;
  };
  /**  marketin pixel regexed data are converted to JSON and tags are mapped to verify.
   *
   * @param {Array<string>} dataRequired - An array containing strings and objects.
   * @param {Object} mpData - Contains the tags fired in network tab.
   * @returns {Promise<void>} - A promise that resolves after marketing pixels regexed data are converted to JSON and tags are mapped to verify successfully.
   * @memberof MarketingPixelPageModel
   */
  tagValidationForMP = async (dataRequired, mpData) => {
    const [envir, marketingPixelRegex, commonTags, brandDetails] = dataRequired;
    const events = commonTags.events;
    let dataArray;
    if (mpData) {
      for (let tags of mpData) {
        if (tags.includes('"n":')) {
          dataArray = tags.split(/(,{")/);
          const crossCheck = /,,/.test(dataArray);
          if (crossCheck) {
            dataArray = JSON.stringify(dataArray).replace(/",",/g, ',');
            dataArray = JSON.parse(dataArray);
          }
          dataArray.forEach((dataForIteration) => {
            tags = dataArray;
            for (let event of events) {
              event = event.toString();
              const actualEvent = (
                dataForIteration.split('"n":')[1] || ''
              ).split(',')[0];
              if (actualEvent.includes(event)) {
                console.log(
                  '\n\nVerifying marketing pixel from braze',
                  ' and validating ',
                  event
                );
                console.log(
                  '```````````````````````````````````````````````````````````'
                );
                if (envir === Util.environments.prod) {
                  this.compareJsonOfMP(commonTags[event], tags);
                  this.compareJsonOfMP(brandDetails.prod, tags);
                  this.analFlag = true;
                } else if (
                  envir === Util.environments.stage ||
                  envir === Util.environments.dev
                ) {
                  this.compareJsonOfMP(commonTags[event], tags);
                  this.compareJsonOfMP(brandDetails.stage, tags);
                  this.analFlag = true;
                  break;
                }
              }
              this.payloadData = [];
            }
          });
        }
      }
    } else {
      console.log('No regxed data');
    }
    await this.page.route(marketingPixelRegex, (route) => route.abort());
    return this.analFlag;
  };
}
module.exports = MarketingPixelPageModel;
