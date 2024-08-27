// npx playwright test --grep "@SEARCH"
// @ts-check
const { test, expect } = require('@playwright/test');

const ScriptDataAdapter = require('../../../adapters/script_data_adapter.js');

const feature = 'Ping';

const { SCOPE } = process.env;
const records = SCOPE ? JSON.parse(SCOPE) : [];

records.forEach((/** @type {string} */ tags) => {
  test(`${tags} Validate if the search page is up and running @SEARCHPAGEUI`, async ({
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

    await test.step('Validate the response code to ensure the search returns 200', async () => {
      const errors = [];

      page.on('pageerror', (exception) => {
        errors.push(exception);
      });

      const response = await page.goto(
        data.siteData.executionContext.url +
          data.siteData.executionContext.tenantQS +
          data.locatorData.searchUrl,
        { waitUntil: 'domcontentloaded' }
      );
      const responseCode = 200;
      if (response && response.status() === responseCode) {
        console.log('Navigated to Search page');
        console.log('Response status : ' + response.status());
        console.log('Response statusText : ' + response.statusText());
        console.log('Response URL : ' + response.url());
      } else {
        console.log(
          'The Search did not return the 200 code, instead it returned the ' +
            response.status() +
            ' code, which is why it is not available'
        );
      }
      await page.screenshot();
      expect(response.status()).toBe(200);
      expect(errors.length).toBe(0);
    });
  });
});
