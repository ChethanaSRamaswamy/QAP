const { expect } = require('@playwright/test');
const PageModel = require('../PageModel');

/**
 * Represents a Page Model for loyalty marketing page.
 * @class LoyaltyPageModel
 * @extends PageModel*/
class LoyaltyPageModel extends PageModel {
  /**
   * Create a LoyaltyPageModel.
   * @param {Object} testInfo - Test information object.
   * @param {Object} page - Playwright page object.
   * @param {Object} data - Data  (locatorData, testData, siteData) for the test.
   */
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }

  /**
   * Fills in loyalty member details on the marketing page.
   * @async
   * @function
   * @param {string} mobLoyaltyHamburgerElem - Locator for the mobile loyalty hamburger element.
   * @param {string} loyaltyProfilePageElem - Locator for the profile page element.
   * @param {string} loyaltyTermsCondElem - Locator for the terms and conditions checkbox element.
   * @param {string} loyaltyBirthDayElem - Locator for the birth day element.
   * @param {string} loyaltyBirthMonthElem - Locator for the birth month element.
   * @param {string} loyaltyJoinNowMarketingElem - Locator for the join now link element.
   * @param {string} loyaltyGnavElem - Locator for the loyalty Gnav element.
   * @param {string} loyaltyMarketingFirstNameElem - Locator for the market page first name element.
   * @param {string} loyaltyMarketingLastNameElem - Locator for the market page last name element.
   * @param {string} loyaltyPostalCodeElem - Locator for the postal code element.
   * @param {string} loyaltyJoinNowElem - Locator for the join now checkbox element.
   * @param {string} loyaltyMarketingAccTermsElem - Locator for the market page account terms element.
   * @param {string} loyaltySubmitFormElem - Locator for the submit form element.
   * @returns {Promise<void>} - A Promise that resolves when loyalty member details are filled in.
   */
  loyaltyMemberDetails = async ({
    mobLoyaltyHamburgerElem,
    loyaltyProfilePageElem,
    loyaltyTermsCondElem,
    loyaltyBirthDayElem,
    loyaltyBirthMonthElem,
    loyaltyJoinNowMarketPgElem,
    loyaltyGnavElem,
    loyaltyMarketingFirstNameElem,
    loyaltyMarketingLastNameElem,
    loyaltyPostalCodeElem,
    loyaltyJoinNowCheckboxElem,
    loyaltyMarketAccTermsElem,
    loyaltySubmitFormElem,
  }) => {
    if (mobLoyaltyHamburgerElem) {
      await this.page.locator(mobLoyaltyHamburgerElem).first().click();
    }
    if (loyaltyProfilePageElem) {
      await this.page.locator(loyaltyProfilePageElem).first().click();
    }
    if (loyaltyTermsCondElem) {
      await this.page.locator(loyaltyTermsCondElem).dispatchEvent('click');
    }
    if (loyaltyBirthDayElem && loyaltyBirthMonthElem) {
      await this.page
        .locator(loyaltyBirthDayElem)
        .selectOption(this.testData.BIRTHDAYDATE);
      await this.page
        .locator(loyaltyBirthMonthElem)
        .selectOption(this.testData.BIRTHDAYMONTH);
    }
    if (loyaltyJoinNowMarketPgElem) {
      await this.page.waitForLoadState();
      await this.page.locator(loyaltyJoinNowMarketPgElem).first().click();
    }
    if (loyaltyGnavElem) {
      await this.page.locator(loyaltyGnavElem).first().click();
    }
    if (loyaltyJoinNowCheckboxElem) {
      await this.page.waitForLoadState();
      await this.page
        .locator(loyaltyJoinNowCheckboxElem)
        .dispatchEvent('click');
    }
    if (loyaltySubmitFormElem) {
      if (
        loyaltyMarketingFirstNameElem ||
        loyaltyMarketingLastNameElem ||
        loyaltyPostalCodeElem ||
        loyaltyMarketAccTermsElem
      ) {
        await this.page
          .locator(loyaltyMarketingFirstNameElem)
          .first()
          .type(this.testData.FIRSTNAME);
        await this.page
          .locator(loyaltyMarketingLastNameElem)
          .first()
          .type(this.testData.LASTNAME);
        await this.page
          .locator(loyaltyPostalCodeElem)
          .first()
          .type(this.testData.ZIPCODE);
        await this.page.locator(loyaltyMarketAccTermsElem).first().click();
      }
      if (loyaltyMarketAccTermsElem) {
        await this.page.locator(loyaltyMarketAccTermsElem).first().click();
      }
      await this.page.locator(loyaltySubmitFormElem).first().click();
    }
    await this.screenshot();
  };

  /**
   * Verify the loyalty points and current tier status.
   * @param {string} loyaltyPointsElem - Locator for the loyalty points on the index page.
   * @param {string} tierStatusIdElem - Locator for the tier status element.
   * @returns {Promise<void>} - A Promise that resolves when the tier status is displayed.
   */
  displayTierStatus = async (loyaltyPointsElem, tierStatusIdElem) => {
    if (loyaltyPointsElem || tierStatusIdElem) {
      const availblePoints = await this.page
        .locator(loyaltyPointsElem)
        .first()
        .textContent();
      console.log(availblePoints);
      const currentTierStatus = await this.page
        .locator(tierStatusIdElem)
        .first()
        .textContent();
      console.log(currentTierStatus);
    }
    await this.screenshot();
  };

  /**
   * check a box to accept loyalty terms and conditions in the account page
   * when you registered as a non loyalty user
   * @param loyaltyRegisterTermsElem - locator for terms& conditions checkbox ( account index)
   * @returns {Promise<void>}
   * @memberof LoyaltyPageModel
   */
  checkAccountLoyaltyRegisterationTerms = async (
    loyaltyRegisterTermsElem,
    loyaltySubmitElem
  ) => {
    if (loyaltyRegisterTermsElem && loyaltySubmitElem) {
      const ele = await this.page.locator(loyaltyRegisterTermsElem);
      await ele.check();
      const submitEle = await this.page.locator(loyaltySubmitElem);
      await submitEle.click();
    }
  };

  /**
   * navigate to loyalty landing page
   * when you registered as a non loyalty user
   * @param loyaltyLandingElem - locator for loyalty landing page link ( account index)
   * @returns {Promise<void>}
   * @memberof LoyaltyPageModel
   */
  navigateToLoyaltyProgramDetails = async (loyaltyLandingElem) => {
    if (loyaltyLandingElem) {
      await this.page.locator(loyaltyLandingElem).click();
      await this.page.waitForLoadState();
    }
  };

  /**
   * click on loyalty program link in the footer and proceed to register loyalty account
   * fill out required info
   * @param homeJoinLoyaltyFooterElem - locator for loyalty link in the footer
   * @param marketingJoinNowElem - locator for Join Now button in loyalty marketing page
   * @param signinMarketingCreateAccountElem - locator for create new account on sign in page
   * @param accountRegisterEmailElem - locator for New loyalty user email field
   * @param accountMarketingJoinNowElem - locator for Join loyalty programm button
   * @memberof LoyaltyPageModel
   */
  navigateToLoyaltyMarketingPageAndProceedToRegister = async (
    homeJoinLoyaltyFooterElem,
    marketingJoinNowElem,
    signinMarketingCreateAccountElem,
    accountRegisterEmailElem,
    accountMarketingJoinNowElem
  ) => {
    if (homeJoinLoyaltyFooterElem) {
      const ele = await this.page.locator(homeJoinLoyaltyFooterElem);
      ele.click();
    }
    if (marketingJoinNowElem) {
      const ele = await this.page.locator(marketingJoinNowElem);
      ele.click();
      await this.page.waitForTimeout(3000);
      await this.page.waitForLoadState();
      await this.screenshot();
    }
    if (signinMarketingCreateAccountElem) {
      const ele = await this.page.locator(signinMarketingCreateAccountElem);
      ele.click();
      await this.page.waitForTimeout(3000);
      await this.page.waitForLoadState();
    }
    if (accountRegisterEmailElem && accountMarketingJoinNowElem) {
      const ele = await this.page.locator(accountRegisterEmailElem);
      const joinNowEle = await this.page.locator(accountMarketingJoinNowElem);
      await ele.fill(this.brazilEmailIdGenerator(), { delay: 100 });
      await this.screenshot();
      await joinNowEle.click();
      await this.page.waitForTimeout(3000);
      await this.page.waitForLoadState();
    }
  };

  /**
   * Accept account and loyalty terms and conditions
   * @param loayltyMarketingTermsElem - locator for loyalty t&c on marketing page
   * @param accountMarketingTermsElem - locator for account t&c on marketing page
   * @param signinRegisterContinueElem - locator register button on sign in page
   * @memberof LoyaltyPageModel
   */
  acceptMarketingPageLoyaltyTerms = async (
    loayltyMarketingTermsElem,
    accountMarketingTermsElem,
    signinRegisterContinueElem
  ) => {
    if (loayltyMarketingTermsElem) {
      await this.page.locator(loayltyMarketingTermsElem).click();
    }
    if (accountMarketingTermsElem) {
      await this.page.locator(accountMarketingTermsElem).click();
    }
    if (signinRegisterContinueElem) {
      await this.page.locator(signinRegisterContinueElem).click();
    }
  };

  /**
   * Fill out user details on register new account page ( Marketing page specific)
   * @param loyaltyRegisterFullNameElem - locator for Full Name field
   * @param loyaltyRegisterEmailIdElem - locator for Email field on register new account page
   * @param loyaltyRegisterPasswordElem - locator for Password field on register new account page
   * @param signinCpfElem - locator for Tax ID ( e.g. CPF, Brazil specific) field
   * @memberof LoyaltyPageModel
   */
  enrollDetails = async (
    loyaltyRegisterFullNameElem,
    loyaltyRegisterEmailIdElem,
    loyaltyRegisterPasswordElem,
    signinCpfElem
  ) => {
    if (loyaltyRegisterEmailIdElem) {
      await this.page.waitForSelector(loyaltyRegisterEmailIdElem);
      if (this.testData.BRAZILFLAG) {
        await this.page
          .locator(loyaltyRegisterEmailIdElem)
          .type(this.brazilEmailIdGenerator(), { delay: 100 });
      } else {
        await this.page
          .locator(loyaltyRegisterEmailIdElem)
          .type(this.mailIdGenerator(), { delay: 100 });
      }
    }
    if (loyaltyRegisterPasswordElem) {
      await this.page
        .locator(loyaltyRegisterPasswordElem)
        .type(this.testData.NPWD);
    }

    if (loyaltyRegisterFullNameElem) {
      await this.page
        .locator(loyaltyRegisterFullNameElem)
        .type(this.testData.LASTNAME);
    }
    if (signinCpfElem) {
      await this.page.locator(signinCpfElem).type(this.generateCPF());
    }
  };

  /**
   * Navigate to loyalty landing page and verify reward section
   * @param loyaltyIndexUrlElem - locator for loyalty Index Url
   * @param loyaltyBenefitSectionElem - locator for loyalty benefit Section
   * @memberof LoyaltyPageModel
   */
  gotoLoyaltyLandPage = async (loyaltyIndexUrl, loyaltyBenefitSection) => {
    if (loyaltyIndexUrl) {
      await this.page.goto(
        this.siteData.executionContext.url + loyaltyIndexUrl
      );
      await this.page.waitForLoadState();
      await expect(
        await this.page.locator(loyaltyBenefitSection)
      ).toBeVisible();
      console.log('Loyalty reward section displayed');
      await this.screenshot();
    }
  };

  /**
   * Performs welcome offer redemption by clicking on element.
   * @param {string} loyaltyWelcomeOfferRedeemElem - The locator for the element to redeem the welcome offer.
   * @param {string} loyaltyGnavCartElem - The locator for the element to navigate to the cart.
   * @param {string} loyaltyGnavContinueCheckoutElem - The locator for the element to continue to checkout.
   * @returns {Promise<void>} A Promise that resolves when welcome offer redemption is completed.
   */
  welcomeRedemption = async (
    loyaltyWelcomeOfferRedeemElem,
    loyaltyGnavCartElem,
    loyaltyGnavContinueCheckoutElem
  ) => {
    if (loyaltyWelcomeOfferRedeemElem) {
      await this.page.locator(loyaltyWelcomeOfferRedeemElem).click();
    }
    if (loyaltyGnavCartElem) {
      await this.page.locator(loyaltyGnavCartElem).click();
    }
    if (loyaltyGnavContinueCheckoutElem) {
      await this.page.locator(loyaltyGnavContinueCheckoutElem).click();
    }
  };
}
module.exports = LoyaltyPageModel;
