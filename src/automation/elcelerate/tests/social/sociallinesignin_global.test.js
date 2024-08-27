// npx playwright test --grep "@LINERETNUSERSIGNIN"
// @ts-check
const { test } = require('@playwright/test');

const ScriptDataAdapter = require('../../adapters/script_data_adapter.js');
const SocialLineSigninScenarioModel = require('../../scenariomodels/social/SocialLineSigninScenarioModel.js');

const feature = 'Account';

const { SCOPE } = process.env;
const records = SCOPE ? JSON.parse(SCOPE) : [];

records.forEach((/** @type {string} */ tags) => {
  test(`${tags} AS A RETURN USER I WANT TO SIGN IN WITH LINE @LINERETNUSERSIGNIN`, async ({
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

    const lineSignin = new SocialLineSigninScenarioModel(testInfo, page, data);

    await test.step('Verify that the user is able to go login page', async () => {
      await lineSignin.navigateToLoginPage();
    });
    await test.step('Verify that the user is able to perform social Line signin', async () => {
      await lineSignin.socialLineSigninReturnUser();
    });

    await test.step('Verify that the user is able to navagate to account landing page', async () => {
      await lineSignin.validateAccountPage();
    });

    await test.step('Verify that the user is able to sign out', async () => {
      await lineSignin.signout();
    });
  });
});
