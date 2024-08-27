const PopupPageModel = require('../../pagemodels/common/PopupPageModel');
const ScenarioModel = require('../ScenarioModel');
const config = require('../../configs/automation.setup');
const BasePageModel = require('../../pagemodels/common/BasePageModel');
const HomePageModel = require('../../pagemodels/home/HomePageModel');
const TranslationPageModel = require('../../pagemodels/translation/TranslationPageModel');
const Util = require('../../../../utilities/util');

class TranslationScenarioModel extends ScenarioModel {
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

  gotoTranslateHomePage = async () => {
    const popups = [
      this.locatorData.cookieRejectElem,
      this.locatorData.closePopUpElem,
    ];
    const translation = new TranslationPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await translation.gotoTranslateHomePage(
        this.siteData.executionContext.environment,
        this.locatorData.translatePreprodUrlElem,
        this.locatorData.translatePageLinkElem,
        this.locatorData.translateLanguageSelectorElem
      );
    } else {
      await translation.gotoTranslateHomePage(
        this.siteData.executionContext.environment,
        this.locatorData.mobTranslatePreprodUrlElem,
        this.locatorData.mobTranslatePageLinkElem,
        this.locatorData.translateLanguageSelectorElem
      );
    }
    await this.closePopup(popups);
  };

  gotoTranslateHomePageValidation = async () => {
    const homePageLocators = [
      this.locatorData.translateHomePageShopElem,
      this.locatorData.translateHomePageAddToBagElem,
      this.locatorData.translateHomePageFooterElem,
    ];
    const translation = new TranslationPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    await translation.gotoTranslateHomePageValidation(homePageLocators);
  };

  gotoTranslatePlpPageValidation = async () => {
    const plpPageLocators = [
      this.locatorData.translatePlpPageFilterLabelElem,
      this.locatorData.translatePlpPageDropDownLabelElem,
      this.locatorData.translateHomePageFooterElem,
    ];
    const translation = new TranslationPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await translation.gotoTranslatePlpPageValidation(
        this.locatorData.translatePlpPageLinkElem,
        plpPageLocators
      );
    } else {
      await translation.gotoMobTranslatePlpPageValidation(
        this.locatorData.mobTranslatePlpPageLinkElem,
        this.locatorData.mobTranslateHamburgerIconELem,
        plpPageLocators
      );
    }
  };

  gotoTranslatePdpPageValidation = async () => {
    const translation = new TranslationPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await translation.gotoTranslatePdpPageValidation(
        this.locatorData.translatePdpPageLinkElem,
        this.locatorData.translatePdpPageAddToBagElem,
        this.locatorData.translatePdpPageQuanityElem
      );
    } else {
      await translation.gotoTranslatePdpPageValidation(
        this.locatorData.translatePdpPageLinkElem,
        this.locatorData.mobTranslatePdpPageAddToBagElem,
        this.locatorData.translatePdpPageQuanityElem
      );
    }
  };

  addToCartOverlayTranslateValidation = async () => {
    const translation = new TranslationPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await translation.addToCartOverlay(this.locatorData.pdpCartLinkElem);
    } else {
      await translation.addToCartOverlay(this.locatorData.mobPdpCartLinkElem);
    }
  };

  viewCartTranslateValidation = async () => {
    const translation = new TranslationPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    const viewCartLocator = [
      this.locatorData.translateViewCart1Elem,
      this.locatorData.translateViewCart2Elem,
      this.locatorData.translateViewCart3Elem,
      this.locatorData.translateViewCartContinueElem,
    ];
    const mobViewCartLocator = [
      this.locatorData.translateViewCart1Elem,
      this.locatorData.translateViewCart2Elem,
      this.locatorData.translateViewCart3Elem,
      this.locatorData.mobTranslateViewCartContinueElem,
    ];
    const viewCartText = [
      this.testData.translateViewCartText1,
      this.testData.translateViewCartText2,
      this.testData.translateViewCartText3,
      this.testData.translateViewCartContinue,
    ];
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await translation.viewCartTranslateValidation(
        viewCartLocator,
        viewCartText
      );
    } else {
      await translation.viewCartTranslateValidation(
        mobViewCartLocator,
        viewCartText
      );
    }
  };

  guestUserSignInPageTranslateValidation = async () => {
    const translation = new TranslationPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    const signInPageLocator = [
      this.locatorData.translateCheckoutNewUserElem,
      this.locatorData.translateCheckoutReturnUserElem,
      this.locatorData.translateCheckoutContinueElem,
    ];
    const mobSignInPageLocator = [
      this.locatorData.translateCheckoutNewUserElem,
      this.locatorData.translateCheckoutReturnUserElem,
      this.locatorData.mobTranslateCheckoutContinueElem,
    ];
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await translation.guestUserSignInPageTranslateValidation(
        signInPageLocator
      );
    } else {
      await translation.guestUserSignInPageTranslateValidation(
        mobSignInPageLocator
      );
    }
  };

  shippingPageTranslateValidation = async () => {
    const translation = new TranslationPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    const shippingPageLocator = [
      this.locatorData.translateShipping1Elem,
      this.locatorData.translateShipping2Elem,
      this.locatorData.translateShipping3Elem,
    ];
    await translation.shippingPageTranslateValidation(shippingPageLocator);
  };

  paymentPageTranslateValidation = async () => {
    const translation = new TranslationPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    await translation.paymentPageTranslateValidation(
      this.locatorData.translatePaymentElem
    );
  };
}

module.exports = TranslationScenarioModel;
