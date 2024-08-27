/* eslint-disable no-magic-numbers */
const PageModel = require('../PageModel');
const Util = require('../../../../utilities/util');
const { expect } = require('@playwright/test');

/**
 * Represents a page model for search-related interactions on the website.
 * Extends the base PageModel class and provides methods for triggering searches, filling search input, verifying search results,
 * selecting products from search results, adding products to the cart, and managing Beauty Perks-related actions.
 *
 * @class SearchPageModel
 * @extends PageModel
 */
class SearchPageModel extends PageModel {
  /**
   * Creates an instance of SearchPageModel.
   * @param {Object} testInfo - Information related to the test.
   * @param {Object} page - The page object for interacting with the browser.
   * @param {Object} data - Additional data needed for the page model.
   */
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
    this.brand = this.siteData.brandLocale.split('-')[0];
  }

  /**
   * Initializes the search functionality on the page.
   * If the platform is PC and the hoverSearchIcon is provided, it hovers over the search icon and takes a screenshot.
   * If not, it clicks the search icon and takes a screenshot.
   * @param {string} hoverSearchElem - Locator for the search icon that triggers hover action on PC.
   * @param {string} searchElem - Locator for the search icon that triggers click action on mobile.
   * @param {string} overlayInputElem - Locator for the search input field.
   * @param {string} mobHamburgerElem - Locator for the mobile hamburger menu icon.
   * @param {string} waitTime - Static waitTime added depending on the site's characteristics. (Optional)
   * @async
   */
  triggerSearch = async (
    hoverSearchElem,
    searchElem,
    overlayInputElem,
    mobHamburgerElem = '',
    waitTime = '3000'
  ) => {
    // searchIconHomePageClick

    // log.info('Info message');
    // log.error('Error message');
    // log.warn('Warning message');

    await this.page.waitForTimeout(parseInt(waitTime));
    if (
      this.siteData.executionContext.platform === Util.devices.pc &&
      hoverSearchElem
    ) {
      await this.page.locator(hoverSearchElem).hover({ delay: 5000 });
      await this.screenshot();
    } else {
      if (mobHamburgerElem) {
        await this.page.locator(mobHamburgerElem).dispatchEvent('click');
      }

      const searchIconTmp = await this.page.locator(searchElem);
      const overlayInputFieldTmp = await this.page.locator(overlayInputElem);
      // TODO: await searchIconTmp.first().click() is Bobbi
      if (await overlayInputFieldTmp.isHidden()) {
        await searchIconTmp.click({ force: true });
      }
      await this.screenshot();
    }
  };

  /**
   * Fills the search input field with the specified search keyword.
   * @param {string} overlayInputElem - Locator for the search input field.
   * @param {string} searchKeyword - The keyword to be entered in the search input field.
   * @async
   */
  provideSearchInput = async (
    overlayInputElem,
    searchKeyword,
    handlePopups
  ) => {
    await this.closePopup(handlePopups);
    // keywordEntryForSearch
    const txtElem = await this.page.locator(overlayInputElem);
    await txtElem.fill(searchKeyword);
    await this.screenshot();
  };

  /**
   * Checks if there are search suggestions displayed on the page.
   * If the searchMessageOverlay is provided, it checks for its visibility.
   * @param {string} messageOverlayElem - Locator for the search result message overlay.
   * @async
   */
  searchResultMessage = async (messageOverlayElem) => {
    if (messageOverlayElem === '') {
      console.log('This step is not applicable');
      return;
    }

    const isVisible = await this.page
      .locator(messageOverlayElem)
      .isVisible({ timeout: 5000 });

    if (isVisible) {
      console.log('Display Message Validated');
    } else {
      console.log('Display Message not Found');
    }
  };

  /**
   * Checks if there are predictive search results displayed on the page.
   * If predectiveItem locator is provided, it waits for a timeout, checks for the visibility of the element,
   * and logs whether the predictive results section is visible or not.
   * @param {string} predictiveItemElem - Locator for the predictive search results.
   * @async
   */
  showsSearchPredictions = async (predictiveItemElem) => {
    if (predictiveItemElem === '') {
      console.log('This step is not applicable');
      return;
    }

    const isVisible = await this.page
      .locator(predictiveItemElem)
      .first()
      .isVisible({ timeout: 10000 });

    if (isVisible) {
      console.log('Predictive results section is visible');
    } else {
      console.log('Predictive results section is not visible');
    }

    await this.screenshot();
  };

  /**
   * Clicks on the search result link or submits the search by pressing Enter in the input field.
   * If resultLinkElem locator is provided, it checks for its visibility and clicks.
   * If not, it submits the search by pressing Enter in the overlay input field.
   * @param {string} resultLinkElem - Locator for the search result link.
   * @param {string} itemUnavailableElem - Locator for the element indicating an unavailable product.
   * @param {string} overlayInputElem - Locator for the search input field.
   * @async
   */
  hitSearch = async (resultLinkElem, itemUnavailableElem, overlayInputElem) => {
    // searchResultsEnter()

    if (resultLinkElem) {
      const elem = await this.page.locator(resultLinkElem);
      const isElementVisible = elem.isVisible();
      if (isElementVisible) {
        elem.click();
      } else {
        const noProduct = await this.page
          .locator(itemUnavailableElem)
          .textContent();

        expect(isElementVisible).toBeTruthy(
          `Element is not visible\n Locator: ${noProduct}`
        );
      }
    } else {
      await this.page.locator(overlayInputElem).press('Enter');
    }
  };

  /**
   * Picks a product from the search results either by using the Quickview, Add to Bag, or standard product selection flow.
   * @param {string} firstProductElem - Locator for the first product in the search results.
   * @param {string} quickShopElem - Locator for the Quickshop option.
   * @param {string} addToBagElem - Locator for the Add to Bag option.
   * @param {string} pdpProductElem - Locator for the product on the Product Detail Page (PDP).
   * @async
   */
  chooseProduct = async (
    firstProductElem,
    quickShopElem,
    addToBagElem,
    pdpProductElem
  ) => {
    let flag = 0;
    let temp = 0;
    await this.page.waitForTimeout(5000);

    if (quickShopElem) {
      await this.page.waitForSelector(firstProductElem);
      await this.page.locator(firstProductElem).hover();
      const quickShop = await this.page.locator(quickShopElem);

      if (await quickShop.isVisible()) {
        console.log('Quickview is available');
        flag = 1;
        // scroll quickShop
        // click quickShop
        await quickShop.click();
        console.log('Adding a Product via Quickshop flow');
      }
    }

    if (flag === 0) {
      if (addToBagElem && this.page.locator(addToBagElem) !== null) {
        await this.page.locator(addToBagElem).hover();

        flag = 1;
        console.log(
          'This Step is to "Hover the Product" & proceeding to Add To Bag Flow'
        );
      }
    }

    if (flag === 0) {
      if (pdpProductElem) {
        const pdp = await this.page.locator(pdpProductElem).first();
        await pdp.click({ force: true } | { timeout: 10000 });
        temp = 1;
      }
    }

    if (temp === 1) {
      console.log('Adding a Product via SPP selection flow');
    }

    await this.screenshot();
  };

  /**
   * Adds a product to the shopping cart by clicking the "Add to Bag" button.
   * @param {string} javaAlertPopupElem - Locator for the Java alert popup.
   * @param {string} addToBagElem - Locator for the Add to Bag button.
   * @param {string} bagProductElem - Locator for the product in the shopping bag.
   * @param {string} cartElem - Locator for the shopping cart icon.
   * @param {string} notifyMeElem - Locator for the "Notify Me" element.
   * @param {string[]} locators - An array of locators identifying the elements to click for closing the popup.
   * @async
   */
  addProductAndValidateCart = async ({
    javaAlertPopupElem,
    addToBagElem,
    bagProductElem,
    cartElem,
    notifyMeElem,
    handlePopups,
  }) => {
    let flag = 0;
    if (javaAlertPopupElem) {
      await this.acceptJavaAlertPopup();
    }
    // Static wait is required here as the add to cart button sometimes needs scrolling and waitingforlocator fails
    await this.page.waitForTimeout(5000);
    await this.closePopup(handlePopups);
    const addToBagBtn = await this.page.locator(addToBagElem).first();

    if (addToBagElem) {
      await expect(addToBagBtn).toBeEnabled();

      if (this.brand.toLowerCase() === Util.locale.darphin) {
        await this.page.locator(addToBagElem).first().click();
      } else {
        await addToBagBtn.dispatchEvent('click');
      }
      await this.page.waitForTimeout(5000);
      const bagProductValue = await this.page
        .locator(bagProductElem)
        .first()
        .isHidden();

      if (!bagProductValue) {
        console.log('Product is added to Bag');
        flag = 1;
      }
      if (flag === 0) {
        await this.page.locator(cartElem).click();
        await this.page.waitForTimeout(6000);
        const isBagProductVisible = await this.page
          .locator(bagProductElem)
          .first()
          .isVisible();
        if (isBagProductVisible) {
          console.log('Product is added to Bag');
          flag = 1;
        } else {
          console.log('Product is NOT added to Bag');
          await expect(isBagProductVisible).toBeTruthy();
        }
      }
    } else {
      console.log(
        'Product is either Disabled or not available for this Brand/locale'
      );
      console.log(await this.page.locator(notifyMeElem).textContent());
    }
    await this.screenshot();
  };

  /**
   * Beauty Perks - Remove Product from the shopping cart by clicking the "removeProduct" button.
   * @param {string} removeProductElem - Locator for the "Remove Product" button.
   * @async
   */
  removeProduct = async (removeProductElem) => {
    if (this.brand.toLowerCase() === Util.locale.beautyperks) {
      if (removeProductElem) {
        await this.page.locator(removeProductElem).click();
        await this.screenshot();
      } else {
        console.log(
          'Beauty Perks - Remove Product: This step is not applicable for this Brand/Locale'
        );
      }
    }
  };

  /**
   * Handles interaction with iFrames and clicks on a specified element within the iframe.
   *
   * @param {string} frameCloseElem - The selector of the element within the iframe to be clicked.
   * @param {string} iFrameElem - The selector of the iframe containing the target element.
   * @param {string} frameWaitElem - The selector of the iframe containing wait time.
   * @throws {Error} Will throw an error if the iframe pop-up is not displayed.
   * @throws {Error} Will throw an error if no iframe element is specified.
   * @returns {Promise<void>} A promise that resolves after the click operation is completed.
   */
  handleFrames = async (frameCloseElem, iFrameElem, frameWaitElem) => {
    // In order to handle Random pop-ups
    try {
      if (iFrameElem) {
        await this.page
          .frameLocator(iFrameElem)
          .locator(frameCloseElem)
          .click({ timeout: parseInt(frameWaitElem, 10) });
      } else {
        console.error('No iframe element specified.');
      }
    } catch (error) {
      console.error('Currently the iframe pop-up is not displayed');
    }
  };
}

module.exports = SearchPageModel;
