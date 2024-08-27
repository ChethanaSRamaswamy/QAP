const ScenarioModel = require('../ScenarioModel');
const LoyaltyPageModel = require('../../pagemodels/loyalty/LoyaltyPageModel');
const LoyaltyEnrollRegisterPageScenarioModel = require('./LoyaltyEnrollRegisterPageScenarioModel');
const GuestUserScenarioModel = require('../checkout/GuestUserScenarioModel');
const OfferManagerPageModel = require('../../pagemodels/common/OfferManagerPageModel');
const ViewCartPageModel = require('../../pagemodels/cart/ViewCartPageModel');
const Util = require('../../../../utilities/util');

class LoyaltyWelcomeOfferScenarioModel extends ScenarioModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
    this.regPage = new LoyaltyEnrollRegisterPageScenarioModel(
      testInfo,
      page,
      data
    );
    this.checkout = new GuestUserScenarioModel(testInfo, page, data);
    this.offersAppl = new OfferManagerPageModel(testInfo, page, data);
  }

  /**
   * Add a product from a random URL to the shopping bag.
   * @returns {Promise<void>} A Promise that resolves when the product is successfully added to the shopping bag.
   */
  addProductFromRandomUrl = async () => {
    await this.checkout.selectSku();
    await this.checkout.pdpValidate();
    await this.checkout.putProductInCartFromSPP();
    await this.checkout.accessShoppingBag();
  };

  /**
   * Redeems the welcome offer.
   * @returns {Promise<void>} A Promise that resolves when the welcome offer is successfully redeemed.
   */
  welcomeOfferRedemption = async () => {
    await this.navigateToLoyaltyIndex();
    await this.redeemWelcomeOffer();
    await this.getPurchaseAmount();
  };

  /**
   * Validate the welcome offer.
   * @returns {Promise<void>} A Promise that resolves when the welcome offer is successfully validated.
   */
  validateWelcomeOffer = async () => {
    await this.navigateToOfferManager();
    await this.verifyLoyaltyPointViewCartPage();
  };

  /**
   * Navigate to loyalty index page.
   * @async
   * @method
   * @memberof LoyaltyWelcomeOfferScenarioModel
   */
  navigateToLoyaltyIndex = async () => {
    const loyaltyIndex = new LoyaltyPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await loyaltyIndex.gotoLoyaltyLandPage(
        this.locatorData.loyaltyIndexUrlElem,
        this.locatorData.loyaltyBenefitSectionElem
      );
    } else {
      await loyaltyIndex.gotoLoyaltyLandPage(
        this.locatorData.loyaltyIndexUrlElem,
        this.locatorData.mobLoyaltyBenefitSectionElem
      );
    }
  };

  /**
   * Redeems the welcome offer on the loyalty landing page.
   * @async
   * @function
   * @memberof LoyaltyWelcomeOfferScenarioModel
   */
  redeemWelcomeOffer = async () => {
    const benefit = new LoyaltyPageModel(this.testInfo, this.page, this.data);
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await benefit.welcomeRedemption(
        this.locatorData.loyaltyWelcomeOfferRedeemElem,
        this.locatorData.loyaltyGnavCartElem,
        this.locatorData.loyaltyGnavContinueCheckoutElem
      );
    } else {
      await benefit.welcomeRedemption(
        this.locatorData.mobLoyaltyWelcomeOfferRedeemElem,
        this.locatorData.mobLoyaltyGnavCartElem,
        this.locatorData.mobLoyaltyGnavContinueCheckoutElem
      );
    }
  };

  /**
   * Retrieves the purchase amount and discount amount from the view cart page.
   * @async
   * @function
   * @memberof LoyaltyWelcomeOfferScenarioModel
   */
  getPurchaseAmount = async () => {
    const getValue = new ViewCartPageModel(this.testInfo, this.page, this.data);
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await getValue.purchaseAmount(
        this.locatorData.cartPurchaseAmountElem,
        this.locatorData.cartDiscountAmountElem
      );
    } else {
      await getValue.purchaseAmount(
        this.locatorData.mobCartPurchaseAmountElem,
        this.locatorData.mobCartDiscountAmountElem
      );
    }
  };

  /**
   * Navigate to offer manager page.
   * @async
   * @method
   * @memberof LoyaltyWelcomeOfferScenarioModel
   */
  navigateToOfferManager = async () => {
    await this.offersAppl.offerManagerPage(
      this.siteData.executionContext.adminUrl,
      this.siteData.executionContext.url,
      this.locatorData.offerManagerUrlElem
    );
  };

  /**
   * Verify the test offers.
   * @async
   * @method
   * @memberof LoyaltyEnrollMarketPageScenarioModel
   */
  verifyTestOffers = async () => {
    const Testoffers = new OfferManagerPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    await Testoffers.validateTestoffers(
      this.locatorData.offerAppliedIdElem,
      this.locatorData.offerAppliedLowerEnvIdElem
    );
  };

  /**
   * Verify the welcome offer.
   * @async
   * @method
   * @memberof LoyaltyEnrollMarketPageScenarioModel
   */
  verifyWelcomeOffer = async () => {
    const welcome = new OfferManagerPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    await welcome.welcomeofferValidation(
      this.locatorData.offerAppliedIdElem,
      this.locatorData.offerApliedLowerEnvIdElem
    );
  };

  /**
   * Navigate to view cart page.
   * @async
   * @method
   * @memberof LoyaltyWelcomeOfferScenarioModel
   */
  navigateToViewcartPage = async () => {
    const cartPage = new OfferManagerPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    await cartPage.navigateCartPage(this.locatorData.offerViewCartPageUrlElem);
  };

  /**
   * Verifies loyalty points on the view cart page.
   * @async
   * @method
   * @memberof LoyaltyWelcomeOfferScenarioModel
   */
  verifyLoyaltyPointViewCartPage = async () => {
    const loyaltyPoint = new ViewCartPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    const {
      cartLoyaltyPointElem,
      offerAppliedIdElem,
      offerAppliedLowerEnvIdElem,
      offerViewCartPageUrlElem,
      cartPurchaseAmountElem,
      cartDiscountAmountElem,
      mobCartLoyaltyPointElem,
      mobCartPurchaseAmountElem,
      mobCartDiscountAmountElem,
    } = this.locatorData;
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await loyaltyPoint.cartPageLoyaltyPoint({
        cartLoyaltyPointElem: cartLoyaltyPointElem,
        offerAppliedIdElem: offerAppliedIdElem,
        offerAppliedLowerEnvIdElem: offerAppliedLowerEnvIdElem,
        offerViewCartPageUrlElem: offerViewCartPageUrlElem,
        cartPurchaseAmountElem: cartPurchaseAmountElem,
        cartDiscountAmountElem: cartDiscountAmountElem,
      });
    } else {
      await loyaltyPoint.cartPageLoyaltyPoint({
        cartLoyaltyPointElem: mobCartLoyaltyPointElem,
        offerAppliedIdElem: offerAppliedIdElem,
        offerAppliedLowerEnvIdElem: offerAppliedLowerEnvIdElem,
        offerViewCartPageUrlElem: offerViewCartPageUrlElem,
        cartPurchaseAmountElem: mobCartPurchaseAmountElem,
        cartDiscountAmountElem: mobCartDiscountAmountElem,
      });
    }
  };
}
module.exports = LoyaltyWelcomeOfferScenarioModel;
