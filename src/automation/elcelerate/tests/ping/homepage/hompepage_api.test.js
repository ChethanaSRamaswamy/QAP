// npx playwright test --grep "@HOMEPAGEAPI"
// @ts-check
const { test, expect } = require('@playwright/test');

const ScriptDataAdapter = require('../../../adapters/script_data_adapter.js');

const feature = 'PING';

const { SCOPE } = process.env;
const records = SCOPE ? JSON.parse(SCOPE) : [];

records.forEach((/** @type {string} */ tags) => {
  test(`${tags} Validate if the hompepage is up and running @HOMEPAGEAPI`, async ({
    request,
  }, testInfo) => {
    const canSkipTest = ScriptDataAdapter.isTestEligible(testInfo, tags);
    if (canSkipTest) {
      test.skip();
    }
    const data = await ScriptDataAdapter.getScriptData(
      tags.split('-'),
      feature,
      testInfo.title
    );

    await test.step('Validate the response code to ensure the homepage returns 200', async () => {
      const res = await request.get(data.siteData.executionContext.url);
      console.log(res.status());
      console.log(res.statusText());
      console.log(res.url());
      expect(res.status()).toBe(200);
    });
  });
});
