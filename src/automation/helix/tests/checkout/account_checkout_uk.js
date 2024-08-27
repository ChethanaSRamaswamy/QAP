// This file is common template for UK Region
var t = require('taiko');
let siteDefinition, source, NullDataException;
const Helper = require('../../helpers/helper');
const Util = require('../../../../utilities/util');
const assert = require('assert');
const Hengine = require('../../../../datainterface/providers/hengine');
const taikoOverride = require('../../helix_taiko');
const matchCondition = true;
const responseCode = 200;

const gen = require('../ReUsableFunction.js');
var feature = 'Checkout';
var CommonData = {};

// Array Declaration
var ruIds = [];
var scRuIds = [];
var ruShippingDetails = [];
var shippingDetails = [];
var paymentDetails = [];
var skuIds = [];
var savedCardPaymentDetails = [];
var clickLogInLink = [];
var clickReturnUserLoginButton = [];
var clickSignoutButton = [];
var clickAccountRegister = [];
var cartCheckoutContinueButton = [];
var cartSamplePageContinueButton = [];
var clickCookieRejectButton = [];
var clickCartPopupClose = [];
var clickRandomPopupClose = [];
var clickOnCheckoutButton = [];
var clickOnOverlayCheckoutButton = [];
var clickUserLink = [];
var clickReturnUserRadioButton = [];
var clickReturnUserLink = [];
var clickUnCheckingSavecreditcard = [];
var enterUserSigninPassword = [];
var enterReturnUserPassword = [];
var clickReviewRegisterTerms = [];
var clickOnReturnUserButton = [];
var ClickOnNewUserCreateAccount = [];
var ClickOnNewUserCreateTermsAndConditions = [];
var enterToValidOfferCode = [];
var clickOfferEditButton = [];
var enterToInvalidOfferCode = [];
var clickOfferCodeAccordion = [];
var clickGnavSignInLink = [];
var clickAccountRegisterNowLink = [];
var clickAddressBookDetailsPage = [];
var clickAccountDetailsPage = [];
var clickDeliveryAddressButton = [];
var clickAccountSignoutButton = [];
var clickReturnUserLogInLink = [];
var clickReturnUserAddressBookDetails = [];
var clickReturnUserDevliveryAddress = [];
var clickReturnUserNewAddressLink = [];
var clickReturnUserEditAddressLink = [];
var clickReturnUserSubmitButton = [];
var clickDeleteAddressLink = [];
var clickMyOrderHistory = [];
var clickPaymentInfoLink = [];
var clickPaymentInfoLinkOneMoreTime = [];
var clickNewBillingAddressLink = [];
var clickNewBillingAddressLinkOneMoreTime = [];
var clickBiilingAddPaymentMethod = [];
var clickNewCreditCardButton = [];
var clickMakeDefaultCreditCard = [];
var clickCreditCardSubmitButton = [];
var clickMobileBrandLogo = [];
var clickMobileHamburgerIcon = [];
var clickMobileLoginLink = [];
var clickMobileRegisterNowLink = [];
var clickMobileAddNewAddressButton = [];
var clickMobileManualAddressEntry = [];
var clickMobileReturnUserAddNewAddressButton = [];
var clickMobileAddressSubmitButton = [];
var clickMobileLoggedInProfileLink = [];
var clickMobileReturnUserLogInLink = [];
var clickMobileDeleteAddressLink = [];
var clickMobilePaymentInfo = [];
var clickMobilePaymentInfoOneMoreTime = [];
var clickMobileBillingAddressLink = [];
var clickMobileBillingAddressLinkFirstTime = [];
var clickMobileBillingAddressLinkSecondTime = [];
var clickMobileBiilingAddPaymentMethod = [];
var clickMobileAddNewCreditCardButton = [];
var clickMobileBillingAddressBook = [];
var clickMobileOrderHistoryDetails = [];
var clickMobileSignoutButton = [];
var clickNewUserRegisterButton = [];
var clickIncreaseQuantity = [];
var skuLink = '';
var newUserIdRadioButton = '';
var addToCartVulcan = '';
var viewCartUrl = '';
var clickOnSelectSampleButton = '';
var acLogInETE = '';
var acReturnUserEmailIdETE = '';
var acReturnUserPasswordETE = '';
var acReturnUserLoginButtonETE = '';
var acSignoutButtonETE = '';
var acRegisterNowETE = '';
var clickOnCartMergeChkCntBtn = '';
var clkOnCartMergeSamPgCntBtn = '';
var cookieRejectButton = '';
var cartPopupClose = '';
var randomPopupClose = '';
var notAvailableProductsCount = 0;
var prodcaturl = '';
var isShoppable = '';
var isDisplayable = '';
var displayableProduct = '';
var noDisplayableProductError = '';
var sppPageProdHeader = '';
var sppPageProdHeaderMobile = '';
var javaAlertPopup = '';
var addToBagSPP = '';
var clickCartpageLink = '';
var clickCartpageLinkMobile = '';
var cartpageURLText = '';
var cartcountvalue = '';
var addToCart = '';
var noProductinCart = 0;
var qtyLimited = '';
var addToCartMessage = '';
var removeAssert = '';
var cartEmptAssertTxt = '';
var removeAssertMob = '';
var cartEmptAssertTxtMob = '';
var checkoutButtonId = '';
var overlayCheckout = '';
var clickOnSamplePage1ContinueButton = '';
var clickOnSamplePage2ContinueButton = '';
var clickOnMOBSamplePg1CntBtn = '';
var clickOnMOBSamplePg2CntBtn = '';
var clkGuUsrNewuserCntBtn = '';
var clickOnReturnUserRadioButton = '';
var clickOnReturnUserLink = '';
var cartlimit = '';
var cartLimittxt = '';
var enterFirstName = '';
var enterLastName = '';
var manualAddressEntry = '';
var enterAddress1 = '';
var enterAddress2 = '';
var enterZipCode = '';
var enterPhone = '';
var enterCity = '';
var selectStateDropdown = '';
var enterAddress4 = '';
var clkOnShipDetCntBtn = '';
var clkOnOrdRevDetCntBtn = '';
var clickOnContinueGiftOptionsPage = '';
var pageReloadUrl = '';
var selectPaymentOption = '';
var cardNumber = '';
var expiryDate = '';
var cvv = '';
var unCheckingKeepthisCreditCard = '';
var enterGuestUserNewUserId = '';
var popupClose = '';
var enterNewUserSignupRegisterPWD = '';
var guestUserNewUserReviewRegisterTerms = '';
var enterReturnUserId = '';
var enterReturnUserPWD = '';
var clickOnReturnUserSigninButton = '';
var clkOnGuUsrNewUserSignupPlaceOrd = '';
var orderConfirmationMsgid = '';
var enterOTP = '';
var otpSubmitButton = '';
var createAccountBtnOCP = '';
var nuUsrSignupRegTerAndCon = '';
var newUserCreateAccountButton = '';
var mobileStickyPanelSignin = '';
var increaseQTYWithClickMethod = '';
var increaseQTYWithDropdownMethod = '';
var enterValidOfferCode = '';
var clickOnValidOfferButton = '';
var validOfferMsg = '';
var clickOnOfferEditButton = '';
var enterInValidOfferCode = '';
var clickOnInValidOfferButton = '';
var inValidOfferMsg = '';
var removeProduct = '';
var cartproductpath = '';
var cartprodname = '';
var clickOnOfferCodeAccordion = '';
var clickOnGnavSignInLink = '';
var clickOnAccountRegisterNowLink = '';
var navigateToAccountSigninurl = '';
var acRegistrationFirstName = '';
var acRegistrationLastName = '';
var acRegisterEmailId = '';
var acRegisterPWD = '';
var acRegisterEmailId1 = '';
var acRegisterPWD1 = '';
var acRegisterationTerms = '';
var acRegisterationTerms1 = '';
var acRegisterButton = '';
var acRegisterButton1 = '';
var clkOnAccShipandBillAddBook = '';
var clickOnAddNewAccountAddressButton = '';
var acEnterFirstName = '';
var acEnterLastName = '';
var acManualAddressEntry = '';
var acEnterAddress1 = '';
var acEnterAddress2 = '';
var acEnterZipCode = '';
var acEnterPhone = '';
var acEnterCity = '';
var acEnterAddress3 = '';
var acEnterAddress4 = '';
var clkOnAccShipandAddSubBtn = '';
var clickOnAccountSignoutButton = '';
var accountSignoutAssert = '';
var clkOnAccLogInonGnavAccsignpgasRU = '';
var acReturnUserEmailId = '';
var acReturnUserPWD = '';
var acMobileGnav = '';
var acReturnUserLoginButton = '';
var clkOnRetUserAccAddNewAddrBtn = '';
var clickOnAccRUStdDelAddress = '';
var clkOnAccRUAddNewAddSubBtn = '';
var clkOnAccRUEditAddressLink = '';
var clickOnAccRUEditAddressSubBtn = '';
var acDeleteAddress = '';
var acDeleteAddressConfirm = '';
var acMyOrder = '';
var acMyOrderAccordion = '';
var acMyOrderViewDetails = '';
var acMyOrderViewDeatils1 = '';
var clickOnAccBillPayInfoLink = '';
var clkOnAccBillPayInfoOneMoreTime = '';
var clickOnAccountAddNewBillAddLink = '';
var clkOnAccAddNewBillAddOneMoretime = '';
var clickOnAccBiilingAddPayMtd = '';
var clkOnAccountAddNewCreditCardBtn = '';
var acSelectCardType = '';
var acSelectCardTypeDropdown = '';
var acEnterCreditCardNumber = '';
var acEnterCVVNumber = '';
var acEnterExpMonth = '';
var acEnterExpYear = '';
var acEnterExpMonthDropdown = '';
var acEnterExpYearDropdown = '';
var clickOnAccountCreditCardSubBtn = '';
var acMobilBrandLogo = '';
var navigateToMobileAccountSigninurl = '';
var clickOnMobileHamburgerIcon = '';
var clickOnAccountMobileLoginLink = '';
var clickOnAccountMobileRegisterNowLink = '';
var clkOnAccMobileNewUserAddNewAddBtn = '';
var acMobileManualAddressEntry = '';
var acMobileRuAddNewAddress = '';
var clickOnAccountMobileAddressSubBtn = '';
var acMobileLoggedInProfileLink = '';
var clickOnAccMobileLogInToSignInAsRU = '';
var acMobileDeleteAddress = '';
var acMobileDeleteAddressConfirm = '';
var acMobileDeleteAddressPopup = '';
var acMobilePaymentInfo = '';
var acMobilePaymentInfo1 = '';
var acMobileAddNewBillingAddress = '';
var acMobileAddNewBillingAddress1 = '';
var acMobileAddNewBillingAddress2 = '';
var acMobileAddPaymentMethod = '';
var acMobileAddNewCreditCard = '';
var clickOnAccMobileShipBillingAddBook = '';
var acMobileMyOrder = '';
var acMobileMyOrderAccordion = '';
var acMobileMyOrderViewDetails = '';
var acMobileSignoutButton = '';
var acMobileSignoutAssert = '';
var clkOnNURegAccBtnInAccSignInPage = '';
var increaseQuantityOnClick = '';
var enterSavedCardsReturnUserID = '';
var clickOnAccountMakeDefaultCC = '';
var emulationDevice = '';
var transId = '';
var waittingTime = 5000;
var randomSkuUrl = '';

const messages = {
  stepNotApplicable: 'This step is not applicable for this Brand/Locale',
  productSku: 'The Product with SKU ID - ',
  skuAvailable: ' is available and proceeding to add to Cart',
  akamaiBypass: 'AKAMAI BYPASS IS SET TO',
  skuNotAvailable: ' is NOT available for adding it to Cart ',
  noProductAvailable:
    'None of the products are available for adding it to Cart',
  validateCartMessage:
    'In the first iteration the product was not added, so go for second iteration.',
  productAddedCart: 'After second iteration product not added to cart',
  productRemoveCart: 'Product removed from cart',
  productNotRemoveCart: 'Product not removed from cart',
  noSamplePage:
    'There is no sample page on view cart and hence this step is skipped',
  exceedsLimit:
    'The expected error is shown when CART quantity exceeds max limit',
  exceedsMaxLimit:
    'The message is shown when CART quantity exceeds max limit. But the error message seems to be wrong',
  maxCartLimit: 'The error message is not displayed for the max cart limit',
  popup: 'popup not found',
  removedUnsuccessfully: 'Expected product is not removed',
  removedSuccessfully: 'Expected product is removed successfully',
  signoutExpected: 'Sign Out is expected',
  signoutNotExpected: 'Sign Out is not expected',
};

function reinitialize() {
  skuIds = [
    CommonData.skuId1,
    CommonData.skuId2,
    CommonData.skuId3,
    CommonData.skuId4,
    CommonData.skuId5,
  ];

  qtyLimited = CommonData.QTYLimit;

  ruShippingDetails = [
    // { loc: clkOnRetUsrShipDetEditLink, action: 'tryCatchClick' },
    // { loc: clickOnReturnUserAddNewaddress, action: 'click' },
    { loc: clkOnShipDetCntBtn, action: 'click' },
    { loc: clkOnOrdRevDetCntBtn, action: 'tryCatchClick' },
    { loc: clickOnContinueGiftOptionsPage, action: 'tryCatchClick' },
  ];

  shippingDetails = [
    { loc: enterFirstName, data: CommonData.FIRSTNAME, action: 'write' },
    { loc: enterLastName, data: CommonData.LASTNAME, action: 'write' },
    { loc: manualAddressEntry, action: 'tryCatchClick' },
    { loc: enterAddress1, data: CommonData.ADDRESS1, action: 'write' },
    { loc: enterAddress2, data: CommonData.ADDRESS2, action: 'write' },
    { loc: enterZipCode, data: CommonData.ZIPCODE, action: 'write' },
    { loc: enterPhone, data: CommonData.PHONE, action: 'write' },
    { loc: enterCity, data: CommonData.CITY, action: 'write' },
    {
      loc: selectStateDropdown,
      data: CommonData.STATE,
      action: 'IDDropdowntxt',
    },
    { loc: enterAddress4, data: CommonData.ADDRESS4, action: 'write' },
    { loc: clkOnShipDetCntBtn, action: 'click' },
    { loc: clkOnOrdRevDetCntBtn, action: 'tryCatchClick' },
    { loc: clickOnContinueGiftOptionsPage, action: 'tryCatchClick' },
  ];

  paymentDetails = [
    { loc: selectPaymentOption, action: 'click' },
    {
      loc: cardNumber,
      data: CommonData.CREDITCARDNUMBER,
      action: 'WaitforElementNwrite',
    },
    { loc: expiryDate, data: CommonData.MONTHYEAR, action: 'write' },
    { loc: cvv, data: CommonData.CVV, action: 'write' },
  ];

  savedCardPaymentDetails = [
    { loc: pageReloadUrl, action: 'reload' },
    { loc: selectPaymentOption, action: 'click' },
    { loc: cvv, data: CommonData.CVV, action: 'write' },
  ];

  ruIds = [
    CommonData.RID,
    CommonData.RID1,
    CommonData.RID2,
    CommonData.RID3,
    CommonData.RID4,
    CommonData.RID5,
    CommonData.RID6,
    CommonData.RID7,
    CommonData.RID8,
    CommonData.RID9,
  ];

  scRuIds = [
    CommonData.RID10,
    CommonData.RID11,
    CommonData.RID12,
    CommonData.RID13,
    CommonData.RID14,
  ];

  clickLogInLink = [
    { loc: acLogInETE, action: 'click' },
    { action: 'screenshot' },
  ];

  clickReturnUserLoginButton = [
    { loc: acReturnUserLoginButtonETE, action: 'click' },
    { action: 'screenshot' },
  ];

  clickSignoutButton = [
    { loc: acSignoutButtonETE, action: 'click' },
    { action: 'screenshot' },
  ];

  clickAccountRegister = [
    { loc: acRegisterNowETE, action: 'click' },
    { action: 'screenshot' },
  ];

  cartCheckoutContinueButton = [
    { loc: clickOnCartMergeChkCntBtn, action: 'tryCatchClick' },
    { action: 'screenshot' },
  ];

  cartSamplePageContinueButton = [
    { loc: clkOnCartMergeSamPgCntBtn, action: 'tryCatchClick' },
    { action: 'screenshot' },
  ];

  clickCookieRejectButton = [
    { loc: cookieRejectButton, action: 'tryCatchClick' },
    { action: 'screenshot' },
  ];

  clickCartPopupClose = [
    { loc: cartPopupClose, action: 'tryCatchClick' },
    { action: 'screenshot' },
  ];

  clickRandomPopupClose = [
    { loc: randomPopupClose, action: 'tryCatchClick' },
    { action: 'screenshot' },
  ];

  clickOnCheckoutButton = [
    { loc: checkoutButtonId, action: 'click' },
    { action: 'screenshot' },
  ];

  clickOnOverlayCheckoutButton = [
    { loc: overlayCheckout, action: 'click' },
    { action: 'screenshot' },
  ];

  clickUserLink = [
    { loc: clkGuUsrNewuserCntBtn, action: 'click' },
    { action: 'screenshot' },
  ];

  clickReturnUserRadioButton = [
    { loc: clickOnReturnUserRadioButton, action: 'click' },
    { action: 'screenshot' },
  ];

  clickReturnUserLink = [
    { loc: clickOnReturnUserLink, action: 'click' },
    { action: 'screenshot' },
  ];

  clickUnCheckingSavecreditcard = [
    { loc: unCheckingKeepthisCreditCard, action: 'click' },
    { action: 'screenshot' },
  ];

  enterUserSigninPassword = [
    {
      loc: enterNewUserSignupRegisterPWD,
      data: CommonData.NPWD,
      action: 'write',
    },
    { action: 'screenshot' },
  ];

  enterReturnUserPassword = [
    { loc: enterReturnUserPWD, data: CommonData.RPWD, action: 'write' },
    { action: 'screenshot' },
  ];

  clickReviewRegisterTerms = [
    { loc: guestUserNewUserReviewRegisterTerms, action: 'click' },
    { action: 'screenshot' },
  ];

  clickOnReturnUserButton = [
    { loc: clickOnReturnUserSigninButton, action: 'click' },
    { action: 'screenshot' },
  ];

  ClickOnNewUserCreateAccount = [
    { loc: createAccountBtnOCP, action: 'click' },
    { action: 'screenshot' },
  ];

  ClickOnNewUserCreateTermsAndConditions = [
    { loc: nuUsrSignupRegTerAndCon, action: 'click' },
    { action: 'screenshot' },
  ];

  enterToValidOfferCode = [
    {
      loc: enterValidOfferCode,
      data: CommonData.VALIDOFFERCODE,
      action: 'write',
    },
    { action: 'screenshot' },
  ];

  clickOfferEditButton = [
    { loc: clickOnOfferEditButton, action: 'click' },
    { action: 'screenshot' },
  ];

  enterToInvalidOfferCode = [
    {
      loc: enterInValidOfferCode,
      data: CommonData.INVALIDOFFERCODE,
      action: 'write',
    },
    { action: 'screenshot' },
  ];

  clickOfferCodeAccordion = [
    { loc: clickOnOfferCodeAccordion, action: 'click' },
    { action: 'screenshot' },
  ];

  clickGnavSignInLink = [
    { loc: clickOnGnavSignInLink, action: 'click' },
    { action: 'screenshot' },
  ];

  clickAccountRegisterNowLink = [
    { loc: clickOnAccountRegisterNowLink, action: 'click' },
    { action: 'screenshot' },
  ];

  clickAddressBookDetailsPage = [
    { loc: clkOnAccShipandBillAddBook, action: 'click' },
    { action: 'screenshot' },
  ];

  clickAccountDetailsPage = [
    { loc: clickOnAddNewAccountAddressButton, action: 'click' },
    { action: 'screenshot' },
  ];

  clickDeliveryAddressButton = [
    { loc: clkOnAccShipandAddSubBtn, action: 'click' },
    { action: 'screenshot' },
  ];

  clickAccountSignoutButton = [
    { loc: clickOnAccountSignoutButton, action: 'click' },
    { action: 'screenshot' },
  ];

  clickReturnUserLogInLink = [
    { loc: clkOnAccLogInonGnavAccsignpgasRU, action: 'click' },
    { action: 'screenshot' },
  ];

  clickReturnUserAddressBookDetails = [
    { loc: clkOnRetUserAccAddNewAddrBtn, action: 'click' },
    { action: 'screenshot' },
  ];

  clickReturnUserDevliveryAddress = [
    { loc: clickOnAccRUStdDelAddress, action: 'click' },
    { action: 'screenshot' },
  ];

  clickReturnUserNewAddressLink = [
    { loc: clkOnAccRUAddNewAddSubBtn, action: 'click' },
    { action: 'screenshot' },
  ];

  clickReturnUserSubmitButton = [
    { loc: clickOnAccRUEditAddressSubBtn, action: 'click' },
    { action: 'screenshot' },
  ];

  clickDeleteAddressLink = [
    { loc: acDeleteAddress, action: 'click' },
    { loc: acDeleteAddressConfirm, action: 'click' },
    { action: 'screenshot' },
  ];

  clickMyOrderHistory = [
    { loc: acMyOrder, action: 'click' },
    { loc: acMyOrderAccordion, action: 'existsClickAction' },
    { loc: acMyOrderViewDetails, action: 'existsClickAction' },
    { loc: acMyOrderViewDeatils1, action: 'existsClickAction' },
    { action: 'screenshot' },
  ];

  clickPaymentInfoLink = [
    { loc: clickOnAccBillPayInfoLink, action: 'click' },
    { action: 'screenshot' },
  ];

  clickPaymentInfoLinkOneMoreTime = [
    { loc: clkOnAccBillPayInfoOneMoreTime, action: 'click' },
    { action: 'screenshot' },
  ];

  clickNewBillingAddressLink = [
    { loc: clickOnAccountAddNewBillAddLink, action: 'click' },
    { action: 'screenshot' },
  ];

  clickNewBillingAddressLinkOneMoreTime = [
    { loc: clkOnAccAddNewBillAddOneMoretime, action: 'click' },
    { action: 'screenshot' },
  ];

  clickBiilingAddPaymentMethod = [
    { loc: clickOnAccBiilingAddPayMtd, action: 'click' },
    { action: 'screenshot' },
  ];

  clickNewCreditCardButton = [
    { loc: clkOnAccountAddNewCreditCardBtn, action: 'click' },
    { action: 'screenshot' },
  ];

  clickMakeDefaultCreditCard = [
    { loc: clickOnAccountMakeDefaultCC, action: 'click' },
    { action: 'screenshot' },
  ];

  clickCreditCardSubmitButton = [
    { loc: clickOnAccountCreditCardSubBtn, action: 'click' },
    { action: 'screenshot' },
  ];

  clickMobileBrandLogo = [
    { loc: acMobilBrandLogo, action: 'click' },
    { action: 'screenshot' },
  ];

  clickMobileHamburgerIcon = [
    { loc: clickOnMobileHamburgerIcon, action: 'click' },
    { action: 'screenshot' },
  ];

  clickMobileLoginLink = [
    { loc: clickOnAccountMobileLoginLink, action: 'click' },
    { action: 'screenshot' },
  ];

  clickMobileRegisterNowLink = [
    { loc: clickOnAccountMobileRegisterNowLink, action: 'click' },
    { action: 'screenshot' },
  ];

  clickMobileAddNewAddressButton = [
    { loc: clkOnAccMobileNewUserAddNewAddBtn, action: 'click' },
    { action: 'screenshot' },
  ];

  clickMobileManualAddressEntry = [
    { loc: acMobileManualAddressEntry, action: 'click' },
    { action: 'screenshot' },
  ];

  // clickMobileReturnUserAddNewAddressButton = [
  //   { loc: acMobileRuAddNewAddress, action: 'existsClickAction' },
  //   { action: 'screenshot' },
  // ];

  clickMobileAddressSubmitButton = [
    { loc: clickOnAccountMobileAddressSubBtn, action: 'click' },
    { action: 'screenshot' },
  ];

  clickMobileLoggedInProfileLink = [
    { loc: acMobileLoggedInProfileLink, action: 'tryCatchClick' },
    { action: 'screenshot' },
  ];

  clickMobileReturnUserLogInLink = [
    { loc: clickOnAccMobileLogInToSignInAsRU, action: 'click' },
    { action: 'screenshot' },
  ];

  clickMobileDeleteAddressLink = [
    { loc: acMobileDeleteAddress, action: 'click' },
    { loc: acMobileDeleteAddressConfirm, action: 'click' },
    { action: 'screenshot' },
  ];

  clickMobilePaymentInfo = [
    { loc: acMobilePaymentInfo, action: 'click' },
    { action: 'screenshot' },
  ];

  clickMobilePaymentInfoOneMoreTime = [
    { loc: acMobilePaymentInfo1, action: 'click' },
    { action: 'screenshot' },
  ];

  clickMobileBillingAddressLink = [
    { loc: acMobileAddNewBillingAddress, action: 'click' },
    { action: 'screenshot' },
  ];

  clickMobileBillingAddressLinkFirstTime = [
    { loc: acMobileAddNewBillingAddress1, action: 'click' },
    { action: 'screenshot' },
  ];

  clickMobileBillingAddressLinkSecondTime = [
    { loc: acMobileAddNewBillingAddress2, action: 'click' },
    { action: 'screenshot' },
  ];

  clickMobileBiilingAddPaymentMethod = [
    { loc: acMobileAddPaymentMethod, action: 'click' },
    { action: 'screenshot' },
  ];

  clickMobileAddNewCreditCardButton = [
    { loc: acMobileAddNewCreditCard, action: 'click' },
    { action: 'screenshot' },
  ];

  clickMobileBillingAddressBook = [
    { loc: clickOnAccMobileShipBillingAddBook, action: 'click' },
    { action: 'screenshot' },
  ];

  clickMobileOrderHistoryDetails = [
    { loc: acMobileMyOrder, action: 'existsClickAction' },
    { loc: acMobileMyOrderAccordion, action: 'existsClickAction' },
    { loc: acMobileMyOrderViewDetails, action: 'existsClickAction' },
    { action: 'screenshot' },
  ];

  clickMobileSignoutButton = [
    { loc: acMobileSignoutButton, action: 'click' },
    { action: 'screenshot' },
  ];

  clickNewUserRegisterButton = [
    { loc: clkOnNURegAccBtnInAccSignInPage, action: 'click' },
    { action: 'screenshot' },
  ];

  clickIncreaseQuantity = [
    { loc: increaseQuantityOnClick, action: 'click' },
    { action: 'screenshot' },
  ];
}

function makeEmail() {
  var realEmailid = 'elcprodsanity+account';
  var strValues = 'abcdefg12345';
  var strEmail = '';
  var strTmp;
  for (let i = 0; i < 3; i++) {
    strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
    strEmail = strEmail + strTmp;
  }
  strTmp = '';
  strEmail = strEmail + '@';
  for (let j = 0; j < 8; j++) {
    strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
    strEmail = strEmail + strTmp;
  }
  strEmail = realEmailid + strEmail + 'test.com';
  return strEmail;
}

function guestUserEmail() {
  var realEmailid = 'elcprodsanity+GuestUser';
  var strValues = 'abcdefg12345';
  var strEmail = '';
  var strTmp;
  for (let i = 0; i < 3; i++) {
    strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
    strEmail = strEmail + strTmp;
  }
  strTmp = '';
  strEmail = realEmailid + strEmail + '@test.com';
  return strEmail;
}

function newUserEmail() {
  var realEmailid = 'elcprodsanity+NewUser';
  var strValues = 'abcdefg12345';
  var strEmail = '';
  var strTmp;
  for (let i = 0; i < 3; i++) {
    strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
    strEmail = strEmail + strTmp;
  }
  strTmp = '';
  strEmail = realEmailid + strEmail + '@test.com';
  return strEmail;
}

function returnUserID() {
  return ruIds[Math.floor(Math.random() * ruIds.length)];
}

function savedCardsReturnUserID() {
  return scRuIds[Math.floor(Math.random() * scRuIds.length)];
}

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

async function returnUsePassword() {
  if (acReturnUserPasswordETE !== '') {
    await t.write(
      CommonData.NPWD,
      t.into(t.textBox({ 'data-test-id': acReturnUserPasswordETE }))
    );
  }
  gauge.screenshot();
}

async function deletingProductsInCart() {
  await t.goto(
    siteDefinition.executionContext.adminUrl + '/shared/deletecart.tmpl',
    {
      waitForEvents: ['DOMContentLoaded'],
    }
  );
  gauge.screenshot();
  await t.reload({ waitForEvents: ['DOMContentLoaded'] });
  gauge.screenshot();
  await t.goto(siteDefinition.executionContext.url);
}

async function gotoProdCat(plat) {
  for (i = 0; i < skuIds.length; i++) {
    await t.goto(
      siteDefinition.executionContext.adminUrl + prodcaturl + skuIds[i],
      {
        waitForEvents: ['DOMContentLoaded'],
      }
    );
    const isShoppableValue = await (await t.$(isShoppable)).text();
    const isDisplayableValue = await (await t.$(isDisplayable)).text();
    if (isShoppableValue === '1' && isDisplayableValue !== '0') {
      gauge.message(messages.productSku + skuIds[i] + messages.skuAvailable);
      if (await (await t.$(displayableProduct)).exists()) {
        let url = await (await t.$(displayableProduct)).attribute('href');
        gauge.message(url);
        await t.goto(siteDefinition.executionContext.url + url, {
          waitForEvents: ['DOMContentLoaded'],
        });
        gauge.screenshot();
        break;
      } else {
        const nodisplayableProduct = await (
          await t.$(noDisplayableProductError)
        ).text();
        gauge.message(nodisplayableProduct);
      }
    } else {
      gauge.message(messages.productSku + skuIds[i] + messages.skuNotAvailable);
      notAvailableProductsCount++;
    }
  }
  if (notAvailableProductsCount === skuIds.length) {
    assert(false, messages.noProductAvailable);
  }
}

async function validateInSPP(SPPpageHeader) {
  if (await (await t.$(SPPpageHeader)).exists(100, 30000)) {
    assert(true);
    gauge.message('In SPP.');
  } else {
    gauge.message(`PDP is not loaded for 30 secs`);
    assert(!matchCondition, `PDP is not loaded for 30 secs`);
  }
}

async function addProductToBag() {
  if (javaAlertPopup !== '') {
    alert(javaAlertPopup, async () => await t.accept());
  }
  let AddtoBagExist = 0;
  for (let i = 0; i < 2; i++) {
    if (await (await t.$(addToBagSPP)).exists(100, 30000)) {
      if ((await (await t.$(addToBagSPP)).isDisabled()) !== true) {
        await t.evaluate(
          await t.$(addToBagSPP, { waitForEvents: ['loadEventFired'] }),
          (ele) => ele.focus()
        );
        await t.evaluate(
          await t.$(addToBagSPP, { waitForEvents: ['loadEventFired'] }),
          (ele) => ele.click()
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

async function clickOnCartOverlay(Bagicon) {
  let cartval = 0;
  let cartexists = 0;
  for (i = 0; i < 3; i++) {
    if (await (await t.$(cartcountvalue)).exists(100, 30000)) {
      var cartcount = await (await t.$(cartcountvalue)).text();
      gauge.message('Cart count value =' + cartcount);
      if (!(parseInt(cartcount) === 0 || cartcount === '')) {
        assert(true);
        await t.evaluate(
          await t.$(Bagicon, { waitForEvents: ['loadEventFired'] }),
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
      await t.$(Bagicon, { waitForEvents: ['loadEventFired'] }),
      (ele) => ele.click()
    );
  }
}

async function validateInCartPage(emptycartmsg) {
  var CPurl = await t.currentURL();
  if (CPurl.includes(cartpageURLText)) {
    gauge.message('Navigated to cart page as expected.');
    gauge.screenshot();
    if (await (await t.$(emptycartmsg)).exists(100, 20000)) {
      gauge.message('No Product added to cart.');
      noProductinCart++;
      if (noProductinCart === 1) {
        gauge.message(messages.validateCartMessage);
        assert(false, messages.productAddedCart);
      }
    } else {
      gauge.message('Product added to cart.');
    }
  } else {
    assert(false, 'Expected to be navigated to Cartpage but it is not.');
  }
}

async function clickAddToCart(plat) {
  for (i = 0; i < skuIds.length; i++) {
    await t.goto(
      siteDefinition.executionContext.adminUrl + prodcaturl + skuIds[i],
      {
        waitForEvents: ['DOMContentLoaded'],
      }
    );
    gauge.screenshot();
    if (await (await t.$(isShoppable)).exists()) {
      var isShoppableValue = await (await t.$(isShoppable)).text();
      if (isShoppableValue === '1') {
        gauge.message(messages.productSku + skuIds[i] + messages.skuAvailable);
        if (envir === 'PROD' || envir === 'PREPROD') {
          await t.evaluate(await t.$(addToCart), (ele) => ele.click(), {
            waitForNavigation: false,
          });
          for (let i = 0; i <= 2; i++) {
            if (!(await (await t.$(checkoutButtonId)).exists(200, 30000))) {
              gauge.message(
                'View Cart Page is not loaded yet. Reloading the page...'
              );
              await t.reload();
              await t.waitFor(await t.$(checkoutButtonId), waittingTime);
            } else {
              break;
            }
          }
        } else {
          let elements = await (await t.$(addToCart)).elements();
          let attributePromises = elements.map((e) => {
            return t.evaluate(e, (elem) => {
              return elem.getAttribute('href');
            });
          });
          var viewCartUrl = await Promise.all(attributePromises);
          await t.goto(siteDefinition.executionContext.url + viewCartUrl, {
            waitForEvents: ['DOMContentLoaded'],
          });
          gauge.screenshot();
        }
        break;
      } else {
        gauge.message(
          messages.productSku + skuIds[i] + messages.skuNotAvailable
        );
        notAvailableProductsCount++;
      }
    } else {
      gauge.message(skuIds[i] + ' is not a valid SKU ID');
    }
  }
  if (notAvailableProductsCount === skuIds.length) {
    gauge.message(messages.noProductAvailable);
    assert(!matchCondition);
  }
}

async function validatecartpage(plat) {
  if (plat === 'PC') {
    await validateInCartPage(removeAssert);
  } else {
    await validateInCartPage(removeAssertMob);
  }
}
function updateQueryStringParameter(uri, key, value) {
  var re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i');
  var separator = uri.indexOf('?') !== -1 ? '&' : '?';
  if (uri.match(re)) {
    return uri.replace(re, '$1' + key + '=' + value + '$2');
  } else {
    return uri + separator + key + '=' + value;
  }
}

async function addDifferentProductsToCart(plat) {
  var prodCount = 0;
  for (i = 0; i < skuIds.length; i++) {
    await t.goto(
      siteDefinition.executionContext.adminUrl + prodcaturl + skuIds[i],
      {
        waitForEvents: ['DOMContentLoaded'],
      }
    );
    if (await (await t.$(isShoppable)).exists()) {
      var isShoppableValue = await (await t.$(isShoppable)).text();
      if (isShoppableValue === '1') {
        gauge.message(messages.productSku + skuIds[i] + messages.skuAvailable);
        let elements = await (await t.$(addToCartMessage)).elements();
        let attributePromises = elements.map((e) => {
          return t.evaluate(e, (elem) => {
            return elem.getAttribute('href');
          });
        });
        var viewCartUrl = await Promise.all(attributePromises);
        await t.goto(siteDefinition.executionContext.url + viewCartUrl, {
          waitForEvents: ['DOMContentLoaded'],
        });
        var carturl = await t.currentURL();
        var newqtyurl = await updateQueryStringParameter(
          carturl,
          'QTY',
          qtyLimited
        );
        await t.goto(newqtyurl, { waitForEvents: ['DOMContentLoaded'] });
        gauge.message(newqtyurl);
        prodCount++;
        if (prodCount === 2) {
          break;
        }
      } else {
        gauge.message(
          messages.productSku + skuIds[i] + messages.skuNotAvailable
        );
        notAvailableProductsCount++;
      }
    } else {
      gauge.message(skuIds[i] + ' is not a valid SKU ID');
    }
  }
  if (notAvailableProductsCount === skuIds.length) {
    gauge.message(messages.noProductAvailable);
    assert(!matchCondition);
  }
}

async function assertRemoveProduct(plat) {
  if (plat === 'PC') {
    if (removeAssert !== '') {
      var Cartempttxt = await (await t.$(removeAssert)).text();
      if (Cartempttxt.includes(cartEmptAssertTxt)) {
        assert(true);
        gauge.screenshot();
        gauge.message(messages.productRemoveCart);
        gauge.message(Cartempttxt);
      } else {
        gauge.message(messages.productNotRemoveCart);
        assert(false);
      }
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }

  if (plat === 'MOBILE') {
    if (removeAssertMob !== '') {
      var Cartempttxtmob = await (await t.$(removeAssertMob)).text();
      if (Cartempttxtmob.includes(cartEmptAssertTxtMob)) {
        assert(true);
        gauge.screenshot();
        gauge.message(messages.productRemoveCart);
        gauge.message(Cartempttxtmob);
      } else {
        gauge.message(messages.productNotRemoveCart);
        assert(false);
      }
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
}

async function selectSample() {
  if (clickOnSelectSampleButton !== '') {
    // Click On Sample Page1 Continue Button is applicable for few Brand/Locale/platform(PC/MOB) */
    try {
      await t.evaluate(await t.$(clickOnSelectSampleButton), (ele) =>
        ele.click()
      );
    } catch (e) {
      gauge.message(messages.noSamplePage);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function clickOnSamplePageContinueButton(plat) {
  if (plat === 'PC') {
    if (clickOnSamplePage1ContinueButton !== '') {
      /**Click On Sample Page1 Continue Button is applicable for few Brand/Locale/platform(PC/MOB) */
      try {
        await t.evaluate(await t.$(clickOnSamplePage1ContinueButton), (ele) =>
          ele.click()
        );
        if (clickOnSamplePage2ContinueButton !== '') {
          await t.evaluate(await t.$(clickOnSamplePage2ContinueButton), (ele) =>
            ele.click()
          );
        }
      } catch (e) {
        gauge.message(messages.noSamplePage);
      }
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }

  if (plat === 'MOBILE') {
    if (clickOnMOBSamplePg1CntBtn !== '') {
      /**Click On MOB Sample Page1 Continue Button is applicable for few Brand/Locale/platform(PC/MOB) */
      try {
        await t.evaluate(await t.$(clickOnMOBSamplePg1CntBtn), (ele) =>
          ele.click()
        );
        if (clickOnMOBSamplePg2CntBtn !== '') {
          await t.evaluate(await t.$(clickOnMOBSamplePg2CntBtn), (ele) =>
            ele.click()
          );
        }
      } catch (e) {
        gauge.message(messages.noSamplePage);
      }
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
}

async function cartLimitAssert() {
  if (cartlimit !== '') {
    if (await (await t.$(cartlimit)).exists()) {
      var cartlimiterror = await (await t.$(cartlimit)).text();
      if (cartlimiterror.toUpperCase().includes(cartLimittxt.toUpperCase())) {
        assert(true);
        gauge.message(messages.exceedsLimit);
        gauge.message(cartlimiterror);
      } else {
        gauge.message(messages.exceedsMaxLimit);
        gauge.message('Expected Error Message: ' + cartLimittxt);
        gauge.message('Actual Error Message: ' + cartlimiterror);
        assert(false);
      }
    } else {
      gauge.message(messages.maxCartLimit);
      assert(false, messages.maxCartLimit);
    }
  }
  if (checkoutButtonId !== '') {
    if (await (await t.$(checkoutButtonId)).exists()) {
      if (await (await t.$(checkoutButtonId)).isDisabled()) {
        assert(true);
        gauge.message('Checkout btn got disabled');
      } else {
        gauge.message('Checkout btn is not disabled');
        assert(false);
      }
    } else {
      assert(true);
      gauge.message('Checkout btn is not visible');
    }
  }
}
async function goToAccountMob() {
  if (acMobileGnav !== '') {
    if (await (await t.$(acMobileGnav)).exists()) {
      await t.evaluate(await t.$(acMobileGnav), (ele) => {
        ele.focus(), ele.click();
      });
      await t.waitFor(waittingTime);
    }
  }
}

async function clickOnAddressButtonMob() {
  if (acMobileRuAddNewAddress !== '') {
    if (await (await t.$(acMobileRuAddNewAddress)).exists()) {
      await t.evaluate(await t.$(acMobileRuAddNewAddress), (ele) => {
        ele.focus(), ele.click();
      });
      await t.waitFor(waittingTime);
    }
  }
}

async function clickOnEditButtonMob() {
  if (clkOnAccRUEditAddressLink !== '') {
    if (await (await t.$(clkOnAccRUEditAddressLink)).exists()) {
      await t.evaluate(await t.$(clkOnAccRUEditAddressLink), (ele) => {
        ele.focus(), ele.click();
      });
      await t.waitFor(waittingTime);
    }
  }
}

async function enterShippingDetails(user) {
  if (user === 'NU' || user === 'GU') {
    await gen.ElementAction(shippingDetails);
    gauge.screenshot();
  }
  if (user === 'RU' || user === 'SCRU') {
    if (await (await t.$(clkOnShipDetCntBtn)).exists(100, 30000)) {
      gauge.screenshot();
      await gen.ElementAction(ruShippingDetails);
      // await gen.ElementAction(shippingDetails);
      gauge.screenshot();
    }
  }
}

async function enterPaymentDetails(user) {
  if (user === 'NU' || user === 'GU' || user === 'RU') {
    await gen.ElementAction(paymentDetails);
    gauge.screenshot();
  }
  if (user === 'SCRU') {
    await gen.ElementAction(savedCardPaymentDetails);
    gauge.screenshot();
  }
}

async function enterGuestUserEmailId() {
  if (newUserIdRadioButton !== '') {
    await t.evaluate(await t.$(newUserIdRadioButton), (ele) => ele.click());
  } else {
    gauge.message('Radio button is not applicable for this brand');
  }
  if (enterGuestUserNewUserId !== '') {
    let guestUserEmailId = guestUserEmail();
    try {
      await t.click(await t.$(popupClose));
    } catch (e) {
      gauge.message(messages.popup);
    }
    await t.evaluate(await t.$(enterGuestUserNewUserId), (ele) => ele.focus());
    await t.write(guestUserEmailId, t.into(await t.$(enterGuestUserNewUserId)));
    gauge.screenshot();
    gauge.message('Guest user Email ID: ' + guestUserEmailId);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}
async function enterNewUserEmailId() {
  if (newUserIdRadioButton !== '') {
    await t.evaluate(await t.$(newUserIdRadioButton), (ele) => ele.click());
  } else {
    gauge.message('Radio button is not applicable for this brand');
  }
  if (enterGuestUserNewUserId !== '') {
    let newUserEmailId = newUserEmail();
    try {
      await t.click(await t.$(popupClose));
    } catch (e) {
      gauge.message(messages.popup);
    }
    await t.evaluate(await t.$(enterGuestUserNewUserId), (ele) => ele.focus());
    await t.write(newUserEmailId, t.into(await t.$(enterGuestUserNewUserId)));
    gauge.screenshot();
    gauge.message('New user Email ID: ' + newUserEmailId);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function enterReturnUserEmailId() {
  if (enterReturnUserId !== '') {
    const retUserMailId = returnUserID();
    await t.write(retUserMailId, t.into(await t.$(enterReturnUserId)));
    gauge.screenshot();
    gauge.message('Return user Email ID: ' + retUserMailId);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function clickOnPlaceOrder() {
  if (clkOnGuUsrNewUserSignupPlaceOrd !== '') {
    await t.evaluate(
      await t.$(clkOnGuUsrNewUserSignupPlaceOrd),
      (ele) => ele.click(),
      { waitForEvents: ['DOMContentLoaded'] }
    );
    if (await (await t.$(orderConfirmationMsgid)).exists()) {
      assert(true);
      var confirmurl = await t.currentURL();
      var GetOrderNumber = await (await t.$(orderConfirmationMsgid)).text();
      assert(confirmurl.includes(CommonData.CHECKOUTCONFIRMURL));
      gauge.message('Order placed successfully');
      gauge.message(GetOrderNumber);
      console.log(GetOrderNumber);
      gauge.screenshot();
    } else {
      gauge.message('Order not placed');
      assert(false);
    }
    gauge.screenshot();
  } else if (enterOTP !== '') {
    if (await (await t.$(enterOTP)).isVisible()) {
      await t.write(CommonData.ENTEROTP, t.into(await t.$(enterOTP)));
      await t.evaluate(await t.$(otpSubmitButton), (ele) => ele.click(), {
        waitForEvents: ['DOMContentLoaded'],
      });
      if (await (await t.$(orderConfirmationMsgid)).isVisible()) {
        var confirmurl = await t.currentURL();
        var GetOrderNumber = await (await t.$(orderConfirmationMsgid)).text();
        if (confirmurl.includes(CommonData.CHECKOUTCONFIRMURL)) {
          assert(true);
          gauge.message('Order Created successfully');
          gauge.message(GetOrderNumber);
          console.log(GetOrderNumber);
        } else {
          gauge.message('Order not Created');
          assert(false);
        }
      }
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function clickOnCreateAccountIndexPage() {
  if (newUserCreateAccountButton !== '') {
    if (
      !(await (await t.$(newUserCreateAccountButton)).isDisabled(100, 30000))
    ) {
      gauge.message('Register button is Available to click');
    }
    await t.evaluate(await t.$(newUserCreateAccountButton), (ele) =>
      ele.focus()
    );
    await t.click(await t.$(newUserCreateAccountButton), {
      waitForNavigation: false,
    });
    if (await (await t.$(clickOnAccountSignoutButton)).exists(100, 30000)) {
      let confirmurl1 = await t.currentURL();
      if (confirmurl1.includes(CommonData.ACCOUNTCONFIRMURL)) {
        assert(true);
        gauge.message('Account Created successfully');
      } else {
        gauge.message('Account not Created');
        assert(false);
      }
      gauge.screenshot();
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function clickOnMobileStickypanelButton() {
  if (mobileStickyPanelSignin !== '') {
    await t.waitFor(waittingTime);
    await t.evaluate(
      await t.$(mobileStickyPanelSignin, {
        waitForEvents: ['DOMContentLoaded'],
      }),
      (ele) => ele.click(),
      { waitForNavigation: false }
    );
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function increaseQuantityWithClick() {
  if (increaseQTYWithClickMethod !== '') {
    await t.click(await t.$(increaseQTYWithClickMethod));
    await t.click(CommonData.SelectQTY);
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function increaseQuantityWithDropdown() {
  if (increaseQTYWithDropdownMethod !== '') {
    await t
      .dropDown({ name: increaseQTYWithDropdownMethod })
      .select(CommonData.SelectQTY);
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function clickValidOfferButton() {
  if (clickOnValidOfferButton !== '') {
    await t.evaluate(await t.$(clickOnValidOfferButton), (ele) => ele.click());
    gauge.screenshot();
    var ExpectedValidOfferMsg = await (await t.$(validOfferMsg)).text();
    if (
      ExpectedValidOfferMsg.toUpperCase().search(
        CommonData.VALIDOFFERMSG.toUpperCase()
      ) !== -1
    ) {
      assert(matchCondition);
      gauge.message('The discount has been applied is expected.');
    } else {
      gauge.message('The discount has been applied is not expected.');
      assert(!matchCondition);
    }
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function clickInvalidOfferButton() {
  if (clickOnInValidOfferButton !== '') {
    await t.evaluate(await t.$(clickOnInValidOfferButton), (ele) =>
      ele.click()
    );
    gauge.screenshot();
    var ExpectedINValidOfferMsg = await (await t.$(inValidOfferMsg)).text();
    if (
      ExpectedINValidOfferMsg.toUpperCase().search(
        CommonData.INVALIDOFFERMSG.toUpperCase()
      ) !== -1
    ) {
      assert(matchCondition);
      gauge.message(
        'The coupon code test_global_percent_discountt is not valid. is expected'
      );
    } else {
      gauge.message(
        'The coupon code test_global_percent_discountt is not valid. is not expected'
      );
      assert(!matchCondition);
    }
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function clickOnRemoveProductLink() {
  if (removeProduct !== '') {
    cartprodname = await (await t.$(cartproductpath)).text();
    await t.evaluate(await t.$(removeProduct), (ele) => ele.click());
    gauge.screenshot();
    if (await t.text(cartproductpath).exists()) {
      assert(false, messages.removedUnsuccessfully);
    } else {
      assert(true);
      gauge.message(cartprodname);
      gauge.message(messages.removedSuccessfully);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function removeProductAssert(plat) {
  if (plat === 'PC') {
    if (await t.text(CommonData.CARTEMPTYMSG).exists()) {
      assert(true);
      gauge.message(messages.removedSuccessfully);
    } else {
      assert(false, messages.removedUnsuccessfully);
    }
  }

  if (plat === 'MOBILE') {
    if (await t.text(CommonData.CARTEMPTYMSGMOB).exists()) {
      assert(true);
      gauge.message(messages.removedSuccessfully);
    } else {
      assert(false, messages.removedUnsuccessfully);
    }
  }
}

async function gotoAccountSigninurl(plat) {
  if (navigateToAccountSigninurl !== '') {
    await t.goto(
      siteDefinition.executionContext.url + navigateToAccountSigninurl,
      {
        waitForEvents: ['DOMContentLoaded'],
      }
    );
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function enterAccountRegistrationDetails() {
  let Accountregistration = 0;
  if (acRegistrationFirstName !== '') {
    await t.write(
      CommonData.FIRSTNAME,
      t.into(t.textBox({ 'data-test-id': acRegistrationFirstName }))
    );
    Accountregistration++;
  }
  if (acRegistrationLastName !== '') {
    await t.write(
      CommonData.LASTNAME,
      t.into(t.textBox({ 'data-test-id': acRegistrationLastName }))
    );
    Accountregistration++;
  }
  if (acRegisterEmailId !== '') {
    await t.write(
      makeEmail(),
      t.into(t.textBox({ 'data-test-id': acRegisterEmailId }))
    );
    Accountregistration++;
  }
  if (acRegisterPWD !== '') {
    await t.write(
      CommonData.NPWD,
      t.into(t.textBox({ 'data-test-id': acRegisterPWD }))
    );
    Accountregistration++;
  }
  if (acRegisterEmailId1 !== '') {
    await t.write(makeEmail(), t.into(t.textBox({ id: acRegisterEmailId1 })));
    Accountregistration++;
  }
  if (acRegisterPWD1 !== '') {
    await t.write(CommonData.NPWD, t.into(t.textBox({ id: acRegisterPWD1 })));
    Accountregistration++;
  }
  if (acRegisterationTerms !== '') {
    await t.evaluate(t.checkBox({ id: acRegisterationTerms }), (ele) =>
      ele.click()
    );
    Accountregistration++;
  }
  if (acRegisterationTerms1 !== '') {
    await t.evaluate(
      t.checkBox({ 'data-test-id': acRegisterationTerms1 }),
      (ele) => ele.click()
    );
    Accountregistration++;
  }
  if (acRegisterButton !== '') {
    await t.evaluate(await t.$(acRegisterButton), (ele) => ele.click());
    Accountregistration++;
  }
  if (acRegisterButton1 !== '') {
    await t.evaluate(await t.$(acRegisterButton1), (ele) => ele.click());
    Accountregistration++;
  }
  if (Accountregistration === 0) {
    gauge.message(messages.stepNotApplicable);
  }
  gauge.screenshot();
}

async function enterDeliveryAddressDetails() {
  let Entershippingdetails = 0;
  if (acEnterFirstName !== '') {
    await t.write(
      CommonData.FIRSTNAME,
      t.into(t.textBox({ 'data-test-id': acEnterFirstName }))
    );
    Entershippingdetails++;
  }
  if (acEnterLastName !== '') {
    await t.write(
      CommonData.LASTNAME,
      t.into(t.textBox({ 'data-test-id': acEnterLastName }))
    );
    Entershippingdetails++;
  }
  if (acManualAddressEntry !== '') {
    /** For New user Account Manually Address link is not applicable for SB Brand/Locale/platform(PC/MOB) */
    try {
      await t.evaluate(await t.$(acManualAddressEntry), (ele) => ele.click());
      Entershippingdetails++;
    } catch (e) {
      gauge.message(
        'There is no click Manually Address link on the page and hence this step is skipped'
      );
    }
  }
  if (acEnterAddress1 !== '') {
    await t.write(
      CommonData.ADDRESS1,
      t.into(t.textBox({ 'data-test-id': acEnterAddress1 }))
    );
    Entershippingdetails++;
  }
  if (acEnterAddress2 !== '') {
    await t.write(
      CommonData.ADDRESS2,
      t.into(t.textBox({ 'data-test-id': acEnterAddress2 }))
    );
    Entershippingdetails++;
  }
  if (acEnterZipCode !== '') {
    await t.write(
      CommonData.ZIPCODE,
      t.into(t.textBox({ 'data-test-id': acEnterZipCode }))
    );
    Entershippingdetails++;
  }
  if (acEnterPhone !== '') {
    await t.write(
      CommonData.PHONE,
      t.into(t.textBox({ 'data-test-id': acEnterPhone }))
    );
    Entershippingdetails++;
  }
  if (acEnterCity !== '') {
    await t.write(
      CommonData.CITY,
      t.into(t.textBox({ 'data-test-id': acEnterCity }))
    );
    Entershippingdetails++;
  }
  if (acEnterAddress3 !== '') {
    await t.write(
      CommonData.ADDRESS3,
      t.into(t.textBox({ 'data-test-id': acEnterAddress3 }))
    );
    Entershippingdetails++;
  }
  if (acEnterAddress4 !== '') {
    await t.write(
      CommonData.ADDRESS4,
      t.into(t.textBox({ 'data-test-id': acEnterAddress4 }))
    );
    Entershippingdetails++;
  }
  if (Entershippingdetails === 0) {
    gauge.message(messages.stepNotApplicable);
  }

  gauge.screenshot();
}

async function accountSignout() {
  var ExpectedACSignoutTextId = await (await t.$(accountSignoutAssert)).text();
  if (
    ExpectedACSignoutTextId.toUpperCase().search(
      CommonData.SIGNOUTASSERT.toUpperCase()
    ) !== -1
  ) {
    gauge.screenshot();
    assert(matchCondition);
    gauge.message(messages.signoutExpected);
  } else {
    gauge.message(messages.signoutNotExpected);
    assert(!matchCondition);
  }
}

async function enterReturnUserLoginDetails() {
  if (acReturnUserEmailId !== '') {
    await t.write(
      CommonData.ACRID,
      t.into(t.textBox({ 'data-test-id': acReturnUserEmailId }))
    );
    gauge.screenshot();
  }
  if (acReturnUserPWD !== '') {
    await t.write(
      CommonData.NPWD,
      t.into(t.textBox({ 'data-test-id': acReturnUserPWD }))
    );
  }
  if (acReturnUserLoginButton !== '') {
    await t.evaluate(await t.$(acReturnUserLoginButton), (ele) => ele.click());
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function enterReturnUserEditShippingDetails() {
  let Editshippingdetails = 0;
  if (acEnterFirstName !== '') {
    await t.write(
      CommonData.FIRSTNAME,
      t.into(t.textBox({ 'data-test-id': acEnterFirstName }))
    );
    Editshippingdetails++;
  }
  if (acEnterLastName !== '') {
    await t.write(
      CommonData.LASTNAME,
      t.into(t.textBox({ 'data-test-id': acEnterLastName }))
    );
    Editshippingdetails++;
  }
  if (Editshippingdetails === 0) {
    gauge.message(messages.stepNotApplicable);
  }
}

async function enterCreditCardDetails() {
  let Creditcarddetails = 0;
  if (acSelectCardType !== '') {
    //await t.evaluate(await t.$(ACSelectCardType), ele => ele.click());
    await t.click(acSelectCardType);
    await t.click(CommonData.CARDTYPE);
    Creditcarddetails++;
  }
  if (acSelectCardTypeDropdown !== '') {
    await t
      .dropDown({ id: acSelectCardTypeDropdown })
      .select(CommonData.CARDTYPE);
    Creditcarddetails++;
  }
  if (acEnterCreditCardNumber !== '') {
    await t.write(
      CommonData.CREDITCARDFIRSTEIGHTNUMBERS +
        CommonData.CREDITCARDLASTEIGHTNUMBERS,
      t.into(t.textBox({ id: acEnterCreditCardNumber }))
    );
    Creditcarddetails++;
  }
  if (acEnterCVVNumber !== '') {
    await t.write(
      CommonData.CVV,
      t.into(await t.textBox({ id: acEnterCVVNumber }))
    );
    Creditcarddetails++;
  }
  if (acEnterExpMonth !== '') {
    await t.click(acEnterExpMonth);
    await t.click(CommonData.CCMONTH);
    Creditcarddetails++;
  }
  if (acEnterExpYear !== '') {
    await t.click(acEnterExpYear);
    await t.click(CommonData.YEAR);
    Creditcarddetails++;
  }
  if (acEnterExpMonthDropdown !== '') {
    await t
      .dropDown({ id: acEnterExpMonthDropdown })
      .select(CommonData.CCMONTH);
    Creditcarddetails++;
  }
  if (acEnterExpYearDropdown !== '') {
    await t.dropDown({ id: acEnterExpYearDropdown }).select(CommonData.YEAR);
    Creditcarddetails++;
  }
  if (Creditcarddetails === 0) {
    gauge.message(messages.stepNotApplicable);
  }
  gauge.screenshot();
}

async function clickMobileAccountSigninLink(plat) {
  if (navigateToMobileAccountSigninurl !== '') {
    await t.goto(
      siteDefinition.executionContext.url + navigateToMobileAccountSigninurl,
      {
        waitForEvents: ['DOMContentLoaded'],
      }
    );
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function clickDeleteAddressPopup() {
  if (acMobileDeleteAddressPopup !== '') {
    await t.confirm(
      CommonData.AlertMessageInPopup,
      async () => await t.accept()
    );
    await t.evaluate(await t.$(acMobileDeleteAddressPopup), (ele) =>
      ele.click()
    );
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function mobileSignoutAssert() {
  var ExpectedACSignoutTextId = await (await t.$(acMobileSignoutAssert)).text();
  if (
    ExpectedACSignoutTextId.toUpperCase().search(
      CommonData.SIGNOUTASSERT.toUpperCase()
    ) !== -1
  ) {
    gauge.screenshot();
    assert(matchCondition);
    gauge.message(messages.signoutExpected);
  } else {
    gauge.message(messages.signoutNotExpected);
    assert(!matchCondition);
  }
}

async function enterReturnUserEmailIdSavedCards() {
  if (enterSavedCardsReturnUserID !== '') {
    let returnUserEmail = savedCardsReturnUserID();
    await t.write(
      returnUserEmail,
      t.into(await t.$(enterSavedCardsReturnUserID))
    );
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function addProductFromRandomUrl(platform) {
  await gen.randomSkuOrProdCatFlow(
    randomSkuUrl,
    skuLink,
    siteDefinition.executionContext.adminUrl,
    siteDefinition.executionContext.url,
    isShoppable,
    isDisplayable,
    displayableProduct,
    noDisplayableProductError,
    prodcaturl,
    skuIds,
    addToBagSPP
  );
  if (platform === 'PC') {
    await validateInSPP(sppPageProdHeader);
  } else {
    await validateInSPP(sppPageProdHeaderMobile);
  }

  await gen.ElementAction(clickCookieRejectButton);
  await addProductToBag();

  if (platform.toUpperCase() === 'PC') {
    await clickOnCartOverlay(clickCartpageLink);
  } else {
    await clickOnCartOverlay(clickCartpageLinkMobile);
  }
}

async function gotoHomepageValidation() {
  const response = await t.goto(siteDefinition.executionContext.url);
  if (response.status.code === responseCode) {
    gauge.message('Navigated to Home page');
  } else {
    gauge.message(
      `The Homepage didn't return the 200 code, instead it returned the ${response.status.code} code, which is why it is not available`
    );
  }
  gauge.screenshot();
}

step('UKACCCHK AC LogIn ETE', async function () {
  await gen.ElementAction(clickLogInLink);
});

step('UKACCCHK Account Return User Login Button ETE', async function () {
  await gen.ElementAction(clickReturnUserLoginButton);
});

step('UKACCCHK Deleting products in cart page ETE', async function () {
  await deletingProductsInCart();
});

step('UKACCCHK AC Signout Button ETE', async function () {
  await gen.ElementAction(clickSignoutButton);
});

step('UKACCCHK AC Register Now ETE', async function () {
  await gen.ElementAction(clickAccountRegister);
});

step(
  'UKACCCHK Click On Cart Merge Checkout Continue Button and Procced to shipping Details Page',
  async function () {
    await gen.ElementAction(cartCheckoutContinueButton);
  }
);

step(
  'UKACCCHK Click On Cart Merge Sample Page Continue Button and Procced to Samples/SignIn Page',
  async function () {
    await gen.ElementAction(cartSamplePageContinueButton);
  }
);

// DB step
step('UKACCCHK Initialize Helix', async function () {
  // Initialize the selectors from DB
  await initFrameworkSettings();
});

step('UKACCCHK Configure Pre-Requisites', async function () {
  let platform = siteDefinition.executionContext.platform.toUpperCase();
  if (platform === 'MOBILE') {
    await t.emulateDevice(emulationDevice);
    gauge.message('Emulation device: ' + emulationDevice);
  }
  await Helper.setWindowSize(Util.ScreenSizes['1040p'], t);
  await Helper.setWAFCookie(siteDefinition, t);
  await Helper.setAkamaiBypass(siteDefinition, t);
  await Helper.setApiEnv(siteDefinition, t);
  await Helper.setShowErrorsCookie(siteDefinition, t);
  await Helper.setVarnishBypass(siteDefinition, t);
  await Helper.getPerlgemEnvCookie(siteDefinition, t);
  await Helper.setOtherCookies(siteDefinition, t);
  await Helper.setRcoGhostCookie(siteDefinition, t);
  await Helper.setRcoVulcanCookie(siteDefinition, t);
  await gotoHomepageValidation();
  await Helper.setTestOrderCookie(siteDefinition, t);
  await Helper.setRevisionTag(siteDefinition, t);
  await gen.ElementAction(clickCookieRejectButton);
  // await Helper.getAdminUrl(siteDefinition);
});

step(
  'UKACCCHK Verify that the user is able to add products to the cart successfully',
  async function () {
    let platform = siteDefinition.executionContext.platform.toUpperCase();
    let env = siteDefinition.executionContext.environment.toUpperCase();
    if (env !== 'INTX') {
      await addProductFromRandomUrl(platform);
    } else {
      await gen.randomSkuFlow(
        randomSkuUrl,
        siteDefinition.executionContext.adminUrl,
        siteDefinition.executionContext.url,
        addToCartVulcan,
        viewCartUrl
      );
    }
  }
);

step(
  'UKACCCHK Verify that the user is able to view and update the cart',
  async function () {
    let platform = siteDefinition.executionContext.platform.toUpperCase();
    await validatecartpage(platform);
    await gen.ElementAction(clickCookieRejectButton);
    await gen.ElementAction(clickCartPopupClose);
    await gen.getTransId(transId);
    await gen.ElementAction(clickOnCheckoutButton);
    await gen.ElementAction(clickOnOverlayCheckoutButton);
    await selectSample();
    await clickOnSamplePageContinueButton(platform);
    await gen.ElementAction(clickRandomPopupClose);
  }
);

step(
  'UKACCCHK Verify that the user is able to proceed to <user> Sign in successfully',
  async function (user) {
    if (user === 'GU') {
      await enterGuestUserEmailId();
    }
    if (user === 'NU') {
      await enterNewUserEmailId();
    }
    await gen.ElementAction(clickUserLink);
  }
);

step(
  'UKACCCHK Verify that the user is able to proceed to Saved Card Return User Sign in successfully',
  async function () {
    let platform = siteDefinition.executionContext.platform.toUpperCase();
    if (platform === 'MOBILE') {
      await gen.ElementAction(clickReturnUserRadioButton);
    }
    await gen.ElementAction(clickReturnUserLink);
    await enterReturnUserEmailIdSavedCards();
    await gen.ElementAction(enterReturnUserPassword);
    await gen.ElementAction(clickOnReturnUserButton);
    await gen.ElementAction(cartCheckoutContinueButton);
    await gen.ElementAction(cartSamplePageContinueButton);
  }
);

step(
  'UKACCCHK Verify that the user is able to enter the user shipping details successfully <user>',
  async function (user) {
    await enterShippingDetails(user);
  }
);

step(
  'UKACCCHK Verify that the user is able to select the payment method successfully <user>',
  async function (user) {
    await enterPaymentDetails(user);
  }
);

step(
  'UKACCCHK Verify that the user is able to place the order successfully',
  async function () {
    await gen.ElementAction(clickReviewRegisterTerms);
    await clickOnPlaceOrder();
  }
);

step(
  'UKACCCHK Verify that the user is able to create a new user account successfully',
  async function () {
    await gen.ElementAction(ClickOnNewUserCreateAccount);
    await gen.ElementAction(enterUserSigninPassword);
    await gen.ElementAction(ClickOnNewUserCreateTermsAndConditions);
    await clickOnCreateAccountIndexPage();
  }
);

step(
  'UKACCCHK Verify that the user is able to proceed to ReturnUser Sign in successfully',
  async function () {
    let platform = siteDefinition.executionContext.platform.toUpperCase();
    if (platform === 'MOBILE') {
      await gen.ElementAction(clickReturnUserRadioButton);
    }
    await gen.ElementAction(clickReturnUserLink);
    await enterReturnUserEmailId();
    await gen.ElementAction(enterReturnUserPassword);
    await gen.ElementAction(clickOnReturnUserButton);
    await gen.ElementAction(cartCheckoutContinueButton);
    await gen.ElementAction(cartSamplePageContinueButton);
  }
);

step(
  'UKACCCHK Verify that the user is able to proceed to ReturnUser place the order successfully',
  async function () {
    await gen.ElementAction(clickUnCheckingSavecreditcard);
    await clickOnPlaceOrder();
  }
);

step(
  'UKACCCHK Verify that the user is able to view and increase the quantity in cart page',
  async function () {
    let platform = siteDefinition.executionContext.platform.toUpperCase();
    await validatecartpage(platform);
    await increaseQuantityWithDropdown();
    await gen.ElementAction(clickIncreaseQuantity);
    await gen.ElementAction(enterToValidOfferCode);
    await clickValidOfferButton();
  }
);

step(
  'UKACCCHK Verify that the user is able to remove the product from cart page',
  async function () {
    await gen.ElementAction(clickOfferEditButton);
    await gen.ElementAction(enterToInvalidOfferCode);
    await clickInvalidOfferButton();
    await clickOnRemoveProductLink();
  }
);

step(
  'UKACCCHK Verify that user can create a new account by entering valid credentials',
  async function () {
    let platform = siteDefinition.executionContext.platform.toUpperCase();
    await gen.ElementAction(clickGnavSignInLink);
    await gotoAccountSigninurl(platform);
    await gen.ElementAction(clickAccountRegisterNowLink);
    await gen.ElementAction(clickCartPopupClose);
    await enterAccountRegistrationDetails();
  }
);

step(
  'UKACCCHK Verify that user can add a new shipping/billing address by entering valid details',
  async function () {
    await gen.ElementAction(clickAddressBookDetailsPage);
    await gen.ElementAction(clickAccountDetailsPage);
    await enterDeliveryAddressDetails();
    await gen.ElementAction(clickDeliveryAddressButton);
    await gen.ElementAction(clickAccountSignoutButton);
    await accountSignout();
  }
);

step(
  'UKACCCHK Verify that user can add a new shipping/billing address by entering valid details in Mobile',
  async function () {
    await gen.ElementAction(clickAddressBookDetailsPage);
    await gen.ElementAction(clickAccountDetailsPage);
    await enterDeliveryAddressDetails();
    await gen.ElementAction(clickDeliveryAddressButton);
    await goToAccountMob();
    await gen.ElementAction(clickMobileSignoutButton);
    await mobileSignoutAssert();
  }
);

step(
  'UKACCCHK Verify that registered user can sign in and view their order history',
  async function () {
    await gen.ElementAction(clickReturnUserLogInLink);
    await enterReturnUserLoginDetails();
    await gen.ElementAction(clickMyOrderHistory);
    await gen.ElementAction(clickAddressBookDetailsPage);
    await gen.ElementAction(clickDeleteAddressLink);
  }
);

step(
  'UKACCCHK Verify that user can add and edit shipping/billing address by entering valid details',
  async function () {
    let platform = siteDefinition.executionContext.platform.toUpperCase();
    if (platform === 'PC') {
      await gen.ElementAction(clickReturnUserAddressBookDetails);
    } else {
      await clickOnAddressButtonMob();
    }
    await enterDeliveryAddressDetails();
    await gen.ElementAction(clickReturnUserDevliveryAddress);
    await gen.ElementAction(clickReturnUserNewAddressLink);
    await clickOnEditButtonMob();
    await enterReturnUserEditShippingDetails();
    await gen.ElementAction(clickReturnUserSubmitButton);
  }
);

step(
  'UKACCCHK Verify that user can sign out of their account',
  async function () {
    let platform = siteDefinition.executionContext.platform.toUpperCase();
    if (platform === 'PC') {
      await gen.ElementAction(clickAccountSignoutButton);
      await accountSignout();
    } else {
      await gen.ElementAction(clickMobileHamburgerIcon);
      await gen.ElementAction(clickMobileLoggedInProfileLink);
      await gen.ElementAction(clickMobileSignoutButton);
      await mobileSignoutAssert();
    }
  }
);

step(
  'UKACCCHK Verify that return user can sign in and view their order history',
  async function () {
    await gen.ElementAction(clickMobileReturnUserLogInLink);
    await enterReturnUserLoginDetails();
    await gen.ElementAction(clickMobileOrderHistoryDetails);
    await gen.ElementAction(clickMobileHamburgerIcon);
    await gen.ElementAction(clickMobileLoggedInProfileLink);
  }
);

step(
  'UKACCCHK Verify that return user nvigate to address details Page',
  async function () {
    await gen.ElementAction(clickMobileBillingAddressBook);
    await gen.ElementAction(clickMobileDeleteAddressLink);
    await clickDeleteAddressPopup();
  }
);

// If cart popup's id is defined wait and do the popup close
step('UKACCCHK Cart Popup Close', async function () {
  await gen.ElementAction(clickCartPopupClose);
});

step(
  'UKACCCHK Go to Single Product Page from Prodcat <plat>',
  async function (plat) {
    await gotoProdCat(plat);
  }
);

step(
  'UKACCCHK Validate in a Single product page <plat>',
  async function (plat) {
    if (plat === 'PC') {
      await validateInSPP(sppPageProdHeader);
    } else if (plat === 'MOBILE') {
      await validateInSPP(sppPageProdHeaderMobile);
    }
  }
);

step('UKACCCHK Add product to Bag in SPP', async function () {
  await addProductToBag();
});

step(
  'UKACCCHK Navigate to cart page by clicking on Cart overlay <plat>',
  async function (plat) {
    if (plat === 'PC') {
      await clickOnCartOverlay(clickCartpageLink);
    } else if (plat === 'MOBILE') {
      await clickOnCartOverlay(clickCartpageLinkMobile);
    }
  }
);

step('UKACCCHK Enter shipping details <user>', async function (user) {
  await enterShippingDetails(user);
});

step('UKACCCHK Enter payment details <user>', async function (user) {
  await enterPaymentDetails(user);
});

step('UKACCCHK Enter New User Signup Register PWD', async function () {
  await gen.ElementAction(enterUserSigninPassword);
});

step('UKACCCHK Guest User/ New User Review Register Terms', async function () {
  await gen.ElementAction(clickReviewRegisterTerms);
});

step(
  'UKACCCHK Click On Guest User / New User Signup Place Order',
  async function () {
    await clickOnPlaceOrder();
  }
);

step(
  'UKACCCHK Click On New User Create Account Button In Oder Confirmation Page',
  async function () {
    await gen.ElementAction(ClickOnNewUserCreateAccount);
  }
);

step(
  'UKACCCHK Click On New User Signup Register Terms And Conditions',
  async function () {
    await gen.ElementAction(ClickOnNewUserCreateTermsAndConditions);
  }
);

step(
  'UKACCCHK Click On New User Create Account Button and Procced to Account Index Page',
  async function () {
    await clickOnCreateAccountIndexPage();
  }
);

step(
  'UKACCCHK Click On Mobile Stickypanel SignIn Button/Link',
  async function () {
    await clickOnMobileStickypanelButton();
  }
);

// ViewCart Scripts

step('UKACCCHK Increase QTY With Click Method', async function () {
  await increaseQuantityWithClick();
});

step('UKACCCHK Increase QTY With Dropdown Method', async function () {
  await increaseQuantityWithDropdown();
});

step('UKACCCHK ENTER VALID OFFERCODE', async function () {
  await gen.ElementAction(enterToValidOfferCode);
});

step('UKACCCHK Click On Valid Offer Button and Assert', async function () {
  await clickValidOfferButton();
});

step('UKACCCHK Click On Offer Edit Button', async function () {
  await gen.ElementAction(clickOfferEditButton);
});

step('UKACCCHK ENTER INVALID OFFERCODE', async function () {
  await gen.ElementAction(enterToInvalidOfferCode);
});

step('UKACCCHK Click On InValid Offer Button and Assert', async function () {
  await clickInvalidOfferButton();
});

step('UKACCCHK Click On Remove Product Link and Assert', async function () {
  await clickOnRemoveProductLink();
});

step('UKACCCHK Click On Offer Code Accordion', async function () {
  await gen.ElementAction(clickOfferCodeAccordion);
});

step('UKACCCHK REMOVE PRODUCT ASSERT', async function () {
  await removeProductAssert('PC');
});

step('UKACCCHK REMOVE PRODUCT MOB ASSERT', async function () {
  await removeProductAssert('MOBILE');
});

// Account Steps

step(
  'UKACCCHK Click On Gnav SignIn Link and Navigate to Account SignIn Page',
  async function () {
    await gen.ElementAction(clickGnavSignInLink);
  }
);

step(
  'UKACCCHK Click On Account Register Now Link and Navigate to Account SignIn Page',
  async function () {
    await gen.ElementAction(clickAccountRegisterNowLink);
  }
);

step('UKACCCHK Navigate to Account Signin url', async function () {
  let platform = siteDefinition.executionContext.platform.toUpperCase();
  await gotoAccountSigninurl(platform);
});

step(
  'UKACCCHK Enter Account Registration Details with Submit Button and Navigate to Account Index Page',
  async function () {
    await enterAccountRegistrationDetails();
  }
);

step(
  'UKACCCHK Click On Accont Shipping and Billing Address Book and Navigate to Address Details Page',
  async function () {
    await gen.ElementAction(clickAddressBookDetailsPage);
  }
);

step(
  'UKACCCHK Click On Add New Account Address Button and Enter Account Details',
  async function () {
    await gen.ElementAction(clickAccountDetailsPage);
  }
);

step(
  'UKACCCHK Enter Account Shipping and Delivery Address Details',
  async function () {
    await enterDeliveryAddressDetails();
  }
);

step(
  'UKACCCHK Click On Account Shipping and Delivery Address Submit Button',
  async function () {
    await gen.ElementAction(clickDeliveryAddressButton);
  }
);

step(
  'UKACCCHK Click On Account Signout Button and Navigate to Account SignIn Page',
  async function () {
    await gen.ElementAction(clickAccountSignoutButton);
  }
);

step('UKACCCHK Account Signout Assert', async function () {
  await accountSignout();
});

step(
  'UKACCCHK Click On Account LogIn Link on Gnav/Account sign page to LogIn as Return user and Navigate to Account Index Page',
  async function () {
    await gen.ElementAction(clickReturnUserLogInLink);
  }
);

step(
  'UKACCCHK Enter Account Return User Login Details with Submit Button and Navigate to Account Index Page',
  async function () {
    await enterReturnUserLoginDetails();
  }
);

step(
  'UKACCCHK Click On Return User Account Add New Address Button and Enter address Details',
  async function () {
    await gen.ElementAction(clickReturnUserAddressBookDetails);
  }
);

step(
  'UKACCCHK Click On Account Return User Standard Devlivery Address',
  async function () {
    await gen.ElementAction(clickReturnUserDevliveryAddress);
  }
);

step(
  'UKACCCHK Click On Account Return User Add New Address Submit Button',
  async function () {
    await gen.ElementAction(clickReturnUserNewAddressLink);
  }
);

step(
  'UKACCCHK Click On Account Return User Edit Address Link',
  async function () {
    await gen.ElementAction(clickReturnUserEditAddressLink);
  }
);

step(
  'UKACCCHK Enter Account Return User Edit Shipping Details',
  async function () {
    await enterReturnUserEditShippingDetails();
  }
);

step(
  'UKACCCHK Click On Account Retun User Edit Address Submit Button',
  async function () {
    await gen.ElementAction(clickReturnUserSubmitButton);
  }
);

step(
  'UKACCCHK Click On Account Delete Address Link With Confirm Option Link',
  async function () {
    await gen.ElementAction(clickDeleteAddressLink);
  }
);

step(
  'UKACCCHK Click On Account My Order/Order History Details and Navigate to Account My Order Page',
  async function () {
    await gen.ElementAction(clickMyOrderHistory);
  }
);

step(
  'UKACCCHK Click On Account Billing/Payment Info Link and Navigate to Account Billing Page',
  async function () {
    await gen.ElementAction(clickPaymentInfoLink);
  }
);

step(
  'UKACCCHK Click On Account Billing/Payment Info Link and Navigate to Account Billing Page One More Time',
  async function () {
    await gen.ElementAction(clickPaymentInfoLinkOneMoreTime);
  }
);

step(
  'UKACCCHK Click On Account Add New Billing Address Link',
  async function () {
    await gen.ElementAction(clickNewBillingAddressLink);
  }
);

step(
  'UKACCCHK Click On Account Add New Billing Address Link One More time',
  async function () {
    await gen.ElementAction(clickNewBillingAddressLinkOneMoreTime);
  }
);

step('UKACCCHK Click On Account Biiling Add Payment Method', async function () {
  await gen.ElementAction(clickBiilingAddPaymentMethod);
});

step('UKACCCHK Click On Account Add New Credit Card Button', async function () {
  await gen.ElementAction(clickNewCreditCardButton);
});

step('UKACCCHK Enter Account Credit Card Details', async function () {
  await enterCreditCardDetails();
});

step('UKACCCHK Click On Account Make Default Credit Card', async function () {
  await gen.ElementAction(clickMakeDefaultCreditCard);
});

step('UKACCCHK Click On Account Credit Card Submit Button', async function () {
  await gen.ElementAction(clickCreditCardSubmitButton);
});

// Account Mobile Steps

step('UKACCCHK Click On Account MOB Brand Logo', async function () {
  await gen.ElementAction(clickMobileBrandLogo);
});

step(
  'UKACCCHK Navigate To MOB Account Signin url <plat>',
  async function (plat) {
    await clickMobileAccountSigninLink(plat);
  }
);

step(
  'UKACCCHK Click On MOB Hamburger Icon and Navigate To Account SignIn/Index Page',
  async function () {
    await gen.ElementAction(clickMobileHamburgerIcon);
  }
);

step(
  'UKACCCHK Click On Account MOB Login Link and Navigate to Account SignIn/Index Page',
  async function () {
    await gen.ElementAction(clickMobileLoginLink);
  }
);

step(
  'UKACCCHK Click On Account MOB Register Now Link and Navigate to SignIn/Index Page',
  async function () {
    await gen.ElementAction(clickMobileRegisterNowLink);
  }
);

step(
  'UKACCCHK Click On Account MOB New User Add New Address Button and Enter Details',
  async function () {
    await gen.ElementAction(clickMobileAddNewAddressButton);
  }
);

step('UKACCCHK AC MOB Manual Address Entry', async function () {
  await gen.ElementAction(clickMobileManualAddressEntry);
});

step(
  'UKACCCHK Click On Return User MOB Account Add New Address Button and Enter address Details',
  async function () {
    await gen.ElementAction(clickMobileReturnUserAddNewAddressButton);
  }
);

step('UKACCCHK Click On Account MOB Address Submit Button', async function () {
  await gen.ElementAction(clickMobileAddressSubmitButton);
});

step('UKACCCHK Click On Account MOB LoggedIn Profile Link', async function () {
  await gen.ElementAction(clickMobileLoggedInProfileLink);
});

step(
  'UKACCCHK Click On Account MOB LogIn Link To SignIn As Return User',
  async function () {
    await gen.ElementAction(clickMobileReturnUserLogInLink);
  }
);

step(
  'UKACCCHK Click On Account MOB Delete Address Link With Confirm Option Link',
  async function () {
    await gen.ElementAction(clickMobileDeleteAddressLink);
  }
);

step('UKACCCHK Click On Account MOB Delete Address Popup', async function () {
  await clickDeleteAddressPopup();
});

step('UKACCCHK AC MOB Payment Info', async function () {
  await gen.ElementAction(clickMobilePaymentInfo);
});

step(
  'UKACCCHK Click On MOB Account Billing/Payment Info Link and Navigate to Account Billing Page One More Time',
  async function () {
    await gen.ElementAction(clickMobilePaymentInfoOneMoreTime);
  }
);

step(
  'UKACCCHK Click On MOB Account Add New Billing Address Link',
  async function () {
    await gen.ElementAction(clickMobileBillingAddressLink);
  }
);

step(
  'UKACCCHK Click On MOB Account Add New Billing Address Link First Time',
  async function () {
    await gen.ElementAction(clickMobileBillingAddressLinkFirstTime);
  }
);

step(
  'UKACCCHK Click On MOB Account Add New Billing Address Link Second Time',
  async function () {
    await gen.ElementAction(clickMobileBillingAddressLinkSecondTime);
  }
);

step(
  'UKACCCHK Click On MOB Account Biiling Add Payment Method',
  async function () {
    await gen.ElementAction(clickMobileBiilingAddPaymentMethod);
  }
);

step(
  'UKACCCHK Click On MOB Account Add New Credit Card Button',
  async function () {
    await gen.ElementAction(clickMobileAddNewCreditCardButton);
  }
);

step(
  'UKACCCHK Click On Accont MOB Shipping and Billing Address Book and Navigate to Address Details Page',
  async function () {
    await gen.ElementAction(clickMobileBillingAddressBook);
  }
);

step(
  'UKACCCHK Click On Account MOB My Order/Order History Details and Navigate to Account My Order Page',
  async function () {
    await gen.ElementAction(clickMobileOrderHistoryDetails);
  }
);

step(
  'UKACCCHK Click On MOB Account Signout Button and Navigate to Account SignIn Page',
  async function () {
    await gen.ElementAction(clickMobileSignoutButton);
  }
);

step('UKACCCHK Account MOB Signout Assert', async function () {
  await mobileSignoutAssert();
});

step(
  'UKACCCHK Click On New User Register Account Button In Account SignIn Page',
  async function () {
    await gen.ElementAction(clickNewUserRegisterButton);
  }
);

step('UKACCCHK Increase Quantity On Click', async function () {
  await gen.ElementAction(clickIncreaseQuantity);
});

step('UKACCCHK Enter Return User Email Id With Saved Cards', async function () {
  await enterReturnUserEmailIdSavedCards();
});
