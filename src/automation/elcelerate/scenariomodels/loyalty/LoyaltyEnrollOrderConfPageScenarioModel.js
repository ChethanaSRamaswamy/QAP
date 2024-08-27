const ScenarioModel = require('../ScenarioModel');
const GuestUserScenarioModel = require('../checkout/GuestUserScenarioModel');
const OrderConfirmationPageModel = require('../../pagemodels/order/OrderConfirmationPageModel');
const LoyaltyEnrollRegisterPageScenarioModel = require('./LoyaltyEnrollRegisterPageScenarioModel');
const SigninPageModel = require('../../pagemodels/signin/SigninPageModel');
const Util = require('../../../../utilities/util');

class LoyaltyEnrollOrderConfPageScenarioModel extends ScenarioModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
    this.guestCheckout = new GuestUserScenarioModel(testInfo, page, data);
    this.loyRegPg = new LoyaltyEnrollRegisterPageScenarioModel(
      testInfo,
      page,
      data
    );
  }

  orderConfirmPageloyaltyDetails = async () => {
    await this.orderConfirmClosePopup();
    await this.enrollOrderConfirmDetails();
  };

  /**
   * Closes order confirmation page popups.
   * @async
   * @method
   * @memberof LoyaltyEnrollRegisterPageScenarioModel
   */
  orderConfirmClosePopup = async () => {
    const popupClose = new OrderConfirmationPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    await popupClose.orderConfirmPopup(
      this.locatorData.orderConfirmationSurveyPopupElem,
      this.locatorData.orderConfirmationReferFriendPopupElem
    );
  };

  /**
   * Enroll in loyalty from the Order confirmation page.
   * @async
   * @method
   * @memberof LoyaltyEnrollRegisterPageScenarioModel
   */
  enrollOrderConfirmDetails = async () => {
    const joinLoyalty = new OrderConfirmationPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    const {
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
      mobOrderConfirmationLoyaltyAcceptElem,
    } = this.locatorData;

    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await joinLoyalty.orderConfirmJoinLoyalty({
        orderConfirmationSignupPasswordElem:
          orderConfirmationSignupPasswordElem,
        orderConfirmationZipcodeElem: orderConfirmationZipcodeElem,
        orderConfirmationBirthDayElem: orderConfirmationBirthDayElem,
        orderConfirmationBirthMonthElem: orderConfirmationBirthMonthElem,
        orderConfirmationLoyaltyTermsElem: orderConfirmationLoyaltyTermsElem,
        orderConfirmationAccountTermsElem: orderConfirmationAccountTermsElem,
        orderConfirmationRegisterContinueElem:
          orderConfirmationRegisterContinueElem,
        orderConfirmationJoinPopupElem: orderConfirmationJoinPopupElem,
        orderConfirmationFirstNameElem: orderConfirmationFirstNameElem,
        orderConfirmationLastNameElem: orderConfirmationLastNameElem,
        orderConfirmationLoyaltyAcceptElem: orderConfirmationLoyaltyAcceptElem,
        orderConfirmationPasswordElem: orderConfirmationPasswordElem,
        orderConfirmationSignupContinueElem:
          orderConfirmationSignupContinueElem,
      });
    } else {
      await joinLoyalty.orderConfirmJoinLoyalty({
        orderConfirmationSignupPasswordElem:
          orderConfirmationSignupPasswordElem,
        orderConfirmationZipcodeElem: orderConfirmationZipcodeElem,
        orderConfirmationBirthDayElem: orderConfirmationBirthDayElem,
        orderConfirmationBirthMonthElem: orderConfirmationBirthMonthElem,
        orderConfirmationLoyaltyTermsElem: orderConfirmationLoyaltyTermsElem,
        orderConfirmationAccountTermsElem: orderConfirmationAccountTermsElem,
        orderConfirmationRegisterContinueElem:
          orderConfirmationRegisterContinueElem,
        orderConfirmationJoinPopupElem: orderConfirmationJoinPopupElem,
        orderConfirmationFirstNameElem: orderConfirmationFirstNameElem,
        orderConfirmationLastNameElem: orderConfirmationLastNameElem,
        orderConfirmationLoyaltyAcceptElem:
          mobOrderConfirmationLoyaltyAcceptElem,
        orderConfirmationPasswordElem: orderConfirmationPasswordElem,
        orderConfirmationSignupContinueElem:
          orderConfirmationSignupContinueElem,
      });
    }
  };

  /**
   * Enter new user details on checkout page
   * @async
   * @method
   * @memberof LoyaltyEnrollOrderConfPageScenarioModel
   */
  newLoyaltyUserRegDetails = async () => {
    const loyaltyRegDetails = new SigninPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    await loyaltyRegDetails.loyaltyEnrollDetails(
      this.locatorData.checkoutLoyaltyRegFirstNameElem,
      this.locatorData.checkoutLoyaltyRegLastNameElem,
      this.locatorData.checkoutLoyaltyRegEmailIdElem,
      this.locatorData.checkoutLoyaltyRegPasswordElem,
      this.locatorData.checkoutCpfElem
    );
  };

  /**
   * Accept account terms and conditions on checkout page
   * @async
   * @method
   * @memberof LoyaltyEnrollOrderConfPageScenarioModel
   */
  newUserAcceptTermsAndCondition = async () => {
    const loyaltyRegDetails = new SigninPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    await loyaltyRegDetails.acceptAccountTerms(
      this.locatorData.checkoutAccountTermsElem,
      this.locatorData.checkoutCreateAccountContinueElem
    );
  };
}

module.exports = LoyaltyEnrollOrderConfPageScenarioModel;
