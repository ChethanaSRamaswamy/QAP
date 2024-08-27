const HomePageModel = require('../../pagemodels/home/HomePageModel');
const config = require('../../configs/automation.setup');
const BasePageModel = require('../../pagemodels/common/BasePageModel');
const ScenarioModel = require('../ScenarioModel');
const GuestUserScenarioModel = require('../checkout/GuestUserScenarioModel');
const PlpPdpScenarioModel = require('../plppdp/PlpPdpScenarioModel');
const MarketingPixelPageModel = require('../../pagemodels/analytics/MarketingPixelPageModel');
const AnalyticsHelperPageModel = require('../../pagemodels/analytics/AnalyticsHelperPageModel');
const globalJSON = require('../../../../datainterface/data/json/analytics/genericMarketingPixel.json');
const regionalMPJson = require('../../../../datainterface/data/json/analytics/regionalMarketingPixel.json');
class BrazeScenarioModel extends ScenarioModel {
  /**
   * Creates an instance of GA4SanityScenarioModel.
   * @param {Object} testInfo - Information about the test.
   * @param {Page} page - The Playwright page object.
   * @param {Object} data - Data (locatorData, testData, siteData) for the test.
   * @param {Object} commonTags - The common JSON objects for all region
   * @param {Object} jsonData - The region json objects for all regions respectively.
   * @param {Object} brandDetails - Contains the tags details for particular brand local from respective JSON file.
   * @param {String} brazeRegexData - store URL for Intercept.
   * @param {String} envir - store enviroment value.
   * @param {int} minTime - minimum waiting time.
   * @param {int} totalTime - total waiting time which is keep varying.
   * @param {int} maxTime - maximum waiting time.
   * @param {Array<string>} dataRequired - An array containing strings and objects.
   */
  constructor(testInfo, page, data) {
    const [analyticsData, checkoutData, plppdpData] = data;
    super(testInfo, page, analyticsData);
    this.guestCheckout = new GuestUserScenarioModel(
      testInfo,
      page,
      checkoutData
    );
    this.analyticsMP = new MarketingPixelPageModel(testInfo, page, data);
    this.analyticsHelper = new AnalyticsHelperPageModel(testInfo, page, data);
    this.plpPdp = new PlpPdpScenarioModel(testInfo, page, plppdpData);
    this.commonTags = globalJSON[0];
    this.brazeRegexData = this.commonTags.marketingPixel.braze;
    this.brandLocale = this.siteData.brandLocale;
    this.brandDetails = regionalMPJson.filter(
      (obj) => obj.brand === this.brandLocale
    )[0].brandSpecs[0];
    this.envir = this.siteData.executionContext.environment.toLowerCase();
    this.minTime = parseInt(this.commonTags.misc.minTime);
    this.totalTime = parseInt(this.commonTags.misc.totalTime);
    this.maxTime = parseInt(this.commonTags.misc.maxTime);
    this.dataRequired = [
      this.envir,
      this.brazeRegexData,
      this.commonTags,
      this.brandDetails,
    ];
  }

  /**
   * Function to capture tag from network tab
   * @param {boolean} tag - to verify that tags got captured from networks tab
   * @async
   * @method
   * @memberof BrazeScenarioModel
   */
  checkForTag = async (regexedData) => {
    // providing static time to wait for capturing tag from network tab.
    await this.page.waitForTimeout(this.minTime);
    const tag = await this.analyticsMP.tagValidationForMP(
      this.dataRequired,
      regexedData
    );
    if (!tag && this.totalTime <= this.maxTime) {
      console.log('Tag not found:', tag);
      await this.intervalId(regexedData);
    } else if (this.totalTime >= this.maxTime) {
      // Stop checking after maximum time got over
      console.log('Tag not found within the specified time.');
    }
  };

  /**
   * seting the interval time to check for tags firing in network tab
   * @async
   * @method
   * @memberof BrazeScenarioModel
   */
  intervalId = async (regexedData) => {
    this.totalTime += 10000;
    await this.checkForTag(regexedData);
  };

  /**
   * Initializes the browser for the scenario.
   * @async
   * @method
   * @memberof BrazeScenarioModel
   */
  initBrowser = async () => {
    const base = new BasePageModel(this.testInfo, this.page, config, this.data);
    await base.initBrowser();
  };

  /**
   * Directs to home page, verifies its loading, perform the interception, capture the product details and product impressions and verify the marketing pixels tags.
   * @param {Object} regexedData - Array to store URL and postData of intercepted requests, which is returing from intercept function.
   * @async
   * @method
   * @memberof BrazeScenarioModel
   */
  gotoHome = async () => {
    // console.log('Brand-Local:' + this.brandLocale);
    const home = new HomePageModel(this.testInfo, this.page, this.data);
    const regexedData = await this.analyticsHelper.intercept(
      this.brazeRegexData
    );
    await home.isLoaded();
    // providing static time to get for cookie popup
    await this.page.waitForTimeout(1000);
    await this.analyticsHelper.acceptCookies(this.commonTags);
    await this.checkForTag(regexedData);
  };

  /**
   * Added product from PLP page and verify the marketing pixels tags.
   * @param {Object} regexedData - Array to store URL and postData of intercepted requests, which is returing from intercept function.
   * @async
   * @method
   * @memberof BrazeScenarioModel
   */
  addProductToCartFromPlp = async () => {
    const regexedData = await this.analyticsHelper.intercept(
      this.brazeRegexData
    );
    await this.plpPdp.addProductFromPlp();
    await this.checkForTag(regexedData);
  };

  /**
   * Navigate to PDP page, capture the product impressions and verify the marketing pixels tags.
   * @param {Object} regexedData - Array to store URL and postData of intercepted requests, which is returing from intercept function.
   * @async
   * @method
   * @memberof BrazeScenarioModel
   */
  gotoPdp = async () => {
    const regexedData = await this.analyticsHelper.intercept(
      this.brazeRegexData
    );
    await this.plpPdp.plpToPdpNavigation();
    await this.checkForTag(regexedData);
  };
  /**
   * Added product from PDP page and verify the marketing pixels tags.
   * @param {Object} regexedData - Array to store URL and postData of intercepted requests, which is returing from intercept function.
   * @async
   * @method
   * @memberof BrazeScenarioModel
   */

  addProductToCart = async () => {
    const regexedData = await this.analyticsHelper.intercept(
      this.brazeRegexData
    );
    await this.plpPdp.addProductFromPdp();
    await this.checkForTag(regexedData);
  };
  /**
   * Navigate to cart page, verifies page is loading and verify the marketing pixel tags.
   * @param {Object} regexedData - Array to store URL and postData of intercepted requests, which is returing from intercept function.
   * @async
   * @method
   * @memberof BrazeScenarioModel
   */
  validateProductInCart = async () => {
    const regexedData = await this.analyticsHelper.intercept(
      this.brazeRegexData
    );
    await this.guestCheckout.validateAndReinitializeProduct();
    await this.checkForTag(regexedData);
  };
  /**
   * Navigate to sample page.
   * @async
   * @method
   * @memberof BrazeScenarioModel
   */

  checkoutSamplePage = async () => {
    await this.guestCheckout.checkoutContinueSamplePage();
  };

  /**
   * Navigate to sign in page and sign in as a guest user.
   * @async
   * @method
   * @memberof BrazeScenarioModel
   */
  guestUserPage = async () => {
    await this.guestCheckout.guestUserSignInDetails();
  };

  /**
   * Navigate to shipping page and verify the marketing pixel tags.
   * @param {Object} regexedData - Array to store URL and postData of intercepted requests, which is returing from intercept function.
   * @async
   * @method
   * @memberof BrazeScenarioModel
   */
  deliveryDetails = async () => {
    const regexedData = await this.analyticsHelper.intercept(
      this.brazeRegexData
    );
    await this.guestCheckout.shippingDetails();
    await this.checkForTag(regexedData);
  };

  /**
   * Navigate to payment page , place order  and verify the marketing pixels tags.
   * @param {Object} regexedData - Array to store URL and postData of intercepted requests, which is returing from intercept function.
   * @async
   * @method
   * @memberof BrazeScenarioModel
   */

  orderConfirmationPage = async () => {
    const regexedData = await this.analyticsHelper.intercept(
      this.brazeRegexData
    );
    await this.guestCheckout.orderPlace();
    await this.guestCheckout.orderConfirmationMsg();
    // providing static time to wait for capturing tag from network tab.
    await this.page.waitForTimeout(this.totalTime);
    await this.checkForTag(regexedData);
  };
}

module.exports = BrazeScenarioModel;
