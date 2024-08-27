const PopupPageModel = require('../../pagemodels/common/PopupPageModel');
const ScenarioModel = require('../ScenarioModel');
const config = require('../../configs/automation.setup');
const BasePageModel = require('../../pagemodels/common/BasePageModel');
const HomePageModel = require('../../pagemodels/home/HomePageModel');
const TMOPageModel = require('../../pagemodels/tmo/TMOPageModel');

class TMOScenarioModel extends ScenarioModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }

  gotoHomePageVaildation = async () => {
    const popups = [
      this.locatorData.cookieRejectElem,
      this.locatorData.closePopUpElem,
    ];
    await this.initBrowser();
    await this.goto();
    await this.closePopup(popups);
    await this.closePopup(popups);
  };

  initBrowser = async () => {
    const base = new BasePageModel(this.testInfo, this.page, config, this.data);
    await base.initBrowser();
  };

  goto = async () => {
    const home = new HomePageModel(this.testInfo, this.page, this.data);
    await home.isLoaded();
  };

  closePopup = async (popups) => {
    await new PopupPageModel(this.testInfo, this.page, this.data).closePopup(
      popups
    );
  };

  gotoTMOLandingPage = async () => {
    const trackMyOrder = new TMOPageModel(this.testInfo, this.page, this.data);

    await trackMyOrder.gotoTMOLandingPage(
      this.locatorData.tmoUrl,
      this.siteData.executionContext.url
    );
  };

  validateTMOOrderId = async () => {
    const trackMyOrder = new TMOPageModel(this.testInfo, this.page, this.data);
    const tmoOrderIds = [
      this.testData.orderId1,
      this.testData.orderId2,
      this.testData.orderId3,
      this.testData.orderId4,
      this.testData.orderId5,
      this.testData.orderId6,
      this.testData.orderId7,
      this.testData.orderId8,
      this.testData.orderId9,
      this.testData.orderId10,
      this.testData.orderId11,
      this.testData.orderId12,
      this.testData.orderId13,
      this.testData.orderId14,
    ];

    const tmoOrderId = await trackMyOrder.getRandomOrderId(tmoOrderIds);

    await trackMyOrder.validateTMOOrderId(
      this.locatorData.tmoOrderInputElem,
      this.locatorData.tmoContinueElem,
      tmoOrderId
    );
  };

  getTMOStatus = async () => {
    const tmoOrderDetails = [
      this.locatorData.tmoOrderNumberElem,
      this.locatorData.tmoOrderDateElem,
      this.locatorData.tmoOrderMethodElem,
    ];
    const trackMyOrder = new TMOPageModel(this.testInfo, this.page, this.data);
    await trackMyOrder.getTMOStatus(
      this.locatorData.tmoCurrentStatusElem,
      this.locatorData.tmoCurrentValueElem,
      tmoOrderDetails
    );
  };

  clickTMOPolicyPageLink = async () => {
    const trackMyOrder = new TMOPageModel(this.testInfo, this.page, this.data);
    await trackMyOrder.clickTMOPolicyPageLink(
      this.locatorData.tmoCustomerServiceElem,
      this.locatorData.tmoReturnPolicyElem,
      this.locatorData.tmoUrl,
      this.siteData.executionContext.url
    );
  };

  validateOrderIdInTMOPage = async () => {
    const orderMesssage = new TMOPageModel(this.testInfo, this.page, this.data);
    await orderMesssage.getOrderNumber(
      this.locatorData.tmoOrderInputElem,
      this.locatorData.tmoContinueElem,
      this.locatorData.orderConfirmationMsgIdElem,
      this.locatorData.tmoUrl,
      this.siteData.executionContext.url
    );
  };
}

module.exports = TMOScenarioModel;
