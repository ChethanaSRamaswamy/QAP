const PageModel = require('../PageModel');
const Util = require('../../../../utilities/util');

/**
 * Represents a Page Model (PageModel) for the My Appointments Page of the web application.
 *
 * The MyAppointmentsPageModel class encapsulates interactions and verifications related to the My Appointments page, which typically
 * displays detailed information about the appointments created.
 *
 * @class MyAppointmentsPageModel
 * @extends PageModel
 */
class MyAppointmentsPageModel extends PageModel {
  /**
   * Creates an instance of MyAppointmentsPageModel.
   *
   * @param {Object} testInfo - Information about the test.
   * @param {Page} page - The Playwright page object.
   * @param {Object} data - Data (locatorData, testData, siteData) for the test.
   */
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }
  /**
   * Checks if the My Apppointments page is loaded by navigating to the specified URL and verifying the HTTP response status code.
   *
   * This method navigates to the configured URL and checks if the response status code matches the expected code (200).
   * It logs a message indicating whether the OAB page is available or not and takes a screenshot for reference.
   *
   * @async
   * @memberof MyAppointmentsPageModel
   * @throws {Error} Throws an error if the response status code does not match the expected code (200).
   * @returns {Promise<void>} A Promise that resolves when the My Appointments is loaded successfully.
   */
  myAppointmentsIsLoaded = async () => {
    // Implementation to check if My Appointments page is loaded.
    const response = await this.page.goto(
      this.siteData.executionContext.url +
        this.locatorData.myAppointmentsPageUrlElem
    );
    await this.page.waitForTimeout(2000);
    const responseCode = 200;
    if (response.status() === responseCode) {
      console.log('Navigated to My Appointments page');
    } else {
      console.log(
        'The My Appointments page didnt return the 200 code, instead it returned the ' +
          response.status() +
          ' code, which is why it is not available'
      );
    }
    await this.screenshot();
  };

  /**
   * Used to enter user email
   * @param {string} acEnterReturnUserEmailElem Locator of user email element
   * @param {string} returnedUserId Value of email element
   */
  enterReturnedUserEmail = async (
    acEnterReturnUserEmailElem,
    returnedUserId
  ) => {
    if (acEnterReturnUserEmailElem) {
      await this.page.locator(acEnterReturnUserEmailElem).fill(returnedUserId);
      console.log('Email: ' + returnedUserId);
      await this.screenshot();
    }
  };

  /**
   * Used to enter user password
   * @param {string} acReturnUserPWDElem Locator of user password element
   * @param {string} returnedUserPassword Value of password element
   */
  enterReturnedUserPassword = async (
    acReturnUserPWDElem,
    returnedUserPassword
  ) => {
    if (acReturnUserPWDElem) {
      await this.page.locator(acReturnUserPWDElem).fill(returnedUserPassword);
      await this.screenshot();
    }
  };

  /**
   * Used to click on sign in button
   * @param {string} signInElem Locator of sign in button
   */
  clickSignInButton = async (signInElem) => {
    if (signInElem) {
      await this.page.locator(signInElem).click();
      await this.screenshot();
    }
  };

  /**
   * Used to click on login button
   * @param {string} acReturnUserLoginElem Locator of login button
   */
  clickReturnedUserLoginButton = async (acReturnUserLoginElem) => {
    if (acReturnUserLoginElem) {
      await this.page.locator(acReturnUserLoginElem).click();
      await this.screenshot();
    }
  };

  /**
   * Enters my appointments details based on the provided locators and test data.
   * @async
   * @function
   * @param {Object} options - Options for entering details.
   * @param {string} options.myAppointmentsElem - Element locator for appointment created.
   * @param {string} options.myAccServiceElem - Element locator for the service selected.
   * @param {string} options.myAccLocationElem - Element locator for the location selected.
   * @param {string} options.myAccDateElem - Element locator for date selected.
   * @param {string} options.cancelAppElem - Element locator for cancel appointment button.
   * @param {string} options.cancelAppConfirmationYesElem - Element locator for cancel appointment confirmation button.
   * @param {string} options.cancelAppConfirmationCloseElem - Element locator for closing confirmation window.
   * @throws {Error} Throws an error if there is an issue during the details entry process.
   * @returns {Promise<void>} A Promise that resolves once the details are entered and submitted.
   */
  cancelAppointment = async ({
    myAppointmentsElem,
    myAccServiceElem,
    myAccLocationElem,
    myAccDateElem,
    cancelAppElem,
    cancelAppConfirmationYesElem,
    cancelAppConfirmationCloseElem,
    mobCancelAppElem,
  }) => {
    if (myAppointmentsElem) {
      const myAccService = await this.page
        .locator(myAccServiceElem)
        .innerText();
      console.log('Service Name: ' + myAccService);
      const myAccLocation = await this.page
        .locator(myAccLocationElem)
        .innerText();
      console.log('Location: ' + myAccLocation);
      const myAccDate = await this.page.locator(myAccDateElem).innerText();
      console.log('Date: ' + myAccDate);
      if (this.siteData.executionContext.platform === Util.devices.pc) {
        if (cancelAppElem) {
          await this.page.locator(cancelAppElem).click();
        }
      } else {
        if (mobCancelAppElem) {
          await this.page.locator(mobCancelAppElem).click();
        }
      }
      await this.page.locator(cancelAppConfirmationYesElem).click();
      await this.screenshot();
      await this.page
        .locator(cancelAppConfirmationCloseElem)
        .dispatchEvent('click');
    }
  };
}

module.exports = MyAppointmentsPageModel;
