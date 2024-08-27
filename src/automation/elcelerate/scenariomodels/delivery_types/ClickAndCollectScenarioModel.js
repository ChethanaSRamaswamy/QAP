const ScenarioModel = require('../ScenarioModel');
const ClickAndCollectPageModel = require('../../pagemodels/shipment/ClickAndCollectPageModel');
const ViewCartPageModel = require('../../pagemodels/cart/ViewCartPageModel');
const PaymentScenarioModel = require('../payment/PaymentScenarioModel');

class ClickAndCollectScenarioModel extends ScenarioModel {
  constructor(testInfo, page, paymentData, checkoutData) {
    super(testInfo, page, paymentData);
    this.checkoutData = checkoutData;
    this.payment = new PaymentScenarioModel(testInfo, page, checkoutData);
  }

  /**
   * Includes a product from a product category tool into the payment.
   * @async
   * @function includeProductFromProdcatTool
   * @returns {Promise<void>}
   */
  includeProductFromProdcatTool = async () => {
    await this.payment.addProductFromProdcatUrl();
  };

  /**
   * Clicks on the Click and Collect Radio Button in the cart.
   *
   * @async
   * @function clickCollectDetailsInCart
   * @returns {Promise<void>} A Promise that resolves once the operation is complete.
   * @throws {Error} Throws an error if there is an issue providing Click and Collect details.
   */
  clickCollectDetailsInCart = async () => {
    const cartClickCollect = new ViewCartPageModel(
      this.testInfo,
      this.page,
      this.data
    );

    await cartClickCollect.provideClickCollectDetailsInCart(
      this.locatorData.cartClickCollectElem,
      this.locatorData.cartCCDeliveryTypeElem,
      this.testData.cartCCDeliveryType
    );
  };

  /**
   * Clicks on Click and Collect details during the checkout process.
   *
   * @async
   * @function
   * @returns {Promise<void>} A Promise that resolves once the operation is complete.
   * @throws {Error} Throws an error if there is an issue with the Click and Collect details in the checkout process.
   */
  clickCollectDetailsInCheckout = async () => {
    const clickCollect = new ClickAndCollectPageModel(
      this.testInfo,
      this.page,
      this.data
    );

    const clickCollectData = {
      shipClickCollectElem: this.locatorData.shipClickCollectElem,
      shipDeliveryFirstNameElem: this.locatorData.shipDeliveryFirstNameElem,
      shipDeliveryLastNameElem: this.locatorData.shipDeliveryLastNameElem,
      shipDeliveryPhoneElem: this.locatorData.shipDeliveryPhoneElem,
      shipSelectCollectPointElem: this.locatorData.shipSelectCollectPointElem,
      shipFindStoreElem: this.locatorData.shipFindStoreElem,
      shipSearchStoreElem: this.locatorData.shipSearchStoreElem,
      shipSelectStoreElem: this.locatorData.shipSelectStoreElem,
      shipPurchaserFirstNameElem: this.locatorData.shipPurchaserFirstNameElem,
      shipPurchaserLastNameElem: this.locatorData.shipPurchaserLastNameElem,
      shipPurchaserMobileNumberElem:
        this.locatorData.shipPurchaserMobileNumberElem,
      shipContinueElem: this.locatorData.shipContinueElem,
      shipContinueToBillingElem: this.locatorData.shipContinueToBillingElem,
      shipShowStoresElem: this.locatorData.shipShowStoresElem,
      shipZipCode: this.testData.shipZipCode,
      shipPurchaserFirstName: this.testData.shipPurchaserFirstName,
      shipPurchaserLastName: this.testData.shipPurchaserLastName,
      shipPurchaserMobileNumber: this.testData.shipPurchaserMobileNumber,
      shipDeliveryFirstName: this.testData.shipDeliveryFirstName,
      shipDeliveryLastName: this.testData.shipDeliveryLastName,
      shipDeliveryPhone: this.testData.shipDeliveryPhone,
      shipFindStore: this.testData.shipFindStore,
    };

    await clickCollect.provideClickCollectDetailsInCheckout(clickCollectData);
  };

  /**
   * Clicks to collect billing details during the checkout process.
   *
   * @async
   * @function
   * @returns {Promise<void>} A Promise that resolves once the operation is complete.
   * @throws {Error} Throws an error if there is an issue with collecting billing details during checkout.
   */
  clickCollectBillingDetails = async () => {
    const bill = new ClickAndCollectPageModel(
      this.testInfo,
      this.page,
      this.data
    );

    const clickCollectBillingData = {
      shipBillingToElem: this.locatorData.shipBillingToElem,
      shipBillingToSelectElem: this.locatorData.shipBillingToSelectElem,
      shipBillingFirstNameElem: this.locatorData.shipBillingFirstNameElem,
      shipBillingLastNameElem: this.locatorData.shipBillingLastNameElem,
      shipBillingAddressOneElem: this.locatorData.shipBillingAddressOneElem,
      shipBillingAddressTwoElem: this.locatorData.shipBillingAddressTwoElem,
      shipBillingZipCodeElem: this.locatorData.shipBillingZipCodeElem,
      shipBillingPhoneElem: this.locatorData.shipBillingPhoneElem,
      shipBillingContinueElem: this.locatorData.shipBillingContinueElem,
      shipSaveBillingElem: this.locatorData.shipSaveBillingElem,
      shipBillingFirstName: this.testData.shipBillingFirstName,
      shipBillingLastName: this.testData.shipBillingLastName,
      shipBillingAddressOne: this.testData.shipBillingAddressOne,
      shipBillingAddressTwo: this.testData.shipBillingAddressTwo,
      shipBillingZipCode: this.testData.shipBillingZipCode,
      shipBillingPhone: this.testData.shipBillingPhone,
    };

    await bill.clickCollectBillingDetails(clickCollectBillingData);
  };
}

module.exports = ClickAndCollectScenarioModel;
