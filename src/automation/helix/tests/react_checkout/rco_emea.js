var rcoOfferCodeAccordion = '';
var rcoMobOfferCodeAccordion = '';
var rcoEnterValidOfferCode = '';
var rcoApplyOfferButton = '';
var rcoOfferCodeAssertMsg = '';
var rcoCartContinueBtn = '';
var rcoSamplesPageCtnBtn = '';
var rcoPSAEditShipAdd = '';
var rcoPSAEnterFirstName = '';
var rcoBilShipAddCheckbox = '';
var rcoBilEnterFirstName = '';
var rcoBilEnterLastName = '';
var rcoBilSelectCity = '';
var rcoBilClickAdd1DD = '';
var rcoBilClickAdd1DDValue = '';
var rcoBilSelectDistrict = '';
var rcoBilClickAdd2DD = '';
var rcoBilClickAdd2DDValue = '';
var rcoBilSelectNeighbourhood = '';
var rcoBilClickAdd3DD = '';
var rcoBilClickAdd3DDValue = '';
var rcoScrollUpvalue = '';
var rcoScrollDown = '';
var rcoBilSelectAvenue = '';
var rcoBilClickAdd4DD = '';
var rcoBilClickAdd4DDValue = '';
var rcoBilBuildingNo = '';
var rcoBilEnterPhone = '';
var rcoBilEnterAdd1 = '';
var rcoBilEnterAdd2 = '';
var rcoBilEnterZipcode = '';
var rcoBilEnterCity = '';
var rcoBilSelectState = '';
var rcoBilState = '';
var rcoContinueToPayment = '';
var rcoMobContinueToPayment = '';
var rcoEditAddValidation = '';
var rcoClickRULink = '';
var rcoReturnUserEmailId = '';
var rcoReturnUserPwd = '';
var rcoRUSigninButton = '';
var rcoMobClickRULink = '';
var rcoMobReturnUserEmailId = '';
var rcoMobReturnUserPwd = '';
var rcoMobRUSigninButton = '';
var rcoSCReturnUserEmailId = '';
var rcoMobSCReturnUserEmailId = '';
var rcoEditAdd = '';
var rcoEditEnterFirstName = '';
var rcoSaveEditAdd = '';
var rcoSelectBilAdd = '';
var rcoPaymentTandC = '';
var rcoClickCtnPaymentBtn = '';
var rcoSavedCC = '';
var rcoCvv = '';
var rcoCCTandC = '';
var rcoClickCCCtnBtn = '';

var RCORUID = [];
var SCRCORUID = [];
var rcoApplyOfferCode = [];
var rcoMobApplyOfferCode = [];
var rcoEditPayPageShipAdd = [];
var rcoBillingAddressCheckBox = [];
var rcoBillingAddressDetails = [];
var rcoClickContinueToPayment = [];
var rcoMobClickContinueToPayment = [];
var rcoClickCartContinueButton = [];
var rcoClickReturnUserLink = [];
var rcoReturnUserDetails = [];
var rcoMobClickReturnUserLink = [];
var rcoMobReturnUserDetails = [];
var rcoSavedCardReturnUserDetails = [];
var rcoMobSavedCardReturnUserDetails = [];
var rcoEditShippingAddressAndSave = [];
var rcoSelectBillingAddress = [];
var rcoSavedCreditCard = [];

var {
  click,
  waitFor,
  write,
  into,
  dropDown,
  $,
  evaluate,
  press,
  text,
  reload,
  scrollDown,
} = require('taiko');
assert = require('assert');

let creds = [[]];
let Gen = require('../ReUsableFunction.js');
let Hengine = require('../../../../datainterface/providers/hengine');
let taikoOverride = require('../../helix_taiko');

var CommonData = {};
var feature = 'React Checkout';

function reinitialize() {
  RCORUID = [
    CommonData.RCORID,
    CommonData.RCORID1,
    CommonData.RCORID2,
    CommonData.RCORID3,
    CommonData.RCORID4,
    CommonData.RCORID5,
  ];

  SCRCORUID = [
    CommonData.SCRCORID,
    CommonData.SCRCORID1,
    CommonData.SCRCORID2,
    CommonData.SCRCORID3,
  ];

  rcoApplyOfferCode = [
    { loc: rcoOfferCodeAccordion, action: 'tryCatchClick' },
    {
      loc: rcoEnterValidOfferCode,
      data: CommonData.RCOVALIDOFFERCODE,
      action: 'write',
    },
    { loc: rcoApplyOfferButton, action: 'click' },
  ];

  rcoMobApplyOfferCode = [
    { loc: rcoMobOfferCodeAccordion, action: 'tryCatchClick ' },
    {
      loc: rcoEnterValidOfferCode,
      data: CommonData.RCOVALIDOFFERCODE,
      action: 'write',
    },
    { loc: rcoApplyOfferButton, action: 'click' },
  ];

  rcoEditPayPageShipAdd = [
    { loc: rcoPSAEditShipAdd, action: 'click' },
    {
      loc: rcoPSAEnterFirstName,
      data: CommonData.RCOEDITFIRSTNAME,
      action: 'clearNwrite',
    },
  ];

  rcoBillingAddressCheckBox = [{ loc: rcoBilShipAddCheckbox, action: 'click' }];

  rcoBillingAddressDetails = [
    {
      loc: rcoBilEnterFirstName,
      data: CommonData.RCOBILLINGENTERFIRSTNAME,
      action: 'write',
    },
    {
      loc: rcoBilEnterLastName,
      data: CommonData.RCOBILLINGENTERLASTNAME,
      action: 'write',
    },
    { loc: rcoScrollDown, action: 'scrollDown' },
    { loc: rcoBilSelectCity, data: CommonData.RCOBILLINGCITY, action: 'write' },
    { loc: rcoBilClickAdd1DD, action: 'click' },
    { loc: rcoBilClickAdd1DDValue, action: 'click' },
    {
      loc: rcoBilSelectDistrict,
      data: CommonData.RCOBILLINGDISTRICT,
      action: 'write',
    },
    { loc: rcoBilClickAdd2DD, action: 'click' },
    { loc: rcoBilClickAdd2DDValue, action: 'click' },
    {
      loc: rcoBilSelectNeighbourhood,
      data: CommonData.RCOBILLINGNEIGHBOURHOOD,
      action: 'write',
    },
    { loc: rcoScrollUpvalue, action: 'scrollUp' },
    { loc: rcoBilClickAdd3DD, action: 'click' },
    { loc: rcoBilClickAdd3DDValue, action: 'click' },
    {
      loc: rcoBilSelectAvenue,
      data: CommonData.RCOBILLINGAVENUE,
      action: 'write',
    },
    { loc: rcoBilClickAdd4DD, action: 'click' },
    { loc: rcoBilClickAdd4DDValue, action: 'click' },
    {
      loc: rcoBilBuildingNo,
      data: CommonData.RCOBILLINGBUILDINGNO,
      action: 'write',
    },
    {
      loc: rcoBilEnterPhone,
      data: CommonData.RCOBILLINGPHONE,
      action: 'write',
    },
    { loc: rcoScrollDown, action: 'scrollDown' },
    {
      loc: rcoBilEnterAdd1,
      data: CommonData.RCOBILLINGADDRESS1,
      action: 'write',
    },
    {
      loc: rcoBilEnterAdd2,
      data: CommonData.RCOBILLINGADDRESS2,
      action: 'write',
    },
    {
      loc: rcoBilEnterZipcode,
      data: CommonData.RCOBILLINGZIPCODE,
      action: 'write',
    },
    { loc: rcoBilEnterCity, data: CommonData.RCOBILLINGCITY, action: 'write' },
    { loc: rcoBilSelectState, action: 'ClickDropdownwithxpaths' },
    { loc: rcoBilState, action: 'ClickDropdownwithxpaths' },
    { action: 'screenshot' },
  ];

  rcoClickContinueToPayment = [{ loc: rcoContinueToPayment, action: 'click' }];

  rcoMobClickContinueToPayment = [
    { loc: rcoMobContinueToPayment, action: 'click' },
  ];

  rcoClickCartContinueButton = [
    { loc: rcoCartContinueBtn, action: 'tryCatchClick' },
    { loc: rcoSamplesPageCtnBtn, action: 'tryCatchClick' },
  ];

  rcoClickReturnUserLink = [{ loc: rcoClickRULink, action: 'tryCatchClick' }];

  rcoReturnUserDetails = [
    { loc: rcoReturnUserEmailId, data: RCORETURNUSERID(), action: 'write' },
    { loc: rcoReturnUserPwd, data: CommonData.RCORPWD, action: 'write' },
    { action: 'screenshot' },
    { loc: rcoRUSigninButton, action: 'click' },
  ];

  rcoSavedCardReturnUserDetails = [
    {
      loc: rcoSCReturnUserEmailId,
      data: SAVEDCARDRCORETURNUSERID(),
      action: 'write',
    },
    { loc: rcoReturnUserPwd, data: CommonData.RCORPWD, action: 'write' },
    { action: 'screenshot' },
    { loc: rcoRUSigninButton, action: 'click' },
  ];

  rcoMobClickReturnUserLink = [
    { loc: rcoMobClickRULink, action: 'tryCatchClick' },
  ];

  rcoMobReturnUserDetails = [
    { loc: rcoMobReturnUserEmailId, data: RCORETURNUSERID(), action: 'write' },
    { loc: rcoMobReturnUserPwd, data: CommonData.RCORPWD, action: 'write' },
    { action: 'screenshot' },
    { loc: rcoMobRUSigninButton, action: 'click' },
  ];

  rcoMobSavedCardReturnUserDetails = [
    {
      loc: rcoMobSCReturnUserEmailId,
      data: SAVEDCARDRCORETURNUSERID(),
      action: 'write',
    },
    { loc: rcoMobReturnUserPwd, data: CommonData.RCORPWD, action: 'write' },
    { action: 'screenshot' },
    { loc: rcoMobRUSigninButton, action: 'click' },
  ];

  rcoEditShippingAddressAndSave = [
    { loc: rcoEditAdd, action: 'click' },
    {
      loc: rcoEditEnterFirstName,
      data: CommonData.RCOEDITFIRSTNAME,
      action: 'clearNwrite',
    },
    { action: 'screenshot' },
    { loc: rcoSaveEditAdd, action: 'click' },
  ];

  rcoSelectBillingAddress = [
    { loc: rcoSelectBilAdd, action: 'click' },
    { action: 'screenshot' },
  ];

  rcoSavedCreditCard = [
    { loc: rcoPaymentTandC, action: 'click' },
    { loc: rcoClickCtnPaymentBtn, action: 'click' },
    { loc: rcoSavedCC, action: 'click' },
    { loc: rcoCvv, data: CommonData.RCOCVV, action: 'write' },
    { action: 'screenshot' },
    { loc: rcoCCTandC, action: 'click' },
    { loc: rcoClickCCCtnBtn, action: 'click' },
    { action: 'screenshot' },
  ];
}

async function initAutoHeal() {
  let apisToOverride = { $, evaluate };
  let inclusivityFields = { brandLocale, feature };

  ({ $, evaluate } = await taikoOverride.override(
    apisToOverride,
    inclusivityFields,
    isDiscovery,
    doHeal
  ));
}

function initTestEnvironment(siteDefinition) {
  brandLocale = siteDefinition.brandLocale;

  let allCreds = creds.credentailsManager;
  let brandCode = brandLocale.split('-')[0];
  [featureUser, featurePwd] = getCredentials(allCreds, 'FEATURE');
  let [brUserID, brPasswd] = getCredentials(allCreds, brandCode);
  let [brAdmID, brAdmPasswd] = getCredentials(allCreds, 'ADMIN');
  var [pincerUser, pincerPasswd] = getCredentials(allCreds, 'PINCER');

  let urlBrandPrefix = 'https://' + brUserID + ':' + brPasswd + '@';
  let urlAdmPrefix = 'https://' + brAdmID + ':' + brAdmPasswd + '@';
  let pincerPrefix = 'https://' + pincerUser + ':' + pincerPasswd + '@';

  produrl = siteDefinition.prodUrl;
  produrladm = produrl.replace('https://', urlAdmPrefix);

  stageurlActual = siteDefinition.stageUrl;
  stageurl = stageurlActual.replace('https://', urlBrandPrefix);
  stageurladm = stageurlActual.replace('https://', urlAdmPrefix);

  devurl = stageurl.replace('stage', 'dev'); // Why can't we use siteDefinition.devUrl
  devurladm = stageurladm.replace('stage', 'dev');

  preprodurl = produrl.replace('www.', 'wwwtmp.'); // Why can't we use siteDefinition.preProdUrl
  preprodurladm = produrladm.replace('www.', 'wwwtmp.');

  pincerurl = produrl.replace('https://', pincerPrefix);
  produrladm = produrl.replace('https://', urlAdmPrefix);
}

async function initFrameworkSettings() {
  let [brand, locale, restOfTags] = process.env.tags.split(',');

  let { locatorDefinitions, dataDefinitions, siteDefinition } =
    await Hengine.generator(`${brand}-${locale}`, feature); // This should come from Gauge Tags inputs

  if (siteDefinition.brandLocale === undefined) {
    assert(
      false,
      `There are no site details for ${brand}-${locale} in the database`
    );
  }

  if (locatorDefinitions.length === 0) {
    assert(
      false,
      `There are no locator details for ${brand}-${locale} in the database`
    );
  }

  if (dataDefinitions.length === 0) {
    assert(
      false,
      `There are no data definitions for ${brand}-${locale} in the database`
    );

    if (isDiscovery) {
      console.log('System is running in discovery phase');
    }

    if (doHeal) {
      console.log('System is running with healing enabled');
    }
  }

  // Setup locators
  for (let i = 0; i < locatorDefinitions.length; i++) {
    this[locatorDefinitions[i].locatorKey] = locatorDefinitions[i].locatorValue;
  }

  // console.table(dataDefinitions);

  // Setup common data
  for (let i = 0; i < dataDefinitions.length; i++) {
    CommonData[dataDefinitions[i].dataKey] = dataDefinitions[i].dataValue;
  }

  // Setup testing Urls
  initTestEnvironment(siteDefinition);

  // Setup self healing
  initAutoHeal();

  // Re-initialize variables
  reinitialize();
}

/******** CODE TO RECEIVE AND FORM THE BASE URL AND ADMIN URL ******/
// PROD, PREPROD, STAGE, DEV, FEAT, ENG, PINCER, PREVIEW
var envir = process.env.ENVIRONMENT || 'PROD';
var FeatStr = process.env.JIRAID || '';
var perlGemEnv = process.env.PERLGEMENV || 'preprod';
var ncsaSerNum = process.env.NCSASERVERNUM || '';
var toplaceorder = process.env.PLACEORDER || 'true'; //true to place order and false to not place the order
var isDiscovery = process.env.ISDISCOVERY === 'true' ? true : false; // For Self-healing discovery
var doHeal = process.env.DOHEAL === 'true' ? true : false; // For Self-healing

// should come from ID file
var brandLocale = '';
var [featureUser, featurePwd] = [];
var produrl = '';
var produrladm = '';
var stageurlActual = '';
var stageurl = '';
var stageurladm = '';
var devurl = '';
var preprodurl = '';
var pincerurl = '';

// To convert a given url to mobile url, if the platform is mobile

function convertToMobileUrl(hostName, testPlatform) {
  // No conversion needed if the platform is PC
  if (testPlatform.localeCompare('PC') !== -1) return hostName;
  // No conversion needed if the url is that of Jomalone
  if (hostName.search('jomalone') !== -1) return hostName;
  // No conversion needed if the url is that of DrJart
  if (hostName.search('drjart') !== -1) return hostName;
  if (hostName.search('pincer') !== -1) return hostName;
  // For PreProd, the following change is done
  // If wwwtmp. exists in the url, it is changed to mtmp.
  if (hostName.search('wwwtmp.') !== -1) {
    hostName = hostName.replace('wwwtmp.', 'mtmp.');
    return hostName;
  }
  // For Prod, the following change is done
  // If www. exists in the url, it is changed to m.
  if (hostName.search('www.') !== -1) {
    hostName = hostName.replace('www.', 'm.');
    return hostName;
  }
  // For Stage, the following change is done
  // If @e. exists in the url, it is changed to @m.e.
  if (hostName.search('@e.') !== -1) {
    hostName = hostName.replace('@e.', '@m.e.');
    return hostName;
  }
  console.log('Unknown url type');
  return hostName;
}

function getBaseURL(platform) {
  switch (envir.toUpperCase()) {
    case 'DEV':
      if (platform.toUpperCase() === 'PC') {
        baseURL = devurl;
      } else {
        baseURL = convertToMobileUrl(devurl, platform);
      }
      break;
    case 'STAGE':
      if (platform.toUpperCase() === 'PC') {
        baseURL = stageurl;
      } else {
        baseURL = convertToMobileUrl(stageurl, platform);
      }
      break;
    case 'PREPROD':
      if (platform.toUpperCase() === 'PC') {
        baseURL = preprodurl;
      } else {
        baseURL = convertToMobileUrl(preprodurl, platform);
      }
      break;
    case 'PROD':
      if (platform.toUpperCase() === 'PC') {
        baseURL = produrl;
      } else {
        baseURL = convertToMobileUrl(produrl, platform);
      }
      break;
    case 'FEAT':
      if (platform.toUpperCase() === 'PC') {
        baseURL = convertToFeatUrl(stageurl);
      } else {
        baseURL = convertToMobileUrl(convertToFeatUrl(stageurl), platform);
      }
      break;
    case 'ENG':
      if (platform.toUpperCase() === 'PC') {
        baseURL = convertToPersEngUrl(stageurl);
      } else {
        baseURL = convertToMobileUrl(convertToPersEngUrl(stageurl), platform);
      }
      break;
    case 'PREVIEW':
      if (platform.toUpperCase() === 'PC') {
        baseURL = convertToPreviewURL(stageurladm);
      } else {
        baseURL = convertToMobileUrl(
          convertToPreviewURL(stageurladm),
          platform
        );
      }
      break;
    case 'PINCER':
      if (platform.toUpperCase() !== '') {
        baseURL = pincerurl.replace('www.', 'pincer.');
      }
      break;
    default:
      if (platform.toUpperCase() === 'PC') {
        baseURL = produrl;
      } else {
        baseURL = convertToMobileUrl(produrl, platform);
      }
      break;
  }
  return baseURL;
}

function convertToFeatUrl(url) {
  var tempUrl = '';
  var FeatureURL = '';
  tempUrl =
    url.split('.', 4).join('.') +
    '.' +
    FeatStr +
    url.substring(
      url.split('.', 5).join('.').length,
      url.split('.', 6).join('.').length
    ) +
    perlGemEnv +
    '.usva1.feature.elco.cloud/';
  if (url.includes('elc:')) {
    FeatureURL = tempUrl;
  } else {
    tempUrl = tempUrl.replace(
      tempUrl.substring(
        tempUrl.split('/', 2).join('/').length + 1,
        tempUrl.split(':', 2).join(':').length
      ),
      featureUser
    );
    FeatureURL = tempUrl.replace(
      tempUrl.substring(
        tempUrl.split(':', 2).join(':').length + 1,
        tempUrl.split('@', 1).join('@').length
      ),
      featurePwd
    );
  }
  return FeatureURL;
}

function convertToPersEngUrl(url) {
  var branchURL = '';
  branchURL =
    url.split('.', 4).join('.') +
    '.' +
    FeatStr +
    url.substring(
      url.split('.', 5).join('.').length,
      url.split('.', 5).join('.').length
    ) +
    '.eng.ncsa' +
    ncsaSerNum +
    '.elcdev.net';
  return branchURL;
}

function convertToPreviewURL(url) {
  let previewURL = '';
  previewURL =
    url.split('.', 4).join('.') + '.' + FeatStr + '.preview.elco.cloud';
  return previewURL;
}


function getCredentials(credentialsMap, brand) {
  let brandCredential = [];
  credentialsMap.forEach((item) => {
    let hasFound = item.includes(brand);
    if (hasFound) {
      let [, , username, password] = item;
      brandCredential = [username, encodeURIComponent(password)];
    }
  });
  return brandCredential;
}

function RCORETURNUSERID() {
  return RCORUID[Math.floor(Math.random() * RCORUID.length)];
}

function SAVEDCARDRCORETURNUSERID() {
  return SCRCORUID[Math.floor(Math.random() * SCRCORUID.length)];
}

// async function setRevTag(platform) {
//     if (revTag.localeCompare("")  !==  0 &&!(envir.toUpperCase()==="PROD" || envir.toUpperCase()==="PREPROD")) {
//        await setCookie("ELC_SITE_TAG", revTag, { url: getBaseURL(platform) });
//        gauge.message("Revision Tag is set as "+revTag);
//     }
//     else{
//        gauge.message("No revision tag is set");
//     }
// }

/**
 * This function is built using the multiple re-usable page action CASES, it can be called by passing an
 * array object with appropriate loc and data.
 * @param {string} ElementObj
 */

step('EMEARCO Initialize Helix', async function () {
  // Initialize the selectors from DB
  await initFrameworkSettings();
});

//Running RCO Guest User Manual Offer Test

async function assertOffercode() {
  await Gen.AssertText(
    rcoOfferCodeAssertMsg,
    CommonData.RCOVALIDOFFERCODEMSG,
    'The discount has been applied',
    'The discount has been not applied'
  );
  gauge.screenshot();
}

step(
  'EMEARCO Verify that the user is able to Apply Valid OfferCode <plat>',
  async function (plat) {
    if (plat === 'PC') {
      await Gen.ElementAction(rcoApplyOfferCode);
      await assertOffercode();
    } else if (plat === 'MOBILE') {
      await Gen.ElementAction(rcoMobApplyOfferCode);
      await assertOffercode();
    }
  }
);

// Running RCO Guest Edit Billing Address Test

step(
  'EMEARCO Verify that the user is able to Edit the Payment Page Shipping Address from Order Summary',
  async function () {
    await Gen.ElementAction(rcoEditPayPageShipAdd);
  }
);

step(
  'EMEARCO Verify that the user is able to Click on Billing Address Checkbox',
  async function () {
    await scrollDown();
    await Gen.ElementAction(rcoBillingAddressCheckBox);
  }
);

step(
  'EMEARCO Verify that the user is able to Enter the Billing Details',
  async function () {
    await scrollDown();
    // for (let i = 0; i < 50; i++) {
    //   await scrollDown();
    // }
    await Gen.ElementAction(rcoBillingAddressDetails);
  }
);

async function assertPaymentPageValidation() {
  await Gen.AssertText(
    rcoEditAddValidation,
    CommonData.RCOEDITADDVALIDATEMSG,
    'The address is validated',
    'The address is not validated'
  );
  gauge.screenshot();
}

step(
  'EMEARCO Verify that the user is able to Validate the Payment Page Shipping Address',
  async function () {
    await assertPaymentPageValidation();
  }
);

step(
  'EMEARCO Verify that the user is able to click on <user> Continue to Payment Button successfully <plat>',
  async function (user, plat) {
    if (user === 'GuestUser') {
      if (plat === 'PC') {
        await Gen.ElementAction(rcoClickContinueToPayment);
      }
      if (plat === 'MOBILE') {
        await Gen.ElementAction(rcoMobClickContinueToPayment);
      }
    }
    if (user === 'ReturnUser') {
      if (plat === 'PC') {
        await Gen.ElementAction(rcoClickContinueToPayment);
      }
      if (plat === 'MOBILE') {
        await Gen.ElementAction(rcoMobClickContinueToPayment);
      }
    }
  }
);

step(
  'EMEARCO Verify that the user is able to Click View Cart Continue Button',
  async function () {
    await Gen.ElementAction(rcoClickCartContinueButton);
  }
);

// Running RCO Return User Edit Billing PC Test

step(
  'EMEARCO Verify that the user is able to Login as Return User successfully <plat>',
  async function (plat) {
    if (plat === 'PC') {
      await Gen.ElementAction(rcoClickReturnUserLink);
      await Gen.ElementAction(rcoReturnUserDetails);
      await Gen.ElementAction(rcoClickCartContinueButton);
    } else if (plat === 'MOBILE') {
      await Gen.ElementAction(rcoMobClickReturnUserLink);
      await Gen.ElementAction(rcoMobReturnUserDetails);
      await Gen.ElementAction(rcoClickCartContinueButton);
    }
  }
);

step(
  'EMEARCO Verify that the user is able to Edit the Shipping Address and Save the Address',
  async function () {
    await Gen.ElementAction(rcoEditShippingAddressAndSave);
  }
);

step(
  'EMEARCO Verify that the user is able to Select a Billing Address',
  async function () {
    await scrollDown();
    await Gen.ElementAction(rcoSelectBillingAddress);
  }
);

// Running RCO Return User Saved Card PC Test

step(
  'EMEARCO Verify that the user is able to Login as Saved Card Return User Successfully <plat>',
  async function (plat) {
    if (plat === 'PC') {
      await Gen.ElementAction(rcoClickReturnUserLink);
      await Gen.ElementAction(rcoSavedCardReturnUserDetails);
      await Gen.ElementAction(rcoClickCartContinueButton);
    } else if (plat === 'MOBILE') {
      await Gen.ElementAction(rcoMobClickReturnUserLink);
      await Gen.ElementAction(rcoMobSavedCardReturnUserDetails);
      await Gen.ElementAction(rcoClickCartContinueButton);
    }
  }
);

step(
  'EMEARCO Verify that the user is able to Select Saved Credit Card and Enter Saved CVV',
  async function () {
    await Gen.ElementAction(rcoSavedCreditCard);
  }
);
