/**
 * Represents a Page Model (PageModel) for handling login-related actions on a brand website.
 * @class PageModel
 */
const PageModel = require('../PageModel');
const Util = require('../../../../utilities/util');

/**
 * Represents a Page Model (PageModel) for the global navigation header of the web application.
 *
 * The GnavHeaderPageModel class encapsulates interactions and verifications related to the global
 * navigation header, which typically contains navigation links, menus, and buttons available
 * across multiple pages of the website.
 *
 * @class GnavHeaderPageModel
 * @extends PageModel
 */
class GnavHeaderPageModel extends PageModel {
  /**
   * Creates an instance of GnavHeaderPageModel.
   *
   * @param {Object} testInfo - Information about the test.
   * @param {Page} page - The Playwright page object.
   * @param {Object} data - Data (locatorData, testData, siteData) for the test.
   */
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }

  /**
   * Navigates to the "PLP" page of the website by interacting with the
   * appropriate element within the global navigation header.
   *
   * @param {string} gnavHeaderExampleNavElem - Locator for the element that triggers navigation to "PLP."
   * @param {string} gnavHeaderExampleHamburgerElem - Locator for the element that opens the hamburger menu (optional).
   *  This is used when the navigation link is within a menu.
   * @returns {Promise<void>} A Promise that resolves after the navigation is complete.
   *
   * @memberof GnavHeaderPageModel
   */
  visitOurGoods = async (
    gnavHeaderExampleNavElem,
    gnavHeaderExampleHamburgerElem
  ) => {
    if (
      gnavHeaderExampleNavElem !== '' &&
      gnavHeaderExampleHamburgerElem !== ''
    ) {
      if (this.siteData.executionContext.platform === Util.devices.mobile) {
        await this.page.locator(gnavHeaderExampleHamburgerElem).first().click();
      }
      await this.page.locator(gnavHeaderExampleNavElem).first().click();
    }
    await this.screenshot();
  };

  /**
   * Displays the account menu options by clicking on the hamburger icon
   * and then clicking on the account element in the gnav
   * @param {String} gnavHeaderHamburgerElem - Locator of Hamburger menu
   * @param {String} gnavHeaderAccountElem - Locator of account menu
   */
  displayAccountMenuOptions = async (
    gnavHeaderHamburgerElem,
    gnavHeaderAccountElem
  ) => {
    await this.page.locator(gnavHeaderHamburgerElem).first().click();
    await this.page.waitForLoadState('domcontentloaded');
    const hoverElement = await this.page.locator(gnavHeaderAccountElem);
    await this.page.locator(hoverElement).hover();
    await this.page
      .locator(gnavHeaderAccountElem)
      .first()
      .click({ force: true });
  };

  /**
   * Visits the user's address book using the global navigation menu.
   * @param {Object} options - Options for navigation.
   * @param {string} options.accSigninNavHamElem - Element locator for the sign-in navigation hamburger icon.
   * @param {string} options.accGnavHeaderAccountElem - Element locator for the global navigation header account.
   * @param {string} options.accMobGnavAddressBookElem - Element locator for mobile global navigation address book.
   * @returns {Promise<void>} A Promise that resolves once the visit is complete.
   */
  visitMyAddressBookUsingGnav = async ({
    accSigninNavHamElem,
    accGnavHeaderAccountElem,
    accMobGnavAddressBookElem,
  }) => {
    await this.displayAccountMenuOptions(
      accSigninNavHamElem,
      accGnavHeaderAccountElem
    );
    await this.page.locator(accMobGnavAddressBookElem).first().click();
  };

  /**
   * Signs out from the application using the provided global navigation sign-out element.
   * @param {String} accSigninNavHamElem Locator of hamburger icon after login
   * @param {String} accGnavSignoutElem Element locator for the global navigation sign-out.
   * @returns {Promise<void>} A Promise that resolves once the sign-out is complete.
   */
  signOutFromGnav = async (accSigninNavHamElem, accGnavSignoutElem) => {
    await this.page.locator(accSigninNavHamElem).first().click();
    await this.page.locator(accGnavSignoutElem).first().click();
  };

  /**
   * Visits past orders page from Gnav
   * @param {String} gnavPastOrdersElem -Locator of past order element
   */
  viewPastOrders = async (gnavPastOrdersElem) => {
    await this.page.locator(gnavPastOrdersElem).first().click();
  };

  /**
   * Clicks on the global navigation hamburger icon.
   * @param {String} accGnavHeaderHamburgerElem -The locator for the global navigation hamburger element.
   * @returns {Promise<void>} - A Promise that resolves when the click event is dispatched.
   *
   */

  clickOnGnavHamburgerIcon = async (accGnavHeaderHamburgerElem) => {
    if (accGnavHeaderHamburgerElem) {
      await this.page
        .locator(accGnavHeaderHamburgerElem)
        .first()
        .dispatchEvent('click');
    }
  };

  /**
   * Clicks on the global navigation account icon.
   * @param {String} accProfileIconElem -The locator for the global navigation account icon.
   * @returns {Promise<void>} - A Promise that resolves when the click event is dispatched.
   *
   */

  clickOnGnavAccProfileIcon = async (accProfileIconElem) => {
    if (accProfileIconElem) {
      await this.page
        .locator(accProfileIconElem)
        .first()
        .dispatchEvent('click');
    }
  };
}

module.exports = GnavHeaderPageModel;
