/* eslint-disable no-magic-numbers */
// This file is common template for US UK and CA

// Variable Declaration

/** BASE URL and ADM URL IS RECEIVED **/

var t = require('taiko');
const Helper = require('../../../helix/helpers/helper');
const Util = require('../../../../utilities/util');
const Hengine = require('../../../../datainterface/providers/hengine');
const taikoOverride = require('../../helix_taiko');

var timeoutSetting = '';
var checkoutButtonId = '';
var guestUserId = '';
var continueAsGuest = '';
var enterFirstName = '';
var enterLastName = '';
var enterAddress1 = '';
var enterAddress2 = '';
var enterZipCode = '';
var enterZipCode1 = '';
var newYorkZipCode = '';
var enterPhone = '';
var continueToPayment1 = '';
var creditCardNumber = '';
var cvvFieldId = '';
var pcMonthYear = '';
var placeOrder = '';
var returnUserSigninLink = '';
var returnUserId = '';
var returnUserPwd = '';
var returnUserSigninButton = '';
var returnEnterAddress1 = '';
var mobCheckoutViewCart = '';
var mobReturnUserSigninLink = '';
var mobGuestUserLink = '';
var enterCity = '';
var selectState1 = '';
var state = '';
var guestUserLink = '';
var mobContinueToPayment1 = '';
var mobPlaceOrder = '';
var placeOrderValidation = '';
var getOrderNumber = '0';
var ocMsgIdGu = '';
var ocMsgIdOtherUser = '';
var inStorePick = '';
var allItemsAvailableToggleButton = '';
var inventoryStatus = '';
var storesName = '';
var storesNameText;
var statusFlag = 0;
var boFirstName = '';
var boLastName = '';
var boPhone = '';
var boEmail = '';
var billFirstName = '';
var billLastName = '';
var billAddress1 = '';
var billAddress2 = '';
var billZipCode = '';
var billZipCode1 = '';
var billPhone = '';
var billCity = '';
var someoneElseRadioButton = '';
var someoneElseFirstName = '';
var someoneElseLastName = '';
var someoneElsePhone = '';
var someoneElseEmail = '';
var someoneElseEmailTxt;
var shippingChargeOnDeliveryPage = '';
var shippingChargeOnPaymentPage = '';
var orderNumber = '';
var shpChrgOrdDetPage = '';
var plusIconOnShoppingBag = '';
var editIconOnShoppingBag = '';
var shippingChargeOnCartPage = '';
var deliveryMethodOnDeliveryPage = '';
var deliveryMethodOnPaymentPage = '';
var deliveryMethodOnCartPage = '';
var bopDelMetOdPage = '';
var addToCart = '';
var dropUnavailableItemsAndContinue = '';
var conBtnRemUnvItm = '';
var delMethdUnvSomeItms = '';
const productsOnPopUp = [];
var numproductsOnPopUp;
var newBillingAddress = '';
var invStatusSomeItmsAvl = '';
var changeToHomeDeliveryAndContinue = '';
var cntBtnRemUnvItm1 = '';
var delMtdUnvSomeItms1 = '';
var sameDayDelivery = '';
var sameDayDeliveryDropdown = '';
var deliverSameDayOption = '';
var sddAddress1NotAvailable = '';
var sddProductNotAvailableUrl = '';
var sddNotAvailableMessage = '';
var checkoutButton = '';
var inventoryStatusFlag = 0;
var shippingChargeOnPrintPage = '';
var delMtdOrdDetSdd = '';
var findStore = '';
var newShippingAddress = '';
var cleanTheCart = '';
var bopisProductNotAvailableUrl = '';
var selectDifferentStore = '';
const products2 = [];
var flagForUnavailableItems;
var creditCard = '';
var flagForUserType;
var samplesAlertMessage = '';
var samplesAlertMessageActualText;
var homeDelivery = '';
var selectAfterpay = '';
var continueAfterpay = '';
var emailAddressForAfterpay = '';
var submitEmailAddressForAfterpay = '';
var passwordForAfterpay = '';
var submitPasswordForAfterpay = '';
var totalAmountToBePaidByAfterpay = '';
var confirmAfterpay = '';
var giftCardNumber = '';
var giftCardPin = '';
var giftCardUseBtn = '';
var totalAmount = '';
var salesTaxAmt = '';
var giftCardAmount = '';
var remainingAmount = '';
var skipAndContinueCheckout = '';
var enterNewZipCode = '';
var spp = '';
var editIconSpp = '';
var zipCodeSpp = '';
var searchZipCodeSpp = '';
var verifyZipCodeSpp = '';
var moreStoresBopisSpp = '';
var storesDistanceBopisSpp = '';
var allItemsAvailableBopisSpp = '';
var availableStoresBopisSpp = '';
var storeTimingsBopisSpp = '';
var openingHoursBopisSpp = '';
var invalidZipCodeBopisSpp1 = '';
var invalidZipCodeMessageBopisSpp = '';
var closeMoreStoresBopisSpp = '';
var bopisMoreInfo = '';
var moreInformationModalBopisSpp = '';
var sddMoreInfo = '';
var moreInformationModalSddSpp = '';
var invalidZipCodeBopisSpp = '';
var currentLocationBopisSpp = '';
var offerCode = '';
var applyOfferCode = '';
var offerCodeSuccessMessage = '';
var incQuantity = '';
var totalCartValue = '';
var estimatedTotal = '';
var incQuantity2 = '';
var invalidZipCodeBopisSpp2 = '';
var invalidZipCodeBopisSpp3 = '';
var errorMessageForZipCode200MiAway = '';
var deliveryTab = '';
var viewDirections = '';
var clkPrintOrdConfLnk = '';
var homePageUrl = '';
var subTotal = '';
var salesTax = '';
var total = '';
var subTotalTextBeforeOffer, salesTaxTextBeforeOffer, totalTextBeforeOffer;
var salesTaxText,
  totalText,
  discountText,
  subTotalTextAfterOffer,
  salesTaxTextAfterOffer,
  totalTextAfterOffer,
  discountTextAfterOffer;
var discount = '';
var subTotalOnDeliveryPage = '';
var salesTaxOnDeliveryPage = '';
var totalOnDeliveryPage = '';
var delMtdUnvForItmsTxt;
var shippingMethod = '';
var proxyUserSection = '';
var proxyUserEmail = '';
var zipCodeArrays = [];
var sddAvailableMessage = '';
var saveZipCodeSdd;
var bopisAvailableMessage = '';
var saveZipCodeBopis;
var saveAvailableStoreName = '';
var saveAvailableStoreNameText;
var keepThisAddress = '';
var CookieAcceptButton = '';
var PopupTopRight = '';
var clickTerms = '';
var enterCreditCardNumber = '';
var clickPaymentButton = '';
var streetName = '';
var streetNumber = '';
var cityName = '';
var postalCode = '';
var enterCvv = '';
var SelectMonth = '';
var SelectYear = '';
var cardHolderName = '';
var NewEmailId = '';
var guIds = [];
var pollingTime = '';
var waitingTime = '';
var clickSelectStore = '';
var clickSelectStoreMcFr = '';
var clickSomeoneElse = '';
var dropUnvItems = '';
var validateUnvlDropped = '';
var openingHoursBopisSpp1 = '';
var openingHoursBopisSpp1Li = '';
var streetNameShp = '';
var caPopup = '';
var streetNumberShp = '';
var cityNameShp = '';
var postalCodeShp = '';
var boPhoneShp = '';
var afterPayButton = '';
var emulatedDevice = '';
var giftCardCheckBox = '';
var footerText = '';
var clickCart = '';
var commonMessages = {
  stepNotApplicable: 'This step is not applicable for this Brand/Locale',
  popupOrderPage:
    'Orderpage Popup Close is not displayed and hence this step is skipped',
  placeOrderReview:
    'Place order review is not displayed and hence this step is skipped',
  delMethod: 'Delivery methods is not displayed and hence this step is skipped',
  orderPlacement: 'Order placed successfully',
  cartPageMatch: 'In Cartpage and selected product also matched===Pass',
  vtoElements: 'VTO Elements are Displaying',
  tryItOn: 'TryItOn Button not present in SPP page',
  clickedOnShade: 'Clicked on Shade',
  vtoAndCartNoMatch: 'VTO and Cart Ovelay Shades are not matching',
  vtoAndCartMatch: 'VTO and Cart Ovelay Shades are matching',
  vtoPopupClose: 'Clicked on VTO Overlay Close Button',
  proNotAvailable: 'Product not available',
  orderDetailsFree: 'Shipping Charge is FREE on Order Details Page',
  itmAvailableAll:
    'All the items are available and hence step has been skipped',
  stateCityNoPopup: 'State City did not get pre populated',
  gfIsApplied: 'Gift card is applied properly',
  navSuccess: 'Successfully navigated to expected page',
  navFailure: 'Not able to navigate to expected page',
  shpChargeFreeDel: 'Shipping Charge is FREE on Delivery Page',
  shpChargeNoFdel: 'Shipping Charge is not FREE on Delivery Page',
  someItemsUnv:
    'Delivery method unavailable for some items is not applicable for this Brand/Locale',
  droppedUnvItms: 'Unavailable items dropped',
  cartSameDay: 'Delivery method is Same Day Delivery on Cart Page',
  cartBopis: 'Delivery method is Pickup in store on Cart Page',
  proNoAddCart: 'Product not added to cart',
  skuAvlbtBopSdd: 'Sku added is available for both Bopis and Same day delivery',
  skuNtAvlbtBs: 'Sku is not available for both Bopis and Same day delivery',
  noPreSelectedStore: 'There are no pre selected store',
  tempRemPage: 'Temporarily removed sample page from this site',
  toggleBtnClickedOrNtAvl: 'See more locations button is already clicked or not applicable for this brand and Locale',
  afterpayBtnNtVis: 'Afterpay button is not visible',
  gftCardChoosed: 'Gift card option is chosen',
  geoLocSet: 'Geo location set',
  seeMrLocBtnNtDis: 'See more locations button is not applicable for this brand and Locale',
  shpFreeOnDelPg: 'Shipping Charge is FREE on Delivery Page as expected',
  shpNtFreeOnDelPg: 'Shipping Charge should be FREE but it is not on Delivery Page',
  shpFreeOnPayPg: 'Shipping Charge is FREE on Payment Page',
  shpNtFreeOnPayPg: 'Shipping Charge is not FREE on Payment Page',
  shpNtFreeOnOrdDetPg: 'Shipping Charge is not FREE on Order Details Page',
  shpFreeOnCartPg: 'Shipping Charge FREE on Cart Page as expected',
  shpNtFreeOnCartPg: 'Shipping Charge is not FREE on Cart Page',
  bopDelMtOnDelPg: 'Delivery Method is BOPIS on Delivery Page',
  bopDelMtNtOnDelPg: 'Delivery Method is not BOPIS on Delivery Page',
  bopDelMtOnPayPg: 'Delivery Method is BOPIS on Payment Page',
  bopDelMtNtOnPayPg: 'Delivery Method is not BOPIS on Payment Page',
  ntBopDelMtOnCarPg: 'Delivery Method is not Pickup in store on Cart Page',
  bopDtMtdOnOrdDtPg: 'Delivery Method is Pickup in store on Order Details Page',
  bopDtMtdNtOnOrdDtPg: 'Delivery Method is not Pickup in store on Order Details Page',
  sddErrMsgDisp: 'Same Day Delivery Not Available Error Message is Displaying',
  sddErrMsgNtDisp: 'Same Day Delivery Not Available Error Message is not Displaying',
  edtStoreBtnClck: 'Edit store button clicked',
  allPrAvlInAllBopStrs: 'All products are available in all the bopis stores',
  sddDelMtOnDelPg: 'Delivery Method is Same Day Delivery on Delivery Page',
  sddDelMtNtOnDelPg: 'Delivery Method is not Same Day Delivery on Delivery Page',
  sddDelMtdNtOnCarPg: 'Delivery Method is not Same Day Delivery on Cart Page',
  delMtSddOnPayPg: 'Delivery Method is Same Day Delivery on Payment Page',
  delMtSddNtOnPayPg: 'Delivery Method is not Same Day Delivery on Payment Page',
  delMtSddOnOrdDetPg: 'Delivery Method is Same Day Delivery on Order Details Page',
  delMtSddNtOnOrdDetPg: 'Delivery Method is not Same Day Delivery on Order Details Page',
  ordPlcdCrtIsEmp: 'Order Placed- Successfully, hence cart is empty',
  clngTheCrt: 'Cleaning the cart',
  diffStrLnkClck: 'SelectDifferentStore link clicked',
  smpAlrtMessDis: 'Samples alert message is displaying',
  smpAlrtMessChng: 'Alert message for samples has been changed',
  smpAlrtMessNtDis: 'Alert message for samples is not displayed',
  allItmsBtNtWor: 'One or more stores listed do not have all the items and hence concluding that All Items Available Button is not working',
  gftCrdAppBtnClick: 'Gift card apply button is clicked',
  gftCrdAmtAppSuc: 'Gift card amount is applied successfully',
  strsNtDisWithinTwoHunMi: 'Stores displayed are not withinn 200 miles',
  allItmTogBtNtWor: 'All Items Available Toggle Button is not functioning correctly for BOPIS overlay in SPP',
  nvgBckToHmPg: 'Navigated back to home tab',
  sddNtAvlInDelPg: 'Product is not available for SDD on Delivery Page',
  addSugPopNtDis: 'Address suggestion popup is not displayed',
  stpNtAplForMob: 'This step is not applicable for mobile device',
  fielNtAplForProd: 'This field is not applicable for PROD environment',
  popNtDis: 'Popup not displayed',
  akaBypSetToOne: 'Akamai bypass set to 1',
  akaBypSetToZero: 'Akamai bypass set to 0',
  varnBypSetToOne: 'Varnish bypass set to 1',
};
var matchCondition = true;
var seeMoreLocations = '';
var selectTheStoreDelivery = '';
var selectGiftCard = '';
var totAmtToPayBefGcIsAppl1 = '';
var totAmtToPayBefGcIsAppl;
var bopisNonAvailableMessageText;
var bopisAvailableMessageText;
var sddNonAvailableMessageText;
var sddAvailableMessageText;
var proxyUserEmailText;
var proxyUserText;
var shippingMethodText;
var numproductsOnDeliverPage;
var pagetitle;
var ShippingChargeDeliveryPage;
var offerCodeSuccessMessageText;
var invalidZipCodeText;
var estimatedTotalTextAfter;
var estimatedTotalText;
var totalCartValueText;
var moreInformationSDDText;
var moreInformationBOPISText;
var storeTimingsSplit;
var storeTimings;
var openingHoursLength;
var InvstatusTxt;
var availableStoresTexts;
var storesDistance;
var storesDistances;
var expectedZipCodeOnSPP;
var totalAmountToBePaidByAfterpayText;
var numstore;
var SddTextName;
var DeliveryMethodPaymentPage;
var DeliveryMethodCartPage;
var DeliveryMethodDeliveryPage;
var ShippingChargeOrderDetailsPage;
var ShippingChargePaymentPage;
var ShippingChargeCartPage;
var BopisTextName;
var confirmurl;
var availableItemsText;
var storeNameCount;
var increaseQty;
var verGwpInCart;
var verGwpInDelPg;
var plusIconOnPayPg;
var offerUrl;
var offerTextData;
var bopPgUrl;
var offerText;
var verGwpInOrdPg;

const assert = require('assert');
var CommonData = {};
var feature = 'BOPIS';

let siteDefinition, source, NullDataException;

// To convert a given url to mobile url, if the platform is mobile

function reinitialize() {
  zipCodeArrays = [
    CommonData.zipCode1,
    CommonData.zipCode2,
    CommonData.zipCode3,
    CommonData.zipCode4,
    CommonData.zipCode5,
  ];
  guIds = [
    CommonData.GID,
    CommonData.GID1,
    CommonData.GID2,
    CommonData.GID3,
    CommonData.GID4,
    CommonData.GID5,
    CommonData.GID6,
    CommonData.GID7,
    CommonData.GID8,
    CommonData.GID9,
    CommonData.GID10,
    CommonData.GID11,
    CommonData.GID12,
    CommonData.GID13,
    CommonData.GID14,
    CommonData.GID15,
  ];
}


function makeEmail() {
  var strValues = 'abcdefghijk12345678';
  var strEmail = '';
  var strTmp;
  for (let i = 0; i < 10; i++) {
    strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
    strEmail = strEmail + strTmp;
  }
  strEmail = strEmail + '@test.com';
  return strEmail;
}

function generateGuestUserId() {
  return guIds[Math.floor(Math.random() * guIds.length)];
}

async function initFrameworkSettings() {
  // This should come from Gauge Tags inputs
  const tags = process.env.tags.split(',');
  ({ siteDefinition, source, NullDataException } = await Hengine.Initializer(
    tags,
    feature,
    this
  ));
  // Abort, if there is any error while setting up the locators and test data
  if (NullDataException.isError) {
    assert(!matchCondition, NullDataException.message.join('\n'));
  }

  // Override this
  Object.assign(this, source);
  // Taiko API overrides
  t = await Helper.initAutoHeal(siteDefinition, t);

  // Re-initialize variables
  reinitialize();

  // Delete all the cookies
  await t.deleteCookies();

  gauge.message('ENVIRONMENT : ' + siteDefinition.executionContext.environment);
}

async function closePopups(locator) {
  await t.waitFor(await t.$(locator), parseInt(waitingTime));
  if (locator !== '') {
    if (
      await (
        await t.$(locator)
      ).exists(parseInt(pollingTime), parseInt(waitingTime))
    ) {
      await t.evaluate(await t.$(locator), (ele) => {
        ele.focus();
        ele.click();
      });
    }
  } else {
    gauge.message(commonMessages.popNtDis);
  }
}

step('BOPIS Initialize Helix', async function () {
  // Initialize the selectors from DB
  await initFrameworkSettings();
});

step('BOPIS Configuring the prerequisites', async function () {
  t.setConfig({ navigationTimeout: parseInt(timeoutSetting, 10) });
  await Helper.setWindowSize(Util.ScreenSizes['1040p'], t);
  await Helper.setWAFCookie(siteDefinition, t);
  await Helper.setAdroll(siteDefinition, t);
  await Helper.setAkamaiBypass(siteDefinition, t);
  await Helper.setApiEnv(siteDefinition, t);
  await Helper.getPerlgemEnvCookie(siteDefinition, t);
  await Helper.setOtherCookies(siteDefinition, t);
  await Helper.setTestOrderCookie(siteDefinition, t);
});

step('BOPIS set revision tag', async function () {
  Helper.setRevisionTag(siteDefinition, t);
  await t.goto(siteDefinition.executionContext.url, { waitForEvents: ['loadEventFired'] });
});

step('BOPIS CHECKOUT VIEW CART', async function () {
  if (checkoutButtonId !== '') {
    await t.evaluate(await t.$(checkoutButtonId), (ele) => ele.click());
    gauge.screenshot();
  }
});

step('BOPIS Select Gift Card', async function () {
  if (selectGiftCard !== '') {
    totAmtToPayBefGcIsAppl = await (await t.$(totAmtToPayBefGcIsAppl1)).text();
    if (!CommonData.BrandLocaleList.includes('MC-FR')) {
      totAmtToPayBefGcIsAppl = totAmtToPayBefGcIsAppl.split('$')[1];
    }
    else {
      totAmtToPayBefGcIsAppl = parseFloat(totAmtToPayBefGcIsAppl.substring(0, totAmtToPayBefGcIsAppl1.length - 1));
    }
    gauge.message('totalAmountToPayBeforeGiftCardIsAppliedText = ' + totAmtToPayBefGcIsAppl);
    t.waitFor(async () => await (await t.$(selectGiftCard)).exists());
    await t.evaluate(await t.$(selectGiftCard), (ele) => ele.click());
    gauge.message(commonMessages.gftCardChoosed);
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
  gauge.screenshot();
});

step('BOPIS Sign in as GUEST from data file', async function () {
  if (guestUserId !== '') {
    NewEmailId = generateGuestUserId();
    gauge.message('User logged in as ' + NewEmailId);
    await t.write(NewEmailId, t.into(await t.$(guestUserId)));
  }
});

step('BOPIS Continue As Guest User', async function () {
  if (continueAsGuest !== '') {
    await t.evaluate(await t.$(continueAsGuest), (ele) => ele.click());
    gauge.screenshot();
    await t.waitFor(parseInt(waitingTime)); // Waiting to load delivery page and delivery tabs
  }
});

step('BOPIS Enter FIRSTNAME', async function () {
  if (enterFirstName !== '') {
    await t.evaluate(await t.$(enterFirstName), (ele) => ele.click());
    await t.write(CommonData.FIRSTNAME, t.into(await t.$(enterFirstName)));
  }
});

step('BOPIS Enter LASTNAME', async function () {
  if (enterLastName !== '') {
    await t.write(CommonData.LASTNAME, t.into(await t.$(enterLastName)));
  }
});

step('BOPIS Enter ADDRESS1', async function () {
  if (enterAddress1 !== '') {
    await t.evaluate(await t.$(enterAddress1), (ele) => ele.focus());
    await t.write(CommonData.ADDRESS1, t.into(await t.$(enterAddress1)));
    await t.press('Tab');
  }
});

step('BOPIS Enter ADDRESS2', async function () {
  if (enterAddress2 !== '') {
    await t.write(CommonData.ADDRESS2, t.into(await t.$(enterAddress2)));
    await t.press(['Control', 'KeyA']);
    await t.press('Delete');
    await t.write(CommonData.ADDRESS2, t.into(await t.$(enterAddress2)));
  }
});

step('BOPIS Enter PHONE', async function () {
  if (enterPhone !== '') {
    await t.write(CommonData.PHONE, t.into(await t.$(enterPhone)), {
      delay: parseInt(pollingTime),
    });
  }
});

step('BOPIS Click On Order Review Details Continue Button and Proceed to Payment Page', async function () {
  if (continueToPayment1 !== '') {
    if (await (await t.$(continueToPayment1)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
      await t.evaluate(await t.$(continueToPayment1), (ele) => ele.click());
      gauge.screenshot();
    }
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
}
);

step('BOPIS Enter CREDITCARD Number', async function () {
  if (creditCardNumber !== '') {
    if (await (await t.$(creditCardNumber)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
      await t.evaluate(await t.$(creditCardNumber), (ele) => ele.focus());
      await t.write(CommonData.CREDITCARD, t.into(await t.$(creditCardNumber)));
    }
  }
});

step('BOPIS Enter CVV Number', async function () {
  if (cvvFieldId !== '') {
    await t.write(CommonData.CVV, t.into(await t.$(cvvFieldId)));
  }
});

step('BOPIS Enter PC MONTH and YEAR', async function () {
  if (pcMonthYear !== '') {
    await t.write(CommonData.PCCVVMONTH, t.into(await t.$(pcMonthYear)));
    gauge.screenshot();
  }
});

step('BOPIS Click On Guest User / New User / Return Place Order', async function () {
  if (placeOrder !== '') {

    /* Click On Place order is applicable for few Brand/Locale/platform(PC/MOB) */
    await t.evaluate(await t.$(placeOrder), (ele) => ele.click());
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
}
);

step('BOPIS Return User Signin Link', async function () {
  if (returnUserSigninLink !== '') {

    /** Click On Return User Shipping Details Edit Link is applicable for few Brand/Locale/platform(PC/MOB) */
    await t.evaluate(await t.$(returnUserSigninLink), (ele) => ele.click());
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Return User Email Id <ruemailid>', async function (ruemailid) {
  if (returnUserId !== '') {
    const returnUser = ruemailid;
    await t.write(returnUser, t.into(await t.$(returnUserId)));
    gauge.message(returnUser);
  }
});

step('BOPIS Return User PWD', async function () {
  if (returnUserPwd !== '') {
    await t.write(CommonData.RPWD, t.into(await t.$(returnUserPwd)));
  }
});

step('BOPIS Return User Signin Button', async function () {
  if (returnUserSigninButton !== '') {
    await t.evaluate(await t.$(returnUserSigninButton), (ele) => ele.click());
    gauge.screenshot();
  }
});

step('BOPIS Return Enter ADDRESS1', async function () {
  if (returnEnterAddress1 !== '') {
    await t.write(CommonData.ADDRESS1, t.into(await t.$(returnEnterAddress1)));
  }
});

/**       MOB Steps           **/

step('BOPIS Mobile Device Emulation', async function () {
  await t.emulateDevice(emulatedDevice);
  gauge.message('Emulation device: ' + emulatedDevice);
});

step('BOPIS MOB CHECKOUT VIEWCART', async function () {
  if (checkoutButtonId !== '') {

    /** MOB checkout viewcart is applicable for few Brand/Locale/platform(MOB) */
    await t.evaluate(await t.$(mobCheckoutViewCart), (ele) => ele.click());
    if (await (await t.$(afterPayButton)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
      await t.evaluate(await t.$(afterPayButton), (ele) => ele.click());
    }
    else {
      gauge.message(commonMessages.afterpayBtnNtVis);
    }
    gauge.screenshot();
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS MOB Return User Signin Link', async function () {
  if (mobReturnUserSigninLink !== '') {
    await t.evaluate(await t.$(mobReturnUserSigninLink), (ele) => ele.click());
  }
});

step('BOPIS MOB Guest User Link', async function () {
  if (mobGuestUserLink !== '') {
    await t.evaluate(await t.$(mobGuestUserLink), (ele) => ele.click());
  }
});

step('BOPIS Enter CITY', async function () {
  if (enterCity !== '') {
    await t.write(CommonData.CITY, t.into(t.textBox({ id: enterCity })));
  }
});

step('BOPIS Enter State', async function () {
  if (selectState1 !== '') {
    await t.evaluate(await t.$(selectState1), (ele) => ele.click());
    await t.evaluate(await t.$(state), (ele) => ele.click());
  }
  else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Guest User Link', async function () {
  if (guestUserLink !== '') {
    await t.evaluate(await t.$(guestUserLink), (ele) => ele.click());
  }
});

step(
  'BOPIS MOB Click On Order Review Details Continue Button and Proceed to Payment Page',
  async function () {
    if (mobContinueToPayment1 !== '') {
      if (
        await (
          await t.$(mobContinueToPayment1)
        ).exists(parseInt(pollingTime), parseInt(waitingTime))
      ) {
        await t.evaluate(await t.$(mobContinueToPayment1), (ele) => ele.click());
        gauge.screenshot();
      }
    } else {
      gauge.message(commonMessages.stepNotApplicable);
    }
  }
);

step(
  'BOPIS MOB Click On Guest User / New User / Return Place Order',
  async function () {
    if (mobPlaceOrder !== '') {

      /** place order review is applicable for few Brand/Locale/platform(MOB) */
      if (CommonData.BrandLocaleList.includes('MC-FR')) {
        await t.evaluate(await t.$(footerText), (ele) => ele.scroll());
        await t.evaluate(await t.$(mobPlaceOrder), (ele) => ele.click());
      }
      else {
        await t.evaluate(await t.$(mobPlaceOrder), (ele) => ele.click());
        await t.waitFor(parseInt(waitingTime)); // Waiting to place order and getting the order confirmation page loaded
      }
    }
    else {
      gauge.message(commonMessages.stepNotApplicable);
    }
  }
);

step('BOPIS Place order validation', async function () {
  if (placeOrderValidation !== '') {
    if (flagForUserType === 'G') {
      for (let i = 1; i <= 3; i++) {
        if (await (await t.$(ocMsgIdGu)).exists()) {
          getOrderNumber = await (await t.$(ocMsgIdGu)).text();
          confirmurl = await t.currentURL();
          assert(confirmurl.includes(placeOrderValidation));
          gauge.message(commonMessages.orderPlacement);
          gauge.message(getOrderNumber);
          console.log(getOrderNumber);
          gauge.screenshot();
          break;
        } else {
          await t.waitFor(parseInt(waitingTime)); // Waiting for the order confirmation page if incase it was not loaded
        }
      }
    } else if (flagForUserType === 'N' || flagForUserType === 'R') {
      for (let i = 1; i <= 3; i++) {
        if (await (await t.$(ocMsgIdOtherUser)).exists()) {
          getOrderNumber = await (await t.$(ocMsgIdOtherUser)).text();
          confirmurl = await t.currentURL();
          assert(confirmurl.includes(placeOrderValidation));
          gauge.message(commonMessages.orderPlacement);
          gauge.message(getOrderNumber);
          gauge.screenshot();
          break;
        } else {
          await t.waitFor(parseInt(waitingTime)); // Waiting for the order confirmation page if incase it was not loaded
        }
      }
    }
  }
});

step('BOPIS Set Geolocation', async function () {
  await t.overridePermissions(siteDefinition.executionContext.url, ['geolocation'], t);
  await t.setLocation({ latitude: parseFloat(CommonData.Latitude), longitude: parseFloat(CommonData.Longitude), accuracy: parseInt(CommonData.Accuracy) }, t);
  console.log(commonMessages.geoLocSet);
});

// Bopis steps

step('BOPIS Click Instore pickup', async function () {
  if (inStorePick !== '') {
    await t.evaluate(await t.$(inStorePick), (ele) => ele.click());
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Click select store', async function () {
  if (inventoryStatus !== '') {
    if (
      CommonData.BrandLocaleList.includes('AV-US') ||
      CommonData.BrandLocaleList.includes('AV-CA') ||
      CommonData.BrandLocaleList.includes('MC-US') ||
      CommonData.BrandLocaleList.includes('MC-CA')
    ) {
      if (inventoryStatus !== '') {
        gauge.screenshot();
        if (await (await t.$(seeMoreLocations)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
          await t.evaluate(await t.$(seeMoreLocations), (ele) => ele.click());
          storeNameCount = (await (await t.$(storesName)).elements()).length;
        } else {
          gauge.message(commonMessages.seeMrLocBtnNtDis);
        }
        console.log('stores name count ', storeNameCount);
        for (let i = 1; i <= storeNameCount; i++) {
          storesNameText = await (await t.$(storesName + '[' + i + ']')).text();
          console.log('Store Name', storesNameText);
          console.log('Store Name coming from SPP', saveAvailableStoreNameText);
          if (saveAvailableStoreNameText.includes(storesNameText)) {
            console.log('Store Name ', storesNameText);
            availableItemsText = await (
              await t.$(inventoryStatus + '[' + i + ']')
            ).text();
            console.log(availableItemsText);
            if (availableItemsText.includes(CommonData.AvlStatus)) {
              statusFlag = 1;
              await t.evaluate(await t.$(clickSelectStore), (ele) => ele.click());
              break;
            }
          }
        }
        if (statusFlag === '') {
          console.log(commonMessages.proNotAvailable);
        }
      }
    } else if (CommonData.BrandLocaleList.includes('JM-US')) {
      if (siteDefinition.executionContext.environment === 'PROD') {
        if (inventoryStatus !== '') {
          gauge.screenshot();
          storeNameCount = (await (await t.$(storesName)).elements()).length;
          if (await (await t.$(seeMoreLocations)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
            await t.evaluate(await t.$(seeMoreLocations), (ele) => ele.click());
          } else {
            gauge.message(commonMessages.seeMrLocBtnNtDis);
          }
          console.log('stores name count ', storeNameCount);
          for (let i = 1; i <= storeNameCount; i++) {
            storesNameText = await (await t.$(storesName + '[' + i + ']')).text();
            console.log('Store Name', storesNameText);
            console.log('Store Name coming from SPP', saveAvailableStoreNameText);
            if (saveAvailableStoreNameText.includes(storesNameText)) {
              console.log('Store Name ', storesNameText);
              availableItemsText = await (
                await t.$(inventoryStatus + '[' + i + ']')
              ).text();
              console.log(availableItemsText);
              if (availableItemsText.includes(CommonData.AvlStatus)) {
                statusFlag = 1;
                await t.evaluate(await t.$(selectTheStoreDelivery), (ele) =>
                  ele.click()
                );
                break;
              }
            }
          }
          if (statusFlag === '') {
            console.log(commonMessages.proNotAvailable);
          }
        }
      }
      else {
        if (inventoryStatus !== '') {
          gauge.screenshot();
          storeNameCount = (await (await t.$(storesName)).elements()).length;
          if (await (await t.$(seeMoreLocations)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
            await t.evaluate(await t.$(seeMoreLocations), (ele) => ele.click());
          } else {
            gauge.message(commonMessages.seeMrLocBtnNtDis);
          }
          console.log('stores name count ', storeNameCount);
          for (let i = 1; i <= storeNameCount; i++) {
            storesNameText = await (await t.$(storesName + '[' + i + ']')).text();
            console.log('Store Name', storesNameText);
            availableItemsText = await (await t.$(inventoryStatus + '[' + i + ']')).text();
            console.log(availableItemsText);
            if (availableItemsText.includes(CommonData.AvlStatus)) {
              statusFlag = 1;
              await t.evaluate(await t.$(selectTheStoreDelivery), (ele) =>
                ele.click()
              );
              break;
            }
          }
          if (statusFlag === '') {
            console.log(commonMessages.proNotAvailable);
          }
        }
      }
    }
    else if (CommonData.BrandLocaleList.includes('MC-FR')) {
      if (inventoryStatus !== '') {
        await t.waitFor(await t.$(inventoryStatus), parseInt(waitingTime));
        gauge.screenshot();
        storeNameCount = (await (await t.$(storesName)).elements()).length;
        if (await (await t.$(seeMoreLocations)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
          await t.evaluate(await t.$(seeMoreLocations), (ele) => ele.click());
        } else {
          gauge.message(commonMessages.toggleBtnClickedOrNtAvl);
        }
        console.log('stores name count ', storeNameCount);
        for (let i = 1; i <= storeNameCount; i++) {
          storesNameText = await (await t.$(storesName + '[' + i + ']')).text();
          console.log('Store Name', storesNameText);
          console.log('Store Name coming from SPP', saveAvailableStoreNameText);
          if (
            saveAvailableStoreNameText.toUpperCase().includes(storesNameText)
          ) {
            console.log('Store Name ', storesNameText);
            availableItemsText = await (
              await t.$(inventoryStatus + '[' + i + ']')
            ).text();
            console.log(availableItemsText);
            if (availableItemsText.includes(CommonData.AvlStatus)) {
              statusFlag = 1;
              await t.evaluate(await t.$(clickSelectStoreMcFr), (ele) =>
                ele.click()
              );
              break;
            }
          }
        }
        if (statusFlag === '') {
          console.log(commonMessages.proNotAvailable);
        }
      }
    }
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Enter FIRSTNAME Bopis', async function () {
  if (boFirstName !== '') {
    await t.waitFor(await t.$(boFirstName), parseInt(waitingTime));
    await t.write(CommonData.FIRSTNAME, t.into(await t.$(boFirstName)));
    await t.press(['Control', 'KeyA']);
    await t.press('Delete');
    await t.write(CommonData.FIRSTNAME, t.into(await t.$(boFirstName)));
  }
  else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Enter LASTNAME Bopis', async function () {
  if (boLastName !== '') {
    await t.write(CommonData.LASTNAME, t.into(await t.$(boLastName)));
    await t.press(['Control', 'KeyA']);
    await t.press('Delete');
    await t.write(CommonData.LASTNAME, t.into(await t.$(boLastName)));
    await t.press('Tab');
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Enter Phone number Bopis', async function () {
  if (boPhone !== '') {
    await t.evaluate(await t.$(boPhone), (ele) => ele.ele.focus());
    await t.write(CommonData.PHONE, t.into(await t.$(boPhone)), { delay: parseInt(pollingTime) });
    const Phonevalue = await (await t.$(boPhone)).attribute('value');
    const Phonevaluelength = Phonevalue.length;
    console.log(Phonevalue);
    console.log(Phonevaluelength);
    for (let i = Phonevaluelength; i >= 1; i--) {
      await t.press('Backspace');
    }
    await t.write(CommonData.PHONE, t.into(await t.$(boPhone)), {
      delay: parseInt(pollingTime),
    });
    gauge.screenshot();
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Enter Phone number Bopis shipping', async function () {
  if (boPhoneShp !== '') {
    await t.evaluate(await t.$(boPhoneShp), (ele) => ele.ele.focus());
    await t.write(CommonData.phoneShp, t.into(await t.$(boPhoneShp)), { delay: parseInt(pollingTime) });
    const Phonevalue = await (await t.$(boPhoneShp)).attribute('value');
    const Phonevaluelength = Phonevalue.length;
    console.log(Phonevalue);
    console.log(Phonevaluelength);
    for (let i = Phonevaluelength; i >= 1; i--) {
      await t.press('Backspace');
    }
    await t.write(CommonData.phoneShp, t.into(await t.$(boPhoneShp)), {
      delay: parseInt(pollingTime),
    });
    gauge.screenshot();
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Enter Email Bopis', async function () {
  if (boEmail !== '') {
    await t.write(makeEmail(), t.into(await t.$(boEmail)));
    await t.press(['Control', 'KeyA']);
    await t.press('Delete');
    await t.write(makeEmail(), t.into(await t.$(boEmail)));
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Enter Billing FIRSTNAME', async function () {
  if (billFirstName !== '') {
    if (flagForUserType === "G") {
      if (billFirstName !== '') {
        await t.write(CommonData.FIRSTNAME, t.into(await t.$(billFirstName)));
      }
    }
    else if (flagForUserType === "R") {
      if (!CommonData.BrandLocaleList.includes('MC-FR')) {
        if (billFirstName !== '') {
          await t.write(CommonData.FIRSTNAME, t.into(await t.$(billFirstName)));
        }
      }
    }
  }
  else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Enter Billing LASTNAME', async function () {
  if (billLastName !== '') {
    if (flagForUserType === "G") {
      if (billLastName !== '') {
        await t.write(CommonData.LASTNAME, t.into(await t.$(billLastName)));
      }
    }
    else if (flagForUserType === "R") {
      if (!CommonData.BrandLocaleList.includes('MC-FR')) {
        if (billLastName !== '') {
          await t.write(CommonData.LASTNAME, t.into(await t.$(billLastName)));
        }
      }
    }
  }
  else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Enter Billing ADDRESS1', async function () {
  if (billAddress1 !== '') {
    await t.write(CommonData.ADDRESS1, t.into(await t.$(billAddress1)));
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Enter Billing ADDRESS2', async function () {
  if (billAddress2 !== '') {
    await t.write(CommonData.ADDRESS2, t.into(await t.$(billAddress2)));
  }
  else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Enter Billing PHONE', async function () {
  if (billPhone !== '') {
    if (flagForUserType === "G") {
      if (billPhone !== '') {
        await t.write(CommonData.PHONE, t.into(await t.$(billPhone)), { delay: parseInt(pollingTime) });
      }
    }
    else if (flagForUserType === "R") {
      if (!CommonData.BrandLocaleList.includes('MC-FR')) {
        if (billPhone !== '') {
          await t.write(CommonData.PHONE, t.into(await t.$(billPhone)), { delay: parseInt(pollingTime) });
        }
      }
    }
  }
  else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Enter Billing CITY', async function () {
  if (!CommonData.BrandLocaleList.includes('JM-US')) {
    if (billCity !== '') {
      await t.write(CommonData.CITY, t.into(await t.$(billCity)));
    }
  }
  else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Click Someone Else Radio Button', async function () {
  if (!CommonData.BrandLocaleList.includes('MC-FR')) {
    if (someoneElseRadioButton !== '') {
      const isSelected = await (await t.$(clickSomeoneElse)).attribute('aria-checked');
      console.log(isSelected);
      await t.evaluate(await t.$(clickSomeoneElse), (ele) => ele.scrollIntoView());
      if (isSelected === matchCondition) {
        gauge.screenshot();
      } else if (isSelected === !matchCondition) {
        await t.evaluate(await t.$(someoneElseRadioButton), (ele) => ele.click());
        gauge.screenshot();
      }
    }
  }
  else {
    if (someoneElseRadioButton !== '') {
      await t.evaluate(await t.$(clickSomeoneElse), (ele) => ele.scrollIntoView());
      await t.evaluate(await t.$(someoneElseRadioButton), (ele) => ele.click());
      gauge.screenshot();
    }
  }
});

step('BOPIS Enter Someone Else FIRSTNAME', async function () {
  if (someoneElseFirstName !== '') {
    await t.write(CommonData.FIRSTNAME, t.into(await t.$(someoneElseFirstName)));
    await t.press(['Control', 'KeyA']);
    await t.press('Delete');
    await t.write(CommonData.FIRSTNAME, t.into(await t.$(someoneElseFirstName)));
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Enter Someone Else LASTNAME', async function () {
  if (someoneElseLastName !== '') {
    await t.write(CommonData.LASTNAME, t.into(await t.$(someoneElseLastName)));
    await t.press(['Control', 'KeyA']);
    await t.press('Delete');
    await t.write(CommonData.LASTNAME, t.into(await t.$(someoneElseLastName)));
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Enter Someone Else PHONE', async function () {
  if (someoneElsePhone !== '') {
    await t.evaluate(await t.$(someoneElsePhone), (ele) => ele.ele.focus());
    await t.write(CommonData.PHONE, t.into(await t.$(someoneElsePhone)), { delay: parseInt(pollingTime) });
    const Phonevalue = await (await t.$(someoneElsePhone)).attribute('value');
    const Phonevaluelength = Phonevalue.length;
    console.log(Phonevalue);
    console.log(Phonevaluelength);
    for (let i = Phonevaluelength - 1; i >= 2; i--) {
      await t.press('Backspace');
    }
    await t.write(CommonData.PHONE, t.into(await t.$(someoneElsePhone)), { delay: parseInt(pollingTime) });
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Enter Someone Else EMAIL', async function () {
  if (someoneElseEmail !== '') {
    await t.write(makeEmail(), t.into(await t.$(someoneElseEmail)));
    await t.press(['Control', 'KeyA']);
    await t.press('Delete');
    await t.write(makeEmail(), t.into(await t.$(someoneElseEmail)));
    someoneElseEmailTxt = await (await t.$(someoneElseEmail)).attribute('value');
    gauge.screenshot();
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Verify Shipping Charge is FREE on Delivery Page', async function () {
  if (shippingChargeOnDeliveryPage !== '') {
    if (!CommonData.BrandLocaleList.includes('MC-FR')) {
      ShippingChargeDeliveryPage = (await (await t.$(shippingChargeOnDeliveryPage)).text()).toUpperCase();
      console.log(ShippingChargeDeliveryPage);
      await (await t.$(shippingChargeOnDeliveryPage)).exists();
      if (ShippingChargeDeliveryPage.includes(CommonData.ShippingChargeForBOPISDelPage.toUpperCase()) || ShippingChargeDeliveryPage.includes(CommonData.ShippingChargeForBOPISDelPage)) {
        gauge.message(commonMessages.shpFreeOnDelPg);
        assert(matchCondition);
        gauge.screenshot();
      } else {
        gauge.message(
          'The actual value for Shipping Charge is = ' +
          ShippingChargeDeliveryPage
        );
        gauge.message(commonMessages.shpNtFreeOnDelPg);
        assert(!matchCondition);
      }
    }
    else {
      await t.reload({ waitForEvents: ['DOMContentLoaded'] });
      await t.waitFor(await t.$(boFirstName), parseInt(waitingTime));
      await t.write(CommonData.FIRSTNAME, t.into(await t.$(boFirstName)));
      await t.press(['Control', 'KeyA']);
      await t.press('Delete');
      await t.write(CommonData.FIRSTNAME, t.into(await t.$(boFirstName)));
      await t.write(CommonData.LASTNAME, t.into(await t.$(boLastName)));
      await t.press(['Control', 'KeyA']);
      await t.press('Delete');
      await t.write(CommonData.LASTNAME, t.into(await t.$(boLastName)));
      await t.press('Tab');
      await t.evaluate(await t.$(boPhone), (ele) => ele.ele.focus());
      await t.write(CommonData.PHONE, t.into(await t.$(boPhone)), { delay: parseInt(pollingTime) });
      const Phonevalue = await (await t.$(boPhone)).attribute('value');
      const Phonevaluelength = Phonevalue.length;
      console.log(Phonevalue);
      console.log(Phonevaluelength);
      for (let i = Phonevaluelength; i >= 1; i--) {
        await t.press('Backspace');
      }
      await t.write(CommonData.PHONE, t.into(await t.$(boPhone)), {
        delay: parseInt(pollingTime),
      });
      ShippingChargeDeliveryPage = await (await t.$(shippingChargeOnDeliveryPage)).text();
      console.log(ShippingChargeDeliveryPage);
      await (await t.$(shippingChargeOnDeliveryPage)).exists();
      if (ShippingChargeDeliveryPage.includes(CommonData.ShippingChargeForBOPISDelPage)) {
        gauge.message(commonMessages.shpFreeOnDelPg);
        assert(matchCondition);
        gauge.screenshot();
      } else {
        gauge.message(
          'The actual value for Shipping Charge is = ' +
          ShippingChargeDeliveryPage
        );
        gauge.message(commonMessages.shpNtFreeOnDelPg);
        assert(!matchCondition);
      }
    }
  }
}
);

step('BOPIS Verify Shipping Charge is FREE on Payment Page', async function () {
  if (shippingChargeOnPaymentPage !== '') {
    ShippingChargePaymentPage = await (
      await t.$(shippingChargeOnPaymentPage)
    ).text();
    console.log(ShippingChargePaymentPage);
    await (await t.$(ShippingChargePaymentPage)).exists();
    if (ShippingChargePaymentPage.includes(CommonData.ShippingChargeForBOPIS)) {
      gauge.message(commonMessages.shpFreeOnPayPg);
      assert(matchCondition);
      gauge.screenshot();
    } else {
      gauge.message(commonMessages.shpNtFreeOnPayPg);
    }
  }
  else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Click On Order Number', async function () {
  if (orderNumber !== '') {
    await t.evaluate(await t.$(orderNumber), (ele) => ele.click());
    gauge.screenshot();
  }
});

step('BOPIS Verify Shipping Charge is FREE on Order Details Page', async function () {
  if (shpChrgOrdDetPage !== '') {
    ShippingChargeOrderDetailsPage = await (await t.$(shpChrgOrdDetPage)).text();
    console.log(ShippingChargeOrderDetailsPage);
    await (await t.$(ShippingChargeOrderDetailsPage)).exists();
    if (ShippingChargeOrderDetailsPage.includes(CommonData.ShippingChargeForBOPIS) || ShippingChargeOrderDetailsPage.includes(CommonData.ShpCrgFrBopPrOdPage)) {
      gauge.message(commonMessages.orderDetailsFree);
      assert(matchCondition);
      gauge.screenshot();
    } else {
      gauge.message(commonMessages.shpNtFreeOnOrdDetPg);
    }
  }
}
);

step('BOPIS Click plus icon on Shopping Bag', async function () {
  if (plusIconOnShoppingBag !== '') {
    if (await (await t.$(plusIconOnShoppingBag)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
      await t.evaluate(await t.$(plusIconOnShoppingBag), (ele) => ele.click());
      t.waitFor(await (await t.$(editIconOnShoppingBag)).exists());
      gauge.screenshot();
    }
    else {
      gauge.message(commonMessages.stepNotApplicable);
    }
  }
});

step('BOPIS Click edit icon on Shopping Bag', async function () {
  if (editIconOnShoppingBag !== '') {
    if (await (await t.$(editIconOnShoppingBag)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
      await t.evaluate(await t.$(editIconOnShoppingBag), (ele) => ele.click());
    }
  }
  else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Verify Shipping Charge is FREE on Cart Page', async function () {
  if (shippingChargeOnCartPage !== '') {
    ShippingChargeCartPage = await (
      await t.$(shippingChargeOnCartPage)
    ).text();
    console.log(ShippingChargeCartPage);
    await (await t.$(ShippingChargeCartPage)).exists();
    if (ShippingChargeCartPage.includes(CommonData.ShippingChargeForBOPIS)) {
      gauge.message(commonMessages.orderDetailsFree);
      assert(matchCondition);
      gauge.screenshot();
      gauge.message(commonMessages.shpFreeOnCartPg);
    } else {
      gauge.message(commonMessages.shpNtFreeOnCartPg);
    }
  }
  else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Verify Delivery Method is BOPIS on Delivery Page', async function () {
  if (deliveryMethodOnDeliveryPage !== '') {
    DeliveryMethodDeliveryPage = await (
      await t.$(deliveryMethodOnDeliveryPage)
    ).text();
    console.log(DeliveryMethodDeliveryPage);
    if (
      DeliveryMethodDeliveryPage.includes(
        CommonData.DeliveryMethodOnDeliveryPage
      )
    ) {
      gauge.message(commonMessages.bopDelMtOnDelPg);
      assert(matchCondition);
      gauge.screenshot();
    } else {
      gauge.message(commonMessages.bopDelMtNtOnDelPg);
    }
  }
}
);

step('BOPIS Verify Delivery Method is BOPIS on Payment Page', async function () {
  if (deliveryMethodOnPaymentPage !== '') {
    DeliveryMethodPaymentPage = await (await t.$(deliveryMethodOnPaymentPage)).text();
    console.log(DeliveryMethodPaymentPage);
    await (await t.$(DeliveryMethodPaymentPage)).exists();
    if (DeliveryMethodPaymentPage.includes(CommonData.DeliveryMethodOnPaymentPage)) {
      gauge.message(commonMessages.bopDelMtOnPayPg);
      assert(matchCondition);
      gauge.screenshot();
    } else {
      gauge.message(commonMessages.bopDelMtNtOnPayPg);
    }
  }
}
);

step('BOPIS Verify Delivery Method is BOPIS on Cart Page', async function () {
  if (deliveryMethodOnCartPage !== '') {
    DeliveryMethodCartPage = await (
      await t.$(deliveryMethodOnCartPage)
    ).text();
    console.log(DeliveryMethodCartPage);
    await (await t.$(DeliveryMethodCartPage)).exists();
    if (DeliveryMethodCartPage.includes(CommonData.DeliveryMethodOnCartPage) || DeliveryMethodCartPage.includes(CommonData.DeliveryMethodOnCartPage.toUpperCase())) {
      gauge.message(commonMessages.cartBopis);
      assert(matchCondition);
      gauge.screenshot();
    } else {
      gauge.message(commonMessages.ntBopDelMtOnCarPg);
    }
  }
});

step('BOPIS Verify Delivery Method is BOPIS on Order Details Page', async function () {
  if (bopDelMetOdPage !== '') {
    if (await (await t.$(bopDelMetOdPage)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
      BopisTextName = await (await t.$(bopDelMetOdPage)).text();
      console.log(BopisTextName);
      if (BopisTextName.includes(CommonData.OrderDetailsBopisName)) {
        gauge.message(commonMessages.bopDtMtdOnOrdDtPg);
        assert(matchCondition);
        gauge.screenshot();
      } else {
        gauge.message(commonMessages.bopDtMtdNtOnOrdDtPg);
      }
    }
  }
  else {
    gauge.message(commonMessages.stepNotApplicable);
  }
}
);

step('BOPIS Select Drop Unavailable Items And Continue', async function () {
  if (flagForUnavailableItems === '') {
    delMtdUnvForItmsTxt = await (await t.$(delMethdUnvSomeItms)).text();
    console.log('Inventory status', delMtdUnvForItmsTxt);
    if (
      delMtdUnvForItmsTxt.includes(CommonData.DeliveryUnavailableForSomeItems)
    ) {
      statusFlag = 2;
      await t.evaluate(
        await t.$(dropUnavailableItemsAndContinue, {
          waitForEvents: ['DOMContentLoaded'],
        }),
        (ele) => ele.click()
      );
      await t.waitFor(parseInt(waitingTime)); // Waiting to drop the unavailable item
      await t.evaluate(await t.$(conBtnRemUnvItm), (ele) => ele.click());
      console.log(commonMessages.droppedUnvItms);
    }
  }
  if (flagForUnavailableItems === 1) {
    delMtdUnvForItmsTxt = await (await t.$(delMethdUnvSomeItms)).text();
    console.log('Inventory status', delMtdUnvForItmsTxt);
    if (
      delMtdUnvForItmsTxt.includes(CommonData.DeliveryUnavailableForSomeItems)
    ) {
      statusFlag = 2;
      await t.evaluate(await t.$(dropUnavailableItemsAndContinue, { waitForEvents: ['DOMContentLoaded'] }), ele => ele.click());
      gauge.screenshot();
      numproductsOnPopUp = (await (await t.$(dropUnvItems)).elements()).length;
      console.log('product count on pop-up: ', numproductsOnPopUp);
      for (let k = 1; k <= numproductsOnPopUp; k++) {
        productsOnPopUp[k] = await (await t.$(dropUnvItems + '[' + k + ']')).text();
        console.log(productsOnPopUp[k]);
      }
      await t.evaluate(await t.$(conBtnRemUnvItm), (ele) => ele.click());
      console.log(commonMessages.droppedUnvItms);
    }
  } else {
    gauge.message(commonMessages.itmAvailableAll);
  }
});

step('BOPIS Click New Billing Address', async function () {
  if (!CommonData.BrandLocaleList.includes('MC-FR')) {
    if (newBillingAddress !== '') {
      await t.evaluate(await t.$(newBillingAddress), (ele) => ele.click());
    }
  }
  else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Select Home Delivery And Continue', async function () {
  if (flagForUnavailableItems === '') {
    await t.waitFor(await t.$(delMtdUnvSomeItms1), parseInt(waitingTime));
    delMtdUnvForItmsTxt = await (await t.$(delMtdUnvSomeItms1)).text();
    console.log('Inventory status', delMtdUnvForItmsTxt);
    if (delMtdUnvForItmsTxt.includes(CommonData.DeliveryUnavailableForSomeItems)) {
      statusFlag = 2;
      await t.evaluate(await t.$(changeToHomeDeliveryAndContinue, { waitForEvents: ['DOMContentLoaded'] }), (ele) => ele.click());
      await t.waitFor(parseInt(waitingTime)); // Waiting for selection of radio button
      await t.evaluate(await t.$(cntBtnRemUnvItm1), (ele) => ele.click());
      console.log(commonMessages.droppedUnvItms);
      await t.waitFor(parseInt(waitingTime)); // Waiting for loading the popup
    }
  }
  else if (flagForUnavailableItems === 1) {
    await t.waitFor(await t.$(delMtdUnvSomeItms1), parseInt(waitingTime));
    delMtdUnvForItmsTxt = await (await t.$(delMtdUnvSomeItms1)).text();
    console.log('Inventory status', delMtdUnvForItmsTxt);
    if (delMtdUnvForItmsTxt.includes(CommonData.DeliveryUnavailableForSomeItems)) {
      statusFlag = 2;
      await t.evaluate(await t.$(changeToHomeDeliveryAndContinue, { waitForEvents: ['DOMContentLoaded'] }), (ele) => ele.click());
      await t.waitFor(parseInt(waitingTime)); // Waiting for selection of radio button
      await t.evaluate(await t.$(cntBtnRemUnvItm1), (ele) => ele.click());
      console.log(commonMessages.droppedUnvItms);
      await t.waitFor(parseInt(waitingTime)); // Waiting for loading the popup
    }
  } else {
    gauge.message(commonMessages.itmAvailableAll);
  }
});

step('BOPIS Click Same Day Delivery', async function () {
  if (sameDayDelivery !== '') {
    await t.evaluate(await t.$(sameDayDelivery), (ele) => ele.click());
    await t.waitFor(parseInt(waitingTime)); // Waiting time to check delivery method selected is SDD
    if (CommonData.BrandLocaleList.includes('AV-CA') || CommonData.BrandLocaleList.includes('MC-CA')) {
      await t.evaluate(await t.$(caPopup), (ele) => ele.click());
    }
    await t.evaluate(await t.$(deliveryMethodOnDeliveryPage), (ele) => ele.scroll());
    if (await (await t.$(deliveryMethodOnDeliveryPage)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
      gauge.screenshot();
    }
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Select deliver to same day option', async function () {
  if (sameDayDeliveryDropdown !== '') {
    await t.waitFor(await t.$(sameDayDeliveryDropdown), parseInt(waitingTime));
    await t.evaluate(await t.$(sameDayDeliveryDropdown), (ele) => ele.click());
    await (
      await t.$(deliverSameDayOption)
    ).exists(parseInt(pollingTime), parseInt(waitingTime));
    await t.evaluate(await t.$(deliverSameDayOption), (ele) => ele.click());
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Enter SDD Address not available', async function () {
  if (sddAddress1NotAvailable !== '') {
    await t.write(
      CommonData.SDDAddressNotAvailable,
      t.into(t.textBox({ id: sddAddress1NotAvailable }))
    );
    await t.press('Tab');
  }
});

step('BOPIS Verify Same Day Delivery Is Not Available Error Message', async function () {
  if (sddNotAvailableMessage !== '') {
    if (await (await t.$(sddNotAvailableMessage)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
      assert(matchCondition);
      gauge.message(commonMessages.sddErrMsgDisp);
      gauge.screenshot();
    } else {
      assert(!matchCondition, commonMessages.sddErrMsgNtDisp);
    }
  }
}
);

step('BOPIS Click CHECKOUT VIEW CART', async function () {
  if (checkoutButton !== '') {
    if (await (await t.$(checkoutButton)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
      await t.evaluate(await t.$(checkoutButton), (ele) => ele.click());
    }
  }
});

step('BOPIS Click edit store', async function () {
  if (invStatusSomeItmsAvl !== '') {
    numstore = (await (await t.$(invStatusSomeItmsAvl)).elements()).length;
    console.log('store count', numstore);
    for (let i = 1; i <= numstore; i++) {
      InvstatusTxt = await (await t.$(inventoryStatus + '[' + i + ']')).text();
      console.log('Inventory status', InvstatusTxt);
      if (InvstatusTxt.includes(CommonData.SomeItemsAvailable)) {
        inventoryStatusFlag = 1;
        await t.evaluate(await t.$(selectTheStoreDelivery + '[' + i + ']'), ele => ele.click());
        gauge.screenshot();
        gauge.message(commonMessages.edtStoreBtnClck);
        break;
      }
    }
    if (inventoryStatusFlag === '') {
      gauge.screenshot();
      gauge.message(commonMessages.allPrAvlInAllBopStrs);
      gauge.message(commonMessages.stepNotApplicable);
    }
  }
});

step('BOPIS Verify Shipping Charge for SDD on Delivery Page', async function () {
  if (shippingChargeOnDeliveryPage !== '') {
    ShippingChargeDeliveryPage = await (await t.$(shippingChargeOnDeliveryPage)).text();
    ShippingChargeDeliveryPage = ShippingChargeDeliveryPage.split('$')[1];
    console.log(ShippingChargeDeliveryPage);
    if (ShippingChargeDeliveryPage * 100 % 100 === '') {
      ShippingChargeDeliveryPage = Math.round(ShippingChargeDeliveryPage);
    }
    if (totalTextBeforeOffer <= parseFloat(CommonData.cartValue) || CommonData.cartValue === '') {
      if (ShippingChargeDeliveryPage === CommonData.shippingCharge2) {
        assert(matchCondition);
        gauge.message(
          'Shipping Charge is ' +
          ShippingChargeDeliveryPage +
          ' on Delivery Page'
        );
      } else {
        gauge.message(
          'Shipping Charge is ' +
          ShippingChargeDeliveryPage +
          ' on Delivery Page instead of ' +
          CommonData.shippingCharge2
        );
        assert(!matchCondition);
      }
    } else if (totalTextBeforeOffer > parseFloat(CommonData.cartValue)) {
      if (ShippingChargeDeliveryPage === CommonData.shippingCharge1) {
        assert(matchCondition);
        gauge.message(
          'Shipping Charge is ' +
          ShippingChargeDeliveryPage +
          ' on Delivery Page'
        );
      } else {
        gauge.message(
          'Shipping Charge is ' +
          ShippingChargeDeliveryPage +
          ' on Delivery Page instead of ' +
          CommonData.shippingCharge1
        );
        assert(!matchCondition);
      }
    }
  }
}
);

step('BOPIS Verify Shipping Charge for SDD on Cart Page', async function () {
  if (shippingChargeOnCartPage !== '') {
    ShippingChargeCartPage = await (await t.$(shippingChargeOnCartPage)).text();
    ShippingChargeCartPage = ShippingChargeCartPage.split('$')[1];
    console.log(ShippingChargeCartPage);

    if (ShippingChargeCartPage * 100 % 100 === '') {
      ShippingChargeCartPage = Math.round(ShippingChargeCartPage);
    }

    if (
      totalTextBeforeOffer <= parseFloat(CommonData.cartValue) ||
      CommonData.cartValue === ''
    ) {
      if (ShippingChargeCartPage === CommonData.shippingCharge2) {
        assert(matchCondition);
        gauge.message(
          'Shipping Charge is ' + ShippingChargeCartPage + ' on Cart Page'
        );
      } else {
        gauge.message(
          'Shipping Charge is ' +
          ShippingChargeCartPage +
          ' on Cart Page instead of ' +
          CommonData.shippingCharge2
        );
        assert(!matchCondition);
      }
    } else if (totalTextBeforeOffer > parseFloat(CommonData.cartValue)) {
      if (ShippingChargeCartPage === CommonData.shippingCharge1) {
        assert(matchCondition);
        gauge.message(
          'Shipping Charge is ' + ShippingChargeCartPage + ' on Cart Page'
        );
      } else {
        gauge.message(
          'Shipping Charge is ' +
          ShippingChargeCartPage +
          ' on Cart Page instead of ' +
          CommonData.shippingCharge1
        );
        assert(!matchCondition);
      }
    }
  }
});

step('BOPIS Verify Shipping Charge for SDD on Payment Page', async function () {
  if (shippingChargeOnPaymentPage !== '') {
    ShippingChargePaymentPage = await (
      await t.$(shippingChargeOnPaymentPage)
    ).text();
    ShippingChargePaymentPage = ShippingChargePaymentPage.split('$')[1];

    console.log(ShippingChargePaymentPage);

    if (ShippingChargePaymentPage * 100 % 100 === '') {
      ShippingChargePaymentPage = Math.round(ShippingChargePaymentPage);
    }

    if (
      totalTextBeforeOffer <= parseFloat(CommonData.cartValue) ||
      CommonData.cartValue === ''
    ) {
      if (ShippingChargePaymentPage === CommonData.shippingCharge2) {
        assert(matchCondition);
        gauge.message(
          'Shipping Charge is ' + ShippingChargePaymentPage + ' on Payment Page'
        );
      } else {
        gauge.message(
          'Shipping Charge is ' +
          ShippingChargePaymentPage +
          ' on Payment Page instead of ' +
          CommonData.shippingCharge2
        );
        assert(!matchCondition);
      }
    } else if (totalTextBeforeOffer > CommonData.cartValue) {
      if (ShippingChargePaymentPage === CommonData.shippingCharge1) {
        assert(matchCondition);
        gauge.message(
          'Shipping Charge is ' + ShippingChargePaymentPage + ' on Payment Page'
        );
      } else {
        gauge.message(
          'Shipping Charge is ' +
          ShippingChargePaymentPage +
          ' on Payment Page instead of ' +
          CommonData.shippingCharge1
        );
        assert(!matchCondition);
      }
    }
  }
});

step('BOPIS Verify Shipping Charge for SDD on Order Details Page', async function () {
  if (shippingChargeOnPrintPage !== '') {
    ShippingChargeOrderDetailsPage = await (await t.$(shippingChargeOnPrintPage)).text();
    ShippingChargeOrderDetailsPage = ShippingChargeOrderDetailsPage.split('$')[1];
    console.log(ShippingChargeOrderDetailsPage);

    if (ShippingChargeOrderDetailsPage * 100 % 100 === '') {
      ShippingChargeOrderDetailsPage = Math.round(ShippingChargeOrderDetailsPage);
    }

    if (totalTextBeforeOffer <= parseFloat(CommonData.cartValue) || CommonData.cartValue === '') {
      if (ShippingChargeOrderDetailsPage === CommonData.shippingCharge2) {
        assert(matchCondition);
        gauge.message(
          'Shipping Charge is ' +
          ShippingChargeOrderDetailsPage +
          ' on Order Details Page'
        );
      } else {
        gauge.message(
          'Shipping Charge is ' +
          ShippingChargeOrderDetailsPage +
          ' on Order Details Page instead of ' +
          CommonData.shippingCharge2
        );
        assert(!matchCondition);
      }
    } else if (totalTextBeforeOffer > parseFloat(CommonData.cartValue)) {
      if (ShippingChargeOrderDetailsPage === CommonData.shippingCharge1) {
        assert(matchCondition);
        gauge.message(
          'Shipping Charge is ' +
          ShippingChargeOrderDetailsPage +
          ' on Order Details Page'
        );
      } else {
        gauge.message(
          'Shipping Charge is ' +
          ShippingChargeOrderDetailsPage +
          ' on Order Details Page instead of ' +
          CommonData.shippingCharge1
        );
        assert(!matchCondition);
      }
    }
  }
}
);

step('BOPIS Verify Delivery Method is Same Day Delivery for SDD on Delivery Page', async function () {
  if (deliveryMethodOnDeliveryPage !== '') {
    DeliveryMethodDeliveryPage = await (await t.$(deliveryMethodOnDeliveryPage)).text();
    console.log(DeliveryMethodDeliveryPage);
    if (DeliveryMethodDeliveryPage.includes(CommonData.DeliveryMethodForSDD)) {
      gauge.message(commonMessages.sddDelMtOnDelPg);
      assert(matchCondition);
      gauge.screenshot();
    } else {
      gauge.message(commonMessages.sddDelMtNtOnDelPg);
    }
  }
}
);

step('BOPIS Verify Delivery Method is Same Day Delivery for SDD on Cart Page', async function () {
  if (deliveryMethodOnCartPage !== '') {
    DeliveryMethodCartPage = await (await t.$(deliveryMethodOnCartPage)).text();
    console.log(DeliveryMethodCartPage);
    await (await t.$(DeliveryMethodCartPage)).exists();
    if (DeliveryMethodCartPage.includes(CommonData.DeliveryMethodForSDD) || DeliveryMethodCartPage.includes(CommonData.DeliveryMethodForSDD.toUpperCase())) {
      gauge.message(commonMessages.cartSameDay);
      assert(matchCondition);
      gauge.screenshot();
    } else {
      gauge.message(commonMessages.sddDelMtdNtOnCarPg);
    }
  }
}
);

step(
  'BOPIS Verify Delivery Method is Same Day Delivery for SDD on Payment Page',
  async function () {
    if (deliveryMethodOnPaymentPage !== '') {
      DeliveryMethodPaymentPage = await (
        await t.$(deliveryMethodOnPaymentPage)
      ).text();
      console.log(DeliveryMethodPaymentPage);
      if (DeliveryMethodPaymentPage.includes(CommonData.DeliveryMethodForSDD)) {
        gauge.message(commonMessages.delMtSddOnPayPg);
        assert(matchCondition);
        gauge.screenshot();
      } else {
        gauge.message(commonMessages.delMtSddNtOnPayPg);
      }
    }
  }
);

step('BOPIS Verify Delivery Method is Same Day Delivery for SDD on Order Details Page', async function () {
  if (delMtdOrdDetSdd !== '') {
    SddTextName = await (await t.$(delMtdOrdDetSdd)).text();
    console.log(SddTextName);
    await (await t.$(SddTextName)).exists();
    if (SddTextName.includes(CommonData.OrderDetailsSddName)) {
      gauge.message(commonMessages.delMtSddOnOrdDetPg);
      assert(matchCondition);
      gauge.screenshot();
    } else {
      gauge.message(commonMessages.delMtSddNtOnOrdDetPg);
    }
  }
}
);

step('BOPIS Find a store', async function () {
  if (findStore !== '') {
    await t.evaluate(await t.$(findStore), (ele) => ele.click());
    await t.write(saveZipCodeBopis, t.into(await t.$(findStore)));
    await t.press(['Control', 'KeyA']);
    await t.press('Delete');
    await t.write(saveZipCodeBopis, t.into(await t.$(findStore)));
    await t.press('Enter');
  }
});

step('BOPIS Select New Shipping Address', async function () {
  if (newShippingAddress !== '') {
    if (await (await t.$(newShippingAddress)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
      await t.evaluate(await t.$(newShippingAddress), (ele) => ele.click());
      gauge.screenshot();
    }
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS CLEAN THE CART', async function () {
  if (getOrderNumber === '0') {
    console.log(commonMessages.clngTheCrt);
    await t.goto(siteDefinition.executionContext.adminUrl + cleanTheCart);
    gauge.screenshot();
  } else {
    gauge.message(commonMessages.ordPlcdCrtIsEmp);
  }
});

step('BOPIS Check for pre selected store', async function () {
  if (await (await t.$(selectDifferentStore)).exists()) {
    await t.evaluate(await t.$(selectDifferentStore), (ele) => ele.click());
    gauge.message(commonMessages.diffStrLnkClck);
  } else {
    gauge.message(commonMessages.noPreSelectedStore);
  }
});

step('BOPIS Set Flag for unavailable items as <flag>', async function (flag) {
  flagForUnavailableItems = parseInt(flag);
  console.log(flagForUnavailableItems);
});

step('BOPIS Select CreditCard Option', async function () {
  if (creditCard !== '') {
    if (!await (await t.$(creditCardNumber)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
      await t.evaluate(await t.$(creditCard), (ele) => ele.click());
    }
  }
  else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Set Flag for user type as <usertype>', async function (usertype) {
  flagForUserType = usertype;
  console.log(flagForUserType);
});

step('BOPIS Verify alert message for samples on Delivery Page', async function () {
  if (!(CommonData.BrandLocaleList.includes('JM-US') && siteDefinition.executionContext.environment === 'STAGE')) {
    if (samplesAlertMessage !== '') {
      if (await (await t.$(samplesAlertMessage)).exists()) {
        samplesAlertMessageActualText = await (await t.$(samplesAlertMessage)).text();
        console.log(samplesAlertMessageActualText);
        if (samplesAlertMessageActualText.includes(CommonData.samplesAlertMessageText)) {
          assert(matchCondition);
          gauge.screenshot();
          gauge.message(commonMessages.smpAlrtMessDis);
        } else {
          gauge.message(commonMessages.smpAlrtMessChng);
          assert(!matchCondition);
        }
      } else {
        gauge.message(commonMessages.smpAlrtMessNtDis);
        gauge.screenshot();
      }
    }
  }
  else {
    gauge.message(commonMessages.stepNotApplicable);
  }
}
);

step('BOPIS Click Home Delivery', async function () {
  if (homeDelivery !== '') {
    if (CommonData.BrandLocaleList.includes('MC-FR')) {
      if (await (await t.$(homeDelivery)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
        await t.evaluate(await t.$(homeDelivery), (ele) => ele.click());
      }
      else {
        await t.evaluate(await t.$(deliveryTab), (ele) => ele.click());
        await t.evaluate(await t.$(homeDelivery), (ele) => ele.click());
      }
    }
    else {
      if (await (await t.$(homeDelivery)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
        await t.evaluate(await t.$(homeDelivery), (ele) => ele.click());
      }
    }
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Verify All Items Available Toggle Button Functionality', async function () {
  if (allItemsAvailableToggleButton !== '') {
    if (await (await t.$(allItemsAvailableToggleButton)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
      await t.evaluate(await t.$(seeMoreLocations), (ele) => ele.click());
      await t.evaluate(await t.$(allItemsAvailableToggleButton), (ele) => ele.click());
      gauge.screenshot();
      numstore = (await (await t.$(inventoryStatus)).elements()).length;
      console.log('store count', numstore);

      for (let i = 1; i <= numstore; i++) {
        InvstatusTxt = await (await t.$(inventoryStatus + '[' + i + ']')).text();
        console.log('Inventory status', InvstatusTxt);
        if (!InvstatusTxt.includes(CommonData.AvlStatus)) {
          gauge.message(commonMessages.allItmsBtNtWor);
          assert(!matchCondition);
          break;
        }
      }
    }
  }
  else {
    gauge.message(commonMessages.stepNotApplicable);
  }
}
);

step('BOPIS Select Afterpay', async function () {
  if (selectAfterpay !== '') {
    if (
      await (
        await t.$(selectAfterpay)
      ).exists(parseInt(pollingTime), parseInt(waitingTime))
    ) {
      await t.evaluate(await t.$(selectAfterpay), (ele) => ele.click());
    }
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Continue Afterpay', async function () {
  if (continueAfterpay !== '') {
    await t.evaluate(await t.$(continueAfterpay), (ele) => ele.click());
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Enter email address for Afterpay', async function () {
  if (emailAddressForAfterpay !== '') {
    if (await (await t.$(emailAddressForAfterpay)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
      await t.write(CommonData.emailAddressForAfterpay, t.into(await t.$(emailAddressForAfterpay)));
      await t.press(['Control', 'KeyA']);
      await t.press('Backspace');
      await t.write(CommonData.emailAddressForAfterpay, t.into(await t.$(emailAddressForAfterpay)));
    }
  }
});

step('BOPIS Submit email address for Afterpay', async function () {
  if (submitEmailAddressForAfterpay !== '') {
    await t.evaluate(await t.$(submitEmailAddressForAfterpay), (ele) =>
      ele.click()
    );
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Enter password for Afterpay', async function () {
  if (passwordForAfterpay !== '') {
    if (await (await t.$(passwordForAfterpay)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
      await t.write(CommonData.passwordForAfterpay, t.into(await t.$(passwordForAfterpay)));
    }
  }
});

step('BOPIS Submit password for Afterpay', async function () {
  if (submitPasswordForAfterpay !== '') {
    await t.evaluate(await t.$(submitPasswordForAfterpay), (ele) => ele.click());
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Validate total amount to be paid by Afterpay', async function () {
  if (totalAmountToBePaidByAfterpay !== '') {
    if (await (await t.$(totalAmountToBePaidByAfterpay)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
      totalAmountToBePaidByAfterpayText = await (await t.$(totalAmountToBePaidByAfterpay)).text();
      totalAmountToBePaidByAfterpayText = totalAmountToBePaidByAfterpayText.split('$')[1];
      gauge.message('totalTextBeforeOffer ' + totalTextBeforeOffer);
      gauge.message('totalAmountToBePaidByAfterpayText ' + totalAmountToBePaidByAfterpayText);
      assert(totalTextBeforeOffer === totalAmountToBePaidByAfterpayText);
      gauge.screenshot();
    }
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Confirm Afterpay', async function () {
  if (confirmAfterpay !== '') {
    await t.evaluate(await t.$(confirmAfterpay), (ele) => ele.click());
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Enter the Gift Card number <giftcardnumber>', async function (giftcardnumber) {
  if (giftCardNumber !== '') {
    if (giftcardnumber === 'MINAMOUNTCARDNUMBER') {
      await t.write(CommonData.giftCardNumberMin, t.into(await t.$(giftCardNumber)));
    } else {
      await t.write(CommonData.giftCardNumberMax, t.into(await t.$(giftCardNumber)));
    }
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
  gauge.screenshot();
}
);

step('BOPIS Enter the Gift Card pin <giftcardpin>', async function (giftcardpin) {
  if (giftCardPin !== '') {
    if (giftcardpin === 'MINAMOUNTCARDPIN') {
      await t.write(CommonData.giftCardPinMin, t.into(await t.$(giftCardPin)));
    } else {
      await t.write(CommonData.giftCardPinMax, t.into(await t.$(giftCardPin)));
    }
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
  gauge.screenshot();
}
);

step('BOPIS Apply Gift Card', async function () {
  if (giftCardUseBtn !== '') {
    if (CommonData.BrandLocaleList.includes('MC-FR')) {
      await t.evaluate(await t.$(giftCardCheckBox), (ele) => ele.click());
    }
    await t.evaluate(await t.$(giftCardUseBtn), (ele) => ele.click());
    gauge.message(commonMessages.gftCrdAppBtnClick);
    t.waitFor(async () => await (await t.$(giftCardAmount)).exists());
    gauge.message(commonMessages.gftCrdAmtAppSuc);
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
  gauge.screenshot();
});

step('BOPIS Verify Gift Card is Applied for <giftcard>', async function (giftcard) {
  var totalamouttopay;
  var salesTaxAmount;
  var giftcardbalanceamount;
  var remainingamounttopay;
  var totalAmtWithSalesTax;
  var calculateTotal;
  if (totalAmount !== '' && salesTaxAmt !== '' && giftCardAmount !== '' && remainingAmount !== '') {
    totalamouttopay = await (await t.$(totalAmount)).text();
    salesTaxAmount = await (await t.$(salesTaxAmt)).text();
    if (!CommonData.BrandLocaleList.includes('MC-FR')) {
      totalamouttopay = parseFloat(totalamouttopay.split('$')[1]);
      salesTaxAmount = parseFloat(salesTaxAmount.split('$')[1]);
      totalAmtWithSalesTax = totalamouttopay + salesTaxAmount;
    }
    else {
      totalamouttopay = parseFloat(totalamouttopay.substring(0, totalamouttopay.length - 1));
      salesTaxAmount = parseFloat(salesTaxAmount.substring(0, salesTaxAmount.length - 1));
      totalAmtWithSalesTax = totalamouttopay + salesTaxAmount;
    }
    gauge.message('Total amount with sales tax' + totalAmtWithSalesTax);
    // Geeting Giftcardamount
    giftcardbalanceamount = await (await t.$(giftCardAmount)).text();
    if (!CommonData.BrandLocaleList.includes('MC-FR')) {
      giftcardbalanceamount = parseFloat(giftcardbalanceamount.split('$')[1]);
    }
    else {
      giftcardbalanceamount = parseFloat(giftcardbalanceamount.substring(0, giftcardbalanceamount.length - 1));
    }
    gauge.message('Giftcardbalanceamount' + giftcardbalanceamount);
    remainingamounttopay = await (await t.$(remainingAmount)).text();
    if (!CommonData.BrandLocaleList.includes('MC-FR')) {
      remainingamounttopay = parseFloat(remainingamounttopay.split('$')[1]);
    }
    else {
      remainingamounttopay = parseFloat(remainingamounttopay.substring(0, remainingamounttopay.length - 1));
    }
    gauge.message('Remainingamounttopay' + remainingamounttopay);
    if (giftcard === 'MINAMOUNTCARDNUMBER') {
      calculateTotal = totalAmtWithSalesTax - giftcardbalanceamount;
      calculateTotal = Math.round(calculateTotal * 100) / 100;
      // Calculate and assert
      assert(remainingamounttopay === calculateTotal);
      gauge.message(commonMessages.gfIsApplied);
    } else {
      // Calculate and assert
      assert(remainingamounttopay === '');
      gauge.message(commonMessages.gfIsApplied);
    }
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
  gauge.screenshot();
}
);

step('BOPIS Skip And Continue Checkout', async function () {
  if (CommonData.BrandLocaleList.includes('JM-US') && siteDefinition.executionContext.environment === 'PROD' || CommonData.BrandLocaleList.includes('AV-US') || CommonData.BrandLocaleList.includes('AV-CA')) {
    if (skipAndContinueCheckout !== '') {
      if (await (await t.$(skipAndContinueCheckout)).exists(parseInt(pollingTime), parseInt(waitingTime))) {

        /** Skip And Continue is applicable for few Brand/Locale/platform(PC/MOB) */
        await t.evaluate(await t.$(skipAndContinueCheckout), ele => ele.click());
        gauge.screenshot();
      }
      else {
        gauge.message(commonMessages.tempRemPage);
      }
    }
  }
  else if (CommonData.BrandLocaleList.includes('JM-US') && siteDefinition.executionContext.environment === 'STAGE') {
    if (await (await t.$(skipAndContinueCheckout)).exists(parseInt(pollingTime), parseInt(waitingTime))) {

      /** Skip And Continue is applicable for few Brand/Locale/platform(PC/MOB) */
      await t.evaluate(await t.$(skipAndContinueCheckout), ele => ele.click());
      if (await (await t.$(skipAndContinueCheckout)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
        await t.evaluate(await t.$(skipAndContinueCheckout), ele => ele.click());
      }
      gauge.screenshot();
    }
    else {
      gauge.message(commonMessages.tempRemPage);
    }
  }
  else { gauge.message(commonMessages.stepNotApplicable); }
});

step('BOPIS Enter New ZIPCODE', async function () {
  if (enterNewZipCode !== '') {
    await t.write(CommonData.DifferentZipCode, t.into(await t.$(enterNewZipCode)));
    await t.press(['Control', 'KeyA']);
    await t.press('Backspace');
    await t.write(CommonData.DifferentZipCode, t.into(await t.$(enterNewZipCode)));
  }
  if (newYorkZipCode !== '') {
    await t.evaluate(await t.$(enterZipCode), (ele) => ele.focus());
    await t.press(['Control', 'KeyA']);
    await t.press('Backspace');
    await t.write(CommonData.DifferentZipCode, t.into(await t.$(enterZipCode)));
    await t.waitFor(parseInt(waitingTime)); // Waiting for City,State dropdown to appear
    await t.evaluate(await t.$(newYorkZipCode), (ele) => ele.click());
  }
});

step('BOPIS Navigate to SPP', async function () {
  if (!CommonData.BrandLocaleList.includes('JM-US')) {
    if (spp !== '') {
      await t.goto(siteDefinition.executionContext.url + spp, { waitForEvents: ['DOMContentLoaded'] });
    }
  }
  else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Click Edit icon on SPP', async function () {
  if (!CommonData.BrandLocaleList.includes('JM-US')) {
    if (editIconSpp !== '') {
      await t.evaluate(await t.$(editIconSpp), (ele) => ele.click());
      gauge.screenshot();
    }
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Enter Zip Code on SPP', async function () {
  if (!CommonData.BrandLocaleList.includes('JM-US')) {
    if (zipCodeSpp !== '') {
      await t.write(CommonData.NYZipCode, t.into(await t.$(zipCodeSpp)));
      gauge.screenshot();
    }
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Click search Zip Code on SPP', async function () {
  if (searchZipCodeSpp !== '') {
    await t.evaluate(await t.$(searchZipCodeSpp), (ele) => ele.click());
    gauge.screenshot();
  }
  else if (CommonData.BrandLocaleList.includes('JM-US')) {
    await t.goto(siteDefinition.executionContext.url + spp, { waitForEvents: ['DOMContentLoaded'] });
    for (let i = 0; i < zipCodeArrays.length; i++) {
      if (await (await t.$(editIconSpp)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
        await t.evaluate(await t.$(editIconSpp), (ele) => ele.scrollIntoView());
        await t.evaluate(await t.$(editIconSpp), (ele) => ele.click());
        await t.write(zipCodeArrays[i], t.into(await t.$(zipCodeSpp)));
        await t.press(['Control', 'KeyA']);
        await t.press('Delete');
        await t.write(zipCodeArrays[i], t.into(await t.$(zipCodeSpp)));
        await t.waitFor(parseInt(waitingTime)); // To get the dropdown visible
        await t.press('ArrowDown');
        await t.press('ArrowDown');
        await t.press('Enter');
        await t.reload({ waitForEvents: ['DOMContentLoaded'] });
        if (await (await t.$(bopisAvailableMessage)).exists(parseInt(pollingTime), parseInt(waitingTime)) && await (await t.$(sddAvailableMessage)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
          gauge.message(commonMessages.skuAvlbtBopSdd);
          break;
        }
        else {
          gauge.message(commonMessages.skuNtAvlbtBs);
        }
      }
    }
  }
  else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Verify Zip Code is displayed correctly on SPP', async function () {
  if (verifyZipCodeSpp !== '') {
    expectedZipCodeOnSPP = await (await t.$(verifyZipCodeSpp)).text();
    assert(expectedZipCodeOnSPP.includes(CommonData.NYZipCode));
    gauge.screenshot();
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Click more stores on SPP', async function () {
  if (moreStoresBopisSpp !== '') {
    await t.evaluate(await t.$(moreStoresBopisSpp), (ele) => ele.click());
    gauge.screenshot();
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Verify stores displayed are within 200mi on BOPIS overlay in SPP', async function () {
  if (storesDistanceBopisSpp !== '') {
    storesDistances = (await (await t.$(storesDistanceBopisSpp)).elements()).length;
    console.log('distances = ', storesDistances);
    gauge.screenshot();
    for (let i = 1; i <= storesDistances; i++) {
      storesDistance = await (await t.$(storesDistanceBopisSpp + '[' + i + ']')).text();
      const storesDistanceNumeric = parseFloat(storesDistance.split(' ')[0]);
      console.log('distance status', storesDistanceNumeric);
      if (storesDistanceNumeric > CommonData.zipMoreThanTwoHun) {
        gauge.screenshot();
        gauge.message(commonMessages.strsNtDisWithinTwoHunMi);
        break;
      }
    }
  }
}
);

step('BOPIS Click All Items Available toggle button in BOPIS overlay on SPP', async function () {
  if (allItemsAvailableBopisSpp !== '') {
    if (await (await t.$(allItemsAvailableBopisSpp)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
      await t.evaluate(await t.$(allItemsAvailableBopisSpp), (ele) => ele.click());
      gauge.screenshot();
    } else {
      gauge.message(commonMessages.stepNotApplicable);
    }
  }
}
);

step('BOPIS Verify only available stores are displayed on BOPIS overlay in SPP', async function () {
  if (availableStoresBopisSpp !== '') {
    availableStoresTexts = (await (await t.$(availableStoresBopisSpp)).elements()).length;
    console.log('available count', availableStoresTexts);
    for (let i = 1; i <= availableStoresTexts; i++) {
      InvstatusTxt = await (await t.$(availableStoresBopisSpp + '[' + i + ']')).text();
      console.log('Inventory status', InvstatusTxt);
      if (InvstatusTxt.includes('not') || InvstatusTxt.includes('Not') || InvstatusTxt.includes('Produit indisponible')) {
        gauge.message(commonMessages.allItmTogBtNtWor);
        gauge.screenshot();
        assert(!matchCondition);
        break;
      }
    }
  }
}
);

step('BOPIS Click store timings in BOPIS overlay on SPP', async function () {
  if (storeTimingsBopisSpp !== '') {
    await t.evaluate(await t.$(storeTimingsBopisSpp), (ele) => ele.click());
    gauge.screenshot();
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Verify store timings is displayed on BOPIS overlay in SPP', async function () {
  if (openingHoursBopisSpp !== '') {
    if (CommonData.BrandLocaleList.includes('JM-US')) {
      openingHoursLength = (await (await t.$(openingHoursBopisSpp)).elements()).length;
      console.log('opening hours length', openingHoursLength);
      for (let i = 1; i <= openingHoursLength; i++) {
        storeTimings = await (await t.$(openingHoursBopisSpp1 + '[' + i + ']')).text();
        storeTimingsSplit = parseFloat(storeTimings.split(' '));
        assert((await t.$(storeTimings)).exists());
        console.log('opening hours ', storeTimingsSplit);
      }
    }
    else if (!CommonData.BrandLocaleList.includes('JM-US')) {
      openingHoursLength = (await (await t.$(openingHoursBopisSpp)).elements()).length;
      console.log('opening hours length', openingHoursLength);
      for (let i = 1; i <= openingHoursLength; i++) {
        storeTimings = await (await t.$(openingHoursBopisSpp1 + '[' + i + ']' + openingHoursBopisSpp1Li)).text();
        storeTimingsSplit = parseFloat(storeTimings.split(' '));
        assert((await t.$(storeTimings)).exists());
        console.log('opening hours ', storeTimingsSplit);
      }
    }
  }
}
);

step('BOPIS Enter invalid zip code on BOPIS overlay in SPP', async function () {
  if (invalidZipCodeBopisSpp1 !== '') {
    if (await (await t.$(invalidZipCodeBopisSpp1)).isVisible(parseInt(pollingTime), parseInt(waitingTime))) {
      await t.evaluate(await t.$(invalidZipCodeBopisSpp1), (ele) => ele.click());
      await t.write(CommonData.invalidZIPCODE, t.into(await t.$(invalidZipCodeBopisSpp1)));
      await t.press(['Control', 'KeyA']);
      await t.press('Backspace');
      await t.write(CommonData.invalidZIPCODE, t.into(await t.$(invalidZipCodeBopisSpp1)));
      await t.press('Enter');
    }
  }
  else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Verify error message for invalid zip code on BOPIS overlay in SPP', async function () {
  if (invalidZipCodeMessageBopisSpp !== '') {
    invalidZipCodeText = await (await t.$(invalidZipCodeMessageBopisSpp)).text();
    console.log(invalidZipCodeText);
    if (invalidZipCodeText.includes(CommonData.invalidZipCodeErrorMessage)) {
      assert(matchCondition);
      gauge.screenshot();
    } else {
      gauge.screenshot();
      assert(!matchCondition);
    }
  }
  else {
    gauge.message(commonMessages.stepNotApplicable);
  }
}
);

step('BOPIS Close more stores pop-up in BOPIS overlay on SPP', async function () {
  if (closeMoreStoresBopisSpp !== '') {
    if (await (await t.$(closeMoreStoresBopisSpp)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
      await t.evaluate(await t.$(closeMoreStoresBopisSpp), (ele) => ele.click());
      gauge.screenshot();
    }
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
}
);

step('BOPIS Click BOPIS more info icon on SPP', async function () {
  if (bopisMoreInfo !== '') {
    await t.evaluate(await t.$(bopisMoreInfo), (ele) => ele.click());
    gauge.screenshot();
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Verify BOPIS information modal in SPP', async function () {
  if (moreInformationModalBopisSpp !== '') {
    moreInformationBOPISText = await (await t.$(moreInformationModalBopisSpp)).text();
    assert(
      moreInformationBOPISText.includes('IN STORE PICKUP') ||
      moreInformationBOPISText.includes('In-store pickup') ||
      moreInformationBOPISText.includes('Pick Up In Store') ||
      moreInformationBOPISText.includes('VOUS LE VOULEZ AUJOURD')
    );
    gauge.screenshot();
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Close BOPIS more info icon on SPP', async function () {
  if (closeMoreStoresBopisSpp !== '') {
    await t.evaluate(await t.$(closeMoreStoresBopisSpp), (ele) => ele.click());
    gauge.screenshot();
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Click SDD more info icon on SPP', async function () {
  if (sddMoreInfo !== '') {
    await t.evaluate(await t.$(sddMoreInfo), (ele) => ele.click());
    gauge.screenshot();
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Verify SDD information modal in SPP', async function () {
  if (moreInformationModalSddSpp !== '') {
    moreInformationSDDText = await (await t.$(moreInformationModalSddSpp)).text();
    assert(
      moreInformationSDDText.includes('Same day delivery') ||
      moreInformationSDDText.includes('SAME DAY DELIVERY') ||
      moreInformationSDDText.includes('Same Day Delivery')
    );
    gauge.screenshot();
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Close SDD more info icon on SPP', async function () {
  if (closeMoreStoresBopisSpp !== '') {
    if (await (await t.$(closeMoreStoresBopisSpp)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
      await t.evaluate(await t.$(closeMoreStoresBopisSpp), (ele) => ele.click());
      gauge.screenshot();
    }
    else {
      gauge.message(commonMessages.stepNotApplicable);
    }
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Enter valid zip code on BOPIS overlay in SPP', async function () {
  if (invalidZipCodeBopisSpp !== '') {
    if (await (await t.$(invalidZipCodeBopisSpp)).isVisible(parseInt(pollingTime), parseInt(waitingTime))) {
      if (!CommonData.BrandLocaleList.includes('JM-US')) {
        await t.evaluate(await t.$(invalidZipCodeBopisSpp), (ele) => ele.click());
        await t.write(CommonData.ZipCodeUnavailableItems, t.into(await t.$(invalidZipCodeBopisSpp)));
        await t.press(['Control', 'KeyA']);
        await t.press('Backspace');
        await t.write(CommonData.ZipCodeUnavailableItems, t.into(await t.$(invalidZipCodeBopisSpp)));
      }
      else {
        await t.evaluate(await t.$(invalidZipCodeBopisSpp), (ele) => ele.click());
        await t.write(CommonData.ZipCodeUnavailableItems, t.into(await t.$(invalidZipCodeBopisSpp)));
        await t.waitFor(parseInt(waitingTime)); // To get the dropdown visible
        await t.press('ArrowDown');
        await t.press('Enter');
      }
    }
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Click current location icon on BOPIS overlay in SPP', async function () {
  if (currentLocationBopisSpp !== '') {
    await t.evaluate(await t.$(currentLocationBopisSpp), (ele) => ele.click());
    gauge.screenshot();
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
}
);

step('BOPIS Apply Offer Code For BOPIS', async function () {
  if (offerCode !== '') {
    await t.evaluate(await t.$(offerCode), (ele) => ele.click());
    await t.write(CommonData.offerCodeForBOPIS, t.into(await t.$(offerCode)));
    await t.evaluate(await t.$(applyOfferCode), (ele) => ele.click());
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step(
  'BOPIS Verify offer code for BOPIS is applied successfully on cart page',
  async function () {
    if (offerCodeSuccessMessage !== '') {
      offerCodeSuccessMessageText = await (
        await t.$(offerCodeSuccessMessage)
      ).text();
      assert(offerCodeSuccessMessageText.includes(CommonData.offerAppliedText));
      gauge.screenshot();
    } else {
      gauge.message(commonMessages.stepNotApplicable);
    }
  }
);

step('BOPIS Add product1 to cart until <skucost>', async function (skucost) {
  if (incQuantity !== '') {
    totalCartValueText = await (await t.$(totalCartValue)).text();
    totalCartValueText = parseFloat(totalCartValueText.split('$')[1]);

    estimatedTotalText = await (await t.$(estimatedTotal)).text();
    estimatedTotalText = parseFloat(estimatedTotalText.split('$')[1]);

    while (!(totalCartValueText > parseFloat(skucost.split('$')[1]))) {
      await t.evaluate(await t.$(incQuantity), (ele) => ele.click());
      totalCartValueText = await (await t.$(totalCartValue)).text();
      totalCartValueText = parseFloat(totalCartValueText.split('$')[1]);
      console.log(totalCartValueText);
      estimatedTotalTextAfter = await (await t.$(estimatedTotal)).text();
      estimatedTotalTextAfter = parseFloat(
        estimatedTotalTextAfter.split('$')[1]
      );
      t.waitFor(async () => estimatedTotalText < estimatedTotalTextAfter);
    }
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Add product2 to cart until <skucost>', async function (skucost) {
  if (incQuantity2 !== '') {
    totalCartValueText = await (await t.$(totalCartValue)).text();
    totalCartValueText = parseFloat(totalCartValueText.split('$')[1]);

    estimatedTotalText = await (await t.$(estimatedTotal)).text();
    estimatedTotalText = parseFloat(estimatedTotalText.split('$')[1]);

    while (!(totalCartValueText > parseFloat(skucost.split('$')[1]))) {
      await t.evaluate(await t.$(incQuantity2), (ele) => ele.click());
      totalCartValueText = await (await t.$(totalCartValue)).text();
      totalCartValueText = parseFloat(totalCartValueText.split('$')[1]);
      console.log(totalCartValueText);
      estimatedTotalTextAfter = await (await t.$(estimatedTotal)).text();
      estimatedTotalTextAfter = parseFloat(
        estimatedTotalTextAfter.split('$')[1]
      );
      t.waitFor(async () => estimatedTotalText < estimatedTotalTextAfter);
    }
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Enter valid zip code more than 200mi away on BOPIS overlay in SPP', async function () {
  if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
    if (invalidZipCodeBopisSpp2 !== '') {
      if (await (await t.$(invalidZipCodeBopisSpp2)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
        await t.evaluate(await t.$(invalidZipCodeBopisSpp2), (ele) => ele.click());
        await t.write(CommonData.zipCode200MiAway, t.into(await t.$(invalidZipCodeBopisSpp2)));
        await t.press(['Control', 'KeyA']);
        await t.press('Backspace');
        await t.write(CommonData.zipCode200MiAway, t.into(await t.$(invalidZipCodeBopisSpp2)));
        await t.press('Enter');
      }
    }
    else if (CommonData.BrandLocaleList.includes('JM-US')) {
      await t.evaluate(await t.$(invalidZipCodeBopisSpp), (ele) => ele.click());
      await t.write(CommonData.ZipCodeUnavailableItems1, t.into(await t.$(invalidZipCodeBopisSpp)));
      await t.press(['Control', 'KeyA']);
      await t.press('Backspace');
      await t.write(CommonData.ZipCodeUnavailableItems1, t.into(await t.$(invalidZipCodeBopisSpp)));
      await t.waitFor(parseInt(waitingTime)); // To get the dropdown visible
      await t.press('ArrowDown');
      await t.press('Enter');
    }
  } else if (siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE') {
    if (invalidZipCodeBopisSpp3 !== '') {
      if (await (await t.$(invalidZipCodeBopisSpp3)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
        await t.evaluate(await t.$(invalidZipCodeBopisSpp3), (ele) => ele.click());
        await t.write(CommonData.zipCode200MiAway, t.into(await t.$(invalidZipCodeBopisSpp3)));
        await t.press(['Control', 'KeyA']);
        await t.press('Backspace');
        await t.write(CommonData.zipCode200MiAway, t.into(await t.$(invalidZipCodeBopisSpp3)));
        await t.press('Enter');
      }
    }
    else if (CommonData.BrandLocaleList.includes('JM-US')) {
      await t.evaluate(await t.$(invalidZipCodeBopisSpp), (ele) => ele.click());
      await t.write(CommonData.ZipCodeUnavailableItems1, t.into(await t.$(invalidZipCodeBopisSpp)));
      await t.press(['Control', 'KeyA']);
      await t.press('Backspace');
      await t.write(CommonData.ZipCodeUnavailableItems1, t.into(await t.$(invalidZipCodeBopisSpp)));
      await t.waitFor(parseInt(waitingTime)); // To get the dropdown visible
      await t.press('ArrowDown');
      await t.press('Enter');
    }
  }
  else {
    gauge.message(commonMessages.stepNotApplicable);
  }
}
);

step('BOPIS Verify error message when searching for zip code more than 200mi on BOPIS overlay in SPP', async function () {
  if (errorMessageForZipCode200MiAway !== '') {
    if (CommonData.BrandLocaleList.includes('JM-US')) {
      if (await (await t.$(errorMessageForZipCode200MiAway)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
        invalidZipCodeText = await (await t.$(errorMessageForZipCode200MiAway)).text();
        console.log(invalidZipCodeText);
        if (invalidZipCodeText.includes(CommonData.invalidZipCodeErrorMessage)) {
          assert(matchCondition);
          gauge.screenshot();
        } else {
          gauge.screenshot();
          assert(!matchCondition);
        }
      }
    } else {
      invalidZipCodeText = await (await t.$(errorMessageForZipCode200MiAway)).text();
      assert(invalidZipCodeText.includes('no stores') || invalidZipCodeText.includes('Nous sommes'));
      gauge.screenshot();
    }
  }
  else {
    gauge.message(commonMessages.stepNotApplicable);
  }
}
);

step('BOPIS Click delivery tab', async function () {
  if (deliveryTab !== '') {
    await t.evaluate(await t.$(deliveryTab), (ele) => ele.click());
    await t.waitFor(parseInt(waitingTime)); // Used this wait to tackle phone number error issue due to site latency
    await t.reload({ waitForEvents: ['DOMContentLoaded'] });
    await t.waitFor(parseInt(waitingTime)); // Used this wait to tackle phone number error issue due to site latency
    gauge.screenshot();
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Validate view directions link redirects to google maps', async function () {
  if (viewDirections !== '') {
    if (await (await t.$(viewDirections)).exists()) {
      await t.evaluate(await t.$(viewDirections, { waitForEvents: ['DOMContentLoaded'] }), (ele) => ele.click());
      await t.waitFor(parseInt(waitingTime)); // Waiting for navigation to new tab
      gauge.screenshot();
      pagetitle = await t.title();
      gauge.message('ActualPagetitle : ' + pagetitle);
      console.log('ActualPagetitle : ' + pagetitle);
      if (pagetitle.includes(CommonData.expectedPageTitle)) {
        gauge.message('ExpectedPagetitle : ' + CommonData.expectedPageTitle);
        assert(matchCondition);
        gauge.message(commonMessages.navSuccess);
        console.log(commonMessages.navSuccess);
        gauge.screenshot();
      } else if (pagetitle.includes('')) {
        await t.reload({ waitForEvents: ['DOMContentLoaded'] });
        if (pagetitle.includes(CommonData.expectedPageTitle)) {
          gauge.message(
            'ExpectedPagetitle : ' + CommonData.expectedPageTitle
          );
          assert(matchCondition);
          gauge.message(commonMessages.navSuccess);
          console.log(commonMessages.navSuccess);
          gauge.screenshot();
        } else {
          gauge.message(commonMessages.navFailure);
          assert(!matchCondition);
        }
      } else {
        gauge.message(commonMessages.navFailure);
        assert(!matchCondition);
      }
    }
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
}
);

step('BOPIS Apply Offer Code For SDD', async function () {
  if (offerCode !== '') {
    await t.evaluate(await t.$(offerCode), (ele) => ele.click());
    await t.write(CommonData.offerCode, t.into(await t.$(offerCode)));
    await t.press(['Control', 'KeyA']);
    await t.press('Backspace');
    await t.write(CommonData.offerCodeForSDD, t.into(await t.$(offerCode)));
    await t.evaluate(await t.$(applyOfferCode), (ele) => ele.click());
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step(
  'BOPIS Verify offer code for SDD is applied successfully',
  async function () {
    if (offerCodeSuccessMessage !== '') {
      offerCodeSuccessMessageText = await (
        await t.$(offerCodeSuccessMessage)
      ).text();
      assert(
        offerCodeSuccessMessageText.includes(
          'Congrats! Enjoy 20% off your order.'
        )
      );
      gauge.screenshot();
    } else {
      gauge.message(commonMessages.stepNotApplicable);
    }
  }
);

step('BOPIS Enter Different ZIPCODE', async function () {
  if (enterNewZipCode !== '') {
    await t.write(CommonData.DifferentZipCode, t.into(await t.$(enterNewZipCode)));
    await t.press(['Control', 'KeyA']);
    await t.press('Backspace');
    await t.evaluate(await t.$(enterNewZipCode), (ele) => ele.click());
    await t.write(CommonData.DifferentZipCode, t.into(await t.$(enterNewZipCode)));
  }
  if (newYorkZipCode !== '') {
    await t.evaluate(await t.$(enterZipCode), (ele) => ele.focus());
    await t.press(['Control', 'KeyA']);
    await t.press('Delete');
    await t.write(CommonData.DifferentZipCode, t.into(await t.$(enterZipCode)));
    await t.waitFor(parseInt(waitingTime)); // Waiting for City,State dropdown to appear
    await t.evaluate(await t.$(newYorkZipCode), (ele) => ele.click());
  }
});

step(
  'BOPIS Verify Shipping Charge is FREE for SDD on Delivery Page',
  async function () {
    if (shippingChargeOnDeliveryPage !== '') {
      ShippingChargeDeliveryPage = await (
        await t.$(shippingChargeOnDeliveryPage)
      ).text();
      console.log(ShippingChargeDeliveryPage);
      await (await t.$(ShippingChargeDeliveryPage)).exists();
      if (ShippingChargeDeliveryPage.includes('FREE')) {
        gauge.message(commonMessages.shpChargeFreeDel);
        assert(matchCondition);
        gauge.screenshot();
      } else {
        gauge.message(commonMessages.shpChargeNoFdel);
      }
    }
  }
);

step('BOPIS Click On Print Your Order Confirmation', async function () {
  if (clkPrintOrdConfLnk !== '') {
    homePageUrl = await t.currentURL();
    if (await (await t.$(clkPrintOrdConfLnk)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
      await t.evaluate(await t.$(clkPrintOrdConfLnk, { waitForEvents: ['DOMContentLoaded'] }), (ele) => ele.click());
      await t.waitFor(parseInt(waitingTime)); // Waiting for navigation to new tab
      gauge.screenshot();
      pagetitle = await t.title();
      gauge.message('ActualPagetitle : ' + pagetitle);
      if (pagetitle === CommonData.printOrderConfirmationPageTitle) {
        gauge.message(
          'ExpectedPagetitle : ' + CommonData.printOrderConfirmationPageTitle
        );
        assert(matchCondition);
        gauge.message(
          'Successfully navigated to ' +
          CommonData.printOrderConfirmationPageTitle +
          'page'
        );
      }
    }
  }
});

step('BOPIS Navigate back to home tab', async function () {
  await t.switchTo(homePageUrl);
  gauge.message(commonMessages.nvgBckToHmPg);
});

step('BOPIS Validate unavailable items have been dropped from cart', async function () {
  if (CommonData.BrandLocaleList.includes('MC-FR')) {
    await t.reload({ waitForEvents: ['DOMContentLoaded'] });
    await t.write(CommonData.FIRSTNAME, t.into(await t.$(boFirstName)));
    await t.press(['Control', 'KeyA']);
    await t.press('Delete');
    await t.write(CommonData.FIRSTNAME, t.into(await t.$(boFirstName)));
    await t.write(CommonData.LASTNAME, t.into(await t.$(boLastName)));
    await t.press(['Control', 'KeyA']);
    await t.press('Delete');
    await t.write(CommonData.LASTNAME, t.into(await t.$(boLastName)));
    await t.write(CommonData.PHONE, t.into(await t.$(boPhone)), { delay: parseInt(pollingTime) });
    const Phonevalue = await (await t.$(boPhone)).attribute('value');
    const Phonevaluelength = Phonevalue.length;
    console.log(Phonevalue);
    console.log(Phonevaluelength);
    for (let i = Phonevaluelength; i >= 1; i--) {
      await t.press('Backspace');
    }
    await t.write(CommonData.PHONE, t.into(await t.$(boPhone)), {
      delay: parseInt(pollingTime),
    });
  }
  else if (CommonData.BrandLocaleList.includes('JM-US')) {
    await t.reload({ waitForEvents: ['DOMContentLoaded'] });
    if (siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE') {
      await t.evaluate(await t.$(plusIconOnShoppingBag), (ele) => ele.click());
    }
    numproductsOnDeliverPage = (await (await t.$(validateUnvlDropped)).elements()).length;
    console.log('product count on delivery page: ', numproductsOnDeliverPage);
    for (let k = 1; k <= numproductsOnDeliverPage; k++) {
      products2[k] = await (await t.$(validateUnvlDropped + '[' + k + ']')).text();
      console.log(products2[k]);
      for (let l = 1; l <= numproductsOnPopUp; l++) {
        console.log(productsOnPopUp[l]);
        if (products2[k] === productsOnPopUp[l]) {
          gauge.screenshot();
          assert(!matchCondition);
        } else {
          assert(matchCondition);
          gauge.screenshot();
        }
      }
    }
  }
  else {
    numproductsOnDeliverPage = (await (await t.$(validateUnvlDropped)).elements()).length;
    console.log('product count on delivery page: ', numproductsOnDeliverPage);
    for (let k = 1; k <= numproductsOnDeliverPage; k++) {
      products2[k] = await (await t.$(validateUnvlDropped + '[' + k + ']')).text();
      console.log(products2[k]);
      for (let l = 1; l <= numproductsOnPopUp; l++) {
        console.log(productsOnPopUp[l]);
        if (products2[k] === productsOnPopUp[l]) {
          gauge.screenshot();
          assert(!matchCondition);
        } else {
          assert(matchCondition);
          gauge.screenshot();
        }
      }
    }
  }
}
);

step('BOPIS Store subTotal section values', async function () {
  if (!CommonData.BrandLocaleList.includes('MC-FR')) {
    await (await t.$(subTotal)).exists(parseInt(pollingTime), parseInt(waitingTime));
    subTotalTextBeforeOffer = await (await t.$(subTotal)).text();
    subTotalTextBeforeOffer = subTotalTextBeforeOffer.split('$')[1];

    salesTaxTextBeforeOffer = await (await t.$(salesTax)).text();
    salesTaxTextBeforeOffer = salesTaxTextBeforeOffer.split('$')[1];

    totalTextBeforeOffer = await (await t.$(total)).text();
    totalTextBeforeOffer = totalTextBeforeOffer.split('$')[1];
    gauge.screenshot();
  }
});

step('BOPIS Verify offer code is applied successfully For BOPIS', async function () {
  if (!CommonData.BrandLocaleList.includes('MC-FR')) {
    discountTextAfterOffer = parseFloat(
      CommonData.percentageToDeductForBOPIS * subTotalTextBeforeOffer
    ).toFixed(2);
    if (discountTextAfterOffer * 100 % 100 === '') {
      discountTextAfterOffer = Math.round(discountTextAfterOffer);
    } else if (discountTextAfterOffer * 100 % 10 === '') {
      discountTextAfterOffer = parseFloat(discountTextAfterOffer).toFixed(1);
    }
    console.log('discountTextAfterOffer ' + discountTextAfterOffer);

    salesTaxText = parseFloat(
      salesTaxTextBeforeOffer -
      CommonData.percentageToDeduct * salesTaxTextBeforeOffer
    ).toFixed(2);
    console.log('salesTaxText ' + salesTaxText);

    totalText = parseFloat(
      totalTextBeforeOffer -
      CommonData.percentageToDeduct * totalTextBeforeOffer
    ).toFixed(2);
    console.log('totalText ' + totalText);

    discountText = await (await t.$(discount)).text();
    discountText = parseFloat(discountText.split('$')[1]);

    subTotalTextAfterOffer = await (await t.$(subTotalOnDeliveryPage)).text();
    subTotalTextAfterOffer = parseFloat(subTotalOnDeliveryPage.split('$')[1]);

    salesTaxTextAfterOffer = await (await t.$(salesTaxOnDeliveryPage)).text();
    salesTaxTextAfterOffer = parseFloat(salesTaxTextAfterOffer.split('$')[1]);

    totalTextAfterOffer = await (await t.$(totalOnDeliveryPage)).text();
    totalTextAfterOffer = parseFloat(totalTextAfterOffer.split('$')[1]);

    console.log('discountText ' + discountText);
    console.log('discountTextAfterOffer ' + discountTextAfterOffer);
    console.log('salesTaxText ' + salesTaxText);
    console.log('salesTaxTextAfterOffer ' + salesTaxTextAfterOffer);
    console.log('totalText ' + totalText);
    console.log('totalTextAfterOffer ' + totalTextAfterOffer);

    assert(discountTextAfterOffer === discountText);
    assert(salesTaxText === salesTaxTextAfterOffer);
    assert(totalText === totalTextAfterOffer);

    assert(
      totalText ===
      subTotalTextAfterOffer + salesTaxTextAfterOffer - discountText
    );
  }
}
);

step(
  'BOPIS Verify offer code is applied successfully For SDD',
  async function () {
    discountTextAfterOffer = parseFloat(
      CommonData.percentageToDeductForSDD * subTotalTextBeforeOffer
    ).toFixed(2);
    if (discountTextAfterOffer * 100 % 100 === '') {
      discountTextAfterOffer = Math.round(discountTextAfterOffer);
    } else if (discountTextAfterOffer * 100 % 10 === '') {
      discountTextAfterOffer = parseFloat(discountTextAfterOffer).toFixed(1);
    }
    console.log('discountTextAfterOffer ' + discountTextAfterOffer);

    salesTaxText = parseFloat(
      salesTaxTextBeforeOffer -
      CommonData.percentageToDeduct * salesTaxTextBeforeOffer
    ).toFixed(2);
    console.log('salesTaxText ' + salesTaxText);

    totalText = parseFloat(
      totalTextBeforeOffer -
      CommonData.percentageToDeduct * totalTextBeforeOffer
    ).toFixed(2);
    console.log('totalText ' + totalText);

    discountText = await (await t.$(discount)).text();
    discountText = parseFloat(discountText.split('$')[1]);

    subTotalTextAfterOffer = await (await t.$(subTotalOnDeliveryPage)).text();
    subTotalTextAfterOffer = parseFloat(subTotalOnDeliveryPage.split('$')[1]);

    salesTaxTextAfterOffer = await (await t.$(salesTaxOnDeliveryPage)).text();
    salesTaxTextAfterOffer = parseFloat(salesTaxTextAfterOffer.split('$')[1]);

    totalTextAfterOffer = await (await t.$(totalOnDeliveryPage)).text();
    totalTextAfterOffer = parseFloat(totalTextAfterOffer.split('$')[1]);

    console.log('discountText ' + discountText);
    console.log('discountTextAfterOffer ' + discountTextAfterOffer);
    console.log('salesTaxText ' + salesTaxText);
    console.log('salesTaxTextAfterOffer ' + salesTaxTextAfterOffer);
    console.log('totalText ' + totalText);
    console.log('totalTextAfterOffer ' + totalTextAfterOffer);

    assert(discountTextAfterOffer === discountText);
    assert(salesTaxText === salesTaxTextAfterOffer);
    assert(totalText === totalTextAfterOffer);

    assert(
      totalText ===
      subTotalTextAfterOffer + salesTaxTextAfterOffer - discountText
    );
  }
);

step('BOPIS User clicks Same Day Delivery and selects Drop Unavailable Items And Continue in pop-up', async function () {
  if (
    CommonData.BrandLocaleList.includes('AV-US') ||
    CommonData.BrandLocaleList.includes('AV-CA') ||
    CommonData.BrandLocaleList.includes('MC-US') ||
    CommonData.BrandLocaleList.includes('MC-CA')
  ) {
    await t.evaluate(await t.$(sameDayDelivery), (ele) => ele.click());
    await t.waitFor(await t.$(delMtdUnvSomeItms1), parseInt(waitingTime));
    delMtdUnvForItmsTxt = await (await t.$(delMethdUnvSomeItms)).text();
    console.log('Inventory status', delMtdUnvForItmsTxt);
    if (delMtdUnvForItmsTxt.includes(CommonData.DeliveryUnavailableForSomeItems)) {
      statusFlag = 2;
      await t.evaluate(await t.$(dropUnavailableItemsAndContinue, { waitForEvents: ['DOMContentLoaded'] }), (ele) => ele.click());
      numproductsOnPopUp = (await (await t.$(dropUnvItems)).elements()).length;
      console.log('product count on pop-up: ', numproductsOnPopUp);
      for (let k = 1; k <= numproductsOnPopUp; k++) {
        productsOnPopUp[k] = await (await t.$(dropUnvItems + '[' + k + ']')).text();
        console.log(productsOnPopUp[k]);
      }
      await t.evaluate(await t.$(conBtnRemUnvItm), (ele) => ele.click());
      await t.waitFor(parseInt(waitingTime)); // Waiting for Continue button to click and pop-up to close
      console.log(commonMessages.droppedUnvItms);
    }
  }
  else if (CommonData.BrandLocaleList.includes('JM-US')) {
    await t.evaluate(await t.$(sameDayDelivery), (ele) => ele.click());
    await t.waitFor(parseInt(waitingTime)); // Waiting time to click on sdd payment button
    await t.evaluate(await t.$(continueToPayment1), (ele) => ele.click());
    await t.waitFor(await t.$(delMtdUnvSomeItms1), parseInt(waitingTime));
    gauge.screenshot();
    if (await (await t.$(delMtdUnvSomeItms1)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
      delMtdUnvForItmsTxt = await (await t.$(delMethdUnvSomeItms)).text();
      console.log('Inventory status', delMtdUnvForItmsTxt);
      if (delMtdUnvForItmsTxt.includes(CommonData.DeliveryUnavailableForSomeItems)) {
        statusFlag = 2;
        await t.evaluate(await t.$(dropUnavailableItemsAndContinue, { waitForEvents: ['DOMContentLoaded'] }), ele => ele.click());
        numproductsOnPopUp = (await (await t.$(dropUnvItems)).elements()).length;
        console.log('product count on pop-up: ', numproductsOnPopUp);
        for (let k = 1; k <= numproductsOnPopUp; k++) {
          productsOnPopUp[k] = await (await t.$(dropUnvItems + '[' + k + ']')).text();
          console.log(productsOnPopUp[k]);
        }
        await t.evaluate(await t.$(conBtnRemUnvItm), (ele) => ele.click());
        await t.waitFor(parseInt(waitingTime)); // Waiting for Continue button to click and pop-up to close
        console.log(commonMessages.droppedUnvItms);
      }
    }
  }
});

step('BOPIS User clicks Same Day Delivery and selects Select Home Delivery And Continue in pop-up', async function () {
  if (
    CommonData.BrandLocaleList.includes('AV-US') ||
    CommonData.BrandLocaleList.includes('AV-CA') ||
    CommonData.BrandLocaleList.includes('MC-US') ||
    CommonData.BrandLocaleList.includes('MC-CA')
  ) {
    await t.evaluate(await t.$(sameDayDelivery), (ele) => ele.click());
    await t.waitFor(await t.$(delMtdUnvSomeItms1), parseInt(waitingTime));
    delMtdUnvForItmsTxt = await (await t.$(delMtdUnvSomeItms1)).text();
    console.log('Inventory status', delMtdUnvForItmsTxt);
    if (delMtdUnvForItmsTxt.includes(CommonData.DeliveryUnavailableForSomeItems)) {
      statusFlag = 2;
      await t.evaluate(await t.$(changeToHomeDeliveryAndContinue, { waitForEvents: ['DOMContentLoaded'] }), (ele) => ele.click());
      await t.waitFor(parseInt(waitingTime)); // Waiting for radio button to select
      await t.evaluate(await t.$(cntBtnRemUnvItm1), (ele) => ele.click());
      await t.waitFor(parseInt(waitingTime)); // Waiting for Continue button to click and pop-up to close
      console.log(commonMessages.droppedUnvItms);
    }
  }
  else if (CommonData.BrandLocaleList.includes('JM-US')) {
    await t.evaluate(await t.$(sameDayDelivery), (ele) => ele.click());
    await t.waitFor(parseInt(waitingTime)); // Waiting time to click on sdd payment button
    await t.evaluate(await t.$(continueToPayment1), (ele) => ele.click());
    await t.waitFor(await t.$(delMtdUnvSomeItms1), parseInt(waitingTime));
    gauge.screenshot();
    if (await (await t.$(delMtdUnvSomeItms1)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
      delMtdUnvForItmsTxt = await (await t.$(delMtdUnvSomeItms1)).text();
      console.log('Inventory status', delMtdUnvForItmsTxt);
      if (delMtdUnvForItmsTxt.includes(CommonData.DeliveryUnavailableForSomeItems)) {
        statusFlag = 2;
        await t.evaluate(await t.$(changeToHomeDeliveryAndContinue, { waitForEvents: ['DOMContentLoaded'] }), (ele) => ele.click());
        await t.waitFor(parseInt(waitingTime)); // Waiting for radio button to select
        await t.evaluate(await t.$(cntBtnRemUnvItm1), (ele) => ele.click());
        await t.waitFor(parseInt(waitingTime)); // Waiting for Continue button to click and pop-up to close
        console.log(commonMessages.droppedUnvItms);
      }
    }
  }
  else {
    gauge.message(commonMessages.someItemsUnv);
  }
}
);

step('BOPIS Verify delivery method is SDD on Cart Page', async function () {
  if (shippingMethod !== '') {
    shippingMethodText = (
      await (await t.$(shippingMethod)).text()
    ).toUpperCase();
    console.log(shippingMethodText);
    await (await t.$(shippingMethod)).exists();
    if (shippingMethodText.includes('SAME DAY DELIVERY')) {
      gauge.message(commonMessages.cartSameDay);
      assert(matchCondition);
      gauge.screenshot();
    } else {
      gauge.message(
        'Delivery method on Cart Page is ' +
        shippingMethodText +
        ' instead of Same Day Delivery'
      );
      assert(!matchCondition);
    }
  }
});

step(
  'BOPIS Verify delivery method is Pickup in store on Cart Page',
  async function () {
    if (shippingMethod !== '') {
      shippingMethodText = (
        await (await t.$(shippingMethod)).text()
      ).toUpperCase();
      console.log(shippingMethodText);
      await (await t.$(shippingMethod)).exists();
      if (shippingMethodText.includes('PICKUP IN STORE')) {
        gauge.message(commonMessages.cartBopis);
        assert(matchCondition);
        gauge.screenshot();
      } else {
        gauge.message(
          'Delivery method on Cart Page is ' +
          shippingMethodText +
          ' instead of Pickup in store'
        );
        assert(!matchCondition);
      }
    }
  }
);

step('BOPIS Verify proxy user details on Payment Page', async function () {
  if (proxyUserSection !== '') {
    if (await (await t.$(proxyUserSection)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
      proxyUserText = (await (await t.$(proxyUserSection)).text()).toUpperCase();
      proxyUserEmailText = await (await t.$(proxyUserEmail)).text();
      assert(proxyUserText === CommonData.pickedUpInStoreBy.toUpperCase());
      assert(proxyUserEmailText === someoneElseEmailTxt);
      assert(matchCondition);
      gauge.screenshot();
    }
    else {
      assert(!matchCondition);
    }
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Verify product is available for SDD on Delivery Page', async function () {
  if (!await (await t.$(sddNotAvailableMessage)).exists(parseInt(pollingTime), parseInt(waitingTime)) && !await (await t.$(delMethdUnvSomeItms)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
    assert(matchCondition);
  } else {
    gauge.message(commonMessages.sddNtAvlInDelPg);
    assert(!matchCondition);
  }
}
);

step('BOPIS Add available product for SDD on cart page <availability>', async function (availability) {
  if (availability === 'ALL') {
    if (
      CommonData.BrandLocaleList.includes('AV-US') ||
      CommonData.BrandLocaleList.includes('AV-CA') ||
      CommonData.BrandLocaleList.includes('MC-US') ||
      CommonData.BrandLocaleList.includes('MC-CA')
    ) {
      await t.goto(siteDefinition.executionContext.url + spp, { waitForEvents: ['DOMContentLoaded'] });
      for (let i = 0; i < zipCodeArrays.length; i++) {
        if (await (await t.$(editIconSpp)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
          await t.evaluate(await t.$(editIconSpp), (ele) => ele.scrollIntoView());
          await t.evaluate(await t.$(editIconSpp), (ele) => ele.click());
          await t.write(zipCodeArrays[i], t.into(await t.$(zipCodeSpp)));
          await t.evaluate(await t.$(searchZipCodeSpp), (ele) => ele.click());
          sddAvailableMessageText = await (await t.$(sddAvailableMessage)).text();
          if (sddAvailableMessageText.includes(CommonData.availableSameDayText)) {
            saveZipCodeSdd = zipCodeArrays[i];
            saveAvailableStoreNameText = await (await t.$(saveAvailableStoreName)).text();
            console.log(
              'Store selected on SPP ' + saveAvailableStoreNameText
            );
            await t.evaluate(await t.$(addToCart), (ele) => ele.click());
            await t.waitFor(parseInt(waitingTime)); // Waiting to get the popup arrive
            if (!await (await t.$(checkoutButton)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
              await t.reload({ waitForEvents: ['DOMContentLoaded'] });
              await t.evaluate(await t.$(clickCart), (ele) => ele.click());
            }
            gauge.screenshot();
            gauge.message(
              'Product added to cart for ZipCode: ' + saveZipCodeSdd
            );
            break;
          } else {
            gauge.message(commonMessages.proNoAddCart);
          }
        }
      }
    } else if (CommonData.BrandLocaleList.includes('JM-US')) {
      if (siteDefinition.executionContext.environment === 'PROD') {
        await t.goto(siteDefinition.executionContext.url + spp, { waitForEvents: ['DOMContentLoaded'] });
        for (let i = 0; i < zipCodeArrays.length; i++) {
          if (
            await (
              await t.$(editIconSpp)
            ).exists(parseInt(pollingTime), parseInt(waitingTime))
          ) {
            await t.evaluate(await t.$(editIconSpp), (ele) => ele.scrollIntoView());
            await t.evaluate(await t.$(editIconSpp), (ele) => ele.click());
            await t.write(zipCodeArrays[i], t.into(await t.$(zipCodeSpp)));
            await t.press(['Control', 'KeyA']);
            await t.press('Delete');
            await t.write(zipCodeArrays[i], t.into(await t.$(zipCodeSpp)));
            await t.press('ArrowDown');
            await t.press('Enter');
            if (await (await t.$(sddAvailableMessage)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
              sddAvailableMessageText = await (await t.$(sddAvailableMessage)).text();
              if (sddAvailableMessageText.includes(CommonData.availableSameDayText)) {
                saveZipCodeSdd = zipCodeArrays[i];
                saveAvailableStoreNameText = await (await t.$(saveAvailableStoreName)).text();
                console.log(
                  'Store selected on SPP ' + saveAvailableStoreNameText
                );
                await t.evaluate(await t.$(addToCart), (ele) => ele.click());
                gauge.screenshot();
                gauge.message(
                  'Product added to cart for ZipCode: ' + saveZipCodeSdd
                );
                break;
              }
            } else {
              gauge.message(commonMessages.proNoAddCart);
            }
          }
        }
      }
      else {
        await t.goto(siteDefinition.executionContext.url + spp, { waitForEvents: ['DOMContentLoaded'] });
        const i = 0;
        saveZipCodeSdd = zipCodeArrays[i];
        await t.evaluate(await t.$(addToCart), (ele) => ele.click());
        gauge.message(
          'Product added to cart for ZipCode: ' + saveZipCodeSdd
        );
        gauge.screenshot();
      }
    }
  } else if (availability === 'NONE') {
    if (
      CommonData.BrandLocaleList.includes('AV-US') ||
      CommonData.BrandLocaleList.includes('AV-CA') ||
      CommonData.BrandLocaleList.includes('MC-US') ||
      CommonData.BrandLocaleList.includes('MC-CA')
    ) {
      await t.goto(siteDefinition.executionContext.url + sddProductNotAvailableUrl, { waitForEvents: ['DOMContentLoaded'] });
      for (let i = 0; i < zipCodeArrays.length; i++) {
        if (await (await t.$(editIconSpp)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
          await t.evaluate(await t.$(editIconSpp), (ele) => ele.scrollIntoView());
          await t.evaluate(await t.$(editIconSpp), (ele) => ele.click());
          await t.write(zipCodeArrays[i], t.into(await t.$(zipCodeSpp)));
          await t.evaluate(await t.$(searchZipCodeSpp), (ele) => ele.click());
          sddNonAvailableMessageText = await (await t.$(sddAvailableMessage)).text();
          if (sddNonAvailableMessageText.includes(CommonData.sddNtAvlTxt)) {
            saveZipCodeSdd = zipCodeArrays[i];
            await t.evaluate(await t.$(addToCart), (ele) => ele.click());
            gauge.screenshot();
            gauge.message(
              'Product added to cart for ZipCode: ' + saveZipCodeSdd
            );
            break;
          } else {
            gauge.message(commonMessages.proNoAddCart);
          }
        }
      }
    } else if (CommonData.BrandLocaleList.includes('JM-US')) {
      await t.goto(siteDefinition.executionContext.url + sddProductNotAvailableUrl, { waitForEvents: ['DOMContentLoaded'] });
      const i = 0;
      saveZipCodeSdd = zipCodeArrays[i];
      if (await (await t.$(sddAvailableMessage)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
        sddNonAvailableMessageText = await (await t.$(sddAvailableMessage)).text();
        if (sddNonAvailableMessageText.includes(CommonData.sddNtAvlTxt)) {
          console.log(sddNonAvailableMessageText);
          await t.evaluate(await t.$(addToCart), (ele) => ele.click());
          gauge.screenshot();
          gauge.message(
            'Product added to cart for ZipCode: ' + saveZipCodeSdd
          );
        }
      } else {
        gauge.message(commonMessages.proNoAddCart);
      }
    }
  }
});

step('BOPIS Add available product for BOPIS on cart page <availability>', async function (availability) {
  if (availability === 'ALL') {
    if (
      CommonData.BrandLocaleList.includes('AV-US') ||
      CommonData.BrandLocaleList.includes('AV-CA') ||
      CommonData.BrandLocaleList.includes('MC-US') ||
      CommonData.BrandLocaleList.includes('MC-CA')
    ) {
      await t.goto(siteDefinition.executionContext.url + spp, { waitForEvents: ['DOMContentLoaded'] });
      for (let i = 0; i < zipCodeArrays.length; i++) {
        if (await (await t.$(editIconSpp)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
          await t.evaluate(await t.$(editIconSpp), (ele) => ele.scrollIntoView());
          await t.evaluate(await t.$(editIconSpp), (ele) => ele.click());
          await t.write(zipCodeArrays[i], t.into(await t.$(zipCodeSpp)));
          await t.press('Enter');
          await t.evaluate(await t.$(searchZipCodeSpp), (ele) => ele.click());
          bopisAvailableMessageText = await (await t.$(bopisAvailableMessage)).text();
          if (bopisAvailableMessageText.includes(CommonData.bopisAvailableText)) {
            saveZipCodeBopis = zipCodeArrays[i];
            saveAvailableStoreNameText = await (await t.$(saveAvailableStoreName)).text();
            console.log(
              'Store selected on SPP ' + saveAvailableStoreNameText
            );
            await t.evaluate(await t.$(addToCart), (ele) => ele.click());
            await t.waitFor(parseInt(waitingTime)); // Waiting to get the popup arrive
            if (!await (await t.$(checkoutButton)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
              await t.reload({ waitForEvents: ['DOMContentLoaded'] });
              await t.evaluate(await t.$(clickCart), (ele) => ele.click());
            }
            gauge.screenshot();
            gauge.message(
              'Product added to cart for ZipCode: ' + saveZipCodeBopis
            );
            break;
          } else {
            gauge.message(commonMessages.proNoAddCart);
          }
        }
      }
    } else if (CommonData.BrandLocaleList.includes('JM-US')) {
      if (siteDefinition.executionContext.environment === 'PROD') {
        await t.goto(siteDefinition.executionContext.url + spp, { waitForEvents: ['DOMContentLoaded'] });
        for (let i = 0; i < zipCodeArrays.length; i++) {
          if (await (await t.$(editIconSpp)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
            await t.evaluate(await t.$(editIconSpp), (ele) => ele.scrollIntoView());
            await t.evaluate(await t.$(editIconSpp), (ele) => ele.click());
            await t.write(zipCodeArrays[i], t.into(await t.$(zipCodeSpp)));
            await t.press(['Control', 'KeyA']);
            await t.press('Delete');
            await t.write(zipCodeArrays[i], t.into(await t.$(zipCodeSpp)));
            await t.press('ArrowDown');
            await t.press('Enter');
            if (await (await t.$(bopisAvailableMessage)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
              bopisAvailableMessageText = await (await t.$(bopisAvailableMessage)).text();
              if (bopisAvailableMessageText.includes(CommonData.bopisAvailableText)) {
                saveZipCodeBopis = zipCodeArrays[i];
                saveAvailableStoreNameText = await (await t.$(saveAvailableStoreName)).text();
                console.log(
                  'Store selected on SPP ' + saveAvailableStoreNameText
                );
                await t.evaluate(await t.$(addToCart), (ele) => ele.click());
                gauge.screenshot();
                gauge.message(
                  'Product added to cart for ZipCode: ' + saveZipCodeBopis
                );
                break;
              }
            } else {
              gauge.message(commonMessages.proNoAddCart);
            }
          }
        }
      }
      else {
        await t.goto(siteDefinition.executionContext.url + spp, { waitForEvents: ['DOMContentLoaded'] });
        const i = 0;
        saveZipCodeBopis = zipCodeArrays[i];
        await t.evaluate(await t.$(addToCart), (ele) => ele.click());
        gauge.message(
          'Product added to cart for ZipCode: ' + saveZipCodeBopis
        );
        gauge.screenshot();
      }
    } else if (CommonData.BrandLocaleList.includes('MC-FR')) {
      await t.goto(siteDefinition.executionContext.url + spp, { waitForEvents: ['DOMContentLoaded'] });
      for (let i = 0; i < zipCodeArrays.length; i++) {
        await t.waitFor(await t.$(bopisAvailableMessage), parseInt(waitingTime));
        if (await (await t.$(editIconSpp)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
          await t.evaluate(await t.$(editIconSpp), (ele) => ele.scrollIntoView());
          await t.evaluate(await t.$(editIconSpp), (ele) => ele.click());
          await t.write(zipCodeArrays[i], t.into(await t.$(zipCodeSpp)));
          await t.press('Enter');
          bopisAvailableMessageText = await (await t.$(bopisAvailableMessage)).text();
          if (bopisAvailableMessageText.includes(CommonData.bopisAvailableText)) {
            saveZipCodeBopis = zipCodeArrays[i];
            saveAvailableStoreNameText = await (await t.$(saveAvailableStoreName)).text();
            console.log(
              'Store selected on SPP ' + saveAvailableStoreNameText
            );
            await t.evaluate(await t.$(addToCart), (ele) => ele.click());
            gauge.screenshot();
            gauge.message(
              'Product added to cart for ZipCode: ' + saveZipCodeBopis
            );
            break;
          } else {
            gauge.message(commonMessages.proNoAddCart);
          }
        }
      }
    }
  } else if (availability === 'NONE') {
    if (
      CommonData.BrandLocaleList.includes('AV-US') ||
      CommonData.BrandLocaleList.includes('AV-CA') ||
      CommonData.BrandLocaleList.includes('MC-US') ||
      CommonData.BrandLocaleList.includes('MC-CA')
    ) {
      await t.goto(siteDefinition.executionContext.url + bopisProductNotAvailableUrl, { waitForEvents: ['DOMContentLoaded'] });
      for (let i = 0; i < zipCodeArrays.length; i++) {
        if (await (await t.$(editIconSpp)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
          await t.evaluate(await t.$(editIconSpp), (ele) => ele.scrollIntoView());
          await t.evaluate(await t.$(editIconSpp), (ele) => ele.click());
          await t.write(zipCodeArrays[i], t.into(await t.$(zipCodeSpp)));
          await t.evaluate(await t.$(searchZipCodeSpp), (ele) => ele.click());
          bopisNonAvailableMessageText = await (await t.$(bopisAvailableMessage)).text();
          if (bopisNonAvailableMessageText.includes(CommonData.bopNtAvlTxt)) {
            saveZipCodeBopis = zipCodeArrays[i];
            saveAvailableStoreNameText = await (await t.$(saveAvailableStoreName)).text();
            console.log('Store selected on SPP ' + saveAvailableStoreNameText);
            await t.evaluate(await t.$(addToCart), (ele) => ele.click());
            gauge.screenshot();
            gauge.message(
              'Product added to cart for ZipCode: ' + saveZipCodeBopis
            );
            break;
          } else {
            gauge.message(commonMessages.proNoAddCart);
          }
        }
      }
    } else if (CommonData.BrandLocaleList.includes('JM-US')) {
      await t.goto(siteDefinition.executionContext.url + bopisProductNotAvailableUrl, { waitForEvents: ['DOMContentLoaded'] });
      const i = 0;
      saveZipCodeBopis = zipCodeArrays[i];
      if (await (await t.$(bopisAvailableMessage)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
        bopisNonAvailableMessageText = await (await t.$(bopisAvailableMessage)).text();
        if (bopisNonAvailableMessageText.includes(CommonData.bopNtAvlTxt)) {
          saveAvailableStoreNameText = await (await t.$(saveAvailableStoreName)).text();
          console.log(
            'Store selected on SPP ' + saveAvailableStoreNameText
          );
          await t.evaluate(await t.$(addToCart), (ele) => ele.click());
          gauge.screenshot();
          gauge.message(
            'Product added to cart for ZipCode: ' + saveZipCodeBopis
          );
        }
      } else {
        gauge.message(commonMessages.proNoAddCart);
      }
    }
    else {
      await t.goto(siteDefinition.executionContext.url + bopisProductNotAvailableUrl, { waitForEvents: ['DOMContentLoaded'] });
      const i = 0;
      saveZipCodeBopis = zipCodeArrays[i];
      if (await (await t.$(bopisAvailableMessage)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
        bopisNonAvailableMessageText = await (await t.$(bopisAvailableMessage)).text();
        if (bopisNonAvailableMessageText.includes(CommonData.bopNtAvlTxt)) {
          saveAvailableStoreNameText = await (await t.$(saveAvailableStoreName)).text();
          console.log(
            'Store selected on SPP ' + saveAvailableStoreNameText
          );
          await t.evaluate(await t.$(addToCart), (ele) => ele.click());
          gauge.screenshot();
          gauge.message(
            'Product added to cart for ZipCode: ' + saveZipCodeBopis
          );
        }
      } else {
        gauge.message(commonMessages.proNoAddCart);
      }
    }
  }
}
);

step('BOPIS Enter ZIPCODE <deliverytype>', async function (deliverytype) {
  if (deliverytype === 'SDD') {
    if (enterZipCode1 !== '') {
      await t.evaluate(await t.$(enterZipCode), (ele) => ele.scrollIntoView());
      await t.write(saveZipCodeSdd, t.into(await t.$(enterZipCode)));
      await t.press(['Control', 'KeyA']);
      await t.press('Backspace');
      await t.write(saveZipCodeSdd, t.into(await t.$(enterZipCode)));
    }
    if (newYorkZipCode !== '') {
      await t.write(saveZipCodeSdd, t.into(await t.$(enterZipCode)));
      await t.press(['Control', 'KeyA']);
      await t.press('Backspace');
      await t.write(saveZipCodeSdd, t.into(await t.$(enterZipCode)));
      await t.waitFor(parseInt(waitingTime)); // Waiting for City,State dropdown to appear
      await t.evaluate(await t.$(newYorkZipCode), (ele) => ele.click());
    }
  } else if (deliverytype === 'BOPIS') {
    if (enterZipCode1 !== '') {
      await t.evaluate(await t.$(enterZipCode), (ele) => ele.scrollIntoView());
      await t.write(saveZipCodeBopis, t.into(await t.$(enterZipCode)));
      await t.press(['Control', 'KeyA']);
      await t.press('Backspace');
      await t.write(saveZipCodeBopis, t.into(await t.$(enterZipCode)));
    }
    if (newYorkZipCode !== '') {
      await t.evaluate(await t.$(enterZipCode), (ele) => ele.scrollIntoView());
      await t.write(saveZipCodeBopis, t.into(await t.$(enterZipCode)));
      await t.press(['Control', 'KeyA']);
      await t.press('Backspace');
      await t.write(saveZipCodeBopis, t.into(await t.$(enterZipCode)));
      await t.waitFor(parseInt(waitingTime)); // Waiting for City,State dropdown to appear
      await t.evaluate(await t.$(newYorkZipCode), (ele) => ele.click());
    }
  }
});

step('BOPIS Enter Billing ZIPCODE <deliverytype>', async function (deliverytype) {
  if (deliverytype === 'SDD') {
    if (billZipCode1 !== '') {
      await t.evaluate(await t.$(billZipCode), (ele) => ele.scrollIntoView());
      await t.write(saveZipCodeSdd, t.into(await t.$(billZipCode)));
    }
    if (newYorkZipCode !== '') {
      await t.evaluate(await t.$(billZipCode), (ele) => ele.scrollIntoView());
      await t.write(saveZipCodeSdd, t.into(await t.$(billZipCode)));
      await t.waitFor(parseInt(waitingTime)); // Waiting for City,State dropdown to appear
      await t.evaluate(await t.$(newYorkZipCode), (ele) => ele.click());
    }
  } else if (deliverytype === 'BOPIS') {
    if (billZipCode1 !== '') {
      await t.evaluate(await t.$(billZipCode), (ele) => ele.scrollIntoView());
      await t.write(saveZipCodeBopis, t.into(await t.$(billZipCode)));
    }
    if (newYorkZipCode !== '') {
      await t.evaluate(await t.$(billZipCode), (ele) => ele.scrollIntoView());
      await t.write(saveZipCodeBopis, t.into(await t.$(billZipCode)));
      await t.waitFor(parseInt(waitingTime)); // Waiting for City,State dropdown to appear
      await t.evaluate(await t.$(newYorkZipCode), (ele) => ele.click());
    }
  }
});

step('BOPIS Enter ZIPCODE not available for <deliverytype>', async function (deliverytype) {
  if (deliverytype === 'SDD') {
    if (enterZipCode !== '') {
      await t.evaluate(await t.$(enterZipCode), (ele) => ele.scrollIntoView());
      await t.write(CommonData.notAvailableZipcodeSDD, t.into(await t.$(enterZipCode)));
    }
  }
});

step('BOPIS Select keep this address popup option', async function () {
  if (keepThisAddress !== '') {
    if (await (await t.$(keepThisAddress)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
      await t.evaluate(await t.$(keepThisAddress), (ele) => ele.click());
      gauge.screenshot();
    } else {
      gauge.message(commonMessages.addSugPopNtDis);
    }
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Close Popups', async function () {
  if (PopupTopRight !== '') {
    if (CookieAcceptButton !== '') {
      await closePopups(CookieAcceptButton);
      await closePopups(PopupTopRight);
    } else if (PopupTopRight !== '') {
      if (
        await (
          await t.$(PopupTopRight)
        ).exists(parseInt(pollingTime), parseInt(waitingTime))
      ) {
        await closePopups(PopupTopRight);
      } else {
        gauge.message(commonMessages.stpNtAplForMob);
      }
    }
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Click all terms condition', async function () {
  if (clickTerms !== '') {
    await t.evaluate(await t.$(clickTerms), (ele) => ele.click());
    gauge.screenshot();
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Enter Credit Card Details and Place the Order in pc using keyboard actions', async function () {
  if (enterCreditCardNumber !== '') {
    const EnterCreditCardValue = CommonData.CREDITCARDNUMBER;
    const creditCardValue = EnterCreditCardValue.split('');
    await t.press(creditCardValue);
    await t.press('Tab');
    await t.press('Enter');
    for (let i = 0; i < 12; i++) {
      await t.press('ArrowDown');
    }
    await t.press('Enter');
    await t.press('Tab');
    await t.press('Enter');
    for (let i = 0; i < 8; i++) {
      await t.press('ArrowDown');
    }
    await t.press('Enter');
    await t.press('Tab');
    const enterCvvValue = CommonData.ENTERCVV;
    const cvvValue = enterCvvValue.split('');
    await t.press(cvvValue);
    if (clickPaymentButton !== '') {
      await t.evaluate(await t.$(clickPaymentButton), (ele) => ele.click());
    }
    if (siteDefinition.executionContext.environment === 'STAGE') {
      await t.reload({ waitForEvents: ['DOMContentLoaded'] });
    }
    gauge.screenshot();
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
}
);

step('BOPIS Enter Street name', async function () {
  if (streetName !== '') {
    await t.write(CommonData.STREETNAME, t.into(await t.$(streetName)));
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Enter Street name shipping', async function () {
  if (streetNameShp !== '') {
    await t.write(CommonData.STREETNAME, t.into(await t.$(streetNameShp)));
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Enter Street number', async function () {
  if (streetNumber !== '') {
    await t.write(CommonData.STREETNUMBER, t.into(await t.$(streetNumber)));
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Enter Street number shipping', async function () {
  if (streetNumberShp !== '') {
    await t.write(CommonData.STREETNUMBER, t.into(await t.$(streetNumberShp)));
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Enter City name', async function () {
  if (cityName !== '') {
    await t.write(CommonData.CITYNAME, t.into(await t.$(cityName)));
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Enter City name shipping', async function () {
  if (cityNameShp !== '') {
    await t.write(CommonData.CITYNAME, t.into(await t.$(cityNameShp)));
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Enter postal code', async function () {
  if (postalCode !== '') {
    await t.write(CommonData.POSTALCODE, t.into(await t.$(postalCode)));
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Enter postal code shipping', async function () {
  if (postalCodeShp !== '') {
    await t.write(CommonData.POSTALCODE, t.into(await t.$(postalCodeShp)));
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Enter Credit Card Details and Place the Order in mobile', async function () {
  if (enterCreditCardNumber !== '') {
    if (await (await t.$(enterCreditCardNumber)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
      await t.write(CommonData.CREDITCARDNUMBER, t.into(await t.$(enterCreditCardNumber)));
      await t.dropDown({ id: SelectMonth }).select(CommonData.CCMONTHFR);
      await t.dropDown({ id: SelectYear }).select(CommonData.YEAR);
      await t.write(CommonData.ENTERCVV, t.into(await t.$(enterCvv)));
      await t.evaluate(await t.$(clickPaymentButton), (ele) => ele.click());
      if (siteDefinition.executionContext.environment === 'STAGE') {
        await t.reload({ waitForEvents: ['DOMContentLoaded'] });
      }
      gauge.screenshot();
    }
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
}
);

step('BOPIS Enter card holder name', async function () {
  if (CommonData.BrandLocaleList.includes('JM-US') || CommonData.BrandLocaleList.includes('AV-US') || CommonData.BrandLocaleList.includes('AV-CA') || CommonData.BrandLocaleList.includes('MC-US') || CommonData.BrandLocaleList.includes('MC-CA')) {
    if (cardHolderName !== '') {
      if (await (await t.$(cardHolderName)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
        await t.evaluate(await t.$(cardHolderName), (ele) => ele.focus());
        await t.write(CommonData.cardHolderNameValue, t.into(await t.$(cardHolderName)));
      } else {
        gauge.message(commonMessages.fielNtAplForProd);
      }
    }
  } else {
    gauge.message(commonMessages.stepNotApplicable);
  }
});

step('BOPIS Increase quantity', async function () {
  if (increaseQty !== '') {
    for (let i = 0; i < 6; i++) {
      await t.evaluate(await t.$(increaseQty), (ele) => ele.click());
      await t.waitFor(parseInt(waitingTime)); // Waiting to load the quantity
    }
  }
});

step('BOPIS Verify gwp sku is present in cart page', async function () {
  if (verGwpInCart !== '') {
    for (let i = 0; i < verGwpInCart.length; i++) {
      const gwpItemTxt = await (await t.$(verGwpInCart[i])).text();
      if (gwpItemTxt === CommonData.gwpItemTxtData) {
        assert(matchCondition);
        gauge.message("Gwp offer got added to cart");
        break;
      }
    }
  }
});

step('BOPIS Verify gwp sku is present in sdd delivery page', async function () {
  if (verGwpInDelPg !== '') {
    for (let i = 0; i < verGwpInDelPg.length; i++) {
      const gwpTxtDel = await (await t.$(verGwpInDelPg[i])).text();
      if (gwpTxtDel === CommonData.gwpItemTxtData) {
        assert(matchCondition);
        gauge.message("Gwp offer got added to cart");
        break;
      }
    }
  }
});

step('BOPIS Verify gwp offer is applied on offer manager', async function () {
  if (offerUrl !== '') {
    bopPgUrl = await t.currentURL();
    await t.openTab();
    await t.goto(siteDefinition.executionContext.url + offerUrl, { waitForEvents: ['DOMContentLoaded'] });
    offerText = await (await t.$(offerTextData)).text();
    if (offerText.includes(CommonData.offerDataBop)) {
      assert(matchCondition);
      gauge.message("Gwp offer is successfully applied");
    }
    await t.switchTo(bopPgUrl);
  }
});

step('BOPIS Verify gwp sku is present in payment page', async function () {
  if (plusIconOnPayPg !== '') {
    if (await (await t.$(plusIconOnPayPg)).exists(parseInt(pollingTime), parseInt(waitingTime))) {
      await t.evaluate(await t.$(plusIconOnPayPg), (ele) => ele.click());
      for (let i = 0; i < verGwpInDelPg.length; i++) {
        const gwpTxtPayPg = await (await t.$(verGwpInDelPg[i])).text();
        if (gwpTxtPayPg === CommonData.gwpItemTxtData) {
          assert(matchCondition);
          gauge.message("Gwp offer got added to cart");
          break;
        }
      }
    }
  }
});

step('BOPIS Verify gwp sku is present in bopis delivery page', async function () {
  if (verGwpInDelPg !== '') {
    for (let i = 0; i < verGwpInDelPg.length; i++) {
      const gwpTxtDel = await (await t.$(verGwpInDelPg[i])).text();
      if (gwpTxtDel === CommonData.gwpItemTxtData) {
        assert(matchCondition);
        gauge.message("Gwp offer got added to cart");
        break;
      }
    }
  }
});

step('BOPIS Verify gwp sku is present in order details page', async function () {
  if (verGwpInOrdPg !== '') {
    for (let i = 0; i < verGwpInOrdPg.length; i++) {
      const gwpTxtOrdPg = await (await t.$(verGwpInOrdPg[i])).text();
      const gwpTxtOrdPgUppCase = gwpTxtOrdPg.toUpperCase;
      if (gwpTxtOrdPgUppCase.includes(CommonData.gwpItemTxtData)) {
        assert(matchCondition);
        gauge.message("Gwp offer got added to cart");
        break;
      }
    }
  }
});