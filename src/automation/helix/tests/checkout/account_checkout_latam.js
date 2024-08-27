let Hengine = require('../../../../datainterface/providers/hengine.js');
let taikoOverride = require('../../helix_taiko.js');
var CommonData = {};
let siteDefinition, source, NullDataException, tags;
var feature = 'Checkout';
var t = require('taiko'); 
const Helper = require('../../helpers/helper.js');
const Util = require('../../../../utilities/util.js');
var toplaceorder = process.env.PLACEORDER || 'true';

var timeoutSetting = '';
var productURL = '';
assert = require('assert');
var closePopup = '';
var cartpageUrlText = '';
let Noproductincart = 0;
var RUIDs = [];
var skuIds = [];
var samplePageDetails = [];
var newUserDetails = [];
var guestUserDetails = [];
var returnUserDetails = [];
var returnUserDetailsForMob = [];
var shippingAddressDetails = [];
var shippingAddressDetailsForGU = [];
var shippingAddressDetailsForNU = [];
var paymentPageDetails = [];
var orderConfirmationPageDetails = [];
var accountAddressDetails = [];
var accountSignUpDetails = [];
var accountSignUpDetailsMob = [];
var accountSignInDetails = [];
var accountSignInDetailsForMob = [];
//cart page
var selectQtyDropDown = '';
var selectQty = '';
var removeProductId = '';
var selectQtyDropdown1 = '';
var removeProductAssert = '';
var actSignupId = '';
var actFirstnameId = '';
var accountLastnameId1 = '';
var actNewEmailField = '';
var accountAcceptPrivacyCheckbox = '';
var actPasswordFieldId = '';
var accountSubmitId = '';
var accountFavouritesId = '';
var deleteCartURL = '';
var accountSignoutId = '';
var signoutTextId = '';
var accountRegisterId1 = '';
var accountLastnameId = '';
var accountSelectDayId = '';
var accountSelectMonthId = '';
var accountSelectYearId = '';
var accountHoverId = '';
var accountDirectoryId = '';
var accountAddressId = '';
var accountAddress1Id = '';
var accountAddress2Id = '';
var accountZipcodeId = '';
var accountColonyId = '';
var accountPhone1Id = '';
var accountPhone2Id = '';
var accountCheckbox = '';
var accountCheckbox2 = '';
var accountSubmitId2 = '';
var accountSigninId = '';
var accountruEmailId = '';
var actRuPasswordFieldId = '';
var accountRusubmitId = '';
var accountPurchasesId = '';
var accountEditId = '';
var accountDeleteId = '';
var accountDeleteCfmId = '';
var actFirstnameId1 = '';
var accountStateId = '';
var accountCityId = '';
var accountRegionId = '';
var accountColonyId1 = '';
var accountZipcodeDrpId = '';
var accountRutField = '';
var accountRutField2 = '';
var regionTwoId = '';
var colonyNameTwoId = '';
var accountCpfId = '';
var accountZipcodeIdTwo = '';
var CheckoutContBtn = '';
var deselectPrivacyCheckbox = '';
var goBackBtn = '';
var isGoBack = '';
var accountRUcheckboxId = '';
var accountMobRuSubmitId = '';
var accountMobPurchasesId = '';
var useGoBackBtn = '';
var mobRegisterId = '';
var accountMobSubmitId = '';
var accountMobSignoutId = '';
var accountMobSignoutIdOne = '';
var mobAccountFavouritesId = '';
var accountMyfavIdTwo = '';
var cashPaymentId = '';
var cashTypeId = '';
var cashTypeIdTwo = '';
var cashTypeIdThree = '';
var checkoutPassword = '';
var checkoutSelectMonthId = '';
var chexckoutSelectDayId = '';
var checkoutSignup = '';
var actVal = '';
var returnUserCtn = '';
var continueAsNu = '';
var offersTrayClose = '';
var billingPage = '';
var actNewEmailFieldMob = '';
var accountAcceptPrivacyCheckboxMob = '';
var sppPageProdHeader = '';
var javaAlertPopup = '';
var addToBagSPP = '';
var useDoubleClick = '';
var clickCartpageLink = '';
var cartCountValue = '';
var emptyCart = '';
var emptyCartMob = '';
var sppPageProdHeaderMob = '';
var clickCartpageLinkMob = '';
var checkoutCont = '';
var paypalRadioBtn = '';
var paypalBtn = '';
var colonyIdClick = '';
var colonyIdClickTwo = '';
var regionIdClick = '';
var regionIdClickTwo = '';
var secondlineAddress = '';
var populatedAddress = '';
var useScrollIntoView = '';
var cashTypeDrpLoc = '';
var cashTypeDataLoc = '';
var paymentPageCheck = '';
var paymentPageReload = '';
var colonyTextLoc = '';
var clickHamIcon = '';
var mobActSignupId = '';
var mobActHome = '';
var accountMobSubmitIdOne = '';
var goBackBtnOne = '';
var mobAccountDirectoryId = '';
var accountMobAddressId = '';
var afterpayBtn = '';
var billingDrop = '';
var cnfBilling = '';
var addressSuggestion = '';
var notAvailableProductsCount = 0;
var randomSkuUrl = '';
var productLink = '';
var isShoppable = '';
var isDisplayable = '';
var noDisplayableProductError = '';
var sppUrl = '';
var checkoutBtnId = '';
var newEmailField = '';
var qaTestEmail = '';
var rutField = '';
var rutFieldThree = '';
var continueId = '';
var firstNameId = '';
var lastNameId = '';
var addressOneId = '';
var addressTwoId = '';
var regionId = '';
var zipcodeId = '';
var colonyId = '';
var colonyIdTwo = '';
var phoneOneId = '';
var phoneTwoId = '';
var submitId = '';
var passwordFieldId = '';
var acceptPrivacyCheckbox = '';
var submitBtn = '';
var creditCardBtn = '';
var cardholderName = '';
var customTimeout = '';
var creditCardFieldId = '';
var creditCardExpMonthId = '';
var monthFiledid = '';
var creditCardExpYearId = '';
var cvvFieldId = '';
var placeOrderId = '';
var orderNoId = '';
var ruCheckboxId = '';
var returnUserId = '';
var returnUserPwd = '';
var returnUserSignInLink = '';
var emulationDevice = '';
var expYearDropdownId = '';
var loginAsRuBtn = '';
var cityId = '';
var stateId = '';
var zipcodeDrpId = '';
var fullNameId = '';
var cpfId = '';
var passwordTwoId = '';
var fullNameTwoId = '';
var acceptPrivacyCheckboxTwo = '';
var expDateId = '';
var acceptPrivacyCheckboxNine = '';
var cpfNumId = '';
var passwordTwoFieldId = '';
var passwordHintId = '';
var birthdayId = '';
var birthmonthId = '';
var birthyearId = '';
var genderRadiobtn = '';
var fullNameOneId = '';
var zipcode2Id = '';
var zipcode3Id = '';
var zipcodeSearchId = '';
var address3Id = '';
var phone3Id = '';
var phone4Id = '';
var acceptPrivacyCheckboxFour = '';
var finalSubmitId = '';
var fullNameThreeId = '';
var addressFourId = '';
var phoneFIveId = '';
var phoneSixId = '';
var samplePageId = '';
let gobackflag = false;
var transId = '';
var skuLink = '';
var myAccountMob = '';
var mockCookieValue = '';
const matchCondition = true;
var goBackMob = '';
let reusableFunc = require('../ReUsableFunction.js');
const pollingTime = 100;
const timeout = 30000;
const responseCode = 200;

let create_array = (total, numero) =>
  Array.from(Array(total), () => number_random(numero));
let number_random = (number) => Math.round(Math.random() * number);
let mod = (dividendo, divisor) =>
  Math.round(dividendo - Math.floor(dividendo / divisor) * divisor);

/**
 * @returns Random CPF number, exclusevely used for Brazil sites
 */
function cpf() {
  let total_array = 9;
  let n = 9;
  let [n1, n2, n3, n4, n5, n6, n7, n8, n9] = create_array(total_array, n);
  let d1 =
    n9 * 2 +
    n8 * 3 +
    n7 * 4 +
    n6 * 5 +
    n5 * 6 +
    n4 * 7 +
    n3 * 8 +
    n2 * 9 +
    n1 * 10;
  d1 = 11 - mod(d1, 11);
  if (d1 >= 10) d1 = 0;
  let d2 =
    d1 * 2 +
    n9 * 3 +
    n8 * 4 +
    n7 * 5 +
    n6 * 6 +
    n5 * 7 +
    n4 * 8 +
    n3 * 9 +
    n2 * 10 +
    n1 * 11;
  d2 = 11 - mod(d2, 11);
  if (d2 >= 10) d2 = 0;
  return `${n1}${n2}${n3}.${n4}${n5}${n6}.${n7}${n8}${n9}-${d1}${d2}`;
}

/**
 * @returns Generates a random email defends on the return condition
 * for Brazil sites returns with "@qa.com" and for remaining sites with "@test.com"
 */
function generateRandomEmail() {
  var chars = 'bchibcdefgddffwwwjklqmnopqrstuvwxyz1234567890';
  var string = '';
  for (var ii = 0; ii < 10; ii++) {
    string += chars[Math.floor(Math.random() * chars.length)];
  }
  if (qaTestEmail) {
    return 'elcqalatam' + '+' + string + '@qa.com';
  } else {
    return 'elcqalatam' + '+' + string + '@test.com';
  }
}

const commonMessages = {
  validateCartMessage:
    'In the first iteration the product was not added, so go for second iteration.',
  validateCartMessageError:
    'After the 2nd iteration, the product was not added to the basket.',
  accountSignoutMsgActual: 'Actual Sign out message: ',
  accountSignoutMsgExpected: 'Expected Sign out message: ',
  actSignOutMsg: 'signed out succesfully',
  actErrorSignOutMsg: 'not signed out succesfully ',
  orderSuccessMsg: 'Order placed successfully',
  orderFailSuccessMsg: 'Order not placed',
  stepNotApplicable: 'This step is not applicable for this Brand/Locale',
  acctCreatedSuccess: 'Account created successfully',
  acctCreatedFail: 'Account not created',
};

step('LATMACCCHK Initialize Helix', async function () {
  // Initialize the selectors from DB
  await initFrameworkSettings();
});

function reinitialize() {
  RUIDs = [
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
  skuIds = [
    CommonData.skuId1,
    CommonData.skuId2,
    CommonData.skuId3,
    CommonData.skuId4,
    CommonData.skuId5,
  ];
  samplePageDetails = [{ loc: samplePageId, action: 'tryCatchClick' }];
  newUserDetails = [
    { loc: samplePageId, action: 'tryCatchClick' },
    { loc: continueAsNu, action: 'click' },
    { loc: fullNameId, data: CommonData.fullname, action: 'write' },
    {
      loc: newEmailField,
      Datafrom: 'Emailfun',
      action: 'writeusingdatafromfunction',
    },
    { loc: cpfId, Datafrom: 'CPFfun', action: 'writeusingdatafromfunction' },
    { loc: passwordTwoId, data: CommonData.NPWD, action: 'write' },
    { loc: rutField, data: CommonData.RUT, action: 'RUTwrite' },
    { loc: rutFieldThree, data: CommonData.RUT, action: 'RUTwritemethod2' },
    { loc: acceptPrivacyCheckboxNine, action: 'click' },
    { action: 'screenshot' },
    { loc: continueId, action: 'click' },
  ];
  guestUserDetails = [
    { loc: samplePageId, action: 'tryCatchClick' },
    {
      loc: newEmailField,
      Datafrom: 'Emailfun',
      action: 'writeusingdatafromfunction',
    },
    { loc: rutField, data: CommonData.RUT, action: 'RUTwrite' },
    { loc: rutFieldThree, data: CommonData.RUT, action: 'RUTwritemethod2' },
    { loc: acceptPrivacyCheckboxNine, action: 'click' },
    { action: 'screenshot' },
    { loc: continueId, action: 'click' },
  ];
  returnUserDetails = [
    { loc: samplePageId, action: 'tryCatchClick' },
    { loc: returnUserCtn, action: 'tryCatchClick' },
    {
      loc: returnUserId,
      Datafrom: 'RUfun',
      action: 'writeusingdatafromfunction',
    },
    { loc: returnUserPwd, data: CommonData.RPWD, action: 'write' },
    { action: 'screenshot' },
    { loc: returnUserSignInLink, action: 'click' },
  ];
  returnUserDetailsForMob = [
    { loc: samplePageId, action: 'tryCatchClick' },
    { loc: returnUserCtn, action: 'tryCatchClick' },
    { loc: ruCheckboxId, action: 'click' },
    { loc: loginAsRuBtn, action: 'click' },
    {
      loc: returnUserId,
      Datafrom: 'RUfun',
      action: 'writeusingdatafromfunction',
    },
    { loc: returnUserPwd, data: CommonData.RPWD, action: 'write' },
    { action: 'screenshot' },
    { loc: returnUserSignInLink, action: 'click' },
  ];
  shippingAddressDetails = [
    { loc: fullNameTwoId, data: CommonData.fullname, action: 'write' },
    { loc: cpfNumId, Datafrom: 'CPFfun', action: 'writeusingdatafromfunction' },
    { loc: firstNameId, data: CommonData.FIRSTNAME, action: 'write' },
    { loc: lastNameId, data: CommonData.LASTNAME, action: 'write' },
    { loc: addressOneId, data: CommonData.ADDRESS1, action: 'write' },
    { loc: addressTwoId, data: CommonData.ADDRESS2, action: 'write' },
    { loc: stateId, data: CommonData.chstate, action: 'NameDropDowntxt' },
    { loc: cityId, data: CommonData.chcity, action: 'NameDropDowntxt' },
    { loc: regionId, data: CommonData.chregion, action: 'NameDropDowntxt' },
    { loc: regionIdClick, data: regionIdClickTwo, action: 'ClickDropDown' },
    { loc: zipcodeId, data: CommonData.ZIPCODE, action: 'write' },
    { loc: populatedAddress, action: 'waitForelementtoappear' },
    { loc: secondlineAddress, data: CommonData.ADDRESS2, action: 'write' },
    { loc: colonyId, data: CommonData.chcolony, action: 'NameDropDowntxt' },
    { loc: useScrollIntoView, action: 'Scrollintoview' },
    {
      loc: colonyIdTwo,
      data: CommonData.colonyname,
      action: 'Dropdownwithoutselecttag',
    },
    { loc: colonyIdClick, data: colonyIdClickTwo, action: 'ClickDropDown' },
    { loc: zipcodeDrpId, data: CommonData.chzip, action: 'NameDropDowntxt' },
    { loc: phoneOneId, data: CommonData.PHONE, action: 'write' },
    { loc: phoneTwoId, data: CommonData.PHONE, action: 'write' },
    { loc: acceptPrivacyCheckboxTwo, action: 'click' },
    { action: 'screenshot' },
    { loc: submitId, action: 'click' },
  ];
  shippingAddressDetailsForGU = [
    { loc: acceptPrivacyCheckbox, action: 'click' },
    { loc: deselectPrivacyCheckbox, action: 'click' },
    { action: 'screenshot' },
    { loc: submitBtn, action: 'click' },
  ];
  shippingAddressDetailsForNU = [
    { loc: passwordFieldId, data: CommonData.NPWD, action: 'write' },
    { loc: passwordTwoFieldId, data: CommonData.NPWD, action: 'write' },
    { loc: passwordHintId, data: CommonData.PWDHINT, action: 'write' },
    { loc: birthdayId, data: CommonData.birthdate, action: 'NameDropDowntxt' },
    {
      loc: birthmonthId,
      data: CommonData.birthmonth,
      action: 'NameDropDowntxt',
    },
    { loc: birthyearId, data: CommonData.birthyear, action: 'NameDropDowntxt' },
    { loc: genderRadiobtn, action: 'click' },
    { loc: acceptPrivacyCheckbox, action: 'click' },
    { loc: submitBtn, action: 'click' },
    { loc: fullNameOneId, data: CommonData.fullname, action: 'write' },
    { loc: zipcode2Id, data: CommonData.ZIPCODE1, action: 'write' },
    { loc: zipcode3Id, data: CommonData.ZIPCODE2, action: 'write' },
    { loc: zipcodeSearchId, action: 'click' },
    { loc: address3Id, data: CommonData.ADDRESS1, action: 'write' },
    { loc: phone3Id, data: CommonData.PHONE, action: 'write' },
    { loc: phone4Id, data: CommonData.PHONE, action: 'write' },
    { loc: acceptPrivacyCheckboxFour, action: 'click' },
    { action: 'screenshot' },
    { loc: finalSubmitId, action: 'click' },
    { loc: fullNameThreeId, data: CommonData.fullname, action: 'write' },
    { loc: zipcode2Id, data: CommonData.ZIPCODE1, action: 'write' },
    { loc: zipcode3Id, data: CommonData.ZIPCODE2, action: 'write' },
    { loc: zipcodeSearchId, action: 'click' },
    { loc: addressFourId, data: CommonData.ADDRESS1, action: 'write' },
    { loc: phoneFIveId, data: CommonData.PHONE, action: 'write' },
    { loc: phoneSixId, data: CommonData.PHONE, action: 'write' },
    { action: 'screenshot' },
    { loc: finalSubmitId, action: 'click' },
  ];
  paymentPageDetails = [
    { loc: paymentPageReload, action: 'reload' },
    { loc: paymentPageCheck, action: 'waitForelementtoappear' },
    { loc: creditCardBtn, action: 'click' },
    {
      loc: cardholderName,
      loc1: customTimeout,
      data: CommonData.CARDHOLDERNAME,
      action: 'Writewithcustomtimeout',
    },
    { loc: creditCardFieldId, data: CommonData.CREDITCARD, action: 'write' },
    { loc: expDateId, data: CommonData.EXPDATE, action: 'write' },
    {
      loc: creditCardExpMonthId,
      data: CommonData.ccmonth,
      action: 'IndexDropDownID',
    },
    { loc: monthFiledid, data: CommonData.ccmonth, action: 'write' },
    { loc: creditCardExpYearId, data: CommonData.Expyear, action: 'write' },
    {
      loc: expYearDropdownId,
      data: CommonData.ccyear,
      action: 'IndexDropDownID',
    },
    { loc: cvvFieldId, data: CommonData.CVV, action: 'write' },
    { action: 'screenshot' },
    { loc: cashPaymentId, action: 'click' },
    { loc: cashTypeId, data: CommonData.cashindex, action: 'IndexDropDownID' },
    { loc: cashTypeIdTwo, data: cashTypeIdThree, action: 'ClickDropDown' },
    { action: 'screenshot' },
    {
      loc: cashTypeDrpLoc,
      data: cashTypeDataLoc,
      action: 'ClickDropDownwithTrycatch',
    },
    { action: 'screenshot' },
  ];
  orderConfirmationPageDetails = [
    { loc: checkoutPassword, data: CommonData.NPWD, action: 'write' },
    {
      loc: checkoutSelectMonthId,
      data: CommonData.birthdate,
      action: 'NameDropDowntxt',
    },
    {
      loc: chexckoutSelectDayId,
      data: CommonData.birthmonth,
      action: 'NameDropDowntxt',
    },
    { loc: checkoutSignup, action: 'click' },
    { action: 'screenshot' },
  ];
  accountAddressDetails = [
    { loc: actFirstnameId, data: CommonData.FIRSTNAME, action: 'write' },
    { loc: zipcode2Id, data: CommonData.ZIPCODE1, action: 'write' },
    { loc: zipcode3Id, data: CommonData.ZIPCODE2, action: 'write' },
    { loc: zipcodeSearchId, action: 'click' },
    { loc: accountLastnameId, data: CommonData.LASTNAME, action: 'write' },
    { loc: accountAddress1Id, data: CommonData.ADDRESS1, action: 'write' },
    { loc: accountAddress2Id, data: CommonData.ADDRESS2, action: 'write' },
    { loc: accountZipcodeIdTwo, data: CommonData.ZIPCODE, action: 'write' },
    { loc: accountStateId, data: CommonData.ACSTATE, action: 'IDDropdowntxt' },
    { loc: accountCityId, data: CommonData.ACCITY, action: 'IDDropdowntxt' },
    {
      loc: accountRegionId,
      data: CommonData.ACREGION,
      action: 'IDDropdowntxt',
    },
    {
      loc: regionTwoId,
      data: CommonData.regioname,
      action: 'Dropdownwithoutselecttag',
    },
    {
      loc: accountColonyId1,
      data: CommonData.ACCOLONY,
      action: 'IDDropdowntxt',
    },
    { loc: colonyNameTwoId, data: colonyTextLoc, action: 'ClickDropDown' },
    {
      loc: accountZipcodeDrpId,
      data: CommonData.ACZIPCODE,
      action: 'IDDropdowntxt',
    },
    { loc: accountZipcodeId, data: CommonData.ZIPCODE, action: 'write' },
    {
      loc: accountColonyId,
      data: CommonData.ACCOLONY,
      action: 'IDDropdowntxt',
    },
    { loc: accountPhone1Id, data: CommonData.PHONE, action: 'write' },
    { loc: accountPhone2Id, data: CommonData.PHONE, action: 'write' },
    { loc: accountCheckbox, action: 'tryCatchClick' },
    { loc: accountCheckbox2, action: 'tryCatchClick' },
    { action: 'screenshot' },
    { loc: accountSubmitId2, action: 'click' },
    { action: 'screenshot' },
  ];
  accountSignUpDetails = [
    { loc: actSignupId, action: 'click' },
    { loc: accountRegisterId1, action: 'click' },
    { loc: offersTrayClose, action: 'tryCatchClick' },
    { loc: actFirstnameId1, data: CommonData.FIRSTNAME, action: 'write' },
    {
      loc: accountCpfId,
      Datafrom: 'CPFfun',
      action: 'writeusingdatafromfunction',
    },
    { loc: accountLastnameId1, data: CommonData.LASTNAME, action: 'write' },
    {
      loc: actNewEmailField,
      Datafrom: 'Emailfun',
      action: 'writeusingdatafromfunction',
    },
    { loc: actPasswordFieldId, data: CommonData.NPWD, action: 'write' },
    { loc: accountRutField, data: CommonData.RUT2, action: 'RUTwrite' },
    { loc: accountRutField2, data: CommonData.RUT, action: 'RUTwritemethod2' },
    {
      loc: accountSelectDayId,
      data: CommonData.SelectQTY,
      action: 'NameDropDowntxt',
    },
    {
      loc: accountSelectMonthId,
      data: CommonData.SelectQTY,
      action: 'NameDropDowntxt',
    },
    {
      loc: accountSelectYearId,
      data: CommonData.SelectQTY,
      action: 'NameDropDowntxt',
    },
    { loc: accountAcceptPrivacyCheckbox, action: 'click' },
    { action: 'screenshot' }, // testing purpose 
    { loc: accountSubmitId, action: 'click' },
    { action: 'screenshot' },
  ];
  accountSignUpDetailsMob = [
    { loc: clickHamIcon, action: 'click' },
    { action: 'screenshot' },
    { loc: mobActSignupId, action: 'click' },
    { action: 'screenshot' },
    { loc: mobRegisterId, action: 'click' },
    { loc: actFirstnameId1, data: CommonData.FIRSTNAME, action: 'write' },
    {
      loc: accountCpfId,
      Datafrom: 'CPFfun',
      action: 'writeusingdatafromfunction',
    },
    { loc: accountLastnameId1, data: CommonData.LASTNAME, action: 'write' },
    {
      loc: actNewEmailFieldMob,
      Datafrom: 'Emailfun',
      action: 'writeusingdatafromfunction',
    },
    { loc: actPasswordFieldId, data: CommonData.NPWD, action: 'write' },
    { loc: accountRutField, data: CommonData.RUT2, action: 'RUTwrite' },
    { loc: accountRutField2, data: CommonData.RUT, action: 'RUTwritemethod2' },
    {
      loc: accountSelectDayId,
      data: CommonData.SelectQTY,
      action: 'NameDropDowntxt',
    },
    {
      loc: accountSelectMonthId,
      data: CommonData.SelectQTY,
      action: 'NameDropDowntxt',
    },
    {
      loc: accountSelectYearId,
      data: CommonData.SelectQTY,
      action: 'NameDropDowntxt',
    },
    { loc: accountAcceptPrivacyCheckboxMob, action: 'click' },
    { loc: accountMobSubmitId, action: 'click' },
    { loc: accountMobSubmitIdOne, action: 'tryCatchClick' },
    { loc: goBackBtnOne, action: 'tryCatchClick' },
    { action: 'screenshot' },
  ];
  accountSignInDetails = [
    { loc: accountSigninId, action: 'click' },
    { loc: accountruEmailId, data: CommonData.ACTRID, action: 'write' },
    { loc: actRuPasswordFieldId, data: CommonData.ACTRPWD, action: 'write' },
    { loc: accountRusubmitId, action: 'click' },
    { action: 'screenshot' },
  ];
  accountSignInDetailsForMob = [
    { loc: accountRUcheckboxId, action: 'tryCatchClick' },
    { loc: accountruEmailId, data: CommonData.ACTRID, action: 'write' },
    { loc: actRuPasswordFieldId, data: CommonData.ACTRPWD, action: 'write' },
    { loc: accountMobRuSubmitId, action: 'click' },
    { action: 'screenshot' },
  ];
}

//DDD approach

var isDiscovery = process.env.ISDISCOVERY === 'false' ? true : false; // For Self-healing discovery
var doHeal = process.env.DOHEAL === 'false' ? true : false; // For Self-healing

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

/**
 * @returns A random regestered email from the RUIDs array. Inorder to avoid the failures due to max order limit of 3
 */
function generateReturnUserID() {
  return RUIDs[Math.floor(Math.random() * RUIDs.length)];
}

/**
 * This function used to close different kind of pop-ups
 */
async function closeRandomPopup() {
  /**Check for pop-up**/
  try {
    await t.evaluate(await t.$(closePopup), (ele) => ele.click());
  } catch (error) {}
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

/******** BASE URL and ADM URL IS RECEIVED ******/
step(
  'LATMACCCHK Configuring the prerequisites like set cookies, set test Order flag, revision tag',
  async function () {
    await mobileEmulateDevice();
    await configureTestSettings();
  }
);

/**
 * This function validates whether page navigated to SPP page or not
 * @param {string} SPPpageHeader
 */
async function validateInSPP(SPPpageHeader) {
  if (await (await t.$(SPPpageHeader)).exists(pollingTime, timeout)) {
    assert(matchCondition);
    gauge.message('In SPP');
  } else {
    //assert(!matchCondition, 'Not in SPP');
    await reusableFunc.randomSkuOrProdCatFlow(
      randomSkuUrl,
      skuLink,
      siteDefinition.executionContext.adminUrl,
      siteDefinition.executionContext.url,
      isShoppable,
      isDisplayable,
      sppUrl,
      noDisplayableProductError,
      productURL,
      skuIds,
      addToBagSPP
    );
  }
}

/**
 * This function helps add a product to the bag in SPP page
 */

async function addProductToBag() {
  if (javaAlertPopup !== '') {
    t.alert(javaAlertPopup, async () => await t.accept());
  }
  let AddtoBagExist = 0;
  for (let i = 0; i < 2; i++) {
    if (await (await t.$(addToBagSPP)).exists(pollingTime, timeout)) {
      if ((await (await t.$(addToBagSPP)).isDisabled()) !== true) {
        if (useDoubleClick) {
          await t.evaluate(
            await t.$(addToBagSPP, { waitForEvents: ['loadEventFired'] }),
            (ele) => ele.focus()
          );
          //await doubleClick($(AddToBagSPP));
          await t.evaluate(
            await t.$(addToBagSPP, { waitForEvents: ['loadEventFired'] }),
            (ele) => ele.click()
          );
          await t.evaluate(
            await t.$(addToBagSPP, { waitForEvents: ['loadEventFired'] }),
            (ele) => ele.click()
          );
        } else {
          await t.evaluate(
            await t.$(addToBagSPP, { waitForEvents: ['loadEventFired'] }),
            (ele) => ele.click()
          );
        }
        gauge.message('Add to Bag btn is enabled and Product added to cart');
        gauge.screenshot();
        break;
      } else {
        assert(!matchCondition, 'Add to Bag btn is disabled');
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
      !matchCondition,
      'Add to bag does not load within expected time and reload the page.'
    );
  }
}

/**
 * This Function is used to click on the cart overlay depending upon the cart count value.
 * @param {string} CartpageLink
 */

async function clickOnCartOverlay(CartpageLink) {
  let cartval = 0;
  let cartexists = 0;
  await closeRandomPopup();
  for (i = 0; i < 3; i++) {
    if (await (await t.$(cartCountValue)).exists(pollingTime, timeout)) {
      var cartcount = await (await t.$(cartCountValue)).text();
      gauge.message('Cart count value =' + cartcount);
      if (!(parseInt(cartcount) === 0 || cartcount === '')) {
        assert(matchCondition);
        await t.evaluate(
          await t.$(CartpageLink, { waitForEvents: ['loadEventFired'] }),
          (ele) => ele.click()
        );
        gauge.message('Cart overlay exists and clicked on it');
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
      await t.$(clickCartpageLink, { waitForEvents: ['loadEventFired'] }),
      (ele) => ele.click()
    );
  }
}
/**
 * This Function is used to check whether product added exists in cart page or not by validating
 * using emptycartmsg and cart URL.
 * @param {string} emptycartmsg
 */
async function validateInCartPage(emptycartmsg) {
  var CPurl = await t.currentURL();
  if (CPurl.includes(cartpageUrlText)) {
    gauge.message('Navigated to cart page as expected.');
    gauge.screenshot();
    if (await (await t.$(emptycartmsg)).exists(pollingTime, timeout)) {
      gauge.message('No Product added to cart.');
      Noproductincart++;
    } else {
      gauge.message('Product added to cart.');
    }
  } else {
    assert(
      !matchCondition,
      'Expected to be navigated to Cartpage but it is not.'
    );
  }
}

step(
  'LATMACCCHK Verify that the user is able to remove the product from cart page',
  async function () {
    if (removeProductId !== '') {
      await reusableFunc.ClickInLoop(removeProductId);
    }
    if (removeProductAssert !== '') {
      if (await (await t.$(removeProductAssert)).exists()) {
        assert(matchCondition, 'Product removed from cart');
        gauge.screenshot();
      } else {
        assert(!matchCondition, 'Product not removed from cart');
      }
    }
  }
);
step(
  'LATMACCCHK Verify that the user is able to increase the quantity in cart page',
  async function () {
    await closeRandomPopup();
    if (selectQtyDropdown1 !== '') {
      await t.click(await t.$(selectQtyDropdown1));
      await t.click(CommonData.SelectQTY);
      gauge.screenshot();
    }
    if (selectQtyDropDown !== '') {
      await t.dropDown({ name: selectQtyDropDown }).select(CommonData.SelectQTY);
      gauge.screenshot();
    } else if (selectQty !== '') {
      await t.evaluate(await t.$(selectQty), (ele) => ele.click());
      gauge.screenshot();
    }
  }
);
step(
  'LATMACCCHK Verify that user able to Navigate to cart page by clicking on Cart overlay',
  async function () {
    await closeRandomPopup();
    if (siteDefinition.executionContext.platform.toUpperCase() === "PC") {
      await clickOnCartOverlay(clickCartpageLink);
    } else {
      await clickOnCartOverlay(clickCartpageLinkMob);
    }
  }
);

/**
 * This function is built using the multiple re-usable page action CASES, it can be called by passing an
 * array object with appropriate loc and data.
 * @param {string} ElementObj
 */

async function elementAction(ElementObj) {
  for (i = 0; i < ElementObj.length; i++) {
    switch (ElementObj[i].action) {
      case 'screenshot':
        {
          gauge.screenshot();
        }
        break;
      case 'write':
        {
          if (ElementObj[i].loc !== '') {
            await t.evaluate(await t.$(ElementObj[i].loc), (ele) => ele.focus());
            await t.write(ElementObj[i].data, t.into(await t.$(ElementObj[i].loc)));
          }
        }
        break;
      case 'Onlywrite':
        {
          if (ElementObj[i].loc !== '') {
            await t.write(ElementObj[i].data, t.into(await t.$(ElementObj[i].loc)));
          }
        }
        break;
      case 'writeusingdatafromfunction':
        {
          if (ElementObj[i].loc !== '') {
            if (ElementObj[i].Datafrom === 'Emailfun') {
              await t.evaluate(await t.$(ElementObj[i].loc), (ele) => ele.focus());
              let emailused = generateRandomEmail();
              gauge.message(emailused);
              console.log(emailused);
              await t.write(emailused, t.into(await t.$(ElementObj[i].loc)));
            } else if (ElementObj[i].Datafrom === 'CPFfun') {
              await t.evaluate(await t.$(ElementObj[i].loc), (ele) => ele.focus());
              let cpfused = cpf();
              console.log(cpfused);
              await t.write(cpfused, t.into(await t.$(ElementObj[i].loc)));
            } else if (ElementObj[i].Datafrom === 'RUfun') {
              await t.evaluate(await t.$(ElementObj[i].loc), (ele) => ele.focus());
              let emailused = generateReturnUserID();
              gauge.message(emailused);
              await t.write(emailused, t.into(await t.$(ElementObj[i].loc)));
            }
          }
        }
        break;
      case 'clearNwrite':
        {
          if (ElementObj[i].loc !== '') {
            await t.write(ElementObj[i].data, t.into(await t.$(ElementObj[i].loc)));
            await t.press(['Control', 'KeyA']);
            await t.press('Delete');
            await t.write(ElementObj[i].data, t.into(await t.$(ElementObj[i].loc)));
          }
        }
        break;
      case 'WaitforElementNwrite':
        {
          if (ElementObj[i].loc !== '') {
            for (j = 0; j < 3; j++) {
              if (await (await t.$(ElementObj[i].loc)).exists()) {
                await t.evaluate(await t.$(ElementObj[i].loc), (ele) =>
                  ele.focus()
                );
                await t.write(
                  ElementObj[i].data,
                  t.into(await t.$(ElementObj[i].loc))
                );
                break;
              } else {
                await t.waitFor(3000);
                gauge.message('waited 3 sec for element');
              }
            }
          }
        }
        break;
      case 'click':
        {
          if (ElementObj[i].loc !== '') {
            await t.evaluate(await t.$(ElementObj[i].loc), (ele) => {
              ele.focus();
              ele.click();
            });
          }
        }
        break;
      case 'RUTwrite':
        {
          if (ElementObj[i].loc !== '') {
            await t.evaluate(await t.$(ElementObj[i].loc), (ele) => ele.focus());
            await t.write(ElementObj[i].data, t.into(await t.$(ElementObj[i].loc)));
            await t.evaluate(await t.$(ElementObj[i].loc), (ele) => ele.click());
          }
        }
        break;
      case 'RUTwritemethod2':
        {
          if (ElementObj[i].loc !== '') {
            await t.evaluate(await t.$(ElementObj[i].loc), (ele) => ele.focus());
            await t.write(ElementObj[i].data, t.into(await t.$(ElementObj[i].loc)));
            await t.click('©');
          }
        }
        break;

      case 'tryCatchClick':
        {
          if (ElementObj[i].loc !== '') {
            try {
              await t.evaluate(
                await t.$(ElementObj[i].loc, {
                  waitForEvents: ['DOMContentLoaded'],
                }),
                (ele) => {
                  ele.focus();
                  ele.click();
                }
              );
            } catch (e) {}
          }
        }
        break;
      case 'waitForElementNClick':
        if (ElementObj[i].loc !== '') {
          for (j = 0; j < 3; j++) {
            if (await (await t.$(ElementObj[i].loc)).exists()) {
              await t.evaluate(await t.$(ElementObj[i].loc), (ele) => ele.focus(), {
                force: true,
              });
              await t.evaluate(
                await t.$(ElementObj[i].loc, {
                  waitForEvents: ['DOMContentLoaded'],
                }),
                (ele) => ele.click()
              );
              break;
            } else {
              await t.waitFor(3000);
              gauge.message('waited 3 sec for element');
            }
          }
        }
        break;
      case 'waitForelementtoappear':
        if (ElementObj[i].loc !== '') {
          for (k = 0; k < 5; k++) {
            if (
              await (await t.$(ElementObj[i].loc)).exists(pollingTime, timeout)
            ) {
              gauge.message('Element appeared');
              break;
            } else {
              if (k === 4) {
                assert(!matchCondition, 'Element did not appeared');
              }
              await t.waitFor(6000);
            }
          }
        }
        break;
      case 'IDDropdowntxt':
        {
          if (ElementObj[i].loc !== '') {
            await t.dropDown({ id: ElementObj[i].loc }).select(
              ElementObj[i].data
            );
          }
        }
        break;
      case 'NameDropDowntxt':
        {
          if (ElementObj[i].loc !== '') {
            await t.waitFor(
              3500
            ); /*Dynamic dropdown waiting to load the options*/
            await t.dropDown({ name: ElementObj[i].loc }).select(
              ElementObj[i].data
            );
          }
        }
        break;

      case 'IndexDropDownID':
        {
          if (ElementObj[i].loc !== '') {
            await t.dropDown({ id: ElementObj[i].loc }).select({
              index: ElementObj[i].data,
            });
          }
        }
        break;

      case 'IndexDropdownName':
        {
          if (ElementObj[i].loc !== '') {
            await t.dropDown({ name: ElementObj[i].loc }).select({
              index: ElementObj[i].data,
            });
          }
        }
        break;

      case 'Dropdownwithoutselecttag': {
        if (ElementObj[i].loc !== '') {
          await t.waitFor(3500); /*Dynamic dropdown waiting to load the options*/
          await t.click(await t.$(ElementObj[i].loc));
          await t.click(await t.text(ElementObj[i].data));
          break;
        }
      }

      case 'ClickDropDown':
        {
          if (ElementObj[i].loc !== '') {
            await t.evaluate(await t.$(ElementObj[i].loc), (ele) =>
              ele.scrollIntoView()
            );
            await t.evaluate(await t.$(ElementObj[i].loc), (ele) => ele.click());
            await t.evaluate(await t.$(ElementObj[i].data), (ele) => ele.click());
          }
        }
        break;

      case 'ClickDropDownwithTrycatch':
        {
          if (ElementObj[i].loc !== '') {
            try {
              await t.evaluate(await t.$(ElementObj[i].loc), (ele) =>
                ele.scrollIntoView()
              );
              await t.evaluate(await t.$(ElementObj[i].loc), (ele) => ele.click());
              await t.evaluate(await t.$(ElementObj[i].data), (ele) => ele.click());
            } catch (error) {}
          }
        }
        break;

      case 'Scrollintoview':
        {
          if (ElementObj[i].loc !== '') {
            await t.evaluate(await t.$(ElementObj[i].loc), (ele) =>
              ele.scrollIntoView()
            );
          }
        }
        break;

      case 'Writewithcustomtimeout':
        {
          if (ElementObj[i].loc !== '') {
            if (ElementObj[i].loc1) {
              for (var j = 0; j < 5; j++) {
                if (await (await t.$(ElementObj[i].loc)).isVisible()) {
                  break;
                } else {
                  await t.waitFor(4000);
                  j++;
                }
              }
            }
            await t.evaluate(await t.$(ElementObj[i].loc), (ele) => ele.focus());
            await t.write(ElementObj[i].data, t.into(await t.$(ElementObj[i].loc)));
          }
        }
        break;
      case 'reload':
        {
          if (ElementObj[i].loc !== '') {
            await t.reload({ waitForEvents: ['loadEventFired'] });
          }
        }
        break;
    }
  }
}
/**
 * This array is used to enter required new user details.
 */
var newUserDetails = [
  { loc: samplePageId, action: 'tryCatchClick' },
  { loc: continueAsNu, action: 'click' },
  { loc: fullNameId, data: CommonData.fullname, action: 'write' },
  {
    loc: newEmailField,
    Datafrom: 'Emailfun',
    action: 'writeusingdatafromfunction',
  },
  { loc: cpfId, Datafrom: 'CPFfun', action: 'writeusingdatafromfunction' },
  { loc: passwordTwoId, data: CommonData.NPWD, action: 'write' },
  { loc: rutField, data: CommonData.RUT, action: 'RUTwrite' },
  { loc: rutFieldThree, data: CommonData.RUT, action: 'RUTwritemethod2' },
  { loc: acceptPrivacyCheckboxNine, action: 'click' },
  { action: 'screenshot' },
  { loc: continueId, action: 'click' },
];
step(
  'LATMACCCHK Verify that user is able to Continue checkout as <user>',
  async function (user) {
    if (user === 'New user') {
      await elementAction(newUserDetails);
    } else if (user == 'Guest user') {
      await elementAction(guestUserDetails);
    } else {
      if (siteDefinition.executionContext.platform.toUpperCase() === "PC") {
        await elementAction(returnUserDetails);
      } else {
        await elementAction(returnUserDetailsForMob);
      }
      if (CheckoutContBtn !== '') {
        try {
          await t.evaluate(await t.$(CheckoutContBtn), (ele) => ele.click());
          gauge.screenshot();
        } catch (error) {}
      }
      if (afterpayBtn !== '') {
        try {
          await t.evaluate(await t.$(afterpayBtn), (ele) => ele.click());
        } catch (error) {}
      }
      await elementAction(samplePageDetails);
      /******** Billing address suggestion check ******/
      if (cnfBilling !== '') {
        try {
          await t.dropDown({ id: billingDrop }).select({ index: '1' });
          await t.evaluate(await t.$(cnfBilling), (ele) => ele.click());
        } catch (error) {}
      }
      /**To choose suggested address for registered user**/
      if (addressSuggestion) {
        try {
          //await evaluate(checkBox({id:Acceptprivacycheckbox2}), ele => ele.click());
          await t.evaluate(await t.$(acceptPrivacyCheckboxTwo), (ele) =>
            ele.click()
          );
          await t.evaluate(await t.$(CheckoutContBtn), (ele) => ele.click());
        } catch (error) {}
      }
      if (billingPage !== '') {
        try {
          await t.evaluate(await t.$(billingPage), (ele) => ele.click());
        } catch (error) {}
      }
    }
  }
);
step(
  'LATMACCCHK Verify that the user is able to enter the shipping details for <user>',
  async function (user) {
    if (user === 'New user') {
      await elementAction(shippingAddressDetails);
      await elementAction(shippingAddressDetailsForNU);
    } else if (user === 'Guest user') {
      await elementAction(shippingAddressDetails);
      await elementAction(shippingAddressDetailsForGU);
    }
  }
);

/**
 * This function captures the Transaction ID after placing the order.
 */
async function getTransactionId() {
  var currenturl = await t.currentURL();
  if (currenturl.toUpperCase().search(/ID/) >= 0) {
    var TempData = currenturl
      .toUpperCase()
      .substring(currenturl.indexOf('ID='));
    TempData = TempData.match(/\d+/g);
    try {
      TransNumber = TempData[0];
      gauge.message('TransactionID:-> ' + TransNumber);
    } catch (error) {
      gauge.message('Failed to capture trans ID');
    }
  } else {
    gauge.message('Order confirmation URL not found to capture trans ID');
  }
}
step(
  'LATMACCCHK Verify that the user is able to add products to the cart',
  async function () {
    await reusableFunc.randomSkuOrProdCatFlow(
      randomSkuUrl,
      skuLink,
      siteDefinition.executionContext.adminUrl,
      siteDefinition.executionContext.url,
      isShoppable,
      isDisplayable,
      sppUrl,
      noDisplayableProductError,
      productURL,
      skuIds,
      addToBagSPP
    );
    await closeRandomPopup();
    if (siteDefinition.executionContext.platform.toUpperCase() === "PC") {
      await validateInSPP(sppPageProdHeader);
    } else {
      await validateInSPP(sppPageProdHeaderMob);
    }
    await closeRandomPopup();
    await addProductToBag();
  }
);
step(
  'LATMACCCHK Verify that the user is able to add products to the cart successfully from prodcat',
  async function () {
    await reusableFunc.gotoProdcat(
      siteDefinition.executionContext.adminUrl,
      siteDefinition.executionContext.url,
      skuIds,
      productURL,
      isShoppable,
      isDisplayable,
      sppUrl,
      noDisplayableProductError
    );
    await closeRandomPopup();
    await addProductToBag();
  }
);

step(
  'LATMACCCHK Verify that the user is able to select the payment method',
  async function () {
    await elementAction(paymentPageDetails);
    if (paypalRadioBtn !== '') {
      await t.evaluate(await t.$(paypalRadioBtn), (ele) => ele.click());
      if (await (await t.$(paypalBtn)).exists(pollingTime, timeout)) {
        await t.evaluate(await t.$(paypalBtn), (ele) => ele.click());
      } else {
        gauge.message('paypal btn does not exists');
        assert(!matchCondition);
      }
      /*waiting to load the paypal window*/
      for (let i = 0; i < 5; i++) {
        try {
            await t.switchTo(/www.sandbox.paypal.com/,{waitForEvents: ['DOMContentLoaded'],});
          break;
        } catch (error) {
          await t.waitFor(60000);
          gauge.message(
            'Paypal tab not opened so trying to click Paypal button again'
          );
        }
      }
      var paypalurl = await t.currentURL();
      if (paypalurl.includes(CommonData.paypalurl)) {
        assert(matchCondition);
        gauge.message('Successfully navigated to paypal page');
        gauge.screenshot();
      } else {
        assert(!matchCondition, 'Did not navigated to paypal page');
      }
    }
  }
);

step(
  'LATMACCCHK Verify that the user is able to place the order as <user>',
  async function (user) {
    if (toplaceorder === 'true' && CommonData.placeOrder === '1') {
      for (let i = 0; i < 5; i++) {
        try {
          await t.evaluate(
            await t.$(placeOrderId, { waitForEvents: ['DOMContentLoaded'] }),
            (ele) => {
              ele.focus();
              ele.click();
            }
          );
          await t.waitFor(await t.$(orderNoId));
          break;
        } catch (error) {
          i++;
        }
      }
      var confirmurl = await t.currentURL();
      if (
        ((await t.text(CommonData.ORDERMESSAGE).exists()) ||
          (await t.text(CommonData.ORDERMESSAGE2).exists())) &&
        confirmurl.includes('/checkout/confirm.tmpl')
      ) {
        assert(matchCondition);
        var ordernumber = await (await t.$(orderNoId)).text();
        gauge.message(ordernumber);
        gauge.message(commonMessages.orderSuccessMsg);
        await getTransactionId();
        gauge.screenshot();
      } else {
        gauge.message(commonMessages.orderFailSuccessMsg);
        assert(!matchCondition);
        gauge.screenshot();
      }
    } else {
      gauge.message(commonMessages.stepNotApplicable);
    }
    if (
      toplaceorder === 'true' &&
      user == 'New user' &&
      checkoutSignup !== ''
    ) {
      await elementAction(orderConfirmationPageDetails);
    }
    if (toplaceorder === 'true' && user === 'New user' && actVal) {
      var confirmurl2 = await t.currentURL();
      if (
        (await t.text(CommonData.accountsignupvalidation).exists()) &&
        confirmurl2.includes('/account/index.tmpl')
      ) {
        assert(matchCondition);
        gauge.message(commonMessages.acctCreatedSuccess);
        gauge.screenshot();
      } else {
        gauge.message(commonMessages.acctCreatedFail);
        assert(!matchCondition);
        gauge.screenshot();
      }
    }
    if (deleteCartURL !== '' && user === 'Return user') {
      await t.goto(siteDefinition.executionContext.adminUrl + deleteCartURL, {
        waitForEvents: ['DOMContentLoaded'],
      });
      gauge.screenshot();
    }
  }
);

step(
  'LATMACCCHK Verify that the user is able to proceed to Signin page',
  async function () {
    await closeRandomPopup();
    if (checkoutBtnId !== '') {
      await t.evaluate(
        await t.$(checkoutBtnId, { waitForEvents: ['DOMContentLoaded'] }),
        (ele) => ele.click()
      );
      gauge.screenshot();
    }
    if (checkoutCont !== '') {
      if (await (await t.$(checkoutCont)).exists()) {
        await t.evaluate(await t.$(checkoutCont), (ele) => ele.click());
        gauge.screenshot();
      }
    }
    await elementAction(samplePageDetails);
  }
);

step(
  'LATMACCCHK Verify that user can create a new account by entering valid credentials',
  async function () {
    if (siteDefinition.executionContext.platform.toUpperCase() === "PC") {
      await elementAction(accountSignUpDetails);
    } else {
      await elementAction(accountSignUpDetailsMob);
      await reusableFunc.TryCatchClickAction(mobActSignupId);
      await reusableFunc.TryCatchClickAction(myAccountMob);
    }
  }
);

step(
  'LATMACCCHK Verify that user can add a new shipping/billing address by entering valid details',
  async function () {
    if (siteDefinition.executionContext.platform.toUpperCase() === "PC") {
      if (accountDirectoryId !== '') {
        await t.evaluate(await t.$(accountDirectoryId), (ele) => ele.click());
        gauge.screenshot();
      }
      if (accountAddressId !== '') {
        if (await (await t.$(accountAddressId)).exists())
          await t.evaluate(await t.$(accountAddressId), (ele) => ele.click());
        gauge.screenshot();
      }
      await elementAction(accountAddressDetails);
    } else {
      if (goBackMob) {
        await t.goBack();
        goBackMob = false;
      }
      if (mobAccountDirectoryId !== '') {
        await t.evaluate(await t.$(mobAccountDirectoryId), (ele) => ele.click());
      }
      if (accountMobAddressId !== '') {
        if (await (await t.$(accountMobAddressId)).exists()) {
          await t.evaluate(await t.$(accountMobAddressId), (ele) => ele.click());
          gauge.screenshot();
        }
      }
      await elementAction(accountAddressDetails);
      if (gobackflag) {
        gauge.message('Flag set to true');
        if (goBackBtn !== '') {
          await t.evaluate(await t.$(goBackBtn), (ele) => ele.click());
        } else if (isGoBack) {
          await t.goBack();
        }
      }
      if (clickHamIcon !== '' && mobActHome !== '') {
        await t.evaluate(await t.$(clickHamIcon), (ele) => ele.click());
        gauge.screenshot();
        await t.evaluate(await t.$(mobActHome), (ele) => ele.click());
      } else if (goBackBtn !== '') {
        if (await (await t.$(goBackBtn)).exists()) {
          await t.evaluate(await t.$(goBackBtn), (ele) => ele.click());
        } else {
          gauge.message('Already navigated to main page');
        }
      }
    }
  }
);

step(
  'LATMACCCHK Verify that user can sign out of their account',
  async function () {
    if (siteDefinition.executionContext.platform.toUpperCase() === "PC") {
      /******** Hover option check for log out ******/
      if (accountHoverId !== '') {
        try {
          await t.hover(await t.$(accountHoverId));
        } catch (error) {}
      }
      if (accountSignoutId !== '') {
        await t.evaluate(
          await t.$(accountSignoutId, { waitForNavigation: false }),
          (ele) => ele.click()
        );
      }
      if (signoutTextId !== '') {
        var Actualsignouttext = await (await t.$(signoutTextId)).text();
        if (
          (Actualsignouttext ? Actualsignouttext.toUpperCase() : '').includes(
            CommonData.accountsignouttext.toUpperCase()
          )
        ) {
          //matchCondition = true;
          assert(matchCondition, commonMessages.actSignOutMsg);
        } else {
          gauge.message(
            commonMessages.accountSignoutMsgExpected +
              CommonData.accountsignouttext
          );
          gauge.message(
            commonMessages.accountSignoutMsgActual + Actualsignouttext
          );
          //matchCondition = false;
          assert(!matchCondition, commonMessages.actErrorSignOutMsg);
        }
      }
    } else {
      if (accountMobSignoutId !== '') {
        await t.evaluate(
          await t.link(accountMobSignoutId, { waitForNavigation: false }),
          (ele) => ele.click()
        );
      } else if (accountMobSignoutIdOne !== '') {
        await t.evaluate(
          await t.$(accountMobSignoutIdOne, { waitForNavigation: false }),
          (ele) => ele.click()
        );
      }
      if (signoutTextId !== '') {
        var Actualsignouttext = await (await t.$(signoutTextId)).text();
        if (
          Actualsignouttext.toUpperCase().search(
            CommonData.accountsignouttext.toUpperCase()
          ) != -1
        ) {
          //matchCondition = true;
          assert(matchCondition, commonMessages.actSignOutMsg);
        } else {
          gauge.message(
            commonMessages.accountSignoutMsgExpected +
              CommonData.accountsignouttext
          );
          gauge.message(
            commonMessages.accountSignoutMsgActual + Actualsignouttext
          );
          //matchCondition = false;
          assert(!matchCondition, commonMessages.actErrorSignOutMsg);
        }
      }
      gauge.screenshot();
    }
  }
);
step(
  'LATMACCCHK Verify that registered user can sign in with valid credentials',
  async function () {
    if (siteDefinition.executionContext.platform.toUpperCase() === "PC") {
      await elementAction(accountSignInDetails);
    } else {
      await elementAction(accountSignInDetailsForMob);
      gobackflag = true;
    }
  }
);

step(
  'LATMACCCHK Verify that user can view their order history',
  async function () {
    if (siteDefinition.executionContext.platform.toUpperCase() === "PC") {
      if (accountPurchasesId !== '') {
        await t.evaluate(await t.$(accountPurchasesId), (ele) => {
          ele.focus();
          ele.click();
        });
        gauge.screenshot();
      }
    } else {
      if (accountMobPurchasesId !== '') {
        await t.evaluate(
          await t.link(accountMobPurchasesId, { waitForNavigation: false }),
          (ele) => ele.click()
        );
        gauge.screenshot();
        if (useGoBackBtn) {
          await t.evaluate(await t.$(goBackBtn), (ele) => ele.click());
        } else if (isGoBack) {
          await t.goBack();
        }
      }
    }
  }
);

step(
  'LATMACCCHK Verify that user can view their list of favourite products',
  async function () {
    if (siteDefinition.executionContext.platform.toUpperCase() === "PC") {
      if (accountFavouritesId !== '') {
        await t.evaluate(
          await t.link(accountFavouritesId, { waitForNavigation: false }),
          (ele) => ele.click()
        );
        gauge.screenshot();
      }
      if (accountMyfavIdTwo !== '') {
        await t.evaluate(
          await t.$(accountMyfavIdTwo, { waitForEvents: ['DOMContentLoaded'] }),
          (ele) => ele.click()
        );
      }
    } else {
      if (mobAccountFavouritesId !== '') {
        await t.evaluate(
          await t.link(mobAccountFavouritesId, { waitForNavigation: false }),
          (ele) => ele.click()
        );
        gauge.screenshot();
        if (goBackBtn !== '') {
          await t.evaluate(await t.$(goBackBtn), (ele) => ele.click());
        } else if (isGoBack) {
          await t.goBack();
        }
      }
    }
  }
);

step(
  'LATMACCCHK Verify that user can edit an existing shipping/billing address.',
  async function () {
    if (accountEditId !== '') {
      await t.reload({ waitForEvents: ['loadEventFired'] });
      await t.evaluate(await t.$(accountEditId), (ele) => {
        ele.focus();
        ele.click();
      });
    }
    if (actFirstnameId !== '') {
      await t.write(CommonData.FIRSTNAME, t.into(await t.$(actFirstnameId)));
    }
    if (accountSubmitId2 !== '') {
      await t.evaluate(await t.$(accountSubmitId2), (ele) => ele.click());
      gauge.screenshot();
    }
  }
);

step(
  'LATMACCCHK Verify that user can delete an existing shipping/billing address.',
  async function () {
    if (accountDirectoryId !== '') {
      await t.evaluate(await t.$(accountDirectoryId), (ele) => ele.click());
      gauge.screenshot();
    }
    if (accountDeleteId !== '') {
      await t.evaluate(await t.$(accountDeleteId), (ele) => ele.click());
      gauge.screenshot();
    }
    if (accountDeleteCfmId !== '') {
      await t.evaluate(await t.$(accountDeleteCfmId), (ele) => ele.click());
    }
  }
);

step(
  'LATMACCCHK Verify that the user is able to view and update the cart',
  async function () {
    if (siteDefinition.executionContext.platform.toUpperCase() === "PC") {
      await validateInCartPage(emptyCart);
      if (Noproductincart === 1) {
        gauge.message(commonMessages.validateCartMessage);
        await reusableFunc.randomSkuOrProdCatFlow(
          randomSkuUrl,
          skuLink,
          siteDefinition.executionContext.adminUrl,
          siteDefinition.executionContext.url,
          isShoppable,
          isDisplayable,
          sppUrl,
          noDisplayableProductError,
          productURL,
          skuIds,
          addToBagSPP
        );
        await validateInSPP(sppPageProdHeader);
        await addProductToBag();
        await clickOnCartOverlay(clickCartpageLink);
        await validateInCartPage(emptyCart);
        if (Noproductincart === 2) {
          assert(!matchCondition, commonMessages.validateCartMessageError);
        }
      }
    } else {
      await validateInCartPage(emptyCartMob);
      if (Noproductincart === 1) {
        gauge.message(commonMessages.validateCartMessage);
        await reusableFunc.randomSkuOrProdCatFlow(
          randomSkuUrl,
          skuLink,
          siteDefinition.executionContext.adminUrl,
          siteDefinition.executionContext.url,
          isShoppable,
          isDisplayable,
          sppUrl,
          noDisplayableProductError,
          productURL,
          skuIds,
          addToBagSPP
        );
        await validateInSPP(sppPageProdHeaderMob);
        await addProductToBag();
        await clickOnCartOverlay(clickCartpageLinkMob);
        await validateInCartPage(emptyCartMob);
        if (Noproductincart === 2) {
          assert(!matchCondition, commonMessages.validateCartMessageError);
        }
      }
    }
    await reusableFunc.getTransId(transId);
  }
);
