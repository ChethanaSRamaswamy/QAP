// npx playwright test --grep "@PDPVT"
// npx playwright test --grep "@PDPVT" --update-snapshots
// @ts-check
const { test } = require('@playwright/test');
const ScriptDataAdapter = require('../../adapters/script_data_adapter.js');
const PDPScenarioModel = require('../../scenariomodels/pdp/PDPScenarioModel.js');

const feature = 'MPPSPP';

const { SCOPE } = process.env;
const records = SCOPE ? JSON.parse(SCOPE) : [];

records.forEach((/** @type {string} */ tags) => {
  test(`${tags} Visual testing PLP @PDPVT`, async ({ browser }, testInfo) => {
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

    const pdpPage = new PDPScenarioModel(testInfo, page, data);

    await test.step('Goto PLP page and visual test add to bag section', async () => {
      await pdpPage.navigateThenVerifyPDP();
    });

    // // await test.step('SEARCH Close the browser and complete the test', async () => {
    // //   // // //   await context.close();
    // // });
  });
});
