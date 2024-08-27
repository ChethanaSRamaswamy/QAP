// npx playwright test --grep "@IAMRU"
// @ts-check
const { test } = require('@playwright/test');

const ScriptDataAdapter = require('../../adapters/script_data_adapter.js');
const IAMSigninScenarioModel = require('../../scenariomodels/iam/IAMSigninScenarioModel.js');

const feature = 'Account';

const { SCOPE } = process.env;
const records = SCOPE ? JSON.parse(SCOPE) : [];

records.forEach((/** @type {string} */ tags) => {
  test(`${tags} AS AN IAM RETURN USER I WANT TO SIGN IN  @IAMRETNUSERSIGNIN`, async ({
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

    const iamSignin = new IAMSigninScenarioModel(testInfo, page, data);

    await test.step('Verify that the user is able to go login page', async () => {
      await iamSignin.navigateToLoginPage();
    });
    await test.step('Verify that the user is able to perform IAM signin', async () => {
      await iamSignin.signinIAMReturnUser();
    });

    await test.step('Verify that the user is able to navagate to account landing page', async () => {
      await iamSignin.validateAccountPage();
    });

    await test.step('Verify that the user is able to sign out', async () => {
      await iamSignin.signout();
    });
  });
});
