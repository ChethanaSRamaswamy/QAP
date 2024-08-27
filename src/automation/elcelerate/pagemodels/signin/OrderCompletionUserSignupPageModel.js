/**
 * Represents a Page Model (PageModel) for handling actions on the order confirmation page
 * account creation.
 * @class PageModel
 */
const PageModel = require('../PageModel.js');
const Util = require('../../../../utilities/util');

/**
 * Represents an Order Completion User Signup Page Model (OrderCompletionUserSignupPageModel)
 * for creating account for guest users in order confirmation page.
 * @class OrderCompletionUserSignupPageModel
 * @extends PageModel
 */
class OrderCompletionUserSignupPageModel extends PageModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }

  /**
   * Register as a new user in order confirmation page.
   * @param {Object} options - An object containing the following parameters:
   * @param {string} options.orderCreateAccountElem - Locator for the create account button.
   * @param {string} options.createAccountZipcodeElem - Locator for the create account zipcode text box
   * @param {string} options.newUserSignupPasswordElem - Locator for the password text box
   * @param {string} options.createAccountBirthdayMonthElem - Locator for the create account birthday month if present
   * @param {string} options.createAccountBirthdayMonthValueElem - Locator for the create account birthday month value if present
   * @param {string} options.createAccountBirthdayDateElem - Locator for the create account birthday date if present
   * @param {string} options.createAccountBirthdayDateValueElem - Locator for the create account birthday date value if present
   * @param {string} options.newUserPassword - Data for the new user Password
   * @param {string} options.newUserRegTermsElem - Locator for the Terms and conditions checkbox
   * @param {string} options.signupElem - Locator for the sign up button
   * @param {string} options.createAccountBirthdayMonthDDElem - Locator for the create account birthday month drop down if present
   * @param {string} options.createAccountVirthdayDateDDElem - Locator for the create account birthday date drop down if present
   * @returns {Promise<void>}
   * @memberof OrderCompletionUserSignupPageModel
   */
  newUserRegistration = async ({
    orderCreateAccountElem,
    orderNewUserSignupPasswordElem,
    orderNewUserRegTermsElem,
    orderSignupElem,
    orderNewUserPassword,
    zipCodeFieldElem,
    birthdayMonthActionElem,
    birthdayMonthValueElem,
    birthdayDateActionElem,
    birthdayDateValueElem,
    birthdayMonthDDElem,
    birthdayDateDDElem,
  }) => {
    if (orderCreateAccountElem) {
      await this.page.locator(orderCreateAccountElem).first().click();
    }
    if (zipCodeFieldElem) {
      await this.page
        .locator(zipCodeFieldElem)
        .first()
        .fill(this.testData.ZIPCODE);
    }
    if (orderNewUserSignupPasswordElem) {
      await this.page
        .locator(orderNewUserSignupPasswordElem)
        .first()
        .fill(orderNewUserPassword);
    }
    if (birthdayMonthActionElem) {
      await this.page.locator(birthdayMonthActionElem).click();
      if (birthdayMonthValueElem) {
        await this.page.locator(birthdayMonthValueElem).click();
      }
    } else if (
      birthdayMonthDDElem &&
      this.siteData.executionContext.platform === Util.devices.mobile
    ) {
      // Handle the case where birthday Month Action is optional, depending on your requirements)
      await this.page
        .locator(birthdayMonthDDElem)
        .selectOption({ index: Number(this.testData.MONTH) });
    }
    if (birthdayDateActionElem) {
      await this.page.locator(birthdayDateActionElem).click();
      if (birthdayDateValueElem) {
        await this.page.locator(birthdayDateValueElem).click();
      }
    } else if (
      birthdayDateDDElem &&
      this.siteData.executionContext.platform === Util.devices.mobile
    ) {
      // Handle the case where birthday Date Action is optional, depending on your requirements
      await this.page
        .locator(birthdayDateDDElem)
        .selectOption({ index: Number(this.testData.DATE) });
    }
    if (orderNewUserRegTermsElem) {
      await this.page.locator(orderNewUserRegTermsElem).dispatchEvent('click');
    }
    if (orderSignupElem) {
      const createAccountElement = this.page.locator(orderSignupElem).first();
      if (await createAccountElement.isVisible()) {
        await createAccountElement.dispatchEvent('click');
        await this.page.waitForTimeout(parseInt(6000));
      }
    }
  };
}

module.exports = OrderCompletionUserSignupPageModel;
