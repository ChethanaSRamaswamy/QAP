const { expect } = require('@playwright/test');

/**
 * Represents a Page Model (PageModel) for handling actions on the account landing page.
 * @class PageModel
 */
const PageModel = require('../PageModel');
const OrderHistoryPageModel = require('./OrderHistoryPageModel');
const AccountAddressBookPageModel = require('./AccountAddressBookPageModel');

/**
 * Represents an Account Landing Page Model (AccountLandingPageModel) for interacting with account-related elements.
 *
 * @class AccountLandingPageModel
 * @extends PageModel
 */
class AccountLandingPageModel extends PageModel {
  /**
   * Creates an instance of AccountLandingPageModel.
   * @param {Object} testInfo - Information about the test.
   * @param {Page} page - The Playwright page object.
   * @param {Object} data - Data (locatorData, testData, siteData) for the test.
   */
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
    // Initialize an instance of OrderHistoryPageModel for handling order history actions
    this.customerOrderDetails = new OrderHistoryPageModel(testInfo, page, data);
    // Initialize an instance of AccountAddressBookPageModel for handling order history actions
    this.addressBookDetails = new AccountAddressBookPageModel(
      testInfo,
      page,
      data
    );
  }

  /**
   * Checks if the user has landed on the account page.
   * @param {string} userProfile - Locator for the user profile element.
   * @returns {Promise<void>}
   * @memberof AccountLandingPageModel
   */
  isOnAccountPage = async (userProfile) => {
    try {
      // Check if the user profile element is visible
      await expect(await this.page.locator(userProfile).first()).toBeVisible();
      console.log('Navigated to User Account Home page');
    } catch (e) {
      // Log and assert that the user did not land on the account page
      console.log('Not Landed on to User Account Home page');
      expect(false).toBe(true);
    }
    // Capture a screenshot for reference
    await this.screenshot();
  };

  /**
   * Navigates to the order history page using the OrderHistoryPageModel.
   * @param {string} orderHistory - Locator to navigate order history page.
   * @param {string} pastOrderUrl - URL of the Order History page.
   * @param {string} purchaseDetails - Locator for purchase details element.
   * @param {string} noOrderLog - Locator for the "no order" log element.
   * @returns {Promise<void>}
   * @memberof AccountLandingPageModel
   */
  navigateToOrderHistory = async (
    orderHistory,
    pastOrderUrl,
    purchaseDetails,
    noOrderLog
  ) => {
    // use Account Landing page model to navigate to order history page
    await this.page.locator(orderHistory).first().click();
    // Use the OrderHistoryPageModel to check order history
    await this.customerOrderDetails.checkOrderHistory(
      pastOrderUrl,
      purchaseDetails,
      noOrderLog
    );
  };

  /**
   * Signs out from the account.
   * @param {string} accountSignOut - Locator for the sign-out element.
   * @returns {Promise<void>}
   * @memberof AccountLandingPageModel
   */
  accountSignOut = async (accountSignOut) => {
    if (accountSignOut !== '') {
      // Click on the sign-out element if it is not empty
      await this.page.locator(accountSignOut).first().click();
      console.log('Signing Out...');
    }
  };

  /**
   * validate the account page after order creation for new user.
   * @param {string} accountSignOutVisibleElem - check whether sign out buton is visible or not in account page
   * @param {string} accountPageUrlElem - validate the url of an account page
   * @returns {Promise<void>}
   * @memberof AccountLandingPageModel
   */
  isSignOutVisible = async (accountSignOutVisibleElem, accountPageUrlElem) => {
    if (accountPageUrlElem) {
      const accountUrl = new RegExp(`.*${accountPageUrlElem}.*`);
      await expect(this.page).toHaveURL(accountUrl);
    }
    if (accountSignOutVisibleElem) {
      await expect(
        await this.page.locator(accountSignOutVisibleElem).first()
      ).toBeVisible();
    }
    await this.screenshot();
    console.log('Account created successfully!');
  };

  /**
   * Clicks on the rewards and status link in the account index page.
   * @param {string} rewardsSectionElem - Locator for the rewards section element.
   * @param {string} accountLoyaltyRewardElem- Locator for the Smart rewards section element.
   * @param {string} mobileHamburgerMenuElem- Locator for Mobile Hamburger menu Section element.
   * @param {string} marketingLoyaltyRewardElem - Locator for my rewards marketing page section element.
   */
  clickRewardSection = async (
    rewardsSectionElem,
    mobileHamburgerMenuElem,
    accountLoyaltyRewardElem,
    marketingLoyaltyRewardElem
  ) => {
    if (rewardsSectionElem) {
      await this.page.locator(rewardsSectionElem).first().click();
    }
    if (mobileHamburgerMenuElem) {
      await this.page.locator(mobileHamburgerMenuElem).click();
    }
    if (accountLoyaltyRewardElem) {
      await this.page.locator(accountLoyaltyRewardElem).click();
    }
    if (marketingLoyaltyRewardElem) {
      await this.page.locator(marketingLoyaltyRewardElem).click();
    }
  };

  /**
   * Clicks on the rewards and status link in the account index page.
   * @param {string} accountRewardsElem - Locator for the rewards section element.
   */
  viewRewards = async (accountRewardsElem) => {
    if (accountRewardsElem) {
      await this.page.locator(accountRewardsElem).click();
    }
  };

  /**
   * Clicks on the "Join Loyalty" link in the account index page and navigate to marketing page.
   *
   * @async
   * @function
   * @param {string} loyaltySidebarMenuElem - Locator for the loyalty sidebar menu element.
   * @param {string} joinNowElem - Locator for the "Join Now" element.
   * @param {string} loyaltyContinueElem - Locator for the loyalty continue element.
   * @returns {Promise<void>} - A Promise that resolves when the "Join Loyalty" process is completed.
   */
  clickOnJoinLoyalty = async (
    loyaltySidebarMenuElem,
    joinNowElem,
    loyaltyContinueElem
  ) => {
    if (loyaltySidebarMenuElem) {
      await this.page.waitForLoadState('domcontentloaded');
      await this.page.locator(loyaltySidebarMenuElem).first().click();
    }
    if (joinNowElem) {
      await this.page.waitForLoadState('domcontentloaded');
      await this.page.waitForSelector(joinNowElem);
      await this.page.locator(joinNowElem).first().click();
    }
    if (loyaltyContinueElem) {
      await this.page.locator(loyaltyContinueElem).first().click();
      await this.page.waitForLoadState('domcontentloaded');
    }
  };

  /**
   *  Visits the user's address book
   * @param {String} accAddressBookElem Element locator for the address book.
   * @returns {Promise<void>} A Promise that resolves once the visit is complete.
   */
  visitMyAddressBook = async (accAddressBookElem) => {
    if (accAddressBookElem) {
      await this.page.locator(accAddressBookElem).first().click();
      await this.page.waitForLoadState();
    }
  };
}

module.exports = AccountLandingPageModel;
