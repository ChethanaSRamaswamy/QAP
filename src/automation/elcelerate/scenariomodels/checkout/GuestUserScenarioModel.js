const ViewCartPageModel = require('../../pagemodels/cart/ViewCartPageModel');
const SkuPageModel = require('../../pagemodels/common/SkuPageModel');
const PopupPageModel = require('../../pagemodels/common/PopupPageModel');
const ActionPageModel = require('../../pagemodels/common/ActionPageModel');
const BagPageModel = require('../../pagemodels/header/BagPageModel');
const HomePageModel = require('../../pagemodels/home/HomePageModel');
const PaymentPageModel = require('../../pagemodels/payment/PaymentPageModel');
const PdpPageModel = require('../../pagemodels/product/PdpPageModel');
const ShopPageModel = require('../../pagemodels/product/ShopPageModel');
const SamplesPageModel = require('../../pagemodels/sample/SamplePageModel');
const OrderConfirmationPageModel = require('../../pagemodels/order/OrderConfirmationPageModel');
const ScenarioModel = require('../ScenarioModel');
const config = require('../../configs/automation.setup');
const BasePageModel = require('../../pagemodels/common/BasePageModel');
const ShipmentPageModel = require('../../pagemodels/shipment/ShipmentPageModel');
const SigninPageModel = require('../../pagemodels/signin/SigninPageModel');
const ReviewPageModel = require('../../pagemodels/review/ReviewPageModel');
const Util = require('../../../../utilities/util');

// TODO: Add Logger

class GuestUserScenarioModel extends ScenarioModel {
  constructor(testInfo, page, data, context) {
    super(testInfo, page, data);
    this.delivery = new ShipmentPageModel(
      this.testInfo,
      this.page,
      this.data,
      context
    );
    this.action = new ActionPageModel(this.testInfo, this.page, this.data);

    this.popups = [
      this.locatorData.cookieRejectElem,
      this.locatorData.closePopUpElem,
    ];

    this.registerHandlePopups = [
      this.locatorData.registerPopup1Elem,
      this.locatorData.registerPopup2Elem,
    ];

    this.pdpUrlList = [
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

    this.pdp = new PdpPageModel(this.testInfo, this.page, this.data);
  }

  addProductFromRandomUrl = async () => {
    await this.initBrowser();
    await this.goto();
    await this.closePopup(this.popups);
    await this.selectSku();
    await this.gotoAnyPdp();
    await this.pdpValidate();
    await this.putProductInCartFromSPP();
    await this.accessShoppingBag();
  };

  validateAndReinitializeProduct = async () => {
    const popups = [
      this.locatorData.cookieRejectElem,
      this.locatorData.closePopUpElem,
    ];
    await this.transactionId();
    await this.viewCartProduct();
    await this.closePopup(popups);
  };

  checkoutContinueSamplePage = async () => {
    await this.selectSample();
  };

  guestUserSignInDetails = async () => {
    await this.guestUserSignin();
  };

  shippingDetails = async () => {
    await this.deliveryDetails();
    await this.goToPaymentFromShipment();
  };

  orderPlace = async () => {
    await this.reviewPayDetails();
    await this.paymentDetails();
  };

  orderConfirmationMsg = async () => {
    await this.orderCompletion();
  };

  closePopup = async (popups) => {
    await new PopupPageModel(this.testInfo, this.page, this.data).closePopup(
      popups
    );
  };

  gotoAnyPdp = async () => {
    const verifyPdpProduct = {
      pdpUrls: this.pdpUrlList,
      addToBagElem:
        this.siteData.executionContext.platform === Util.devices.pc
          ? this.locatorData.pdpAddToBagElem
          : this.locatorData.mobPdpAddToBagElem,
    };
    await this.pdp.moveToPdpAndProductValidate(verifyPdpProduct);
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
  selectSku = async () => {
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
      this.locatorData.isDonationElem,
      this.locatorData.displayableProductElem,
      this.locatorData.noDisplayableProductErrorElem,
      this.locatorData.prodCatUrlElem,
      skuIds,
      pdpAddToCartElem,
      this.pdpUrlList,
      this.locatorData.pdpSkuElem,
      this.locatorData.pdpSkuValue
    );
  };

  pdpValidate = async () => {
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await this.pdp.isLoaded(this.locatorData.pdpProductGridElem);
    } else {
      await this.pdp.isLoaded(this.locatorData.mobPdpProductGridElem);
      await this.action.clickElementsWithCount(this.registerHandlePopups);
    }
  };

  putProductInCartFromSPP = async () => {
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

  /**
   * Leverage Playwright's functions to return the first visible element that matches the specified combination.
   * Specially useful when dealing with hidden elements and selecting .first() is not enough, while still preserving mobile/PC compatibility.
   */
  addProductToCartByAccessibleName = async () => {
    const pdpShop = new ShopPageModel(this.testInfo, this.page, this.data);
    await pdpShop.clickOnButtonByAccessibleName(
      this.locatorData.pwAddToBagSPPElem
    );
  };
  accessShoppingBag = async () => {
    const bag = new BagPageModel(this.testInfo, this.page, this.data);
    const examineCart = {
      bagCountElem: this.locatorData.pdpBagCountElem,
      cartLinkElem:
        this.siteData.executionContext.platform === Util.devices.pc
          ? this.locatorData.pdpCartLinkElem
          : this.locatorData.mobPdpCartLinkElem,
      addToBagElem:
        this.siteData.executionContext.platform === Util.devices.pc
          ? this.locatorData.pdpAddToBagElem
          : this.locatorData.mobPdpAddToBagElem,
      popupClose: this.popups,
      bagElem:
        this.siteData.executionContext.platform === Util.devices.pc
          ? this.locatorData.pdpBagElem
          : this.locatorData.mobPdpBagElem,
      urlTextElem: this.locatorData.cartURLTextElem,
      clickTypeFlag: this.testData.clickTypeFlag,
    };
    await bag.showBag(examineCart);
  };

  /**
   * Retrieves the transaction ID using the ViewCartPageModel.
   *
   * @async
   * @function
   * @memberof YourClass
   * @throws {Error} If an error occurs during the retrieval of the transaction ID.
   * @example
   */
  transactionId = async () => {
    const transaction = new ViewCartPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    await transaction.getTransactionId(this.locatorData.transIdElem);
  };

  accessShoppingBagByAccessibleName = async () => {
    const bag = new BagPageModel(this.testInfo, this.page, this.data);
    await bag.clickOnButtonByAccessibleName(this.locatorData.pwToCheckoutElem);
  };
  viewCartProduct = async () => {
    const viewCart = new ViewCartPageModel(this.testInfo, this.page, this.data);

    const inspectCartItems = {
      emptyCartAlert:
        this.siteData.executionContext.platform === Util.devices.pc
          ? this.locatorData.cartEmptyBagErrorMsgElem
          : this.locatorData.mobCartEmptyBagErrorMsgElem,
      checkoutContinue:
        this.siteData.executionContext.platform === Util.devices.pc
          ? this.locatorData.cartContinueElem
          : this.locatorData.mobCartContinueElem,
      cartPageURLText: this.locatorData.cartURLTextElem,
      mobCheckout: this.locatorData.mobCartOptionalContinueElem,
      popups: this.popups,
      registerHandlePopups:
        this.siteData.executionContext.platform === Util.devices.pc
          ? ''
          : this.registerHandlePopups,
    };
    await viewCart.verifyCartItems(inspectCartItems);
  };
  selectSample = async () => {
    const sample = new SamplesPageModel(this.testInfo, this.page, this.data);
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await sample.continueToSamplePage(
        this.locatorData.sampleContinue1stElem,
        this.locatorData.sampleContinue2ndElem,
        this.locatorData.sampleContinue3rdElem,
        this.locatorData.sampleScrollFlagElem
      );
    } else {
      await sample.continueToSamplePage(
        this.locatorData.mobSampleContinue1stElem,
        this.locatorData.mobSampleContinue2ndElem,
        this.locatorData.mobSampleContinue3rdElem,
        this.locatorData.sampleScrollFlagElem
      );
    }
  };
  guestUserSignin = async () => {
    const user = new SigninPageModel(this.testInfo, this.page, this.data);
    const signinLocators = {
      guestUserTabElem:
        this.siteData.executionContext.platform === Util.devices.pc
          ? this.locatorData.signinGuestUserTabElem
          : this.locatorData.mobSigninGuestUserTabElem,
    };
    await user.signin(
      signinLocators.guestUserTabElem,
      this.locatorData.signinGuestUserNameElem,
      this.locatorData.signinGuestUserIdElem,
      this.locatorData.signinGuestUserContinueElem,
      this.locatorData.signinRUTElem,
      this.locatorData.signinPassElem,
      this.locatorData.signinTermsElem
    );
  };

  deliveryDetails = async () => {
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await this.delivery.shipDestination(
        this.locatorData.shipFirstNameElem,
        this.locatorData.shipLastNameElem,
        this.locatorData.shipManualAddressElem,
        this.locatorData.shipAddress1Elem,
        this.locatorData.shipAddress2Elem,
        this.locatorData.shipCityElem,
        this.locatorData.shipZipCodeElem,
        this.locatorData.shipPhoneElem,
        this.locatorData.shipCountryDdElem,
        this.locatorData.shipRegionActionElem,
        this.locatorData.shipRegionValueElem,
        this.locatorData.shipColonyActionElem,
        this.locatorData.shipColonyValueElem,
        this.locatorData.shipTermsCondElem,
        this.locatorData.shipUseSameAddressElem,
        this.locatorData.shipPressTabElem,
        this.locatorData.shipTitleElem,
        this.locatorData.shipSelectZipCodeElem,
        this.locatorData.shipProvinceDDValueElem,
        this.locatorData.shipTitleValueElem,
        this.locatorData.shipSecondSurnameElem,
        this.locatorData.shipAreaElem,
        this.locatorData.shipAreaValueElem,
        this.locatorData.shipFloorNoElem,
        this.locatorData.shipFederalDocNumberElem,
        this.locatorData.shipFederalGeneratorUrlElem,
        this.locatorData.shipFederalGenerateIdElem,
        this.locatorData.shipCountry2Elem,
        this.locatorData.shipCountry3Elem,
        this.locatorData.shipCountry4Elem,
        this.locatorData.shipProvinceValue2Elem,
        this.locatorData.shipProvinceValue3Elem,
        this.locatorData.shipProvinceValue4Elem
      );
    } else {
      await this.delivery.shipDestination(
        this.locatorData.mobShipFirstNameElem,
        this.locatorData.mobShipLastNameElem,
        this.locatorData.mobShipManualAddressElem,
        this.locatorData.mobShipAddress1Elem,
        this.locatorData.mobShipAddress2Elem,
        this.locatorData.mobShipCityElem,
        this.locatorData.mobShipZipCodeElem,
        this.locatorData.mobShipPhoneElem,
        this.locatorData.mobShipCountryDdElem,
        this.locatorData.mobShipRegionActionElem,
        this.locatorData.mobShipRegionValueElem,
        this.locatorData.mobShipColonyActionElem,
        this.locatorData.mobShipColonyValueElem,
        this.locatorData.mobShipTermsCondElem,
        this.locatorData.shipUseSameAddressElem,
        this.locatorData.shipPressTabElem,
        this.locatorData.mobShipTitleElem,
        this.locatorData.mobShipSelectZipCodeElem,
        this.locatorData.mobShipProvinceDDValueElem,
        this.locatorData.mobShipTitleValueElem,
        this.locatorData.mobshipSecondSurnameElem,
        this.locatorData.mobShipAreaElem,
        this.locatorData.mobShipAreaValueElem,
        this.locatorData.mobShipFloorNoElem,
        this.locatorData.shipFederalDocNumberElem,
        this.locatorData.shipFederalGeneratorUrlElem,
        this.locatorData.shipFederalGenerateIdElem,
        this.locatorData.mobShipCountry2Elem,
        this.locatorData.mobShipCountry3Elem,
        this.locatorData.mobShipCountry4Elem,
        this.locatorData.mobShipProvinceValue2Elem,
        this.locatorData.mobShipProvinceValue3Elem,
        this.locatorData.mobShipProvinceValue4Elem
      );
    }
  };

  goToPaymentFromShipment = async () => {
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await this.delivery.navigateToPaymentFromShipping(
        this.locatorData.shipContinueElem,
        this.locatorData.shipCoreContentElem
      );
      await this.delivery.shipmentContinuationVerifier(
        this.locatorData.shipContinueElem,
        this.locatorData.shipCoreContentElem,
        this.locatorData.shipErrorTextElem
      );
    } else {
      await this.delivery.navigateToPaymentFromShipping(
        this.locatorData.mobShipContinueElem,
        this.locatorData.mobShipCoreContentElem
      );
      await this.delivery.shipmentContinuationVerifier(
        this.locatorData.mobShipContinueElem,
        this.locatorData.mobShipCoreContentElem,
        this.locatorData.mobShipErrorTextElem
      );
    }
  };

  reviewPayDetails = async () => {
    const review = new ReviewPageModel(this.testInfo, this.page, this.data);
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await review.reviewOrder(
        this.locatorData.reviewTermsCondElem,
        this.locatorData.reviewContinueElem
      );
    } else {
      await review.reviewOrder(
        this.locatorData.mobReviewTermsCondElem,
        this.locatorData.mobReviewContinueElem
      );
    }
  };

  paymentDetails = async () => {
    const pay = new PaymentPageModel(this.testInfo, this.page, this.data);
    const {
      paymentCreditCardNumberElem,
      paymentCvvNumberElem,
      paymentMonthYearElem,
      paymentMonthElem,
      paymentYearElem,
      boletoChooseElem,
      boletoCTAElem,
      orderConfirmationMsgIdElem,
      paymentCardHolderNameElem,
      payPalRadioBtnElem,
      payPalCTAElem,
      paymentCreditCardContinueElem,
      paymentIframeCreditCardElem,
      paymentIframeMonthYearElem,
      paymentIframeMonthElem,
      paymentIframeYearElem,
      paymentIframeCvvElem,
      paymentIframePlaceOrderElem,
      mobPaymentMonthYearElem,
      mobPaymentMonthElem,
      mobPaymentYearElem,
    } = this.locatorData;

    const iframes = [
      paymentIframeCreditCardElem,
      paymentIframeMonthYearElem,
      paymentIframeMonthElem,
      paymentIframeYearElem,
      paymentIframeCvvElem,
      paymentIframePlaceOrderElem,
    ];

    const {
      CREDITCARDNUMBER,
      CVV,
      MONTHYEAR,
      CCMONTH,
      YEAR,
      CARDHOLDERNAME,
      paypalurl,
      payPalSandBox,
      toPlaceOrder,
      elementTypeFlag,
    } = this.testData;

    let payMonthYearElem,
      payMonthElem,
      payYearElem = '';

    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await pay.selectPayment(
        this.locatorData.paymentSelectPaymentElem,
        this.locatorData.paymentTermsCondElem,
        this.locatorData.paymentCardDropDownElem,
        this.locatorData.paymentContinueElem,
        this.locatorData.paymentCardTypeElem,
        this.testData.paymentPageUrl,
        this.locatorData.paymentTermsCondErrorMessageElem
      );
      payMonthYearElem = paymentMonthYearElem;
      payMonthElem = paymentMonthElem;
      payYearElem = paymentYearElem;
    } else {
      await pay.selectPayment(
        this.locatorData.mobPaymentSelectPaymentElem,
        this.locatorData.mobPaymentTermsCondElem,
        this.locatorData.mobPaymentCardDropDownElem,
        this.locatorData.mobPaymentContinueElem,
        this.locatorData.mobPaymentCardTypeElem,
        this.testData.paymentPageUrl,
        this.locatorData.mobPaymentTermsCondErrorMessageElem
      );
      payMonthYearElem = mobPaymentMonthYearElem;
      payMonthElem = mobPaymentMonthElem;
      payYearElem = mobPaymentYearElem;
    }
    if (this.testData.isCod === undefined || this.testData.isCod !== 'TRUE') {
      if (this.locatorData.boletoChooseElem) {
        console.log(`${this.siteData.brandLocale} : Using Boleto`);
        await pay.selectBoletoPayment(
          boletoChooseElem,
          boletoCTAElem,
          orderConfirmationMsgIdElem
        );
      } else if (this.locatorData.payPalRadioBtnElem) {
        console.log(`${this.siteData.brandLocale} : Using PayPal`);
        await pay.selectPayPalPayment(
          payPalRadioBtnElem,
          payPalCTAElem,
          paypalurl,
          payPalSandBox
        );
      } else {
        await pay.ccPayOrder(
          paymentCreditCardNumberElem,
          paymentCvvNumberElem,
          payMonthYearElem,
          payMonthElem,
          payYearElem,
          paymentCardHolderNameElem,
          paymentCreditCardContinueElem,
          iframes,
          CREDITCARDNUMBER,
          CVV,
          MONTHYEAR,
          CCMONTH,
          YEAR,
          CARDHOLDERNAME,
          toPlaceOrder,
          elementTypeFlag
        );
      }
    } else {
      console.log(
        `${this.siteData.brandLocale} : Test order is placed using COD`
      );
    }
  };

  orderCompletion = async () => {
    const orderMesssage = new OrderConfirmationPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    await orderMesssage.getOrderNumber(
      this.locatorData.orderConfirmationMsgIdElem
    );
  };
}

module.exports = GuestUserScenarioModel;
