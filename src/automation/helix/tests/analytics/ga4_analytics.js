/* eslint-disable */

// INFO : ESLinst issue is purposefully disables, as the helix scripts will be decommissioned..

// variable declaration for product details
var psize = '';
var pSkuID = '';

// variables for listing counts
var prodClick = '';
var homePage = '';
var homePageview = '';
var mppPageview = '';
var SPP = '';
var PLP = '';
var mppAddToBagCount;
var SPPviewItem = '';
var viewItemListCount;
var addShippingInfoCount = '';
var sppAddToBagCount = '';
var mppViewItemList = '';
var sppPageViewItemList = '';
var viewcartPageview = '';
var AnalFlag = '';
var ScrollDownvalue = '';
var actualData = '';
var viewcartPage = '';
var compare = '';
var productID = '';
var signin = '';
var shipping = '';
var payment = '';
var viewCartOverlayMPP = '';
var purchasePage = '';
var paymentEvent = '';
var purchasePageview = '';
var sppPageview = '';
var viewItemCount = '';
var prodClickMPP = '';
var beginCheckoutPage = '';
var shippingCost = '';
// var productDetails = '';
var reqStr1 = '';
var reqStr2 = '';
var skuIds = [];
var actualDataTrim = '';
var pID = '';
var exact = '';
var checkoutBasket = '';
var errs = 0;
var partial = '';
var pPrice = '';
var OrderConfirmationMsgid1 = '';
var closePopup = '';
var orderID = '';
var responseData = [];
var cookieAccept = '';
var en = '';
var analyticsDataActual = '';
var orderPagePopUpClose1 = '';
var viewcartcount = '';
var viewCartOverlaySPP = '';
var viewItemCountMPP = '';
var pVariant = '';
var pDetails = '';
var errMsg = '';
var GA4Regex1 = '';
var loginEvent = '';
var GA4Regex2 = '';
var tax;
var revenue;
var timeoutSetting = '';
var purchaseTag = '';
var viewPaymentTag = '';
var addPaymentTag = '';
var guestCkOutTag = '';
var labelTag = '';
var googleAnalytics = '';
var analyticsGoogle = '';
var viewTag = '';
var checkoutBasketTag = '';
var pageTemplateTag = '';
var addToCartTag = '';
var selectItemTag = '';
var mppTag = '';
var pageTypeTag = '';
var actionTag = '';
var viewItemListTag = '';
var addShippingTag = '';
var pageViewTag = '';
var homeTag = '';
var viewItemTag = '';
var posTen = '';
var sppTag = '';
var brandLocale = '';
var dataArray;
var navTime = '';
var emulationDevice = '';
var waitTime = '';
var regex1, reqStr;
var JSONPath = '';
var actualElement = '';
var loop = 5;
var regionJSONFilePath;
var localeCode = '';
var region;

// var beginCkOutTag='';

// This file is common template for multiple brands and locales
const fs = require('fs');
const JSONData = require('../../../../datainterface/data/json/analytics/globalGA4.json');
const Hengine = require('../../../../datainterface/providers/hengine');
const taikoOverride = require('../../helix_taiko');
// const reuable= require('../../ReUsableFunction')
const { URLSearchParams } = require('url');
const path = require('path');
// const { decode } = require('punycode');
// const { assert } = require('console');
const { $ } = require('taiko');
const assert = require('assert');
var t = require('taiko');
let siteDefinition, source, NullDataException;
const Helper = require('../../../helix/helpers/helper');
const Util = require('../../../../utilities/util');
// const { error } = require('console');
// const { hostname } = require('os');
// const { gatherElementMetadata } = require('../../../../plugins/self_heal');

var isDiscovery = process.env.ISDISCOVERY === 'true'; // Self-healing discovery
var doHeal = process.env.DOHEAL === 'true'; // Self-healing

var feature = 'Analytics';
const matchCondition = true;

function initTestEnvironment(siteDefinitions) {
  brandLocale = siteDefinitions.brandLocale;
  localeCode = brandLocale.split('-')[1];
}

function reinitialize() {
  console.log('BRAND AND LOCALE  :   ' + brandLocale);
  compare = regionJSONFilePath.filter((obj) => obj.brand === brandLocale)[0]
    .brandSpecs;
  analyticsDataActual = [];
  AnalFlag = false;
  actualData;
  responseData = [];
  const { productXpath, skuID } = compare[0];
  const {
    productAttributes,
    misc,
    prodImpression,
    XPathPurchase,
    revenueDetails,
    tagValues,
    msg,
  } = JSONData[0];
  ScrollDownvalue = JSON.stringify(misc.ScrollDownvalue).replace(/"/g, '');
  timeoutSetting = JSON.stringify(misc.timeoutSetting).replace(/"/g, '');

  skuIds = [skuID.sku1, skuID.sku2, skuID.sku3, skuID.sku4, skuID.sku4];

  /** ***************Extracting Product details from the admin tool************************/
  pDetails = JSON.stringify(productXpath.productDetails).replace(/"/g, '');
  pPrice = JSON.stringify(productAttributes.pPrice).replace(/"/g, '');
  pID = JSON.stringify(productAttributes.productID).replace(/"/g, '');
  pVariant = JSON.stringify(productAttributes.pVariant).replace(/"/g, '');
  posTen = parseInt(JSON.stringify(misc.posTen).replace(/"/g, ''));
  psize = JSON.stringify(productAttributes.pSize).replace(/"/g, '');
  pSkuID = JSON.stringify(productAttributes.pSkuID).replace(/"/g, '');

  // Home Page
  viewItemListCount = JSON.stringify(misc.view_item_list_Count_home).replace(
    /"/g,
    ''
  );
  homePageview = JSON.stringify(misc.home_pageview).replace(/"/g, '');
  homePage = JSON.stringify(misc.homePage).replace(/"/g, '');

  // PLP / PLP
  mppPageview = JSON.stringify(misc.mpp_pageview).replace(/"/g, '');
  PLP = JSON.stringify(misc.PLP).replace(/"/g, '');
  mppViewItemList = JSON.stringify(misc.mppViewItemList).replace(/"/g, '');
  mppAddToBagCount = JSON.stringify(misc.mppaddToBagCount).replace(/"/g, '');
  prodClickMPP = JSON.stringify(misc.prodClickMPP).replace(/"/g, '');
  productID = JSON.stringify(prodImpression.prodID).replace(/"/g, '');
  viewCartOverlayMPP = JSON.stringify(misc.view_cart_overlayMPP).replace(
    /"/g,
    ''
  );
  viewItemCountMPP = JSON.stringify(misc.viewItemCountMPP).replace(/"/g, '');

  // SPP / PDP
  prodClick = JSON.stringify(misc.prodClick).replace(/"/g, '');
  SPPviewItem = JSON.stringify(misc.SPPview_item).replace(/"/g, '');
  sppAddToBagCount = JSON.stringify(misc.sppaddToBag_count).replace(/"/g, '');
  SPP = JSON.stringify(misc.SPP).replace(/"/g, '');
  sppPageview = JSON.stringify(misc.spp_pageview).replace(/"/g, '');
  viewItemCount = JSON.stringify(misc.view_item_count).replace(/"/g, '');
  sppPageViewItemList = JSON.stringify(misc.sppPageViewItemList).replace(
    /"/g,
    ''
  );
  checkoutBasket = JSON.stringify(misc.checkoutBasket).replace(/"/g, '');

  // view cart
  viewcartPageview = JSON.stringify(misc.viewcart_pageview).replace(/"/g, '');
  viewcartcount = JSON.stringify(misc.viewcartcount).replace(/"/g, '');

  // from checkout
  orderPagePopUpClose1 = JSON.stringify(
    XPathPurchase.orderPagePopUpClose1
  ).replace(/"/g, '');
  tax = JSON.stringify(revenueDetails.tax).replace(/"/g, '');
  revenue = JSON.stringify(revenueDetails.revenue).replace(/"/g, '');
  shippingCost = JSON.stringify(revenueDetails.shipping).replace(/"/g, '');
  cookieAccept = JSON.stringify(misc.acceptCookie).replace(/"/g, '');
  signin = JSON.stringify(misc.signin).replace(/"/g, '');
  shipping = JSON.stringify(misc.shipping).replace(/"/g, '');
  payment = JSON.stringify(misc.payment).replace(/"/g, '');

  // purchase = JSON.stringify(JSONData[0].misc.purchase).replace(/"/g, '');
  purchasePageview = JSON.stringify(misc.purchase_pageview).replace(/"/g, '');
  paymentEvent = JSON.stringify(misc.Payment_event).replace(/"/g, '');
  addShippingInfoCount = JSON.stringify(misc.addShippingInfoCount).replace(
    /"/g,
    ''
  );
  beginCheckoutPage = JSON.stringify(misc.beginCheckoutPage).replace(/"/g, '');
  loginEvent = JSON.stringify(misc.login_event).replace(/"/g, '');
  OrderConfirmationMsgid1 = JSON.stringify(
    XPathPurchase.OrderConfirmationMsgid1
  ).replace(/"/g, '');

  // Misc
  actualDataTrim = JSON.stringify(misc.actualDataTrim).replace(/"/g, '');
  GA4Regex1 = JSON.stringify(misc.AnalRegex).replace(/"/g, '');
  GA4Regex2 = JSON.stringify(misc.AnalRegex1).replace(/"/g, '');
  closePopup = JSON.stringify(misc.closePopup).replace(/"/g, '');
  homeTag = JSON.stringify(tagValues.home).replace(/"/g, '');
  pageViewTag = JSON.stringify(tagValues.pageView).replace(/"/g, '');
  viewItemListTag = JSON.stringify(tagValues.viewItemList).replace(/"/g, '');
  addShippingTag = JSON.stringify(tagValues.addShippingTag).replace(/"/g, '');
  viewItemTag = JSON.stringify(tagValues.viewItem).replace(/"/g, '');
  actionTag = JSON.stringify(tagValues.action).replace(/"/g, '');
  mppTag = JSON.stringify(tagValues.mpp).replace(/"/g, '');
  selectItemTag = JSON.stringify(tagValues.selectItem).replace(/"/g, '');
  addToCartTag = JSON.stringify(tagValues.addToCart).replace(/"/g, '');
  pageTemplateTag = JSON.stringify(tagValues.pageTemplate).replace(/"/g, '');

  checkoutBasketTag = JSON.stringify(tagValues.checkoutBaket).replace(/"/g, '');
  pageTypeTag = JSON.stringify(tagValues.pageTypeTag).replace(/"/g, '');
  viewTag = JSON.stringify(tagValues.view).replace(/"/g, '');
  labelTag = JSON.stringify(tagValues.label).replace(/"/g, '');
  guestCkOutTag = JSON.stringify(tagValues.guestCkOut).replace(/"/g, '');
  // beginCkOutTag = JSON.stringify(tagValues.beginCkOut).replace(/"/g, '');
  addPaymentTag = JSON.stringify(tagValues.addPayment).replace(/"/g, '');
  viewPaymentTag = JSON.stringify(tagValues.viewPayment).replace(/"/g, '');
  purchaseTag = JSON.stringify(tagValues.purchase).replace(/"/g, '');
  sppTag = JSON.stringify(tagValues.spp).replace(/"/g, '');
  // delvieryTypeTag = JSON.stringify(tagValues.delvieryType).replace(/"/g, '');
  // delvieryStdTag = JSON.stringify(tagValues.delvieryStd).replace(/"/g, '');
  googleAnalytics = JSON.stringify(misc.googleAnalytics).replace(/"/g, '');
  analyticsGoogle = JSON.stringify(misc.analyticsGoogle).replace(/"/g, '');
  navTime = parseInt(JSON.stringify(misc.navTime).replace(/"/g, ''));
  en = JSON.stringify(tagValues.en).replace(/"/g, '');
  errMsg = JSON.stringify(msg.errMsg).replace(/"/g, '');
  // JSONPath = JSON.stringify(misc.JSONPath).replace(/"/g, '');
  exact = JSON.stringify(misc.exact).replace(/"/g, '');
  partial = JSON.stringify(misc.partial).replace(/"/g, '');
}

// Read from JSON file and navigate to correct JSON file
async function getJSONFilePath() {
  const regionValues = ['NA', 'UK', 'EMEA', 'LATAM', 'APAC'];
  for (let i = 0; i < regionValues.length; i++) {
    const regionVal = regionValues[i];
    // console.log("regionValue is: "+regionVal);
    for (let j = 0; j < JSONData[0].regionFromLocal[regionVal].length; j++) {
      const localValue = JSONData[0].regionFromLocal[regionVal][j];
      // console.log("localeCode is: "+localeCode);
      if (localeCode === localValue) {
        //  console.log("localValue is: "+localValue);
        region = regionVal;
        i = regionValues.length;
        break;
      }
    }
  }
  console.log('region:' + region);
}
function generateJSONFileName() {
  getJSONFilePath();
  const returnRegionPath = path.join(
    __dirname,
    '../../specs/analytics/data/' + [region] + 'GA4.json'
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
  // regionJSONFilePath = require(JSONPath);

  // Re-initialize variables
  reinitialize();
  gauge.message('ENVIRONMENT : ' + siteDefinition.executionContext.environment);
}

// async function initAutoHeal() {
//   let apisToOverride = { $, evaluate };
//   let inclusivityFields = { brandLocale, feature };
//   ({ $, evaluate } = await taikoOverride.override(
//     apisToOverride,
//     inclusivityFields,
//     isDiscovery,
//     doHeal
//   ));
// }
// Write the data into the JSON file

function writeToJSON() {
  // eslint-disable-next-line node/prefer-promises/fs
  fs.writeFile(JSONPath, JSON.stringify(regionJSONFilePath), (err) => {
    if (err) throw err;
    // console.log("Actual product details are written to the JSON file for comparison");
  });
}

let prodID = '';

async function trackImpressions(IDPath) {
  var count = '';
  await t.scrollDown(parseInt(ScrollDownvalue), {
    waitForEvents: 'DOMContentLoaded',
    continueOnFailure: true,
  });
  const objImp = {};
  count = (await $(IDPath).elements()).length;
  for (let i = 1; i <= Math.min(count, loop); i++) {
    prodID = await $('(' + IDPath + ')[' + i + ']').attribute(
      'data-product-id'
    );
    if (prodID === null) {
      prodID = await $('(' + IDPath + ')[' + i + ']').attribute(
        'data-productid'
      );
    }
    if (prodID === null) {
      prodID = await $('(' + IDPath + ')[' + i + ']').attribute(
        'data-product-productid-value'
      );
    }
    let prodImpression;
    if (prodID.includes('PROD')) {
      prodImpression = 'id' + prodID;
    } else {
      prodImpression = 'idPROD' + prodID;
    }
    const tempIDKey = 'pr' + [i];
    objImp[tempIDKey] = prodImpression;
    // console.log("imp list: "+objImp[tempIDKey]);
    compare[0].impressionList = objImp;
    writeToJSON();
  }
}
async function fetchProductDetails() {
  compare = regionJSONFilePath.filter((obj) => obj.brand === brandLocale)[0]
    .brandSpecs;
  for (let i = 0; i < loop; i++) {
    await t.goto(
      siteDefinition.executionContext.adminUrl + pDetails + skuIds[i],
      {
        waitForEvents: ['DOMContentLoaded'],
      }
    );
    compare[0].productValues[i] = {
      productID: 'id' + (await $(pID).text()),
      pPrice: await $(pPrice).text(),
      pVariant: await $(pVariant).text(),
      psize: await $(psize).text(),
      pSkuID: await $(pSkuID).text(),
    };
    console.log(
      'Product details collected:  ' + compare[0].productValues[i].productID
    );
    writeToJSON();
  }
  if (!assert) {
    console.log(errMsg);
  }
}

let a = 0;
let value1;
let compareProductValues = '';
function compareJSON(expectedData, GA4Tag, verify) {
  const tags = Object.keys(expectedData);
  if (AnalFlag) {
    for (let i = 0; i < tags.length; i++) {
      for (const [key, value] of GA4Tag) {
        if (verify === exact) {
          if (
            Object.keys(expectedData)[i] === key &&
            value.includes(Object.values(expectedData)[i])
          ) {
            gauge.message(
              `${key} = ${Object.values(expectedData)[i]} is verified`
            );
          } else if (
            Object.keys(expectedData)[i] === key &&
            Object.values(expectedData)[i] !== value
          ) {
            // if(key === "tt" && value === "automated_bot_testing"){
            // gauge.message(`${key} = ${value} is verified`);
            // } else{
            gauge.message(
              `<b>${key} = ${Object.values(expectedData)[i]} is NOT VERIFIED. Expected to fire => ${value}</b>`
            );
            // }
          }
        } else if (verify === partial) {
          const expectedProductId =
            value.split('~').find((pair) => pair.startsWith('id')) || null;
          const matchingProducts = Object.values(expectedData).filter(
            (product) => product.productID === expectedProductId
          );
          if (matchingProducts.length === 1) {
            console.log(matchingProducts);
            compareProductValues = [
              matchingProducts[0].productID,
              matchingProducts[0].pPrice,
              matchingProducts[0].pVariant,
              matchingProducts[0].psize,
              matchingProducts[0].pSkuID,
            ];
            console.log('Compared Product values:' + compareProductValues);
            const foundValues = compareProductValues.filter((val) =>
              value.includes(val)
            );
            if (foundValues.length > 0) {
              console.log(`Found values: ${foundValues.join(', ')}`);
              value1 = value;
              a = 1;
            } else {
              console.log(
                "None of the compareProductValues are present in the 'value' string."
              );
              a = 0;
            }
          }
        } else if (verify === 'impression') {
          if (
            Object.keys(expectedData)[i] === key &&
            value.includes(Object.values(expectedData)[i])
          ) {
            gauge.message(`${key} = ${value} is verified`);
          }
        }
      }
    }
  }
  if (a === 1) {
    gauge.message('pr1 = ' + value1 + 'are the details verified');
  }
  a = 0;
}

async function interceptGA4() {
  regex1 = new RegExp(GA4Regex1 | GA4Regex2, 'gm');
  await t.intercept(regex1, (request) => {
    reqStr = JSON.stringify(request);
    analyticsDataActual.push(reqStr);
    reqStr1 = JSON.stringify(request.request.postData);
    reqStr2 = JSON.stringify(request.request.url);
    responseData.push(reqStr1);
    responseData.push(reqStr2);
    request.continue();
  });
}

async function FetchRevenueDetails() {
  {
    t.setConfig({ waitForEvents: ['DOMContentLoaded'] });
  }
  console.log('REVENUE DETIALS');
  let revenue1 = await $(revenue).text();
  revenue1 = parseFloat(revenue1.replace(/[^0-9\\.]+/g, ''));
  let tax1;
  if (await $(tax).exists()) {
    tax1 = await $(tax).text();
    tax1 = tax1.replace(/[^0-9\\.]+/g, '');
  } else {
    tax1 = 0;
  }
  let shippingRevenue = await $(shippingCost).text();
  if (shippingRevenue === 'Free') {
    shippingRevenue = 0;
  } else {
    shippingRevenue = shippingRevenue.replace(/[^0-9\\.]+/g, '');
  }
  console.log(revenue1 + '= revenue');
  console.log(tax1 + '= tax');
  console.log(shippingRevenue + '= shipping');
  compare[0].revenueInfo.tr = revenue1;
  if (shippingRevenue !== 0) {
    compare[0].revenueInfo.ts = shippingRevenue;
  }
  compare[0].revenueInfo.tt = tax1;
  writeToJSON();
}
// intercepting the analytics url

// Accept Cookies
async function acceptCookies() {
  t.setConfig({ waitForEvents: ['DOMContentLoaded'] });
  if (await (await $(cookieAccept)).exists()) {
    await t.evaluate(await $(cookieAccept), (ele) => ele.click());
    console.log('Cookie banner accepted');
  }
}

async function afterPlacingOrderPopUp() {
  await (await $(orderPagePopUpClose1)).exists(waitTime, navTime);
  console.log('POP UP CLOSE');
  try {
    await t.evaluate(await $(orderPagePopUpClose1), (ele) => {
      ele.focus();
      ele.click();
    });

    /** orderpage Popup Close is applicable for few Brand/Locale/platform(PC) */
  } catch (e) {
    gauge.message(
      'Orderpage Popup is not displayed and hence this step is skipped'
    );
  }
}
// Incepting the URL
async function orderValidation() {
  await afterPlacingOrderPopUp();
  gauge.screenshot();
  console.log('ORDER CONFIRMATION');
  if (await (await $(OrderConfirmationMsgid1)).exists()) {
    assert(true);
    orderID = await (await $(OrderConfirmationMsgid1)).text();
    gauge.message('Order placed successfully');
    gauge.message('ORDER ID' + orderID);
    console.log('ORDER ID' + orderID);
    gauge.screenshot();
    compare[0].revenueInfo.transactionId = orderID;
    writeToJSON();
  } else {
    gauge.message('Order not placed');
    assert(false);
  }
}

/** ************GA4 TAG VALIDATION*****************/

function validateHomePagePageview(actual) {
  if (actual.get(en) === pageViewTag) {
    AnalFlag = true;
    homePage = 1;
    gauge.message(`<h4> Home page Pageview</h4 >`);
    console.log(`<h4> Home page</h4 >`);
    compareJSON(compare[0].BrandInfo, actual, exact);
    compareJSON(JSONData[0].Home, actual, exact);
    compareJSON(JSONData[0].pageview, actual, exact);
    homePageview++;
  }
}
function validatePLPforRequest(actual) {
  PLP = 1;
  console.log('PLP...');
  if (actual.get(en) === pageViewTag) {
    AnalFlag = true;
    gauge.message(`<h4> PLP Page view</h4 >`);
    console.log(`Validating PLP Pageview now... `);
    compareJSON(compare[0].BrandInfo, actual, exact);
    compareJSON(JSONData[0].PLPTag, actual, exact);
    compareJSON(JSONData[0].pageview, actual, exact);
    mppPageview++;
  } else if (actual.get(en) === selectItemTag) {
    prodClickMPP = 1;
    AnalFlag = true;
    gauge.message(`<h4> product Click</h4 > `);
    console.log('Validation Select Item now...');
    compareJSON(compare[0].BrandInfo, actual, exact);
    compareJSON(JSONData[0].productClick, actual, exact);
    compareJSON(JSONData[0].PLPTag, actual, exact);
    compareJSON(compare[0].productValues, actual, partial);
    prodClick++;
  } else if (actual.get(actionTag) === viewItemTag) {
    AnalFlag = true;
    gauge.message(`<h4> Quick View - View Item</h4 > `);
    console.log('Validating Quick view now...');
    compareJSON(compare[0].BrandInfo, actual, exact);
    compareJSON(JSONData[0].viewItem, actual, exact);
    compareJSON(JSONData[0].PLPTag, actual, exact);
    compareJSON(compare[0].productValues, actual, 'impression');
    viewItemCount++;
    gauge.message(PLP + '   PLP   ' + viewItemCountMPP + '   viewItemCount');
  } else if (actual.get(en) === addToCartTag) {
    AnalFlag = true;
    gauge.message(`<h4> PLP addToBag</h4 > `);
    console.log('Validating Add to bag now...');
    compareJSON(compare[0].BrandInfo, actual, exact);
    compareJSON(JSONData[0].PLPTag, actual, exact);
    compareJSON(JSONData[0].addToBag, actual, exact);
    compareJSON(compare[0].productValues, actual, partial);
    mppAddToBagCount++;
  }
}
function validatePDPforRequest(actual) {
  SPP = 1;
  console.log('PDP...');
  // t.waitFor(waitTime);
  if (actual.get(en) === pageViewTag) {
    AnalFlag = true;
    gauge.message(`<h4> PDP</h4 > `);
    compareJSON(compare[0].BrandInfo, actual, exact);
    compareJSON(JSONData[0].PDP, actual, exact);
    compareJSON(JSONData[0].pageview, actual, exact);
    sppPageview++;
  } else if (actual.get(en) === addToCartTag) {
    gauge.message(`<h4> PDP Add to cart</h4 > `);
    console.log(`<h4> PDP Add to cart</h4 > `);
    AnalFlag = true;
    compareJSON(compare[0].BrandInfo, actual, exact);
    compareJSON(JSONData[0].PDP, actual, exact);
    compareJSON(JSONData[0].addToBag, actual, exact);
    compareJSON(compare[0].productValues, actual, partial);
    sppAddToBagCount++;
  } else if (actual.get(en) === checkoutBasketTag) {
    AnalFlag = true;
    compareJSON(compare[0].BrandInfo, actual, exact);
    compareJSON(JSONData[0].checkoutBasketTags, actual, exact);
    compareJSON(JSONData[0].PDP, actual, exact);
    checkoutBasket++;
  } else if (actual.get(actionTag) === viewItemTag) {
    AnalFlag = true;
    gauge.message(`<h4> SPP View Item</h4 > `);
    compareJSON(compare[0].BrandInfo, actual, exact);
    compareJSON(JSONData[0].viewItem, actual, exact);
    compareJSON(JSONData[0].PDP, actual, exact);
    compareJSON(compare[0].productValues, actual, partial);
    viewItemCount++;
    gauge.message(SPP + '   SPP   ' + viewItemCount + '   viewItemCount');
  } else if (actual.get(actionTag) === viewItemListTag) {
    AnalFlag = true;
    gauge.message(`<h4> SPP View Item List</h4 > `);
    compareJSON(compare[0].BrandInfo, actual, exact);
    compareJSON(JSONData[0].viewItem, actual, exact);
    compareJSON(JSONData[0].PDP, actual, exact);
    compareJSON(compare[0].impressionList, actual, 'impression');
    viewItemCount++;
    gauge.message(SPP + '   SPP   ' + viewItemCount + '   viewItemCount');
  }
}
function validateViewcartForPalyload(actual) {
  viewcartPage = 1;
  AnalFlag = true;
  gauge.message(`<h4> viewcartPage</h4 > `);
  compareJSON(compare[0].BrandInfo, actual, exact);
  compareJSON(JSONData[0].viewcartPageTag, actual, exact);
  compareJSON(compare[0].impressionList, actual, 'impression');
  if (actual.get('en') === 'pageview') {
    compareJSON(JSONData[0].pageview, actual, exact);
    viewcartPageview++;
  }
}

async function ga4TagValidation() {
  compare = regionJSONFilePath.filter((obj) => obj.brand === brandLocale)[0]
    .brandSpecs;
  t.waitFor(waitTime, { waitForEvents: 'DOMContentLoaded' }); // Wait for the payload request to load.
  await acceptCookies();
  // eslint-disable-next-line no-extra-parens
  if (await await $(shippingCost).exists()) {
    await FetchRevenueDetails();
  }
  if (await (await $(OrderConfirmationMsgid1)).exists()) {
    await orderValidation();
  }
  await t.scrollDown(parseInt(ScrollDownvalue), {
    waitForEvents: 'DOMContentLoaded',
  }),
    analyticsDataActual.forEach((element) => {
      if (element.includes(actualDataTrim)) {
        actualElement = element
          .trim()
          .split(',')[1]
          .split(googleAnalytics)
          .pop();
      } else {
        actualElement = element
          .trim()
          .split(',')[1]
          .split(analyticsGoogle)
          .pop();
      }
      actualElement = decodeURIComponent(actualElement);
      actualData = new URLSearchParams(actualElement);
      AnalFlag = false;
      for (const [key, value] of actualData) {
        if (key === pageTypeTag && value === homeTag) {
          validateHomePagePageview(actualData);
        }
        if (key === pageTemplateTag && value === mppTag) {
          validatePLPforRequest(actualData);
        }
        if (key === pageTemplateTag && value === sppTag) {
          validatePDPforRequest(actualData);
        }
        if (key === actionTag && value === viewTag) {
          validateViewcartForPalyload(actualData);
        }
      }
      if (AnalFlag) {
        gauge.message(`<b> GA4 tag:</b > <b>${actualData}</b>`);
        gauge.message(
          '************************************************************************'
        );
      }
    });
  analyticsDataActual = [];
}

function validateForHome(payloadReq) {
  homePage = 1;
  if (payloadReq.get(en) === viewItemListTag) {
    gauge.message(`<h4> Home page View Item List</h4 > `);
    console.log('Home page View Item List');
    AnalFlag = true;
    compareJSON(compare[0].BrandInfo, payloadReq, exact);
    compareJSON(JSONData[0].viewItemList, payloadReq, exact);
    compareJSON(JSONData[0].Home, payloadReq, exact);
    compareJSON(compare[0].impressionList, payloadReq, 'impression');
    viewItemListCount++;
  }
}
function validateForPLP(payloadReq) {
  PLP = 1;
  if (payloadReq.get(en) === viewItemListTag) {
    gauge.message(`<h4>PLP View Item List</h4 > `);
    console.log('PLP View Item List');
    AnalFlag = true;
    compareJSON(compare[0].BrandInfo, payloadReq, exact);
    compareJSON(JSONData[0].viewItemList, payloadReq, exact);
    compareJSON(JSONData[0].PLPTag, payloadReq, exact);
    compareJSON(compare[0].impressionList, payloadReq, 'impression');
    mppViewItemList++;
  } else if (payloadReq.get(en) === addToCartTag) {
    AnalFlag = true;
    gauge.message(`<h4> PLP addToBag</h4 > `);
    compareJSON(compare[0].BrandInfo, payloadReq, exact);
    compareJSON(JSONData[0].PLPTag, payloadReq, exact);
    compareJSON(JSONData[0].addToBag, payloadReq, exact);
    compareJSON(compare[0].productValues, payloadReq, partial);
    viewCartOverlayMPP++;
    mppAddToBagCount++;
  }
}
function validateForPDP(payloadReq) {
  SPP = 1;
  if (payloadReq.get(en) === viewItemTag && !payloadReq.get(labelTag)) {
    AnalFlag = true;
    gauge.message(`<h4> PDP view item</h4 > `);
    compareJSON(compare[0].BrandInfo, payloadReq, exact);
    compareJSON(JSONData[0].viewItem, payloadReq, exact);
    compareJSON(JSONData[0].PDP, payloadReq, exact);
    compareJSON(compare[0].productValues, payloadReq, partial);
    SPPviewItem++;
  }
  if (payloadReq.get(en) === viewItemListTag) {
    gauge.message(`<h4>PDP View Item List</h4 > `);
    console.log('Validating PDP View Item List now...');
    AnalFlag = true;
    compareJSON(compare[0].BrandInfo, payloadReq, exact);
    compareJSON(JSONData[0].viewItemList, payloadReq, exact);
    compareJSON(JSONData[0].PDP, payloadReq, exact);
    compareJSON(compare[0].impressionList, payloadReq, 'impression');
    sppPageViewItemList++;
  } else if (payloadReq.get(en) === checkoutBasketTag) {
    AnalFlag = true;
    console.log('Validating Checkout basket now...');
    compareJSON(compare[0].BrandInfo, payloadReq, exact);
    compareJSON(JSONData[0].checkoutBasketTags, payloadReq, exact);
    compareJSON(JSONData[0].PDP, payloadReq, exact);
    compareJSON(compare[0].productValues, payloadReq, partial);
    checkoutBasket++;
  } else if (payloadReq.get(en) === addToCartTag) {
    AnalFlag = true;
    gauge.message(`<h4> PDP addToBag</h4 > `);
    compareJSON(compare[0].BrandInfo, payloadReq, exact);
    compareJSON(JSONData[0].PDP, payloadReq, exact);
    compareJSON(JSONData[0].addToBag, payloadReq, exact);
    compareJSON(compare[0].productValues, payloadReq, partial);
    viewCartOverlayMPP++;
    sppAddToBagCount++;
  }
}

function ValidateCartPage(payloadReq) {
  viewcartPage = 1;
  if (payloadReq.get(en) === pageViewTag) {
    AnalFlag = true;
    gauge.message(`<h4> View Cart pageview</h4 > `);
    compareJSON(compare[0].BrandInfo, payloadReq, exact);
    compareJSON(JSONData[0].pageview, payloadReq, exact);
    compareJSON(JSONData[0].cart, payloadReq, exact);
    compareJSON(compare[0].productValues, payloadReq, partial);
    viewcartPageview++;
  } else if (payloadReq.get(pageTemplateTag) === 'pageview') {
    gauge.message(`<h4> View cart page view</h4 > `);
    AnalFlag = true;
    compareJSON(JSONData[0].pageview, payloadReq, exact);
  } else if (payloadReq.get(en) === 'view_cart') {
    AnalFlag = true;
    gauge.message(`<h4> View Cart</h4 > `);
    compareJSON(compare[0].BrandInfo, payloadReq, exact);
    compareJSON(JSONData[0].viewcartTag, payloadReq, exact);
    compareJSON(JSONData[0].viewcartTagging, payloadReq, exact);
    compareJSON(compare[0].productValues, payloadReq, partial);
    viewcartcount++;
  }
}

function validateGuestUserCheckout(payloadReq) {
  signin = 1;
  AnalFlag = true;
  gauge.message(`<h4> Guest Checkout </h4 > `);
  compareJSON(compare[0].BrandInfo, payloadReq, exact);
  compareJSON(JSONData[0].checkout, payloadReq, exact);
  compareJSON(JSONData[0].guestCheckout, payloadReq, exact);
  compareJSON(compare[0].productValues, payloadReq, partial);
  loginEvent++;
}
function validateBeginCheckout(payloadReq) {
  signin = 1;
  gauge.message(`<h4> BEGIN CHECKOUT</h4 > `);
  AnalFlag = true;
  compareJSON(compare[0].BrandInfo, payloadReq, exact);
  compareJSON(JSONData[0].checkout, payloadReq, exact);
  compareJSON(JSONData[0].beginCheckout, payloadReq, exact);
  compareJSON(compare[0].productValues, payloadReq, partial);
  beginCheckoutPage++;
}
function validateShippingPage(payloadReq) {
  shipping = 1;
  gauge.message(`<h4> ADD PAYMENT INFO</h4 > `);
  AnalFlag = true;
  compareJSON(compare[0].BrandInfo, payloadReq, exact);
  compareJSON(JSONData[0].checkout, payloadReq, exact);
  compareJSON(JSONData[0].paymentCC, payloadReq, exact);
  compareJSON(compare[0].productValues, payloadReq, partial);
  addShippingInfoCount++;
}
function validateAddShipping(payloadReq) {
  gauge.message(`<h4> ADD SHIPPING INFO</h4 > `);
  AnalFlag = true;
  compareJSON(compare[0].BrandInfo, payloadReq, exact);
  compareJSON(JSONData[0].checkout, payloadReq, exact);
  compareJSON(JSONData[0].addShippingInfo, payloadReq, exact);
  compareJSON(compare[0].productValues, payloadReq, partial);
  loginEvent = 1;
}
function validateViewPayment(payloadReq) {
  payment = 1;
  paymentEvent = 1;
  gauge.message(`<h4> VIEW PAYMENT INFO</h4 > `);
  AnalFlag = true;
  compareJSON(compare[0].BrandInfo, payloadReq, exact);
  compareJSON(JSONData[0].checkout, payloadReq, exact);
  compareJSON(JSONData[0].paymentInfo, payloadReq, exact);
  compareJSON(compare[0].productValues, payloadReq, partial);
}
function validatePurchase(payloadReq) {
  purchasePage = 1;
  gauge.message(`<h4> PURCHASE</h4 > `);
  AnalFlag = true;
  compareJSON(compare[0].BrandInfo, payloadReq, exact);
  compareJSON(JSONData[0].purchase, payloadReq, exact);
  compareJSON(compare[0].OrderID, payloadReq, exact);
  compareJSON(compare[0].productValues, payloadReq, partial);
  compareJSON(compare[0].revenueInfo, payloadReq, partial);
  purchasePageview++;
}
let payloadReq;
responseData;
async function ga4ReqPaloadTagValidation() {
  t.waitFor(navTime);
  responseData.forEach((resElement) => {
    if (resElement === undefined || null) {
      //      console.log("No tags to verify");
      AnalFlag = false;
    } else if (resElement.includes('en=')) {
      console.log('Data Iteration:  ' + resElement);
      dataArray = JSON.stringify(resElement).split(/(?=en=)/);
      dataArray.forEach((data) => {
        data.replace(/"\\/g, '');
        // console.log("Iteration: " + data);
        payloadReq = new URLSearchParams(data);
        for (const [key, value] of payloadReq) {
          if (key === pageTemplateTag && value === homeTag) {
            validateForHome(payloadReq);
          }
          if (key === pageTemplateTag && value === mppTag) {
            validateForPLP(payloadReq);
          }
          if (key === pageTemplateTag && value === sppTag) {
            validateForPDP(payloadReq);
          }
          if (key === labelTag && value === guestCkOutTag) {
            validateGuestUserCheckout(payloadReq);
          }
          if (key === en && value === beginCheckoutPage) {
            validateBeginCheckout(payloadReq);
          }
          if (key === en && value === guestCkOutTag) {
            validateGuestUserCheckout(payloadReq);
          }
          if (key === en && value === addPaymentTag) {
            validateShippingPage(payloadReq);
          }
          if (key === en && value === addShippingTag) {
            validateAddShipping(payloadReq);
          }
          if (key === pageTypeTag && value === 'cart') {
            ValidateCartPage(payloadReq);
          }
          if (key === actionTag && value === viewPaymentTag) {
            validateViewPayment(payloadReq);
          }
          if (key === en && value === purchaseTag) {
            validatePurchase(payloadReq);
          }
          // if (key === en && value === pageViewTag) {
          //   validatePageView(payloadReq);
          // }
        }
      });
      if (AnalFlag) {
        gauge.message(`<b> GA4 Payload Request:</b > <b>${payloadReq}</b>`);
        gauge.message(
          '************************************************************************'
        );
      }
    }
    payloadReq = [];
  });
  responseData = [];
}

function report(page, tagging, tagName) {
  const pass =
    '  => ' + tagName + ' Tagging = ' + tagging + '  is firing as expected';
  const fail =
    '  => ' + tagName + ' Tagging = ' + tagging + '  is NOT FIRED as expected';
  switch (true) {
    case tagging === 1:
      gauge.message(pass);
      break;
    case tagging < 1:
      if (viewItemListCount < 1 || viewItemCount < 1) {
        gauge.message(pass);
      } else {
        gauge.message(fail);
        errs = 1;
      }
      break;
    case tagging > 1:
      if (mppViewItemList > 1 || viewItemListCount > 1) {
        gauge.message(pass);
      } else {
        gauge.message(fail);
        errs = 1;
      }
      break;
  }
}
function errorMsg(msg) {
  if (msg === 1) {
    gauge.message(errMsg);
    assert(false, 'Check for tags firings, tags are not firing as expected');
  }
}
function finalReport() {
  if (homePage === 1) {
    gauge.message('Home Page');
    report('Home Page', homePageview, 'Home Page View');
    report('Home Page', viewItemListCount, 'Home page view_item_list');
  }
  if (PLP === 1) {
    gauge.message('PLP');
    report('PLP ', mppPageview, 'PLP Page view');
    report('PLP ', mppViewItemList, 'PLP view_Item_list');

    if (prodClickMPP === 1) {
      report('PLP', viewItemCountMPP, 'Product details');
      report('PLP', prodClick, 'Select item');
    }
    if (mppAddToBagCount === 1) {
      report('PLP', mppAddToBagCount, 'PLP Add to bag');
      report('PLP', viewCartOverlayMPP, 'PLP view cart Overlay');
    }
  }
  if (SPP === 1) {
    gauge.message('PDP');
    report('PDP', sppPageview, 'PDP Pageview');
    report('PDP', sppPageViewItemList, 'PDP View_item_list');
    report('PDP', SPPviewItem, 'PDP view_item');
    if (sppAddToBagCount === 1) {
      report('PDP', sppAddToBagCount, 'PDP Add to bag');
      report('PDP', viewCartOverlaySPP, 'PDP view cart overlay');
      report('PDP', checkoutBasket, 'checkout Basket');
    }
  }
  if (viewcartPage === 1) {
    gauge.message('View Cart');
    report('View Cart', viewcartPageview, 'View Cart');
    report('View Cart', viewcartcount, 'viewcart Page');
  }
  if (signin === 1) {
    gauge.message('Sign in');
    report('login Event', loginEvent, 'LOGIN');
    report('Begin Checkout', beginCheckoutPage, 'Begin Checkout');
  }
  if (shipping === 1) {
    gauge.message('Shipping');
    report('Shipping', addShippingInfoCount, 'Add Shipping Info');
  }
  if (payment === 1) {
    gauge.message('Payment');
    report('Payment', paymentEvent, 'Add Shipping Info');
  }
  if (purchasePage === 1) {
    gauge.message('Purchase');
    report('PURCHASE', purchasePageview, 'Ordr confirmation');
  }
}
// Initialize GA4 in HELIX
step('GA4 Initialize Helix', async function () {
  // Initialize the selectors from DB
  t.setConfig({
    waitForNavigation: false,
    navigationTimeout: parseInt(timeoutSetting, posTen),
  });
  await initFrameworkSettings();
});

// Intercept, set window size, Akamai bypass, API ENV setting, Perlgem cookie setting
// Test order flag setting, Fetching the details of the products to be passed
// and accept cookies are handled in the step call
step('GA4 Intercept for Analytics', async function () {
  const platform = siteDefinition.executionContext.platform.toUpperCase();
  if (platform === 'MOBILE') {
    await t.emulateDevice(emulationDevice);
    gauge.message('Emulation device: ' + emulationDevice);
  }
  await t.setConfig({ navigationTimeout: parseInt(timeoutSetting, navTime) });
  await Helper.setWindowSize(Util.ScreenSizes['1040p'], t);
  await Helper.setAdroll(siteDefinition, t);
  await Helper.setAkamaiBypass(siteDefinition, t);
  await Helper.setApiEnv(siteDefinition, t);
  await Helper.getPerlgemEnvCookie(siteDefinition, t);
  await Helper.setRevisionTag(siteDefinition, t);
  await Helper.setTestOrderCookie(siteDefinition, t);
  await interceptGA4();
  await fetchProductDetails();
});

// Collect product details and impression list and compare GA4 taggings against the requirement
step(
  'GA4 Analytics validation',
  { waitForEvents: 'DOMContentLoaded' },
  async () => {
    if (await $(closePopup).exists()) {
      await Helper.closePopups(closePopup, t);
    }
    if (await $(productID).exists()) {
      await trackImpressions(productID);
    }
    await ga4TagValidation();
    await ga4ReqPaloadTagValidation();
  }
);

// Final report Summerization
step('GA4 final report', { waitForEvents: 'DOMContentLoaded' }, async () => {
  finalReport();
  errorMsg(errs);
});
