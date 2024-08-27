const PaymentPageModel = require('../../pagemodels/payment/PaymentPageModel');
const ScenarioModel = require('../ScenarioModel');
const Util = require('../../../../utilities/util');
const ViewCartPageModel = require('../../pagemodels/cart/ViewCartPageModel');
const OrderConfirmationPageModel = require('../../pagemodels/order/OrderConfirmationPageModel');
const PaymentScenarioModel = require('../../scenariomodels/payment/PaymentScenarioModel');
const PayPalPageModel = require('../../pagemodels/payment/PayPalPageModel');
const ReviewPageModel = require('../../pagemodels/review/ReviewPageModel');

class GuestUserExpressPaypalScenarioModel extends ScenarioModel {
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
   * Navigate to the view cart page (kind of reload) using the ViewCartPageModel instance.
   *
   * @returns {Promise<void>} - A Promise that resolves when the view cart page is successfully reloaded.
   */
  reloadViewCartPage = async () => {
    const expressPayPal = new ViewCartPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    const targetUrl = this.siteData.executionContext.url;
    await expressPayPal.navigateToPage(
      this.checkoutData.locatorData.viewCartUrlElem,
      targetUrl
    );
  };

  /**
   * Selects the Express PayPal payment method only for mobile.
   *
   * @returns {Promise<void>} - A Promise that resolves when the Express PayPal payment method is selected.
   */
  selectExpressPayPalPayment = async () => {
    const expressPayPal = new ViewCartPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    if (this.siteData.executionContext.platform !== Util.devices.pc) {
      await expressPayPal.mobViewCartContinue(
        this.locatorData.mobViewCartContinueElem
      );
    }
  };

  /**
   * Provides PayPal credentials to access the PayPal portal for authentication.
   * @async
   * @function providePayPalCreds
   * @returns {Promise<void>}
   */
  providePayPalCreds = async () => {
    const accessPayPal = new PayPalPageModel(
      this.testInfo,
      this.page,
      this.data
    );

    const payPalData = {
      payPalIframeElem: this.locatorData.expressPayPalIframeElem,
      payPalViewCartElem: this.locatorData.expressPayPalViewCartElem,
      payPalEmailElem: this.locatorData.payPalEmailElem,
      payPalEmailNextElem: this.locatorData.payPalEmailNextElem,
      payPalPasswordElem: this.locatorData.payPalPasswordElem,
      payPalLoginElem: this.locatorData.payPalLoginElem,
      payPalSubmitElem: this.locatorData.payPalSubmitElem,
      payPalEmail: this.testData.payPalEmail,
      payPalPassword: this.testData.payPalPassword,
    };

    if (
      !(
        this.siteData.executionContext.environment.toLowerCase() ===
          Util.environments.prod ||
        this.siteData.executionContext.environment.toLowerCase() ===
          Util.environments.preprod
      )
    ) {
      console.log('Entered successfully');
      await accessPayPal.accessPayPalPortal(payPalData);
    } else {
      console.log('This step is not applicable for PREPROD and PROD');
    }
  };

  /**
   * Reviews payment details and proceeds to the next step if the environment is not production or pre-production.
   * Otherwise, logs a message indicating that this step is not applicable for production or pre-production environments.
   * @async
   * @function reviewPayDetails
   * @returns {Promise<void>}
   */
  reviewPayDetails = async () => {
    if (
      !(
        this.siteData.executionContext.environment.toLowerCase() ===
          Util.environments.prod ||
        this.siteData.executionContext.environment.toLowerCase() ===
          Util.environments.preprod
      )
    ) {
      const review = new ReviewPageModel(this.testInfo, this.page, this.data);
      // await this.waitFor(8000);
      if (this.siteData.executionContext.platform === Util.devices.pc) {
        await review.reviewOrder(
          this.checkoutData.locatorData.reviewTermsCondElem,
          this.checkoutData.locatorData.reviewContinueElem
        );
      } else {
        await review.reviewOrder(
          this.checkoutData.locatorData.mobReviewTermsCondElem,
          this.checkoutData.locatorData.mobReviewContinueElem
        );
      }
    } else {
      console.log('This step is not applicable for PREPROD and PROD');
    }
  };

  /**
   * Continues the checkout process with Express PayPal if the environment is not production or pre-production.
   * Otherwise, logs a message indicating that this step is not applicable for production or pre-production environments.
   * @async
   * @function continueWithExpressPaypal
   * @returns {Promise<void>}
   */
  continueWithExpressPayPal = async () => {
    const expressPaypalContinue = new PaymentPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    if (
      !(
        this.siteData.executionContext.environment.toLowerCase() ===
          Util.environments.prod ||
        this.siteData.executionContext.environment.toLowerCase() ===
          Util.environments.preprod
      )
    ) {
      await expressPaypalContinue.continueWithExpressPayPalSelection(
        this.locatorData.paymentContinueWithPayPalElem
      );
      console.log('clicked on continue with paypal button');
    } else {
      console.log('This Step is not applicable for PROD and PREPROD');
    }
  };

  /**
   * Retrieves the order confirmation message after completing the payment process.
   * @async
   * @function paymentOrderConfirmationMsg
   * @returns {Promise<void>}
   */
  paymentOrderConfirmationMsg = async () => {
    const orderConfirmation = new OrderConfirmationPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    console.log('navigating to order confirmation page');
    if (
      !(
        this.siteData.executionContext.environment.toLowerCase() ===
          Util.environments.prod ||
        this.siteData.executionContext.environment.toLowerCase() ===
          Util.environments.preprod
      )
    ) {
      console.log('navigated to order confirmation page');
      await this.page.waitForTimeout(5000);
      await orderConfirmation.getOrderNumber(
        this.checkoutData.locatorData.orderConfirmationMsgIdElem
      );
    } else {
      console.log(
        'Not Able to place Test Order on Prod or Preprod with Express Paypal'
      );
    }
  };
  expressCheckoutContinueSamplePage = async () => {
    await this.expressSelectSample();
  };
  expressSelectSample = async () => {
    const expressSample = new PayPalPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await expressSample.continueToSamplePage(
        this.locatorData.sampleContinue1stElem,
        this.locatorData.sampleContinue2ndElem,
        this.locatorData.sampleContinue3rdElem,
        this.locatorData.sampleScrollFlagElem
      );
    } else {
      await expressSample.continueToSamplePage(
        this.locatorData.mobSampleContinue1stElem,
        this.locatorData.mobSampleContinue2ndElem,
        this.locatorData.mobSampleContinue3rdElem,
        this.locatorData.sampleScrollFlagElem
      );
    }
  };
}

module.exports = GuestUserExpressPaypalScenarioModel;
