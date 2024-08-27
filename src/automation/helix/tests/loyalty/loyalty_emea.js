var timeoutSetting = '';
var emulationDevice = '';
var javaAlertPopup = '';
var addToBag = '';
var notAvailableProductsCount = 0;
var prodcatUrl = '';
var isShoppable1 = '';
var isDisplayable = '';
var productUrl = '';
var noDisplayableProductError = '';
var loyPnt = 0;
var bdayPoint = 0;
var tier2Pnt = 0;
var totalPnt = 0;
var earnPnt = 0;
var tierStatus = '';
var appOffer = '';
var offerAppliedFlag = '';
var profilePopupClose = '';
var birthdRwdRedeemBtn = '';
var orderConfMsgId = '';
var orderNum = '';
var orderNumber = '';
var rewOrderId = '';
var pendingId = '';
var rewdOrdernum = '';
var pendingStatus = '';
var prgBar = '';
var offerManagerUrl = '';
var appliedOffersId = '';
var appliedOffersId1 = '';
var appliedOffTxt = '';
var purAmtFlag = '';
var testPntTot = 0;
var percPnt = 0;
var loyaltyOfferPanel = '';
var purchaseAmnt = '';
var purAmntStr = '';
var purAmnt = 0;
var avlPoints = 0;
var lpntVcart = '';
var lpointStr = '';
var ltyPoints = 0;
var ltyPointsCal = 0;
var lpntOrConPg = '';
var lpntVarr = '';
var lpntConfPg = 0;
var totPurAmnt = 0;
var purchaseAmntVcart = '';
var lpntCheckout = '';
var purchaseAmntMob = '';
var emailPopUp = '';
var signupPopUp = '';
var cookieRejectBtn = '';
var mobLoginId = '';
var loginId1 = '';
var accRegisterNow = '';
var accRegisterNow1 = '';
var accRegisterNowMob = '';
var accRegisterNowMob1 = '';
var ltySideMenu = '';
var ltySideMenuMob = '';
var accGnav = '';
var accGnavMob = '';
var loyaltySection = '';
var loyIndexUrl = '';
var lpointsIndexPage = '';
var curPoints1 = '';
var tier1StatusId = '';
var curTierStatus = '';
var joinLoyaltyFooter = '';
var joinLoyaltyFooterMob = '';
var joinNowMarktPage = '';
var joinNowMarktPageMob = '';
var loginBtn = '';
var registerEmailId = '';
var joinNow = '';
var popUpId = '';
var rewardSection = '';
var rewardSectionMob = '';
var myRewardCtaMob = '';
var gnavCartButton = '';
var gnavCartButtonMob = '';
var viewCartPageUrl = '';
var expandButtonViewCart = '';
var checkoutButtonId = '';
var checkoutButtonMob = '';
var sampleContinue = '';
var sampleContinueMob = '';
var shippingAddressContinue = '';
var shippingContinueMob = '';
var paymentMethRadioBtn = '';
var paymentMethRadioBtnMob = '';
var termsAndConditionForAge = '';
var ordReviewPageTnC = '';
var completeTheOrder = '';
var completeTheOrderMob = '';
var payButtonId = '';
var welcomeRwdRedeemBtn = '';
var proceedToCheckout = '';
var proceedToCheckoutMob = '';
var guestUserId = '';
var guestUserContinue = '';
var guestUserSubmitMob = '';
var shippingPageTnC = '';
var loyaltyJoinConPage = '';
var loyPwdConPage = '';
var loyTermsConPage = '';
var accountInfo = '';
var accountInfoMob = '';
var hamburgerMenu = '';
var accountGnav = '';
var editProfile = '';
var titleSettings = '';
var titleSettingsMob = '';
var selectTitleMob = '';
var firstNameProfile = '';
var lastNameProfile = '';
var birthDateProfile = '';
var birthMonthProfile = '';
var birthDayPr = '';
var birthMonthPr = '';
var birthYearProfile = '';
var profileUpdate = '';
var profileUpdateMob = '';
var cardTypeId = '';
var cardTypeIdMob = '';
var continueToPayment = '';
var creditCardHolderName = '';
var creditCardId = '';
var entKbdCCDetails = '';
var expDateId = '';
var creditCardMonthDd = '';
var creditCardYearDd = '';
var cvvId = '';
var creditCardBank = '';
var titleId = '';
var titleDropdownPc = '';
var firstNameId = '';
var phoneId = '';
var lastNameId = '';
var addressId = '';
var addressId2 = '';
var cityId = '';
var streetId = '';
var subDistrictId = '';
var provinceId = '';
var stateDropdown = '';
var clickSelectState = '';
var cityDropdown = '';
var postalCodeId = '';
var pressTab = '';
var accRegFirstName = '';
var accRegLastName = '';
var accRegEmailId = '';
var accRegPwd = '';
var accRegisterYear = '';
var accRegisterMonth = '';
var accRegisterDay = '';
var postCode1 = '';
var accLoyRegisterTerms = '';
var accRegisterTerms = '';
var accRegCreateAcBtn = '';
var loyRegFname = '';
var loyRegLname = '';
var loyRegPostCode = '';
var loyRegBirthday = '';
var loyRegBirthmonth = '';
var loyRegisterTerms = '';
var accEmailTerms = '';
var loyaltySubmit = '';
var mrktPgLoyRegFname = '';
var mrktPgLoyRegPwd = '';
var mrktPgloySubmit = '';
var loyJoinIndexPg = '';
var accLoyalty = '';
var dt = new Date();
var birthMon = '';
var currtDate = 0;
var joinNowMarktPage1 = '';
var loyPopOverBtn = '';
var timeout = '';
var pollingTime = '';
var waitForLtySec = '';
var skuId = [];
var randomPopup = [];
var shippingDetails = [];
var paymentDetailsPc = [];
var paymentDetailsMob = [];
var titlePc = [];
var titleMob = [];
var personalProfileDetails = [];
var guserDetails = [];
var newLoyUserDetails = [];
var testOfferList = [];
var CommonData = {};
var newEmailId = '';
var t = require('taiko');

const matchCondition = true;
const feature = 'Loyalty';
const Helper = require('../../../helix/helpers/helper');
const Util = require('../../../../utilities/util');
const assert = require('assert');
let siteDefinition, source, NullDataException, tags;
const Hengine = require('../../../../datainterface/providers/hengine');
const taikoOverride = require('../../helix_taiko');
const Gen = require('../ReUsableFunction.js');

const messages = {
  stepNotApplicable: 'This step is not applicable for this Brand/Locale',
  lpointEarned: 'Loaylty point earned',
  purchaseAmt: 'purchase amount',
  lpointCalSuccess: 'Loyalty point calcualtion successful',
  lpointCalFail: 'Loyalty point calcualtion failed',
  ordConPgPntCalSuccess:
    'Loyalty point calcualtion in Order confirmation page successful',
  ordConPgPntCalFail:
    'Loyalty point calcualtion in Order confirmation page failed',
};

function makeEmail() {
  const strValues = 'abcdefg12345';
  let strEmail = '';
  let strTmp;
  for (let i = 0; i < 10; i++) {
    strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
    strEmail = strEmail + strTmp;
  }
  strTmp = '';
  for (let j = 0; j < 8; j++) {
    strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
    strEmail = strEmail + strTmp;
  }
  strEmail = strEmail + '@test' + '.com';
  return strEmail;
}

async function creditCardDetailsandPlaceOrder() {
  if (entKbdCCDetails !== '') {
    if (await (await t.$(entKbdCCDetails)).exists()) {
      const EnterCreditCardValue = CommonData.CREDITCARD;
      const creditCardValue = EnterCreditCardValue.split('');
      await t.press(creditCardValue);
      await t.press('Tab');
      await t.press('Enter');
      const CcMonth = CommonData.CCM;
      const creditCardMonthValue = CcMonth.split('');
      await t.press(creditCardMonthValue);
      await t.press('Enter');
      await t.press('Tab');
      await t.press('Enter');
      const CcYear = CommonData.CCY;
      const creditCardYearValue = CcYear.split('');
      await t.press(creditCardYearValue);
      await t.press('Enter');
      await t.press('Tab');
      const enterCvvValue = CommonData.CVV;
      const cvvValue = enterCvvValue.split('');
      await t.press(cvvValue);
      gauge.screenshot();
    }
  }
}

// Random birthday date
function randomBday() {
  const bupper = 30;
  const blower = 1;
  let randomBdt = 0;
  if (CommonData.BRLOC.includes('EL-IT')) {
    currtDate = dt.getDate();
    if (currtDate === '1') {
      randomBdt = bupper - blower;
    } else {
      randomBdt = currtDate - blower;
    }
  } else {
    randomBdt = Math.floor(Math.random() * (bupper - blower + 1)) + blower;
  }
  return randomBdt;
}

function bdayMonth() {
  dt = new Date();
  birthMon = dt.getMonth();
  birthMon = birthMon + 1;
  return birthMon;
}

function pointcalculation(purAmnt) {
  totPurAmnt = totPurAmnt + purAmnt;
  return totPurAmnt;
}

function setVal() {
  totPurAmnt = 0;
  loyPnt = 0;
  totalPnt = 0;
  purAmnt = 0;
  avlPoints = 0;
  appOffer = '';
  tierStatus = CommonData.TIER1STATUS;
  earnPnt = CommonData.EARNPNT1;
}

function lpointCalculation(purAmnt) {
  if (tierStatus.includes(CommonData.TIER2STATUS)) {
    earnPnt = CommonData.EARNPNT2;
  } else if (tierStatus.includes(CommonData.TIER3STATUS)) {
    earnPnt = CommonData.EARNPNT3;
  }
  if (CommonData.BRLOC.includes('MC-DE')) {
    loyPnt = purAmnt * earnPnt;
  } else {
    loyPnt = Math.ceil(purAmnt * earnPnt);
  }
  if (offerAppliedFlag) {
    switch (appOffer) {
      case 'ly_birthday_double_points':
        bdayPoint = loyPnt * CommonData.BDAYBONUS;
        loyPnt = loyPnt + bdayPoint;
        break;
      case 'ly_birthday_double_points_t1':
        bdayPoint = purAmnt * CommonData.BDAYBONUS;
        loyPnt = bdayPoint;
        break;
      case 'ly_birthday_double_pt':
        bdayPoint = purAmnt * CommonData.BDAYBONUS;
        loyPnt = bdayPoint;
        break;
      case 'ly_birthday_20off':
        bdayPoint = purAmnt * CommonData.BDAYBONUS;
        loyPnt = loyPnt + bdayPoint;
        break;
      case 'ly_welcome_pt':
        tier2Pnt = purAmnt * CommonData.TIER2UPBONUS;
        loyPnt = loyPnt + tier2Pnt;
        break;
      case 'elistbday':
        loyPnt = loyPnt + parseInt(CommonData.BDAYPOINT1, 10);
        break;
      case 'lyl_bday_points_20':
        loyPnt = loyPnt + parseInt(CommonData.BDAYPOINT2, 10);
        break;
      case 'lyl_bday1':
        bdayPoint = purAmnt * CommonData.BDAYBONUS;
        loyPnt = bdayPoint;
        break;
    }
  }
  loyPnt = loyPnt + testPntTot;
  totalPnt = totalPnt + loyPnt;
  return loyPnt;
}

function reinitialize() {
  skuId = [
    CommonData.skuId1,
    CommonData.skuId2,
    CommonData.skuId3,
    CommonData.skuId4,
    CommonData.skuId5,
  ];
  randomPopup = [emailPopUp, signupPopUp, cookieRejectBtn];
  testOfferList = [
    CommonData.TESTOFFER1,
    CommonData.TESTOFFER2,
    CommonData.TESTOFFER3,
    CommonData.TESTOFFER4,
  ];
  newLoyUserDetails = [
    {
      loc: accRegFirstName,
      data: CommonData.REGNAME,
      action: 'TryCatchWrite',
    },
    {
      loc: accRegLastName,
      data: CommonData.LASTNAME,
      action: 'TryCatchWrite',
    },
    { loc: accRegPwd, data: CommonData.NPWD, action: 'TryCatchWrite' },
    { loc: accLoyRegisterTerms, action: 'tryCatchClick' },
    { loc: accRegisterTerms, action: 'tryCatchClick' },
    { loc: loyRegFname, data: CommonData.FIRSTNAME, action: 'TryCatchWrite' },
    { loc: loyRegLname, data: CommonData.LASTNAME, action: 'TryCatchWrite' },
    { loc: loyRegPostCode, data: CommonData.ZIPCODE, action: 'TryCatchWrite' },
    {
      loc: loyRegBirthday,
      data: CommonData.BIRTHDAY,
      action: 'IndexDropDownID',
    },
    {
      loc: loyRegBirthmonth,
      data: CommonData.BIRTHMONTH,
      action: 'IndexDropDownID',
    },
    { action: 'screenshot' },
    { loc: accRegCreateAcBtn, action: 'tryCatchClick' },
    { loc: accLoyalty, action: 'tryCatchClick' },
    { loc: postCode1, data: CommonData.ZIPCODE, action: 'TryCatchWrite' },
    { loc: loyRegisterTerms, action: 'tryCatchClick' },
    { loc: accEmailTerms, action: 'tryCatchClick' },
    { loc: loyaltySubmit, action: 'tryCatchClick' },
    {
      loc: mrktPgLoyRegFname,
      data: CommonData.FIRSTNAME,
      action: 'TryCatchWrite',
    },
    { loc: mrktPgLoyRegPwd, data: CommonData.NPWD, action: 'TryCatchWrite' },
    { loc: mrktPgloySubmit, action: 'tryCatchClick' },
    { loc: loyJoinIndexPg, action: 'tryCatchClick' },
  ];

  shippingDetails = [
    { loc: titleId, action: 'tryCatchClick' },
    { loc: titleDropdownPc, data: CommonData.TITLE, action: 'IDDropdowntxt' },
    { loc: firstNameId, data: CommonData.FIRSTNAME, action: 'write' },
    { loc: lastNameId, data: CommonData.LASTNAME, action: 'write' },
    { loc: phoneId, data: CommonData.PHONE, action: 'write' },
    { loc: addressId, data: CommonData.ADDRESS, action: 'write' },
    { loc: addressId2, data: CommonData.ADDRESS2, action: 'write' },
    { loc: cityId, data: CommonData.CITY, action: 'write' },
    { loc: streetId, data: CommonData.STREET, action: 'write' },
    { loc: subDistrictId, data: CommonData.SUBDISTRICT, action: 'write' },
    { loc: provinceId, data: CommonData.STATE, action: 'write' },
    { loc: stateDropdown, data: CommonData.STATE, action: 'IDDropdowntxt' },
    {
      loc: clickSelectState,
      data: CommonData.STATE,
      action: 'Dropdownwithoutselecttag',
    },
    { loc: cityDropdown, data: CommonData.CITY, action: 'IDDropdowntxt' },
    { loc: postalCodeId, data: CommonData.ZIPCODE, action: 'write' },
    { loc: pressTab, action: 'pressTab' },
    { action: 'screenshot' },
  ];

  paymentDetailsPc = [
    { loc: continueToPayment, action: 'tryCatchClick' },
    {
      loc: creditCardId,
      data: CommonData.CREDITCARD,
      action: 'WaitforElementNwrite',
    },
    {
      loc: creditCardHolderName,
      data: CommonData.CCHOLDERNAME,
      action: 'TryCatchWrite',
    },
    { loc: expDateId, data: CommonData.CCMONTH, action: 'write' },
    {
      loc: creditCardMonthDd,
      data: CommonData.CCM,
      action: 'IndexDropdownName',
    },
    {
      loc: creditCardYearDd,
      data: CommonData.CCY,
      action: 'IndexDropdownName',
    },
    { loc: cvvId, data: CommonData.CVV, action: 'write' },
    { loc: creditCardBank, data: CommonData.CCBANK, action: 'IDDropdowntxt' },
    { action: 'screenshot' },
  ];

  paymentDetailsMob = [
    { loc: continueToPayment, action: 'tryCatchClick' },
    {
      loc: creditCardId,
      data: CommonData.CREDITCARD,
      action: 'WaitforElementNwrite',
    },
    {
      loc: creditCardHolderName,
      data: CommonData.CCHOLDERNAME,
      action: 'TryCatchWrite',
    },
    {
      loc: expDateId,
      data: CommonData.CCMONTH,
      action: 'WaitforElementNwrite',
    },
    {
      loc: creditCardMonthDd,
      data: CommonData.CCM,
      action: 'IndexDropdownName',
    },
    {
      loc: creditCardYearDd,
      data: CommonData.CCY,
      action: 'IndexDropdownName',
    },
    { loc: cvvId, data: CommonData.CVV, action: 'WaitforElementNwrite' },
    { loc: creditCardBank, data: CommonData.CCBANK, action: 'IDDropdowntxt' },
    { action: 'screenshot' },
  ];

  titlePc = [
    { loc: accountInfo, action: 'click' },
    { loc: editProfile, action: 'tryCatchClick' },
    { loc: titleSettings, action: 'click' },
  ];

  titleMob = [
    { loc: hamburgerMenu, action: 'tryCatchClick' },
    { loc: accountGnav, action: 'tryCatchClick' },
    { loc: accountInfoMob, action: 'click' },
    { loc: editProfile, action: 'tryCatchClick' },
    { loc: titleSettingsMob, data: '2', action: 'IndexDropDownID' },
    { loc: selectTitleMob, action: 'click' },
  ];
  guserDetails = [
    {
      loc: registerEmailId,
      data: newEmailId,
      action: 'write',
    },
    { loc: joinNow, action: 'tryCatchClick' },
  ];

  personalProfileDetails = [
    {
      loc: firstNameProfile,
      data: CommonData.FIRSTNAME,
      action: 'clearNwrite',
    },
    { loc: lastNameProfile, data: CommonData.LASTNAME, action: 'clearNwrite' },
    { loc: birthDateProfile, data: randomBday(), action: 'IndexDropDownID' },
    { loc: birthMonthProfile, data: bdayMonth(), action: 'IndexDropDownID' },
    { loc: birthDayPr, data: randomBday(), action: 'IDDropdowntxt' },
    { loc: birthMonthPr, data: bdayMonth(), action: 'IDDropdowntxt' },
    {
      loc: birthYearProfile,
      data: CommonData.BdayYear,
      action: 'IDDropdowntxt',
    },
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

step('EMEALOYALTY Initialize Helix', async function () {
  // Initialize the selectors from DB
  await initFrameworkSettings();
});

step('EMEALOYALTY Mobile device emulation', async function () {
  await t.emulateDevice(emulationDevice);
  gauge.message('Emulation device: ' + emulationDevice);
});
step('EMEALOYALTY Set revision tag', async function () {
  Helper.setRevisionTag(siteDefinition, t);
  await t.goto(siteDefinition.executionContext.url, {
    waitForEvents: ['loadEventFired'],
  });
});

step('EMEALOYALTY Set cookies', async function () {
  t.setConfig({ navigationTimeout: parseInt(timeoutSetting, 10) });
  await Helper.setWindowSize(Util.ScreenSizes['1040p'], t);
  await Helper.setWAFCookie(siteDefinition, t);
  await Helper.setAdroll(siteDefinition, t);
  await Helper.setAkamaiBypass(siteDefinition, t);
  await Helper.setApiEnv(siteDefinition, t);
  await Helper.getPerlgemEnvCookie(siteDefinition, t);
  await Helper.setOtherCookies(siteDefinition, t);
  await Helper.setTestOrderCookie(siteDefinition, t);
  await Helper.setRevisionTag(siteDefinition, t);
});

step('EMEALOYALTY Set test order flag', async function () {
  await Helper.setTestOrderCookie(siteDefinition, t);
});

step('EMEALOYALTY Go to Prodcat and browse to SPP', async function () {
  for (let i = 0; i < skuId.length; i++) {
    await t.goto(
      siteDefinition.executionContext.adminUrl + prodcatUrl + skuId[i],
      {
        waitForEvents: ['DOMContentLoaded'],
      }
    );
    const isShoppableValue = await (await t.$(isShoppable1)).text();
    const isDisplayableValue = await (await t.$(isDisplayable)).text();
    if (isShoppableValue === '1' && isDisplayableValue !== '0') {
      gauge.message(
        'The Product with SKU ID - ' +
          skuId[i] +
          ' is available and proceeding to add to Cart'
      );
      if (await (await t.$(productUrl)).exists(pollingTime, timeout)) {
        const url = await (await t.$(productUrl)).text();
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
      gauge.message(
        'The Product with SKU ID - ' +
          skuId[i] +
          ' is NOT available for adding it to Cart '
      );
      notAvailableProductsCount++;
    }
  }
  if (notAvailableProductsCount === skuId.length) {
    // matchCondition = false;
    assert(
      !matchCondition,
      'None of the products are available for adding it to Cart'
    );
  }
});

step('EMEALOYALTY Add product to Bag in SPP', async function () {
  if (javaAlertPopup !== '') {
    t.alert(javaAlertPopup, async () => await t.accept());
  }
  let AddtoBagExist = 0;
  for (let i = 0; i < 2; i++) {
    if (await (await t.$(addToBag)).exists(pollingTime, timeout)) {
      if (await (await t.$(addToBag)).isDisabled() !== true) {
        await t.evaluate(await t.$(addToBag), (ele) => ele.focus());
        await t.evaluate(
          await t.$(addToBag, { waitForEvents: ['loadEventFired'] }),
          (ele) => ele.click()
        );
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
});

// loyalty code
step('EMEALOYALTY Close Profile Popup', async function () {
  if (profilePopupClose !== '') {
    await Gen.PopUpClose(profilePopupClose);
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('EMEALOYALTY Place order validation', async function () {
  if (orderConfMsgId !== '') {
    if (await (await t.$(orderConfMsgId)).exists()) {
      await t.waitFor(await t.$(orderConfMsgId), timeout);
      const confirmurl = await t.currentURL();
      const getOrderNumber = await (await t.$(orderConfMsgId)).text();
      assert(confirmurl.includes(CommonData.ORDERCONFIRMURL));
      gauge.message('Order placed successfully:' + getOrderNumber);
      gauge.screenshot();
    } else {
      assert(!matchCondition, 'Order not placed');
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('EMEALOYALTY verify points pending status', async function () {
  if (rewOrderId !== '') {
    rewdOrdernum = await (await t.$(rewOrderId)).text();
    if (rewdOrdernum.includes(orderNumber)) {
      await t.evaluate(await t.$(pendingId), (ele) => ele.scrollIntoView());
      pendingStatus = await (await t.$(pendingId)).text();
      assert(
        pendingStatus.includes(CommonData.TOBECONFIRMPC),
        'Order number not in pending status'
      );
      gauge.screenshot();
    } else {
      assert(!matchCondition, 'Reward page order num not matching');
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('EMEALOYALTY Navigate to loyalty index page', async function () {
  if (loyIndexUrl !== '') {
    if (CommonData.BRLOC.includes('MC-BE')) {
      await t.goto(siteDefinition.executionContext.url + loyIndexUrl, {
        waitForEvents: ['DOMContentLoaded'],
      });
      await t.waitFor(await t.$(prgBar), waitForLtySec);
    } else {
      await t.goto(siteDefinition.executionContext.url + loyIndexUrl, {
        waitForEvents: ['DOMContentLoaded'],
      });
      if (!await (await t.$(rewardSectionMob)).exists(pollingTime, timeout)) {
        gauge.message('The account index page is not loaded within 20 seconds');
      }
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('EMEALOYALTY Navigate to offer manager', async function () {
  if (offerManagerUrl !== '') {
    if (
      siteDefinition.executionContext.environment.toUpperCase() === 'PROD' ||
      siteDefinition.executionContext.environment.toUpperCase() === 'PREPROD'
    ) {
      await t.goto(siteDefinition.executionContext.adminUrl + offerManagerUrl, {
        waitForEvents: ['DOMContentLoaded'],
      });
    } else {
      await t.goto(siteDefinition.executionContext.adminUrl + offerManagerUrl, {
        waitForEvents: ['DOMContentLoaded'],
      });
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('EMEALOYALTY Verify welcome offer', async function () {
  if (appliedOffersId !== '') {
    if (
      siteDefinition.executionContext.environment.toUpperCase() === 'PROD' ||
      siteDefinition.executionContext.environment.toUpperCase() === 'PREPROD'
    ) {
      appliedOffTxt = await (await t.$(appliedOffersId1)).text();
    } else {
      appliedOffTxt = await (await t.$(appliedOffersId)).text();
    }
    gauge.message(appliedOffTxt);
    if (appliedOffTxt.includes(CommonData.WELCOMEOFFER1)) {
      offerAppliedFlag = true;
      appOffer = CommonData.WELCOMEOFFER1;
      assert(matchCondition);
      gauge.message('Welcome offer applied');
      gauge.screenshot();
    } else {
      assert(!matchCondition, 'Welcome offer not applied');
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('EMEALOYALTY Verify Test offers', async function () {
  if (appliedOffersId !== '') {
    if (
      siteDefinition.executionContext.environment.toUpperCase() === 'PROD' ||
      siteDefinition.executionContext.environment.toUpperCase() === 'PREPROD'
    ) {
      appliedOffTxt = await (await t.$(appliedOffersId1)).text();
    } else {
      appliedOffTxt = await (await t.$(appliedOffersId)).text();
    }
    gauge.message(appliedOffTxt);
    if (testOfferList.includes(appliedOffTxt)) {
      if (appliedOffTxt.includes(CommonData.TESTOFFER1)) {
        testPntTot = parseInt(CommonData.TESTPNT1, 10);
        gauge.message(CommonData.TESTOFFER1, 'offer applied');
      }
      if (appliedOffTxt.includes(CommonData.TESTOFFER2)) {
        testPntTot = parseInt(CommonData.TESTPNT2, 10);
        gauge.message(CommonData.TESTOFFER2, 'offer applied');
      }
      if (
        appliedOffTxt.includes(CommonData.TESTOFFER3) &&
        !(purAmtFlag === 'true')
      ) {
        testPntTot = parseFloat(purAmnt);
        gauge.message(CommonData.TESTOFFER3, 'offer applied');
      }
      if (appliedOffTxt.includes(CommonData.TESTOFFER4)) {
        percPnt = purAmnt * parseFloat(CommonData.TESTPNT4);
        purAmnt = purAmnt - percPnt;
        purAmnt = Math.ceil(purAmnt);
        gauge.message(CommonData.TESTOFFER4, 'offer applied');
      }
    } else {
      gauge.message('Test offers not applied');
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('EMEALOYALTY Verify birthday offer', async function () {
  if (appliedOffersId !== '') {
    console.log(CommonData.BIRTHDAYOFFER1, 'applied offer checking..');
    if (
      siteDefinition.executionContext.environment.toUpperCase() === 'PROD' ||
      siteDefinition.executionContext.environment.toUpperCase() === 'PREPROD'
    ) {
      appliedOffTxt = await (await t.$(appliedOffersId1)).text();
    } else {
      appliedOffTxt = await (await t.$(appliedOffersId)).text();
    }
    gauge.message(appliedOffTxt);
    if (appliedOffTxt.includes(CommonData.BIRTHDAYOFFER1)) {
      offerAppliedFlag = true;
      appOffer = CommonData.BIRTHDAYOFFER1;
      assert(matchCondition);
      gauge.message('Birthday offer applied ');
      gauge.screenshot();
    } else {
      assert(!matchCondition, 'Birthday offer not applied');
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('EMEALOYALTY Verify loyalty offer code panel', async function () {
  if (loyaltyOfferPanel !== '') {
    assert(
      await (await t.$(loyaltyOfferPanel)).isVisible(),
      'Loyalty offer code panel not displayed'
    );
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('EMEALOYALTY Get purchase amount', async function () {
  if (purchaseAmnt !== '') {
    purAmntStr = await (await t.$(purchaseAmnt)).text();
    if (
      CommonData.BRLOC.includes('EL-ZA') ||
      CommonData.BRLOC.includes('EL-IT')
    ) {
      purAmntStr = purAmntStr.substring(
        purAmntStr.lastIndexOf(CommonData.CurSymbol) + 1
      );
      purAmntStr = purAmntStr.replace(/\s/g, '');
      purAmntStr = purAmntStr.replace(',', '.');
      purAmntStr = Math.ceil(purAmntStr);
      purAmnt = parseInt(purAmntStr, 10);
      avlPoints = pointcalculation(purAmnt);
      console.log('Available points ', avlPoints);
    } else if (
      CommonData.BRLOC.includes('MC-BE') ||
      CommonData.BRLOC.includes('MC-DE')
    ) {
      purAmntStr = purAmntStr.substring(
        purAmntStr.lastIndexOf(CommonData.CurSymbol) + 1
      );
      purAmntStr = purAmntStr.replace(/\s/g, '');
      purAmntStr = purAmntStr.replace(',', '.');
      purAmnt = parseFloat(purAmntStr);
    } else if (CommonData.BRLOC.includes('CL-IT')) {
      purAmntStr = purAmntStr.substring(
        purAmntStr.lastIndexOf(CommonData.CurSymbol) + 1
      );
      purAmntStr = purAmntStr.replace('€', ' ');
      purAmnt = parseFloat(purAmntStr);
      purAmntStr = Math.ceil(purAmntStr);
      purAmnt = purAmntStr;
      avlPoints = pointcalculation(purAmnt);
      gauge.message(messages.purchaseAmt + purAmnt);
    } else {
      purAmntStr = purAmntStr.replace(CommonData.CurSymbol, '');
      purAmntStr = Math.ceil(purAmntStr);
      purAmnt = parseFloat(purAmntStr);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('EMEALOYALTY verify loyalty point in view cart page', async function () {
  if (lpntVcart !== '') {
    if (
      CommonData.BRLOC.includes('MC-DE') ||
      CommonData.BRLOC.includes('BB-FR')
    ) {
      lpointStr = await (await t.$(lpntVcart)).text();
      ltyPoints = lpointStr.replace(/\D/g, '');
      ltyPoints = parseFloat(ltyPoints);
      ltyPointsCal = lpointCalculation(purAmnt);
      ltyPointsCal = Math.ceil(ltyPointsCal);
      avlPoints = pointcalculation(purAmnt);
      gauge.message(messages.lpointEarned + ltyPointsCal);
    } else if (CommonData.BRLOC.includes('CL-IT')) {
      lpointStr = await (await t.$(lpntVcart)).text();
      lpointStr = lpointStr.split(' ').filter(Number);
      lpointStr = parseFloat(lpointStr);
      lpointStr = Math.ceil(lpointStr);
      ltyPoints = lpointStr;
      ltyPointsCal = lpointCalculation(purAmnt);
      purAmnt = purAmntStr;
      avlPoints = pointcalculation(purAmnt);
      gauge.message(messages.lpointEarned + ltyPointsCal);
    } else if (CommonData.BRLOC.includes('EL-ZA')) {
      lpointStr = await (await t.$(lpntVcart)).text();
      lpointStr = lpointStr.split(' ').filter(Number);
      lpointStr = parseInt(lpointStr[0].toString());
      ltyPoints = parseInt(lpointStr, 10);
      ltyPointsCal = lpointCalculation(purAmnt);
      gauge.message(messages.lpointEarned + ltyPointsCal);
    } else {
      lpointStr = await (await t.$(lpntVcart)).text();
      ltyPoints = lpointStr.replace(/\D/g, '');
      ltyPoints = parseInt(ltyPoints, 10);
      ltyPointsCal = lpointCalculation(purAmnt);
      avlPoints = pointcalculation(purAmnt);
      gauge.message(messages.lpointEarned + ltyPointsCal);
    }
    if (ltyPoints === ltyPointsCal) {
      assert(matchCondition);
      gauge.screenshot();
      gauge.message(messages.lpointCalSuccess);
    } else {
      assert(!matchCondition, messages.lpointCalFail);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'EMEALOYALTY verify loyalty point in Order confirmation page',
  async function () {
    if (lpntOrConPg !== '') {
      if (CommonData.BRLOC.includes('CL-IT')) {
        lpntVarr = await (await t.$(lpntOrConPg)).text();
        lpntVarr = lpntVarr.split(' ').filter(Number);
        lpntVarr = parseFloat(lpntVarr);
        lpntConfPg = lpntVarr;
        console.log('loyalty points in confirmation page ', lpntConfPg);
        if (lpntConfPg === purAmnt) {
          assert(matchCondition);
          gauge.message(messages.ordConPgPntCalSuccess);
        }
      } else {
        lpntVarr = await (await t.$(lpntOrConPg)).text();
        lpntConfPg = lpntVarr.replace(/\D/g, '');
        lpntConfPg = parseInt(lpntConfPg, 10);
        console.log('loyalty points in confirmation page ', lpntConfPg);
        if (lpntConfPg === ltyPointsCal) {
          assert(matchCondition);
          gauge.message(messages.ordConPgPntCalSuccess);
        } else {
          assert(!matchCondition, messages.ordConPgPntCalFail);
        }
      }
      await t.evaluate(await t.$(orderNum), (ele) => ele.click(), {
        waitForEvents: ['DOMContentLoaded'],
      });
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step('EMEALOYALTY Set values', async function () {
  await setVal();
});

step('EMEALOYALTY Get purchase amount in viewcart page', async function () {
  if (purchaseAmntVcart !== '') {
    purAmntStr = await (await t.$(purchaseAmnt)).text();
    if (CommonData.BRLOC.includes('CL-IT')) {
      purAmntStr = purAmntStr.substring(purAmntStr.lastIndexOf('R') + 1);
      purAmntStr = purAmntStr.replace('€', ' ');
      purAmnt = parseFloat(purAmntStr);
      purAmntStr = Math.ceil(purAmntStr);
      purAmnt = purAmntStr;
      avlPoints = pointcalculation(purAmnt);
      gauge.message(messages.purchaseAmt + purAmnt);
    } else {
      purAmntStr = purAmntStr.substring(purAmntStr.lastIndexOf('$') + 1);
      purAmntStr = purAmntStr.replace(',', ' ');
      purAmnt = parseInt(purAmntStr, 10);
      avlPoints = pointcalculation(purAmnt);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'EMEALOYALTY verify loyalty point in checkout index page',
  async function () {
    if (lpntCheckout !== '') {
      gauge.screenshot();
      lpointStr = await (await t.$(lpntCheckout)).text();
      lpointStr = lpointStr.replace(/\D/g, '');
      lpointStr = parseFloat(lpointStr);
      lpointStr = Math.ceil(lpointStr);
      ltyPoints = lpointStr;
      ltyPointsCal = lpointCalculation(purAmnt);
      ltyPointsCal = Math.ceil(ltyPointsCal);
      console.log('lpoint calc', ltyPointsCal);
      // purAmnt = purAmntStr;
      gauge.message(messages.lpointEarned + ltyPointsCal);
      if (ltyPoints === ltyPointsCal) {
        assert(matchCondition);
        gauge.message(messages.lpointCalSuccess);
      } else {
        assert(!matchCondition, messages.lpointCalFail);
      }
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step('EMEALOYALTY Get purchase amount Mob', async function () {
  if (purchaseAmntMob !== '') {
    await t.waitFor(await t.$(purchaseAmntMob), timeout);
    purAmntStr = await (await t.$(purchaseAmntMob)).text();
    if (
      CommonData.BRLOC.includes('EL-ZA') ||
      CommonData.BRLOC.includes('EL-IT')
    ) {
      purAmntStr = purAmntStr.substring(
        purAmntStr.lastIndexOf(CommonData.CurSymbol) + 1
      );
      purAmntStr = purAmntStr.replace(/\s/g, '');
      purAmntStr = purAmntStr.replace(',', '.');
      purAmntStr = Math.ceil(purAmntStr);
      purAmnt = parseInt(purAmntStr, 10);
      avlPoints = pointcalculation(purAmnt);
      console.log('Available points ', avlPoints);
    } else if (
      CommonData.BRLOC.includes('MC-BE') ||
      CommonData.BRLOC.includes('MC-DE')
    ) {
      purAmntStr = purAmntStr.substring(
        purAmntStr.lastIndexOf(CommonData.CurSymbol) + 1
      );
      purAmntStr = purAmntStr.replace(/\s/g, '');
      purAmntStr = purAmntStr.replace(',', '.');
      purAmnt = parseFloat(purAmntStr);
    } else if (CommonData.BRLOC.includes('CL-IT')) {
      purAmntStr = purAmntStr.substring(purAmntStr.lastIndexOf('R') + 1);
      purAmntStr = purAmntStr.replace('€', ' ');
      purAmnt = parseFloat(purAmntStr);
      purAmntStr = Math.ceil(purAmntStr);
      purAmnt = purAmntStr;
      avlPoints = pointcalculation(purAmnt);
      gauge.message(messages.purchaseAmt + purAmnt);
    } else {
      purAmntStr = purAmntStr.replace(CommonData.CurSymbol, '');
      purAmntStr = Math.ceil(purAmntStr);
      purAmnt = parseFloat(purAmntStr);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('EMEALOYALTY Look for random popups and close it', async function () {
  for (let i = 0; i < randomPopup.length; i++) {
    await Gen.PopUpClose(randomPopup[i]);
  }
});

step('EMEALOYALTY Click logIn btn/link', async function () {
  if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
    await Gen.TryCatchClickAction(loginId1);
  } else if (
    siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE'
  ) {
    await Gen.TryCatchClickAction(mobLoginId);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('EMEALOYALTY Account Register Now', async function () {
  if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
    await Gen.TryCatchClickAction(accRegisterNow);
  } else if (
    siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE'
  ) {
    await Gen.TryCatchClickAction(accRegisterNowMob);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
  gauge.screenshot();
});

step('EMEALOYALTY Account Register Now1', async function () {
  if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
    await Gen.TryCatchClickAction(accRegisterNow1);
  } else if (
    siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE'
  ) {
    await Gen.TryCatchClickAction(accRegisterNowMob1);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
  gauge.screenshot();
});

step(
  'EMEALOYALTY Enter new user details to create loyalty account',
  async function () {
    if (accRegEmailId !== '') {
      if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
        await Gen.ElementAction(newLoyUserDetails);
        await Gen.TryCatchClickAction(loyPopOverBtn);
      }
      if (siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE') {
        await Gen.ElementAction(newLoyUserDetails);
        await Gen.TryCatchClickAction(loyPopOverBtn);
      }
    }
  }
);

step('EMEALOYALTY Account Register DOB', async function () {
  if (accRegisterMonth !== '') {
    try {
      await t.dropDown({ id: accRegisterMonth }).select(CommonData.BIRTHMONTH);
      await t.dropDown({ id: accRegisterDay }).select(CommonData.BIRTHDAY);
      await t.dropDown({ id: accRegisterYear }).select(CommonData.BIRTHYEAR);
    } catch (e) {
      gauge.message(
        'DOB is not applicable for this Brand/Local or did not appear'
      );
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'EMEALOYALTY Click on loyalty menu in account index page',
  async function () {
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      await Gen.TryCatchClickAction(accGnav);
      await Gen.TryCatchClickAction(ltySideMenu);
    } else if (
      siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE'
    ) {
      await Gen.TryCatchClickAction(accGnavMob);
      await Gen.TryCatchClickAction(ltySideMenuMob);
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step(
  'EMEALOYALTY Verify Loyalty Section in Account Index Page',
  async function () {
    if (loyaltySection !== '') {
      await t.waitFor(await t.$(loyaltySection), waitForLtySec);
      assert(
        await (await t.$(loyaltySection)).isVisible(),
        'Loyalty Section not displayed in Index page'
      );
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step('EMEALOYALTY Display current Tier Points', async function () {
  if (lpointsIndexPage !== '') {
    if (await (await t.$(lpointsIndexPage)).exists(pollingTime, timeout)) {
      curPoints1 = await (await t.$(lpointsIndexPage)).text();
      gauge.message(curPoints1);
    } else {
      gauge.message('account index page is not loaded within 20 seconds');
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
  gauge.screenshot();
});

step('EMEALOYALTY Display current Tier1 status', async function () {
  if (tier1StatusId !== '') {
    curTierStatus = await (await t.$(tier1StatusId)).text();
    gauge.message(curTierStatus);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('EMEALOYALTY Click on Join Loyalty in Footer', async function () {
  if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
    await Gen.ClickAction(joinLoyaltyFooter);
  } else if (
    siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE'
  ) {
    await Gen.ClickAction(joinLoyaltyFooterMob);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('EMEALOYALTY Click on Join Now Button', async function () {
  if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
    await Gen.TryCatchScrollAction(joinNowMarktPage);
    await Gen.ClickAction(joinNowMarktPage);
  } else if (
    siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE'
  ) {
    await Gen.TryCatchScrollAction(joinNowMarktPageMob);
    await Gen.ClickAction(joinNowMarktPageMob);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
  gauge.screenshot();
});

step('EMEALOYALTY Click on Login Button in Acc page', async function () {
  if (loginBtn !== '') {
    await Gen.ClickAction(loginBtn);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('EMEALOYALTY Register EmailId and Submit', async function () {
  if (registerEmailId !== '') {
    newEmailId = makeEmail();
    await t.waitFor(await t.$(registerEmailId), timeout);
    await Gen.WriteAction(registerEmailId, newEmailId);
    await Gen.TryCatchClickAction(joinNow);
    gauge.message('New User Email ID: ' + newEmailId);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('EMEALOYALTY Cart Popup Close', async function () {
  if (popUpId !== '') {

    /** unexpected pop-up appear */
    await Gen.PopUpClose(popUpId);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('EMEALOYALTY Click on rewards section', async function () {
  if (rewardSection !== '') {
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      await Gen.ClickAction(rewardSection);
    } else {
      await Gen.ClickAction(rewardSectionMob);
      await Gen.TryCatchClickAction(myRewardCtaMob);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('EMEALOYALTY Click on Gnav Cart button', async function () {
  if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
    await t.waitFor(await t.$(gnavCartButton), timeout);
    await Gen.ClickAction(gnavCartButton);
  } else if (
    siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE'
  ) {
    await t.waitFor(await t.$(gnavCartButtonMob), timeout);
    await Gen.ClickAction(gnavCartButtonMob);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('EMEALOYALTY Navigate to view cart page', async function () {
  if (viewCartPageUrl !== '') {
    await t.goto(siteDefinition.executionContext.url + viewCartPageUrl, {
      waitForEvents: ['DOMContentLoaded'],
    });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('EMEALOYALTY Click expand button in view cart page', async function () {
  if (expandButtonViewCart !== '') {
    await Gen.ClickAction(expandButtonViewCart);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'EMEALOYALTY Click checkout btn and proceed to Sample/SignIn page',
  async function () {
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      await Gen.ClickAction(checkoutButtonId);
      gauge.screenshot();
    } else if (
      siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE'
    ) {
      await Gen.ClickAction(checkoutButtonMob);
      gauge.screenshot();
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step('EMEALOYALTY Click sample continue button/link', async function () {
  if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {

    /** unexpected Sample page appear */
    await Gen.TryCatchClickAction(sampleContinue);
  } else if (
    siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE'
  ) {
    await Gen.TryCatchClickAction(sampleContinueMob);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('EMEALOYALTY Enter shipping address', async function () {
  if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
    await Gen.ElementAction(shippingDetails);
  } else if (
    siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE'
  ) {
    await Gen.ElementAction(shippingDetails);
  }
});

step('EMEALOYALTY click shipping address continue', async function () {

  /** Shipping address continue btn apply for some Brands/Locale */
  if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
    await Gen.TryCatchClickAction(shippingAddressContinue);
  } else if (
    siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE'
  ) {
    await Gen.TryCatchClickAction(shippingContinueMob);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('EMEALOYALTY select payment method radiobutton', async function () {

  /** Payment method radio btn appear for few brand/locale */
  if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
    await Gen.TryCatchClickAction(paymentMethRadioBtn);
  } else if (
    siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE'
  ) {
    await Gen.TryCatchClickAction(paymentMethRadioBtnMob);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'EMEALOYALTY click Terms and condition for age over 18',
  async function () {
    if (termsAndConditionForAge !== '') {

      /** T&C age over 18 is applicable for few Brands/Locals */
      await Gen.TryCatchClickAction(termsAndConditionForAge);
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step(
  'EMEALOYALTY Click Order Review page terms and condition',
  async function () {
    if (ordReviewPageTnC !== '') {
      await Gen.ClickAction(ordReviewPageTnC);
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step(
  'EMEALOYALTY Click continue btn in order Info/Details page and proceed to Payment page',
  async function () {
    if (completeTheOrder !== '') {

      /** Order info page is applicable for few Brands/Locals */
      gauge.screenshot();
      if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
        await Gen.TryCatchClickAction(completeTheOrder);
      } else if (
        siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE'
      ) {
        await Gen.TryCatchClickAction(completeTheOrderMob);
      }
    } else {
      gauge.message(messages.stepNotApplicable);
    }
    gauge.screenshot();
  }
);

step('EMEALOYALTY Enter Creditcard details for', async function () {
  if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
    if (CommonData.BRLOC.includes('BB-FR')) {
      await creditCardDetailsandPlaceOrder();
      await Gen.ClickAction(payButtonId);
    } else {
      if (cardTypeId !== '') {
        await t.waitFor(await t.$(cardTypeId), timeout);
        await Gen.ClickAction(cardTypeId);
      }
      await Gen.ElementAction(paymentDetailsPc);
      await Gen.ClickAction(payButtonId);
    }
  } else if (
    siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE'
  ) {
    if (CommonData.BRLOC.includes('BB-FR')) {
      await creditCardDetailsandPlaceOrder();
      await Gen.ClickAction(payButtonId);
    } else {
      if (CommonData.BRLOC.includes('MC-BE')) {
        await t
          .dropDown({ id: cardTypeIdMob })
          .select(CommonData.PAYMENTMETHOD);
      } else {
        await Gen.ClickAction(cardTypeIdMob);
      }
      await Gen.ElementAction(paymentDetailsMob);
      await Gen.ClickAction(payButtonId);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
  gauge.screenshot();
});

step('EMEALOYALTY Click on welcome reward redeem button', async function () {
  if (welcomeRwdRedeemBtn !== '') {
    await Gen.ClickAction(welcomeRwdRedeemBtn);
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('EMEALOYALTY Proceed to checkout from cart pop-up', async function () {
  if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
    await Gen.TryCatchClickAction(proceedToCheckout);
  } else if (
    siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE'
  ) {
    await Gen.TryCatchClickAction(proceedToCheckoutMob);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('EMEALOYALTY Enter guestuser/newuser id', async function () {
  if (guestUserId !== '') {
    newEmailId = makeEmail();
    await Gen.WriteAction(guestUserId, newEmailId);
    gauge.screenshot();
    gauge.message('New user Email ID: ' + newEmailId);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('EMEALOYALTY Click guestuser/newuser continue btn', async function () {
  if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
    await Gen.ClickAction(guestUserContinue);
  } else if (
    siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE'
  ) {
    await Gen.ClickAction(guestUserSubmitMob);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('EMEALOYALTY Click Shipping page terms and condition', async function () {
  if (shippingPageTnC !== '') {
    await Gen.TryCatchClickAction(shippingPageTnC);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'EMEALOYALTY Click on Loyalty Join link in order confirmation page',
  async function () {
    if (loyaltyJoinConPage !== '') {
      await Gen.WriteAction(loyPwdConPage, CommonData.NPWD);
      await Gen.TryCatchClickAction(loyTermsConPage);
      await Gen.TryCatchClickAction(loyaltyJoinConPage);
      gauge.screenshot();
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step(
  'EMEALOYALTY Click on Join Now Button after order confirmation',
  async function () {
    // join now btn appear after conf page for few brand/locale
    if (joinNowMarktPage1 !== '') {
      gauge.screenshot();
      await Gen.TryCatchScrollAction(joinNowMarktPage1);
      await Gen.TryCatchClickAction(joinNowMarktPage1);
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step('EMEALOYALTY Enter Guest user EmailId and Submit', async function () {
  if (registerEmailId !== '') {
    if (
      CommonData.BRLOC.includes('MC-BE') ||
      CommonData.BRLOC.includes('BB-FR') ||
      CommonData.BRLOC.includes('CL-IT')
    ) {
      gauge.screenshot();
      await t.evaluate(await t.$(registerEmailId), (ele) => ele.focus());
      await t.press(['Control', 'KeyA']);
      await t.press('Delete');
      await t.write(newEmailId, t.into(await t.$(registerEmailId)));
    } else {
      if (!CommonData.BRLOC.includes('EL-IT')) {
        await Gen.WriteAction(registerEmailId, newEmailId);
        await Gen.TryCatchClickAction(joinNow);
      }
    }
    gauge.message('New User Email ID: ' + newEmailId);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('EMEALOYALTY Account Register EmailId', async function () {
  if (accRegEmailId !== '') {
    newEmailId = makeEmail();
    await Gen.WriteAction(accRegEmailId, newEmailId);
    gauge.message('New User Email ID: ' + newEmailId);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'EMEALOYALTY Click on Personal profile and enter the details',
  async function () {
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      await Gen.ElementAction(titlePc);
      await Gen.ElementAction(personalProfileDetails);
      await Gen.ClickAction(profileUpdate, {
        waitForEvents: ['loadEventFired'],
      });
    }
    if (siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE') {
      await Gen.ElementAction(titleMob);
      await Gen.ElementAction(personalProfileDetails);
      await Gen.ClickAction(profileUpdateMob);
    }
  }
);

step('EMEALOYALTY Click on Birthday reward redeem button', async function () {
  if (birthdRwdRedeemBtn !== '') {
    await Gen.ClickAction(birthdRwdRedeemBtn);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});
