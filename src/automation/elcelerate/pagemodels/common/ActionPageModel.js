const { expect } = require('@playwright/test');

class ActionPageModel {
  constructor(testInfo, page, data) {
    this.testInfo = testInfo;
    this.page = page;
    this.data = data;
    this.locatorData = data.locatorData;
    this.testData = data.testData;
    this.siteData = data.siteData;
  }

  /**
   * Helper function to click an element if it's not empty.
   *
   * @param {string} elementLocator - The locator for the element to click.
   * @returns {Promise<void>} A promise that resolves after clicking the element if it's not empty.
   * @example
   * // Import the ActionPageModel
   * const ActionPageModel = require('./ActionPageModel');
   *
   * // Initialize your test and page objects
   * const testInfo =  Your test information ;
   * const page = Your page object ;
   *
   * // Create an instance of ActionPageModel
   * const actionPage = new ActionPageModel(testInfo, page,  Your data );
   *
   * // Example 1: Clicks on an element if the provided locator is not empty, undefined, or null.
   * await this.actionPage.clickIfNotEmpty(elementLocator);
   * // The function checks if elementLocator's value is not empty, undefined, or null.
   * // If the value is available in the DOM, it performs a click action.
   *
   */

  clickIfNotEmpty = async (elementLocator) => {
    const isValidElement = Boolean(elementLocator);
    if (isValidElement) {
      const trimmedLocator = elementLocator.trim();
      await expect(this.page.locator(trimmedLocator)).toBeVisible();
      await this.page.locator(trimmedLocator).first().click();
    }
  };

  /**
   * Helper function to check a checkbox if its not checked.
   *
   * @param {string} elementLocator - The locator for the checkbox to check.
   * @returns {Promise<void>} A promise that resolves after checking the checkbox if it's not checked.
   *
   */

  checkTheCheckBox = async (elementLocator) => {
    if (elementLocator) {
      const checkBoxSelection = this.page.locator(elementLocator, {
        state: 'visible',
      });
      const isChecked = await this.page.locator(elementLocator).isChecked();
      if (!isChecked) {
        await checkBoxSelection.check();
        console.log('Check box is selected manually');
      } else {
        console.log('Check box is selected automatically');
      }
    }
  };
  /**
   * Leverages Playwright's functions to locate an element with Accessibility role 'link' by its 'accessible name' and clicks on the first found.
   * @param {String} elementAccessibleName
   */
  clickOnLinkByAccessibleName = async (elementAccessibleName) => {
    await this.page
      .getByRole('link', { name: elementAccessibleName })
      .first()
      .click();
  };

  /**
   * Leverages Playwright's functions to locate an element with Accessibility role 'button' by its 'accessible name' and clicks on the first found.
   * @param {String} elementAccessibleName
   */
  clickOnButtonByAccessibleName = async (elementAccessibleName) => {
    await this.page
      .getByRole('button', { name: elementAccessibleName })
      .first()
      .click();
  };

  acceptJavaAlertPopup = async () => {
    await this.page.on('dialog', (dialog) => dialog.accept());
  };

  /**
   * click on the browser back arrow button
   */
  returnToPreviousPage = async () => {
    await this.page.goBack();
  };

  /**
   * Checks if an element identified by the provided selector is available on the page, then clicks it.
   *
   * @param {string} elementSelector - The selector for the element to be checked for availability and clicked.
   * @returns {Promise<void>} - A Promise that resolves after checking the availability of the element, clicking it, and logging the result.
   */
  isElementAvailableAndClick = async (elementSelector) => {
    for (let i = 0; i < elementSelector.length; i++) {
      const tempElem = elementSelector[i];
      if (tempElem) {
        await expect(await this.page.locator(tempElem).first()).toBeAttached();
        await this.page.locator(tempElem).first().click();
        console.log('The element is present in the DOM and has been clicked');
      }
    }
  };

  /**
   * Checks if elements identified by the provided locators are available on the page.
   *
   * @param {string[]} locators - An array of selectors for elements to be checked for availability.
   * @param {string[]} customMessages - An array of custom messages corresponding to each element, used for logging.
   * @returns {Promise<void>} - A Promise that resolves after checking the availability of all specified elements and logging the results.
   */
  areElementsAvailable = async (locators, customMessages) => {
    for (let iCnt = 0; iCnt < locators.length; iCnt++) {
      const element = locators[iCnt];
      const message = customMessages[iCnt];
      if (element) {
        await expect(await this.page.locator(element).first()).toBeAttached();
        console.log(message + ' exists');
      }
    }
  };

  /**
   * Handles both custom dropdown (click on the dropdown and click the dropdown option)
   * and default select tag dropdown (where you directly choose a value from the dropdown).
   * The combination of ddElem and ddOptionElem is used for
   * custom dropdown (click the dropdown and click the dropdown option).
   * Alternatively, the combination of ddElem and ddOptionValue is used for
   * default select tag dropdowns (select the value directly from the select dropdown).
   *
   * @param {string} ddElem (Mandatory) - Dropdown element.
   * @param {string} [ddOptionElem] (Optional) - Dropdown option element.
   * @param {string} [ddOptionValue] (Optional) - Dropdown option value.
   * @returns {Promise<void>} - A Promise that resolves after the dropdown interaction is completed.
   *
   * @throws {Error} - If ddElem parameter is not provided.
   */

  dropdown = async (ddElem, ddOptionElem, ddOptionValue) => {
    if (ddElem) {
      if (ddOptionElem) {
        await this.page.locator(ddElem).click();
        await this.page.locator(ddOptionElem).waitFor();
        await this.page.locator(ddOptionElem).click();
        await this.page.waitForTimeout(2000);
      } else if (ddOptionValue) {
        await this.page.locator(ddElem).selectOption(ddOptionValue);
      }
    }
  };

  /**
   * Check if element is no longer visible on page (removed from DOM, visibility hidden, outside viewport, covered) on page after given timeout.
   *
   * @param {string} elementSelector - Locator for the element to disappear.
   * @param {number} timeout - Timeout in milliseconds.
   */
  waitForNotVisible = async (elementSelector, timeout) => {
    const element = this.page.locator(elementSelector);
    await expect.soft(element).toBeHidden({ timeout });
  };

  /**
   * Check if element is visible on page (in DOM, in viewport, not covered) on page after given timeout.
   *
   * @param {string} elementSelector - Locator for the element to be visible.
   * @param {number} timeout - Timeout in milliseconds.
   */
  waitForVisible = async (elementSelector, timeout) => {
    const element = this.page.locator(elementSelector);
    await expect.soft(element).toBeVisible({ timeout });
  };

  /**
   * Check if element is visible on page (in DOM, in viewport, not covered) on page after given timeout.
   *
   * @param {string} key - Keyboard key to press.
   */
  pressKeyboard = async (key) => {
    this.page.keyboard.press(key);
  };

  /**
   * Scrolls to the top of the page.
   *
   */

  scrollToTop = async () => {
    await this.page.evaluate(() => window.scrollTo(0, 0));
  };

  /**
   * Clicks on elements selected by the provided locators if they have a count greater than zero.
   * @async
   * @param {string[]} locators - An array of CSS or XPath locators identifying elements to be clicked.
   * @returns {Promise<void>} - A Promise that resolves once all eligible elements have been clicked.
   * @example
   * // Click on elements with locators ['.button', '#link'] if they have a count greater than zero.
   * await clickElementsWithCount(['.button', '#link']);
   */
  clickElementsWithCount = async (locators) => {
    for (let i = 0; i < locators.length; i++) {
      const tempElem = locators[i];
      if (tempElem) {

        // Get count of elements matching locator
        const result = await this.page.locator(tempElem).first().count();

        // If element count is greater than zero, click on the first element and log a message
        if (result > 0) {
          await this.page.locator(tempElem).first().dispatchEvent('click');
          console.log('The element is present in the DOM and has been clicked');
        }
      }
    }
  };
}

module.exports = ActionPageModel;
