const LoyaltyPaidEnrollScenarioModel = require('./LoyaltyPaidEnrollScenarioModel');

class LoyaltyPaidEnrollCartPgScenarioModel extends LoyaltyPaidEnrollScenarioModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }

  navigateToCart = async () => {
    const popups = [
      this.locatorData.cookieRejectElem,
      this.locatorData.closePopUpElem,
    ];
    await this.guestUser.initBrowser();
    await this.guestUser.goto();
    await this.guestUser.selectSku();
    await this.guestUser.pdpValidate();
    await this.guestUser.closePopup(popups);
    await this.guestUser.addProductToCartByAccessibleName();
    await this.guestUser.accessShoppingBagByAccessibleName();
  };

  addPaidLoyaltySKUinCart = async () => {
    await this.viewCart.addPaidLoyaltyMembershipToCart(this.locatorData.paidLoyaltyCartButtonElem);
  };

}
module.exports = LoyaltyPaidEnrollCartPgScenarioModel;
