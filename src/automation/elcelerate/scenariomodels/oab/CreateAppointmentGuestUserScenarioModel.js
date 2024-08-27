const ScenarioModel = require('../ScenarioModel');
const BasePageModel = require('../../pagemodels/common/BasePageModel');
const PopupPageModel = require('../../pagemodels/common/PopupPageModel');
const OabLandingPageModel = require('../../pagemodels/oab/OabLandingPageModel');
const ServicePageModel = require('../../pagemodels/oab/ServicePageModel');
const SchedulePageModel = require('../../pagemodels/oab/SchedulePageModel');
const ReviewPageModel = require('../../pagemodels/oab/ReviewPageModel');
const ConfirmationPageModel = require('../../pagemodels/oab/ConfirmationPageModel');
const MyAppointmentsPageModel = require('../../pagemodels/oab/MyAppointmentsPageModel');
const config = require('../../configs/automation.setup');

class CreateAppointmentGuestUserScenarioModel extends ScenarioModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
    this.oabLanding = new OabLandingPageModel(testInfo, page, data);
    this.oabService = new ServicePageModel(testInfo, page, data);
    this.oabSchedule = new SchedulePageModel(testInfo, page, data);
    this.oabReview = new ReviewPageModel(testInfo, page, data);
    this.oabConfirmation = new ConfirmationPageModel(testInfo, page, data);
    this.oabMyAppointments = new MyAppointmentsPageModel(testInfo, page, data);
  }

  /**
   * Verifies user is able to navigate to oab page.
   * @async
   * @method
   * @memberof CreateAppointmentGuestUserScenarioModel
   */
  navigateToOabPage = async () => {
    await this.initBrowser();
    await this.goto();
    const popups = [
      this.locatorData.acceptCookie,
      this.locatorData.popupClose1,
    ];
    await this.closePopup(popups);
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
    const oab = new OabLandingPageModel(this.testInfo, this.page, this.data);
    await oab.isLoaded(); // This function verifies that the oab page is fully loaded.
  };

  /**
   * Verifies user is able to select location.
   * @async
   * @method
   * @memberof CreateAppointmentGuestUserScenarioModel
   */
  selectLocationAndClickSubmit = async () => {
    const {
      countiesElem,
      countiesValueElem,
      locationElem,
      locationValueElem,
      storeElem,
      storeValueElem,
    } = this.locatorData;
    await this.oabLanding.selectLocation({
      countiesElem,
      countiesValueElem,
      locationElem,
      locationValueElem,
      storeElem,
      storeValueElem,
    });
    await this.oabLanding.clickLocationSubmitButton(
      this.locatorData.locationSubmitElem,
      this.locatorData.mobLocationSubmitElem
    );
  };

  /**
   * Verifies user is able to select service.
   * @async
   * @method
   * @memberof CreateAppointmentGuestUserScenarioModel
   */
  selectServiceAndClickBookNow = async () => {
    await this.oabService.selectService(
      this.locatorData.selectServiceFirstElem,
      this.locatorData.selectServiceElem
    );
    await this.oabService.clickBookNowButton(this.locatorData.bookNowFirstElem);
  };

  /**
   * Verifies user is able to select timeslot.
   * @async
   * @method
   * @memberof CreateAppointmentGuestUserScenarioModel
   */
  selectTimeslotAndClickNext = async () => {
    await this.oabSchedule.selectTimeslot(
      this.locatorData.calendarRowsElem,
      this.locatorData.nextMonthCalendarElem,
      this.locatorData.step3ActiveDayElem,
      this.locatorData.step3ActiveTimeElem
    );
    await this.oabSchedule.clickNextButton(
      this.locatorData.nextBtnAfterDtTimeSelectionElem
    );
  };

  /**
   * Verifies user is able to enter required info.
   * @async
   * @method
   * @memberof CreateAppointmentGuestUserScenarioModel
   */
  enterRequiredInfoAndClickSubmit = async () => {
    await this.oabReview.enterFirstName(
      this.locatorData.oabFirstnameElem,
      this.testData.firstname
    );
    await this.oabReview.enterLastName(
      this.locatorData.oabLastnameElem,
      this.testData.lastname
    );
    await this.oabReview.enterGuestEmail(
      this.locatorData.oabGuestEmailElem,
      this.testData.returnedUserId
    );
    await this.oabReview.enterMobileNumber(
      this.locatorData.oabMobileNumberElem,
      this.testData.Mobile1
    );
    await this.oabReview.checkAcceptPrivacyPolicy(
      this.locatorData.acceptPrivecyPolicyElem
    );
    await this.oabReview.clickSubmitButton(this.locatorData.bookNowSecondElem);
  };

  /**
   * Verifies appointment details.
   * @async
   * @method
   * @memberof CreateAppointmentGuestUserScenarioModel
   */
  checkAppointmentDetailsOnConfirmationPage = async () => {
    await this.oabConfirmation.checkConfirmationPage(
      this.locatorData.SDConfPageContainer
    );
    await this.oabConfirmation.getAppointmentDetails(
      this.locatorData.serviceNameFirstAppConfirmPageElem,
      this.locatorData.serviceNameAppConfirmPageElem,
      this.locatorData.locationAppConfirmPageElem,
      this.locatorData.dateAppConfirmPageElem
    );
  };

  /**
   * Verifies user is able to add credentials.
   * @async
   * @method
   * @memberof CreateAppointmentGuestUserScenarioModel
   */
  addCredentials = async () => {
    await this.oabMyAppointments.clickSignInButton(this.locatorData.signInElem);
    await this.oabMyAppointments.enterReturnedUserEmail(
      this.locatorData.acEnterReturnUserEmailElem,
      this.testData.returnedUserId
    );
    await this.oabMyAppointments.enterReturnedUserPassword(
      this.locatorData.acReturnUserPWDElem,
      this.testData.returnedUserPassword
    );
    await this.oabMyAppointments.clickReturnedUserLoginButton(
      this.locatorData.acReturnUserLoginElem
    );
  };

  /**
   * Verifies user is able to navigate to my appointments page.
   * @async
   * @method
   * @memberof CreateAppointmentGuestUserScenarioModel
   */
  navigateToMyAppointmentsPage = async () => {
    await this.initBrowser();
    await this.gotoMyAppointments();
    const popups = [
      this.locatorData.acceptCookie,
      this.locatorData.popupClose1,
    ];
    await this.closePopup(popups);
  };

  /**
   * Goes to my appointments page.
   * @memberof CreateAppointmentGuestUserScenarioModel
   */
  gotoMyAppointments = async () => {
    const oabMyAppointments = new MyAppointmentsPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    await oabMyAppointments.myAppointmentsIsLoaded(); // This function verifies that the Login page is fully loaded.
  };

  /**
   * Verifies user is able to cancel the appointment.
   * @async
   * @method
   * @memberof CreateAppointmentGuestUserScenarioModel
   */
  cancelAppointmentCreated = async () => {
    const {
      myAppointmentsElem,
      myAccServiceElem,
      myAccLocationElem,
      myAccDateElem,
      cancelAppElem,
      cancelAppConfirmationYesElem,
      cancelAppConfirmationCloseElem,
      mobCancelAppElem,
    } = this.locatorData;
    await this.oabMyAppointments.cancelAppointment({
      myAppointmentsElem,
      myAccServiceElem,
      myAccLocationElem,
      myAccDateElem,
      cancelAppElem,
      cancelAppConfirmationYesElem,
      cancelAppConfirmationCloseElem,
      mobCancelAppElem,
    });
  };
}

module.exports = CreateAppointmentGuestUserScenarioModel;
