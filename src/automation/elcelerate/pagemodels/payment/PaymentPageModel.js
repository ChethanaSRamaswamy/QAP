const { expect } = require('@playwright/test');
const PageModel = require('../PageModel');
const CreditCardPageModel = require('./CreditCardPageModel');
const ClearpayPageModel = require('./ClearpayPageModel');
const BoletoPageModel = require('./BoletoPageModel');
const PayPalPageModel = require('./PayPalPageModel');

class PaymentPageModel extends PageModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }

  /**
   * Selects the payment method and performs related actions on the payment page.
   *
   * @param {string} paymentSelectPaymentElem - Locator for the element to select the payment method.
   * @param {string} paymentTermsCondElem - Locator for the element related to payment terms and conditions (optional).
   * @param {string} paymentCardDropDownElem - Locator for the dropdown to select the payment card type (optional).
   * @param {string} paymentContinueElem - Locator for the element to continue with the payment (optional).
   * @param {string} paymentCardTypeElem - Locator for the element to select the payment card type (optional).
   * @param {string} paymentPageUrl - Expected URL of the payment page after completing the payment process.
   * @returns {Promise<void>} - A Promise that resolves after selecting the payment method and performing related actions.
   */

  // TODO: Disabling max-params rule for existing functions to allow
  // lint checks to pass. This will be addressed in QAP-2666
  // eslint-disable-next-line max-params
  selectPayment = async (
    paymentSelectPaymentElem,
    paymentTermsCondElem,
    paymentCardDropDownElem,
    paymentContinueElem,
    paymentCardTypeElem,
    paymentPageUrl,
    paymentTermsCondErrorMessageElem = ''
  ) => {
    if (paymentSelectPaymentElem) {
      // Call the function to select the payment option asynchronously.
      await this.pickPaymentOption(paymentSelectPaymentElem);
    }

    if (paymentTermsCondElem) {
      // Call the function to accept the payment terms and conditions asynchronously.
      await this.paymentTermsAndCondition(paymentTermsCondElem);
    }

    if (paymentCardDropDownElem) {
      await this.screenshot();
      const paySelect = this.page.locator(paymentCardDropDownElem);
      await paySelect.waitFor();
      await paySelect.selectOption(this.testData.CARDTYPE);
    }

    if (paymentContinueElem) {
      await this.page.locator(paymentContinueElem).first().click();
      if (paymentTermsCondErrorMessageElem) {
        const errorMessage = await this.page.locator(
          paymentTermsCondErrorMessageElem
        );

        // Check if the locator is present on the page
        let isErrorMessageFound = await errorMessage.count();
        const maxAttempts = 5;
        let attempt = 1;
        while (attempt <= maxAttempts) {
          if (isErrorMessageFound > 0) {
            await this.pickPaymentOption(paymentSelectPaymentElem);
            await this.paymentTermsAndCondition(paymentTermsCondElem);
            await this.page.locator(paymentContinueElem).first().click();

            // Introduce a delay before re-checking the element count
            await this.page.waitForTimeout(2000);

            // Re-check the element count after the action
            isErrorMessageFound = await errorMessage.count();
          }
          if (isErrorMessageFound === 0) {
            console.log(
              `${this.siteData.brandLocale} : 'Payment Terms & Condition' Checkbox is selected so, exiting the loop.`
            );
            break;
          } else {
            console.log(
              `${this.siteData.brandLocale} : Iteration ${attempt}: Payment Terms & Condition Checkbox is not selected so, iterating the loop.`
            );
          }
          attempt++;
        }
        if (attempt >= maxAttempts) {
          console.log(
            `${this.siteData.brandLocale} : Tried clicking Payment Terms & Condition Checkbox for ${attempt} attempts but still it failed`
          );
        }
      }
    }

    if (paymentCardTypeElem) {
      await this.screenshot();
      const paymentCardType = await this.page
        .locator(paymentCardTypeElem)
        .first();
      await paymentCardType.waitFor();
      await paymentCardType.click({ force: true });
    }

    if (paymentPageUrl) {
      await this.page.waitForURL(paymentPageUrl, {
        waitUntil: 'domcontentloaded',
      });
    }
  };

  /**
   * Selects a payment option from a available menu asynchronously.
   *
   * @param {string} paymentSelectPaymentElem - The locator of the payment type element. [This should specify the element
   *  representing the payment options, such as 'Cash On Delivery' or 'Credit Card'.]
   * @returns {Promise<void>} - A promise that resolves once the payment option is successfully selected.
   * @throws {Error} - Throws an error if the provided locator is invalid or if there's an issue during the selection process.
   */
  pickPaymentOption = async (paymentSelectPaymentElem) => {
    const paymentSelectType = await this.page
      .locator(paymentSelectPaymentElem)
      .first();
    await this.page.evaluate(() => {
      window.scrollBy(0, -500);
    });
    await paymentSelectType.waitFor();
    await paymentSelectType.click({ force: true });
  };

  /**
   * Executes the action to accept payment terms and conditions asynchronously.
   *
   * @param {string} paymentTermsCondElem - The locator of the element representing payment terms and conditions.
   * @returns {Promise<void>} - A promise that resolves once the payment terms and conditions are accepted.
   * @throws {Error} - Throws an error if there's an issue during the process or if the provided locator is invalid.
   */
  paymentTermsAndCondition = async (paymentTermsCondElem) => {
    const termsAndCond = this.page.locator(paymentTermsCondElem);
    await termsAndCond.waitFor();
    // await this.page.waitForTimeout(3000);
    await termsAndCond.dispatchEvent('click');
    await this.screenshot();
  };

  /**
   * Enters credit card details and places an order on the payment page.
   *
   * @param {string} enterCardNumber - Locator for the input field to enter the credit card number.
   * @param {string} enterCvvNumber - Locator for the input field to enter the CVV number.
   * @param {string} enterMonthYear - Locator for the input field to enter the credit card expiration month and year.
   * @param {string} enterMonth - Locator for the input field to enter the credit card expiration month directly (optional).
   * @param {string} enterYear - Locator for the input field to enter the credit card expiration year directly (optional).
   * @param {string} enterCardHolderName - Locator for the input field to enter the credit card holder name.
   * @param {string} ccPlaceOrderButton - Locator for the button to place the order.
   * @param {string[]} iframes - Array of CSS selectors or locators for iframes containing credit card-related elements.
   * @param {string} creditCardNumber - The credit card number to be entered.
   * @param {string} cvv - The CVV number to be entered.
   * @param {string} monthYear - The credit card expiration month and year to be entered (in the format "MM / YYYY").
   * @param {string} month - The credit card expiration month to be selected.
   * @param {string} year - The credit card expiration year to be selected.
   * @param {string} cardHolderName - The credit card holder name to be entered.
   * @param {string} toPlaceOrder - Flag indicating whether to place the order ('TRUE' or 'FALSE').
   * @param {string} elementTypeFlag - Flag indicating whether to enter Credit card Month & Year fields
   * via dropdown selectTag method or by using fill method.  ('TRUE' - selectTag or 'FALSE' - Fill).
   * @returns {Promise<void>} - A Promise that resolves after entering credit card details and placing the order.
   */

  // TODO: Disabling max-params rule for existing functions to allow
  // lint checks to pass. This will be addressed in QAP-2666
  // eslint-disable-next-line max-params
  ccPayOrder = async (
    enterCardNumber,
    enterCvvNumber,
    enterMonthYear,
    enterMonth,
    enterYear,
    enterCardHolderName,
    ccPlaceOrderButton,
    iframes,
    creditCardNumber,
    cvv,
    monthYear,
    month,
    year,
    cardHolderName,
    toPlaceOrder,
    elementTypeFlag
  ) => {
    const [
      iframeCreditCard,
      iframeMonthYear,
      iframeMonth,
      iframeYear,
      iframeCvv,
      iframePlaceOrder,
    ] = iframes;
    const creditDetails = new CreditCardPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    await creditDetails.creditCard(
      enterCardNumber,
      iframeCreditCard,
      creditCardNumber
    );
    await creditDetails.cvv(enterCvvNumber, iframeCvv, cvv);
    await creditDetails.creditCardMonthYear(
      enterMonthYear,
      iframeMonthYear,
      iframeMonth,
      iframeYear,
      enterMonth,
      enterYear,
      monthYear,
      month,
      year,
      elementTypeFlag
    );
    await creditDetails.creditCardHolderName(
      enterCardHolderName,
      cardHolderName
    );
    await creditDetails.placeOrderCheck(
      iframePlaceOrder,
      toPlaceOrder,
      ccPlaceOrderButton
    );
    await this.screenshot();
  };

  /**
   * Selects the PayPal payment option by dispatching a click event on the specified element.
   * @param {string} paymentPayPalSelectionElem - The locator for the PayPal payment selection element.
   * @param {boolean} isRCO - Indicates whether the function is being called from RCO or not.
   * @returns {Promise<void>} - A Promise that resolves when the PayPal payment option is successfully selected.
   */
  selectPayPal = async (paymentPayPalSelectionElem, isRCO) => {
    if (paymentPayPalSelectionElem) {
      if (isRCO === 'FALSE') {
        await this.page.evaluate(() => {
          window.scrollBy(0, document.body.scrollHeight);
        });
      }
      await this.page.waitForTimeout(5000);
      await this.page
        .locator(paymentPayPalSelectionElem)
        .dispatchEvent('click');
    }
  };

  /**
   * Performs a Clearpay order process, including entering email, password, and confirming the order.
   * @async
   * @function
   * @param {string} clearpayNotYouElem - Selector for the "Not You?" link element.
   * @param {string} clearpayEmailIdElem - Selector for the Clearpay email ID input field element.
   * @param {string} clearpayEmailIdContinueElem - Selector for the "Continue" button for email ID input.
   * @param {string} clearpayPasswordElem - Selector for the Clearpay password input field element.
   * @param {string} clearpayPasswordContinueElem - Selector for the "Continue" button for password input.
   * @param {string} clearpayConfirmElem - Selector for the "Confirm" button element.
   * @param {string} clearpayAcceptCloseElem - Selector for the "Accept & Close" button element.
   * @param {string} clearpayEmailIdText - The email ID to be entered in the Clearpay email ID field.
   * @param {string} clearpayPasswordText - The password to be entered in the Clearpay password field.
   * @returns {Promise<void>} A Promise that resolves after the Clearpay order process is completed.
   */
  clearpayOrder = async ({
    clearpayNotYouElem,
    clearpayEmailIdElem,
    clearpayEmailIdContinueElem,
    clearpayPasswordElem,
    clearpayPasswordContinueElem,
    clearpayConfirmElem,
    clearpayAcceptCloseElem,
    clearpayEmailIdText,
    clearpayPasswordText,
  }) => {
    const clearpayDetails = new ClearpayPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    await clearpayDetails.clickOnClearpayNotYouLink(clearpayNotYouElem);
    await clearpayDetails.enterEmailIdOnClearpayEmailIdField(
      clearpayAcceptCloseElem,
      clearpayEmailIdElem,
      clearpayEmailIdText
    );
    await clearpayDetails.clickOnClearpayEmailIdContinueButton(
      clearpayEmailIdContinueElem
    );
    await clearpayDetails.enterClearpayPasswordOnPasswordField(
      clearpayPasswordElem,
      clearpayPasswordText
    );
    await clearpayDetails.clickOnClearpayPasswordContinueButton(
      clearpayPasswordContinueElem
    );
    await clearpayDetails.clickOnClearpayConfirmButton(clearpayConfirmElem);
    await this.screenshot();
  };

  /**
   * Validates and selects the Pay By Link payment method.
   * @param {string} paymentPayByLinkElem - Selector for Pay By Link payment element.
   * @returns {Promise<void>}
   */
  validatePayByLink = async (paymentPayByLinkElem) => {
    if (paymentPayByLinkElem) {
      await this.page
        .locator(paymentPayByLinkElem)
        .first()
        .click({ force: true });
      await this.screenshot();
      console.log(
        `${this.siteData.brandLocale} : Pay By Link payment method selected successfully!`
      );
    }
  };

  /**
   * Selects Clearpay payment by interacting with the provided elements.
   *
   * @async
   * @function
   * @param {string} paymentClearpayElem - Selector for the Clearpay payment element.
   * @param {string} paymentClearpayContinueElem - Selector for the Clearpay "Continue" or similar CTA (Call to Action) element.
   * @returns {Promise<void>} A Promise that resolves after the Clearpay payment selection process is completed.
   */
  selectClearpayPayment = async (
    paymentClearpayElem,
    paymentClearpayContinueElem
  ) => {
    if (paymentClearpayElem) {
      await expect(
        await this.page.locator(paymentClearpayElem).first()
      ).toBeVisible();
      await this.page.locator(paymentClearpayElem).hover();
      await this.page
        .locator(paymentClearpayElem)
        .first()
        .click({ position: { x: 0, y: 0 } });
      await this.screenshot();
    }
    if (paymentClearpayContinueElem) {
      await expect(
        await this.page.locator(paymentClearpayContinueElem).first()
      ).toBeVisible();
      await this.page.locator(paymentClearpayContinueElem).first().click();
      await this.screenshot();
    }
  };

  /**
   * Validates the content of a specified element against expected partial data.
   * @async
   * @function deliveryTypeValidation
   * @param {string} deliveryTypeElem - The locator of the element whose content needs validation.
   * @param {string} deliveryTypeData - The expected partial data to check against the element's content.
   * @returns {Promise<void>}
   */
  deliveryTypeValidation = async (deliveryTypeElem, deliveryTypeData) => {
    if (deliveryTypeElem) {
      const actualData = await this.page.innerText(deliveryTypeElem);
      // Check if the actual data includes the expected partial data
      if (actualData.toUpperCase().includes(deliveryTypeData)) {
        console.log(
          'Delivery Type Validation Passed: Content includes expected delivery type.'
        );
      } else {
        console.error(
          'Delivery Type Validation Failed: Content does not include expected delivery type.'
        );
        console.error(`Actual Data: ${actualData}`);
      }
    }
  };

  /**
   * Selects Boleto payment by interacting with the provided elements.
   *
   * @async
   * @function
   * @param {string} boletoChooseElem - Selector for choosing the Boleto payment method.
   * @param {string} boletoCTAElem - Selector for the Boleto payment element.
   * @param {string} orderConfirmationMsgIdElem - Selector for the Boleto order confirmation.
   * @returns {Promise<void>} A Promise that resolves after the Boleto payment selection process is completed.
   */
  selectBoletoPayment = async (
    boletoChooseElem,
    boletoCTAElem,
    orderConfirmationMsgIdElem
  ) => {
    const boletoDetails = new BoletoPageModel(
      this.testInfo,
      this.page,
      this.data
    );

    await boletoDetails.selectBoleto(
      boletoChooseElem,
      boletoCTAElem,
      orderConfirmationMsgIdElem
    );
  };

  /**
   * Selects PayPal payment by interacting with the provided elements.
   *
   * @async
   * @function
   * @param {string} payPalRadioBtnElem - Selector for the PayPal Radio Button element.
   * @param {string} payPalCTAElem - Selector for the PayPal CTA element.
   * @param {string} paypalurl - PayPal url string.
   * @param {string} payPalSandBox - URL for the PayPal Sandbox.
   * @returns {Promise<void>} A Promise that resolves after the PayPal payment selection process is completed.
   */
  selectPayPalPayment = async (
    payPalRadioBtnElem,
    payPalCTAElem,
    paypalurl,
    payPalSandBox
  ) => {
    const payPalDetails = new PayPalPageModel(
      this.testInfo,
      this.page,
      this.data
    );

    await payPalDetails.checkPayPalButton(payPalRadioBtnElem, payPalCTAElem);

    await payPalDetails.checkPayPalUrl(paypalurl, payPalSandBox);
  };

  /**
   * Continues with the Express PayPal payment selection by clicking on the provided element.
   * @async
   * @function continueWithExpressPaypalSelection
   * @param {string} paymentContinueWithPayPalElem - The locator for the element to click to continue with Express PayPal selection.
   * @returns {Promise<void>}
   */
  continueWithExpressPayPalSelection = async (
    paymentContinueWithPayPalElem
  ) => {
    await this.page.waitForSelector(paymentContinueWithPayPalElem);
    await this.page
      .locator(paymentContinueWithPayPalElem)
      .first()
      .click({ force: true });
    await this.page.waitForTimeout(parseInt(this.locatorData.waitTime));
  };
}
module.exports = PaymentPageModel;
