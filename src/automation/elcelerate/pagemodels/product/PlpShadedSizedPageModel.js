const { expect } = require('@playwright/test');

/**
 * Represents a Page Model (PageModel) for handling login-related actions on a brand website.
 * @class PageModel
 */
const PlpPageModel = require('./PlpPageModel');
const ShopPageModel = require('./ShopPageModel');

/**
 * Represents a Page Model (PageModel) for the Product Listing Page (PLP) of the web application.
 *
 * The PlpPageModel class encapsulates interactions and verifications related to the PLP, which
 * typically displays a list of products available for purchase.
 *
 * @class PlpShadedPageModel
 * @extends PlpPageModel
 */
class PlpShadedPageModel extends PlpPageModel {

  /**
   * Creates an instance of PlpShadedPageModel.
   *
   * @param {Object} testInfo - Information about the test.
   * @param {Page} page - The Playwright page object.
   * @param {Object} data - Data (locatorData, testData, siteData) for the test.
   */
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
    this.awaitTime = 5000;
    this.shopping = new ShopPageModel(testInfo, page, data);
    this.messages = {
      plpProductNotfound: 'No products found on PLP. Please check locator if locator is correct.',
      nonApplicable: 'not applicable',
      noShadedProdAdded: 'No shaded or sized product was available to add to bag in PLP.',
      quickViewVisible: 'Quick View window is still visible, attempting to close.',
      quickViewNotVisible: 'Quick View window is not visible, as expected.',
      unKnownContextValue: (contextName) => `Unknown context: ${contextName}`,
      contextOverlayText:'overlay'
    };
  }

  /**
 * @typedef {Object} ShadeSizedLocators
 * @description Object for various locators used in shade selection and product interaction.
 * @property {string} productElem - Parent Selector for the product element.
 * @property {string} pickerElem - Child Selector for the product shade or size picker.
 * @property {string} optionElem - Child Selector for individual shade or size options.
 * @property {string} shadeSizeOverlayElem - Parent Selector for the product shade or size overlay.
 * @property {string} shadeSizeCloseOverlayElem - Child Selector for closing the shade or size overlay.
 * @property {string} addToBagElem - Child Selector for the add to bag button.
 * @property {string} selectedValueElem - Child Selector for the currently selected shade name or size value.
 * @property {string} productNameElem - Child Selector for the product name.
 * @property {string} dropdownElem - Child Selector for the shade or size dropdown button.
 * @property {string} quickViewElem - Child Selector for the quick view button.
 * @property {string} quickViewWindowElem - Selector for the quick view window.
 * @property {string} quickViewCloseElem - Selector for the quick view close button.
 *

/**
 * @typedef {Object} CartLocators
 * @description Object for various locators used in managing the shopping cart overlay and its interactions.
 * @property {string} cartOverlayElem - Selector for the cart overlay.
 * @property {string} cartCloseOverlayElem - Selector for the cart overlay close button.
 */

  /**
   * Retrieves locators for interacting with product elements based on the specified context.
   *
   * @param {string} contextText - The context of the interaction: 'product', 'quickshop', or 'overlay'.
   * @param {ShadeSizedLocators} shadeSizedLocators - Object containing selector strings for various interaction elements.
   * @param {string} baseElem - Optional. The locator for the base element in 'product' or 'quickshop' contexts. Not used for 'shadeOverlay'.
   * @returns {Object} Locators for the specified context, facilitating targeted interactions.
   */
  getContextLocators = (contextText, shadeSizedLocators, baseElem = null) => {
    let base, overlay = false;
    switch (contextText) {
      case 'product':
      case 'quickview':
        base = baseElem;
        break;
      case 'overlay':
        base = this.page.locator(shadeSizedLocators.shadeSizeOverlayElem);
        overlay = true;
        break;
      default:
        throw new Error(this.messages.unKnownContextValue(contextText));
    }

    const locators = {
      addToBagElem: base.locator(shadeSizedLocators.addToBagElem),
      selectedValueElem: base.locator(shadeSizedLocators.selectedValueElem),
      optionElem: base.locator(shadeSizedLocators.optionElem),
      dropdownElem: base.locator(shadeSizedLocators.dropdownElem),
    };

    if (overlay && shadeSizedLocators.shadeSizeCloseOverlayElem) {
      locators.shadeSizeCloseOverlayElem = base.locator(
        shadeSizedLocators.shadeSizeCloseOverlayElem
      );
    }

    return locators;
  };

  /**
 * Asserts product visibility on a page and returns their count.
 *
 * @param {string} productsElem - Selector for product elements.
 * @returns {Promise<number>} Count of visible product elements.
 */
  checkProductsAvailable = async (productsElem) => {
    await productsElem.first().waitFor({ state: 'visible' });
    const productsCount = await productsElem.count();
    expect(
      productsCount,
      this.messages.plpProductNotfound
    ).toBeGreaterThan(0);
    return productsCount;
  };

  /**
 * Triggers and waits for a product's quick view modal.
 *
 * @param {string} productElem - Selector for a specific product.
 * @param {ShadeSizedLocators} shadeSizedLocators - Contains selectors for quick view button and modal.
 * @returns {Promise<Locator>} Selector for the quick view modal.
 */
  openQuickView = async (productElem, shadeSizedLocators) => {
    const quickView = productElem.locator(shadeSizedLocators.quickViewElem);
    await productElem.hover();
    await expect(quickView).toBeVisible();
    await quickView.click();
    await this.page.locator(shadeSizedLocators.quickViewWindowElem).waitFor();
    return this.page.locator(shadeSizedLocators.quickViewWindowElem);
  };

  /**
   * Selects a product option and adds the product to the cart.
   * @param {Object} contextLocators- Object allows for targeted interactions
   * @param {string} dropDownElem - Selector for the shade or size dropdown button.
   * @param {string} overlayElem - Selector for the shade or size overlay.
   * @param {Object} cart - Object containing selectors for cart interactions.
   * @returns {Object} An object indicating if a product was selected and the selected value's text.
   */
  selectOptionAndATB = async (
    contextLocators,
    dropDownElem,
    overlayElem,
    cart
  ) => {
    await contextLocators.selectedValueElem.waitFor();
    const defaultValueText = (
      await contextLocators.selectedValueElem.textContent()
    ).trim();
    const optionsCount = await contextLocators.optionElem.count();
    let productSelected = false;
    let selectedValueText = '';

    for (let j = 0; j < optionsCount; j++) {
      const option = contextLocators.optionElem.nth(j);
      if (dropDownElem && overlayElem === '') {
        await dropDownElem.click();
      }
      if (await option.isVisible()) {
        await option.scrollIntoViewIfNeeded();
        await option.click({ force: true });
        await this.page.waitForTimeout(this.awaitTime);
        const optionText = (
          await contextLocators.selectedValueElem.textContent()
        ).trim();
        if (
          optionText !== defaultValueText &&
          await contextLocators.addToBagElem.isVisible()
        ) {
          await contextLocators.addToBagElem.click();
          selectedValueText = optionText;
          productSelected = true;
          await this.page.waitForTimeout(this.awaitTime);
          await this.shopping.closeCartOverlay(
            cart.cartOverlayElem,
            cart.cartCloseOverlayElem
          );
          break;
        }
      }
    }
    if (overlayElem && productSelected === false) {
      await overlayElem.waitFor({ state: 'visible' });
      await contextLocators.shadeSizeCloseOverlayElem.click();
    }
    return { productSelected, selectedValueText };
  };

  /**
 * Closes the quick view modal if the close button is present.
 *
 * @param {ShadeSizedLocators} shadeSizedLocators - Contains the selector for the quick view close button.
 */
  closeQuickView = async (shadeSizedLocators) => {
    const quickViewClose = shadeSizedLocators.quickViewCloseElem;
    if (quickViewClose) {
      await this.page.locator(quickViewClose).first().waitFor();
      await this.page.locator(quickViewClose).first().click();
    }
  };

  /**
   * Adds a shaded product to the cart and returns array with object of product name and shade name.
   *
   * @param {ShadeSizedLocators} shadeSizedLocators - An object containing all necessary selectors for adding shaded product to bag.
   * @param {CartLocators} cart - An object containing all necessary selectors for validating cart overlay.
   * @returns {Promise<Object>} - An object containing product name, shade title, and other relevant information.
   * @throws {Error} - Throws an error if any asynchronous operation fails.
   */

  addShadedProductToBag = async (shadeSizedLocators, cart) => {
    const productsElems = this.page.locator(shadeSizedLocators.productElem);
    const productsCount = await this.checkProductsAvailable(productsElems);
    const results = [];

    for (let i = 0; i < productsCount; i++) {
      const product = productsElems.nth(i);
      const productNameText = (
        await product.locator(shadeSizedLocators.productNameElem).textContent()
      ).trim();

      await product.waitFor();
      await product.scrollIntoViewIfNeeded();

      const productPickerElem = shadeSizedLocators.pickerElem? product.locator(shadeSizedLocators.pickerElem) : this.messages.nonApplicable;


      if (
        productPickerElem === this.messages.nonApplicable ||
        await productPickerElem.isVisible()
      ) {
        let contextLocator;

        if (shadeSizedLocators.shadeSizeOverlayElem) {
          await product.locator(shadeSizedLocators.dropdownElem).waitFor();
          await product.locator(shadeSizedLocators.dropdownElem).click();
          contextLocator = this.getContextLocators(
            'overlay',
            shadeSizedLocators
          );
        } else if (shadeSizedLocators.quickViewElem) {
          const quickViewWindow = await this.openQuickView(
            product,
            shadeSizedLocators
          );
          contextLocator = this.getContextLocators(
            'quickview',
            shadeSizedLocators,
            quickViewWindow
          );
        } else {
          contextLocator = this.getContextLocators(
            'product',
            shadeSizedLocators,
            product
          );
          await product.hover();
        }

        const dropDown = shadeSizedLocators.dropdownElem? contextLocator.dropdownElem: '';

        const overlay = shadeSizedLocators.shadeSizeOverlayElem? contextLocator.shadeSizeOverlayElem:  '';

        const selectionResult = await this.selectOptionAndATB(
          contextLocator,
          dropDown,
          overlay,
          cart
        );

        if (selectionResult.productSelected) {
          results.push({
            productName: productNameText,
            productValue: selectionResult.selectedValueText,
          });
          break;
        } else {
          await this.closeQuickView(shadeSizedLocators);
        }
      }
    }

    expect(
      results.length > 0,
      this.messages.noShadedProdAdded
    ).toBeTruthy();

    console.log(
      `The product selected from PLP is ${results[0].productName} with the shadeName of ${results[0].productValue}`
    );
    return results;
  };

  /**
 * Checks if the quick view modal is closed, and attempts to close it if not.
 *
 * @param {ShadeSizedLocators} shadeSizedLocators - Contains the locator for the quick view window element.
 */
  isQuickViewClosed = async (shadeSizedLocators) => {
    if (shadeSizedLocators.quickViewWindowElem) {
      const quickViewWindow = this.page
        .locator(shadeSizedLocators.quickViewWindowElem)
        .first();

      await this.page.waitForTimeout(this.awaitTime);

      if (await quickViewWindow.isVisible()) {
        console.log(this.messages.quickViewVisible);

        await this.closeQuickView(shadeSizedLocators);

        await quickViewWindow.waitFor({ state: 'hidden' });

        expect
          .soft(
            quickViewWindow,
            this.messages.quickViewVisible
          )
          .toBeHidden();
      } else {
        console.log(this.messages.quickViewNotVisible);
      }
    }
  };

  /**
 * Converts absolute XPaths in locators to relative for context-specific usage.
 *
 * @param {ShadeSizedLocators} shadeSizedLocators - Object with XPath locator strings.
 * @returns {Object} Object with converted locator strings.
 */
  convertRelativeXPaths = (shadeSizedLocators) => {
    const convertLocator = (locator) => {
      if (locator.includes('|')) {
        return (
          'xpath=' +
          locator
            .split('|')
            .map((part) =>
              part.trim().startsWith('//') ? '.' + part.trim() : part.trim()
            )
            .join(' | ')
        );
      }
      return locator;
    };

    const convertedLocators = {};
    Object.entries(shadeSizedLocators).forEach(([key, locator]) => {
      convertedLocators[key] =
        typeof locator === 'string' && locator.length > 0
          ? convertLocator(locator)
          : '';
    });

    return convertedLocators;
  };
}

module.exports = PlpShadedPageModel;
