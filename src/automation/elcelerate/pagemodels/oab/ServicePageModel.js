const PageModel = require('../PageModel');

/**
 * Represents a Page Model (PageModel) for the OAB Service Page of the web application.
 *
 * The ServicePageModel class encapsulates interactions and verifications related to the OAB, which typically
 * displays detailed information about services available.
 *
 * @class ServicePageModel
 * @extends PageModel
 */
class ServicePageModel extends PageModel {
  /**
   * Creates an instance of ServicePageModel.
   *
   * @param {Object} testInfo - Information about the test.
   * @param {Page} page - The Playwright page object.
   * @param {Object} data - Data (locatorData, testData, siteData) for the test.
   */
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }
  /**
   * Used to select a service
   * @param {string} selectServiceFirstElem Locator of select service
   * @param {string} selectServiceElem Locator of service element
   */
  selectService = async (selectServiceFirstElem, selectServiceElem) => {
    if (selectServiceFirstElem) {
      await this.page.locator(selectServiceFirstElem).click();
    } else {
      await this.page.locator(selectServiceElem).scrollIntoViewIfNeeded();
      await this.page.waitForSelector(selectServiceElem);
      await this.page.locator(selectServiceElem).click({ force: true });
    }
    await this.screenshot();
  };

  /**
   * Used to click on book now button
   * @param {string} bookNowFirstElem Locator of book now button
   */
  clickBookNowButton = async (bookNowFirstElem) => {
    if (bookNowFirstElem) {
      await this.page.locator(bookNowFirstElem).click();
    }
    await this.screenshot();
  };
}

module.exports = ServicePageModel;
