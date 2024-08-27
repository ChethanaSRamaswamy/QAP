const { expect } = require('@playwright/test');
const PageModel = require('../PageModel');
const Util = require('../../../../utilities/util');
const LoyaltyPageModel = require('../loyalty/LoyaltyPageModel.js');
const OfferManagerPageModel = require('../common/OfferManagerPageModel.js');

const messages = {
  cartpageNot: 'Expected to be navigated to Cartpage but it is not',
  cartPage: 'Navigated to cart page as expected',
  prodAdded: 'Product added to cart',
  productNotAdded: 'No Product added to cart',
  firstprodVal:
    'In the first iteration the product was not added, so go for second iteration',
  secondprodVal:
    'After the 2nd iteration, the product was not added to the basket',
  selectedProdAdded:
    'The product chosen matches the one that has been placed in the cart',
  loyaltyPointCalSuccess: 'Loyalty point calcualtion successful',
  loyaltyPointCalFail: 'Loyalty point calcualtion failed',
  loyaltyPointEarned: 'Loaylty point earned',
  donationAdded: 'Donation successfully added to cart',
  selectedShadeAdded:
    'The shade selected matches the one that has been placed in the cart',
};

class ViewCartPageModel extends PageModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
    this.loyaltyPage = new LoyaltyPageModel(testInfo, page, data);
    this.offerswel = new OfferManagerPageModel(testInfo, page, data);
  }

  /**
   * Calculates loyalty points earned for a customer based on their purchase.
   *
   * @param {number} purchaseValue - The total purchase value made by the customer.
   * @param {number} testPntTotal - The total test points accumulated by the customer.
   * @param {number} earnPnt - The rate at which loyalty points are earned per purchase value.
   * @param {boolean} offerStatusFlag - A flag indicating whether a special offer is applied.
   * @param {string} appliedOffer - The type of special offer applied.
   * @returns {Object} An object containing the calculated loyalty points and total points.
   */
  loyaltyPointCalculation = (
    purchaseValue,
    testPntTotal,
    earnPnt,
    offerStatusFlag,
    appliedOffer
  ) => {
    let totalPnt = 0;
    let bdayPoint = 0;
    let percentDiscount = 0;
    let loyPoint = 0;
    const OFFER_TYPES = {
      BIRTHDAY_20_OFF: 'ly_birthday_20off',
      LYL_15_OFF: 'lyl_15_off',
      FIRST: 'first',
    };
    loyPoint = purchaseValue * earnPnt;
    if (offerStatusFlag) {
      switch (appliedOffer) {
        case OFFER_TYPES.BIRTHDAY_20_OFF:
          bdayPoint = purchaseValue * this.testData.BDAYBONUS;
          loyPoint = loyPoint + bdayPoint;
          break;
        case OFFER_TYPES.LYL_15_OFF:
          percentDiscount = loyPoint * parseFloat(this.testData.DISCOUNTAMNT);
          loyPoint = parseFloat(loyPoint - percentDiscount);
          break;
        case OFFER_TYPES.FIRST:
          percentDiscount = loyPoint * parseFloat(this.testData.DISCOUNTAMNT);
          loyPoint = parseFloat(loyPoint - percentDiscount);
          break;
      }
    }
    loyPoint = loyPoint + testPntTotal;
    totalPnt = totalPnt + loyPoint;
    return { loyPoint, totalPnt };
  };

  /**
   * Calculates the total purchase amount.
   *
   * @param {number} purchaseValue - The value of the purchase made by the customer.
   * @returns {number} The total purchase amount.
   */
  availPointCalculation = (purchaseValue) => {
    let totalPurchaseAmnt = 0;
    totalPurchaseAmnt = totalPurchaseAmnt + purchaseValue;
    return totalPurchaseAmnt;
  };

  /**
   * Verifies cart items and performs optional actions like continuing to checkout.
   *
   * @param {string} emptyCartAlert - Locator for the alert indicating an empty cart.
   * @param {string} checkoutContinue - Locator for the element to click for continuing to checkout (optional).
   * @param {string} cartPageURLText - The expected text in the URL of the cart page.
   * @param {string} [mobCheckout=''] - Locator for mobile checkout button (optional).
   * @param {string} popups - The Locators for the popup close element.
   * @returns {Promise<void>} - A Promise that resolves after cart verification and optional actions are complete.
   */
  verifyCartItems = async ({
    emptyCartAlert,
    checkoutContinue,
    cartPageURLText,
    mobCheckout = '',
    popups,
    registerHandlePopups = '',
  }) => {
    const cartPageUrl = new RegExp(`.*${cartPageURLText}.*`);
    await expect(this.page).toHaveURL(cartPageUrl);
    await expect(await this.page.locator(emptyCartAlert)).not.toBeVisible();
    console.log(`${this.siteData.brandLocale} : ${messages.prodAdded}`);
    await this.clickElementsInSelector(registerHandlePopups);

    await this.page.waitForTimeout(2000);
    await this.closePopup(popups);
    if (checkoutContinue) {
      await this.page.locator(checkoutContinue).first().hover({ force: true });
      await this.page.locator(checkoutContinue).first().click({ force: true });
      // await this.page.waitForNavigation({timeout : 30000});
    }
    if (
      mobCheckout &&
      this.siteData.executionContext.platform === Util.devices.mobile
    ) {
      await this.page.$eval(mobCheckout, (ele) => {
        ele.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
        });
      });
      await this.page.locator(mobCheckout).first().click();
    }
  };

  /**
   * Validates the content of a shopping cart page and selected product information.
   *
   * @param {string} cartPageURLText - The expected text in the URL of the cart page.
   * @param {string} prodNameOnCart - Locator for the product name on the cart page.
   * @param {string} prodNameOnPlp - The expected product name on the product listing page.
   * @param {string} emptyCartAlert - Locator for the alert indicating an empty cart.
   * @returns {Promise<void>} - A Promise that resolves after validation is complete.
   */
  validateCartAndSelectedProduct = async (
    cartPageURLText,
    prodNameOnCart,
    prodNameOnPlp,
    emptyCartAlert
  ) => {
    const cartPageUrl = new RegExp(`.*${cartPageURLText}.*`);
    await expect(this.page).toHaveURL(cartPageUrl);
    console.log(messages.cartPage);
    await expect(await this.page.locator(emptyCartAlert)).not.toBeVisible();
    console.log(messages.prodAdded);
    if (prodNameOnCart) {
      const productTextOnCart = await this.page.locator(prodNameOnCart);
      await expect(productTextOnCart).toHaveText(prodNameOnPlp.trim());
      console.log(
        'Product name in cartpage :' + (await productTextOnCart.textContent())
      );
      console.log(messages.selectedProdAdded);
    }
    await this.screenshot();
  };

  /**
   * Validates that the selected shade name appears in the cart.
   *
   * @param {string} shadeNameText - Expected shade name text to validate.
   * @param {string} shadeNameOnCart - Locator for the shade name in the cart.
   */
  validateShadeName = async (shadeNameText, shadeNameOnCart) => {
    if (shadeNameOnCart) {
      const shadeCartLocator = await this.page.locator(shadeNameOnCart).first();
      const shadeCartText = (await shadeCartLocator.textContent()).trim();
      expect(shadeCartText).toContain(shadeNameText.trim());
      console.log('Shade name in cartpage :' + shadeCartText);
      console.log(messages.selectedShadeAdded);
    }
  };

  /**
   * Validate the merge cart scenario if it is applicable
   * @param {*} cartCheckoutContinue - Locator for Checkout page continue button
   * @param {*} mobCartCheckout - Locator for Mobile Checkout page continue button
   * @param {string} [mobCartCheckoutOptional=''] - Locator for Mobile Checkout optional page continue button
   * @returns {Promise<void>}
   * @memberof ViewCartPageModel
   */
  mergeCartValidation = async (
    cartCheckoutContinue,
    mobCartCheckout,
    mobCartCheckoutOptional = ''
  ) => {
    await this.page.waitForTimeout(5000);
    await this.page.waitForLoadState('domcontentloaded');

    let contElemIsVisible = false;
    let continueElem;

    await this.page.waitForTimeout(2000);
    if (this.siteData.executionContext.platform === Util.devices.mobile) {
      await this.page.evaluate(() => {
        window.scrollBy(0, document.body.scrollHeight);
      });
      continueElem = mobCartCheckout;
    } else if (this.siteData.executionContext.platform === Util.devices.pc) {
      continueElem = cartCheckoutContinue;
    }
    contElemIsVisible = await this.page
      .locator(continueElem)
      .first()
      .isVisible();

    if (contElemIsVisible) {
      await this.page.locator(continueElem).first().click();
      if (
        this.siteData.executionContext.platform === Util.devices.mobile &&
        mobCartCheckoutOptional
      ) {
        await this.page.locator(mobCartCheckoutOptional).first().click();
      }
    } else {
      console.log(
        'Cart does not have any older products in it, so merge cart not applicable here!'
      );
    }
    return contElemIsVisible;
  };

  /**
   * used to get transaction Id
   * @param {*} transIdLocator - Pass Element xpath
   */
  getTransactionId = async (transIdLocator) => {
    if (transIdLocator) {
      let transId = {};
      const tempTransIdElem = this.page.locator(transIdLocator);
      const isElementAvailable = (await tempTransIdElem.count()) > 0;
      if (isElementAvailable) {
        let temp = await tempTransIdElem.textContent();
        // Perlgem sites
        if (temp.includes('page_data,')) {
          temp = temp.split('page_data,')[1];
          temp = temp.split(' );')[0].trim();
        }
        // clinique
        else if (temp.includes('perlgem =')) {
          temp = temp.split('perlgem =')[1];
          temp = temp.trim();
        } else if (temp.includes('page_data=')) {
          temp = temp.split('page_data=')[1];
          temp = temp.trim();
        }
        // RCO sites
        else if (temp.includes('page_data =')) {
          temp = temp.split('page_data =')[1];
          if (temp.includes('// To prevent IE')) {
            temp = temp.split('// To prevent IE')[0];
          }
          temp = temp.trim();
        } else {
          console.log(
            `${this.siteData.brandLocale} : Couldnt generate Trans Id due to Syntax error in JSON format`
          );
        }
        transId = JSON.parse(temp);
        console.log(
          `${this.siteData.brandLocale} - Transaction ID : ` +
            transId.data.transaction.trans.TRANS_ID
        );
        console.log(
          `${this.siteData.brandLocale} - Transaction ORDER ID : ` +
            transId.data.transaction.order.TRANS_ORDER_ID
        );
      } else {
        console.log(
          `${this.siteData.brandLocale} : Text content locator is not available`
        );
      }
    }
  };

  /**
   * Apply offer code and validate delivery details.
   * @async
   * @function applyOfferCode
   * @param {string} cartOfferCodeElem - Element identifier for the cart offer code.
   * @param {string} cartOfferApplyElem - Element identifier for applying the cart offer.
   * @param {string} cartDeliveryPriceElem - Element identifier for the cart delivery price.
   * @param {string} cartDeliveryTypeElem - Element identifier for the cart delivery type.
   * @param {string} cartOfferCode - Offer code to be applied to the cart.
   * @param {string} cartOfferMessage - Message related to the applied cart offer.
   * @param {number} cartDeliveryCost - Cost related to cart delivery.
   * @param {string} cartDeliveryType - Type of delivery for the cart.
   * @returns {Promise<void>}
   */
  applyOfferCode = async ({
    cartOfferCodeElem,
    cartOfferApplyElem,
    cartDeliveryPriceElem,
    cartDeliveryTypeElem,
    cartOfferCode,
    cartOfferMessage,
    cartDeliveryCost,
    cartDeliveryType,
  }) => {
    await this.page.locator(cartOfferCodeElem).fill(cartOfferCode);
    await this.page.locator(cartOfferApplyElem).first().click();
    await this.screenshot();
    const pageContent = await this.page.content();

    if (pageContent.includes(cartOfferMessage)) {
      console.log('Success message found!');
    } else {
      console.log('Success message not found.');
    }

    if (cartDeliveryPriceElem) {
      let temp = this.page.locator(cartDeliveryPriceElem);
      await expect(temp).toHaveText(cartDeliveryCost);

      temp = this.page.locator(cartDeliveryTypeElem);
      await expect(temp).toHaveText(cartDeliveryType);

      console.log('Offer code applied successfully');
      await this.screenshot();
    }
  };

  /**
   * Selects a delivery type in the cart page using a dropdown and verifies the selection.
   * @async
   * @function deliveryTypeInCart
   * @param {string} cartDeliveryTypeElem - The selector for the cart delivery type dropdown.
   * @param {string} cartDeliveryTypeValueElem - The selector for the element where the updated value is reflected.
   * @param {string} cartDeliveryTypeOption - The option to be selected in the delivery type dropdown.
   * @param {string} cartDeliveryType - The expected delivery type value.
   * @returns {Promise<void>}
   */
  deliveryTypeInCart = async (
    cartDeliveryTypeElem,
    cartDeliveryTypeValueElem,
    cartDeliveryTypeOption,
    cartDeliveryType
  ) => {
    if (cartDeliveryTypeElem) {
      await this.page
        .locator(cartDeliveryTypeElem)
        .selectOption(cartDeliveryTypeOption);

      // Wait for some time to allow the page to update
      await this.page.waitForTimeout(5000);

      const deliveryTypeElement = await this.page.locator(
        cartDeliveryTypeValueElem
      );

      // Get the text content of the updated value element
      const temp = await deliveryTypeElement.textContent();
      const deliveryType = temp.toUpperCase();

      // Assert that the updated value matches the expected value
      expect(deliveryType).toContain(cartDeliveryType);
      console.log(deliveryType + 'selected successfully in cart page');
    } else {
      console.log(
        'Selecting delivery type on cart page is not applicable for this brand/locale'
      );
    }
  };

  /**
   * Selects a donation in viewcart page and verifies the donation selection.
   * @async
   * @function addDonation
   * @param {string} cartDonationValueElem - Element identifier for the cart donation price.
   * @param {string} cartAddDonationElem - Element identifier to expand the add donation section.
   * @param {string} cartConfirmDonationElem - Element identifier for the confirm donation addition.
   * @param {string} cartDonationOrderSummaryElem - Element identifier for the donation under order summary.
   * @returns {Promise<void>}
   */
  addDonation = async (
    cartDonationValueFirstElem,
    cartAddDonationElem,
    cartConfirmDonationElem,
    cartDonationOrderSummaryElem
  ) => {
    // await this.page.waitForTimeout(10000);
    await this.page.waitForLoadState('domcontentloaded');
    if (cartDonationValueFirstElem) {
      if (cartAddDonationElem) {
        await expect(
          await this.page.locator(cartAddDonationElem)
        ).toBeVisible();
        await this.page.locator(cartAddDonationElem).first().click();
      }
      await expect(
        await this.page.locator(cartDonationValueFirstElem)
      ).toBeVisible();
      await this.page.locator(cartDonationValueFirstElem).first().click();
      await this.page.waitForTimeout(3000);
      await this.page.waitForLoadState('domcontentloaded');
      if (cartConfirmDonationElem) {
        await expect(
          await this.page.locator(cartConfirmDonationElem)
        ).toBeVisible();
        await this.page.locator(cartConfirmDonationElem).first().click();
        await this.page.waitForTimeout(3000);
      }
      await expect(
        this.page.locator(cartDonationOrderSummaryElem)
      ).toBeVisible();
      console.log(messages.donationAdded);
    }
  };

  /**
   * Clicks on the mobile view cart continue element if it exists.(Applicable only for mobile drawer)
   *
   * @param {string} mobViewCartContinueElem - The locator for the mobile view cart continue element.
   * @returns {Promise<void>} - A Promise that resolves when the click action is completed.
   */
  mobViewCartContinue = async (mobViewCartContinueElem) => {
    if (mobViewCartContinueElem) {
      console.log('Reached to mobile view cart');
      await this.page
        .locator(mobViewCartContinueElem)
        .first()
        .click({ force: true });
    }
  };

  /**
   * Navigates to the page with the URL obtained from the site data appended with the viewCartElem.
   *
   * @param {string} viewCartElem - The element or URL path to navigate to.
   * @returns {Promise<void>} - A Promise that resolves when the page navigation is completed.
   */
  navigateToPage = async (viewCartElem, targetUrl) => {
    if (viewCartElem) {
      await this.page.goto(targetUrl + viewCartElem);
    }
  };

  /**
   * Provide Click and Collect details in the cart.
   *
   * @async
   * @param {string} cartClickCollectElem - The selector for the click and collect element.
   * @param {string} cartCCDeliveryTypeElem - The selector for the click and collect delivery type element.
   * @param {string} cartCCDeliveryType - The click and collect delivery type.
   * @returns {Promise<void>} A Promise that resolves when the click and collect details are provided successfully.
   */
  provideClickCollectDetailsInCart = async (
    cartClickCollectElem,
    cartCCDeliveryTypeElem,
    cartCCDeliveryType
  ) => {
    if (cartClickCollectElem) {
      await this.page.waitForSelector(cartClickCollectElem);
      await this.page.locator(cartClickCollectElem).dispatchEvent('click');

      await this.page.waitForTimeout(5000);

      const temp = this.page.locator(cartCCDeliveryTypeElem);
      await expect(temp).toHaveText(cartCCDeliveryType);
      console.log(
        'click and collect delivery type selected successfully in view cart!'
      );
    }
  };
  addPaidLoyaltyMembershipToCart = async (addToCartParentElem) => {
    await this.page.locator(addToCartParentElem).getByRole('button').click();
  };

  /**
   * Retrieves the purchase  & discount amount from the cart page
   * @async
   * @function purchaseAmount
   * @param {string} cartPurchaseAmountElem - The locator for the element containing the purchase amount in the cart.
   * @param {string} cartDiscountAmountElem - The locator for the element containing the discount amount in the cart.
   * @returns {Promise<number>} The purchase amount after applying any discounts.
   */
  purchaseAmount = async (cartPurchaseAmountElem, cartDiscountAmountElem) => {
    let purchaseAmnt = 0;
    if (cartPurchaseAmountElem) {
      await this.page.waitForLoadState('domcontentloaded');
      let purchaseAmountText = await this.page
        .locator(cartPurchaseAmountElem)
        .textContent();
      purchaseAmountText = purchaseAmountText.substring(
        purchaseAmountText.lastIndexOf(this.testData.curSymbol) + 1
      );
      purchaseAmnt = parseFloat(purchaseAmountText);
      await this.screenshot();
      if (cartDiscountAmountElem) {
        const discountAmountText = await this.page
          .locator(cartDiscountAmountElem)
          .textContent();
        const discountAmountValue = discountAmountText.replace(/[^0-9.]/g, '');
        const discountPrice = parseFloat(discountAmountValue);
        purchaseAmnt = purchaseAmnt - discountPrice;
        await this.screenshot();
      }
      console.log('Purchase amount value', purchaseAmnt);
    }
    return purchaseAmnt;
  };

  /**
   * Retrieves loyalty points from the cart page and performs validation.
   * @async
   * @function cartPageLoyaltyPoint
   * @param {string} cartLoyaltyPointElem - The locator for the element containing loyalty points on the cart page.
   * @param {string} offerAppliedIdElem - The locator for the element containing the applied offer ID.
   * @param {string} offerApliedLowerEnvIdElem - The locator for the element containing the lower environment's applied offer ID.
   * @param {string} offerViewCartPageUrlElem - The locator for the element containing the URL of the view cart page.
   * @param {string} cartPurchaseAmountElem - The locator for the element containing the purchase amount in the cart.
   * @param {string} cartDiscountAmountElem - The locator for the element containing the discount amount in the cart.
   * @returns {Promise<void>}
   */
  cartPageLoyaltyPoint = async ({
    cartLoyaltyPointElem,
    offerAppliedIdElem,
    offerAppliedLowerEnvIdElem,
    offerViewCartPageUrlElem,
    cartPurchaseAmountElem,
    cartDiscountAmountElem,
  }) => {
    if (cartLoyaltyPointElem) {
      const testPntTotal = await this.offerswel.validateTestoffers(
        offerAppliedIdElem,
        offerAppliedLowerEnvIdElem
      );
      console.log('Testpoint total:', testPntTotal);
      const validationResults = await this.offerswel.welcomeofferValidation(
        offerAppliedIdElem,
        offerAppliedLowerEnvIdElem
      );
      await this.offerswel.navigateCartPage(offerViewCartPageUrlElem);
      const purchaseValue = await this.purchaseAmount(
        cartPurchaseAmountElem,
        cartDiscountAmountElem
      );
      const tierStatus = this.testData.TIER1STATUS;
      const earnPnt = this.testData.EARNPNT1;
      console.log('TierStatus:', tierStatus);
      const offerStatusFlag = validationResults.offerAppliedFlag;
      const appliedOffer = validationResults.appliedOffers;
      console.log('offerAppliedFlag:', validationResults.offerAppliedFlag);
      console.log('appliedOffers:', validationResults.appliedOffers);
      const loyaltyPointStr = await this.page
        .locator(cartLoyaltyPointElem)
        .textContent();
      let loyPointsCart = loyaltyPointStr.replace(/\D/g, '');
      loyPointsCart = parseInt(loyPointsCart);
      const loyPointsCal = this.loyaltyPointCalculation(
        purchaseValue,
        testPntTotal,
        earnPnt,
        offerStatusFlag,
        appliedOffer
      );
      const loyPointsCalc = Math.ceil(loyPointsCal.loyPoint);
      const availableLoyPoints = this.availPointCalculation(purchaseValue);
      console.log('Available points ', availableLoyPoints);
      console.log('loyalty points total', loyPointsCal.totalPnt);
      console.log(messages.loyaltyPointEarned + loyPointsCalc);
      if (loyPointsCart === loyPointsCalc) {
        console.log(messages.loyaltyPointCalSuccess);
      } else {
        throw new Error(messages.loyaltyPointCalFail);
      }
    }
  };
}
module.exports = ViewCartPageModel;
