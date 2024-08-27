const PaymentPageModel = require('../../pagemodels/payment/PaymentPageModel');
const ScenarioModel = require('../ScenarioModel');
const OrderConfirmationPageModel = require('../../pagemodels/order/OrderConfirmationPageModel');
const PaymentScenarioModel = require('../payment/PaymentScenarioModel');
const Util = require('../../../../utilities/util');

// TODO: Add Logger

class GuestUserClearpayScenarioModel extends ScenarioModel {
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

  clearpayOrderPlace = async () => {
    await this.clearpayPayment();
  };

  clearpayPayment = async () => {
    const pay = new PaymentPageModel(this.testInfo, this.page, this.data);

    const clearpayData = {
      clearpayNotYouElem: this.locatorData.paymentClearpayNotYouLnkElem,
      clearpayEmailIdElem: this.locatorData.paymentClearpayEmailElem,
      clearpayEmailIdContinueElem:
        this.locatorData.paymentContClearpayEmailElem,
      clearpayPasswordElem: this.locatorData.paymentClearpayPasswordElem,
      clearpayPasswordContinueElem:
        this.locatorData.paymentContClearpayPasswordElem,
      clearpayConfirmElem: this.locatorData.paymentContClearpayConfirmElem,
      clearpayAcceptCloseElem: this.locatorData.paymentAcceptCloseClearpayElem,
      clearpayEmailIdText: this.testData.paymentClearpayEmail,
      clearpayPasswordText: this.testData.paymentClearpayPasswrod,
    };

    await pay.selectClearpayPayment(
      this.locatorData.paymentSelectClearpayPaymentElem,
      this.locatorData.paymentClickClearpayCtaElem
    );

    await pay.clearpayOrder(clearpayData);
  };

  /**
   * Retrieves the order number if the environment is not PROD or PREPROD.
   *
   * @async
   * @function
   * @param {string} orderConfirmationMsgIdElem - The element locator for the order confirmation message.
   * @returns {Promise<void>} A Promise that resolves when the order confirmation message is retrieved.
   */
  paymentOrderConfirmationMsg = async () => {
    const orderConfirmation = new OrderConfirmationPageModel(
      this.testInfo,
      this.page,
      this.checkoutData
    );
    if (
      !(
        this.siteData.executionContext.environment.toLowerCase() ===
          Util.environments.prod ||
        this.siteData.executionContext.environment.toLowerCase() ===
          Util.environments.preprod
      )
    ) {
      await orderConfirmation.getOrderNumber(
        this.checkoutData.locatorData.orderConfirmationMsgIdElem
      );
    }
  };
}

module.exports = GuestUserClearpayScenarioModel;
