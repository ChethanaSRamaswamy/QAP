// npx playwright test --grep "@OAB"
// @ts-check

// Import required modules and libraries
const { test } = require('@playwright/test');

const ScriptDataAdapter = require('../../adapters/script_data_adapter.js');
const CreateAppointmentGuestUserScenarioModel = require('../../scenariomodels/oab/CreateAppointmentGuestUserScenarioModel.js');

const feature = 'OAB';

const { SCOPE } = process.env;
const records = SCOPE ? JSON.parse(SCOPE) : [];

records.forEach((/** @type {string} */ tags) => {
  test(`${tags} AS A GUEST USER I LIKE TO CREATE AN APPOINTMENT ON OAB PAGE @CREATEONLINEAPPOINTMENT`, async ({
    browser,
  }, testInfo) => {
    const canSkipTest = ScriptDataAdapter.isTestEligible(testInfo, tags);
    if (canSkipTest) {
      test.skip();
    }
    const context = await browser.newContext();
    const page = await context.newPage();
    const data = await ScriptDataAdapter.getScriptData(
      tags.split('-'),
      feature,
      testInfo.title
    );

    const oabpage = new CreateAppointmentGuestUserScenarioModel(
      testInfo,
      page,
      data
    );

    await test.step('Verify whether the user has landed on oabpage', async () => {
      await oabpage.navigateToOabPage();
    });

    await test.step('Verify whether the user has selected Appointment Location  and clicked on Location submit button', async () => {
      await oabpage.selectLocationAndClickSubmit();
    });

    await test.step('Verify whether the user has selected a service and clicked on Book Now button', async () => {
      await oabpage.selectServiceAndClickBookNow();
    });

    await test.step('Verify whether the user has selected a timeslot and clicked on Next button', async () => {
      await oabpage.selectTimeslotAndClickNext();
    });

    await test.step('Verify whether the user has entered required information on Schedule page and clicked Submit button', async () => {
      await oabpage.enterRequiredInfoAndClickSubmit();
    });

    await test.step('Check if Confirmation page is loaded and contains all the appointment details', async () => {
      await oabpage.checkAppointmentDetailsOnConfirmationPage();
    });

    await test.step('Verify that the user is able to go to My Appointments page', async () => {
      await oabpage.navigateToMyAppointmentsPage();
    });

    await test.step('Verify that the user is able to add credentials', async () => {
      await oabpage.addCredentials();
    });

    await test.step('Verify that the user is able to cancel the appointment', async () => {
      await oabpage.cancelAppointmentCreated();
    });
  });
});
