const ScenarioModel = require('../ScenarioModel');
const SigninPageModel = require('../../pagemodels/signin/SigninPageModel');
const LoyaltyPageModel = require('../../pagemodels/loyalty/LoyaltyPageModel');
const AccountLandingPageModel = require('../../pagemodels/account/AccountLandingPageModel');
const LoyaltyEnrollRegisterPageScenarioModel = require('./LoyaltyEnrollRegisterPageScenarioModel');
const PopupPageModel = require('../../pagemodels/common/PopupPageModel');
const Util = require('../../../../utilities/util');

class LoyaltyEnrollMarketPageScenarioModel extends ScenarioModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
    this.loyRegPg = new LoyaltyEnrollRegisterPageScenarioModel(testInfo, page, data);
  }

  /**
   * Accepts account terms and conditions during the registration process.
   * @async
   * @method
   * @memberof LoyaltyEnrollMarketPageScenarioModel
   */
  accountRegisterTerms = async () => {
    const accountTermsCond = new SigninPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    await accountTermsCond.acceptAccountTerms(
      this.locatorData.signinAccountTermsElem,
      this.locatorData.signinRegisterContinueElem
    );
  };

  /**
   * Accept account and loaylty terms and conditiond.
   * @async
   * @method
   * @memberof LoyaltyEnrollMarketPageScenarioModel
   */
  marketingPageAcceptTerms = async () => {
    const loayltyPage = new LoyaltyPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await loayltyPage.acceptMarketingPageLoyaltyTerms(
        this.locatorData.loayltyMarketingTermsElem,
        this.locatorData.accountMarketingTermsElem,
        this.locatorData.accountMarketingSubmitRegistrationElem
      );
    } else {
      await loayltyPage.acceptMarketingPageLoyaltyTerms(
        this.locatorData.loayltyMarketingTermsElem,
        this.locatorData.accountMarketingTermsElem,
        this.locatorData.mobAccountMarketingSubmitRegistrationElem
      );
    }
  };

  /**
   * Navigate to the marketing page and enroll in the loyalty.
   * @async
   * @method
   * @memberof LoyaltyEnrollMarketPageScenarioModel
   */
  enrollMarketingtPageDetails = async () => {
    const popups = [this.locatorData.profilePopupClose];
    await this.closePopup(popups);
    await this.navigateToMarketingPage();
    await this.enterMarketPageDetails();
  };

  /**
   * Closes the specified popups using the PopupPageModel.
   * @async
   * @method
   * @memberof LoyaltyEnrollMarketPageScenarioModel
   */
  closePopup = async (popups) => {
    await new PopupPageModel(this.testInfo, this.page, this.data).closePopup(
      popups
    );
  };

  /**
   * Navigates to the marketing page by clicking on "Join Loyalty" in the account landing page.
   * @async
   * @method
   * @memberof LoyaltyEnrollMarketPageScenarioModel
   */
  navigateToMarketingPage = async () => {
    const navLoyalty = new AccountLandingPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await navLoyalty.clickOnJoinLoyalty(
        this.locatorData.accountLoyaltySidebarMenuElem,
        this.locatorData.accountJoinNowElem,
        this.locatorData.accountLoyaltyContinueElem
      );
    } else {
      await navLoyalty.clickOnJoinLoyalty(
        this.locatorData.mobAccountLoyaltySidebarMenuElem,
        this.locatorData.mobAccountJoinNowElem,
        this.locatorData.mobAccountLoyaltyContinueElem
      );
    }
  };

  /**
   * Navigates to loaylty marketing page from a footer link.
   * @async
   * @method
   * @memberof LoyaltyEnrollMarketPageScenarioModel
   */
  navigateToLoyaltyMarketingPageFromFooter = async () => {
    const navLoyalty = new LoyaltyPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    const popups = [
      this.locatorData.cookieRejectElem,
      this.locatorData.loyaltyJoinPopupElem,
      this.locatorData.profilePopupCloseElem,
    ];
    await this.loyRegPg.initBrowser();
    await this.loyRegPg.goto();
    await this.loyRegPg.closePopup(popups);
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await navLoyalty.navigateToLoyaltyMarketingPageAndProceedToRegister(
        this.locatorData.homeJoinLoyaltyFooterElem,
        this.locatorData.marketingJoinNowElem,
        this.locatorData.signinMarketingCreateAccountElem,
        this.locatorData.accountRegisterEmailElem,
        this.locatorData.accountMarketingJoinNowElem
      );
    } else {
      await navLoyalty.navigateToLoyaltyMarketingPageAndProceedToRegister(
        this.locatorData.mobHomeJoinLoyaltyFooterElem,
        this.locatorData.mobMarketingJoinNowElem,
        this.locatorData.signinMarketingCreateAccountElem,
        this.locatorData.accountRegisterEmailElem,
        this.locatorData.accountMarkPageJoinNowElem
      );
    }
  };

  /**
   * Enters loyalty member details on the marketing page that is launched from the footer.
   * @async
   * @method
   * @memberof LoyaltyEnrollMarketPageScenarioModel
   */
  newLoyaltyUserRegistrationDetailsMarktPage = async () => {
    const loyaltyRegDetails = new LoyaltyPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    await loyaltyRegDetails.enrollDetails(
      this.locatorData.signinLoyaltyRegFullNameElem,
      this.locatorData.signinLoyaltyMarktEmailIdElem,
      this.locatorData.signinLoyaltyMarktPasswordElem,
      this.locatorData.signinCpfElem
    );
  };

  /**
   * Enters loyalty member details on the marketing page.
   * @async
   * @method
   * @memberof LoyaltyEnrollMarketPageScenarioModel
   */
  enterMarketPageDetails = async () => {
    const marketPage = new LoyaltyPageModel(this.testInfo, this.page, this.data);

    const {
      mobLoyaltyHamburgerElem,
      loyaltyProfilePageElem,
      loyaltyTermsCondElem,
      loyaltyBirthDayElem,
      loyaltyBirthMonthElem,
      loyaltyJoinNowMarketPgElem,
      loyaltyGnavElem,
      loyaltyMarketPgFirstNameElem,
      loyaltyMarketPgLastNameElem,
      loyaltyPostalCodeElem,
      loyaltyJoinNowCheckboxElem,
      loyaltyMarketPgAccTermsElem,
      loyaltySubmitFormElem
    } = this.locatorData;

    await marketPage.loyaltyMemberDetails({
      mobLoyaltyHamburgerElem,
      loyaltyProfilePageElem,
      loyaltyTermsCondElem,
      loyaltyBirthDayElem,
      loyaltyBirthMonthElem,
      loyaltyJoinNowMarketPgElem,
      loyaltyGnavElem,
      loyaltyMarketPgFirstNameElem,
      loyaltyMarketPgLastNameElem,
      loyaltyPostalCodeElem,
      loyaltyJoinNowCheckboxElem,
      loyaltyMarketPgAccTermsElem,
      loyaltySubmitFormElem
    });
  };
}

module.exports = LoyaltyEnrollMarketPageScenarioModel;
