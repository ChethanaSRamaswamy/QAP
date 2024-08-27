const PopupPageModel = require('../../pagemodels/common/PopupPageModel');
const HomePageModel = require('../../pagemodels/home/HomePageModel');
const ScenarioModel = require('../ScenarioModel');
const config = require('../../configs/automation.setup');
const BasePageModel = require('../../pagemodels/common/BasePageModel');
const SigninPageModel = require('../../pagemodels/signin/SigninPageModel');
const AccountLandingPageModel = require('../../pagemodels/account/AccountLandingPageModel');
const LoyaltyPageModel = require('../../pagemodels/loyalty/LoyaltyPageModel');
const Util = require('../../../../utilities/util');

class LoyaltyEnrollRegisterPageScenarioModel extends ScenarioModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }

  clickOnRegisterGnavLinkLoyalty = async () => {
    const popups = [
      this.locatorData.cookieRejectElem,
      this.locatorData.loyaltyJoinPopupElem,
      this.locatorData.profilePopupCloseElem,
    ];

    await this.initBrowser();
    await this.goto();
    await this.closePopup(popups);
    await this.gnavSigninLoyalty();
    await this.newLoyaltyUserRegDetails();
  };

  displayLoyaltyStatus = async () => {
    const popups = [this.locatorData.profilePopupCloseElem];
    await this.closePopup(popups);
    await this.goToRewardsLoyalty();
    await this.displayCurrentLoyaltyStatus();
  };

  displayTierStatus = async () => {
    const popups = [this.locatorData.profilePopupCloseElem];
    await this.closePopup(popups);
    await this.rewardLoyaltySection();
    await this.displayCurrentLoyaltyStatus();
  };

  closePopup = async (popups) => {
    await new PopupPageModel(this.testInfo, this.page, this.data).closePopup(
      popups
    );
  };
  initBrowser = async () => {
    const base = new BasePageModel(this.testInfo, this.page, config, this.data);
    await base.initBrowser();
  };
  goto = async () => {
    const home = new HomePageModel(this.testInfo, this.page, this.data);
    // await this.page.goto(this.siteData.executionContext.url);
    await home.isLoaded();
  };

  /**
   * Verify that the user is able to navigate to the sign-in page.
   * @async
   * @method
   * @memberof LoyaltyEnrollRegisterPageScenarioModel
   */
  gnavSigninLoyalty = async () => {
    const signupLoyalty = new SigninPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await signupLoyalty.clickSigninGnav(
        this.locatorData.signinLoyaltyHamburgerElem,
        this.locatorData.signinRegisterGnavElem,
        this.locatorData.signinCreateAccountElem
      );
    } else {
      await signupLoyalty.clickSigninGnav(
        this.locatorData.mobSigninLoyaltyHamburgerElem,
        this.locatorData.mobSigninRegisterGnavElem,
        this.locatorData.mobSigninCreateAccountElem
      );
    }
  };

  /**
   * Enrolls new loyalty user registration details.
   * @async
   * @method
   * @memberof LoyaltyEnrollRegisterPageScenarioModel
   */
  newLoyaltyUserRegDetails = async () => {
    const loyaltyRegDetails = new SigninPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    await loyaltyRegDetails.loyaltyEnrollDetails(
      this.locatorData.signinLoyaltyRegFirstNameElem,
      this.locatorData.signinLoyaltyRegLastNameElem,
      this.locatorData.signinLoyaltyRegEmailIdElem,
      this.locatorData.signinLoyaltyRegPasswordElem,
      this.locatorData.signinCpfElem
    );
  };

  /**
   * Accepts loyalty terms and conditions during the registration process.
   * @async
   * @method
   * @memberof LoyaltyEnrollRegisterPageScenarioModel
   */
  loyaltyRegisterTermsCond = async () => {
    const loyaltyTerms = new SigninPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await loyaltyTerms.acceptLoyaltyTerms(
        this.locatorData.signinLoyaltyRegisterTermsElem,
        this.locatorData.signinAccountTermsElem,
        this.locatorData.signinRegisterContinueElem
      );
    } else {
      await loyaltyTerms.acceptLoyaltyTerms(
        this.locatorData.signinLoyaltyRegisterTermsElem,
        this.locatorData.mobSigninAccountTermsElem,
        this.locatorData.mobSigninRegisterContinueElem
      );
    }
  };

  /**
   * Accepts loyalty terms and conditions when signin up for loyalty from existing account
   * @async
   * @method
   * @memberof LoyaltyEnrollRegisterPageScenarioModel
   */
  acceptLoyaltyTermsAndConditionsAccountPage = async () => {
    const loyaltyTerms = new LoyaltyPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    await loyaltyTerms.checkAccountLoyaltyRegisterationTerms(
      this.locatorData.loyaltyRegisterTermsElem,
      this.locatorData.loyaltySubmitElem
    );
  };

  /**
   * Navigates to the loyalty landing page.
   * @async
   * @method
   * @memberof LoyaltyEnrollRegisterPageScenarioModel
   */
  goToRewardsLoyalty = async () => {
    const navigateRewardsPage = new AccountLandingPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await navigateRewardsPage.clickRewardSection(
        this.locatorData.accountRewardsSectionElem,
        this.locatorData.accountLoyaltyHamburgerElem,
        this.locatorData.accountLoyaltyRewardsElem,
        this.locatorData.marketingLoyaltyRewardsSectionElem
      );
    } else {
      await navigateRewardsPage.clickRewardSection(
        this.locatorData.mobAccountRewardsSectionElem,
        this.locatorData.mobAccountLoyaltyHamburgerElem,
        this.locatorData.mobAccountLoyaltyRewardsElem,
        this.locatorData.mobMarketingLoyaltyRewardsSectionElem
      );
    }
  };

  /**
   * Navigates to the loyalty landing page.
   * @async
   * @method
   * @memberof LoyaltyEnrollRegisterPageScenarioModel
   */
  rewardLoyaltySection = async () => {
    const rewardsPage = new AccountLandingPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await rewardsPage.viewRewards(this.locatorData.accountRewardsElem);
    } else {
      await rewardsPage.viewRewards(this.locatorData.mobAccountRewardsElem);
    }
  };

  /**
   * Navigates to the loyalty Program details section on accont page
   * @async
   * @method
   * @memberof LoyaltyEnrollRegisterPageScenarioModel
   */
  navigateToLoyaltyProgramDetails = async () => {
    const loyaltyLandingPage = new LoyaltyPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    await loyaltyLandingPage.navigateToLoyaltyProgramDetails(
      this.locatorData.loyaltyLandingElem
    );
  };

  /**
   * Displays the current loyalty status including points and tier.
   * @async
   * @method
   * @memberof LoyaltyEnrollRegisterPageScenarioModel
   */
  displayCurrentLoyaltyStatus = async () => {
    const loyaltyStatus = new LoyaltyPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    await loyaltyStatus.displayTierStatus(
      this.locatorData.loyaltyCurrentPointsElem,
      this.locatorData.loyaltyTierStatusIdElem
    );
  };
}
module.exports = LoyaltyEnrollRegisterPageScenarioModel;
