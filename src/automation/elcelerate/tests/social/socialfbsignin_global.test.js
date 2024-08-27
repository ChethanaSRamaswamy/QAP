// npx playwright test --grep "@FBRETNUSERSIGNIN"
// @ts-check
const { test } = require('@playwright/test');

const ScriptDataAdapter = require('../../adapters/script_data_adapter.js');
const SocialFBSigninScenarioModel = require('../../scenariomodels/social/SocialFBSigninScenarioModel.js');

const feature = 'Account';

const { SCOPE } = process.env;
const records = SCOPE ? JSON.parse(SCOPE) : [];

records.forEach((/** @type {string} */ tags) => {
  test(`${tags} AS A RETURN USER I WANT TO SIGN IN WITH FB @FBRETNUSERSIGNIN`, async ({
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

    const fbSignin = new SocialFBSigninScenarioModel(testInfo, page, data);

    await test.step('Verify that the user is able to go login page', async () => {
      await fbSignin.navigateToLoginPage();
    });
    await test.step('Verify that the user is able to perform social FB signin', async () => {
      await fbSignin.socialFBSigninReturnUser();
    });

    await test.step('Verify that the user is able to navagate to account landing page', async () => {
      await fbSignin.validateAccountPage();
    });

    await test.step('Verify that the user is able to sign out', async () => {
      await fbSignin.signout();
    });
  });
});
