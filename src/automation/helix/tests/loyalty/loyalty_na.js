// This file is common template for US UK and CA
var skuIds = [];
var notAvailableProductsCount = 0;
var noDisplayableProductError = '';
var isShoppable = '';
var isDisplayable = '';
var prodcatUrl = '';
var productUrl = '';
var javaAlertPopup = '';
var addToBagSPP = '';
var clickCartpageLink = '';
var bagIcon = '';
var gnavCart = '';
var gnavCheckoutBtn = '';
var clickCartpageLinkMob = '';
var cartcountValue = '';
var cartcount = '';
var timeoutSetting = '';
var checkoutButtonId = '';
var checkoutButtonId2 = '';
var continueSample1 = '';
var continueSample2 = '';
var guestUserId = '';
var continueAsGuest = '';
var enterFirstName = '';
var enterLastName = '';
var enterAddress1 = '';
var enterAddress2 = '';
var enterZipcode = '';
var enterPhone = '';
var returnEnterAddress1 = '';
var enterCity = '';
var selectState = '';
var selectState1 = '';
var state = '';
var selectUseThisAddress = '';
var continueToPayment = '';
var continueToPayment1 = '';
var checkoutButton = [];
var samplePage = [];
var guestuserLink = [];
var guestUserDetails = [];
var shippingDetails = [];
var personalProfileDetails = [];
var creditCardnumber = '';
var cvvFieldId = '';
var pcMonthYear = '';
var enterCcName = '';
var ccTime = '';
var placeOrderValidation = '';
var orderConfirmationMsgid = '';
var lPntOrConPg = '';
var loyPntLandPg = '';
var lpntLandStr = '';
var lpntLandPg = 0;
var lpntVarr = '';
var lpntConfPg = 0;
var placeOrder = '';
var signupRegisterPWD = '';
var loySignupRegTerms = '';
var accTermsCond = '';
var orderPagepopupClose = '';
var signupRegisterButton = '';
var enterNewuserZipcode = '';
var emulationDevice = '';
var mobContinueSample1 = '';
var mobContinueSample2 = '';
var mobCheckoutViewcart = '';
var mobCheckoutCreditcard = '';
var mobGuestUserLink = '';
var guestUserLink = '';
var dobDay = '';
var dobMonth = '';
var profilePopupClose = '';
var offerPopupClose = '';
var loyaltySection = '';
var loyaltyPointsIndexpage = '';
var curPoints1 = '';
var curPoints = 0;
var tier1StatusId = '';
var tier2StatusId = '';
var tier3StatusId = '';
var curTierStatus = '';
var rewardSection = '';
var mobRewardSection = '';
var accountProfile = '';
var loyaltyCheckbox = '';
var loyFirstname = '';
var loyLastname = '';
var loyaltyEmail = '';
var loyaltyPWD = '';
var loyaltyLoginButton = '';
var loyaltyRegistrationFirstName = '';
var loyaltyRegistrationLastName = '';
var loyaltyRegisterEmailId = '';
var loyaltyRegisterPWD = '';
var loyaltyRegisterationTerms = '';
var accRegTerms = '';
var loyaltyRegisterButton = '';
var registerGnav = '';
var loyaltyRegisterNow = '';
var loyaltyRegisterNowMob = '';
var registerGnavMob = '';
var mobLoyaltyHamburger = '';
var joinNow = '';
var loyaltyGnav = '';
var loyaltyTerms = '';
var profilePage = '';
var rewards = '';
var firstName = '';
var validOfferMsg = '';
var rewValidOfferMsg = '';
var continueCheckoutBtn = '';
var expectedValidOfferMsg = '';
var offerManagerUrl = '';
var loyIndexUrl = '';
var loyAdminUrl = '';
var adminToolUrl = '';
var admintoolUsername = '';
var admintoolPwd = '';
var admintoolSubmit = '';
var tranId = '';
var transRowId = '';
var numRows = 0;
var tranIdFlag = 0;
var transidTxt = '';
var setOrdershipBtn = '';
var upgradeProcess = '';
var transId1 = '';
var transId2 = '';
var viewCartPageUrl = '';
var submitForm = '';
var joinNowCheckbox = '';
var mrktPgAccTerms = '';
var gnavAccountSec = '';
var accSettings = '';
var firstNameProfile = '';
var lastNameProfile = '';
var birthDateProfile = '';
var birthMonthProfile = '';
var profileUpdate = '';
var dt = new Date();
var birthMon = '';
var lastName = '';
var postalCode = '';
var timeOut = '';
var pollingTime = '';
var pollingTime1 = '';
var welcPopUp = '';
var signupPopUp1 = '';
var signupPopUp2 = '';
var ordConfPgPopup1 = '';
var ordConfPgPopup2 = '';
var loyaltyJoinPopup = '';
var cookieRejectBtn = '';
var loyMenu = '';
var welcomeOffRedeemBtn = '';
var rewardRedeemBtn = '';
var redeemPointTxt = '';
var redeemPoint = 0;
var birthdayOffRedeemBtn = '';
var purchaseAmnt = '';
var purAmntStr = '';
var discountAmnt = '';
var discountAmntStr = '';
var discountAmntValue = '';
var discountPrice = 0;
var purAmnt = 0;
var totPurAmnt = 0;
var avlPoints = 0;
var loyPnt = 0;
var bdayPoint = 0;
var testPntTot = 0;
var tier2Pnt = 0;
var percentDiscount = 0;
var totalPnt = 0;
var earnPnt = 0;
var lPntVcart = '';
var lPntChkout = '';
var lPointStr = '';
var lPoints = 0;
var lPointsCal = 0;
var tierStatus = '';
var appOffer = '';
var offerAppliedFlag = '';
var appliedOffersId = '';
var appliedOffersId1 = '';
var appliedOffTxt = '';
var birthDay = '';
var birthMonth = '';
var newEmailId = '';
var waitForLtySec = '';
var benefitSection = '';
var loyReturnUserId = '';
var loyReturnUserPwd = '';
var signinButton = '';
var randomPopup = [];
var newLoyUserRegDetails = [];
var returnUserDetails = [];
var loyReturnUserIds = [];
var enrollMarktPgDetails = [];
var enrollOrdConfPgDetails = [];
let adminDBUser = '';
let adminDBPasswd = '';
var CommonData = {};
var t = require('taiko');

const feature = 'Loyalty';
let siteDefinition, source, NullDataException, tags;
const Helper = require('../../../helix/helpers/helper');
const Util = require('../../../../utilities/util');
const assert = require('assert');
const matchCondition = true;
const Hengine = require('../../../../datainterface/providers/hengine');
// const taikoOverride = require('../../helix_taiko');
const Gen = require('../ReUsableFunction.js');
const messages = {
  stepNotApplicable: 'This step is not applicable for this Brand/Locale',
  welcomeofferapplied: 'WELCOME HAS BEEN SUCCESSFULLY APPLIED',
  welcomeoffernotapplied: 'WELCOME HAS BEEN NOT SUCCESSFULLY APPLIED',
  birthdayofferapplied: 'BIRTHDAY OFFER HAS BEEN SUCCESSFULLY APPLIED',
  birthdayoffernotapplied: 'BIRTHDAY OFFER HAS BEEN NOT SUCCESSFULLY APPLIED',
  rewardofferapplied: 'REWARD OFFER HAS BEEN SUCCESSFULLY APPLIED',
  rewardoffernotapplied: 'REWARD OFFER HAS BEEN NOT SUCCESSFULLY APPLIED',
  lpointEarned: 'Loaylty point earned',
  purchaseAmt: 'purchase amount',
  lpointCalSuccess: 'Loyalty point calcualtion successful',
  lpointCalFail: 'Loyalty point calcualtion failed',
  ordConPgPntCalSuccess:
    'Loyalty point calcualtion in Order confirmation page successful',
  ordConPgPntCalFail:
    'Loyalty point calcualtion in Order confirmation page failed',
  loyLandPgPntCalSuccess:
    'Loyalty point calcualtion in landing page successful',
  loyLandPgPntCalFail: 'Loyalty point calcualtion in landing page failed',
};

function makeEmail() {
  var strValues = 'abcdefghijk123456789';
  var strEmail = '';
  var strTmp;
  for (let i = 0; i < 10; i++) {
    strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
    strEmail = strEmail + strTmp;
  }
  strEmail = strEmail + '@test.com';
  return strEmail;
}

async function setprerequisitesLoyalty() {
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
}

async function mobileDeviceEmulationLoyalty() {
  if (siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE') {
    await t.emulateDevice(emulationDevice);
    gauge.message('Emulation device: ' + emulationDevice);
  }
}

async function setRevisionTagLoyalty() {
  Helper.setRevisionTag(siteDefinition, t);
  await t.goto(siteDefinition.executionContext.url, {
    waitForEvents: ['loadEventFired'],
  });
}

function pointcalculation() {
  totPurAmnt = totPurAmnt + purAmnt;
  return totPurAmnt;
}
// Random birthday date
function randomBday() {
  const bupper = dt.getDate();
  const blower = 1;
  let randomBdt = 0;
  randomBdt = Math.floor(Math.random() * (bupper - blower + 1)) + blower;
  return randomBdt;
}

function bdayMonth() {
  // dt = new Date();
  birthMon = dt.getMonth();
  birthMon = birthMon + 1;
  return birthMon;
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
function returnUserEmailid() {
  return loyReturnUserIds[Math.floor(Math.random() * loyReturnUserIds.length)];
}

function lpointCalculation() {
  if (tierStatus.includes(CommonData.TIER2STATUS)) {
    earnPnt = CommonData.EARNPNT2;
  } else if (tierStatus.includes(CommonData.TIER3STATUS)) {
    earnPnt = CommonData.EARNPNT3;
  }
  loyPnt = purAmnt * earnPnt;
  if (offerAppliedFlag) {
    switch (appOffer) {
      case 'ly_birthday_20off':
        bdayPoint = purAmnt * CommonData.BDAYBONUS;
        loyPnt = loyPnt + bdayPoint;
        break;
      case 'ly_welcome_pt':
        tier2Pnt = purAmnt * CommonData.TIER2UPBONUS;
        loyPnt = loyPnt + tier2Pnt;
        break;
      case 'lyl_15_off':
        percentDiscount = loyPnt * parseFloat(CommonData.PERCNDISAMNT);
        loyPnt = parseFloat(loyPnt - percentDiscount);
        break;
      case 'first':
        percentDiscount = loyPnt * parseFloat(CommonData.PERCNDISAMNT);
        loyPnt = parseFloat(loyPnt - percentDiscount);
        break;
    }
  }
  loyPnt = loyPnt + testPntTot;
  totalPnt = totalPnt + loyPnt;
  return loyPnt;
}

function reinitialize() {
  adminDBUser = siteDefinition.dbAdminUsername;
  adminDBPasswd = siteDefinition.dbAdminPassword;
  adminDBPasswd = decodeURIComponent(adminDBPasswd);
  skuIds = [
    CommonData.skuId1,
    CommonData.skuId2,
    CommonData.skuId3,
    CommonData.skuId4,
    CommonData.skuId5,
  ];
  loyReturnUserIds = [
    CommonData.LRID1,
    CommonData.LRID2,
    CommonData.LRID3,
    CommonData.LRID4,
    CommonData.LRID5,
  ];

  randomPopup = [
    welcPopUp,
    signupPopUp1,
    signupPopUp2,
    cookieRejectBtn,
    offerPopupClose,
    profilePopupClose,
    loyaltyJoinPopup,
  ];

  newEmailId = makeEmail();

  newLoyUserRegDetails = [
    {
      loc: loyaltyRegistrationFirstName,
      data: CommonData.FIRSTNAME,
      action: 'TryCatchWrite',
    },
    {
      loc: loyaltyRegistrationLastName,
      data: CommonData.LASTNAME,
      action: 'TryCatchWrite',
    },
    {
      loc: loyaltyRegisterEmailId,
      data: newEmailId,
      action: 'write',
    },
    { loc: loyaltyRegisterPWD, data: CommonData.NPWD, action: 'TryCatchWrite' },
  ];

  returnUserDetails = [
    { loc: loyReturnUserId, data: returnUserEmailid(), action: 'write' },
    { loc: loyReturnUserPwd, data: CommonData.RUPWD, action: 'write' },
    { action: 'screenshot' },
    { loc: signinButton, action: 'click' },
  ];

  shippingDetails = [
    {
      loc: enterFirstName,
      data: CommonData.FIRSTNAME,
      action: 'write',
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
      loc: enterZipcode,
      data: CommonData.ZIPCODE,
      action: 'write',
    },
    {
      loc: enterPhone,
      data: CommonData.PHONE,
      action: 'write',
    },
    {
      loc: returnEnterAddress1,
      data: CommonData.ADDRESS1,
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
      data: CommonData.STATE,
      action: 'tryCatchClick',
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
    {
      loc: continueToPayment1,
      action: 'tryCatchClick',
    },
  ];
  enrollMarktPgDetails = [
    {
      loc: mobLoyaltyHamburger,
      action: 'tryCatchClick',
    },
    {
      loc: profilePage,
      action: 'tryCatchClick',
    },
    {
      loc: loyaltyTerms,
      action: 'tryCatchClick',
    },
    { loc: dobDay, data: '5', action: 'IndexDropDownID' },
    { loc: dobMonth, data: '1', action: 'IndexDropDownID' },
    {
      loc: joinNow,
      action: 'tryCatchClick',
    },
    {
      loc: loyaltyGnav,
      action: 'tryCatchClick',
    },
    {
      loc: firstName,
      data: CommonData.FIRSTNAME,
      action: 'write',
    },
    {
      loc: lastName,
      data: CommonData.LASTNAME,
      action: 'write',
    },
    {
      loc: postalCode,
      data: CommonData.ZIPCODE,
      action: 'write',
    },
    {
      loc: joinNowCheckbox,
      action: 'tryCatchClick',
    },
    {
      loc: mrktPgAccTerms,
      action: 'tryCatchClick',
    },
    {
      loc: submitForm,
      action: 'tryCatchClick',
    },
  ];
  personalProfileDetails = [
    {
      loc: mobLoyaltyHamburger,
      action: 'tryCatchClick',
    },
    {
      loc: gnavAccountSec,
      action: 'tryCatchClick',
    },
    {
      loc: accSettings,
      action: 'tryCatchClick',
    },
    {
      loc: firstNameProfile,
      data: CommonData.FIRSTNAME,
      action: 'write',
    },
    {
      loc: lastNameProfile,
      data: CommonData.LASTNAME,
      action: 'write',
    },
    { loc: birthDateProfile, data: randomBday(), action: 'IndexDropDownID' },
    { loc: birthMonthProfile, data: bdayMonth(), action: 'IndexDropDownID' },
    {
      loc: profileUpdate,
      action: 'tryCatchClick',
    },
  ];
  enrollOrdConfPgDetails = [
    {
      loc: ordConfPgPopup1,
      action: 'tryCatchClick',
    },
    {
      loc: ordConfPgPopup2,
      action: 'tryCatchClick',
    },
    {
      loc: signupRegisterPWD,
      data: CommonData.NPWD,
      action: 'TryCatchWrite',
    },
    {
      loc: enterNewuserZipcode,
      data: CommonData.NEWZIPCODE,
      action: 'TryCatchWrite',
    },
    { loc: birthDay, data: '5', action: 'IndexDropDownID' },
    { loc: birthMonth, data: '1', action: 'IndexDropDownID' },
    {
      loc: loySignupRegTerms,
      action: 'tryCatchClick',
    },
    {
      loc: accTermsCond,
      action: 'tryCatchClick',
    },
    {
      loc: signupRegisterButton,
      action: 'tryCatchClick',
    },
    {
      loc: loyaltyJoinPopup,
      action: 'tryCatchClick',
    },
    {
      loc: loyLastname,
      data: CommonData.LASTNAME,
      action: 'TryCatchWrite',
    },
    {
      loc: loyaltyCheckbox,
      action: 'tryCatchClick',
    },
    {
      loc: loyaltyEmail,
      data: newEmailId,
      action: 'TryCatchWrite',
    },
    {
      loc: loyFirstname,
      data: CommonData.FIRSTNAME,
      action: 'write',
    },
    {
      loc: loyaltyPWD,
      data: CommonData.NPWD,
      action: 'TryCatchWrite',
    },
    {
      loc: loyaltyLoginButton,
      action: 'tryCatchClick',
    },
    { action: 'screenshot' },
  ];
  checkoutButton = [
    {
      loc: checkoutButtonId,
      action: 'click',
    },
    {
      loc: checkoutButtonId2,
      action: 'tryCatchClick',
    },
    { action: 'screenshot' },
  ];
  samplePage = [
    {
      loc: continueSample1,
      action: 'tryCatchClick',
    },
    {
      loc: continueSample2,
      action: 'tryCatchClick',
    },
  ];

  guestuserLink = [
    {
      loc: mobGuestUserLink,
      action: 'tryCatchClick',
    },
    {
      loc: guestUserLink,
      action: 'tryCatchClick',
    },
  ];
  guestUserDetails = [
    {
      loc: guestUserId,
      data: newEmailId,
      action: 'write',
    },
    {
      loc: continueAsGuest,
      action: 'click',
    },
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

async function addProductToBag() {
  if (javaAlertPopup !== '') {
    t.alert(javaAlertPopup, async () => await t.accept());
  }
  let AddtoBagExist = 0;
  for (let i = 0; i < 2; i++) {
    if (await (await t.$(addToBagSPP)).exists(pollingTime, timeOut)) {
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
  for (let i = 0; i < 3; i++) {
    if (await (await t.$(cartcountValue)).exists(timeOut, pollingTime)) {
      cartcount = await (await t.$(cartcountValue)).text();
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
      'The shopping cart value is 0, so clicking the bag icon and navigating to the shopping cart page.'
    );
    await t.evaluate(
      await t.$(bagIcon, { waitForEvents: ['loadEventFired'] }),
      (ele) => ele.click()
    );
  }
}

async function goToProdcatAndBrowseToSPPLoyalty() {
  for (let i = 0; i < skuIds.length; i++) {
    await t.goto(
      siteDefinition.executionContext.adminUrl + prodcatUrl + skuIds[i],
      {
        waitForEvents: ['DOMContentLoaded'],
      }
    );
    const isShoppableValue = await (await t.$(isShoppable)).text();
    const isDisplayableValue = await (await t.$(isDisplayable)).text();
    if (isShoppableValue === '1' && isDisplayableValue !== '0') {
      gauge.message(
        'The Product with SKU ID - ' +
        skuIds[i] +
        ' is available and proceeding to add to Cart'
      );
      if (await (await t.$(productUrl)).exists(timeOut, pollingTime)) {
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
}

async function randomPopupclose() {
  for (let i = 0; i < randomPopup.length; i++) {
    await Gen.PopUpClose(randomPopup[i]);
  }
}

async function addProductToBagInSPPLoyalty() {
  await addProductToBag();
}

async function navigateToCartPageLoyalty() {
  if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
    await clickOnCartOverlay(clickCartpageLink);
  } else {
    await clickOnCartOverlay(clickCartpageLinkMob);
  }
}

async function enterCreditDetailsLoyalty() {
  if (creditCardnumber !== '') {
    if (!(await (await t.$(creditCardnumber)).exists(timeOut, ccTime))) {
      await t.reload();
    }
    await t.waitFor(await t.$(creditCardnumber), ccTime);
    if (await (await t.$(creditCardnumber)).exists()) {
      assert(true);
      await t.evaluate(await t.$(creditCardnumber), (ele) => ele.focus(), {
        delay: 500,
      });
      await t.write(CommonData.CREDITCARD, t.into(await t.$(creditCardnumber)));
      if (cvvFieldId !== '') {
        await t.evaluate(await t.$(cvvFieldId), (ele) => {
          ele.focus();
          ele.click(), { waitForEvents: ['loadEventFired'] };
        });
        await t.write(CommonData.CVV, t.into(await t.$(cvvFieldId)));
      }
      // All except JM-US, JM-CA, SB-US, SB-CA, OR-US and LS-US
      if (pcMonthYear !== '') {
        await t.evaluate(await t.$(pcMonthYear), (ele) => {
          ele.focus();
          ele.click();
        });
        await t.write(CommonData.PCCVVMONTH, t.into(await t.$(pcMonthYear)));
      }
      if (enterCcName !== '') {
        try {
          await t.write(CommonData.CCNAME, t.into(await t.$(enterCcName)));
        } catch (e) {
          gauge.message(
            'Credit card holder name not displayed and hence this step is skipped'
          );
        }
      }
    }
  } else {
    gauge.message("The Credit card fields doesn't exist!");
    assert(false);
  }
  gauge.screenshot();
}

async function clickOnPlaceOrderLoyalty() {
  if (placeOrder !== '') {
    /** Click On Place order is applicable for few Brand/Locale/platform(PC/MOB) */
    await t.evaluate(await t.$(placeOrder), (ele) => {
      ele.focus();
      ele.click(), { waitForEvents: ['loadEventFired'] };
    });

    /* gauge.message('some time unable to navigate order cofirm page so,clicking pay button one more time to place the order')*/
    for (let i = 0; i < 3; i++) {
      if (await (await t.$(orderConfirmationMsgid)).exists()) {
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

async function placeOrderValidationLoyalty() {
  if (placeOrderValidation !== '') {
    if (await (await t.$(orderConfirmationMsgid)).exists()) {
      assert(true);
      const confirmurl = await t.currentURL();
      const GetOrderNumber = await (await t.$(orderConfirmationMsgid)).text();
      assert(confirmurl.includes(placeOrderValidation));
      gauge.message('Order placed successfully');
      gauge.message(GetOrderNumber);
      gauge.screenshot();
    } else {
      gauge.message('Order not placed');
      gauge.screenshot();
      assert(false);
    }
  }
}

async function lyPointOrdConfPg() {
  if (lPntOrConPg !== '') {
    lpntVarr = await (await t.$(lPntOrConPg)).text();
    lpntConfPg = lpntVarr.replace(/\D/g, '');
    lpntConfPg = parseInt(lpntConfPg, 10);
    console.log('loyalty points in confirmation page ', lpntConfPg);
    if (lpntConfPg === lPointsCal) {
      assert(matchCondition);
      gauge.message(messages.ordConPgPntCalSuccess);
    } else {
      assert(!matchCondition, messages.ordConPgPntCalFail);
    }
    await t.evaluate(await t.$(orderConfirmationMsgid), (ele) => ele.click(), {
      waitForEvents: ['DOMContentLoaded'],
    });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function lyPointLandingPg() {
  if (loyPntLandPg !== '') {
    lpntLandStr = await (await t.$(loyPntLandPg)).text();
    // lpntLandPg = lpntLandStr.replace(/\D/g, '');
    lpntLandPg = lpntLandStr.replace(',', '');
    lpntLandPg = parseInt(lpntLandPg, 10);
    totalPnt = Math.ceil(totalPnt);
    if (lpntLandPg === totalPnt) {
      assert(matchCondition);
      gauge.message(messages.loyLandPgPntCalSuccess);
    } else {
      assert(!matchCondition, messages.loyLandPgPntCalFail);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function removingPopupAfterPlacingOrderLoyalty() {
  if (orderPagepopupClose !== '') {
    await (await t.$(orderPagepopupClose)).exists(timeOut, pollingTime1);
    try {
      await t.evaluate(t.$(orderPagepopupClose), (ele) => {
        ele.focus();
        ele.click();
      });

      /** orderpage Popup Close is applicable for few Brand/Locale/platform(PC) */
    } catch (e) {
      gauge.message(
        'Orderpage Popup is not displayed and hence this step is skipped'
      );
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function continueMobilesamplepage1Loyalty() {
  if (mobContinueSample1 !== '') {
    /** Click On MOB Sample Page1 Continue Button is applicable for few Brand/Locale/platform(MOB) */
    try {
      await t.evaluate(await t.$(mobContinueSample1), (ele) => {
        ele.focus();
        ele.click();
      });
      gauge.screenshot();
    } catch (e) {
      gauge.message('There is no sample page1 and hence this step is skipped');
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function continueMobilesamplepage2Loyalty() {
  if (mobContinueSample2 !== '') {
    /** Click On MOB Sample Page2 Continue Button is applicable for few Brand/Locale/platform(MOB) */
    try {
      await t.evaluate(await t.$(mobContinueSample2), (ele) => {
        ele.focus();
        ele.click();
      });
    } catch (e) {
      gauge.message('There is no sample page2 and hence this step is skipped');
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function mobCheckoutViewcartLoyalty() {
  if (mobCheckoutViewcart !== '') {
    /** MOB checkout viewcart is applicable for few Brand/Locale/platform(MOB) */
    try {
      await t.evaluate(await t.$(mobCheckoutViewcart), (ele) => {
        ele.focus();
        ele.click();
      });
      gauge.screenshot();
    } catch (e) {
      gauge.message(
        'MOB CHECKOUT VIEWCART is not displayed and hence this step is skipped'
      );
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function mobCheckoutOverlayLoyalty() {
  if (mobCheckoutCreditcard !== '') {
    /** MOB checkout overlay is applicable for few Brand/Locale/platform(MOB) */
    try {
      await t.evaluate(await t.$(mobCheckoutCreditcard), (ele) => {
        ele.focus();
        ele.click();
      });

      gauge.screenshot();
    } catch (e) {
      gauge.message(
        'MOB checkout overlay is not displayed and hence this step is skipped'
      );
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

/* Loyalty */

async function clickOnAccountProfileLoyalty() {
  if (accountProfile !== '') {
    try {
      await t.evaluate(await t.$(accountProfile), (ele) => {
        ele.focus();
        ele.click();
      });
      gauge.screenshot();
    } catch (e) {
      gauge.message(
        'sample page1 button is not displayed and hence this step is skipped'
      );
      // await t.evaluate(await t.$(accountProfile), (ele) => ele.click());
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

// opti-fuction -start

async function loyaltyRegTnC() {
  if (loyaltyRegisterButton !== '') {
    await Gen.TryCatchClickAction(loyaltyRegisterationTerms);
    await Gen.TryCatchClickAction(accRegTerms);
    await Gen.ClickAction(loyaltyRegisterButton);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
  gauge.screenshot();
}

async function continueShipping() {
  if (continueCheckoutBtn !== '') {
    await Gen.TryCatchClickAction(continueCheckoutBtn);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
  gauge.screenshot();
}

async function accRegTnC() {
  if (loyaltyRegisterationTerms !== '') {
    await Gen.TryCatchClickAction(accRegTerms);
    await Gen.ClickAction(loyaltyRegisterButton);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
  gauge.screenshot();
}

async function displayCurrentLoyStatus() {
  if (loyaltyPointsIndexpage !== '') {
    curPoints1 = await (await t.$(loyaltyPointsIndexpage)).text();
    curTierStatus = await (await t.$(tier1StatusId)).text();
    gauge.message(curPoints1);
    gauge.message(curTierStatus);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
  gauge.screenshot();
}

async function displayCurrentLoyStatus1() {
  if (loyaltyPointsIndexpage !== '') {
    curPoints1 = await (await t.$(loyaltyPointsIndexpage)).text();
    gauge.message(curPoints);
    curPoints1 = curPoints1.replace(',', '');
    curPoints = parseInt(curPoints1);
    totalPnt = curPoints;
    gauge.message(curPoints);
    if (curPoints < CommonData.TIER2POINT) {
      curTierStatus = await (await t.$(tier1StatusId)).text();
    } else if (
      curPoints >= CommonData.TIER2POINT &&
      curPoints < CommonData.TIER3POINT
    ) {
      curTierStatus = await (await t.$(tier2StatusId)).text();
    } else {
      curTierStatus = await (await t.$(tier3StatusId)).text();
    }
    gauge.message(curPoints1);
    gauge.message(curTierStatus);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
  gauge.screenshot();
}

async function clickOnRewardSectionLoyalty() {
  if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
    await Gen.TryCatchClickAction(rewardSection);
  } else if (
    siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE'
  ) {
    await Gen.TryCatchClickAction(mobRewardSection);
  }
  else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function verifyLoyaltySection() {
  if (loyaltySection !== '') {
    assert(
      await (await t.$(loyaltySection)).exists(pollingTime, timeOut),
      'Loyalty Section not displayed in Index page'
    );
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

// opti-fuction -end

async function clickonRegisterGnavLinkLoyalty() {
  if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
    await Gen.TryCatchClickAction(registerGnav);
    await Gen.TryCatchClickAction(loyaltyRegisterNow);
    await randomPopupclose();
    await Gen.ElementAction(newLoyUserRegDetails);
    gauge.message('New User Email ID: ' + newEmailId);
  } else if (
    siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE'
  ) {
    await Gen.TryCatchClickAction(mobLoyaltyHamburger);
    await Gen.TryCatchClickAction(registerGnavMob);
    await Gen.TryCatchClickAction(loyaltyRegisterNowMob);
    await randomPopupclose();
    await Gen.ElementAction(newLoyUserRegDetails);
    gauge.message('New User Email ID: ' + newEmailId);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
  gauge.screenshot();
}

async function returnUserSignin() {
  if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
    await Gen.TryCatchClickAction(registerGnav);
    await randomPopupclose();
    await Gen.ElementAction(returnUserDetails);
  } else if (
    siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE'
  ) {
    await Gen.TryCatchClickAction(mobLoyaltyHamburger);
    await Gen.TryCatchClickAction(registerGnavMob);
    await randomPopupclose();
    await Gen.ElementAction(returnUserDetails);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
  gauge.screenshot();
}

async function goToRewardsLoyalty() {
  if (rewards !== '') {
    await Gen.TryCatchClickAction(rewards);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}
async function redeemWelcomeOffer() {
  if (welcomeOffRedeemBtn !== '') {
    await Gen.TryCatchClickAction(loyMenu);
    await t.waitFor(await t.$(welcomeOffRedeemBtn), timeOut);
    await t.evaluate(await t.$(welcomeOffRedeemBtn), (ele) => ele.click());
    gauge.screenshot();
    if (validOfferMsg !== '') {
      expectedValidOfferMsg = await (await t.$(validOfferMsg)).text();
      if (
        expectedValidOfferMsg
          .toUpperCase()
          .search(CommonData.VALIDOFFERMSG.toUpperCase()) !== -1
      ) {
        assert(matchCondition, messages.welcomeofferapplied);
      } else {
        assert(!matchCondition, messages.welcomeoffernotapplied);
      }
    }
    await Gen.TryCatchClickAction(gnavCart);
    await Gen.TryCatchClickAction(gnavCheckoutBtn);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function redeemReward() {
  if (rewardRedeemBtn !== '') {
    await Gen.TryCatchClickAction(loyMenu);
    await t.evaluate(await t.$(rewardRedeemBtn), (ele) => ele.scrollIntoView());
    await Gen.ClickAction(rewardRedeemBtn);
    let redeemPntStr = await (await t.$(redeemPointTxt)).text();
    redeemPntStr = redeemPntStr.replace(/\D/g, '');
    redeemPoint = parseInt(redeemPntStr, 10);
    console.log('redeemed points', redeemPoint);
    gauge.screenshot();
    if (rewValidOfferMsg !== '') {
      expectedValidOfferMsg = await (await t.$(rewValidOfferMsg)).text();
      if (
        expectedValidOfferMsg
          .toUpperCase()
          .search(CommonData.REWARDSUCCMSG.toUpperCase()) !== -1
      ) {
        assert(matchCondition, messages.rewardofferapplied);
      } else {
        assert(!matchCondition, messages.rewardoffernotapplied);
      }
    }
    await Gen.TryCatchClickAction(gnavCart);
    await Gen.TryCatchClickAction(gnavCheckoutBtn);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function redeemBirthdayOffer() {
  if (birthdayOffRedeemBtn !== '') {
    await Gen.ClickAction(birthdayOffRedeemBtn);
    console.log('Birthday Redeem button clicked');
    gauge.screenshot();
    if (validOfferMsg !== '') {
      expectedValidOfferMsg = await (await t.$(validOfferMsg)).text();
      if (
        expectedValidOfferMsg
          .toUpperCase()
          .search(CommonData.VALIDOFFERMSG.toUpperCase()) !== -1
      ) {
        assert(matchCondition, messages.birthdayofferapplied);
      } else {
        assert(!matchCondition, messages.birthdayoffernotapplied);
      }
    }
    await Gen.TryCatchClickAction(gnavCart);
    await Gen.TryCatchClickAction(gnavCheckoutBtn);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function verifyTestOffers() {
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
      testPntTot = parseFloat(purAmnt);
      gauge.message(CommonData.TESTOFFER3, 'offer applied');
    } else {
      gauge.message('Test offers not applied');
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function verifyWelcomeOffer() {
  if (appliedOffersId !== '') {
    if (
      siteDefinition.executionContext.environment.toUpperCase() === 'PROD' ||
      siteDefinition.executionContext.environment.toUpperCase() === 'PREPROD'
    ) {
      appliedOffTxt = await (await t.$(appliedOffersId1)).text();
    } else {
      appliedOffTxt = await (await t.$(appliedOffersId)).text();
    }
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
}

async function verifyRewardOffer() {
  if (appliedOffersId !== '') {
    if (
      siteDefinition.executionContext.environment.toUpperCase() === 'PROD' ||
      siteDefinition.executionContext.environment.toUpperCase() === 'PREPROD'
    ) {
      appliedOffTxt = await (await t.$(appliedOffersId1)).text();
    } else {
      appliedOffTxt = await (await t.$(appliedOffersId)).text();
    }
    if (appliedOffTxt.includes(CommonData.REWARDOFFER)) {
      offerAppliedFlag = true;
      appOffer = CommonData.REWARDOFFER;
      totalPnt = totalPnt - redeemPoint;
      assert(matchCondition);
      gauge.message('Reward offer applied');
      gauge.screenshot();
    } else {
      assert(!matchCondition, 'Reward offer not applied');
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function verifyBirthdayOffer() {
  if (appliedOffersId !== '') {
    if (
      siteDefinition.executionContext.environment.toUpperCase() === 'PROD' ||
      siteDefinition.executionContext.environment.toUpperCase() === 'PREPROD'
    ) {
      appliedOffTxt = await (await t.$(appliedOffersId1)).text();
    } else {
      appliedOffTxt = await (await t.$(appliedOffersId)).text();
    }
    if (appliedOffTxt.includes(CommonData.BIRTHDAYOFFER1)) {
      offerAppliedFlag = true;
      appOffer = CommonData.BIRTHDAYOFFER1;
      assert(matchCondition);
      gauge.message('Birthday offer applied');
      gauge.screenshot();
    } else {
      assert(!matchCondition, 'Birthday offer not applied');
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function verifyLpntViewCartPage() {
  if (lPntVcart !== '') {
    gauge.screenshot();
    lPointStr = await (await t.$(lPntVcart)).text();
    lPoints = lPointStr.replace(/\D/g, '');
    lPoints = parseInt(lPoints, 10);
    lPointsCal = lpointCalculation();
    lPointsCal = Math.ceil(lPointsCal);
    console.log('loyalty points calc', lPointsCal);
    avlPoints = pointcalculation();
    console.log('Available points ', avlPoints);
    console.log('loyalty points total', totalPnt);
    gauge.message(messages.lpointEarned + lPointsCal);
    if (lPoints === lPointsCal) {
      assert(matchCondition);
      gauge.message(messages.lpointCalSuccess);
    } else {
      assert(!matchCondition, messages.lpointCalFail);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function verifyLpntCheckoutPage() {
  if (lPntChkout !== '') {
    gauge.screenshot();
    lPointStr = await (await t.$(lPntChkout)).text();
    lPoints = lPointStr.replace(/\D/g, '');
    lPoints = parseInt(lPoints, 10);
    console.log('loyalty points in view cart', lPoints);
    lPointsCal = lpointCalculation(purAmnt);
    lPointsCal = Math.ceil(lPointsCal);
    console.log('loyalty points calc', lPointsCal);
    avlPoints = pointcalculation(lPointsCal);
    console.log('Available points ', avlPoints);
    console.log('loyalty points total', totalPnt);
    gauge.message(messages.lpointEarned + lPointsCal);
    if (lPoints === lPointsCal) {
      assert(matchCondition);
      gauge.message(messages.lpointCalSuccess);
    } else {
      assert(!matchCondition, messages.lpointCalFail);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function navLoyaltyIndexPg() {
  if (loyIndexUrl !== '') {
    await t.goto(siteDefinition.executionContext.url + loyIndexUrl, {
      waitForEvents: ['DOMContentLoaded'],
    });
    await t.waitFor(await t.$(benefitSection), waitForLtySec);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function navLoyAdminTool() {
  if (loyAdminUrl !== '') {
    /* gauge.message('loy admin pg running...');
    await t.goto(siteDefinition.executionContext.url + loyAdminUrl, {
      waitForEvents: ['DOMContentLoaded'],
    });
    await t.waitFor(await t.$(benefitSection), waitForLtySec); */
    await t.evaluate(await t.$(loyAdminUrl), (ele) => ele.click(), {
      waitForEvents: ['DOMContentLoaded'],
    });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function navAdminTool() {
  if (adminToolUrl !== '') {
    await t.goto(siteDefinition.executionContext.url + adminToolUrl, {
      waitForEvents: ['DOMContentLoaded'],
    });
    await t.write(adminDBUser, t.into(await t.$(admintoolUsername)));
    await t.write(adminDBPasswd, t.into(await t.$(admintoolPwd)));
    await t.evaluate(await t.$(admintoolSubmit), (ele) => ele.click(), {
      waitForEvents: ['DOMContentLoaded'],
    });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function getTranscId() {
  tranId = await t.currentURL();
  gauge.screenshot();
  tranId = tranId.substring(tranId.lastIndexOf('=') + 1);
  console.log('transcation id ', tranId);
}

async function clickRunUpgrade() {
  if (upgradeProcess !== '') {
    await t.evaluate(await t.$(upgradeProcess), (ele) => ele.click());
    console.log('upgrade process button clicked');
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function setOrderShipped() {
  if (transRowId !== '') {
    gauge.screenshot();
    numRows = (await (await t.$(transRowId)).elements()).length;
    for (let i = 2; i <= numRows; i++) {
      transidTxt = await (
        await t.$(transId1 + '(' + i + ')' + transId2)
      ).text();
      console.log('Transaction number in admin tool', transidTxt);
      if (transidTxt.includes(tranId)) {
        tranIdFlag = 1;
        await t.evaluate(await t.$(setOrdershipBtn), (ele) => ele.click());
        console.log('set to order shipped button clicked');
        // await waitFor(3000)
        await t.evaluate(await t.$(upgradeProcess), (ele) => ele.click());
        console.log('upgrade process button clicked');
        break;
      }
      if (tranIdFlag === 0) {
        console.log('Transaction id not in list of Loyalt transaction tool');
      }
    }
  } else {
    gauge.message('This step is not applicable for this Brand/Locale');
  }
}

async function getPurchaseamt() {
  if (purchaseAmnt !== '') {
    purAmntStr = await (await t.$(purchaseAmnt)).text();
    purAmntStr = purAmntStr.substring(
      purAmntStr.lastIndexOf(CommonData.curSymbol) + 1
    );
    console.log('Purchase Amount ', purAmntStr);
    purAmnt = parseFloat(purAmntStr, 10);
    if (discountAmnt !== '') {
      discountAmntStr = await (await t.$(discountAmnt)).text();
      discountAmntValue = discountAmntStr.replace(/[^0-9.]/g, '');
      discountPrice = parseFloat(discountAmntValue, 10);
      purAmnt = purAmnt - discountPrice;
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function navViewcartPg() {
  if (viewCartPageUrl !== '') {
    await t.goto(siteDefinition.executionContext.url + viewCartPageUrl, {
      waitForEvents: ['DOMContentLoaded'],
    });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function navOfferManager() {
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
}

/** Spec Optimization steps for loyalty */

step('NALOYALTY Initialize Helix', async function () {
  // Initialize the selectors from DB
  await initFrameworkSettings();
});

step('NALOYALTY Set cookies,rev tag,test order flag', async function () {
  await mobileDeviceEmulationLoyalty();
  await setprerequisitesLoyalty();
  await setRevisionTagLoyalty();
  await setVal();
});

step(
  'NALOYALTY Verify that the user is able to add products to the cart successfully',
  async function () {
    await goToProdcatAndBrowseToSPPLoyalty();
    await addProductToBagInSPPLoyalty();
    await navigateToCartPageLoyalty();
  }
);

step(
  'NALOYALTY Verify that the user is able to navigate to the sign-in page and enter details',
  async function () {
    await randomPopupclose();
    await clickonRegisterGnavLinkLoyalty();
  }
);

step(
  'NALOYALTY Verify the user is able to login as return user',
  async function () {
    await randomPopupclose();
    await returnUserSignin();
  }
);

step(
  'NALOYALTY Click on Loyalty terms and conditions and complete registration',
  async function () {
    await loyaltyRegTnC();
    await randomPopupclose();
  }
);

step(
  'NALOYALTY Click on Account terms and conditions and complete registration',
  async function () {
    await accRegTnC();
    await randomPopupclose();
  }
);

step(
  'NALOYALTY Verify that the user is able to navigate to loyalty section in my account',
  async function () {
    await clickOnRewardSectionLoyalty();
    await verifyLoyaltySection();
    await displayCurrentLoyStatus();
  }
);

step(
  'NALOYALTY Verify that the user is able to enroll loyalty in Marketing page',
  async function () {
    await Gen.ElementAction(enrollMarktPgDetails);
  }
);

step(
  'NALOYALTY Verify that the user is able to proceed to Sign in successfully',
  async function () {
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      await Gen.ElementAction(checkoutButton);
      await Gen.ElementAction(samplePage);
      await Gen.ElementAction(guestuserLink);
      await Gen.ElementAction(guestUserDetails);
    } else if (
      siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE'
    ) {
      await mobCheckoutViewcartLoyalty();
      await mobCheckoutOverlayLoyalty();
      await continueMobilesamplepage1Loyalty();
      await continueMobilesamplepage2Loyalty();
      await Gen.ElementAction(guestuserLink);
      await Gen.ElementAction(guestUserDetails);
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step(
  'NALOYALTY Verify that the user is able to proceed to Sign in successfully after creating account',
  async function () {
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      await Gen.ElementAction(checkoutButton);
      await Gen.ElementAction(samplePage);
    } else if (
      siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE'
    ) {
      await mobCheckoutViewcartLoyalty();
      await mobCheckoutOverlayLoyalty();
      await continueMobilesamplepage1Loyalty();
      await continueMobilesamplepage2Loyalty();
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step(
  'NALOYALTY Verify that the user is able to navigate to rewards and loyalty section in account page',
  async function () {
    await goToRewardsLoyalty();
    await verifyLoyaltySection();
    await displayCurrentLoyStatus();
  }
);

step(
  'NALOYALTY Verify that the user is able to navigate to loyalty index page and display tier status',
  async function () {
    await goToRewardsLoyalty();
    await verifyLoyaltySection();
    await displayCurrentLoyStatus1();
  }
);

step(
  'NALOYALTY Verify that the user is able to enter the shipping details successfully',
  async function () {
    await Gen.ElementAction(shippingDetails);
  }
);

step(
  'NALOYALTY Verify that the user is able to continue shipping details successfully',
  async function () {
    await continueShipping();
  }
);

step(
  'NALOYALTY Verify that the user is able to update profile successfully',
  async function () {
    await Gen.ElementAction(personalProfileDetails);
  }
);

step(
  'NALOYALTY Verify that the user is able to select the payment method successfully',
  async function () {
    await enterCreditDetailsLoyalty();
  }
);

step(
  'NALOYALTY Verify that the user is able to place the order successfully',
  async function () {
    await clickOnPlaceOrderLoyalty();
    await placeOrderValidationLoyalty();
    await removingPopupAfterPlacingOrderLoyalty();
  }
);

step(
  'NALOYALTY verify loyalty point in Order confirmation page',
  async function () {
    await lyPointOrdConfPg();
  }
);

step(
  'NALOYALTY verify loyalty point in loyalty landing page',
  async function () {
    await navLoyaltyIndexPg();
    await lyPointLandingPg();
  }
);

step(
  'NALOYALTY Get Transaction id and navigate to admin tool',
  async function () {
    await getTranscId();
    await navAdminTool();
  }
);

step(
  'NALOYALTY Set order to shipped using loyalty admin tool',
  async function () {
    await navLoyAdminTool();
    await setOrderShipped();
    await clickRunUpgrade();
  }
);

step(
  'NALOYALTY Verify that the user is able to enroll in loyalty from order confirmation page',
  async function () {
    await randomPopupclose();
    await Gen.ElementAction(enrollOrdConfPgDetails);
  }
);

step(
  'NALOYALTY Verify that the user is able to navigate to rewards and display tier points',
  async function () {
    await clickOnAccountProfileLoyalty();
    await clickOnRewardSectionLoyalty();
    await displayCurrentLoyStatus();
  }
);

step(
  'NALOYALTY Verify that the user is able to navigate loyalty landing page and redeem welcome offer',
  async function () {
    await navLoyaltyIndexPg();
    await redeemWelcomeOffer();
    await getPurchaseamt();
  }
);

step(
  'NALOYALTY Verify that the user is able to navigate loyalty landing page and redeem Point based reward',
  async function () {
    await navLoyaltyIndexPg();
    await redeemReward();
    await getPurchaseamt();
  }
);

step(
  'NALOYALTY navigate to offer manager and verify welcome offer',
  async function () {
    await navOfferManager();
    await verifyTestOffers();
    await verifyWelcomeOffer();
    await navViewcartPg();
    // await verifyLpntViewCartPage();
  }
);

step(
  'NALOYALTY navigate to offer manager and verify reward offer',
  async function () {
    await navOfferManager();
    await verifyTestOffers();
    await verifyRewardOffer();
    await navViewcartPg();
  }
);

step('NALOYALTY verify loyalty point in view cart page', async function () {
  await verifyLpntViewCartPage();
});

step('NALOYALTY verify loyalty point in checkout page', async function () {
  await verifyLpntCheckoutPage();
});

step(
  'NALOYALTY Verify that the user is able to navigate loyalty landing page and redeem birthday offer',
  async function () {
    await navLoyaltyIndexPg();
    await redeemBirthdayOffer();
    await getPurchaseamt();
  }
);

step(
  'NALOYALTY navigate to offer manager and verify birthday offer',
  async function () {
    await navOfferManager();
    await verifyTestOffers();
    await verifyBirthdayOffer();
    await navViewcartPg();
    await verifyLpntViewCartPage();
  }
);
