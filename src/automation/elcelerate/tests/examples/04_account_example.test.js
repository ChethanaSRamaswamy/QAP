/**
 * @fileoverview
 * This script contains End-to-End (E2E) test cases for the ACCOUNT functionality of a web application.
 *
 * @description
 * This suite of test cases includes:
 * - Navigating to the site's home page
 * - Signing in as an existing user
 * - Verifying the account page
 * - Checking order history
 * - Signing out
 *
 * These test cases are organized into two scenarios: Account Sanity and Account Order History.
 *
 * Command for Account Sanity Tests: `npx playwright test --grep "@ACEXAMPLE"`
 *   - This command runs tests with tags containing "@ACEXAMPLE," matching similar test cases.
 *
 * Command for Account Order History Tests: `npx playwright test --grep "(?=^@ACORDERHISTORYEXAMPLE$)"`
 *   - This command runs tests with the exact tag "@ACORDERHISTORYEXAMPLE" for precise testing of order history scenarios.
 *
 * @module AccountTests
 */

const { test } = require('@playwright/test');

const ScriptDataAdapter = require('../../adapters/script_data_adapter.js');
const AccountExampleScenarioModel = require('../../scenariomodels/examples/AccountExampleScenarioModel.js');
const AccountOrderHistoryExampleScenarioModel = require('../../scenariomodels/examples/AccountOrderHistoryExampleScenarioModel.js');

/**
 * Represents the 'Account' feature.
 *
 * @constant {string} feature
 */
const feature = 'Account';

/**
 * Environment variable that contains a JSON array site matrix.
 *
 * @constant {string} SCOPE
 */
const { SCOPE } = process.env;

/**
 * Site matrix array.
 *
 * @constant {Array} records
 */
const records = SCOPE ? JSON.parse(SCOPE) : [];

/**
 * Loop through site data records and run the Account test cases.
 */
records.forEach((/** @type {string} */ tags) => {
  /**
   * Test case for verifying the account sign-in and sign-out flow.
   *
   * @param {object} testInfo - Test information object.
   * @param {object} testInfo.browser - Playwright browser instance.
   * @constant {object} tags - Tags brings site data in the given below format
   *  Brand-Locale-Device [eg:DA-IT-PC].
   * It is mandatory to add tags in the test title to differentiate different tests.
   */
  test(`${tags} VERIFY ACCOUNT SIGNIN & SIGNOUT FLOW @ACEXAMPLE`, async ({
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

    // Create a new AccountExampleScenarioModel instance for testing
    const account = new AccountExampleScenarioModel(testInfo, page, data);

    await test.step('Verify that the user has landed on the homepage', async () => {
      await account.validateHomePage();
    });
    await test.step('Verify that the user is able to sign in to an existing account', async () => {
      await account.signin();
      await account.verifyAccountPageLanding();
    });
    await test.step('Verify that the user is able to sign out', async () => {
      await account.signout();
    });
  });

  /**
   * Test case for verifying the account sign-in, order history, and sign-out flow.
   * In addition to the utilization of the 'AccountOrderHistoryExampleScenarioModel' scenario model,
   *  we are incorporating the pre-existing 'AccountExampleScenarioModel' scenario model into this test.
   *
   * @param {object} testInfo - Test information object.
   * @param {object} testInfo.browser - Playwright browser instance.
   * @constant {object} tags - Tags brings site data in the given below format
   *  Brand-Locale-Device [eg:DA-IT-PC].
   * It is mandatory to add tags in the test title to differentiate different tests.
   */
  test(`${tags} VERIFY ACCOUNT SIGNIN, SIGNOUT & ORDER HISTORY FLOW @ACORDERHISTORYEXAMPLE`, async ({
    browser,
  }, testInfo) => {
    const canSkipTest = ScriptDataAdapter.isTestEligible(testInfo, tags);
    if (canSkipTest) {
      test.skip();
    }
    // Create a new Playwright context and page
    const context = await browser.newContext();
    const page = await context.newPage();

    // Retrieve script data for the current website
    const data = await ScriptDataAdapter.getScriptData(
      tags.split('-'),
      feature,
      testInfo.title
    );

    // Create a new AccountOrderHistoryExampleScenarioModel instance for testing
    const accountOrderHistory = new AccountOrderHistoryExampleScenarioModel(
      testInfo,
      page,
      data
    );

    await test.step('Verify that the user has landed on the homepage', async () => {
      await accountOrderHistory.userProfile.validateHomePage();
    });
    await test.step('Verify that the user is able to sign in to an existing account', async () => {
      await accountOrderHistory.userProfile.signin();
      await accountOrderHistory.userProfile.verifyAccountPageLanding();
    });
    await test.step('Verify that the user is able to check their Order History', async () => {
      await accountOrderHistory.orderActivityLog();
    });
    await test.step('Verify that the user is able to sign out', async () => {
      await accountOrderHistory.userProfile.signout();
    });
  });
});
