const { expect } = require('@playwright/test');

/**
 * Represents a Page Model (PageModel) for handling login-related actions on a brand website.
 * @class PageModel
 */
const PageModel = require('../PageModel');

/**
 * Represents a Page Model (PageModel) for the Product Listing Page (PLP) of the web application.
 *
 * The PlpPageModel class encapsulates interactions and verifications related to the PLP, which
 * typically displays a list of products available for purchase.
 *
 * @class PlpPageModel
 * @extends PageModel
 */
class PlpPageModel extends PageModel {
  /**
   * Creates an instance of PlpPageModel.
   *
   * @param {Object} testInfo - Information about the test.
   * @param {Page} page - The Playwright page object.
   * @param {Object} data - Data (locatorData, testData, siteData) for the test.
   */
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }

  /**
   * Checks if the Product Listing Page (PLP) is loaded by verifying the presence of a specific
   * element on the page.
   *
   * @param {string} plpPageExamplePlpGridElem - Locator for the element that indicates the PLP is loaded.
   * @returns {Promise<void>} A Promise that resolves when the PLP is loaded successfully.
   * @memberof PlpPageModel
   */
  isLoaded = async (plpPageExamplePlpGridElem) => {
    // You can use `plpPageExamplePlpLandElem` to locate and verify the presence of the element.

    await expect(this.page.locator(plpPageExamplePlpGridElem)).toBeVisible();
    console.log('In PLP');
    await this.screenshot();
  };

  /**
   * Moves to the Product Detail Page (PDP) from the Product Listing Page (PLP) by clicking on a product.
   *
   * @param {string} plpPageExamplePdpElem - Locator for the element representing the product link on the PLP.
   * If it's an empty string, no action is taken.
   * @returns {Promise<void>} A Promise that resolves after clicking on the product link (if available).
   *
   * @memberof PlpPageModel
   */
  moveToPdp = async (plpPageExamplePdpElem) => {
    if (plpPageExamplePdpElem) {
      await this.page.locator(plpPageExamplePdpElem).first().click();
      console.log('Clicking available Product from PLP Page');
    }
  };

  /**
   * Clicks on a product view element on the Product Listing Page (PLP), captures the product name, takes a screenshot, and navigates to the product view.
   *
   * @param {string} productViewClassElem - The selector for the product view element to be clicked.
   * @param {string} productViewTextElem - The selector for the element containing the product name text.
   * @returns {Promise<string>} - A Promise that resolves with the product name from the PLP before navigating to the product view.
   */
  clickProductView = async (productViewClassElem, productViewTextElem) => {
    if (productViewClassElem) {
      await this.page.waitForTimeout(5000);
      await expect(
        await this.page.locator(productViewClassElem).first()
      ).toBeVisible();
      const productNameOnPlp = await this.page
        .locator(productViewTextElem)
        .first()
        .textContent();
      console.log('Selected productName in PLP : ' + productNameOnPlp);
      await this.screenshot();
      await this.page
        .locator(productViewClassElem)
        .first()
        .dispatchEvent('click');
      await this.page.waitForLoadState('load');
      return productNameOnPlp;
    }
  };

  /**
   * Validates the loading of the Product Listing Page (PLP) grid by scrolling and checking visibility.
   *
   * @param {string} gridElem - The selector for the PLP grid element to be validated.
   * @returns {Promise<void>} - A Promise that resolves after validating the PLP grid loading and logging the results.
   */
  plpGridValidation = async (gridElem) => {
    let gridCount = 0;
    for (let i = 0; i < 2; i++) {
      await this.page.evaluate(() => {
        window.scrollBy(0, 500);
      });
      const title = await this.page.title();
      const grid = this.page.locator(gridElem);
      if (grid.isVisible()) {
        console.log('In PLP, grid loading is completed as expected.');
        console.log('PLP page title :' + title);
        break;
      } else {
        await this.page.reload();
        await this.page.waitForTimeout(5000);
        console.log("Page hasn't loaded thus reloading the page.");
        gridCount++;
      }
    }
    if (gridCount === 2) {
      console.log('PLP grid is not loaded after re-loading the page twice.');
      expect(false).toBe(true);
    }
  };

  /**
   * Navigates to a Product Listing Page (PLP) URL.
   *
   * @param {string} urlElem - The relative or absolute URL of the PLP to navigate to.
   * @returns {Promise<void>} - A Promise that resolves when the navigation is complete.
   */
  goToAPlp = async (urlElem) => {
    if (urlElem) {
      await this.page.goto(this.siteData.executionContext.url + urlElem);
    }
  };

  /**
   * Hover over a product image and click on a specified element within the hovered area.
   *
   * @param {string} gridImgElem - The selector for the product image to hover over.
   * @param {string} quickViewElem - The selector for the element to click within the hovered area.
   * @returns {Promise<void>} - A Promise that resolves after hovering, checking visibility, clicking, and taking a screenshot.
   */
  hoverProductAndClick = async (gridImgElem, quickViewElem) => {
    if (quickViewElem) {
      const eleHover = this.page.locator(gridImgElem);
      await eleHover.first().hover({ force: true });
      await expect(
        await this.page.locator(quickViewElem).first()
      ).toBeVisible();
      await this.page.locator(quickViewElem).first().click();
      console.log('The element is visible on the page and has been clicked');
      await this.screenshot();
    }
  };

  /**
   * Clicks on a breadcrumbs element, validates the resulting page, and takes screenshots.
   *
   * @param {string} breadCrumbsElem - The selector for the breadcrumbs element to click.
   * @param {string} page - The expected page type ('Home' or 'Plp') after clicking the breadcrumbs.
   * @returns {Promise<void>} - A Promise that resolves after clicking, waiting for page load, validating the URL, and taking screenshots.
   */
  clickBreadCrumbsAndValidatePage = async (breadCrumbsElem, page) => {
    if (breadCrumbsElem) {
      await this.screenshot();
      await this.clickIfElementAvailable(breadCrumbsElem);
      await this.page.waitForLoadState('load');
      const urlWithoutCredentials =
        this.siteData.executionContext.urlWithNoCredential;
      if (page === 'Home') {
        await expect(this.page).toHaveURL(urlWithoutCredentials);
        console.log('In Homepage');
      } else {
        await expect(this.page).not.toHaveURL(urlWithoutCredentials);
        console.log('In Plp');
      }
      await this.screenshot();
    }
  };

  /**
   * Verifies if the product image dynamically updates when switching to another shade.
   *
   * @param {string} shadeDropdownValuesQVElem - The selector for the dropdown values.
   * @param {string} imgAttributeQVElem - The selector for the product image.
   * @param {string} dropdownQVElem - The selector for the dropdown element.
   * @returns {Promise<void>} - A Promise that resolves once the verification is complete.
   * @throws {Error} Throws an error if the product image does not change after selecting a different shade.
   */
  verifyProductImageChangeForSelectedShade = async (
    shadeDropdownValuesQVElem,
    imgAttributeQVElem,
    dropdownQVElem
  ) => {
    const dropdown = await this.page.$$(shadeDropdownValuesQVElem);
    if (dropdown) {
      const shadeTexts = await Promise.all(
        dropdown.map((element) => element.textContent())
      );
      const cleanedTexts = shadeTexts.map((text) =>
        text.replace(/[^\w\s]/gi, '').trim()
      );
      const element = await this.page.locator(imgAttributeQVElem);
      const altValueOne = await element.first().getAttribute('alt');
      console.log(`The shades from the dropdown ${cleanedTexts}`);
      console.log(`The attribute name of the default shade is ${altValueOne}`);
      if (cleanedTexts.length > 0) {
        await this.page.locator(dropdownQVElem).first().click();
        await this.page.getByRole('button', { name: cleanedTexts[1] }).click();
        await this.page.waitForLoadState('load');
        await this.page.waitForTimeout(2000);
        const altValueSec = await element.first().getAttribute('alt');
        console.log(
          `The attribute name of the selected shade is ${altValueSec}`
        );
        if (altValueSec !== altValueOne) {
          expect(true).toBe(true);
          console.log(
            'The product image dynamically updates when switching to another shade'
          );
        } else {
          expect(false).toBe(true);
          console.error(
            'The product image did not change after selecting a different shade'
          );
        }
      }
    }
  };

  /**
   * Closes a popup with iframe
   *
   * @param {string} iframe - The locator for the iframe element.
   * @param {string} popupElem - The locators for the element that closes the popup.
   * @returns {Promise<void>} A promise that resolves after closing the popup.
   */

  closePopupWithFrames = async (popupElem, iframe) => {
    let popupVisible = '';
    for (let iCnt = 0; iCnt < popupElem.length; iCnt++) {
      const element = popupElem[iCnt];
      if (element) {
        await this.page.waitForTimeout(3000);
        popupVisible = await this.page
          .frameLocator(iframe)
          .locator(element)
          .isVisible();
        if (popupVisible) {
          await this.page
            .frameLocator(iframe)
            .locator(element)
            .click({ force: true });
        } else {
          popupVisible = await this.page.locator(element).isVisible();
          if (popupVisible) {
            await this.page.locator(element).click({ force: true });
          }
        }
      }
    }
  };

  /**
   * Applies filter on a Product Listing Page (PLP) and returns the number of products available.
   *
   * @param {string} productCount - The selector for the element displaying the product count.
   * @param {string} NoOfProducts - The selector for the element to get the totoal products on the page
   * @param {string} filter - The selector to expand the filter section
   * @param {string} filterOptions - The selector to get the all available filter options
   * @param {string} textValue - The selector to get first filter text under first option
   * @param {string} applyFilter - The selector for the apply button (if applicable)
   * @param {string} resultText - Text which display along witht the product count
   * @returns {Promise<string>} - The number of products available on the PLP.
   * @throws {Error} - Throws an error if any asynchronous operation fails.
   */

  chooseFiltersAndApply = async (locatorObjectsElems) => {
    let prodCountVal = 0;
    if (locatorObjectsElems.productCount) {
      if (
        !(await this.page.locator(locatorObjectsElems.productCount).isHidden())
      ) {
        prodCountVal = await this.page
          .locator(locatorObjectsElems.productCount)
          .first()
          .textContent();
        console.log(
          `The number of products available on the PLP is ${prodCountVal}`
        );
      } else {
        const totalProduct = await this.page
          .locator(locatorObjectsElems.totalNoOfProducts)
          .count();
        prodCountVal = totalProduct + ' ' + locatorObjectsElems.resultText;
      }
    } else {
      const totalProduct = await this.page
        .locator(locatorObjectsElems.totalNoOfProducts)
        .count();
      prodCountVal = totalProduct + ' ' + locatorObjectsElems.resultText;
    }

    console.log('The product count before applying filter ', prodCountVal);
    if (locatorObjectsElems.filter) {
      // Click on Filter Button if available
      await this.page.keyboard.press('ArrowDown');
      await this.page.locator(locatorObjectsElems.filter).click();
    }

    const filterOptionsElemts = await this.page.$$(
      locatorObjectsElems.filterOptions
    );
    for (const filterOptionsElemt of filterOptionsElemts) {
      const valueToSelect = locatorObjectsElems.textValue;
      console.log(valueToSelect);
      if (filterOptionsElemt.isVisible()) {
        await filterOptionsElemt.click({ force: true });
        await this.page
          .locator(valueToSelect)
          .first()
          .waitFor({ state: 'visible' });
        await this.page.locator(valueToSelect).first().click();
        await this.page.waitForTimeout(parseInt(locatorObjectsElems.waitTime));
        break;
      }
    }

    // Apply filter if button is available
    if (locatorObjectsElems.applyFilter) {
      await this.page
        .locator(locatorObjectsElems.applyFilter)
        .click({ force: true });
      await this.screenshot();
    }
    return prodCountVal;
  };

  /**
   * Validates the product count after applying a filter on the Product Listing Page (PLP).
   *
   * @param {string} productCountElem - The selector for the element containing the product count after applying the filter.
   * @param {string} prodCountVal - The initial product count value before applying the filter.
   * @returns {Promise<void>} - A Promise that resolves after validating the filter's impact on the product count and logging the results.
   */
  validateFilterCount = async (productCountElem, prodCountVal) => {
    if (productCountElem) {
      const prodCountValAfterFilter = await this.page
        .locator(productCountElem)
        .first()
        .textContent();
      console.log(
        `After applying the filter, the number of products available on the PLP is ${prodCountValAfterFilter}`
      );
      expect(
        parseInt(prodCountValAfterFilter.replace(/\D/g, ''))
      ).toBeLessThanOrEqual(parseInt(prodCountVal.replace(/\D/g, '')));
      console.log(
        `Product count is reduced from ${prodCountVal} to ${prodCountValAfterFilter}`
      );
    }
  };
  /**
   * Validates the product count after applying a filter on the Product Listing Page (PLP).
   *
   * @param {string} productCountElem - The selector for the element containing the product count after applying the filter.
   * @param {string} prodCountVal - The initial product count value before applying the filter.
   * @returns {Promise<void>} - A Promise that resolves after validating the filter's impact on the product count and logging the results.
   */
  validatePordCountWithoutFilterCount = async (
    productCountElem,
    prodCountVal
  ) => {
    let prodCountValAfterFilter = await this.page
      .locator(productCountElem)
      .count();
    prodCountValAfterFilter = prodCountValAfterFilter + ' ';
    console.log(
      `After applying the filter, the number of products available on the PLP is ${prodCountValAfterFilter}`
    );
    expect(
      parseInt(prodCountValAfterFilter.replace(/\D/g, ''))
    ).toBeLessThanOrEqual(parseInt(prodCountVal.replace(/\D/g, '')));
    console.log(
      `Product count is reduced from ${prodCountVal} to ${prodCountValAfterFilter}`
    );
  };
}

module.exports = PlpPageModel;
