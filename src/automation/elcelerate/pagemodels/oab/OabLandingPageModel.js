const PageModel = require('../PageModel');
const Util = require('../../../../utilities/util');

/**
 * Represents a Page Model (PageModel) for the OAB Landing Page of the web application.
 *
 * The OabLandingPageModel class encapsulates interactions and verifications related to the OAB Landing page, which typically
 * displays detailed information about the location and the store selected for creating an appointment.
 *
 * @class OabLandingPageModel
 * @extends PageModel
 */
class OabLandingPageModel extends PageModel {
  /**
   * Creates an instance of OabLandingPageModel.
   *
   * @param {Object} testInfo - Information about the test.
   * @param {Page} page - The Playwright page object.
   * @param {Object} data - Data (locatorData, testData, siteData) for the test.
   */
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }

  /**
   * Checks if the OAB page is loaded by navigating to the specified URL and verifying the HTTP response status code.
   *
   * This method navigates to the configured URL and checks if the response status code matches the expected code (200).
   * It logs a message indicating whether the OAB page is available or not and takes a screenshot for reference.
   *
   * @async
   * @memberof OabLandingPageModel
   * @throws {Error} Throws an error if the response status code does not match the expected code (200).
   * @returns {Promise<void>} A Promise that resolves when the OAB is loaded successfully.
   */
  isLoaded = async () => {
    // Implementation to check if the oab page is loaded.
    const response = await this.page.goto(
      this.siteData.executionContext.url + this.locatorData.oabUrl
    );
    await this.page.waitForTimeout(2000);
    const responseCode = 200;
    if (response.status() === responseCode) {
      console.log('Navigated to Oab page');
    } else {
      console.log(
        'The Oab page didnt return the 200 code, instead it returned the ' +
          response.status() +
          ' code, which is why it is not available'
      );
    }
    await this.screenshot();
  };

  /**
   * Enters oab landing page details based on the provided locators and test data.
   * @async
   * @function
   * @param {Object} options - Options for entering details.
   * @param {string} options.countiesElem - Element locator to select counties.
   * @param {string} options.countiesValueElem - Element locator to choose counties values.
   * @param {string} options.locationElem - Element locator to select location.
   * @param {string} options.locationValueElem - Element locator to choose location values.
   * @param {string} options.storeElem - Element locator to select stores.
   * @param {string} options.storeValueElem - Element locator to choose stores values.
   * @throws {Error} Throws an error if there is an issue during the details entry process.
   * @returns {Promise<void>} A Promise that resolves once the details are entered and submitted.
   */
  selectLocation = async ({
    countiesElem,
    countiesValueElem,
    locationElem,
    locationValueElem,
    storeElem,
    storeValueElem,
  }) => {
    if (countiesElem && countiesValueElem) {
      await this.page.locator(countiesElem).first().click();
      await this.page.locator(countiesValueElem).first().click();
    }
    if (locationElem && locationValueElem) {
      await this.page.locator(locationElem).first().click();
      await this.page.locator(locationValueElem).first().click();
      await this.page.locator(storeElem).first().click();
      await this.page.locator(storeValueElem).first().click();
      await this.screenshot();
    }
  };

  /**
   * Used to click on location submit button
   * @param {string} locationSubmitElem Locator of submit button
   * @param {string} mobLocationSubmitElem Locator of mobile submit button
   * @returns {Promise<void>}
   */
  clickLocationSubmitButton = async (
    locationSubmitElem,
    mobLocationSubmitElem
  ) => {
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      if (locationSubmitElem) {
        await this.page.locator(locationSubmitElem).click();
      }
    } else {
      if (mobLocationSubmitElem) {
        await this.page.locator(mobLocationSubmitElem).click();
      }
    }
    await this.screenshot();
  };
}

module.exports = OabLandingPageModel;
