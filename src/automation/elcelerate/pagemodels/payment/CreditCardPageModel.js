const PageModel = require('../PageModel');

class CreditCardPageModel extends PageModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }

  /**
   * Enters the credit card number into the specified input field, optionally inside an iframe.
   *
   * @param {string} enterCreditCardNumber - Locator for the input field to enter the credit card number.
   * @param {string} iframeCreditCard - Locator for the iframe containing the credit card input field (optional).
   * @param {string} creditCardNumber - The credit card number to be entered.
   * @returns {Promise<void>} - A Promise that resolves after entering the credit card number.
   */
  creditCard = async (
    enterCreditCardNumber,
    iframeCreditCard,
    creditCardNumber
  ) => {
    await this.screenshot();
    if (enterCreditCardNumber && iframeCreditCard) {
      await this.page
        .frameLocator(iframeCreditCard)
        .locator(enterCreditCardNumber)
        .first()
        .fill(creditCardNumber);
    } else {
      await this.page
        .locator(enterCreditCardNumber)
        .first()
        .fill(creditCardNumber);
    }
    console.log(
      `${this.siteData.brandLocale} - Credit Card Number: ` + creditCardNumber
    );
  };

  /**
   * Enters the CVV number into the specified input field, optionally inside an iframe.
   *
   * @param {string} enterCvvNumber - Locator for the input field to enter the CVV number.
   * @param {string} iframeCvv - Locator for the iframe containing the CVV input field (optional).
   * @param {string} cvv - The CVV number to be entered.
   * @returns {Promise<void>} - A Promise that resolves after entering the CVV number.
   */
  cvv = async (enterCvvNumber, iframeCvv, cvv) => {
    if (enterCvvNumber && iframeCvv) {
      await this.page
        .frameLocator(iframeCvv)
        .locator(enterCvvNumber)
        .first()
        .fill(cvv);
    } else {
      await this.page.locator(enterCvvNumber).first().fill(cvv);
    }
  };

  /**
   * Enters the credit card expiration month and year into the specified input field, optionally inside an iframe.
   * If the `enterMonthYearElem` is provided, it fills the element directly; otherwise, it calls the `creditCardMonthYearDD` function.
   *
   * @param {string} enterMonthYearElem - Locator for the input field to enter the credit card expiration month and year.
   * @param {string} iframeMonthYear - Locator for the iframe containing the credit card expiration month and year input field (optional).
   * @param {string} iframeMonth - Locator for the iframe containing the credit card expiration month dropdown (optional).
   * @param {string} iframeYear - Locator for the iframe containing the credit card expiration year dropdown (optional).
   * @param {string} enterMonth - Locator for the input field to enter the credit card expiration month directly (optional).
   * @param {string} enterYear - Locator for the input field to enter the credit card expiration year directly (optional).
   * @param {string} monthYear - The credit card expiration month and year to be entered (in the format "MM / YYYY").
   * @param {string} month - The credit card expiration month to be selected.
   * @param {string} year - The credit card expiration year to be selected.
   * @returns {Promise<void>} - A Promise that resolves after entering the credit card expiration month and year.
   */

  // TODO: Disabling max-params rule for existing functions to allow
  // lint checks to pass. This will be addressed in QAP-2666
  // eslint-disable-next-line max-params
  creditCardMonthYear = async (
    enterMonthYearElem,
    iframeMonthYear,
    iframeMonth,
    iframeYear,
    enterMonth,
    enterYear,
    monthYear,
    month,
    year,
    elementTypeFlag
  ) => {
    if (enterMonthYearElem && iframeMonthYear) {
      await this.page
        .frameLocator(iframeMonthYear)
        .locator(enterMonthYearElem)
        .first()
        .fill(monthYear);
    } else if (enterMonthYearElem) {
      await this.page.locator(enterMonthYearElem).first().fill(monthYear);
    } else {
      await this.creditCardMonthAndYear(
        enterMonth,
        enterYear,
        iframeMonth,
        iframeYear,
        month,
        year,
        elementTypeFlag
      );
    }
  };

  /**
   * Sets the month and year for credit card information using dropdowns.
   * If iframes are specified, it switches to the iframes and selects the options.
   *
   * @param {string} enterMonth - Locator for entering the month (if no iframe).
   * @param {string} enterYear - Locator for entering the year (if no iframe).
   * @param {string} iframeMonth - Locator for the iframe containing the month dropdown.
   * @param {string} iframeYear - Locator for the iframe containing the year dropdown.
   * @param {string} month - The value to be selected for the month dropdown.
   * @param {string} year - The value to be selected for the year dropdown.
   * @param {string} elementTypeFlag - Flag indicating whether to enter Credit card Month & Year fields
   * via dropdown selectTag method or by using fill method.  ('TRUE' - selectTag or 'FALSE' - Fill).
   * @returns {Promise<void>} A Promise that resolves after setting the credit card month and year.
   */

  // TODO: Disabling max-params rule for existing functions to allow
  // lint checks to pass. This will be addressed in QAP-2666
  // eslint-disable-next-line max-params
  creditCardMonthAndYear = async (
    enterMonth,
    enterYear,
    iframeMonth,
    iframeYear,
    month,
    year,
    elementTypeFlag = 'TRUE'
  ) => {
    if (elementTypeFlag === 'TRUE') {
      if (enterMonth && enterYear && iframeMonth && iframeYear) {
        await this.page
          .frameLocator(iframeMonth)
          .locator(enterMonth)
          .first()
          .selectOption(month);
        await this.page
          .frameLocator(iframeYear)
          .locator(enterYear)
          .first()
          .selectOption(year);
      } else {
        await this.page.locator(enterMonth).first().selectOption(month);
        await this.page.locator(enterYear).first().selectOption(year);
      }
    } else {
      if (enterMonth && enterYear && iframeMonth && iframeYear) {
        await this.page
          .frameLocator(iframeMonth)
          .locator(enterMonth)
          .first()
          .fill(month);
        await this.page
          .frameLocator(iframeYear)
          .locator(enterYear)
          .first()
          .fill(year);
      } else {
        await this.page.locator(enterMonth).first().fill(month);
        await this.page.locator(enterYear).first().fill(year);
        await this.page.keyboard.press('Enter');
      }
    }
  };

  /**
   * Enters the credit card holder's name into the specified input field.
   *
   * @param {string} enterCardHolderName - Locator for entering the credit card holder's name.
   * @param {string} cardHolderName - The value to be entered as the credit card holder's name.
   * @returns {Promise<void>} A Promise that resolves after entering the credit card holder's name.
   */
  creditCardHolderName = async (enterCardHolderName, cardHolderName) => {
    if (enterCardHolderName) {
      await this.page.locator(enterCardHolderName).fill(cardHolderName);
    }
  };

  /**
   * Checks if the order should be placed based on the specified conditions.
   * If `toPlaceOrder` is set to 'TRUE' and `clickCreditCardContBtn` is provided,
   * it clicks the specified button to proceed with the order.
   *
   * @param {string} iframePlaceOrder - Locator for the iframe containing the place order button.
   * @param {string} toPlaceOrder - Flag indicating whether to place the order ('TRUE' or 'FALSE').
   * @param {string} clickCreditCardContBtn - Locator for clicking the button to continue with the order.
   * @returns {Promise<void>} A Promise that resolves after checking and potentially placing the order.
   */
  placeOrderCheck = async (
    iframePlaceOrder,
    toPlaceOrder,
    clickCreditCardContBtn
  ) => {
    if (toPlaceOrder === 'TRUE' && clickCreditCardContBtn) {
      if (iframePlaceOrder) {
        await this.page
          .frameLocator(iframePlaceOrder)
          .locator(clickCreditCardContBtn)
          .first()
          .click();
      } else {
        await this.page.locator(clickCreditCardContBtn).first().click();
      }
      console.log(
        `${this.siteData.brandLocale} : Test order is placed using creditcard`
      );
    } else {
      console.log(
        `${this.siteData.brandLocale} : As per the preference, not placing the order`
      );
    }
  };
}

module.exports = CreditCardPageModel;
