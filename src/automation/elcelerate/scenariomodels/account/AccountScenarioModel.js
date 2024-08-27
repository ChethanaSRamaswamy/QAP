const ScenarioModel = require('../ScenarioModel');
const HomePageModel = require('../../pagemodels/home/HomePageModel');
const BasePageModel = require('../../pagemodels/common/BasePageModel');
const LoginPageModel = require('../../pagemodels/header/LoginPageModel');
const AccountLandingPageModel = require('../../pagemodels/account/AccountLandingPageModel');
const SigninPageModel = require('../../pagemodels/signin/SigninPageModel');
const AccountAddressBookPageModel = require('../../pagemodels/account/AccountAddressBookPageModel');
const GnavHeaderPageModel = require('../../pagemodels/header/GnavHeaderPageModel');
const Util = require('../../../../utilities/util');
const PopupPageModel = require('../../pagemodels/common/PopupPageModel');
const config = require('../../configs/automation.setup');

class AccountScenarioModel extends ScenarioModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
    this.mySpace = new AccountLandingPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    this.addressBook = new AccountAddressBookPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    this.GnavHeader = new GnavHeaderPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    this.accountCreation = new SigninPageModel(
      this.testInfo,
      this.page,
      this.data
    );
  }

  /**
   * Closes the specified popups using a PopupPageModel
   * @param {string[]} popups - An array of popup Locators to be closed.
   * @returns {Promise<void>} A Promise that resolves once the popups are closed.
   * @memberof AccountScenarioModel
   */
  closePopup = async (popups) => {
    await new PopupPageModel(this.testInfo, this.page, this.data).closePopup(
      popups
    );
  };

  /**
   * Signs up as a new user based on the platform context.
   * @async
   * @function
   * @type {string} accSignupTabElem - Element locator for the signup tab.
   * @type {string} accSignupEmailElem - Element locator for the signup email.
   * @type {string} accSignupPasswordElem - Element locator for the signup password.
   * @type {string} accAcceptTCElem - Element locator for accepting terms and conditions.
   * @type {string} accSignupContinueElem - Element locator for the signup continue button.
   * @type {string} accMobSignupTabElem - Element locator for mobile signup tab.
   * @type {string} accMobSignupEmailElem - Element locator for mobile signup email.
   * @type {string} accMobSignupPasswordElem - Element locator for mobile signup password.
   * @type {string} accMobAcceptTCElem - Element locator for accepting terms and conditions on mobile.
   * @type {string} accMobSignupContinueElem - Element locator for mobile signup continue button.
   * @returns {Promise<void>} A Promise that resolves once the signup is complete.
   */
  signUpAsANewUSer = async () => {
    const {
      accSignupTabElem,
      accSignupEmailElem,
      accSignupPasswordElem,
      accAcceptTCElem,
      accSignupContinueElem,
      accMobSignupTabElem,
      accMobSignupEmailElem,
      accMobSignupPasswordElem,
      accMobAcceptTCElem,
      accMobSignupContinueElem,
    } = this.locatorData;
    const signupData =
      this.siteData.executionContext.platform === Util.devices.pc
        ? {
          accSignupTabElem,
          accUsernameElem: accSignupEmailElem,
          accPasswordElem: accSignupPasswordElem,
          accuserTermsCondElem: accAcceptTCElem,
          accSignupContinueElem,
        }
        : {
          accSignupTabElem: accMobSignupTabElem,
          accUsernameElem: accMobSignupEmailElem,
          accPasswordElem: accMobSignupPasswordElem,
          accuserTermsCondElem: accMobAcceptTCElem,
          accSignupContinueElem: accMobSignupContinueElem,
        };
    await this.accountCreation.signup(signupData);
  };

  /**
   * Creates a new account by initializing the browser, navigating to the signup page
   * @returns {Promise<void>} A Promise that resolves once the account creation is complete.
   */
  createNewAccount = async () => {
    await this.initBrowser();
    await this.goto();
    const popups = [
      this.locatorData.accCookieRejectElem,
      this.locatorData.accClosePopUpElem,
    ];
    await this.closePopup(popups);
    await this.navigateToAccountSigninPage();
    await this.closePopup(popups);
    await this.signUpAsANewUSer();
  };

  /**
   * Signs you into an existing account from the account sign in page
   * @returns {Promise<void>} A Promise that resolves once the sign-in is complete.
   *
   */
  signInToExistingAccount = async () => {
    const { platform } = this.siteData.executionContext;

    const {
      accSigninTabElem,
      accUsernameElem,
      accPasswordElem,
      accSigninContinueElem,
      accMobSigninTabElem,
      accMobUsernameElem,
      accMobPasswordElem,
      accMobSigninContinueElem,
    } = this.locatorData;

    const {
      ACRID1,
      ACRID2,
      ACRID3,
      ACRID4,
      ACRID5,
      ACRID6,
      ACRID7,
      ACRID8,
      ACRID9,
      ACRID10,
      RPWD,
    } = this.testData;

    // Return user details
    const accUsername = [
      ACRID1,
      ACRID2,
      ACRID3,
      ACRID4,
      ACRID5,
      ACRID6,
      ACRID7,
      ACRID8,
      ACRID9,
      ACRID10,
    ];

    const signinTabElem =
      platform === Util.devices.pc ? accSigninTabElem : accMobSigninTabElem;
    const usernameElem =
      platform === Util.devices.pc ? accUsernameElem : accMobUsernameElem;
    const passwordElem =
      platform === Util.devices.pc ? accPasswordElem : accMobPasswordElem;
    const signinContinueElem =
      platform === Util.devices.pc
        ? accSigninContinueElem
        : accMobSigninContinueElem;

    await this.accountCreation.signInReturnUser(
      signinTabElem,
      usernameElem,
      passwordElem,
      signinContinueElem,
      accUsername,
      RPWD
    );
  };

  /**
   * Navigates to the order history page based on the platform and navigation method.
   * @returns {Promise<void>} A Promise that resolves once the navigation is completed.
   */
  viewMyOrderDetails = async () => {
    const {
      accUseGnav,
      accGnavHeaderHamburgerElem,
      accGnavHeaderAccountElem,
      accGnavMobMyOderElem,
      accMyOderElem,
      accPastOrderUrl,
      accMyOderReviewDetailsElem,
      accNoOrderLogElem,
      accMobMyOderElem,
      accMobPastOrderUrl,
      accMobMyOderReviewDetailsElem,
      accMobnoOrderLogElem,
      accMobMainElem,
    } = this.locatorData;
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      // USe account landing page to navigate to order history page
      await this.mySpace.navigateToOrderHistory(
        accMyOderElem,
        accPastOrderUrl,
        accMyOderReviewDetailsElem,
        accNoOrderLogElem
      );
    } else {
      if (accUseGnav) {
        await this.GnavHeader.displayAccountMenuOptions(
          accGnavHeaderHamburgerElem,
          accGnavHeaderAccountElem
        );
        // Use Gnav Header to navigate to order history page
        await this.GnavHeader.viewPastOrders(accGnavMobMyOderElem);
      } else {
        // USe account landing page to navigate to order history page
        await this.mySpace.navigateToOrderHistory(
          accMobMyOderElem,
          accMobPastOrderUrl,
          accMobMyOderReviewDetailsElem,
          accMobnoOrderLogElem
        );
      }
    }

    //  Navigate back to main account page
    if (this.siteData.executionContext.platform === Util.devices.mobile) {
      await this.addressBook.navToAccMain(accMobMainElem);
    }
  };

  /**
   * Deletes an address from the list of addresses in the address book page
   * @returns {Promise<void>} A Promise that resolves once the address is deleted.
   */
  deleteAddress = async () => {
    const { platform } = this.siteData.executionContext;
    const {
      accAddressBookElem,
      accMobAddressBookElem,
      accDeleteAddressElem,
      accDeleteAddressConfirmElem,
      accUseGnav,
      accMobDeleteAddressElem,
      accMobDeleteAddressConfirmElem,
      accSigninNavHamElem,
      accGnavHeaderAccountElem,
      accMobGnavAddressBookElem,
      accMobMainElem,
    } = this.locatorData;

    const deleteAddressElem =
      platform === Util.devices.pc
        ? accDeleteAddressElem
        : accMobDeleteAddressElem;
    const deleteConfirmElem =
      platform === Util.devices.pc
        ? accDeleteAddressConfirmElem
        : accMobDeleteAddressConfirmElem;
    const addressBookElem =
      platform === Util.devices.pc ? accAddressBookElem : accMobAddressBookElem;

    if (accUseGnav && platform !== Util.devices.pc) {
      await this.GnavHeader.visitMyAddressBookUsingGnav({
        accSigninNavHamElem,
        accGnavHeaderAccountElem,
        accMobGnavAddressBookElem,
      });
    } else if (platform === Util.devices.pc || !accUseGnav) {
      await this.mySpace.visitMyAddressBook(addressBookElem);
    }

    await this.addressBook.deleteAddress(deleteAddressElem, deleteConfirmElem);

    //  Navigate back to main account page
    if (this.siteData.executionContext.platform === Util.devices.mobile) {
      await this.addressBook.navToAccMain(accMobMainElem);
    }
  };

  /**
   * Submits new shipping/billing address based on the platform
   * @memberof AccountScenarioModel
   * @returns {Promise<void>} A Promise that resolves once the new address is submitted successfully.
   */
  submitNewShipBillAddress = async () => {
    // destructuring the shipbill locators
    const { platform } = this.siteData.executionContext;
    const {
      accAddressBookElem,
      accMobAddressBookElem,
      accMobGnavAddressBookElem,
      accSigninNavHamElem,
      accGnavHeaderAccountElem,
      accAddNewAddressElem,
      accMobAddNewAddressElem,
      accSelectTitle,
      accFirstnameElem,
      accLastNameElem,
      accAddress1Elem,
      accAddress2Elem,
      accAddress3Elem,
      accZipCodeElem,
      accPhoneElem,
      accPhone2Elem,
      accCityElem,
      accChooseCityElem,
      accChooseStateElem,
      accChooseCountryElem,
      accAddrSubmitElem,
      accChooseDefaultAdrElem,
      accUseGnav,
      accPopulatedAdressElem,
      accRandomAdrElem,
      accAddedAddressElem,
      accMobMainElem,
    } = this.locatorData;

    const addressBookElem =
      platform === Util.devices.pc ? accAddressBookElem : accMobAddressBookElem;
    const addNewAddressElem =
      platform === Util.devices.pc
        ? accAddNewAddressElem
        : accMobAddNewAddressElem;

    // Visit Address book page
    if (platform === Util.devices.pc) {
      await this.mySpace.visitMyAddressBook(addressBookElem);
    } else if (accUseGnav) {
      await this.GnavHeader.visitMyAddressBookUsingGnav({
        accSigninNavHamElem,
        accGnavHeaderAccountElem,
        accMobGnavAddressBookElem,
      });
    } else {
      await this.mySpace.visitMyAddressBook(addressBookElem);
    }

    //  Click on add address button
    await this.addressBook.addNewShipBillAddress(addNewAddressElem);

    //  Enter Address details
    await this.addressBook.enterShipBillDetails({
      accSelectTitle,
      accFirstnameElem,
      accLastNameElem,
      accAddress1Elem,
      accAddress2Elem,
      accAddress3Elem,
      accZipCodeElem,
      accPopulatedAdressElem,
      accRandomAdrElem,
      accPhoneElem,
      accPhone2Elem,
      accCityElem,
      accChooseCityElem,
      accChooseStateElem,
      accChooseCountryElem,
      accChooseDefaultAdrElem,
      accAddrSubmitElem,
    });

    //  Verify the added address
    await this.addressBook.verifyAddedAddress(accAddedAddressElem);

    //  Navigate back to main account page
    if (this.siteData.executionContext.platform === Util.devices.mobile) {
      await this.addressBook.navToAccMain(accMobMainElem);
    }
  };

  /**
   * Signs out from the user account based on the platform context.
   * @returns {Promise<void>} A Promise that resolves once the sign-out is complete.
   */
  accountSignout = async () => {
    const { platform } = this.siteData.executionContext;
    const { accSignoutElem, accSigninNavHamElem, accMobSignoutElem } =
      this.locatorData;

    if (platform === Util.devices.pc) {
      await this.mySpace.accountSignOut(accSignoutElem);
    } else {
      if (accSigninNavHamElem) {
        await this.GnavHeader.signOutFromGnav(
          accSigninNavHamElem,
          accMobSignoutElem
        );
      } else {
        await this.mySpace.accountSignOut(accMobSignoutElem);
      }
    }
  };

  /**
   * Edits an existing address in address book page
   * @returns {Promise<void>} A Promise that resolves once the address is edited.
   */
  editAnExistingAddress = async () => {
    const { platform } = this.siteData.executionContext;
    const {
      accEditAddressElem,
      accEditFirstNameElem,
      accEditLastNameElem,
      accEditAddressSubmitElem,
      accMobEditAddressElem,
      accMobEditFirstNameElem,
      accMobEditLastNameElem,
      accMobEditAddressSubmitElem,
      accMobMainElem,
      accAddressBookElem,
      accMobAddressBookElem,
      accUseGnav,
      accSigninNavHamElem,
      accGnavHeaderAccountElem,
      accMobGnavAddressBookElem,
    } = this.locatorData;

    // Visit Address book page
    const addressBookElem =
      platform === Util.devices.pc ? accAddressBookElem : accMobAddressBookElem;
    if (platform === Util.devices.pc) {
      await this.mySpace.visitMyAddressBook(addressBookElem);
    } else if (accUseGnav) {
      await this.GnavHeader.visitMyAddressBookUsingGnav({
        accSigninNavHamElem,
        accGnavHeaderAccountElem,
        accMobGnavAddressBookElem,
      });
    } else {
      await this.mySpace.visitMyAddressBook(addressBookElem);
    }

    //  Edit an address
    if (platform === Util.devices.pc) {
      await this.addressBook.editAnAddress({
        accEditAddressElem,
        accEditFirstNameElem,
        accEditLastNameElem,
        accEditAddressSubmitElem,
      });
    } else {
      await this.addressBook.editAnAddress({
        accEditAddressElem: accMobEditAddressElem,
        accEditFirstNameElem: accMobEditFirstNameElem,
        accEditLastNameElem: accMobEditLastNameElem,
        accEditAddressSubmitElem: accMobEditAddressSubmitElem,
      });
    }

    //  Navigate back to main account page
    if (this.siteData.executionContext.platform === Util.devices.mobile) {
      await this.addressBook.navToAccMain(accMobMainElem);
    }
  };

  /**
   *  Navigates to the account sign-in page based on the platform.
   * @memberof AccountScenarioModel
   * @async
   * @function
   * @returns {Promise<void>} A Promise that resolves once the navigation is complete.
   */
  navigateToAccountSigninPage = async () => {
    const profile = new LoginPageModel(this.testInfo, this.page, this.data);
    const {
      accGnavHeaderHamburgerElem,
      accMobRegesterElem,
      accRegesterElem,
      accProfileIconElem,
    } = this.locatorData;
    if (this.siteData.executionContext.platform === Util.devices.mobile) {
      await this.GnavHeader.clickOnGnavHamburgerIcon(
        accGnavHeaderHamburgerElem
      );
      await profile.moveToAccount(accMobRegesterElem);
      await this.screenshot();
    } else {
      await this.GnavHeader.clickOnGnavAccProfileIcon(accProfileIconElem);
      await profile.moveToAccount(accRegesterElem);
      await this.screenshot();
    }
  };

  /**
   * Initializes the browser using the base page model.
   * @memberof AccountScenarioModel
   */
  initBrowser = async () => {
    const base = new BasePageModel(this.testInfo, this.page, config, this.data);
    await base.initBrowser();
  };

  /**
   * Navigates to the home page using the home page model.
   * @memberof AccountScenarioModel
   */
  goto = async () => {
    const home = new HomePageModel(this.testInfo, this.page, this.data);
    // await this.page.goto(this.siteData.executionContext.url);
    await home.isLoaded();
  };
}
module.exports = AccountScenarioModel;
