let locatorDefinitions;
let dataDefinitions;
let siteDefinition, source, NullDataException, tags;
var feature = 'Checkout';
let Hengine = require('../../../../datainterface/providers/hengine');
let taikoOverride = require('../../helix_taiko');
let Gen = require('../ReUsableFunction.js');
assert = require('assert');
var t = require('taiko'); 
const Helper = require('../../helpers/helper.js');
const Util = require('../../../../utilities/util.js');
var CommonData = {};
var toplaceorder = process.env.PLACEORDER || 'true';

function makeEmail() {
  var strValues = 'abcdefghijk12345678';
  var strEmail = '';
  var strTmp;
  for (var i = 0; i < 10; i++) {
    strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
    strEmail = strEmail + strTmp;
  }
  strEmail = 'elcqaapac' + strEmail + '@test' + '.com';
  return strEmail;
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

async function AddProdToCartfromSPP(addToBagBtn) {
  for (i = 0; i < sppUrls.length; i++) {
    await t.goto(siteDefinition.executionContext.url + sppUrls[i], {
      waitForEvents: ['DOMContentLoaded'],
    });
    gauge.message(sppUrls[i]);
    gauge.screenshot();
    if (await (await t.$(addToBagBtn)).exists()) {
      break;
    }
  }
}

async function waitForElementAndWrite(element, data) {
  if (element !== '') {
    for (j = 1; j <= 5; j++) {
      if (await (await t.$(element)).exists()) {
        await t.evaluate(await t.$(element), (ele) => {
          ele.focus(), { force: true };
        });
        await t.write(data, t.into(await t.$(element)), {
          delay: pollingTime,
          waitForNavigation: false,
        });
        break;
      } else {
        if (j == 5) {
          assert(false, 'Element did not appear even after waiting');
        }
        await t.waitFor(3000);
      }
    }
  }
}

const commonMessage = {
  revisionTagSet: 'Revision Tag is set as ',
  revisionTagNotSet: 'No revision tag is set',
  perlGemSet: 'PerlGem Environment Cookie target_env is set as ',
  productOutOfStock: 'This Product is out of stock/not available =',
  productLinkNotAvailable:
    'The Product link is NOT available for adding it to Cart ',
  productOOSAssert:
    'Tried with 5 items and none were available to add to cart.',
  inSPP: 'In SPP',
  notInSpp: 'Not in SPP',
  browserPopUpClose: "Browser pop-up didn't appear and hence it is skipped",
  stepNotApplicable: 'This step is not applicable for this Brand/Locale',
  addToBagEnabled: 'Add to Bag btn is enabled and Product added to cart',
  addToBagNotExist:
    'Add to Bag btn does not exist within 30 seconds, thus reloading the page.',
  addToBagNotLoaded:
    'Add to bag does not load within expected time and reload the page.',
  cartOverlayExists: 'Cart overlay exists and clicked on it',
  cartCountZero: 'Cart count value is zero, so clicking on add to bag again',
  cartCountZeroClickBagIcon:
    'Cart count value is still zero, clicking on bag icon and navigating to cart page',
  navigateToCartPage: 'Navigated to cart page as expected.',
  noProductAddedToCart: 'No Product added to cart',
  productAddedToCart: 'Product added to cart',
  notInCartPage: 'Expected to be navigated to Cartpage but it is not.',
  allSkuOutOfStock: 'None of the products are available for adding it to Cart',
  notValidSku: 'is not a valid SKU ID',
  productWithSku: 'The Product with SKU ID - ',
  productNotAvailableToAdd: ' is NOT available for adding it to Cart',
  productAvailableToAdd: ' is available and proceeding to add to Cart',
  maxLimitMet: 'Product max limit has met',
  maxLimitNotMet: 'Product max limit has not met',
  checkoutBtnDisabled: 'Checkout btn got disabled',
  checkoutBtnNotDisabled: 'Checkout btn is not disabled',
  checkoutBtnNotVisible: 'Checkout btn is not visible',
  productExceededMaxLimit: 'Product exceeded max limit',
  productNotExceededMaxLimit: 'Product not exceeded max limit',
  testOfferFlagSet: 'Test offer flag set',
  testOfferFlagNotSet: 'Test offer flag not set',
  secondIterationProductNotAdded:
    'After second iteration product not added to cart',
  didNotClickCheckoutBtn: "Didn't click on Checkout continue button",
  homeDeliverySelected: 'Home delivery option selected',
  standardWestSelected: "Delivery method 'standard west' is selected",
  standardWestNotSelected:
    "Delivery method 'standard west' was not able to select",
  waitFourSecMessage: 'waited 4 sec for element',
  orderPlaced: 'Order placed successfully',
  orderNotPlaced: 'Order not placed',
  qtyIncreased: 'Product quantity increased',
  productRemovedFromCart: 'Product removed from cart',
  productNotRemovedFromCart: 'Product not removed from cart',
  signedOut: 'Signed out successfully',
  notSignedOut: 'Not able to sign out',
  favouritePage: 'Favourites page',
  accountCreated: 'Account created and Landed on account page',
  accountNotCreated: 'Account not created',
};

async function ValidateInSPP(sppPageHeader) {
  if (
    (await (await t.$(sppPageHeader)).exists(pollingTime, timeout),
    { waitForEvents: ['DOMContentLoaded'] })
  ) {
    assert(matchCondition);
    gauge.screenshot();
    gauge.message(commonMessage.inSPP);
    console.log(await t.currentURL());  // for debuging MC-AU failure
  } else {
    assert(!matchCondition, commonMessage.notInSpp);
  }
}

function ReturnUserID() {
  return RUIds[Math.floor(Math.random() * RUIds.length)];
}

async function initFrameworkSettings() {
  // This should come from Gauge Tags inputs
  tags = process.env.tags.split(',');
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

async function AddProductToBag(addToBag) {
  if (javaAlertPopup !== '') {
    try {
      t.alert(javaAlertPopup, async () => await t.accept());
      console.log('handled javaAlertPopup');
    } catch (e) {
      gauge.message(commonMessage.browserPopUpClose);
    }
  }
  if (addToBag !== '') {
    let addToBagExist = 0;
    for (i = 0; i < 3; i++) {
      if (await (await t.$(addToBag)).exists(timeout)) {
        await t.evaluate(
          await t.$(addToBag, { waitForEvents: ['loadEventFired'] }),
          (ele) => ele.focus()
        );
        await t.evaluate(
          await t.$(addToBag, { waitForEvents: ['loadEventFired'] }),
          (ele) => ele.click(),
          { force: true }
        );
        if (siteDefinition.executionContext.environment.toUpperCase() === 'STAGE') {
          await t.evaluate(
            await t.$(addToBag, { waitForEvents: ['loadEventFired'] }),
            (ele) => ele.click()
          );
        }
        gauge.message(commonMessage.addToBagEnabled);
        if (siteDefinition.executionContext.platform.toUpperCase() === "MOBILE") {
          if (addToBagSppPop !== '') {
            await Gen.TryCatchClickAction(addToBagSppPop);
          }
        }
        break;
      } else {
        await t.reload({ waitForEvents: ['loadEventFired'] });
        await t.waitFor(timeout);
        gauge.message(commonMessage.addToBagNotExist);
        addToBagExist++;
      }
    }
    if (addToBagExist === 3) {
      assert(!matchCondition, commonMessage.addToBagNotLoaded);
    }
  } else {
    console.log(commonMessage.stepNotApplicable);
  }
}

async function ClickOnCartOverlay(gnavCart, addToBag) {
  if (gnavCart !== '') {
    let cartVal = 0;
    let cartExists = 0;
    for (i = 0; i < 3; i++) {
      if (await (await t.$(cartCountValue)).exists(pollingTime, timeout)) {
        var cartcount = await (await t.$(cartCountValue)).text();
        gauge.message('Cart count value =' + cartcount);
        if (!(parseInt(cartcount) === 0 || cartcount === '')) {
          assert(matchCondition);
          await t.evaluate(
            await t.$(gnavCart, { waitForEvents: ['loadEventFired'] }),
            (ele) => {
              ele.focus(), ele.click();
            },
            { waitForNavigation: false }
          );
          gauge.message(commonMessage.cartOverlayExists);
          break;
        } else {
          gauge.message(commonMessage.cartCountZero);
          await t.evaluate(
            await t.$(addToBag, { waitForEvents: ['loadEventFired'] }),
            (ele) => ele.click(),
            { waitForNavigation: false }
          );
          await t.waitFor(customTimeout);
          cartVal++;
        }
      } else {
        cartExists++;
      }
    }
    if (cartVal === 3 || cartExists === 3) {
      gauge.message(commonMessage.cartCountZeroClickBagIcon);
      await t.evaluate(
        await t.$(gnavCart, { waitForEvents: ['loadEventFired'] }),
        (ele) => ele.click(),
        { waitForNavigation: false }
      );
    }
  } else {
    gauge.message(commonMessage.stepNotApplicable);
  }
}

// Variable declaration
var notAvailableProductsCount;
var skuLink = '';
var productLink = '';
var randomSkuUrl = '';
var prodcatUrl = '';
var isShoppable = '';
var isDisplayable = '';
var productUrl = '';
var noDisplayableProductError = '';
var sppPageProdHeader = '';
var sppPageProdHeaderMob = '';
var javaAlertPopup = '';
var addToBagSpp = '';
var addToBagSppMob = '';
var cartCountValue = '';
var gnavCartIcon = '';
var gnavCartIconMob = '';
var addToBagSppPop = '';
var cartPageUrlText = '';
let noProductInCart = 0;
var timeoutSetting = '';
var emulationDevice = '';
var mockCookieValue = '';
var testOrderUrl = '';
var sppPopUp = '';
var testOfferUrl = '';
var popUpId = '';
var checkoutButtonId = '';
var checkoutButtonMob = '';
var selectSamplePC = '';
var selectSampleMob = '';
var sampleContinue = '';
var samplePageContinue = '';
var secondSamplePageContinue = '';
var secondSamplePageContinueMob = '';
var sampleContinueMob = '';
var samplePageContinueMob = '';
var popUp = '';
var guestUserId = '';
var guestUserTnC = '';
var newUserTnC = '';
var guestUserContinue = '';
var guestUserContinueMOb = '';
var registerNow = '';
var registerNowMob = '';
var firstNameInMemberInfo = '';
var lastNameInMemberInfo = '';
var newUserEmailId = '';
var newUserPassword = '';
var agreeAllTnC = '';
var newuserTandC = '';
var newUserContinue = '';
var newUserContinueMob = '';
var goBackNU = '';
var paymentOptionId = '';
var enterNewUserPwdShipping = '';
var reEnterNewUserPwdShipping = '';
var paymentOptionTnC = '';
var billingAddress = '';
var shippingAddressContinue = '';
var shippingContinueMob = '';
var enterNewUserPwdAccount = '';
var reEnterNewUserPwdAccount = '';
var enterNewUserPwdAccountStage = '';
var reEnterNewUserPwdAccountStage = '';
var phoneNumberToCreateAC = '';
var securityAns = '';
var securityAnsStage = '';
var TnCToCreateAccount = '';
var TnCToCreateAccountStage = '';
var createAccountContinue = '';
var paymentMethodRadioButton = '';
var paymentMethodRadioButtonMob = '';
var selectPaymentMethodPC = '';
var selectPaymentMethodMob = '';
var selectPaymentMethod = '';
var paymentSelectBtn = '';
var payButtonId = '';
var orderId = '';
var signinId = '';
var returnUserMobId = '';
var returnUserId = '';
var returnUserPwd = '';
var returnUserSigninButton = '';
var returnUserContinueMob = '';
var goBackRU = '';
var checkoutBtnSampleReview = '';
var checkoutBtnCartReview = '';
var checkoutBtnSampleReviewMob = '';
var checkoutBtnCartReviewMob = '';
var secondSamplePageBtn = '';
var sampleCartReviewBtn = '';
var secondSampleContinueMob = '';
var sampleCartReviewBtnMob = '';
var mobileSignUpPopUp = '';
var deliveryMethodId = '';
var titleId = '';
var titleIdMob = '';
var titleDropDownPC = '';
var titleDropDownMob = '';
var titleDropDownMobStage = '';
var firstNameId = '';
var firstNameKatakana = '';
var lastNameId = '';
var lastNameKatakana = '';
var addressId = '';
var enterAddressAndClick = '';
var addressSuggestionPress = '';
var pressEnterBtn = '';
var addressSecondLine = '';
var cityId = '';
var streetId = '';
var subDistrictId = '';
var provinceId = '';
var stateDropDown = '';
var stateDropDownStage = '';
var stateDropDownClick = '';
var stateDropDownOption = '';
var stateDropDownClickStage = '';
var stateDropDownOptionStage = '';
var cityDropDownClick = '';
var cityDropDownOption = '';
var cityDropDown = '';
var postalCodeId = '';
var phoneId = '';
var pressTabBtn = '';
var selectDlvCountry = '';
var selectDlvOption = '';
var deliveryMethodDropDown = '';
var mobileNumberSMS = '';
var TandCForSales = '';
var orderReviewCheckout = '';
var creditcardHover = '';
var creditcardRadio = '';
var orderReviewCheckoutMob = '';
var paymentMethodDD = '';
var completeTheOrder = '';
var completeTheOrderMob = '';
var cardTypeId = '';
var creditCardHolderName = '';
var creditCardId = '';
var creditCardMob = '';
var creditCardPan1 = '';
var creditCardPan2 = '';
var creditCardPan3 = '';
var creditCardPan4 = '';
var expDateId = '';
var creditcardMonthDD = '';
var creditcardYearDD = '';
var cvvId = '';
var creditcardBank = '';
var TnCPaymentPage = '';
var termsAndConditionForAge = '';
var selectQtyDropDown = '';
var clickQtyIncrease = '';
var removeAssert = '';
var cartEmptAssertTxt = '';
var removeAssertMob = '';
var cartEmptAssertTxtMob = '';
var removeBtn = '';
var removeBtnMob = '';
var loginId = '';
var gnavLoginId = '';
var loginIdMob = '';
var gnavLoginIdMob = '';
var accRegisterNow = '';
var accRegisterNowMob = '';
var accRegisterFirstName = '';
var accRegisterLastName = '';
var accRegisterEmailId = '';
var signinAssert = '';
var accRegisterPwd = '';
var accRegisterPhone = '';
var accRegisterYear = '';
var accRegisterMonth = '';
var accRegisterDay = '';
var accRegisterTerms = '';
var accRegisterTermsMob = '';
var accRegisterCreateAcBtn = '';
var accRegisterCreateAcBtnMob = '';
var accMobileSignUpPopUp = '';
var accRegisterTitle = '';
var accRegisterTitleMob = '';
var accRegTitleDropdownPC = '';
var accRegTitleDropDownMob = '';
var accRegFirstName = '';
var accRegLastName = '';
var accRegEmailId = '';
var accRegPwd = '';
var accRegVerifyPwd = '';
var accRegPwdHint = '';
var accRegAddress = '';
var accRegStreet = '';
var accRegSubDistrict = '';
var accRegDistrict = '';
var accRegState = '';
var accRegPostalCode = '';
var accRegPhone = '';
var accRegAddressType = '';
var accRegYear = '';
var accRegMonth = '';
var accRegDate = '';
var accRegGender = '';
var accRegTerms = '';
var accRegSubmit = '';
var accRegSubmitMob = '';
var accClickOnSettings = '';
var bannerPopUp = '';
var clickPersonalProfile = '';
var selectTitlePersonalProfile = '';
var titleDDPersonalProfile = '';
var firstNamePersonalProfile = '';
var lastNamePersonalProfile = '';
var firstNameKatakaPersonalProfile = '';
var lastNameKatakaPersonalProfile = '';
var PersonalProfilePWDHint = '';
var zipcodePersonalProfile = '';
var clickZipCodePersonalProfile = '';
var phonePersonalProfile = '';
var datePersonalProfile = '';
var monthPersonalProfile = '';
var yearPersonalProfile = '';
var genderPersonalProfile = '';
var racePersonalProfile = '';
var TnCPersonalProfile = '';
var submitBtnPersonalProfile = '';
var addressBook = '';
var accMobAddressBook = '';
var accNewAddressButton = '';
var accNewAddressButtonMob = '';
var canWeAssistPopUp = '';
var accTitleId = '';
var accTitleDropDownPC = '';
var accTitleMob = '';
var accTitleDropDown = '';
var accFirstName = '';
var accFirstNameKatakana = '';
var accLastName = '';
var accLastNameKatakana = '';
var accClickAddress = '';
var clickAddress = '';
var accClickAddressScroll = '';
var accClickSuggestedAdd = '';
var accEnterAddress = '';
var accEnterAddressLineTwo = '';
var accEnterStreet = '';
var accEnterPhone = '';
var accEnterSubDistrict = '';
var accEnterCity = '';
var accEnterState = '';
var accStateDropDown = '';
var accCityDropDown = '';
var accDistrictDropDown = '';
var accClickDistrictDropDown = '';
var accEnterPostalCode = '';
var accAddressSearchBtn = '';
var accAddressInSearchBox = '';
var accAddSearchInSearchBox = '';
var accSelectSuggestedAddress = '';
var accStreetAddress = '';
var accSearchBtnInSearchBox = '';
var accCellphnAreaCode = '';
var accCellNumFirstHalf = '';
var accCellNumSecondHalf = '';
var accClickStateDropDown = '';
var accClickCityDropDown = '';
var accAddressSubmit = '';
var accAddressSubmitMob = '';
var accStandardDeliveryAddress = '';
var accStandardDeliveryAddressMob = '';
var shippingAddWithElementAction = '';
var shippingAddNotWithElementAction = '';
var shippingDetailsDropDown = '';
var selectDropDownOption = '';
var tabPress = '';
var pressActionPC = '';
var pressActionMob = '';
var accMemberInfo = '';
var signoutHeader = '';
var accSignout = '';
var accSignoutMob = '';
var accSignoutAssert = '';
var accNeedToClickLoginAgain = '';
var clickSigninBtn = '';
var clickSigninBtnPC = '';
var accEnterReturnUserEmail = '';
var accReturnUserPwd = '';
var accReturnUserLogin = '';
var accReturnUserLoginMob = '';
var gnavMemLogin = '';
var gnavMemAccount = '';
var accMyOrderViewDetail = '';
var accMyOrderViewDetailMob = '';
var accFavourites = '';
var accFavouritesMob = '';
var accDeleteAddress = '';
var accDeleteConfirm = '';
var accDeleteAddressMob = '';
var accDeleteConfirmMob = '';
var accAddressDeleteMob = '';
var mobPopupDelete = '';
var accAddNewAddress = '';
var accAddNewAddressMob = '';
var accEditAddress = '';
var editAddressPC = '';
var accEditAddressMob = '';
var editAddressMob = '';
var accClickBackBtn = '';
var accHamburgerCartPage = '';
var accHamburgerLoginPage = '';
var accMyAccountCartPage = '';
var accMyAccountLoginPage = '';
var accClickReturnUserAccount = '';
var qtyLimited = '';
var prodNeedtobeAdd;
var addProdsku = '';
var addToCart = '';
var cartLimitmesage = '';
var cartLimitTxt = '';
var homePageHamburger = '';
var cartMaxPurchase = '';
var cartMaxPurchaseMob = '';
var cartMaxPurError = '';
var cartMaxPurErrorMob = '';
var addressReload = '';
var enterPwdInOrderConfirmPage = '';
var submitBtnInOrderConfirmPage = '';
var timeout = '';
var pollingTime = '';
var customTimeout = '';
var transID = '';
var productSKU = '';
var paymentType = '';
var returnUserPcId = '';
var paymentIframe = '';
var phoneNumber = '';
var deleteProduct = '';
var selectBillingAddress = '';
var userName = '';
var orderCompletionPopup = '';

// Array declaration
var RUIds = [];
var sppUrls = [];
var skuIds = [];
var samplePageDetails = [];
var samplePageDetailsMob = [];
var guestUserDetails = [];
var newUserDetails = [];
var newUserPwdDetails = [];
var createNewUserDetails = [];
var createNewUserDetailsStage = [];
var returnUserDetailsPc = [];
var returnUserDetailsMob = [];
var titleInShippingDeatilPC = [];
var titleInShippingDeatilMob = [];
var titleInShippingDeatilPCStage = [];
var titleInShippingDeatilMobStage = [];
var shippingDetails = [];
var shippingDetailsStage = [];
var paymentDetailsPC = [];
var paymentDetailsMob = [];
var accRegisterDeatils = [];
var accountRegisterTitlePC = [];
var accountRegisterTitleMob = [];
var accountRegisterDetails = [];
var pcTitlePP = [];
var mobTitlePP = [];
var personalProfiledetail = [];
var titleDetailAccountPC = [];
var titleDetailAccountMob = [];
var shippingAddDetailAccount = [];
var shippingAddDetailAccountMob = [];
var shippingAddDetailRUAccount = [];
var shippingAddDetailRUAccountmob = [];
var accSigininDetailsMob = [];
var accSigininDetailsPC = [];
var accDeleteAddPC = [];
var accDeleteAddMob = [];
var loginHomePagePC = [];
var loginHomePageMob = [];
const matchCondition = true;
const responseCode = 200;

var cc1;
var cc2;
var cc3;
var cc4;

function reinitialize() {
  notAvailableProductsCount = 0;

  RUIds = [
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

  sppUrls = [
    CommonData.sppPage1,
    CommonData.sppPage2,
    CommonData.sppPage3,
    CommonData.sppPage4,
    CommonData.sppPage5,
  ];

  skuIds = [
    CommonData.skuId1,
    CommonData.skuId2,
    CommonData.skuId3,
    CommonData.skuId4,
    CommonData.skuId5,
    CommonData.skuId6,
    CommonData.skuId7,
    CommonData.skuId8,
    CommonData.skuId9,
    CommonData.skuId10,
  ];

  cc1 = CommonData.creditcard.slice(0, 4);
  cc2 = CommonData.creditcard.slice(4, 8);
  cc3 = CommonData.creditcard.slice(8, 12);
  cc4 = CommonData.creditcard.slice(12, 16);

  qtyLimited = CommonData.qtyLimit;

  samplePageDetails = [
    { loc: selectSamplePC, action: 'click' },
    { loc: sampleContinue, action: 'tryCatchClick' },
    { loc: samplePageContinue, action: 'tryCatchClick' },
  ];

  samplePageDetailsMob = [
    { loc: selectSampleMob, action: 'click' },
    { loc: sampleContinueMob, action: 'tryCatchClick' },
    { loc: samplePageContinueMob, action: 'tryCatchClick' },
  ];

  guestUserDetails = [
    { loc: guestUserId, data: makeEmail(), action: 'expeditedWrite' },
    { loc: guestUserTnC, action: 'click' },
    { action: 'screenshot' },
  ];

  newUserDetails = [
    {
      loc: firstNameInMemberInfo,
      data: CommonData.firstNameEntry,
      action: 'TryCatchWrite',
    },
    {
      loc: lastNameInMemberInfo,
      data: CommonData.lastNameEntry,
      action: 'TryCatchWrite',
    },
    { loc: newUserEmailId, data: makeEmail(), action: 'expeditedWrite' },
    { loc: newUserPassword, data: CommonData.NPWD, action: 'write' },
    { loc: newUserTnC, action: 'click' },
    { loc: agreeAllTnC, action: 'tryCatchClick' },
    { action: 'screenshot' },
    { loc: newuserTandC, action: 'click' },
  ];

  newUserPwdDetails = [
    {
      loc: enterNewUserPwdShipping,
      data: CommonData.NPWD,
      action: 'Onlywrite',
    },
    {
      loc: reEnterNewUserPwdShipping,
      data: CommonData.NPWD,
      action: 'Onlywrite',
    },
  ];

  paymentDetailsMob = [
    {
      loc: creditCardMob,
      data: CommonData.creditcard,
      action: 'WaitforElementNwrite',
    },
    {
      loc: creditCardHolderName,
      data: CommonData.ccHolderName,
      action: 'TryCatchWrite',
    },
    { loc: creditCardPan1, data: cc1, action: 'write' },
    { loc: creditCardPan2, data: cc2, action: 'write' },
    { loc: creditCardPan3, data: cc3, action: 'write' },
    { loc: creditCardPan4, data: cc4, action: 'write' },
    {
      loc: expDateId,
      data: CommonData.ccMonthEntry,
      action: 'WaitforElementNwrite',
    },
    {
      loc: creditcardMonthDD,
      data: CommonData.CCM,
      action: 'IndexDropdownName',
    },
    {
      loc: creditcardYearDD,
      data: CommonData.CCY,
      action: 'IndexDropdownName',
    },
    { loc: cvvId, data: CommonData.cvvEntry, action: 'WaitforElementNwrite' },
    { loc: creditcardBank, data: CommonData.CCBANK, action: 'IDDropdowntxt' },
    { loc: TnCPaymentPage, action: 'click' },
    { action: 'screenshot' },
  ];

  createNewUserDetails = [
    { loc: enterNewUserPwdAccount, data: CommonData.NPWD, action: 'write' },
    { loc: reEnterNewUserPwdAccount, data: CommonData.NPWD, action: 'write' },
    {
      loc: phoneNumberToCreateAC,
      data: CommonData.phoneNumber,
      action: 'write',
    },
    { loc: securityAns, data: CommonData.securityAnswer, action: 'write' },
    { loc: TnCToCreateAccount, action: 'click' },
    { action: 'screenshot' },
  ];

  createNewUserDetailsStage = [
    {
      loc: enterNewUserPwdAccountStage,
      data: CommonData.NPWD,
      action: 'write',
    },
    {
      loc: reEnterNewUserPwdAccountStage,
      data: CommonData.NPWD,
      action: 'write',
    },
    {
      loc: phoneNumberToCreateAC,
      data: CommonData.phoneNumber,
      action: 'write',
    },
    { loc: securityAnsStage, data: CommonData.securityAnswer, action: 'write' },
    { loc: TnCToCreateAccountStage, action: 'click' },
    { action: 'screenshot' },
  ];

  returnUserDetailsPc = [
    { loc: signinId, action: 'click' },
    { loc: returnUserPcId, action: 'click' },
    { loc: returnUserId, data: ReturnUserID(), action: 'write' },
    { loc: returnUserPwd, data: CommonData.RPWD, action: 'write' },
    { action: 'screenshot' },
  ];

  returnUserDetailsMob = [
    { loc: signinId, action: 'click' },
    { loc: returnUserMobId, action: 'click' },
    { loc: returnUserId, data: ReturnUserID(), action: 'write' },
    { loc: returnUserPwd, data: CommonData.RPWD, action: 'write' },
    { action: 'screenshot' },
  ];

  titleInShippingDeatilPC = [
    { loc: titleId, action: 'click' },
    { loc: titleDropDownPC, data: '4', action: 'IndexDropDownID' },
  ];
  titleInShippingDeatilMob = [
    { loc: titleIdMob, action: 'click' },
    { loc: titleDropDownMob, data: '4', action: 'IndexDropDownID' },
  ];

  titleInShippingDeatilPCStage = [
    { loc: titleId, action: 'tryCatchClick' },
    { loc: titleDropDownPC, data: '4', action: 'IndexDropDownID' },
  ];
  titleInShippingDeatilMobStage = [
    { loc: titleIdMob, action: 'tryCatchClick' },
    { loc: titleDropDownMobStage, data: '4', action: 'IndexDropDownID' },
  ];

  shippingDetails = [
    { loc: firstNameId, data: CommonData.firstNameEntry, action: 'write' },
    { loc: firstNameKatakana, data: CommonData.firstNameKata, action: 'write' },
    { loc: lastNameId, data: CommonData.lastNameEntry, action: 'write' },
    { loc: lastNameKatakana, data: CommonData.lastNameKata, action: 'write' },
    { loc: selectDlvCountry, action: 'tryCatchClick' },
    { loc: selectDlvOption, action: 'tryCatchClick' },
    { loc: phoneId, data: CommonData.phoneNumber, action: 'clearNwrite' },
    { loc: phoneNumber, data: CommonData.phoneNumber, action: 'write' },
    {
      loc: enterAddressAndClick,
      data: CommonData.address,
      clickAdd: CommonData.addressLineFour,
      action: 'ClickSuggestedaddress',
    },
    {
      loc: addressSuggestionPress,
      data: CommonData.address,
      press: CommonData.addressLineFour,
      action: 'SelectaddressWithPress',
    },
    { loc: pressEnterBtn, action: 'pressEnter' },
    { loc: addressId, data: CommonData.address, action: 'write' },
    {
      loc: addressSecondLine,
      data: CommonData.addressLineTwo,
      action: 'write',
    },
    { loc: cityId, data: CommonData.cityEntry, action: 'write' },
    { loc: streetId, data: CommonData.street, action: 'write' },
    { loc: subDistrictId, data: CommonData.subDistrict, action: 'write' },
    { loc: provinceId, data: CommonData.state, action: 'write' },
    { loc: stateDropDown, data: CommonData.state, action: 'IDDropdowntxt' },
    {
      loc: stateDropDownClick,
      data: stateDropDownOption,
      action: 'ClickDropDown',
    },
    {
      loc: cityDropDownClick,
      data: cityDropDownOption,
      action: 'ClickDropDown',
    },
    { loc: cityDropDown, data: CommonData.cityEntry, action: 'IDDropdowntxt' },
    { loc: postalCodeId, data: CommonData.zipcodeEntry, action: 'write' },
    { loc: pressTabBtn, action: 'pressTab' },
    { action: 'screenshot' },
  ];

  shippingDetailsStage = [
    { loc: firstNameId, data: CommonData.firstNameEntry, action: 'write' },
    { loc: firstNameKatakana, data: CommonData.firstNameKata, action: 'write' },
    { loc: lastNameId, data: CommonData.lastNameEntry, action: 'write' },
    { loc: lastNameKatakana, data: CommonData.lastNameKata, action: 'write' },
    { loc: selectDlvCountry, action: 'tryCatchClick' },
    { loc: selectDlvOption, action: 'tryCatchClick' },
    { loc: phoneId, data: CommonData.phoneNumberStage, action: 'write' },
    {
      loc: addressSuggestionPress,
      data: CommonData.address,
      press: CommonData.addressLineFour,
      action: 'SelectaddressWithPress',
    },
    { loc: pressEnterBtn, action: 'pressEnter' },
    { loc: addressId, data: CommonData.address, action: 'write' },
    {
      loc: addressSecondLine,
      data: CommonData.addressLineTwo,
      action: 'write',
    },
    { loc: cityId, data: CommonData.cityEntry, action: 'write' },
    { loc: streetId, data: CommonData.street, action: 'write' },
    { loc: subDistrictId, data: CommonData.subDistrict, action: 'write' },
    { loc: provinceId, data: CommonData.state, action: 'write' },
    {
      loc: stateDropDownStage,
      data: CommonData.state,
      action: 'IDDropdowntxt',
    },
    {
      loc: stateDropDownClickStage,
      data: stateDropDownOptionStage,
      action: 'ClickDropDown',
    },
    {
      loc: cityDropDownClick,
      data: cityDropDownOption,
      action: 'ClickDropDown',
    },
    { loc: cityDropDown, data: CommonData.cityEntry, action: 'IDDropdowntxt' },
    { loc: postalCodeId, data: CommonData.zipcodeEntry, action: 'write' },
    { loc: pressTabBtn, action: 'pressTab' },
    { action: 'screenshot' },
  ];

  paymentDetailsPC = [
    {
      loc: creditCardId,
      data: CommonData.creditcard,
      action: 'WaitforElementNwrite',
    },
    {
      loc: creditCardHolderName,
      data: CommonData.ccHolderName,
      action: 'TryCatchWrite',
    },
    { loc: expDateId, data: CommonData.ccMonthEntry, action: 'write' },
    {
      loc: creditcardMonthDD,
      data: CommonData.CCM,
      action: 'IndexDropdownName',
    },
    {
      loc: creditcardYearDD,
      data: CommonData.CCY,
      action: 'IndexDropdownName',
    },
    { loc: cvvId, data: CommonData.cvvEntry, action: 'write' },
    { loc: creditcardBank, data: CommonData.CCBANK, action: 'IDDropdowntxt' },
    { loc: TnCPaymentPage, action: 'click' },
    { action: 'screenshot' },
  ];

  accRegisterDeatils = [
    { loc: accRegisterFirstName, data: CommonData.regName, action: 'write' },
    { loc: accRegisterLastName, data: CommonData.lastNameEntry, action: 'write' },
    { loc: accRegisterEmailId, data: makeEmail(), action: 'write' },
    { loc: signinAssert, action: 'assertURL' },
    { loc: accRegisterPwd, data: CommonData.NPWD, action: 'write' },
    {
      loc: accRegisterPhone,
      data: CommonData.phoneNumber,
      action: 'clearNwrite',
    },
    {
      loc: accRegisterYear,
      data: CommonData.birthYear,
      action: 'IDDropdowntxt',
    },
    {
      loc: accRegisterMonth,
      data: CommonData.birthMonth,
      action: 'IDDropdowntxt',
    },
    { loc: accRegisterDay, data: CommonData.birthDay, action: 'IDDropdowntxt' },
    { action: 'screenshot' },
  ];

  accountRegisterTitlePC = [
    { loc: accRegisterTitle, action: 'click' },
    { loc: accRegTitleDropdownPC, data: '4', action: 'IndexDropDownID' },
  ];

  accountRegisterTitleMob = [
    { loc: accRegisterTitleMob, action: 'click' },
    { loc: accRegTitleDropDownMob, data: '4', action: 'IndexDropDownID' },
  ];

  accountRegisterDetails = [
    { loc: accRegFirstName, data: CommonData.firstNameEntry, action: 'write' },
    { loc: accRegLastName, data: CommonData.lastNameEntry, action: 'write' },
    { loc: accRegEmailId, data: makeEmail(), action: 'write' },
    { loc: signinAssert, action: 'assertURL' },
    { loc: accRegPwd, data: CommonData.NPWD, action: 'write' },
    { loc: accRegVerifyPwd, data: CommonData.NPWD, action: 'write' },
    { loc: accRegPwdHint, data: CommonData.securityAnswer, action: 'write' },
    { loc: accRegAddress, data: CommonData.address, action: 'write' },
    { loc: accRegStreet, data: CommonData.street, action: 'write' },
    { loc: accRegSubDistrict, data: CommonData.subDistrict, action: 'write' },
    { loc: accRegDistrict, data: CommonData.cityEntry, action: 'write' },
    { loc: accRegState, data: CommonData.state, action: 'write' },
    { loc: accRegPostalCode, data: CommonData.zipcodeEntry, action: 'write' },
    { loc: accRegPhone, data: CommonData.phoneNumber, action: 'clearNwrite' },
    { loc: accRegAddressType, action: 'tryCatchClick' },
    { loc: accRegYear, data: CommonData.birthYear, action: 'IDDropdowntxt' },
    { loc: accRegMonth, data: CommonData.birthMonth, action: 'IDDropdowntxt' },
    { loc: accRegDate, data: CommonData.birthDay, action: 'IDDropdowntxt' },
    { loc: accRegGender, action: 'click' },
    { loc: accRegTerms, action: 'click' },
    { action: 'screenshot' },
  ];

  pcTitlePP = [
    { loc: clickPersonalProfile, action: 'click' },
    { loc: selectTitlePersonalProfile, action: 'click' },
  ];

  mobTitlePP = [
    { loc: clickPersonalProfileMob, action: 'click' },
    {
      loc: titleDDPersonalProfile,
      data: CommonData.title,
      action: 'IDDropdowntxt',
    },
  ];

  personalProfiledetail = [
    {
      loc: firstNamePersonalProfile,
      data: CommonData.firstNameEntry,
      action: 'clearNwrite',
    },
    {
      loc: lastNamePersonalProfile,
      data: CommonData.lastNameEntry,
      action: 'clearNwrite',
    },
    {
      loc: firstNameKatakaPersonalProfile,
      data: CommonData.firstNameKata,
      action: 'write',
    },
    {
      loc: lastNameKatakaPersonalProfile,
      data: CommonData.lastNameKata,
      action: 'write',
    },
    {
      loc: PersonalProfilePWDHint,
      data: CommonData.securityAnswer,
      action: 'write',
    },
    { loc: zipcodePersonalProfile, data: CommonData.zipcodeEntry, action: 'write' },
    { loc: clickZipCodePersonalProfile, action: 'click' },
    {
      loc: phonePersonalProfile,
      data: CommonData.phoneNumber,
      action: 'write',
    },
    {
      loc: datePersonalProfile,
      data: CommonData.birthDay,
      action: 'IDDropdowntxt',
    },
    {
      loc: monthPersonalProfile,
      data: CommonData.birthMonth,
      action: 'IDDropdowntxt',
    },
    {
      loc: yearPersonalProfile,
      data: CommonData.birthYear,
      action: 'IDDropdowntxt',
    },
    { loc: genderPersonalProfile, action: 'click' },
    { loc: racePersonalProfile, action: 'click' },
    { loc: TnCPersonalProfile, action: 'click' },
    { loc: submitBtnPersonalProfile, action: 'click' },
    { action: 'screenshot' },
  ];

  titleDetailAccountPC = [
    { loc: accTitleId, action: 'click' },
    {
      loc: accTitleDropDownPC,
      data: CommonData.title,
      action: 'IDDropdowntxt',
    },
  ];

  titleDetailAccountMob = [
    { loc: accTitleMob, action: 'click' },
    { loc: accTitleDropDown, data: '4', action: 'IndexDropDownID' },
  ];

  shippingAddDetailAccount = [
    { loc: accFirstName, data: CommonData.firstNameEntry, action: 'write' },
    {
      loc: accFirstNameKatakana,
      data: CommonData.firstNameKata,
      action: 'write',
    },
    { loc: accLastName, data: CommonData.lastNameEntry, action: 'write' },
    {
      loc: accLastNameKatakana,
      data: CommonData.lastNameKata,
      action: 'write',
    },
    { loc: accEnterPhone, data: CommonData.mobileAcc, action: 'clearNwrite' },
    {
      loc: accClickAddress,
      data: CommonData.address,
      clickAdd: CommonData.addressLineFour,
      action: 'ClickSuggestedaddress',
    },
    {
      loc: clickAddress,
      data: CommonData.address,
      clickAdd: CommonData.addressLineFour,
      action: 'ClickSuggestedaddress',
    },
    {
      loc: accClickSuggestedAdd,
      data: CommonData.address,
      press: CommonData.addressLineFour,
      action: 'SelectaddressWithPress',
    },
    { loc: accEnterAddress, data: CommonData.address, action: 'write' },
    {
      loc: accEnterAddressLineTwo,
      data: CommonData.addressLineTwo,
      action: 'write',
    },
    { loc: accEnterStreet, data: CommonData.street, action: 'write' },
    { loc: accEnterSubDistrict, data: CommonData.subDistrict, action: 'write' },
    { loc: accEnterCity, data: CommonData.cityEntry, action: 'write' },
    { loc: accEnterState, data: CommonData.state, action: 'write' },
    {
      loc: accStateDropDown,
      data: CommonData.stateAcc,
      action: 'IDDropdowntxt',
    },
    { loc: accCityDropDown, data: CommonData.cityAcc, action: 'IDDropdowntxt' },
    {
      loc: accDistrictDropDown,
      data: CommonData.district,
      action: 'IDDropdowntxt',
    },
    { loc: accEnterPostalCode, data: CommonData.zipcodeEntry, action: 'write' },
    { loc: accAddressSearchBtn, action: 'click' },
    { loc: accAddressInSearchBox, data: CommonData.address, action: 'write' },
    { loc: accAddSearchInSearchBox, action: 'click' },
    { loc: accSelectSuggestedAddress, action: 'click' },
    { loc: accStreetAddress, data: CommonData.addressLineTwo, action: 'write' },
    { loc: accSearchBtnInSearchBox, action: 'click' },
    { loc: accCellphnAreaCode, data: '1', action: 'IndexDropDownID' },
    { loc: accCellNumFirstHalf, data: CommonData.mobileOne, action: 'write' },
    { loc: accCellNumSecondHalf, data: CommonData.mobileTwo, action: 'write' },
    { action: 'screenshot' },
  ];

  shippingAddDetailAccountMob = [
    { loc: accFirstName, data: CommonData.firstNameEntry, action: 'write' },
    {
      loc: accFirstNameKatakana,
      data: CommonData.firstNameKata,
      action: 'write',
    },
    { loc: accLastName, data: CommonData.lastNameEntry, action: 'write' },
    {
      loc: accLastNameKatakana,
      data: CommonData.lastNameKata,
      action: 'write',
    },
    { loc: accEnterPhone, data: CommonData.mobileAcc, action: 'clearNwrite' },
    {
      loc: accClickAddress,
      data: CommonData.address,
      clickAdd: CommonData.addressLineFour,
      action: 'ClickSuggestedaddress',
    },
    {
      loc: accClickAddressScroll,
      data: CommonData.address,
      clickAdd: CommonData.addressLineFour,
      action: 'scrollClickSuggestedaddress',
    },
    {
      loc: accClickSuggestedAdd,
      data: CommonData.address,
      press: CommonData.addressLineFour,
      action: 'SelectaddressWithPress',
    },
    { loc: accEnterAddress, data: CommonData.address, action: 'write' },
    {
      loc: accEnterAddressLineTwo,
      data: CommonData.addressLineTwo,
      action: 'write',
    },
    { loc: accEnterStreet, data: CommonData.street, action: 'write' },
    { loc: accEnterSubDistrict, data: CommonData.subDistrict, action: 'write' },
    { loc: accEnterCity, data: CommonData.cityEntry, action: 'write' },
    { loc: accEnterState, data: CommonData.state, action: 'write' },
    {
      loc: accStateDropDown,
      data: CommonData.stateAcc,
      action: 'IDDropdowntxt',
    },
    { loc: accCityDropDown, data: CommonData.cityAcc, action: 'IDDropdowntxt' },
    {
      loc: accDistrictDropDown,
      data: CommonData.district,
      action: 'IDDropdowntxt',
    },
    { loc: accEnterPostalCode, data: CommonData.zipcodeEntry, action: 'write' },
    { loc: accAddressSearchBtn, action: 'click' },
    { loc: accAddressInSearchBox, data: CommonData.address, action: 'write' },
    { loc: accAddSearchInSearchBox, action: 'click' },
    { loc: accSelectSuggestedAddress, action: 'click' },
    { loc: accStreetAddress, data: CommonData.addressLineTwo, action: 'write' },
    { loc: accSearchBtnInSearchBox, action: 'click' },
    { loc: accCellphnAreaCode, data: '1', action: 'IndexDropDownID' },
    {
      loc: accCellNumFirstHalf,
      data: CommonData.mobileOne,
      action: 'WaitforElementNwrite',
    },
    {
      loc: accCellNumSecondHalf,
      data: CommonData.mobileTwo,
      action: 'WaitforElementNwrite',
    },
    { action: 'screenshot' },
  ];

  shippingAddDetailRUAccount = [
    { loc: accFirstName, data: CommonData.firstNameEntry, action: 'write' },
    {
      loc: accFirstNameKatakana,
      data: CommonData.firstNameKata,
      action: 'write',
    },
    { loc: accLastName, data: CommonData.lastNameEntry, action: 'write' },
    {
      loc: accLastNameKatakana,
      data: CommonData.lastNameKata,
      action: 'write',
    },
    { loc: accEnterPhone, data: CommonData.mobileAcc, action: 'clearNwrite' },
    {
      loc: accClickAddress,
      data: CommonData.address,
      clickAdd: CommonData.addressToClick,
      action: 'ClickSuggestedaddress',
    },
    {
      loc: clickAddress,
      data: CommonData.address,
      clickAdd: CommonData.addressLineFour,
      action: 'ClickSuggestedaddress',
    },
    {
      loc: accClickSuggestedAdd,
      data: CommonData.address,
      press: CommonData.addressLineFour,
      action: 'SelectaddressWithPress',
    },
    { loc: accEnterAddress, data: CommonData.address, action: 'write' },
    {
      loc: accEnterAddressLineTwo,
      data: CommonData.addressLineTwo,
      action: 'write',
    },
    { loc: accEnterStreet, data: CommonData.street, action: 'write' },
    { loc: accEnterSubDistrict, data: CommonData.subDistrict, action: 'write' },
    { loc: accEnterCity, data: CommonData.cityEntry, action: 'write' },
    { loc: accEnterState, data: CommonData.state, action: 'write' },
    {
      loc: accStateDropDown,
      data: CommonData.stateAcc,
      action: 'IDDropdowntxt',
    },
    {
      loc: accClickStateDropDown,
      data: CommonData.stateAcc,
      action: 'ClickDropDown',
    },
    { loc: accCityDropDown, data: CommonData.cityAcc, action: 'IDDropdowntxt' },
    {
      loc: accClickCityDropDown,
      data: CommonData.cityAcc,
      action: 'ClickDropDown',
    },
    {
      loc: accClickDistrictDropDown,
      data: CommonData.district,
      action: 'ClickDropDown',
    },
    {
      loc: accDistrictDropDown,
      data: CommonData.district,
      action: 'IDDropdowntxt',
    },
    { loc: accEnterPostalCode, data: CommonData.zipcodeEntry, action: 'Onlywrite' },
    { loc: accAddressSearchBtn, action: 'click' },
    { loc: accAddressInSearchBox, data: CommonData.address, action: 'write' },
    { loc: accAddSearchInSearchBox, action: 'click' },
    { loc: accSelectSuggestedAddress, action: 'click' },
    { loc: accStreetAddress, data: CommonData.addressLineTwo, action: 'write' },
    { loc: accSearchBtnInSearchBox, action: 'click' },
    { loc: accCellphnAreaCode, data: '1', action: 'IndexDropDownID' },
    { loc: accCellNumFirstHalf, data: CommonData.mobileOne, action: 'write' },
    { loc: accCellNumSecondHalf, data: CommonData.mobileTwo, action: 'write' },
    { action: 'screenshot' },
  ];

  shippingAddDetailRUAccountmob = [
    { loc: accFirstName, data: CommonData.firstNameEntry, action: 'write' },
    {
      loc: accFirstNameKatakana,
      data: CommonData.firstNameKata,
      action: 'write',
    },
    { loc: accLastName, data: CommonData.lastNameEntry, action: 'write' },
    {
      loc: accLastNameKatakana,
      data: CommonData.lastNameKata,
      action: 'write',
    },
    { loc: accEnterPhone, data: CommonData.mobileAcc, action: 'clearNwrite' },
    {
      loc: accClickAddress,
      data: CommonData.address,
      clickAdd: CommonData.addressLineFour,
      action: 'ClickSuggestedaddress',
    },
    {
      loc: accClickAddressScroll,
      data: CommonData.address,
      clickAdd: CommonData.addressLineFour,
      action: 'scrollClickSuggestedaddress',
    },
    {
      loc: accClickSuggestedAdd,
      data: CommonData.address,
      press: CommonData.addressLineFour,
      action: 'SelectaddressWithPress',
    },
    { loc: accEnterAddress, data: CommonData.address, action: 'write' },
    {
      loc: accEnterAddressLineTwo,
      data: CommonData.addressLineTwo,
      action: 'write',
    },
    { loc: accEnterStreet, data: CommonData.street, action: 'write' },
    { loc: accEnterSubDistrict, data: CommonData.subDistrict, action: 'write' },
    { loc: accEnterCity, data: CommonData.cityEntry, action: 'write' },
    { loc: accEnterState, data: CommonData.state, action: 'write' },
    {
      loc: accStateDropDown,
      data: CommonData.stateAcc,
      action: 'IDDropdowntxt',
    },
    {
      loc: accClickStateDropDown,
      data: CommonData.stateAcc,
      action: 'ClickDropDown',
    },
    { loc: accCityDropDown, data: CommonData.cityAcc, action: 'IDDropdowntxt' },
    {
      loc: accClickCityDropDown,
      data: CommonData.cityAcc,
      action: 'ClickDropDown',
    },
    {
      loc: accClickDistrictDropDown,
      data: CommonData.district,
      action: 'ClickDropDown',
    },
    {
      loc: accDistrictDropDown,
      data: CommonData.district,
      action: 'IDDropdowntxt',
    },
    { loc: accEnterPostalCode, data: CommonData.zipcodeEntry, action: 'Onlywrite' },
    { loc: accAddressSearchBtn, action: 'click' },
    { loc: accAddressInSearchBox, data: CommonData.address, action: 'write' },
    { loc: accAddSearchInSearchBox, action: 'click' },
    { loc: accSelectSuggestedAddress, action: 'click' },
    { loc: accStreetAddress, data: CommonData.addressLineTwo, action: 'write' },
    { loc: accSearchBtnInSearchBox, action: 'click' },
    { loc: accCellphnAreaCode, data: '1', action: 'IndexDropDownID' },
    {
      loc: accCellNumFirstHalf,
      data: CommonData.mobileOne,
      action: 'clearNwrite',
    },
    {
      loc: accCellNumSecondHalf,
      data: CommonData.mobileTwo,
      action: 'WaitforElementNwrite',
    },
    { action: 'screenshot' },
  ];

  accSigininDetailsMob = [
    { loc: accNeedToClickLoginAgain, action: 'tryCatchClick' },
    { loc: clickSigninBtn, action: 'click' },
    { loc: accEnterReturnUserEmail, data: CommonData.RID, action: 'write' },
    { loc: accReturnUserPwd, data: CommonData.RPWD, action: 'write' },
    { action: 'screenshot' },
    { loc: accReturnUserLoginMob, action: 'click' },
  ];

  accSigininDetailsPC = [
    { loc: accNeedToClickLoginAgain, action: 'tryCatchClick' },
    { loc: clickSigninBtnPC, action: 'click' },
    { loc: accEnterReturnUserEmail, data: CommonData.RID, action: 'write' },
    { loc: accReturnUserPwd, data: CommonData.RPWD, action: 'write' },
    { action: 'screenshot' },
    { loc: accReturnUserLogin, action: 'click' },
  ];

  accDeleteAddPC = [
    { loc: addressReload, action: 'reload' },
    { loc: accDeleteAddress, action: 'click' },
    { action: 'screenshot' },
    { loc: accDeleteConfirm, action: 'click' },
    { action: 'screenshot' },
  ];

  accDeleteAddMob = [
    { loc: addressReload, action: 'reload' },
    { loc: accDeleteAddressMob, action: 'click' },
    { action: 'screenshot' },
    { loc: accDeleteConfirmMob, action: 'click' },
    { action: 'screenshot' },
  ];

  loginHomePagePC = [
    { loc: loginId, action: 'click' },
    { loc: clickSigninBtnPC, action: 'click' },
    { loc: accEnterReturnUserEmail, data: CommonData.RID, action: 'write' },
    { loc: accReturnUserPwd, data: CommonData.RPWD, action: 'write' },
    { action: 'screenshot' },
    { loc: accReturnUserLogin, action: 'click' },
  ];

  loginHomePageMob = [
    { loc: homePageHamburger, action: 'click' },
    { loc: loginIdMob, action: 'click' },
    { loc: clickSigninBtn, action: 'click' },
    { loc: accEnterReturnUserEmail, data: CommonData.RID, action: 'write' },
    { loc: accReturnUserPwd, data: CommonData.RPWD, action: 'write' },
    { action: 'screenshot' },
    { loc: accReturnUserLoginMob, action: 'click' },
  ];
}

async function mobileEmulateDevice() {
  if (siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE') {
    if (emulationDevice !== '') {
      await t.emulateDevice(emulationDevice);
      gauge.message(emulationDevice);
    }
  }
}

async function configureTestSettings() {
  await t.setConfig({ navigationTimeout: parseInt(timeoutSetting, 10) },
    { selectHiddenElements: true });
  await Helper.setWindowSize(Util.ScreenSizes['1040p'], t);
  await Helper.setWAFCookie(siteDefinition, t);
  await Helper.setAdroll(siteDefinition, t);
  await Helper.setTestGlobalOffer(siteDefinition, t);
  await Helper.setAkamaiBypass(siteDefinition, t);
  await Helper.setApiEnv(siteDefinition, t);
  await Helper.setShowErrorsCookie(siteDefinition, t);
  await Helper.setVarnishBypass(siteDefinition, t);
  await Helper.setMockCookie(siteDefinition, t, mockCookieValue);
  await Helper.getPerlgemEnvCookie(siteDefinition, t);
  await Helper.setOtherCookies(siteDefinition, t);
  await Helper.setRcoGhostCookie(siteDefinition, t);
  await Helper.setRcoVulcanCookie(siteDefinition, t);
  await gotoHomepageValidation();
  // await Helper.setLocaleCookie(siteDefinition, t, localeCookie);
  await Helper.setTestOrderCookie(siteDefinition, t);
  await Helper.setRevisionTag(siteDefinition, t);
}

/*********Generic function's **********/

async function validateInCartPage(remove) {
  if (remove !== '') {
    var CPurl = await t.currentURL();
    if (CPurl.includes(cartPageUrlText)) {
      gauge.message(commonMessage.navigateToCartPage);
      if (await (await t.$(remove)).exists(pollingTime, timeout)) {
        gauge.message(commonMessage.noProductAddedToCart);
        noProductInCart++;
      } else {
        gauge.message(commonMessage.productAddedToCart);
        gauge.screenshot();
      }
    } else {
      assert(!matchCondition, commonMessage.notInCartPage);
    }
  }
}

async function gotoHomepageValidation() {
  const response = await t.goto(siteDefinition.executionContext.url, {
    waitForNavigation: false,
  });
  if (response.status.code === responseCode) {
    gauge.message('Navigated to Home page');
  } else {
    gauge.message(
      `The Homepage didn't return the 200 code, instead it returned the ${response.status.code} code, which is why it is not available`
    );
  }
  gauge.screenshot();
}

// Steps
step('APACACCCHK Initialize Helix', async function () {
  // Initialize the selectors from DB
  await initFrameworkSettings();
});

step(
  'APACACCCHK Verify that the user is able to add max Products to Cart',
  async function () {
    if (addProdsku === '1') {
      var prodCount = 0;
      for (i = 0; i < skuIds.length; i++) {
        await t.goto(siteDefinition.executionContext.adminUrl + prodcatUrl + skuIds[i], {
          waitForEvents: ['DOMContentLoaded'],
        });
        if (await (await t.$(isShoppable)).exists()) {
          var isShoppableValue = await (await t.$(isShoppable)).text();
          if (isShoppableValue === '1') {
            var sku = skuIds[i].split('U')[1];
            let crturl =
              siteDefinition.executionContext.url +
              '/checkout/viewcart.tmpl?_SUBMIT=cart&SKU_BASE_ID=' +
              sku +
              '&QTY=' +
              qtyLimited;
            await t.goto(crturl);
            prodCount++;
            if (prodCount === prodNeedtobeAdd) {
              break;
            }
          } else {
            gauge.message(
              commonMessage.productWithSku +
                skuIds[i] +
                commonMessage.productNotAvailableToAdd
            );
            notAvailableProductsCount++;
          }
        } else {
          gauge.message(skuIds[i] + commonMessage.notValidSku);
        }
      }
      if (notAvailableProductsCount === skuIds.length) {
        assert(!matchCondition, commonMessage.allSkuOutOfStock);
      }
    } else {
      var prodCount = 0;
      for (i = 0; i < skuIds.length; i++) {
        await t.goto(siteDefinition.executionContext.adminUrl + prodcatUrl + skuIds[i], {
          waitForEvents: ['DOMContentLoaded'],
        });
        if (await (await t.$(isShoppable)).exists()) {
          var isShoppableValue = await (await t.$(isShoppable)).text();
          if (isShoppableValue === '1') {
            gauge.message(
              commonMessage.productWithSku +
                skuIds[i] +
                commonMessage.productAvailableToAdd
            );
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
            var carturl = await t.currentURL();
            var newqtyurl = await updateQueryStringParameter(
              carturl,
              'QTY',
              qtyLimited
            );
            await t.goto(newqtyurl, { waitForEvents: ['DOMContentLoaded'] });
            prodCount++;
            if (prodCount === prodNeedtobeAdd) {
              break;
            }
          } else {
            gauge.message(
              commonMessage.productWithSku +
                skuIds[i] +
                commonMessage.productNotAvailableToAdd
            );
            notAvailableProductsCount++;
          }
        } else {
          gauge.message(skuIds[i] + commonMessage.notValidSku);
        }
      }
      if (notAvailableProductsCount === skuIds.length) {
        assert(!matchCondition, commonMessage.allSkuOutOfStock);
      }
    }
    gauge.screenshot();

    // pop-up close
    await Gen.PopUpClose(popUpId);

    // Validate in cart page
    if (siteDefinition.executionContext.platform.toUpperCase() === "PC") {
      await validateInCartPage(removeAssert);
    }else {
      await validateInCartPage(removeAssertMob);
    }
  }
);

step(
  'APACACCCHK Verify that the user has met max product limit',
  async function () {
    // Assert max product limit
    await Gen.AssertText(
      cartLimitmesage,
      cartLimitTxt,
      commonMessage.maxLimitMet,
      commonMessage.maxLimitNotMet
    );

    if (siteDefinition.executionContext.platform.toUpperCase() === "PC") {
      if (checkoutButtonId !== '') {
        if (await (await t.$(checkoutButtonId)).exists()) {
          if (await (await t.$(checkoutButtonId)).isDisabled()) {
            assert(matchCondition);
            gauge.message(commonMessage.checkoutBtnDisabled);
          } else {
            gauge.message(commonMessage.checkoutBtnNotDisabled);
            assert(!matchCondition);
          }
        } else {
          assert(matchCondition);
          gauge.message(commonMessage.checkoutBtnNotVisible);
        }
      }
    }else {
      if (checkoutButtonMob !== '') {
        if (await (await t.$(checkoutButtonMob)).exists()) {
          if (await (await t.$(checkoutButtonMob)).isDisabled()) {
            assert(matchCondition);
            gauge.message(commonMessage.checkoutBtnDisabled);
          } else {
            gauge.message(commonMessage.checkoutBtnNotDisabled);
            assert(!matchCondition);
          }
        } else {
          assert(matchCondition);
          gauge.message(commonMessage.checkoutBtnNotVisible);
        }
      }
    }
  }
);

var maxqty = CommonData.maxQty;
step(
  'APACACCCHK Verify that the user add product more then max qty',
  async function () {
    if (addProdsku === '1') {
      for (i = 0; i < skuIds.length; i++) {
        await t.goto(siteDefinition.executionContext.adminUrl + prodcatUrl + skuIds[i], {
          waitForEvents: ['DOMContentLoaded'],
        });
        if (await (await t.$(isShoppable)).exists()) {
          var isShoppableValue = await (await t.$(isShoppable)).text();
          if (isShoppableValue === '1') {
            var sku = skuIds[i].split('U')[1];
            let crturl =
              siteDefinition.executionContext.url +
              '/checkout/viewcart.tmpl?_SUBMIT=cart&SKU_BASE_ID=' +
              sku +
              '&QTY=' +
              maxqty;
            await t.goto(crturl);
            gauge.message(crturl);
            gauge.screenshot();
            break;
          } else {
            gauge.message(
              commonMessage.productWithSku +
                skuIds[i] +
                commonMessage.productNotAvailableToAdd
            );
            notAvailableProductsCount++;
          }
        } else {
          gauge.message(skuIds[i] + commonMessage.notValidSku);
        }
      }
      if (notAvailableProductsCount === skuIds.length) {
        assert(!matchCondition, commonMessage.allSkuOutOfStock);
      }
    } else {
      for (i = 0; i < skuIds.length; i++) {
        await t.goto(siteDefinition.executionContext.adminUrl + prodcatUrl + skuIds[i], {
          waitForEvents: ['DOMContentLoaded'],
        });
        if (await (await t.$(isShoppable)).exists()) {
          var isShoppableValue = await (await t.$(isShoppable)).text();
          if (isShoppableValue === '1') {
            gauge.message(
              commonMessage.productWithSku +
                skuIds[i] +
                commonMessage.productAvailableToAdd
            );
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
            var carturl = await t.currentURL();
            var newqtyurl = await updateQueryStringParameter(
              carturl,
              'QTY',
              maxqty
            );
            await t.goto(newqtyurl, { waitForEvents: ['DOMContentLoaded'] });
            gauge.message(newqtyurl);
            gauge.screenshot();
            break;
          } else {
            gauge.message(
              commonMessage.productWithSku +
                skuIds[i] +
                commonMessage.productNotAvailableToAdd
            );
            notAvailableProductsCount++;
          }
        } else {
          gauge.message(skuIds[i] + commonMessage.notValidSku);
        }
      }
      if (notAvailableProductsCount === skuIds.length) {
        assert(!matchCondition, commonMessage.allSkuOutOfStock);
      }
    }

    // Assert max product
    if (siteDefinition.executionContext.platform.toUpperCase() === "PC") {
      await Gen.AssertText(
        cartMaxPurchase,
        cartMaxPurError,
        commonMessage.productExceededMaxLimit,
        commonMessage.productNotExceededMaxLimit
      );
    }else{
      await Gen.AssertText(
        cartMaxPurchaseMob,
        cartMaxPurErrorMob,
        commonMessage.productExceededMaxLimit,
        commonMessage.productNotExceededMaxLimit
      );
    }
  }
);

step(
  'APACACCCHK Configuring the prerequisites like set cookies, set test Order flag, revision tag',
  async function () {
    await mobileEmulateDevice();
    await configureTestSettings();
  }
);

step(
  'APACACCCHK Verify that the user is able to add products to the cart successfully',
  async function () {
    let {executionContext:{platform}} = siteDefinition;
    if (productSKU.toString().toUpperCase() === 'TRUE') {
      if (platform.toUpperCase() === "PC") {
        await Gen.randomSkuOrProdCatFlow(
          randomSkuUrl,
          skuLink,
          siteDefinition.executionContext.adminUrl,
          siteDefinition.executionContext.url,
          isShoppable,
          isDisplayable,
          productUrl,
          noDisplayableProductError,
          prodcatUrl,
          skuIds,
          addToBagSpp
        );
      } else{
        await Gen.randomSkuOrProdCatFlow(
          randomSkuUrl,
          skuLink,
          siteDefinition.executionContext.adminUrl,
          siteDefinition.executionContext.url,
          isShoppable,
          isDisplayable,
          productUrl,
          noDisplayableProductError,
          prodcatUrl,
          skuIds,
          addToBagSppMob
        );
      }
    }
    if (CommonData.sppPage1 !== '') {
      if (platform.toUpperCase() === "PC") {
        await t.goto(siteDefinition.executionContext.url, { waitForEvents: ['DOMContentLoaded'] });
        await Gen.ElementAction(loginHomePagePC);
        await AddProdToCartfromSPP(addToBagSpp);
      }else {
        await t.goto(siteDefinition.executionContext.url, { waitForEvents: ['DOMContentLoaded'] });
        await Gen.ElementAction(loginHomePageMob);
        await AddProdToCartfromSPP(addToBagSppMob);
      }
    }
    if (sppPopUp !== '') {
      await Gen.PopUpClose(sppPopUp);
    }
    // validate in SPP
    if (platform.toUpperCase() === "PC") {
      await ValidateInSPP(sppPageProdHeader);
    } else {
      await ValidateInSPP(sppPageProdHeaderMob);
    }
    // click on 'add to cart' btn
    if (platform.toUpperCase() === "PC") {
      await AddProductToBag(addToBagSpp);
    } else {
      await AddProductToBag(addToBagSppMob);
    }
  }
);

step(
  'APACACCCHK Verify that the user is able to add products to the cart successfully from prodcat', 
  async function(){
    let {executionContext:{platform}} = siteDefinition;
      await Gen.gotoProdcat(
        siteDefinition.executionContext.adminUrl,
        siteDefinition.executionContext.url,
        skuIds,
        prodcatUrl,
        isShoppable,
        isDisplayable,
        productUrl,
        noDisplayableProductError);
      if (platform.toUpperCase() === "PC") {
        await ValidateInSPP(sppPageProdHeader);
      } else {
        await ValidateInSPP(sppPageProdHeaderMob);
      }
      // click on 'add to cart' btn
      if (platform.toUpperCase() === "PC") {
        await AddProductToBag(addToBagSpp);
      } else {
        await AddProductToBag(addToBagSppMob);
      }
});

step(
  'APACACCCHK Verify that the user is able to view and update the cart',
  async function () {
    let {executionContext:{platform}} = siteDefinition;
    await mobileEmulateDevice();
    // click on cart overlay
    if (platform.toUpperCase() === "PC") {
      await ClickOnCartOverlay(gnavCartIcon, addToBagSpp);
    } else {
      await ClickOnCartOverlay(gnavCartIconMob, addToBagSppMob);
    }

    // validate in cart page
    if (platform.toUpperCase() === "PC") {
      await validateInCartPage(removeAssert);
      if (noProductInCart === 1) {
        if (productSKU.toString().toUpperCase() === 'TRUE') {
          await Gen.randomSkuOrProdCatFlow(
            randomSkuUrl,
            skuLink,
            siteDefinition.executionContext.adminUrl,
            siteDefinition.executionContext.url,
            isShoppable,
            isDisplayable,
            productUrl,
            noDisplayableProductError,
            prodcatUrl,
            skuIds,
            addToBagSpp
          );
        }
        if (CommonData.sppPage1 !== '') {
          await AddProdToCartfromSPP(sppPageProdHeader);
        }
        await ValidateInSPP(sppPageProdHeader);
        await AddProductToBag(addToBagSpp);
        await ClickOnCartOverlay(gnavCartIcon, addToBagSpp);
        await validateInCartPage(removeAssert);
        if (noProductInCart === 2) {
          assert(!matchCondition, commonMessage.secondIterationProductNotAdded);
        }
      }
    } else {
      await validateInCartPage(removeAssertMob);
      if (noProductInCart === 1) {
        if (productSKU.toString().toUpperCase() === 'TRUE') {
          await Gen.randomSkuOrProdCatFlow(
            randomSkuUrl,
            skuLink,
            siteDefinition.executionContext.adminUrl,
            siteDefinition.executionContext.url,
            isShoppable,
            isDisplayable,
            productUrl,
            noDisplayableProductError,
            prodcatUrl,
            skuIds,
            addToBagSppMob
          );
        }
        if (CommonData.sppPage1 !== '') {
          await AddProdToCartfromSPP(sppPageProdHeaderMob);
        }
        await ValidateInSPP(sppPageProdHeaderMob);
        await AddProductToBag(addToBagSppMob);
        await ClickOnCartOverlay(gnavCartIconMob, addToBagSppMob);
        await validateInCartPage(removeAssertMob);
        if (noProductInCart === 2) {
          assert(!matchCondition, commonMessage.secondIterationProductNotAdded);
        }
      }
    }
  }
);

step(
  'APACACCCHK Verify that the user is able to proceed to <user> Sign in successfully',
  async function (user) {
    let {executionContext:{platform}} = siteDefinition;
    await Gen.PopUpClose(popUpId);
    await Gen.getTransId(transID);
    if (platform.toUpperCase() === "PC") {
      if (checkoutButtonId.localeCompare('') !== 0) {
        await t.evaluate(
          await t.$(checkoutButtonId, { waitForEvents: ['DOMContentLoaded'] }),
          (ele) => ele.click(),
          { waitForNavigation: false }
        );
      } else {
        gauge.message(commonMessage.didNotClickCheckoutBtn);
      }
    }else{
      if (checkoutButtonMob !== '') {
        await t.evaluate(
          await t.$(checkoutButtonMob, { waitForEvents: ['DOMContentLoaded'] }),
          (ele) => ele.click(),
          { waitForNavigation: false }
        );
      } else {
        gauge.message(commonMessage.didNotClickCheckoutBtn);
      }
    }

    // sample page
    if (platform.toUpperCase() === "PC") {
      if (sampleContinue !== '' || samplePageContinue !== '') {
        if (
          (await (await t.$(sampleContinue)).exists(pollingTime, timeout)) ||
          (await (await t.$(samplePageContinue)).exists(pollingTime, timeout))
        ) {
          await Gen.ElementAction(samplePageDetails);
          await Gen.TryCatchClickAction(checkoutBtnSampleReview);
          await Gen.TryCatchClickAction(secondSamplePageBtn);
        }
      }
    }else {
      if (sampleContinueMob !== '' || samplePageContinueMob !== '') {
        if (
          (await (await t.$(sampleContinueMob)).exists(pollingTime, timeout)) ||
          (await (await t.$(samplePageContinueMob)).exists(pollingTime, timeout))
        ) {
          await Gen.ElementAction(samplePageDetailsMob);
          await Gen.TryCatchClickAction(checkoutBtnSampleReviewMob);
          await Gen.TryCatchClickAction(secondSampleContinueMob);
        }
      }
    }

    // sign in page
    await Gen.PopUpClose(popUp);
    if (user === 'Guestuser') {
      if (platform.toUpperCase() === "PC") {
        await Gen.ClickAction(registerNow);
        await Gen.ElementAction(guestUserDetails);
        await Gen.ClickAction(guestUserContinue);
      }else {
        await Gen.ClickAction(registerNowMob);
        await Gen.ElementAction(guestUserDetails);
        await Gen.ClickAction(guestUserContinueMOb);
      }
    }
    if (user === 'Newuser') {
      if (platform.toUpperCase() === "PC") {
        await Gen.waitForElementNClick(registerNow);
        await Gen.ElementAction(guestUserDetails);
        await Gen.ClickAction(guestUserContinue);
        await Gen.ElementAction(newUserDetails);
        await Gen.ClickAction(newUserContinue);
      }else{
        await Gen.waitForElementNClick(registerNowMob);
        await Gen.ElementAction(guestUserDetails);
        await Gen.ClickAction(guestUserContinueMOb);
        await Gen.ElementAction(newUserDetails);
        await Gen.ClickAction(newUserContinueMob);
      }
      if (goBackNU.toString().toUpperCase() === 'TRUE') {
        await t.goBack({ waitForEvents: ['loadEventFired'] });
      }
    }

    // return user
    if (user === 'Returnuser') {
      if (returnUserId !== '') {
        if (platform.toUpperCase() === "PC") {
          await Gen.ElementAction(returnUserDetailsPc);
          await Gen.ClickAction(returnUserSigninButton);
        }else {
          await Gen.ElementAction(returnUserDetailsMob);
          await Gen.ClickAction(returnUserContinueMob);
        }
      }
      if (goBackRU.toString().toUpperCase() === 'TRUE') {
        await t.goBack({ waitForEvents: ['loadEventFired'] });
      }
      if (platform.toUpperCase() === "PC") {
        await Gen.removeExcessProduct(removeBtn);
      } else {
        await Gen.removeExcessProduct(removeBtnMob);
      }
    }

    // Cart review
    if (platform.toUpperCase() === "PC") {
      await Gen.TryCatchClickAction(checkoutBtnSampleReview);
      await Gen.TryCatchClickAction(checkoutBtnCartReview);
    } else {
      await Gen.TryCatchClickAction(checkoutBtnSampleReviewMob);
      await Gen.TryCatchClickAction(checkoutBtnCartReviewMob);
    }

    // Cart review
    if (platform.toUpperCase() === "PC") {
      await Gen.TryCatchClickAction(secondSamplePageBtn);
      await Gen.TryCatchClickAction(sampleCartReviewBtn);
    } else {
      await Gen.TryCatchClickAction(secondSampleContinueMob);
      await Gen.TryCatchClickAction(sampleCartReviewBtnMob);
    }

    // Cart review
    if (platform.toUpperCase() === "PC") {
      await Gen.TryCatchClickAction(secondSamplePageContinue);
    } else {
      await Gen.TryCatchClickAction(secondSamplePageContinueMob);
    }
  }
);

step(
  'APACACCCHK Verify that the user is able to enter the <user> shipping details successfully',
  async function (user) {
    let {executionContext:{environment}} = siteDefinition;
    let {executionContext:{platform}} = siteDefinition;
    if (
      (user === 'Guestuser' || user === 'Newuser') &&
      mobileSignUpPopUp !== ''
    ) {
      await Gen.ClickAction(mobileSignUpPopUp);
    }
    if (
      deliveryMethodId !== '' &&
      (user === 'Guestuser' || user === 'Newuser')
    ) {
      await Gen.ClickAction(deliveryMethodId);
      gauge.message(commonMessage.homeDeliverySelected);
    }
    // enter shipping address
    if (user === 'Guestuser' || user === 'Newuser') {
      if (platform.toUpperCase() === "PC" && (environment === 'PROD' || environment === 'PREPROD')) {
        await Gen.PopUpClose(canWeAssistPopUp);
        await Gen.ElementAction(titleInShippingDeatilPC);
        await Gen.ElementAction(shippingDetails);
      } else if (platform.toUpperCase() === "PC") {
        await Gen.ElementAction(titleInShippingDeatilPCStage);
        await Gen.ElementAction(shippingDetailsStage);
      }
      if (platform.toUpperCase() === "MOBILE" && (environment === 'PROD' || environment === 'PREPROD')) {
        await Gen.PopUpClose(canWeAssistPopUp);
        await Gen.ElementAction(titleInShippingDeatilMob);
        await Gen.ElementAction(shippingDetails);
      } else if (platform.toUpperCase() === "MOBILE") {
        await Gen.ElementAction(titleInShippingDeatilMobStage);
        await Gen.ElementAction(shippingDetailsStage);
      }
    }

    // Delivery method
    if (deliveryMethodDropDown !== '') {
      // Delivery method/address will appear for some brand/feature (MY=NU, LS-JP=NU,RU)
      try {
        await (
          await t.dropDown({ id: deliveryMethodDropDown })
        ).select({ index: '1' });
        gauge.message(commonMessage.standardWestSelected);
      } catch (e) {
        gauge.message(commonMessage.standardWestNotSelected);
      }
    }

    // Select payment option
    // Payment option btn apply for some Brands/Locale (TH)
    await Gen.TryCatchClickAction(paymentOptionId);
    await Gen.TryCatchScrollAction(paymentOptionId);

    // select billing address
    if ((billingAddress !== '' || selectBillingAddress!=='') && user === 'Returnuser') {
      if (await (await t.$(billingAddress)).exists()) {
        await Gen.TryCatchClickAction(billingAddress);
      }
      if(selectBillingAddress !==""){
        await (
          await t.dropDown({ id: selectBillingAddress })).select({ index: '1' });
      }
    }

    if (enterNewUserPwdShipping !== '' && user === 'Newuser') {
      await Gen.ElementAction(newUserPwdDetails);
    }
    // payment option terms and condition
    if (
      paymentOptionTnC !== '' &&
      (user === 'Guestuser' || user === 'Newuser')
    ) {
      await Gen.ClickAction(paymentOptionTnC);
    }

    // Shipping address continue btn
    if (platform.toUpperCase() === "PC") {
      // Shipping address continue btn apply for some Brands/Locale
      await Gen.TryCatchClickAction(shippingAddressContinue);
    }else {
      // Shipping address continue btn apply for some Brands/Locale
      await Gen.TryCatchClickAction(shippingContinueMob);
      await Gen.TryCatchClickAction(shippingContinueMob);
    }
    // Enter mobile number to receive sms
    if (mobileNumberSMS !== '' && user === 'Newuser') {
      await Gen.WriteAction(mobileNumberSMS, CommonData.phoneNumber);
    }
    // click terms and condition for sale
    await Gen.ClickAction(TandCForSales);

    // Order review checkout
    if (orderReviewCheckout !== '' && platform.toUpperCase() === "PC") {
      await Gen.ClickAction(orderReviewCheckout);
      gauge.screenshot();
    } else if (orderReviewCheckoutMob !== '' && platform.toUpperCase() === "MOBILE") {
      await Gen.ClickAction(orderReviewCheckoutMob);
      gauge.screenshot();
    }
    // New user details
    if ((environment === 'PROD' || environment === 'PREPROD') && user === 'Newuser') {
      if (
        enterNewUserPwdAccount !== '' ||
        phoneNumberToCreateAC !== '' ||
        securityAns !== ''
      ) {
        await Gen.ElementAction(createNewUserDetails);
      }
    } else if (user === 'Newuser') {
      if (
        enterNewUserPwdAccountStage !== '' ||
        phoneNumberToCreateAC !== '' ||
        securityAnsStage !== ''
      ) {
        await Gen.ElementAction(createNewUserDetailsStage);
      }
    }
    // click create account continue btn
    // Create Account page appear for few brand/locale
    await Gen.TryCatchClickAction(createAccountContinue);

    // select payment method radio btn
    if (platform.toUpperCase() === "PC") {
      // Payment method radio btn appear for few brand/locale
      await Gen.TryCatchClickAction(paymentMethodRadioButton);
      await Gen.ClickAction(selectPaymentMethodPC);
      gauge.screenshot();
    }
    if (platform.toUpperCase() === "MOBILE") {
      // Paymnet method radio btn appear for some site in PC/MOB
      await Gen.TryCatchClickAction(paymentMethodRadioButtonMob);
      await Gen.ClickAction(selectPaymentMethodMob);
      await Gen.ClickAction(selectPaymentMethod);
      await Gen.ClickAction(paymentSelectBtn);
      gauge.screenshot();
    }

    // click on age over 18 terms and condition
    // T&C age over 18 is applicable for few Brands/Locals
    await Gen.TryCatchClickAction(termsAndConditionForAge);

    // click on complete the order
     // click on complete the order
     if (platform.toUpperCase() === "PC") {
      // Order info page is applicable for few Brands/Locals (TW)
      await Gen.TryCatchClickAction(completeTheOrder);
    }else {
      // Order info page is applicable for few Brands/Locals (TW)
      await Gen.TryCatchClickAction(completeTheOrderMob);
    }

    if (orderReviewContinue !=='') {
        try {
          t.alert(orderCompletionPopup, async () => await t.accept());
          // Order info page is applicable for few Brands/Locals (TW)
          await t.evaluate(await t.$(orderReviewContinue), ele=>ele.click());
          console.log('handled Js browser popup');
        } catch (error) {
          console.log('Js browser popup not handled');
        }
    }
    if (deleteProduct) {
      await t.goto(siteDefinition.executionContext.adminUrl + '/shared/deletecart.tmpl', {
        waitForEvents: ['loadEventFired'],
      });
      console.log('Products deleted from cart review page');
    }
  }
);

step(
  'APACACCCHK Verify that the user is able to select the payment method successfully',
  async function () {
    let {executionContext:{platform}} = siteDefinition;
    if (creditcardHover !== '') {
      for (i = 0; i < 5; i++) {
        if (await (await t.$(creditcardHover)).exists()) {
          await t.evaluate(
            await t.$(creditcardHover, { waitForEvents: ['DOMContentLoaded'] }),
            (ele) => ele.hover()
          );
          await t.evaluate(
            await t.$(creditcardRadio, { waitForEvents: ['DOMContentLoaded'] }),
            (ele) => ele.click()
          );
          gauge.screenshot();
          break;
        } else {
          await t.waitFor(customTimeout);
          gauge.message(commonMessage.waitFourSecMessage);
        }
      }
    }
    if (paymentMethodDD !== '' && platform.toUpperCase() === "MOBILE") {
      for (i = 0; i < 5; i++) {
        if (await (await t.dropDown({ id: paymentMethodDD })).exists()) {
          await (
            await t.dropDown({ id: paymentMethodDD })
          ).select(CommonData.paymentMethod);
          gauge.screenshot();
          break;
        } else {
          await t.waitFor(customTimeout);
          gauge.message(commonMessage.waitFourSecMessage);
        }
      }
    }
    if (cvvId !== '') {
      if (platform.toUpperCase() === "PC" && paymentIframe !== 'TRUE') {
        await Gen.ClickAction(cardTypeId);
        await Gen.ElementAction(paymentDetailsPC);
      } else if (platform.toUpperCase() === "PC" && paymentIframe === 'TRUE') {
        await waitForElementAndWrite(creditCardId, CommonData.creditcard);
        await waitForElementAndWrite(
          creditCardHolderName,
          CommonData.ccHolderName
        );
        await waitForElementAndWrite(expDateId, CommonData.ccMonthEntry);
        await waitForElementAndWrite(cvvId, CommonData.cvvEntry);
        gauge.screenshot();
      }
      if (platform.toUpperCase() === "MOBILE") {
        Gen.ClickAction(paymentType);
        await Gen.ClickAction(cardTypeId);
        await Gen.ElementAction(paymentDetailsMob);
      }
    }
  }
);

step(
  'APACACCCHK Verify that the user is able to place the order successfully',
  async function () {
    if (toplaceorder.toLowerCase() === 'true' && CommonData.placeOrder === '1') {
      await t.waitFor(await t.$(payButtonId), customTimeout);
      await Gen.ClickAction(payButtonId);
      if (CommonData.orderMessage !== '') {
        await Gen.AssertUrl(
          CommonData.orderConfirmUrl,
          commonMessage.orderPlaced,
          commonMessage.orderNotPlaced
        );
      }
    }

    // order number
    if (toplaceorder.toLowerCase() === 'true' && CommonData.placeOrder === '1') {
      var OrderNum = await (await t.$(orderId)).text();
      gauge.message(OrderNum);
      gauge.screenshot();
    }
  }
);

step(
  'APACACCCHK Verify that the user is able to increase the quantity in cart page',
  async function () {
    await Gen.PopUpClose(popUpId);
    if (selectQtyDropDown !== '') {
      for (i = 0; i < 5; i++) {
        if (await (await t.dropDown({ name: selectQtyDropDown })).exists()) {
          await (
            await t.dropDown({ name: selectQtyDropDown })
          ).select(CommonData.selectQty),
            { force: true };
          gauge.message(commonMessage.qtyIncreased);
          gauge.screenshot();
          break;
        } else {
          await t.waitFor(customTimeout);
          gauge.message(commonMessage.waitFourSecMessage);
        }
      }
    } else if (clickQtyIncrease !== '') {
      await Gen.ClickAction(clickQtyIncrease);
    } else {
      gauge.message(commonMessage.stepNotApplicable);
    }
  }
);

step(
  'APACACCCHK Verify that the user is able to remove the product from cart page',
  async function () {
    let {executionContext:{platform}} = siteDefinition;
    await Gen.PopUpClose(popUpId);
    if (platform.toUpperCase() === "PC") {
      await Gen.ClickInLoop(removeBtn);
    }else {
      await Gen.ClickInLoop(removeBtnMob);
    }

    if (platform.toUpperCase() === "PC") {
      await Gen.AssertText(
        removeAssert,
        cartEmptAssertTxt,
        commonMessage.productRemovedFromCart,
        commonMessage.productNotRemovedFromCart
      );
    }else{
      await Gen.AssertText(
        removeAssertMob,
        cartEmptAssertTxtMob,
        commonMessage.productRemovedFromCart,
        commonMessage.productNotRemovedFromCart
      );
    }
  }
);

step(
  'APACACCCHK Verify that user can create a new account by entering valid credentials',
  async function () {
    let {executionContext:{platform}} = siteDefinition;
    // Click on login btn/link in cart page
    if (platform.toUpperCase() === "PC") {
      if (productSKU.toString().toUpperCase() === 'TRUE') {
        await Gen.PopUpClose(popUpId);
        if (loginId !== '') {
          await t.evaluate(
            await t.$(loginId, { waitForEvents: ['DOMContentLoaded'] }),
            (ele) => {
              ele.click();
            }
          );
        }
        // await Gen.ClickAction(gnavLoginId);
        if (gnavLoginId !== '') {
          await t.evaluate(await t.$(gnavLoginId), (ele) => ele.click(), {
            waitForNavigation: false,
          });
        }
      }
    }else {
      if (productSKU.toString().toUpperCase() === 'TRUE') {
        await Gen.PopUpClose(popUpId);
        if (loginIdMob !== '') {
          await t.evaluate(
            await t.$(loginIdMob, { waitForEvents: ['DOMContentLoaded'] }),
            (ele) => ele.click()
          );
        }
        // await Gen.ClickAction(gnavLoginIdMob);
        if (gnavLoginIdMob !== '') {
          await t.evaluate(await t.$(gnavLoginIdMob), (ele) => ele.click(), {
            waitForNavigation: false,
          });
        }
      }
    }
    // Signup for new user
    if (platform.toUpperCase() === "PC") {
      if (accRegisterNow !== '') {
        for (j = 1; j <= 5; j++) {
          if (await (await t.$(accRegisterNow)).exists(timeout)) {
            await t.evaluate(
              await t.$(accRegisterNow, { waitForEvents: ['DOMContentLoaded'] }),
              (ele) => {
                ele.click();
              }
            );
            gauge.message('Element appeared');
            break;
          } else {
            if (j == 4) {
              assert(false, 'Element did not appeared');
            }
            await t.waitFor(6000);
          }
        }
      }
      await Gen.ElementAction(accRegisterDeatils);
      await Gen.ClickAction(accRegisterTerms);
      await Gen.ClickAction(accRegisterCreateAcBtn);
      await Gen.ClickAction(userName); 
    }else {
      if (accRegisterNowMob !== '') {
        for (j = 1; j <= 5; j++) {
          if (await (await t.$(accRegisterNowMob)).exists(timeout)) {
            await t.evaluate(
              await t.$(accRegisterNowMob, {
                waitForEvents: ['DOMContentLoaded'],
              }),
              (ele) => {
                ele.click();
              }
            );
            gauge.message('Element appeared');
            break;
          } else {
            if (j == 4) {
              assert(false, 'Element did not appeared');
            }
            await t.waitFor(6000);
          }
        }
      }
      await Gen.ElementAction(accRegisterDeatils);
      await Gen.ClickAction(accRegisterTermsMob);
      await Gen.ClickAction(accRegisterCreateAcBtnMob);
      await Gen.ClickAction(userName); 
    }
    await Gen.ClickAction(accMobileSignUpPopUp);
    // Click on hamburger icon and myaccount
    if (platform.toUpperCase() === "MOBILE") {
      await Gen.ClickAction(accHamburgerCartPage);
      await Gen.ClickAction(accMyAccountCartPage);
    }
    // Register for new user
    if (platform.toUpperCase() === "PC") {
      await Gen.ElementAction(accountRegisterTitlePC);
      await Gen.ElementAction(accountRegisterDetails);
      await Gen.ClickAction(accRegSubmit);
    }else {
      await Gen.ElementAction(accountRegisterTitleMob);
      await Gen.ElementAction(accountRegisterDetails);
      await Gen.ClickAction(accRegSubmitMob);
    }
    // Click on hamburger icon and myaccount
    if (platform.toUpperCase() === "MOBILE") {
      await Gen.ClickAction(accHamburgerCartPage);
      await Gen.ClickAction(accMyAccountCartPage);
    }
  }
);

step(
  'APACACCCHK Verify that user can edit personal profile details with valid details',
  async function () {
    let {executionContext:{platform}} = siteDefinition;
    // click on setting
    await Gen.ClickAction(accClickOnSettings);
    // edit personal profile details
    if (platform.toUpperCase() === "PC") {
      await Gen.ElementAction(pcTitlePP);
    }else {
      await Gen.ElementAction(mobTitlePP);
    }
    await Gen.PopUpClose(bannerPopUp);
    await Gen.ElementAction(personalProfiledetail);
    // click back btn
    if (platform.toUpperCase() === "MOBILE") {
      // Back btn will appear for few sites
      await Gen.TryCatchClickAction(accClickBackBtn);
    }
  }
);

step(
  'APACACCCHK Verify that user can add a new shipping/billing address by entering valid details',
  async function () {
    let {executionContext:{platform}} = siteDefinition;
    // click on setting
    await Gen.ClickAction(accClickOnSettings);
    // click on myaddress
    if (platform.toUpperCase() === "PC") {
      await Gen.ClickAction(addressBook);
    }else {
      await Gen.ClickAction(accMobAddressBook);
    }
    // click on add new address
    if (platform.toUpperCase() === "PC") {
      await Gen.ClickAction(accNewAddressButton);
    }else {
      await Gen.ClickAction(accNewAddressButtonMob);
    }
    // enter shipping address details
    if (platform.toUpperCase() === "PC") {
      await Gen.ElementAction(titleDetailAccountPC);
      await Gen.PopUpClose(canWeAssistPopUp);
      await Gen.ElementAction(shippingAddDetailAccount);
      await Gen.ClickAction(accAddressSubmit);
    }else {
      await Gen.ElementAction(titleDetailAccountMob);
      await Gen.PopUpClose(canWeAssistPopUp);
      await Gen.ElementAction(shippingAddDetailAccountMob);
      await Gen.ClickAction(accAddressSubmitMob);
    }
  }
);

step(
  'APACACCCHK Verify that user can sign out of their account',
  async function () {
    let {executionContext:{platform}} = siteDefinition;
    // click on member info
    await Gen.ClickAction(accMemberInfo);

    // click on Hamburger
    if (platform.toUpperCase() === "MOBILE") {
      await Gen.ClickAction(accHamburgerCartPage);
      // click back btn
      // Back btn will appear for few sites
      await Gen.TryCatchClickAction(accClickBackBtn);
    }
    // click on signout button/link
    if (platform.toUpperCase() === "PC") {
      await Gen.ClickAction(signoutHeader);
      await Gen.ClickAction(accSignout);
    }else {
      await Gen.ClickAction(signoutHeader);
      await Gen.ClickAction(accSignoutMob);
    }
    // Assert signout text
    if (accSignoutAssert !== '') {
      await Gen.AssertText(
        accSignoutAssert,
        CommonData.signOutAssertTxt,
        commonMessage.signedOut,
        commonMessage.notSignedOut
      );
    }
  }
);

step(
  'APACACCCHK Verify that registered user can sign-in with valid credentials',
  async function () {
    let {executionContext:{platform}} = siteDefinition;
    // Signin as a return user
    if (productSKU.toString().toUpperCase() === 'TRUE') {
      if (platform.toUpperCase() === "PC") {
        await Gen.ElementAction(accSigininDetailsPC);
      }else {
        await Gen.ElementAction(accSigininDetailsMob);
      }
    }
    // click on Hamburger
    if (platform.toUpperCase() === "MOBILE") {
      await Gen.ClickAction(accHamburgerCartPage);
      // click return user account
      await Gen.ClickAction(accClickReturnUserAccount);
    }
  }
);

step(
  'APACACCCHK Verify that user can view their order history',
  async function () {
    let {executionContext:{platform}} = siteDefinition;
    // click on order view
    if (platform.toUpperCase() === "PC") {
      await Gen.ClickAction(accMyOrderViewDetail);
      gauge.screenshot();
    }
    if (platform.toUpperCase() === "MOBILE") {
      //to handle cl-jp site issue
      try {
        await t.click(t.link('return to account'));
      } catch (error) {}
      await Gen.ClickAction(accMyOrderViewDetailMob);
      gauge.screenshot();
    }
  }
);

step(
  'APACACCCHK Verify that user can view their list of favourite products',
  async function () {
    let {executionContext:{platform}} = siteDefinition;
    // click on Hamburger
    if (platform.toUpperCase() === "MOBILE") {
      await Gen.ClickAction(accHamburgerCartPage);
      await Gen.ClickAction(accHamburgerLoginPage);
      await Gen.ClickAction(accMyAccountLoginPage);
      // click back btn
      await Gen.TryCatchClickAction(accClickBackBtn);
    }
    // click on favourites
    if (platform.toUpperCase() === "PC") {
      if (accFavourites !== '') {
        await Gen.ClickAction(accFavourites);
        gauge.message(commonMessage.favouritePage);
        gauge.screenshot();
      }
    }else {
      if (accFavouritesMob !== '') {
        await Gen.ClickAction(accFavouritesMob);
        gauge.message(commonMessage.favouritePage);
        gauge.screenshot();
      }
    }
  }
);

step(
  'APACACCCHK Verify that user can add a shipping/billing address by entering valid details',
  async function () {
    let {executionContext:{platform}} = siteDefinition;
    // click on Hamburger
    if (platform.toUpperCase() === "MOBILE") {
      await Gen.ClickAction(accHamburgerCartPage);
      await Gen.ClickAction(accHamburgerLoginPage);
      await Gen.ClickAction(accMyAccountLoginPage);
      // click back btn
      await Gen.TryCatchClickAction(accClickBackBtn);
    }
    // click on setting
    await Gen.ClickAction(accClickOnSettings);
    // click on myaddress
    if (platform.toUpperCase() === "PC") {
      await Gen.ClickAction(addressBook);
    }else {
      await Gen.ClickAction(accMobAddressBook);
    }
    // click on new address
    if (platform.toUpperCase() === "PC") {
      await Gen.ClickAction(accAddNewAddress);
    }else {
      await Gen.ClickAction(accAddNewAddressMob);
    }
    // Enter shipping address
    if (shippingAddWithElementAction.toString().toUpperCase() === 'TRUE') {
      if (platform.toUpperCase() === "PC") {
        await Gen.ElementAction(titleDetailAccountPC);
        await Gen.PopUpClose(canWeAssistPopUp);
        await Gen.ElementAction(shippingAddDetailRUAccount);
        await Gen.ClickAction(accStandardDeliveryAddress);
        await Gen.ClickAction(accAddressSubmit);
      }else {
        await Gen.ElementAction(titleDetailAccountMob);
        await Gen.PopUpClose(canWeAssistPopUp);
        await Gen.ElementAction(shippingAddDetailRUAccountmob);
        await Gen.ClickAction(accStandardDeliveryAddressMob);
        await Gen.ClickAction(accAddressSubmitMob);
      }
    }
    if (shippingAddNotWithElementAction.toString().toUpperCase() === 'TRUE') {
      if (platform.toUpperCase() === "PC") {
        await Gen.WriteAction(accFirstName, CommonData.firstNameEntry);
        if (tabPress.toString().toUpperCase() === 'TRUE') {
          await t.press(['Tab']);
        }
        await t.press(['Tab']);
        await t.press(['Alt', 'ArrowDown']);
        await t.press(['ArrowDown']);
        await t.press(['ArrowDown']);
        await t.press(['Enter']);
        await t.waitFor(customTimeout);
        await t.press(['Tab']);
        await t.press(['Alt', 'ArrowDown']);
        await t.press(['ArrowDown']);
        await t.press(['ArrowDown']);
        await t.press(['Enter']);
        await t.waitFor(customTimeout);
        await t.press(['Tab']);
        await t.press(['Alt', 'ArrowDown']);
        await t.press(['ArrowDown']);
        await t.press(['ArrowDown']);
        await t.press(['Enter']);
        await t.waitFor(customTimeout);
        await Gen.WriteAction(accEnterAddress, CommonData.address);
        await Gen.WriteAction(accEnterPhone, CommonData.phoneNumber);
        gauge.screenshot();
        await Gen.ClickAction(accAddressSubmit);
      }
      if (platform.toUpperCase() === "MOBILE") {
        if (pressActionPC.toString().toUpperCase() === 'TRUE') {
          await Gen.WriteAction(accFirstName, CommonData.firstNameEntry);
          if (tabPress.toString().toUpperCase() === 'TRUE') {
            await t.press(['Tab']);
          }
          await t.press(['Tab']);
          await t.press(['Alt', 'ArrowDown']);
          await t.press(['ArrowDown']);
          await t.press(['ArrowDown']);
          await t.press(['Enter']);
          await t.waitFor(customTimeout);
          await t.press(['Tab']);
          await t.press(['Alt', 'ArrowDown']);
          await t.press(['ArrowDown']);
          await t.press(['ArrowDown']);
          await t.press(['Enter']);
          await t.waitFor(customTimeout);
          await t.press(['Tab']);
          await t.press(['Alt', 'ArrowDown']);
          await t.press(['ArrowDown']);
          await t.press(['ArrowDown']);
          await t.press(['Enter']);
          await t.waitFor(customTimeout);
          await Gen.WriteAction(accEnterAddress, CommonData.address);
          await Gen.WriteAction(accEnterPhone, CommonData.phoneNumber);
          gauge.screenshot();
          await Gen.ClickAction(accAddressSubmit);
        }
        if (pressActionMob.toString().toUpperCase() === 'TRUE') {
          await Gen.WriteAction(accFirstName, CommonData.firstNameEntry);
          for (let k = 1; k <= 3; k++) {
            await t.evaluate(
              await t.$(shippingDetailsDropDown + '[' + k + ']'),
              (ele) => ele.click()
            );
            await t.evaluate(
              await t.$(selectDropDownOption + '[' + k + ']'),
              (ele) => ele.click()
            );
          }
          await Gen.WriteAction(accEnterAddress, CommonData.address);
          await Gen.WriteAction(accEnterPhone, CommonData.phoneNumber);
          gauge.screenshot();
          await Gen.ClickAction(accAddressSubmitMob);
        }
      }
    }
  }
);

step(
  'APACACCCHK Verify that user can edit an existing shipping/billing address',
  async function () {
    let {executionContext:{platform}} = siteDefinition;
    // click on edit address
    if (platform.toUpperCase() === "PC") {
      if (accEditAddress !== '') {
        await t.reload({ waitForEvents: ['loadEventFired'] });
        await Gen.ClickAction(accEditAddress);
      } else if (editAddressPC !== '') {
        /** This step is for BB-CN to avoid reload **/
        await Gen.ClickAction(editAddressPC);
      }
    }else{
      if (accEditAddressMob !== '') {
        await t.reload({ waitForEvents: ['loadEventFired'] });
        await Gen.ClickAction(accEditAddressMob);
      } else if (editAddressMob !== '') {
        await Gen.ClickAction(editAddressMob);
      }
    }
    // edit first name
    if (accFirstName !== '') {
      await t.waitFor(await t.$(accFirstName), customTimeout);
      await Gen.WriteAction(accFirstName, CommonData.firstNameEntry);
      await t.press(['Control', 'KeyA']);
      await t.press('Delete');
      await Gen.WriteAction(accFirstName, CommonData.firstNameEntry);
      gauge.screenshot();
    }
    // click address submit btn
    if (platform.toUpperCase() === "PC") {
      await Gen.ClickAction(accAddressSubmit);
    }else {
      await Gen.ClickAction(accAddressSubmitMob);
    }
  }
);

step(
  'APACACCCHK Verify that user can delete an existing shipping/billing address',
  async function () {
    let {executionContext:{platform}} = siteDefinition;
    if (platform.toUpperCase() === "MOBILE") {
      if (accAddressDeleteMob !== '') {
        // Delete Address in MOB will have Browser pop-up
        try {
          t.alert(mobPopupDelete, async () => await t.accept());
          await Gen.ClickAction(accAddressDeleteMob);
          gauge.screenshot();
        } catch (e) {
          gauge.message(commonMessage.browserPopUpClose);
        }
      }
    }
    // delete address
    if (platform.toUpperCase() === "PC") {
      await Gen.ElementAction(accDeleteAddPC);
    }else {
      await Gen.ElementAction(accDeleteAddMob);
    }
  }
);

step(
  'APACACCCHK Verify that registered user can sign in with valid credentials',
  async function () {
    let {executionContext:{platform}} = siteDefinition;
    // Click on login btn/link in cart page
    if (productSKU.toString().toUpperCase() === 'TRUE') {
      if (platform.toUpperCase() === "PC") {
        await Gen.PopUpClose(popUpId);
        await Gen.ClickAction(loginId);
        await Gen.ClickAction(gnavLoginId);
      }else {
        await Gen.PopUpClose(popUpId);
        await Gen.ClickAction(loginIdMob);
        await Gen.ClickAction(gnavLoginIdMob);
      }
      // return user signin
      if (platform.toUpperCase() === "PC") {
        await Gen.ElementAction(accSigininDetailsPC);
      }else {
        await Gen.ElementAction(accSigininDetailsMob);
      }
    }
    // Gnav member login
    if (gnavMemLogin !== '') {
      if (CommonData.sppPage1 !== '') {
        if (platform.toUpperCase() === "MOBILE") {
          await AddProdToCartfromSPP(sppPageProdHeaderMob);
        }
      }
      await Gen.TryCatchClickAction(gnavMemLogin);
      gauge.screenshot();
      await Gen.ClickAction(gnavMemAccount);
    }

    // click on Hamburger
    if (platform.toUpperCase() === "MOBILE") {
      await Gen.ClickAction(accHamburgerCartPage);
      // click return user account
      await Gen.ClickAction(accClickReturnUserAccount);
    }
  }
);

step(
  'APACACCCHK Verify that the user is able to create account successfully',
  async function () {
    if (
      toplaceorder.toLowerCase() === 'true' &&
      enterPwdInOrderConfirmPage !== '' && CommonData.placeOrder === '1'
    ) {
      await Gen.WriteAction(enterPwdInOrderConfirmPage, CommonData.NPWD);
      await Gen.ClickAction(submitBtnInOrderConfirmPage);
      gauge.screenshot();
      await Gen.AssertUrl(
        CommonData.accountUrl,
        commonMessage.accountCreated,
        commonMessage.accountNotCreated
      );
    } else {
      gauge.message(commonMessage.stepNotApplicable);
    }
  }
);
