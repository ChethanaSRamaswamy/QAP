const ScenarioModel = require('../ScenarioModel.js');
const GuestUserScenarioModel = require('../checkout/GuestUserScenarioModel.js');
const PlpPdpScenarioModel = require('../plppdp/PlpPdpScenarioModel.js');
const GA4PageModel = require('../../pagemodels/analytics/GA4PageModel.js');
const AnalyticsHelperPageModel = require('../../pagemodels/analytics/AnalyticsHelperPageModel.js');
const AnalyticsSanityScenarioModel = require('./GA4SanityScenarioModel.js');
const globalJSON = require('../../../../datainterface/data/json/analytics/globalGA4.json');
/**
 * Creates an instance of GA4GuestUserScenarioModel.
 *
 * @param {Object} testInfo - Information about the test.
 * @param {Page} page - The Playwright page object.
 * @param {Object} data - Data (locatorData, testData, siteData) for the test.
 * @param {Object} commonTags - The common JSON objects for all region
 * @param {Object} jsonData - The region json objects for all regions respectively.
 * @param {Object} brandDetails - Contains the tags details for particular brand local from respective JSON file.
 * @param {String} ga4Regex - store URL for Intercept.
 */

class GA4GuestUserScenarioModel extends ScenarioModel {
  constructor(testInfo, page, data) {
    const [analyticsData, checkoutData, plppdpData] = data;
    super(testInfo, page, analyticsData);
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
    this.brandLocale = this.siteData.brandLocale;
    this.jsonData = '';
    this.brandDetails = '';
    this.jsonPath = '';
    this.commonTags = globalJSON[0];
    this.productCatalogPage = this.commonTags.sharedTool;
    this.ga4Regex = this.commonTags.misc.GA4Regex;
    this.result = [];
    this.productDetails = '';
  }

  /**
   * reinitializing few data's using analytics helper file
   *  @async
   * @method
   * @memberof GA4GuestUserScenarioModel
   */
  reinitializationOfDataForGU = async () => {
    const locale = this.analyticsSanity.brandLocale.split('-')[1];
    const jsonPath = this.analyticsHelper.pickJSON(locale, this.commonTags);
    // eslint-disable-next-line global-require
    this.jsonData = require(jsonPath);
    this.brandDetails = this.jsonData.filter(
      (obj) => obj.brand === this.analyticsSanity.brandLocale
    )[0].brandSpecs[0];
  };

  /**
   * Navigate to viewcart and verify the GA4 tags.
   * @async
   * @method
   * @memberof GA4GuestUserScenarioModel
   */

  validateProductInCart = async () => {
    const regexedData = await this.analyticsHelper.intercept(this.ga4Regex);
    await this.guestCheckout.validateAndReinitializeProduct();
    await this.analytics.tagValidation(
      regexedData,
      this.brandDetails,
      '',
      this.analyticsSanity.productDetails,
      ''
    );
  };

  /**
   * Navigate to sample page and verify the GA4 tags.
   * @async
   * @method
   * @memberof GA4GuestUserScenarioModel
   */

  checkoutSamplePage = async () => {
    const regexedData = await this.analyticsHelper.intercept(this.ga4Regex);
    await this.guestCheckout.checkoutContinueSamplePage();
    this.result.push(
      await this.analytics.tagValidation(
        regexedData,
        this.brandDetails,
        '',
        this.analyticsSanity.productDetails,
        ''
      )
    );
  };

  /**
   * Navigate to sign in page and verify the GA4 tags.
   * @param {Object} regexedData - Array to store URL and postData of intercepted requests, which is returing from intercept function.
   * @async
   * @method
   * @memberof GA4GuestUserScenarioModel
   */
  guestUserpage = async () => {
    const regexedData = await this.analyticsHelper.intercept(this.ga4Regex);
    await this.guestCheckout.guestUserSignin();
    this.result.push(
      await this.analytics.tagValidation(
        regexedData,
        this.brandDetails,
        '',
        this.analyticsSanity.productDetails,
        ''
      )
    );
  };

  /**
   * Navigate to shipping page and verify the GA4 tags.
   * @async
   * @method
   * @memberof GA4GuestUserScenarioModel
   */
  deliveryDetails = async () => {
    const regexedData = await this.analyticsHelper.intercept(this.ga4Regex);
    await this.guestCheckout.shippingDetails();
    this.result.push(
      await this.analytics.tagValidation(
        regexedData,
        this.brandDetails,
        '',
        this.analyticsSanity.productDetails,
        ''
      )
    );
  };

  /**
   * Navigate to payment page , place order  and verify the GA4 tags.
   * @async
   * @method
   * @memberof GA4GuestUserScenarioModel
   */

  orderConfirmationPage = async () => {
    const regexedData = await this.analyticsHelper.intercept(this.ga4Regex);
    await this.guestCheckout.orderPlace();
    await this.analyticsHelper.payRevenueDetails(this.commonTags);
    await this.page.waitForTimeout(15000);
    await this.guestCheckout.orderConfirmationMsg();
    const tagsCaptured = this.result.push(
      await this.analytics.tagValidation(
        regexedData,
        this.brandDetails,
        '',
        this.analyticsSanity.productDetails,
        this.analyticsHelper.revenueDetails
      )
    );

    if (!tagsCaptured && this.analyticsHelper.revenueDetails) {
      console.log('Analytics tags not captured after placing the order.');
    } else {
      console.log('Analytics tags captured after placing the order.');
    }
  };
}
module.exports = GA4GuestUserScenarioModel;
