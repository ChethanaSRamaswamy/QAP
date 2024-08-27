const { expect } = require('@playwright/test');
const PageModel = require('../PageModel');
const BagPageModel = require('../header/BagPageModel');

class ShopPageModel extends PageModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }

  /**
   * Adds a product to the shopping cart by clicking on the specified element identified by locators.
   *
   * @param {string} locators - Locator for the element representing the "Add to Bag" button.
   * @param {array} popups - Locator for popups stored in array is used here.
   * @param {string} [clickTypeFlag='TRUE'] - Flag indicating the type of click to perform.
   * If 'TRUE', a regular click is performed; otherwise, a custom event click is dispatched.
   * @returns {Promise<void>} - A Promise that resolves after clicking the "Add to Bag" button.
   */
  addToCart = async (locators, popups, clickTypeFlag = 'TRUE') => {
    if (locators !== '') {
      console.log(`${this.siteData.brandLocale} : Checking add to bag`);
      // await this.page.waitForLoadState('load');
      await this.closePopup(popups);
      await expect(this.page.locator(locators).first()).toBeEnabled();
      await this.page.evaluate(() => {
        window.scrollBy(0, -500);
      });
      await this.page.evaluate(() => {
        window.scrollBy(0, 500);
      });
      const addToCart = this.page.locator(locators);
      if (clickTypeFlag === 'TRUE') {
        await addToCart.first().click();
      } else {
        await addToCart.first().dispatchEvent('click');
      }
      await this.page.waitForTimeout(3000);
      console.log(
        `${this.siteData.brandLocale} : Add to Bag is enabled and clicked on it`
      );
      await this.closePopup(popups);
    }
  };

  /**
   * Verifies if the plus or minus counter icon increments or decrements product quantity .
   * @param {string} counterPlusMinusBtn - The selector for the PLP grid element to be validated.
   * @param {string} qtyval - Maximum count up to which the counter elements can be incremented or decremented.
   * @param {string} custommessage - The selector for the PLP grid element to be validated.
   * @returns {Promise<void>} - A Promise that resolves after increment or decrementing product qty counter.
   */
  changeQuantityCounter = async (
    counterPlusMinusBtn,
    qtyval,
    custommessage
  ) => {
    const counterBtn = this.page.locator(counterPlusMinusBtn);
    if ((await counterBtn.count()) > 0) {
      for (let i = 1; i < qtyval; i++) {
        await counterBtn.click();
      }
      console.log(`${custommessage} exists and does multiple clicks`);
      const isDisabled = await counterBtn.isDisabled();

      if (isDisabled) {
        expect(isDisabled).toBeTruthy();
      } else {
        const opacity = await counterBtn.evaluate(
          (node) => window.getComputedStyle(node).opacity
        );
        const expectedOpacities = ['0.5', '0.6'];
        expect(expectedOpacities).toContain(opacity);
      }
      await this.screenshot();
    } else {
      throw new Error(`${custommessage} doesn't exist`);
    }
  };

  /**
   * Closes the cart overlay by waiting for it and its close button to be visible, then clicks the close button.
   *
   * @param {string} overlay - Locator for cart overlay.
   * @param {string} close - Locator for close button.
   */
  closeCartOverlay = async (overlay, close) => {
    if (overlay && close) {
      const cartOverlay = this.page.locator(overlay);
      console.log('Checking cart overlay is visible');
      await cartOverlay.waitFor({ state: 'visible' });
      const cartOverlayClose = this.page.locator(close);
      await cartOverlayClose.waitFor({ state: 'visible' });
      await cartOverlayClose.click();

      await expect(cartOverlay, 'Cart Overlay is not closed').toBeHidden();

      console.log('Cart overlay is close');
    }
  };

  /**
   * Initiates checkout by clicking on the bag icon and then the checkout button, ensuring both are visible first.
   *
   * @param {string} bagLocator- Locator for bag icon.
   * @param {string} checkoutLocator - Locator for checkout button.
   */
  clickBagAndCheckout = async (bagLocator, checkoutLocator) => {
    const bag = new BagPageModel(this.testInfo, this.page, this.data);
    await bag.clickOnBag(bagLocator);
    await expect(this.page.locator(bagLocator)).toBeVisible();
    const checkout = this.page.locator(checkoutLocator);
    await checkout.waitFor({ state: 'visible' });
    await checkout.click();
  };
}

module.exports = ShopPageModel;
