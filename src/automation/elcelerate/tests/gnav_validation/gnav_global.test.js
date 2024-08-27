// npx playwright test --grep "@GLOBALNAVIGATION"
// @ts-check
const { test } = require('@playwright/test');

const ScriptDataAdapter = require('../../adapters/script_data_adapter.js');
const GnavScenarioModel = require('../../scenariomodels/gnav/GnavScenarioModel.js');

const feature = 'GNAV';
const { SCOPE } = process.env;
const records = SCOPE ? JSON.parse(SCOPE) : [];

records.forEach((/** @type {string} */ tags) => {
  test(`${tags} Validating the Gnav elements clickable and interactable @GLOBALNAVIGATION`, async ({
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

    const gnavPage = new GnavScenarioModel(testInfo, page, data);

    await test.step('Verify that the user is able to navigate to validate page', async () => {
      await gnavPage.navigateToGnavPage();
    });
    await test.step('Verify that the user is able to interactable the menu', async () => {
      await gnavPage.clickOnMenu();
    });
    await test.step('Verify that the user is able to view the gnav elements', async () => {
      await gnavPage.verifyGnavElement();
    });
  });
});
