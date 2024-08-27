const ScenarioModel = require('../ScenarioModel');
const PaymentPageModel = require('../../pagemodels/payment/PaymentPageModel');
const OrderConfirmationPageModel = require('../../pagemodels/order/OrderConfirmationPageModel');
const PaymentScenarioModel = require('../payment/PaymentScenarioModel');
const PayPalPageModel = require('../../pagemodels/payment/PayPalPageModel');
const Util = require('../../../../utilities/util');

// TODO: Add Logger

class GuestUserPayPalScenarioModel extends ScenarioModel {
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
   * Including a fucntion to select paypal payment in payment review page
   * @async
   * @function selectPayPalPayment
   * @returns {Promise<void>}
   */

  selectPayPalPayment = async () => {
    const PayPalSelection = new PaymentPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    await PayPalSelection.selectPayPal(
      this.locatorData.paymentPayPalSelectionElem,
      this.testData.isRCO
    );
  };

  /**
   * Provides PayPal credentials to access the PayPal portal for authentication.
   * @async
   * @function accessPayPalPortal
   * @returns {Promise<void>}
   */

  accessPayPalPortal = async () => {
    const accessPayPal = new PayPalPageModel(
      this.testInfo,
      this.page,
      this.data
    );

    const payPalData = {
      payPalIframeElem: this.locatorData.payPalIframeElem,
      payPalViewCartElem: this.locatorData.payPalElem,
      payPalEmailElem: this.locatorData.payPalEmailElem,
      payPalEmailNextElem: this.locatorData.payPalEmailNextElem,
      payPalPasswordElem: this.locatorData.payPalPasswordElem,
      payPalLoginElem: this.locatorData.payPalLoginElem,
      payPalSubmitElem: this.locatorData.payPalSubmitElem,
      payPalEmail: this.testData.payPalEmail,
      payPalPassword: this.testData.payPalPassword,
    };
    await accessPayPal.accessPayPalPortal(payPalData);
  };

  paymentOrderConfirmationMsg = async () => {
    const orderConfirmation = new OrderConfirmationPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    const isRCO = this.testData.isRCO;
    if (
      isRCO === 'FALSE' &&
      this.siteData.executionContext.environment.toLowerCase() ===
        Util.environments.prod
    ) {
      console.log('Not able to place order with PayPal for this brand/locale');
    } else {
      await orderConfirmation.getOrderNumber(
        this.checkoutData.locatorData.orderConfirmationMsgIdElem
      );
    }
  };
}
module.exports = GuestUserPayPalScenarioModel;
