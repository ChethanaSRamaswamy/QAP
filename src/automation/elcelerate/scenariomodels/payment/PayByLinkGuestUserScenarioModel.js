const ScenarioModel = require('../ScenarioModel');
const ViewCartPageModel = require('../../pagemodels/cart/ViewCartPageModel');
const PaymentPageModel = require('../../pagemodels/payment/PaymentPageModel');
const OrderConfirmationPageModel = require('../../pagemodels/order/OrderConfirmationPageModel');
const PaymentScenarioModel = require('../payment/PaymentScenarioModel');

class PayByLinkGuestUserScenarioModel extends ScenarioModel {
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
   * Verify user can enter STD offer code in the view cart page.
   * @async
   * @method
   * @memberof PayByLinkGuestUserScenarioModel
   */
  applyOfferCodeInCart = async () => {
    const applyOffer = new ViewCartPageModel(
      this.testInfo,
      this.page,
      this.data
    );

    const offerCodeData = {
      cartOfferCodeElem: this.locatorData.cartOfferCodeElem,
      cartOfferApplyElem: this.locatorData.cartOfferApplyElem,
      cartDeliveryPriceElem: this.locatorData.cartDeliveryPriceElem,
      cartDeliveryTypeElem: this.locatorData.cartOfferDeliveryTypeElem,
      cartOfferCode: this.testData.cartOfferCode,
      cartOfferMessage: this.testData.cartOfferMessage,
      cartDeliveryCost: this.testData.cartDeliveryCost,
      cartDeliveryType: this.testData.cartDeliveryType,
    };

    await applyOffer.applyOfferCode(offerCodeData);
  };

  /**
   * Verify user can make PBL payment.
   * @async
   * @method
   * @memberof PayByLinkGuestUserScenarioModel
   */
  payByLinkPayment = async () => {
    const payByLink = new PaymentPageModel(this.testInfo, this.page, this.data);
    const orderConfirmation = new OrderConfirmationPageModel(
      this.testInfo,
      this.page,
      this.data
    );

    await payByLink.validatePayByLink(this.locatorData.paymentPayByLinkElem);
    await orderConfirmation.getOrderNumber(
      this.checkoutData.locatorData.orderConfirmationMsgIdElem
    );
  };
}

module.exports = PayByLinkGuestUserScenarioModel;
