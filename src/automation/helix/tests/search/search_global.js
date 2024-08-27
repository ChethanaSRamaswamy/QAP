/** ****** BASE URL and ADM URL IS RECEIVED ***** */
var CommonData = {};
var timeoutSetting = '';
var emulationDevice = '';
var localeCookie = '';
var closePopup = '';
var closeSecPopup = '';
var closeThirdPopup = '';
var searchIcon = '';
var overlayInputField = '';
var searchMessageOverlay = '';
var predectiveProduct = '';
var firstProduct = '';
var quickShop = '';
var addToBag = '';
var bagProduct = '';
var notifyMe = '';
var searchPageProductMob = '';
var searchPageProduct = '';
var cartPopupClose = '';
var hoverSearchIcon = '';
var searchAddToBag = '';
var cart = '';
var javaAlertPopupSearch = '';
var noProductAvailable = '';
var searchResultLink = '';
var clickElcEmployeeButton = '';
var bpAcEnterEmail = '';
var bpAcEnterPassword = '';
var bpAcSignInButton = '';
var removeProduct = '';

// Array declaration
var beautyPerksSignIn = [];
var searchIconClick = [];
var searchKeywordEnter = [];
var searchPress = [];
var searchLink = [];
var productSelectionFirstProduct = [];
var productSelectionQuickShop = [];
var productSelectionAddToBag = [];
var productSelectionSPP = [];
var productSelectionSPPMob = [];
var addToBags = [];
var cartBag = [];
var removeBeautyPerksProduct = [];

var t = require('taiko');
const Helper = require('../../helpers/helper');
const Util = require('../../../../utilities/util');
const assert = require('assert');

const Hengine = require('../../../../datainterface/providers/hengine');
const taikoOverride = require('../../helix_taiko');
const gen = require('../ReUsableFunction.js');
const feature = 'Search';
const matchCondition = true;
const messages = {
  stepNotApplicable: 'This step is not applicable for this Brand/Locale',
  productAdded: 'Product Added to Bag',
};
const timeParams = {
  retryinterval: 200,
  retrytimeout: 20000,
};

let siteDefinition, source, NullDataException, tags;
// isDiscovery = true;
// doHeal = true;

function reinitialize() {
  beautyPerksSignIn = [
    { loc: clickElcEmployeeButton, action: 'click' },
    {
      loc: bpAcEnterEmail,
      data: CommonData.bpReturnUserEmailId,
      action: 'write',
    },
    {
      loc: bpAcEnterPassword,
      data: CommonData.bpReturnUserPassword,
      action: 'write',
    },
    { loc: bpAcSignInButton, action: 'click' },
  ];
  searchIconClick = [{ loc: searchIcon, action: 'click' }];
  searchKeywordEnter = [
    { loc: overlayInputField, data: CommonData.searchKeyword, action: 'write' },
  ];
  searchPress = [{ loc: overlayInputField, action: 'pressEnter' }];
  searchLink = [{ loc: searchResultLink, action: 'click' }];
  productSelectionFirstProduct = [
    { loc: firstProduct, action: 'Scrollintoview' },
  ];
  productSelectionQuickShop = [
    { loc: quickShop, action: 'Scrollintoview' },
    { loc: quickShop, action: 'click' },
  ];
  productSelectionAddToBag = [
    { loc: searchAddToBag, action: 'Scrollintoview' },
  ];
  productSelectionSPP = [
    { loc: searchPageProduct, action: 'Scrollintoview' },
    { loc: searchPageProduct, action: 'click' },
  ];
  productSelectionSPPMob = [
    { loc: searchPageProductMob, action: 'Scrollintoview' },
    { loc: searchPageProductMob, action: 'click' },
  ];
  addToBags = [
    { loc: addToBag, action: 'Scrollintoview' },
    { loc: addToBag, action: 'click' },
  ];
  cartBag = [
    { loc: cart, action: 'Scrollintoview' },
    { loc: cart, action: 'click' },
  ];
  removeBeautyPerksProduct = [{ loc: removeProduct, action: 'click' }];
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

// function used to setCookies
async function configureTestSettings() {
  await t.setConfig({ navigationTimeout: parseInt(timeoutSetting, 10) });
  await Helper.setWindowSize(Util.ScreenSizes['1040p'], t);
  await Helper.setWAFCookie(siteDefinition, t);
  await Helper.setAdroll(siteDefinition, t);
  await Helper.setAkamaiBypass(siteDefinition, t);
  await Helper.setApiEnv(siteDefinition, t);
  await Helper.getPerlgemEnvCookie(siteDefinition, t);
  await Helper.setOtherCookies(siteDefinition, t);
  await Helper.setLocaleCookie(siteDefinition, t, localeCookie);
  await Helper.setTestOrderCookie(siteDefinition, t);
  await Helper.setRevisionTag(siteDefinition, t);
}

// Setting up Mobile device
async function deviceEmulation() {
  if (siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE') {
    await t.emulateDevice(emulationDevice);
    gauge.message('Emulation device: ' + emulationDevice);
  }
}

// Opening Website
async function openSite() {
  await t.goto(siteDefinition.executionContext.url, {
    waitForEvents: ['DOMContentLoaded'],
  });
  gauge.screenshot();
}

// Beauty Perks Account signin step
async function beautyPerksAcSignIn() {
  if (clickElcEmployeeButton !== '') {
    await gen.ElementAction(beautyPerksSignIn);
    gauge.message('BP Return user Email ID: ' + CommonData.bpReturnUserEmailId);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

// Closing Randompopups in Home page
async function randomPopup() {
  await gen.PopUpClose(closePopup);
  await gen.PopUpClose(closeSecPopup);
  await gen.PopUpClose(closeThirdPopup);
}

// Selecting SearchIcon flow from Home Page
async function searchIconHomePageClick() {
  let flag = 0;
  if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
    if (hoverSearchIcon !== '') {
      await t.hover(await t.$(hoverSearchIcon));
      flag = 1;
    }
  }
  if (flag === 0) {
    if (tags[0] === CommonData.brandCode) {
      await t.click(await t.$(searchIcon));
    } else {
      await gen.ElementAction(searchIconClick);
      if (!(await (await t.$(overlayInputField)).isVisible(timeParams))) {
        await t.click(await t.$(searchIcon));
      }
    }
  }
}

// Entering SearchKeyword
async function keywordEntryForSearch() {
  await gen.ElementAction(searchKeywordEnter);
  gauge.screenshot();
}

// Validating Search Result Message
async function displayMessage() {
  if (searchMessageOverlay !== '') {
    if (await (await t.$(searchMessageOverlay)).exists()) {
      gauge.message('Display Message Validated');
    } else {
      gauge.message('Display Message not Found');
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

// Validating Search Result Product
async function predictiveResults() {
  if (predectiveProduct !== '') {
    if (await (await t.$(predectiveProduct)).exists()) {
      gauge.message('Predective Results are Visible');
    } else {
      gauge.message('Predective Results not Found');
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
  gauge.screenshot();
}

// Clicking search result
async function searchResultsEnter() {
  if (searchResultLink !== '') {
    if (await (await t.$(searchResultLink)).exists()) {
      await gen.ElementAction(searchLink);
    } else {
      gauge.message(await (await t.$(noProductAvailable)).text());
      assert(!matchCondition);
    }
  } else {
    await gen.ElementAction(searchPress);
  }
}

// Closing Randompopups before adding product to bag
async function randomCartPopup() {
  await gen.PopUpClose(cartPopupClose);
}

// Add a Product via Quickshop/SPP/AddToBag flow
async function productSelection() {
  let flag = 0;
  let temp = 0;
  if (quickShop !== '') {
    await gen.ElementAction(productSelectionFirstProduct);
    await t.hover(await t.$(firstProduct));
    if (await (await t.$(quickShop)).exists(timeParams)) {
      flag = 1;
      await gen.ElementAction(productSelectionQuickShop);
      gauge.message('Adding a Product via Quickshop flow');
    }
  }
  if (flag === 0) {
    if (searchAddToBag !== '') {
      if (await (await t.$(searchAddToBag)).exists(timeParams)) {
        await t.hover(await t.$(firstProduct));
        await gen.ElementAction(productSelectionAddToBag);
        await t.hover(await t.$(searchAddToBag));
        flag = 1;
        gauge.message('This Step is Skipped due to Add To Bag Flow');
      }
    }
  }

  if (flag === 0) {
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      if (
        searchPageProduct !== '' &&
        (await (await t.$(searchPageProduct)).exists(timeParams))
      ) {
        await gen.ElementAction(productSelectionSPP);
        temp = 1;
      }
    } else if (
      searchPageProductMob !== '' &&
      (await (await t.$(searchPageProductMob)).exists(timeParams))
    ) {
      await gen.ElementAction(productSelectionSPPMob);
      temp = 1;
    }

    if (temp === 1) {
      gauge.message('Adding a Product via SPP selection flow');
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
  gauge.screenshot();
}

// AddToBag & Validate flow
async function addToBagValidate() {
  let flag = 0;
  if (javaAlertPopupSearch !== '') {
    t.alert(javaAlertPopupSearch, async () => await t.accept());
  }
  if (
    (await (await t.$(addToBag)).exists(timeParams)) &&
    !(await (await t.$(addToBag)).isDisabled())
  ) {
    await gen.ElementAction(addToBags);
    if (await (await t.$(bagProduct)).exists(timeParams)) {
      gauge.message(messages.productAdded);
      flag = 1;
    }
    if (flag === 0) {
      await gen.ElementAction(cartBag);
      if (await (await t.$(bagProduct)).exists(timeParams)) {
        gauge.message(messages.productAdded);
      } else {
        gauge.message('Product Not added to Bag');
      }
    }
  } else {
    gauge.message(
      'Product is either Disabled or not available for this Brand/locale'
    );
    gauge.message(await (await t.$(notifyMe)).text());
  }
  gauge.screenshot();
}

// Beauty Perks - Remove Product step
async function bpRemoveProduct() {
  if (removeProduct !== '') {
    await gen.ElementAction(removeBeautyPerksProduct);
    gauge.screenshot();
  } else {
    gauge.message(
      'Beauty Perks - Remove Product: ' + messages.stepNotApplicable
    );
  }
}

step('SEARCH Initialize Helix', async () => {
  // Initialize the selectors from DB
  await initFrameworkSettings();
});

step('SEARCH Configure Pre-Requisites', async () => {
  await configureTestSettings();
  await deviceEmulation();
  await openSite();
});

step(
  'SEARCH Verify the user is able to Sign in Beauty Perks Account if applicable',
  async () => {
    await beautyPerksAcSignIn();
  }
);

step(
  'SEARCH Verify the user is able to enter the keyword on the search field',
  async () => {
    await randomPopup();
    await searchIconHomePageClick();
    await keywordEntryForSearch();
  }
);

step(
  'SEARCH Validate Search Message on the Predictive Results page and Navigate to search results page',
  async () => {
    await displayMessage();
    await predictiveResults();
    await searchResultsEnter();
  }
);

step(
  'SEARCH Add a product to bag from the search results and validate',
  async () => {
    await randomCartPopup();
    await productSelection();
    await addToBagValidate();
    await bpRemoveProduct();
  }
);
