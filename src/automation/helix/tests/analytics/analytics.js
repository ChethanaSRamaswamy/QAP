// This file is common template for multiple brands and locales
/* eslint-disable */
// INFO : ESLinst issue is purposefully disables, as the helix scripts will be decommissioned..
const fs = require('fs');
const JSONData = require('../../../../datainterface/data/json/analytics/globalGA4.json');
var JSONPath = '';
var regionJSONFilePath;
const path = require('path');
const Hengine = require('../../../../datainterface/providers/hengine');
const { URLSearchParams } = require('url');
const { $ } = require('taiko');
const assert = require('assert');
var t = require('taiko');
let siteDefinition, source, NullDataException;
const Helper = require('../../helpers/helper');
const Util = require('../../../../utilities/util');

/** ****** CODE TO RECEIVE AND FORM THE BASE URL AND ADMIN URL ******/
var feature = 'Analytics';
const matchCondition = true;
var brandLocale = '';
var skuId = [];
var navTime = '';
var waitTime = '';
var emulationDevice = '';
let localeCode = '';
let skuSet;
var region;
const messages = {
  verified: ' is verified',
  notVerified: ' is NOT VERIFIED.',
  expectedFire: ' Expected to fire',
  cookieEnabled: ' Cookies enabled for Chrome',
  productQuantityFired: ' Product quantity: ',
  productQuantityNotFired: ' Product quantity not fired',
  OrderNotPlaced: ' Order not placed',
  userIdNotFired: ' userId not fired in order confirmation page',
  printResultProductClick:
    ' product details is triggered before product click event',
  printResultQuickView:
    ' quick view tags is not firing or quick view functionality is not implemented for this brand',
  noPageViewTags: ' pageview tags are not firing',
  reportFlagTrue: ' is firing tags as expected',
  reportFlagFalse: 'The number of times GA tag is not fired as expected, in : ',
  noGATags: ' GA tags are not firing ',
  issuePageView: ' ISSUE: The pageview is triggered more than once in',
  issueEvent: ' ISSUE: The event is triggered more than once in',
  erroMessage: 'One or more tags are not fired as expected',
};

function initTestEnvironment(siteDefinitions) {
  brandLocale = siteDefinitions.brandLocale;
  localeCode = brandLocale.split('-')[1];
}

let size,
  upccode,
  pcode,
  sku,
  pID,
  price,
  shade,
  prodClick,
  homePage,
  homePageview,
  mppPageview,
  productdetailview,
  SPP,
  MPP,
  viewcart,
  mppaddToBagCount,
  sppPageview,
  viewItemCount,
  viewItemListCount,
  sppViewCartOverlayCount,
  mppViewCartOverlayCount,
  sppaddToBagCount,
  hpViewItemList,
  mppViewItemList,
  sppPageViewItemList,
  viewcartPageview,
  analyticsDataActual,
  pageSD,
  AnalFlag,
  ScrollDownvalue,
  actualData,
  compare,
  gaInterceptURL,
  actualDataTrim,
  TimeoutSetting,
  signin,
  shipping,
  shipping1,
  shippingEvent,
  payment,
  payment1,
  paymentEvent,
  purchase,
  purchasePageview,
  newUserLogPageview,
  newUserLogEvent,
  newUserLog,
  paymentPageview,
  shippingPageview,
  signinPageview,
  signinEvent,
  loginEvent,
  beginCheckoutEvent,
  beginCheckoutPage,
  beginCheckout,
  cookieAccept,
  cookieCloseButton,
  tax,
  revenue,
  shippingCost,
  OrderConfirmationMsgid1,
  negOne,
  posFive,
  posSix,
  posTen,
  home,
  pageView,
  event,
  viewItemList,
  productID,
  mpp,
  spp,
  plp,
  pdp,
  newUserLogin,
  linkid,
  viewItem,
  addToBag,
  viewcartOverlay,
  checkoutViewcart,
  checkoutSignin,
  guestCheckout,
  returnCheckout,
  logSuccess,
  chekOut,
  checkShipping,
  chckoutRegister,
  beginChckOut,
  rcoChckOut,
  addShipping,
  reviewPayment,
  chckPayment,
  creditCard,
  viewPayment,
  purchaseConfirm,
  dt,
  gtag,
  cd39,
  cd41,
  el,
  ea,
  pa,
  detail,
  productClick,
  quickviewClick;
function reinitialize() {
  compare = regionJSONFilePath.filter((obj) => obj.brand === brandLocale)[0]
    .brandSpecs;
  analyticsDataActual = [];
  AnalFlag = false;
  pageSD = false;
  skuSet = false;
  ScrollDownvalue = JSON.stringify(JSONData[0].misc.ScrollDownvalue).replace(
    /"/g,
    ''
  );
  temp = {};
  actualData;

  /** ***************Extracting Product details from the JSON************************/
  skuId = [
    compare[0].productURL.productDetails1,
    compare[0].productURL.productDetails2,
    compare[0].productURL.productDetails3,
    compare[0].productURL.productDetails4,
    compare[0].productURL.productDetails5,
  ];

  size = JSON.stringify(JSONData[0].productXpath.xpr1cd1).replace(/"/g, '');
  upccode = JSON.stringify(JSONData[0].productXpath.xpr1cd85).replace(/"/g, '');
  pcode = JSON.stringify(JSONData[0].productXpath.xpr1cd84).replace(/"/g, '');
  sku = JSON.stringify(JSONData[0].productXpath.xpr1cd52).replace(/"/g, '');
  pID = JSON.stringify(JSONData[0].productXpath.xpr1id).replace(/"/g, '');
  shade = JSON.stringify(JSONData[0].productXpath.xpr1cd50).replace(/"/g, '');
  price = JSON.stringify(JSONData[0].productXpath.xpr1pr).replace(/"/g, '');
  prodClick = JSON.stringify(JSONData[0].misc.prodClick).replace(/"/g, '');
  cookieAccept = JSON.stringify(JSONData[0].misc.acceptCookie).replace(
    /"/g,
    ''
  );
  cookieCloseButton = JSON.stringify(
    JSONData[0].misc.cookieCloseButton
  ).replace(/"/g, '');
  negOne = parseInt(JSON.stringify(JSONData[0].misc.negOne).replace(/"/g, ''));
  posFive = parseInt(
    JSON.stringify(JSONData[0].misc.posFive).replace(/"/g, '')
  );
  posSix = parseInt(JSON.stringify(JSONData[0].misc.posSix).replace(/"/g, ''));
  posTen = parseInt(JSON.stringify(JSONData[0].misc.posTen).replace(/"/g, ''));
  homePage = JSON.stringify(JSONData[0].misc.homePage).replace(/"/g, '');
  homePageview = JSON.stringify(JSONData[0].misc.home_pageview).replace(
    /"/g,
    ''
  );
  mppPageview = JSON.stringify(JSONData[0].misc.mpp_pageview).replace(/"/g, '');
  productdetailview = JSON.stringify(
    JSONData[0].misc.productdetailview
  ).replace(/"/g, '');
  SPP = JSON.stringify(JSONData[0].misc.SPP).replace(/"/g, '');
  MPP = JSON.stringify(JSONData[0].misc.MPP).replace(/"/g, '');
  viewcart = JSON.stringify(JSONData[0].misc.viewcart).replace(/"/g, '');
  mppaddToBagCount = JSON.stringify(JSONData[0].misc.mppaddToBag_count).replace(
    /"/g,
    ''
  );
  sppPageview = JSON.stringify(JSONData[0].misc.spp_pageview).replace(/"/g, '');
  viewItemCount = JSON.stringify(JSONData[0].misc.view_item_count).replace(
    /"/g,
    ''
  );
  viewItemListCount = JSON.stringify(
    JSONData[0].misc.view_item_list_Count
  ).replace(/"/g, '');
  sppViewCartOverlayCount = JSON.stringify(
    JSONData[0].misc.sppview_cart_overlay_count
  ).replace(/"/g, '');
  mppViewCartOverlayCount = JSON.stringify(
    JSONData[0].misc.mppview_cart_overlay_count
  ).replace(/"/g, '');
  sppaddToBagCount = JSON.stringify(JSONData[0].misc.sppaddToBag_count).replace(
    /"/g,
    ''
  );
  hpViewItemList = JSON.stringify(JSONData[0].misc.hpViewItemList).replace(
    /"/g,
    ''
  );
  mppViewItemList = JSON.stringify(JSONData[0].misc.mppViewItemList).replace(
    /"/g,
    ''
  );
  sppPageViewItemList = JSON.stringify(
    JSONData[0].misc.sppPageViewItemList
  ).replace(/"/g, '');
  viewcartPageview = JSON.stringify(JSONData[0].misc.viewcart_pageview).replace(
    /"/g,
    ''
  );
  productID = JSON.stringify(JSONData[0].prodImpression.prodID).replace(
    /"/g,
    ''
  );

  // from checkout

  tax = JSON.stringify(JSONData[0].revenueDetails.tax).replace(/"/g, '');
  revenue = JSON.stringify(JSONData[0].revenueDetails.revenue).replace(
    /"/g,
    ''
  );
  shippingCost = JSON.stringify(JSONData[0].revenueDetails.shipping).replace(
    /"/g,
    ''
  );
  gaInterceptURL = JSON.stringify(JSONData[0].misc.gaInterceptURL).replace(
    /"/g,
    ''
  );
  actualDataTrim = JSON.stringify(JSONData[0].misc.actualDataTrim).replace(
    /"/g,
    ''
  );
  signin = JSON.stringify(JSONData[0].misc.signin).replace(/"/g, '');
  shipping = JSON.stringify(JSONData[0].misc.shipping).replace(/"/g, '');
  shipping1 = JSON.stringify(JSONData[0].misc.shipping1).replace(/"/g, '');
  payment = JSON.stringify(JSONData[0].misc.payment).replace(/"/g, '');
  payment1 = JSON.stringify(JSONData[0].misc.payment1).replace(/"/g, '');
  purchase = JSON.stringify(JSONData[0].misc.purchase).replace(/"/g, '');
  paymentPageview = JSON.stringify(JSONData[0].misc.Payment_pageview).replace(
    /"/g,
    ''
  );
  shippingPageview = JSON.stringify(JSONData[0].misc.Shipping_pageview).replace(
    /"/g,
    ''
  );
  signinPageview = JSON.stringify(JSONData[0].misc.Signin_pageview).replace(
    /"/g,
    ''
  );
  purchasePageview = JSON.stringify(JSONData[0].misc.purchase_pageview).replace(
    /"/g,
    ''
  );
  newUserLogPageview = JSON.stringify(
    JSONData[0].misc.newUserLogPageview
  ).replace(/"/g, '');
  newUserLog = JSON.stringify(JSONData[0].misc.newUserLog).replace(/"/g, '');
  paymentEvent = JSON.stringify(JSONData[0].misc.Payment_event).replace(
    /"/g,
    ''
  );
  shippingEvent = JSON.stringify(JSONData[0].misc.Shipping_event).replace(
    /"/g,
    ''
  );
  signinEvent = JSON.stringify(JSONData[0].misc.Signin_event).replace(/"/g, '');
  beginCheckout = JSON.stringify(JSONData[0].misc.beginCheckout).replace(
    /"/g,
    ''
  );
  beginCheckoutEvent = JSON.stringify(
    JSONData[0].misc.beginCheckoutEvent
  ).replace(/"/g, '');
  beginCheckoutPage = JSON.stringify(
    JSONData[0].misc.beginCheckoutPage
  ).replace(/"/g, '');
  loginEvent = JSON.stringify(JSONData[0].misc.login_event).replace(/"/g, '');
  OrderConfirmationMsgid1 = JSON.stringify(
    JSONData[0].XPathPurchase.OrderConfirmationMsgid1
  ).replace(/"/g, '');

  // tag values
  home = JSON.stringify(JSONData[0].tagValues.home).replace(/"/g, '');
  pageView = JSON.stringify(JSONData[0].tagValues.pageView).replace(/"/g, '');
  event = JSON.stringify(JSONData[0].tagValues.event).replace(/"/g, '');
  viewItemList = JSON.stringify(JSONData[0].tagValues.viewItemList).replace(
    /"/g,
    ''
  );
  mpp = JSON.stringify(JSONData[0].tagValues.mpp).replace(/"/g, '');
  spp = JSON.stringify(JSONData[0].tagValues.spp).replace(/"/g, '');
  plp = JSON.stringify(JSONData[0].tagValues.plp).replace(/"/g, '');
  pdp = JSON.stringify(JSONData[0].tagValues.pdp).replace(/"/g, '');
  newUserLogin = JSON.stringify(JSONData[0].tagValues.newUserLogin).replace(
    /"/g,
    ''
  );
  cSuccess = JSON.stringify(JSONData[0].tagValues.cSuccess).replace(/"/g, '');
  linkid = JSON.stringify(JSONData[0].tagValues.linkid).replace(/"/g, '');
  viewItem = JSON.stringify(JSONData[0].tagValues.viewItem).replace(/"/g, '');
  addToBag = JSON.stringify(JSONData[0].tagValues.addToBag).replace(/"/g, '');
  viewcartOverlay = JSON.stringify(
    JSONData[0].tagValues.viewcartOverlay
  ).replace(/"/g, '');
  checkoutViewcart = JSON.stringify(
    JSONData[0].tagValues.checkoutViewcart
  ).replace(/"/g, '');
  checkoutSignin = JSON.stringify(JSONData[0].tagValues.checkoutSignin).replace(
    /"/g,
    ''
  );
  guestCheckout = JSON.stringify(JSONData[0].tagValues.guestCheckout).replace(
    /"/g,
    ''
  );
  returnCheckout = JSON.stringify(JSONData[0].tagValues.returnCheckout).replace(
    /"/g,
    ''
  );
  logSuccess = JSON.stringify(JSONData[0].tagValues.logSuccess).replace(
    /"/g,
    ''
  );
  chekOut = JSON.stringify(JSONData[0].tagValues.chekOut).replace(/"/g, '');
  checkShipping = JSON.stringify(JSONData[0].tagValues.checkShipping).replace(
    /"/g,
    ''
  );
  chckoutRegister = JSON.stringify(
    JSONData[0].tagValues.chckoutRegister
  ).replace(/"/g, '');
  beginChckOut = JSON.stringify(JSONData[0].tagValues.beginChckOut).replace(
    /"/g,
    ''
  );
  rcoChckOut = JSON.stringify(JSONData[0].tagValues.rcoChckOut).replace(
    /"/g,
    ''
  );
  addShipping = JSON.stringify(JSONData[0].tagValues.addShipping).replace(
    /"/g,
    ''
  );
  reviewPayment = JSON.stringify(JSONData[0].tagValues.reviewPayment).replace(
    /"/g,
    ''
  );
  chckPayment = JSON.stringify(JSONData[0].tagValues.chckPayment).replace(
    /"/g,
    ''
  );
  creditCard = JSON.stringify(JSONData[0].tagValues.creditCard).replace(
    /"/g,
    ''
  );
  viewPayment = JSON.stringify(JSONData[0].tagValues.viewPayment).replace(
    /"/g,
    ''
  );
  purchaseConfirm = JSON.stringify(
    JSONData[0].tagValues.purchaseConfirm
  ).replace(/"/g, '');
  dt = JSON.stringify(JSONData[0].tagValues.dt).replace(/"/g, '');
  gtag = JSON.stringify(JSONData[0].tagValues.gtag).replace(/"/g, '');
  cd39 = JSON.stringify(JSONData[0].tagValues.cd39).replace(/"/g, '');
  cd41 = JSON.stringify(JSONData[0].tagValues.cd41).replace(/"/g, '');
  el = JSON.stringify(JSONData[0].tagValues.el).replace(/"/g, '');
  ea = JSON.stringify(JSONData[0].tagValues.ea).replace(/"/g, '');
  pa = JSON.stringify(JSONData[0].tagValues.pa).replace(/"/g, '');
  detail = JSON.stringify(JSONData[0].tagValues.detail).replace(/"/g, '');
  productClick = JSON.stringify(JSONData[0].tagValues.productClick).replace(
    /"/g,
    ''
  );
  quickviewClick = JSON.stringify(JSONData[0].tagValues.quickviewClick).replace(
    /"/g,
    ''
  );
}
// Read from JSON file and navigate to correct JSON file
async function getJSONFilePath() {
  const regionValues = ['na', 'uk', 'emea', 'latam', 'apac'];
  for (let i = 0; i < regionValues.length; i++) {
    const regionVal = regionValues[i];
    for (let j = 0; j < JSONData[0].regionFromLocal[regionVal].length; j++) {
      const localValue = JSONData[0].regionFromLocal[regionVal][j];
      if (localeCode === localValue) {
        region = regionVal;
        i = regionValues.length;
        break;
      }
    }
  }
}
function generateJSONFileName() {
  getJSONFilePath();
  const returnRegionPath = path.join(
    __dirname,
    '../../specs/analytics/data/analytics_' + [region] + '.json'
  );
  return returnRegionPath;
}

async function initFrameworkSettings() {
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
  // Setup testing Urls
  initTestEnvironment(siteDefinition);
  JSONPath = generateJSONFileName();
  regionJSONFilePath = require(JSONPath);

  // Re-initialize variables
  reinitialize();
  gauge.message('ENVIRONMENT : ' + siteDefinition.executionContext.environment);
}

function writeToJSON() {
  fs.writeFile(JSONPath, JSON.stringify(regionJSONFilePath), (err) => {
    if (err) throw err;
  });
}

let impressionCount;
let prodImpression = '';
async function trackImpressions(productImpression) {
  await t.scrollDown(parseInt(ScrollDownvalue), {
    waitForEvents: 'DOMContentLoaded',
  });
  impressionCount = (await $(productImpression).elements()).length;
  if (impressionCount !== 0) {
    const objImp = {};
    for (let i = 1; i <= Math.min(impressionCount, posFive); i++) {
      prodImpression = await $(
        '(' + productImpression + ')[' + i + ']'
      ).attribute('data-product-id');
      if (prodImpression === null) {
        prodImpression = await $(
          '(' + productImpression + ')[' + i + ']'
        ).attribute('data-productid');
      }
      if (prodImpression === null) {
        prodImpression = await $(
          '(' + productImpression + ')[' + i + ']'
        ).attribute('data-product-productid-value');
      }
      const tempPSKey = `il1pi${i}ps`;
      const tempIDKey = `il1pi${i}id`;
      const tempPOS = i;
      let tempVal = prodImpression;
      if (!tempVal.includes('PROD')) {
        tempVal = 'PROD' + tempVal;
      }
      objImp[tempPSKey] = tempPOS.toString();
      objImp[tempIDKey] = tempVal;
    }
    compare[0].impressionList = objImp;
    writeToJSON();
  }
}
async function fetchProductDetails() {
  compare = regionJSONFilePath.filter((obj) => obj.brand === brandLocale)[0]
    .brandSpecs;
  for (let i = 0; i < skuId.length; i++) {
    await t.goto(siteDefinition.executionContext.adminUrl + skuId[i], {
      waitForEvents: ['DOMContentLoaded'],
    });
    compare[0].productValues[i] = {
      pr1cd1: await $(size).text(),
      pr1cd85: await $(upccode).text(),
      pr1cd84: await $(pcode).text(),
      pr1id: await $(pID).text(),
      pr1cd52: await $(sku).text(),
      pr1cd50: await $(shade).text(),
      pr1pr: parseFloat(await $(price).text())
        .toFixed(2)
        .toString(),
      pr1qt: '1',
      pr1cd55: 'no',
      pr1cd56: '0',
    };
  }
  writeToJSON();
}
function compareJSON(expectedData) {
  const tags = Object.keys(expectedData);
  if (AnalFlag) {
    for (let i = 0; i < tags.length; i++) {
      for (const [key, value] of actualData) {
        if (
          Object.keys(expectedData)[i] === key &&
          Object.values(expectedData)[i] === value
        ) {
          gauge.message(
            `${key} = ${Object.values(expectedData)[i]}` + messages.verified
          );
          console.log(
            `${key} = ${Object.values(expectedData)[i]}` + messages.verified
          );
        } else if (
          Object.keys(expectedData)[i] === key &&
          Object.values(expectedData)[i] !== value
        ) {
          if (
            Object.keys(expectedData)[i] === key &&
            value.includes(Object.values(expectedData)[i])
          ) {
            gauge.message(`${key} = ${value}` + messages.verified);
          } else if (
            (key === 'uid' ||
              key === 'cd78' ||
              key === 'cd79' ||
              key === 'cd2' ||
              key === 'cd5' ||
              key === 'el' ||
              key === 'cd29') &&
            value.length > negOne
          ) {
            gauge.message(`${key} = ${value}` + messages.verified);
          } else if (
            (key === 'cd49' || key === 'cd28') &&
            (value.includes('tid') ||
              value.includes('TID') ||
              value.includes('CC') ||
              value.includes('COD'))
          ) {
            gauge.message(`${key} = ${value}` + messages.verified);
          } else if (
            key === 'il1nm' &&
            Object.values(expectedData)[i] !== value
          ) {
            const expectedValue = Object.values(expectedData)[i];
            const actualValue = value;
            if (
              expectedValue.substring(0, posSix) ===
              actualValue.substring(0, posSix)
            ) {
              gauge.message(`${key} = ${expectedValue}` + messages.verified);
            } else {
              gauge.message(
                `${key} = ${expectedValue}` +
                  messages.notVerified +
                  messages.expectedFire +
                  `=> ${value}`
              );
            }
          } else if (key === 'pr1cd52' && !value.startsWith('SKU')) {
            const expectedValue = Object.values(expectedData)[i];
            const actualValue = `SKU${value}`;
            if (expectedValue === actualValue) {
              gauge.message(`${key} = ${expectedValue} is verified`);
            } else {
              gauge.message(
                `${key} = ${expectedValue}` +
                  messages.notVerified +
                  messages.expectedFire +
                  `=> ${value}`
              );
            }
          } else {
            gauge.message(
              `${key} = ${Object.values(expectedData)[i]}` +
                messages.notVerified +
                messages.expectedFire +
                `=> ${value}`
            );
          }
        }
      }
    }
  }
}

async function acceptCookies() {
  if (await $(cookieAccept).exists()) {
    // Click the accept button if it exists
    await t.evaluate(
      await $(cookieAccept, { waitForEvents: ['loadEventFired'] }),
      (ele) => {
        ele.focus(), ele.click();
      }
    );
  }
  if (await $(cookieCloseButton).exists(waitTime, waitTime)) {
    // Click the close button if it exists
    await t.evaluate(
      await $(cookieCloseButton, { waitForEvents: ['loadEventFired'] }),
      (ele) => {
        ele.focus(), ele.click();
      }
    );
  }
}

async function LaunchAndAcceptCookies() {
  await t.goto(siteDefinition.executionContext.adminUrl, {
    waitForEvents: ['DOMContentLoaded'],
  });
  await acceptCookies();
}
async function revenueDetails() {
  var revenue1 = await $(revenue).text();
  revenue1 = parseFloat(revenue1.replace(/[^0-9\\.]+/g, '')).toString();
  let tax1;
  if (await $(tax).exists()) {
    tax1 = await $(tax).text();
    tax1 = tax1.replace(/[^0-9\\.]+/g, '');
  } else {
    tax1 = '';
  }
  let shippingRevenue = await $(shippingCost).text();
  if (shippingRevenue === 'Free') {
    shippingRevenue = 0;
  } else {
    shippingRevenue = parseFloat(
      shippingRevenue.replace(/[^0-9\\.]+/g, '')
    ).toString();
  }

  compare[0].revenue.tr = revenue1;
  if (shippingRevenue !== 0) {
    compare[0].revenue.ts = shippingRevenue;
  }
  compare[0].revenue.tt = tax1;
  writeToJSON();
}
// intercepting the analytics url
async function interceptGA() {
  var regex1, reqStr1;
  regex1 = new RegExp(gaInterceptURL, 'gm');

  await t.intercept(regex1, (r) => {
    reqStr1 = JSON.stringify(r);
    analyticsDataActual.push(reqStr1);
    r.continue();
    return reqStr1;
  });
  console.log('Intercepted!!!');
}

step('GA Initialize Helix', async function () {
  t.setConfig({
    waitForNavigation: false,
    navigationTimeout: parseInt(TimeoutSetting, posTen),
  });
  // Initialize the selectors from DB
  await initFrameworkSettings();
});

/** ***********************Analytics*****************************/

/** ************************Incepting the URL*********************/

step('GA Set all cookies', async () => {
  await t.getCookies();

  gauge.message(messages.cookieEnabled);
  t.setConfig({
    waitForNavigation: false,
    navigationTimeout: parseInt(TimeoutSetting, posTen),
  });
});
step(
  'GA STORELOCATOR Configuring the prerequisites like set cookies, revision tag',
  async function () {
    const platform = siteDefinition.executionContext.platform.toUpperCase();
    if (platform === 'MOBILE') {
      await t.emulateDevice(emulationDevice);
      gauge.message('Emulation device: ' + emulationDevice);
    }
    t.setConfig({ navigationTimeout: parseInt(TimeoutSetting, posTen) });
    await Helper.setWindowSize(Util.ScreenSizes['1040p'], t);
    await Helper.setWAFCookie(siteDefinition, t);
    await Helper.setAdroll(siteDefinition, t);
    await Helper.setAkamaiBypass(siteDefinition, t);
    await Helper.setApiEnv(siteDefinition, t);
    await Helper.getPerlgemEnvCookie(siteDefinition, t);
    await Helper.setOtherCookies(siteDefinition, t);
    await Helper.setRevisionTag(siteDefinition, t);
    await Helper.setTestOrderCookie(siteDefinition, t);
  }
);

step('GA Intercept for Analytics', async function () {
  await interceptGA();
  await fetchProductDetails();
});

/** ************GA TAG VALIDATION*****************/
let prodVal;
async function getSkuIdForValidation(skuVal) {
  const skuValue = [
    compare[0].productValues[0].pr1cd52,
    compare[0].productValues[1].pr1cd52,
    compare[0].productValues[2].pr1cd52,
    compare[0].productValues[3].pr1cd52,
    compare[0].productValues[4].pr1cd52,
  ];
  for (let i = 0; i < skuValue.length; i++) {
    if (skuValue[i] === skuVal) {
      console.log('iprodVal: ' + i);
      prodVal = i;
    }
  }
}

async function orderValidation() {
  console.log('ORDER CONFIRMATION');
  if (await (await $(OrderConfirmationMsgid1)).exists()) {
    assert(true);
    let GetOrderNumber = await (await $(OrderConfirmationMsgid1)).text();
    GetOrderNumber = parseFloat(
      GetOrderNumber.replace(/[^0-9\\.]+/g, '')
    ).toString();
    compare[0].OrderId.ti = GetOrderNumber;
    writeToJSON();
    console.log(GetOrderNumber);
  } else {
    gauge.message(messages.OrderNotPlaced);
    assert(false);
  }
}

async function gaTagValidation() {
  await acceptCookies();
  analyticsDataActual.forEach((elements) => {
    let element = elements;
    element = element.trim().split(',')[1].split(actualDataTrim).pop();
    element = decodeURIComponent(element);
    actualData = new URLSearchParams(element);
    const b = element.split('&');
    const tags = b.map((tag) => tag.split('=')[0]);
    temp = tags;
    AnalFlag = false;
    for (const [key, value] of actualData) {
      if (key === dt && value === home) {
        homePage = 1;
        if (actualData.get(gtag) === pageView) {
          AnalFlag = true;
          gauge.message('<h4>Home page</h4>');
          compareJSON(JSONData[0].pageview);
          compareJSON(JSONData[0].Home);
          compareJSON(compare[0].BrandInfo);
          if (!pageSD) {
            compareJSON(compare[0].impressionList);
          }
          homePageview++;
          console.log(`Home page view count is: ${homePageview}`);
        } else if (actualData.get(el) === viewItemList) {
          AnalFlag = true;
          compareJSON(JSONData[0].Home);
          compareJSON(compare[0].BrandInfo);
          compareJSON(JSONData[0].viewItemList);
          compareJSON(compare[0].impressionList);
          viewItemListCount++;
          hpViewItemList++;
          console.log(
            `Home page view item list is: ${hpViewItemList} and ${viewItemListCount}`
          );
        }
      }
      if (key === ea && value === productClick) {
        prodClick = 1;
        AnalFlag = true;
        gauge.message('<h4>Product click</h4>');
        compareJSON(compare[0].BrandInfo);
        if (actualData.get(cd39).startsWith(mpp)) {
          compareJSON(compare[0].MPP);
          compareJSON(JSONData[0].MPP);
        } else {
          compareJSON(compare[0].productdetailview);
        }
        compareJSON(compare[0].productClick);
        compareJSON(JSONData[0].productClick);
        console.log(`The product click: ${prodClick}`);
      }
      if (key === ea && value === quickviewClick) {
        if (prodClick === 1) {
          productdetailview = 1;
          AnalFlag = true;
          gauge.message(`<h4>product detail view - quickview</h4>`);
          compareJSON(compare[0].BrandInfo);
          compareJSON(JSONData[0].MPP);
          if (actualData.get('pr1cd52').includes('SKU')) {
            gauge.message('// value for pr1cd52:' + actualData.get('pr1cd52'));
            getSkuIdForValidation(actualData.get('pr1cd52'));
            compareJSON(compare[0].productValues[prodVal]);
          }
          compareJSON(JSONData[0].productdetailview);
          compareJSON(compare[0].productdetailview);
          const filteredMPPObject = {};
          for (const [keyA, valueA] of Object.entries(compare[0].MPP)) {
            if (keyA === cd39 && valueA.startsWith(mpp)) {
              console.log(`Skipping MPP cd39`);
              continue;
            }
            filteredMPPObject[keyA] = valueA;
          }
        } else {
          productdetailview = 2;
          compareJSON(compare[0].BrandInfo);
          compareJSON(compare[0].MPP);
          compareJSON(JSONData[0].MPP);
          compareJSON(JSONData[0].productdetailview);
          gauge.message('Expected to fire after product click is fired');
        }
        console.log(`The QV count is :  ${productdetailview}`);
      }
      if (key === cd41 && (value === mpp || value === plp)) {
        MPP = 1;
        if (actualData.get(gtag) === pageView) {
          AnalFlag = true;
          gauge.message('<h4>MPP</h4>');
          compareJSON(compare[0].BrandInfo);
          compareJSON(compare[0].MPP);
          compareJSON(JSONData[0].MPP);
          compareJSON(JSONData[0].pageview);
          if (!pageSD) {
            compareJSON(compare[0].impressionList);
          }
          mppPageview++;
          console.log(`MPP page view is: ${mppPageview}`);
        } else if (actualData.get(el) === viewItemList) {
          AnalFlag = true;
          compareJSON(compare[0].BrandInfo);
          compareJSON(compare[0].MPP);
          compareJSON(JSONData[0].MPP);
          compareJSON(JSONData[0].viewItemList);
          compareJSON(compare[0].impressionList);
          viewItemListCount++;
          mppViewItemList++;
          console.log('MPP page view item list is : ' + mppViewItemList);
        }
      }
      if (key === cd41 && (value === spp || value === pdp)) {
        SPP = 1;
        if (actualData.get(gtag) === pageView) {
          gauge.message('<h4>SPP</h4>');
          AnalFlag = true;
          compareJSON(compare[0].BrandInfo);
          compareJSON(compare[0].SPP);
          compareJSON(JSONData[0].SPP);
          compareJSON(JSONData[0].pageview);
          if (pageSD === false) {
            compareJSON(compare[0].impressionList);
            if (
              actualData.get(pa) === detail &&
              actualData.get('pr1cd52').includes('SKU') &&
              skuSet === false
            ) {
              gauge.message(
                '// value for pr1cd52:' + actualData.get('pr1cd52')
              );
              getSkuIdForValidation(actualData.get('pr1cd52'));
              skuSet = true;
              compareJSON(compare[0].productValues[prodVal]);
            }
          }
          sppPageview++;
          console.log(`SPP page view is :   ${sppPageview}`);
        } else if (actualData.get(el) === viewItem) {
          AnalFlag = true;
          compareJSON(compare[0].BrandInfo);
          compareJSON(compare[0].SPP);
          compareJSON(JSONData[0].SPP);
          compareJSON(JSONData[0].viewItem);
          if (actualData.get('pr1cd52').includes('SKU') && skuSet === false) {
            gauge.message('// value for pr1cd52:' + actualData.get('pr1cd52'));
            getSkuIdForValidation(actualData.get('pr1cd52'));
            skuSet = true;
            compareJSON(compare[0].productValues[prodVal]);
          }
          viewItemCount++;
          console.log(`SPP page view item is : ${viewItemCount}`);
        } else if (actualData.get(el) === viewItemList) {
          AnalFlag = true;
          compareJSON(compare[0].BrandInfo);
          compareJSON(compare[0].SPP);
          compareJSON(JSONData[0].SPP);
          compareJSON(JSONData[0].viewItemList);
          compareJSON(compare[0].impressionList);
          viewItemListCount++;
          sppPageViewItemList++;
          console.log(`SPP page view item list is :  ${sppPageViewItemList}`);
        }
      }
      if (key === ea && value === addToBag) {
        AnalFlag = true;
        gauge.message('<h4>Add_To_Bag</h4>');
        compareJSON(compare[0].BrandInfo);
        if (actualData.get('pr1cd52').includes('SKU')) {
          gauge.message('// value for pr1cd52:' + actualData.get('pr1cd52'));
          getSkuIdForValidation(actualData.get('pr1cd52'));
          skuSet = true;
        }
        compareJSON(compare[0].productValues[prodVal]);
        // compareJSON(compare[0].productQuantity);
        compareJSON(JSONData[0].addToBag);
        if (actualData.get(cd41) === spp) {
          SPP = 1;
          sppaddToBagCount++;
          compareJSON(compare[0].SPP);
          // Loop through SPP object and exclude "pa": "detail"
          const filteredSPPObject = {};
          for (const [keyB, valueB] of Object.entries(JSONData[0].SPP)) {
            if (keyB === pa && valueB === detail) {
              console.log('Skipping SPP pa = detail');
              continue;
            }
            filteredSPPObject[keyB] = valueB;
          }
          compareJSON(filteredSPPObject);
        } else if (actualData.get(cd41) === mpp) {
          MPP = 1;
          mppaddToBagCount++;
          compareJSON(compare[0].MPP);
          compareJSON(JSONData[0].MPP);
        }
        console.log(`MPP page add to bag is :  ${mppaddToBagCount}`);
        console.log(`SPP page add to bag is :  ${sppaddToBagCount}`);
      }
      if (key === el && value === viewcartOverlay) {
        AnalFlag = true;
        gauge.message('<h4>Viewcart_Overlay</h4>');
        compareJSON(compare[0].BrandInfo);
        compareJSON(JSONData[0].viewCartOverlay);
        compareJSON(compare[0].viewCartOverlay);
        if (actualData.get(cd41) === spp) {
          SPP = 1;
          sppViewCartOverlayCount++;
          compareJSON(compare[0].SPP);
          const filteredSPPObject = {};
          for (const [keyC, valueC] of Object.entries(JSONData[0].SPP)) {
            if (keyC === pa && valueC === detail) {
              console.log(`Skipping SPP pa = detail`);
              continue;
            }
            filteredSPPObject[keyC] = valueC;
          }
          compareJSON(filteredSPPObject);
        } else if (actualData.get(cd41) === mpp) {
          MPP = 1;
          mppViewCartOverlayCount++;
          compareJSON(compare[0].MPP);
          compareJSON(JSONData[0].MPP);
        } else {
          gauge.message('view_cart_overlay tag has already fired.');
          AnalFlag = false;
        }
        console.log(
          `MPP viewcart overlay count is :  ${mppViewCartOverlayCount}`
        );
        console.log(
          `SPP viewcart overlay count is :  ${sppViewCartOverlayCount}`
        );
      }
      if (key === cd39 && value === checkoutViewcart) {
        viewcart = 1;
        if (actualData.get(gtag) === pageView) {
          gauge.message('<h4>view cart</h4>');
          AnalFlag = true;
          compareJSON(compare[0].BrandInfo);
          compareJSON(JSONData[0].pageview);
          compareJSON(compare[0].productValues[prodVal]);
          compareJSON(JSONData[0].viewcartPage);
          viewcartPageview++;
          console.log(`view cart page view :  ${viewcartPageview}`);
        }
      }
      // Sign in
      if (key === cd39 && value === checkoutSignin) {
        signin = 1;
        if (actualData.get(gtag) === pageView) {
          gauge.message('<h5>Sign in Page view</h5>');
          AnalFlag = true;
          compareJSON(compare[0].BrandInfo);
          compareJSON(JSONData[0].signin);
          compareJSON(compare[0].signin);
          compareJSON(JSONData[0].pageview);
          compareJSON(compare[0].productValues[prodVal]);
          signinPageview = 1;
        }
        if (actualData.get(el) === guestCheckout) {
          AnalFlag = true;
          gauge.message('<h5>Guest User</h5>');
          compareJSON(compare[0].BrandInfo);
          compareJSON(JSONData[0].signin);
          compareJSON(JSONData[0].guestCheckout);
          signinEvent++;
        }
        if (actualData.get(el) === returnCheckout) {
          AnalFlag = true;
          gauge.message('<h5>Return User</h5>');
          compareJSON(compare[0].BrandInfo);
          compareJSON(JSONData[0].signin);
          compareJSON(JSONData[0].returnUser);
          console.log(signinEvent + '  signinEvent');
          signinEvent++;
        }
      }
      if (key === ea && value === logSuccess) {
        gauge.message('<h5>Login User</h5>');
        AnalFlag = true;
        compareJSON(compare[0].BrandInfo);
        compareJSON(JSONData[0].shipping);
        compareJSON(JSONData[0].loginSucess);
        loginEvent++;
      }
      if (key === cd39 && value === chekOut) {
        if (actualData.get(gtag) === pageView) {
          AnalFlag = true;
          compareJSON(compare[0].BrandInfo);
          compareJSON(JSONData[0].pageview);
        }
      }
      // Shipping
      if (key === cd39 && value === checkShipping) {
        if (actualData.get(gtag) === pageView) {
          shipping = 1;
          gauge.message('<h5>Shipping Pageview</h5>');
          AnalFlag = true;
          compareJSON(compare[0].BrandInfo);
          compareJSON(JSONData[0].pageview);
          compareJSON(JSONData[0].shipping);
          compareJSON(compare[0].shipping);
          if (actualData.get('uid') !== 'null') {
            compareJSON(compare[0].userId);
          } else {
            gauge.message(messages.userIdNotFired);
          }
          shippingPageview++;
        }
      }
      if (key === cd39 && value === chckoutRegister) {
        if (actualData.get(gtag) === pageView) {
          shipping++;
          gauge.message('<h5>Shipping Details Added Pageview</h5>');
          AnalFlag = true;
          compareJSON(compare[0].BrandInfo);
          compareJSON(JSONData[0].pageview);
          compareJSON(JSONData[0].shipping1);
          shippingPageview++;
          console.log(shipping1);
        }
      }
      if (key === cd39 && value === rcoChckOut) {
        if (actualData.get(gtag) === pageView) {
          gauge.message('<h5>RCO Checkout</h5>');
          beginCheckout = 1;
          AnalFlag = true;
          compareJSON(compare[0].BrandInfo);
          compareJSON(JSONData[0].pageview);
          compareJSON(JSONData[0].rcoCheckout);
          if (actualData.get('uid') !== 'null') {
            compareJSON(compare[0].userId);
          } else {
            gauge.message();
          }
          beginCheckoutPage++;
          shippingPageview++;
        }
      }
      if (key === ea && value === beginChckOut) {
        beginCheckout = 1;
        AnalFlag = true;
        gauge.message('<h5>Begin Checkout event</h5>');
        compareJSON(compare[0].BrandInfo);
        compareJSON(JSONData[0].shipping);
        compareJSON(compare[0].productValues[prodVal]);
        compareJSON(JSONData[0].beginCheckout);
        beginCheckoutEvent++;
      }
      if (key === ea && value === addShipping) {
        shipping = 1;
        AnalFlag = true;
        gauge.message('<h5>Add shipping details</h5>');
        compareJSON(compare[0].BrandInfo);
        compareJSON(JSONData[0].rcoCheckout);
        compareJSON(compare[0].productValues[prodVal]);
        compareJSON(JSONData[0].addShippingInfo);
        if (actualData.get('uid') !== 'null') {
          compareJSON(compare[0].userId);
        } else {
          gauge.message(messages.userIdNotFired);
        }
        shippingEvent++;
      }
      if (key === el && value === viewPayment) {
        payment = 1;
        AnalFlag = true;
        gauge.message('<h5>View payment info</h5>');
        compareJSON(compare[0].BrandInfo);
        compareJSON(JSONData[0].payment);
        compareJSON(compare[0].productValues[prodVal]);
        compareJSON(JSONData[0].paymentInfo);
        if (actualData.get('uid') !== 'null') {
          compareJSON(compare[0].userId);
        } else {
          gauge.message(messages.userIdNotFired);
        }
        paymentPageview++;
      }
      // Payment page validation
      if (key === cd39 && value === reviewPayment) {
        payment1 = 1;
        if (actualData.get(gtag) === pageView) {
          AnalFlag = true;
          paymentPageview++;
          gauge.message('<h5>Payment page</h5>');
          compareJSON(compare[0].BrandInfo);
          compareJSON(JSONData[0].payment1);
          compareJSON(compare[0].productValues[prodVal]);
          compareJSON(JSONData[0].pageview);
          if (actualData.get('uid') !== 'null') {
            compareJSON(compare[0].userId);
          } else {
            gauge.message(messages.userIdNotFired);
          }
          console.log(paymentPageview + '  paymentPageview');
        }
      }
      if (key === cd39 && value === chckPayment) {
        payment = 1;
        if (actualData.get(gtag) === pageView) {
          AnalFlag = true;
          paymentPageview++;
          gauge.message('<h5>Payment page</h5>');
          compareJSON(compare[0].BrandInfo);
          compareJSON(JSONData[0].payment);
          compareJSON(compare[0].productValues[prodVal]);
          compareJSON(JSONData[0].pageview);
          if (actualData.get('uid') !== 'null') {
            compareJSON(compare[0].userId);
          } else {
            gauge.message(messages.userIdNotFired);
          }
          console.log(paymentPageview + '  paymentPageview');
        }
        if (actualData.get(el) === creditCard) {
          AnalFlag = true;
          paymentEvent++;
          gauge.message('<h5>Payment event</h5>');
          compareJSON(compare[0].BrandInfo);
          compareJSON(JSONData[0].payment);
          compareJSON(compare[0].productValues[prodVal]);
          compareJSON(JSONData[0].paymentCC);
          console.log(paymentEvent + '  paymentEvent');
          if (actualData.get('uid') !== 'null') {
            compareJSON(compare[0].userId);
          } else {
            gauge.message(messages.userIdNotFired);
          }
        }
      }
      // Purchase page validation
      if (key === cd39 && value === purchaseConfirm) {
        if (actualData.get(gtag) === pageView) {
          AnalFlag = true;
          purchase = 1;
          gauge.message('<h5>Purchase</h5>');
          compareJSON(compare[0].BrandInfo);
          compareJSON(JSONData[0].purchase);
          compareJSON(compare[0].purchase);
          compareJSON(compare[0].productValues[prodVal]);
          compareJSON(compare[0].revenue);
          compareJSON(compare[0].OrderId);
          if (actualData.get('uid') !== 'null') {
            compareJSON(compare[0].userId);
          } else {
            gauge.message(messages.userIdNotFired);
          }
          purchasePageview++;
          console.log(purchasePageview + '  purchasePageview');
        }
      }
      // new user login  && create sucess event
      if (key === linkid && value.includes(newUserLogin)) {
        AnalFlag = true;
        newUserLog = 1;
        if (actualData.get(gtag) === pageView) {
          gauge.message('<h5>New User Checkout Registration</h5>');
          compareJSON(compare[0].BrandInfo);
          compareJSON(JSONData[0].newUserCheckoutLogin);
          compareJSON(JSONData[0].pageview);
          newUserLogPageview++;
        } else if (actualData.get(gtag) === event) {
          gauge.message('<h5>New User Checkout Registration</h5>');
          compareJSON(compare[0].BrandInfo);
          compareJSON(JSONData[0].createSuccess);
          newUserLogEvent++;
        }
        if (actualData.get('uid') !== 'null') {
          compareJSON(compare[0].userId);
        } else {
          gauge.message(messages.userIdNotFired);
        }
      }
    }
    if (AnalFlag === true) {
      gauge.message('GA Tag :    ' + element);
      console.log('GA Tag :    ' + element);
      gauge.message(
        '************************************************************************'
      );
    }
    element = '';
  });
  analyticsDataActual = [];
}
step(
  'GA Analytics validation',
  { waitForEvents: 'DOMContentLoaded' },
  async () => {
    if (await $(productID).exists()) {
      await trackImpressions(productID);
    }
    if (await (await $(OrderConfirmationMsgid1)).exists(waitTime, navTime)) {
      await orderValidation();
    }
    await gaTagValidation();
    gauge.screenshot();
  }
);

step(
  'GA Revenue details for ANL',
  { continueOnFailure: true },
  async function () {
    await revenueDetails();
    gauge.message('Revenue details collected');
  }
);

/** ***********************Printing the final result*************************/
let errs;
let reportFlag = false;
async function printResult(pageName, page, pageviewCount, eventCount) {
  if (page === 1) {
    gauge.message(`<b>${pageName}:</b>`);
    if (pageName === 'Quick view') {
      if (prodClick === 1 && productdetailview === 1) {
        reportFlag = true;
      } else if (prodClick === 1 && productdetailview === 2) {
        gauge.message(messages.printResultProductClick);
        reportFlag = false;
      } else {
        console.log(messages.printResultQuickView);
      }
    }
    if (pageName === 'SPP') {
      if (
        (viewItemCount >= 0 || viewItemCount <= 1) &&
        sppPageview === 1 &&
        (sppPageViewItemList >= 0 || sppPageViewItemList <= 1)
      ) {
        reportFlag = true;
      } else if (sppaddToBagCount === 1 && sppViewCartOverlayCount >= 0) {
        reportFlag = true;
      }
    } else if (pageviewCount === 0) {
      gauge.message(`${pageName}` + messages.noPageViewTags);
    } else if (
      (pageviewCount === 1 && eventCount === 1) ||
      (pageviewCount === 1 && eventCount === null) ||
      (pageviewCount === null && eventCount === 1)
    ) {
      reportFlag = true;
    } else {
      reportFlag = false;
    }
    if (reportFlag === true) {
      gauge.message(`${pageName}` + messages.reportFlagTrue);
    } else if (reportFlag === false) {
      gauge.message(messages.reportFlagFalse + `${pageName}`);
    }
  } else if (page === 0) {
    gauge.message(`The  <b> ${pageName} </b> ` + messages.noGATags);
  }
  console.log(
    `${pageName}     ::PAGE NAME and   ${pageviewCount}    :Pageview count and   ${eventCount}     :eventCount`
  );
  if (AnalFlag) {
    if (pageviewCount > 1) {
      gauge.message(messages.issuePageView + ` ${pageName}`);
      errs = 1;
    }
    if (eventCount > 1) {
      gauge.message(messages.issueEvent + ` ${pageName}`);
      errs = 1;
    }
  }
}
async function finalReport() {
  gauge.message(`<b>Brand:</b> <b>${brandLocale}</b>`);

  if (pageSD === true) {
    printResult('Home page', homePage, homePageview, hpViewItemList);
    printResult('MPP', MPP, mppPageview, mppViewItemList);
    printResult('SPP', SPP, viewItemCount, sppPageViewItemList);
  } else if (pageSD === false) {
    printResult('Home page', homePage, homePageview, null);
    printResult('MPP', MPP, mppPageview, null);
    printResult('SPP', SPP, sppPageview, null);
  }
  await printResult('Product click', MPP, null, prodClick);
  if (productdetailview >= 1) {
    await printResult('Quick view', MPP, productdetailview, prodClick);
  }
  await printResult('MPP Add to bag', MPP, null, mppaddToBagCount);
  await printResult('MPP Viewcart overlay', MPP, null, mppViewCartOverlayCount);
  await printResult('SPP Add to bag', SPP, null, sppaddToBagCount);
  await printResult('SPP Viewcart overlay', SPP, null, sppViewCartOverlayCount);
  await printResult('Viewcart', viewcart, viewcartPageview, null);
  await printResult('Signin', signin, signinPageview, signinEvent);
  if (loginEvent >= 1) {
    await printResult('Login Success', signin, null, loginEvent);
  }
  await printResult('Shipping', shipping, shippingPageview, shippingEvent);
  if (beginCheckout >= 1) {
    await printResult(
      'Begin Checkout',
      beginCheckout,
      beginCheckoutPage,
      beginCheckoutEvent
    );
  }
  if (payment1 >= 1) {
    await printResult('Payment', payment1, paymentPageview, null);
  } else if (payment >= 1) {
    await printResult('Payment', payment, paymentPageview, paymentEvent);
  }
  await printResult('purchase', purchase, purchasePageview, null);
  if (newUserLog >= 1) {
    await printResult(
      'New user Checkout Login',
      newUserLog,
      newUserLogPageview,
      newUserLogEvent
    );
  }
}

// To Accept Cookie
step(
  'GA CookieAcceptButton',
  { waitForEvents: ['DOMContentLoaded'] },
  async function () {
    await LaunchAndAcceptCookies();
  }
);
function errorMsg(erros) {
  if (erros === 1) {
    gauge.message('<b>ERROR:</b>');
    gauge.message(messages.erroMessage);
    assert(false, 'Check for tags firings, tags are not firing as expected');
  }
}
step(
  'GA Analytics validation result',
  { continueOnFailure: true },
  async () => {
    await finalReport();
    errorMsg(errs);
  }
);
