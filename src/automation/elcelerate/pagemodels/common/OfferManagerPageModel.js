const { expect } = require('@playwright/test');
const PageModel = require('../PageModel');
const Util = require('../../../../utilities/util');

/**
 * Represents a Page Model for loyalty marketing page.
 * @class OfferManagerPageModel
 * @extends PageModel*/
class OfferManagerPageModel extends PageModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
    this.appliedOffers = null;
    this.offerAppliedFlag = false;
  }

  /**
   * Navigate to offer manager page
   * @param offerManagerUrlElem - locator for the offer manager page Url
   * @memberof OfferManagerPageModel
   */
  offerManagerPage = async (adminUrl, url, offerManagerUrlElem) => {
    if (offerManagerUrlElem) {
      if (
        this.siteData.executionContext.environment === Util.environments.prod ||
        this.siteData.executionContext.environment === Util.environments.preprod
      ) {
        await this.page.goto(adminUrl + offerManagerUrlElem);
        await this.page.waitForLoadState();
      } else {
        await this.page.goto(url + offerManagerUrlElem);
        await this.page.waitForLoadState();
      }
      await this.screenshot();
    }
  };

  /**
   * verify the test offers
   * @param offerAppliedIdElem - lThe locator for the element containing the applied offer ID.
   * @param offerAppliedLowerEnvIdElem - The locator for the element containing the applied offer ID Lower enviroment.
   * @memberof OfferManagerPageModel
   */
  validateTestoffers = async (
    offerAppliedIdElem,
    offerAppliedLowerEnvIdElem
  ) => {
    let appliedOffersText = '';
    let testPointsTotal = 0;
    await this.page.waitForLoadState();
    await this.page.waitForSelector(offerAppliedIdElem);
    if (offerAppliedIdElem) {
      if (
        this.siteData.executionContext.environment.toLowerCase() ===
          Util.environments.prod ||
        this.siteData.executionContext.environment.toLowerCase() ===
          Util.environments.preprod
      ) {
        await this.page.waitForLoadState();
        appliedOffersText = await this.page
          .locator(offerAppliedIdElem)
          .first()
          .textContent();
      } else {
        appliedOffersText = await this.page
          .locator(offerAppliedLowerEnvIdElem)
          .first.textContent();
      }
      if (appliedOffersText.includes(this.testData.TESTOFFER1)) {
        testPointsTotal = parseInt(this.testData.TESTPNT1, 10);
        console.log(this.testData.TESTOFFER1, 'offer applied');
      }
      if (appliedOffersText.includes(this.testData.TESTOFFER2)) {
        testPointsTotal = parseInt(this.testData.TESTPNT2, 10);
        console.log(this.testData.TESTOFFER2, 'offer applied');
      }
      console.log('Test offers point total', testPointsTotal);
    } else {
      console.log('Test offers not applied');
    }
    return testPointsTotal;
  };

  /**
   * Validates the welcome offer applied by checking if the specified offer ID element contains the expected welcome offer.
   * @param offerAppliedIdElem - lThe locator for the element containing the applied offer ID.
   * @param offerAppliedLowerEnvIdElem - The locator for the element containing the applied offer ID Lower enviroment.
   * @memberof OfferManagerPageModel
   */
  welcomeofferValidation = async (
    offerAppliedIdElem,
    offerAppliedLowerEnvIdElem
  ) => {
    let appliedOffersText = '';
    if (offerAppliedIdElem) {
      if (
        this.siteData.executionContext.environment.toLowerCase() ===
          Util.environments.prod ||
        this.siteData.executionContext.environment.toLowerCase() ===
          Util.environments.preprod
      ) {
        await this.page.waitForLoadState();
        appliedOffersText = await this.page
          .locator(offerAppliedIdElem)
          .first()
          .textContent();
      } else {
        appliedOffersText = await this.page
          .locator(offerAppliedLowerEnvIdElem)
          .first.textContent();
      }
      console.log('Applied offer', appliedOffersText);
      if (appliedOffersText.includes(this.testData.WELCOMEOFFER1)) {
        this.offerAppliedFlag = true;
        this.appliedOffers = this.testData.WELCOMEOFFER1;
        console.log(
          this.appliedOffers,
          'WELCOME OFFER HAS BEEN SUCCESSFULLY APPLIED'
        );
        await this.screenshot();
      } else {
        expect(appliedOffersText).toContain(this.testData.WELCOMEOFFER1);
      }
    }
    return {
      offerAppliedFlag: this.offerAppliedFlag,
      appliedOffers: this.appliedOffers,
    };
  };

  /**
   * Navigates to the cart page
   * @param {string} offerViewCartPageUrlElem - The locator for the URL of the cart page.
   * @memberof OfferManagerPageModel
   */
  navigateCartPage = async (offerViewCartPageUrlElem) => {
    if (offerViewCartPageUrlElem) {
      await this.page.goto(
        this.siteData.executionContext.url + offerViewCartPageUrlElem
      );
      await this.page.waitForLoadState();
      await this.screenshot();
    }
  };
}
module.exports = OfferManagerPageModel;
