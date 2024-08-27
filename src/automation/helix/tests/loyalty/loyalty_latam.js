var t = require('taiko');
let siteDefinition, source, NullDataException;
const Helper = require('../../helpers/helper');
const Util = require('../../../../utilities/util');

let tags = '';
var skuIds = [];
let notAvailableProductsCount = 0;
var prodCatUrl = '';
var isShoppable = '';
var proCatUrl = '';
var isShoppable1 = '';
var isDisplayable = '';
var productUrl = '';
var noDisplayableProductError = '';
var javaAlertPopUp = '';
var addToBag = '';
var addToCartBtn = '';
var popUpId = '';
var emulationDevice = '';
var checkoutButtonId = '';
var sampleContinue = '';
var sampleContinueMob = '';
var popUp = '';
var emailPopUp = '';
var cookieRejectBtn = '';
var samplePageContinue = '';
var samplePageContinueMob = '';
var guestUserId = '';
var termsAndConditions = '';
var guestUserContinueBtn = '';
var guestUserSubmitMob = '';
var deliveryMethodId = '';
var titleId = '';
var cartCheckoutBtn = '';
var titleDropDownMob = '';
var firstNameId = '';
var lastNameId = '';
var addressId = '';
var streetId = '';
var postalCodeId = '';
var phoneId = '';
var paymentOptionId = '';
var paymentOptionTnC = '';
var shippingAddressContinue = '';
var createAccountContinue = '';
var paymentMethodRadioButton = '';
var paymentMethodRadioButtonMob = '';
var payButtonId = '';
var confirmPayButton = '';
var deliveryMethodDropdown = '';
var shippingContinueMob = '';
var newUserRegisterNowMob = '';
var completeTheOrder = '';
var waitForText = '';
var continueCheckout = '';
var completeTheOrderMob = '';
var termsAndConditionsForAge = '';
var loginId1 = '';
var mobLoginId = '';
var acRegisterNow = '';
var acRegisterNow1 = '';
var acRegisterNowMob = '';
var acRegisterFirstName = '';
var loyaltyAccFullName = '';
var loyaltyPwd = '';
var acLoyalty = '';
var acRegisterNowMob1 = '';
var acRegisterLastName = '';
var acRegisterEmailId = '';
var acRegisterEmail = '';
var acRegisterPwd = '';
var acRegisterPhone = '';
var acRegisterYear = '';
var acRegisterMonth = '';
var acRegisterDay = '';
var acRegisterTerms = '';
var chxBoxRegisterTerms = '';
var acLoyRegisterTerms = '';
var loyRegisterTerms = '';
var acEmailTerms = '';
var acRegisterCreateAccBtn = '';
var acRegisterCreateAccBtnMob = '';
var registerBtnMob = '';
var acRegisterTitle = '';
var profilePopupClose = '';
var loyaltySection = '';
var lPointsIndexPage = '';
var currPoints1 = '';
var tier1StatusId = '';
var currTierStatus = '';
var joinLoyaltyFooter = '';
var joinLoyaltyFooterMob = '';
var joinNowMarktPage = '';
var loginBtn = '';
var loyaltyJoinConPage = '';
var rewardsSection = '';
var orderNum = '';
let orderNumber = '';
var rewardsSectionMob = '';
var accountIndexUrl = '';
var offerManagerUrl = '';
var viewCartPageUrl = '';
var appliedOffersId = '';
var appliedOffersId1 = '';
let appliedOfferTxt = '';
let testPntTotal = 0;
let percentPnt = 0;
var birthDateProfile = '';
var birthYearProfile = '';
var profileUpdate = '';
var profileUpdateMob = '';
var birthMonthProfile = '';
var loyaltyOfferPanel = '';
var fNameProfile = '';
var lNameProfile = '';
var accountInfo = '';
var loyaltySubmit = '';
var purchaseAmnt = '';
var purAmntStr = '';
var lPointVCart = '';
let lPointStr = '';
let lPoints = 0;
let lPointsCalculated = 0;
var lPointsOnConPage = '';
let lPntConPage = 0;
var gNavCartButton = '';
var gNavCartButtonMob = '';
var accountInfoMob = '';
var leftSideMenu = '';
var editProfile = '';
var expandButtonViewCart = '';
var titleSettings = '';
var welcomeRewardRedeemBtn = '';
var welcomeRewardRedeemBtnFooter = '';
var birthdRewardRedeemBtn = '';
var purchaseAmntMob = '';
var purAmntMobStr = '';
var joinNowMarktPageMob = '';
var cpfId = '';
var cpfIdNum = '';
var checkoutRegisterName = '';
var checkoutRegisterEmailId = '';
var checkoutRegisterPWD = '';
var cpfIdCheckout = '';
var checkoutRegisterTerms = '';
var checkoutRegisterCreateAcBtn = '';
var registerEmailId = '';
var joinNow = '';
var purchaseAmntViewCart = '';
let purAmnt = 0;
let avlPoints = 0;
var joinNowBannerAccountPage = '';
var profilePreferencesPhone = '';
var bannerLylRegisterTerms = '';
let priceAfterDiscount = 0;
let purchAmntMobOrPC = 0;
var shippingFullName = '';
var streetNumIDLocator = '';
var paymentMethodRadioButton1 = '';
var xBtn = '';
var femaleGenderRadio = '';
var timeoutSetting = '';
let purAmntMob = 0;
let avlPointsMob = 0;
let totPurAmnt = 0;
let lPnt = 0;
let bDayProfile = 0;
let tier2pnts = 0;
let totalLoylPnt = 0;
let tierStr = '';
let earnPnt = 0;
var appliedOffer = '';
var offerAppliedFlag = '';
const retryInterval = 100;
const elementTimeOut = 30000;
const pauseMlSec = 3000;

const messages = {
  stepNotApplicable: 'This step is not applicable for this Brand/Locale',
  popUpDidNotApear: "pop-up did not appear / pop-up couldn't be handled",
  samplePageDidNotAppear: "Sample page didn't appear",
};

const matchCondition = true;

var assert = require('assert');

const Hengine = require('../../../../datainterface/providers/hengine');

var CommonData = {};
var feature = 'Loyalty';

function reinitialize() {
  skuIds = [
    CommonData.skuId1,
    CommonData.skuId2,
    CommonData.skuId3,
    CommonData.skuId4,
    CommonData.skuId5,
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

let newEmailId = '';
function makeEmailBrazil() {
  const chars = 'bchibcdefgddffwwwjklqmnopqrstuvwxyz1234567890';
  let string = '';
  for (let ii = 0; ii < 10; ii++) {
    string += chars[Math.floor(Math.random() * chars.length)];
  }
  if (makeEmail) {
    return 'elcqalatam' + '+' + string + '@qa.com';
  } else {
    return 'elcqalatam' + '+' + string + '@test.com';
  }
}

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

// Random mobile number for loyalty registration

function randomMobNumber() {
  const min = 10000000;
  const max = 90000000;
  const mobNum = Math.floor(Math.random() * min) + max;
  return mobNum;
}

// Random CPF number generation method, exclusively used for Brazil sites
const createArray = (total, numero) =>
  Array.from(Array(total), () => numberRandom(numero));
const numberRandom = (number) => Math.round(Math.random() * number);
const mod = (dividendo, divisor) =>
  Math.round(dividendo - Math.floor(dividendo / divisor) * divisor);

function cpf() {
  const totalArray = 9;
  const n = 9;
  const [n1, n2, n3, n4, n5, n6, n7, n8, n9] = createArray(totalArray, n);
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
// Random birthday date
function randomBDay() {
  const bUpper = 30;
  const bLower = 1;
  const randomBirthDay =
    Math.floor(Math.random() * (bUpper - bLower + 1)) + bLower;
  return randomBirthDay;
}

function pointCalculation(purAmnt) {
  totPurAmnt = totPurAmnt + purAmnt;
  return totPurAmnt;
}

function setVal() {
  totPurAmnt = 0;
  lPnt = 0;
  totalLoylPnt = 0;
  purAmnt = 0;
  avlPoints = 0;
  appliedOffer = '';
  tierStr = CommonData.TIER1STATUS;
  earnPnt = CommonData.EARNPNT1;
  console.log('purchase amount' + purAmnt);
  console.log('Aval points' + avlPoints);
  console.log('Total pnt' + totalLoylPnt);
  console.log('Tier status' + tierStr);
  console.log('earn pnt' + earnPnt);
}

function lPointCalculation(purAmnt) {
  if (tierStr.includes(CommonData.TIER2STATUS)) {
    earnPnt = CommonData.EARNPNT2;
  } else if (tierStr.includes(CommonData.TIER3STATUS)) {
    earnPnt = CommonData.EARNPNT3;
  }
  lPnt = Math.ceil(purAmnt * earnPnt);
  if (offerAppliedFlag) {
    console.log('Birthday point cal running...');
    console.log('Applied offer', appliedOffer);
    switch (appliedOffer) {
      case 'ly_birthday_double_points':
        bDayProfile = lPnt * CommonData.BDAYBONUS;
        lPnt = lPnt + bDayProfile;
        break;
      case 'ly_birthday_double_points_t1':
        bDayProfile = purAmnt * CommonData.BDAYBONUS;
        lPnt = bDayProfile;
        break;
      case 'ly_birthday_double_pt':
        bDayProfile = purAmnt * CommonData.BDAYBONUS;
        lPnt = bDayProfile;
        break;
      case 'ly_birthday_20off':
        bDayProfile = purAmnt * CommonData.BDAYBONUS;
        lPnt = lPnt + bDayProfile;
        break;
      case 'ly_welcome_pt':
        tier2pnts = purAmnt * CommonData.TIER2UPBONUS;
        lPnt = lPnt + tier2pnts;
        break;
      case 'ly_t2_upgrade_300pt':
        lPnt = purAmnt + 300;
        break;
      case 'ly_t3_upgrade_double_pt':
        lPnt = purAmnt * 2;
        break;
    }
  }
  lPnt = lPnt + testPntTotal;
  totalLoylPnt = totalLoylPnt + lPnt;
  return lPnt;
}

/** ****** BASE URL and ADM URL IS RECEIVED ******/

step('LATAMLOYALTY Initialize Helix', async function () {
  // Initialize the selectors from DB
  await initFrameworkSettings();
});

step('LATAMLOYALTY Mobile device emulation', async function () {
  await t.emulateDevice(emulationDevice);
  gauge.message(`Emulation device: ${emulationDevice}`);
});

step('LATAMLOYALTY Set revision tag', async function () {
  Helper.setRevisionTag(siteDefinition, t);
  await t.goto(siteDefinition.executionContext.url, {
    waitForEvents: ['loadEventFired'],
  });
});

step('LATAMLOYALTY Set cookies', async function () {
  await t.setConfig({ navigationTimeout: parseInt(timeoutSetting, 10) });
  await Helper.setWindowSize(Util.ScreenSizes['1040p'], t);
  await Helper.setWAFCookie(siteDefinition, t);
  await Helper.setAdroll(siteDefinition, t);
  await Helper.setAkamaiBypass(siteDefinition, t);
  await Helper.setApiEnv(siteDefinition, t);
  await Helper.setVarnishBypass(siteDefinition, t);
  await Helper.setShowErrorsCookie(siteDefinition, t);
  await Helper.setOtherCookies(siteDefinition, t);
});

step('LATAMLOYALTY Set test order flag', async function () {
  await Helper.setTestOrderCookie(siteDefinition, t);
});

step('LATAMLOYALTY Add Product to the cart', async function () {
  for (let i = 0; i <= skuIds.length; i++) {
    await t.goto(
      siteDefinition.executionContext.adminUrl + prodCatUrl + skuIds[i],
      {
        waitForEvents: ['DOMContentLoaded'],
      }
    );
    gauge.screenshot();
    const isShoppableValue = await (await t.$(isShoppable)).text();
    if (isShoppableValue === '1') {
      gauge.message(
        'The Product with SKU ID - ' +
          skuIds[i] +
          ' is available and proceeding to add to Cart'
      );
      const elements = await (await t.$(addToCartBtn)).elements();
      const attributePromises = elements.map((e) => {
        return t.evaluate(e, (elem) => {
          return elem.getAttribute('href');
        });
      });
      const viewCartUrl = await Promise.all(attributePromises);
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

step('LATAMLOYALTY Go to Prodcat and browse to SPP', async function () {
  for (let i = 0; i < skuIds.length; i++) {
    await t.goto(
      siteDefinition.executionContext.adminUrl + proCatUrl + skuIds[i],
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
      if (await (await t.$(productUrl)).exists(retryInterval, elementTimeOut)) {
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
    assert(
      !matchCondition,
      'None of the products are available for adding it to Cart'
    );
  }
});

step('LATAMLOYALTY Add product to Bag in SPP', async function () {
  if (javaAlertPopUp !== '') {
    t.alert(javaAlertPopUp, async () => await t.accept());
  }
  let addToBagExist = 0;
  for (let i = 0; i < 2; i++) {
    const addToBagLink = await t.$(addToBag);
    if (await addToBagLink.exists(retryInterval, elementTimeOut)) {
      if ((await addToBagLink.isDisabled()) !== true) {
        await t.evaluate(addToBagLink, (ele) => {
          ele.focus();
          ele.click();
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
      addToBagExist++;
    }
  }
  if (addToBagExist === 2) {
    assert(
      !matchCondition,
      'Add to bag does not load within expected time and reload the page.'
    );
  }
});

step('LATAMLOYALTY click continue checkout mob', async function () {
  if (checkoutButtonId !== '') {
    await t.evaluate(await t.$(checkoutButtonId), (ele) => {
      ele.focus();
      ele.click();
    });
    await t.waitFor(pauseMlSec);
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Cart Popup Close', async function () {
  if (popUpId !== '') {
    /** *** unexpected pop-up appear*******/
    try {
      await t.evaluate(
        await t.$(popUpId, { waitForNavigation: false }),
        (ele) => ele.click()
      );
    } catch (e) {
      gauge.message(messages.popUpDidNotApear);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'LATAMLOYALTY Click checkout btn and proceed to Sample/SignIn page',
  async function () {
    if (checkoutButtonId !== '') {
      if (tags[0].includes('CL') && tags[1].includes('BR')) {
        try {
          await t.evaluate(await t.$(checkoutButtonId), (ele) => {
            ele.focus();
            ele.click(), { waitForNavigation: false };
          });
        } catch (e) {
          gauge.message(messages.samplePageDidNotAppear);
        }
      } else {
        await t.evaluate(
          await t.$(checkoutButtonId, { waitForNavigation: false }),
          (ele) => ele.click()
        );
        gauge.screenshot();
      }
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step('LATAMLOYALTY Click cart checkout btn', async function () {
  if (cartCheckoutBtn !== '') {
    await t.evaluate(await t.$(cartCheckoutBtn), (ele) => {
      ele.focus();
      ele.click();
    });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'LATAMLOYALTY click checkout button mob and proceed to Sample/SignIn page',
  async function () {
    if (checkoutButtonId !== '') {
      if (tags[0].includes('CL') && tags[1].includes('BR')) {
        if (await (await t.$(checkoutButtonId)).isVisible()) {
          await t.waitFor(pauseMlSec);
          await t.evaluate(await t.$(checkoutButtonId), (ele) => {
            ele.focus();
            ele.click();
          });
        } else {
          await t.reload({ waitForEvents: ['loadEventFired'] });
          await t.waitFor(pauseMlSec);
        }
        await t.evaluate(await t.$(checkoutButtonId), (ele) => {
          ele.focus();
          ele.click();
        });
      } else {
        await t.evaluate(
          await t.$(checkoutButtonId, { waitForNavigation: false }),
          (ele) => ele.click()
        );
        gauge.screenshot();
      }
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step('LATAMLOYALTY Click sample continue button/link', async function () {
  if (sampleContinue !== '') {
    /** **** unexpected Sample page appear******/
    try {
      await t.evaluate(
        await t.$(sampleContinue, { waitForNavigation: false }),
        (ele) => ele.click()
      );
    } catch (e) {
      gauge.message(messages.samplePageDidNotAppear);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY click sample continue button/link mob', async function () {
  if (sampleContinueMob !== '') {
    /** **** unexpected Sample page appear******/
    try {
      await t.evaluate(await t.$(sampleContinueMob), (ele) => {
        ele.focus();
        ele.click();
      });
    } catch (e) {
      gauge.message('Sample is not available and hence skipped.');
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Signup close popUp', async function () {
  if (popUp !== '') {
    /** *** unexpected pop-up appear*******/
    try {
      await t.evaluate(await t.$(popUp), (ele) => {
        ele.focus();
        ele.click();
      });
    } catch (e) {
      gauge.message(messages.popUpDidNotApear);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Email Signup close popUp', async function () {
  if (popUp !== '') {
    /** *** unexpected pop-up appear*******/
    try {
      await t.evaluate(await t.$(emailPopUp), (ele) => {
        ele.focus();
        ele.click();
      });
    } catch (e) {
      gauge.message(messages.popUpDidNotApear);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

// If cart popup's id is defined wait and do the popup close.
step('LATAMLOYALTY Cookie Rejection', async function () {
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

step('LATAMLOYALTY Sample page continue', async function () {
  if (samplePageContinue !== '') {
    await t.evaluate(await t.$(samplePageContinue), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Sample page continue mob', async function () {
  if (samplePageContinueMob !== '') {
    await t.evaluate(await t.$(samplePageContinueMob), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Enter guestuser/newuser id', async function () {
  if (guestUserId !== '') {
    newEmailId = makeEmail();
    await t.write(newEmailId, t.into(await t.$(guestUserId)));
    gauge.screenshot();
    gauge.message('New user Email ID: ' + newEmailId);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Click terms and condition', async function () {
  if (termsAndConditions !== '') {
    await t.evaluate(await t.$(termsAndConditions), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Click guestuser/newuser continue btn', async function () {
  if (guestUserContinueBtn !== '') {
    await t.evaluate(
      await t.$(guestUserContinueBtn, { waitForNavigation: false }),
      (ele) => ele.click()
    );
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY click guestuser/newuser submit mob', async function () {
  if (guestUserSubmitMob !== '') {
    await t.evaluate(
      await t.$(guestUserSubmitMob, { waitForNavigation: false }),
      (ele) => ele.click()
    );
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Select delivery method radiobutton', async function () {
  if (deliveryMethodId !== '') {
    /** Delivery method appear randomly for RU for first checkout (TW) */
    try {
      await t.evaluate(
        await t.$(deliveryMethodId, { waitForNavigation: false }),
        (ele) => ele.click()
      );
    } catch (e) {
      gauge.message(
        "Delivery method radio btn is not applicable for this Brand/local or didn't appear"
      );
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Click title radiobutton', async function () {
  if (titleId !== '') {
    await t.evaluate(await t.$(titleId, { waitForNavigation: false }), (ele) =>
      ele.click()
    );
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY click title dropdown mob', async function () {
  if (titleDropDownMob !== '') {
    await t.evaluate(t.dropDown({ id: titleDropDownMob }), (ele) =>
      ele.scrollIntoView()
    );
    await t.dropDown({ id: titleDropDownMob }).select({ index: '4' });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY enter firstname', async function () {
  if (firstNameId !== '') {
    await t.write(CommonData.FIRSTNAME, t.into(await t.$(firstNameId)));
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY enter lastname', async function () {
  if (lastNameId !== '') {
    await t.write(CommonData.LASTNAME, t.into(await t.$(lastNameId)));
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY enter address', async function () {
  if (addressId !== '') {
    await t.write(CommonData.ADDRESS, t.into(await t.$(addressId)), {
      delay: retryInterval,
    });
    if (CommonData.ADDRESS4 !== '') {
      await t.waitFor(CommonData.ADDRESS4);
      await t.press('ArrowDown');
      await t.press('ArrowDown');
      await t.press('ArrowDown');
      await t.press('Enter');
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY enter street', async function () {
  if (streetId !== '') {
    await t.evaluate(await t.$(streetId), (ele) => ele.focus());
    await t.write(CommonData.STREET, t.into(await t.$(streetId)));
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY enter postal code', async function () {
  if (postalCodeId !== '') {
    if (tags[0].includes('CL') && tags[1].includes('BR')) {
      if (await (await t.$(postalCodeId)).isVisible()) {
        await t.evaluate(await t.$(postalCodeId), (ele) => ele.focus());
        await t.write(CommonData.ZIPCODE, t.into(await t.$(postalCodeId)));
        gauge.screenshot();
      } else {
        await t.reload({ waitForEvents: ['loadEventFired'] });
        await t.waitFor(pauseMlSec);
      }
      await t.evaluate(await t.$(postalCodeId), (ele) => ele.focus());
      await t.write(CommonData.ZIPCODE, t.into(await t.$(postalCodeId)));
      gauge.screenshot();
    } else {
      await t.write(CommonData.ZIPCODE, t.into(await t.$(postalCodeId)));
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY enter home phone number', async function () {
  if (phoneId !== '') {
    await t.evaluate(await t.$(phoneId), (ele) => ele.focus());
    await t.write(CommonData.PHONE, t.into(await t.$(phoneId)), {
      force: true,
      delay: retryInterval,
    });
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY select payment option radiobutton', async function () {
  if (paymentOptionId !== '') {
    /** Payment option btn apply for some Brands/Locale (TH) */
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

step(
  'LATAMLOYALTY click payment option terms and condition',
  async function () {
    if (paymentOptionTnC !== '') {
      await t.evaluate(await t.$(paymentOptionTnC), (ele) => ele.click());
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step('LATAMLOYALTY click shipping address continue', async function () {
  if (shippingAddressContinue !== '') {
    /** Shipping address continue btn apply for some Brands/Locale */
    await t.waitFor(pauseMlSec);
    try {
      await t.evaluate(
        await t.$(shippingAddressContinue, { waitForNavigation: false }),
        (ele) => ele.click()
      );
    } catch (e) {
      gauge.message('Shipping continue button did not appear');
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY click create an account continue', async function () {
  if (createAccountContinue !== '') {
    /** Create Account page appear for few brand/locale */
    try {
      await t.evaluate(
        await t.$(createAccountContinue, { waitForNavigation: false }),
        (ele) => ele.click()
      );
    } catch (e) {
      gauge.message('Create account continue btn did not appear');
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY select payment method radiobutton', async function () {
  if (paymentMethodRadioButton !== '') {
    /** Payment method radio btn appear for few brand/locale */
    await t.evaluate(
      await t.$(paymentMethodRadioButton, { waitForNavigation: false }),
      (ele) => ele.click()
    );
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY select payment method radiobutton mob', async function () {
  if (paymentMethodRadioButtonMob !== '') {
    /** Paymnet method radio btn appear for some site in PC/MOB */
    try {
      await t.evaluate(
        await t.$(paymentMethodRadioButtonMob, { waitForNavigation: false }),
        (ele) => ele.click()
      );
    } catch (e) {
      gauge.message('Payment method radio btn did not appear');
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY click pay button', async function () {
  let confirmUrl = '';
  if (payButtonId !== '') {
    await t.evaluate(await t.$(payButtonId), (ele) => {
      ele.focus();
      ele.click();
    });
    console.log('ordermessage', CommonData.ORDERMESSAGE);
    console.log('url', CommonData.ORDERCONFIRMURL);

    if (CommonData.ORDERMESSAGE !== '') {
      confirmUrl = await t.currentURL();
      if (confirmUrl.includes(CommonData.ORDERCONFIRMURL)) {
        assert(matchCondition);
        gauge.message('Order placed successfully');
        gauge.screenshot();
      } else {
        await t.reload({ waitForEvents: ['loadEventFired'] });
        await t.evaluate(await t.$(payButtonId), (ele) => {
          ele.focus();
          ele.click();
        });
        confirmUrl = await t.currentURL();
        if (confirmUrl.includes(CommonData.ORDERCONFIRMURL)) {
          assert(matchCondition);
          gauge.message('Order placed successfully');
          gauge.screenshot();
        } else {
          gauge.message('Order not placed');
          gauge.screenshot();
          assert(!matchCondition);
        }
      }
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY click confirm pay button', async function () {
  if (confirmPayButton !== '') {
    await t.evaluate(await t.$(confirmPayButton), (ele) => ele.click(), {
      waitForEvents: ['DOMContentLoaded'],
    });
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY click delivery method dropdown', async function () {
  if (deliveryMethodDropdown !== '') {
    /** Delivery method/address will appear for some brand/feature (MY=NU, LS-JP=NU,RU) **/
    try {
      await t.dropDown({ id: deliveryMethodDropdown }).select({ index: '1' });
    } catch (e) {
      gauge.message("Delivery method dropdown didn't appear");
    }
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY click shipping address continue mob', async function () {
  if (shippingContinueMob !== '') {
    /** Shipping address continue btn apply for some Brands/Locale */
    try {
      await t.evaluate(
        await t.$(shippingContinueMob, { waitForNavigation: false }),
        (ele) => ele.click()
      );
    } catch (e) {
      gauge.message('Shipping continue btn did not appear');
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY click register now/signUp button mob', async function () {
  if (newUserRegisterNowMob !== '') {
    await t.evaluate(
      await t.$(newUserRegisterNowMob, { waitForNavigation: false }),
      (ele) => ele.click()
    );
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'LATAMLOYALTY Click continue btn in order Info/Details page and proceed to Payment page',
  async function () {
    if (completeTheOrder !== '') {
      /** Order info page is applicable for few Brands/Locals (TW) */
      try {
        await t.evaluate(
          await t.$(completeTheOrder, { waitForNavigation: false }),
          (ele) => ele.click()
        );
        gauge.screenshot();
        if (waitForText !== '') {
          await t.waitFor(waitForText, pauseMlSec);
          gauge.screenshot();
        }
      } catch (e) {
        gauge.message(messages.stepNotApplicable);
      }
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step(
  'LATAMLOYALTY Click continue btn in order Info/Details page',
  async function () {
    if (continueCheckout !== '') {
      /** Order info page is applicable for few Brands/Locals (TW) */
      try {
        await t.evaluate(
          await t.$(continueCheckout, { waitForNavigation: false }),
          (ele) => ele.click()
        );
        gauge.screenshot();
      } catch (e) {
        gauge.message(messages.stepNotApplicable);
      }
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step(
  'LATAMLOYALTY Click continue btn in order Info/Details page mob and proceed to Payment page',
  async function () {
    if (completeTheOrderMob !== '') {
      /** Order info page is applicable for few Brands/Locals (TW)  */
      try {
        await t.evaluate(
          await t.$(completeTheOrderMob, { waitForNavigation: false }),
          (ele) => ele.click()
        );
        gauge.screenshot();
      } catch (e) {
        gauge.message(messages.stepNotApplicable);
      }
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step(
  'LATAMLOYALTY click Terms and condition for age over 18',
  async function () {
    if (termsAndConditionsForAge !== '') {
      /** T&C age over 18 is applicable for few Brands/Locals */
      try {
        await t.evaluate(await t.$(termsAndConditionsForAge), (ele) =>
          ele.click()
        );
      } catch (e) {
        gauge.message(messages.stepNotApplicable);
      }
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

// Account steps
step('LATAMLOYALTY Click logIn btn/link', async function () {
  if (loginId1 !== '') {
    await t.evaluate(await t.$(loginId1), (ele) => {
      ele.focus();
      ele.click();
    });
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Click logIn MOB btn/link', async function () {
  if (mobLoginId !== '') {
    await t.evaluate(await t.$(mobLoginId), (ele) => {
      ele.focus();
      ele.click({ force: true });
    });
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Account Register Now', async function () {
  if (acRegisterNow !== '') {
    await t.evaluate(await t.$(acRegisterNow), (ele) => {
      ele.focus();
      ele.click();
    });
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Account Register Now1', async function () {
  if (acRegisterNow1 !== '') {
    if (await (await t.$(acRegisterNow1)).exists()) {
      await t.evaluate(await t.$(acRegisterNow1), (ele) => {
        ele.focus();
        ele.click();
      });
      gauge.screenshot();
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Account Register Now Mob', async function () {
  if (acRegisterNowMob !== '') {
    try {
      await t.evaluate(await t.$(acRegisterNowMob), (ele) => {
        ele.focus();
        ele.click();
      });
    } catch (e) {
      gauge.message('Link has been clicked');
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Account Registration First Name', async function () {
  if (acRegisterFirstName !== '') {
    try {
      await t.write(CommonData.REGNAME, t.into(await t.$(acRegisterFirstName)));
    } catch (e) {
      gauge.message('skipping this as element is not visible');
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Loyalty Acc Full Name', async function () {
  if (loyaltyAccFullName !== '') {
    await t.write(CommonData.FULLNAME, t.into(await t.$(loyaltyAccFullName)));
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Loyalty Register PWD', async function () {
  if (loyaltyPwd !== '') {
    await t.write(CommonData.NPWD, t.into(await t.$(loyaltyPwd)));
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Loyalty click button', async function () {
  if (acLoyRegisterTerms !== '') {
    if (
      (await (await t.$(loyaltySubmit)).exists()) &&
      (await (await t.$(loyaltySubmit)).isVisible())
    ) {
      await t.evaluate(await t.$(loyaltySubmit), (ele) => ele.click(), {
        force: true,
        waitForEvents: ['DOMContentLoaded'],
      });
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Loyalty click button1', async function () {
  if (loyaltySubmit !== '') {
    await t.evaluate(await t.$(loyaltySubmit), (ele) => {
      ele.focus();
      ele.click();
    });
    await t.press('Enter', { force: true });
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Navigate to Loyalty page', async function () {
  if (acLoyalty !== '') {
    await t.evaluate(await t.$(acLoyalty), (ele) => ele.click(), {
      waitForEvents: ['DOMContentLoaded'],
    });
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Account Register Now Mob1', async function () {
  if (acRegisterNowMob1 !== '') {
    if (await (await t.$(acRegisterNowMob1)).exists()) {
      await t.evaluate(await t.$(acRegisterNowMob1), (ele) => ele.click(), {
        waitForEvents: ['DOMContentLoaded'],
      });
      gauge.screenshot();
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Account Registration Last Name', async function () {
  if (acRegisterLastName !== '') {
    await t.write(CommonData.LASTNAME, t.into(await t.$(acRegisterLastName)));
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Account Register EmailId', async function () {
  if (acRegisterEmailId !== '') {
    if (
      (tags[0].includes('CL') && tags[1].includes('BR')) ||
      (tags[0].includes('MC') && tags[1].includes('BR'))
    ) {
      newEmailId = makeEmailBrazil();
      await t.write(newEmailId, t.into(await t.$(acRegisterEmailId)));
      gauge.message('New User Email ID: ' + newEmailId);
    } else {
      newEmailId = makeEmail();
      await t.write(newEmailId, t.into(await t.$(acRegisterEmailId)));
      gauge.message('New User Email ID: ' + newEmailId);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Account Register Email', async function () {
  if (acRegisterEmail !== '') {
    if (
      (tags[0].includes('CL') && tags[1].includes('BR')) ||
      (tags[0].includes('MC') && tags[1].includes('BR'))
    ) {
      newEmailId = makeEmailBrazil();
      await t.write(newEmailId, t.into(await t.$(acRegisterEmail)));
      gauge.message('Created Email ID: ' + newEmailId);
    } else {
      newEmailId = makeEmail();
      await t.write(newEmailId, t.into(await t.$(acRegisterEmail)));
      gauge.message('Created Email ID: ' + newEmailId);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Account Register PWD', async function () {
  if (acRegisterPwd !== '') {
    if (
      (await (await t.$(acRegisterPwd)).exists()) &&
      (await (await t.$(acRegisterPwd)).isVisible())
    ) {
      await t.write(CommonData.NPWD, t.into(await t.$(acRegisterPwd)));
      gauge.screenshot();
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Account Register Phone', async function () {
  if (acRegisterPhone !== '') {
    await t.write(CommonData.PHONE, t.into(await t.$(acRegisterPhone)));
    await t.press(['Control', 'KeyA']);
    await t.press('Delete');
    await t.write(CommonData.PHONE, t.into(await t.$(acRegisterPhone)));
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Account Register DOB', async function () {
  if (acRegisterYear !== '') {
    await t.dropDown({ id: acRegisterYear }).select(CommonData.BIRTHYEAR);
    await t.dropDown({ id: acRegisterMonth }).select(CommonData.BIRTHMONTH);
    await t.dropDown({ id: acRegisterDay }).select(CommonData.BIRTHDAY);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Account Registeration Terms', async function () {
  if (acRegisterTerms !== '') {
    await t.evaluate(await t.$(acRegisterTerms), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Check Registration Terms', async function () {
  if (chxBoxRegisterTerms !== '') {
    await t.evaluate(await t.$(chxBoxRegisterTerms), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Account Loyalty Registeration Terms', async function () {
  if (acLoyRegisterTerms !== '') {
    await t.evaluate(await t.$(acLoyRegisterTerms), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Loyalty Registration terms', async function () {
  if (loyRegisterTerms !== '') {
    try {
      await t.evaluate(await t.$(loyRegisterTerms), (ele) => ele.click(), {
        waitForNavigation: false,
      });
      await t.evaluate(await t.$(acEmailTerms), (ele) => ele.click(), {
        waitForNavigation: false,
      });
    } catch (e) {
      gauge.message(messages.stepNotApplicable);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Account Register Button', async function () {
  if (acRegisterCreateAccBtn !== '') {
    try {
      await t.evaluate(
        await t.$(acRegisterCreateAccBtn),
        (ele) => ele.click(),
        {
          waitForEvents: ['DOMContentLoaded'],
        }
      );
      gauge.screenshot();
    } catch (e) {
      gauge.message('button did not appear for this locale');
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Account Register Button Mob', async function () {
  if (acRegisterCreateAccBtnMob !== '') {
    await t.evaluate(
      await t.$(acRegisterCreateAccBtnMob),
      (ele) => ele.click(),
      {
        waitForNavigation: false,
      }
    );
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Register Button Mob', async function () {
  if (registerBtnMob !== '') {
    await t.evaluate(await t.$(registerBtnMob), (ele) => ele.click(), {
      waitForEvents: ['DOMContentLoaded'],
    });
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY AC Register title', async function () {
  if (acRegisterTitle !== '') {
    await t.evaluate(await t.$(acRegisterTitle), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY AC Register Phone Number', async function () {
  if (acRegisterPhone !== '') {
    await t.write(CommonData.PHONE, t.into(await t.$(acRegisterPhone)));
    await t.press(['Control', 'KeyA']);
    await t.press('Delete');
    await t.write(CommonData.PHONE, t.into(await t.$(acRegisterPhone)));
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

// loyalty code start

step('LATAMLOYALTY Account Register Mobile', async function () {
  if (acRegisterPhone !== '') {
    await t.write(randomMobNumber(), t.into(await t.$(acRegisterPhone)));
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

// If profile popup's id is defined wait and do the popup close
step('LATAMLOYALTY Close Profile Popup', async function () {
  gauge.screenshot();
  if (profilePopupClose !== '') {
    try {
      await t.evaluate(
        await t.$(profilePopupClose, { waitForNavigation: false }),
        (ele) => ele.click()
      );
    } catch (e) {
      gauge.message(messages.popUpDidNotApear);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'LATAMLOYALTY Verify Loyalty Section in Account Index Page',
  async function () {
    if (loyaltySection !== '') {
      assert(
        await (
          await t.$(loyaltySection)
        ).isVisible,
        'Loyalty Section not displayed in Index page'
      );
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step('LATAMLOYALTY Display current Tier Points', async function () {
  if (lPointsIndexPage !== '') {
    gauge.screenshot();
    currPoints1 = await (await t.$(lPointsIndexPage)).text();
    console.log('Loyalty current points', currPoints1);
    gauge.message(currPoints1);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Display current Tier1 status', async function () {
  if (tier1StatusId !== '') {
    currTierStatus = await (await t.$(tier1StatusId)).text();
    console.log('Loyalty current status', currTierStatus);
    gauge.message(currTierStatus);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Click on Join Loyalty in Footer', async function () {
  if (joinLoyaltyFooter !== '') {
    await t.evaluate(await t.$(joinLoyaltyFooter), (ele) => ele.click(), {
      waitForEvents: ['DOMContentLoaded'],
    });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Click on Join Loyalty in Footer Mobile', async function () {
  if (joinLoyaltyFooterMob !== '') {
    await t.evaluate(await t.$(joinLoyaltyFooterMob), (ele) => ele.click(), {
      waitForEvents: ['DOMContentLoaded'],
    });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Click on Join Now Button', async function () {
  if (joinNowMarktPage !== '') {
    gauge.screenshot();
    await t.evaluate(await t.$(joinNowMarktPage), (ele) =>
      ele.scrollIntoView()
    );
    await t.evaluate(await t.$(joinNowMarktPage), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Click on Login Button in Acc page', async function () {
  if (loginBtn !== '') {
    await t.evaluate(await t.$(loginBtn), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'LATAMLOYALTY Click on Loyalty Join link in order confirmation page',
  async function () {
    if (loyaltyJoinConPage !== '') {
      gauge.screenshot();
      await t.evaluate(await t.$(loyaltyJoinConPage), (ele) => ele.click());
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step('LATAMLOYALTY Click on rewards section', async function () {
  if (rewardsSection !== '') {
    await t.evaluate(await t.$(rewardsSection), (ele) => ele.click(), {
      waitForEvents: ['DOMContentLoaded'],
    });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Display order number details', async function () {
  if (orderNum !== '') {
    orderNumber = await (await t.$(orderNum)).text();
    gauge.screenshot();
    gauge.message(orderNumber);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Click on rewards section mob', async function () {
  if (rewardsSectionMob !== '') {
    await t.evaluate(
      await t.$(rewardsSectionMob, { waitForEvents: ['DOMContentLoaded'] }),
      (ele) => ele.click()
    );
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'LATAMLOYALTY Navigate to account index page mob',
  { continueOnFailure: true },
  async function () {
    if (accountIndexUrl !== '') {
      await t.waitFor(pauseMlSec);
      await t.goto(siteDefinition.executionContext.url + accountIndexUrl, {
        waitForNavigation: false,
      });
      if (tags[0] === 'EL-BR') {
        if (
          !(await (
            await t.$(rewardsSectionMob)
          ).exists(retryInterval, elementTimeOut))
        ) {
          gauge.message(
            'The account index page is not loaded within 30 seconds on mobile'
          );
          assert(!matchCondition);
        }
      }
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);
step('LATAMLOYALTY Navigate to account index page PC', async function () {
  if (accountIndexUrl !== '') {
    await t.waitFor(pauseMlSec);
    await t.goto(siteDefinition.executionContext.url + accountIndexUrl, {
      waitForNavigation: false,
    });
    if (tags[0] === 'EL-BR') {
      if (
        !(await (
          await t.$(rewardsSection)
        ).exists(retryInterval, elementTimeOut))
      ) {
        gauge.message(
          'The account index page is not loaded within 30 seconds on PC'
        );
        assert(!matchCondition);
      }
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Navigate to offer manager', async function () {
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

step('LATAMLOYALTY Navigate to offer manager mobile', async function () {
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

step('LATAMLOYALTY Navigate to view cart page', async function () {
  if (viewCartPageUrl !== '') {
    await t.goto(siteDefinition.executionContext.url + viewCartPageUrl, {
      waitForEvents: ['DOMContentLoaded'],
    });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Navigate to view cart page mobile', async function () {
  if (viewCartPageUrl !== '') {
    await t.goto(siteDefinition.executionContext.url + viewCartPageUrl, {
      waitForEvents: ['DOMContentLoaded'],
    });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Verify welcome offer', async function () {
  if (appliedOffersId !== '') {
    console.log(CommonData.WELCOMEOFFER1, 'applied offer checking..');
    if (
      siteDefinition.executionContext.environment.toUpperCase() === 'PROD' ||
      siteDefinition.executionContext.environment.toUpperCase() === 'PREPROD'
    ) {
      appliedOfferTxt = await (await t.$(appliedOffersId1)).text();
    } else {
      appliedOfferTxt = await (await t.$(appliedOffersId)).text();
    }
    console.log('offer text:', appliedOfferTxt);
    if (appliedOfferTxt.includes(CommonData.WELCOMEOFFER1)) {
      offerAppliedFlag = true;
      appliedOffer = CommonData.WELCOMEOFFER1;
      assert(matchCondition);
      gauge.message('Welcome offer applied');
    } else {
      assert(!matchCondition, 'Welcome offer not applied');
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
  gauge.screenshot();
});

step('LATAMLOYALTY Verify Test offers', async function () {
  if (appliedOffersId !== '') {
    console.log('Test applied offer checking..');
    appliedOfferTxt = await (await t.$(appliedOffersId)).text();
    gauge.message(appliedOfferTxt);
    if (appliedOfferTxt.includes(CommonData.TESTOFFER1.substring(0, 4))) {
      if (appliedOfferTxt.includes(CommonData.TESTOFFER1)) {
        testPntTotal = parseInt(CommonData.TESTPNT1);
        gauge.message(CommonData.TESTOFFER1, 'offer applied');
        console.log('Test point total' + testPntTotal);
      }
      if (appliedOfferTxt.includes(CommonData.TESTOFFER2)) {
        testPntTotal = parseInt(CommonData.TESTPNT2);
        gauge.message(CommonData.TESTOFFER2, 'offer applied');
        console.log('Test point total' + testPntTotal);
      }
      if (appliedOfferTxt.includes(CommonData.TESTOFFER3)) {
        testPntTotal = purAmnt;
        gauge.message(CommonData.TESTOFFER3, 'offer applied');
        console.log('Test point total' + testPntTotal);
      }
      if (appliedOfferTxt.includes(CommonData.TESTOFFER4)) {
        percentPnt = purAmnt * parseFloat(CommonData.TESTPNT4);
        purAmnt = purAmnt - percentPnt;
        purAmnt = Math.ceil(purAmnt);
        console.log('Purchase amt change=' + purAmnt);
        gauge.message(CommonData.TESTOFFER4, 'offer applied');
      }
    } else {
      gauge.message('Test offers not applied');
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
  gauge.screenshot();
});

step('LATAMLOYALTY select birthday date dropdown', async function () {
  if (birthDateProfile !== '') {
    await t.dropDown({ id: birthDateProfile }).select({ index: randomBDay() });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY select birthday year dropdown', async function () {
  if (birthYearProfile !== '') {
    await t.dropDown({ id: birthYearProfile }).select(CommonData.BIRTHYEAR);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY select birthday month dropdown', async function () {
  if (birthMonthProfile !== '') {
    const date = new Date();
    let bMonth = date.getMonth();
    console.log('current month', bMonth);
    bMonth = bMonth + 1;
    await t.dropDown({ id: birthMonthProfile }).select({ index: bMonth });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Click on profile update Button', async function () {
  if (profileUpdate !== '') {
    await t.evaluate(await t.$(profileUpdate), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Click on profile update Button mobile', async function () {
  if (profileUpdateMob !== '') {
    await t.evaluate(await t.$(profileUpdateMob), (ele) =>
      ele.click({ waitFOr: false })
    );
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Verify birthday offer', async function () {
  if (appliedOffersId !== '') {
    console.log(CommonData.BIRTHDAYOFFER1, 'applied offer checking..');
    if (
      siteDefinition.executionContext.environment.toUpperCase() === 'PROD' ||
      siteDefinition.executionContext.environment.toUpperCase() === 'PREPROD'
    ) {
      appliedOfferTxt = await (await t.$(appliedOffersId1)).text();
    } else {
      appliedOfferTxt = await (await t.$(appliedOffersId)).text();
    }
    gauge.message(appliedOfferTxt);
    if (appliedOfferTxt.includes(CommonData.BIRTHDAYOFFER1)) {
      offerAppliedFlag = true;
      appliedOffer = CommonData.BIRTHDAYOFFER1;
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

step('LATAMLOYALTY Verify loyalty offer code panel', async function () {
  if (loyaltyOfferPanel !== '') {
    assert(
      await (await t.$(loyaltyOfferPanel)).exists(),
      'Loyalty offer code panel not displayed'
    );
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Enter first name in profile settings', async function () {
  if (fNameProfile !== '') {
    await t.write(CommonData.FIRSTNAME, t.into(await t.$(fNameProfile)));
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Enter last name in profile settings', async function () {
  if (lNameProfile !== '') {
    await t.write(CommonData.LASTNAME, t.into(await t.$(lNameProfile)));
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Click on account settings', async function () {
  if (accountInfo !== '') {
    await t.evaluate(await t.$(accountInfo), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Get purchase amount', async function () {
  if (purchaseAmnt !== '') {
    purAmntStr = await (await t.$(purchaseAmnt)).text();
    purAmntStr = purAmntStr.substring(purAmntStr.lastIndexOf('$') + 1);
    purAmntStr = purAmntStr.replace(',', '.');
    purAmntStr = Math.ceil(purAmntStr);
    purAmnt = parseInt(purAmntStr);
    console.log('Purchase Amount ' + purAmnt);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY verify loyalty point in view cart page', async function () {
  if (lPointVCart !== '') {
    gauge.screenshot();
    lPointStr = await (await t.$(lPointVCart)).text();
    console.log('Loyalty point in view cart str', lPointStr);
    lPoints = lPointStr.replace(/\D/g, '');
    lPoints = parseInt(lPoints);
    console.log('loyalty points in view cart', lPoints);
    lPointsCalculated = lPointCalculation(purAmnt);
    console.log('loyalty points calc', lPointsCalculated);
    console.log('loyalty points total', totalLoylPnt);
    gauge.message('Loaylty point earned' + lPointsCalculated);
    if (lPoints === lPointsCalculated) {
      assert(matchCondition);
      gauge.message('Loyalty point calcualtion successful');
    } else {
      assert(!matchCondition, 'Loyalty point calcualtion failed');
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

let LpntConStr = '';
step(
  'LATAMLOYALTY verify loyalty point in Order confirmation page',
  { continueOnFailure: true },
  async function () {
    if (lPointsOnConPage !== '') {
      if (tags[0].includes('CL') && tags[1].includes('BR')) {
        lPointsCalculated = lPointCalculation(purAmnt);
        console.log('Loaylty point earned', lPointsCalculated);
      }
      LpntConStr = await (await t.$(lPointsOnConPage)).text();
      lPntConPage = LpntConStr.replace(/\D/g, '');
      lPntConPage = parseInt(lPntConPage);
      console.log('loyalty points in confirmation page ', lPntConPage);
      if (priceAfterDiscount > 0) {
        console.log('price with applied discount:' + priceAfterDiscount);
        console.log('points earned:' + lPntConPage);
        if (lPntConPage === priceAfterDiscount) {
          gauge.message(
            'Loyalty point calcualtion in Order confirmation page successful'
          );
        } else {
          gauge.message(
            'Loyalty point calcualtion in Order confirmation page failed'
          );
        }
      } else {
        if (lPntConPage === lPointsCalculated) {
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
      await t.evaluate(await t.$(orderNum), (ele) => ele.click());
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step('LATAMLOYALTY Click on Gnav Cart button', async function () {
  if (await (await t.$(gNavCartButton)).exists(retryInterval, elementTimeOut)) {
    console.log('Gnav cart running...');
    await t.evaluate(await t.$(gNavCartButton), (ele) => {
      ele.focus();
      ele.click();
    });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Click on Gnav Cart button mobile', async function () {
  if (gNavCartButton !== '') {
    await t.evaluate(await t.$(gNavCartButtonMob), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Click on account settings mobile', async function () {
  if (accountInfoMob !== '') {
    await t.evaluate(await t.$(accountInfoMob), (ele) =>
      ele.click({ waitForNavigation: false })
    );
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'LATAMLOYALTY Click on loyalty menu in account index page',
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

step('LATAMLOYALTY Click on edit profile', async function () {
  if (editProfile !== '') {
    await t.evaluate(await t.$(editProfile), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Set values', async function () {
  setVal();
});

step('LATAMLOYALTY Click expand button in view cart page', async function () {
  if (expandButtonViewCart !== '') {
    await t.evaluate(await t.$(expandButtonViewCart), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'LATAMLOYALTY Click title radiobutton in profile settings',
  async function () {
    if (titleSettings !== '') {
      await t.evaluate(
        await t.$(titleSettings, { waitForNavigation: false }),
        (ele) => ele.click()
      );
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step('LATAMLOYALTY Click on welcome reward redeem button', async function () {
  if (welcomeRewardRedeemBtn !== '') {
    await t.evaluate(await t.$(welcomeRewardRedeemBtn), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'LATAMLOYALTY Click on welcome reward redeem button in the footer',
  async function () {
    if (welcomeRewardRedeemBtnFooter !== '') {
      await t.evaluate(await t.$(welcomeRewardRedeemBtnFooter), (ele) =>
        ele.click()
      );
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step('LATAMLOYALTY Click on Birthday reward redeem button', async function () {
  if (birthdRewardRedeemBtn !== '') {
    await t.evaluate(await t.$(birthdRewardRedeemBtn), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Get purchase amount Mob', async function () {
  if (purchaseAmntMob !== '') {
    purAmntMobStr = await (await t.$(purchaseAmntMob)).text();
    purAmntMobStr = purAmntMobStr.substring(purAmntMobStr.lastIndexOf('$') + 1);
    purAmntMobStr = purAmntMobStr.replace(',', '.');
    console.log('Purchase Amount ', purAmntMobStr);
    purAmntMob = parseInt(purAmntMobStr);
    avlPointsMob = pointCalculation(purAmntMob);
    console.log('Available points ', avlPointsMob);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Click on Join Now Button Mobile', async function () {
  if (joinNowMarktPageMob !== '') {
    gauge.screenshot();
    await t.evaluate(await t.$(joinNowMarktPageMob), (ele) =>
      ele.scrollIntoView()
    );
    await t.evaluate(await t.$(joinNowMarktPageMob), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

// BRAZIL speficic step. Federal ID number required for registration.

step('LATAMLOYALTY enter CPF', async function () {
  if (cpfId !== '') {
    await t.write(cpf(), t.into(await t.$(cpfId)));
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Enter CPF number', async function () {
  if (cpfIdNum !== '') {
    const cpfused = cpf();
    await t.evaluate(t.textBox({ id: cpfIdNum }), (ele) =>
      ele.scrollIntoView()
    );
    await t.write(cpfused, t.into(t.textBox({ id: cpfIdNum })));
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'LATAMLOYALTY Account Registratio Name Checkout - NewUser',
  async function () {
    if (checkoutRegisterName !== '') {
      await t.write(
        CommonData.REGNAME,
        t.into(await t.$(checkoutRegisterName))
      );
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step(
  'LATAMLOYALTY Account Register EmailId Checkout - NewUser',
  async function () {
    if (checkoutRegisterEmailId !== '') {
      if (
        (tags[0].includes('CL') && tags[1].includes('BR')) ||
        (tags[0].includes('MC') && tags[1].includes('BR'))
      ) {
        newEmailId = makeEmailBrazil();
        await t.write(newEmailId, t.into(await t.$(checkoutRegisterEmailId)));
        gauge.screenshot();
      } else {
        newEmailId = makeEmail();
        await t.write(newEmailId, t.into(await t.$(checkoutRegisterEmailId)));
        gauge.screenshot();
        gauge.message('New user Email ID: ' + newEmailId);
      }
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step('LATAMLOYALTY Account Register PWD Checkout - NewUser', async function () {
  if (checkoutRegisterPWD !== '') {
    await t.write(CommonData.NPWD, t.into(await t.$(checkoutRegisterPWD)));
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY enter CPF Checkout - NewUser', async function () {
  if (cpfIdCheckout !== '') {
    await t.write(cpf(), t.into(await t.$(cpfIdCheckout)));
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'LATAMLOYALTY Account Registeration Terms Checkout - NewUser',
  async function () {
    if (checkoutRegisterTerms !== '') {
      await t.evaluate(await t.$(checkoutRegisterTerms), (ele) => ele.click());
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step(
  'LATAMLOYALTY Account Register Button Checkout - NewUser',
  async function () {
    if (checkoutRegisterCreateAcBtn !== '') {
      await t.waitFor(pauseMlSec);
      await t.evaluate(
        await t.$(checkoutRegisterCreateAcBtn, {
          waitForEvents: ['DOMContentLoaded'],
        }),
        (ele) => {
          ele.focus();
          ele.click();
        }
      );
      gauge.screenshot();
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step('LATAMLOYALTY Register EmailId and Submit', async function () {
  if (registerEmailId !== '') {
    try {
      newEmailId = makeEmailBrazil();
      await t.write(newEmailId, t.into(await t.$(registerEmailId)));
      await t.evaluate(await t.$(joinNow), (ele) => ele.click());
      gauge.message('New User Email ID: ' + newEmailId);
    } catch (e) {
      gauge.message(
        "Register EmailId is not applicable for this Brand/Local or didn't appear"
      );
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY Get purchase amount in viewcart page', async function () {
  if (purchaseAmntViewCart !== '') {
    purAmntStr = await (await t.$(purchaseAmntViewCart)).text();
    purAmntStr = purAmntStr.substring(purAmntStr.lastIndexOf('R$') + 1);
    purAmnt = purAmntStr.replace('$', '').trim();
    purAmnt = purAmnt.replace(',', '.');
    purAmntStr = parseFloat(purAmnt);
    purAmntStr = Math.ceil(purAmntStr);
    console.log('Purchase Amount ', purAmntStr);
    purAmnt = parseInt(purAmntStr);
    avlPoints = pointCalculation(purAmnt);
    console.log('Available points ', avlPoints);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'LATAMLOYALTY Click on Join Now Button on Loyalty banner in account page',
  async function () {
    if (joinNowBannerAccountPage !== '') {
      gauge.screenshot();
      await t.evaluate(await t.$(joinNowBannerAccountPage), (ele) =>
        ele.click()
      );
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step('LATAMLOYALTY Enter Phone number in profile settings', async function () {
  if (profilePreferencesPhone !== '') {
    await t.evaluate(await t.$(profilePreferencesPhone), (ele) => ele.focus());
    await t.write(CommonData.PHONE), t.into(await t.$(profilePreferencesPhone));
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY select birthyear date dropdown', async function () {
  if (birthYearProfile !== '') {
    await t.dropDown({ id: birthYearProfile }).select(CommonData.BIRTHYEAR);
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'LATAMLOYALTY Account Loyalty Banner Loyalty Registeration Terms',
  async function () {
    if (bannerLylRegisterTerms !== '') {
      await t.evaluate(await t.$(bannerLylRegisterTerms), (ele) => ele.click());
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step(
  'LATAMLOYALTY Calculate price with applied reward discount',
  async function () {
    purchAmntMobOrPC = purAmnt > 0 ? purAmnt : purAmntMob;
    priceAfterDiscount = Math.ceil(
      purchAmntMobOrPC - purchAmntMobOrPC * (CommonData.OFFERDISCOUNT / 100)
    );
    gauge.message('price with applied discount: ' + priceAfterDiscount);
  }
);

step('LATAMLOYALTY enter full name', async function () {
  if (shippingFullName !== '') {
    await t.write(CommonData.REGNAME, t.into(await t.$(shippingFullName)));
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY enter street number', async function () {
  if (streetNumIDLocator !== '') {
    if (
      (await (await t.$(streetNumIDLocator)).exists()) &&
      (await (await t.$(streetNumIDLocator)).isVisible())
    ) {
      await t.write(CommonData.ADDRESS2, t.into(await t.$(streetNumIDLocator)));
      gauge.screenshot();
    } else {
      t.waitFor(pauseMlSec);
      await t.write(CommonData.ADDRESS2, t.into(await t.$(streetNumIDLocator)));
      gauge.screenshot();
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY select payment method radiobutton1', async function () {
  if (paymentMethodRadioButton1 !== '') {
      (await (await t.$(paymentMethodRadioButton1)).exists()) &&
      (await (await t.$(paymentMethodRadioButton1)).isVisible())
      /** Payment method radio btn appear for few brand/locale */
      await t.evaluate(
        await t.$(paymentMethodRadioButton1),
        ele => 
        ele.click()
      
      );

  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('LATAMLOYALTY close chat prompt', async function () {
  if (xBtn !== '') {
    if (
      (await (await t.$(xBtn)).exists()) &&
      (await (await t.$(xBtn)).isVisible())
    ) {
      await t.evaluate(await t.$(xBtn), (ele) => ele.click());
    } else {
      gauge.message(messages.popUpDidNotApear);
    }
  }
});
step(
  'LATAMLOYALTY Click female gender radiobutton in profile settings',
  async function () {
    if (femaleGenderRadio !== '') {
      await t.evaluate(await t.$(femaleGenderRadio), (ele) => ele.click());
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);
