var CommonData = {};
var timeoutSetting = '';
var skuIds = [];
var notAvailableProductsCount = 0;
var prodcatUrl = '';
var isShoppable1 = '';
var isDisplayable = '';
var productUrl = '';
var noDisplayableProductError = '';
var javaalertPopup = '';
var addToBag = '';
var checkoutMob = '';
var cartPopUp = '';
var checkoutId = '';
var checkoutIdMob = '';
var sampleContinue = '';
var sampleContinueMob = '';
var signupPopUp = '';
var cookieRejectBtn = '';
var samplePageContinue = '';
var samplePageContinueMob = '';
var guestUserId = '';
var termsAndCondition = '';
var guestUserContinue = '';
var guestUserSubmitMOb = '';
var titleId = '';
var firstNameId = '';
var lastNameId = '';
var cityId = '';
var streetID = '';
var postalCodeId = '';
var phoneId = '';
var shippingAddressCont = '';
var NewUserPwd = '';
var creditcardId = '';
var expDateId = '';
var cvvId = '';
var payId = '';
var shippingContinueMob = '';
var completeTheOrder = '';
var completeTheOrderMob = '';
var loginID1 = '';
var mobLoginID = '';
var acRegisterNow = '';
var acRegisterNowMob = '';
var accRegFirstName = '';
var accRegLastName = '';
var acRegEmailId = '';
var accRegPwd = '';
var acRegisterTerms = '';
var acLoyRegisterTerms = '';
var acLoyRegisterTermsMob = '';
var accRegCreateAc = '';
var acMobileSignUpPopUp = '';
var accRegCreateAcMob = '';
var testOfferUrl = '';
var loyaltySection = '';
var lPointsIndexpage = '';
var curPoints1 = '';
var tier1StatusId = '';
var tier1StatusIdMob = '';
var curTierStatus = '';
var joinLoyaltyFooter = '';
var joinLoyaltyFooterMob = '';
var joinNowMarktPage = '';
var rewardSection = '';
var orderNum = '';
var orderNumber = '';
var rewardSectionMob = '';
var accountIndexUrl = '';
var offerManagerUrl = '';
var viewCartPageUrl = '';
var appliedOffersId = '';
var appliedOffersId1 = '';
var appliedOffTxt = '';
var testOfferList = [];
var testPntTot = 0;
var percPnt = 0;
var birthDateP = '';
var birthYearP = '';
var dt = '';
var birthMon = '';
var birthMonthP = '';
var profileUpdate = '';
var profileUpdateMob = '';
var loyaltyOfferPanel = '';
var fNameProfile = '';
var lNameProfile = '';
var accountInfo = '';
var purchaseAmnt = '';
var purAmntStr = '';
var purAmnt = 0;
var avlPoints = 0;
var lPntVcart = '';
var lPointStr = '';
var lPoints = 0;
var lPointsCal = 0;
var lPntOrConPg = '';
var lPntVarr = '';
var lPntCp = 0;
var gnavCartIcon = '';
var viewCartOverlay = '';
var gnavCartIconMob = '';
var accountInfoMob = '';
var lyltySideMenu = '';
var editProfile = '';
var titleSettings = '';
var titleSettingsMob = '';
var welcomeRwdRedeemBtn = '';
var birthdRewardRedeemBtn = '';
var purchaseAmntMob = '';
var joinNowMarktPageMob = '';
var addAdressLink = '';
var freeGiftContinue = '';
var conPageRegisterPWD = '';
var conPageRegisterTerms = '';
var conPageLylRegisterTerms = '';
var loyaltyJoinConPageBtn = '';
var preferencesPasswordId = '';
var preferencesPasswordId2 = '';
var mobLoyaltyHamburger = '';
var acRegisterTermsMob = '';
var lpnt = 0;
var bdayP = 0;
var tier2p = 0;
var tlPnt = 0;
var tierst = '';
var earnPnt = '';
var appOffer = '';
var offerAppliedFlag = '';
var timeOut = '';
var pollingTime = '';
var paymentDetails = [];
var pageReloadUrl = '';
var selectPaymentOption = '';
var messages = {};
var newLoyUserDetails = [];
var guestLoyUserDetails = [];
var newLoyUserDetailsMob = [];
var shippingDetails = [];
var randomPopup = [];
var personalProfileDetails = [];
var closePopUp = '';
var accRegMarktPgEmailId = '';
var accRegMarktPgEmailIdMob = '';
var totPurAmnt = 0;
var myRewards = 0;
var loyaltySectionmob = 0;
var mySmartRewards = '';
var hamburgerMenu = '';
var myAccount = '';
var emulationDevice = '';

var t = require('taiko');
let siteDefinition, source, NullDataException;
const Helper = require('../../helpers/helper');
const Util = require('../../../../utilities/util');
const assert = require('assert');
const matchCondition = true;
const feature = 'Loyalty';

const Gen = require('../ReUsableFunction.js');
const Hengine = require('../../../../datainterface/providers/hengine');
const taikoOverride = require('../../helix_taiko');

// Random birthday date
function randomBday() {
  const date = new Date();
  const bupper = date.getDate();
  const blower = 1;
  const RandomBdt = Math.floor(Math.random() * (bupper - blower + 1)) + blower;
  return RandomBdt;
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
  lpnt = 0;
  tlPnt = 0;
  purAmnt = 0;
  avlPoints = 0;
  appOffer = '';
  tierst = CommonData.TIER1STATUS;
  earnPnt = CommonData.EARNPNT1;
}

function Lpointcalculation(purAmnt) {
  if (tierst.includes(CommonData.TIER2STATUS)) {
    earnPnt = CommonData.EARNPNT2;
  } else if (tierst.includes(CommonData.TIER3STATUS)) {
    earnPnt = CommonData.EARNPNT3;
  }
  lpnt = Math.ceil(purAmnt * earnPnt);
  console.log(lpnt, 'Lpoincalc');

  if (offerAppliedFlag) {
    switch (appOffer) {
      case 'ly_birthday_double_points':
        bdayP = lpnt * CommonData.BDAYBONUS;
        lpnt = lpnt + bdayP;
        break;
      case 'ly_birthday_double_points_t1':
        bdayP = purAmnt * CommonData.BDAYBONUS;
        lpnt = bdayP;
        break;
      case 'ly_birthday_double_pt':
        bdayP = purAmnt * CommonData.BDAYBONUS;
        lpnt = bdayP;
        break;
      case 'ly_birthday_20off':
        bdayP = purAmnt * CommonData.BDAYBONUS;
        lpnt = lpnt + bdayP;
        break;
      case 'ly_welcome_pt':
        tier2p = purAmnt * CommonData.TIER2UPBONUS;
        lpnt = lpnt + tier2p;
        break;
      case 'ly_t2_upgrade_300pt':
        // eslint-disable-next-line no-magic-numbers
        lpnt = purAmnt + 300;
        break;
      case 'ly_t3_upgrade_double_pt':
        lpnt = purAmnt * 2;
        break;
    }
  }
  lpnt += testPntTot;
  tlPnt += lpnt;
  return lpnt;
}

function makeEmail() {
  var strValues = 'abcdefg12345';
  var strEmail = '';
  var strTmp;
  for (let i = 0; i < 10; i++) {
    strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
    strEmail = strEmail + strTmp;
  }
  strTmp = '';
  // strEmail = strEmail + '@';
  // eslint-disable-next-line no-magic-numbers
  for (let j = 0; j < 8; j++) {
    strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
    strEmail = strEmail + strTmp;
  }
  strEmail = strEmail + '@estee' + '.com';
  return strEmail;
}

let newEmailId = makeEmail();
function reinitialize() {
  timeOut = CommonData.timeOut;
  pollingTime = CommonData.pollingTime;
  testOfferList = [
    CommonData.TESTOFFER1,
    CommonData.TESTOFFER2,
    CommonData.TESTOFFER3,
  ];
  messages = {
    stepNotApplicable: messages.stepNotApplicable,
  };
  randomPopup = [signupPopUp, cartPopUp, cookieRejectBtn, closePopUp];
  skuIds = [
    CommonData.skuId1,
    CommonData.skuId2,
    CommonData.skuId3,
    CommonData.skuId4,
    CommonData.skuId5,
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
    { loc: acRegEmailId, data: newEmailId, action: 'TryCatchWrite' },
    { loc: accRegPwd, data: CommonData.NPWD, action: 'TryCatchWrite' },
    { loc: acRegisterTerms, action: 'tryCatchClick' },
    { loc: acLoyRegisterTerms, action: 'tryCatchClick' },
    { action: 'screenshot' },
    { loc: accRegCreateAc, action: 'tryCatchClick' },
  ];

  guestLoyUserDetails = [
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
    { loc: acRegisterTerms, action: 'tryCatchClick' },
    { loc: acLoyRegisterTerms, action: 'tryCatchClick' },
    { action: 'screenshot' },
    { loc: accRegCreateAc, action: 'tryCatchClick' },
  ];

  newLoyUserDetailsMob = [
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
    { loc: acRegEmailId, data: newEmailId, action: 'TryCatchWrite' },
    { loc: accRegPwd, data: CommonData.NPWD, action: 'TryCatchWrite' },
    { loc: acRegisterTermsMob, action: 'tryCatchClick' },
    { loc: acLoyRegisterTermsMob, action: 'tryCatchClick' },
    { action: 'screenshot' },
    { loc: accRegCreateAcMob, action: 'tryCatchClick' },
  ];
  shippingDetails = [
    { loc: titleId, action: 'tryCatchClick' },
    { loc: firstNameId, data: CommonData.FIRSTNAME, action: 'write' },
    { loc: lastNameId, data: CommonData.LASTNAME, action: 'write' },
    { loc: phoneId, data: CommonData.PHONE, action: 'write' },
    { loc: addAdressLink, action: 'tryCatchClick' },
    { loc: cityId, data: CommonData.CITY, action: 'write' },
    { loc: streetID, data: CommonData.STREET, action: 'write' },
    { loc: postalCodeId, data: CommonData.ZIPCODE1, action: 'write' },
    { action: 'screenshot' },
  ];

  paymentDetails = [
    // {
    //   loc: pageReloadUrl,
    //   action: 'reload',
    // },
    {
      loc: selectPaymentOption,
      action: 'click',
    },
    {
      loc: creditcardId,
      action: 'click',
    },
    {
      loc: creditcardId,
      data: CommonData.CREDITCARD,
      action: 'write',
    },
    {
      loc: expDateId,
      data: CommonData.CCMONTH,
      action: 'write',
    },
    {
      loc: cvvId,
      data: CommonData.CVV,
      action: 'write',
    },
    { action: 'screenshot' },
  ];
  personalProfileDetails = [
    {
      loc: fNameProfile,
      data: CommonData.FIRSTNAME,
      action: 'clearNwrite',
    },
    { loc: lNameProfile, data: CommonData.LASTNAME, action: 'clearNwrite' },
    {
      loc: preferencesPasswordId,
      data: CommonData.UPDATEPASSWORD,
      action: 'write',
    },
    {
      loc: preferencesPasswordId2,
      data: CommonData.UPDATEPASSWORD,
      action: 'write',
    },

    { loc: birthDateP, data: randomBday(), action: 'IndexDropDownID' },
    { loc: birthMonthP, data: bdayMonth(), action: 'IndexDropDownID' },
    {
      loc: birthYearP,
      data: CommonData.BdayYear,
      action: 'IDDropdowntxt',
    },
    { action: 'screenshot' },
  ];
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

step('UKLOYALTY Initialize Helix', async function () {
  // Initialize the selectors from DB
  await initFrameworkSettings();
});

/** ****** BASE URL and ADM URL IS RECEIVED ******/

step('UKLOYALTY Mobile device emulation', async function () {
  await t.emulateDevice(emulationDevice);
  gauge.message('Emulation device: ' + emulationDevice);
});

step('UKLOYALTY Configuring the prerequisites', async function () {
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

step('UKLOYALTY Set revision tag', async function () {
  Helper.setRevisionTag(siteDefinition, t);
  await t.goto(siteDefinition.executionContext.url, {
    waitForEvents: ['loadEventFired'],
  });
});

step('UKLOYALTY Go to Prodcat and browse to SPP', async function () {
  for (let i = 0; i < skuIds.length; i++) {
    await t.goto(
      siteDefinition.executionContext.adminUrl + prodcatUrl + skuIds[i],
      {
        waitForEvents: ['DOMContentLoaded'],
      }
    );
    const isShoppableValue = await (await t.$(isShoppable1)).text();
    const isDisplayableValue = await (await t.$(isDisplayable)).text();
    if (isShoppableValue === '1' && isDisplayableValue !== '0') {
      gauge.message(
        'The Product with SKU ID - ' +
          skuIds[i] +
          ' is available and proceeding to add to Cart'
      );
      javaalertPopup;
      if (await (await t.$(productUrl)).exists(pollingTime, timeOut)) {
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
          skuIds[i] +
          ' is NOT available for adding it to Cart '
      );
      notAvailableProductsCount++;
    }
  }
  if (notAvailableProductsCount === skuIds.length) {
    // matchCondition = false;
    assert(
      !matchCondition,
      'None of the products are available for adding it to Cart'
    );
  }
});

step('UKLOYALTY Add product to Bag in SPP', async function () {
  if (javaalertPopup !== '') {
    t.alert(javaalertPopup, async () => await t.accept());
  }
  let AddtoBagExist = 0;
  for (let i = 0; i < 2; i++) {
    if (await (await t.$(addToBag)).exists(pollingTime, timeOut)) {
      if ((await (await t.$(addToBag)).isDisabled()) !== true) {
        await t.evaluate(await t.$(addToBag), (ele) => {
          ele.focus();
          ele.click(); // }, {waitForEvents:['loadEventFired']
        });
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

step('UKLOYALTY click continue checkout mob', async function () {
  if (checkoutMob !== '') {
    await t.evaluate(await t.$(checkoutMob), (ele) => ele.click(), {
      waitForNavigation: false,
    });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'UKLOYALTY Click checkout btn and proceed to Sample/SignIn page',
  async function () {
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      await Gen.ClickAction(checkoutId);
      gauge.screenshot();
    } else {
      await Gen.ClickAction(checkoutIdMob);
      gauge.screenshot();
    }
    {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step('UKLOYALTY Click sample continue button/link', async function () {
  if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
    /** unexpected Sample page appear */
    await Gen.TryCatchClickAction(sampleContinue);
  } else {
    await Gen.TryCatchClickAction(sampleContinueMob);
  }
  {
    gauge.message(messages.stepNotApplicable);
  }
});

step('UKLOYALTY Look for random popups and close it', async function () {
  for (let i = 0; i < randomPopup.length; i++) {
    await Gen.PopUpClose(randomPopup[i]);
  }
});

step('UKLOYALTY Sample page continue', async function () {
  if (samplePageContinue !== '') {
    await t.evaluate(await t.$(samplePageContinue), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('UKLOYALTY Sample page continue mob', async function () {
  if (samplePageContinueMob !== '') {
    await t.evaluate(await t.$(samplePageContinueMob), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('UKLOYALTY Enter guestuser/newuser id', async function () {
  if (guestUserId !== '') {
    newEmailId = makeEmail();
    await Gen.WriteAction(guestUserId, newEmailId);
    gauge.screenshot();
    gauge.message('New user Email ID: ' + newEmailId);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('UKLOYALTY Click guestuser/newuser continue btn', async function () {
  if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
    await Gen.ClickAction(guestUserContinue);
  } else {
    await Gen.ClickAction(guestUserSubmitMOb);
  }
  {
    gauge.message(messages.stepNotApplicable);
  }
});

step('UKLOYALTY Click terms and condition', async function () {
  if (termsAndCondition !== '') {
    await t.evaluate(await t.$(termsAndCondition), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('UKLOYALTY Enter shipping address', async function () {
  if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
    await Gen.ElementAction(shippingDetails);
  } else {
    await Gen.ElementAction(shippingDetails);
  }
});

/** Shipping address continue btn apply for some Brands/Locale */
step('UKLOYALTY click shipping address continue', async function () {
  if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
    await Gen.TryCatchClickAction(shippingAddressCont, timeOut);
  } else {
    await Gen.TryCatchClickAction(shippingContinueMob);
  }
  {
    gauge.message(messages.stepNotApplicable);
  }
});

step('UKLOYALTY enter new user password to create account', async function () {
  if (NewUserPwd !== '') {
    await t.write(CommonData.NPWD, t.into(await t.$(NewUserPwd)));
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('UKLOYALTY click pay button', async function () {
  if (payId !== '') {
    await t.evaluate(await t.$(payId), (ele) => ele.click(), {
      waitForNavigation: false,
    });
    if (CommonData.ORDERMESSAGE !== '') {
      const confirmurl = await t.currentURL();
      if (
        // eslint-disable-next-line no-constant-condition
        (confirmurl.includes(CommonData.ORDERCONFIRMURL),
        { waitForEvents: ['DOMContentLoaded'] })
      ) {
        assert(matchCondition);
        gauge.message('Order placed successfully');
        gauge.screenshot();
      } else {
        gauge.message('Order not placed');
        gauge.screenshot();
        assert(!matchCondition);
      }
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

/** Order info page is applicable for few Brands/Locals */
step(
  'UKLOYALTY Click continue btn in order Info/Details page and proceed to Payment page',
  async function () {
    if (completeTheOrder !== '') {
      if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
        await Gen.TryCatchClickAction(completeTheOrder);
      } else {
        await Gen.TryCatchClickAction(completeTheOrderMob);
      }
    }
    {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

// Account steps
step('UKLOYALTY Click logIn btn/link', async function () {
  if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
    await Gen.TryCatchClickAction(loginID1);
  } else {
    await Gen.TryCatchClickAction(mobLoginID);
  }
  {
    gauge.message(messages.stepNotApplicable);
  }
});

step('UKLOYALTY Account Register Now', async function () {
  if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
    await Gen.TryCatchClickAction(acRegisterNow);
  } else {
    await Gen.TryCatchClickAction(acRegisterNowMob);
  }
  {
    gauge.message(messages.stepNotApplicable);
  }
  gauge.screenshot();
});

step(
  'UKLOYALTY Enter new user details to create loyalty account',
  async function () {
    if (acRegEmailId !== '') {
      newEmailId = makeEmail();
      gauge.message(newEmailId);
      if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
        await Gen.ElementAction(newLoyUserDetails);
      } else {
        await Gen.ElementAction(newLoyUserDetailsMob);
      }
    }
  }
);

step('UKLOYALTY AC Mobile sign-up pop-up', async function () {
  if (acMobileSignUpPopUp !== '') {
    await t.evaluate(await t.$(acMobileSignUpPopUp), (ele) => ele.click(), {
      waitForNavigation: false,
    });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

//* ************Cart Scenario**************/

step('UKLOYALTY Set Test Offers PCURL', async function () {
  await t.goto(siteDefinition.executionContext.adminUrl + testOfferUrl, {
    waitForEvents: ['loadEventFired'],
  });
});

step('UKLOYALTY Set Test Offers MOBURL', async function () {
  await t.goto(siteDefinition.executionContext.adminUrl + testOfferUrl, {
    waitForEvents: ['loadEventFired'],
  });
});

// loyalty code start

step(
  'UKLOYALTY Verify Loyalty Section in Account Index Page',
  async function () {
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      if (loyaltySection !== '') {
        gauge.screenshot();
        assert(
          await (
            await t.$(loyaltySection)
          ).isVisible,
          'Loyalty Section is displayed in Account Index page'
        );
      } else {
        gauge.screenshot();
        assert(
          await (
            await t.$(loyaltySectionmob)
          ).isVisible,
          'Loyalty Section is displayed in Account Index page'
        );
      }
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step('UKLOYALTY Display current Tier Points', async function () {
  if (lPointsIndexpage !== '') {
    gauge.screenshot();
    curPoints1 = await (await t.$(lPointsIndexpage)).text();
    gauge.message(curPoints1);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'UKLOYALTY Verify loyalty point in loyalty landing page',
  async function () {
    if (lPointsIndexpage !== '') {
      if (curPoints1 === tlPnt) {
        assert(matchCondition);
        gauge.message('Loaylty point calcualtion in landing page successful');
      } else {
        assert(
          !matchCondition,
          'Loaylty point calcualtion in landing page failed'
        );
      }
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step('UKLOYALTY Display current Tier1 status', async function () {
  if (tier1StatusId !== '') {
    curTierStatus = await (await t.$(tier1StatusId)).text();
    gauge.message(curTierStatus);
  } else if (tier1StatusIdMob !== '') {
    curTierStatus = await (await t.$(tier1StatusIdMob)).text();
    gauge.message(curTierStatus);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('UKLOYALTY Click on Join Loyalty in Footer', async function () {
  if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
    await Gen.ClickAction(joinLoyaltyFooter);
  } else {
    await Gen.ClickAction(joinLoyaltyFooterMob);
  }
  {
    gauge.message(messages.stepNotApplicable);
  }
});

step('UKLOYALTY Click on Join Now Button', async function () {
  if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
    await Gen.WriteAction(accRegMarktPgEmailId, newEmailId);
    await Gen.TryCatchScrollAction(joinNowMarktPage);
    await Gen.ClickAction(joinNowMarktPage);
  } else {
    await Gen.WriteAction(accRegMarktPgEmailIdMob, newEmailId);
    await Gen.TryCatchScrollAction(joinNowMarktPageMob);
    await Gen.ClickAction(joinNowMarktPageMob);
  }
  {
    gauge.message(messages.stepNotApplicable);
  }
  gauge.screenshot();
});

step('UKLOYALTY Click on rewards section', async function () {
  if (rewardSection !== '') {
    if (CommonData.BRLOC.includes('CL-UK')) {
      if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
        await Gen.ClickAction(rewardSection);
      } else {
        await Gen.ClickAction(hamburgerMenu);
        await Gen.ClickAction(myAccount);
        await Gen.ClickAction(mySmartRewards);
      }
    } else {
      if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
        await t.waitFor(await t.$(rewardSection), timeOut);
        await Gen.ClickAction(rewardSection);
        gauge.screenshot();
      } else {
        await Gen.ClickAction(rewardSectionMob);
      }
    }
    gauge.message(messages.stepNotApplicable);
  }
});

step('UKLOYALTY Enter Guest user Register EmailId', async function () {
  if (acRegEmailId !== '') {
    gauge.screenshot();
    await t.evaluate(await t.$(acRegEmailId), (ele) => ele.focus());
    await t.press(['Control', 'KeyA']);
    await t.press('Delete');
    await t.write(newEmailId, t.into(await t.$(acRegEmailId)));
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('UKLOYALTY Display order number details', async function () {
  if (orderNum !== '') {
    await t.waitFor(await t.$(orderNum), timeOut);
    orderNumber = await ({ waitForEvents: ['DOMContentLoaded'] },
    await t.$(orderNum)).text();
    gauge.screenshot();
    gauge.message(orderNumber);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'UKLOYALTY Navigate to account index page mob',
  { continueOnFailure: true },
  async function () {
    if (accountIndexUrl !== '') {
      await t.goto(siteDefinition.executionContext.url + accountIndexUrl, {
        waitForNavigation: false,
      });
      if (!(await await t.$(rewardSectionMob)).exists(pollingTime, timeOut)) {
        gauge.message('The account index page is not loaded within 20 seconds');
        assert(!matchCondition);
      }
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);
step('UKLOYALTY Navigate to account index page PC', async function () {
  if (accountIndexUrl !== '') {
    await t.goto(siteDefinition.executionContext.url + accountIndexUrl, {
      waitForNavigation: false,
    });

    if (!(await await t.$(rewardSection)).exists(pollingTime, timeOut)) {
      gauge.message('The account index page is not loaded within 20 seconds');
      assert(!matchCondition);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'UKLOYALTY Enter Guest user details to create loyalty account',
  async function () {
    if (acRegEmailId !== '') {
      if (CommonData.BRLOC.includes('BB-UK')) {
        gauge.screenshot();
        gauge.message(acRegEmailId);
        if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
          await Gen.ElementAction(guestLoyUserDetails);
        } else {
          await Gen.TryCatchClickAction(acRegisterNowMob);
          await Gen.ElementAction(guestLoyUserDetails);
        }
      }
      if (CommonData.BRLOC.includes('CL-UK')) {
        gauge.screenshot();
        if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
          await Gen.TryCatchClickAction(acRegisterNow);
          await Gen.ElementAction(newLoyUserDetails);
        } else {
          await Gen.TryCatchClickAction(acRegisterNowMob);
          await Gen.ElementAction(newLoyUserDetailsMob);
        }
      }
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step('UKLOYALTY Navigate to offer manager', async function () {
  if (offerManagerUrl !== '') {
    if (
      siteDefinition.executionContext.environment.toUpperCase() === 'PROD' ||
      siteDefinition.executionContext.environment.toUpperCase() === 'PREPROD'
    ) {
      await t.goto(siteDefinition.executionContext.adminUrl + offerManagerUrl, {
        waitForEvents: ['DOMContentLoaded'],
      });
    } else {
      await t.goto(siteDefinition.executionContext.url + offerManagerUrl, {
        waitForEvents: ['DOMContentLoaded'],
      });
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('UKLOYALTY Navigate to offer manager mobile', async function () {
  if (offerManagerUrl !== '') {
    if (
      siteDefinition.executionContext.environment.toUpperCase() === 'PROD' ||
      siteDefinition.executionContext.environment.toUpperCase() === 'PREPROD'
    ) {
      await t.goto(siteDefinition.executionContext.adminUrl + offerManagerUrl, {
        waitForEvents: ['DOMContentLoaded'],
      });
    } else {
      await t.goto(siteDefinition.executionContext.url + offerManagerUrl, {
        waitForEvents: ['DOMContentLoaded'],
      });
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('UKLOYALTY Navigate to view cart page', async function () {
  if (viewCartPageUrl !== '') {
    await t.goto(siteDefinition.executionContext.url + viewCartPageUrl, {
      waitForEvents: ['DOMContentLoaded'],
    });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('UKLOYALTY Navigate to view cart page mobile', async function () {
  if (viewCartPageUrl !== '') {
    await t.goto(siteDefinition.executionContext.url + viewCartPageUrl, {
      waitForEvents: ['DOMContentLoaded'],
    });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('UKLOYALTY Verify welcome offer', async function () {
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
      assert(matchCondition, 'Welcome offer applied ');
      gauge.message('Welcome offer applied');
    } else {
      assert(!matchCondition, 'Welcome offer not applied');
      gauge.message('Welcome offer not applied');
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
  gauge.screenshot();
});

step('UKLOYALTY Verify Test offers', async function () {
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
        testPntTot = purAmnt;
        gauge.message(CommonData.TESTOFFER2, 'offer applied');
      }
      if (appliedOffTxt.includes(CommonData.TESTOFFER3)) {
        percPnt = purAmnt * parseFloat(CommonData.TESTPNT3);
        purAmnt = purAmnt - percPnt;
        purAmnt = Math.ceil(purAmnt);

        gauge.message(CommonData.TESTOFFER3, ' offer applied');
      }
    } else {
      gauge.message('Test offer is not applied');
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
  gauge.screenshot();
});

step(
  'UKLOYALTY Click on Personal profile and enter the details',
  async function () {
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      await Gen.ElementAction(titleSettings);
      await Gen.ElementAction(personalProfileDetails);
      await Gen.ClickAction(profileUpdate);
    } else {
      await Gen.ElementAction(titleSettingsMob);
      await Gen.ElementAction(personalProfileDetails);
      await Gen.ClickAction(profileUpdateMob);
    }
  }
);

step('UKLOYALTY Verify birthday offer', async function () {
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
    if (appliedOffTxt.includes(CommonData.BIRTHDAYOFFER1)) {
      offerAppliedFlag = true;
      appOffer = CommonData.BIRTHDAYOFFER1;
      assert(matchCondition);
      gauge.message('Birthday offer applied ');
    } else {
      assert(!matchCondition, 'Birthday offer not applied');
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
  gauge.screenshot();
});

step('UKLOYALTY Verify loyalty offer code panel', async function () {
  if (loyaltyOfferPanel !== '') {
    assert(
      await t.$(loyaltyOfferPanel).isVisible(),
      'Loyalty offer code panel not displayed'
    );
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('UKLOYALTY Click on account settings', async function () {
  if (accountInfo !== '') {
    await t.evaluate(await t.$(accountInfo), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('UKLOYALTY Get purchase amount', async function () {
  if (purchaseAmnt !== '') {
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      purAmntStr = await (await t.$(purchaseAmnt)).text();
      purAmntStr = purAmntStr.substring(purAmntStr.lastIndexOf('£') + 1);
      purAmnt = purAmntStr.split('£').filter(Number);
      purAmntStr = purAmntStr.replace('', '');

      purAmnt = parseFloat(purAmntStr);
      console.log(purAmnt, 'Purchase amnt');
      avlPoints = pointcalculation(purAmnt);
    } else {
      purAmntStr = await (await t.$(purchaseAmntMob)).text();
      purAmntStr = purAmntStr.substring(purAmntStr.lastIndexOf('£') + 1);
      purAmnt = purAmntStr.split('£').filter(Number);
      purAmntStr = purAmntStr.replace('', '');

      purAmnt = parseFloat(purAmntStr);
      console.log(purAmnt, 'Purchase amnt');
      avlPoints = pointcalculation(purAmnt);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('UKLOYALTY verify loyalty point in view cart page', async function () {
  if (lPntVcart !== '') {
    gauge.screenshot();
    lPointStr = await (await t.$(lPntVcart)).text();
    lPoints = lPointStr.replace(/\D+/, '');
    lPoints = parseInt(lPoints, 10);
    lPointsCal = Lpointcalculation(purAmnt);
    avlPoints = pointcalculation(purAmnt);
    gauge.message('Loaylty point earned' + lPointsCal);
    if (lPoints === lPointsCal) {
      assert(matchCondition);
      gauge.screenshot();
      gauge.message('Loyalty point calcualtion successful');
    } else {
      assert(!matchCondition, 'Loyalty point calcualtion failed');
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'UKLOYALTY verify loyalty point in Order confirmation page',
  async function () {
    if (lPntOrConPg !== '') {
      if (CommonData.BRLOC.includes('CL-UK')) {
        lPntVarr = await (await t.$(lPntOrConPg)).text();
        lPntVarr = lPntVarr.split(' ').filter(Number);
        lPntVarr = parseFloat(lPntVarr);
        lPntCp = lPntVarr;
        console.log('loyalty points in confirmation page ', lPntCp);
        if (lPntCp === purAmnt) {
          assert(matchCondition);
          gauge.message(messages.ordConPgPntCalSuccess);
        }
      } else {
        lPntVarr = await (await t.$(lPntOrConPg)).text();
        lPntCp = lPntVarr.replace(/\D/g, '');
        lPntCp = parseInt(lPntCp, 10);

        if (lPntCp === lPointsCal) {
          assert(matchCondition);
          gauge.message(
            'Loyalty point calcualtion in Order confirmation page successful'
          );
        } else {
          assert(
            !matchCondition,
            'Loyalty point calcualtion in Order confirmation page failed'
          );
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

step('UKLOYALTY Click on Gnav Cart button', async function () {
  if (gnavCartIcon !== '') {
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      await t.waitFor(await t.$(gnavCartIcon), timeOut);
      await Gen.ClickAction(gnavCartIcon);
    } else {
      await t.waitFor(await t.$(gnavCartIconMob), timeOut);
      await Gen.ClickAction(gnavCartIconMob);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('UKLOYALTY Click on View Cart button', async function () {
  if (await (await t.$(viewCartOverlay)).exists(pollingTime, timeOut)) {
    await t.evaluate(
      await t.$(viewCartOverlay),
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

step('UKLOYALTY Click on account settings mobile', async function () {
  if (accountInfoMob !== '') {
    await t.evaluate(await t.$(accountInfoMob), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'UKLOYALTY Click on loyalty menu in account index page',
  async function () {
    if (lyltySideMenu !== '') {
      await Gen.ClickAction(lyltySideMenu);
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step('UKLOYALTY Click on edit profile', async function () {
  if (editProfile !== '') {
    await t.evaluate(await t.$(editProfile), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('UKLOYALTY Set values', async function () {
  setVal();
});

step('UKLOYALTY Click on welcome reward redeem button', async function () {
  if (welcomeRwdRedeemBtn !== '') {
    if (CommonData.BRLOC.includes('CL-UK')) {
      await t.evaluate(await t.$(myRewards), (ele) => ele.click(), {
        waitForNavigation: false,
      });
      await Gen.ClickAction(welcomeRwdRedeemBtn);
    } else {
      await Gen.ClickAction(welcomeRwdRedeemBtn);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('UKLOYALTY Click on Birthday reward redeem button', async function () {
  if (birthdRewardRedeemBtn !== '') {
    if (CommonData.BRLOC.includes('CL-UK')) {
      await t.evaluate(await t.$(myRewards), (ele) => ele.click(), {
        waitForNavigation: false,
      });
      await Gen.ClickAction(birthdRewardRedeemBtn);
    } else {
      await Gen.ClickAction(birthdRewardRedeemBtn);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('UKLOYALTY Click link to add adress manually', async function () {
  if (addAdressLink !== '') {
    await t.evaluate(await t.$(addAdressLink), (ele) => ele.click(), {
      waitForNavigation: false,
    });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

/** **** unexpected Free gift page appear******/
step('UKLOYALTY Click free gift continue button/link', async function () {
  if (freeGiftContinue !== '') {
    try {
      await t.evaluate(await t.$(freeGiftContinue), (ele) => ele.click(), {
        waitForNavigation: false,
      });
    } catch (e) {
      gauge.message('Free gift page did not appear');
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('UKLOYALTY Confirmation page Register PWD', async function () {
  if (conPageRegisterPWD !== '') {
    await t.write(CommonData.NPWD, t.into(await t.$(conPageRegisterPWD)));
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('UKLOYALTY Confirmation page Registeration Terms', async function () {
  if (conPageRegisterTerms !== '') {
    await t.evaluate(await t.$(conPageRegisterTerms), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'UKLOYALTY Confirmation page Loyalty Registeration Terms',
  async function () {
    if (conPageLylRegisterTerms !== '') {
      await t.evaluate(await t.$(conPageLylRegisterTerms), (ele) =>
        ele.click()
      );
      gauge.screenshot();
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step(
  'UKLOYALTY Click on Loyalty Join link in order confirmation page',
  async function () {
    if (loyaltyJoinConPageBtn !== '') {
      await Gen.TryCatchClickAction(loyaltyJoinConPageBtn);
      gauge.screenshot();
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step('UKLOYALTY Loyalty HamburgerIcon', async function () {
  if (mobLoyaltyHamburger !== '') {
    await t.evaluate(await t.$(mobLoyaltyHamburger), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('UKLOYALTY Enter Creditcard details', async function () {
  if (cvvId !== '') {
    await Gen.ElementAction(paymentDetails);
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});
