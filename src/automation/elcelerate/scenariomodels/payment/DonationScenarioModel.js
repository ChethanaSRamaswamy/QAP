const ScenarioModel = require('../ScenarioModel');
const ViewCartPageModel = require('../../pagemodels/cart/ViewCartPageModel');

class DonationScenarioModel extends ScenarioModel {
  constructor(testInfo, page, paymentData) {
    super(testInfo, page, paymentData);
    this.paymentData = paymentData;
    // this.payment = new PaymentScenarioModel(testInfo, page, checkoutData);
  }

  /**
   * Adds donation sku to the viewcart page
   * @async
   * @function addDonationToCart
   * @returns {Promise<void>}
   */
  addDonationToCart = async () => {
    const viewCart = new ViewCartPageModel(this.testInfo, this.page, this.data);
    await viewCart.addDonation(
      this.locatorData.cartDonationValueFirstElem,
      this.locatorData.cartAddDonationElem,
      this.locatorData.cartConfirmDonationElem,
      this.locatorData.cartDonationOrderSummaryElem
    );
  };
}
module.exports = DonationScenarioModel;
