const config = require('../../configs/automation.setup');
const BasePageModel = require('../../pagemodels/common/BasePageModel');
const PopupPageModel = require('../../pagemodels/common/PopupPageModel');
const HomePageModel = require('../../pagemodels/home/HomePageModel');
const PdpPageModel = require('../../pagemodels/product/PdpPageModel');
const ScenarioModel = require('../ScenarioModel');
// TODO: Add Logger

class PdpValidationScenarioModel extends ScenarioModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
    this.pdp = new PdpPageModel(this.testInfo, this.page, this.data);
    this.popups = [
      this.locatorData.cookieRejectElem,
      this.locatorData.closePopupElem,
      this.locatorData.closeSecPopupElem,
      this.locatorData.closeThirdPopupElem,
    ];
  }

  gotoAnyPdp = async () => {
    const pdpUrlList = [
      this.locatorData.pdpUrl1Elem,
      this.locatorData.pdpUrl2Elem,
      this.locatorData.pdpUrl3Elem,
      this.locatorData.pdpUrl4Elem,
      this.locatorData.pdpUrl5Elem,
    ];
    await this.initBrowser();
    await this.goto();
    await this.closePopup(this.popups);
    await this.pdp.moveToPdp(
      pdpUrlList
    );
  };

  verifyProductPageContent = async () => {
    const {
      pdpTitleElem,
      pdpImagesElem,
      pdpDescriptionElem,
      pdpQuantitySizeElem,
      pdpPriceElem,
      pdpGridElem,
    } = this.locatorData;

    const pdpCheckList = {
      pdpTitleElem,
      pdpImagesElem,
      pdpDescriptionElem,
      pdpQuantitySizeElem,
      pdpPriceElem,
    };

    await this.closePopup(this.popups);
    await this.pdp.isLoaded(pdpGridElem);
    await this.pdp.validatePdpElements(pdpCheckList);
  };

  closePopup = async (popups) => {
    await new PopupPageModel(this.testInfo, this.page, this.data).closePopup(
      popups
    );
  };
  initBrowser = async () => {
    const base = new BasePageModel(this.testInfo, this.page, config, this.data);
    await base.initBrowser();
  };
  goto = async () => {
    const home = new HomePageModel(this.testInfo, this.page, this.data);
    // await this.page.goto(this.siteData.executionContext.url);
    await home.isLoaded();
  };
}

module.exports = PdpValidationScenarioModel;
