var t = require('taiko');
const Helper = require('../../helpers/helper');
const Util = require('../../../../utilities/util');
const assert = require('assert');
const matchCondition = true;

const Hengine = require('../../../../datainterface/providers/hengine');
const taikoOverride = require('../../helix_taiko');
var CommonData = {};
var timeoutSetting = '';
var closePopup = '';
var zipcodeField = '';
var storteId = '';
var searchId = '';
var cityTextId = '';
var zipcodeTextId = '';
var cityField = '';
var zipcodeSuggestion = '';
var mobZipcodeTextId = '';
var countryDrp = '';
var provinceDrp = '';
var mobSearchId = '';
var useEnterPc = '';
var searchId1 = '';
var storteId1 = '';
var map = '';
var clearFalseNav = '';
var cookieRejectButton = '';
var cityDrp = '';
var cityId = '';
var useScrollBlock = '';
var cityTextLoc = '';
var mobCityTextId = '';
var provinceDrpSelect = '';
var useEnter = '';
var storeNav = '';
var mobStorteId = '';
var storeDrp = '';
var mobZipcodeField = '';
var mobCityField = '';
var mobCountryDrp = '';
var mobProvinceDrp = '';
var mobProvinceDrpClick = '';
var mobCityDrp = '';
var mobCityDrpClick = '';
var cityTextLocMob = '';
var mobStoreDrp = '';
var mobStoreDrpClick = '';
var mobStoreHam = '';
var countryName = '';
var chooseLanguage = '';
var hubsites = '';
var hubSiteLang = '';
var hubsiteLocaleBtn = '';
var switchToRegx = '';
var switchToRegxMob = '';
var emulationDevice = '';
const pollingTime = 100;
const timeout = 80000;
//let plat=siteDefinition.executionContext.platform;

const feature = 'Store Locator';
let siteDefinition, source, NullDataException;
// isDiscovery = true;
// doHeal = true;
var jomlconvert = '';
var Zipcodedetails = [];
var Zipcodedetailsmob = [];
var citydetails = [];
var citydetailsmob = [];

function reinitialize() {
  Zipcodedetails = [
    { loc: closePopup, action: 'tryCatchClick' },
    { loc: zipcodeField, data: CommonData.zipcode, action: 'write' },
    { loc: closePopup, action: 'tryCatchClick' },
    { loc: zipcodeSuggestion, action: 'selectaddresswithpress' },
  ];

  Zipcodedetailsmob = [
    { loc: mobZipcodeField, data: CommonData.zipcode, action: 'write' },
    { loc: zipcodeSuggestion, action: 'selectaddresswithpress' },
  ];

  citydetails = [
    { loc: cityField, data: CommonData.city, action: 'write' },
    { loc: zipcodeSuggestion, action: 'selectaddresswithpress' },
  ];
  citydetailsmob = [
    { loc: mobCityField, data: CommonData.city, action: 'write' },
    { loc: zipcodeSuggestion, action: 'selectaddresswithpress' },
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

step('STORELOCATOR Initialize Helix', async function () {
  // Initialize the selectors from DB
  await initFrameworkSettings();
});

step('STORELOCATOR Mobile device emulation store', async function () {
  await t.emulateDevice(emulationDevice);
  gauge.message('Emulation device: ' + emulationDevice);
});

step(
  'STORELOCATOR Configuring the prerequisites like set cookies, revision tag',
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

async function ElementAction(ElementObj) {
  for (i = 0; i < ElementObj.length; i++) {
    switch (ElementObj[i].action) {
      case 'screenshot':
        {
          gauge.screenshot();
        }
        break;
      case 'write':
        {
          if (ElementObj[i].loc !== '') {
            await t.evaluate(await t.$(ElementObj[i].loc), (ele) =>
              ele.focus()
            );
            await t.write(
              ElementObj[i].data,
              t.into(await t.$(ElementObj[i].loc))
            );
          }
        }
        break;
      case 'click':
        {
          if (ElementObj[i].loc !== '') {
            await t.evaluate(await t.$(ElementObj[i].loc), (ele) =>
              ele.focus()
            );
            await t.evaluate(await t.$(ElementObj[i].loc), (ele) =>
              ele.click()
            );
          }
        }
        break;
      case 'tryCatchClick':
        {
          if (ElementObj[i].loc !== '') {
            try {
              let tElementObj = await t.$(ElementObj[i].loc);
              if (await tElementObj.exists()) {
                await t.evaluate(tElementObj, (ele) => {
                  ele.focus();
                  ele.click();
                });
                // await t.evaluate(tElementObj, (ele) => ele.click());
              }
            } catch (e) {}
          }
        }
        break;
      case 'IDDropdowntxt':
        {
          if (ElementObj[i].loc !== '') {
            await (
              await t.dropDown({ id: ElementObj[i].loc })
            ).select(ElementObj[i].data);
          }
        }
        break;
      case 'NameDropDowntxt':
        {
          if (ElementObj[i].loc !== '') {
            await t.waitFor(
              3500
            ); /*Dynamic dropdown waiting to load the options*/

            await (
              await t.dropDown({ name: ElementObj[i].loc })
            ).select(ElementObj[i].data);
          }
        }
        break;

      case 'IndexDropDownID':
        {
          if (ElementObj[i].loc !== '') {
            await (
              await t.dropDown({ id: ElementObj[i].loc })
            ).select({
              index: ElementObj[i].data,
            });
          }
        }
        break;

      case 'IndexDropdownName':
        {
          if (ElementObj[i].loc !== '') {
            await (
              await t.dropDown({ name: ElementObj[i].loc })
            ).select({
              index: ElementObj[i].data,
            });
          }
        }
        break;

      case 'Dropdownwithoutselecttag': {
        if (ElementObj[i].loc !== '') {
          await t.waitFor(
            3500
          ); /*Dynamic dropdown waiting to load the options*/
          await t.click(await t.$(ElementObj[i].loc));
          await t.click(await t.text(ElementObj[i].data));
          break;
        }
      }

      case 'ClickDropDown':
        {
          if (ElementObj[i].loc !== '') {
            await t.evaluate(await t.$(ElementObj[i].loc), (ele) =>
              ele.scrollIntoView()
            );
            await t.evaluate(await t.$(ElementObj[i].loc), (ele) =>
              ele.click()
            );
            await t.evaluate(await t.$(ElementObj[i].data), (ele) =>
              ele.click()
            );
          }
        }
        break;

      case 'ClickDropDownwithTrycatch':
        {
          if (ElementObj[i].loc !== '') {
            try {
              await t.evaluate(await t.$(ElementObj[i].loc), (ele) =>
                ele.scrollIntoView()
              );
              await t.evaluate(await t.$(ElementObj[i].loc), (ele) =>
                ele.click()
              );
              await t.evaluate(await t.$(ElementObj[i].data), (ele) =>
                ele.click()
              );
            } catch (error) {}
          }
        }
        break;

      case 'Scrollintoview':
        {
          if (ElementObj[i].loc !== '') {
            await t.evaluate(await t.$(ElementObj[i].loc), (ele) =>
              ele.scrollIntoView()
            );
          }
        }
        break;

      case 'reload':
        {
          if (ElementObj[i].loc !== '') {
            await t.reload({ waitForEvents: ['loadEventFired'] });
          }
        }
        break;
      case 'selectaddresswithpress':
        {
          if (zipcodeSuggestion) {
            gauge.screenshot();
            await t.waitFor(3500);
            await t.press('ArrowDown');
            await t.press('Enter');
          }
        }
        break;
      case 'Pressenter':
        {
          if (useEnterPc) {
            gauge.screenshot();
            await t.press('Enter');
          }
        }
        break;
      case 'clickwithfalsenavigation':
        {
          if (ElementObj[i].loc !== '') {
            await t.evaluate(await t.$(ElementObj[i].loc), (ele) =>
              ele.focus()
            );
            await t.evaluate(
              await t.$(ElementObj[i].loc, { waitForNavigation: false }),
              (ele) => ele.click()
            );
          }
        }
        break;
    }
  }
}

/**
 * @param {*} resultsloc
 * @param {*} city_zip
 */
async function validatetheresults(resultsloc) {
  await Helper.closePopups(closePopup, t);
  if (resultsloc !== '') {
    if (await (await t.$(resultsloc)).exists(pollingTime, timeout)) {
      await t.evaluate(await t.$(resultsloc), (ele) => ele.focus());
      var storeresults = await (await t.$(resultsloc)).text();
      gauge.screenshot();
      assert(matchCondition);
      gauge.message('Stores displayed+ ' + storeresults);
    } else {
      gauge.screenshot();
      assert(!matchCondition);
      gauge.message('Stores are not displayed');
    }
  }
}

step(
  'STORELOCATOR Verify that the store locator functionality is accessible from the homepage using header or footer',
  async function () {
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      if (storteId1) {
        await t.evaluate(
          await t.$(storteId, { waitForEvents: ['DOMContentLoaded'] }),
          (ele) => ele.click()
        );
        if (map !== '') {
          await t.waitFor(await t.$(map), 80000);
        }
      } else {
        await t.evaluate(await t.$(storteId), (ele) => ele.click(), {
          waitForNavigation: false,
        });
        gauge.screenshot();
      }
      if (switchToRegx !== '') {
        await t.switchTo(switchToRegx);
        gauge.screenshot();
        gauge.message('Switched to store locator tab!!');
      }
      await Helper.closePopups(closePopup, t);
      gauge.screenshot();
    } else {
      if (mobStorteId !== '') {
        await t.evaluate(
          await t.$(mobStorteId, {
            hasDuplicate: {
              fields: { locatorKey: 'mobstorteid' },
            },
          }),
          (ele) => ele.click(),
          { waitForEvents: ['loadEventFired'] }
        );
        gauge.screenshot();
      }
      if (mobStoreHam !== '') {
        await t.evaluate(await t.$(mobStoreHam), (ele) => ele.click());
        gauge.screenshot();
        await t.evaluate(
          await t.$(mobStorteId, {
            hasDuplicate: {
              fields: { locatorKey: 'mobstorteid' },
            },
          }),
          (ele) => ele.click()
        );
      }
      if (switchToRegxMob !== '') {
        await t.switchTo(switchToRegxMob);
        await t.emulateDevice('iPhone X');
        gauge.screenshot();
        gauge.message('Switched to store locator tab!!');
      }
      await Helper.closePopups(closePopup, t);
      if (mobSearchId !== '' && !useEnter) {
        await t.evaluate(await t.$(mobSearchId), (ele) => ele.focus());
        await t.evaluate(await t.$(mobSearchId), (ele) => ele.click(), {
          waitForNavigation: false,
        });
        gauge.screenshot();
      } else if (useEnter) {
        await t.press('Enter');
      }
      gauge.screenshot();
    }
  }
);

step(
  'STORELOCATOR Verify that the user is able to Choose a country, enter valid zipcode using data/suggestions/dropdown',
  async function () {
    await Helper.closePopups(closePopup, t);
    await Helper.closePopups(cookieRejectButton, t);
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      if (countryDrp !== '') {
        //await evaluate($(countrydrp), ele => ele.scrollIntoView());
        //await evaluate($(countrydrp), ele => ele.click());
        await t.click(await t.$(countryDrp));
        await t.click(await t.text(CommonData.country));
      }
      await Helper.closePopups(closePopup, t);
      await ElementAction(Zipcodedetails);
      if (searchId !== '') {
        //await evaluate($(searchid), ele => ele.scrollIntoView());
        await t.evaluate(await t.$(searchId), (ele) => ele.focus());
        await t.evaluate(
          await t.$(searchId, { waitForEvents: ['DOMContentLoaded'] }),
          (ele) => ele.click()
        );
        gauge.screenshot();
      } else if (useEnterPc) {
        await t.press('Enter');
      } else if (searchId1 !== '') {
        await t.evaluate(await t.$(searchId1), (ele) => ele.focus());
        await t.evaluate(
          await t.$(searchId1, { waitForNavigation: false }),
          (ele) => ele.click()
        );
        gauge.screenshot();
      }
    } else {
      if (mobCountryDrp !== '') {
        await (
          await t.dropDown({ class: mobCountryDrp })
        ).select({
          index: CommonData.countryindex,
        });
      }
      await ElementAction(Zipcodedetailsmob);
      if (mobSearchId !== '' && !useEnter) {
        //await evaluate($(searchid), ele => ele.scrollIntoView());
        await t.evaluate(await t.$(mobSearchId), (ele) => ele.focus());
        await t.evaluate(await t.$(mobSearchId), (ele) => ele.click(), {
          waitForNavigation: false,
        });
        gauge.screenshot();
      } else if (useEnter) {
        await t.press('Enter');
      }
    }
  }
);

step(
  'STORELOCATOR Verify that the user is able to search for stores based on a <storedata>',
  async function (storedata) {
    await Helper.closePopups(closePopup, t);
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      if (storedata === 'zipcode') {
        await validatetheresults(zipcodeTextId);
      } else if (storedata === 'city name') {
        await validatetheresults(cityTextId);
      }
      await Helper.closePopups(closePopup, t);
      if (zipcodeField !== '') {
        if (clearFalseNav) {
          await t.clear(await t.$(zipcodeField), { waitForNavigation: false });
          gauge.screenshot();
        } else {
          await t.reload({ waitForEvents: ['loadEventFired'] });
          gauge.screenshot();
        }
      }
    } else {
      if (storedata === 'zipcode') {
        await validatetheresults(mobZipcodeTextId);
      } else if (storedata === 'city name') {
        await validatetheresults(mobCityTextId);
      }
      if (storeNav) {
        await t.evaluate(
          await t.$(mobStorteId, {
            hasDuplicate: {
              fields: { locatorKey: 'mobstorteid' },
            },
          }),
          (ele) => ele.click(),
          { waitForEvents: ['loadEventFired'] }
        );
        gauge.screenshot();
      }
      if (mobZipcodeField !== '') {
        if (clearFalseNav) {
          await t.clear(await t.$(mobZipcodeField), {
            waitForNavigation: false,
          });
          gauge.screenshot();
        } else {
          //await clear($(mobzipcodefield),{waitForNavigation: false})
          await t.reload({ waitForEvents: ['loadEventFired'] });
          gauge.screenshot();
        }
      }
    }
  }
);

step(
  'STORELOCATOR Verify that the user is able to choose a Province/state, enter valid city name using data/suggestions/dropdown',
  async function () {
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      await ElementAction(citydetails);
      await Helper.closePopups(closePopup, t);
      if (provinceDrp !== '') {
        //await evaluate($(provincedrp), ele => ele.scrollIntoView());
        let tprovincedrp = await t.$(provinceDrp);
        await t.evaluate(tprovincedrp, (ele) => ele.focus());
        await t.click(tprovincedrp);
        gauge.screenshot();
        await t.click(await t.text(CommonData.province));
      } else if (provinceDrpSelect !== '') {
        await (
          await t.dropDown({ class: provinceDrpSelect })
        ).select({ index: '1' });
      }
      await Helper.closePopups(closePopup, t);
      if (cityDrp !== '') {
        if (useScrollBlock) {
          await t.evaluate(await t.$(cityDrp), (ele) =>
            ele.scrollIntoView({ block: 'end' })
          );
        } else {
          await t.evaluate(await t.$(cityDrp), (ele) => ele.focus());
        }
        await t.click(await t.$(cityDrp));
        gauge.screenshot();
        if (cityTextLoc !== '') {
          await t.click(await t.$(cityTextLoc));
        } else {
          await t.click(await t.text(CommonData.city));
        }
        await t.evaluate(await t.$(searchId), (ele) => ele.click());
      } else if (cityId !== '') {
        await (await t.dropDown({ class: cityId })).select({ index: '2' });
      }
      await Helper.closePopups(closePopup, t);
      if (storeDrp !== '') {
        await t.click(await t.$(storeDrp));
        gauge.screenshot();
        await t.click(await t.text(CommonData.storename));
        await t.evaluate(await t.$(searchId), (ele) => ele.click());
      }
      await Helper.closePopups(closePopup, t);
      if (searchId !== '') {
        //await evaluate($(searchid), ele => ele.scrollIntoView());
        await t.evaluate(await t.$(searchId), (ele) => ele.focus());
        await t.evaluate(
          await t.$(searchId, { waitForEvents: ['DOMContentLoaded'] }),
          (ele) => ele.click()
        );
        gauge.screenshot();
      } else if (useEnterPc) {
        await t.press('Enter');
      } else if (searchId1 !== '') {
        await t.evaluate(await t.$(searchId1), (ele) => ele.focus());
        await t.evaluate(
          await t.$(searchId1, { waitForNavigation: false }),
          (ele) => ele.click()
        );
        gauge.screenshot();
      }
    } else {
      await ElementAction(citydetailsmob);
      if (mobProvinceDrp !== '') {
        /**Check for available options in dropdown**/
        try {
          await (
            await t.dropDown({ class: mobProvinceDrp })
          ).select({
            index: CommonData.provincemobindex,
          });
        } catch (error) {
          gauge.message('Option not available in dropdown');
        }
      } else if (mobProvinceDrpClick !== '') {
        await t.evaluate(await t.$(mobProvinceDrpClick), (ele) => ele.focus());
        await t.click(await t.$(mobProvinceDrpClick));
        gauge.screenshot();
        await t.click(await t.text(CommonData.province));
      }
      if (mobCityDrp !== '') {
        await (
          await t.dropDown({ class: mobCityDrp })
        ).select({
          index: CommonData.citymobindex,
        });
      }
      if (mobCityDrpClick !== '') {
        await t.evaluate(await t.$(mobCityDrpClick), (ele) => ele.focus());
        await t.click(await t.$(mobCityDrpClick));
        gauge.screenshot();
        if (cityTextLocMob !== '') {
          await t.click(await t.$(cityTextLocMob));
        } else {
          await t.click(await t.text(CommonData.city));
        }
        await t.evaluate(await t.$(mobSearchId), (ele) => ele.click());
      }
      if (mobStoreDrp !== '') {
        await (await t.dropDown({ class: mobStoreDrp })).select({ index: '2' });
      }
      if (mobStoreDrpClick !== '') {
        await t.evaluate(await t.$(mobStoreDrpClick), (ele) => ele.focus());
        await t.click(await t.$(mobStoreDrpClick));
        gauge.screenshot();
        await t.click(await t.text(CommonData.storename));
        await t.evaluate(await t.$(mobSearchId), (ele) => ele.click());
      }
      if (mobSearchId !== '' && !useEnter) {
        //await evaluate($(searchid), ele => ele.scrollIntoView());
        await t.evaluate(await t.$(mobSearchId), (ele) => ele.focus());
        await t.evaluate(await t.$(mobSearchId), (ele) => ele.click(), {
          waitForNavigation: false,
        });
        gauge.screenshot();
      } else if (useEnter) {
        await t.press('Enter');
      }
    }
  }
);

step(
  'STORELOCATOR Verify that the user is able to navigate to home Page and choose the country in case of hubsites store',
  async function () {
    await t.goto(siteDefinition.executionContext.url, {
      waitForNavigation: false,
    });
    gauge.screenshot();
    await Helper.closePopups(closePopup, t);
    if (hubsites) {
      await t.click(await t.text(countryName));
      gauge.screenshot();
      if (await (await t.$(hubSiteLang)).exists()) {
        await t.click(await t.text(chooseLanguage));
        gauge.screenshot();
      }
      if (await (await t.$(hubsiteLocaleBtn)).exists()) {
        await t.evaluate(
          await t.$(hubsiteLocaleBtn, { waitForEvents: ['loadEventFired'] }),
          (ele) => ele.click()
        );
      }
    }
    await Helper.closePopups(cookieRejectButton, t);
  }
);
