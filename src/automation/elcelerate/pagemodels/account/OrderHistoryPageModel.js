const { expect } = require('@playwright/test');

/**
 * Represents a Page Model (PageModel) for handling order history-related actions on a brand website.
 * @class PageModel
 */
const PageModel = require('../PageModel');

/**
 * Represents an Order History Page Model (OrderHistoryPageModel) for interacting with order history-related elements.
 * @class OrderHistoryPageModel
 * @extends PageModel
 */
class OrderHistoryPageModel extends PageModel {
  /**
   * Creates an instance of OrderHistoryPageModel.
   * @param {Object} testInfo - Information about the test.
   * @param {Page} page - The Playwright page object.
   * @param {Object} data - Data (locatorData, testData, siteData) for the test.
   */
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }

  /**
   * Checks the order history and navigates to the order history page.
   * @param {string} pastOrderUrl - URL of the Order History page.
   * @param {string} purchaseDetails - Locator for purchase details element.
   * @param {string} noOrderLog - Locator for the "no order" log element.
   * @returns {Promise<void>}
   * @memberof OrderHistoryPageModel
   */
  checkOrderHistory = async (pastOrderUrl, purchaseDetails, noOrderLog) => {
    // Check if the required locators and URLs are not empty
    if (pastOrderUrl !== '' && purchaseDetails !== '') {
      // Create a regular expression pattern for the past order URL
      const shoppingHistoryUrl = new RegExp(`.*${pastOrderUrl}.*`);
      // Check if the current URL matches the past order URL pattern
      await expect(this.page).toHaveURL(shoppingHistoryUrl);
      console.log('On Order History Page');
      try {
        // Check if the purchase details element is attached (exists)
        await expect(this.page.locator(purchaseDetails).first()).toBeAttached();
        console.log('You have previous online orders.');
      } catch (e) {
        // Log the text content of the "no order" log element in case of an error
        console.error(
          await this.page.locator(noOrderLog).first().textContent()
        );
      }
      // Capture a screenshot for reference
      await this.screenshot();
    }
  };
}

module.exports = OrderHistoryPageModel;
