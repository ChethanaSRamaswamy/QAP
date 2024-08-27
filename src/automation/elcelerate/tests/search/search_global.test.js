/**
 * @fileOverview Playwright test script for the Search functionality.
 *
 * @description
 * This script tests the Search functionality using Playwright.
 * It includes steps to verify user access, sign-in, keyword search, and product addition.
 *
 * Command to run tests: `npx playwright test --grep "@SANITYSEARCH"
 * @module SearchTest
 */

// @ts-check
const { test } = require('@playwright/test');

const ScriptDataAdapter = require('../../adapters/script_data_adapter.js');
const SearchScenarioModel = require('../../scenariomodels/search/SearchScenarioModel.js');

/**
 * Represents the test suite for the Search functionality.
 * @type {string}
 * @description Search functionality test suite.
 */
const feature = 'Search';

/**
 * The scope environment variable.
 * @type {string}
 */
const { SCOPE } = process.env;

/**
 * The array of records parsed from the SCOPE environment variable.
 * @type {Array<string>}
 */
const records = SCOPE ? JSON.parse(SCOPE) : [];

/**
 * Iterate through each record and perform a search test.
 */
records.forEach((/** @type {string} */ tags) => {
  /**
   * Test case for searching and adding a product to the cart from the search result.
   * @param {import('@playwright/test').TestInfo} testInfo - Information about the test.
   * @description Search and add a product to cart from the search result.
   */

  test(`${tags} SEARCH AND ADD A PRODUCT TO CART FROM THE SEARCH RESULT @SANITYSEARCH`, async ({
    browser,
  }, testInfo) => {
    const canSkipTest = ScriptDataAdapter.isTestEligible(testInfo, tags);
    if (canSkipTest) {
      test.skip();
    }
    /**
     * The browser context for the test.
     * @type {import('playwright').BrowserContext}
     */
    const context = await browser.newContext();

    /**
     * The page for the test.
     * @type {import('playwright').Page}
     */
    const page = await context.newPage();

    /**
     * The script data obtained from the ScriptDataAdapter.
     * @type {object}
     */
    const data = await ScriptDataAdapter.getScriptData(
      tags.split('-'),
      feature,
      testInfo.title
    );

    /**
     * The SearchScenarioModel instance for the test.
     * @type {SearchScenarioModel}
     */
    const search = new SearchScenarioModel(testInfo, page, data);

    await test.step('Verify that the user is able to access the site', async () => {
      await search.navigateToSite();
    });

    await test.step('Verify the user is able to Sign in Beauty Perks Account if applicable', async () => {
      await search.beautyPerksSignin();
    });

    await test.step('Verify the user is able to enter the keyword on the search field', async () => {
      await search.searchProduct();
    });

    await test.step('Validate Search Message on the Predictive Results page and Navigate to search results page', async () => {
      await search.verifySearchResults();
    });

    await test.step('Add a product to bag from the search results and validate', async () => {
      await search.addProductFromSearchResults();
    });
  });
});
