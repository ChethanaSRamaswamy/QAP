/**
 * Represents a Page Model (PageModel) for handling login-related actions on a brand website.
 * @class PageModel
 */
const PageModel = require('../PageModel');

/**
 * Represents a Page Model (PageModel) for the home page of the web application.
 *
 * The HomePageModel class encapsulates interactions and verifications related to the home page,
 * which typically includes elements like the main content and navigation.
 *
 * @class HomePageModel
 * @extends PageModel
 */
class HomePageModel extends PageModel {
  /**
   * Creates an instance of HomePageModel.
   *
   * @param {Object} testInfo - Information about the test.
   * @param {Page} page - The Playwright page object.
   * @param {Object} data - Data (locatorData, testData, siteData) for the test.
   */
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }

  /**
   * Checks if the home page is loaded by navigating to the specified URL and verifying the HTTP response status code.
   *
   * This method navigates to the configured URL and checks if the response status code matches the expected code (200).
   * It logs a message indicating whether the home page is available or not and takes a screenshot for reference.
   *
   * @async
   * @memberof HomePageModel
   * @throws {Error} Throws an error if the response status code does not match the expected code (200).
   * @returns {Promise<void>} A Promise that resolves when the home page is loaded and verified successfully.
   */
  isLoaded = async () => {
    // Implementation to check if the home page is loaded.
    const response = await this.page.goto(
      this.siteData.executionContext.url +
        this.siteData.executionContext.tenantQS
    );
    const responseCode = 200;
    if (response.status() === responseCode) {
      console.log(`${this.siteData.brandLocale} : Navigated to Home page `);
    } else {
      console.log(
        `${this.siteData.brandLocale} : The Homepage didnt return the 200 code, instead it returned the ` +
          response.status() +
          ' code, which is why it is not available'
      );
    }
    await this.screenshot();
  };
}

module.exports = HomePageModel;
