const { test } = require('@playwright/test');

const ScriptDataAdapter = require('../../adapters/script_data_adapter.js');
const StoreLocatorScenarioModel = require('../../scenariomodels/store_locator/StoreLocatorScenarioModel.js');

const feature = 'Store Locator';

const { SCOPE } = process.env;
const records = SCOPE ? JSON.parse(SCOPE) : [];

records.forEach((/** @type {string} */ tags) => {
  test(`${tags} VERIFY USER CAN GET STORE LOCATION WITH VALID ZIPCODE/CITY @STORELOC`, async ({
    browser,
  }, testInfo) => {
    const canSkipTest = ScriptDataAdapter.isTestEligible(testInfo, tags);
    if (canSkipTest) {
      test.skip();
    }
    const context = await browser.newContext();
    const page = await context.newPage();
    const data = await ScriptDataAdapter.getScriptData(
      tags.split('-'),
      feature,
      testInfo.title
    );
    const storeLocator = new StoreLocatorScenarioModel(testInfo, page, data);

    await test.step('Verify that the store locator functionality is accessible from the homepage using header or footer', async () => {
      await storeLocator.gotoStoreLocatorPage();
    });

    await test.step('Verify that the user is able to Choose a country, enter valid zipcode', async () => {
      await storeLocator.enterZipCode();
    });

    await test.step('Verify that the user is able to search for stores based on a zipcode', async () => {
      await storeLocator.searchForStores();
    });

    await test.step('Verify that the user is able to choose a Province/state, enter valid city name using data/suggestions/dropdown', async () => {
      await storeLocator.enterCityName();
    });

    await test.step('Verify that the user is able to search for stores based on a city name', async () => {
      await storeLocator.searchForStores();
    });
  });
});
