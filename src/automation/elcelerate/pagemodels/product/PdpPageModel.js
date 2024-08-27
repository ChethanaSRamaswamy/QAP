const { expect } = require('@playwright/test');

/**
 * Represents a Page Model (PageModel) for handling login-related actions on a brand website.
 * @class PageModel
 */
const PageModel = require('../PageModel');

/**
 * Represents a Page Model (PageModel) for the Product Detail Page (PDP) of the web application.
 *
 * The PdpPageModel class encapsulates interactions and verifications related to the PDP, which typically
 * displays detailed information about a product.
 *
 * @class PdpPageModel
 * @extends PageModel
 */
class PdpPageModel extends PageModel {
  /**
   * Creates an instance of PdpPageModel.
   *
   * @param {Object} testInfo - Information about the test.
   * @param {Page} page - The Playwright page object.
   * @param {Object} data - Data (locatorData, testData, siteData) for the test.
   */
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }

  /**
   * Checks if the Product Detail Page (PDP) is loaded by verifying the visibility of a specified element.
   *
   * @param {string} elementSelector - Locator for the element that indicates the PDP is loaded.
   * @returns {Promise<void>} A Promise that resolves when the PDP is loaded successfully.
   *
   * @memberof PdpPageModel
   */
  isLoaded = async (elementSelector) => {
    // You can use `elementSelector` to locate and verify the visibility of the element.
    // await this.page.reload({ waitUntil: 'domcontentloaded' });
    await expect(this.page.locator(elementSelector).first()).toBeVisible();
    console.log(`${this.siteData.brandLocale} : In PDP`);
    await this.screenshot();
  };

  moveToPdp = async (pdpUrl) => {
    const maxIterations = 5;
    for (let i = 0; i < maxIterations; i++) {
      if (pdpUrl[i]) {
        // Implementation to check if the pdp page is loaded.
        const response = await this.page.goto(
          this.siteData.executionContext.url + pdpUrl[i]
        );
        const responseCode = 200;
        if (response.status() === responseCode) {
          console.log('Navigated to pdp page');
          break;
        } else {
          console.log(
            'The PDP page didnt return the 200 code, instead it returned the ' +
              response.status() +
              ' code, which is why it is not available'
          );
          console.log(`Moving to Next PDP ${pdpUrl[i]}`);
        }
        await this.screenshot();
      }
    }
  };

  validatePdpElements = async (elementSelector) => {
    // You can use `elementSelector` to locate and verify the visibility of the element.
    // eslint-disable-next-line no-restricted-syntax
    for (const elem in elementSelector) {
      // eslint-disable-next-line no-prototype-builtins
      if (elementSelector.hasOwnProperty(elem)) {
        const elementValue = elementSelector[elem];
        if (elementValue !== '') {
          const locator = await this.page.locator(elementValue).first();
          console.log(`
          For the ${elem}: `);
          await expect(locator).toBeVisible();
          const elemText = await locator.textContent();
          console.log(`
              - Element is visible.
              - Value: ${elemText}
            `);
        }
      }
    }
    await this.screenshot();
  };

  /**
   * Ensure the user can add products from the PDP URL without navigating to the prodcat tool.
   * @async
   * @function moveToPdpAndProductValidate
   * @param {string} pdpUrls - Product URL
   * @param {string} addToBagElem - Element identifier related to adding to the cart.
   * @returns {Promise<void>}
   */

  moveToPdpAndProductValidate = async ({ pdpUrls, addToBagElem }) => {
    const maxIterations = 5;
    for (let i = 0; i < maxIterations; i++) {
      if (pdpUrls[i]) {
        // Implementation to check if the pdp page is loaded.
        await this.page.goto(this.siteData.executionContext.url + pdpUrls[i]);
        if ((await this.page.locator(addToBagElem).count()) > 0) {
          console.log(`${this.siteData.brandLocale} : 'Product is available'`);
          break;
        } else {
          console.log(
            `Product not available, Moving to Next PDP ${pdpUrls[i]}`
          );
        }
        await this.screenshot();
      }
    }
  };
}

module.exports = PdpPageModel;
