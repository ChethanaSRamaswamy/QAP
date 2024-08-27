/* eslint-disable no-unused-vars */
const config = require('../../configs/automation.setup');
const ScenarioModel = require('../ScenarioModel');
const ReturnUserScenarioModel = require('../checkout/ReturnUserScenarioModel');
const PlpPdpScenarioModel = require('../plppdp/PlpPdpScenarioModel');
const GA4PageModel = require('../../pagemodels/analytics/GA4PageModel');
const AnalyticsHelperPageModel = require('../../pagemodels/analytics/AnalyticsHelperPageModel');
const AnalyticsSanityScenarioModel = require('../../scenariomodels/analytics/GA4SanityScenarioModel.js');
const GA4GuestScenarioModel = require('../../scenariomodels/analytics/GA4GuestUserScenarioModel.js');
const GuestUserScenarioModel = require('../checkout/GuestUserScenarioModel.js');

/**
 * Creates an instance of GA4ReturnUserScenarioModel.
 *
 * @param {Object} testInfo - Information about the test.
 * @param {Page} page - The Playwright page object.
 * @param {Object} data - Data (locatorData, testData, siteData) for the test.
 * @param {Object} commonTags - The common JSON objects for all region
 * @param {Object} jsonData - The region json objects for all regions respectively.
 * @param {Object} brandDetails - Contains the tags details for particular brand local from respective JSON file.
 * @param {Object} regexedData - Array to store URL and postData of intercepted requests, which is returing from intercept function.
 * @param {String} ga4Regex - store URL for Intercept
 */

class GA4ReturnUserScenarioModel extends ScenarioModel {
  constructor(testInfo, page, data) {
    const [analyticsData, checkoutData, plppdpData] = data;
    super(testInfo, page, analyticsData);
    this.returnCheckout = new ReturnUserScenarioModel(
      testInfo,
      page,
      checkoutData
    );
    this.guestCheckout = new GuestUserScenarioModel(
      testInfo,
      page,
      checkoutData
    );
    this.analytics = new GA4PageModel(testInfo, page, data);
    this.analyticsHelper = new AnalyticsHelperPageModel(testInfo, page, data);
    this.analyticsSanity = new AnalyticsSanityScenarioModel(
      testInfo,
      page,
      data
    );
    this.plpPdp = new PlpPdpScenarioModel(testInfo, page, plppdpData);
    this.analyticsGU = new GA4GuestScenarioModel(testInfo, page, data);
    this.commonTags = this.analyticsSanity.commonTags;
    this.ga4Regex = this.commonTags.misc.GA4Regex;
    this.jsonData = '';
    this.brandDetails = '';
  }

  /**
   * reinitializing few data's using analytics helper file
   *  @async
   * @method
   * @memberof GA4ReturnUserScenarioModel
   */
  reinitializationOfDataForRU = async () => {
    const locale = this.analyticsSanity.brandLocale.split('-')[1];
    const jsonPath = this.analyticsHelper.pickJSON(locale, this.commonTags);
    // eslint-disable-next-line global-require
    this.jsonData = require(jsonPath);
    this.brandDetails = this.jsonData.filter(
      (obj) => obj.brand === this.analyticsSanity.brandLocale
    )[0].brandSpecs[0];
  };

  /**
   * Signin as Return user and verify the GA4 tagging
   * @async
   * @method
   * @memberof ReturnUserScenarioModel
   */

  returnUserSignIn = async () => {
    const regexedData = await this.analyticsHelper.intercept(this.ga4Regex);
    await this.returnCheckout.returnUserSignInDetails();
    this.result.push(
      await this.GA4.tagValidation(
        regexedData,
        this.brandDetails,
        '',
        this.analyticsSanity.productDetails
      )
    );
  };

  /**
   * Merge cart during return user
   * @async
   * @method
   * @memberof GA4ReturnUserScenarioModel
   */
  mergeCart = async () => {
    await this.returnCheckout.performMergeCart();
  };

  /**
   * Add/Edit the shipping address and verify the GA4 tagging
   * @async
   * @method
   * @memberof ReturnUserScenarioModel
   */
  addNewShipping = async () => {
    const regexedData = await this.analyticsHelper.intercept(this.ga4Regex);
    await this.returnCheckout.addNewShippingDetails();
    this.result.push(
      await this.GA4.tagValidation(
        regexedData,
        this.brandDetails,
        '',
        this.analyticsSanity.productDetails
      )
    );
  };

  /**
   * pay and confirm purchase for return user
   * @async
   * @method
   * @memberof GA4ReturnUserScenarioModel
   */
  payAndConfirmOrder = async () => {
    const regexedData = await this.analyticsHelper.intercept(this.ga4Regex);
    await this.returnCheckout.completePurchase();
    await this.guestCheckout.orderConfirmationMsg();
    await this.page.waitForTimeout(6000);
    this.result.push(
      await this.GA4.tagValidation(
        regexedData,
        this.brandDetails,
        '',
        this.analyticsSanity.productDetails
      )
    );
  };
}
module.exports = GA4ReturnUserScenarioModel;
