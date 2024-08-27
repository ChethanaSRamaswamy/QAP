const PageModel = require('../PageModel');

class GiftCardPageModel extends PageModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }
  // Gift card Details
  /**
   * Asynchronous function for selecting a gift card payment option.
   *
   * @async
   * @function
   * @memberof GiftCardPageModel
   * @name selectGiftCardOption
   * @param {string} paymentSelectGiftCardElem - Locator for selecting the gift card payment option.
   * @param {string} paymentGiftCardNumberElem - Locator for the gift card number input element.
   * @param {string} paymentGiftCardPinElem - Locator for the gift card pin input element.
   * @param {string} paymentApplyGiftCardElem - Locator for the apply gift card button.
   * @param {string} paymentGiftCardTermsandPolicyElem - Locator for the terms and policy checkbox (optional).
   * @param {string} paymentCompleteGiftCardElem - Locator for completing the gift card payment (optional).
   * @param {string} paymentGiftCardNumber - Gift card number to be filled.
   * @param {string} paymentGiftCardPin - Gift card pin to be filled.
   * @returns {Promise<void>} A Promise that resolves when the gift card payment process is complete.
   */

  selectGiftCardOption = async ({
    paymentSelectGiftCardElem,
    paymentGiftCardNumberElem,
    paymentGiftCardPinElem,
    paymentApplyGiftCardElem,
    paymentGiftCardTermsandPolicyElem,
    paymentCompleteGiftCardElem,
    paymentGiftCardNumber,
    paymentGiftCardPin,
  }) => {
    if (paymentSelectGiftCardElem) {
      await this.page.locator(paymentSelectGiftCardElem).first().click();
      await this.page
        .locator(paymentGiftCardNumberElem)
        .fill(paymentGiftCardNumber);
      console.log('GiftCard Number' + paymentGiftCardNumber);
      await this.page.locator(paymentGiftCardPinElem).fill(paymentGiftCardPin);
      console.log('GiftCard Pin Number' + paymentGiftCardPin);

      await this.page.locator(paymentApplyGiftCardElem).first().click();
      await this.screenshot();
      if (paymentGiftCardTermsandPolicyElem) {
        await this.page
          .locator(paymentGiftCardTermsandPolicyElem)
          .first()
          .click();
      }
      if (paymentCompleteGiftCardElem) {
        await this.page
          .locator(paymentCompleteGiftCardElem)
          .click({ force: true });
      }
      await this.screenshot();
    } else {
      console.log('This brand doesnt have Giftcard payment option');
    }
  };
}
module.exports = GiftCardPageModel;
