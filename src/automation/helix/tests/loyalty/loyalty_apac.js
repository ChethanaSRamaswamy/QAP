var t = require('taiko');
const Helper = require('../../../helix/helpers/helper');
const Util = require('../../../../utilities/util');
const assert = require('assert');
const Hengine = require('../../../../datainterface/providers/hengine');
const taikoOverride = require('../../helix_taiko');
const matchCondition = true;

const feature = 'Loyalty';
var CommonData = {};
var lylRetUserId = [];
var skuIds = [];
var guestUserDetail = [];
var newUserDetails = [];
var newUserNonLylDetails = [];
var LoyUserFromMrktPg = [];
var titleInShippingDeatilPc = [];
var titleInShippingDeatilMob = [];
var shippingDetails = [];
var paymentDetailsPc = [];
var paymentDetailsMob = [];
var timeoutSetting = '';
var emulationDevice = '';
var prodcatUrl = '';
var isShoppable = '';
var addToCart = '';
var continueCheckoutMob = '';
var popUpId = '';
var checkoutButtonId = '';
var checkoutButtonMob = '';
var sampleContinue = '';
var sampleContinueMob = '';
var popUp = '';
var samplePageContinue = '';
var guestUserId = '';
var guestUserContinue = '';
var guestUserSubmitMob = '';
var ruSignInLink = '';
var ruEmailId = '';
var ruPassword = '';
var signInSubmit = '';
var titleId = '';
var titleIdMob = '';
var titleDropdownPc = '';
var titleDropdownMob = '';
var firstNameInMemberInfo = '';
var lastNameInMemberInfo = '';
var kanaFirstNameInMemberInfo = '';
var kanaLastNameInMemberInfo = '';
var addressId = '';
var addressId2 = '';
var cityId = '';
var streetId = '';
var subDistrictId = '';
var provinceId = '';
var stateDropdown = '';
var stateDropDownClick = '';
var stateDropDownOption = '';
var cityDropdown = '';
var postalCodeId = '';
var phoneId = '';
var cellPhoneNumber = '';
var cellPhoneNumber1 = '';
var paymentOptionId = '';
var shippingAddressContinue = '';
var createAccountContinue = '';
var payMethodRadioBtn = '';
var payMethodRadioBtnMob = '';
var creditcardBank = '';
var creditcardMonthDD = '';
var creditcardYearDD = '';
var payButtonId = '';
var confirmPayButton = '';
var sampleContinue2 = '';
var sampleContinueMob2 = '';
var deliveryMethodDropdown = '';
var shippingContinueMob = '';
var completeTheOrder = '';
var completeTheOrderMob = '';
var confirmPaymentContinue = '';
var cardTypeId = '';
var termsAndCondForAge = '';
var loginId1 = '';
var mobLoginId = '';
var accRegisterNow = '';
var accRegisterNowMob = '';
var accRegisterFirstName = '';
var accRegisterLastName = '';
var accRegisterEmailId = '';
var accRegisterPwd = '';
var accRegisterPhone = '';
var accRegisterYear = '';
var accRegisterMonth = '';
var accRegisterDay = '';
var accRegisterTerms = '';
var accLoyRegisterTerms = '';
var accRegisterCreateAcBtn = '';
var accRegisterCreateAcBtnMOB = '';
var accClickMyAccount = '';
var accMobHamburger = '';
var profilePopupClose = '';
var loyaltySection = '';
var lpntIndexPage = '';
var tier1StatusId = '';
var curTierStatus = '';
var joinLoyaltyFooter = '';
var joinLoyaltyFooterMob = '';
var joinNowMarktPage = '';
var loginBtn = '';
var loyaltyJoinConPage = '';
var orderCnfMsgid = '';
var rewardSection = '';
var offerManagerUrl = '';
var viewCartPageUrl = '';
var viewCartUrl = '';
var appliedOffersId = '';
var appliedOffersId1 = '';
var birthDatep = '';
var dt = '';
var bm = '';
var birthMonthp = '';
var profileUpdate = '';
var profileUpdateMob = '';
var firstNameProfile = '';
var lastNameProfile = '';
var accountInfo = '';
var purchaseAmnt = '';
var taxAmnt = '';
var purAmntStr = '';
var taxAmntStr = '';
var lpntVcart = '';
var lpointStr = '';
var lpntOrConPg = '';
var gnavCartButton = '';
var gnavCartButtonMob = '';
var accountInfoMob = '';
var leftSideMenu = '';
var editProfile = '';
var editProfileMob = '';
var nonLylRegisternow = '';
var lylRegisterTerms = '';
var nonLylSubmit = '';
var firstKanaNameProfile = '';
var lastKanaNameProfile = '';
var birthYearp = '';
var isShoppableValue = '';
var isDisplayableValue = '';
var isShoppable1 = '';
var IsDisplayable = '';
var productUrl = '';
var noDisplayableProductError = '';
var nodisplayableProduct = '';
var javaAlertPopUp = '';
var addToBag = '';
var cookieRejectBtn = '';
var expDateId1 = '';
var creditCardId1 = '';
var creditCardMob1 = '';
var cvvId1 = '';
var creditCardHolderName1 = '';
var cardHolderNameTxt = '';
var reloadPage = '';
var tncPaymentPage = '';
var lpntShpngPage = '';
var lylChboxOrConfPage = '';
var returnUserId = '';
var notAvailableProductsCount = 0;
var waitForText = '';
var totPurAmnt = '';
var lpnt = 0;
var bdayPoint = '';
var tier2p = '';
var tlpnt = 0;
var appliedOffTxt = '';
var appOffer = '';
var offerAppliedFlag = '';
var testPntTot = 0;
var percPnt = 0;
var purAmnt = 0;
var gstAmnt = 0;
var avlPoints = 0;
var lylPoints = 0;
var lylPointsCal = 0;
var lpntCnfPage = 0;
var timeout = '';
var pollingTime = '';
var waitForLylSection = '';
var tierst = '';
var earnPnt = '';
var confirmUrl = '';
var curPoints1 = '';
var GetOrderNumber = '';
var lpntVarr = '';
var purAmntLyl = '';
var newEmailId = '';
var messagePopUp = '';
var joinNowBtnMob = '';
var newUserLink = '';
var newUserLinkMob = '';
var newUserRegBtn = '';
var newUserRegBtnMob = '';
var mrktPgLoyRegEmail = '';
var mrktPgLoyRegTerms = '';
var mrktPgRegTerms = '';
var mrktPgSubmit = '';
var mrktPgLoyRegFname = '';
var mrktPgLoyRegLname = '';
var mrktPgLoyRegPwd = '';
var mrktPgLoyRegSubmit = '';
var pressEnterBtn = '';
var addressSecondLine = '';
var mrktPgPopup = '';
var accGnav = '';
var loyBenefitLink = '';
var loyBenefitLinkMob = '';
var messages = {};

const Gen = require('../ReUsableFunction.js');
let siteDefinition, source, NullDataException;

// for DDD approach
const bdayPnt1 = 100;
const bdayPnt2 = 50;

function makeEmail() {
  let strValues = 'abcdefgh12345';
  let strEmail = '';
  let strTmp;
  for (let i = 0; i < 10; i++) {
    strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
    strEmail += strTmp;
  }
  strEmail = `${strEmail}@test.com`;
  return strEmail;
}

function reinitialize() {
  newEmailId = makeEmail();

  lylRetUserId = [
    CommonData.LRID1,
    CommonData.LRID2,
    CommonData.LRID3,
    CommonData.LRID4,
    CommonData.LRID5,
  ];

  skuIds = [
    CommonData.skuId1,
    CommonData.skuId2,
    CommonData.skuId3,
    CommonData.skuId4,
    CommonData.skuId5,
  ];

  timeout = CommonData.TIMEOUT;
  pollingTime = CommonData.POLLINGTIME;
  waitForLylSection = CommonData.WAITFORLYLSECTION;

  guestUserDetail = [
    { loc: guestUserId, data: newEmailId, action: 'write' },
    { action: 'screenshot' },
  ];

  newUserDetails = [
    {
      loc: accRegisterFirstName,
      data: CommonData.FIRSTNAME,
      action: 'TryCatchWrite',
    },
    {
      loc: accRegisterLastName,
      data: CommonData.LASTNAME,
      action: 'TryCatchWrite',
    },
    { loc: accRegisterEmailId, data: newEmailId, action: 'write' },
    { loc: accRegisterPwd, data: CommonData.NPWD, action: 'write' },
    { loc: accRegisterTerms, action: 'tryCatchClick' },
    { loc: accLoyRegisterTerms, action: 'click' },
    { action: 'screenshot' },
  ];

  newUserNonLylDetails = [
    {
      loc: accRegisterFirstName,
      data: CommonData.FIRSTNAME,
      action: 'TryCatchWrite',
    },
    {
      loc: accRegisterLastName,
      data: CommonData.LASTNAME,
      action: 'TryCatchWrite',
    },
    { loc: accRegisterEmailId, data: newEmailId, action: 'write' },
    { loc: accRegisterPwd, data: CommonData.NPWD, action: 'write' },
    { loc: accRegisterTerms, action: 'tryCatchClick' },
    { action: 'screenshot' },
  ];

  LoyUserFromMrktPg = [
    { loc: mrktPgLoyRegTerms, action: 'tryCatchClick' },
    { loc: mrktPgRegTerms, action: 'tryCatchClick' },
    { loc: mrktPgPopup, action: 'tryCatchClick' },
    { loc: mrktPgLoyRegEmail, data: newEmailId, action: 'write' },
    { loc: mrktPgSubmit, action: 'tryCatchClick' },
    { action: 'screenshot' },
    {
      loc: mrktPgLoyRegFname,
      data: CommonData.FIRSTNAME,
      action: 'TryCatchWrite',
    },
    {
      loc: mrktPgLoyRegLname,
      data: CommonData.LASTNAME,
      action: 'TryCatchWrite',
    },
    { loc: mrktPgLoyRegPwd, data: CommonData.NPWD, action: 'TryCatchWrite' },
    { action: 'screenshot' },
    { loc: mrktPgLoyRegSubmit, action: 'tryCatchClick' },
  ];

  titleInShippingDeatilPc = [
    { loc: titleId, action: 'click' },
    { loc: titleDropdownPc, data: '4', action: 'IndexDropDownID' },
  ];

  titleInShippingDeatilMob = [
    { loc: titleIdMob, action: 'click' },
    { loc: titleDropdownMob, data: '4', action: 'IndexDropDownID' },
  ];

  shippingDetails = [
    { loc: firstNameInMemberInfo, data: CommonData.FIRSTNAME, action: 'write' },
    {
      loc: kanaFirstNameInMemberInfo,
      data: CommonData.FIRSTNAMEKAT,
      action: 'write',
    },
    { loc: lastNameInMemberInfo, data: CommonData.LASTNAME, action: 'write' },
    {
      loc: kanaLastNameInMemberInfo,
      data: CommonData.LASTNAMEKAT,
      action: 'write',
    },
    { loc: pressEnterBtn, action: 'pressEnter' },
    {
      loc: addressSecondLine,
      data: CommonData.ADDRESS2,
      action: 'write',
    },
    { loc: phoneId, data: CommonData.PHONE, action: 'write' },
    { loc: addressId, data: CommonData.ADDRESS, action: 'write' },
    { loc: addressId2, data: CommonData.ADDRESS2, action: 'write' },
    { loc: cityId, data: CommonData.CITY, action: 'write' },
    { loc: streetId, data: CommonData.STREET, action: 'write' },
    { loc: subDistrictId, data: CommonData.SUBDISTRICT, action: 'write' },
    { loc: provinceId, data: CommonData.STATE, action: 'write' },
    { loc: stateDropdown, data: CommonData.STATE, action: 'IDDropdowntxt' },
    {
      loc: stateDropDownClick,
      data: stateDropDownOption,
      action: 'ClickDropDown',
    },
    { loc: cityDropdown, data: CommonData.CITY, action: 'IDDropdowntxt' },
    { loc: postalCodeId, data: CommonData.ZIPCODE, action: 'write' },
    { action: 'screenshot' },
  ];

  paymentDetailsPc = [
    {
      loc: creditCardHolderName1,
      data: CommonData.CCHOLDERNAME,
      action: 'WaitforElementNwrite',
    },
    {
      loc: creditCardId1,
      data: CommonData.CREDITCARD,
      action: 'WaitforElementNwrite',
    },
    { loc: expDateId1, data: CommonData.CCMONTH, action: 'write' },
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
    { loc: cvvId1, data: CommonData.CVV, action: 'write' },
    { loc: creditcardBank, data: CommonData.CCBANK, action: 'IDDropdowntxt' },
    { loc: tncPaymentPage, action: 'click' },
    { action: 'screenshot' },
  ];

  paymentDetailsMob = [
    { loc: reloadPage, action: 'reload' },
    {
      loc: creditCardHolderName1,
      data: CommonData.CCHOLDERNAME,
      action: 'WaitforElementNwrite',
    },
    {
      loc: creditCardMob1,
      data: CommonData.CREDITCARD,
      action: 'WaitforElementNwrite',
    },

    {
      loc: expDateId1,
      data: CommonData.CCMONTH,
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
    { loc: cvvId1, data: CommonData.CVV, action: 'WaitforElementNwrite' },
    { loc: creditcardBank, data: CommonData.CCBANK, action: 'IDDropdowntxt' },
    {
      txt: cardHolderNameTxt,
      data: CommonData.CCHOLDERNAME,
      action: 'writeAPI',
    },
    { loc: tncPaymentPage, action: 'click' },
    { action: 'screenshot' },
  ];

  messages = {
    stepNotApplicable: 'This step is not applicable for this Brand/Locale',
    popupNotAppear: 'pop-up did not appear / pop-up could not be handled',
    samplePageNotAppear: 'Sample page did not appear',
    orderPlacedSuccess: 'Order placed successfully',
    orderPlacedFail: 'Order not placed',
    orderInfoPageNotAppear:
      'Order info page is not applicable for this Brand/Locale or did not appear',
    pointCalcSuccess: 'Loyalty point calcualtion is successful',
    pointCalcFail: 'Loyalty point calcualtion is failed',
    welcomeOfferSuccess: 'Welcome offer is applied successfully',
    welcomeOfferFail: 'Welcome offer is not applied',
    bdayOfferSuccess: 'Birthday offer is applied successfully',
    bdayOfferFail: 'Birthday offer is not applied',
    addToBagBtnEnable: 'Add to Bag btn is enabled and Product added to cart',
    addToBagBtnDisable: 'Add to Bag btn is disabled',
  };
}

function setVal() {
  totPurAmnt = 0;
  lpnt = 0;
  tlpnt = 0;
  purAmnt = 0;
  avlPoints = 0;
  appOffer = '';
  tierst = CommonData.TIER1STATUS;
  earnPnt = CommonData.EARNPNT1;
}

// return user ids for loyalty

function LoyaltyReturnUserID() {
  return lylRetUserId[Math.floor(Math.random() * lylRetUserId.length)];
}

// Random mobile number for loyalty registration

function RandomMobNumber() {
  const min = 10000000;
  const max = 90000000;
  const MobNum = Math.floor(Math.random() * min) + max;
  return MobNum;
}

// Random birthday date

function RandomBday() {
  const bupper = 30;
  const blower = 1;
  const RandomBdt = Math.floor(Math.random() * (bupper - blower + 1)) + blower;
  return RandomBdt;
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

function pointcalculation(purAmnt3) {
  if (
    CommonData.BRLOC.includes('MC-JP') ||
    CommonData.BRLOC.includes('EL-JP') ||
    CommonData.BRLOC.includes('LM-JP')
  ) {
    earnPnt = parseInt(earnPnt, 10);
    purAmntLyl = parseInt(purAmnt3 / earnPnt, 10);
    totPurAmnt += purAmntLyl;
  } else {
    totPurAmnt += purAmntLyl;
  }
  return totPurAmnt;
}

function Lpointcalculation(purAmnt2) {
  if (
    CommonData.BRLOC.includes('MC-JP') ||
    CommonData.BRLOC.includes('EL-JP') ||
    CommonData.BRLOC.includes('LM-JP')
  ) {
    earnPnt = parseInt(earnPnt, 10);
    lpnt = Math.ceil(purAmnt2 / earnPnt);
  } else if (tierst.includes(CommonData.TIER2STATUS)) {
    earnPnt = CommonData.EARNPNT2;
  } else if (tierst.includes(CommonData.TIER3STATUS)) {
    earnPnt = CommonData.EARNPNT3;
  } else {
    lpnt = Math.ceil(purAmnt2 * earnPnt);
  }
  if (offerAppliedFlag) {
    switch (appOffer) {
      case 'ly_birthday_double_points':
        bdayPoint = lpnt * CommonData.BDAYBONUS;
        lpnt += bdayPoint;
        break;
      case 'ly_birthday_double_points_t1':
        bdayPoint = purAmnt2 * CommonData.BDAYBONUS;
        lpnt = bdayPoint;
        break;
      case 'ly_birthday_double_pt':
        bdayPoint = purAmnt2 * CommonData.BDAYBONUS;
        lpnt = bdayPoint;
        break;
      case 'ly_birthday_20off':
        bdayPoint = purAmnt2 * CommonData.BDAYBONUS;
        lpnt += bdayPoint;
        break;
      case 'ly_welcome_pt':
        tier2p = purAmnt2 * CommonData.TIER2UPBONUS;
        lpnt += tier2p;
        break;
      case 'ly_bd_100p':
        lpnt += bdayPnt1;
        break;
      case 'ly_bday_point_t1':
        lpnt += bdayPnt2;
        break;
      case 'ly_bd_50':
        lpnt += bdayPnt2;
        break;
    }
  }
  lpnt += testPntTot;
  tlpnt += lpnt;
  console.log('lpnt: ', lpnt);
  return lpnt;
}

step('APACLOYALTY Initialize Helix', async function () {
  // Initialize the selectors from DB
  await initFrameworkSettings();
});

step('APACLOYALTY Configuring the prerequisites', async function () {
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

step('APACLOYALTY Set revision tag', async function () {
  Helper.setRevisionTag(siteDefinition, t);
  await t.goto(siteDefinition.executionContext.url, {
    waitForEvents: ['loadEventFired'],
  });
});

step('APACLOYALTY Mobile device emulation', async function () {
  await t.emulateDevice(emulationDevice);
  gauge.message('Emulation device: ' + emulationDevice);
});

step('APACLOYALTY Add Product to the cart', async function () {
  for (let i = 0; i <= skuIds.length; i++) {
    await t.goto(
      siteDefinition.executionContext.adminUrl + prodcatUrl + skuIds[i],
      {
        waitForEvents: ['DOMContentLoaded'],
      }
    );
    gauge.screenshot();
    isShoppableValue = await (await t.$(isShoppable)).text();
    if (isShoppableValue === '1') {
      gauge.message(
        'The Product with SKU ID - ' +
          skuIds[i] +
          ' is available and proceeding to add to Cart'
      );
      const elements = await (await t.$(addToCart)).elements();
      const attributePromises = elements.map((e) => {
        return t.evaluate(e, (elem) => {
          return elem.getAttribute('href');
        });
      });
      viewCartUrl = await Promise.all(attributePromises);
      await t.goto(siteDefinition.executionContext.url + viewCartUrl, {
        waitForEvents: ['DOMContentLoaded'],
      });
      gauge.screenshot();
      break;
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
    assert(
      !matchCondition,
      'None of the products are available for adding it to Cart'
    );
  }
});

step('APACLOYALTY click continue checkout mob', async function () {
  if (continueCheckoutMob !== '') {
    await t.evaluate(await t.$(continueCheckoutMob), (ele) => ele.click(), {
      waitForNavigation: false,
    });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY Cart Popup Close', async function () {
  if (popUpId !== '') {
    try {
      await t.evaluate(
        await t.$(popUpId, { waitForEvents: ['DOMContentLoaded'] }),
        (ele) => ele.click()
      );
    } catch (e) {
      gauge.message(messages.popupNotAppear);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'APACLOYALTY Click checkout btn and proceed to Sample page',
  async function () {
    if (checkoutButtonId !== '') {
      await t.evaluate(await t.$(checkoutButtonId), (ele) => ele.click(), {
        waitForEvents: ['DOMContentLoaded'],
      });
      gauge.screenshot();
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step(
  'APACLOYALTY click checkout button mob and proceed to Sample page',
  async function () {
    if (checkoutButtonMob !== '') {
      await t.evaluate(await t.$(checkoutButtonMob), (ele) => ele.click(), {
        waitForNavigation: false,
      });
      gauge.screenshot();
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step('APACLOYALTY Click sample continue button or link', async function () {
  if (sampleContinue !== '') {
    try {
      await t.evaluate(await t.$(sampleContinue), (ele) => ele.click(), {
        waitForNavigation: false,
      });
    } catch (e) {
      gauge.message(messages.samplePageNotAppear);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY click sample continue button or link mob', async function () {
  if (sampleContinueMob !== '') {
    try {
      await t.evaluate(await t.$(sampleContinueMob), (ele) => ele.click(), {
        waitForNavigation: false,
      });
    } catch (e) {
      gauge.message(messages.samplePageNotAppear);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY Signup close popUp', async function () {
  if (popUp !== '') {
    try {
      await t.scrollTo(await t.$(popUp));
      await t.evaluate(
        await t.$(popUp, { waitForEvents: ['loadEventFired'] }),
        (ele) => ele.click()
      );
    } catch (e) {
      gauge.message(messages.popupNotAppear);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY Sample page continue', async function () {
  if (samplePageContinue !== '') {
    await t.evaluate(await t.$(samplePageContinue), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY Click on return user Signin Link', async function () {
  await t.waitFor(await t.$(ruSignInLink), timeout);
  if (ruSignInLink !== '') {
    await t.evaluate(await t.$(ruSignInLink), (ele) => ele.click(), {
      waitForNavigation: false,
    });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'APACLOYALTY enter loyalty return user email id in Signin page',
  async function () {
    if (returnUserId !== '') {
      const loyaltyRUEmail = LoyaltyReturnUserID();
      await t.write(loyaltyRUEmail, t.into(await t.$(ruEmailId)));
      gauge.message('Return user Email ID: ' + loyaltyRUEmail);
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step(
  'APACLOYALTY enter return user password in Signin page',
  async function () {
    if (ruPassword !== '') {
      await t.write(CommonData.RPWD, t.into(await t.$(ruPassword)));
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step('APACLOYALTY Click on signin submit', async function () {
  if (signInSubmit !== '') {
    await t.evaluate(await t.$(signInSubmit), (ele) => ele.click());
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY Enter shipping address', async function () {
  if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
    await Gen.PopUpClose(messagePopUp);
    await Gen.ElementAction(titleInShippingDeatilPc);
    await Gen.ElementAction(shippingDetails);
  } else {
    await Gen.PopUpClose(messagePopUp);
    await Gen.ElementAction(titleInShippingDeatilMob);
    await Gen.ElementAction(shippingDetails);
  }
});

step('APACLOYALTY enter cell Phone number', async function () {
  if (cellPhoneNumber !== '') {
    await t.write(CommonData.Mobile1, t.into(await t.$(cellPhoneNumber)));
    await t.write(CommonData.Mobile2, t.into(await t.$(cellPhoneNumber1)));
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY select payment option radiobutton', async function () {
  if (paymentOptionId !== '') {
    try {
      await t.evaluate(await t.$(paymentOptionId), (ele) => ele.click());
    } catch (e) {
      gauge.message(
        'Select payment btn is not applicable for this Brand/Locale or failed to locate btn'
      );
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY click shipping address continue', async function () {
  if (shippingAddressContinue !== '') {
    await t.evaluate(await t.$(shippingAddressContinue), (ele) => {
      ele.focus();
      ele.click();
    });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY click create an account continue', async function () {
  if (createAccountContinue !== '') {
    try {
      await t.evaluate(await t.$(createAccountContinue), (ele) => ele.click(), {
        waitForNavigation: false,
      });
    } catch (e) {
      gauge.message(
        'Create account continue btn did not appear / not applicable for this Brand/Locale'
      );
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY select payment method radiobutton', async function () {
  if (payMethodRadioBtn !== '') {
    await t.evaluate(await t.$(payMethodRadioBtn), (ele) => ele.click(), {
      waitForNavigation: false,
    });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY select payment method radiobutton mob', async function () {
  if (payMethodRadioBtnMob !== '') {
    try {
      await t.evaluate(await t.$(payMethodRadioBtnMob), (ele) => ele.click(), {
        waitForNavigation: false,
      });
    } catch (e) {
      gauge.message(
        'Paymnet method radio btn does not appear for this Brand/Local'
      );
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY select credit card bank', async function () {
  if (creditcardBank !== '') {
    await t.dropDown({ id: creditcardBank }).select(CommonData.CCBANK);
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY select credit card month dropdown', async function () {
  if (creditcardMonthDD !== '') {
    await t.dropDown({ name: creditcardMonthDD }).select({
      index: CommonData.CCM,
    });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY select credit card year dropdown', async function () {
  if (creditcardYearDD !== '') {
    await t.dropDown({ name: creditcardYearDD }).select({
      index: CommonData.CCY,
    });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY click pay button', async function () {
  if (payButtonId !== '') {
    await t.waitFor(await t.$(payButtonId), timeout);
    await t.evaluate(await t.$(payButtonId), (ele) => ele.click(), {
      waitForNavigation: false,
    });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY click confirm pay button', async function () {
  if (confirmPayButton !== '') {
    await t.evaluate(await t.$(confirmPayButton), (ele) => ele.click(), {
      waitForEvents: ['DOMContentLoaded'],
    });
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'APACLOYALTY click sample continue button or link(method 2)',
  async function () {
    if (sampleContinue2 !== '') {
      try {
        await t.evaluate(await t.$(sampleContinue2), (ele) => ele.click());
      } catch (e) {
        gauge.message(messages.samplePageNotAppear);
      }
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step(
  'APACLOYALTY click sample continue button or link mob (method 2)',
  async function () {
    if (sampleContinueMob2 !== '') {
      try {
        await t.evaluate(await t.$(sampleContinueMob2), (ele) => ele.click());
      } catch (e) {
        gauge.message(
          'Sample page did not appear for this Brand/Loacle after login'
        );
      }
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step('APACLOYALTY click delivery method dropdown', async function () {
  if (deliveryMethodDropdown !== '') {
    try {
      await t.dropDown({ id: deliveryMethodDropdown }).select({ index: '1' });
    } catch (e) {
      gauge.message(
        'Delivery method dropdown did not appear for this Brand/Locale'
      );
    }
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY click shipping address continue mob', async function () {
  if (shippingContinueMob !== '') {
    try {
      await t.evaluate(
        await t.$(shippingContinueMob, { waitForEvents: ['DOMContentLoaded'] }),
        (ele) => ele.click()
      );
    } catch (e) {
      gauge.message(
        'Shipping continue btn is not applicable for this Brand/Locale or failed to locate btn'
      );
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'APACLOYALTY Click continue btn in order Info page mob and proceed to Payment page',
  async function () {
    if (completeTheOrderMob !== '') {
      try {
        await t.evaluate(await t.$(completeTheOrderMob), (ele) => ele.click(), {
          waitForNavigation: false,
        });
        gauge.screenshot();
      } catch (e) {
        gauge.message(messages.orderInfoPageNotAppear);
      }
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step(
  'APACLOYALTY click confirm payment continue btn and proceed to payment page',
  async function () {
    if (confirmPaymentContinue !== '') {
      await t.evaluate(
        await t.$(confirmPaymentContinue),
        (ele) => ele.click(),
        {
          waitForNavigation: false,
        }
      );
      gauge.screenshot();
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step('APACLOYALTY Select cardType', async function () {
  if (cardTypeId !== '') {
    await t.evaluate(await t.$(cardTypeId), (ele) => ele.click(), {
      waitForNavigation: false,
    });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'APACLOYALTY click Terms and condition for age over 18',
  async function () {
    if (termsAndCondForAge !== '') {
      try {
        await t.evaluate(await t.$(termsAndCondForAge), (ele) => ele.click());
      } catch (e) {
        gauge.message(
          'T&C for age over 18 is not applicable for this Brand/Locale or did not appear'
        );
      }
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

// Account steps

step('APACLOYALTY Click logIn btn or link', async function () {
  if (loginId1 !== '') {
    await t.evaluate(await t.$(loginId1), (ele) => ele.click(), {
      waitForEvents: ['DOMContentLoaded'],
    });
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY Click logIn MOB btn or link', async function () {
  if (mobLoginId !== '') {
    await t.evaluate(await t.$(mobLoginId), (ele) => ele.click(), {
      waitForEvents: ['DOMContentLoaded'],
    });
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY SignUp as <user>', async function (user) {
  await Gen.PopUpClose(popUp);

  if (user === 'GU') {
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      await Gen.ElementAction(guestUserDetail);
      await Gen.ClickAction(guestUserContinue);
    } else {
      await Gen.ElementAction(guestUserDetail);
      await Gen.ClickAction(guestUserSubmitMob);
    }
    gauge.message('Email ID : ' + newEmailId);
  }
  if (user === 'NULYL') {
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      await Gen.ClickAction(accRegisterNow);
      await Gen.ElementAction(newUserDetails);
      await Gen.ClickAction(accRegisterCreateAcBtn);
    } else {
      await Gen.ClickAction(accRegisterNowMob);
      await Gen.ElementAction(newUserDetails);
      await Gen.ClickAction(accRegisterCreateAcBtnMOB);
    }
    gauge.message('Email ID : ' + newEmailId);
  }
  if (user === 'NUNLYL') {
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      await Gen.ClickAction(accRegisterNow);
      await Gen.ElementAction(newUserNonLylDetails);
      await Gen.ClickAction(accRegisterCreateAcBtn);
    } else {
      await Gen.ClickAction(accRegisterNowMob);
      await Gen.ElementAction(newUserNonLylDetails);
      await Gen.ClickAction(accRegisterCreateAcBtnMOB);
    }
    gauge.message('Email ID : ' + newEmailId);
  }
});

step('APACLOYALTY Account Register Phone', async function () {
  if (accRegisterPhone !== '') {
    await t.write(CommonData.PHONE, t.into(await t.$(accRegisterPhone)));
    await t.press(['Control', 'KeyA']);
    await t.press('Delete');
    await t.write(CommonData.PHONE, t.into(await t.$(accRegisterPhone)));
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY Account Register DOB', async function () {
  if (accRegisterYear !== '') {
    await t.dropDown({ id: accRegisterYear }).select(CommonData.BIRTHYEAR);
    await t.dropDown({ id: accRegisterMonth }).select(CommonData.BIRTHMONTH);
    await t.dropDown({ id: accRegisterDay }).select(CommonData.BIRTHDAY);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY AC click Mobile Hamburger Icon', async function () {
  if (accMobHamburger !== '') {
    await t.evaluate(await t.$(accMobHamburger), (ele) => ele.click(), {
      waitForNavigation: false,
    });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

// APACLOYALTY code start

step('APACLOYALTY Account Register Mobile', async function () {
  if (accRegisterPhone !== '') {
    await t.write(RandomMobNumber(), t.into(await t.$(accRegisterPhone)));
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

// If profile popup's id is defined wait and do the popup close

step('APACLOYALTY Close Profile Popup', async function () {
  gauge.screenshot();
  if (profilePopupClose !== '') {
    try {
      await t.evaluate(await t.$(profilePopupClose), (ele) => {
        ele.scrollIntoView();
        ele.click();
      });
    } catch (e) {
      gauge.message(messages.popupNotAppear);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'APACLOYALTY Verify Loyalty Section in Account Index Page',
  async function () {
    if (loyaltySection !== '') {
      await t.waitFor(await t.$(loyaltySection), waitForLylSection);
      await t.evaluate(await t.$(loyaltySection), (ele) => ele.focus());
      assert(
        await (await t.$(loyaltySection)).isVisible(),
        'Loyalty Section not displayed in Index page'
      );
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step('APACLOYALTY Display current Tier Points', async function () {
  if (lpntIndexPage !== '') {
    await t.waitFor(await t.$(lpntIndexPage), timeout);
    await t.evaluate(await t.$(lpntIndexPage), (ele) => ele.focus());
    gauge.screenshot();
    curPoints1 = await (await t.$(lpntIndexPage)).text();
    gauge.message(curPoints1);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'APACLOYALTY Verify loyalty point in loyalty landing page',
  async function () {
    if (lpntIndexPage !== '') {
      if (curPoints1 === tlpnt) {
        assert(matchCondition);
        gauge.message(messages.pointCalcSuccess);
      } else {
        assert(false, messages.pointCalcFail);
      }
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step('APACLOYALTY Display current Tier1 status', async function () {
  if (tier1StatusId !== '') {
    await t.scrollTo(await t.$(tier1StatusId));
    curTierStatus = await (await t.$(tier1StatusId)).text();
    gauge.message(curTierStatus);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY Click on Join Loyalty in Footer', async function () {
  if (joinLoyaltyFooter !== '') {
    await t.evaluate(await t.$(joinLoyaltyFooter), (ele) => ele.click(), {
      waitForEvents: ['DOMContentLoaded'],
    });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY Click on Join Loyalty in Footer Mobile', async function () {
  if (joinLoyaltyFooterMob !== '') {
    await t.evaluate(await t.$(joinLoyaltyFooterMob), (ele) => ele.click(), {
      waitForEvents: ['DOMContentLoaded'],
    });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY Click on Join Now Button', async function () {
  if (joinNowMarktPage !== '') {
    gauge.screenshot();
    await t.evaluate(await t.$(joinNowMarktPage), (ele) => {
      ele.scrollIntoView();
      ele.click();
    });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY Click on Join Now Button Mobile', async function () {
  if (joinNowBtnMob !== '') {
    gauge.screenshot();
    await t.evaluate(await t.$(joinNowBtnMob), (ele) => {
      ele.scrollIntoView();
      ele.click();
    });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY Click on Login Button in Acc page', async function () {
  if (loginBtn !== '') {
    await t.evaluate(await t.$(loginBtn), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'APACLOYALTY Click on Loyalty Join link in order confirmation page',
  async function () {
    if (loyaltyJoinConPage !== '') {
      await t.waitFor(await t.$(loyaltyJoinConPage), timeout);
      await t.evaluate(
        await t.$(loyaltyJoinConPage),
        (ele) => {
          ele.focus();
          ele.click();
        },
        { waitForEvents: ['DOMContentLoaded'] }
      );
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step('APACLOYALTY Place order validation', async function () {
  if (orderCnfMsgid !== '') {
    await t.waitFor(await t.$(orderCnfMsgid), timeout);
    confirmUrl = await t.currentURL();
    GetOrderNumber = await (await t.$(orderCnfMsgid)).text();
    assert(confirmUrl.includes(CommonData.ORDERCONFIRMURL));
    gauge.message(messages.orderPlacedSuccess + GetOrderNumber);
    gauge.screenshot();
  } else {
    assert(!matchCondition, messages.orderPlacedFail);
  }
});

step('APACLOYALTY Click on rewards section', async function () {
  if (rewardSection !== '') {
    await t.evaluate(await t.$(rewardSection), (ele) => ele.click(), {
      waitForEvents: ['DOMContentLoaded'],
    });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY Enter Guest user Register EmailId', async function () {
  if (accRegisterEmailId !== '') {
    gauge.screenshot();
    await t.write(newEmailId, t.into(await t.$(accRegisterEmailId)));
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY Navigate to offer manager', async function () {
  if (offerManagerUrl !== '') {
    await t.goto(siteDefinition.executionContext.url + offerManagerUrl, {
      waitForEvents: ['DOMContentLoaded'],
    });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY Navigate to offer manager mobile', async function () {
  if (offerManagerUrl !== '') {
    await t.goto(siteDefinition.executionContext.url + offerManagerUrl, {
      waitForEvents: ['DOMContentLoaded'],
    });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY Navigate to view cart page', async function () {
  if (viewCartPageUrl !== '') {
    await t.goto(siteDefinition.executionContext.url + viewCartPageUrl, {
      waitForEvents: ['DOMContentLoaded'],
    });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY Navigate to view cart page mobile', async function () {
  if (viewCartPageUrl !== '') {
    await t.goto(siteDefinition.executionContext.url + viewCartPageUrl, {
      waitForEvents: ['DOMContentLoaded'],
    });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY Verify welcome offer', async function () {
  if (appliedOffersId !== '' || appliedOffersId1 !== '') {
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
      assert(matchCondition, messages.welcomeOfferSuccess);
    } else {
      assert(!matchCondition, messages.welcomeOfferFail);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
  gauge.screenshot();
});

step('APACLOYALTY Verify Test offers', async function () {
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
    if (appliedOffTxt.includes(CommonData.TESTOFFER1)) {
      testPntTot = parseInt(CommonData.TESTPNT1, 10);
      gauge.message(CommonData.TESTOFFER1, 'offer applied');
    }
    if (appliedOffTxt.includes(CommonData.TESTOFFER2)) {
      testPntTot = parseInt(CommonData.TESTPNT2, 10);
      gauge.message(CommonData.TESTOFFER2, 'offer applied');
    }
    if (appliedOffTxt.includes(CommonData.TESTOFFER3)) {
      earnPnt = parseInt(earnPnt, 10);
      testPntTot = Math.ceil(purAmnt / earnPnt);
      gauge.message(CommonData.TESTOFFER3, 'offer applied');
    }
    if (appliedOffTxt.includes(CommonData.TESTOFFER4)) {
      percPnt = purAmnt * parseFloat(CommonData.TESTPNT4);
      purAmnt -= percPnt;
      purAmnt = Math.ceil(purAmnt);
      gauge.message(CommonData.TESTOFFER4, 'offer applied');
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY select birthday date dropdown', async function () {
  if (birthDatep !== '') {
    await t.dropDown({ id: birthDatep }).select({ index: RandomBday() });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY select birthday month dropdown', async function () {
  if (birthMonthp !== '') {
    dt = new Date();
    bm = dt.getMonth();
    bm += 1;
    await t.dropDown({ id: birthMonthp }).select({ index: bm });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY Click on profile update Button', async function () {
  if (profileUpdate !== '') {
    await t.evaluate(await t.$(profileUpdate), (ele) => ele.click(), {
      waitForEvents: ['DOMContentLoaded'],
    });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY Click on profile update Button mobile', async function () {
  if (profileUpdateMob !== '') {
    await t.evaluate(await t.$(profileUpdateMob), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY Verify birthday offer', async function () {
  if (appliedOffersId !== '' || appliedOffersId1 !== '') {
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
      gauge.message(messages.bdayOfferSuccess);
    } else {
      assert(!matchCondition, messages.bdayOfferFail);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
  gauge.screenshot();
});

step('APACLOYALTY Enter first name in profile settings', async function () {
  if (firstNameProfile !== '') {
    await t.write(CommonData.FIRSTNAME, t.into(await t.$(firstNameProfile)));
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY Enter last name in profile settings', async function () {
  if (lastNameProfile !== '') {
    await t.write(CommonData.LASTNAME, t.into(await t.$(lastNameProfile)));
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY Click on account settings', async function () {
  if (accountInfo !== '') {
    await t.evaluate(await t.$(accountInfo), (ele) => ele.click(), {
      waitForEvents: ['DOMContentLoaded'],
    });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY Get purchase amount', async function () {
  if (purchaseAmnt !== '') {
    purAmntStr = await (await t.$(purchaseAmnt)).text();
    if (
      CommonData.BRLOC.includes('MC-JP') ||
      CommonData.BRLOC.includes('EL-JP') ||
      CommonData.BRLOC.includes('LM-JP')
    ) {
      purAmntStr = purAmntStr.substring(purAmntStr.lastIndexOf('¥') + 1);
      purAmntStr = purAmntStr.replace(',', '');
      purAmnt = parseInt(purAmntStr, 10);
      taxAmntStr = await (await t.$(taxAmnt)).text();
      taxAmntStr = taxAmntStr.substring(taxAmntStr.lastIndexOf('¥') + 1);
      taxAmntStr = taxAmntStr.replace(',', '');
      gstAmnt = parseInt(taxAmntStr, 10);
      purAmnt -= gstAmnt;
      console.log(purAmnt);
    } else {
      purAmntStr = purAmntStr.substring(purAmntStr.lastIndexOf('$') + 1);
      purAmntStr = purAmntStr.replace(',', '');
      purAmnt = parseInt(purAmntStr, 10);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY verify loyalty point in view cart page', async function () {
  if (lpntVcart !== '') {
    gauge.screenshot();
    lpointStr = await (await t.$(lpntVcart)).text();
    lylPoints = lpointStr.replace(/\D/g, '');
    lylPoints = parseInt(lylPoints, 10);
    lylPointsCal = Lpointcalculation(purAmnt);
    avlPoints = pointcalculation(purAmnt);
    console.log('Available Points: ', avlPoints);
    gauge.message('Loaylty point earned' + lylPointsCal);
    if (lylPoints === lylPointsCal) {
      assert(matchCondition);
      gauge.message(messages.pointCalcSuccess);
    } else {
      assert(!matchCondition, messages.pointCalcFail);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'APACLOYALTY verify loyalty point in Order confirmation page',
  async function () {
    if (lpntOrConPg !== '') {
      lpntVarr = await (await t.$(lpntOrConPg)).text();
      lpntCnfPage = lpntVarr.replace(/\D/g, '');
      lpntCnfPage = parseInt(lpntCnfPage, 10);
      if (lpntCnfPage === lylPointsCal) {
        assert(matchCondition);
        gauge.message(messages.pointCalcSuccess);
      } else {
        assert(!matchCondition, messages.pointCalcFail);
      }
      await t.evaluate(await t.$(orderCnfMsgid), (ele) => ele.click(), {
        waitForEvents: ['DOMContentLoaded'],
      });
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step('APACLOYALTY Click on Gnav Cart button', async function () {
  if (gnavCartButton !== '') {
    await t.waitFor(await t.$(gnavCartButton), timeout);
    await t.evaluate(
      await t.$(gnavCartButton),
      (ele) => {
        ele.focus();
        ele.click();
      },
      { waitForEvents: ['loadEventFired'] }
    );
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY Click on Gnav Cart button mobile', async function () {
  if (gnavCartButtonMob !== '') {
    await t.waitFor(await t.$(gnavCartButtonMob), timeout);
    await t.evaluate(await t.$(gnavCartButtonMob), (ele) => ele.click(), {
      waitForEvents: ['DOMContentLoaded'],
    });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY Click on account settings mobile', async function () {
  if (accountInfoMob !== '') {
    await t.evaluate(await t.$(accountInfoMob), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'APACLOYALTY Click on loyalty menu in account index page',
  async function () {
    if (leftSideMenu !== '') {
      await t.evaluate(await t.$(leftSideMenu), (ele) => ele.click(), {
        waitForEvents: ['DOMContentLoaded'],
      });
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step('APACLOYALTY Click on edit profile', async function () {
  if (editProfile !== '' || editProfileMob !== '') {
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC')
      await t.evaluate(await t.$(editProfile), (ele) => ele.click());
    else
      await t.evaluate(await t.$(editProfileMob), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY Set values', async function () {
  setVal();
});

step('APACLOYALTY Click on Register Now in Account page', async function () {
  if (nonLylRegisternow !== '') {
    await t.evaluate(await t.$(nonLylRegisternow), (ele) => ele.click(), {
      waitForEvents: ['DOMContentLoaded'],
    });
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY Select Loyalty register terms', async function () {
  if (lylRegisterTerms !== '') {
    await t.evaluate(await t.$(lylRegisterTerms), (ele) => {
      ele.focus();
      ele.click();
    });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY Click on Send button', async function () {
  if (nonLylSubmit !== '') {
    await t.evaluate(await t.$(nonLylSubmit), (ele) => ele.click(), {
      waitForEvents: ['DOMContentLoaded'],
    });
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY Enter first Kana name in profile page', async function () {
  if (firstKanaNameProfile !== '') {
    await t.write(
      CommonData.FIRSTNAMEKAT,
      t.into(await t.$(firstKanaNameProfile))
    );
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY Enter Last Kana name in profile page', async function () {
  if (lastKanaNameProfile !== '') {
    await t.write(
      CommonData.LASTNAMEKAT,
      t.into(await t.$(lastKanaNameProfile))
    );
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY select birthday year dropdown', async function () {
  if (birthYearp !== '') {
    await t.dropDown({ id: birthYearp }).select(CommonData.BIRTHYEAR);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY Go to Prodcat and browse to SPP', async function () {
  for (let i = 0; i < skuIds.length; i++) {
    await t.goto(
      siteDefinition.executionContext.adminUrl + prodcatUrl + skuIds[i],
      {
        waitForEvents: ['DOMContentLoaded'],
      }
    );
    isShoppableValue = await (await t.$(isShoppable1)).text();
    isDisplayableValue = await (await t.$(IsDisplayable)).text();
    if (isShoppableValue === '1' && isDisplayableValue !== '0') {
      gauge.message(
        'The Product with SKU ID - ' +
          skuIds[i] +
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
    assert(
      !matchCondition,
      'None of the products are available for adding it to Cart'
    );
  }
});

step('APACLOYALTY Add product to Bag in SPP', async function () {
  let addToBagExist = 0;
  if (javaAlertPopUp !== '') {
    t.alert(javaAlertPopUp, async () => await t.accept());
  }
  for (let i = 0; i < 2; i++) {
    if (await (await t.$(addToBag)).exists(pollingTime, timeout)) {
      if ((await (await t.$(addToBag)).isDisabled()) !== true) {
        await t.evaluate(await t.$(addToBag), (ele) => {
          ele.focus();
          ele.click();
        });
        gauge.message(messages.addToBagBtnEnable);
        gauge.screenshot();
        break;
      } else {
        assert(false, messages.addToBagBtnDisable);
      }
    } else {
      await t.reload({ waitForEvents: ['loadEventFired'] });
      gauge.message(
        'Add to Bag btn does not exist within 30 seconds, thus reloading the page.'
      );
      addToBagExist++;
    }
  }
  if (addToBagExist === 2) {
    assert(
      false,
      'Add to bag does not load within expected time and reload the page.'
    );
  }
});

step('APACLOYALTY Cookie Rejection', async function () {
  if (cookieRejectBtn !== '') {
    try {
      await t.evaluate(await t.$(cookieRejectBtn), (ele) => {
        ele.focus();
        ele.click();
      });
    } catch (e) {
      gauge.message('Cookie rejection is not applicable and hence skipped.');
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACLOYALTY Enter Creditcard details', async function () {
  if (cvvId1 !== '') {
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      await Gen.ClickAction(cardTypeId);
      await Gen.ElementAction(paymentDetailsPc);
    } else {
      await Gen.ClickAction(cardTypeId);
      await Gen.ElementAction(paymentDetailsMob);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

// **This method is applicable only for EL-JP point calculation in shipping page

step('APACLOYALTY verify loyalty point in Shipping page', async function () {
  if (CommonData.BRLOC.includes('EL-JP')) {
    if (lpntShpngPage !== '') {
      gauge.screenshot();
      lpointStr = await (await t.$(lpntShpngPage)).text();
      lylPoints = lpointStr.replace(/\D/g, '');
      lylPoints = parseInt(lylPoints, 10);
      lylPointsCal = Lpointcalculation(purAmnt);
      avlPoints = pointcalculation(purAmnt);
      gauge.message('Loaylty point earned' + lylPointsCal);
      if (lylPoints === lylPointsCal) {
        assert(matchCondition);
        gauge.message(messages.pointCalcSuccess);
      } else {
        assert(!matchCondition, messages.pointCalcFail);
      }
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
});

// This method is applicable for LM-JP Guest account creation

step(
  'APACLOYALTY Order ConfPage Loyalty Registeration Terms',
  async function () {
    if (lylChboxOrConfPage !== '') {
      await t.waitFor(await t.$(lylChboxOrConfPage), timeout);
      gauge.screenshot();
      await t.evaluate(await t.$(lylChboxOrConfPage), (ele) => ele.click());
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step(
  'APACLOYALTY Click continue btn in order Info page and proceed to Payment page',
  async function () {
    if (completeTheOrder !== '') {
      try {
        await t.evaluate(await t.$(completeTheOrder), (ele) => ele.click(), {
          waitForNavigation: false,
        });
        gauge.screenshot();
        if (waitForText !== '') {
          await t.waitFor(waitForText, timeout);
          gauge.screenshot();
        }
      } catch (e) {
        gauge.message(messages.orderInfoPageNotAppear);
      }
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step('APACLOYALTY AC click on My account', async function () {
  if (accClickMyAccount !== '') {
    await t.evaluate(await t.$(accClickMyAccount), (ele) => {
      ele.scrollIntoView();
      ele.click();
    });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'APACLOYALTY Enter user details to create loyalty account',
  async function () {
    await Gen.PopUpClose(popUp);

    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      await Gen.ClickAction(newUserLink);
      await Gen.ElementAction(LoyUserFromMrktPg);
      await Gen.ClickAction(newUserRegBtn);
    } else {
      await Gen.ClickAction(newUserLinkMob);
      await Gen.ElementAction(LoyUserFromMrktPg);
      await Gen.ClickAction(newUserRegBtnMob);
    }
    gauge.message('Email ID : ' + newEmailId);
  }
);

step('APACLOYALTY Navigate to account GNAV', async function () {
  if(accGnav !== '') {
    await t.evaluate(await t.$(accGnav), (ele) => ele.click());
  }
  else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'APACLOYALTY Click on loyalty benefits link',
  async function () {
    if (loyBenefitLink !== '') {
      await t.evaluate(await t.$(loyBenefitLink), (ele) => ele.click(), {
        waitForEvents: ['DOMContentLoaded'],
      });
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step(
  'APACLOYALTY Click on loyalty benefits link mob',
  async function () {
    if (loyBenefitLinkMob !== '') {
      await t.evaluate(await t.$(loyBenefitLinkMob), (ele) => ele.click(), {
        waitForEvents: ['DOMContentLoaded'],
      });
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);