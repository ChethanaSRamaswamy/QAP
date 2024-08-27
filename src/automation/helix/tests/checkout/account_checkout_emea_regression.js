var returnUserIds = [];
const gds = gauge.dataStore.specStore;

var t = require('taiko');
let siteDefinition, source, NullDataException, tags;
const Helper = require('../../helpers/helper.js');

//BEX
var mobHamburgerIconRegEo = [];
var mobLoggedinProfileLinkRegEo = [];
var expectedProfileUpdateTextMobEo = [];
var expectedProfileUpdateTextPcEo = [];
var ruserLoginMob = [];
var ruserLoginPc = [];
var mobHamburgerIconAfterLoggedInEo = [];
var orderHistoryMob = [];
var orderHistoryPc = [];
var signoutPc = [];
var mobLogoRegEo = [];
var signoutMob = [];

//OPS
var qtyIncrease = [];
var writeOffer = [];
var goToOrderDetails = [];
var continueShipping = [];
var newBilling = [];
var billingAddressDetails = [];
var billingContinue = [];
var orderPaypalDets = [];
var mobOrderPaypalDets = [];
var payPalDetailsandPlaceOrder = [];
var payPalExpDetails = [];

//BEX
var mobHamburgerIconREG = '';
var mobLoggedinProfileLinkREG = '';
var mobAcProfilelinkREG = '';
var mobAcProfileEnterTitleREG = '';
var mobAcProfileSelectTitleDDREG = '';
var mobAcProfileEnterFirstNameREG = '';
var mobAcProfileEnterLastNameREG = '';
var mobAcProfileEnterResetPwdREG = '';
var mobAcProfileEnterConfirmPwdREG = '';
var mobAcProfileEnterPWDHintREG = '';
var mobAcProfileClickTandCREG = '';
var mobAcProfileSubmitButtonREG = '';
var mobAcProfileUpdateAssertREG = '';
var acProfilePageREG = '';
var acProfileEnterTitleREG = '';
var acProfileSelectTitleDropDownREG = '';
var acProfileEnterFirstNameREG = '';
var acProfileEnterLastNameREG = '';
var acProfileEnterResetPwdREG = '';
var acProfileEnterConfirmPwdREG = '';
var acProfileEnterPWDHintREG = '';
var acProfileClickTandCREG = '';
var acProfileSubmitButtonREG = '';
var acProfileUpdateAssertREG = '';
var mobAcLoginlinkREG = '';
var mobAcClickonAlreadyReglinkREG = '';
var mobAcEnterRUEmailIDREG = '';
var mobAcEnterRUPasswordREG = '';
var mobAcRuLoginButtonREG = '';
var gnavMyAccountlinkinHPREG = '';
var gnavMyAcclinkREG = '';
var acClickAlreadyRegisteredlinkREG = '';
var acRuEnterEmailIDREG = '';
var acRuEnterPasswordREG = '';
var acRuClickLoginButtonREG = '';
var gnavMyAccountlinkREG = '';
var gnavMyAccountProfilelinkHoverREG = '';
var gnavMyAccountProfilelinkREG = '';
var mobHamburgerIconAfterLoggedInREG = '';
var mobAcOrderHistorylinkREG = '';
var mobAcPastPurchasedlinkREG = '';
var mobClickonViewOrderDetailsREG = '';
var mobClickonReOrderButtonREG = '';
var acOrderHistorylinkREG = '';
var acPastPurchasedlinkREG = '';
var clickonViewOrderDetailsREG = '';
var clickonReOrderButtonREG = '';
var gnavHoverOnMyAccountlinkREG = '';
var gnavClickonMyAcclinkREG = '';
var gnavSignOutHoverREG = '';
var acSignoutLinkREG = '';
var mobSignoutlinkREG = '';
var mobSignoutlink1REG = '';
var mobLogoREG = '';

//OPS
var selectQtyDropdownIdREG = '';
var selectQtyDropDownNameREG = '';
var offerEditButtonREG = '';
var enterValidOfferCodeREG = '';
var offerTypeApplied = '';
var offerName = '';
var applyOfferButtonREG = '';
var validOfferMsgREG = '';
var getOrderIdREG = '';
var ordHistoryREG = '';
var ordDetailsREG = '';
var shippingMethodIdREG = '';
var paymentMethodIdREG = '';
var clickBillAddrCheckboxReg = '';
var guestUserBillDetailsEditLinkReg = '';
var billingTitleRadioButtonREG = '';
var billingTitleDropDownREG = '';
var billingENTERFIRSTNAMEREG = '';
var billingENTERLASTNAMEREG = '';
var billingSelectCountryIDREG = '';
var billingRUSelectCountryIDREG = '';
var billingClickSelectCountryREG = '';
var billingENTERADDRESS1REG = '';
var billingClickAddress1DropdownREG = '';
var billingClickAddress1DDValueREG = '';
var billingEnterAddrFocusAutoSelReg = '';
var billingENTERADDRESS2REG = '';
var billingClickAddress2DropdownREG = '';
var billingClickAddress2DDValueREG = '';
var billingENTERZIPCODEREG = '';
var billingClickZipcodeButtonREG = '';
var billingENTERPHONEREG = '';
var billingENTERCITYREG = '';
var billingENTERCITY1REG = '';
var billingStateREG = '';
var billingClickProvinceDDREG = '';
var billingClickProvinceValueREG = '';
var billingENTERADDRESS3REG = '';
var billingCityDropdownREG = '';
var billingClickAddress3DropdownREG = '';
var billingClickAddress3DDValueREG = '';
var billingENTERADDRESS4REG = '';
var billingRegionDropdownREG = '';
var billingClickAddress4DropdownREG = '';
var billingClickAddress4DDValueREG = '';
var billingContinueButtonREG = '';
var billingPageTermsandConditonsREG = '';
var billingEditContinueButtonREG = '';
var clickOrderIDREG = '';
var orderNumberFromOrderDetails = '';
var transNumberFromOrderDetails = ' ';
var paymentMethodFromOrderDetails = '';
var shipmentMethodFromOrderDetails = '';
var selectPayPalMethod = '';
var selectPayPalMethod1 = '';
var mobRetUsrSelPayPalPayMethod = '';
var mobRetUsrSelPayMethodDD = '';
var mobRetUsrSelPayPalPayMethod1 = '';
var orderRevDetTermsCond = '';
var orderRevDetContToPayPage = '';
var mobRetUsrOrdRevDetContBtn = '';
var mobRetUsrOrdDetToPayPage = '';
var mobRetUsrBillPageTAndC = '';
var mobRetUsrToPayPage = '';
var mobRetUsrBillRevPageTAndC = '';
var mobRetUsrBillRevDetToPayPage = '';
var clickContBtn = '';
var enterPayPalEmail = '';
var enterPayPalPass = '';
var clickPayPalContBtn = '';
var clickConfrmContBtn = '';
var payPalExpTandC = '';
var payPalExpCheckout = '';
var ppExpSampleContBtn = '';
var regex = /\d+/g;
var getTransId = false;

var CSVWriteFlag = process.env.WRITETOCSV
  ? process.env.WRITETOCSV.toLowerCase()
  : 'true';

const assert = require('assert');
const { ElementAction } = require('../ReUsableFunction.js');

let Hengine = require('../../../../datainterface/providers/hengine.js');

var CommonData = {};
var feature = 'Checkout';

function ReturnUserID() {
  return returnUserIds[Math.floor(Math.random() * returnUserIds.length)];
}

function reinitialize() {
  returnUserIds = [
    CommonData.ACRID1,
    CommonData.ACRID2,
    CommonData.ACRID3,
    CommonData.ACRID4,
    CommonData.ACRID5,
    CommonData.ACRID6,
    CommonData.ACRID7,
    CommonData.ACRID8,
    CommonData.ACRID9,
    CommonData.ACRID10,
  ];
  qtyIncrease = [
    { loc: selectQtyDropdownIdREG, action: 'click' },
    { loc: CommonData.SelectQTYREG, action: 'ClickDropDownwithTrycatch' },
    {
      loc: selectQtyDropDownNameREG,
      data: CommonData.SelectQTYREG,
      action: 'NameDropDowntxt',
    },
  ];

  writeOffer = [
    { loc: offerEditButtonREG, action: 'click' },
    { loc: enterValidOfferCodeREG, data: '', action: 'write' },
    { loc: applyOfferButtonREG, action: 'click' },
  ];

  goToOrderDetails = [
    { loc: ordHistoryREG, action: 'waitForElementNClick' },
    { loc: ordDetailsREG, action: 'waitForElementNClick' },
  ];

  continueShipping = [{ loc: continueButtonREG, action: 'click' }];

  newBilling = [
    { loc: clickBillAddrCheckboxReg, action: 'click' },
    { loc: guestUserBillDetailsEditLinkReg, action: 'click' },
  ];

  billingAddressDetails = [
    { loc: billingTitleRadioButtonREG, action: 'tryCatchClick' },
    {
      loc: billingTitleDropDownREG,
      data: CommonData.TITLEREG,
      action: 'ClickDropDownwithTrycatch',
    },
    {
      loc: billingENTERFIRSTNAMEREG,
      data: CommonData.ACProfileFIRSTNAMEREG,
      action: 'write',
    },
    {
      loc: billingENTERLASTNAMEREG,
      data: CommonData.ACProfileLASTNAMEREG,
      action: 'write',
    },
    {
      loc: billingSelectCountryIDREG,
      data: CommonData.SELECTCOUNTRYIDREG,
      action: 'IDDropdowntxtTrycatch',
    },
    {
      loc: billingRUSelectCountryIDREG,
      data: CommonData.SELECTCOUNTRYIDREG,
      action: 'IDDropdowntxt',
    },
    {
      loc: billingClickSelectCountryREG,
      data: CommonData.CITYREG,
      action: 'waitForElementNClick',
    },
    {
      loc: billingENTERADDRESS1REG,
      data: CommonData.ADDRESS1REG,
      action: 'write',
    },
    { loc: billingClickAddress1DropdownREG, action: 'ClickDropdownwithxpaths' },
    { loc: billingClickAddress1DDValueREG, action: 'ClickDropdownwithxpaths' },
    {
      loc: billingEnterAddrFocusAutoSelReg,
      data: CommonData.ADDRESS1REG,
      action: 'clearNwrite',
    },
    {
      loc: billingEnterAddrFocusAutoSelReg,
      data: CommonData.ADDRESS2REG,
      action: 'click',
    },
    {
      loc: billingENTERADDRESS2REG,
      data: CommonData.ADDRESS2REG,
      action: 'write',
    },
    { loc: billingClickAddress2DropdownREG, action: 'ClickDropdownwithxpaths' },
    { loc: billingClickAddress2DDValueREG, action: 'ClickDropdownwithxpaths' },
    {
      loc: billingENTERZIPCODEREG,
      data: CommonData.ZIPCODEREG,
      action: 'write',
    },
    { loc: billingClickZipcodeButtonREG, action: 'click' },
    {
      loc: billingENTERPHONEREG,
      data: CommonData.PHONEREG,
      action: 'write',
    },
    { loc: billingENTERCITYREG, data: CommonData.CITYREG, action: 'write' },
    { loc: billingENTERCITY1REG, data: CommonData.CITYREG, action: 'write' },
    {
      loc: billingStateREG,
      data: CommonData.STATEREG,
      action: 'NameDropDowntxt',
    },
    { loc: billingClickProvinceDDREG, action: 'ClickDropdownwithxpaths' },
    { loc: billingClickProvinceValueREG, action: 'ClickDropdownwithxpaths' },
    {
      loc: billingENTERADDRESS3REG,
      data: CommonData.ADDRESS3REG,
      action: 'write',
    },
    {
      loc: billingCityDropdownREG,
      data: CommonData.CITYDROPDOWNREG,
      action: 'NameDropDowntxt',
    },
    { loc: billingClickAddress3DropdownREG, action: 'ClickDropdownwithxpaths' },
    { loc: billingClickAddress3DDValueREG, action: 'ClickDropdownwithxpaths' },
    {
      loc: billingRegionDropdownREG,
      data: CommonData.REGIONDROPDOWNREG,
      action: 'NameDropDowntxt',
    },
    { loc: billingClickAddress4DropdownREG, action: 'ClickDropdownwithxpaths' },
    { loc: billingClickAddress4DDValueREG, action: 'ClickDropdownwithxpaths' },
    { action: 'screenshot' },
    {
      loc: billingENTERADDRESS4REG,
      data: CommonData.ADDRESS4REG,
      action: 'write',
    },
  ];

  billingContinue = [
    { loc: billingPageTermsandConditonsREG, action: 'click' },
    { loc: billingEditContinueButtonREG, action: 'click' },
  ];

  orderPaypalDets = [
    { loc: selectPayPalMethod, action: 'click' },
    { loc: orderRevDetTermsCond, action: 'tryCatchClick' },
    { loc: orderRevDetContToPayPage, action: 'tryCatchClick' },
    { loc: selectPayPalMethod1, action: 'click' },
    { loc: billingPageTermsCond, action: 'tryCatchClick' },
    { loc: clickContBtn, action: 'tryCatchClick' },
  ];

  mobOrderPaypalDets = [
    { loc: mobRetUsrOrdRevDetContBtn, action: 'click' },
    { loc: mobRetUsrOrdDetTAndC, action: 'click' },
    { loc: mobRetUsrOrdDetToPayPage, action: 'click' },
    { loc: mobRetUsrSelPayPalPayMethod, action: 'click' },
    {
      loc: mobRetUsrSelPayMethodDD,
      data: CommonData.CARDTYPEREG,
      action: 'IDDropdown',
    },
    { loc: mobRetUsrBillPageTAndC, action: 'waitForElementNClick' },
    { loc: mobRetUsrToPayPage, action: 'click' },
    { loc: mobRetUsrSelPayPalPayMethod1, action: 'click' },
    { loc: mobRetUsrBillRevPageTAndC, action: 'click' },
    { loc: mobRetUsrBillRevDetToPayPage, action: 'click' },
  ];

  payPalDetailsandPlaceOrder = [
    {
      loc: enterPayPalEmail,
      data: CommonData.payPalEmail,
      action: 'clearNwrite',
    },
    {
      loc: enterPayPalPass,
      data: CommonData.payPalPass,
      action: 'write',
    },
    { loc: clickPayPalContBtn, action: 'click' },
  ];

  payPalExpDetails = [
    { loc: payPalExpTandC, action: 'click' },
    { loc: payPalExpCheckout, action: 'click' },
    { loc: ppExpSampleContBtn, action: 'click' },
  ];

  mobHamburgerIconRegEo = [{ loc: mobHamburgerIconREG, action: 'click' }];

  mobLoggedinProfileLinkRegEo = [
    { loc: mobLoggedinProfileLinkREG, action: 'click' },
  ];

  expectedProfileUpdateTextMobEo = [
    { loc: mobAcProfilelinkREG, action: 'click' },
    { loc: mobAcProfileEnterTitleREG, action: 'click' },
    {
      loc: mobAcProfileSelectTitleDDREG,
      data: CommonData.TITLEREG,
      action: 'IDDropdowntxt',
    },
    {
      loc: mobAcProfileEnterFirstNameREG,
      data: CommonData.ACProfileFIRSTNAMEREG,
      action: 'clearNwrite',
    },
    {
      loc: mobAcProfileEnterLastNameREG,
      data: CommonData.ACProfileLASTNAMEREG,
      action: 'clearNwrite',
    },
    {
      loc: mobAcProfileEnterResetPwdREG,
      data: CommonData.RUPWDREG,
      action: 'write',
    },
    {
      loc: mobAcProfileEnterConfirmPwdREG,
      data: CommonData.RUPWDREG,
      action: 'write',
    },
    {
      loc: mobAcProfileEnterPWDHintREG,
      data: CommonData.PWDHintREG,
      action: 'clearNwrite',
    },
    { loc: mobAcProfileClickTandCREG, action: 'click' },
    { loc: mobAcProfileSubmitButtonREG, action: 'click' },
  ];

  expectedProfileUpdateTextPcEo = [
    { loc: acProfilePageREG, action: 'click' },
    { loc: acProfileEnterTitleREG, action: 'click' },
    {
      loc: acProfileSelectTitleDropDownREG,
      data: CommonData.TITLEREG,
      action: 'IDDropdowntxt',
    },
    {
      loc: acProfileEnterFirstNameREG,
      data: CommonData.ACProfileFIRSTNAMEREG,
      action: 'clearNwrite',
    },
    {
      loc: acProfileEnterLastNameREG,
      data: CommonData.ACProfileLASTNAMEREG,
      action: 'clearNwrite',
    },
    {
      loc: acProfileEnterResetPwdREG,
      data: CommonData.RUPWDREG,
      action: 'write',
    },
    {
      loc: acProfileEnterConfirmPwdREG,
      data: CommonData.RUPWDREG,
      action: 'write',
    },
    {
      loc: acProfileEnterPWDHintREG,
      data: CommonData.PWDHintREG,
      action: 'clearNwrite',
    },
    { loc: acProfileClickTandCREG, action: 'click' },
    { loc: acProfileSubmitButtonREG, action: 'click' },
  ];

  ruserLoginMob = [
    { loc: mobAcLoginlinkREG, action: 'click' },
    { loc: mobAcClickonAlreadyReglinkREG, action: 'click' },
    {
      loc: mobAcEnterRUEmailIDREG,
      data: ReturnUserID(),
      action: 'write',
    },
    { loc: mobAcEnterRUPasswordREG, data: CommonData.RPWDREG, action: 'write' },
    { loc: mobAcRuLoginButtonREG, action: 'click' },
    { action: 'screenshot' },
  ];

  ruserLoginPc = [
    { loc: gnavMyAccountlinkinHPREG, action: 'click' },
    { loc: gnavMyAcclinkREG, action: 'hover' },
    { loc: acClickAlreadyRegisteredlinkREG, action: 'click' },
    {
      loc: acRuEnterEmailIDREG,
      data: ReturnUserID(),
      action: 'write',
    },
    { loc: acRuEnterPasswordREG, data: CommonData.RPWDREG, action: 'write' },
    { loc: acRuClickLoginButtonREG, action: 'click' },
    { loc: gnavMyAccountlinkREG, action: 'click' },
    { loc: gnavMyAccountProfilelinkHoverREG, action: 'hover' },
    { loc: gnavMyAccountProfilelinkREG, action: 'click' },
    { action: 'screenshot' },
  ];

  mobHamburgerIconAfterLoggedInEo = [
    { loc: mobHamburgerIconAfterLoggedInREG, action: 'click' },
  ];

  orderHistoryMob = [
    { loc: mobAcOrderHistorylinkREG, action: 'click' },
    { loc: mobAcPastPurchasedlinkREG, action: 'click' },
    { loc: mobClickonViewOrderDetailsREG, action: 'click' },
    { loc: mobClickonReOrderButtonREG, action: 'click' },
    { action: 'screenshot' },
  ];

  orderHistoryPc = [
    { loc: acOrderHistorylinkREG, action: 'click' },
    { loc: acPastPurchasedlinkREG, action: 'click' },
    { loc: clickonViewOrderDetailsREG, action: 'click' },
    { loc: clickonReOrderButtonREG, action: 'click' },
    { action: 'screenshot' },
  ];

  signoutPc = [
    { loc: gnavHoverOnMyAccountlinkREG, action: 'hover' },
    { loc: gnavClickonMyAcclinkREG, action: 'click' },
    { loc: gnavSignOutHoverREG, action: 'hover' },
    { loc: acSignoutLinkREG, action: 'click' },
    { action: 'screenshot' },
  ];

  mobLogoRegEo = [{ loc: mobLogoREG, action: 'click' }];

  signoutMob = [
    { loc: mobSignoutlinkREG, action: 'click' },
    { loc: mobSignoutlink1REG, action: 'click' },
    { action: 'screenshot' },
  ];
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

async function profileUpdateAssertREG() {
  if (mobAcProfileUpdateAssertREG !== '') {
    var expectedProfileUpdateTextMOB = await (
      await t.$(mobAcProfileUpdateAssertREG)
    ).text();
    if (
      expectedProfileUpdateTextMOB.search(
        CommonData.acProfileUpdateASSERTREG
      ) !== -1
    ) {
      gauge.screenshot();
      matchCondition = true;
      gauge.message(expectedProfileUpdateTextMOB);
      assert(matchCondition, 'Profile update is expected');
    } else {
      matchCondition = false;
      assert(matchCondition, 'Profile update is not expected');
    }
  }
  gauge.screenshot();
}

async function profileUpdateAssertREGPC() {
  if (acProfileUpdateAssertREG !== '') {
    var expectedProfileUpdateTextPC = await (
      await t.$(acProfileUpdateAssertREG)
    ).text();
    if (
      expectedProfileUpdateTextPC.search(
        CommonData.acProfileUpdateASSERTREG
      ) !== -1
    ) {
      gauge.screenshot();
      matchCondition = true;
      gauge.message(expectedProfileUpdateTextPC);
      assert(matchCondition, 'Profile update is expected');
    } else {
      matchCondition = false;
      assert(matchCondition, 'Profile update is not expected');
    }
    gauge.screenshot();
  }
}

//This function is used to get the transaction ID
async function transactionId() {
  if (CSVWriteFlag && !getTransId) {
    var currenturl = await t.currentURL();
    //Extract the data after tid
    if (currenturl.toUpperCase().includes('TID')) {
      var tempData = currenturl
        .toUpperCase()
        .substring(currenturl.indexOf('TID=') + 4);
      // extracting Numbers alone
      tempData = tempData.match(regex);
      //Get the first number alone
      transNumberFromOrderDetails = tempData[0];
      console.log('Transaction id alone is: ' + transNumberFromOrderDetails);
      getTransId = true;
    }
  }
}

// No input data table in the spec file
step('EMEAACCCHKREG Initialize Helix', async function () {
  // Initialize the selectors from DB
  await initFrameworkSettings();
});

//BEX Step Implementations

//1
step('EMEAACCCHKREG MOB Hamburger Icon', async function () {
  await ElementAction(mobHamburgerIconRegEo);
});

//2
step('EMEAACCCHKREG MOB LoggedIn Profile Link', async function () {
  await ElementAction(mobLoggedinProfileLinkRegEo);
});

//3
step(
  'EMEAACCCHKREG Click on MOB My Account Profile link in Account Index Page, Update Profile details and Verify Profile Page is Updated',
  async function () {
    await ElementAction(expectedProfileUpdateTextMobEo);
    await profileUpdateAssertREG();
  }
);

//4
step(
  'EMEAACCCHKREG Click on My Account Profile link in Account Index Page, Update Profile details and Verify Profile Page is Updated',
  async function () {
    await ElementAction(expectedProfileUpdateTextPcEo);
    await profileUpdateAssertREGPC();
  }
);

//5
step(
  'EMEAACCCHKREG Click on MOB My Account link in Home Page, Navigate to Account Index Page and then Login as Existing Return User',
  async function () {
    await ElementAction(ruserLoginMob);
  }
);

//6
step(
  'EMEAACCCHKREG Click on My Account link in Home Page, Navigate to Account Index Page and then Login as Existing Return User',
  async function () {
    await ElementAction(ruserLoginPc);
  }
);

//7
step(
  'EMEAACCCHKREG MOB Hamburger and LoggedIn Profile Link',
  async function () {
    await ElementAction(mobHamburgerIconRegEo);
    await ElementAction(mobHamburgerIconAfterLoggedInEo);
    await ElementAction(mobLoggedinProfileLinkRegEo);
  }
);

//8
step(
  'EMEAACCCHKREG Verify user able to reorder from mob Orderhistory/Pastpurchased page and Navigate to cart page',
  async function () {
    await ElementAction(orderHistoryMob);
  }
);

//9
step(
  'EMEAACCCHKREG Verify user able to reorder from Orderhistory/Pastpurchased page and Navigate to cart page',
  async function () {
    await ElementAction(orderHistoryPc);
  }
);

//10
step(
  'EMEAACCCHKREG Navigate to My Account Page from Checkout Viewcart Page and Click on Signout link',
  async function () {
    await ElementAction(signoutPc);
  }
);

//11
step(
  'EMEAACCCHKREG Navigate to My Account Index Page from Checkout Viewcart Page',
  async function () {
    await ElementAction(mobLogoRegEo);
    await ElementAction(mobHamburgerIconRegEo);
    await ElementAction(mobLoggedinProfileLinkRegEo);
    await ElementAction(signoutMob);
  }
);

//12
step(
  'EMEAACCCHKREG Navigate to cart page by clicking on Cart overlay',
  async function () {
    const plat = siteDefinition.executionContext.platform.toUpperCase();
    await ElementAction([
      {
        loc: gds.get(plat === 'PC' ? 'bagIcon' : 'bagIconMob'),
        action: 'click',
      },
    ]);
  }
);
//13
step('EMEAACCCHKREG AC MOB Signout Button', async function () {
  await ElementAction([
    {
      loc: gds.get('signoutbtn'),
      action: 'click',
    },
  ]);
  gauge.screenshot();
});

//OPS Step Implementations

//1
step('EMEAACCCHKREG Set BrandLocale variables', async function () {
  const DeviceType = siteDefinition.executionContext.platform.toUpperCase();
  if (CSVWriteFlag) {
    var [Brand, Locale] = tags;
    const { OutputFileNameREG } = CommonData;
    const dataStoreEntries = {
      DSBrand: Brand,
      DSLocale: Locale,
      DSEnv: siteDefinition.executionContext.environment,
      DSDevice: DeviceType,
      DSFilename: OutputFileNameREG,
      DSCSVWrite: CSVWriteFlag,
    };
    for (let key in dataStoreEntries) {
      gds.put(key, dataStoreEntries[key]);
    }
  }
});

//2
step(
  'EMEAACCCHKREG Verify that the user is able to increase the QTY and apply <OfferType>',
  { continueOnFailure: true },
  async function (OfferType) {
    //Increasing the Product Quantity
    await ElementAction(qtyIncrease);
    const { PercentageDiscount } = CommonData;
    //Applying the offer
    offerTypeApplied = OfferType;
    if (OfferType === PercentageDiscount) {
      writeOffer[1].data = CommonData.PerOfferName;
      offerName = CommonData.PerOfferName;
    } else {
      writeOffer[1].data = CommonData.FlatOfferName;
      offerName = CommonData.FlatOfferName;
    }
    await ElementAction(writeOffer);

    //validating if the offer is applied
    if (await (await t.$(validOfferMsgREG)).exists()) {
      console.log('The discount has been applied is expected');
      gds.put('DSOfferType', offerTypeApplied);
      gds.put('DSOfferName', offerName);
    } else {
      gds.put('DSOfferName', CommonData.NoOfferREG);
      console.log('Discount is not applied');
    }
  }
);

//3
step(
  'EMEAACCCHKREG Verify that the user is able to enter the shipping details successfully',
  async function () {
    await ElementAction(gds.get('Shipping')); //getting data from sanity js file
  }
);

//4
step(
  'EMEAACCCHKREG Verify that the user is able to enter the billing details successfully',
  async function () {
    await ElementAction(continueShipping);
    await ElementAction(newBilling);
    await ElementAction(billingAddressDetails);
    await t.scrollDown(1000);
    await t.evaluate(await t.$(billingContinueButtonREG), (ele) => ele.focus());
    await t.click(await t.$(billingContinueButtonREG));
    await ElementAction(billingContinue);
  }
);

//5
step(
  'EMEAACCCHKREG Get Order Confirmation ID and Transaction ID',
  async function () {
    if (getOrderIdREG !== '' && CSVWriteFlag) {
      orderNumberFromOrderDetails = await (await t.$(getOrderIdREG)).text();
      var numList = orderNumberFromOrderDetails.match(regex);
      orderNumberFromOrderDetails = numList[0];
      console.log(
        'Order id from confirmation page is : ' + orderNumberFromOrderDetails
      );
      transactionId();
    }
  }
);

//6
step(
  "EMEAACCCHKREG Click On Account My Order and it's Details",
  async function () {
    await ElementAction(goToOrderDetails);
  }
);

//7
step(
  'EMEAACCCHKREG Click Order ID and Navigate to Order details',
  async function () {
    if (clickOrderIDREG !== '' && CSVWriteFlag) {
      //In mobile when clicked on Order Id Opens a new tab in PC mode, So updating the URL to Mobile mode
      if (gds.get('DSDevice') === 'MOB') {
        var result = await t.evaluate(await t.$(clickOrderIDREG), (ele) => {
          return ele.getAttribute('href');
        });
        await t.evaluate(await t.$(clickOrderIDREG), (ele) => ele.click());
        await t.emulateDevice(CommonData.EmulateDevice);
        await t.goto(getBaseURL('MOBILE') + result);
      } else {
        await t.evaluate(await t.$(clickOrderIDREG), (ele) => ele.click());
      }
    }
    gauge.screenshot();
  }
);

//8
step(
  'EMEAACCCHKREG Get Order and Account Details and Write Data to DataStore <UserType>',
  async function (UserType) {
    // To Fetch the Order details
    if (paymentMethodIdREG !== '' && CSVWriteFlag) {
      if (await (await t.$(paymentMethodIdREG)).exists()) {
        paymentMethodFromOrderDetails = await (
          await t.$(paymentMethodIdREG)
        ).text();
        // Extract payment method
        var titleLength = CommonData.PaymentTitleREG.length;
        paymentMethodFromOrderDetails =
          paymentMethodFromOrderDetails.substring(titleLength);
        // To remove line feeds
        paymentMethodFromOrderDetails = paymentMethodFromOrderDetails.replace(
          /(\r\n|\n|\r)/gm,
          ''
        );

        console.log(
          'Payment method id alone is: ' + paymentMethodFromOrderDetails
        );
      }
      if (shippingMethodIdREG !== '' && CSVWriteFlag) {
        const shipMethod = await t.$(shippingMethodIdREG);
        if (await shipMethod.exists()) {
          shipmentMethodFromOrderDetails = await shipMethod.text();

          // Extract shipping method
          titleLength = CommonData.ShippingTitleREG.length;
          shipmentMethodFromOrderDetails =
            shipmentMethodFromOrderDetails.substring(titleLength);
          shipmentMethodFromOrderDetails =
            shipmentMethodFromOrderDetails.replace(/(\r\n|\n|\r)/gm, '');

          console.log(
            'Shipping method id alone is: ' + shipmentMethodFromOrderDetails
          );
          transactionId();
        }
      }
    }

    // To get the user email address
    console.log(
      'User account : ' +
        gds.get(UserType === 'Guest' ? 'GuestUserEmail' : 'ReturnUserEmail')
    );

    // To write data to datastore
    if (CSVWriteFlag) {
      gauge.message('Collect and save data in data store');
      const { RPWDREG, PaymentTypeREG, CREDITCARDNUMBERREG } = CommonData;

      const dataStoreEntries = {
        DSUserType: `${UserType} User`,
        DSUserAccount: gds.get(
          UserType === 'Guest' ? 'GuestUserEmail' : 'ReturnUserEmail'
        ),
        DSUserPassword: RPWDREG,
        DSPaymentMethod: PaymentTypeREG,
        DSCreditcardNumber: CREDITCARDNUMBERREG,
        DSOrderID: orderNumberFromOrderDetails,
        DSTransID: transNumberFromOrderDetails,
        DSPaymentMethodInorder: paymentMethodFromOrderDetails,
        DSShippingMethodInOrder: shipmentMethodFromOrderDetails,
      };
      for (let key in dataStoreEntries) {
        gds.put(key, dataStoreEntries[key]);
      }
    }
  }
);

//9
step(
  'EMEAACCCHKREG Verify that the user is able to select paypal as payment method and place an order',
  async function () {
    const plat = siteDefinition.executionContext.platform.toUpperCase();
    if (plat === 'PC') {
      await ElementAction(orderPaypalDets);
      await ElementAction(payPalDetailsandPlaceOrder);
      await t.click(await t.$(clickConfrmContBtn), {
        waitForEvents: ['DOMContentLoaded'],
      });
    }
    if (plat === 'MOBILE') {
      await ElementAction(mobOrderPaypalDets);
      await ElementAction(payPalDetailsandPlaceOrder);
      await t.click(await t.$(clickConfrmContBtn), {
        waitForEvents: ['DOMContentLoaded'],
      });
    }
  }
);

//10
step(
  'EMEAACCCHKREG Verify that the user is able to checkout with PayPal from the viewcart page and place an order',
  async function () {
    await ElementAction(payPalExpDetails);
    await ElementAction(payPalDetailsandPlaceOrder);
    await t.click(await t.$(clickConfrmContBtn), {
      waitForEvents: ['DOMContentLoaded'],
    });
  }
);
