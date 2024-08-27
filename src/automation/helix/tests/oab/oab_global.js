/***** GLOAB Locators **************************************************************/
var timeoutSetting = '';

var acEnterReturnUSerEmail = '';
var acReturnUserPWD = '';
var acReturnUserLogin = '';
var cellPhoneNumber = '';
var acceptCookie = '';
var oabUrl = '';
var loginPageUrl = '';
var myAppointmentsPageUrl = '';
var signInButton = '';
var cellPhoneAreaCode = '';
var myAppointmentsPageBookNowButton = '';
var myAppointmentsPageBookAnotherAppButton = '';
var myAppointments = '';
var serviceNameMyAppPage = '';
var dateMyAppPage = '';
var locationMyAppPage = '';
var numOfAppointments = 0;
var serviceNameMyAppointmentsPageLocator = '';
var locationMyAppointmentPage = '';
var cancelAppConfirmationYesButton = '';
var cancelAppConfirmationCloseButton = '';
var cancelAppBtn = '';
var cancelledAppDate = '';
var myAccServiceId = '';
var myAccLocationId = '';
var myAccDateId = '';
var changeAppBtn = '';
var popupClose1 = '';
var selectedLocation = '';
var countiesDropdown = '';
var countiesDropdownValue = '';
var locationDropdown = '';
var locationDropdownValue = '';
var storeDropdown = '';
var storeDropdownValue = '';
var locationSubmitButton = '';
var locationMobileSubmitButton = '';
var service = '';
var selectService = '';
var selectService1 = '';
var serviceNameReviewsDetails = '';
var ratedStars = '';
var reviewCount = '';
var reviewListHeader = '';
var reviewDescription = '';
var ratingsAndReview = '';
var ratingsAndReviewDisabled = '';
var serviceNameReviewsDetailsId = '';
var closeReviewsDetailsButton = '';
var ratedStarsId = '';
var reviewCountId = '';
var reviewListHeaderId = '';
var reviewDescriptionId = '';
var bookNowButton1 = '';
var signInLinkAppReviewPage = '';
var serviceName1AppReviewPageId = '';
var serviceNameAppReviewPageId = '';
var dateAppReviewPageId = '';
var locationAppReviewPageId = '';
var voabServiceNameAppReviewPageId = '';
var voabServiceNameAppReviewPage = '';
var serviceName1AppReviewPage = '';
var dateAppReviewPage = '';
var locationAppReviewPage = '';
var serviceName = '';
var serviceNameAppReviewPage = '';
var removeService = '';
var changeServiceSelectionButton = '';
var addServiceButton = '';
var service2 = '';
var selectService2 = '';
var selectedDate = '';
var selectedTime = '';
var calendarRows = '';
var nextWeekCalendarButton = '';
var nextMonthCalendarButton = '';
var nextMonthBtnSmallCalendar = '';
var i = 1;
var j = 1;
var firstNameError = '';
var lastNameError = '';
var emailError = '';
var phoneNumberError = '';
var termsAndConditionsCheckbox = '';
var oabFirstnameId = '';
var oabLastnameId = '';
var oabGuestEmailId = '';
var phoneFlagDropdownButton = '';
var phoneAreaCode = '';
var phoneAreaCodeDropdownValue = '';
var phoneAreaCodeDropdown = '';
var oabMobileNumber = '';
var emailPromotionCheckbox = '';
var acceptPrivecyPolicyCheckbox = '';
var nextBtnAfterDtTimeSelection = '';
var editDtTimeBtn = '';
var bookNowButton2 = '';
var serviceName1AppConfirmPageId = '';
var dateAppConfirmPageId = '';
var locationAppConfirmPageId = '';
var voabServiceNameAppConfirmPageId = '';
var zoomLinkAppConfirmPageId = '';
var voabServiceNameAppConfirmPage = '';
var zoomLinkAppConfirmPage = '';
var serviceName1AppConfirmPage = '';
var dateAppConfirmPage = '';
var locationAppConfirmPage = '';
var serviceNameAppConfirmPageId = '';
var serviceNameAppConfirmPage = '';
var addToCalendarDropdown = '';
var addToCalendarDropdownValue = '';
var selectedDateMob = '';
var selectedTimeMob = '';
var calendarRowsMob = '';
var nextWeekCalendarButtonMob = '';
var m; //rows in date calendar mobile
var n; // columnt in date calendar mobile
var p; // rows in time calendar mobile
var q; // columns in time calednar mobile
var mobCalendarScrollTo = '';
var appReviewPageReturnUserEmail = '';
var appReviewPageReturnUserPWD = '';
var appReviewPageReturnUserLoginButton = '';
var privacyPolicyRadioButton = '';
var smsNotificationRadioButton = '';
var oabNewsletterRB = '';
var oabRecevietextRB = '';
var oabReceiveDMRB = '';
var marketingInformationRB = '';
var virtualAppointmentButton = '';
var virtualMobileAppointmentButton = '';
var acceptPrivecyPolicyCheckboxReturnUser = '';
var serviceNameThirdStep = '';
var serviceName1ThirdStep = '';
var goToVirtualAppButton = '';
var goToPhysicalAppButton = '';
var mobileCalendarButton = '';
var expandMyAppBtn = '';
var nextBtnAfterDtTimeSelection2 = '';
var welcomeLocation = '';
var welcomeLanguage = '';
var welcomeSubmitBtn = '';
var toutToCallStore = '';
var timeout = '';
var zoomLinkId = '';
var pollingTime = '';
var waitForTime = '';

const matchCondition = true;
const messages = {
  popupNotExist: 'Popup does not exist',
  akamaiBypassSet1: 'AKAMAI BYPASS IS SET TO 1',
  akamaiBypassSet0: 'AKAMAI BYPASS IS SET TO 0',
  varnishBypassSet1: 'VARNISH BYPASS IS SET TO 1',
  stepNotApplicable: 'This step is not applicable for this Brand/Locale',
  acceptCookieButton: 'Accept cookie button clicked',
  noCookiePopup: 'No cookie pop-up to click and hence it is skipped',
  locationDifferentFormat:
    'Even though both are same, location displayed in Appointment Confirmation Page and Location selected in Appointment Review page have different format',
  toutToCallDisplayed:
    'Tout to call store is displayed for physical appointments',
  stepNotApplicableVirtualAppointments:
    'This step is not applicable for virtual appointments',
  myAppointmentsBookButton: 'My Appointments Page Book Now Button clicked',
  myAppointmentsBookAnotherButton:
    'My Appointments Page Book Another Appointment Button clicked',
  myAppointmentsBookButtonNotAvailable:
    'My Appointments Page Book Another Appointment Button not available',
  noAppointmentsDisplayed: 'There is no Appointment in the list',
  appointmentsDisplayed: 'Following are the Appointments in the list',
  matchingAppointments: 'Appointment that matches are:',
  identicalServiceNames:
    'Service Name in App Confirm Page is same as Service Name in My App Page',
  identicalVoabServiceNames:
    'VOAB Service Name in App Confirm Page is same as Service Name in My App Page',
  identicalLocation:
    'Location selected is same as Location in My Appointments Page',
  availableBookedAppointment:
    'Booked Appointment is available in My Appointments page',
  differentDate:
    'Date in Appointment Confirmation Page is not same as date in My Appointments page',
  cancellingAppointment: 'Cancelling the first appointment of the list with:',
  cancelButtonClicked: 'In My Appointments page Cancel Service button clicked',
  yesButtonClicked:
    'In Cancel Appointment confirmation popup Yes button clicked',
  closeButtonClicked:
    'In Cancel Appointment confirmation popup close button clicked',
  cancelledAppointment: 'Appointment Successfully Cancelled',
  appointmentNotCancelled: 'Appointment is not Cancelled',
  changedServiceReviewPage:
    'In Appointment Review page Changing the Service selected before confirmation',
  modifyAppointment:
    'Modifying the first appointment of the list with the following details:',
  changeAppointment: 'Change Appointment button clicked',
  modifyDateAndTime: 'Only Date and Time for the appointment can be modified',
  serviceNotSelected: 'Service is not selected',
  serviceSelected: 'Service selected',
  ratingsAndReviewButtonClicked: 'Ratings and Review button is clicked',
  bookButtonDisabled: 'Book Now button is disabled, so cannot be clicked',
  bookButtonClicked: 'Book Now button is clicked',
  signInLinkClicked:
    'Return user SignIn Link clicked in Appointment Review Page',
  changeServiceSelection:
    'In Appointment Review page Change Service Selection Button clicked',
  secondServiceNotDisplayed: 'No second service',
  nextWeekButtonClicked: 'Next Week Calendar button clicked',
  nextMonthButtonClicked: 'Next Month Calendar button clicked',
  errorMessageDisplayed: 'Error message for empty field is displayed',
  errorMessageNotDisplayed: 'Error message for empty field is not displayed',
  checkboxNotChecked: 'Checkbox is not checked for terms and condition',
  checkboxChecked: 'Checkbox is checked for terms and conditions',
  lastnameNotAvailable: 'Lastname field is not available',
  phoneFlagClicked: 'Phone flag dropdown button is clicked',
  phoneAreaExpanded: 'Phone area code dropdown is expanded',
  phoneAreaNotExpanded: 'Phone area code dropdown is not expanded',
  phoneAreaDisplayed: 'Phone area code is displayed',
  phoneAreaNotDisplayed: 'Phone area code is not displayed',
  emailPromotionCheckbox: 'Check email promotion checkbox clicked',
  acceptPrivacyCheckbox: 'Check Accept privacy policy checkbox clicked',
  nextButtonClicked: 'Next button clicked after Date Time selection',
  nextButtonDisabled: 'Next button in Date Time selection page is disable',
  zoomLinkDisplayed: 'Zoom Link is present in App Confirm Page',
  identicalServices:
    'Service Name in App Confirm Page is same as Service Name in App Review Page',
  sameServiceName:
    'First Service Name in App Confirm Page is same as First Service Name in App Review Page',
  serviceNameThirdStep:
    'Service Name in App Confirm Page is same as Service Name in ThirdStep',
  identicalLocationReviewPage:
    'Location selected is same as Location in App Review Page',
  identicalDateAndTime:
    'Date and Time in App Confirm Page is same as Date and Time in App Review Page',
  appointmentBooked: 'Appointment Booked Successfully',
  scrollUpStep: 'ScrollUP Step is not applicable',
  calendarButtonClicked: 'Calendar  button is clicked',
  expandButtonClicked: 'Expand button is clicked',
  welcomeLocationClicked: 'Welcome Location clicked',
  noLocationPopup: 'No location popup and hence it is skipped',
  welcomeLanguageClicked: 'Welcome Language clicked',
  noLanguagePopup: 'No Language popup and hence it is skipped',
  welcomeSubmitButton: 'Welcome Submit Button clicked',
  signInPageDisplayed: 'Sign in page is displayed',
  signInPageNotDisplayed: 'Sign in page is not displayed',
  fieldPrepopulated: 'Field prepopulated',
};

function makeEmail() {
  var strValues = 'abcdefg12345';
  var strEmail = '';
  var strTmp;
  for (var i = 0; i < 10; i++) {
    strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
    strEmail = strEmail + strTmp;
  }
  strTmp = '';
  strEmail = strEmail + '@';
  for (var j = 0; j < 8; j++) {
    strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
    strEmail = strEmail + strTmp;
  }
  strEmail = strEmail + '.com';
  return strEmail;
}

var RUID = [];
var popupClose = [];
function ReturnUserID() {
  return RUID[Math.floor(Math.random() * RUID.length)];
}

let upper = 9999;
let lower = 1111;

function RandomNumber() {
  var RandomNum = Math.floor(Math.random() * (upper - lower + 1)) + lower;
  return RandomNum;
}

var t = require('taiko');
let siteDefinition, source, NullDataException;
const Helper = require('../../helpers/helper');
const Util = require('../../../../utilities/util');
assert = require('assert');
let Hengine = require('../../../../datainterface/providers/hengine');

// should come from ID file
var CommonData = {};
var feature = 'OAB';

//Updated

function reinitialize() {
  RUID = [CommonData.RID, CommonData.RID1, CommonData.RID2, CommonData.RID3];

  popupClose = [
    CommonData.PopupClose1,
    CommonData.PopupClose2,
    CommonData.PopupClose3,
    CommonData.PopupClose4,
    CommonData.PopupClose5,
    CommonData.PopupClose6,
    CommonData.PopupClose7,
    CommonData.PopupClose8,
  ];
}

async function initFrameworkSettings() {
  // This should come from Gauge Tags inputs
  let tags = process.env.tags.split(',');
  ({ siteDefinition, source, NullDataException } = await Hengine.Initializer(
    tags,
    feature,
    this
  ));

  // Abort, if there is any error while setting up the locators and test data
  if (NullDataException.isError) {
    assert(!matchCondition, NullDataException.message.join('\n'));
  }

  // Override this
  Object.assign(this, source);
  // Taiko API overrides
  t = await Helper.initAutoHeal(siteDefinition, t);

  // Re-initialize variables
  reinitialize();

  // Delete all the cookies
  await t.deleteCookies();

  gauge.message('ENVIRONMENT : ' + siteDefinition.executionContext.environment);
}

async function PopUpClose() {
  if (await (await t.$(popupClose1)).exists()) {
    try {
      await t.evaluate(
        await t.$(popupClose1, { waitForEvents: ['DOMContentLoaded'] }),
        (ele) => ele.click()
      );
    } catch (error) {
      gauge.message(messages.popupNotExist);
    }
  }
}

/******** BASE URL and ADM URL IS RECEIVED ******/

step('OAB Mobile Device Emulation', async function () {
  await t.emulateDevice('iPhone X');
});

step('OAB Initialize Helix', async function () {
  // Initialize the selectors from DB
  await initFrameworkSettings();
});

// Configuring the prerequisites like set cookies, revision tag
step(
  'OAB Configuring the prerequisites like set cookies, revision tag',
  async function () {
    await t.setConfig({ navigationTimeout: parseInt(timeoutSetting, 10) });
    await Helper.setWindowSize(Util.ScreenSizes['1040p'], t);
    await Helper.setWAFCookie(siteDefinition, t);
    await Helper.setAdroll(siteDefinition, t);
    await Helper.setAkamaiBypass(siteDefinition, t);
    await Helper.setApiEnv(siteDefinition, t);
    await Helper.setJsRepo(siteDefinition, t);
    await Helper.getPerlgemEnvCookie(siteDefinition, t);
    await Helper.setOtherCookies(siteDefinition, t);
    await Helper.setTestOrderCookie(siteDefinition, t);
    await Helper.setRevisionTag(siteDefinition, t);
    environment = siteDefinition.executionContext.environment.toUpperCase();
    await t.goto(siteDefinition.executionContext.url, {
      waitForEvents: ['DOMContentLoaded'],
    });
    if (environment === 'PROD' || environment === 'PREPROD') {
      baseURL = Helper.getBaseUrl(siteDefinition);
    } else {
      baseURL =
        Helper.getBaseUrl(siteDefinition).substr(0, 8) +
        Helper.getBaseUrl(siteDefinition).substr(Helper.getBaseUrl(siteDefinition).indexOf('@') + 1);
    }
  });

step('OAB Account Return User EmailId <plat>', async function (plat) {
  if (acEnterReturnUSerEmail !== '') {
    await (await t.$(acEnterReturnUSerEmail)).exists(pollingTime, timeout);
    if (plat === 'OAB') {
      await t.write(CommonData.RID, t.into(await t.$(acEnterReturnUSerEmail)), {
        waitForEvents: ['DOMContentLoaded'],
        waitForNavigation: false,
      });
      gauge.message('Return user email id: ' + CommonData.RID);
    } else if (plat === 'VOAB') {
      await t.write(
        CommonData.RID1,
        t.into(await t.$(acEnterReturnUSerEmail)),
        {
          waitForEvents: ['DOMContentLoaded'],
          waitForNavigation: false,
        }
      );
      gauge.message('Return user email id: ' + CommonData.RID1);
    }
  }
});

step('OAB Account Return User PWD', async function () {
  if (acReturnUserPWD !== '') {
    await (await t.$(acReturnUserPWD)).exists(pollingTime, timeout);
    await t.write(CommonData.RPWD, t.into(await t.$(acReturnUserPWD)), {
      waitForEvents: ['DOMContentLoaded'],
      waitForNavigation: false,
    });
    gauge.message('Return user password: ' + CommonData.RPWD);
    gauge.screenshot();
  }
});

step('OAB Account Return User Login Button', async function () {
  if (acReturnUserLogin !== '') {
    await (await t.$(acReturnUserLogin)).exists(pollingTime, timeout);
    await t.evaluate(
      await t.$(acReturnUserLogin, { waitForEvents: ['DOMContentLoaded'] }),
      (ele) => ele.click(),
      { waitForNavigation: false }
    );
    gauge.screenshot();
  }
});

step('OAB Enter cell Phone number', async function () {
  if (cellPhoneNumber !== '') {
    await t.write(CommonData.Mobile1, t.into(await t.$(cellPhoneNumber)));
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

/******** CODE FOR APPOINTMENT BOOKING ******/

step('OAB Click Accept Cookie', async function () {
  if (acceptCookie !== '') {
    try {
      await t.waitFor(await t.$(acceptCookie));
      await t.evaluate(await t.$(acceptCookie), (ele) => ele.click());
      gauge.message(messages.acceptCookieButton);
    } catch (e) {
      // exception added for no popup appearing on website.
      gauge.message(messages.noCookiePopup);
    }
  }
});

step('OAB Assumptions for this TC', async function () {
  if (CommonData.SELECTEDLOCATION !== '') {
    gauge.message(
      'For this TC the location selected is: ' + CommonData.SELECTEDLOCATION
    );
    gauge.message(messages.locationDifferentFormat);
    gauge.message(
      'The step is considered to be pass, if both the locations have ' +
        CommonData.ASSERTEDLOCATION +
        ' present in them'
    );
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('OAB Open website for Appointment Booking', async function () {
  await t.goto(baseURL + oabUrl,
    { 
     waitForEvents: ['DOMContentLoaded']});
     gauge.screenshot();
});

step('OAB Open Return user login page', async function () {
  await t.goto(baseURL + loginPageUrl, {
    waitForEvents: ['DOMContentLoaded'],
  });
  gauge.screenshot();
});

step('OAB Navigate to the My appointments', async function () {
  // There is no specific element, but we need to use hard code wait
  await t.waitFor(timeout);
  await t.goto(baseURL + myAppointmentsPageUrl, {
    waitForEvents: ['DOMContentLoaded'],
  });
  gauge.screenshot();
});

step('OAB Click on Sign in button', async function () {
  if (CommonData.BRLOC.includes('EL-UK')) {
    if (signInButton !== '') {
      await (await t.$(signInButton)).exists(pollingTime, timeout);
      await t.evaluate(
        await t.$(signInButton, { waitForEvents: ['DOMContentLoaded'] }),
        (ele) => ele.click(),
        { waitForNavigation: false }
      );
      gauge.screenshot();
    }
  }
});

var brandLocaleSet43 = ['OR-UK', 'MC-US'];
step('OAB Check tout to call is displayed <plat>', async function (plat) {
  if (brandLocaleSet43.includes(CommonData.BRLOC)) {
    if ((await (await t.$(toutToCallStore)).text()) !== '') {
      gauge.message(messages.toutToCallDisplayed);
      gauge.screenshot();
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('OAB select cell Phone area code', async function () {
  if (cellPhoneAreaCode !== '') {
    await t.dropDown({ class: cellPhoneAreaCode }).select({ index: '1' });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('OAB Enter Return User Email id <plat>', async function (plat) {
  const oabEmailValue = await t.evaluate(await t.$(oabGuestEmailId), (ele) => {return ele.getAttribute('value')})
  if (oabGuestEmailId !== '' && oabEmailValue === '') {
    if (plat === 'OAB') {
      await t.write(CommonData.RID, t.into(await t.$(oabGuestEmailId)), {
        waitForEvents: ['DOMContentLoaded'],
        waitForNavigation: false,
      });
      gauge.message('Return user email id: ' + CommonData.RID);
      console.log('oab email');
    } else if (plat === 'VOAB') {
      await t.write(CommonData.RID1, t.into(await t.$(oabGuestEmailId)), {
        waitForEvents: ['DOMContentLoaded'],
        waitForNavigation: false,
      });
      gauge.message('Return user email id: ' + CommonData.RID1);
      console.log('voab emial');
    } 
  } else {
    gauge.message(messages.fieldPrepopulated);
  }
});

var brandLocaleSet1 = ['CL-HK', 'MC-DE', 'MC-TW', 'MC-AU', 'AV-AU'];
var brandLocaleSet2 = [
  'JM-JP',
  'JM-KR',
  'JM-US',
  'JM-EU',
  'JM-UK',
  'JM-CA',
  'MC-US',
  'BB-TH',
  'CL-UK',
  'EL-UK',
  'JM-FR',
  'LM-UK',
  'BB-UK',
  'LM-AU',
  'AV-US',
  'TF-UK',
  'OR-UK',
  'AV-UK',
];
step('OAB Click My Appointments Page Book Now Button', async function () {
  if (brandLocaleSet1.includes(CommonData.BRLOC)) {
    if (myAppointmentsPageBookNowButton !== '') {
      await (
        await t.$(myAppointmentsPageBookNowButton)
      ).exists(pollingTime, timeout);
      await t.evaluate(await t.$(myAppointmentsPageBookNowButton), (ele) =>
        ele.click()
      );
      gauge.message(messages.myAppointmentsBookButton);
    }
  } else if (brandLocaleSet2.includes(CommonData.BRLOC)) {
    var flag = 0;
    if (myAppointmentsPageBookNowButton !== '') {
      try {
        await (
          await t.$(myAppointmentsPageBookNowButton)
        ).exists(pollingTime, timeout);
        await t.evaluate(
          await t.$(myAppointmentsPageBookNowButton, {
            waitForEvents: ['DOMContentLoaded'],
          }),
          (ele) => ele.click(),
          { waitForNavigation: false }
        );
        gauge.message(messages.myAppointmentsBookButton);
        gauge.screenshot();
        flag = 1;
      } catch (e) {
        flag = 2; // exeption added to set flag if the first Book Appointmetn button is not avaiable
      }
    }
    if (flag === 2) {
      if (myAppointmentsPageBookAnotherAppButton !== '') {
        try {
          await (
            await t.$(myAppointmentsPageBookAnotherAppButton)
          ).exists(pollingTime, timeout);
          await t.evaluate(
            await t.$(myAppointmentsPageBookAnotherAppButton),
            (ele) => ele.click()
          );
          gauge.message(messages.myAppointmentsBookAnotherButton);
        } catch (e) {
          gauge.message(messages.myAppointmentsBookButtonNotAvailable);
        }
      }
    }

    /*
        It might happen that both the buttons exists and visible. To prevent clicking both the buttons, the above code is implemented
        */
  }
});

//ServiceNameMyAppPage, DateMyAppPage and LocationMyAppPage contains the App in My App pg, that matches with App Confirmation pg
var brandLocaleSet3 = ['JM-JP', 'JM-KR', 'JM-US', 'JM-EU', 'JM-CA', 'LM-AU'];
var brandLocaleSet4 = [
  'JM-UK',
  'MC-US',
  'BB-TH',
  'CL-UK',
  'EL-UK',
  'JM-FR',
  'LM-UK',
  'BB-UK',
  'AV-US',
  'TF-UK',
  'OR-UK',
  'JM-EU',
  'MC-DE',
  'MC-TW',
  'MC-AU',
  'AV-AU',
  'AV-UK',
];
step(
  'OAB Get Appointment details in My Appointments page <plat>',
  async function (plat) {
    if (brandLocaleSet3.includes(CommonData.BRLOC)) {
      serviceNameAppConfirmPage = serviceNameAppConfirmPage.trim();
      locationAppConfirmPage = locationAppConfirmPage.trim();
      //If no app is present in My App pg then the element MyAppointments won't be precent in the pg, so the hardcoded wait is needed
      //await waitFor($(MyAppointments))
      await t.waitFor(timeout);
      if (myAppointments !== '') {
        numOfAppointments = (await (await t.$(myAppointments)).elements())
          .length;
        console.log('NumOfAppointments: ' + numOfAppointments);
        if (numOfAppointments === 0) {
          gauge.message(messages.noAppointmentsDisplayed);
        } else {
          gauge.message(messages.appointmentsDisplayed);
        }

        for (var i = 1; i <= numOfAppointments; i++) {
          var myAccService = await (
            await t.$(
              'div#my-appointments-current > div:nth-of-type(' +
                i +
                ') > div.appointment-details > div.your-lessons > span.lesson'
            )
          ).text();
          //Hand & Arm Massage (20 min)
          var myAccLocation = await (
            await t.$(
              'div#my-appointments-current > div:nth-of-type(' +
                i +
                ') > div.appointment-details > div.location > span.location-name'
            )
          ).text();
          //'Brookfield Place'
          var myAccDate = await (
            await t.$(
              'div#my-appointments-current > div:nth-of-type(' +
                i +
                ') > div.appointment-details > div.date-time > span.appt-date'
            )
          ).text();
          //AUG 6, 2021 at 5PM
          if (CommonData.BRLOC.includes('LM-AU')) {
            var myDate = await (
              await t.$(
                'div#my-appointments-current > div:nth-of-type(' +
                  i +
                  ') > div.appointment-details > div.appointment-info-content > div.date-time > span'
              )
            ).text();
            var myAccTime = await (
              await t.$(
                'div#my-appointments-current > div:nth-of-type(' +
                  i +
                  ') > div.appointment-details > div.appointment-info-content > div.start-time > span'
              )
            ).text();
            var myAccDate = myDate + '\n\n' + myAccTime;
          }
          gauge.message('Appointment Number ' + i);
          gauge.message('Service Name: ' + myAccService);
          gauge.message('Location: ' + myAccLocation);
          gauge.message('Date: ' + myAccDate);
          myAccService = myAccService.trim();
          myAccLocation = myAccLocation.trim();
          // observed that 2 appointments can be booked in the same date and time by one user
          // Below, taking out that appointment, from my app pg, which has date, service name and location same as that in AppConfirmPg and
          // putting in DateMyAppPage, ServiceNameMyAppPage and LocationMyAppPage respectively
          // next DateMyAppPage ServiceNameMyAppPage and LocationMyAppPage will be asserted with DateAppConfirmPage, ServiceNameAppConfirmPage and
          // LocationAppConfirmPage respectively
          if (dateAssertion(myAccDate, dateAppConfirmPage) === true) {
            dateMyAppPage = myAccDate;
            gauge.message(messages.matchingAppointments);
            gauge.message('DateMyAppPage: ' + dateMyAppPage);
            if (
              serviceNameAppConfirmPage.includes(
                CommonData.ASSERTEDSERVICENAMEPART1
              ) &&
              serviceNameAppConfirmPage.includes(
                CommonData.ASSERTEDSERVICENAMEPART2
              ) &&
              myAccService.includes(CommonData.ASSERTEDSERVICENAMEPART1) &&
              myAccService.includes(CommonData.ASSERTEDSERVICENAMEPART2)
            ) {
              serviceNameMyAppPage = myAccService;
              gauge.message('ServiceNameMyAppPage: ' + serviceNameMyAppPage);
            } else if (CommonData.BRLOC.includes('LM-AU')) {
              serviceName1AppConfirmPage = serviceNameAppConfirmPage;
              serviceNameAppConfirmPage.includes(
                CommonData.ASSERTEDSERVICENAMEPART1.toUpperCase()
              ) &&
                serviceNameAppConfirmPage.includes(
                  CommonData.ASSERTEDSERVICENAMEPART2.toUpperCase()
                ) &&
                myAccService.includes(
                  CommonData.ASSERTEDSERVICENAMEPART1.toUpperCase()
                ) &&
                myAccService.includes(
                  CommonData.ASSERTEDSERVICENAMEPART2.toUpperCase()
                );
              serviceNameMyAppPage = myAccService;
              gauge.message('ServiceNameMyAppPage: ' + serviceNameMyAppPage);
            }
            if (locationAppConfirmPage.includes(myAccLocation)) {
              locationMyAppPage = myAccLocation;
              gauge.message('LocationMyAppPage: ' + locationMyAppPage);
            }
          }
        }
      }
    } else if (brandLocaleSet4.includes(CommonData.BRLOC)) {
      if (plat === 'VOAB') {
        voabServiceNameAppConfirmPage = voabServiceNameAppConfirmPage.trim();
      } else if (plat === 'OAB') {
        //As of now Single service can be selected
        serviceName1AppConfirmPage = serviceName1AppConfirmPage.trim();
        locationAppConfirmPage = locationAppConfirmPage.trim();
      }
      //If no app is present in My App pg then the element MyAppointments won't be precent in the pg, so the hardcoded wait is needed
      //await waitFor($(MyAppointments))
      await t.waitFor(timeout);
      if (myAppointments !== '') {
        numOfAppointments = (await (await t.$(myAppointments)).elements())
          .length;
        console.log('NumOfAppointments: ' + numOfAppointments);
        if (numOfAppointments === 0) {
          gauge.message(messages.noAppointmentsDisplayed);
        } else {
          gauge.message(messages.appointmentsDisplayed);
        }

        for (var i = 1; i <= numOfAppointments; i++) {
          if (
            CommonData.BRLOC.includes('MC-DE') ||
            CommonData.BRLOC.includes('MC-TW') ||
            CommonData.BRLOC.includes('MC-AU')
          ) {
            var myAccService = await t
              .$(
                'div#my-appointments-current > div:nth-of-type(' +
                  i +
                  ') > .appointment-details > .your-lessons'
              )
              .text();
          } else if (CommonData.BRLOC.includes('AV-AU')) {
            var myAccService = await t
              .$(
                "//div[@class='appointment-container'][" +
                  i +
                  "]//div[@class='appointment-details']//div//div/div[@class='content__item--name services-name js-service-name']"
              )
              .text();
          } else if (CommonData.BRLOC.includes('BB-TH')) {
            var myAccService = await t
              .$(
                'div.appointments-body > div:nth-of-type(' +
                  i +
                  ') > .appointment-details > .your-lessons > span'
              )
              .text();
          } else if (CommonData.BRLOC.includes('BB-UK')) {
            var myAccService = await (
              await t.$(
                'div#my-appointments-current > div.appointments-body > div:nth-of-type(' +
                  i +
                  ') > div.appointment-details > div.your-lessons > span.name'
              )
            ).text();
          } else if (
            CommonData.BRLOC.includes('OR-UK') ||
            CommonData.BRLOC.includes('AV-US')
          ) {
            var myAccService = await (
              await t.$(
                'div#my-appointments-current > div.js-appt-container > div:nth-of-type(' +
                  i +
                  ') > div.appointment-details > div.js-your-services > div.js-service > div.js-service-name'
              )
            ).text();
          } else if (CommonData.BRLOC.includes('MC-US')) {
            var myAccService = await (
              await t.$(
                'div#my-appointments-current > div:nth-of-type(2) > div.appointment-details > div.your-lessons'
              )
            ).text();
          } else if (CommonData.BRLOC.includes('TF-UK')) {
            var myAccService = await (
              await t.$(
                'div#my-appointments-current > div:nth-of-type(2) >div.appointment-container >div.appointment-details >div.your-lessons > span'
              )
            ).text();
          } else {
            var myAccService = await (
              await await t.$(
                'div#my-appointments-current > div:nth-of-type(' +
                  i +
                  ') > div.appointment-details > div.your-lessons > span.lesson'
              )
            ).text();
            //Hand & Arm Massage (20 min)
          }
          myAccService = myAccService.trim();
          if (plat === 'OAB') {
            if (
              CommonData.BRLOC.includes('MC-DE') ||
              CommonData.BRLOC.includes('MC-TW') ||
              CommonData.BRLOC.includes('MC-AU')
            ) {
              var myAccLocation = await (
                await t.$(
                  'div#my-appointments-current > div:nth-of-type(' +
                    i +
                    ') > .appointment-details > .location .location-name'
                )
              ).text();
            } else if (CommonData.BRLOC.includes('AV-AU')) {
              var myAccLocation = await (
                await t.$(
                  "//div[@class='appointment-container'][" +
                    i +
                    "]//div[@class='appointment-details']//div[@class='appointment-details__item location physical_oab_content']//div//div[@class='location-name']"
                )
              ).text();
            } else if (CommonData.BRLOC.includes('BB-UK')) {
              var myAccLocation = await (
                await t.$(
                  'div#my-appointments-current > div.appointments-body > div:nth-of-type(' +
                    i +
                    ') > div.appointment-details > div.location > span.location-name'
                )
              ).text();
            } else if (CommonData.BRLOC.includes('EL-UK')) {
              var myAccLocation = await (
                await t.$(
                  'div#my-appointments-current > div:nth-of-type(1) > div.appointment-details > div.location > div.location-details > span.location-name'
                )
              ).text();
            } else if (CommonData.BRLOC.includes('MC-US')) {
              var myAccLocation = await (
                await t.$(
                  'div#my-appointments-current > div:nth-of-type(2) > div.appointment-details > div.location > span.location-name'
                )
              ).text();
            } else if (
              CommonData.BRLOC.includes('OR-UK') ||
              CommonData.BRLOC.includes('AV-US')
            ) {
              var myAccLocation = await (
                await t.$(
                  'div#my-appointments-current > div.js-appt-container > div:nth-of-type(' +
                    i +
                    ') > div.appointment-details > div.location > div.location-info > div.location-name'
                )
              ).text();
            } else if (CommonData.BRLOC.includes('TF-UK')) {
              var myAccLocation = await (
                await t.$(
                  'div#my-appointments-current > div:nth-of-type(2) > div.appointment-container > div.appointment-details > div.location > span.location-name'
                )
              ).text();
            } else {
              var myAccLocation = await (
                await t.$(
                  'div#my-appointments-current > div:nth-of-type(' +
                    i +
                    ') > div.appointment-details > div.location > span.location-name'
                )
              ).text();
              //'Brookfield Place'
            }
            myAccLocation = myAccLocation.trim();
          } else if (plat === 'VOAB') {
            if (
              CommonData.BRLOC.includes('CL-UK') ||
              CommonData.BRLOC.includes('JM-FR') ||
              CommonData.BRLOC.includes('AV-UK')
            ) {
              var myAccLocation = await (
                await t.$(
                  'div#my-appointments-current > div:nth-of-type(' +
                    i +
                    ') > div.appointment-details > div.location > span.location-name'
                )
              ).text();
            } else if (CommonData.BRLOC.includes('BB-UK')) {
              var myAccLocation = await (
                await t.$(
                  'div#my-appointments-current >div.appointments-body > div:nth-of-type(' +
                    i +
                    ') >div.appointment-details >div.location >span.location-name'
                )
              ).text();
            } else {
              var myAccLocation = await (
                await t.$(
                  'div#my-appointments-current > div:nth-of-type(1) > div.appointment-details >div:nth-of-type(5) > div.location-details > span.location-virtual-link'
                )
              ).text();
            }
            myAccLocation = myAccLocation.trim();
          }
          if (
            CommonData.BRLOC.includes('MC-DE') ||
            CommonData.BRLOC.includes('MC-TW') ||
            CommonData.BRLOC.includes('MC-AU')
          ) {
            var myAccDate = await (
              await t.$(
                'div#my-appointments-current > div:nth-of-type(' +
                  i +
                  ') .appt-date'
              )
            ).text();
          } else if (CommonData.BRLOC.includes('AV-AU')) {
            var myAccDateSup = '';
            myAccDateSup = await (
              await t.$(
                "//div[@class='appointment-container'][1]//div[@class='appointment-details']//div[@class='appointment-details__item date-time js-date-time']//div[@class='date-time__content appt-date']"
              )
            ).text();
            myAccDateSup = myAccDateSup.split('\n');
            console.log(myAccDateSup[1]);
            console.log(myAccDateSup[2]);
            var myAccDate = myAccDateSup[1] + ' ,' + myAccDateSup[2];
          } else if (CommonData.BRLOC.includes('BB-TH')) {
            var myAccDate = await (
              await t.$(
                'div.appointments-body > div:nth-of-type(' +
                  i +
                  ') > .appointment-details > .date-time > .appt-date'
              )
            ).text();
          } else if (CommonData.BRLOC.includes('LM-UK')) {
            var myAccDate = await (
              await t.$(
                'div#my-appointments-current > div:nth-of-type(' +
                  i +
                  ') > div.appointment-details > div.appointment-info-content'
              )
            ).text();
          } else if (CommonData.BRLOC.includes('BB-UK')) {
            var myAccDate = await (
              await t.$(
                'div#my-appointments-current > div.appointments-body > div:nth-of-type(' +
                  i +
                  ') > div.appointment-details > div.date-time'
              )
            ).text();
          } else if (
            CommonData.BRLOC.includes('OR-UK') ||
            CommonData.BRLOC.includes('AV-US')
          ) {
            var myAccDate = await (
              await t.$(
                'div#my-appointments-current > div.js-appt-container > div:nth-of-type(' +
                  i +
                  ') > div.appointment-details > div.js-date-time  > div.appt-date'
              )
            ).text();
          } else if (CommonData.BRLOC.includes('MC-US')) {
            var myAccDate = await (
              await t.$(
                'div#my-appointments-current > div:nth-of-type(2) > div.appointment-details > div.date-time > div.appt-date'
              )
            ).text();
          } else if (CommonData.BRLOC.includes('TF-UK')) {
            var myAccDate = await (
              await t.$(
                'div#my-appointments-current > div:nth-of-type(2) > div.appointment-container > div.appointment-details >  div.date-time'
              )
            ).text();
          } else {
            var myAccDate = await (
              await t.$(
                'div#my-appointments-current > div:nth-of-type(' +
                  i +
                  ') > div.appointment-details > div.date-time > span.appt-date'
              )
            ).text();
            //AUG 6, 2021 at 5PM
          }
          gauge.message('Appointment Number ' + i);
          gauge.message('Service Name: ' + myAccService);
          gauge.message('Location: ' + myAccLocation);
          gauge.message('Date: ' + myAccDate);

          // because of the issue: minute part is not displayed in My Appointments page, more than one apps booked in the same date and time can be found in My Appointments page
          // Below, taking out that appointment, from my app pg, which has date, service name and location same as that in AppConfirmPg and
          // putting in DateMyAppPage, ServiceNameMyAppPage and LocationMyAppPage respectively
          // next DateMyAppPage ServiceNameMyAppPage and LocationMyAppPage will be asserted with DateAppConfirmPage, ServiceNameAppConfirmPage and
          // LocationAppConfirmPage respectively
          if (plat === 'OAB' && CommonData.BRLOC.includes('MC-DE')) {
            gauge.message(messages.stepNotApplicable);
          } else if (dateAssertion(myAccDate, dateAppConfirmPage) === true) {
            dateMyAppPage = myAccDate;
            gauge.message(messages.matchingAppointments);
            gauge.message('DateMyAppPage: ' + dateMyAppPage);
            //gauge.message("ServiceNameAppConfirmPage: "+ServiceNameAppConfirmPage)
            if (plat === 'OAB') {
              if (
                serviceName1AppConfirmPage.includes(
                  CommonData.ASSERTEDSERVICENAMEPART1
                ) &&
                serviceName1AppConfirmPage.includes(
                  CommonData.ASSERTEDSERVICENAMEPART2
                ) &&
                myAccService.includes(CommonData.ASSERTEDSERVICENAMEPART1) &&
                myAccService.includes(CommonData.ASSERTEDSERVICENAMEPART2)
              ) {
                serviceNameMyAppPage = myAccService;
                gauge.message('ServiceNameMyAppPage: ' + serviceNameMyAppPage);
                if (locationAppConfirmPage.includes(myAccLocation)) {
                  locationMyAppPage = myAccLocation;
                  gauge.message('LocationMyAppPage: ' + locationMyAppPage);
                }
              }
            } else if (plat === 'VOAB') {
              if (
                voabServiceNameAppConfirmPage.includes(myAccService) ||
                myAccService.includes(voabServiceNameAppConfirmPage)
              ) {
                serviceNameMyAppPage = myAccService;
                gauge.message('ServiceNameMyAppPage: ' + serviceNameMyAppPage);
              }
            }
          }
        }
      }
    }
    gauge.screenshot();
  }
);

var brandLocaleSet5 = ['JM-US', 'JM-JP', 'JM-CA', 'JM-EU', 'LM-UK'];
var brandLocaleSet6 = [
  'JM-UK',
  'MC-US',
  'CL-UK',
  'EL-UK',
  'JM-FR',
  'BB-UK',
  'LM-AU',
  'AV-US',
  'TF-UK',
  'OR-UK',
  'AV-UK',
];
var brandLocaleSet7 = ['MC-DE', 'MC-TW', 'MC-AU', 'AV-AU', 'BB-TH'];
step(
  'OAB Assert Service Name of Appointment Confirmation and My Appointments Page <plat>',
  { continueOnFailure: true },
  async function (plat) {
    serviceNameMyAppPage = await (
      await t.$(serviceNameMyAppointmentsPageLocator)
    ).text();
    serviceNameAppConfirmPage = serviceNameAppConfirmPage.trim();
    serviceNameMyAppPage = serviceNameMyAppPage.trim();

    if (CommonData.BRLOC.includes('JM-KR')) {
      if (
        serviceNameAppConfirmPage.includes(
          CommonData.ASSERTEDSERVICENAMEPART1
        ) &&
        serviceNameMyAppPage.includes(CommonData.ASSERTEDSERVICENAMEPART1)
      ) {
        assert(matchCondition);
        gauge.message(
          'ServiceNameAppConfirmPage: ' + serviceNameAppConfirmPage
        );
        gauge.message('ServiceNameMyAppPage: ' + serviceNameMyAppPage);
        gauge.message(messages.identicalServiceNames);
      } else {
        gauge.message(
          'ServiceNameAppConfirmPage: ' + serviceNameAppConfirmPage
        );
        gauge.message('ServiceNameMyAppPage: ' + serviceNameMyAppPage);
        assert(
          !matchCondition,
          'Service Name in App Confirm Page is not same as Service Name in My App Page'
        );
      }
    } else if (brandLocaleSet5.includes(CommonData.BRLOC)) {
      console.log('ServiceNameAppConfirmPage: ' + serviceNameAppConfirmPage);
      console.log('ServiceNameMyAppPage: ' + serviceNameMyAppPage);
      if (
        serviceNameAppConfirmPage
          .toUpperCase()
          .includes(serviceNameMyAppPage.toUpperCase()) ||
        serviceNameMyAppPage
          .toUpperCase()
          .includes(serviceNameAppConfirmPage.toUpperCase())
      ) {
        console.log('ServiceNameAppConfirmPage: ' + serviceNameAppConfirmPage);
        console.log('ServiceNameMyAppPage: ' + serviceNameMyAppPage);
        assert(matchCondition);
        gauge.message(
          'ServiceNameAppConfirmPage: ' + serviceNameAppConfirmPage
        );
        gauge.message('ServiceNameMyAppPage: ' + serviceNameMyAppPage);
        gauge.message(messages.identicalServiceNames);
      } else if (plat === 'VOAB') {
        voabServiceNameAppConfirmPage = voabServiceNameAppConfirmPage.trim();
        if (
          voabServiceNameAppConfirmPage.includes(
            serviceNameMyAppPage.toUpperCase()
          ) ||
          serviceNameMyAppPage.includes(
            voabServiceNameAppConfirmPage.toUpperCase()
          )
        ) {
          assert(matchCondition);
          console.log(
            'VOABServiceNameAppConfirmPage: ' + voabServiceNameAppConfirmPage
          );
          console.log('ServiceNameMyAppPage: ' + serviceNameMyAppPage);
          console.log(
            'VOAB Service Name in App Confirm Page is same as Service Name in My App Page'
          );
          gauge.message(
            'VOABServiceNameAppConfirmPage: ' + voabServiceNameAppConfirmPage
          );
          gauge.message('ServiceNameMyAppPage: ' + serviceNameMyAppPage);
          gauge.message(messages.identicalVoabServiceNames);
        } else {
          gauge.message(
            'VOABServiceNameAppConfirmPage: ' + voabServiceNameAppConfirmPage
          );
          gauge.message('ServiceNameMyAppPage: ' + serviceNameMyAppPage);
          assert(
            !matchCondition,
            'VOAB Service Name in App Confirm Page is not same as Service Name in My App Page'
          );
        }
      } else {
        gauge.message(
          'ServiceNameAppConfirmPage: ' + serviceNameAppConfirmPage
        );
        gauge.message('ServiceNameMyAppPage: ' + serviceNameMyAppPage);
        assert(
          !matchCondition,
          'Service Name in App Confirm Page is not same as Service Name in My App Page'
        );
      }
    } else if (brandLocaleSet6.includes(CommonData.BRLOC)) {
      serviceNameMyAppPage = serviceNameMyAppPage.trim();
      if (plat === 'OAB') {
        //As of now Single service can be selected, so didn't put code related to multiple service selection
        serviceName1AppConfirmPage = serviceName1AppConfirmPage.trim();
        if (
          serviceName1AppConfirmPage
            .toUpperCase()
            .includes(serviceNameMyAppPage.toUpperCase()) ||
          serviceNameMyAppPage
            .toUpperCase()
            .includes(serviceName1AppConfirmPage.toUpperCase())
        ) {
          // this is for JM US
          assert(matchCondition);
          gauge.message(
            'ServiceName1AppConfirmPage: ' + serviceName1AppConfirmPage
          );
          gauge.message('ServiceNameMyAppPage: ' + serviceNameMyAppPage);
          gauge.message(messages.identicalServiceNames);
        } else {
          gauge.message(
            'ServiceName1AppConfirmPage: ' + serviceName1AppConfirmPage
          );
          gauge.message('ServiceNameMyAppPage: ' + serviceNameMyAppPage);
          assert(
            !matchCondition,
            'Service Name in App Confirm Page is not same as Service Name in My App Page'
          );
        }
      } else if (plat === 'VOAB') {
        voabServiceNameAppConfirmPage = voabServiceNameAppConfirmPage.trim();
        if (
          voabServiceNameAppConfirmPage
            .toUpperCase()
            .includes(serviceNameMyAppPage.toUpperCase()) ||
          serviceNameMyAppPage
            .toUpperCase()
            .includes(voabServiceNameAppConfirmPage.toUpperCase())
        ) {
          assert(matchCondition);
          gauge.message(
            'VOABServiceNameAppConfirmPage: ' + voabServiceNameAppConfirmPage
          );
          gauge.message('ServiceNameMyAppPage: ' + serviceNameMyAppPage);
          gauge.message(messages.identicalVoabServiceNames);
        } else {
          gauge.message(
            'VOABServiceNameAppConfirmPage: ' + voabServiceNameAppConfirmPage
          );
          gauge.message('ServiceNameMyAppPage: ' + serviceNameMyAppPage);
          assert(
            !matchCondition,
            'VOAB Service Name in App Confirm Page is not same as Service Name in My App Page'
          );
        }
      }
    } else if (brandLocaleSet7.includes(CommonData.BRLOC)) {
      if (plat === 'OAB') {
        if (CommonData.BRLOC.includes('MC-DE')) {
          gauge.message(messages.stepNotApplicable);
        } else {
          if (serviceNameMyAppPage.includes(serviceNameAppConfirmPage)) {
            gauge.message(
              'ServiceNameAppConfirmPage: ' + serviceNameAppConfirmPage
            );
            gauge.message('ServiceNameMyAppPage: ' + serviceNameMyAppPage);
            gauge.message(messages.identicalServiceNames);
            assert(
              matchCondition,
              'Service Name in App Confirm Page is same as Service Name in My Appointments Page'
            );
          } else {
            gauge.message(
              'ServiceNameAppConfirmPage: ' + serviceNameAppConfirmPage
            );
            gauge.message('ServiceNameMyAppPage: ' + serviceNameMyAppPage);
            assert(
              matchCondition,
              'Service Name in App Confirm Page is not same as Service Name in My Appointments Page'
            );
          }
        }
      } else if (plat === 'VOAB') {
        if (serviceNameMyAppPage.includes(voabServiceNameAppConfirmPage)) {
          gauge.message(
            'ServiceNameAppConfirmPage: ' + voabServiceNameAppConfirmPage
          );
          gauge.message('ServiceNameMyAppPage: ' + serviceNameMyAppPage);
          gauge.message(messages.identicalServiceNames);
          assert(
            matchCondition,
            'Service Name in App Confirm Page is same as Service Name in My Appointments Page'
          );
        } else {
          gauge.message(
            'ServiceNameAppConfirmPage: ' + voabServiceNameAppConfirmPage
          );
          gauge.message('ServiceNameMyAppPage: ' + serviceNameMyAppPage);
          assert(
            matchCondition,
            'Service Name in App Confirm Page is not same as Service Name in My Appointments Page'
          );
        }
      }
    }
  }
);

var brandLocaleSet8 = [
  'JM-US',
  'MC-US',
  'JM-UK',
  'JM-JP',
  'JM-CA',
  'MC-AU',
  'AV_AU',
  'CL-UK',
  'EL-UK',
  'JM-KR',
  'JM-FR',
  'LM-UK',
  'BB-UK',
  'LM-AU',
  'AV-US',
  'TF-UK',
  'OR-UK',
  'AV-UK',
];
step(
  'OAB Assert Location of Appointment Confirmation Page and My Appointments Page',
  { continueOnFailure: true },
  async function () {
    locationMyAppPage = await (await t.$(locationMyAppointmentPage)).text();
    locationMyAppPage = locationMyAppPage.trim();
    locationAppConfirmPage = locationAppConfirmPage.trim();

    if (brandLocaleSet8.includes(CommonData.BRLOC)) {
      if (
        locationAppConfirmPage
          .toUpperCase()
          .includes(locationMyAppPage.toUpperCase())
      ) {
        gauge.message('LocationMyAppPage: ' + locationMyAppPage);
        gauge.message('LocationAppConfirmPage: ' + locationAppConfirmPage);
        gauge.message(messages.identicalLocation);
        assert(
          matchCondition,
          'Location selected is same as Location in My Appointments Page'
        );
      } else {
        gauge.message('LocationMyAppPage: ' + locationMyAppPage);
        gauge.message('LocationAppConfirmPage: ' + locationAppConfirmPage);
        assert(
          !matchCondition,
          'Location selected is not same as Location in My Appointments Page'
        );
      }
    } else if (CommonData.BRLOC.includes('MC-DE')) {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

var brandLocaleSet9 = ['JM-JP', 'JM-KR', 'LM-AU'];
var brandLocaleSet10 = [
  'MC-TW',
  'BB-TH',
  'JM-US',
  'MC-US',
  'JM-UK',
  'JM-CA',
  'MC-AU',
  'AV_AU',
  'CL-UK',
  'EL-UK',
  'JM-FR',
  'LM-UK',
  'BB-UK',
  'AV-US',
  'TF-UK',
  'OR-UK',
  'AV-UK',
];
step(
  'OAB Assert Date of Appointment Confirmation Page and My Appointments Page',
  { continueOnFailure: true },
  async function () {
    //not made any change for JM JP and KR, because due to GLOAB-557 any way it will fail. Once the issue is resolved, write new code

    gauge.message('DateMyAppPage: ' + dateMyAppPage);
    gauge.message('DateAppConfirmPage: ' + dateAppConfirmPage);
    if (brandLocaleSet9.includes(CommonData.BRLOC)) {
      if (dateAppConfirmPage.includes(dateMyAppPage)) {
        assert(matchCondition, 'Appointment Booked Successfully');
        gauge.message('ServiceNameMyAppPage: ' + serviceNameMyAppPage);
        gauge.message('LocationMyAppPage: ' + locationMyAppPage);
        gauge.message('DateMyAppPage: ' + dateMyAppPage);
        gauge.message(messages.availableBookedAppointment);
      } else {
        gauge.message(messages.differentDate);
        assert(!matchCondition, 'Appointment Booking failed');
      }
    } else if (brandLocaleSet10.includes(CommonData.BRLOC)) {
      var dateAssert = dateAssertion(dateMyAppPage, dateAppConfirmPage);
      if (dateAssert == true) {
        assert(matchCondition, 'Appointment Booked Successfully');
        gauge.message(messages.availableBookedAppointment);
      } else {
        gauge.message(messages.differentDate);
        assert(!matchCondition, 'Appointment Booking failed');
      }
    }
  }
);

step(
  'OAB Cancel Appointment in My Appointments page <plat>',
  async function (plat) {
    //the below code is applicable for JM JP, KR, US and UK
    if (myAppointments !== '') {
      gauge.message(messages.cancellingAppointment);
      var myAccService = await (await t.$(myAccServiceId)).text();
      gauge.message('Service Name: ' + myAccService);
      if (plat === 'OAB') {
        var myAccLocation = await (await t.$(myAccLocationId)).text();
        gauge.message('Location: ' + myAccLocation);
      }
      var myAccDate = await (await t.$(myAccDateId)).text();
      gauge.message('Date: ' + myAccDate);
      cancelledAppDate = myAccDate;
      await t.evaluate(await t.$(cancelAppBtn), (ele) => ele.click());
      gauge.message(messages.cancelButtonClicked);
      await t.evaluate(await t.$(cancelAppConfirmationYesButton), (ele) =>
        ele.click()
      );
      gauge.message(messages.yesButtonClicked);
      await t.evaluate(
        await t.$(cancelAppConfirmationCloseButton, {
          waitForEvents: ['DOMContentLoaded'],
        }),
        (ele) => ele.click(),
        { waitForNavigation: false }
      );
      gauge.message(messages.closeButtonClicked);
    }
  }
);

step(
  'OAB Assert Date of Cancelled Appointment and the other Appointments in My Appointments Page',
  { continueOnFailure: true },
  async function () {
    //Currently there is issue in JM US. Two appointments with same date and time can exist in My Appointments page. In that situation,
    //if a duplicate of the cancelled app exists in My Ap pg, then this method, will display: Appointment is not Cancelled
    if (numOfAppointments === 0) {
      gauge.message(
        'The cancelled Apppointment with date ' +
          cancelledAppDate +
          ' is not available in My Appointments Page'
      );
      gauge.message(messages.cancelledAppointment);
      assert(matchCondition);
    } else {
      numOfAppointments = (await (await t.$(myAppointments)).elements()).length;
      console.log('NumOfAppointments: ' + numOfAppointments);

      for (var i = 1; i <= numOfAppointments; i++) {
        var myAccDate = await (
          await t.$(
            'div#my-appointments-current > div:nth-of-type(' +
              i +
              ') .appt-date'
          )
        ).text();
        console.log('i :' + i);
        console.log('myAccDate :' + myAccDate);
        if (myAccDate.includes(cancelledAppDate) === true) {
          gauge.message(messages.appointmentNotCancelled);
          assert(!matchCondition);
          break;
        } else if (i === numOfAppointments) {
          gauge.message(
            'The cancelled Apppointment with date ' +
              cancelledAppDate +
              ' is not available in My Appointments Page'
          );
          gauge.message(messages.cancelledAppointment);
          assert(matchCondition);
        }
      }
    }
  }
);

step('OAB Change the service selected before confirmation', async function () {
  gauge.message(messages.changedServiceReviewPage);
});

var brandLocaleSet11 = [
  'JM-JP',
  'JM-KR',
  'JM-EU',
  'MC-DE',
  'MC-TW',
  'JM-US',
  'MC-US',
  'JM-UK',
  'JM-CA',
  'MC-AU',
  'AV-AU',
  'CL-UK',
  'EL-UK',
  'JM-FR',
  'LM-UK',
  'LM-AU',
  'BB-UK',
  'AV-US',
  'TF-UK',
  'OR-UK',
  'AV-UK',
];
step(
  'OAB Modify Appointment in My Appointments page <plat>',
  async function (plat) {
    if (brandLocaleSet11.includes(CommonData.BRLOC)) {
      if (myAppointments !== '') {
        //If no app is present in My App pg then the element MyAppointments won't be precent in the pg, so the hardcoded wait is needed
        await t.waitFor(timeout);
        gauge.message(messages.modifyAppointment);
        var myAccService = await (await t.$(myAccServiceId)).text();
        gauge.message('Service Name: ' + myAccService);
        if (plat === 'OAB') {
          var myAccLocation = await (await t.$(myAccLocationId)).text();
          gauge.message('Location: ' + myAccLocation);
        }
        var myAccDate = await (await t.$(myAccDateId)).text();
        gauge.message('Date: ' + myAccDate);
        gauge.screenshot();
        await t.waitFor(timeout);
        await t.evaluate(
          await t.$(changeAppBtn, { waitForEvents: ['DOMContentLoaded'] }),
          (ele) => ele.click(),
          { waitForNavigation: false }
        );
        gauge.message(messages.changeAppointment);
        gauge.message(messages.modifyDateAndTime);
      }
    }
  }
);

// If  popup's id is defined wait and do the popup close
step('OAB Popup Close', async function () {
  await PopUpClose();
});

var brandLocaleSet12 = [
  'JM-JP',
  'JM-KR',
  'JM-EU',
  'JM-UK',
  'JM-CA',
  'CL-UK',
  'EL-UK',
  'JM-FR',
  'LM-UK',
  'LM-AU',
  'BB-UK',
  'TF-UK',
  'OR-UK',
  'AV-UK',
];
var brandLocaleSet13 = ['MC-DE', 'MC-AU', 'AV-AU', 'CL-HK'];
var brandLocaleSet14 = ['MC-US', 'JM-US', 'AV-US'];
step('OAB Select Appointment Location', async function () {
  if (locationDropdown !== '' && locationDropdownValue !== '') {
    if (brandLocaleSet12.includes(CommonData.BRLOC)) {
      await (await t.$(locationDropdown)).exists(pollingTime, timeout);
      // As OAB introduced the loading spinner on OAB landing page, we have to wait for the content to be completed loaded on the OAB page.
      await t.waitFor(waitForTime);
      await t.evaluate(
        await t.$(locationDropdown, { waitForEvents: ['DOMContentLoaded'] }),
        (ele) => ele.click(),
        { waitForNavigation: false }
      );
      await t.evaluate(
        await t.$(locationDropdownValue, {
          waitForEvents: ['DOMContentLoaded'],
        }),
        (ele) => ele.click(),
        { waitForNavigation: false }
      );
      await t.evaluate(
        await t.$(storeDropdown, { waitForEvents: ['DOMContentLoaded'] }),
        (ele) => ele.click(),
        { waitForNavigation: false }
      );
      await t.evaluate(
        await t.$(storeDropdownValue, { waitForEvents: ['DOMContentLoaded'] }),
        (ele) => ele.click(),
        { waitForNavigation: false }
      );
    } else if (brandLocaleSet13.includes(CommonData.BRLOC)) {
      await t.$(locationDropdownValue).exists(pollingTime, timeout);
      await t
        .dropDown({ class: locationDropdown })
        .select(CommonData.LOCATIONVALUE);
      selectedLocation = await (await t.$(locationDropdownValue)).text();
      gauge.message('SelectedLocation: ' + selectedLocation);
      if (
        CommonData.BRLOC.includes('MC-DE') ||
        CommonData.BRLOC.includes('MC-AU') ||
        CommonData.BRLOC.includes('AV-AU')
      ) {
        await (await t.$(storeDropdownValue)).exists(pollingTime, timeout);
        await t
          .dropDown({ class: storeDropdown })
          .select(CommonData.STOREVALUE);
        SelectedStore = await (await t.$(storeDropdownValue)).text();
        gauge.message('SelectedStore: ' + SelectedStore);
      }
    } else if (brandLocaleSet14.includes(CommonData.BRLOC)) {
      await (await t.$(countiesDropdown)).exists(pollingTime, timeout);
      await t.evaluate(
        await t.$(countiesDropdown, { waitForEvents: ['DOMContentLoaded'] }),
        (ele) => ele.click()
      );
      await t.evaluate(
        await t.$(countiesDropdownValue, {
          waitForEvents: ['DOMContentLoaded'],
        }),
        (ele) => ele.click()
      );
      await t.evaluate(
        await t.$(locationDropdown, { waitForEvents: ['DOMContentLoaded'] }),
        (ele) => ele.click()
      );
      await t.evaluate(
        await t.$(locationDropdownValue, {
          waitForEvents: ['DOMContentLoaded'],
        }),
        (ele) => ele.click()
      );
      await t.evaluate(
        await t.$(storeDropdown, { waitForEvents: ['DOMContentLoaded'] }),
        (ele) => ele.click()
      );
      await t.evaluate(
        await t.$(storeDropdownValue, { waitForEvents: ['DOMContentLoaded'] }),
        (ele) => ele.click()
      );
    }
  }
});

step('OAB Click Location Submit Button', async function () {
  if (locationSubmitButton !== '') {
    await (await t.$(locationSubmitButton)).exists(pollingTime, timeout);
    await t.evaluate(
      await t.$(locationSubmitButton, { waitForEvents: ['DOMContentLoaded'] }),
      (ele) => ele.click(),
      { waitForNavigation: false }
    );
  }
});

step('OAB Click Location Mobile Submit Button', async function () {
  if (locationMobileSubmitButton !== '') {
    await (await t.$(locationMobileSubmitButton)).exists(pollingTime, timeout);
    await t.evaluate(
      await t.$(locationMobileSubmitButton, {
        waitForEvents: ['DOMContentLoaded'],
      }),
      (ele) => ele.click(),
      { waitForNavigation: false }
    );
  }
});

//this step is not applicable for JM UK
step('OAB Select Service', async function () {
  if (selectService !== '') {
    await (await t.$(selectService)).exists(pollingTime, timeout);
    await t.evaluate(await t.$(selectService), (ele) => ele.click());
    // for APAC regions, on clicking SelectService, in the above line, it was sometimes not getting selected, so after click, it was needed to check the class attribute value, in the below line.
    //This problem was not there for other sites like JM UK or JM US
    if (service !== '') {
      var ServiceClassAttribute = await t.evaluate(await t.$(service), (ele) =>
        ele.getAttribute('class')
      );
      if (ServiceClassAttribute.includes('not-selected')) {
        gauge.message(messages.serviceNotSelected);
      } else {
        gauge.message(messages.serviceSelected);
      }
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('OAB Select Service1', async function () {
  if (selectService1 !== '') {
    //await waitFor(3000);
    await (await t.$(selectService1)).exists(pollingTime, timeout);
    await t.evaluate(await t.$(selectService1), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('OAB Select Ratings and Review', async function () {
  if (CommonData.BRLOC.includes('BB-UK')) {
    if (ratingsAndReview !== '' && ratingsAndReviewDisabled === '') {
      await (await t.$(ratingsAndReview)).exists(pollingTime, timeout);
      gauge.screenshot();
      await t.evaluate(
        await t.$(ratingsAndReview, { waitForEvents: ['DOMContentLoaded'] }),
        (ele) => ele.click()
      );
      gauge.message(messages.ratingsAndReviewButtonClicked);
      serviceNameReviewsDetails = await t.evaluate(
        await t.$(serviceNameReviewsDetailsId),
        (ele) => ele.innerText
      );
      gauge.screenshot();
      gauge.message('ServiceNameReviewsDetails: ' + serviceNameReviewsDetails);
      ratedStars = await t.evaluate(
        await t.$(ratedStarsId),
        (ele) => ele.innerText
      );
      gauge.message('RatedStars: ' + ratedStars);
      reviewCount = await t.evaluate(
        await t.$(reviewCountId),
        (ele) => ele.innerText
      );
      gauge.message('ReviewCount: ' + reviewCount);
      reviewListHeader = await t.evaluate(
        await t.$(reviewListHeaderId),
        (ele) => ele.innerText
      );
      gauge.message('ReviewListHeader: ' + reviewListHeader);
      reviewDescription = await t.evaluate(
        await t.$(reviewDescriptionId),
        (ele) => ele.innerText
      );
      gauge.message('ReviewDescription: ' + reviewDescription);
      await t.evaluate(
        await t.$(closeReviewsDetailsButton, {
          waitForEvents: ['DOMContentLoaded'],
        }),
        (ele) => ele.click()
      );
      gauge.screenshot();
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
});

step('OAB Click Book Now', async function () {
  if (bookNowButton1 !== '') {
    await (await t.$(bookNowButton1)).exists(pollingTime, timeout);
    var BookNowButtonClassAttribute = await t.evaluate(
      await t.$(bookNowButton1),
      (ele) => ele.getAttribute('class')
    );
    if (BookNowButtonClassAttribute.includes('disabled')) {
      gauge.message(messages.bookButtonDisabled);
    } else {
      await t.evaluate(
        await t.$(bookNowButton1, { waitForEvents: ['DOMContentLoaded'] }),
        (ele) => ele.click(),
        { waitForNavigation: false }
      );
      gauge.message(messages.bookButtonClicked);
    }
  }
});

step(
  'OAB log in as return user and Confirm the appointment',
  async function () {
    if (signInLinkAppReviewPage !== '') {
      await t.evaluate(await t.$(signInLinkAppReviewPage), (ele) =>
        ele.click()
      );
      gauge.message(messages.signInLinkClicked);
    }
  }
);

var brandLocaleSet15 = ['CL-HK', 'MC-DE', 'MC-TW', 'MC-AU', 'AV-AU'];
var brandLocaleSet16 = [
  'JM-JP',
  'JM-KR',
  'JM-EU',
  'JM-US',
  'JM-CA',
  'LM-UK',
  'LM-AU',
];
var brandLocaleSet17 = [
  'JM-UK',
  'CL-UK',
  'EL-UK',
  'JM-FR',
  'BB-UK',
  'MC-US',
  'AV-US',
  'TF-UK',
  'OR-UK',
  'AV-UK',
];
var brandLocaleSet18 = [
  'JM-UK',
  'MC-US',
  'JM-EU',
  'BB-TH',
  'CL-UK',
  'EL-UK',
  'LM-AU',
  'BB-UK',
  'AV-US',
  'TF-UK',
  'OR-UK',
  'AV-UK',
];
var brandLocaleSet19 = ['MC-DE', 'MC-TW', 'MC-AU', 'AV-AU'];
step(
  'OAB Get Appointment Details from Appointment Review Page <plat>',
  async function (plat) {
    if (plat === 'OAB') {
      if (brandLocaleSet15.includes(CommonData.BRLOC)) {
        gauge.message(messages.stepNotApplicable);
        return;
      }
      if (brandLocaleSet16.includes(CommonData.BRLOC)) {
        serviceNameAppReviewPage = await t.evaluate(
          await t.$(serviceNameAppReviewPageId),
          (ele) => ele.innerText
        );
        locationAppReviewPage = await t.evaluate(
          await t.$(locationAppReviewPageId),
          (ele) => ele.innerText
        );
        console.log('ServiceNameAppReviewPage: ' + serviceNameAppReviewPage);
        console.log('LocationAppReviewPage: ' + locationAppReviewPage);
        gauge.message('ServiceNameAppReviewPage: ' + serviceNameAppReviewPage);
        gauge.message('LocationAppReviewPage: ' + locationAppReviewPage);
      } else if (brandLocaleSet17.includes(CommonData.BRLOC)) {
        //As of now Single service can be selected
        serviceName1AppReviewPage = await t.evaluate(
          await t.$(serviceName1AppReviewPageId),
          (ele) => ele.innerText
        );
        //ServiceName2AppReviewPage = await evaluate($(ServiceName2AppReviewPageId), (ele) => ele.innerText);
        locationAppReviewPage = await t.evaluate(
          await t.$(locationAppReviewPageId),
          (ele) => ele.innerText
        );
        gauge.message(
          'ServiceName1AppReviewPage: ' + serviceName1AppReviewPage
        );
        //gauge.message("ServiceName2AppReviewPage: "+ServiceName2AppReviewPage);
        gauge.message('LocationAppReviewPage: ' + locationAppReviewPage);
      } else if (brandLocaleSet15.includes(CommonData.BRLOC)) {
        gauge.message(messages.stepNotApplicable);
      }
    } else if (plat === 'VOAB') {
      if (brandLocaleSet18.includes(CommonData.BRLOC)) {
        voabServiceNameAppReviewPage = await t.evaluate(
          await t.$(voabServiceNameAppReviewPageId),
          (ele) => ele.innerText
        );
        gauge.message(
          'VOABServiceNameAppReviewPage: ' + voabServiceNameAppReviewPage
        );
        locationAppReviewPage = await t.evaluate(
          await t.$(locationAppReviewPageId),
          (ele) => ele.innerText
        );
        gauge.message('LocationAppReviewPage: ' + locationAppReviewPage);
      } else if (brandLocaleSet19.includes(CommonData.BRLOC)) {
        gauge.message(messages.stepNotApplicable);
        return;
      }
    }
    dateAppReviewPage = await t.evaluate(
      await t.$(dateAppReviewPageId),
      (ele) => ele.innerText
    );
    gauge.message('DateAppReviewPage: ' + dateAppReviewPage);
  }
);

step('OAB Get Service Name in Service Page', async function () {
  if (serviceName !== '') {
    //the below implicit wait is needed because it takes some time for the changed service to get reflected in the page. and
    //{waitForEvents : ['DOMContentLoaded']} is not working
    //await waitFor($(ServiceName), 180000) didn't serve the purpose because, before the changed service showed up, the previous service
    //was available and this, returned the previous service name.
    await t.waitFor(timeout);
    await (await t.$(serviceName)).exists(pollingTime, timeout);
    serviceNameServicePage = await t.evaluate(
      await t.$(serviceName),
      (ele) => ele.innerText
    );
    console.log('Service name:', serviceNameServicePage);
    gauge.message(
      'Service Selected in Service Page: ' + serviceNameServicePage
    );
  }
});

step('OAB Remove Service', async function () {
  if (removeService !== '') {
    await (await t.$(removeService)).exists(pollingTime, timeout);
    await t.evaluate(await t.$(removeService), (ele) => ele.click());
  }
});

step('OAB Click Change Service Selection Button', async function () {
  if (changeServiceSelectionButton !== '') {
    await (
      await t.$(changeServiceSelectionButton)
    ).exists(pollingTime, timeout);
    await t.evaluate(await t.$(changeServiceSelectionButton), (ele) =>
      ele.click()
    );
    gauge.message(messages.changeServiceSelection);
    gauge.screenshot();
  }
});

var brandLocaleSet20 = ['JM-JP', 'JM-KR'];
var brandLocaleSet21 = [
  'JM-US',
  'MC-DE',
  'JM-CA',
  'MC-TW',
  'MC-AU',
  'AV-AU',
  'BB-TH',
  'LM-UK',
];
step('OAB Select Service2', async function () {
  let numOfAddServiceButtons = (await t.$(addServiceButton).elements()).length;
  console.log(numOfAddServiceButtons);
  if (
    (selectService2 !== '' && numOfAddServiceButtons > 1) ||
    addServiceButton === ''
  ) {
    if (brandLocaleSet20.includes(CommonData.BRLOC)) {
      await (await t.$(selectService2)).exists(pollingTime, timeout);
      await t.evaluate(await t.$(selectService2), (ele) => ele.click());
      var ServiceClassAttribute = await t.evaluate(await t.$(service2), (ele) =>
        ele.getAttribute('class')
      );
      if (ServiceClassAttribute.includes('not-selected')) {
        gauge.message(messages.serviceNotSelected);
      } else {
        gauge.message(messages.serviceSelected);
      }
    } else if (brandLocaleSet21.includes(CommonData.BRLOC)) {
      await (await t.$(selectService2)).exists(pollingTime, timeout);
      await t.evaluate(await t.$(selectService2), (ele) => ele.click());
    }
  } else {
    console.log('No second service');
    gauge.message(messages.secondServiceNotDisplayed);
    if (selectService !== '') {
      await t.waitFor(await t.$(selectService), waitForTime);
      await t.evaluate(await t.$(selectService), (ele) => ele.click());
      // for APAC regions, on clicking SelectService, in the above line, it was sometimes not getting selected, so after click, it was needed to check the class attribute value, in the below line.
      //This problem was not there for other sites like JM UK or JM US
      if (service !== '') {
        var ServiceClassAttribute = await t.evaluate(
          await t.$(service),
          (ele) => ele.getAttribute('class')
        );
        if (ServiceClassAttribute.includes('not-selected')) {
          gauge.message(messages.serviceNotSelected);
        } else {
          gauge.message(messages.serviceSelected);
        }
      }
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
});

var brandLocaleSet23 = [
  'JM-JP',
  'JM-US',
  'JM-EU',
  'JM-UK',
  'JM-KR',
  'JM-CA',
  'MC-US',
  'EL-UK',
  'CL-UK',
  'JM-FR',
  'LM-UK',
  'BB-UK',
  'LM-AU',
  'AV-US',
  'TF-UK',
  'OR-UK',
  'AV-UK',
];
step('OAB Select a Timeslot', async function () {
  if (brandLocaleSet23.includes(CommonData.BRLOC)) {
    var NumRows = (await (await t.$(calendarRows)).elements()).length;
    var classAttribute;
    var dateSelected = false;
    var timeSelected = false;
    var firstIteration = true;
    var day = new Date();
    var today = day.getDate();
    console.log('today ' + today);
    var dayInCal;

    while (dateSelected === false) {
      if (firstIteration === false) {
        //Next week button will be clicked, once first iteration through the entire calendar is complete.
        if (nextMonthCalendarButton !== '') {
          await t.evaluate(await t.$(nextMonthCalendarButton), (ele) =>
            ele.click()
          );
          gauge.message(messages.nextMonthButtonClicked);
          //After Next Month Calendar btn is clicked, today should be made 1
          today = 1;
        }
      }
      for (i = 1; i <= NumRows && timeSelected === false; i++) {
        firstIteration = false;
        for (j = 1; j <= 7 && timeSelected === false; j++) {
          classAttribute = await t.evaluate(
            await t.$(
              "//div[contains(@class,'elc-appt-booking_calendar-container')]/table/tbody/tr[" +
                i +
                ']/td[' +
                j +
                ']'
            ),
            (ele) => ele.getAttribute('class')
          );
          if (
            classAttribute.includes('selected') ||
            classAttribute.includes('-active')
          ) {
            //3 combinations:
            //any day before today, date disabled, class attribute= <something>-inactive,
            //today, date is selected, class attribute= <something>-selected
            //any other day after today, class attribute= <something>-active
            //as "inactive".includes("active")// true, so -active is used
            //SelectedDate = await $("//thead[@class='col-heads']/tr/th["+j+"]").text();
            //SelectedDate = await $("//table[contains(@class,'Month__StyledTable')]/tbody/tr[" + i + "]/td[" + j + "]").text();
            dayInCal = await (
              await t.$(
                "//div[contains(@class,'elc-appt-booking_calendar-container')]/table/tbody/tr[" +
                  i +
                  ']/td[' +
                  j +
                  ']'
              )
            ).text();
            if (dayInCal > today) {
              await t.evaluate(
                await t.$(
                  "//div[contains(@class,'elc-appt-booking_calendar-container')]/table/tbody/tr[" +
                    i +
                    ']/td[' +
                    j +
                    ']'
                ),
                (ele) => ele.click()
              );
              selectedDate = dayInCal;
              var NumAvailableTimeSlots = (
                await (
                  await t.$(
                    "//li[contains(@class,'elc-appt-booking_time-slot')]"
                  )
                ).elements()
              ).length;
              for (var k = 1; k <= NumAvailableTimeSlots; k++) {
                selectedTime = await (
                  await t.$(
                    "//li[contains(@class,'elc-appt-booking_time-slot')][" +
                      k +
                      ']'
                  )
                ).text();
                await t.evaluate(
                  await t.$(
                    "//li[contains(@class,'elc-appt-booking_time-slot')][" +
                      k +
                      ']/button'
                  ),
                  (ele) => ele.click()
                );
                dateSelected = true;
                timeSelected = true;
                console.log('SelectedDate ' + selectedDate);
                console.log('SelectedTime ' + selectedTime);
                gauge.message('SelectedDate ' + selectedDate);
                gauge.message('SelectedTime ' + selectedTime);
                break;
              }
              if (classAttribute.includes('selected')) {
                break;
              }
            }
          }
        }
        if (classAttribute.includes('selected')) {
          break;
        }
      }
    }
  }
});

var brandLocaleSet24 = [
  'JM-JP',
  'JM-US',
  'JM-EU',
  'JM-UK',
  'JM-KR',
  'JM-CA',
  'MC-US',
  'EL-UK',
  'CL-UK',
  'JM-FR',
  'LM-UK',
  'BB-UK',
  'LM-AU',
  'AV-US',
  'TF-UK',
  'OR-UK',
  'AV-UK',
];
step('OAB Modify Timeslot', async function () {
  if (editDtTimeBtn !== '') {
    if (CommonData.BRLOC.includes('CL-HK')) {
      i = i + 1;
      //j = j+1;
      //await cannot be used outside async fn so NumRows cannot be global
      var NumRows = (await (await t.$(calendarRows)).elements()).length;
      var classAttribute;
      var dateSelected = false;
      var firstIteration = true;
      while (dateSelected === false) {
        if (firstIteration === false) {
          if (nextWeekCalendarButton !== '') {
            await t.evaluate(await t.$(nextWeekCalendarButton), (ele) =>
              ele.click()
            );
            gauge.message(messages.nextWeekButtonClicked);
            i = 1;
          }
        }
        for (; i <= NumRows; i++) {
          firstIteration = false;

          for (j = 1; j <= CommonData.NOOFCOLINDATECALENDAR; j++) {
            classAttribute = await t.evaluate(
              await t.$(
                "//tbody[@class='timeslots']/tr[" + i + ']/td[' + j + ']'
              ),
              (ele) => ele.getAttribute('class')
            );
            if (classAttribute.includes('enabled')) {
              selectedDate = await (
                await t.$("//thead[@class='col-heads']/tr/th[" + j + ']')
              ).text();
              selectedTime = await (
                await t.$(
                  "//tbody[@class='timeslots']/tr[" + i + ']/td[' + j + ']'
                )
              ).text();
              await t.waitFor(
                await t.$(
                  "//tbody[@class='timeslots']/tr[" + i + ']/td[' + j + ']'
                ),
                180000
              );
              await t.evaluate(
                await t.$(
                  "//tbody[@class='timeslots']/tr[" + i + ']/td[' + j + ']'
                ),
                (ele) => ele.click()
              );
              dateSelected = true;
              console.log('SelectedDate ' + selectedDate);
              console.log('SelectedTime ' + selectedTime);
              gauge.message('SelectedDate ' + selectedDate);
              gauge.message('SelectedTime ' + selectedTime);
              break;
            }
          }
          if (classAttribute.includes('enabled')) {
            break;
          }
        }
      }
    } else if (brandLocaleSet24.includes(CommonData.BRLOC)) {
      //await cannot be used outside async fn so NumRows cannot be global
      var NumRows = (await (await t.$(calendarRows)).elements()).length;
      var classAttribute;
      var dateSelected = false;
      var timeSelected = false;
      var firstIteration = true;
      console.log('val of i ' + i);
      console.log('val of j ' + j);
      while (dateSelected === false) {
        if (firstIteration === false) {
          if (nextMonthCalendarButton !== '') {
            await t.evaluate(await t.$(nextMonthCalendarButton), (ele) =>
              ele.click()
            );
            gauge.message(messages.nextMonthButtonClicked);
            i = 1;
            j = 1;
          }
        }
        for (; i <= NumRows && timeSelected === false; i++) {
          firstIteration = false;
          if (j === 8) {
            j = 1;
          }

          for (; j <= 7 && timeSelected === false; j++) {
            classAttribute = await t.evaluate(
              await t.$(
                "//div[contains(@class,'elc-appt-booking_calendar-container')]/table/tbody/tr[" +
                  i +
                  ']/td[' +
                  j +
                  ']'
              ),
              (ele) => ele.getAttribute('class')
            );
            // After click, the class attribute will contain selected
            if (
              classAttribute.includes('enabled') ||
              classAttribute.includes('-active') ||
              classAttribute.includes('selected')
            ) {
              selectedDate = await (
                await t.$(
                  "//div[contains(@class,'elc-appt-booking_calendar-container')]/table/tbody/tr[" +
                    i +
                    ']/td[' +
                    j +
                    ']'
                )
              ).text();
              await t.evaluate(
                await t.$(
                  "//div[contains(@class,'elc-appt-booking_calendar-container')]/table/tbody/tr[" +
                    i +
                    ']/td[' +
                    j +
                    ']'
                ),
                (ele) => ele.click()
              );
              var NumAvailableTimeSlots = (
                await (
                  await t.$(
                    "//li[contains(@class,'elc-appt-booking_time-slot')]"
                  )
                ).elements()
              ).length;
              for (var k = 1; k <= NumAvailableTimeSlots; k++) {
                selectedTime = await (
                  await t.$(
                    "//li[contains(@class,'elc-appt-booking_time-slot')][" +
                      k +
                      ']'
                  )
                ).text();
                await t.evaluate(
                  await t.$(
                    "//li[contains(@class,'elc-appt-booking_time-slot')][" +
                      k +
                      ']/button'
                  ),
                  (ele) => ele.click()
                );
                dateSelected = true;
                timeSelected = true;
                console.log('SelectedDate ' + selectedDate);
                console.log('SelectedTime ' + selectedTime);
                gauge.message('SelectedDate ' + selectedDate);
                gauge.message('SelectedTime ' + selectedTime);
                break;
              }
              if (classAttribute.includes('selected')) {
                break;
              }
            }
          }
          if (classAttribute.includes('selected')) {
            break;
          }
        }
      }
    } else if (CommonData.BRLOC.includes('BB-TH')) {
      var NumRows = (await t.$(calendarRows).elements()).length;
      var classAttribute;
      var dateSelected = false;
      var timeSelected = false;
      var firstIteration = true;
      var day = new Date();
      var today = day.getDate();
      console.log('today ' + today);
      var dayInCal;

      while (dateSelected === false) {
        if (firstIteration === false) {
          //Next week button will be clicked, once first iteration through the entire calendar is complete.
          if (nextMonthCalendarButton !== '') {
            await t.evaluate(t.$(nextMonthCalendarButton), (ele) =>
              ele.click()
            );
            gauge.message(messages.nextMonthButtonClicked);
            //After Next Month Calendar btn is clicked, today should be made 1
            today = 1;
          }
        }
        for (i = 1; i <= NumRows && timeSelected === false; i++) {
          firstIteration = false;
          for (j = 1; j <= 7 && timeSelected === false; j++) {
            classAttribute = await t.evaluate(
              await t.$(
                "//table[@class='pika-table']/tbody/tr[" + i + ']/td[' + j + ']'
              ),
              (ele) => ele.getAttribute('class')
            );
            if (
              !classAttribute.includes('is-empty') &&
              !classAttribute.includes('is-disabled')
            ) {
              dayInCal = await t
                .$(
                  "//table[@class='pika-table']/tbody/tr[" +
                    i +
                    ']/td[' +
                    j +
                    ']'
                )
                .text();
              if (dayInCal > today) {
                await t.evaluate(
                  await t.$(
                    "//table[@class='pika-table']/tbody/tr[" +
                      i +
                      ']/td[' +
                      j +
                      ']'
                  ),
                  (ele) => ele.click()
                );
                await t.click(
                  await t.$(
                    "//table[@class='pika-table']/tbody/tr[" +
                      i +
                      ']/td[' +
                      j +
                      ']'
                  )
                );
                selectedDate = dayInCal;
                var NumAvailableTimeSlots = (
                  await t.$('.date-time-hours.enabled').elements()
                ).length;
                for (var k = 1; k <= NumAvailableTimeSlots; k++) {
                  selectedTime = await t.$('.date-time-hours.enabled').text();
                  await t.evaluate(
                    await t.$('.date-time-hours.enabled'),
                    (ele) => ele.click()
                  );
                  dateSelected = true;
                  timeSelected = true;
                  console.log('SelectedDate ' + selectedDate);
                  console.log('SelectedTime ' + selectedTime);
                  gauge.message('SelectedDate ' + selectedDate);
                  gauge.message('SelectedTime ' + selectedTime);
                  break;
                }
                if (classAttribute.includes('selected')) {
                  break;
                }
              }
            }
          }
          if (classAttribute.includes('selected')) {
            break;
          }
        }
      }
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('OAB Check validations fields on Review & Book page', async function () {
  await t.evaluate(await t.$(bookNowButton2, {
    waitForNavigation: false
  }), (ele) => ele.click());
  gauge.message(messages.bookButtonClicked);
  if ((await (await t.$(firstNameError)).text()) !== '') {
    gauge.message(messages.errorMessageDisplayed);
    gauge.screenshot();
  } else {
    gauge.message(messages.errorMessageNotDisplayed);
  }
  if ((await (await t.$(lastNameError)).text()) !== '') {
    gauge.message(messages.errorMessageDisplayed);
  } else {
    gauge.message(messages.errorMessageNotDisplayed);
  }
  if ((await (await t.$(emailError)).text()) !== '') {
    gauge.message(messages.errorMessageDisplayed);
  } else {
    gauge.message(messages.errorMessageNotDisplayed);
  }
  if ((await (await t.$(phoneNumberError)).text()) !== '') {
    gauge.message(messages.errorMessageDisplayed);
  } else {
    gauge.message(messages.errorMessageNotDisplayed);
  }
  var TermsAndConditionCheckboxAttribute = await t.evaluate(
    await t.$(termsAndConditionsCheckbox),
    (ele) => ele.getAttribute('aria-checked')
  );
  if (TermsAndConditionCheckboxAttribute.includes('false')) {
    gauge.message(messages.checkboxNotChecked);
  } else {
    gauge.message(messages.checkboxChecked);
  }
});

step('OAB Enter firstname', async function () {
  const firstNameValue = await t.evaluate(await t.$(oabFirstnameId), (ele) => {return ele.getAttribute('value')})
  if (oabFirstnameId !== '' && firstNameValue === '') {
    await t.write(CommonData.FIRSTNAME, t.into(await t.$(oabFirstnameId)), {
      waitForEvents: ['DOMContentLoaded'],
      waitForNavigation: false,
    });
    gauge.message('Firstname: ' + CommonData.FIRSTNAME);
  } else {
    gauge.message(messages.fieldPrepopulated);
  }
});

step('OAB Enter lastname', async function () {
  const lastNameValue = await t.evaluate(await t.$(oabLastnameId), (ele) => {return ele.getAttribute('value')})
  if (oabLastnameId !== '' && lastNameValue === '') {
    await t.write(CommonData.LASTNAME, t.into(await t.$(oabLastnameId)), {
      waitForEvents: ['DOMContentLoaded'],
      waitForNavigation: false,
    });
    gauge.message('Lastname: ' + CommonData.LASTNAME);
    console.log('Lastname: ' + CommonData.LASTNAME);
  } else {
    gauge.message(messages.fieldPrepopulated);
  }
});

step('OAB Enter Email id', async function () {
  if (oabGuestEmailId !== '') {
    var email = makeEmail();
    await t.write(email, t.into(await t.$(oabGuestEmailId)), {
      waitForEvents: ['DOMContentLoaded'],
      waitForNavigation: false,
    });
    gauge.message('Email: ' + email);
    gauge.screenshot();
  }
});

step(
  'OAB Check if phone area code dropdown is displayed on Review & Book page',
  async function () {
    if (phoneFlagDropdownButton !== '') {
      await (await t.$(phoneFlagDropdownButton)).exists(pollingTime, timeout);
      await t.evaluate(
        await t.$(phoneFlagDropdownButton, {
          waitForEvents: ['DOMContentLoaded'],
        }),
        (ele) => ele.click(),
        { waitForNavigation: false }
      );
      gauge.message(messages.phoneFlagClicked);
      gauge.screenshot();
    }

    var PhoneAreaCodeDropdownAttribute = await t.evaluate(
      t.$(phoneFlagDropdownButton),
      (ele) => ele.getAttribute('class')
    );
    if (PhoneAreaCodeDropdownAttribute.includes('open')) {
      gauge.message(messages.phoneAreaExpanded);
    } else {
      gauge.message(messages.phoneAreaNotExpanded);
    }
  }
);

step(
  'OAB Select Phone area code and check if it is displayed properly',
  async function () {
    if (phoneAreaCodeDropdown !== '' && phoneAreaCodeDropdownValue !== '') {
      await (await t.$(phoneAreaCodeDropdown)).exists(pollingTime, timeout);
      await t.evaluate(
        await t.$(phoneAreaCodeDropdownValue, {
          waitForEvents: ['DOMContentLoaded'],
        }),
        (ele) => ele.click()
      );
      gauge.screenshot();
      if (phoneAreaCode !== '') {
        gauge.message(messages.phoneAreaDisplayed);
        gauge.screenshot();
      } else {
        gauge.message(messages.phoneAreaNotDisplayed);
      }
    }
  }
);

step('OAB Enter mobile number', async function () {
  const mobileNumberValue = await t.evaluate(await t.$(oabMobileNumber), (ele) => {return ele.getAttribute('value')})
  if (oabMobileNumber !== '' && mobileNumberValue.length <= 3) {
    await t.write(CommonData.Mobile1, t.into(await t.$(oabMobileNumber)), {
      waitForEvents: ['DOMContentLoaded'],
      waitForNavigation: false,
    });
    gauge.message('Mobile Number: ' + CommonData.Mobile1);
    console.log('Mobile Number: ' + CommonData.Mobile1);
    gauge.screenshot();
  } else {
    gauge.message(messages.fieldPrepopulated);
  }
});

step('OAB Check email promotion checkbox', async function () {
  if (emailPromotionCheckbox !== '') {
    await t.evaluate(await t.$(emailPromotionCheckbox), (ele) => ele.click());
    gauge.message(messages.emailPromotionCheckbox);
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('OAB Check Accept privecy policy checkbox', async function () {
  if (acceptPrivecyPolicyCheckbox !== '') {
    await t.evaluate(await t.$(acceptPrivecyPolicyCheckbox), (ele) =>
      ele.click()
    );
    gauge.message(messages.acceptPrivecyCheckbox);
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

var brandLocaleSet25 = ['MC-DE', 'MC-TW', 'MC-AU', 'AV-AU', 'BB-TH'];
step('OAB Click Next Button after Date Time Selection', async function () {
  //if date is selected, then the button gets enabled and the string enabled appears in the class attribute value
  if (nextBtnAfterDtTimeSelection !== '') {
    if (brandLocaleSet25.includes(CommonData.BRLOC)) {
      await t.evaluate(await t.$(nextBtnAfterDtTimeSelection), (ele) =>
        ele.click()
      );
      gauge.message(messages.nextButtonClicked);
    } else {
      var NextBtnAfterDtTimeSelectionClassAttribute = await t.evaluate(
        await t.$(nextBtnAfterDtTimeSelection),
        (ele) => ele.getAttribute('class')
      );
      if (NextBtnAfterDtTimeSelectionClassAttribute.includes('active')) {
        await t.evaluate(
          await t.$(nextBtnAfterDtTimeSelection, {
            waitForEvents: ['DOMContentLoaded'],
          }),
          (ele) => ele.click(),
          { waitForNavigation: false }
        );
        gauge.message(messages.nextButtonClicked);
      } else {
        gauge.message(messages.nextButtonDisabled);
      }
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('OAB click edit date time button', async function () {
  if (editDtTimeBtn !== '') {
    await (await t.$(editDtTimeBtn)).exists(pollingTime, timeout);
    await t.evaluate(
      await t.$(editDtTimeBtn, { waitForEvents: ['DOMContentLoaded'] }),
      (ele) => ele.click(),
      { waitForNavigation: false }
    );
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

var brandLocaleSet26 = ['JM-JP', 'JM-KR', 'CL-HK'];
var brandLocaleSet27 = [
  'JM-US',
  'JM-UK',
  'JM-CA',
  'JM-EU',
  'MC-US',
  'CL-UK',
  'EL-UK',
  'JM-FR',
  'LM-UK',
  'BB-UK',
  'LM-AU',
  'AV-US',
  'TF-UK',
  'OR-UK',
  'AV-UK',
];
var brandLocaleSet28 = ['MC-DE', 'MC-TW', 'MC-AU', 'AV-AU', 'BB-TH'];
step('OAB click BOOK NOW button', async function () {
  if (brandLocaleSet26.includes(CommonData.BRLOC)) {
    //if date is selected, then the button gets enabled and the string enabled appears in the class attribute value
    if (bookNowButton2 !== '') {
      var BookNowButtonClassAttribute = await t.evaluate(
        await t.$(bookNowButton2),
        (ele) => ele.getAttribute('class')
      );
    }
    if (BookNowButtonClassAttribute.indexOf('disabled') > 0) {
      gauge.message(messages.bookButtonDisabled);
    } else {
      await t.evaluate(await t.$(bookNowButton2), (ele) => ele.click());
      gauge.message(messages.bookButtonClicked);
    }
  } else if (brandLocaleSet27.includes(CommonData.BRLOC)) {
    //if date is selected, then the button gets enabled and the string enabled appears in the class attribute value
    if (bookNowButton2 !== '') {
      var BookNowButtonDisabledAttribute = await t.evaluate(
        await t.$(bookNowButton2),
        (ele) => ele.getAttribute('disabled')
      );
    }
    if (BookNowButtonDisabledAttribute !== null) {
      gauge.message(messages.bookButtonDisabled);
    } else {
      await t.evaluate(await t.$(bookNowButton2), (ele) => ele.click(), {
        waitForNavigation: false,
      });
      gauge.message(messages.bookButtonClicked);
    }
  } else if (brandLocaleSet28.includes(CommonData.BRLOC)) {
    await t.evaluate(await t.$(bookNowButton2), (ele) => ele.click());
    gauge.message(messages.bookButtonClicked);
  }
  gauge.screenshot();
});

var brandLocaleSet29 = [
  'JM-JP',
  'JM-KR',
  'JM-EU',
  'CL-HK',
  'JM-US',
  'JM-CA',
  'MC-AU',
  'AV-AU',
  'LM-UK',
  'LM-AU',
];
var brandLocaleSet30 = [
  'JM-UK',
  'CL-UK',
  'EL-UK',
  'JM-FR',
  'BB-UK',
  'MC-US',
  'AV-US',
  'TF-UK',
  'OR-UK',
  'AV-UK',
];
var brandLocaleSet31 = [
  'JM-UK',
  'MC-US',
  'JM-EU',
  'MC-DE',
  'MC-TW',
  'MC-AU',
  'AV-AU',
  'BB-TH',
  'CL-UK',
  'EL-UK',
  'JM-FR',
  'BB-UK',
  'LM-AU',
  'AV-US',
  'TF-UK',
  'OR-UK',
  'AV-UK',
];
step(
  'OAB Get Appointment Details from Appointment Confirmation Page <plat>',
  async function (plat) {
    if (plat === 'OAB') {
      if (brandLocaleSet29.includes(CommonData.BRLOC)) {
        await (
          await t.$(serviceNameAppConfirmPageId)
        ).exists(pollingTime, timeout);
        gauge.screenshot();
        serviceNameAppConfirmPage = await t.evaluate(
          await t.$(serviceNameAppConfirmPageId),
          (ele) => ele.innerText
        );
        await (
          await t.$(locationAppConfirmPageId)
        ).exists(pollingTime, timeout);
        locationAppConfirmPage = await t.evaluate(
          await t.$(locationAppConfirmPageId),
          (ele) => ele.innerText
        );
        gauge.message('ServiceNameAppConfirmPage ' + serviceNameAppConfirmPage);
        gauge.message('LocationAppConfirmPage ' + locationAppConfirmPage);
      } else if (brandLocaleSet30.includes(CommonData.BRLOC)) {
        await (
          await t.$(serviceName1AppConfirmPageId)
        ).exists(pollingTime, timeout);
        gauge.screenshot();
        serviceName1AppConfirmPage = await t.evaluate(
          await t.$(serviceName1AppConfirmPageId),
          (ele) => ele.innerText
        );
        //await waitFor($(ServiceName2AppConfirmPageId), 180000)
        //ServiceName2AppConfirmPage = await evaluate($(ServiceName2AppConfirmPageId), (ele) => ele.innerText);
        await (
          await t.$(locationAppConfirmPageId)
        ).exists(pollingTime, timeout);
        locationAppConfirmPage = await t.evaluate(
          await t.$(locationAppConfirmPageId),
          (ele) => ele.innerText
        );
        gauge.message(
          'ServiceName1AppConfirmPage: ' + serviceName1AppConfirmPage
        );
        //gauge.message("ServiceName2AppConfirmPage: "+ServiceName2AppConfirmPage);
        gauge.message('LocationAppConfirmPage: ' + locationAppConfirmPage);
      } else if (CommonData.BRLOC.includes('MC-DE')) {
        gauge.message(messages.stepNotApplicable);
      }
    } else if (plat == 'VOAB') {
      if (brandLocaleSet31.includes(CommonData.BRLOC)) {
        await (await t.$(zoomLinkId)).exists(pollingTime, timeout);
        gauge.screenshot();
        if ((await (await t.$(zoomLinkId)).text()) !== 0) {
          gauge.message(messages.zoomLinkDisplayed);
        }
        zoomLinkAppConfirmPage = await t.evaluate(
          await t.$(zoomLinkId),
          (ele) => ele.innerText
        );
        gauge.message('ZoomLinkAppConfirmPage: ' + zoomLinkAppConfirmPage);
        await (
          await t.$(voabServiceNameAppConfirmPageId)
        ).exists(pollingTime, timeout);
        voabServiceNameAppConfirmPage = await t.evaluate(
          await t.$(voabServiceNameAppConfirmPageId),
          (ele) => ele.innerText
        );
        gauge.message(
          'VOABServiceNameAppConfirmPage: ' + voabServiceNameAppConfirmPage
        );
      }
    }
    if (CommonData.BRLOC.includes('MC-DE') && plat === 'OAB') {
      gauge.message(messages.stepNotApplicable);
    } else {
      await (await t.$(dateAppConfirmPageId)).exists(pollingTime, timeout);
      if (CommonData.BRLOC.includes('AV-AU')) {
        var DateAppConfirmPageSup = '';
        DateAppConfirmPageSup = await t.evaluate(
          await t.$(dateAppConfirmPageId),
          (ele) => ele.innerText
        );
        DateAppConfirmPageSup = DateAppConfirmPageSup.split('\n');
        console.log(DateAppConfirmPageSup);
        console.log(DateAppConfirmPageSup[1]);
        console.log(DateAppConfirmPageSup[2]);
        dateAppConfirmPage =
          DateAppConfirmPageSup[1] + ' ,' + DateAppConfirmPageSup[2];
      } else {
        dateAppConfirmPage = await t.evaluate(
          await t.$(dateAppConfirmPageId),
          (ele) => ele.innerText
        );
      }
      gauge.message('DateAppConfirmPage: ' + dateAppConfirmPage);
    }
  }
);

step('OAB Get Add to calendar details', async function () {
  if (addToCalendarDropdown !== '' && addToCalendarDropdownValue !== '') {
    await (await t.$(addToCalendarDropdown)).exists(pollingTime, timeout);
    await t.evaluate(await t.$(addToCalendarDropdown), (ele) => ele.click());
    await t.evaluate(
      await t.$(addToCalendarDropdownValue),
      (ele) => ele.innerText
    );
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'OAB Check if when click on Sign in button from Confirmation page, Sign In page is displayed',
  async function () {
    if (CommonData.BRLOC.includes('MC-US')) {
      if (signInButtonConfirmation !== '') {
        await t.evaluate(
          await t.$(signInButtonConfirmation, {
            waitForEvents: ['DOMContentLoaded'],
          }),
          (ele) => ele.click(),
          { waitForNavigation: false }
        );
        gauge.screenshot();
        if (signInPage !== '') {
          await (await t.$(signInPage)).exists(pollingTime, timeout);
          gauge.message(messages.signInPageDisplayed);
          gauge.screenshot();
        } else {
          gauge.message(messages.signInPageNotDisplayed);
          gauge.screenshot();
        }
      }
    }
  }
);

var brandLocaleSet32 = [
  'JM-JP',
  'JM-KR',
  'JM-EU',
  'CL-HK',
  'JM-US',
  'JM-CA',
  'LM-UK',
];
var brandLocaleSet33 = [
  'JM-UK',
  'MC-US',
  'CL-UK',
  'EL-UK',
  'JM-FR',
  'BB-UK',
  'LM-AU',
  'AV-US',
  'TF-UK',
  'OR-UK',
  'AV-UK',
];
var brandLocaleSet34 = ['MC-TW', 'MC-AU', 'AV-AU'];
var brandLocaleSet35 = [
  'JM-UK',
  'MC-US',
  'BB-TH',
  'CL-UK',
  'EL-UK',
  'JM-FR',
  'BB-UK',
  'LM-AU',
  'AV-US',
  'TF-UK',
  'OR-UK',
  'AV-UK',
];
var brandLocaleSet36 = ['MC-DE', 'MC-TW', 'MC-AU', 'AV-AU'];
step(
  'OAB Assert Service Name of Appointment Confirmation and Review Page <plat>',
  { continueOnFailure: true },
  async function (plat) {
    if (plat === 'OAB') {
      if (brandLocaleSet32.includes(CommonData.BRLOC)) {
        serviceNameAppConfirmPage = serviceNameAppConfirmPage.trim();
        serviceNameAppReviewPage = serviceNameAppReviewPage.trim();
        if (
          serviceNameAppConfirmPage
            .toUpperCase()
            .includes(serviceNameAppReviewPage.toUpperCase()) ||
          serviceNameAppReviewPage
            .toUpperCase()
            .includes(serviceNameAppConfirmPage.toUpperCase())
        ) {
          assert(matchCondition);
          gauge.message(
            'ServiceNameAppConfirmPage: ' + serviceNameAppConfirmPage
          );
          gauge.message(
            'ServiceNameAppReviewPage: ' + serviceNameAppReviewPage
          );
          gauge.message(messages.identicalServices);
        } else {
          gauge.message(
            'ServiceNameAppConfirmPage: ' + serviceNameAppConfirmPage
          );
          gauge.message(
            'ServiceNameAppReviewPage: ' + serviceNameAppReviewPage
          );
          assert(
            !matchCondition,
            'Service Name in App Confirm Page is not same as Service Name in App Review Page'
          );
        }
      } else if (brandLocaleSet33.includes(CommonData.BRLOC)) {
        //As of now Single service can be selected, so commenting code related to multiple service selection
        serviceName1AppConfirmPage = serviceName1AppConfirmPage.trim();
        serviceName1AppConfirmPage = serviceName1AppConfirmPage.toLowerCase();
        //ServiceName2AppConfirmPage = ServiceName2AppConfirmPage.trim();
        serviceName1AppReviewPage = serviceName1AppReviewPage.trim();
        serviceName1AppReviewPage =
          serviceName1AppReviewPage.toLocaleLowerCase();
        //ServiceName2AppReviewPage = ServiceName2AppReviewPage.trim();
        if (
          serviceName1AppConfirmPage.includes(serviceName1AppReviewPage) ||
          serviceName1AppReviewPage.includes(serviceName1AppConfirmPage)
        ) {
          // this is for JM UK
          assert(matchCondition);
          gauge.message(
            'ServiceName1AppConfirmPage: ' + serviceName1AppConfirmPage
          );
          gauge.message(
            'ServiceName1AppReviewPage: ' + serviceName1AppReviewPage
          );
          gauge.message(messages.sameServiceName);
          /*
                if(ServiceName2AppConfirmPage.includes(ServiceName2AppReviewPage) || ServiceName2AppReviewPage.includes(ServiceName2AppConfirmPage)){
                    // this is for JM UK
                    assert(true)
                    gauge.message("ServiceName2AppConfirmPage: "+ServiceName2AppConfirmPage);
                    gauge.message("ServiceName2AppReviewPage: "+ServiceName2AppReviewPage);
                    gauge.message("Second Service Name in App Confirm Page is same as Second Service Name in App Review Page")
                }
                else{
                    assert(false, "Second Service Name in App Confirm Page is not same as Second Service Name in App Review Page")
                    gauge.message("ServiceName2AppConfirmPage: "+ServiceName2AppConfirmPage);
                    gauge.message("ServiceName2AppReviewPage: "+ServiceName2AppReviewPage);
                	
                }
                */
        } else {
          gauge.message(
            'ServiceName1AppConfirmPage: ' + serviceName1AppConfirmPage
          );
          gauge.message(
            'ServiceName1AppReviewPage: ' + serviceName1AppReviewPage
          );
          assert(
            !matchCondition,
            'First Service Name in App Confirm Page is not same as First Service Name in App Review Page'
          );
        }
      } else if (CommonData.BRLOC.includes('MC-DE')) {
        gauge.message(messages.stepNotApplicable);
      } else if (brandLocaleSet34.includes(CommonData.BRLOC)) {
        serviceName1ThirdStep = serviceName1ThirdStep.trim();
        serviceName1ThirdStep = serviceName1ThirdStep.toLocaleLowerCase();
        serviceNameAppConfirmPage = serviceNameAppConfirmPage.trim();
        serviceNameAppConfirmPage =
          serviceNameAppConfirmPage.toLocaleLowerCase();
        if (
          serviceNameAppConfirmPage.includes(serviceName1ThirdStep) ||
          serviceName1ThirdStep.includes(serviceNameAppConfirmPage)
        ) {
          assert(matchCondition);
          gauge.message(
            'ServiceNameAppConfirmPage: ' + serviceNameAppConfirmPage
          );
          gauge.message('ServiceNameThirdStep: ' + serviceName1ThirdStep);
          gauge.message(messages.serviceNameThirdStep);
        } else {
          gauge.message(
            'ServiceNameAppConfirmPage: ' + serviceNameAppConfirmPage
          );
          gauge.message('ServiceNameThirdStep: ' + serviceName1ThirdStep);
          assert(
            !matchCondition,
            'Service Name in App Confirm Page is not same as Service Name in ThirdStep'
          );
        }
      }
    } else if (plat === 'VOAB') {
      if (brandLocaleSet35.includes(CommonData.BRLOC)) {
        voabServiceNameAppReviewPage = voabServiceNameAppReviewPage.trim();
        voabServiceNameAppReviewPage =
          voabServiceNameAppReviewPage.toLowerCase();
        voabServiceNameAppConfirmPage = voabServiceNameAppConfirmPage.trim();
        voabServiceNameAppConfirmPage =
          voabServiceNameAppConfirmPage.toLowerCase();

        if (
          voabServiceNameAppReviewPage.includes(
            voabServiceNameAppConfirmPage
          ) ||
          voabServiceNameAppConfirmPage.includes(voabServiceNameAppReviewPage)
        ) {
          assert(matchCondition);
          gauge.message(
            'VOABServiceNameAppReviewPage: ' + voabServiceNameAppReviewPage
          );
          gauge.message(
            'VOABServiceNameAppConfirmPage: ' + voabServiceNameAppConfirmPage
          );
          gauge.message(
            'Service Name in App Confirm Page is same as Service Name in App Review Page'
          );
        } else {
          gauge.message(
            'VOABServiceNameAppReviewPage: ' + voabServiceNameAppReviewPage
          );
          gauge.message(
            'VOABServiceNameAppConfirmPage: ' + voabServiceNameAppConfirmPage
          );
          assert(
            !matchCondition,
            'Service Name in App Confirm Page is not same as Service Name in App Review Page'
          );
        }
      }
      if (brandLocaleSet36.includes(CommonData.BRLOC)) {
        voabServiceNameAppConfirmPage = voabServiceNameAppConfirmPage.trim();
        serviceName1ThirdStep = serviceName1ThirdStep.trim();
        if (voabServiceNameAppConfirmPage.includes(serviceName1ThirdStep)) {
          assert(matchCondition);
          gauge.message(
            'ServiceNameAppConfirmPage: ' + voabServiceNameAppConfirmPage
          );
          gauge.message(
            'ServiceNameSelected in Third Step: ' + serviceName1ThirdStep
          );
          gauge.message(serviceNameThirdStep);
        } else {
          gauge.message(
            'ServiceNameAppConfirmPage: ' + voabServiceNameAppConfirmPage
          );
          gauge.message(
            'ServiceNameSelected in Third Step: ' + serviceName1ThirdStep
          );
          assert(
            !matchCondition,
            'Service Name in App Confirm Page is not same as Service Name in third step'
          );
        }
      }
    }
  }
);

var brandLocaleSet37 = [
  'JM-JP',
  'JM-KR',
  'JM-EU',
  'JM-US',
  'JM-UK',
  'JM-CA',
  'MC-US',
  'CL-UK',
  'EL-UK',
  'JM-FR',
  'LM-UK',
  'BB-UK',
  'LM-AU',
  'AV-US',
  'TF-UK',
  'OR-UK',
  'AV-UK',
];
step(
  'OAB Assert Selected Location and Location of Appointment Confirmation Page',
  { continueOnFailure: true },
  async function () {
    selectedLocation = selectedLocation.trim();
    locationAppReviewPage = locationAppReviewPage.trim();
    locationAppReviewPage = locationAppReviewPage.toLocaleLowerCase();
    locationAppConfirmPage = locationAppConfirmPage.trim();
    locationAppConfirmPage = locationAppConfirmPage.toLocaleLowerCase();

    if (CommonData.BRLOC.includes('CL-HK')) {
      if (
        selectedLocation.includes(CommonData.ASSERTEDLOCATION) &&
        locationAppConfirmPage.includes(CommonData.ASSERTEDLOCATION)
      ) {
        gauge.message('SelectedLocation: ' + selectedLocation);
        gauge.message('LocationAppConfirmPage: ' + locationAppConfirmPage);
        gauge.message(messages.identicalLocationReviewPage);
        assert(matchCondition);
      } else {
        gauge.message('SelectedLocation: ' + selectedLocation);
        gauge.message('LocationAppConfirmPage: ' + locationAppConfirmPage);
        assert(
          !matchCondition,
          'Location selected is not same as Location in App Review Page'
        );
      }
    } else if (brandLocaleSet37.includes(CommonData.BRLOC)) {
      if (
        locationAppReviewPage
          .toUpperCase()
          .includes(locationAppConfirmPage.toUpperCase()) ||
        locationAppConfirmPage
          .toUpperCase()
          .includes(locationAppReviewPage.toUpperCase())
      ) {
        gauge.message('LocationAppReviewPage: ' + locationAppReviewPage);
        gauge.message('LocationAppConfirmPage: ' + locationAppConfirmPage);
        gauge.message(messages.identicalLocationReviewPage);
        assert(matchCondition);
      } else {
        gauge.message('LocationAppReviewPage: ' + locationAppReviewPage);
        gauge.message('LocationAppConfirmPage: ' + locationAppConfirmPage);
        assert(
          !matchCondition,
          'Location selected is not same as Location in App Review Page'
        );
      }
    } else if (CommonData.BRLOC.includes('MC-DE')) {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

var brandLocaleSet38 = ['CL-HK', 'MC-AU', 'MC-TW', 'AV-AU'];
var brandLocaleSet39 = [
  'JM-JP',
  'JM-KR',
  'JM-EU',
  'JM-US',
  'JM-UK',
  'JM-CA',
  'MC-US',
  'BB-TH',
  'CL-UK',
  'EL-UK',
  'JM-FR',
  'LM-UK',
  'BB-UK',
  'LM-AU',
  'AV-US',
  'TF-UK',
  'OR-UK',
  'AV-UK',
];
step(
  'OAB Assert Selected Date and Date of Appointment Confirmation Page',
  { continueOnFailure: true },
  async function () {
    if (brandLocaleSet38.includes(CommonData.BRLOC)) {
      gauge.message('Selected Date: ' + selectedDate);
      gauge.message('Selected Time: ' + selectedTime);
      gauge.message('DateAppConfirmPage: ' + dateAppConfirmPage);
      selectedDate = selectedDate.trim();
      selectedTime = selectedTime.trim();
      var monthTmp = '';
      var month = '';
      var day = '';
      var AmOrPm = '';
      var SelectedTimeWithoutAmOrPm = '';
      var SelectedTimeNumericPart = '';
      //Date handling code start
      //Selected Date: 星期五 22⁄10
      selectedDate = selectedDate.split(' ');
      selectedDate = selectedDate[1];
      console.log('SelectedDate ' + selectedDate);
      console.log('SelectedDate.length ' + selectedDate.length);

      var flag = 1;
      for (var i = 0; i < selectedDate.length; i++) {
        var tmp = selectedDate.charAt(i);
        if (isNaN(tmp)) {
          flag = 0;
          continue;
        }
        if (flag !== 0) {
          //month = month + tmp
          day = day + tmp;
        } else {
          //day = day + tmp
          month = month + tmp;
        }
      }
      console.log('month =' + month);
      console.log('month.length ' + month.length);
      console.log('day =' + day);
      console.log('day.length ' + day.length);
      // Date handling code ends

      // Time handling code starts
      // For CL HK Time is in 12 hr format: 12:00 PM
      dateAppConfirmPage = dateAppConfirmPage.replace('上午', 'AM');
      dateAppConfirmPage = dateAppConfirmPage.replace('下午', 'PM');
      console.log('DateAppConfirmPage = ' + dateAppConfirmPage);
      // Time handling code ends

      if (
        dateAppConfirmPage.includes(day) &&
        dateAppConfirmPage.includes(month) &&
        dateAppConfirmPage.includes(AmOrPm) &&
        dateAppConfirmPage.includes(SelectedTimeNumericPart)
      ) {
        gauge.message(messages.identicalDateAndTime);
        gauge.message(messages.appointmentBooked);
        assert(matchCondition);
      } else {
        assert(
          !matchCondition,
          'Date and Time in App Confirm Page is not same as Date and Time in App Review Page'
        );
      }
    } else if (brandLocaleSet39.includes(CommonData.BRLOC)) {
      gauge.message('Date and Time in App Confirm Page: ' + dateAppConfirmPage);
      gauge.message('Date and Time in App Review Page ' + dateAppReviewPage);
      if (
        dateAppReviewPage.includes(dateAppConfirmPage) ||
        dateAppConfirmPage.includes(dateAppReviewPage)
      ) {
        gauge.message(messages.identicalDateAndTime);
        gauge.message(messages.appointmentBooked);
        assert(matchCondition);
      } else {
        assert(
          !matchCondition,
          'Date and Time in App Confirm Page is not same as Date and Time in App Review Page'
        );
      }
    } else if (CommonData.BRLOC.includes('MC-DE')) {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

var brandLocaleSet40 = ['CL-HK', 'MC-AU', 'MC-TW', 'AV-AU', 'JM-EU'];
step(
  'OAB Assert Selected Date and Date of Appointment Confirmation Page Mobile',
  { continueOnFailure: true },
  async function () {
    if (brandLocaleSet40.includes(CommonData.BRLOC)) {
      gauge.message('Selected Date: ' + selectedDateMob);
      gauge.message('Selected Time: ' + selectedTimeMob);
      gauge.message('DateAppConfirmPage: ' + dateAppConfirmPage);
      selectedDateMob = selectedDateMob.trim();
      selectedTimeMob = selectedTimeMob.trim();
      var monthTmp = '';
      var month = '';
      var day = '';
      var AmOrPm = '';
      var SelectedTimeMobWithoutAmOrPm = '';
      var SelectedTimeMobNumericPart = '';
      //Date handling code start
      //Selected Date: 星期五 22⁄10
      selectedDateMob = selectedDateMob.split(' ');
      selectedDateMob = selectedDateMob[0];
      console.log('SelectedDateMob ' + selectedDateMob);
      console.log('SelectedDateMob.length ' + selectedDateMob.length);

      var flag = 1;
      for (var i = 0; i < selectedDateMob.length; i++) {
        var tmp = selectedDateMob.charAt(i);
        if (isNaN(tmp)) {
          flag = 0;
          continue;
        }
        if (flag !== 0) {
          //month = month + tmp
          day = day + tmp;
        } else {
          //day = day + tmp
          month = month + tmp;
        }
      }
      console.log('month =' + month);
      console.log('month.length ' + month.length);
      console.log('day =' + day);
      console.log('day.length ' + day.length);
      // Date handling code ends

      // Time handling code starts
      // For CL HK Time is in 12 hr format: 12:00 PM
      dateAppConfirmPage = dateAppConfirmPage.replace('上午', 'AM');
      dateAppConfirmPage = dateAppConfirmPage.replace('下午', 'PM');
      console.log('DateAppConfirmPage = ' + dateAppConfirmPage);
      // Time handling code ends

      if (
        dateAppConfirmPage.includes(day) &&
        dateAppConfirmPage.includes(month) &&
        dateAppConfirmPage.includes(AmOrPm) &&
        dateAppConfirmPage.includes(SelectedTimeMobNumericPart)
      ) {
        gauge.message(messages.identicalDateAndTime);
        gauge.message(messages.appointmentBooked);
        assert(matchCondition);
      } else {
        assert(
          !matchCondition,
          'Date and Time in App Confirm Page is not same as Date and Time in App Review Page'
        );
      }
    } else if (CommonData.BRLOC.includes('MC-DE')) {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step('OAB Click Expand to see Service', async function () {
  await t.evaluate(t.$('#service_2 > div.service-head > span'), (ele) =>
    ele.click()
  );
});

step('OAB Select a Timeslot Mobile', async function () {
  if (CommonData.BRLOC.includes('BB-TH')) {
    var NumRows = (await t.$(calendarRows).elements()).length;
    var classAttribute;
    var dateSelected = false;
    var timeSelected = false;
    var firstIteration = true;
    var day = new Date();
    var today = day.getDate();
    console.log('today ' + today);
    var dayInCal;

    while (dateSelected === false) {
      if (firstIteration === false) {
        //Next week button will be clicked, once first iteration through the entire calendar is complete.
        if (nextMonthCalendarButton !== '') {
          await t.evaluate(await t.$(nextMonthCalendarButton), (ele) =>
            ele.click()
          );
          gauge.message(messages.nextMonthButtonClicked);
          //After Next Month Calendar btn is clicked, today should be made 1
          today = 1;
        }
      }
      for (i = 1; i <= NumRows && timeSelected === false; i++) {
        firstIteration = false;
        for (j = 1; j <= 7 && timeSelected === false; j++) {
          if (mobCalendarScrollTo !== '') {
            await t.scrollTo(t.$(mobCalendarScrollTo));
          } else {
            gauge.message(messages.scrollUpStep);
          }
          classAttribute = await t.evaluate(
            await t.$(
              "//table[@class='pika-table']/tbody/tr[" + i + ']/td[' + j + ']'
            ),
            (ele) => ele.getAttribute('class')
          );
          if (
            !classAttribute.includes('is-empty') &&
            !classAttribute.includes('is-disabled')
          ) {
            dayInCal = await t
              .$(
                "//table[@class='pika-table']/tbody/tr[" + i + ']/td[' + j + ']'
              )
              .text();
            if (dayInCal > today) {
              await t.evaluate(
                await t.$(
                  "//table[@class='pika-table']/tbody/tr[" +
                    i +
                    ']/td[' +
                    j +
                    ']'
                ),
                (ele) => ele.click()
              );
              await t.click(
                await t.$(
                  "//table[@class='pika-table']/tbody/tr[" +
                    i +
                    ']/td[' +
                    j +
                    ']'
                )
              );
              selectedDate = dayInCal;
              var NumAvailableTimeSlots = (
                await t.$('.date-time-hours.enabled').elements()
              ).length;
              for (var k = 1; k <= NumAvailableTimeSlots; k++) {
                selectedTime = await t.$('.date-time-hours.enabled').text();
                await t.evaluate(await t.$('.date-time-hours.enabled'), (ele) =>
                  ele.click()
                );
                dateSelected = true;
                timeSelected = true;
                console.log('SelectedDate ' + selectedDate);
                console.log('SelectedTime ' + selectedTime);
                gauge.message('SelectedDate ' + selectedDate);
                gauge.message('SelectedTime ' + selectedTime);
                break;
              }
              if (classAttribute.includes('selected')) {
                break;
              }
            }
          }
        }
        if (classAttribute.includes('selected')) {
          break;
        }
      }
    }
  } else if (CommonData.BRLOC.includes('AV-AU')) {
    var NumRows = (await t.$(calendarRowsMob).elements()).length;
    var dateSelected = false;
    var timeSelected = false;
    var firstIteration = true;
    var day = new Date();
    var today = day.getDate();
    console.log('today ' + today);
    var dayInCal;

    while (dateSelected === false) {
      if (firstIteration === false) {
        if (nextWeekCalendarButtonMob !== '') {
          await t.evaluate(await t.$(nextWeekCalendarButtonMob), (ele) =>
            ele.click()
          );
          gauge.message(messages.nextWeekButtonClicked);
        }
      }
      for (m = 1; m <= NumRows && timeSelected === false; m++) {
        console.log('In step 2');
        firstIteration = false;
        for (
          n = 1;
          n <= CommonData.NOOFCOLINDATECALENDAR && timeSelected === false;
          n++
        ) {
          dayInCal = await t
            .$(
              '.pika-table>tbody>tr:nth-of-type(' +
                m +
                ')>td:nth-of-type(' +
                n +
                ')'
            )
            .text();
          console.log('dayInCal ' + dayInCal);
          if (dayInCal > today) {
            //await evaluate($(".pika-table>tbody>tr:nth-of-type(" + m + ")>td:nth-of-type(" + n + ")>.pika-button.pika-day"), { waitForEvents: ['firstPaint'] }, ele => ele.click());
            var classAttributeMOB = await t.evaluate(
              await t.$(
                '.pika-table>tbody>tr:nth-of-type(' +
                  m +
                  ')>td:nth-of-type(' +
                  n +
                  ')'
              ),
              (ele) => ele.getAttribute('class')
            );
            console.log(classAttributeMOB);
            if (
              (classAttributeMOB !== '.is-disabled, .is-today') &
              (classAttributeMOB !== 'is-disabled')
            ) {
              await t.click(
                await t.$(
                  '.pika-table>tbody>tr:nth-of-type(' +
                    m +
                    ')>td:nth-of-type(' +
                    n +
                    ')>.pika-button.pika-day'
                )
              );
              console.log('In step 6');
              selectedTimeMob = await t
                .$('.day >tbody>tr>.enabled.store_open')
                .text();
              await t.evaluate(
                await t.$('.day >tbody>tr>.enabled.store_open'),
                (ele) => ele.click()
              );
              selectedDateMob = await t
                .$(
                  '.pika-table>tbody>tr:nth-of-type(' +
                    m +
                    ')>td:nth-of-type(' +
                    n +
                    ')'
                )
                .text();
              timeSelected = true;
              dateSelected = true;
              console.log('SelectedDate ' + selectedDateMob);
              console.log('SelectedTime ' + selectedTimeMob);
              gauge.message('SelectedDate ' + selectedDateMob);
              gauge.message('SelectedTime ' + selectedTimeMob);
              break;
            }
          }
          if (timeSelected === true) {
            break;
          }
        }
      }
    }
  } else {
    console.log('In step 1');
    var NumRows = (await t.$(calendarRowsMob).elements()).length;
    var dateSelected = false;
    var timeSelected = false;
    var firstIteration = true;
    //var classAttributeMOB;
    var day = new Date();
    var today = day.getDate();
    console.log('today ' + today);
    var dayInCal;

    while (dateSelected === false) {
      if (firstIteration === false) {
        if (nextWeekCalendarButtonMob !== '') {
          await t.evaluate(await t.$(nextWeekCalendarButtonMob), (ele) =>
            ele.click()
          );
          gauge.message(messages.nextWeekButtonClicked);
        }
      }
      for (m = 1; m <= NumRows && timeSelected === false; m++) {
        console.log('In step 2');
        firstIteration = false;
        for (
          n = 1;
          n <= CommonData.NOOFCOLINDATECALENDAR && timeSelected === false;
          n++
        ) {
          if (mobCalendarScrollTo !== '') {
            await t.scrollTo(await t.$(mobCalendarScrollTo));
          } else {
            gauge.message(messages.scrollUpStep);
          }
          dayInCal = await t
            .$(
              '.pika-table>tbody>tr:nth-of-type(' +
                m +
                ')>td:nth-of-type(' +
                n +
                ')'
            )
            .text();
          console.log('dayInCal ' + dayInCal);
          if (dayInCal >= today) {
            //await evaluate($(".pika-table>tbody>tr:nth-of-type(" + m + ")>td:nth-of-type(" + n + ")>.pika-button.pika-day"), { waitForEvents: ['firstPaint'] }, ele => ele.click());
            var classAttributeMOB = await t.evaluate(
              await t.$(
                '.pika-table>tbody>tr:nth-of-type(' +
                  m +
                  ')>td:nth-of-type(' +
                  n +
                  ')'
              ),
              { waitForEvents: ['firstPaint'] },
              (ele) => ele.getAttribute('class')
            );
            if (
              classAttributeMOB !== 'is-disabled' &&
              classAttributeMOB !== 'is-empty'
            ) {
              await t.click(
                await t.$(
                  '.pika-table>tbody>tr:nth-of-type(' +
                    m +
                    ')>td:nth-of-type(' +
                    n +
                    ')>.pika-button.pika-day'
                )
              );
              await t.waitFor(waitForTime);
              // Evaluate table rows with enabled <td> tags to avoid timeout issue for longer calendars (i.e. MAC TW 60 rows) and shorten the execution itme
              const getStartingRow = async () => {
                return await t.evaluate(() => {
                  var rowStart = 0;
                  var enabledRow = true;
                  let calendar = document.querySelectorAll('[data-time-slots]');
                  console.log('start ' + rowStart);
                  for (let i = 0; i < calendar.length; i++) {
                    let currentCalendar = calendar[i];
                    let rows = currentCalendar.querySelectorAll('tr');
                    console.log('rows ' + rows);
                    for (let x = 0; x < rows.length; x++) {
                      let currentRow = rows[x];
                      console.log('current row' + currentRow);
                      if (
                        currentRow.getElementsByClassName('enabled').length > 0
                      ) {
                        let enabledTD =
                          currentRow.getElementsByClassName('enabled');
                        console.log(enabledTD);
                        console.log('row numer ' + x);
                        rowStart = x + 1;
                        console.log('row start ' + rowStart);
                        return rowStart;
                      } else {
                        continue;
                      }
                    }
                    enabledRow = false;
                    return enabledRow;
                  }
                });
              };
              let StartingRow = await getStartingRow();
              console.log('start row at ' + StartingRow);
              if (StartingRow !== false) {
                //await evaluate($(".pika-table>tbody>tr:nth-of-type(" + m + ")>td:nth-of-type(" + n + ")>.pika-button.pika-day"), { waitForEvents: ['firstPaint'] }, ele => ele.click());
                console.log('In step 4');
                await t.waitFor(waitForTime);
                for (
                  p = StartingRow;
                  p <= CommonData.NOOFROWCOLINTIMECALENDARMOB;
                  p++
                ) {
                  console.log('In step 5.1');
                  for (q = 1; q <= 1; q++) {
                    //TO DO TO TEST
                    console.log('In step 5');
                    await t.waitFor(
                      await t.$(
                        '.day >tbody>tr:nth-of-type(' +
                          p +
                          ')>td:nth-of-type(' +
                          q +
                          ')'
                      )
                    );
                    var timeslotMobClassAttribute = await t.evaluate(
                      await t.$(
                        '.day >tbody>tr:nth-of-type(' +
                          p +
                          ')>td:nth-of-type(' +
                          q +
                          ')'
                      ),
                      (ele) => ele.getAttribute('class')
                    );
                    console.log(
                      'timeslotMobClassAttribute ' + timeslotMobClassAttribute
                    );
                    if (
                      timeslotMobClassAttribute !== null &&
                      timeslotMobClassAttribute.includes('enabled')
                    ) {
                      console.log('In step 6');
                      selectedTimeMob = await t
                        .$(
                          '.day >tbody>tr:nth-of-type(' +
                            p +
                            ')>td:nth-of-type(' +
                            q +
                            ')'
                        )
                        .text();
                      await t.evaluate(
                        await t.$(
                          '.day >tbody>tr:nth-of-type(' +
                            p +
                            ')>td:nth-of-type(' +
                            q +
                            ')'
                        ),
                        (ele) => ele.click()
                      );
                      selectedDateMob = await t
                        .$(
                          '.pika-table>tbody>tr:nth-of-type(' +
                            m +
                            ')>td:nth-of-type(' +
                            n +
                            ')'
                        )
                        .text();
                      timeSelected = true;
                      dateSelected = true;
                      console.log('SelectedDate ' + selectedDateMob);
                      console.log('SelectedTime ' + selectedTimeMob);
                      gauge.message('SelectedDate ' + selectedDateMob);
                      gauge.message('SelectedTime ' + selectedTimeMob);
                      break;
                    }
                  }
                  if (timeSelected === true) {
                    break;
                  }
                }
              }
            }
          }
          if (timeSelected === true) {
            break;
          }
        }
      }
    }
  }
});

step('OAB Modify Timeslot Mobile', async function () {
  if (editDtTimeBtn !== '') {
    if (CommonData.BRLOC.includes('BB-TH')) {
      var NumRows = (await t.$(calendarRows).elements()).length;
      var classAttribute;
      var dateSelected = false;
      var timeSelected = false;
      var firstIteration = true;
      var day = new Date();
      var today = day.getDate();
      console.log('today ' + today);
      var dayInCal;

      while (dateSelected === false) {
        if (firstIteration === false) {
          //Next week button will be clicked, once first iteration through the entire calendar is complete.
          if (nextMonthCalendarButton !== '') {
            await t.evaluate(await t.$(nextMonthCalendarButton), (ele) =>
              ele.click()
            );
            gauge.message(messages.nextMonthButtonClicked);
            //After Next Month Calendar btn is clicked, today should be made 1
            today = 1;
          }
        }
        for (i = 1; i <= NumRows && timeSelected === false; i++) {
          firstIteration = false;
          for (j = 1; j <= 7 && timeSelected === false; j++) {
            if (mobCalendarScrollTo !== '') {
              await t.scrollTo(await t.$(mobCalendarScrollTo));
            } else {
              gauge.message(messages.scrollUpStep);
            }
            classAttribute = await t.evaluate(
              await t.$(
                "//table[@class='pika-table']/tbody/tr[" + i + ']/td[' + j + ']'
              ),
              (ele) => ele.getAttribute('class')
            );
            if (
              !classAttribute.includes('is-empty') &&
              !classAttribute.includes('is-disabled')
            ) {
              dayInCal = await t
                .$(
                  "//table[@class='pika-table']/tbody/tr[" +
                    i +
                    ']/td[' +
                    j +
                    ']'
                )
                .text();
              if (dayInCal > today) {
                await t.evaluate(
                  await t.$(
                    "//table[@class='pika-table']/tbody/tr[" +
                      i +
                      ']/td[' +
                      j +
                      ']'
                  ),
                  (ele) => ele.click()
                );
                await t.click(
                  await t.$(
                    "//table[@class='pika-table']/tbody/tr[" +
                      i +
                      ']/td[' +
                      j +
                      ']'
                  )
                );
                selectedDate = dayInCal;
                var NumAvailableTimeSlots = (
                  await t.$('.date-time-hours.enabled').elements()
                ).length;
                for (var k = 1; k <= NumAvailableTimeSlots; k++) {
                  selectedTime = await t.$('.date-time-hours.enabled').text();
                  await t.evaluate(
                    await t.$('.date-time-hours.enabled'),
                    (ele) => ele.click()
                  );
                  dateSelected = true;
                  timeSelected = true;
                  console.log('SelectedDate ' + selectedDate);
                  console.log('SelectedTime ' + selectedTime);
                  gauge.message('SelectedDate ' + selectedDate);
                  gauge.message('SelectedTime ' + selectedTime);
                  break;
                }
                if (classAttribute.includes('selected')) {
                  break;
                }
              }
            }
          }
          if (classAttribute.includes('selected')) {
            break;
          }
        }
      }
    } else if (CommonData.BRLOC.includes('AV-AU')) {
      var NumRows = (await t.$(calendarRowsMob).elements()).length;
      var dateSelected = false;
      var timeSelected = false;
      var firstIteration = true;
      //var classAttributeMOB;
      var day = new Date();
      var today = day.getDate();
      console.log('today ' + today);
      var dayInCal;

      while (dateSelected === false) {
        if (firstIteration === false) {
          if (nextWeekCalendarButtonMob !== '') {
            await t.evaluate(await t.$(nextWeekCalendarButtonMob), (ele) =>
              ele.click()
            );
            gauge.message(messages.nextWeekButtonClicked);
          }
        }
        for (m = 1; m <= NumRows && timeSelected === false; m++) {
          console.log('In step 2');
          firstIteration = false;
          for (
            n = 1;
            n <= CommonData.NOOFCOLINDATECALENDAR && timeSelected === false;
            n++
          ) {
            dayInCal = await t
              .$(
                '.pika-table>tbody>tr:nth-of-type(' +
                  m +
                  ')>td:nth-of-type(' +
                  n +
                  ')'
              )
              .text();
            console.log('dayInCal ' + dayInCal);
            if (dayInCal > today) {
              //await evaluate($(".pika-table>tbody>tr:nth-of-type(" + m + ")>td:nth-of-type(" + n + ")>.pika-button.pika-day"), { waitForEvents: ['firstPaint'] }, ele => ele.click());
              var classAttributeMOB = await t.evaluate(
                await t.$(
                  '.pika-table>tbody>tr:nth-of-type(' +
                    m +
                    ')>td:nth-of-type(' +
                    n +
                    ')'
                ),
                (ele) => ele.getAttribute('class')
              );
              console.log(classAttributeMOB);
              if (
                (classAttributeMOB !== '.is-disabled, .is-today') &
                (classAttributeMOB !== 'is-disabled')
              ) {
                await t.click(
                  t.$(
                    '.pika-table>tbody>tr:nth-of-type(' +
                      m +
                      ')>td:nth-of-type(' +
                      n +
                      ')>.pika-button.pika-day'
                  )
                );
                await t.waitFor(waitForTime);
                console.log('In step 6');
                selectedTimeMob = await t
                  .$('.day >tbody>tr>.enabled.store_open')
                  .text();
                await t.evaluate(
                  t.$('.day >tbody>tr>.enabled.store_open'),
                  (ele) => ele.click()
                );
                selectedDateMob = await t
                  .$(
                    '.pika-table>tbody>tr:nth-of-type(' +
                      m +
                      ')>td:nth-of-type(' +
                      n +
                      ')'
                  )
                  .text();
                timeSelected = true;
                dateSelected = true;
                console.log('SelectedDate ' + selectedDateMob);
                console.log('SelectedTime ' + selectedTimeMob);
                gauge.message('SelectedDate ' + selectedDateMob);
                gauge.message('SelectedTime ' + selectedTimeMob);
                break;
              }
            }
            if (timeSelected === true) {
              break;
            }
          }
        }
      }
    } else {
      m = m + 1;
      p = p + 1;
      console.log('In step 1');
      var NumRows = (await t.$(calendarRowsMob).elements()).length;
      var classAttribute;
      var dateSelected = false;
      // timeSelected should be false, as we have not yet selected a time.
      var timeSelected = false;
      var firstIteration = true;
      var day = new Date();
      var today = day.getDate();
      console.log('today ' + today);
      var dayInCal;

      while (dateSelected === false) {
        if (firstIteration === false) {
          if (nextWeekCalendarButtonMob !== '') {
            await t.evaluate(await t.$(nextWeekCalendarButtonMob), (ele) =>
              ele.click()
            );
            gauge.message(messages.nextWeekButtonClicked);
            m = 1;
          }
        }
        for (; m <= NumRows && timeSelected === false; m++) {
          console.log('In step 2');
          firstIteration = false;
          for (
            n = 1;
            n <= CommonData.NOOFCOLINDATECALENDAR && timeSelected === false;
            n++
          ) {
            if (mobCalendarScrollTo !== '') {
              await t.scrollTo(t.$(mobCalendarScrollTo));
            } else {
              gauge.message(messages.scrollUpStep);
            }
            //classAttribute = await evaluate($(".pika-table>tbody>tr:nth-of-type("+m+")>td:nth-of-type("+n+")"), (ele) => ele.getAttribute("class"));
            dayInCal = await t
              .$(
                '.pika-table>tbody>tr:nth-of-type(' +
                  m +
                  ')>td:nth-of-type(' +
                  n +
                  ')'
              )
              .text();

            if (dayInCal >= today) {
              console.log('dayInCal ' + dayInCal);
              //await evaluate($(".pika-table>tbody>tr:nth-of-type("+m+")>td:nth-of-type("+n+")>.pika-button"), (ele) => ele.click());
              //await evaluate($(".pika-table>tbody>tr:nth-of-type("+m+")>td:nth-of-type("+n+")"), (ele) => ele.setAttribute("class","is-selected"));
              await t.click(
                await t.$(
                  '.pika-table > tbody > tr:nth-of-type(' +
                    m +
                    ') > td:nth-of-type(' +
                    n +
                    ')'
                )
              );
              console.log('In step 4');
              for (; p <= CommonData.NOOFROWCOLINTIMECALENDARMOB; p++) {
                for (q = 1; q <= CommonData.NOOFROWCOLINTIMECALENDARMOB; q++) {
                  console.log('In step 5');
                  var timeslotMobClassAttribute = await t.evaluate(
                    await t.$(
                      '.day >tbody>tr:nth-of-type(' +
                        m +
                        ')>td:nth-of-type(' +
                        n +
                        ')'
                    ),
                    (ele) => ele.getAttribute('class')
                  );
                  console.log(
                    'timeslotMobClassAttribute ' + timeslotMobClassAttribute
                  );
                  if (
                    timeslotMobClassAttribute !== null &&
                    timeslotMobClassAttribute.includes('enabled')
                  ) {
                    console.log('In step 6');
                    selectedTimeMob = await t
                      .$(
                        '.day >tbody>tr:nth-of-type(' +
                          p +
                          ')>td:nth-of-type(' +
                          q +
                          ')'
                      )
                      .text();
                    await t.evaluate(
                      t.$(
                        '.day >tbody>tr:nth-of-type(' +
                          p +
                          ')>td:nth-of-type(' +
                          q +
                          ')'
                      ),
                      (ele) => ele.click()
                    );
                    selectedDateMob = await t
                      .$(
                        '.pika-table>tbody>tr:nth-of-type(' +
                          m +
                          ')>td:nth-of-type(' +
                          n +
                          ')'
                      )
                      .text();
                    timeSelected = true;
                    dateSelected = true;
                    console.log('SelectedDateMob ' + selectedDateMob);
                    console.log('SelectedTimeMob ' + selectedTimeMob);
                    gauge.message('SelectedDate ' + selectedDateMob);
                    gauge.message('SelectedTime ' + selectedTimeMob);
                    break;
                  }
                }
                if (timeSelected === true) {
                  break;
                }
              }
            }
          }
          if (timeSelected === true) {
            break;
          }
        }
      }
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'OAB Appointment Review Page enter Return User EmailId <plat>',
  async function (plat) {
    if (appReviewPageReturnUserEmail !== '') {
      if (plat === 'OAB') {
        await t.write(
          CommonData.RID,
          t.into(await t.$(appReviewPageReturnUserEmail))
        );
        gauge.message('Return user email id: ' + CommonData.RID);
      } else if (plat === 'VOAB') {
        await t.write(
          CommonData.RID1,
          t.into(await t.$(appReviewPageReturnUserEmail))
        );
        gauge.message('Return user email id: ' + CommonData.RID1);
      }
    }
  }
);

step('OAB Appointment Review Page enter Return User PWD', async function () {
  if (appReviewPageReturnUserPWD !== '') {
    await t.write(
      CommonData.RPWD,
      t.into(await t.$(appReviewPageReturnUserPWD))
    );
    gauge.message('Return User PWD: ' + CommonData.RPWD);
    gauge.screenshot();
  }
});

step(
  'OAB Appointment Review Page click Return User Login Button',
  async function () {
    if (appReviewPageReturnUserLoginButton !== '') {
      await t.evaluate(await t.$(appReviewPageReturnUserLoginButton), (ele) =>
        ele.click()
      );
      gauge.screenshot();
      //on logging in First Name, Last Name and email id gets populated
    }
  }
);

step(
  'click Consent to collection and use of personal information radio button',
  async function () {
    if (privacyPolicyRadioButton !== '') {
      await t.evaluate(await t.$(privacyPolicyRadioButton), (ele) =>
        ele.click()
      );
      gauge.screenshot();
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step(
  'click Consent to receive SMS notification radio button',
  async function () {
    if (smsNotificationRadioButton !== '') {
      await t.evaluate(await t.$(smsNotificationRadioButton), (ele) =>
        ele.click()
      );
      gauge.screenshot();
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step('click newsletter radio button', async function () {
  if (oabNewsletterRB !== '') {
    await t.evaluate(await t.$(oabNewsletterRB), (ele) => ele.click());
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('click receive text radio button', async function () {
  if (oabRecevietextRB !== '') {
    await t.evaluate(await t.$(oabRecevietextRB), (ele) => ele.click());
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('click DM Receive radio button', async function () {
  if (oabReceiveDMRB !== '') {
    await t.evaluate(await t.$(oabReceiveDMRB), (ele) => ele.click());
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'click consent to consign marketing information transmission radio button',
  async function () {
    if (marketingInformationRB !== '') {
      await t.evaluate(await t.$(marketingInformationRB), (ele) => ele.click());
      gauge.screenshot();
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

var brandLocaleSet41 = ['JM-FR', 'JM-CA'];
var brandLocaleSet42 = ['MC-DE', 'MC-TW', 'MC-AU'];
function dateAssertion(DateMyAppPage, DateAppConfirmPage) {
  console.log(
    '********************************dateAssertion START************************'
  );
  var DateMyAppPageToLower = DateMyAppPage.toLowerCase(); //"PREVIOUSLY DATE TIME FORMAT WAS: aug 14, 2021 at 1pm NOW IT IS: SEP 2, 2021 at 10AM
  console.log('DateMyAppPageToLower: ', DateMyAppPageToLower);
  var DateAppConfirmPageToLower = DateAppConfirmPage.toLowerCase(); //'PREVIOUSLY DATE TIME FORMAT WAS:saturday, aug 14, 2021\n1:00 pm' NOW IT IS: Thursday, 2 Sep 2021\n\n10:00
  console.log('DateAppConfirmPageToLower: ', DateAppConfirmPageToLower);
  var p = DateMyAppPageToLower.split(',');
  console.log(' p[0]= ' + p[0] + ' p[1]= ' + p[1] + ' p[2]= ' + p[2]);
  //Date assertion prepared to compare date on JM CA, due to one format cosisting AM/PM and the other not.
  if (CommonData.BRLOC.includes('LM-AU')) {
    var a = p[1].split('\n\n');
    p[1] = a[0];
    p[2] = a[1];
    var n = DateAppConfirmPageToLower.split(',');
    var b = n[1].split('\n\n');
    n[1] = b[0];
    n[2] = b[1];
    console.log(
      ' Data My app page p[0]= ' + p[0] + ' p[1]= ' + p[1] + ' p[2]= ' + p[2]
    );
    console.log(
      'Data Confirmation page n[0]= ' +
        n[0] +
        ' n[1]= ' +
        n[1] +
        ' n[2]= ' +
        n[2]
    );
    if (p[1] === n[1]) {
      console.log('Date is same in both'); //p[0]= aug 14
    } else {
      console.log('Date is not same in both');
      return false;
    }
    var h = p[2].split(':');
    var h1 = n[2].split(':');
    if (h[0] === h1[0] && h[1] === h1[1]) {
      console.log('Time is the same ' + p[2]);
    } else {
      console.log(
        'Time of the appointment is not the same in Confirmation page ' +
          n[2] +
          ' and my appointments page ' +
          p[2]
      );
      return false;
    }
    console.log(
      '********************************dateAssertion END************************'
    );
    return true;
  }

  if (CommonData.BRLOC.includes('EL-UK')) {
    if (
      DateAppConfirmPageToLower.slice(0, 3) +
      DateAppConfirmPageToLower.slice(
        4,
        DateAppConfirmPageToLower.length
      ).includes(p[0])
    ) {
      //slicing the . in the month name
      console.log('Date is same in both'); //p[0]= aug 14
    } else {
      console.log('Date is not same in both');
      return false;
    }

    //Date Assertion coplete
    var s = DateMyAppPage.split(' ');
    console.log(
      's[0] = ' +
        s[0] +
        ' s[1] = ' +
        s[1] +
        ' s[2] = ' +
        s[2] +
        ' s[3] = ' +
        s[3] +
        ' s[4] = ' +
        s[4]
    );
    var t = DateAppConfirmPage.split(' ');
    console.log(
      ' t[0] = ' +
        t[0] +
        ' t[1] = ' +
        t[1] +
        ' t[2] = ' +
        t[2] +
        ' t[3] = ' +
        t[3]
    );

    if (s[4].length < 5) {
      s[4] = s[4].slice(0, -2) + ':00';
    } else {
      s[4] = s[4].slice(0, -2);
    }

    console.log('s[4]: ', s[4]);
    let u = t[3].split('\n');
    console.log(' u[0] = ' + u[0] + ' u[1] = ' + u[1] + ' u[2] = ' + u[2]);
    console.log('u[2]', u[2]);

    if (u[2].includes(s[4])) {
      console.log('My app time: ' + s[4] + ' Conf page time: ' + u[2]);
      console.log(u[2].includes(s[4]));
      console.log('Time is the same');
    } else {
      console.log('in XX:YY, XX is not same in both');
      return false;
    }
    console.log(
      '********************************dateAssertion END************************'
    );
    return true;

    // Old date assertiotn function for other brands and locales. Does not work if date on confirmation page has AM/PM and date on My Appoinetes page does not and vice versa
  }

  if (CommonData.BRLOC.includes('BB-UK')) {
    if (
      DateAppConfirmPageToLower.slice(0, 3) +
      DateAppConfirmPageToLower.slice(
        4,
        DateAppConfirmPageToLower.length
      ).includes(p[0])
    ) {
      //slicing the . in the month name
      console.log('Date is same in both'); //p[0]= aug 14
    } else {
      console.log('Date is not same in both');
      return false;
    }
    //Date Assertion coplete
    var s = DateMyAppPage.split(' ');
    console.log(
      's[0] = ' +
        s[0] +
        ' s[1] = ' +
        s[1] +
        ' s[2] = ' +
        s[2] +
        ' s[3] = ' +
        s[3] +
        ' s[4] = ' +
        s[4]
    );
    var t = DateAppConfirmPage.split(' ');
    console.log(
      ' t[0] = ' +
        t[0] +
        ' t[1] = ' +
        t[1] +
        ' t[2] = ' +
        t[2] +
        ' t[3] = ' +
        t[3]
    );
    //Formating the PM hours
    let w = t[3].split('\n');
    console.log(' w[0] = ' + w[0] + ' w[1] = ' + w[1] + ' w[2] = ' + w[2]);
    // let z = w[2].split(':');
    // console.log(' z[0] = ' + z[0] + ' z[1] = ' + z[1]);

    // if (Number(z[0] > 12)) {
    //   z[0] = (Number(z[0]) - 12).toString();
    // }
    // w[2] = z[0] + ':' + z[1];
    console.log('w[2]:', w[2]);

    let u = s[2].split('\n');
    console.log(' u[0] = ' + u[0] + ' u[1] = ' + u[1] + ' u[2] = ' + u[2]);
    if (u[1].length < 3) {
      u[1] = u[1] + ':00';
    }
    console.log('u[1]:', u[1]);
    if (w[2].includes(u[1])) {
      console.log('My app time: ' + u[1] + ' Conf page time: ' + w[2]);
      console.log(w[2].includes(u[1]));
      console.log('Time is the same');
    } else {
      console.log('in XX:YY, XX is not same in both');
      return false;
    }
    console.log(
      '********************************dateAssertion END************************'
    );
    return true;
    // Old date assertiotn function for other brands and locales. Does not work if date on confirmation page has AM/PM and date on My Appoinetes page does not and vice versa
  }

  if (CommonData.BRLOC.includes('OR-UK')) {
    if (
      DateAppConfirmPageToLower.slice(0, 3) +
      DateAppConfirmPageToLower.slice(
        4,
        DateAppConfirmPageToLower.length
      ).includes(p[0])
    ) {
      //slicing the . in the month name
      console.log('Date is same in both'); //p[0]= aug 14
    } else {
      console.log('Date is not same in both');
      return false;
    }
    //Date Assertion coplete
    var s = DateMyAppPage.split(' ');
    console.log(
      's[0] = ' +
        s[0] +
        ' s[1] = ' +
        s[1] +
        ' s[2] = ' +
        s[2] +
        ' s[3] = ' +
        s[3] +
        ' s[4] = ' +
        s[4]
    );
    var t = DateAppConfirmPage.split(' ');
    console.log(
      ' t[0] = ' +
        t[0] +
        ' t[1] = ' +
        t[1] +
        ' t[2] = ' +
        t[2] +
        ' t[3] = ' +
        t[3]
    );

    console.log('s[3]: ', s[3]);
    let z = s[3].split('\n');
    console.log(' z[0] = ' + z[0] + ' z[1] = ' + z[1] + ' z[2] = ' + z[2]);

    console.log('z[1]: ', z[1]);
    let u = t[3].split('\n');
    console.log(' u[0] = ' + u[0] + ' u[1] = ' + u[1] + ' u[2] = ' + u[2]);
    console.log('u[2]:', u[2]);
    z[1] = z[1].slice(0, -2);
    console.log('z[1]: ', z[1]);

    if (u[2].includes(z[1])) {
      console.log('My app time: ' + z[1] + ' Conf page time: ' + u[2]);
      console.log(u[2].includes(z[1]));
      console.log('Time is the same');
    } else {
      console.log('in XX:YY, XX is not same in both');
      return false;
    }
    console.log(
      '********************************dateAssertion END************************'
    );
    return true;
    // Old date assertiotn function for other brands and locales. Does not work if date on confirmation page has AM/PM and date on My Appoinetes page does not and vice versa
  }

  if (CommonData.BRLOC.includes('LM-UK')) {
    if (
      DateAppConfirmPageToLower.slice(0, 3) +
      DateAppConfirmPageToLower.slice(
        4,
        DateAppConfirmPageToLower.length
      ).includes(p[0])
    ) {
      //slicing the . in the month name
      console.log('Date is same in both'); //p[0]= aug 14
    } else {
      console.log('Date is not same in both');
      return false;
    }
    //Date Assertion complete
    var s = DateMyAppPage.split('\n');
    console.log(
      's[0] = ' +
        s[0] +
        ' s[1] = ' +
        s[1] +
        ' s[2] = ' +
        s[2] +
        ' s[3] = ' +
        s[3] +
        ' s[4] = ' +
        s[4] +
        ' s[5] = ' +
        s[5]
    );
    var t = DateAppConfirmPage.split(' ');
    console.log(
      ' t[0] = ' +
        t[0] +
        ' t[1] = ' +
        t[1] +
        ' t[2] = ' +
        t[2] +
        ' t[3] = ' +
        t[3]
    );

    let u = t[3].split('\n');
    console.log(' u[0] = ' + u[0] + ' u[1] = ' + u[1] + ' u[2] = ' + u[2]);

    s[3] = s[3].slice(0, -2);
    console.log('s[3]: ', s[3]);
    u[2] = u[2].slice(0, -2);
    console.log('u[2]: ', u[2]);

    if (u[2].includes(s[3])) {
      console.log('My app time: ' + s[3] + ' Conf page time: ' + u[2]);
      console.log(u[2].includes(s[3]));
      console.log('Time is the same');
    } else {
      console.log('in XX:YY, XX is not same in both');
      return false;
    }
    console.log(
      '********************************dateAssertion END************************'
    );
    return true;
  }

  if (CommonData.BRLOC.includes('TF-UK')) {
    if (
      DateAppConfirmPageToLower.slice(0, 3) +
      DateAppConfirmPageToLower.slice(
        4,
        DateAppConfirmPageToLower.length
      ).includes(p[0])
    ) {
      //slicing the . in the month name
      console.log('Date is same in both'); //p[0]= aug 14
    } else {
      console.log('Date is not same in both');
      return false;
    }
    //Date Assertion complete
    var s = DateMyAppPage.split('\n');
    console.log(
      's[0] = ' +
        s[0] +
        ' s[1] = ' +
        s[1] +
        ' s[2] = ' +
        s[2] +
        ' s[3] = ' +
        s[3] +
        ' s[4] = ' +
        s[4] +
        ' s[5] = ' +
        s[5]
    );
    var t = DateAppConfirmPage.split(' ');
    console.log(
      ' t[0] = ' +
        t[0] +
        ' t[1] = ' +
        t[1] +
        ' t[2] = ' +
        t[2] +
        ' t[3] = ' +
        t[3]
    );

    let u = t[3].split('\n');
    console.log(' u[0] = ' + u[0] + ' u[1] = ' + u[1] + ' u[2] = ' + u[2]);

    if (s[1].length < 6) {
      s[1] = s[1].slice(0, -3) + ':00';
    } else {
      s[1] = s[1].slice(0, -3);
    }

    console.log('s[1]: ', s[1]);

    if (u[2].includes(s[1])) {
      console.log('My app time: ' + s[1] + ' Conf page time: ' + u[2]);
      console.log(u[2].includes(s[1]));
      console.log('Time is the same');
    } else {
      console.log('in XX:YY, XX is not same in both');
      return false;
    }
    console.log(
      '********************************dateAssertion END************************'
    );
    return true;
  }

  if (CommonData.BRLOC.includes('MC-US')) {
    if (
      DateAppConfirmPageToLower.slice(0, 3) +
      DateAppConfirmPageToLower.slice(
        4,
        DateAppConfirmPageToLower.length
      ).includes(p[0])
    ) {
      //slicing the . in the month name
      console.log('Date is same in both'); //p[0]= aug 14
    } else {
      console.log('Date is not same in both');
      return false;
    }
    //Date Assertion complete
    var s = DateMyAppPage.split('\n');
    console.log(
      's[0] = ' +
        s[0] +
        ' s[1] = ' +
        s[1] +
        ' s[2] = ' +
        s[2] +
        ' s[3] = ' +
        s[3] +
        ' s[4] = ' +
        s[4] +
        ' s[5] = ' +
        s[5]
    );
    var t = DateAppConfirmPage.split(' ');
    console.log(
      ' t[0] = ' +
        t[0] +
        ' t[1] = ' +
        t[1] +
        ' t[2] = ' +
        t[2] +
        ' t[3] = ' +
        t[3]
    );

    let u = t[3].split('\n');
    console.log(' u[0] = ' + u[0] + ' u[1] = ' + u[1] + ' u[2] = ' + u[2]);
    u[2] = u[2].slice(0, -3);
    console.log('u[2]:', u[2]);
    let w = s[1].split('-');
    console.log(' w[0] = ' + w[0] + ' w[1] = ' + w[1] + ' w[2] = ' + w[2]);
    console.log('w[0]:', w[0]);

    if (w[0].includes(u[2])) {
      console.log('My app time: ' + w[0] + ' Conf page time: ' + u[2]);
      console.log(w[0].includes(u[2]));
      console.log('Time is the same');
    } else {
      console.log('in XX:YY, XX is not same in both');
      return false;
    }
    console.log(
      '********************************dateAssertion END************************'
    );
    return true;
  }

  if (CommonData.BRLOC.includes('AV-US')) {
    if (
      DateAppConfirmPageToLower.slice(0, 3) +
      DateAppConfirmPageToLower.slice(
        4,
        DateAppConfirmPageToLower.length
      ).includes(p[0])
    ) {
      //slicing the . in the month name
      console.log('Date is same in both'); //p[0]= aug 14
    } else {
      console.log('Date is not same in both');
      return false;
    }
    //Date Assertion complete
    var s = DateMyAppPage.split('\n');
    console.log(
      's[0] = ' +
        s[0] +
        ' s[1] = ' +
        s[1] +
        ' s[2] = ' +
        s[2] +
        ' s[3] = ' +
        s[3] +
        ' s[4] = ' +
        s[4] +
        ' s[5] = ' +
        s[5]
    );
    var t = DateAppConfirmPage.split(' ');
    console.log(
      ' t[0] = ' +
        t[0] +
        ' t[1] = ' +
        t[1] +
        ' t[2] = ' +
        t[2] +
        ' t[3] = ' +
        t[3]
    );

    let u = t[3].split('\n');
    console.log(' u[0] = ' + u[0] + ' u[1] = ' + u[1] + ' u[2] = ' + u[2]);
    // if (s[2].length < 6) {
    //   s[2] = s[2].slice(0, -2) + ':00';
    // } else {
    //   s[2] = s[2].slice(0, -2);
    //   u[2] = u[2].slice(0, -2);
    // }
    s[2] = s[2].slice(0, -3);
    console.log('s[2]:', s[2]);
    console.log('u[2]:', u[2]);

    if (u[2].includes(s[2])) {
      console.log('My app time: ' + s[2] + ' Conf page time: ' + u[2]);
      console.log(u[2].includes(s[2]));
      console.log('Time is the same');
    } else {
      console.log('in XX:YY, XX is not same in both');
      return false;
    }
    console.log(
      '********************************dateAssertion END************************'
    );
    return true;
  }

  if (
    CommonData.BRLOC.includes('JM-UK') ||
    CommonData.BRLOC.includes('JM-US') ||
    CommonData.BRLOC.includes('CL-UK') ||
    CommonData.BRLOC.includes('AV-UK')
  ) {
    if (
      DateAppConfirmPageToLower.slice(0, 3) +
      DateAppConfirmPageToLower.slice(
        4,
        DateAppConfirmPageToLower.length
      ).includes(p[0])
    ) {
      //slicing the . in the month name
      console.log('Date is same in both'); //p[0]= aug 14
    } else {
      console.log('Date is not same in both');
      return false;
    }
    //Date Assertion complete
    var s = DateMyAppPage.split(' ');
    console.log(
      's[0] = ' +
        s[0] +
        ' s[1] = ' +
        s[1] +
        ' s[2] = ' +
        s[2] +
        ' s[3] = ' +
        s[3] +
        ' s[4] = ' +
        s[4]
    );
    var t = DateAppConfirmPage.split(' ');
    console.log(
      ' t[0] = ' +
        t[0] +
        ' t[1] = ' +
        t[1] +
        ' t[2] = ' +
        t[2] +
        ' t[3] = ' +
        t[3]
    );

    s[4] = s[4].slice(0, -2);
    console.log('s[4]: ', s[4]);
    let u = t[3].split('\n');
    console.log(' u[0] = ' + u[0] + ' u[1] = ' + u[1] + ' u[2] = ' + u[2]);
    if (Number(u[2].slice(0, 1)) === 0) {
      u[2] = u[2].slice(1);
    }
    console.log('u[2]: ', u[2]);

    if (u[2].includes(s[4])) {
      console.log('My app time: ' + s[4] + ' Conf page time: ' + u[2]);
      console.log(u[2].includes(s[4]));
      console.log('Time is the same');
    } else {
      console.log('in XX:YY, XX is not same in both');
      return false;
    }
    console.log(
      '********************************dateAssertion END************************'
    );
    return true;
  }

  if (brandLocaleSet41.includes(CommonData.BRLOC)) {
    if (
      DateAppConfirmPageToLower.slice(0, 3) +
      DateAppConfirmPageToLower.slice(
        4,
        DateAppConfirmPageToLower.length
      ).includes(p[0])
    ) {
      //slicing the . in the month name
      console.log('Date is same in both'); //p[0]= aug 14
    } else {
      console.log('Date is not same in both');
      return false;
    }
    //Date Assertion complete
    var s = DateMyAppPage.split(' ');
    console.log(
      's[0] = ' +
        s[0] +
        ' s[1] = ' +
        s[1] +
        ' s[2] = ' +
        s[2] +
        ' s[3] = ' +
        s[3] +
        ' s[4] = ' +
        s[4]
    );
    var t = DateAppConfirmPage.split(' ');
    console.log(
      ' t[0] = ' +
        t[0] +
        ' t[1] = ' +
        t[1] +
        ' t[2] = ' +
        t[2] +
        ' t[3] = ' +
        t[3]
    );

    if (s[4].length < 3) {
      s[4] = s[4] + ':00';
    }
    console.log('s[4]: ', s[4]);
    let u = t[3].split('\n');
    console.log(' u[0] = ' + u[0] + ' u[1] = ' + u[1] + ' u[2] = ' + u[2]);
    if (Number(u[2].slice(0, 1)) === 0) {
      u[2] = u[2].slice(1);
    }
    console.log('u[2]: ', u[2]);

    if (s[4].includes(u[2])) {
      console.log('My app time: ' + s[4] + ' Conf page time: ' + u[2]);
      console.log(s[4].includes(u[2]));
      console.log('Time is the same');
    } else {
      console.log('in XX:YY, XX is not same in both');
      return false;
    }
    console.log(
      '********************************dateAssertion END************************'
    );
    return true;
  }

  if (brandLocaleSet42.includes(CommonData.BRLOC)) {
    var s = DateMyAppPage.split('\n');
    console.log('s[0] = ' + s[0] + ' s[1] = ' + s[1]);
    var t = DateAppConfirmPage.split('\n');
    console.log('t[0] = ' + t[0] + ' t[1] = ' + t[1]);
    var u = s[1].split(' ');
    console.log(u[0] + ' ' + u[2]);
    var v = t[1].split(' ');
    console.log(v[0] + ' ' + v[2]);
    if (u[0].includes(v[0]) && u[2].includes(v[2])) {
      console.log('Start hour is the same');
    } else {
      console.log('in XX:YY, XX is not same in both');
      return false;
    }
    console.log(
      '********************************dateAssertion END************************'
    );
    return true;
  }
  if (CommonData.BRLOC.includes('AV-AU')) {
    var s = DateAppConfirmPageToLower.split(',');
    console.log('s0 = ' + s[0] + ' s1= ' + s[1]);
    var q = DateMyAppPageToLower.split(',');
    console.log('q0 = ' + q[0] + ' q1= ' + q[1]);
    // var d = q[0].slice(0,4)
    // console.log("d0 = " + d[0] +" d1= " +d[1] + " d2 = " + d[2])
    if (DateAppConfirmPageToLower.includes(s[0])) {
      console.log('Date is same in both');
    } else {
      console.log('Date is not same in both');
    }
    var m = s[1].split(':');
    var n = q[1].split(':');
    console.log(n[1]);
    console.log('m0 = ' + m[0] + ' m1= ' + m[1].slice(2, 4));
    if (q[1].includes(m[1].slice(2, 4))) {
      console.log('AM or PM is present in both');
    } else {
      console.log('one contains AM and the other contains PM');
    }
    if (
      s[0].includes(q[0].split(' ')[1]) &&
      s[0].includes(q[0].split(' ')[0])
    ) {
      console.log(
        'Month and day is the same ' +
          q[0].split(' ')[0] +
          ' ' +
          q[0].split(' ')[1]
      );
    } else {
      console.log('in XX:YY, XX is not same in both');
      return false;
    }
    console.log(
      '********************************dateAssertion END************************'
    );
    return true;
  }
  if (CommonData.BRLOC.includes('BB-TH')) {
    var d = DateMyAppPage.split(' ');
    var e = DateAppConfirmPage.split(' ');

    console.log(
      'd[0] ' + d[0] + ' d[1] ' + d[1] + ' d[2] ' + d[2] + ' d[3] ' + d[3]
    );
    console.log(
      'e[0] ' + e[0] + ' e[1] ' + e[1] + ' e[2] ' + e[2] + ' e[3] ' + e[3]
    );

    if ((d[1] = e[0]) && (d[0] = e[1])) {
      console.log('Month and day is the same');
    } else {
      console.log('Month and day is not the same');
      return false;
    }
    console.log(
      '********************************dateAssertion END************************'
    );
    return true;
  } else {
    if (DateAppConfirmPageToLower.includes(p[0])) {
      console.log('Date is same in both'); //p[0]= aug 14
    } else {
      console.log('Date is not same in both');
      return false;
    }

    //Date Assertion coplete
    var s = DateMyAppPage.split(' ');
    console.log(
      's[0] = ' +
        s[0] +
        ' s[1] = ' +
        s[1] +
        ' s[2] = ' +
        s[2] +
        ' s[3] = ' +
        s[3] +
        ' s[4] = ' +
        s[4] +
        ' s[5] = ' +
        s[5] +
        ' s[6] = ' +
        s[6]
    );
    var t = DateAppConfirmPage.split(' ');
    console.log(
      ' t[0] = ' +
        t[0] +
        ' t[1] = ' +
        t[1] +
        ' t[2] = ' +
        t[2] +
        ' t[3] = ' +
        t[3] +
        ' t[4] = ' +
        t[4]
    );
    if (s[4].includes(t[4])) {
      console.log(s[4].includes(t[4])); // true means PM or AM is present in both
      console.log('AM or PM is present in both');
    } else {
      console.log('one contains AM and the other contains PM');
      return false;
    }

    var u = t[3].split('\n\n');
    console.log('u[0] = ' + u[0] + ' u[1] = ' + u[1]);
    var v = u[1].split(':');
    console.log('v[0] = ' + v[0] + ' v[1] = ' + v[1]);
    if (s[4].includes(v[0])) {
      console.log('s[4].includes(v[0])= ' + s[4].includes(v[0]));
    } else {
      console.log('in XX:YY, XX is not same in both');
      return false;
    }
    /*
        There is an issue in the App in JM US, observed in pre prod. Even if an appointment is booked at 12:30PM, the minute part
        is not displayed in My Appointments pg, there it is displayed as 12PM. 
        For that commenting this block of code as of now. 
        if(v[1]!="00"){
            if(s[4].includes(v[1])){
                console.log("s[4].includes(v[1])= "+s[4].includes(v[1]))
                console.log("in XX:YY, YY is same in both")
            }
            else{
                console.log("in XX:YY, YY is not same in both")
                return false;
            }
        }
        */
    console.log(
      '********************************dateAssertion END************************'
    );
    return true;
  }
}

step('OAB Click Book Virtual Appointment Button', async function () {
  if (virtualAppointmentButton !== '') {
    await (await t.$(virtualAppointmentButton)).exists(pollingTime, timeout);
    await t.evaluate(
      await t.$(virtualAppointmentButton),
      (ele) => ele.click(),
      { waitForNavigation: false }
    );
  }
});

step('OAB Click Book Virtual Mobile Appointment Button', async function () {
  if (virtualMobileAppointmentButton !== '') {
    await (
      await t.$(virtualMobileAppointmentButton)
    ).exists(pollingTime, timeout);
    await t.evaluate(await t.$(virtualMobileAppointmentButton), (ele) =>
      ele.click()
    );
  }
});

step('Check Accept privecy policy checkbox for return user', async function () {
  if (acceptPrivecyPolicyCheckboxReturnUser !== '') {
    await t.evaluate(await t.$(acceptPrivecyPolicyCheckboxReturnUser), (ele) =>
      ele.click()
    );
    gauge.message(messages.acceptPrivacyCheckbox);
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('OAB Get service name form third step', async function () {
  if (serviceNameThirdStep !== '') {
    await t.waitFor(timeout);
    await (await t.$(serviceNameThirdStep)).exists(pollingTime, timeout);
    serviceName1ThirdStep = await t.evaluate(
      await t.$(serviceNameThirdStep),
      (ele) => ele.innerText
    );
    gauge.message('Service Selected in Step 3: ' + serviceName1ThirdStep);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('OAB Choose type of appointment <plat>', async function (plat) {
  //this step is only aplicable to MC-DE due to newest changes
  if (plat === 'OAB') {
    if (goToPhysicalAppButton !== '') {
      await (await t.$(goToPhysicalAppButton)).exists(pollingTime, timeout);
      await t.evaluate(await t.$(goToPhysicalAppButton), (ele) => ele.click());
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
  if (plat === 'VOAB') {
    if (goToVirtualAppButton !== '') {
      await (await t.$(goToVirtualAppButton)).exists(pollingTime, timeout);
      await t.evaluate(await t.$(goToVirtualAppButton), (ele) => ele.click());
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
});

step('OAB Click Mobile Calendar button', async function () {
  if (mobileCalendarButton !== '') {
    await t.waitFor(waitForTime);
    await t.evaluate(await t.$(mobileCalendarButton), (ele) => ele.click());
    gauge.message(messages.calendarButtonClicked);
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
    gauge.screenshot();
  }
});

step('OAB Expand the my appointments list', async function () {
  if (expandMyAppBtn !== '') {
    await t.waitFor(waitForTime);
    await t.evaluate(await t.$(expandMyAppBtn), (ele) => ele.click());
    gauge.message(messages.expandButtonClicked);
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
    gauge.screenshot();
  }
});

step('OAB Click Next Button after Date Time Selection 2', async function () {
  //if date is selected, then the button gets enabled and the string enabled appears in the class attribute value
  if (nextBtnAfterDtTimeSelection2 !== '') {
    await t.evaluate(await t.$(nextBtnAfterDtTimeSelection2), (ele) =>
      ele.click()
    );
    gauge.message(messages.nextButtonClicked);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('OAB Click Welcome Location', async function () {
  if (welcomeLocation !== '') {
    try {
      await t.waitFor(await t.$(welcomeLocation));
      await t.evaluate(await t.$(welcomeLocation), (ele) => ele.click());
      gauge.message(messages.welcomeLocationClicked);
    } catch (e) {
      // exception added for no popup appearing on website.
      gauge.message(messages.noLocationPopup);
    }
  }
});

// Const for JM-EU Spanish language: "//body/div[@id='localeOverlay']/div[@id='localeInterstitial']/div[1]/div[5]/ul[1]/li[2]/input[1]" //
step('OAB Click Welcome Language', async function () {
  if (welcomeLanguage !== '') {
    try {
      await t.waitFor(await t.$(welcomeLanguage));
      await t.evaluate(await t.$(welcomeLanguage), (ele) => ele.click());
      gauge.message(messages.welcomeLanguageClicked);
    } catch (e) {
      // exception added for no popup appearing on website.
      gauge.message(messages.noLanguagePopup);
    }
  }
});

step('OAB Click Welcome Submit Button', async function () {
  if (welcomeSubmitBtn !== '') {
    try {
      await t.waitFor(await t.$(welcomeSubmitBtn));
      await t.evaluate(await t.$(welcomeSubmitBtn), (ele) => ele.click());
      gauge.message(messages.welcomeSubmitButton);
    } catch (e) {
      // exception added for no popup appearing on website.
      gauge.message(messages.noLocationPopup);
    }
  }
});
