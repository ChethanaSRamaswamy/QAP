const VisualRegressionTesting = require('../helpers/visual_regression_testing');
const Helper = require('../helpers/helper.js');
const { expect } = require('@playwright/test');
const ActionPageModel = require('../pagemodels/common/ActionPageModel.js');
const PopupPageModel = require('../pagemodels/common/PopupPageModel.js');

/**
 * PageModel represents a model for interacting with web pages in automated tests.
 * It encapsulates common functionalities and utilities for page interactions.
 *
 * @class
 * @param {Object} testInfo - Information about the test scenario.
 * @param {Object} page - The page object representing the current web page.
 * @param {Object} data - Test data containing locatorData, testData, and siteData.
 */
class PageModel {
  /**
   * @constructor
   * @param {Object} testInfo - Information about the test scenario.
   * @param {Object} page - The page object representing the current web page.
   * @param {Object} data - Test data containing locatorData, testData, and siteData.
   */
  constructor(testInfo, page, data) {
    /**
     * Information about the test scenario.
     * @member {Object}
     */
    this.testInfo = testInfo;

    /**
     * The page object representing the current web page.
     * @member {Object}
     */
    this.page = page;

    /**
     * Test data containing locatorData, testData, and siteData.
     * @member {Object}
     */
    this.data = data;

    /**
     * Locator data from the test data.
     * @member {Object}
     */
    this.locatorData = data.locatorData;

    /**
     * Test data from the test data.
     * @member {Object}
     */
    this.testData = data.testData;

    /**
     * Site data from the test data.
     * @member {Object}
     */
    this.siteData = data.siteData;

    /**
     * Visual Regression Testing utility for capturing and comparing screenshots.
     * @member {VisualRegressionTesting}
     */
    this.vrt = new VisualRegressionTesting(page, data);

    /**
     * Instance of ActionPageModel to access common user functions.
     * @member {ActionPageModel}
     */
    this.action = new ActionPageModel(testInfo, page, data);

    /**
     * Instance of PopupPageModel to close popups.
     * @member {PopupPageModel}
     */
    this.popup = new PopupPageModel(testInfo, page, data);
  }

  /**
   * Pauses execution for a specified duration.
   *
   * @async
   * @param {number} ms - The duration to wait in milliseconds.
   * @returns {Promise<void>} - A Promise that resolves after the specified duration.
   */
  wait = async (ms) => {
    await Helper.wait(ms);
  };

  /**
   * Takes a screenshot of the current page and saves it.
   *
   * @async
   * @returns {Promise<void>} - A Promise that resolves after the screenshot is captured.
   */
  screenshot = async () => {
    const callerClass = this.constructor.name.replace(/Model$/, '');
    await Helper.takeScreenshot(callerClass, this.page, this.testInfo);
  };
  /**
   * Generates a unique email ID.
   *
   * @returns {string} - The generated email ID.
   */

  mailIdGenerator = () => {
    return Helper.generateMailId(this.siteData);
  };

  /**
   * Generates a Gmail ID specific for TomFord Beauty site
   *
   * @returns {string} - The generated gmail ID.
   */

  gmailGenerator = () => {
    return Helper.generateGmailId(this.siteData);
  };

  /**
   * Generates a unique email ID specific for Brazil sites.
   *
   * @returns {string} - The generated email ID.
   */
  brazilEmailIdGenerator = () => {
    return Helper.generateBrazilMailId(this.siteData);
  };

  /**
   * Generates a unique CPF (tax code for Brazil).
   *
   * @returns {string} - The generated CPF.
   */
  generateCPF = () => {
    return Helper.generateCPF();
  };

  /**
   * Returns a random user email ID from the provided array of email IDs.
   *
   * @param {string[]} returnUserIds - An array of user email IDs.
   * @returns {string} - A randomly selected user email ID.
   */
  returnUserMailIds = (returnUserIds) => {
    return returnUserIds[Math.floor(Math.random() * returnUserIds.length)];
  };

  clickOnLinkByAccessibleName = async (elementLocator) => {
    await this.action.clickOnLinkByAccessibleName(elementLocator);
  };

  clickOnButtonByAccessibleName = async (elementLocator) => {
    await this.action.clickOnButtonByAccessibleName(elementLocator);
  };

  verifyTextToBeVisible = async (elementLocator) => {
    await expect(this.page.getByText(elementLocator)).toBeVisible();
  };

  /**
   * Safely clicks on an element if the provided locator is not empty, undefined, or null.
   *
   * @param {string} elementLocator - The locator for the element to be clicked.
   * @returns {void} - No explicit return value.
   */
  safeClick = (elementLocator) => {
    this.action.clickIfNotEmpty(elementLocator);
  };

  /**
   * Navigates back to the previous page in the browser's history.
   *
   * @returns {void} - No explicit return value.
   */
  backtrackBrowser = () => {
    this.action.returnToPreviousPage();
  };

  /**
   * Helper function to check a checkbox if its not checked.
   *
   * @param {string} elementLocator - The locator for the checkbox to check.
   * @returns {Promise<void>} A promise that resolves after checking the checkbox if it's not checked.
   *
   */

  checkTheCheckBox = (elementLocator) => {
    this.action.checkTheCheckBox(elementLocator);
  };

  acceptJavaAlertPopup = async () => {
    await this.action.acceptJavaAlertPopup();
  };

  /**
   * Closes a popup.
   *
   * @param {string} elementLocators - The locator for the element that closes the popup.
   * @returns {Promise<void>} A promise that resolves after closing the popup.
   */
  closePopup = (elementLocators) => {
    this.popup.closePopup(elementLocators);
  };

  /**
   * Clicks the specified element if it is available on the page.
   *
   * @param {string} elementSelector - The CSS selector of the element to be clicked.
   * @returns {Promise<void>} A promise that resolves once the element is clicked or rejects if there is an error.
   */
  clickIfElementAvailable = (elementSelector) => {
    this.action.isElementAvailableAndClick(elementSelector);
  };

  /**
   * Checks the availability of elements based on the provided locators and custom messages.
   *
   * @param {string[]} locators - An array of CSS selectors representing the elements to be checked.
   * @param {Object} [customMessages] - Optional custom error messages associated with each locator.
   * @returns {Promise<void>} A promise that resolves if all elements are available or rejects with an error message if any element is not available.
   */
  checkElementsAvailability = (locators, customMessages) => {
    this.action.areElementsAvailable(locators, customMessages);
  };

  /**
   * Executes a dropdown interaction using the provided parameters.
   *
   * @param {string} ddElem - The selector for the dropdown element (Mandatory).
   * @param {string} ddOptionElem - The selector for the dropdown option element (optional).
   * @param {string} ddOptionValue - The value of the dropdown option to select (optional).
   * @returns {Promise<void>} - A Promise that resolves after the dropdown interaction is completed.
   */
  dropdown = async (ddElem, ddOptionElem, ddOptionValue) => {
    await this.action.dropdown(ddElem, ddOptionElem, ddOptionValue);
  };

  /**
   * Generate Federal Id and return the value.
   * @param {Object} context  - Browser context
   * @param {String} federalGeneratorUrlElem - Url for generating Federal Id
   * @param {String} federalGenerateIdElem - Locator for generating Federal Id
   * @returns {String} - A randomly generated federal Id number.
   */
  generateFederalId = async (
    context,
    federalGeneratorUrlElem,
    federalGenerateIdElem
  ) => {
    return Helper.generateFederalDocNumber(
      context,
      federalGeneratorUrlElem,
      federalGenerateIdElem
    );
  };

  /**
   * Clicks on elements selected by the provided locators within a selector.
   * @async
   * @param {string[]} locators - An array of CSS or XPath locators identifying elements to be clicked within the selector.
   * @returns {Promise<void>} - A Promise that resolves once all eligible elements within the selector have been clicked.
   * @throws {Error} - If an element identified by a locator within the selector is not attached to the DOM.
   */
  clickElementsInSelector = async (locators) => {
    await this.action.clickElementsWithCount(locators);
  };
}
module.exports = PageModel;
