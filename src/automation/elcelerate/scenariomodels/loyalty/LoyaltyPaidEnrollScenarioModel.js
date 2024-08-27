const GuestUserScenarioModel = require('../checkout/GuestUserScenarioModel');
const ViewCartPageModel = require('../../pagemodels/cart/ViewCartPageModel');
const SigninPageModel = require('../../pagemodels/signin/SigninPageModel');
const OrderConfirmationPageModel = require('../../pagemodels/order/OrderConfirmationPageModel');
const ScenarioModel = require('../ScenarioModel');

/**
 * This class is meant to be used by children classes that inherit this class' methods.
 * It contains multiple common functions for verification and checkout processes while lacking functions to acquire a paid loyalty given the multitude of available scenarios.
 * Any other scenario-specific functions will also be located in the scenario-specific class.
 */
class LoyaltyPaidEnrollScenarioModel extends ScenarioModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
    this.viewCart = new ViewCartPageModel(this.testInfo, this.page, this.data);
    this.guestUser = new GuestUserScenarioModel(this.testInfo, this.page, this.data);
  }


  verifyLoyaltySKU = async () => {
    await this.viewCart.verifyTextToBeVisible(this.locatorData.paidLoyaltyFeeElem);
  };

  checkoutSignUp = async () => {

    await this.viewCart.clickOnLinkByAccessibleName(this.locatorData.checkoutContinueNameElem);
    await this.guestUser.selectSample();
    await this.guestUserSignInWithEmail();

  };

  fillOutCheckoutInformation = async () => {
    await this.guestUser.shippingDetails();
    await this.guestUser.orderPlace();
  };

  verifyPaidLoyaltyMembershipNumber = async () => {
    const orderMesssage = new OrderConfirmationPageModel(this.testInfo, this.page, this.data);
    await orderMesssage.validatePaidMembership(this.locatorData.membershipNumberElem);

  };

  guestUserSignInWithEmail = async () => {
    const user = new SigninPageModel(this.testInfo, this.page, this.data);

    // TO-DO: Added comment so this function is merged with PR #211, as petitioned by jchellia_elcomp
    const timestamp = new Date().getTime();
    const guestEmail = `loyalty-qa-${timestamp}@estee.com`;

    await user.signInWithEmail(
      this.locatorData.guestUserTabElem,
      this.locatorData.guestUserId,
      this.locatorData.guestUserContinueButton,
      guestEmail
    );
  };

}
module.exports = LoyaltyPaidEnrollScenarioModel;
