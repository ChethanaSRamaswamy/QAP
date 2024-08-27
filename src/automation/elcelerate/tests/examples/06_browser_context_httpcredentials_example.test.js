// npx playwright test --grep "@CONTEXTWITHHTTPCREDENTIALS" // CONTEXT-WITH-HTTP-CREDENTIALS
const { test } = require('@playwright/test');

const ScriptDataAdapter = require('../../adapters/script_data_adapter.js');
const BrowserContextWithHTTPAuthExampleScenarioModel = require('../../scenariomodels/examples/BrowserContextWithHTTPAuthExampleScenarioModel.js');

const feature = 'Example';

const { SCOPE } = process.env;
const records = SCOPE ? JSON.parse(SCOPE) : [];

const tags = records.length > 0 ? records[0] : 'DA-FR-PC';

test(`${tags} An example to create browser context with http auth @CONTEXTWITHHTTPCREDENTIALS`, async ({
  browser,
}, testInfo) => {
  const data = await ScriptDataAdapter.getScriptData(
    tags.split('-'),
    feature,
    testInfo.title
  );
  const canSkipTest = ScriptDataAdapter.isTestEligible(testInfo, tags);
  if (canSkipTest) {
    test.skip();
  }
  // https://playwright.dev/docs/api/class-browser#browser-new-context-option-http-credentials
  const context = await browser.newContext({
    // INFO: Http creds of the site being executed
    // Different auths required for automation are now exposed in siteData
    // Refer https://confluence.esteeonline.com/display/QAP/Multi-tenant+QA+automation+platform
    httpCredentials: {
      username: data.siteData.baseUsername,
      password: data.siteData.basePassword,
    },
  });

  const page = await context.newPage();

  const buildValidator = new BrowserContextWithHTTPAuthExampleScenarioModel(
    testInfo,
    page,
    data
  );

  await test.step('Open home page', async () => {
    await buildValidator.gotoHomePage();
  });
});
