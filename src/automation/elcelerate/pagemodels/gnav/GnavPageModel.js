const { expect } = require('@playwright/test');
const PageModel = require('../PageModel');
class GnavPageModel extends PageModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }

  /**
   * Navigate to the Homepage url.
   * @param {string} url - homepage url.
   * @returns {Promise<void>}
   * @memberof GnavPageModel
   */
  goto = async (url) => {
    await this.page.goto(url);
  };

  /**
   * Navigate to the gnav validation page.
   * @param {string} url - page url.
   * @param {string} validateGnavUrl - validation page url.
   * @returns {Promise<void>}
   * @memberof GnavPageModel
   */
  navigateToGnavPage = async (url, validateGnavUrl) => {
    if (validateGnavUrl) {
      await this.page.goto(url + validateGnavUrl);
      await this.screenshot();
    }
  };

  /**
   * Click on the gnav elements.
   * @param {string} menuElem - Locator for the menu element.
   * @returns {Promise<void>}
   * @memberof GnavPageModel
   */
  clickMenu = async (menuElem) => {
    if (menuElem) {
      await this.page.locator(menuElem).click();
      await this.screenshot();
    }
  };

  /**
   * Click on the gnav sub elements.
   * @param {string} gnavShopElem - Locator for the first menu element.
   * @param {string} gnavShopNewElem - Locator for the first sub menu element.
   * @returns {Promise<void>}
   * @memberof GnavPageModel
   */
  clickSubMenu = async (gnavShopElem, gnavShopNewElem) => {
    if (gnavShopElem) {
      await this.page.locator(gnavShopElem).click();
      await this.screenshot();
      if (gnavShopNewElem) {
        await this.page.locator(gnavShopNewElem).click();
        await this.screenshot();
      }
    }
  };

  /**
   * Click on the gnav elements.
   * @param {string} gnavShopElem - Locator for the first menu element.
   * @param {string} mainMenuElem - Locator for the main menu element.
   * @returns {Promise<void>}
   * @memberof GnavPageModel
   */
  gotoMainMenu = async (gnavShopElem, mainMenuElem) => {
    if (gnavShopElem) {
      await this.page.locator(gnavShopElem).click();
      await this.screenshot();
      if (mainMenuElem) {
        await this.page.locator(mainMenuElem).click();
        await this.screenshot();
      }
    }
  };

  /**
   * Click on the gnav elements.
   * @param {string} mainMenuElem - Locator for the main menu element.
   * @returns {Promise<void>}
   * @memberof GnavPageModel
   */
  verifyGnavElement = async (mainMenuElem) => {
    if (mainMenuElem) {
      await expect(this.page.locator(mainMenuElem)).toBeVisible();
      await this.screenshot();
      console.log('global nav elements is clickable and interactable');
    }
  };
}

module.exports = GnavPageModel;
