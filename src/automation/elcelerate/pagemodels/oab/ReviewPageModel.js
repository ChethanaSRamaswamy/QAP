const PageModel = require('../PageModel');

/**
 * Represents a Page Model (PageModel) for the OAB Page of the web application.
 *
 * The ReviewPageModel class encapsulates interactions and verifications related to the OAB Review page, which typically
 * displays detailed information about required information for creating an appointment.
 *
 * @class ReviewPageModel
 * @extends PageModel
 */
class ReviewPageModel extends PageModel {
  /**
   * Creates an instance of ReviewPageModel.
   *
   * @param {Object} testInfo - Information about the test.
   * @param {Page} page - The Playwright page object.
   * @param {Object} data - Data (locatorData, testData, siteData) for the test.
   */
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }

  /**
   * Used to enter first name
   * @param {string} oabFirstnameElem Locator of first name element
   * @param {string} firstname Value of first name element
   */
  enterFirstName = async (oabFirstnameElem, firstname) => {
    const firstNameValue = await this.page
      .locator(oabFirstnameElem)
      .getAttribute('value');
    if (oabFirstnameElem && firstNameValue === '') {
      await this.page.locator(oabFirstnameElem).fill(firstname);
      console.log('Firstname: ', firstname);
      await this.screenshot();
    }
  };

  /**
   * Used to enter last name
   * @param {string} oabLastnameElem Locator of last name element
   * @param {string} lastname Value of last name element
   */
  enterLastName = async (oabLastnameElem, lastname) => {
    if (oabLastnameElem) {
      const lastNameValue = await this.page
        .locator(oabLastnameElem)
        .getAttribute('value');
      if (lastNameValue === '') {
        await this.page.locator(oabLastnameElem).fill(lastname);
      }
      console.log('Lastname: ' + lastname);
      await this.screenshot();
    }
  };

  /**
   * Used to enter email address
   * @param {string} oabGuestEmailElem Locator of email element
   * @param {string} returnedUserId
 Value of email element
   */
  enterGuestEmail = async (oabGuestEmailElem, returnedUserId) => {
    if (oabGuestEmailElem) {
      await this.page.locator(oabGuestEmailElem).fill(returnedUserId);
      console.log('Email: ' + returnedUserId);
      await this.screenshot();
    }
  };

  /**
   * Used to enter mobile number
   * @param {string} oabMobileNumberElem Locator of mobile number element
   * @param {string} Mobile1 Value of mobile number element
   */
  enterMobileNumber = async (oabMobileNumberElem, Mobile1) => {
    const mobileNumberValue = await this.page
      .locator(oabMobileNumberElem)
      .getAttribute('value');
    if (oabMobileNumberElem && mobileNumberValue.length <= 3) {
      await this.page.locator(oabMobileNumberElem).fill(Mobile1);
    }
    console.log('Mobile Number: ' + Mobile1);
    await this.screenshot();
  };

  /**
   * Used to check privacy policy
   * @param {string} acceptPrivecyPolicyElem Locator of privacy policy checkbox
   */
  checkAcceptPrivacyPolicy = async (acceptPrivecyPolicyElem) => {
    if (this.locatorData.acceptPrivecyPolicyElem) {
      await this.page.locator(acceptPrivecyPolicyElem).dispatchEvent('click');
      await this.screenshot();
    }
  };

  /**
   * Used to click on submit button
   * @param {string} bookNowSecondElem Locator of submit button
   */
  clickSubmitButton = async (bookNowSecondElem) => {
    if (bookNowSecondElem) {
      await this.page.locator(bookNowSecondElem).click();
      await this.screenshot();
    }
  };
}

module.exports = ReviewPageModel;
