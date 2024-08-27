// TODO: Remove all HINT:, TODO: and INSTRUCTION: comments after copying the template
// INSTRUCTION:
// 1. Any text/value/variable that starts with template is a placeholder
// 2. Any text between {{}} and [[]] are placeholders
// 3. Replace the placeholder with right text/value

// HINT: Use the folowing command to run your scenario
// npx playwright test --grep "@[[SCENARIOTAG]]"

const { test } = require('@playwright/test');
const ScriptDataAdapter = require('../../adapters/script_data_adapter.js');
const TemplateScenarioModel = require('../../scenariomodels/template/TemplateScenarioModel.js');

// TODO: Replace {{FEATURENAME}} with your feature name
const feature = '{{FEATURENAME}}';

// TODO: To run a test, you need to supply brand, market and device in
// (brand1|brand2) & (market1|market2) & (PC|MOB) format. Ex: (AV) & (US) & (MOB)
// Set this information in TAGS environment variable or you can hardcode TAGS in
// testSetup.js file but DO NOT COMMIT the changes
// TODO: SCOPE is a dynamically generated variable based on the scope matrix
// based on the TAGS (brand-market-device) user input. SCOPE variable is
// considered by Playwright to execute the tests for the given scenario
// HINT: Refer https://confluence.esteeonline.com/pages/viewpage.action?pageId=424085115
const { SCOPE } = process.env;
const records = SCOPE ? JSON.parse(SCOPE) : [];

records.forEach((/** @type {string} */ tags) => {
  test(`${tags} {{SHORT SUMMARY OF YOUR TEST @[[SCENARIOTAG]]}}`, async ({
    browser,
  }, testInfo) => {
    const canSkipTest = ScriptDataAdapter.isTestEligible(testInfo, tags);
    if (canSkipTest) {
      test.skip();
    }
    const context = await browser.newContext();
    const page = await context.newPage();
    const { title } = testInfo;
    // Fetch the script data
    const data = await ScriptDataAdapter.getScriptData(
      tags.split('-'),
      feature,
      title
    );

    // TODO: Replace with your Scenario Model
    // INSTRUCTION: Copy TemplateScenarioModel and write your logic in your new SOM
    const template = new TemplateScenarioModel(testInfo, page, data);

    await test.step('{{Your step}}', async () => {
      // INSTRUCTION: Replace {{Your step}} with the actual step description

      // HINT: Check printData() to learn about data (locator, test, site) object
      // This method is only for debugging and understanding of "data" object
      template.printData();
    });
    await test.step('{{One more step}}', async () => {
      // INSTRUCTION: Replace {{One more step}} with the actual step description
      await template.navigateToAPage();
    });
  });
});
