const ScenarioModel = require('../ScenarioModel');
const GuestUserScenarioModel = require('./GuestUserScenarioModel');
const OrderCompletionUserSignupPageModel = require('../../pagemodels/signin/OrderCompletionUserSignupPageModel');
const AccountLandingPageModel = require('../../pagemodels/account/AccountLandingPageModel');
const PopupPageModel = require('../../pagemodels/common/PopupPageModel');
const Util = require('../../../../utilities/util');

class NewUserScenarioModel extends ScenarioModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
    this.guestUser = new GuestUserScenarioModel(testInfo, page, data);
    this.popups = [this.locatorData.orderPagePopUpCloseElem];
  }

  /**
   * Verifies user able to create an account on order confimation page.
   * @async
   * @method
   * @memberof NewUserScenarioModel
   */
  registerNewUserOnOrderConfirmation = async () => {
    const accountCreation = new OrderCompletionUserSignupPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    await this.closePopup(this.popups);
    // Create account for the new user in order confirmation page
    const newUserRegistration = {
      orderCreateAccountElem: this.locatorData.orderCreateAccountOptionalElem,
      zipCodeFieldElem: this.locatorData.zipCodeElem,
      orderNewUserSignupPasswordElem: this.locatorData.orderPasswordElem,
      orderNewUserRegTermsElem: this.locatorData.orderTermsCondElem,
      orderSignupElem: this.locatorData.orderCreateAccountElem,
      orderNewUserPassword: this.testData.newUserPassword,
    };
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      newUserRegistration.birthdayMonthActionElem =
        this.locatorData.bdMonthActionElem;
      newUserRegistration.birthdayMonthValueElem =
        this.locatorData.bdMonthValueElem;
      newUserRegistration.birthdayDateActionElem =
        this.locatorData.bdDateActionElem;
      newUserRegistration.birthdayDateValueElem =
        this.locatorData.bdDateValueElem;
    } else {
      newUserRegistration.birthdayMonthDDElem =
        this.locatorData.bdMonthDropdownElem;
      newUserRegistration.birthdayDateDDElem =
        this.locatorData.bdDateDropdownElem;
    }
    await accountCreation.newUserRegistration(newUserRegistration);
  };

  /**
   * Validate whether the account has created successfully or not.
   * @async
   * @method
   * @memberof NewUserScenarioModel
   */
  validateAccountPage = async () => {
    const valiadateAccount = new AccountLandingPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    await valiadateAccount.isSignOutVisible(
      this.locatorData.accountSignoutElem,
      this.locatorData.accountURLTextElem
    );
  };
  /**
   * Closes the specified popups using the PopupPageModel.
   * @async
   * @method
   * @memberof NewUserScenarioModelScenarioModel
   */
  closePopup = async (popups) => {
    await new PopupPageModel(this.testInfo, this.page, this.data).closePopup(
      popups
    );
  };
}

module.exports = NewUserScenarioModel;
