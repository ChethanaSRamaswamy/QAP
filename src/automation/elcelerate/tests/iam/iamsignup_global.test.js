// npx playwright test --grep "@IAMnU"
// @ts-check
const { test } = require('@playwright/test');

const ScriptDataAdapter = require('../../adapters/script_data_adapter.js');
const IAMSignupScenarioModel = require('../../scenariomodels/iam/IAMSignupScenarioModel.js');

const feature = 'Account';

const { SCOPE } = process.env;
const records = SCOPE ? JSON.parse(SCOPE) : [];

records.forEach((/** @type {string} */ tags) => {
  test(`${tags} AS AN IAM NEW USER I WANT TO SIGN UP  @IAMNEWUSERSIGNUP`, async ({
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

    const iamSignup = new IAMSignupScenarioModel(testInfo, page, data);

    await test.step('Verify that the user is able to go login page', async () => {
      await iamSignup.navigateToLoginPage();
    });
    await test.step('Verify that the user is able to perform IAM sign up', async () => {
      await iamSignup.signupIAMNewUser();
    });

    await test.step('Verify that the user is able to navagate to account landing page', async () => {
      await iamSignup.validateAccountPage();
    });

    await test.step('Verify that the user is able to sign out', async () => {
      await iamSignup.signout();
    });
  });
});
