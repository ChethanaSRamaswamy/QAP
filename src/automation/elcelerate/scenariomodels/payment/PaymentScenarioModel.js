const SkuPageModel = require('../../pagemodels/common/SkuPageModel');
const PopupPageModel = require('../../pagemodels/common/PopupPageModel');
const HomePageModel = require('../../pagemodels/home/HomePageModel');
const ScenarioModel = require('../ScenarioModel');
const config = require('../../configs/automation.setup');
const BasePageModel = require('../../pagemodels/common/BasePageModel');

/**
 * Represents a scenario model for handling payments.
 * @extends ScenarioModel
 */
class PaymentScenarioModel extends ScenarioModel {
  constructor(testInfo, page, checkoutData) {
    super(testInfo, page, checkoutData);
  }

  /**
   * Add products from prodcat tool using defined set of skus.
   * @async
   * @method
   * @memberof PaymentScenarioModel
   */
  addProductFromProdcatUrl = async () => {
    const popups = [
      this.locatorData.cookieRejectElem,
      this.locatorData.closePopUpElem,
    ];
    await this.initBrowser();
    await this.goto();
    await this.closePopup(popups);
    await this.selectProdcatSku();
  };

  /**
   * Closes popups based on provided elements.
   * @async
   * @method
   * @memberof PaymentScenarioModel
   * @param {Array} popups - Elements representing popups to close.
   */
  closePopup = async (popups) => {
    await new PopupPageModel(this.testInfo, this.page, this.data).closePopup(
      popups
    );
  };

  /**
   * Initializes the browser for the scenario.
   * @async
   * @method
   * @memberof PaymentScenarioModel
   */
  initBrowser = async () => {
    const base = new BasePageModel(this.testInfo, this.page, config, this.data);
    await base.initBrowser();
  };

  /**
   * Directs to a specific page and verifies its loading.
   * @async
   * @method
   * @memberof PaymentScenarioModel
   */
  goto = async () => {
    const home = new HomePageModel(this.testInfo, this.page, this.data);
    // await this.page.goto(this.siteData.executionContext.url);
    await home.isLoaded();
  };

  /**
   * Ensures the user can add products from the prodcat tool using specific SKUs without navigating to the PDP pages.
   * @async
   * @method
   * @memberof PaymentScenarioModel
   */
  selectProdcatSku = async () => {
    const skuIds = [
      this.testData.skuId1,
      this.testData.skuId2,
      this.testData.skuId3,
      this.testData.skuId4,
      this.testData.skuId5,
      this.testData.skuId6,
      this.testData.skuId7,
      this.testData.skuId8,
      this.testData.skuId9,
      this.testData.skuId10,
    ];

    const productData = {
      adminUrl: this.siteData.executionContext.adminUrl,
      skuIds: skuIds,
      prodCatUrl: this.locatorData.prodCatUrlElem,
      isShoppable: this.locatorData.isShoppableElem,
      isDisplayable: this.locatorData.isDisplayableElem,
      addToCart: this.locatorData.isAddToCartElem,
      pcCheckoutButtonID: this.locatorData.cartContinueElem,
      mobCheckoutButtonID: this.locatorData.mobCartContinueElem,
      viewCartUrl: this.locatorData.viewCartUrlElem,
    };

    const skuProdcatSelection = new SkuPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    await skuProdcatSelection.addProductWithoutPDPNavigation(productData);
  };
}

module.exports = PaymentScenarioModel;
