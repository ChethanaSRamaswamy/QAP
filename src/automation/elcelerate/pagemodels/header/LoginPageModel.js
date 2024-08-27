/**
 * Represents a Page Model (PageModel) for handling login-related actions on a brand website.
 * @class PageModel
 */
const PageModel = require('../PageModel');

// A boolean flag indicating whether a match condition is true.
const matchCondition = true;

/**
 * Represents a Login Page Model (LoginPageModel) for interacting with login-related elements.
 * @class LoginPageModel
 * @extends PageModel
 */
class LoginPageModel extends PageModel {
  /**
   * Creates an instance of LoginPageModel.
   * @param {Object} testInfo - Information about the test.
   * @param {Page} page - The Playwright page object.
   * @param {Object} data - Data (locatorData, testData, siteData) for the test.
   */
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }

  /**
   * Moves to the account page by clicking on the "My Account" element if it is visible.
   *
   * @param {string} myAccount - Locator for the "My Account" element.
   * @returns {Promise<void>}
   * @memberof LoginPageModel
   */
  moveToAccount = async (myAccount) => {
    // Check if the "My Account" element is not empty and is visible
    if (myAccount !== '' && this.page.locator(myAccount).isVisible()) {
      // Click on the "My Account" element
      await this.page.locator(myAccount).first().dispatchEvent('click');
      console.log('Element appeared & clicked on Account Profile');
    } else {
      // Log that the element did not appear if it doesn't meet the conditions
      console.log(!matchCondition, 'Element did not appeared');
    }
  };
}

module.exports = LoginPageModel;
