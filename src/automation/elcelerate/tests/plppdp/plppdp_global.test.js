// npx playwright test --grep "@PLPPDP"
// @ts-check
const { test } = require('@playwright/test');

const ScriptDataAdapter = require('../../adapters/script_data_adapter.js');
const PlpPdpScenarioModel = require('../../scenariomodels/plppdp/PlpPdpScenarioModel.js');

const feature = 'MPPSPP';

const { SCOPE } = process.env;
const records = SCOPE ? JSON.parse(SCOPE) : [];

records.forEach((/** @type {string} */ tags) => {
  test(`${tags} Sanity check around PLP and PDP @VALIDATEPLPPDPCART`, async ({
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

    const plpPdp = new PlpPdpScenarioModel(testInfo, page, data);

    await test.step('Verify that the home page for the selected country is displayed properly', async () => {
      await plpPdp.validateInHomePage();
    });

    await test.step('Verify that the user is able to add products to the cart successfully from PLP Quick View', async () => {
      await plpPdp.addProductFromPlp();
    });

    await test.step('Verify that the user is able to navigate to SPP for the product selected from PLP', async () => {
      await plpPdp.plpToPdpNavigation();
    });

    await test.step('Verify that the user is able to add products to the cart successfully from PDP', async () => {
      await plpPdp.addProductFromPdp();
    });

    await test.step('Verify that the user is able to view the added product in the Cart', async () => {
      await plpPdp.validateCartProduct();
    });
  });
});
