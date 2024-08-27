const ScenarioModel = require('../ScenarioModel');
const PlpShadedPageModel = require('../../pagemodels/product/PlpShadedSizedPageModel');
const Util = require('../../../../utilities/util');
const ShopPageModel = require('../../pagemodels/product/ShopPageModel');
const PlpPdpScenarioModel = require('./PlpPdpScenarioModel');
const ViewCartPageModel = require('../../pagemodels/cart/ViewCartPageModel');
const BagPageModel = require('../../pagemodels/header/BagPageModel');
const ActionPageModel = require('../../pagemodels/common/ActionPageModel');

// TODO: Add Logger

class PlpValidateShadedProductScenarioModel extends ScenarioModel {
  constructor (testInfo, page, data) {
    super(testInfo, page, data);
    this.shadedPlp = new PlpShadedPageModel(testInfo, page, data);
    this.plp = new PlpPdpScenarioModel(testInfo, page, data);
    this.action = new ActionPageModel(testInfo, page, data);
    this.shadeResults = [];
    this.productNameText;
    this.productShadeText;
    this.canProceedWithTest = true;
    this.convertedLocators = {};
    this.plpShadeLocators = {
      productElem: this.locatorData.plpProductElem,
      pickerElem: this.locatorData.plpProductShadePickerElem,
      optionElem: this.locatorData.plpShadeOptionElem,
      shadeSizeOverlayElem: this.locatorData.plpshadeOverlayElem,
      shadeSizeCloseOverlayElem: this.locatorData.plpshadeCloseOverlayElem,
      addToBagElem: this.locatorData.plpAddToBagElem,
      selectedValueElem: this.locatorData.plpShadeNameElem,
      productNameElem: this.locatorData.plpProductNameElem,
      dropdownElem: this.locatorData.plpShadeDropdownElem,
      quickViewElem: this.locatorData.plpQuickViewElem,
      quickViewWindowElem: this.locatorData.plpQuickViewWindowElem,
      quickViewCloseElem: this.locatorData.plpQuickViewWindowCloseElem,
    };
    this.mobPlpShadeLocators = {
      productElem: this.locatorData.mobPlpProductElem,
      pickerElem: this.locatorData.mobPlpProductShadePickerElem,
      optionElem: this.locatorData.mobPlpShadeOptionElem,
      shadeSizeOverlayElem: this.locatorData.mobPlpShadeOverlayElem,
      shadeSizeCloseOverlayElem: this.locatorData.mobPlpShadeCloseOverlayElem,
      addToBagElem: this.locatorData.mobPlpAddToBagElem,
      selectedValueElem: this.locatorData.mobPlpShadeNameElem,
      productNameElem: this.locatorData.mobPlpProductNameElem,
      dropdownElem: this.locatorData.mobPlpShadeDropdownElem,
      quickViewElem: this.locatorData.mobPlpQuickViewElem,
      quickViewWindowElem: this.locatorData.mobPlpQuickViewWindowElem,
      quickViewCloseElem: this.locatorData.mobPlpQuickViewWindowCloseElem,
    };
  }

  messages = {
    stepNotApplicable: (functionName) =>
      `The ${functionName} is not applicable in this step for this brand/platform`,
  };

  goToShadedPlp = async () => {
    if (this.locatorData.plpShadedUrlPath) {
      await this.shadedPlp.goToAPlp(this.locatorData.plpShadedUrlPath);
      await this.plp.validatePlp();
      await this.page.waitForLoadState('domcontentloaded');
    } else {
      console.log(this.messages.stepNotApplicable('goToShadedPlp'));
    }
  };

  addShadedProductsAndValidate = async () => {
    let shadeOption = this.locatorData.mobPlpShadeOptionElem;
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      shadeOption = this.locatorData.plpShadeOptionElem;
    }
    if (shadeOption) {
      let shadeLocators = {};
      const cartLocators = {};

      shadeLocators = this.mobPlpShadeLocators;
      cartLocators.cartOverlayElem = this.locatorData.mobCartOverlayElem;
      cartLocators.cartCloseOverlayElem = this.locatorData.mobCartOverlayCloseElem;

      if (this.siteData.executionContext.platform === Util.devices.pc) {
        shadeLocators = this.plpShadeLocators;
        cartLocators.cartOverlayElem = this.locatorData.cartOverlayElem;
        cartLocators.cartCloseOverlayElem = this.locatorData.cartOverlayCloseElem;
      }

      this.shadeResults = await this.shadedPlp.addShadedProductToBag(
        this.shadedPlp.convertRelativeXPaths(shadeLocators),
        cartLocators
      );
      ({
        productName: this.productNameText,
        productValue: this.productShadeText,
      } = this.shadeResults[0]);
    } else {
      this.canProceedWithTest = false;
      console.log(
        this.messages.stepNotApplicable('addShadedProductsAndValidate')
      );
    }
  };

  clickBagAndMoveToCart = async () => {
    if (this.canProceedWithTest) {
      let bag = this.locatorData.mobPlpBagElem;
      let checkoutBtn = this.locatorData.mobCartOverlayCheckoutElem;
      if (this.siteData.executionContext.platform === Util.devices.pc) {
        bag = this.locatorData.plpBagElem;
        checkoutBtn = this.locatorData.cartOverlayCheckoutElem;
      }
      await this.action.scrollToTop();

      if (checkoutBtn) {
        const shopping = new ShopPageModel(this.testInfo, this.page, this.data);
        await shopping.clickBagAndCheckout(bag, checkoutBtn);
      } else {
        await this.accessShoppingBag(bag);
      }
    } else {
      console.log(this.messages.stepNotApplicable('clickBagAndMoveToCart'));
    }
  };

  isQuickViewClosed = async () => {
    if (this.canProceedWithTest) {
      let shadeLocators = {};
      shadeLocators = this.mobPlpShadeLocators;

      if (this.siteData.executionContext.platform === Util.devices.pc) {
        shadeLocators = this.plpShadeLocators;
      }
      await this.shadedPlp.isQuickViewClosed(shadeLocators);
    } else {
      console.log(this.messages.stepNotApplicable('isQuickViewClosed'));
    }
  };

  validateCartShadedProduct = async () => {
    if (this.canProceedWithTest) {
      const viewCart = new ViewCartPageModel(
        this.testInfo,
        this.page,
        this.data
      );
      if (this.siteData.executionContext.platform === Util.devices.pc) {
        await viewCart.validateCartAndSelectedProduct(
          this.testData.cartPageURLText,
          this.locatorData.cartProductNameElem,
          this.productNameText,
          this.locatorData.cartEmptyErrorMsgElem
        );
        await viewCart.validateShadeName(
          this.productShadeText,
          this.locatorData.cartShadeNameElem
        );
      } else {
        await viewCart.validateCartAndSelectedProduct(
          this.testData.cartPageURLText,
          this.locatorData.mobCartProductNameElem,
          this.productNameText,
          this.locatorData.mobCartEmptyErrorMsgElem
        );
        await viewCart.validateShadeName(
          this.productShadeText,
          this.locatorData.mobCartShadeNameElem
        );
      }
    } else {
      console.log(this.messages.stepNotApplicable('validateCartShadedProduct'));
    }
  };

  accessShoppingBag = async (bagLocator) => {
    const bag = new BagPageModel(this.testInfo, this.page, this.data);
    await bag.clickOnBag(bagLocator);
  };
}

module.exports = PlpValidateShadedProductScenarioModel;
