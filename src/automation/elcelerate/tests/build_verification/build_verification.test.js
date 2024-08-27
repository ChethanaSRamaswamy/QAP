// npx playwright test --grep "@BV"
// @ts-check
const { test } = require('@playwright/test');

const ScriptDataAdapter = require('../../adapters/script_data_adapter.js');
const BuildVerificationScenarioModel = require('../../scenariomodels/build_verification/BuildVerificationScenarioModel.js');

const feature = 'Checkout';

const { SCOPE } = process.env;
const records = SCOPE ? JSON.parse(SCOPE) : [];

const tags = records.length > 0 ? records[0] : 'DA-FR-PC';

test(`${tags} AS A DEVELOPER I SHOULD ABLE TO DEPLOY MY CODE @BV`, async ({
  browser,
}, testInfo) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const data = await ScriptDataAdapter.getScriptData(
    tags.split('-'),
    feature,
    testInfo.title
  );
  const buildValidator = new BuildVerificationScenarioModel(
    testInfo,
    page,
    data
  );

  await test.step('Open home page', async () => {
    await buildValidator.gotoHomePage();
  });
});
