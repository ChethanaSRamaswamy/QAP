const { expect } = require('@playwright/test');
const PageModel = require('../PageModel');
const ShopPageModel = require('../product/ShopPageModel');

class BagPageModel extends PageModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }

  /**
   * Displays the shopping bag by checking the cart count and performing the necessary actions.
   *
   * @param {string} bagCountElem - Locator for the element displaying the cart count.
   * @param {string} cartLinkElem - Locator for the Checkout button.
   * @param {string} bagElem - Locator for the shopping bag icon.
   * @param {string} addToBagElem - Locator for the "Add to Bag" button.
   * @param {string} popupClose - The Locators for the popup close element.
   * @param {string} urlTextElem - The expected text in the URL of the cart page.
   * @param {string} [clickTypeFlag='TRUE'] - Flag indicating the type of click to perform.
   * If 'TRUE', a regular click is performed; otherwise, a custom event click is dispatched.
   * @returns {Promise<void>} - A Promise that resolves after displaying the shopping bag.
   */
  showBag = async ({
    bagCountElem,
    cartLinkElem,
    addToBagElem,
    popupClose,
    bagElem = '',
    urlTextElem,
    clickTypeFlag,
  }) => {
    var cartCount = '';
    var iteration = 0;
    var maxIteration = 3;
    const { testInfo, page, data } = this;
    const shopProduct = new ShopPageModel(testInfo, page, data);

    // check for cart count value and perform click action on bag icon
    for (let i = iteration; i < maxIteration; i++) {
      iteration++;

      const locator = this.page.locator(bagCountElem).first();
      const text = ['0', '']; // Array of texts to check
      await expect(locator).not.toContainText(text);

      cartCount = await this.page.locator(bagCountElem).first().textContent();
      console.log(
        `${this.siteData.brandLocale} - Cart count value is : ` + cartCount
      );

      if (!(parseInt(cartCount) === 0 || cartCount === '')) {
        await this.closePopup(popupClose);
        await this.page.evaluate(() => {
          window.scrollBy(0, -500);
        });
        // perform click action on bag icon
        let currentUrl = await this.page.url();
        let upCnt = 0;
        while (upCnt < maxIteration) {
          const cartPageUrl = new RegExp(`.*${urlTextElem}.*`);
          if (!currentUrl.match(cartPageUrl)) {
            await this.cartSelection(cartLinkElem, bagElem);
          } else {
            break;
          }
          upCnt++;
          currentUrl = await this.page.url();
        }
        break;
      } else {
        console.log(
          `${this.siteData.brandLocale} : Cart count value is zero, clicking add to bag button again`
        );
        // perform click action on add to bag button
        await shopProduct.addToCart(addToBagElem, popupClose, clickTypeFlag);
      }
    }
    if (iteration === 3) {
      console.log(`${this.siteData.brandLocale} : Product not added to bag`);
    }
    await this.screenshot();
  };

  /**
   * Clicks on the shopping bag icon if the provided selector is not an empty string.
   *
   * @param {string} bagElem - Locator for the shopping bag icon.
   * @returns {Promise<void>} - A Promise that resolves after clicking on the bag icon.
   */
  clickOnBag = async (bagElem) => {
    if (bagElem) {
      await this.page.locator(bagElem).click();
      await this.page.waitForLoadState('load');
      console.log('Clicked on bag icon');
    }
  };

  /**
   * Performs selection of the cart and navigates to the View Cart page.
   * If the cart link element is visible, it clicks on it. If not, it clicks on the bag element to open the cart.
   * Then, it waits for a timeout and checks if the checkout is available.
   * If checkout is available, it clicks on the cart link element.
   *
   * @param {string} cartLinkElem - The selector for the cart link element.
   * @param {string} bagElem - The selector for the bag element.
   * @returns {Promise<void>} - A Promise that resolves after completing the cart selection.
   */
  cartSelection = async (cartLinkElem, bagElem) => {
    const isBagVisible = await this.page.locator(cartLinkElem).isVisible();
    if (!isBagVisible) {
      await this.page.locator(bagElem).dispatchEvent('click');
      console.log(
        `${this.siteData.brandLocale} : Navigating to the View Cart page by clicking on the bag icon.`
      );
      await this.page.waitForTimeout(3000);
      const isCheckoutAvailable = await this.page
        .locator(cartLinkElem)
        .isVisible();
      if (isCheckoutAvailable) {
        await this.page.locator(cartLinkElem).click();
      }
    } else {
      await this.page.locator(cartLinkElem).dispatchEvent('click');
      console.log(
        `${this.siteData.brandLocale} : Navigating to the View Cart page by clicking the Checkout button.`
      );
    }
    await this.page.waitForTimeout(3000);
  };
}

module.exports = BagPageModel;
