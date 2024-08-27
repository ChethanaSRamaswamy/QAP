// This file is common template for multiple brands and locales

var t = require('taiko');
let siteDefinition, source, NullDataException;
const Helper = require('../../helpers/helper');
const Util = require('../../../../utilities/util');
var writeToExcelFlag = process.env.WRITETOXLSX ? process.env.WRITETOXLSX : true;
const gds = gauge.dataStore.specStore;
const suiteStore = gauge.dataStore.suiteStore;
const arrData = [];

var feature = 'GNAV Footer';
var CommonData = {};

// Gnav Footer variables
var timeoutSetting = '';
var closePopup = '';
var closeSecondPopup = '';
var closeThirdPopup = '';
var countryName = '';
var chooseLanguage = '';
var hubsiteSubmitBtn = '';
var hubsiteExtensionUrl = '';
var mppGnavPc = '';
var mppGnavPcTwo = '';
var gnavPreProductTypePc = '';
var gnavProductTypePc = '';
var gnavProductTypeHoverPc = '';
var gnavProductSubTypePc = '';
var gnavProductSecSubTypePc = '';
var secGnavPreProductTypePc = '';
var secGnavProductTypePc = '';
var secGnavProductTypeHoverPc = '';
var secGnavProductSubTypePc = '';
var secGnavProductSecSubTypePc = '';
var navMenuMob = '';
var gnavProductTypeMob = '';
var gnavProductSubTypeMob = '';
var gnavProductSecSubTypeMob = '';
var secGnavProductTypeMob = '';
var secGnavProductSubTypeMob = '';
var secGnavProductSecSubTypeMob = '';
var gnavStores = '';
var gnavSignin = '';
var gnavSearchHoverPc = '';
var gnavSearchPc = '';
var gnavSearchMob = '';
var gnavSearchInput = '';
var gnavSearchInputText = '';
var footersection = '';
var locDropdownAttribute = '';
var locationDropdown = '';
var locationValue = '';
var locationLink = '';
var locationValueLink = '';
var liveChatIcon = '';
var liveChatMsg = '';
var secondliveChatBtn = '';
var liveChatCloseIcon = '';
var locDropdownAttributeMob = '';
var subsectionLinkOne = '';
var subsectionLinkTwo = '';
var subsectionLinkThree = '';
var respectivePageElementOne = '';
var respectivePageElementTwo = '';
var respectivePageElementThree = '';
var subsectionLinks = [];
var respectivePageElements = [];
var copyrightsec = '';
var subsection = '';
var HPurl;
var selectDropdownClassPc = '';
var locationLinkLocatorPc = '';
var internationalStoreSearchPc = '';
var storeLocatorCountryDDPc = '';
var storeSelectDropdownClassPc = '';
var Locationoptionstext = '';

const result = {
  validated: 'Validated',
  failed: 'Failed',
  na: 'NA',
  script: 'Script Issue',
};

const reasons = {
  locationNotAvailable: 'The location dropdown/link is not available',
  valuesUnavailable: 'One or more values are unavailable',
  valuesMismatch: 'One or more values are available but not as expected',
  storeUnavailable: 'Store Locator is not applicable for this brand/locale',
  internationLocationUnavailable:
    'International Location option is not available in the Store Locator',
  scriptIssue: 'Locator/Script Issue',
  noValues: 'All three values are unavailable',
  moreValues: 'Same values are represented multiple times differently',
  valuesAvailable: 'All three values are available',
  StoreLocationUnavailable: 'Store Location dropdown not available',
};

let availableValues = [];
let resultFinal = '';
let reasonFailure = '';
let actualUnavailableValues = [];

const features = { store: 'storelocator', location: 'footerlocation' };

let featureActual = '';

assert = require('assert');
let Hengine = require('../../../../datainterface/providers/hengine');

const matchCondition = true;
const messages = {
  stepNotApplicable: 'This step is not applicable for this Brand/Locale',
};

const RegExpGlobal = /[^a-zA-Z0-9 ]/g;

function reinitialize() {
  subsectionLinks = [subsectionLinkOne, subsectionLinkTwo, subsectionLinkThree];
  respectivePageElements = [
    respectivePageElementOne,
    respectivePageElementTwo,
    respectivePageElementThree,
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

/* Front end Generic functions */

/**
 * @description It is used to split the name and password for lower urls environments, which was used to validate the home page.
 * @param {string} siteDefinition - siteDefinition should be pc or mob.
 * @returns url after spliting for lower environments otherwise return the base url.
 */

function Splittingurl(siteDefinition, t) {
  var newurl = '';
  if (siteDefinition.executionContext.url.includes('@')) {
    var [first, second] = siteDefinition.executionContext.url.split('@');
    newurl = 'https://' + second;
    return newurl;
  } else {
    return siteDefinition.executionContext.url;
  }
}

/**
 * @description It is used to perfom click action on the element if exists
 * @example It can be used to close intermittent popups between pages.
 * @param {var} element - The locator of the element.
 * @param {string} custommessage - It would be a proper message depending on the scenario on try block
 * @param {string} custommessage2 - It would be a proper message depending on the scenario on catch block.
 */

async function Trycatchclick(element, custommessage, elsecustommessage) {
  if (element !== '') {
    try {
      await t.click(await t.$(element));
      gauge.message(custommessage);
    } catch (error) {
      gauge.message(elsecustommessage);
    }
  }
}

/**
 * @description It is used to check if the element exists on the page and focus and click on it if not returns else part message.
 * @param {var} element - The locator of the element.
 * @param {string} customtext- It would be a proper message depending on the scenario inside if.
 * @param {string} elsecustomtext- It would be a proper message depending on the scenario on else part.
 */
async function FocusAndClick(element, customtext, elsecustomtext) {
  if (element !== '') {
    let tElement = await t.$(element);
    if (
      await tElement.exists(
        parseInt(CommonData.ExistsCheckFrequency, 10),
        parseInt(CommonData.ExistsWaitTime, 10)
      )
    ) {
      await t.evaluate(tElement, (ele) => {
        ele.focus();
        ele.click();
      });
      gauge.screenshot();
      gauge.message(customtext);
    } else {
      gauge.message(elsecustomtext);
      resultFinal = result.na;
      reasonFailure = reasons.storeUnavailable;
    }
  } else {
    resultFinal = result.na;
    reasonFailure = messages.stepNotApplicable;
    gauge.message(messages.stepNotApplicable);
  }
}

/**
 * @description It is used to check the URL of the home page and the URL of the current page after selecting the Gnav product links and confirm not the same.
 */

async function ValidateUrlafterNavigatefromGnav() {
  let CurrentpageUrl = await t.currentURL();
  let Currenttitle = await t.evaluate(() => {
    return document.title;
  });
  if (HPurl !== CurrentpageUrl) {
    assert(matchCondition);
    gauge.message(
      'On the mpp after choosing Gnavs products and the title is : ' +
        (await Currenttitle)
    );
  } else {
    assert(!matchCondition, 'On the homepage after choosing Gnavs products');
  }
}

/**
 * @description It is used to navigate to MPP through Gnav links
 * @param {var} PreProducttype - The locator of the preproducttype to hover on Gnav
 * @param {var} Producttype - The locator of the producttype to hover on Gnav
 * @param {var} Productsubtype - The link/text of the productsubtype to select on Gnav
 */

async function NavigatetoMPPfromGnavPc(
  PreProducttypePc,
  ProducttypePc,
  ProductsubtypePc
) {
  if (PreProducttypePc !== '') {
    await t.hover(
      await t.$(PreProducttypePc, { waitForEvents: ['loadEventFired'] })
    );
  }
  if (ProducttypePc !== '') {
    await t.hover(
      await t.$(ProducttypePc, { waitForEvents: ['loadEventFired'] })
    );
    gauge.screenshot();
  }
  // For certain brands, the product sub-type is not in the attribute link, so using the tap method on the catch block.
  try {
    await t.evaluate(
      t.link(ProductsubtypePc, { waitForEvents: ['loadEventFired'] }),
      (ele) => ele.click()
    );
  } catch (error) {
    await t.tap(
      t.text(ProductsubtypePc, { waitForEvents: ['loadEventFired'] })
    );
  }
  gauge.screenshot();
  await ValidateUrlafterNavigatefromGnav();
}

/**
 * @description It is used to Navigate to MPP through Gnav links
 * @param {var} Producttype - The locator of the Hamburger icon on Homepage
 * @param {var} Producttypehover - The locator of the Hamburger icon on Homepage for Hover products
 * @param {var} Productsubtype - The Text of the product subtype to select on Gnav
 * @param {var} ProductsubtypeTwo - The Text of the subtype to select on Gnav
 */

async function NavigatetoMPPfromGnavPcMethod2(
  ProducttypePc,
  ProducttypehoverPc,
  ProductsubtypePc,
  ProductsubtypePcTwo
) {
  let tProducttype = await t.$(ProducttypePc);
  if (await tProducttype.exists()) {
    await t.evaluate(tProducttype, (ele) => ele.click());
    gauge.screenshot();
    if (ProducttypehoverPc !== '') {
      await t.hover(
        await t.$(ProducttypehoverPc, { waitForEvents: ['loadEventFired'] })
      );
    }
    if (ProductsubtypePc !== '') {
      await t.click(
        t.text(ProductsubtypePc, { waitForEvents: ['loadEventFired'] })
      );
    }
    if (ProductsubtypePcTwo !== '') {
      await t.waitFor(t.text(ProductsubtypePcTwo));
      gauge.screenshot();
      await t.click(
        t.text(ProductsubtypePcTwo, { waitForEvents: ['loadEventFired'] })
      );
    }
    await ValidateUrlafterNavigatefromGnav();
  } else {
    assert(
      !matchCondition,
      'Unable to click Gnav Hamburger icon for PC/Locator not found'
    );
  }
}

/**
 * @description It is used to Navigate to MPP through Gnav links for Mob
 * @param {*} NavmenuMobloc - Mob GNav hamburger button locator
 * @param {*} ProducttypeMob - The locator of the product type mob to select on Gnav
 * @param {*} ProductsubtypeMob - The locator of the product Subtype mob to select on Gnav
 * @param {*} ProductsubtypeMobTwo - The locator of the product Another Subtype mob to select on Gnav
 */

async function NavigatetoMPPFromGnavMob(
  NavmenuMobloc,
  ProducttypeMob,
  ProductsubtypeMob,
  ProductsubtypeMobTwo
) {
  if (NavmenuMobloc !== '') {
    let tNavMenuMob = await t.$(NavmenuMobloc);
    if (await tNavMenuMob.exists()) {
      // Tap api is not working as expected for some sites, so we use evaluate click in catch block
      try {
        await t.tap(tNavMenuMob);
      } catch (error) {
        await t.evaluate(tNavMenuMob, (ele) => ele.click());
      }
      gauge.message('Gnav Hamburger icon exists and able to click');
      gauge.screenshot();
    } else {
      assert(
        !matchCondition,
        'Unable to click Gnav Hamburger icon for Mob/Locator not found'
      );
    }
  }
  if (ProducttypeMob !== '') {
    let tProducttypeMob = await t.$(ProducttypeMob);
    if (await tProducttypeMob.exists()) {
      await t.evaluate(tProducttypeMob, (ele) => ele.click());
    } else {
      assert(!matchCondition, 'Product type not exists/data changed');
    }
  }
  if (ProductsubtypeMob !== '') {
    let tProductsubtypeMob = await t.$(ProductsubtypeMob);
    if (await tProductsubtypeMob.exists()) {
      await t.evaluate(tProductsubtypeMob, (ele) => ele.click());
    } else {
      assert(!matchCondition, 'Product subtype not exists/data changed');
    }
  }
  if (ProductsubtypeMobTwo !== '') {
    let tProductsubtypeMobTwo = await t.$(ProductsubtypeMobTwo);
    if (await tProductsubtypeMobTwo.exists()) {
      await t.evaluate(tProductsubtypeMobTwo, (ele) => ele.click(), {
        waitForNavigation: false,
      });
      gauge.screenshot();
    } else {
      assert(!matchCondition, 'Product second subtype not exists/data changed');
    }
  }
  await ValidateUrlafterNavigatefromGnav();
}

/**
 * @description It is used to close all the visible popup's
 */

async function Lookforpopupsandclose() {
  let PopupCount = 0;
  if (closePopup !== '') {
    let tClosepopup = await t.$(closePopup);
    if (await tClosepopup.exists()) {
      await t.evaluate(tClosepopup, (ele) => ele.click());
      PopupCount++;
    }
  }
  if (closeSecondPopup !== '') {
    let tCloseSecpopup = await t.$(closeSecondPopup);
    if (await tCloseSecpopup.exists()) {
      await t.evaluate(tCloseSecpopup, (ele) => ele.click());
      PopupCount++;
    }
  }
  if (closeThirdPopup !== '') {
    let tClosethirdpopup = await t.$(closeThirdPopup);
    if (await tClosethirdpopup.exists()) {
      await t.evaluate(tClosethirdpopup, (ele) => ele.click());
      popUpFlag = 1;
    }
  }
  if (PopupCount === 0) {
    gauge.message('no pop ups appeared');
  } else {
    gauge.message('pop ups closed');
  }
}

/**
 * @description It is used to select the country, language for the hub sites based on data file
 * @param {string} country - The text of the country name
 * @param {string} language - The text of the language to choose
 * @param {const} submitbtn - The locator of the submit button to click
 */

async function ChooseCountryAndLanguage(country, language, submitbtn) {
  if (country !== '') {
    await t.click(t.text(country));
    gauge.message(country + ' Country is selected');
    if (language !== '') {
      await t.click(t.text(language));
      gauge.message(language + ' Language is selected');
      gauge.screenshot();
    }
    let tsubmitbtn = await t.$(submitbtn);
    if (await tsubmitbtn.exists()) {
      await t.evaluate(tsubmitbtn, (ele) => ele.click(), {
        waitForEvents: ['loadEventFired'],
      });
    } else {
      gauge.message('Submit btn not available');
    }
  }
}

/* Front end common steps */

step(
  'GNAVFOOTER Initialize Helix',
  { continueOnFailure: true },
  async function () {
    // Initialize the selectors from DB
    await initFrameworkSettings();
  }
);

step(
  'GNAVFOOTER Configuring the prerequisites like set cookies, revision tag',
  { continueOnFailure: true },
  async function () {
    await t.setConfig({ navigationTimeout: parseInt(timeoutSetting, 10) });
    await Helper.setWindowSize(Util.ScreenSizes['1040p'], t);
    await Helper.setWAFCookie(siteDefinition, t);
    await Helper.setAdroll(siteDefinition, t);
    await Helper.setAkamaiBypass(siteDefinition, t);
    await Helper.setApiEnv(siteDefinition, t);
    await Helper.getPerlgemEnvCookie(siteDefinition, t);
    await Helper.setOtherCookies(siteDefinition, t);
    await Helper.setRevisionTag(siteDefinition, t);
  }
);

step(
  'GNAVFOOTER Open Home Page and Choose Country & Language in case of hubsites',
  { continueOnFailure: true },
  async function () {
    await t.goto(siteDefinition.executionContext.url);
    gauge.screenshot();
    await Lookforpopupsandclose();
    await ChooseCountryAndLanguage(
      countryName,
      chooseLanguage,
      hubsiteSubmitBtn
    );
  }
);

step('GNAVFOOTER Mobile Device Emulation', async function () {
  await t.emulateDevice(CommonData.EmulationDevice);
  gauge.message('Device Emulation set to: ' + CommonData.EmulationDevice);
});

step(
  'GNAVFOOTER Verify Home page for the selected Country displayed properly',
  { continueOnFailure: true },
  async function () {
    HPurl = await t.currentURL();
    var HPtitle = await t.evaluate(() => {
      return document.title;
    });
    // Validate the user on the homepage by using the retrieved URL from the user interface with the URL provided.
    if (
      HPurl.toLowerCase().replace(RegExpGlobal, '') ===
      Splittingurl(siteDefinition, t).toLowerCase().replace(RegExpGlobal, '') +
        hubsiteExtensionUrl
    ) {
      assert(matchCondition);
      gauge.message('In Homepage and the current page title is : ' + HPtitle);
    } else if (
      HPurl.toLowerCase().replace(RegExpGlobal, '') ===
      Splittingurl(siteDefinition, t)
        .toLowerCase()
        .replace('m.', 'www.')
        .replace(RegExpGlobal, '') +
        hubsiteExtensionUrl
    ) {
      assert(matchCondition);
      gauge.message('In Homepage and page title is : ' + HPtitle);
    } else {
      assert(
        !matchCondition,
        'Not in Homepage and the current page title is : ' + HPtitle
      );
    }
  }
);

/** Gnav steps */

step(
  'GNAVFOOTER Verify that user is able to navigate to MPP via Gnav',
  async function () {
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      if (mppGnavPc) {
        await NavigatetoMPPfromGnavPc(
          gnavPreProductTypePc,
          gnavProductTypePc,
          gnavProductSecSubTypePc
        );
      } else if (mppGnavPcTwo) {
        await NavigatetoMPPfromGnavPcMethod2(
          gnavProductTypePc,
          gnavProductTypeHoverPc,
          gnavProductSubTypePc,
          gnavProductSecSubTypePc
        );
      } else {
        gauge.message(messages.stepNotApplicable);
      }
    } else {
      await Trycatchclick(
        closeThirdPopup,
        'popup closed',
        'no popups displayed'
      );
      await NavigatetoMPPFromGnavMob(
        navMenuMob,
        gnavProductTypeMob,
        gnavProductSubTypeMob,
        gnavProductSecSubTypeMob
      );
    }
  }
);

step(
  'GNAVFOOTER Verify that user is able to navigate to Different MPP via Gnav',
  async function () {
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      if (mppGnavPc) {
        await NavigatetoMPPfromGnavPc(
          secGnavPreProductTypePc,
          secGnavProductTypePc,
          secGnavProductSecSubTypePc
        );
      } else if (mppGnavPcTwo) {
        await NavigatetoMPPfromGnavPcMethod2(
          secGnavProductTypePc,
          secGnavProductTypeHoverPc,
          secGnavProductSubTypePc,
          secGnavProductSecSubTypePc
        );
      } else {
        gauge.message(messages.stepNotApplicable);
      }
    } else {
      await NavigatetoMPPFromGnavMob(
        navMenuMob,
        secGnavProductTypeMob,
        secGnavProductSubTypeMob,
        secGnavProductSecSubTypeMob
      );
    }
  }
);

step(
  'GNAVFOOTER Verify that user is able to click on Stores & Salons link if available on Gnav',
  { continueOnFailure: true },
  async function () {
    await FocusAndClick(
      gnavStores,
      'Stores link available on Gnav and can click on it',
      'Stores link not available on Gnav for this market'
    );
  }
);

step(
  'GNAVFOOTER Verify that user is able to click on Signin link on Gnav',
  async function () {
    await FocusAndClick(
      gnavSignin,
      'Signin link available on Gnav and can click on it',
      'Signin btn not available in Gnav'
    );
  }
);

step(
  'GNAVFOOTER Verify that user is able to click on Search link on Gnav',
  async function () {
    if (gnavSearchInput !== '') {
      if (gnavSearchPc !== '') {
        var tgnavSearch = await t.$(gnavSearchPc);
        if (await tgnavSearch.exists()) {
          await t.click(tgnavSearch);
          gauge.message('Search button available on Gnav and can click on it.');
        } else {
          assert(!matchCondition, 'Search element not exists/Locator change');
        }
      }
      if (gnavSearchHoverPc !== '') {
        let tgnavSearchHover = await t.$(gnavSearchHoverPc);
        if (await tgnavSearchHover.exists()) {
          await t.hover(tgnavSearchHover);
          gauge.message(
            'Search button available on Gnav and can mouse hovered on it.'
          );
        } else {
          assert(!matchCondition, 'Search element not exists/Locator change');
        }
      }
      // For some pc sites the normal click does not work as expected sometimes, hence in the capture block using 'tap/evaluate' API.
      try {
        await t.write(gnavSearchInputText, t.into(await t.$(gnavSearchInput)));
      } catch (error) {
        await t.evaluate(tgnavSearch, (ele) => ele.click());
        await t.write(gnavSearchInputText, t.into(await t.$(gnavSearchInput)));
      }
      gauge.screenshot();
      await t.press('Enter', { waitForNavigation: false });
      gauge.message(
        gnavSearchInputText +
          ': keyword entered into the search box and hit Enter.'
      );
      gauge.screenshot();
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step(
  'GNAVFOOTER Verify that user is able to click on Search link on Gnav for Mob',
  async function () {
    if (gnavSearchMob !== '') {
      let tgnavSearchMob = await t.$(gnavSearchMob);
      if (await tgnavSearchMob.exists()) {
        // For some mobile sites tap the click does not work as expected sometimes, hence in the capture block using 'evaluate' API.
        try {
          await t.tap(tgnavSearchMob);
        } catch (error) {
          await t.evaluate(tgnavSearchMob, (ele) => ele.click());
        }
        gauge.message('Search button available on Gnav and can click on it.');
      } else {
        assert(!matchCondition, 'Search element not exists/Locator change');
      }
      await t.write(gnavSearchInputText, t.into(await t.$(gnavSearchInput)));
      gauge.screenshot();
      await t.press('Enter', { waitForNavigation: false });
      gauge.message(
        gnavSearchInputText +
          ' keyword entered into the search box and hit Enter.'
      );
      gauge.screenshot();
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

/**** Footer scenario steps ****/

step(
  'GNAVFOOTER Go through the page and check the Footer',
  { continueOnFailure: true },
  async function () {
    if (footersection !== '') {
      let tfootersection = await t.$(footersection);
      if (await tfootersection.exists()) {
        await t.scrollTo(tfootersection, { waitForNavigation: false });
        gauge.screenshot();
        gauge.message('The footer appears at the bottom of the homepage.');
      } else {
        assert(
          !matchCondition,
          "The footer doesn't appears at the bottom of the homepage."
        );
      }
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step(
  'GNAVFOOTER Verify that copyright text is present in the Footer',
  async function () {
    if (copyrightsec !== '') {
      if (await (await t.$(copyrightsec)).exists()) {
        gauge.message('Copyright text exists');
      } else {
        assert(!matchCondition, "Copyright text doesn't exists");
      }
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step(
  'GNAVFOOTER Verify the sub-section and related links/options exist in the Footer',
  async function () {
    if (subsection !== '') {
      var Subsectionarray = [];
      let tsubsection = await t.$(subsection);
      if (await tsubsection.exists()) {
        gauge.message('Subsection exists');
        var Subsectiontext = await tsubsection.elements();
        for (element of Subsectiontext) {
          Subsectionarray.push(await element.text());
        }
        var removeItem = /\n/g;
        Subsectionarray = Subsectionarray.map(function (value) {
          return value.replace(removeItem, ',');
        });
        gauge.message(
          'Subsection list from UI =' + JSON.stringify(Subsectionarray)
        );
      } else {
        assert(!matchCondition, "Subsection doesn't exists");
      }
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step(
  'GNAVFOOTER Click on the links in the sub-section and ensure they are redirected to the intended page',
  async function () {
    if (subsectionLinkOne !== '') {
      for (let i = 0; i < subsectionLinks.length; i++) {
        await t.evaluate(
          t.link(subsectionLinks[i], { waitForEvents: ['loadEventFired'] }),
          (ele) => ele.click(),
          { waitForNavigation: false }
        );
        if (
          await (
            await t.$(respectivePageElements[i])
          ).exists(
            parseInt(CommonData.ExistsCheckFrequency, 10),
            parseInt(CommonData.ExistsWaitTime, 10)
          )
        ) {
          gauge.message(
            'Successfully redirected to the ' +
              subsectionLinks[i] +
              ' page as expected.'
          );
          gauge.message('Title of the present page =' + (await t.title()));
          gauge.screenshot();
        } else {
          assert(
            !matchCondition,
            'Failed to redirect to the ' + subsectionLinks[i] + ' page.'
          );
        }
      }
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step(
  'GNAVFOOTER Verify the Country Location Dropdown exists in the Footer',
  async function () {
    if (locationDropdown !== '') {
      let pageurl = await t.currentURL();
      let tlocationDropdown = await t.$(locationDropdown);
      if (await tlocationDropdown.exists()) {
        gauge.message('Country Location dropdown exists');
        if (locDropdownAttribute !== '') {
          await (
            await t.dropDown({ class: locDropdownAttribute })
          ).select(locationValue);
        } else {
          await t.evaluate(tlocationDropdown, (ele) => ele.click());
          await t.click(locationValue);
        }
        await Trycatchclick(closePopup, 'popup closed', 'no popups displayed');
        let currentpageurl = await t.currentURL();
        if (pageurl !== currentpageurl) {
          assert(
            matchCondition,
            'Successfully navigate to a different location as expected.'
          );
          gauge.screenshot();
        } else {
          assert(!matchCondition, 'Failed to navigate to another location.');
        }
      } else {
        assert(!matchCondition, "Country Location dropdown doesn't exists");
      }
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step(
  'GNAVFOOTER Verify the Country Location Dropdown exists in the Footer(Method 2)',
  async function () {
    if (locationLink !== '') {
      let pageurl = await t.currentURL();
      let tlocationLink = await t.$(locationLink);
      let tlocationValueLink = await t.$(locationValueLink);
      if (await tlocationLink.exists()) {
        gauge.message('Country Location link exists');
        await t.scrollTo(tlocationLink);
        await t.tap(tlocationLink, {
          waitForEvents: ['loadEventFired'],
        });
        await t.scrollTo(tlocationValueLink);
        await t.tap(
          (tlocationValueLink, { waitForEvents: ['loadEventFired'] }),
          (ele) => ele.click()
        );
        let currentpageurl = await t.currentURL();
        if (pageurl !== currentpageurl) {
          assert(
            matchCondition,
            'Successfully navigate to a different location as expected.'
          );
          gauge.screenshot();
        } else {
          assert(!matchCondition, 'Failed to navigate to another location.');
        }
      } else {
        assert(!matchCondition, "Country Location link doesn't exists");
      }
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step(
  'GNAVFOOTER Verify the Country Location Dropdown exists in the Footer for Mob',
  async function () {
    if (locDropdownAttributeMob !== '') {
      let pageurl = await t.currentURL();
      let tlocationDropdown = await t.$(locationDropdown);
      if (
        await (await t.dropDown({ class: locDropdownAttributeMob })).exists()
      ) {
        gauge.message('Country Location dropdown exists');
        if (locDropdownAttributeMob !== '') {
          await (
            await t.dropDown({ class: locDropdownAttributeMob })
          ).select(locationValue);
        } else {
          await t.evaluate(tlocationDropdown, (ele) => ele.click());
          await t.click(locationValue);
        }
      } else {
        if (await tlocationDropdown.exists()) {
          await t.evaluate(tlocationDropdown, (ele) => ele.click());
          await t.click(locationValue);
        } else {
          assert(!matchCondition, "Country Location dropdown doesn't exists");
        }
      }
      await Trycatchclick(closePopup, 'popup closed', 'no popups displayed');
      let currentpageurl = await t.currentURL();
      if (pageurl !== currentpageurl) {
        assert(matchCondition);
        gauge.message(
          'Successfully navigate to a different location as expected.'
        );
        gauge.screenshot();
      } else {
        assert(!matchCondition, 'Failed to navigate to another location.');
      }
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step('GNAVFOOTER Verify the Livechat exists in the Footer', async function () {
  if (liveChatIcon !== '') {
    let tliveChatIcon = await t.$(liveChatIcon);
    if (
      await tliveChatIcon.exists(
        parseInt(CommonData.ExistsCheckFrequency, 10),
        parseInt(CommonData.ExistsWaitTime, 10)
      )
    ) {
      await t.evaluate(tliveChatIcon, (ele) => ele.click());
      if (secondliveChatBtn !== '') {
        await t.evaluate(await t.$(secondliveChatBtn), (ele) => ele.click());
      }
      gauge.message('Live chat exists and able to click on it');
      gauge.screenshot();
      if (
        await (
          await t.$(liveChatMsg)
        ).exists(
          parseInt(CommonData.ExistsCheckFrequency, 10),
          parseInt(CommonData.ExistsWaitTime, 10)
        )
      ) {
        assert(
          matchCondition,
          'Successfully navigate to live chat as expected.'
        );
        gauge.screenshot();
        if (liveChatCloseIcon !== '') {
          await t.evaluate(await t.$(liveChatCloseIcon), (ele) => ele.click());
        }
      } else {
        assert(!matchCondition, 'Failed to navigate to live chat section.');
      }
    } else {
      assert(!matchCondition, "Live chat doesn't exists within 20 seconds");
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

// New steps

let matchedValues = 0;
let unmatchedValues = 0;
let Textcount;

async function CheckOptions(optionstextfromui, expvaluetext) {
  var optionsreg = optionstextfromui.toUpperCase().replace(/[()]/g, '');
  var matches = optionsreg.toUpperCase().includes(expvaluetext.toUpperCase());
  if (matches) {
    console.log('The dropdown consists of ' + expvaluetext);
    gauge.message('The dropdown consists of ' + expvaluetext);
    matchedValues++;
    availableValues.push(expvaluetext);
  } else {
    console.log("The dropdown doesn't consist of " + expvaluetext);
    gauge.message("The dropdown doesn't consist of " + expvaluetext);
    unmatchedValues++;
    actualUnavailableValues.push(expvaluetext);
  }
}

async function CheckMultipleOption(optionstextfromui, searchString) {
  const matches = optionstextfromui.match(new RegExp(searchString, 'g'));
  if (matches && matches.length > 3) {
    console.log(`Option ${searchString} found ${matches.length} times.`);
    gauge.message(`Option ${searchString} found ${matches.length} times.`);
    resultFinal = result.failed;
    reasonFailure = reasons.valuesMismatch;
    assert(false);
  }
}

async function Checktext(expvaluetext) {
  if (await t.text(expvaluetext).exists()) {
    console.log('The page consists of ' + expvaluetext);
    gauge.message('The page consists of ' + expvaluetext);
    Textcount++;
    availableValues.push(expvaluetext);
  } else {
    console.log(`The page doesn't consist of ` + expvaluetext);
    gauge.message(`The page doesn't consist of ` + expvaluetext);
    actualUnavailableValues.push(expvaluetext);
  }
}

step(
  'GNAVFOOTER Check if Location dropdown has specific countries available in Footer',
  { continueOnFailure: true },
  async function () {
    featureActual = features.location;
    if (locationDropdown !== '') {
      let pageurl = await t.currentURL();
      let tlocationDropdown = await t.$(locationDropdown);
      if (await tlocationDropdown.exists()) {
        gauge.message('Country Location dropdown exists');
        if (
          await (await t.dropDown({ class: selectDropdownClassPc })).exists()
        ) {
          gauge.message('The dropdown is of select class');
          Locationoptionstext = await (
            await t.dropDown({ class: selectDropdownClassPc })
          ).text();
          console.log(Locationoptionstext);
          gauge.message(Locationoptionstext);
        } else if (await (await t.$(selectDropdownClassPc)).exists()) {
          gauge.message('It is a normal dropdown');
          await t.evaluate(await t.$(selectDropdownClassPc), (ele) =>
            ele.click()
          );
          Locationoptionstext = await (await t.$(selectDropdownClassPc)).text();
          console.log(Locationoptionstext);
          gauge.message(Locationoptionstext);
        } else {
          resultFinal = result.script;
          reasonFailure = reasons.scriptIssue;
          assert(
            false,
            `Not able to fetch values from dropdown or change in locator`
          );
        }
        matchedValues = 0;
        await CheckOptions(Locationoptionstext, CommonData.optionChinaMainland);
        await CheckOptions(Locationoptionstext, CommonData.optionHongKong);
        await CheckOptions(Locationoptionstext, CommonData.optionTaiwan);
        await CheckMultipleOption(
          Locationoptionstext,
          CommonData.optionChinatext
        );
        console.log(`Current page url is ${pageurl}`);
        gauge.message(`Current page url is ${pageurl}`);
        if (matchedValues === 0) {
          resultFinal = result.na;
          reasonFailure = reasons.noValues;
        } else if (matchedValues === 3) {
          resultFinal = result.validated;
          reasonFailure = reasons.valuesAvailable;
          assert(matchCondition);
        } else if (matchedValues <= 3) {
          resultFinal = result.validated;
          reasonFailure = reasons.valuesUnavailable;
          assert(matchCondition);
        } else {
          resultFinal = result.failed;
          reasonFailure = reasons.moreValues;
          assert(!matchCondition);
        }
      } else {
        resultFinal = result.na;
        reasonFailure = reasons.locationNotAvailable;
        console.log(`The location dropdown/link is not available`);
        gauge.message(`The location dropdown/link is not available`);
      }
    } else if (locationLinkLocatorPc !== '') {
      let tlocationLink = await t.$(locationLinkLocatorPc);
      if (await tlocationLink.exists()) {
        gauge.message('Country Location link exists in the Footer');
        await t.scrollTo(tlocationLink);
        try {
          await t.tap(tlocationLink, {
            waitForEvents: ['loadEventFired'],
          });
        } catch (error) {
          await t.evaluate(tlocationLink, (ele) => ele.click());
        }
        let pageurl = await t.currentURL();
        Textcount = 0;
        await Checktext(CommonData.textChinaMainland);
        await Checktext(CommonData.textHongKong);
        await Checktext(CommonData.textTaiwan);
        console.log(Textcount);
        console.log(`Current page url is ${pageurl}`);
        gauge.message(`Current page url is ${pageurl}`);
        if (Textcount === 0) {
          resultFinal = result.na;
          reasonFailure = reasons.noValues;
        } else if (Textcount === 3) {
          resultFinal = result.validated;
          reasonFailure = reasons.valuesAvailable;
          assert(matchCondition);
        } else if (Textcount <= 3) {
          resultFinal = result.validated;
          reasonFailure = reasons.valuesUnavailable;
          assert(matchCondition);
          gauge.screenshot();
        } else {
          resultFinal = result.failed;
          reasonFailure = reasons.moreValues;
          assert(!matchCondition);
        }
      } else {
        resultFinal = result.na;
        reasonFailure = reasons.locationNotAvailable;
        console.log(`The location dropdown/link is not available`);
        gauge.message(`The location dropdown/link is not available`);
      }
    } else {
      resultFinal = result.na;
      reasonFailure = reasons.locationNotAvailable;
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step(
  'GNAVFOOTER Check if Location dropdown has specific countries in Stores',
  { continueOnFailure: true },
  async function () {
    featureActual = features.store;
    if (gnavStores !== '' && storeLocatorCountryDDPc !== '') {
      if (internationalStoreSearchPc !== '' || storeLocatorCountryDDPc !== '') {
        if (await (await t.$(internationalStoreSearchPc)).exists()) {
          console.log('International dropdown/link is exists');
          gauge.message('International dropdown/link is exists');
          if (await (await t.$(internationalStoreSearchPc)).isVisible()) {
            await t.scrollTo(await t.$(internationalStoreSearchPc));
            await t.evaluate(await t.$(internationalStoreSearchPc), (ele) =>
              ele.click()
            );
            console.log('International dropdown/link is visible and clicked');
            gauge.message('International dropdown/link is visible and clicked');
          }
        }
        let pageurl = await t.currentURL();
        let tlocationDropdown = await t.$(storeLocatorCountryDDPc);
        if (await tlocationDropdown.exists()) {
          gauge.message('Country Location dropdown exists');
          if (await tlocationDropdown.isVisible()) {
            gauge.message('Country Location dropdown is visible');
            if (
              await (
                await t.dropDown({ class: storeSelectDropdownClassPc })
              ).exists()
            ) {
              gauge.message('The dropdown is of select class');
              var Locationoptionstext = await (
                await t.dropDown({ class: storeSelectDropdownClassPc })
              ).text();
              matchedValues = 0;
              console.log(Locationoptionstext);
              gauge.message(Locationoptionstext);
              await CheckOptions(
                Locationoptionstext,
                CommonData.storeOptionChinaMainland
              );
              await CheckOptions(
                Locationoptionstext,
                CommonData.storeOptionHongKong
              );
              await CheckOptions(
                Locationoptionstext,
                CommonData.storeOptionTaiwan
              );
              await CheckMultipleOption(
                Locationoptionstext,
                CommonData.optionChinatext
              );
              console.log(matchedValues);
              console.log(`Current page url is ${pageurl}`);
              gauge.message(`Current page url is ${pageurl}`);
              if (matchedValues === 0) {
                resultFinal = result.na;
                reasonFailure = reasons.noValues;
              } else if (matchedValues === 3) {
                resultFinal = result.validated;
                reasonFailure = reasons.valuesAvailable;
                assert(matchCondition);
              } else if (matchedValues <= 3) {
                resultFinal = result.validated;
                reasonFailure = reasons.valuesUnavailable;
                assert(matchCondition);
              } else {
                resultFinal = result.failed;
                reasonFailure = reasons.moreValues;
                assert(!matchCondition);
              }
            } else {
              resultFinal = result.script;
              reasonFailure = reasons.scriptIssue;
              assert(
                false,
                `Not able to fetch values from dropdown or change in locator`
              );
            }
          } else {
            resultFinal = result.na;
            reasonFailure = reasons.StoreLocationUnavailable;
            gauge.message('Country Location dropdown is not visible');
          }
        } else {
          resultFinal = result.na;
          reasonFailure = reasons.StoreLocationUnavailable;
          console.log(`The location dropdown/link is not available`);
          gauge.message(`The location dropdown/link is not available`);
        }
      } else {
        resultFinal = result.na;
        reasonFailure = reasons.internationLocationUnavailable;
      }
    } else {
      resultFinal = result.na;
      reasonFailure = reasons.storeUnavailable;
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step('GNAVFOOTER Write Data to Datastore', async function () {
  // To write data to datastore
  if (writeToExcelFlag) {
    gauge.message('Collect and save data in data store');
    const dataStoreEntries = {};
    // dataStoreEntries.writeReportToExcel = 'Y';
    dataStoreEntries.brand = siteDefinition.brandLocale.split('-')[0];
    dataStoreEntries.region = siteDefinition.region;
    dataStoreEntries.country = siteDefinition.brandLocale.split('-')[1];
    dataStoreEntries.url = siteDefinition.executionContext.url;
    dataStoreEntries.result = resultFinal;
    dataStoreEntries.availableValues = JSON.stringify(availableValues);
    dataStoreEntries.unavailableValues = JSON.stringify(
      actualUnavailableValues
    );
    dataStoreEntries.failureReason = reasonFailure;
    dataStoreEntries.feature = featureActual;
    dataStoreEntries.siteType = CommonData.siteType;
    for (let key in dataStoreEntries) {
      gds.put(key, dataStoreEntries[key]);
    }
    arrData.push(dataStoreEntries);
    suiteStore.put('arrData', arrData);
    actualUnavailableValues = [];
    availableValues = [];
    reasonFailure = '';
    resultFinal = '';
    featureActual = '';
  } else {
    console.log('Unable to Collect and save data in data store');
  }
});
