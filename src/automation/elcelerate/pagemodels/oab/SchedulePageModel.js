const PageModel = require('../PageModel');

/**
 * Represents a Page Model (PageModel) for the OAB Schedule Page of the web application.
 *
 * The SchedulePageModel class encapsulates interactions and verifications related to the OAB Schedule page, which typically
 * displays detailed information about available date and time slots.
 *
 * @class SchedulePageModel
 * @extends PageModel
 */
class SchedulePageModel extends PageModel {
  /**
   * Creates an instance of SchedulePageModel.
   *
   * @param {Object} testInfo - Information about the test.
   * @param {Page} page - The Playwright page object.
   * @param {Object} data - Data (locatorData, testData, siteData) for the test.
   */
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }

  /**
   * Used to select an available date and timeslot
   * @param {string} calendarRowsElem Locator of calendar rows element
   * @param {string} nextMonthCalendarElem Locator of next month calendar element
   * @param {string} step3ActiveDayElem Locator of active day element
   * @param {string} step3ActiveTimeElem Locator of active time element
   */
  selectTimeslot = async (
    calendarRowsElem,
    nextMonthCalendarElem,
    step3ActiveDayElem,
    step3ActiveTimeElem
  ) => {
    const NumRows = await this.page.locator(calendarRowsElem).count();
    console.log('NumRows', NumRows);
    let dateSelected = false;
    let firstIteration = true;
    const day = new Date();
    let today = day.getDate();
    console.log('today ' + today);
    while (!dateSelected) {
      if (!firstIteration) {
        // Next week button will be clicked, once first iteration through the entire calendar is complete.
        if (nextMonthCalendarElem) {
          await this.page.locator(nextMonthCalendarElem).click();
          today = 1;
        }
      }
      firstIteration = false;
      const dayInCalendar = this.page.locator(step3ActiveDayElem).nth(0);
      await dayInCalendar.click();
      const selectedDate = dayInCalendar;
      const timeInCalendar = this.page.locator(step3ActiveTimeElem).nth(0);
      const selectedTime = timeInCalendar;
      await timeInCalendar.click();
      dateSelected = true;
      console.log('SelectedDate ' + selectedDate);
      console.log('SelectedTime ' + selectedTime);
    }
    await this.screenshot();
  };

  /**
   * Used to click on next button
   * @param {string} nextBtnAfterDtTimeSelectionElem Locator of next button
   */
  clickNextButton = async (nextBtnAfterDtTimeSelectionElem) => {
    if (nextBtnAfterDtTimeSelectionElem) {
      const NextBtnAfterDtTimeSelectionClassAttribute = await this.page
        .locator(nextBtnAfterDtTimeSelectionElem)
        .getAttribute('class');
      if (
        String(NextBtnAfterDtTimeSelectionClassAttribute).includes('active')
      ) {
        await this.page.locator(nextBtnAfterDtTimeSelectionElem).click();
      }
      await this.screenshot();
    }
  };
}

module.exports = SchedulePageModel;
