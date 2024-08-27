const { expect } = require('@playwright/test');
const PageModel = require('../PageModel');

class OrderConfirmationPageModel extends PageModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }

  /**
   * Retrieves the order number from the order confirmation page.
   *
   * @param {string} orderConfirmationId - Locator for the element containing the order confirmation number.
   * @returns {Promise<void>} - A Promise that resolves after retrieving the order number.
   */
  getOrderNumber = async (orderConfirmationId) => {
    // const matchCondition = true;
    if (this.testData.toPlaceOrder === 'TRUE' && orderConfirmationId) {
      const orderId = await this.page.locator(orderConfirmationId).first();
      await orderId.waitFor();
      await expect(
        await this.page.locator(orderConfirmationId).first()
      ).toBeAttached();
      const orderConfirmUrl = new RegExp(
        `.*${this.testData.CHECKOUTCONFIRMURL}.*`
      );
      await expect(this.page).toHaveURL(orderConfirmUrl);
      const getOrderNumber = await orderId.textContent();
      console.log(
        `${this.siteData.brandLocale} : Order Created successfully:` +
          getOrderNumber
      );
      await this.screenshot();

      /* if (orderId.isVisbile()) {
        const confirmurl = await this.page.url();
        const getOrderNumber = await orderId.textContent();
        await expect(confirmurl).to.include(this.testData.CHECKOUTCONFIRMURL);
        console.log('Order Created successfully:' + getOrderNumber);
      } else {
        console.log(!matchCondition, 'Order not Created');
      } */
    }
  };

  /**
   * joining the loyalty program from the order confirmation page.
   *
   * @async
   * @function
   * @param {Object} options - An object containing element locators for joining loyalty.
   * @param {string} options.orderConfirmationSignupPasswordElem - Locator for the signup password element.
   * @param {string} options.orderConfirmationZipcodeElem - Locator for the zipcode element.
   * @param {string} options.orderConfirmationBirthDayElem - Locator for the birth day element.
   * @param {string} options.orderConfirmationBirthMonthElem - Locator for the birth month element.
   * @param {string} options.orderConfirmationLoyaltyTermsElem - Locator for the loyalty terms element.
   * @param {string} options.orderConfirmationAccountTermsElem - Locator for the account terms and conditions element.
   * @param {string} options.orderConfirmationRegisterContinueElem - Locator for the account register continue element.
   * @param {string} options.orderConfirmationJoinPopupElem - Locator for the join popup element.
   * @param {string} options.orderConfirmationFirstNameElem - Locator for the first name element.
   * @param {string} options.orderConfirmationLastNameElem - Locator for the last name element.
   * @param {string} options.orderConfirmationLoyaltyAcceptElem - Locator for the loyalty accept element.
   * @param {string} options.orderConfirmationPasswordElem - Locator for the password element.
   * @param {string} options.orderConfirmationSignupContinueElem - Locator for the signup continue element.
   * @returns {Promise<void>} - A Promise that resolves when the loyalty program join actions are completed.
   */
  orderConfirmJoinLoyalty = async ({
    orderConfirmationSignupPasswordElem,
    orderConfirmationZipcodeElem,
    orderConfirmationBirthDayElem,
    orderConfirmationBirthMonthElem,
    orderConfirmationLoyaltyTermsElem,
    orderConfirmationAccountTermsElem,
    orderConfirmationRegisterContinueElem,
    orderConfirmationJoinPopupElem,
    orderConfirmationFirstNameElem,
    orderConfirmationLastNameElem,
    orderConfirmationLoyaltyAcceptElem,
    orderConfirmationPasswordElem,
    orderConfirmationSignupContinueElem,
  }) => {
    if (orderConfirmationSignupPasswordElem) {
      await this.page.waitForSelector(orderConfirmationSignupPasswordElem);
      await this.page
        .locator(orderConfirmationSignupPasswordElem)
        .type(this.testData.NPWD);
    }
    if (orderConfirmationZipcodeElem) {
      await this.page
        .locator(orderConfirmationZipcodeElem)
        .type(this.testData.NEWZIPCODE);
    }
    if (orderConfirmationBirthDayElem && orderConfirmationBirthMonthElem) {
      await this.page
        .locator(orderConfirmationBirthDayElem)
        .selectOption(this.testData.BIRTHDAYDATE);
      await this.page
        .locator(orderConfirmationBirthMonthElem)
        .selectOption(this.testData.BIRTHDAYMONTH);
    }
    if (orderConfirmationLoyaltyTermsElem) {
      await this.page
        .locator(orderConfirmationLoyaltyTermsElem)
        .dispatchEvent('click');
    }
    if (orderConfirmationAccountTermsElem) {
      await this.page
        .locator(orderConfirmationAccountTermsElem)
        .first()
        .click();
    }
    if (orderConfirmationRegisterContinueElem) {
      await this.page
        .locator(orderConfirmationRegisterContinueElem)
        .first()
        .click();
    }
    if (orderConfirmationJoinPopupElem) {
      await this.page.locator(orderConfirmationJoinPopupElem).first().click();
    }
    if (orderConfirmationSignupContinueElem) {
      if (orderConfirmationFirstNameElem) {
        await this.page
          .locator(orderConfirmationFirstNameElem)
          .type(this.testData.FIRSTNAME);
      }
      if (orderConfirmationLastNameElem) {
        await this.page
          .locator(orderConfirmationLastNameElem)
          .type(this.testData.LASTNAME);
      }
      if (orderConfirmationLoyaltyAcceptElem) {
        await this.page
          .locator(orderConfirmationLoyaltyAcceptElem)
          .first()
          .click();
      }
      if (orderConfirmationPasswordElem) {
        await this.page
          .locator(orderConfirmationPasswordElem)
          .type(this.testData.NPWD);
      }
      await this.page
        .locator(orderConfirmationSignupContinueElem)
        .first()
        .click();
    }
  };

  /**
   * Handles order confirmation page popups.
   *
   * @async
   * @function
   * @param {string} surveyPopupElem - Locator for the survey popup element.
   * @param {string} referFriendPopupElem - Locator for the refer a friend popup element.
   * @returns {Promise<void>} - A Promise that resolves when the order confirmation popups are handled.
   */
  orderConfirmPopup = async (surveyPopupElem, referFriendPopupElem) => {
    if (surveyPopupElem) {
      await this.page.waitForSelector(surveyPopupElem);
      await this.page.locator(surveyPopupElem).first().click();
    }
    if (referFriendPopupElem) {
      await this.page.waitForSelector(referFriendPopupElem);
      await this.page.locator(referFriendPopupElem).first().click();
    }
  };

  validatePaidMembership = async (membershipNumberElem) => {
    const membershipNumberLoc = await this.page.locator(membershipNumberElem);
    await expect(membershipNumberLoc).toBeVisible();
    await this.screenshot();
  };
}

module.exports = OrderConfirmationPageModel;
