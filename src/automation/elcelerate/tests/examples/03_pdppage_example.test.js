/**
 * @fileoverview
 * E2E test script for verifying the landing of the PDP (Product Detail Page) in a web application.
 *
 * @description
 * This script runs Playwright tests to verify that the user has successfully landed on the PDP Page.
 * The script iterates through a list of websites defined in the SCOPE environment variable,
 * and for each website, it performs the following steps:
 * 1. Opens a new browser context.
 * 2. Navigates to the website's home page.
 * 3. Validates whether the user has landed on the homepage.
 * 4. Verifies that the user is able to choose a product from the Gnav (Global Navigation) Header.
 * 5. Ensures that the user has successfully landed on the PLP (Product Listing Page).
 * 6. Choose a single product and proceed to the PDP (Product Detail Page).
 * 7. Verify that the user has successfully landed on the PDP Page.
 *
 * Command to run tests: `npx playwright test --grep "@PDPPAGEEXAMPLE"`
 *
 * @module PDPPageTests
 */

// Import required modules and libraries
const { test } = require('@playwright/test');
const ScriptDataAdapter = require('../../adapters/script_data_adapter.js');
const PdpPageExampleScenarioModel = require('../../scenariomodels/examples/PdpPageExampleScenarioModel.js');

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
 * Iterate through each site and run tests..
 */
records.forEach((/** @type {string} */ tags) => {
  /**
   * Test function to verify PDP Page landing for a specific website.
   *
   * @param {object} browser - Playwright browser instance.
   * @param {object} testInfo - Information about the test.
   * @constant {object} tags - Tags brings site data in the given below format
   *  Brand-Locale-Device [eg:DA-NL-MOB].
   * It is mandatory to add tags in the test title to differentiate different tests.
   */
  test(`${tags} VERIFY PDP PAGE LANDING @PDPPAGEEXAMPLE`, async ({
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

    // Create a new PdpPageExampleScenarioModel instance for testing
    const pdp = new PdpPageExampleScenarioModel(testInfo, page, data);

    await test.step('Verify whether the user has landed on the homepage', async () => {
      await pdp.validateHomePage();
    });
    await test.step('Verify that the user is able to choose a product from the Gnav Header', async () => {
      await pdp.viewProducts();
    });
    await test.step('Verify that the user has landed on the PLP Page', async () => {
      await pdp.navigateToPlpPage();
    });
    await test.step('Verify that the user has landed on the PDP Page', async () => {
      await pdp.validatePdpPage();
    });
  });
});
