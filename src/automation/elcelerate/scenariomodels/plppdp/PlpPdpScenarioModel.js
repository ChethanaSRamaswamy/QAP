const config = require('../../configs/automation.setup');
const Util = require('../../../../utilities/util');
const ViewCartPageModel = require('../../pagemodels/cart/ViewCartPageModel');
const PopupPageModel = require('../../pagemodels/common/PopupPageModel');
const HomePageModel = require('../../pagemodels/home/HomePageModel');
const PdpPageModel = require('../../pagemodels/product/PdpPageModel');
const PlpPageModel = require('../../pagemodels/product/PlpPageModel');
const ShopPageModel = require('../../pagemodels/product/ShopPageModel');
const ScenarioModel = require('../ScenarioModel');
const BasePageModel = require('../../pagemodels/common/BasePageModel');
const BagPageModel = require('../../pagemodels/header/BagPageModel');
const ActionPageModel = require('../../pagemodels/common/ActionPageModel');

// TODO: Add Logger

class PlpPdpScenarioModel extends ScenarioModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
    this.prodNameOnPlp = '';
    this.commonActions = new ActionPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    this.popups = [
      this.locatorData.closePopupElem,
      this.locatorData.closeSecPopupElem,
      this.locatorData.closeThirdPopupElem,
    ];
  }

  validateInHomePage = async () => {
    await this.initBrowser();
    await this.goto();
    await this.closePopup(this.popups);
  };

  addProductFromPlp = async () => {
    await this.goToAPlp();
    await this.closePopup(this.popups);
    await this.validatePlp();
    await this.quickViewAndPurchase();
  };

  plpToPdpNavigation = async () => {
    await this.clickProductView();
    await this.validatePdp();
    await this.closePopup(this.popups);
  };

  addProductFromPdp = async () => {
    await this.addProductToCartFromPdp();
    await this.accessShoppingBag();
  };

  validateCartProduct = async () => {
    const viewCart = new ViewCartPageModel(this.testInfo, this.page, this.data);
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await viewCart.validateCartAndSelectedProduct(
        this.testData.cartPageURLText,
        this.locatorData.cartProductNameElem,
        this.prodNameOnPlp,
        this.locatorData.cartEmptyErrorMsgElem
      );
    } else {
      await viewCart.validateCartAndSelectedProduct(
        this.testData.cartPageURLText,
        this.locatorData.mobCartProductNameElem,
        this.prodNameOnPlp,
        this.locatorData.mobCartEmptyErrorMsgElem
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

  goToAPlp = async () => {
    const plp = new PlpPageModel(this.testInfo, this.page, this.data);
    await plp.goToAPlp(this.locatorData.plpUrlElem);
  };

  validatePlp = async () => {
    const plpGrid = new PlpPageModel(this.testInfo, this.page, this.data);
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await plpGrid.plpGridValidation(this.locatorData.plpGridElem);
    } else {
      await plpGrid.plpGridValidation(this.locatorData.mobPlpGridElem);
    }
  };

  quickViewAndPurchase = async () => {
    const quickView = new PlpPageModel(this.testInfo, this.page, this.data);
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await quickView.hoverProductAndClick(
        this.locatorData.plpGridImageElem,
        this.locatorData.plpQuickViewElem
      );
      await this.commonActions.isElementAvailableAndClick([
        this.locatorData.plpAddToBagElem,
      ]);
      await this.commonActions.isElementAvailableAndClick([
        this.locatorData.plpOverlayCloseElem,
      ]);
      await this.commonActions.isElementAvailableAndClick([
        this.locatorData.plpQuickViewWindowCloseElem,
      ]);
    } else {
      await quickView.hoverProductAndClick(
        this.locatorData.plpGridImageElem,
        this.locatorData.mobPlpQuickViewElem
      );
      if (this.locatorData.mobPlpQuickViewElem !== '') {
        await this.commonActions.isElementAvailableAndClick([
          this.locatorData.plpAddToBagElem,
        ]);
        await this.commonActions.isElementAvailableAndClick([
          this.locatorData.mobPlpOverlayCloseElem,
        ]);
        await this.commonActions.isElementAvailableAndClick([
          this.locatorData.mobPlpQuickViewWindowCloseElem,
        ]);
      }
    }
  };

  clickProductView = async () => {
    const productView = new PlpPageModel(this.testInfo, this.page, this.data);
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      this.prodNameOnPlp = await productView.clickProductView(
        this.locatorData.plpProductViewClassElem,
        this.locatorData.plpProductViewTextElem
      );
    } else {
      this.prodNameOnPlp = await productView.clickProductView(
        this.locatorData.mobPlpProductViewClassElem,
        this.locatorData.mobPlpProductViewTextElem
      );
    }
  };

  validatePdp = async () => {
    const pdp = new PdpPageModel(this.testInfo, this.page, this.data);
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await pdp.isLoaded(this.locatorData.pdpProductHeaderElem);
    } else {
      await pdp.isLoaded(this.locatorData.mobPdpProductHeaderElem);
    }
  };

  addProductToCartFromPdp = async () => {
    const pdpShop = new ShopPageModel(this.testInfo, this.page, this.data);
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await pdpShop.addToCart(
        this.locatorData.pdpAddToBagElem,
        this.popups,
        this.testData.clickTypeFlag
      );
    } else {
      await pdpShop.addToCart(
        this.locatorData.mobPdpAddToBagElem,
        this.popups,
        this.testData.clickTypeFlag
      );
    }
  };

  accessShoppingBag = async () => {
    const bag = new BagPageModel(this.testInfo, this.page, this.data);
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await bag.clickOnBag(this.locatorData.pdpOverlayElem);
    } else {
      await bag.clickOnBag(this.locatorData.mobPdpOverlayElem);
    }
  };
}

module.exports = PlpPdpScenarioModel;
