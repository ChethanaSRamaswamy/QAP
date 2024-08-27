// npx playwright test --grep "@VERIFYPDP"
// @ts-check
const { test } = require('@playwright/test');

const ScriptDataAdapter = require('../../adapters/script_data_adapter.js');
const PdpValidationScenarioModel = require('../../scenariomodels/plppdp/PdpValidationScenarioModel.js');
const PlpPdpScenarioModel = require('../../scenariomodels/plppdp/PlpPdpScenarioModel.js');

const feature = 'MPPSPP';

const { SCOPE } = process.env;
const records = SCOPE ? JSON.parse(SCOPE) : [];

records.forEach((/** @type {string} */ tags) => {
  test(`${tags} Verify Products from PDP  @VERIFYPDP`, async ({
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

    const inspectPdp = new PdpValidationScenarioModel(testInfo, page, data);
    const plpPdp = new PlpPdpScenarioModel(testInfo, page, data);

    await test.step('Verify on the homepage and then navigate to any PDP', async () => {
      await inspectPdp.gotoAnyPdp();
    });

    await test.step('Verify the elements on the PDP', async () => {
      await inspectPdp.verifyProductPageContent();
    });
    await test.step('Verify that the user is able to add products to the cart successfully from PDP', async () => {
      await plpPdp.addProductFromPdp();
    });

    await test.step('Verify that the user is able to view the added product in the Cart', async () => {
      await plpPdp.validateCartProduct();
    });
  });
});
