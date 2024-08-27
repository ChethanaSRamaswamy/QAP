const PopupPageModel = require('../../pagemodels/common/PopupPageModel');
const HomePageModel = require('../../pagemodels/home/HomePageModel');
const ScenarioModel = require('../ScenarioModel');
const config = require('../../configs/automation.setup');
const BasePageModel = require('../../pagemodels/common/BasePageModel');
const LoginPageModel = require('../../pagemodels/header/LoginPageModel');
const AccountLandingPageModel = require('../../pagemodels/account/AccountLandingPageModel');
const SigninPageModel = require('../../pagemodels/signin/SigninPageModel');
// TODO: Add Logger

/**
 * Represents an automation script for account-related actions on a brand website.
 * @class AccountExampleScenarioModel
 * @extends ScenarioModel
 */
class AccountExampleScenarioModel extends ScenarioModel {
  /**
   * Creates an instance of AccountExampleScenarioModel.
   * @param {Object} testInfo - Information about the test.
   * @param {Page} page - The Playwright page object.
   * @param {Object} data - Data (locatorData, testData, siteData) for the test.
   */
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
    // Initialize the AccountLandingPageModel for account-related actions
    this.mySpace = new AccountLandingPageModel(testInfo, page, data);
  }

  /**
   * Validates the home page, closes any specified popups, and initializes the browser.
   * @async
   * @method
   * @memberof AccountExampleScenarioModel
   */
  validateHomePage = async () => {
    // Popups to close
    const popups = [
      this.locatorData.cookieRejectButton,
      this.locatorData.closePopUp,
    ];

    // Initialize the browser
    await this.initBrowser();
    // Navigate to the home page
    await this.goto();
    // Close any specified popups
    await this.closePopup(popups);
  };

  /**
   * Signs in to the account.
   * @async
   * @method
   * @memberof AccountExampleScenarioModel
   */
  signin = async () => {
    // Perform the login action
    await this.loginToAccount();
  };

  /**
   * Verifies landing on the account page.
   * @async
   * @method
   * @memberof AccountExampleScenarioModel
   */
  verifyAccountPageLanding = async () => {
    // Check if the user has landed on the account page
    await this.profileDashboard();
  };

  /**
   * Signs out from the account.
   * @async
   * @method
   * @memberof AccountExampleScenarioModel
   */
  signout = async () => {
    // Perform the signout action
    await this.exitAccount();
  };

  /**
   * Closes the specified popups.
   * @param {Array} popups - List of popup locators to close.
   * @async
   * @method
   * @memberof AccountExampleScenarioModel
   */
  closePopup = async (popups) => {
    // Use the PopupPageModel to close the specified popups
    await new PopupPageModel(this.testInfo, this.page, this.data).closePopup(
      popups
    );
  };

  /**
   * Initializes the browser using the base page model.
   * @async
   * @method
   * @memberof AccountExampleScenarioModel
   */
  initBrowser = async () => {
    // Create an instance of the BasePageModel and initialize the browser
    const base = new BasePageModel(this.testInfo, this.page, config, this.data);
    await base.initBrowser();
  };

  /**
   * Navigates to the home page using the home page model.
   * @async
   * @method
   * @memberof AccountExampleScenarioModel
   */
  goto = async () => {
    // Create an instance of HomePageModel and navigate to the home page
    const home = new HomePageModel(this.testInfo, this.page, this.data);
    await home.isLoaded(); // This function verifies that the home page is fully loaded.
  };

  /**
   * Logs in to the user's account using the login page model.
   * @async
   * @method
   * @memberof AccountExampleScenarioModel
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

    const {
      returnUserId1,
      returnUserId2,
      returnUserId3,
      returnUserId4,
      returnUserId5,
      returnUserId6,
      accPassword,
    } = this.testData;

    // Combine and pass relevant data to perform the signin action
    const accUsername = [
      returnUserId1,
      returnUserId2,
      returnUserId3,
      returnUserId4,
      returnUserId5,
      returnUserId6,
    ];

    // Move to the account page and perform the signin action
    await profile.moveToAccount(this.locatorData.myAccount);

    await user.signinReturnUser({
      accSigninTabElem,
      accUsernameElem,
      accPasswordElem,
      accSigninContinueElem,
      accUsername,
      accPassword,
    });
  };

  /**
   * Verifies landing on the user's account dashboard using the account landing page model.
   * @async
   * @method
   * @memberof AccountExampleScenarioModel
   */
  profileDashboard = async () => {
    // Check if the user is on the account page
    await this.mySpace.isOnAccountPage(this.locatorData.accountProfile);
  };

  /**
   * Signs out from the user's account using the account landing page model.
   * @async
   * @method
   * @memberof AccountExampleScenarioModel
   */
  exitAccount = async () => {
    // Perform the account signout action
    await this.mySpace.accountSignOut(this.locatorData.accountSignOut);
  };
}

module.exports = AccountExampleScenarioModel;
