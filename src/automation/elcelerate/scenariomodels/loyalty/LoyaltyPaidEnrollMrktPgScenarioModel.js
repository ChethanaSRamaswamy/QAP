const LoyaltyPaidEnrollScenarioModel = require('./LoyaltyPaidEnrollScenarioModel');
const LoyaltyMarketingPageModel = require('../../pagemodels/loyalty/LoyaltyMarketingPageModel');


class LoyaltyPaidEnrollMrktPgScenarioModel extends LoyaltyPaidEnrollScenarioModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
    this.loyaltyMarketing = new LoyaltyMarketingPageModel(this.testInfo, this.page, this.data);
  }

  navigateToLoyaltyMrktPage = async () => {

    const popups = [
      this.locatorData.cookieRejectButton,
      this.locatorData.closePopUp,
    ];
    await this.guestUser.initBrowser();
    await this.guestUser.goto();
    await this.guestUser.closePopup(popups);
    await this.guestUser.selectSku();
    await this.guestUser.pdpValidate();
    await this.guestUser.addProductToCartByAccessibleName();
  };

  addPaidLoyaltySKUinMrkt = async () => {
    await this.loyaltyMarketing.addPaidLoyaltyMembershipToCart(this.locatorData.loyaltyMktElem, this.locatorData.loyaltyJoinCTAElem, this.locatorData.pwToCheckoutElem);
  };

}
module.exports = LoyaltyPaidEnrollMrktPgScenarioModel;
