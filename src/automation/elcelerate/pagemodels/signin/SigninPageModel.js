/* eslint-disable indent */
// Import necessary modules
const { expect } = require('@playwright/test');

/**
 * Represents a Page Model (PageModel) for handling login-related actions on a brand website.
 * @class PageModel
 */
const PageModel = require('../PageModel');
const Util = require('../../../../utilities/util');

// Set a boolean flag for a matching condition
const matchCondition = true;

/**
 * Represents a Page Model for Signin functionality.
 * @class SigninPageModel
 * @extends PageModel
 */
class SigninPageModel extends PageModel {
  /**
   * Create a SigninPageModel.
   * @param {Object} testInfo - Test information object.
   * @param {Object} page - Playwright page object.
   * @param {Object} data - Data  (locatorData, testData, siteData) for the test.
   */
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }

  /**
   * Wait for the visibility of an element identified by a Locator.
   * @param {string} elementSelector - Locator for the element.
   * @memberof SigninPageModel
   * @async
   */
  waitForElementVisibility = async (elementSelector) => {
    const elementHandle = this.page.locator(elementSelector);
    if (elementHandle.isVisible()) {
      console.log('Element appeared');
    } else {
      console.log(!matchCondition, 'Element did not appeared');
    }
  };

  /**
   * Sign in as a guest user.
   * @param {string} userTab - Locator for the user tab element.
   * @param {string} signinGuestUserNameElem - Locator for the user name element.
   * @param {string} userId - Locator for the user Email ID input element.
   * @param {string} userContinueButton - Locator for the continue button element.
   * @param {string} signinRUTElem - Locator for the user RUT input element(some LATAM).
   * @param {string} signinPassElem - Locator for the user Password input element(some LATAM).
   * @param {string} signinTermsElem - Locator for the user Terms and conditions checkbox element(some LATAM).
   * @memberof SigninPageModel
   * @async
   */

  // TODO: Disabling max-params rule for existing functions to allow
  // lint checks to pass. This will be addressed in QAP-2666
  // eslint-disable-next-line max-params
  signin = async (
    userTab,
    signinGuestUserNameElem,
    userId,
    userContinueButton,
    signinRUTElem,
    signinPassElem,
    signinTermsElem
  ) => {
    if (userTab) {
      const tab = this.page.locator(userTab);
      await tab.waitFor();
      await tab.click();
      let count = 0;
      for (let i = 0; i < 3; i++) {
        if (await this.page.locator(userId).isVisible()) {
          break;
        } else {
          await this.page.locator(userTab).click();
          console.log(
            `${this.siteData.brandLocale}: Email address not entered, So guest user tab clicked again`
          );
          count++;
        }
      }
      if (count > 2) {
        console.log(
          `${this.siteData.brandLocale} : After 3 attempts, the guest user tab is not clicked`
        );
        await expect(this.page.locator(userId)).toBeAttached();
      }
    }

    // User name
    if (signinGuestUserNameElem) {
      await expect(this.page.locator(signinGuestUserNameElem)).toBeEditable();
      await this.page
        .locator(signinGuestUserNameElem)
        .fill(this.testData.FIRSTNAME);
    }

    /**
     * Fill user ID field on the page if a user ID is provided.
     * If the user ID is provided:
     *   - Checks if the user ID field is editable.
     *   - Determines the locale from the site data and fills the user ID field accordingly.
     *   - If the locale is not Brazil, fills the user ID field with a generated email ID.
     *   - If the locale is Brazil, fills the user ID field with a Brazil-specific generated email ID.
     *
     */
    if (userId) {
      await expect(this.page.locator(userId)).toBeEditable();
      const locale = this.siteData.brandLocale.split('-')[1];
      const brand = this.siteData.brandLocale.split('-')[0];
      if (locale.toLowerCase() === Util.locale.brazil) {
        await this.page.locator(userId).fill(this.brazilEmailIdGenerator());
      } else if (brand.toLowerCase() === Util.brand.tomford) {
        await this.page.locator(userId).fill(this.gmailGenerator());
      } else {
        await this.page.locator(userId).fill(this.mailIdGenerator());
      }
    }

    // National Tax ID needed LATAM
    if (signinRUTElem) {
      // NOW check if RUT or CPF (Chile or Brazil)
      let taxID = this.testData.RUT;
      if (!taxID) {
        taxID = this.generateCPF();
      }
      await expect(this.page.locator(signinRUTElem)).toBeEditable();
      await this.page.locator(signinRUTElem).fill(taxID);
    }

    // Password needed for Brazil
    if (signinPassElem) {
      await expect(this.page.locator(signinPassElem)).toBeEditable();
      await this.page.locator(signinPassElem).fill(this.testData.NPWD);
      await this.screenshot();
    }

    if (signinTermsElem) {
      await this.page.locator(signinTermsElem).dispatchEvent('click');
      await this.screenshot();
    }

    if (userContinueButton) {
      await this.screenshot();
      const continuebutton = this.page.locator(userContinueButton);
      await continuebutton.waitFor();
      await continuebutton.first().click();
      await this.page.waitForLoadState('domcontentloaded');
      await this.screenshot();
    }
  };

  /**
   *  Performs the signup process with the provided elements.
   * @property {string} accSignupTabElem - Locator for the signup tab element.
   * @property {string} accUsernameElem - Locator for the username element.
   * @property {string} accPasswordElem - Locator for the password element.
   * @property {string} accuserTermsCondElem - Locator for the user terms and conditions element.
   * @property {string} accSignupContinueElem - Locator for the signup continue element.
   *
   */
  signup = async ({
    accSignupTabElem,
    accUsernameElem,
    accPasswordElem,
    accuserTermsCondElem,
    accSignupContinueElem,
  }) => {
    // Click on signup tab if available
    if (accSignupTabElem) {
      await this.page.locator(accSignupTabElem).dispatchEvent('click');
    }
    if (accUsernameElem) {
      await this.page.locator(accUsernameElem).click();
      await expect(this.page.locator(accUsernameElem)).toBeEditable();
      await this.page
        .locator(accUsernameElem)
        .type(this.mailIdGenerator(), { delay: 100 });
    }
    if (accPasswordElem) {
      await expect(this.page.locator(accPasswordElem)).toBeEditable();
      await this.page
        .locator(accPasswordElem)
        .type(this.testData.NPWD, { delay: 100 });
    }
    if (accuserTermsCondElem) {
      await this.page.locator(accuserTermsCondElem).first().focus();
      await this.page
        .locator(accuserTermsCondElem)
        .first()
        .dispatchEvent('click');
    }
    if (accSignupContinueElem) {
      await this.screenshot();
      await this.page
        .locator(accSignupContinueElem)
        .first()
        .dispatchEvent('click');
      await this.page.waitForLoadState('domcontentloaded');
    }
    await this.screenshot();
  };

  /**
   * Sign in as an existing or return user.
   * @param {Object} options - Object containing Locator and user credentials.
   * @param {string} options.accSignInTabElem - Locator for the signin tab element.
   * @param {string} options.accUsernameElem - Locator for the username input element.
   * @param {string} options.accPasswordElem - Locator for the password input element.
   * @param {string} options.accSignInContinueElem - Locator for the continue button element.
   * @param {string} options.accUsername - User's username data.
   * @param {string} options.accPassword - User's password data.
   * @memberof SigninPageModel
   * @async
   */

  // TODO: Disabling max-params rule for existing functions to allow
  // lint checks to pass. This will be addressed in QAP-2666
  // eslint-disable-next-line max-params
  signInReturnUser = async (
    accSignInTabElem,
    accUsernameElem,
    accPasswordElem,
    accSignInContinueElem,
    accUsername,
    accPassword
  ) => {
    await this.wait(2000);
    if (accSignInTabElem) {
      const signInTab = this.page.locator(accSignInTabElem).first();
      await signInTab.dispatchEvent('click');
    }
    if (
      accUsernameElem !== '' &&
      accPasswordElem !== '' &&
      accSignInContinueElem !== '' &&
      accPassword !== ''
    ) {
      await expect(this.page.locator(accUsernameElem).first()).toBeEditable();
      const returnUserId = this.returnUserMailIds(accUsername);
      await this.page.locator(accUsernameElem).first().fill(returnUserId);
      console.log('Return User Mail ID : ' + returnUserId);
      await expect(this.page.locator(accPasswordElem).first()).toBeEditable();
      await this.page.locator(accPasswordElem).first().fill(accPassword);

      console.log('Signing In as Existing/Return User');
      await this.screenshot();
      await this.page.locator(accSignInContinueElem).first().click();
    }
  };

  /**
   * Sign up as a new user (registration).
   * @param {Object} options - Object containing Locator and user credentials.
   * @param {string} options.accSignupTabElem accSignupNameElem - Locator for sign up tab element.
   * @param {string} options.accSignupNameElem - Locator for the sign up name input element.
   * @param {string} options.accEmailElem - Locator for the sign upemail input element.
   * @param {string} options.accPasswordElem - Locator for the singup password input element.
   * @param {string} options.accSignupMobileElem - Locator for the sign up mobile phone input element.
   * @param {string} options.accSignupContinueElem - Locator for the sign up continue button element.
   * @param {string} options.accSignupName - User's sign up email data.
   * @param {string} options.accSignupPassword - User's password data.
   * @param {string} options.accSignupMobile - User's password data.
   * @param {string} options.accAcceptTCElem - Terms and condition checkbox.
   * @memberof IAMSigninPageModel
   * @async
   */
  signupNewUser = async ({
    accSignupTabElem,
    accSignupNameElem,
    accSignupEmailElem,
    accSignupPasswordElem,
    accSignupMobileElem,
    accSignupContinueElem,
    accSignupName,
    accSignupPassword,
    accSignupMobile,
    accAcceptTCElem,
  }) => {
    if (accSignupTabElem) {
      await this.page.locator(accSignupTabElem).click();
    }
    if (
      accSignupEmailElem &&
      accSignupPasswordElem &&
      accSignupContinueElem &&
      accSignupPassword
    ) {
      if (accSignupNameElem && accSignupName) {
        await expect(
          this.page.locator(accSignupNameElem).first()
        ).toBeEditable();
        await this.page.locator(accSignupNameElem).first().fill(accSignupName);
      }

      await expect(
        this.page.locator(accSignupEmailElem).first()
      ).toBeEditable();
      await this.page
        .locator(accSignupEmailElem)
        .first()
        .type(this.mailIdGenerator(), { delay: 100 });

      await expect(
        this.page.locator(accSignupPasswordElem).first()
      ).toBeEditable();
      await this.page
        .locator(accSignupPasswordElem)
        .first()
        .fill(accSignupPassword);

      if (accSignupMobileElem && accSignupMobile) {
        await expect(
          this.page.locator(accSignupMobileElem).first()
        ).toBeEditable();
        await this.page
          .locator(accSignupMobileElem)
          .first()
          .fill(accSignupMobile);
      }
      if (accAcceptTCElem) {
        await this.page.locator(accAcceptTCElem).first().click({ force: true });
      }
      console.log('Signing up as a new user');
      await this.screenshot();
      await this.page.locator(accSignupContinueElem).first().click();
    }
  };

  /**
   * Navigate to Signin page using gnav header.
   * @param {string} loyaltyHamburgerElem - Locator for the Hamburger tab element
   * @param {string} registerGnavElem - Locator for the signin gnav element
   * @param {string} createAccountElem -Locator for the createAccount tab element
   */
  clickSigninGnav = async (
    loyaltyHamburgerElem,
    registerGnavElem,
    createAccountElem
  ) => {
    if (loyaltyHamburgerElem) {
      await this.page.locator(loyaltyHamburgerElem).first().click();
    }
    if (registerGnavElem) {
      await this.page.locator(registerGnavElem).click();
      await this.page.waitForLoadState();
    }
    if (createAccountElem) {
      await this.page.waitForLoadState();
      await this.page.locator(createAccountElem).first().click();
      await this.screenshot();
    }
  };

  /**
   * Enrolls a user with loyalty registration details
   * @param {string} loyaltyRegFirstNameElem - Locator for the first name element
   * @param {string} loyaltyRegLastNameElem - Locator for the last name element
   * @param {string} loyaltyRegEmailIdElem - Locator for the email ID element
   * @param {string} loyaltyRegPasswordElem - Locator for the password element
   * @async
   */
  loyaltyEnrollDetails = async (
    loyaltyRegFirstNameElem,
    loyaltyRegLastNameElem,
    loyaltyRegEmailIdElem,
    loyaltyRegPasswordElem,
    signinCpfElem
  ) => {
    if (loyaltyRegEmailIdElem) {
      await this.page.waitForSelector(loyaltyRegEmailIdElem);
      await expect(this.page.locator(loyaltyRegEmailIdElem)).toBeEditable();
      if (this.testData.BRAZILFLAG) {
        await this.page
          .locator(loyaltyRegEmailIdElem)
          .type(this.brazilEmailIdGenerator(), { delay: 100 });
      } else {
        await this.page
          .locator(loyaltyRegEmailIdElem)
          .type(this.mailIdGenerator(), { delay: 100 });
      }
    }
    if (loyaltyRegPasswordElem) {
      await this.page.locator(loyaltyRegPasswordElem).type(this.testData.NPWD);
    }
    if (loyaltyRegFirstNameElem) {
      await this.page
        .locator(loyaltyRegFirstNameElem)
        .type(this.testData.FIRSTNAME);
    }
    if (loyaltyRegLastNameElem) {
      await this.page
        .locator(loyaltyRegLastNameElem)
        .type(this.testData.LASTNAME);
    }
    if (signinCpfElem) {
      await this.page.locator(signinCpfElem).first().type(this.generateCPF());
    }
  };

  /**
   * Accepts loyalty terms during the registration process
   * @param {string} loyaltyRegisterTermsElem - Locator for the loyalty terms & cond checkbox element
   * @param {string} accountTermsElem - Locator for the account terms & cond checkbox element
   * @param {string} registerContinueElem - Locator for the registration continue element
   * @async
   */
  acceptLoyaltyTerms = async (
    loyaltyRegisterTermsElem,
    accountTermsElem,
    registerContinueElem
  ) => {
    if (loyaltyRegisterTermsElem) {
      await this.page.locator(loyaltyRegisterTermsElem).dispatchEvent('click');
    }
    if (accountTermsElem && this.page.locator(accountTermsElem).isVisible()) {
      try {
        await this.page.locator(accountTermsElem).dispatchEvent('click');
      } catch (e) {
        await this.page.locator(accountTermsElem).click({ force: true });
      }
    }
    if (registerContinueElem) {
      await this.page.locator(registerContinueElem).scrollIntoViewIfNeeded();
      this.page.waitForSelector(registerContinueElem),
        await this.page
          .locator(registerContinueElem)
          .first()
          .click({ force: true });
    }
    await this.page.waitForLoadState();
    await this.screenshot();
  };

  /**
   * Accepts account terms during the registration process.
   * @param {string} accountTermsElem - Locator for the account terms & cond checkbox element
   * @param {string} registerContinueElem - Locator for the registration continue element
   * @async
   */
  acceptAccountTerms = async (accountTermsElem, registerContinueElem) => {
    if (accountTermsElem && this.page.locator(accountTermsElem).isVisible()) {
      await this.page.locator(accountTermsElem).dispatchEvent('click');
    }
    if (registerContinueElem) {
      await this.page
        .locator(registerContinueElem)
        .first()
        .click({ force: true });
      await this.page.waitForLoadState();
    }
    await this.screenshot();
  };

  /** Sign in with signle user id.
   * @param {Object} options - Object containing Locator and user credentials.
   * @param {string} options.accSigninTabElem - Locator for the signin tab element.
   * @param {string} options.accUsernameElem - Locator for the username input element.
   * @param {string} options.accPasswordElem - Locator for the password input element.
   * @param {string} options.accSigninContinueElem - Locator for the continue button element.
   * @param {string} options.accUsername - User's username data.
   * @param {string} options.accPassword - User's password data.
   * @memberof SigninPageModel
   * @async
   */
  signinSingleReturnUser = async ({
    accSigninTabElem,
    accUsernameElem,
    accPasswordElem,
    accSigninContinueElem,
    accUsername,
    accPassword,
  }) => {
    if (accSigninTabElem) {
      await this.page.locator(accSigninTabElem).click();
    }
    if (accUsernameElem) {
      await expect(this.page.locator(accUsernameElem).first()).toBeEditable();
      // const returnUserId = this.returnUserMailIds(accUsername);
      await this.page.locator(accUsernameElem).first().fill(accUsername);
      console.log('Return User Mail ID : ' + accUsername);
    }
    if (accPasswordElem) {
      await expect(this.page.locator(accPasswordElem).first()).toBeEditable();
      await this.page.locator(accPasswordElem).first().fill(accPassword);
      console.log('Signing In as Existing/Return User');
    }
    if (accSigninContinueElem) {
      await this.screenshot();
      await this.page.locator(accSigninContinueElem).first().click();
    }
  };

  /** Signin with social media LINE.
   * @param {Object} options - Object containing Locator and user credentials.
   * @param {string} options.accLineSigninTabElem - Locator for the signin tab element.
   * @param {string} options.accLineUsernameElem - Locator for the username input element.
   * @param {string} options.accLinePasswordElem - Locator for the password input element.
   * @param {string} options.accLineSigninContinueElem - Locator for the continue button element.
   * @param {string} options.accLineUsername - User's username data.
   * @param {string} options.accLinePassword - User's password data.
   * @memberof SigninPageModel
   * @async
   */
  signinLineReturnUser = async ({
    accLineSigninTabElem,
    accLineUsernameElem,
    accLinePasswordElem,
    accLineSigninContinueElem,
    accLineUsername,
    accLinePassword,
  }) => {
    if (accLineSigninTabElem) {
      // Click Line button and switch to line login page
      await this.page.locator(accLineSigninTabElem).click();
    }
    if (accLineUsernameElem) {
      await expect(
        this.page.locator(accLineUsernameElem).first()
      ).toBeEditable();
      await this.page
        .locator(accLineUsernameElem)
        .first()
        .fill(accLineUsername);
      console.log('Return User Mail ID : ' + accLineUsername);
    }
    if (accLinePasswordElem) {
      await expect(
        this.page.locator(accLinePasswordElem).first()
      ).toBeEditable();
      await this.page
        .locator(accLinePasswordElem)
        .first()
        .fill(accLinePassword);

      console.log('Signing In as Existing Line User');
      await this.screenshot();
    }
    if (accLineSigninContinueElem) {
      await this.page.locator(accLineSigninContinueElem).first().click();
    }
  };

  signInWithEmail = async (
    userTabName,
    userIdLocator,
    userContinueButtonName,
    email
  ) => {
    await this.page.getByText(userTabName).click();
    await this.page.locator(userIdLocator).first().click();
    await this.page.locator(userIdLocator).first().pressSequentially(email);
    await this.clickOnButtonByAccessibleName(userContinueButtonName);
  };

  /** Signin with social media FB.
   * @param {Object} options - Object containing Locator and user credentials.
   * @param {string} options.accFBSigninTabElem - Locator for the signin tab element.
   * @param {string} options.accFBUsernameElem - Locator for the username input element.
   * @param {string} options.accFBPasswordElem - Locator for the password input element.
   * @param {string} options.accFBSigninContinueElem - Locator for the continue button element.
   * @param {string} options.accFBUsername - User's username data.
   * @param {string} options.accFBPassword - User's password data.
   * @memberof SigninPageModel
   * @async
   */
  signinFBReturnUser = async ({
    accFBSigninTabElem,
    accFBUsernameElem,
    accFBPasswordElem,
    accFBSigninContinueElem,
    accFBUsername,
    accFBPassword,
  }) => {
    if (accFBSigninTabElem) {
      // Click FB button and switch to FB login page
      await this.page.locator(accFBSigninTabElem).click();
    }
    if (accFBUsernameElem) {
      await expect(this.page.locator(accFBUsernameElem).first()).toBeEditable();
      await this.page.locator(accFBUsernameElem).first().fill(accFBUsername);
      console.log('Return User Mail ID : ' + accFBUsername);
    }
    if (accFBPasswordElem) {
      await expect(this.page.locator(accFBPasswordElem).first()).toBeEditable();
      await this.page.locator(accFBPasswordElem).first().fill(accFBPassword);
      console.log('Signing In as Existing FB User');
      await this.screenshot();
    }
    if (accFBSigninContinueElem) {
      await this.page.locator(accFBSigninContinueElem).first().click();
    }
  };
}

module.exports = SigninPageModel;
