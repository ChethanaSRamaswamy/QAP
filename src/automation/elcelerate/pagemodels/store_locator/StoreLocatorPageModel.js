const PageModel = require('../PageModel.js');
const { expect } = require('@playwright/test');

class StoreLocatorPageModel extends PageModel {
  /**
   * Creates an instance of StoreLocatorPageModel.
   *
   * @param {object} testInfo - Information about the test.
   * @param {page} page - The playwright page object.
   * @param {object} data - Data (locatorData, testData, siteData) for the test.
   */
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
    this.timeoutShort = 5000;
  }

  /**
   * Goto the store locator landing page.
   * @param {string} findStoresElem - Locator for the find store locator page link.
   * @param {string} closeIframeElem - Locator for the iframe element.
   * @param {string} closeIframePopUpElem - Locator for the popup close icon element.
   * @returns {promise<void>} - A promise that go to store locator landing page.
   * @memberof StoreLocatorPageModel
   */
  gotoStoreLocatorPage = async (
    findStoresElem,
    closeIframeElem,
    closeIframePopUpElem
  ) => {
    if (closeIframeElem) {
      await this.page
        .frameLocator(closeIframeElem)
        .locator(closeIframePopUpElem)
        .click();
      await this.screenshot();
    }
    if (findStoresElem) {
      await expect(this.page.locator(findStoresElem)).toBeVisible();
      await this.page.locator(findStoresElem).click();
      await this.page.waitForTimeout(this.timeoutShort);
      console.log(
        `${this.siteData.brandLocale} : Switched to store locator Page`
      );
      await this.screenshot();
    }
  };

  /**
   * Enter zipcode and search store location list.
   * @param {string} zipCodeFieldElem - Locator for the zipcode text box field.
   * @param {string} searchStoresElem - Locator for the search button field.
   * @param {string} zipCode - Test data for the zipcode value.
   * @returns {promise<void>} - A promise that validate store locator list.
   * @memberof StoreLocatorPageModel
   */
  enterZipCode = async (zipCodeFieldElem, searchStoresElem, zipCode) => {
    if (zipCodeFieldElem) {
      await this.page.locator(zipCodeFieldElem).first().fill(zipCode);
      await this.page.locator(searchStoresElem).click({ force: true });
      await this.page.waitForTimeout(this.timeoutShort);
      await this.screenshot();
    }
  };

  /**
   * Search for stores based on a zipcode.
   * @param {string} storesListTableElem - Locator for the store location list table element.
   * @returns {promise<void>} - A promise that return store location list.
   * @memberof StoreLocatorPageModel
   */
  searchForStores = async (storesListTableElem) => {
    if (storesListTableElem) {
      await expect(this.page.locator(storesListTableElem)).toBeVisible();
      const storeResults = await this.page.innerText(storesListTableElem);
      console.log(
        `${this.siteData.brandLocale} : Stores displayed ` + storeResults + '\n'
      );
      await this.screenshot();
    } else {
      console.log(`${this.siteData.brandLocale} : Stores are not displayed`);
      await this.screenshot();
    }
    await this.page.reload();
  };

  /**
   * Enter city name and search store location list.
   * @param {string} cityFieldElem - Locator for the city name text box field.
   * @param {string} searchStoresElem - Locator for the search button field.
   * @param {string} cityName - Test data for the city name.
   * @returns {promise<void>} - A promise that validate store locator list.
   * @memberof StoreLocatorPageModel
   */
  enterCityName = async (cityFieldElem, searchStoresElem, cityName) => {
    if (cityFieldElem) {
      await this.page.locator(cityFieldElem).first().fill(cityName);
      await this.page.locator(searchStoresElem).click({ force: true });
      await this.page.waitForTimeout(this.timeoutShort);
      await this.screenshot();
    }
  };
}

module.exports = StoreLocatorPageModel;
