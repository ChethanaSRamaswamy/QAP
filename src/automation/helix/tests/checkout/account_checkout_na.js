// should come from ID file
// CONFIG
var t = require('taiko');
const Util = require('../../../../utilities/util.js');
var skuIds = [];
var guestuserlink = [];
var GuestuserDetails = [];
var ShippingDetails = [];
var BillingShippingDetails = [];
var acEnterCCNameStage = '';

var ACShippingDetails = [];
var ACMOBShippingDetails = [];
var ACEditShippingDetails = [];
var BillingMOBShippingDetails = [];

var ShippingDetailsStage = [];
var ACShippingDetailsStage = [];
var ACMOBShippingDetailsStage = [];
var BillingShippingDetailsStage = [];
var BillingMOBShippingDetailsStage = [];

var timeout = '';
var pollingTime = '';
var emulationDevice = '';
var timeoutSetting = '';
var url = '';
var cartPopUpClose = '';
var productID = '';
var notAvailableProductsCount = 0;
var skuLink = '';
var isShoppableSku = '';
var isDisplayableSku = '';
var productUrlLoc = '';
var nodisplayableProduct = '';
var sppUrl = '';

// SPP PAGE
var isShoppable = '';
var isDisplayable = '';
var productUrl = '';
var productCatUrl = '';
var categoryUrl = '';
let tmpProdID = '';
var prodIDSingle = '';
var sppPageProdHeader = '';
var sppPageProdHeaderMob = '';
var javaAlertPopUp = '';
var addToBagSPP = '';
var clickCartPageLink = '';
var bagIcon = '';
var clickCartPageLinkMob = '';
var cartPageUrlText = '';
var cartCountValue = '';
var emptyCart = '';
var emptyCartMob = '';
var isShoppableValueSku = '';
var isDisplayableValueSku = '';
var noDisplayableProductError = '';
var randomSkuUrl = '';

// CHECKOUT
var checkoutButtonId = '';
var SignupPopUpClose = '';
var continueSample1 = '';
var continueSample2 = '';
var orderPagePopUpClose = '';
var mobOrderPagePopUpClose = '';
var mobGuestUserLink = '';
var guestUserLink = '';
var guestUserId = '';
var continueAsGuest = '';
var enterFirstName = '';
var enterLastName = '';
var enterAddress1 = '';
var enterAddress2 = '';
var enterZipCode = '';
var enterPhoneNumber = '';
var returnEnterAddress1 = '';
var enterCity = '';
var selectState = '';
var selectState1 = '';
var state = '';
var selectUseThisAddress = '';
var continueToPayment = '';
var continueToPayment1 = '';
var ccDetails = '';
var creditCardNumber = '';
var cvvFieldId = '';
var selectPcMonth = '';
var nameMonth = '';
var selectPcYear = '';
var nameYear = '';
var pcMothAndYear = '';
var enterCCName = '';
var selectMobileMonth = '';
var selectMobileYear = '';
var ccTime = '';
var useBillingAddress = '';
var placeOrderValidation = '';
var orderConfirmationMsgId = '';
var placeOrder = '';
var returnUserSelectAddress = '';
var mobCheckoutViewCart = '';
var mobCheckoutCreditcard = '';
var mobContinueSample1 = '';
var mobContinueSample2 = '';
var registerPassword = '';
var signUpRegisterTerms = '';
var enterNewuserZipCode = '';
var dobDay = '';
var dobMonth = '';
var signUpRegisterButton = '';
var accountPageValidation = '';
var returnUserSignInLink = '';
var mobReturnUserSignInLink = '';
var returnUserId = '';
var returnUserPassword = '';
var returnUserSignInButton = '';
var returnUserSignInLabel = '';
var returnUserContinueCheckoutViewCart = '';
var returnUserShippingLinkText = '';
var returnUserAddNewAddress = '';
var returnUserAddNewaddress1 = '';
var returnUserPaymentLinkText = '';
var returnUserNewPaymentButton = '';
var productSkuUrl = '';

// Stage Constants
var enterFirstNameStage = '';
var enterLastNameStage = '';
var enterAddress1Stage = '';
var enterAddress2Stage = '';
var enterZipCodeStage = '';
var enterPhoneNumberStage = '';
var enterCityStage = '';
var selectStateStage = '';
var selectState1Stage = '';
var stateStage = '';
var tenantDomainUrl = '';

var creditCardNumberStage = '';
var cvvFieldIdStage = '';
var pcMothAndYearStage = '';
var selectPcMonthStage = '';
var selectPcYearStage = '';
var nameMonthStage = '';
var enterCCNameStage = '';
var nameYearStage = '';
var selectMobileMonthStage = '';
var selectMobileYearStage = '';
var useBillingAddressStage = '';

var acEnterFirstNameStage = '';
var acEnterLastNameStage = '';
var acEnterAddress1Stage = '';
var acEnterAddress2Stage = '';
var acEnterZipCodeStage = '';
var acEnterPhoneNumberStage = '';
var acEnterCityStage = '';
var acAddressSubmitButtonStage = '';

var acSelectCardTypeStage = '';

var acEnterCreditCardNumberStage = '';
var acEnterCvvNumberStage = '';
var acEnterExpMonthStage = '';
var acEnterExpYearStage = '';
var acEnterExpMonthDropDownStage = '';
var acEnterExpYearDropDownStage = '';
var acEnterMothAndYearStage = '';

var acSelectStateStage = '';
var selectBillingStateStage = '';
var mobSelectBillingStateStage = '';

var acMSelectCardTypeStage = '';
var acMSelectCardTypeDropDownStage = '';
var acMEnterCreditCardNumberStage = '';
var acMEnterCvvNumberStage = '';
var acMEnterExpMonthStage = '';
var acMEnterExpYearStage = '';
var acMEnterExpMonthDropDownStage = '';
var acMEnterExpYearDropDownStage = '';
var acMEntermothAndYearStage = '';
var clickNewCreditCardStage = '';
var acMSelectStateStage = '';

//CART PAGE
var quantitySelect1 = '';
var quantirySelect = '';
var offerCode = '';
var offerCodeButton = '';
var validOfferMsg = '';
var removeProductAssert = '';
var removeProduct = '';
var offerEditButton = '';
var enterInValidOfferCode = '';
var applyOfferButton1 = '';
var inValidOfferMsg = '';
var testOffersUrl = '';
var newCreditCardRadioButton = '';

//ACCOUNT
var acNavigateSignInUrl = '';
var acRegistrationFirstName = '';
var acRegistrationLastName = '';
var acRegisterEmailId = '';
var acRegisterPassword = '';
var acRegisterationTerms = '';
var acRegisterButton = '';
var useReload = '';
var useReload1 = '';
var newEmail = '';
var acRegisterNow = '';
var acAddressBook = '';
var acAddNewAddressButton = '';
var acEnterFirstName = '';
var acEnterLastName = '';
var acEnterAddress1 = '';
var acEnterAddress2 = '';
var acEnterZipCode = '';
var acEnterPhoneNumber = '';
var acEnterCity = '';
var acAddressSubmitButton = '';
var acEditAddressSubmitButton = '';
var acSelectState = '';
var acMSelectState = '';
var acSelectCountryStage = '';
var selectBillingState = '';
var mobSelectBillingState = '';
var acSignoutButton = '';
var acNeedToClickLogInLinkAgain = '';
var acReturnUserEmailId = '';
var acReturnUserPassword = '';
var acReturnUserLoginButton = '';
var acEditAddress = '';
var acDeleteAddress = '';
var acDeleteAddressConfirm = '';
var acMyOder = '';
var acMyOderAccordion = '';
var acMyOderViewDetatils = '';
var acAddNewBillingAddress = '';
var acAddNewCreditCard = '';
var acSelectCardType = '';
var acSelectCardTypeDropDown = '';
var acEnterCreditCardNumber = '';
var acEnterCvvNumber = '';
var acEnterExpMonth = '';
var acEnterExpYear = '';
var acEnterExpMonthDropDown = '';
var acEnterExpYearDropDown = '';
var acEnterMothAndYear = '';
var acMobRegisterNow = '';
var acMobLoggedInProfileLink = '';
var acMobNeedToClickLogInLinkAgain = '';
var acMobDeleteAddress = '';
var acMobDeleteAddressConfirm = '';
var acMobMyoder = '';
var acMobMyOderAccordion = '';
var acMobMyOderViewDetails = '';
var acMobSignoutButton = '';
var mobCreditCardSubmitButton = '';
var acMSelectCardType = '';
var acMSelectCardTypeDropDown = '';
var acMEnterCreditCardNumber = '';
var acMEnterCvvNumber = '';
var acMEnterExpMonth = '';
var acMEnterExpYear = '';
var acMEnterExpMonthDropDown = '';
var acMEnterExpYearDropDown = '';
var acMEntermothAndYear = '';
var acMRegistrationFirstName = '';
var acMRegistrationLastName = '';
var acMRegisterEmailId = '';
var acMRegisterPassword = '';
var acMRegisterationTerms = '';
var acMRegisterButton = '';
var accountSettings = '';
var clickNewCreditCard = '';
var acCreditCardSubmitButton = '';
var addTitle = '';
var acMobHamburgerIcon = '';
var acMobLoginLink = '';
var acSelectCardTypeDropDownStage = '';

//saved card Return user
var scReturnUserId = '';
var scCvvField = '';
var cookieRejectButton = '';
var adyenPassword = '';
var clickOnAdyenButton = '';
var placeOrderToPasswordPage = '';
var indexValue = '';
var indexValue1 = '';

var prodID = [];
var [featureUser, featurePwd] = [];
var CommonData = {};

matchCondition = true;
const responseCode = 200;

/******** CODE TO RECEIVE AND FORM THE BASE URL AND ADMIN URL ******/

// PROD, PREPROD, STAGE, DEV, FEAT, ENG, PINCER, PREVIEW
var deviceWidth = process.env.Width || 1920; // For browser width
var deviceHeight = process.env.Height || 1040; // For browser height
var revTag = process.env.REVISIONTAG || '';
var toplaceorder = process.env.PLACEORDER || 'true'; //true to place order and false to not place the order
var translateSite = process.env.TRANSLATION || 'false'; // true to verify CA FR translate site

const assert = require('assert');
let siteDefinition, source, NullDataException;
let Hengine = require('../../../../datainterface/providers/hengine');
let taikoOverride = require('../../helix_taiko');
let reusableFunc = require('../ReUsableFunction.js');
const Helper = require('../../helpers/helper');
var t = require('taiko');

const { Console } = require('console');

var feature = 'Checkout';

function makeEmail() {
  var strValues = 'abcdefghijk12345678';
  var strEmail = '';
  var strTmp;
  for (var i = 0; i < 10; i++) {
    strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
    strEmail = strEmail + strTmp;
  }
  strEmail = strEmail + '@test' + '.com';
  return strEmail;
}

function reinitialize() {
  skuIds = [
    CommonData.skuId1,
    CommonData.skuId2,
    CommonData.skuId3,
    CommonData.skuId4,
    CommonData.skuId5,
  ];
  CatID = [CommonData.CatID];

  RUID = [
    CommonData.RID1,
    CommonData.RID2,
    CommonData.RID3,
    CommonData.RID4,
    CommonData.RID5,
    CommonData.RID6,
    CommonData.RID7,
    CommonData.RID8,
    CommonData.RID9,
    CommonData.RID10,
    CommonData.RID11,
    CommonData.RID12,
    CommonData.RID13,
    CommonData.RID14,
    CommonData.RID15,
  ];

  SCRUID = [CommonData.SCRID, CommonData.SCRID1, CommonData.SCRID2];
  checkoutbutton = [
    {
      loc: checkoutButtonId,
      action: 'click',
    },
  ];

  samplepage = [
    {
      loc: continueSample1,
      action: 'tryCatchClick',
    },
    {
      loc: continueSample2,
      action: 'tryCatchClick',
    },
  ];

  guestuserlink = [
    {
      loc: mobGuestUserLink,
      action: 'tryCatchClick',
    },
    {
      loc: guestUserLink,
      action: 'tryCatchClick',
    },
  ];

  GuestuserDetails = [
    {
      loc: guestUserId,
      data: makeEmail(),
      action: 'write',
    },
    {
      loc: continueAsGuest,
      action: 'click',
    },
  ];

  ShippingDetails = [
    {
      loc: enterFirstName,
      data: CommonData.FIRSTNAME,
      action: 'waitBeforeWrite',
    },
    {
      loc: enterLastName,
      data: CommonData.LASTNAME,
      action: 'write',
    },
    {
      loc: enterAddress1,
      data: CommonData.ADDRESS1,
      action: 'write',
    },
    {
      loc: enterAddress2,
      data: CommonData.ADDRESS2,
      action: 'write',
    },
    {
      loc: enterZipCode,
      data: CommonData.ZIPCODE,
      action: 'write',
    },
    {
      loc: enterPhoneNumber,
      data: CommonData.PHONE,
      action: 'write',
    },
    {
      loc: enterCity,
      data: CommonData.CITY,
      action: 'write',
    },
    {
      loc: selectState,
      data: CommonData.MSTATE,
      action: 'IDDropdowntxt',
    },
    {
      loc: selectState1,
      action: 'click',
    },
    {
      loc: state,
      action: 'click',
    },
    {
      loc: continueToPayment,
      action: 'click',
    },
    {
      loc: selectUseThisAddress,
      action: 'tryCatchClick',
    },
    { action: 'screenshot' },
    {
      loc: continueToPayment1,
      action: 'tryCatchClick',
    },
  ];

  ShippingDetailsStage = [
    {
      loc: enterFirstNameStage,
      data: CommonData.FIRSTNAME,
      action: 'waitBeforeWrite',
    },
    {
      loc: enterLastNameStage,
      data: CommonData.LASTNAME,
      action: 'write',
    },
    {
      loc: enterAddress1Stage,
      data: CommonData.ADDRESS1,
      action: 'write',
    },
    {
      loc: enterAddress2Stage,
      data: CommonData.ADDRESS2,
      action: 'write',
    },
    {
      loc: enterZipCodeStage,
      data: CommonData.ZIPCODE,
      action: 'write',
    },
    {
      loc: enterPhoneNumberStage,
      data: CommonData.PHONE,
      action: 'write',
    },
    {
      loc: enterCityStage,
      data: CommonData.CITY,
      action: 'write',
    },
    {
      loc: selectStateStage,
      data: CommonData.MSTATE,
      action: 'IDDropdowntxt',
    },
    {
      loc: selectState1Stage,
      action: 'click',
    },
    {
      loc: stateStage,
      action: 'click',
    },
    {
      loc: continueToPayment,
      action: 'click',
    },
    {
      loc: selectUseThisAddress,
      action: 'tryCatchClick',
    },
    { action: 'screenshot' },
    {
      loc: continueToPayment1,
      action: 'tryCatchClick',
    },
  ];

  ACShippingDetails = [
    {
      loc: acEnterFirstName,
      data: CommonData.FIRSTNAME,
      action: 'write',
    },
    {
      loc: acEnterLastName,
      data: CommonData.LASTNAME,
      action: 'write',
    },
    {
      loc: acEnterAddress1,
      data: CommonData.ADDRESS1,
      action: 'write',
    },
    {
      loc: acEnterAddress2,
      data: CommonData.ADDRESS2,
      action: 'write',
    },
    {
      loc: acEnterZipCode,
      data: CommonData.ACZIPCODE,
      action: 'write',
    },
    {
      loc: acEnterPhoneNumber,
      data: CommonData.PHONE,
      action: 'write',
    },
    {
      loc: acEnterCity,
      data: CommonData.ACCITY,
      action: 'write',
    },
    {
      loc: acSelectState,
      data: CommonData.ACSTATE,
      action: 'IDDropdowntxt',
    },
    { action: 'screenshot' },
    {
      loc: acAddressSubmitButton,
      action: 'click',
    },
  ];

  ACShippingDetailsStage = [
    {
      loc: acEnterFirstNameStage,
      data: CommonData.FIRSTNAME,
      action: 'write',
    },
    {
      loc: acEnterLastNameStage,
      data: CommonData.LASTNAME,
      action: 'write',
    },
    {
      loc: acEnterAddress1Stage,
      data: CommonData.ADDRESS1,
      action: 'write',
    },
    {
      loc: acEnterAddress2Stage,
      data: CommonData.ADDRESS2,
      action: 'write',
    },
    {
      loc: acEnterZipCodeStage,
      data: CommonData.ACZIPCODE,
      action: 'write',
    },
    {
      loc: acEnterPhoneNumberStage,
      data: CommonData.PHONE,
      action: 'write',
    },
    {
      loc: acEnterCityStage,
      data: CommonData.ACCITY,
      action: 'write',
    },
    {
      loc: acSelectStateStage,
      data: CommonData.ACSTATE,
      action: 'IDDropdowntxt',
    },
    { action: 'screenshot' },
    {
      loc: acAddressSubmitButtonStage,
      action: 'click',
    },
  ];

  ACMOBShippingDetailsStage = [
    {
      loc: acEnterFirstNameStage,
      data: CommonData.FIRSTNAME,
      action: 'write',
    },
    {
      loc: acEnterLastNameStage,
      data: CommonData.LASTNAME,
      action: 'write',
    },
    {
      loc: acEnterAddress1Stage,
      data: CommonData.ADDRESS1,
      action: 'write',
    },
    {
      loc: acEnterAddress2Stage,
      data: CommonData.ADDRESS2,
      action: 'write',
    },
    {
      loc: acEnterZipCodeStage,
      data: CommonData.ACZIPCODE,
      action: 'write',
    },
    {
      loc: acEnterPhoneNumberStage,
      data: CommonData.PHONE,
      action: 'write',
    },
    {
      loc: acEnterCityStage,
      data: CommonData.ACCITY,
      action: 'write',
    },
    {
      loc: acMSelectStateStage,
      data: CommonData.ACMSTATE,
      action: 'IDDropdowntxt',
    },
    {
      loc: acSelectCountryStage,
      data: CommonData.ACCOUNTRY,
      action: 'IDDropdowntxt',
    },
    { action: 'screenshot' },
    {
      loc: acAddressSubmitButtonStage,
      action: 'click',
    },
  ];

  BillingShippingDetails = [
    {
      loc: acEnterFirstName,
      data: CommonData.FIRSTNAME,
      action: 'write',
    },
    {
      loc: acEnterLastName,
      data: CommonData.LASTNAME,
      action: 'write',
    },
    {
      loc: acEnterAddress1,
      data: CommonData.ADDRESS1,
      action: 'write',
    },
    {
      loc: acEnterAddress2,
      data: CommonData.ADDRESS2,
      action: 'write',
    },
    {
      loc: acEnterZipCode,
      data: CommonData.ACZIPCODE,
      action: 'write',
    },
    {
      loc: acEnterPhoneNumber,
      data: CommonData.PHONE,
      action: 'write',
    },
    {
      loc: acEnterCity,
      data: CommonData.ACCITY,
      action: 'write',
    },
    {
      loc: selectBillingState,
      data: CommonData.ACSTATE,
      action: 'IDDropdowntxt',
    },
    { action: 'screenshot' },
    {
      loc: acAddressSubmitButton,
      action: 'click',
    },
  ];

  BillingShippingDetailsStage = [
    {
      loc: acEnterFirstNameStage,
      data: CommonData.FIRSTNAME,
      action: 'write',
    },
    {
      loc: acEnterLastNameStage,
      data: CommonData.LASTNAME,
      action: 'write',
    },
    {
      loc: acEnterAddress1Stage,
      data: CommonData.ADDRESS1,
      action: 'write',
    },
    {
      loc: acEnterAddress2Stage,
      data: CommonData.ADDRESS2,
      action: 'write',
    },
    {
      loc: acEnterZipCodeStage,
      data: CommonData.ACZIPCODE,
      action: 'write',
    },
    {
      loc: acEnterPhoneNumberStage,
      data: CommonData.PHONE,
      action: 'write',
    },
    {
      loc: acEnterCityStage,
      data: CommonData.ACCITY,
      action: 'write',
    },
    {
      loc: selectBillingStateStage,
      data: CommonData.ACSTATE,
      action: 'IDDropdowntxt',
    },
    { action: 'screenshot' },
    {
      loc: acAddressSubmitButtonStage,
      action: 'click',
    },
  ];

  ACEditShippingDetails = [
    {
      loc: acEnterFirstName,
      data: CommonData.FIRSTNAME,
      action: 'write',
    },
    {
      loc: acEnterLastName,
      data: CommonData.LASTNAME,
      action: 'write',
    },
    {
      loc: acEditAddressSubmitButton,
      action: 'click',
    },
  ];

  ACMOBShippingDetails = [
    {
      loc: acEnterFirstName,
      data: CommonData.FIRSTNAME,
      action: 'write',
    },
    {
      loc: acEnterLastName,
      data: CommonData.LASTNAME,
      action: 'write',
    },
    {
      loc: acEnterAddress1,
      data: CommonData.ADDRESS1,
      action: 'write',
    },
    {
      loc: acEnterAddress2,
      data: CommonData.ADDRESS2,
      action: 'write',
    },
    {
      loc: acEnterZipCode,
      data: CommonData.ACZIPCODE,
      action: 'write',
    },
    {
      loc: acEnterPhoneNumber,
      data: CommonData.PHONE,
      action: 'write',
    },
    {
      loc: acEnterCity,
      data: CommonData.ACCITY,
      action: 'write',
    },
    {
      loc: acMSelectState,
      data: CommonData.ACMSTATE,
      action: 'IDDropdowntxt',
    },
    { action: 'screenshot' },
    {
      loc: acAddressSubmitButton,
      action: 'click',
    },
  ];

  BillingMOBShippingDetails = [
    {
      loc: acEnterFirstName,
      data: CommonData.FIRSTNAME,
      action: 'write',
    },
    {
      loc: acEnterLastName,
      data: CommonData.LASTNAME,
      action: 'write',
    },
    {
      loc: acEnterAddress1,
      data: CommonData.ADDRESS1,
      action: 'write',
    },
    {
      loc: acEnterAddress2,
      data: CommonData.ADDRESS2,
      action: 'write',
    },
    {
      loc: acEnterZipCode,
      data: CommonData.ACZIPCODE,
      action: 'write',
    },
    {
      loc: acEnterPhoneNumber,
      data: CommonData.PHONE,
      action: 'write',
    },
    {
      loc: acEnterCity,
      data: CommonData.ACCITY,
      action: 'write',
    },
    {
      loc: mobSelectBillingState,
      data: CommonData.ACMSTATE,
      action: 'IDDropdowntxt',
    },
    { action: 'screenshot' },
    {
      loc: acAddressSubmitButton,
      action: 'click',
    },
  ];

  BillingMOBShippingDetailsStage = [
    {
      loc: acEnterFirstNameStage,
      data: CommonData.FIRSTNAME,
      action: 'write',
    },
    {
      loc: acEnterLastNameStage,
      data: CommonData.LASTNAME,
      action: 'write',
    },
    {
      loc: acEnterAddress1Stage,
      data: CommonData.ADDRESS1,
      action: 'write',
    },
    {
      loc: acEnterAddress2Stage,
      data: CommonData.ADDRESS2,
      action: 'write',
    },
    {
      loc: acEnterZipCodeStage,
      data: CommonData.ACZIPCODE,
      action: 'write',
    },
    {
      loc: acEnterPhoneNumberStage,
      data: CommonData.PHONE,
      action: 'write',
    },
    {
      loc: acEnterCityStage,
      data: CommonData.ACCITY,
      action: 'write',
    },
    {
      loc: mobSelectBillingStateStage,
      data: CommonData.ACMSTATE,
      action: 'IDDropdowntxt',
    },
    { action: 'screenshot' },
    {
      loc: acAddressSubmitButtonStage,
      action: 'click',
    },
  ];
}

/******** BASE URL and ADM URL IS RECEIVED ******/

async function initFrameworkSettings() {
  // This should come from Gauge Tags inputs
  let tags = process.env.tags.split(',');
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

function returnUserID() {
  return RUID[Math.floor(Math.random() * RUID.length)];
}

function scReturnUserID() {
  return SCRUID[Math.floor(Math.random() * SCRUID.length)];
}

async function setRevTag(platform) {
  if (
    revTag !== '' &&
    !(
      siteDefinition.executionContext.environment.toUpperCase() === 'PROD' ||
      siteDefinition.executionContext.environment.toUpperCase() === 'PREPROD'
    )
  ) {
    await setCookie('ELC_SITE_TAG', revTag, {
      url: siteDefinition.executionContext.url,
    });
    gauge.message('Revision Tag is set as ' + revTag);
  } else {
    gauge.message('No revision tag is set');
  }
}

async function closePopUp() {
  /**Check for pop-up**/
  try {
    await t.evaluate(await t.$(cartPopUpClose), (ele) => ele.click());
  } catch (error) {
    gauge.message(
      'pop up not available for this brand/locale hence the step is skipped'
    );
  }
}

async function gotoHomepageValidation() {
  const response = await t.goto(siteDefinition.executionContext.url);
  if (response.status.code === responseCode) {
    gauge.message('Navigated to Home page');
  } else {
    gauge.message(
      `The Homepage didn't return the 200 code, instead it returned the t.${response.status.code} code, which is why it is not available`
    );
  }
  gauge.screenshot();
}

async function gotoTranslateHomePageValidation() {
  if (translateSite === 'true' && translateHomePage !== '') {
    await evaluate(await $(translatePageLink), (ele) => ele.click());
    gauge.screenshot();
    await reusableFunc.AssertText(
      translateHomePage,
      CommonData.TRANSLATEHOMEPAGEASSERT,
      'Translate Home Page Verified.',
      'Translate Home Page Not Verified.'
    );
  } else {
    gauge.message('This step is not applicable for this Brand/Locale');
  }
}

async function setCookies(plat) {
  await t.setConfig({ navigationTimeout: parseInt(timeoutSetting, 10) });
  await Helper.setWindowSize(Util.ScreenSizes['1040p'], t);
  await Helper.setWAFCookie(siteDefinition, t);
  await Helper.setAdroll(siteDefinition, t);
  await Helper.setAkamaiBypass(siteDefinition, t);
  await Helper.setApiEnv(siteDefinition, t);
  await Helper.getPerlgemEnvCookie(siteDefinition, t);
  await Helper.setOtherCookies(siteDefinition, t);
  await Helper.setShowErrorsCookie(siteDefinition, t);
  await Helper.setVarnishBypass(siteDefinition, t);
  await gotoHomepageValidation();
  await Helper.setTestOrderCookie(siteDefinition, t);
  await Helper.setRevisionTag(siteDefinition, t);
}

async function mobileEmulateDevice() {
  if (siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE') {
    if (emulationDevice !== '') {
      await t.emulateDevice(emulationDevice);
      gauge.message('Emulation device: ' + emulationDevice);
    }
  }
}

async function GotoSKUandbrowsetoSPP() {
  for (i = 0; i < skuIds.length; i++) {
    await t.goto(
      siteDefinition.executionContext.adminUrl + productSkuUrl + skuIds[i],
      {
        waitForEvents: ['DOMContentLoaded'],
      }
    );
    isShoppableValueSku = await (await t.$(isShoppableSku)).text();
    isDisplayableValueSku = await (await t.$(isDisplayableSku)).text();
    if (isShoppableValueSku === '1' && isDisplayableValueSku !== '0') {
      gauge.message(
        'The Product with SKU ID - ' +
          skuIds[i] +
          ' is available and proceeding to add to Cart'
      );
      if (await (await t.$(productUrlLoc)).exists(timeout, pollingTime)) {
        let url = await (await t.$(productUrlLoc)).text();
        gauge.message(url);
        await t.goto(siteDefinition.executionContext.url + url, {
          waitForEvents: ['DOMContentLoaded'],
        });
        gauge.screenshot();
        break;
      } else {
        nodisplayableProduct = await (
          await t.$(noDisplayableProductError)
        ).text();
        gauge.message(nodisplayableProduct);
      }
    } else {
      gauge.message(
        'The Product with SKU ID - ' +
          skuIds[i] +
          ' is NOT available for adding it to Cart '
      );
      notAvailableProductsCount++;
    }
  }
  if (notAvailableProductsCount === skuIds.length) {
    matchCondition = false;
    assert(
      matchCondition,
      'None of the products are available for adding it to Cart'
    );
  }
}

async function gotoProdcatSkuID() {
  if (categoryUrl !== '') {
    await t.goto(
      siteDefinition.executionContext.adminUrl + categoryUrl + CommonData.CatID,
      {
        waitForEvents: ['DOMContentLoaded'],
      }
    );
    if (await (await t.$(productID)).exists()) {
      gauge.message('Product ID exists');
      var ProductIDtext = await (await t.$(productID)).elements();
      for (let i = 2; i <= ProductIDtext.length + 2; i++) {
        let prodIdlocator = prodIDSingle + i + ']/td[1]';
        if (await (await t.$(prodIdlocator)).exists()) {
          tmpProdID = await (await t.$(prodIdlocator)).text();
          prodID.push(tmpProdID);
        } else {
          break;
        }
      }
      for (let j = 0; j < prodID.length; j++) {
        await t.goto(
          siteDefinition.executionContext.adminUrl + productCatUrl + prodID[j],
          {
            waitForEvents: ['DOMContentLoaded'],
          }
        );
        var isShoppableValue = await (await t.$(isShoppable)).text();
        var isDisplayableValue = await (await t.$(isDisplayable)).text();
        if (isShoppableValue === '1' && isDisplayableValue !== '0') {
          gauge.message(
            'The Product with Prod ID - ' +
              prodID[j] +
              ' is available and proceeding to add to Cart'
          );
          if (await (await t.$(productUrl)).exists(pollingTime, timeout)) {
            let url = await (await t.$(productUrl)).text();
            gauge.message(url);
            await t.goto(siteDefinition.executionContext.url + url, {
              waitForEvents: ['DOMContentLoaded'],
            });
            gauge.screenshot();
            break;
          }
        } else {
          gauge.message(
            'The Product with Prod ID - ' +
              prodID[j] +
              ' is NOT available for adding it to Cart '
          );
          notAvailableProductsCount++;
        }
      }
      if (notAvailableProductsCount == prodID.length) {
        assert(
          !matchCondition,
          'None of the products are available for adding it to Cart.'
        );
      }
    }
  }
}

async function validateInSPP(SPPpageHeader) {
  if (await (await t.$(SPPpageHeader)).exists(pollingTime, timeout)) {
    assert(true);
    gauge.message('In SPP.');
  } else {
    assert(false, 'Not in SPP.');
  }
}

async function addProductToBag() {
  if (javaAlertPopUp !== '') {
    t.alert(javaAlertPopUp, async () => await t.accept());
  }
  let AddtoBagExist = 0;
  for (let i = 0; i < 2; i++) {
    if (await (await t.$(addToBagSPP)).exists(pollingTime, timeout)) {
      if ((await (await t.$(addToBagSPP)).isDisabled()) !== true) {
        await t.evaluate(
          await t.$(addToBagSPP, { waitForEvents: ['loadEventFired'] }),
          (ele) => {
            ele.focus();
            ele.click();
          }
        );
        gauge.message('Add to Bag btn is enabled and Product added to cart.');
        gauge.screenshot();
        break;
      } else {
        assert(false, 'Add to Bag btn is disabled.');
      }
    } else {
      await t.reload({ waitForEvents: ['loadEventFired'] });
      gauge.message(
        'Add to Bag btn does not exist within 30 seconds, thus reloading the page.'
      );
      AddtoBagExist++;
    }
  }
  if (AddtoBagExist === 2) {
    assert(
      false,
      'Add to bag does not load within expected time and reload the page.'
    );
  }
}

async function clickOnCartOverlay(CartpageLink) {
  let cartval = 0;
  let cartexists = 0;
  for (i = 0; i < 3; i++) {
    if (await (await t.$(cartCountValue)).exists(pollingTime, timeout)) {
      var cartcount = await (await t.$(cartCountValue)).text();
      gauge.message('Cart count value =' + cartcount);
      if (!(parseInt(cartcount) === 0 || cartcount === '')) {
        assert(true);
        await t.evaluate(
          await t.$(CartpageLink, { waitForEvents: ['loadEventFired'] }),
          (ele) => ele.click()
        );
        gauge.message('Cart overlay exists and clicked on it.');
        gauge.screenshot();
        break;
      } else {
        gauge.message('The cart count value is 0, so reload the page.');
        await t.reload({ waitForEvents: ['loadEventFired'] });
        cartval++;
        if (cartval === 1) {
          await t.evaluate(
            await t.$(addToBagSPP, { waitForEvents: ['loadEventFired'] }),
            (ele) => ele.click()
          );
        }
      }
    } else {
      cartexists++;
    }
  }
  if (cartval === 3 || cartexists === 3) {
    gauge.message(
      'The shopping cart value is 0, so click the bag icon and browse to the shopping cart page.'
    );
    await t.evaluate(
      await t.$(bagIcon, { waitForEvents: ['loadEventFired'] }),
      (ele) => ele.click()
    );
  }
}
async function validateInCartPage() {
  var CPurl = await t.currentURL();
  if (CPurl.includes(cartPageUrlText)) {
    gauge.message('Navigated to cart page as expected.');
    gauge.screenshot();
  } else {
    assert(false, 'Expected to be navigated to Cartpage but it is not.');
  }
}


async function productandspp() {
  if (await (await t.$(productID)).exists()) {
    gauge.message('Product ID exists');

    var ProductIDtext = await (await t.$(productID)).elements();

    for (let i = 2; i <= ProductIDtext.length + 2; i++) {
      let prodIdlocator = prodIDSingle + i + ']/td[1]';
      if (await (await t.$(prodIdlocator)).exists()) {
        tmpProdID = await (await t.$(prodIdlocator)).text();
        prodID.push(tmpProdID);
      } else {
        break;
      }
    }
    for (let j = 0; j < prodID.length; j++) {
      await goto(
        siteDefinition.executionContext.adminUrl + productCatUrl + prodID[j],
        {
          waitForEvents: ['DOMContentLoaded'],
        }
      );
      var isShoppableValue = await (await t.$(isShoppable)).text();
      var isDisplayableValue = await (await t.$(isDisplayable)).text();
      if (isShoppableValue === '1' && isDisplayableValue !== '0') {
        gauge.message(
          'The Product with Prod ID - ' +
            prodID[j] +
            ' is available and proceeding to add to Cart'
        );

        if (await (await t.$(productUrl)).exists(pollingTime, timeout)) {
          let url = await (await t.$(productUrl)).text();
          gauge.message(url);
          await goto(siteDefinition.executionContext.url + url, {
            waitForEvents: ['DOMContentLoaded'],
          });
          gauge.screenshot();
          break;
        }
      } else {
        gauge.message(
          'The Product with Prod ID - ' +
            prodID[j] +
            ' is NOT available for adding it to Cart '
        );
        notAvailableProductsCount++;
      }
    }
    if (notAvailableProductsCount == prodID.length) {
      assert(
        !matchCondition,
        'None of the products are available for adding it to Cart'
      );
    }
  }
}

async function validateInSppPage() {
  if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
    await validateInSPP(sppPageProdHeader);
  } else {
    await validateInSPP(sppPageProdHeaderMob);
  }
}

async function navigateToCartPage() {
  if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
    await clickOnCartOverlay(clickCartPageLink);
  } else {
    await clickOnCartOverlay(clickCartPageLinkMob);
  }
}

async function continueCheckoutButton() {
  if (checkoutButtonId !== '') {
    await t.evaluate(await t.$(checkoutButtonId), (ele) => {
      ele.focus();
      ele.click();
    });
  }
}

async function samplePageButton() {
  if (continueSample1 !== '') {
    /**MOB checkout viewcart is applicable for few Brand/Locale/platform(MOB) */
    try {
      await t.evaluate(await t.$(continueSample1), (ele) => {
        ele.focus();
        ele.click();
      });
      gauge.screenshot();
    } catch (e) {
      gauge.message(
        'sample page1 button is not displayed and hence this step is skipped'
      );
    }
  }
  if (continueSample2 !== '') {
    /**MOB checkout overlay is applicable for few Brand/Locale/platform(MOB) */
    try {
      await t.evaluate(await t.$(continueSample2), (ele) => {
        ele.focus();
        ele.click();
      });
      gauge.screenshot();
    } catch (e) {
      gauge.message(
        'sample page2 button is not displayed and hence this step is skipped'
      );
    }
  }
}

async function mobContinueCheckoutButton() {
  if (mobCheckoutViewCart !== '') {
    /**MOB checkout viewcart is applicable for few Brand/Locale/platform(MOB) */
    try {
      await t.evaluate(await t.$(mobCheckoutViewCart), (ele) => {
        ele.focus();
        ele.click();
      });
      gauge.screenshot();
    } catch (e) {
      gauge.message(
        'Mobile checkout Viewcart is not displayed and hence this step is skipped'
      );
    }
  }
  if (mobCheckoutCreditcard !== '') {
    /**MOB checkout overlay is applicable for few Brand/Locale/platform(MOB) */
    try {
      await t.evaluate(await t.$(mobCheckoutCreditcard), (ele) => {
        ele.focus();
        ele.click();
      });
      gauge.screenshot();
    } catch (e) {
      gauge.message(
        'Mobile checkout Creditcard is not displayed and hence this step is skipped'
      );
    }
  }
}

async function mobClickOnSamplePage() {
  if (mobContinueSample1 !== '') {
    /**MOB checkout viewcart is applicable for few Brand/Locale/platform(MOB) */
    try {
      await t.evaluate(await t.$(mobContinueSample1), (ele) => {
        ele.focus();
        ele.click();
      });
      gauge.screenshot();
    } catch (e) {
      gauge.message(
        'Mobile sample page1 button is not displayed and hence this step is skipped'
      );
    }
  }
  if (mobContinueSample2 !== '') {
    /**MOB checkout overlay is applicable for few Brand/Locale/platform(MOB) */
    try {
      await t.evaluate(await t.$(mobContinueSample2), (ele) => {
        ele.focus();
        ele.click();
      });
      gauge.screenshot();
    } catch (e) {
      gauge.message(
        'Mobile sample page2 button is not displayed and hence this step is skipped'
      );
    }
  }
}

async function useBillingAddressButton() {
  if (useBillingAddress !== '') {
    /**Click on Use Billing address is applicable for few Brand/Locale/platform(PC/MOB) */
    await t.evaluate(await t.$(useBillingAddress), (ele) => ele.click());
  }
}

async function useBillingAddressButtonStage() {
  if (useBillingAddressStage !== '') {
    /**Click on Use Billing address is applicable for few Brand/Locale/platform(PC/MOB) */
    await t.evaluate(await t.$(useBillingAddressStage), (ele) => ele.click());
  }
}

async function selectReturnUserAddress() {
  if (returnUserSelectAddress !== '') {
    try {
      await t.dropDown({ name: returnUserSelectAddress }).select({
        index: indexValue,
      });
    } catch (e) {
      gauge.message(
        'click on adyen button is not displayed and hence this step is skipped'
      );
    }
    gauge.screenshot();
  }
}

async function afterPlacingOrderPopUp() {
  if (toplaceorder === 'true' && orderPagePopUpClose !== '') {
    await (await t.$(orderPagePopUpClose)).exists(pollingTime, timeout);
    try {
      await t.evaluate(await t.$(orderPagePopUpClose), (ele) => {
        ele.focus();
        ele.click();
      });
      /**orderpage Popup Close is applicable for few Brand/Locale/platform(PC) */
    } catch (e) {
      gauge.message(
        'Orderpage Popup is not displayed and hence this step is skipped'
      );
    }
  }
}

async function mobAfterPlacingOrderPopUp() {
  if (toplaceorder === 'true' && mobOrderPagePopUpClose !== '') {
    await (await t.$(mobOrderPagePopUpClose)).exists(pollingTime, timeout);
    /**orderpage Popup Close is applicable for few Brand/Locale/platform(MOB) */
    try {
      await t.evaluate(await t.$(mobOrderPagePopUpClose), (ele) => {
        ele.focus();
        ele.click();
      });
    } catch (e) {
      gauge.message(
        'Orderpage Popup is not displayed and hence this step is skipped'
      );
    }
  }
}

async function placeOrderPage() {
  if (toplaceorder === 'true' && placeOrder !== '') {
    /**Click On Place order is applicable for few Brand/Locale/platform(PC/MOB) */
    await t.evaluate(await t.$(placeOrder), (ele) => {
      ele.focus();
      ele.click();
    });

    /*gauge.message('some time unable to navigate order cofirm page so,clicking pay button one more time to place the order')*/
    for (i = 0; i < 3; i++) {
      if (
        await (await t.$(orderConfirmationMsgId)).exists(pollingTime, timeout)
      ) {
        break;
      } else {
        gauge.message(
          'Order Number is not available and hence clicking Place order button again'
        );
        await t.evaluate(await t.$(placeOrder), (ele) => {
          ele.focus();
          ele.click();
        });
      }
    }
    gauge.screenshot();
  }
}

async function orderValidation() {
  if (toplaceorder === 'true' && placeOrderValidation !== '') {
    if (await (await t.$(orderConfirmationMsgId)).exists()) {
      assert(true);
      var confirmurl = await t.currentURL();
      var GetOrderNumber = await (await t.$(orderConfirmationMsgId)).text();
      assert(confirmurl.includes(placeOrderValidation));
      gauge.message('Order placed successfully');
      gauge.message(GetOrderNumber);
      console.log(GetOrderNumber);
      gauge.screenshot();
    } else {
      gauge.message('Order not placed');
      assert(false);
    }
  }
}

async function paymentDetails() {
  if (ccDetails !== '') {
    await returnUserPaymentLink();
    await newReturnUserPaymentButton();
    if (creditCardNumber !== '') {
      if (!(await (await t.$(creditCardNumber)).exists(pollingTime, timeout))) {
        await t.reload();
      }
      await t.waitFor(await t.$(creditCardNumber), ccTime);
      if (await (await t.$(creditCardNumber)).exists()) {
        assert(true);
        await t.evaluate(await t.$(creditCardNumber), (ele) => ele.focus(), {
          delay: 500,
        });
        await t.clear(await t.$(creditCardNumber));
        await t.write(CommonData.CREDITCARD, t.into(await t.$(creditCardNumber)));
        gauge.screenshot();

        if (cvvFieldId !== '') {
          await t.evaluate(await t.$(cvvFieldId), (ele) => ele.focus());
          await t.write(CommonData.CVV, t.into(await t.$(cvvFieldId)));
        }
        /** SelectPCMonth and SelectPCYear are only for OR-CA, SB-US and SB-CA */
        if (selectPcMonth !== '') {
          await t.dropDown({ id: selectPcMonth }).select({
            index: indexValue1,
          });
        }
        if (selectPcYear !== '') {
          await t.dropDown({ id: selectPcYear }).select({ index: indexValue1 });
        }
        /** namemonth and nameyear are only for JM-US, JM-CA and LS-US */
        if (nameMonth !== '') {
          await t.dropDown({ name: nameMonth }).select({ index: indexValue1 });
        }
        if (nameYear !== '') {
          await t.dropDown({ name: nameYear }).select({ index: indexValue1 });
        }
        //All except JM-US, JM-CA, SB-US, SB-CA, OR-US and LS-US
        if (pcMothAndYear !== '') {
          await t.evaluate(await t.$(pcMothAndYear), (ele) => ele.focus());
          await t.write(CommonData.PCCVVMONTH, t.into(await t.$(pcMothAndYear)));
        }
        if (enterCCName !== '') {
          if (await (await t.$(enterCCName)).exists()) {
            await t.write(CommonData.CCNAME, t.into(await t.$(enterCCName)));
          }
        }
        if (selectMobileMonth !== '') {
          await t.dropDown({ id: selectMobileMonth }).select(CommonData.CCMONTH);
        }
        if (selectMobileYear !== '') {
          await t.dropDown({ id: selectMobileYear }).select(CommonData.YEAR);
        }
      }
    } else {
      gauge.message("The Credit card fields doesn't exist!");
      assert(false);
    }
    await useBillingAddressButton();
  }
}

async function paymentDetailsStage() {
  if (ccDetails !== '') {
    await returnUserPaymentLink();
    await newReturnUserPaymentButton();
    if (creditCardNumberStage !== '') {
      if (
        !(await (await t.$(creditCardNumberStage)).exists(pollingTime, timeout))
      ) {
        await t.reload();
      }
      await t.waitFor(await t.$(creditCardNumberStage), ccTime);
      if (await (await t.$(creditCardNumberStage)).exists()) {
        assert(true);
        await t.evaluate(
          await t.$(creditCardNumberStage),
          (ele) => ele.focus(),
          {
            delay: 500,
          }
        );
        await t.clear(await t.$(creditCardNumberStage));
        await t.write(
          CommonData.CREDITCARD,
          t.into(await t.$(creditCardNumberStage))
        );
        gauge.screenshot();

        if (cvvFieldIdStage !== '') {
          await t.evaluate(await t.$(cvvFieldIdStage), (ele) => ele.focus());
          await t.write(CommonData.CVV, t.into(await t.$(cvvFieldIdStage)));
        }
        /** SelectPCMonth and SelectPCYear are only for OR-CA, SB-US and SB-CA */
        if (selectPcMonthStage !== '') {
          await t.dropDown({ id: selectPcMonthStage }).select({
            index: indexValue1,
          });
        }
        if (selectPcYearStage !== '') {
          await t.dropDown({ id: selectPcYearStage }).select({
            index: indexValue1,
          });
        }
        /** namemonth and nameyear are only for JM-US, JM-CA and LS-US */
        if (nameMonthStage !== '') {
          await t.dropDown({ name: nameMonthStage }).select({
            index: indexValue1,
          });
        }
        if (nameYearStage !== '') {
          await t.dropDown({ name: nameYearStage }).select({
            index: indexValue1,
          });
        }
        //All except JM-US, JM-CA, SB-US, SB-CA, OR-US and LS-US
        if (pcMothAndYearStage !== '') {
          await t.evaluate(await t.$(pcMothAndYearStage), (ele) => ele.focus());
          await t.write(
            CommonData.PCCVVMONTH,
            t.into(await t.$(pcMothAndYearStage))
          );
        }
        if (enterCCNameStage !== '') {
          if (await (await t.$(enterCCNameStage)).exists()) {
            await t.write(CommonData.CCNAME, t.into(await t.$(enterCCNameStage)));
          }
        }
        if (selectMobileMonthStage !== '') {
          await t.dropDown({ id: selectMobileMonthStage }).select(
            CommonData.CCMONTH
          );
        }
        if (selectMobileYearStage !== '') {
          await t.dropDown({ id: selectMobileYearStage }).select(CommonData.YEAR);
        }
      }
    } else {
      gauge.message("The Credit card fields doesn't exist!");
      assert(false);
    }
    await useBillingAddressButtonStage();
  }
}

async function signUpRegisterPassword() {
  if (registerPassword !== '') {
    await t.write(CommonData.NPWD, t.into(await t.textBox({ id: registerPassword })));
    gauge.screenshot();
  }
}

async function registerTermsAndConditions() {
  if (signUpRegisterTerms !== '') {
    /**Click On Terms and condition checkbox is applicable for few Brand/Locale/platform(PC/MOB) */
    await t.evaluate(await t.$(signUpRegisterTerms), (ele) => ele.click());
  }
}

async function signUpPageZipcode() {
  if (enterNewuserZipCode !== '') {
    /**Enter Signup Registration page Zipcode is applicable for few Brand/Locale/platform(PC/MOB) */
    await t.write(CommonData.NEWZIPCODE, t.into(await t.$(enterNewuserZipCode)));
  }
}

async function signUpDobDay() {
  if (dobDay !== '') {
    /**Signup page DOBDAY is applicable for few Brand/Locale/platform(PC/MOB) */
    await t.dropDown({ id: dobDay }).select({ index: indexValue1 });
  }
}

async function signUpDobMonth() {
  if (dobMonth !== '') {
    /**Signup page DOBMONTH is applicable for few Brand/Locale/platform(PC/MOB) */
    await t.dropDown({ id: dobMonth }).select({ index: indexValue });
  } else {
    gauge.message('This step is not applicable for this Brand/Locale');
  }
}

async function signupRegistrationButton() {
  if (signUpRegisterButton !== '') {
    await t.evaluate(await t.$(signUpRegisterButton), (ele) => {
      ele.focus();
      ele.click();
    });
    gauge.screenshot();
  }
}

async function signupAccountPageValidation() {
  if (accountPageValidation !== '') {
    var confirmurl = await t.currentURL();
    assert(confirmurl.includes(accountPageValidation));
    gauge.message('In Account Page');
    gauge.screenshot();
  }
}

async function enterReturnUserLinks() {
  if (returnUserSignInLink !== '') {
    try {
      /**Click On Return User Shipping Details Edit Link is applicable for few Brand/Locale/platform(PC/MOB) */
      await t.evaluate(await t.$(returnUserSignInLink), (ele) => ele.click());
    } catch (e) {
      gauge.message(
        'Return user link is not displayed and hence this step is skipped'
      );
    }
  }
  if (mobReturnUserSignInLink !== '') {
    try {
      await t.evaluate(await t.$(mobReturnUserSignInLink), (ele) =>
        ele.click()
      );
    } catch (e) {
      gauge.message(
        'Mobile return user link is not displayed and hence this step is skipped'
      );
    }
  }
}

async function enterReturnUserEmailIdDetails() {
  if (returnUserId !== '') {
    let ReturnuserEmail = returnUserID();
    await t.evaluate(await t.$(returnUserId), (ele) => ele.focus());
    await t.write(ReturnuserEmail, t.into(await t.$(returnUserId)));
    gauge.message('Return user Email ID: ' + ReturnuserEmail);
  }
  if (returnUserPassword !== '') {
    await t.write(
      CommonData.RPWD,
      t.into(await t.textBox({ id: returnUserPassword }))
    );
  }
  if (returnUserSignInLabel !== '') {
    await t.evaluate(await t.button(returnUserSignInLabel), (ele) => ele.click());
  }
  if (returnUserSignInButton !== '') {
    await t.evaluate(await t.$(returnUserSignInButton), (ele) => {
      ele.focus();
      ele.click();
    });
    gauge.screenshot();
  }
}

async function cartMergeCheckoutButton() {
  if (returnUserContinueCheckoutViewCart !== '') {
    /**Click On Cart Merge Checkout Continue Button is applicable for few Brand/Locale/platform(PC/MOB) */
    try {
      await t.evaluate(await t.$(returnUserContinueCheckoutViewCart), (ele) =>
        ele.click()
      );
      gauge.screenshot();
    } catch (e) {
      gauge.message(
        'Cart Merge Checkout Continue Button is not displayed and hence this step is skipped'
      );
    }
  }
}

async function returnUserNewAddressLink() {
  if (returnUserShippingLinkText !== '') {
    /**Click On Return User Shipping Details Edit Link is applicable for few Brand/Locale/platform(PC/MOB) */
    try {
      await t.evaluate(
        await t.link({ href: returnUserShippingLinkText }),
        (ele) => ele.click()
      );
    } catch (e) {
      gauge.message(
        'Click On Return User Shipping Details Edit Link is not displayed and hence this step is skipped'
      );
      gauge.screenshot();
    }
  } else {
  }
}

async function returnUserAddNewaddressButton() {
  if (returnUserAddNewAddress !== '') {
    try {
      await t.evaluate(await t.$(returnUserAddNewAddress), (ele) =>
        ele.click()
      );
    } catch (e) {
      gauge.message(
        'Return User Add New address is not displayed and hence this step is skipped'
      );
    }
  }
  if (returnUserAddNewaddress1 !== '') {
    /**Return User new address is applicable for few Brand/Locale/platform(PC/MOB) */
    try {
      await t.evaluate(await t.$(returnUserAddNewaddress1), (ele) =>
        ele.click()
      );
    } catch (e) {
      gauge.message(
        'Return User Add New address1 is not displayed and hence this step is skipped'
      );
    }
    gauge.screenshot();
  }
}

async function returnUserPaymentLink() {
  if (returnUserPaymentLinkText !== '') {
    /**Return User new paymet link is applicable for few Brand/Locale/platform(PC/MOB) */
    try {
      await t.evaluate(await t.$(returnUserPaymentLinkText), (ele) =>
        ele.click()
      );
    } catch (e) {
      gauge.message(
        'Return User new paymet link is not displayed and hence this step is skipped'
      );
    }
  }
}

async function newReturnUserPaymentButton() {
  if (returnUserNewPaymentButton !== '') {
    /**Return User new paymet button is applicable for few Brand/Locale/platform(PC/MOB) */
    try {
      await t.evaluate(await t.$(returnUserNewPaymentButton), (ele) =>
        ele.click()
      );
    } catch (e) {
      gauge.message(
        'Return User new paymet button is not displayed and hence this step is skipped'
      );
    }
  } else {
    gauge.message('This step is not applicable for this Brand/Locale');
  }
}

async function selectQtyIncrease() {
  if (quantitySelect1 !== '') {
    await t.evaluate(await t.$(quantitySelect1), (ele) => ele.click());
    gauge.screenshot();
  }
}

async function selectQtydropDown() {
  if (quantirySelect !== '') {
    await t.dropDown({ name: quantirySelect }).select(CommonData.QNTY);
    gauge.screenshot();
  }
}

async function productRemove() {
  if (removeProduct !== '') {
    await t.evaluate(await t.$(removeProduct), (ele) => ele.click());
    gauge.screenshot();
  }
}

async function productRemoveAssert() {
  if (
    removeProductAssert
      .toUpperCase()
      .search(CommonData.REMOVEPRODUCT.toUpperCase()) !== -1
  ) {
    gauge.screenshot();
    assert(matchCondition, 'Remove Product is expected');
  } else {
    assert(!matchCondition, 'Remove Product is not expected');
  }
}

async function placeOrderpageToPasswordPage() {
  if (placeOrderToPasswordPage !== '') {
    await t.evaluate(await t.$(placeOrderToPasswordPage), (ele) => ele.click());
  }
}

async function navigateToSignInPage() {
  if (acNavigateSignInUrl !== '') {
    await t.goto(siteDefinition.executionContext.url + acNavigateSignInUrl, {
      waitForEvents: ['DOMContentLoaded'],
    });
  }
}

async function enterRegisterationDetails() {
  if (acRegistrationFirstName !== '') {
    if (useReload) {
      await t.reload();
      gauge.message(
        'Some brands these fields are not working so, reload is used'
      );
    }
    await t.evaluate(await t.$(acRegistrationFirstName), (ele) => ele.focus());
    await t.write(CommonData.FIRSTNAME, t.into(await t.$(acRegistrationFirstName)));
  }
  if (acRegistrationLastName !== '') {
    await t.evaluate(await t.$(acRegistrationLastName), (ele) => ele.focus());
    await t.write(CommonData.LASTNAME, t.into(await t.$(acRegistrationLastName)));
  }
  if (acRegisterEmailId !== '') {
    if (useReload1) {
      await t.reload();
      gauge.message(
        'Some brands these fields are not working so, reload is used'
      );
    }
    await t.evaluate(await t.$(acRegisterEmailId), (ele) => ele.focus());
    newEmail = makeEmail();
    await t.write(newEmail, t.into(await t.$(acRegisterEmailId)));
  }

  if (acRegisterPassword !== '') {
    await t.evaluate(await t.$(acRegisterPassword), (ele) => ele.focus());
    await t.write(CommonData.NPWD, t.into(await t.$(acRegisterPassword)));
  }
  if (acRegisterationTerms !== '') {
    await t.evaluate(await t.$(acRegisterationTerms), (ele) => {
      ele.focus();
      ele.click();
    });
  }
  if (acRegisterButton !== '') {
    await t.evaluate(await t.$(acRegisterButton), (ele) => {
      ele.focus();
      ele.click();
    });
    gauge.screenshot();
  }
}

async function clickOnCreateAccount() {
  if (acRegisterNow !== '') {
    await t.evaluate(await t.$(acRegisterNow), (ele) => ele.click());
  } else {
    gauge.message('This step is not applicable for this Brand/Locale');
  }
}

async function clickOnAddressBook() {
  if (acAddressBook !== '') {
    await t.evaluate(await t.$(acAddressBook), (ele) => ele.click());
    gauge.screenshot();
  } else {
    gauge.message('This step is not applicable for this Brand/Locale');
  }
}

async function clickOnAddNewAddressButton() {
  if (acAddNewAddressButton !== '') {
    await t.evaluate(await t.$(acAddNewAddressButton), (ele) => ele.click());
  } else {
    gauge.message('This step is not applicable for this Brand/Locale');
  }
}

async function signOutButton() {
  if (acSignoutButton !== '') {
    await t.evaluate(await t.$(acSignoutButton), (ele) => ele.click());
    gauge.screenshot();
  } else {
    gauge.message('This step is not applicable for this Brand/Locale');
  }
}

async function clickLogInLinkAgain() {
  if (acNeedToClickLogInLinkAgain !== '') {
    await t.evaluate(await t.$(acNeedToClickLogInLinkAgain), (ele) =>
      ele.click()
    );
  } else {
    gauge.message('This step is not applicable for this Brand/Locale');
  }
}

async function enterReturnUserDetails() {
  if (acReturnUserEmailId !== '') {
    await t.evaluate(await t.$(acReturnUserEmailId), (ele) => ele.focus());
    await t.write(newEmail, t.into(await t.$(acReturnUserEmailId)));
  }
  if (acReturnUserPassword !== '') {
    await t.write(CommonData.NPWD, t.into(await t.$(acReturnUserPassword)));
  }
  if (acReturnUserLoginButton !== '') {
    await t.evaluate(await t.$(acReturnUserLoginButton), (ele) => ele.click());
    gauge.screenshot();
  }
}

async function enterEditAddress() {
  if (acEditAddress !== '') {
    await t.reload(await t.$(acEditAddress));
    await t.evaluate(await t.$(acEditAddress), (ele) => {
      ele.focus();
      ele.click();
    });
  }
}

async function acDeleteAddressWithConfirm() {
  if (acDeleteAddress !== '') {
    await t.reload(await t.$(acDeleteAddress));
    await t.evaluate(await t.$(acDeleteAddress), (ele) => {
      ele.focus();
      ele.click();
    });
  }
  if (acDeleteAddressConfirm !== '') {
    await t.evaluate(await t.$(acDeleteAddressConfirm), (ele) => ele.click());
  }
}

async function viewOrderDetails() {
  if (acMyOder !== '') {
    await t.evaluate(await t.$(acMyOder), (ele) => ele.click());
  }
  if (acMyOderAccordion !== '') {
    await t.evaluate(await t.$(acMyOderAccordion), (ele) => ele.click());
  }
  if (acMyOderViewDetatils !== '') {
    await t.evaluate(await t.$(acMyOderViewDetatils), (ele) => ele.click());
  }
}

async function addNewBillingAddress() {
  if (acAddNewBillingAddress !== '') {
    await t.evaluate(await t.$(acAddNewBillingAddress), (ele) => ele.click());
  } else {
    gauge.message('This step is not applicable for this Brand/Locale');
  }
}

async function addNewCreditCard() {
  if (acAddNewCreditCard !== '') {
    await t.evaluate(await t.$(acAddNewCreditCard), (ele) => ele.click());
  } else {
    gauge.message('This step is not applicable for this Brand/Locale');
  }
}

async function acEnterCreditCardDetails() {
  if (
    siteDefinition.executionContext.environment.toUpperCase() === 'STAGE' ||
    siteDefinition.executionContext.environment.toUpperCase() === 'DEV'
  ) {
    if (acSelectCardTypeStage !== '') {
      await t.click(acSelectCardTypeStage);
      await t.click(CommonData.CARDTYPE);
    }
    if (acSelectCardTypeDropDownStage !== '') {
      await t.dropDown({ id: acSelectCardTypeDropDownStage }).select(
        CommonData.CARDTYPE
      );
    }
    if (acEnterCreditCardNumberStage !== '') {
      await t.write(
        CommonData.ACCREDITCARD,
        t.into(await t.$(acEnterCreditCardNumberStage))
      );
    }
    if (acEnterCvvNumberStage !== '') {
      await t.write(CommonData.ACCVV, t.into(await t.$(acEnterCvvNumberStage)));
    }
    if (acEnterCCNameStage !== '') {
      if (await (await t.$(acEnterCCNameStage)).exists()) {
        await t.write(CommonData.CCNAME, t.into(await t.$(acEnterCCNameStage)));
      }
    }
    if (acEnterExpMonthStage !== '') {
      await t.write(CommonData.ACCCMONTH, t.into(await t.$(acEnterExpMonthStage)));
    }
    if (acEnterExpYearStage !== '') {
      await t.click(acEnterExpYearStage);
      await t.click(CommonData.ACYEAR);
    }
    if (acEnterExpMonthDropDownStage !== '') {
      await t.dropDown({ id: acEnterExpMonthDropDownStage }).select(
        CommonData.ACCCMONTH
      );
    }
    if (acEnterExpYearDropDownStage !== '') {
      await t.dropDown({ id: acEnterExpYearDropDownStage }).select(
        CommonData.ACYEAR
      );
    }
    if (acEnterMothAndYearStage !== '') {
      await t.write(
        CommonData.ACPCCVVMONTH,
        t.into(await t.$(acEnterMothAndYearStage))
      );
      gauge.screenshot();
    }
  } else {
    if (acSelectCardType !== '') {
      await t.click(acSelectCardType);
      await t.click(CommonData.CARDTYPE);
    }
    if (acSelectCardTypeDropDown !== '') {
      await t.dropDown({ id: acSelectCardTypeDropDown }).select(
        CommonData.CARDTYPE
      );
    }
    if (acEnterCreditCardNumber !== '') {
      await t.write(
        CommonData.ACCREDITCARD,
        t.into(await t.$(acEnterCreditCardNumber))
      );
    }
    if (acEnterCvvNumber !== '') {
      await t.write(CommonData.ACCVV, t.into(await t.$(acEnterCvvNumber)));
    }
    if (acEnterExpMonth !== '') {
      await t.write(CommonData.ACCCMONTH, t.into(await t.$(acEnterExpMonth)));
    }
    if (acEnterExpYear !== '') {
      await t.click(acEnterExpYear);
      await t.click(CommonData.ACYEAR);
    }
    if (acEnterExpMonthDropDown !== '') {
      await t.dropDown({ id: acEnterExpMonthDropDown }).select(
        CommonData.ACCCMONTH
      );
    }
    if (acEnterExpYearDropDown !== '') {
      await t.dropDown({ id: acEnterExpYearDropDown }).select(CommonData.ACYEAR);
    }
    if (acEnterMothAndYear !== '') {
      await t.write(CommonData.ACPCCVVMONTH, t.into(await t.$(acEnterMothAndYear)));
      gauge.screenshot();
    }
  }
}

async function acClickNewCreditCard() {
  if (
    siteDefinition.executionContext.environment.toUpperCase() === 'STAGE' ||
    siteDefinition.executionContext.environment.toUpperCase() === 'DEV'
  ) {
    if (clickNewCreditCardStage !== '') {
      await t.evaluate(await t.$(clickNewCreditCardStage), (ele) =>
        ele.click()
      );
    }
  } else {
    if (clickNewCreditCard !== '') {
      await t.evaluate(await t.$(clickNewCreditCard), (ele) => ele.click());
    }
  }
}

async function creditCardSubmitButton() {
  if (acCreditCardSubmitButton !== '') {
    try {
      await t.evaluate(await t.$(acCreditCardSubmitButton), (ele) =>
        ele.click()
      );
    } catch (e) {
      gauge.message(
        'credit card button is not displayed and hence this step is skipped'
      );
    }
  } else {
    gauge.message('This step is not applicable for this Brand/Locale');
  }
}

async function acAddTitle() {
  if (addTitle !== '') {
    await t.dropDown({ id: addTitle }).select(CommonData.Title);
  } else {
    gauge.message('This step is not applicable for this Brand/Locale');
  }
}

// Account Mobile Steps

async function mobHamburgerIcon() {
  if (acMobHamburgerIcon !== '') {
    await t.evaluate(await t.$(acMobHamburgerIcon), (ele) => ele.click());
  } else {
    gauge.message('This step is not applicable for this Brand/Locale');
  }
}

async function mobLogInLink() {
  if (acMobLoginLink !== '') {
    await t.evaluate(await t.$(acMobLoginLink), (ele) => ele.click());
  } else {
    gauge.message('This step is not applicable for this Brand/Locale');
  }
}

async function mobRegisterNow() {
  if (acMobRegisterNow !== '') {
    await t.focus(await t.$(acMobRegisterNow));
    await t.evaluate(await t.$(acMobRegisterNow), (ele) => ele.click());
  } else {
    gauge.message('This step is not applicable for this Brand/Locale');
  }
}

async function loggedInProfileLink() {
  if (acMobLoggedInProfileLink !== '') {
    await t.evaluate(await t.$(acMobLoggedInProfileLink), (ele) => ele.click());
  } else {
    gauge.message('This step is not applicable for this Brand/Locale');
  }
}

async function mobNeedToClickLogInLinkAgain() {
  if (acMobNeedToClickLogInLinkAgain !== '') {
    await t.evaluate(await t.$(acMobNeedToClickLogInLinkAgain), (ele) =>
      ele.click()
    );
    gauge.screenshot();
  } else {
    gauge.message('This step is not applicable for this Brand/Locale');
  }
}

async function mobDeleteAddressWithConfirm() {
  if (acMobDeleteAddress !== '') {
    await t.reload(await t.$(acMobDeleteAddress));
    await t.evaluate(await t.$(acMobDeleteAddress), (ele) => {
      ele.focus();
      ele.click();
    });
  }
  if (acMobDeleteAddressConfirm !== '') {
    await t.evaluate(await t.$(acMobDeleteAddressConfirm), (ele) =>
      ele.click()
    );
  }
}

async function mobViewDetails() {
  if (acMobMyoder !== '') {
    await t.evaluate(await t.$(acMobMyoder), (ele) => ele.click());
  }
  if (acMobMyOderAccordion !== '') {
    await t.evaluate(await t.$(acMobMyOderAccordion), (ele) => ele.click());
  }
  if (acMobMyOderViewDetails !== '') {
    await t.evaluate(await t.$(acMobMyOderViewDetails), (ele) => ele.click());
  }
}

async function mobSignoutButton() {
  if (acMobSignoutButton !== '') {
    await t.evaluate(await t.$(acMobSignoutButton), (ele) => ele.click());
    gauge.screenshot();
  } else {
    gauge.message('This step is not applicable for this Brand/Locale');
  }
}

async function creditCardSubmitButtonMob() {
  if (mobCreditCardSubmitButton !== '') {
    await t.evaluate(await t.$(mobCreditCardSubmitButton), (ele) =>
      ele.click()
    );
  } else {
    gauge.message('This step is not applicable for this Brand/Locale');
  }
}

async function mobEnterCreditCardDetails() {
  if (
    siteDefinition.executionContext.environment.toUpperCase() === 'STAGE' ||
    siteDefinition.executionContext.environment.toUpperCase() === 'DEV'
  ) {
    if (acSelectCardTypeStage !== '') {

      await t.click(acMSelectCardTypeStage);
      await t.click(CommonData.CARDTYPE);
    }
    if (acMSelectCardTypeDropDownStage !== '') {
      await t.dropDown({ id: acMSelectCardTypeDropDownStage }).select(
        CommonData.CARDTYPE
      );
    }
    if (acMEnterCreditCardNumberStage !== '') {
      await t.write(
        CommonData.ACCREDITCARD,
        t.into(await t.$(acMEnterCreditCardNumberStage))
      );
    }
    if (acMEnterCvvNumberStage !== '') {
      await t.write(CommonData.ACCVV, t.into(await t.$(acMEnterCvvNumberStage)));
    }
    if (acMEnterExpMonthStage !== '') {
      await t.write(CommonData.ACCCMONTH, t.into(await t.$(acMEnterExpMonthStage)));
    }
    if (acMEnterExpYearStage !== '') {
      await t.click(acMEnterExpYearStage);
      await t.click(CommonData.ACYEAR);
    }
    if (acMEnterExpMonthDropDownStage !== '') {
      await t.dropDown({ id: acMEnterExpMonthDropDownStage }).select(
        CommonData.ACCCMONTH
      );
    }
    if (acMEnterExpYearDropDownStage !== '') {
      await t.dropDown({ id: acMEnterExpYearDropDownStage }).select(
        CommonData.ACYEAR
      );
    }
    if (acMEntermothAndYearStage !== '') {
      await t.write(
        CommonData.ACPCCVVMONTH,
        t.into(await t.$(acMEntermothAndYearStage))
      );
      gauge.screenshot();
    }
  } else {
    if (acSelectCardType !== '') {
      await t.click(acMSelectCardType);
      await t.click(CommonData.CARDTYPE);
    }
    if (acMSelectCardTypeDropDown !== '') {
      await t.dropDown({ id: acMSelectCardTypeDropDown }).select(
        CommonData.CARDTYPE
      );
    }
    if (acMEnterCreditCardNumber !== '') {
      await t.write(
        CommonData.ACCREDITCARD,
        t.into(await t.$(acMEnterCreditCardNumber))
      );
    }
    if (acMEnterCvvNumber !== '') {
      await t.write(CommonData.ACCVV, t.into(await t.$(acMEnterCvvNumber)));
    }
    if (acMEnterExpMonth !== '') {
      await t.write(CommonData.ACCCMONTH, t.into(await t.$(acMEnterExpMonth)));
    }
    if (acMEnterExpYear !== '') {
      await t.click(acMEnterExpYear);
      await t.click(CommonData.ACYEAR);
    }
    if (acMEnterExpMonthDropDown !== '') {
      await t.dropDown({ id: acMEnterExpMonthDropDown }).select(
        CommonData.ACCCMONTH
      );
    }
    if (acMEnterExpYearDropDown !== '') {
      await t.dropDown({ id: acMEnterExpYearDropDown }).select(CommonData.ACYEAR);
    }
    if (acMEntermothAndYear !== '') {
      await t.write(
        CommonData.ACPCCVVMONTH,
        t.into(await t.$(acMEntermothAndYear))
      );
      gauge.screenshot();
    }
  }
}

async function enterMobRegistrationDetails() {
  if (acMRegistrationFirstName !== '') {
    await t.evaluate(await t.$(acMRegistrationFirstName), (ele) => ele.focus());
    await t.write(
      CommonData.FIRSTNAME,
      t.into(await t.$(acMRegistrationFirstName))
    );
  }
  if (acMRegistrationLastName !== '') {
    await t.evaluate(await t.$(acMRegistrationLastName), (ele) => ele.focus());
    await t.write(CommonData.LASTNAME, t.into(await t.$(acMRegistrationLastName)));
  }
  if (acMRegisterEmailId !== '') {
    await t.evaluate(await t.$(acMRegisterEmailId), (ele) => ele.focus());
    newEmail = makeEmail();
    await t.write(newEmail, t.into(await t.$(acMRegisterEmailId)));
  }
  if (acMRegisterPassword !== '') {
    await t.evaluate(await t.$(acMRegisterPassword), (ele) => ele.focus());
    await t.write(CommonData.NPWD, t.into(await t.$(acMRegisterPassword)));
  }
  if (acMRegisterationTerms !== '') {
    await t.evaluate(await t.$(acMRegisterationTerms), (ele) => {
      ele.focus();
      ele.click();
    });
  }
  if (acMRegisterButton !== '') {
    await t.evaluate(await t.$(acMRegisterButton), (ele) => {
      ele.focus();
      ele.click();
    });
    gauge.screenshot();
  }
}

// If cart popup's id is defined wait and do the popup close
async function cookieReject() {
  if (cookieRejectButton !== '') {
    /**CookieRejectButton is applicable for few Brand/Locale/platform(PC/MOB) */
    try {
      await t.click(await t.$(cookieRejectButton));
    } catch (e) {
      gauge.message(
        'Cookie RejectButton is not displayed and hence this step is skipped'
      );
    }
  } else {
    gauge.message('This step is not applicable for this Brand/Locale');
  }
}

async function clickOnAccountsettings() {
  if (accountSettings !== '') {
    await t.evaluate(await t.$(accountSettings), (ele) => ele.click());
  } else {
    gauge.message('This step is not applicable for this Brand/Locale');
  }
}
/********************Saved Card Scenario***************************/

async function savedCreditCardReturnUserEmailId() {
  if (scReturnUserId !== '') {
    let SCReturnuserEmail = scReturnUserID();
    await t.evaluate(await t.$(scReturnUserId), (ele) => ele.focus());
    await t.write(SCReturnuserEmail, t.into(await t.$(scReturnUserId)));
    gauge.message('Return user Email ID: ' + SCReturnuserEmail);
  }
}

async function scReturnUserpassword() {
  if (returnUserPassword !== '') {
    await t.write(CommonData.RPWD, t.into(t.textBox({ id: returnUserPassword })));
  }
}

async function scReturnUserSignInButton() {
  if (returnUserSignInButton !== '') {
    await t.evaluate(await t.$(returnUserSignInButton), (ele) => {
      ele.focus();
      ele.click();
    });
  }
}

async function gotoTranslateMppSppPageValidation() {
  if (
    translateMppMenu !== '' &&
    translateMppPageLink !== '' &&
    translateSppProductLink !== ''
  ) {
    await evaluate(await $(translateMppMenu), (ele) => ele.click());
    gauge.screenshot();
    await evaluate(await $(translateMppPageLink), (ele) => ele.click());
    gauge.screenshot();
    await reusableFunc.AssertText(
      translateMppPage,
      CommonData.TRANSLATEMPPPAGEASSERT,
      'Translate MPP Page Verified.',
      'Translate MPP Page Not Verified.'
    );
    await evaluate(await $(translateSppProductLink), (ele) => ele.click());
    gauge.screenshot();
    await reusableFunc.AssertText(
      translateSppPage,
      CommonData.TRANSLATESPPPAGEASSERT,
      'Translate SPP Page Verified.',
      'Translate SPP Page Not Verified.'
    );
  } else {
    gauge.message('This step is not applicable for this Brand/Locale');
  }
}

async function gotoTranslateViewCartPageValidation() {
  if (translateSite === 'true' && translateViewCartPage !== '') {
    await reusableFunc.AssertText(
      translateViewCartPage,
      CommonData.TRANSLATEVIEWCARTPAGEASSERT,
      'Translate ViewCart Page Verified.',
      'Translate ViewCart Page Not Verified.'
    );
  }
}

async function gotoTranslateShippingtPageValidation() {
  if (translateSite === 'true' && translateShippingPage !== '') {
    await reusableFunc.AssertText(
      translateShippingPage,
      CommonData.TRANSLATESHIPPINGPAGEASSERT,
      'Translate shipping Page Verified.',
      'Translate shipping Page Not Verified.'
    );
  }
}

async function gotoTranslatePaymentPageValidation() {
  if (translateSite === 'true' && translatePaymentPage !== '') {
    await reusableFunc.AssertText(
      translatePaymentPage,
      CommonData.TRANSLATEPAYMENTPAGEASSERT,
      'Translate Payment Page Verified.',
      'Translate Payment Page Not Verified.'
    );
  }
}

async function gotoTranslateOrderConfirmationValidation() {
  if (translateSite === 'true' && translateOrderConfirmationPage !== '') {
    await reusableFunc.AssertText(
      translateOrderConfirmationPage,
      CommonData.TRANSLATEORDERCONFIRMATIONPAGEASSERT,
      'Translate Order confirmation Page Verified.',
      'Translate Order confirmation Not Verified.'
    );
  }
}

step('NAACCCHK Initialize Helix', async function () {
  await initFrameworkSettings();
});

step('NAACCCHK Open Website', async function () {
  await t.goto(siteDefinition.executionContext.adminUrl + productCatUrl, {
    waitForNavigation: false,
  });
  gauge.screenshot();
});

step('NAACCCHK ReOpen Product Url', async function () {
  await t.goto(siteDefinition.executionContext.adminUrl + productCatUrl, {
    waitForNavigation: false,
  });
  gauge.screenshot();
});

step('NAACCCHK Go to SkuId and browse to SPP', async function () {
  await GotoSKUandbrowsetoSPP();
});

step(
  'NAACCCHK Set cookies, TestOrder flag, set revision tag',
  async function () {
    await mobileEmulateDevice();
    await setCookies();
  }
);

step(
  'NAACCCHK Verify that the user is able to add products to the cart successfully',
  async function () {
    if (translateSite === 'false') {
      await reusableFunc.randomSkuOrProdCatFlow(
        randomSkuUrl,
        skuLink,
        siteDefinition.executionContext.adminUrl,
        siteDefinition.executionContext.url,
        isShoppableSku,
        isDisplayableSku,
        sppUrl,
        noDisplayableProductError,
        productSkuUrl,
        skuIds,
        addToBagSPP
      );
    } else {
      await gotoTranslateMppSppPageValidation();
    }
    await closePopUp();
    await validateInSppPage();
    await cookieReject();
    await closePopUp();
  }
);

step(
  'NAACCCHK Verify that the user is able to view and update the cart',
  async function () {
    await addProductToBag();
    await navigateToCartPage();
    await validateInCartPage();
    await closePopUp();
    await gotoTranslateViewCartPageValidation();
  }
);
step(
  'NAACCCHK Verify that the user is able to proceed to Sign in successfully',
  async function () {
    await continueCheckoutButton();
    await samplePageButton();
    await reusableFunc.ElementAction(guestuserlink);
    await reusableFunc.ElementAction(GuestuserDetails);
  }
);

step(
  'NAACCCHK Verify that the user is able to enter the shipping details successfully',
  async function () {
    if (
      siteDefinition.executionContext.environment === 'STAGE' ||
      siteDefinition.executionContext.environment === 'DEV'
    ) {
      await reusableFunc.ElementAction(ShippingDetailsStage);
    } else {
      await reusableFunc.ElementAction(ShippingDetails);
    }
    await gotoTranslateShippingtPageValidation();
  }
);

step(
  'NAACCCHK Verify that the user is able to select the payment method successfully',
  async function () {
    if (
      siteDefinition.executionContext.environment.toUpperCase() === 'STAGE' ||
      siteDefinition.executionContext.environment.toUpperCase() === 'DEV'
    ) {
      await paymentDetailsStage();
    } else {
      await paymentDetails();
    }
    await gotoTranslatePaymentPageValidation();
    gauge.screenshot();
  }
);

step(
  'NAACCCHK Verify that the user is able to place the order successfully',
  async function () {
    await selectReturnUserAddress();
    await placeOrderPage();
    await afterPlacingOrderPopUp();
    await mobAfterPlacingOrderPopUp();
    await orderValidation();
    await gotoTranslateOrderConfirmationValidation();
  }
);

step(
  'NAACCCHK Verify that the user is able to proceed to Mobile Sign in successfully',
  async function () {
    await mobContinueCheckoutButton();
    await mobClickOnSamplePage();
    await reusableFunc.ElementAction(guestuserlink);
    await reusableFunc.ElementAction(GuestuserDetails);
  }
);

step(
  'NAACCCHK Verify that the user is able to proceed to Signup Registration in successfully',
  async function () {
    await placeOrderpageToPasswordPage();
    await signUpRegisterPassword();
    await signUpPageZipcode();
    await registerTermsAndConditions();
    await signUpDobDay();
    await signUpDobMonth();
    await signupRegistrationButton();
    await signupAccountPageValidation();
  }
);

step(
  'NAACCCHK Verify that the user is able to proceed to Return User details successfully',
  async function () {
    await continueCheckoutButton();
    await samplePageButton();
    await enterReturnUserLinks();
    await enterReturnUserEmailIdDetails();
  }
);

step(
  'NAACCCHK Verify that the user is able to proceed to Mobile Return User details successfully',
  async function () {
    await mobContinueCheckoutButton();
    await mobClickOnSamplePage();
    await enterReturnUserLinks();
    await enterReturnUserEmailIdDetails();
  }
);

step(
  'NAACCCHK Verify that the user is able to proceed to Cart Merge Checkout successfully',
  async function () {
    await cartMergeCheckoutButton();
    await samplePageButton();
    await returnUserNewAddressLink();
    await returnUserAddNewaddressButton();
  }
);

step(
  'NAACCCHK Verify that the user is able to proceed to Mobile Cart Merge Checkout successfully',
  async function () {
    await mobContinueCheckoutButton();
    await mobClickOnSamplePage();
    await returnUserNewAddressLink();
    await returnUserAddNewaddressButton();
  }
);

step('NAACCCHK Open Mobile Website', async function () {
  await t.goto(siteDefinition.executionContext.adminUrl + productCatUrl, {
    waitForNavigation: false,
  });
});

step('NAACCCHK MOB ReOpen Product Url', async function () {
  await t.goto(siteDefinition.executionContext.adminUrl + productCatUrl, {
    waitForNavigation: false,
  });
  gauge.screenshot();
});

/***********************************************************CART******************************************************/

step(
  'NAACCCHK Verify that the user is able to increase the quantity in cart page',
  async function () {
    await selectQtyIncrease();
    await selectQtydropDown();
  }
);

step(
  'NAACCCHK Verify that the user is able to remove the product from cart page',
  async function () {
    await productRemove();
    await productRemoveAssert();
  }
);

step('NAACCCHK ENTER VALID OFFERCODE', async function () {
  if (offerCode !== '') {
    await t.write(CommonData.OFFERCODENUMBER, t.into(t.textBox({ id: offerCode })));
    gauge.screenshot();
  }
});

step('NAACCCHK Apply Offer Button and Assert', async function () {
  if (offerCodeButton !== '') {
    await t.evaluate(await t.$(offerCodeButton), (ele) => ele.click());
    gauge.screenshot();
    var ExpectedValidOfferMsg = await (await t.$(validOfferMsg)).text();
    if (
      ExpectedValidOfferMsg.toUpperCase().search(
        CommonData.VALIDOFFERMSG.toUpperCase()
      ) !== -1
    ) {
      assert(matchCondition, 'The discount has been applied.');
      gauge.message('The discount has been applied.');
    } else {
      assert(!matchCondition, 'The discount has been not applied.');
    }
  }
});

step('NAACCCHK Apply Offer Edit Button', async function () {
  if (offerEditButton !== '') {
    await t.evaluate(await t.$(offerEditButton), (ele) => ele.click());
    gauge.screenshot();
  }
});

step('NAACCCHK ENTER INVALID OFFERCODE', async function () {
  if (CommonData.INVALIDOFFERCODE !== '') {
    await t.clear(t.textBox({ id: enterInValidOfferCode }));
    await t.write(
      CommonData.INVALIDOFFERCODE,
      t.into(t.textbox({ id: enterInValidOfferCode }))
    );
    gauge.screenshot();
  }
});

step('NAACCCHK Apply Offer Button1 and Assert', async function () {
  if (applyOfferButton1 !== '') {
    await t.evaluate(await t.$(applyOfferButton1), (ele) => ele.click());
    gauge.screenshot();
    var ExpectedINValidOfferMsg = await (await t.$(inValidOfferMsg)).text();
    if (
      ExpectedINValidOfferMsg.toUpperCase().search(
        CommonData.INVALIDOFFERMSG.toUpperCase()
      ) !== -1
    ) {
      assert(
        matchCondition,
        'The coupon code test_global_percent_discountt is not valid. is expected'
      );
      gauge.message(
        'The coupon code test_global_percent_discountt is not valid. is expected'
      );
    } else {
      assert(
        !matchCondition,
        'The coupon code test_global_percent_discountt is not valid. is not expected'
      );
    }
  }
});

step('NAACCCHK Open Test Offers PCURL', async function () {
  await t.goto(siteDefinition.executionContext.adminUrl + testOffersUrl, {
    waitForNavigation: false,
  });
});

step('NAACCCHK Open Test Offers MOBURL', async function () {
  await t.goto(siteDefinition.executionContext.adminUrl + testOffersUrl, {
    waitForNavigation: false,
  });
});

step('NAACCCHK New Credit card radio button', async function () {
  if (newCreditCardRadioButton !== '') {
    await t.evaluate(
      await t.radioButton({ id: newCreditCardRadioButton }),
      (ele) => ele.click()
    );
  } else {
    gauge.message('This step is not applicable for this Brand/Locale');
  }
});

// *****************************ENE *******************************//

step('NAACCCHK Open Home Page Website ', async function () {
  await t.goto(siteDefinition.executionContext.url + url, {
    waitForEvents: ['DOMContentLoaded'],
  });
  gauge.screenshot();
});

step('NAACCCHK Open Mobile Home Page Website ', async function () {
  await t.goto(siteDefinition.executionContext.url + url, {
    waitForEvents: ['DOMContentLoaded'],
  });
  gauge.screenshot();
});

step('NAACCCHK ENTER adyenpassword', async function () {
  if (adyenPassword !== '') {
    /**ENTER adyenpassword is applicable for few Brand/Locale/platform(PC/MOB) */
    try {
      await t.write(CommonData.ANPWD, t.into(await t.$(adyenPassword)));
    } catch (e) {
      gauge.message(
        'ENTER adyenpassword is not displayed and hence this step is skipped'
      );
    }
    gauge.screenshot();
  } else {
    gauge.message('This step is not applicable for this Brand/Locale');
  }
});

step('NAACCCHK click on adyen button', async function () {
  if (clickOnAdyenButton !== '') {
    /**click on adyen button is applicable for few Brand/Locale/platform(PC/MOB) */
    try {
      await t.evaluate(await t.$(clickOnAdyenButton), (ele) => ele.click());
    } catch (e) {
      gauge.message(
        'click on adyen button is not displayed and hence this step is skipped'
      );
    }
    gauge.screenshot();
  } else {
    gauge.message('This step is not applicable for this Brand/Locale');
  }
});

/**********************************************************************************ACC**********************************************/

step(
  'NAACCCHK Configuring set cookies,rev tag,test order flag',
  async function () {
    await mobileEmulateDevice();
    await setCookies();
    await setRevTag();
    await cookieReject();
    await navigateToSignInPage();
    await closePopUp();
  }
);

step(
  'NAACCCHK Verify that the user is able to create account and complete registration',
  async function () {
    await clickOnCreateAccount();
    await acAddTitle();
    await enterRegisterationDetails();
  }
);

step(
  'NAACCCHK Verify that the user is able to create account and complete registration in mobile',
  async function () {
    await mobRegisterNow();
    await acAddTitle();
    await enterMobRegistrationDetails();
  }
);

step(
  'NAACCCHK Verify the user is able to ADD,EDIT,DELETE Address and signout in my account',
  async function () {
    await clickOnAccountsettings();
    await clickOnAddressBook();
    await clickOnAddNewAddressButton();
    if (
      siteDefinition.executionContext.environment.toUpperCase() === 'STAGE' ||
      siteDefinition.executionContext.environment.toUpperCase() === 'DEV'
    ) {
      await reusableFunc.ElementAction(ACShippingDetailsStage);
    } else {
      await reusableFunc.ElementAction(ACShippingDetails);
    }
    await enterEditAddress();
    await reusableFunc.ElementAction(ACEditShippingDetails);
    await acDeleteAddressWithConfirm();
    await signOutButton();
  }
);

step(
  'NAACCCHK Verify the user is able to ADD,EDIT,DELETE Address and signout in my account in mobile',
  async function () {
    await clickOnAccountsettings();
    await clickOnAddressBook();
    await clickOnAddNewAddressButton();
    if (
      siteDefinition.executionContext.environment.toUpperCase() === 'STAGE' ||
      siteDefinition.executionContext.environment.toUpperCase() === 'DEV'
    ) {
      await reusableFunc.ElementAction(ACMOBShippingDetailsStage);
    } else {
      await reusableFunc.ElementAction(ACMOBShippingDetails);
    }
    await enterEditAddress();
    await reusableFunc.ElementAction(ACEditShippingDetails);
    await mobDeleteAddressWithConfirm();
    await mobLogInLink();
    await mobSignoutButton();
  }
);

step(
  'NAACCCHK Verify the user is able to login as return user and check order details',
  async function () {
    await clickLogInLinkAgain();
    await enterReturnUserDetails();
    await clickOnAccountsettings();
    await viewOrderDetails();
  }
);

step(
  'NAACCCHK Verify the user is able to login as return user and check order details in mobile',
  async function () {
    await mobNeedToClickLogInLinkAgain();
    await enterReturnUserDetails();
    await clickOnAccountsettings();
    await mobViewDetails();
  }
);

step(
  'NAACCCHK Verify the user is able to Add credit card and billing address',
  async function () {
    await clickOnAddressBook();
    await addNewCreditCard();
    await acClickNewCreditCard();
    await acEnterCreditCardDetails();
    await addNewBillingAddress();
    if (
      siteDefinition.executionContext.environment.toUpperCase() === 'STAGE' ||
      siteDefinition.executionContext.environment.toUpperCase() === 'DEV'
    ) {
      await reusableFunc.ElementAction(BillingShippingDetailsStage);
    } else {
      await reusableFunc.ElementAction(BillingShippingDetails);
    }
    await creditCardSubmitButton();
    await signOutButton();
  }
);

step(
  'NAACCCHK Verify the user is able to Add credit card and billing address in mobile',
  async function () {
    await clickOnAddressBook();
    await addNewCreditCard();
    await acClickNewCreditCard();
    await mobEnterCreditCardDetails();
    await addNewBillingAddress();
    if (
      siteDefinition.executionContext.environment.toUpperCase() === 'STAGE' ||
      siteDefinition.executionContext.environment.toUpperCase() === 'DEV'
    ) {
      await reusableFunc.ElementAction(BillingMOBShippingDetailsStage);
    } else {
      await reusableFunc.ElementAction(BillingMOBShippingDetails);
    }
    await creditCardSubmitButtonMob();
    await mobHamburgerIcon();
    await loggedInProfileLink();
    await mobSignoutButton();
  }
);

step('NAACCCHK Enter MOB AC shipping address', async function () {
  await reusableFunc.ElementAction(ACMOBShippingDetails);
});

step('NAACCCHK Enter Billing shipping address', async function () {
  await reusableFunc.ElementAction(BillingShippingDetails);
});

step('NAACCCHK Enter MOB Billing shipping address', async function () {
  await reusableFunc.ElementAction(BillingMOBShippingDetails);
});

step(
  'NAACCCHK Verify that the user is able to select the Saved credit card payment method successfully',
  async function () {
    if (scCvvField !== '') {
      await t.write(CommonData.CVV, t.into(await t.$(scCvvField)));
    }
  }
);
step(
  'NAACCCHK Verify that the user is able to proceed to saved credit card Return User details successfully',
  async function () {
    await continueCheckoutButton();
    await samplePageButton();
    await enterReturnUserLinks();
    await savedCreditCardReturnUserEmailId();
    await scReturnUserpassword();
    await scReturnUserSignInButton();
  }
);
step(
  'NAACCCHK Verify that the user is able to proceed to saved credit card Return User Mobile details successfully',
  async function () {
    await mobContinueCheckoutButton();
    await mobClickOnSamplePage();
    await enterReturnUserLinks();
    await savedCreditCardReturnUserEmailId();
    await scReturnUserpassword();
    await scReturnUserSignInButton();
  }
);
