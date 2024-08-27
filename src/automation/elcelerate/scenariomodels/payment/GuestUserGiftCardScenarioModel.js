const ScenarioModel = require('../ScenarioModel');
const GiftCardPageModel = require('../../pagemodels/payment/GiftCardPageModel');
const OrderConfirmationPageModel = require('../../pagemodels/order/OrderConfirmationPageModel');
const PaymentScenarioModel = require('../payment/PaymentScenarioModel');
const Util = require('../../../../utilities/util');

class GuestUserGiftCardScenarioModel extends ScenarioModel {
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
   * @memberof GuestUserGiftCardScenarioModel
   */

  payWithGiftCard = async () => {
    const giftcard = new GiftCardPageModel(this.testInfo, this.page, this.data);
    if (
      !(
        this.siteData.executionContext.environment === Util.environments.prod ||
        this.siteData.executionContext.environment === Util.environments.preprod
      )
    ) {
      const giftCardData = {
        paymentSelectGiftCardElem: this.locatorData.paymentSelectGiftCardElem,
        paymentGiftCardNumberElem: this.locatorData.paymentGiftCardNumberElem,
        paymentGiftCardPinElem: this.locatorData.paymentGiftCardPinElem,
        paymentApplyGiftCardElem: this.locatorData.paymentApplyGiftCardElem,
        paymentGiftCardTermsandPolicyElem:
          this.locatorData.paymentGiftCardTermsandPolicyElem,
        paymentCompleteGiftCardElem:
          this.locatorData.paymentCompleteGiftCardElem,
        paymentGiftCardNumber: this.testData.paymentGiftCardNumber,
        paymentGiftCardPin: this.testData.paymentGiftCardPin,
      };
      await giftcard.selectGiftCardOption(giftCardData);
    } else {
      console.log('This Step is not applicable so skipping this step');
    }
  };

  /**
   * Asynchronous function for handling payment order confirmation messages.
   *
   * @async
   * @function
   * @memberof GuestUserGiftCardScenarioModel
   * @name paymentOrderConfirmationMsg
   * @returns {Promise<void>} A Promise that resolves when the order confirmation process is complete.
   */
  paymentOrderConfirmationMsg = async () => {
    const orderConfirmation = new OrderConfirmationPageModel(
      this.testInfo,
      this.page,
      this.checkoutData
    );

    if (
      !(
        this.siteData.executionContext.environment === Util.environments.prod ||
        this.siteData.executionContext.environment === Util.environments.preprod
      )
    ) {
      await orderConfirmation.getOrderNumber(
        this.checkoutData.locatorData.orderConfirmationMsgIdElem
      );
    } else {
      console.log(
        'Not Able to place Test Order on Prod or Preprod with GiftCard'
      );
    }
  };
}
module.exports = GuestUserGiftCardScenarioModel;
