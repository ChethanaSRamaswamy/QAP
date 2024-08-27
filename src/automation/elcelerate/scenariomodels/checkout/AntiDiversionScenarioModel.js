const SkuPageModel = require('../../pagemodels/common/SkuPageModel');
const PopupPageModel = require('../../pagemodels/common/PopupPageModel');
const HomePageModel = require('../../pagemodels/home/HomePageModel');
const ScenarioModel = require('../ScenarioModel');
const BasePageModel = require('../../pagemodels/common/BasePageModel');
const config = require('../../configs/automation.setup');
const Util = require('../../../../utilities/util');

class AntiDiversionScenarioModel extends ScenarioModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }
  /**
   * This method will add maximum allowed quantity for one product per site from either random url or prodcat url
   */
  addMaxAllowedQuantities = async () => {
    const popups = [
      this.locatorData.cookieRejectElem,
      this.locatorData.closePopUpElem,
    ];
    await this.initBrowser();
    await this.goto();
    await this.closePopup(popups);
    console.log(
      `Maximum qty allowed per product for this site is ${this.testData.maxQty}`
    );
    await this.selectSku(this.testData.maxQty);
  };
  /**
   * This method will add maximum allowed quantities in the overall cart from random url or prodcat url
   */

  addMaxCartProduct = async () => {
    const popups = [
      this.locatorData.cookieRejectElem,
      this.locatorData.closePopUpElem,
    ];
    await this.initBrowser();
    await this.goto();
    await this.closePopup(popups);
    console.log(
      `Maximum qty allowed per product for this site is ${this.testData.maxQty}`
    );
    await this.selectSku(this.testData.maxQty);
    console.log(
      `Second maximum qty allowed for this site is ${this.testData.secondMaxQty}`
    );
    await this.selectSku(this.testData.secondMaxQty);
  };

  initBrowser = async () => {
    const base = new BasePageModel(this.testInfo, this.page, config, this.data);
    await base.initBrowser();
  };
  closePopup = async (popups) => {
    await new PopupPageModel(this.testInfo, this.page, this.data).closePopup(
      popups
    );
  };
  goto = async () => {
    const home = new HomePageModel(this.testInfo, this.page, this.data);
    // await this.page.goto(this.siteData.executionContext.url);
    await home.isLoaded();
  };
  /**
   * @param {*} qty This methid will accept the quantity of the product to be added to cart
   */
  selectSku = async (qty) => {
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

    const pdpUrlList = [
      this.locatorData.pdpUrl1,
      this.locatorData.pdpUrl2,
      this.locatorData.pdpUrl3,
      this.locatorData.pdpUrl4,
      this.locatorData.pdpUrl5,
      this.locatorData.pdpUrl6,
      this.locatorData.pdpUrl7,
      this.locatorData.pdpUrl8,
      this.locatorData.pdpUrl9,
      this.locatorData.pdpUrl10,
    ];

    const skuSelection = new SkuPageModel(this.testInfo, this.page, this.data);
    let pdpAddToCartElem = '';
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      pdpAddToCartElem = this.locatorData.pdpAddToBagElem;
    } else {
      pdpAddToCartElem = this.locatorData.mobPdpAddToBagElem;
    }
    await skuSelection.getRandomData(
      this.locatorData.randomSkuUrlElem,
      this.locatorData.skuInfoElem,
      this.siteData.executionContext.adminUrl,
      this.siteData.executionContext.url,
      this.locatorData.isShoppableElem,
      this.locatorData.isDisplayableElem,
      this.locatorData.displayableProductElem,
      this.locatorData.noDisplayableProductErrorElem,
      this.locatorData.prodCatUrlElem,
      skuIds,
      pdpAddToCartElem,
      pdpUrlList,
      this.locatorData.pdpSkuElem,
      this.locatorData.pdpSkuValue,
      this.locatorData.randomAddToCartUrlElem,
      qty,
      this.siteData.executionContext.addToBagUrl
    );
  };
}

module.exports = AntiDiversionScenarioModel;
