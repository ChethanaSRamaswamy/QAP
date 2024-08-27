const config = require('../../configs/automation.setup');
const ScenarioModel = require('../ScenarioModel');
const HomePageModel = require('../../pagemodels/home/HomePageModel');
const PopupPageModel = require('../../pagemodels/common/PopupPageModel');
const BasePageModel = require('../../pagemodels/common/BasePageModel');
const SigninPageModel = require('../../pagemodels/signin/SigninPageModel');
const LoginPageModel = require('../../pagemodels/header/LoginPageModel');
const AccountLandingPageModel = require('../../pagemodels/account/AccountLandingPageModel');
const Util = require('../../../../utilities/util');

/**
 * Represents an automation script for IAM-related actions on a brand website.
 * @class IAMSigninScenarioModel
 * @extends ScenarioModel
 */
class IAMSigninScenarioModel extends ScenarioModel {
  /**
   * Creates an instance of IAMSigninScenarioModel.
   * @param {Object} testInfo - Information about the test.
   * @param {Page} page - The Playwright page object.
   * @param {Object} data - Data (locatorData, testData, siteData) for the test.
   */
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
    // Initialize the AccountLandingPageModel for IAM-related actions
    this.mySpace = new AccountLandingPageModel(testInfo, page, data);
  }

  /**
   * Validates the home page,  and initializes the browser.
   * @async
   * @method
   * @memberof IAMSigninScenarioModel
   */
  navigateToLoginPage = async () => {
    const popups = [
      this.locatorData.cookieRejectElem,
      this.locatorData.closePopUpElem,
    ];
    // Initialize the browser
    await this.initBrowser();
    // Navigate to the home page
    await this.goto();
    // Close popup is any
    await this.closePopup(popups);
  };

  /**
   * Signs in to the account.
   * @async
   * @method
   * @memberof IAMSigninScenarioModel
   */
  signinIAMReturnUser = async () => {
    // Perform the login action
    await this.loginToAccount();
  };

  /**
   * Verifies landing on the account page.
   * @async
   * @method
   * @memberof IAMSigninScenarioModel
   */
  validateAccountPage = async () => {
    // Check if the user has landed on the account page
    await this.isOnAccountPage();
  };

  /**
   * Signs out from the account.
   * @async
   * @method
   * @memberof IAMSigninScenarioModel
   */
  signout = async () => {
    // Perform the signout action
    await this.exitAccount();
  };

  /**
   * Initializes the browser using the base page model.
   * @async
   * @method
   * @memberof IAMSigninScenarioModel
   */
  initBrowser = async () => {
    const base = new BasePageModel(this.testInfo, this.page, config, this.data);
    await base.initBrowser();
  };

  /**
   * Navigates to the home page using the home page model.
   * @async
   * @method
   * @memberof IAMSigninScenarioModel
   */
  goto = async () => {
    const home = new HomePageModel(this.testInfo, this.page, this.data);
    // await this.page.goto(this.siteData.executionContext.url);
    await home.isLoaded();
  };

  /**
   * Close the pop up on Homepage if any
   * @async
   * @method
   * @memberof IAMSigninScenarioModel
   */
  closePopup = async (popups) => {
    await new PopupPageModel(this.testInfo, this.page, this.data).closePopup(
      popups
    );
  };

  /**
   * Logs in to the user's account using the login page model.
   * @async
   * @method
   * @memberof IAMSigninScenarioModel
   */
  loginToAccount = async () => {
    // Create instances of LoginPageModel and SigninPageModel for login actions
    const profile = new LoginPageModel(this.testInfo, this.page, this.data);
    const user = new SigninPageModel(this.testInfo, this.page, this.data);

    // Destructure locatorData and testData for readability
    const {
      accSigninTabElem,
      accUsernameElem,
      accPasswordElem,
      accSigninContinueElem,
    } = this.locatorData;

    const { accUsername, accPassword } = this.testData;

    if (this.siteData.executionContext.platform === Util.devices.mobile) {
      // if on mobile, need to click menu then click account to move to the account page
      await profile.safeClick(this.locatorData.menuElem);
      await profile.moveToAccount(this.locatorData.overlayMenuAccountElem);
      await profile.moveToAccount(this.locatorData.myAccountElem);
    } else {
      // Move to the account page
      await profile.moveToAccount(this.locatorData.overlayMenuAccountElem);
      await profile.moveToAccount(this.locatorData.myAccountElem);
    }

    // Perform the signin action
    await user.signinSingleReturnUser({
      accSigninTabElem,
      accUsernameElem,
      accPasswordElem,
      accSigninContinueElem,
      accUsername,
      accPassword,
    });

    if (this.siteData.executionContext.platform === Util.devices.mobile) {
      // wait for especially mc overlay while loading to be disappeared
      await this.page.waitForTimeout(5000);
      // if on mobile, need to click menu then click account to move to the account page
      await profile.safeClick(this.locatorData.menuElem);
      await profile.safeClick(this.locatorData.mobMyAccountElem);
      await profile.safeClick(this.locatorData.overlayMenuAccountSignedinElem);
    } else {
      // wait for mc overlay while loading to be disappeared
      await this.page.waitForTimeout(5000);
      // Move to the account page
      await profile.safeClick(this.locatorData.overlayMenuAccountElem);
      await profile.safeClick(this.locatorData.myAccountSignedinElem);
    }
  };

  /**
   * Verifies landing on the user's account dashboard using the account landing page model.
   * @async
   * @method
   * @memberof IAMSigninScenarioModel
   */
  isOnAccountPage = async () => {
    // Check if the user is on the account page
    await this.mySpace.isOnAccountPage(this.locatorData.userProfileElem);
  };

  /**
   * Signs out from the user's account using the account landing page model.
   * @async
   * @method
   * @memberof IAMSigninScenarioModel
   */
  exitAccount = async () => {
    // Perform the account signout action
    await this.mySpace.accountSignOut(this.locatorData.accountSignOutElem);
  };
}

module.exports = IAMSigninScenarioModel;
