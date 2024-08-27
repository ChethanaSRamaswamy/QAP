const ViewCartPageModel = require('../../pagemodels/cart/ViewCartPageModel');
const PaymentPageModel = require('../../pagemodels/payment/PaymentPageModel');
const ScenarioModel = require('../ScenarioModel');
const PaymentScenarioModel = require('../payment/PaymentScenarioModel');
const ShipmentPageModel = require('../../pagemodels/shipment/ShipmentPageModel');

class SaturdayDeliveryTypeScenarioModel extends ScenarioModel {
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
   * Selects the  Saturday delivery type in the cart page using a dropdown and validate here itself.
   * This function applicable for non-rco/legacy brands.
   * @async
   * @function selectSaturdayDeliveryInCart
   * @returns {Promise<void>} A Promise that resolves after selecting the delivery type in the cart.
   */
  selectSaturdayDeliveryInCart = async () => {
    const cart = new ViewCartPageModel(this.testInfo, this.page, this.data);

    await cart.deliveryTypeInCart(
      this.locatorData.cartDeliveryType,
      this.locatorData.cartSaturdayDeliveryElem,
      this.testData.cartSaturdayDeliveryTypeOption,
      this.testData.saturdayDeliveryType
    );
  };

  /**
   * Selects the Saturday delivery type in the checkout page.
   * @async
   * @function selectSaturdayDeliveryInCheckout
   * @returns {Promise<void>} - Promise that resolves after selecting the delivery type in the checkout page.
   */
  selectSaturdayDeliveryInCheckout = async () => {
    const ship = new ShipmentPageModel(this.testInfo, this.page, this.data);
    await ship.deliveryTypeInCheckout(
      this.locatorData.checkoutSaturdayDeliveryElem
    );
  };

  /**
   * Validates the selected delivery type in the payment page only for rco brands.
   *
   * @function
   * @async
   * @name validateDeliveryTypeInPayment
   * @returns {Promise<void>} A promise that resolves when the validation is complete.
   */
  validateDeliveryTypeInPayment = async () => {
    const payment = new PaymentPageModel(this.testInfo, this.page, this.data);

    await payment.deliveryTypeValidation(
      this.locatorData.paymentDeliveryTypeElem,
      this.testData.saturdayDeliveryType
    );
  };
}

module.exports = SaturdayDeliveryTypeScenarioModel;
