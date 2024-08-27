const PageModel = require('../PageModel');

/**
 * Represents a Page Model (PageModel) for the OAB Confirmation Page of the web application.
 *
 * The ConfirmationPageModel class encapsulates interactions and verifications related to the OAB Confirmation Page, which typically
 * displays detailed information about the appointment created.
 *
 * @class ConfirmationPageModel
 * @extends PageModel
 */
class ConfirmationPageModel extends PageModel {
  /**
   * Creates an instance of ConfirmationPageModel.
   *
   * @param {Object} testInfo - Information about the test.
   * @param {Page} page - The Playwright page object.
   * @param {Object} data - Data (locatorData, testData, siteData) for the test.
   */
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }

  /**
   * Used to check that confirmation page is opened
   * @param {string} SDConfPageContainer Locator of confirmation page container element
   */
  checkConfirmationPage = async (SDConfPageContainer) => {
    if (SDConfPageContainer) {
      console.log('Confirmation page is loaded');
      await this.screenshot();
    }
  };

  /**
   * Used to get appointment details
   * @param {string} serviceNameFirstAppConfirmPageElem Locator of service name element
   * @param {string} serviceNameAppConfirmPageElem Locator of service name element
   * @param {string} locationAppConfirmPageElem Locator of location element
   * @param {string} dateAppConfirmPageElem Locator of date element
   */
  getAppointmentDetails = async (
    serviceNameFirstAppConfirmPageElem,
    serviceNameAppConfirmPageElem,
    locationAppConfirmPageElem,
    dateAppConfirmPageElem
  ) => {
    if (serviceNameFirstAppConfirmPageElem) {
      const serviceNameFirstAppConfirmPage = await this.page
        .locator(serviceNameFirstAppConfirmPageElem)
        .innerText();
      console.log(
        'ServiceName1AppConfirmPage: ' + serviceNameFirstAppConfirmPage
      );
    } else {
      const serviceNameAppConfirmPage = await this.page
        .locator(serviceNameAppConfirmPageElem)
        .innerText();
      console.log('ServiceName1AppConfirmPage: ' + serviceNameAppConfirmPage);
    }

    const locationAppConfirmPage = await this.page
      .locator(locationAppConfirmPageElem)
      .innerText();
    const dateAppConfirmPage = await this.page
      .locator(dateAppConfirmPageElem)
      .innerText();

    console.log('LocationAppConfirmPage: ' + locationAppConfirmPage);
    console.log('DateAppConfirmPage: ' + dateAppConfirmPage);
    await this.screenshot();
  };
}

module.exports = ConfirmationPageModel;
