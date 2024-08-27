/* eslint-disable global-require */
const config = require('../../configs/automation.setup');
const ScenarioModel = require('../ScenarioModel');
const GuestUserScenarioModel = require('../checkout/GuestUserScenarioModel');
const PlpPdpScenarioModel = require('../plppdp/PlpPdpScenarioModel');
const GA4PageModel = require('../../pagemodels/analytics/GA4PageModel');
const AnalyticsHelperPageModel = require('../../pagemodels/analytics/AnalyticsHelperPageModel');
const BasePageModel = require('../../pagemodels/common/BasePageModel');
const HomePageModel = require('../../pagemodels/home/HomePageModel');
const globalJSON = require('../../../../datainterface/data/json/analytics/globalGA4.json');

class GA4SanityScenarioModel extends ScenarioModel {
  /**
   * Creates an instance of GA4SanityScenarioModel.
   *
   * @param {Object} testInfo - Information about the test.
   * @param {Page} page - The Playwright page object.
   * @param {Object} data - Data (locatorData, testData, siteData) for the test.
   * @param {Object} commonTags - The common JSON objects for all region.
   * @param {String} brandLocale - contains the brand-local value of particular run.
   * @param {Object} brandDetails - Contains the tags details for particular brand local from respective JSON file.
   * @param {Object} regexedData - Array to store URL and postData of intercepted requests, which is returing from intercept function.
   */
  constructor(testInfo, page, data) {
    const [analyticsData, checkoutData, plppdpData] = data;
    super(testInfo, page, analyticsData);
    this.checkout = new GuestUserScenarioModel(
      this.testInfo,
      this.page,
      checkoutData
    );
    this.GA4 = new GA4PageModel(this.testInfo, this.page, this.data);
    this.analyticsHelper = new AnalyticsHelperPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    this.plpPdp = new PlpPdpScenarioModel(this.testInfo, this.page, plppdpData);
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
   * Initializes the browser for the scenario.
   * @async
   * @method
   * @memberof GA4SanityScenarioModel
   */
  initBrowser = async () => {
    const base = new BasePageModel(this.testInfo, this.page, config, this.data);
    await base.initBrowser();
    const locale = this.brandLocale.split('-')[1];
    this.jsonPath = this.analyticsHelper.pickJSON(locale, this.commonTags);
    this.jsonData = require(this.jsonPath);
    this.brandDetails = this.jsonData.filter(
      (obj) => obj.brand === this.brandLocale
    )[0].brandSpecs[0];
  };

  /**
   * Directs to home page, verifies its loading, perform the interception, capture the product details and product impressions and verify the GA4 tags.
   * @async
   * @method
   * @memberof GA4SanityScenarioModel
   */
  gotoHome = async () => {
    console.log('Validating Home Page');
    const home = new HomePageModel(this.testInfo, this.page, this.data);
    const regexedData = await this.analyticsHelper.intercept(this.ga4Regex);
    await home.isLoaded();
    const impressions = await this.analyticsHelper.trackImpressions(
      this.commonTags
    );
    await this.analyticsHelper.acceptCookies(this.commonTags);
    this.result.push(
      await this.GA4.tagValidation(
        regexedData,
        this.brandDetails,
        impressions,
        '',
        ''
      )
    );
  };

  /**
   * Navigate to PLP page, verifies page is loading, capture the product impressions and verify the GA4 tags.
   * @async
   * @method
   * @memberof GA4SanityScenarioModel
   */
  gotoPlp = async () => {
    console.log('Validating PLP');
    const regexedData = await this.analyticsHelper.intercept(this.ga4Regex);
    await this.plpPdp.goToAPlp();
    const impressions = await this.analyticsHelper.trackImpressions(
      this.commonTags
    );
    this.result.push(
      await this.GA4.tagValidation(
        regexedData,
        this.brandDetails,
        impressions,
        '',
        ''
      )
    );
  };
  /**
   * Navigate to PDP page, capture the product impressions and verify the GA4 tags.
   * @async
   * @method
   * @memberof GA4SanityScenarioModel
   */
  addProductFromPlp = async (context) => {
    console.log('Validating PLP - Add to cart');
    const regexedData = await this.analyticsHelper.intercept(this.ga4Regex);
    this.productDetails = await this.analyticsHelper.readProductDetails(
      context,
      this.commonTags
    );
    console.log('readProductDetails', this.productDetails);
    await this.plpPdp.quickViewAndPurchase();
    this.result.push(
      await this.GA4.tagValidation(
        regexedData,
        this.brandDetails,
        '',
        this.productDetails,
        ''
      )
    );
  };

  /**
   * Navigate to PDP page, capture the product impressions and verify the GA4 tags.
   * @async
   * @method
   * @memberof GA4SanityScenarioModel
   */
  gotoPdp = async () => {
    console.log('Validating PDP');
    const regexedData = await this.analyticsHelper.intercept(this.ga4Regex);
    await this.plpPdp.plpToPdpNavigation();
    await this.page.waitForTimeout(12000);
    const impressions = await this.analyticsHelper.trackImpressions(
      this.commonTags
    );
    this.result.push(
      await this.GA4.tagValidation(
        regexedData,
        this.brandDetails,
        impressions,
        this.productDetails,
        ''
      )
    );
  };

  /**
   * Add products to the cart from PDP and perform GA4 tag validation.
   * @async
   * @method
   * @memberof GA4SanityScenarioModel
   */

  addProductFromPdp = async (context) => {
    console.log('Validating PDP Add to cart');
    const regexedData = await this.analyticsHelper.intercept(this.ga4Regex);
    this.productDetails = await this.analyticsHelper.readProductDetails(
      context,
      this.commonTags
    );
    await this.plpPdp.addProductFromPdp();
    this.result.push(
      await this.GA4.tagValidation(
        regexedData,
        this.brandDetails,
        '',
        this.productDetails,
        ''
      )
    );
  };

  /**
   * Navigate to cart page, verifies page is loading and verify the GA4 tags.
   * @async
   * @method
   * @memberof GA4SanityScenarioModel
   */
  viewCartProduct = async () => {
    console.log('Validating view cart Page');
    const regexedData = await this.analyticsHelper.intercept(this.ga4Regex);
    await this.plpPdp.validateCartProduct();
    await this.GA4.tagValidation(regexedData, this.brandDetails);
    this.result.push(
      await this.GA4.tagValidation(
        regexedData,
        this.brandDetails,
        '',
        this.productDetails,
        ''
      )
    );
  };

  /**
   * Summerises all the final report.
   * @async
   * @method
   * @memberof GA4SanityScenarioModel
   */
  finalReport = () => {
    const sanity = this.commonTags.sanityReport;
    this.analyticsHelper.finalReport(sanity, this.result);
  };
}

module.exports = GA4SanityScenarioModel;
