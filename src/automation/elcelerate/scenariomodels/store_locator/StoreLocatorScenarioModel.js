const PopupPageModel = require('../../pagemodels/common/PopupPageModel');
const ScenarioModel = require('../ScenarioModel');
const config = require('../../configs/automation.setup');
const BasePageModel = require('../../pagemodels/common/BasePageModel');
const HomePageModel = require('../../pagemodels/home/HomePageModel');
const StoreLocatorPageModel = require('../../pagemodels/store_locator/StoreLocatorPageModel');
const Util = require('../../../../utilities/util');

class StoreLocatorScenarioModel extends ScenarioModel {
  constructor(testInfo, page, data, context) {
    super(testInfo, page, data);
    this.storeLocator = new StoreLocatorPageModel(
      this.testInfo,
      this.page,
      this.data,
      context
    );
    this.popups = [
      this.locatorData.cookieRejectElem,
      this.locatorData.closePopUpElem,
    ];
    this.isPC = this.siteData.executionContext.platform === Util.devices.pc;
  }
  gotoStoreLocatorPage = async () => {
    await this.initBrowser();
    await this.goto();
    await this.closePopup(this.popups);
    if (this.isPC) {
      await this.storeLocator.gotoStoreLocatorPage(
        this.locatorData.findStoresElem,
        this.locatorData.closeIframeElem,
        this.locatorData.closeIframePopUpElem
      );
    } else {
      await this.storeLocator.gotoStoreLocatorPage(
        this.locatorData.mobFindStoresElem,
        this.locatorData.closeIframeElem,
        this.locatorData.closeIframePopUpElem
      );
    }
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

  enterZipCode = async () => {
    if (this.isPC) {
      await this.storeLocator.enterZipCode(
        this.locatorData.zipCodeFieldElem,
        this.locatorData.searchStoresElem,
        this.testData.zipCodeValue
      );
    } else {
      await this.storeLocator.enterZipCode(
        this.locatorData.mobZipCodeFieldElem,
        this.locatorData.mobSearchStoresElem,
        this.testData.zipCodeValue
      );
    }
  };

  searchForStores = async () => {
    if (this.isPC) {
      await this.storeLocator.searchForStores(
        this.locatorData.storesListTableElem
      );
    } else {
      await this.storeLocator.searchForStores(
        this.locatorData.mobStoresListTableElem
      );
    }
  };

  enterCityName = async () => {
    if (this.isPC) {
      await this.storeLocator.enterCityName(
        this.locatorData.cityFieldElem,
        this.locatorData.searchStoresElem,
        this.testData.cityName
      );
    } else {
      await this.storeLocator.enterCityName(
        this.locatorData.mobCityFieldElem,
        this.locatorData.mobSearchStoresElem,
        this.testData.cityName
      );
    }
  };
}

module.exports = StoreLocatorScenarioModel;
