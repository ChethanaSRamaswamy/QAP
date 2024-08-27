/**
 * @fileoverview
 * E2E test script for verifying the landing of the homepage in a web application.
 *
 * @description
 * This script runs tests to verify that the user has successfully landed on the homepage.
 * The test steps include:
 * 1. Opening a new browser context.
 * 2. Navigating to the web page.
 * 3. Validating that the user has landed on the homepage.
 *
 * Command to run tests: `npx playwright test --grep "@HOMEPAGEEXAMPLE"`
 *
 * @module HomePageTests
 */

// Import required modules and libraries
const { test } = require('@playwright/test');
const ScriptDataAdapter = require('../../adapters/script_data_adapter.js');
const HomePageExampleScenarioModel = require('../../scenariomodels/examples/HomePageExampleScenarioModel.js');

/**
 * Represents the feature being tested (e.g., 'Example').
 * We are using 'Example' as a feature name here.
 *
 * @constant {string} feature
 */
const feature = 'Example';

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
 * Iterate through each site and run tests.
 */
records.forEach((/** @type {string} */ tags) => {
  /**
   * Test function to verify homepage landing for a specific website.
   *
   * @param {object} browser - Playwright browser instance.
   * @param {object} testInfo - Information about the test.
   * @constant {object} tags - Tags brings site data in the given below format
   *  Brand-Locale-Device [eg:DA-IT-PC].
   * It is mandatory to add tags in the test title to differentiate different tests.
   */
  test(`${tags} VERIFY HOMEPAGE LANDING @HOMEPAGEEXAMPLE`, async ({
    browser,
  }, testInfo) => {
    // This is to check the availability of the test and skip if unavailable
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

    // Create a new HomePageExampleScenarioModel instance for testing
    const homepage = new HomePageExampleScenarioModel(testInfo, page, data);

    /**
     * Test step to validate whether the user has landed on the homepage.
     */
    await test.step('Verify whether the user has landed on the homepage', async () => {
      await homepage.validateHomePage();
    });
  });
});
