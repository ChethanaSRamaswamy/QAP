var CommonData = {};
const feature = 'OAB';
// https://github.com/getgauge/gauge-js/blob/master/docs/syntax/data-stores.md
const gaugeStore = gauge.dataStore.scenarioStore;
const gaugeStoreSpec = gauge.dataStore.specStore;

var brandLocale = '';
var SDTimeoutSetting = '';
var SDOABContainer = '';
var SDAcceptCookie = '';
var SDDrupalBarToggle = '';
var SDPopUpClose = '';
var SDOabGoBackBtn = '';
var SDOABLoader = '';
var SDStep1StateDropItem = '';
var SDStep1LocationDropItem = '';
var SDStep1StoreDropItem = '';
var SDStep1StateDropdownIcon = '';
var SDStep1LocationDropIcon = '';
var SDStep1StoreDropIcon = '';
var SDStep2Container = '';
var SDStep1StoreDropContainer = '';
var SDStep1NextVOABBtn = '';
var SDStep1NextOABBtn = '';
// var SDStep1StoreDropdownDefault = '';
var SDStep2ServiceImage = '';
var SDStep2ServiceAddBtn = '';
var SDStep2ServiceRemoveBtn = '';
var SDStep2ServiceContainer = '';
var SDErrorModal = '';
var SDErrorModalClose = '';
var SDStep2ServiceTitle = '';
var SDStep2ServiceDesc = '';
var SDStep2ServiceDuration = '';
var SDStep2ServicePrice = '';
var SDStep2and3NextBtnActive = '';
var SDStep3Container = '';
var SDStep3SelectArtistArrow = '';
var SDStep3ArtistsListEle = '';
// var SDStep3SelectArtistBtn = ''; step in progres
var SDStep3SelectedArtistBtn = '';
var SDStep3NextMonthBtn = '';
var SDStep3SelectedDay = '';
var SDStep3ActiveDay = '';
var SDStep3SelectedTime = '';
var SDStep3ActiveTime = '';
var SDStep4Container = '';
var SDStep3Morning = '';
var SDStep3Afternoon = '';
var SDStep3Evening = '';
var SDStep4VirtualDesc = '';
var SDStep4StoreName = '';
// var SDStep4StoreAddress1 = '';
// var SDStep4StoreAddress2 = '';
var SDStep4DateContainer = '';
var SDStep4Artist = '';
var SDStep4Date = '';
var SDStep4Time = '';
var SDStep4ServiceTitle = '';
var SDStep4ServiceDesc = '';
var SDStep4ServiceDuration = '';
var SDStep4ServicePrices = '';
var SDStep4EditLocation = '';
var SDStep4EditTime = '';
var SDStep4EditService = '';
var SDStep4CancelAndOverBtn = '';
var SDStep4FullName = '';
var SDStep4Name = '';
var SDStep4SurrName = '';
var SDStep4Inputs = '';
var SDStep4Email = '';
var SDStep4Phone = '';
var SDStep4CPF = '';
var SDStep4FullNameError = '';
var SDStep4NameError = '';
var SDStep4SurNameError = '';
var SDStep4EmailError = '';
var SDStep4PhoneError = '';
// var SDStep4CPFError = '';
var SDStep4LegalLinks = '';
var SDStep4GDPRHoveer = '';
var SDStep4GDPRClose = '';
var SDStep4TCCheckbox = '';
var SDStep4LegalCheckboxes = '';
var SDStep4KoreaDissagreeBtn = '';
// var SDStep4TCCopy = '';
var SDStep4SMSOptInCheckbox = '';
var SDStep4EmailOptInCheckbox = '';
var SDStep4NextBtn = '';
var SDConfPageContainer = '';
var SDConfPageLocationStore = '';
var SDConfPageLocationAddress1 = '';
var SDConfPageLocationAddress2 = '';
var SDConfPageDateContainer = '';
var SDConfPageArtist = '';
var SDConfPageDate = '';
var SDConfPageTime = '';
var SDConfPageServiceName = '';
var SDConfPageServiceDesc = '';
var SDConfPageServiceDuration = '';
var SDConfPageServicePrice = '';
var SDConfPageVirtualDesc = '';
var SDConfPageZoomLink = '';
var SDConfPageGetDirectionsLink = '';
var SDLogOutMyAcc = '';
var SDAccLogInEmail = '';
var SDAccLogInPswd = '';
var SDAccSubmitLogIn = '';
var SDChangeFormLogIn = '';
var SDMyAccNav = '';
var SDChangeFormRegis = '';
var SDFirstNameRegis = '';
var SDEmailRegis = '';
var SDLastNameRegis = '';
var SDPswdRegis = '';
var SDNewsletter1CheckboxRegis = '';
var SDNewsletter2CheckboxRegis = '';
var SDTCCheckboxRegis = '';
var SDCreateAccBtnRegis = '';
var SDSubmitBtnRegis = '';
var SDTileRegis = '';
var SDPswd2Regis = '';
var SDPswdHintRegis = '';
var SDCPFRegis = '';
var SDPhoneNumberRegis = '';
var SDBDayYear = '';
var SDBDayYearDropDownID = '';
var SDBDayMonthDropDownID = '';
var SDBDayDayDropDownID = '';
var SDMyAppAccessPoint = '';
var SDMyAppContainer = '';
var SDMyAppBookNowBtn = '';
var SDMyAppBookAnotherAppBtn = '';
var SDMyAppCurrent = '';
// var SDMyAppOpenDropDown = ''; step in progress
var SDMyAppContainerIDPart = '';
var SDMyAppServiceNames = '';
var SDMyAppDates = '';
var SDMyAppTimes = '';
var SDMyAppWheres = '';
var SDMyAppServiceDurations = '';
var SDMyAppServicePrices = '';
var SDMyAppGetDirectionLinks = '';
var SDMyAppVOABLinks = '';
var SDMyAppCancelBtn = '';
var SDMyAppYesNoPopup = '';
var SDMyAppYesBtn = '';
var SDMyAppCancelConfPopup = '';
var SDMyAppCancelPopupService = '';
var SDMyAppCancelPopupDur = '';
var SDMyAppCancelPopupDate = '';
var SDMyAppCancelPopupWhere = '';
var SDMyAppBookNewBtnPopup = '';
var SDMyAppClosePopup = '';
var SDMyAppEditBtn = '';
var t = require('taiko');
const Helper = require('../../helpers/helper');
const Hengine = require('../../../../datainterface/providers/hengine.js');
const Util = require('../../../../utilities/util');
const oabHelp = require('../../helpers/oab_helper.js');
const assert = require('assert');
let siteDefinition, source, NullDataException;
const matchCondition = true;

var SDPopups = [];
var DateDetails = [];
var UserDetailsStep4 = [];
var UserDetailsTestStep4 = []; // in progress
function reinitialize() {
  SDPopups = [SDAcceptCookie, SDPopUpClose];
  DateDetails = [CommonData.SDMONTHNAMEFULL, CommonData.SDMONTHNAME, CommonData.SDLOCALEID];
  UserDetailsStep4 = [
    { loc: SDStep4Name, data: CommonData.SDFIRSTNAME },
    { loc: SDStep4SurrName, data: CommonData.SDLASTNAME },
  ];
  UserDetailsTestStep4 = [
    { loc: SDStep4Name, data: CommonData.SDFIRSTNAMETEST },
    { loc: SDStep4SurrName, data: CommonData.SDLASTNAMETEST },
  ];
}

async function initFrameworkSettings() {
  // This should come from Gauge Tags inputs
  const tags = process.env.tags.split(',');
  ({ siteDefinition, source, NullDataException } = await Hengine.Initializer(tags, feature, this));
  // Abort, if there is any error while setting up the locators and test data
  if (NullDataException.isError) {
    assert(!matchCondition, NullDataException.message.join('\n'));
  }

  // Override this
  Object.assign(this, source);
  // Taiko API overrides
  t = await Helper.initAutoHeal(siteDefinition, t);

  // Reinitialize
  reinitialize();

  // Delete all the cookies
  await t.deleteCookies();

  gauge.message('ENVIRONMENT : ' + siteDefinition.executionContext.environment);
}

let device;
let baseURL;
async function goToSubPage(url, loadCheckSelector, navigation) {
  await t.goto(baseURL + url, {
    waitForNavigation: navigation,
    waitForEvents: ['DOMContentLoaded'],
  });
  if (await (await t.$(loadCheckSelector)).exists(oabHelp.interval, oabHelp.timeOutLong)) {
    gauge.message('Navigated to: ' + (await t.currentURL()));
  } else {
    gauge.message(await t.currentURL());
    assert(!matchCondition, 'NAVIGATION DID NOT HAPPEN!');
  }
  await oabHelp.popUpClose(t, SDAcceptCookie);
  await oabHelp.popUpClose(t, SDPopUpClose);
  oabHelp.takeScreenshot(device);
}

step('OAB SD Initialize Helix', async function () {
  // Initialize the selectors from DB
  await initFrameworkSettings();
});

step('OAB SD Open browser', async function () {
  const langOption = CommonData.SDLANGUAGEBROWSER;
  await t.openBrowser({
    headless: true,
    args: [
      '--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 Taiko',
      langOption,
    ],
  });
  gauge.message('Chromium language set to: ' + langOption);
});

step('OAB SD Close browser', async function () {
  await t.closeBrowser();
});

step('OAB SD Mobile Device Emulation', async function () {
  // https://github.com/getgauge/taiko/blob/master/lib/data/devices.js Nexus 6 or Nexus 7
  await t.emulateDevice('Nexus 7');
});

let isMigration;
let environment;
step('OAB SD Configuring the prerequisites like set cookies, revision tag', async function () {
  t.setConfig({ navigationTimeout: parseInt(SDTimeoutSetting, 10) });
  await Helper.setWindowSize(Util.ScreenSizes['1040p'], t);
  await Helper.setWAFCookie(siteDefinition, t);
  await Helper.setAdroll(siteDefinition, t);
  await Helper.setAkamaiBypass(siteDefinition, t);
  await Helper.setApiEnv(siteDefinition, t);
  await Helper.setJsRepo(siteDefinition, t);
  await Helper.getPerlgemEnvCookie(siteDefinition, t);
  await Helper.setOtherCookies(siteDefinition, t);
  await Helper.setTestOrderCookie(siteDefinition, t);
  await Helper.setRevisionTagByUrl(siteDefinition, t);
  environment = siteDefinition.executionContext.environment.toUpperCase();
  gaugeStore.put('enviroment', environment);
  device = siteDefinition.executionContext.platform.toUpperCase();
  gaugeStore.put('device', device);
  if (oabHelp.compareVal(CommonData.SDSTATUS, 'Migration')) {
    isMigration = true;
    gauge.message('MIGRATION  : ' + isMigration);
    console.log('Migration:' + isMigration);
  }
  await t.goto(siteDefinition.executionContext.url, {
    waitForEvents: ['DOMContentLoaded'],
  });
  if (environment === 'PROD' || environment === 'PREPROD') {
    baseURL = Helper.getBaseUrl(siteDefinition);
  } else {
    baseURL =
      Helper.getBaseUrl(siteDefinition).substr(0, 8) + Helper.getBaseUrl(siteDefinition).substr(Helper.getBaseUrl(siteDefinition).indexOf('@') + 1);
  }
});

step('OAB SD Close Durpal Bar', async function () {
  if (
    siteDefinition.executionContext.environment.toUpperCase() !== 'PROD' &&
    siteDefinition.executionContext.environment.toUpperCase() !== 'PREPROD' &&
    (device === 'PC' || CommonData.SDBRANDNAME === 'JM')
  ) {
    oabHelp.takeScreenshot(device);
    try {
      await oabHelp.closePopupAndClickSelector(t, SDPopups, SDDrupalBarToggle, false);
    } catch (e) {
      // mo msg
    }
  } else {
    gauge.message('Drupal bar does not need to be closed.');
  }
});

let newOabUrl;
let hubFlag = 0;
let defaultLinkFlag = 1; // added for checking url in cancellation button
step('OAB SD If dual language settings', async function () {
  // Verify if HUB Site
  if (CommonData.SDMULTILANGUAGE === 'true') {
    const brandLocaleArr = brandLocale.split('-');
    if (brandLocaleArr[1] !== CommonData.SDLOCALEID) {
      hubFlag = 1;
    }
  }
  // Verify if oab link is different then default
  if (CommonData.SDLANGUAGECOOKIE !== '') {
    await t.setCookie('LOCALE', CommonData.SDLANGUAGECOOKIE, {
      url: Helper.getBaseUrl(siteDefinition),
    });
    gauge.message('Language cookie is set to: ' + CommonData.SDLANGUAGECOOKIE);
    await t.reload({
      waitForEvents: ['DOMContentLoaded'],
      waitForNavigation: true,
    });
  }
  if (CommonData.SDOABLANGUAGEURL !== '') {
    newOabUrl = CommonData.SDOABLANGUAGEURL + CommonData.SDOABURL;
    defaultLinkFlag = 0;
  } else if (CommonData.SDLANGUAGECOOKIE !== '') {
    defaultLinkFlag = 0;
    const currURL = await t.currentURL();
    newOabUrl = currURL.replace(baseURL, '') + CommonData.SDOABURL;
    newOabUrl = newOabUrl.replace(/\/\//g, '/');
  } else {
    newOabUrl = CommonData.SDOABURL;
  }
  // Add a migration link
  if (isMigration) {
    newOabUrl = newOabUrl + '-sd';
  }
  gauge.message(`OAB URL: ${newOabUrl}`);
});

step('OAB SD Set timezone', async function () {
  try {
    await t.emulateTimezone(CommonData.SDTIMEZONE);
  } catch (e) {
    gauge.message(e);
  }
  gauge.message('Time Zone set to ' + CommonData.SDTIMEZONE);
});

step('OAB SD Verify if there is no missing content', { continueOnFailure: true }, async function () {
  // TO DO przerobic na STABILNA FUNKCJE
  const isContentMissing = await oabHelp.searchMissingContent(t);
  if (isContentMissing) {
    assert(!matchCondition, 'Missing content!');
  }
});

let storeNameFromResponse;
let maxAppDurFromResponse;
step('OAB SD Open website for Appointment Booking <api>', async function (api) {
  if (api === 'intercept') {
    await oabHelp.fetchEnable(t, '*counters*', 'XHR', 'Response');
  }
  await goToSubPage(newOabUrl, SDOABContainer, true);
  if (api === 'intercept') {
    const responseData = await oabHelp.getNetworkData(t, '*counters*', 'Response');
    try {
      // Store order is not the same as in dropdowns
      storeNameFromResponse = responseData[0].name;
      maxAppDurFromResponse = responseData[0].max_appointment_duration;
      gauge.message(`Store intercepted: ${storeNameFromResponse}`);
      gauge.message(`Maximum duration: ${maxAppDurFromResponse}`);
    } catch (e) {
      gauge.message(e);
    }
  }
  gaugeStore.put('Store Name', storeNameFromResponse);
  gaugeStore.put('Max appointment duration', maxAppDurFromResponse);
});


step('OAB SD Click GO BACK button to <step>', { continueOnFailure: true }, async function (step) {
  // TO DO dodaj do basic functiona spec
  if (step === 'Step 1') {
    await oabHelp.closePopupAndClickSelector(t, SDPopups, SDOabGoBackBtn, false);
    await oabHelp.existanceCheck(t, SDOABContainer, oabHelp.timeOutLong);
  } else if (step === 'Step 2') {
    await oabHelp.closePopupAndClickSelector(t, SDPopups, SDOabGoBackBtn, false);
    await oabHelp.existanceCheck(t, SDStep2Container, oabHelp.timeOutLong);
  } else if (step === 'cancel and start over') {
    await oabHelp.closePopupAndClickSelector(t, SDPopups, SDOabGoBackBtn, false);
    await oabHelp.existanceCheck(t, SDOABContainer, oabHelp.timeOutLong);
  }
  oabHelp.takeScreenshot(device);
});

step('OAB SD Check if Step 1 next button is disabled for OAB before selecting the location', async function () {
  await assert.ok(await (await t.$(SDStep1NextOABBtn)).isDisabled(), 'The next button is enabled!');
});

const SDTestState = '.elc-appt-booking_counties-dropdown li[title="ZTest Store Automation"]';
const SDTestStoreLocation = "li[title='ZTest Store Automation']";
let storeNameStep1;
step('OAB SD Select Test Store OAB', async function () {
  if (CommonData.LOCALENAME === 'US') {
    await oabHelp.closePopupAndClickSelector(t, SDPopups, SDStep1StateDropdownIcon, false);
    await oabHelp.closePopupAndClickSelector(t, SDPopups, SDTestState, false);
  }
  await oabHelp.closePopupAndClickSelector(t, SDPopups, SDStep1LocationDropIcon, false);
  await oabHelp.closePopupAndClickSelector(t, SDPopups, SDTestStoreLocation, false);
  await oabHelp.closePopupAndClickSelector(t, SDPopups, SDStep1StoreDropIcon, false);
  await oabHelp.closePopupAndClickSelector(t, SDPopups, SDStep1StoreDropItem, false);
  storeNameStep1 = await oabHelp.getText(t, SDStep1StoreDropContainer);
  gaugeStore.put('Store Name Step 1', storeNameStep1);
  await oabHelp.closePopupAndClickSelector(t, SDPopups, SDStep1NextOABBtn, false);
  oabHelp.takeScreenshot(device);
});

let oabURLCurrent;
step('OAB SD Select the appointment type <type>', async function (type) {
  await oabHelp.waitForNotExists(t, SDOABLoader, oabHelp.timeOutLong);
  let buttonToClick;
  await oabHelp.popUpClose(t, SDPopups[0]);
  if (type === 'OAB') {
    if (await oabHelp.ifVisible(t, 'button.elc-geolocation', oabHelp.intervalBlink, oabHelp.timeOutNorm)) {
      if (await oabHelp.ifVisible(t, '.elc-google-address-input', oabHelp.intervalBlink, oabHelp.timeOutLong)) {
        await oabHelp.writeInto(t, 'New York', '.elc-google-address-input');
        await t.press('ArrowDown', { waitForNavigation: false });
        await t.press('Enter', { waitForNavigation: false });
        storeNameStep1 = await oabHelp.getText(t, '.elc-store-name', 1);
        buttonToClick = '#nextbuttonstores';
      } else {
        assert(!matchCondition, 'OAB TOOK MORE THEN 1 MINUTE TO LOAD!');
      }
    } else {
      if (CommonData.SDLOCALEID === 'US') {
        await oabHelp.closePopupAndClickSelector(t, SDPopups, SDStep1StateDropdownIcon, false, 'js');
        await oabHelp.closePopupAndClickElement(t, SDPopups, SDStep1StateDropItem, 0, false);
      }
      await oabHelp.closePopupAndClickSelector(t, SDPopups, SDStep1LocationDropIcon, false, 'js');
      await oabHelp.closePopupAndClickElement(t, SDPopups, SDStep1LocationDropItem, 0, false);
      await oabHelp.closePopupAndClickSelector(t, SDPopups, SDStep1StoreDropIcon, false, 'js');
      await oabHelp.closePopupAndClickElement(t, SDPopups, SDStep1StoreDropItem, 0, false, 'js');
      storeNameStep1 = await oabHelp.getText(t, SDStep1StoreDropContainer);
      buttonToClick = SDStep1NextOABBtn;
    }
    gaugeStore.put('Store Name Step 1', storeNameStep1);
    await oabHelp.closePopupAndClickSelector(t, SDPopups, buttonToClick, false, 'js');
  } else {
    await oabHelp.closePopupAndClickSelector(t, SDPopups, SDStep1NextVOABBtn, false, 'js');
  }
  oabHelp.takeScreenshot(device);
  await oabHelp.existanceCheck(t, SDStep2Container, oabHelp.timeOutLong);
});

step('OAB SD Change Location', async function () {
  // const isNotPreselected = await (await t.$(SDStep1StoreDropdownDefault)).exists(100,3000); // will be needed in the future
  // STATE
  let stateIndex;
  await oabHelp.waitForNotExists(t, SDOABLoader, oabHelp.timeOutLong);
  if (CommonData.SDLOCALEID === 'US') {
    await oabHelp.closePopupAndClickSelector(t, SDPopups, SDStep1StateDropdownIcon, false);
    const stateDropdownItems = await oabHelp.getElementsList(t, SDStep1StateDropItem);
    if (stateDropdownItems.length >= 2) {
      stateIndex = 1;
    } else {
      stateIndex = 0;
    }
    gauge.message(`${stateIndex} item from state dropdown was selected`);
    await oabHelp.closePopupAndClickElement(t, SDPopups, SDStep1StateDropItem, stateIndex, false);
  }
  // Location
  let locationIndex;
  await oabHelp.closePopupAndClickSelector(t, SDPopups, SDStep1LocationDropIcon, false);
  const locationDropdownItems = await oabHelp.getElementsList(t, SDStep1LocationDropItem);
  if (locationDropdownItems.length >= 2) {
    locationIndex = 1;
  } else {
    locationIndex = 0;
  }
  await oabHelp.closePopupAndClickElement(t, SDPopups, SDStep1LocationDropItem, locationIndex, false);
  gauge.message(`${locationIndex} from city dropdown was selected`);
  // Store
  let storeIndex;
  await oabHelp.closePopupAndClickSelector(t, SDPopups, SDStep1StoreDropIcon, false);
  const storesDropdownItems = await oabHelp.getElementsList(t, SDStep1StoreDropItem);
  if (storesDropdownItems.length >= 2) {
    storeIndex = 1;
  } else {
    storeIndex = 0;
  }
  await oabHelp.closePopupAndClickElement(t, SDPopups, SDStep1StoreDropItem, storeIndex, false);
  gauge.message(`${storeIndex} item from store dropdown was selected`);
  storeNameStep1 = await oabHelp.getText(t, SDStep1StoreDropContainer);
  gaugeStore.put('Store Name Step 1', storeNameStep1);
  oabHelp.takeScreenshot(device);
  await oabHelp.closePopupAndClickSelector(t, SDPopups, SDStep1NextOABBtn, false);
  await oabHelp.existanceCheck(t, SDStep2Container, oabHelp.timeOutLong);
});

step('OAB SD Verify if there are no missing images', { continueOnFailure: true }, async function () {
  await oabHelp.waitForNotExists(t, SDOABLoader, oabHelp.timeOutLong);
  if (!(await (await t.$(SDStep2ServiceImage)).exists(oabHelp.interval, oabHelp.timeOutNorm))) {
    assert(!matchCondition, 'No services visible!');
  }
  const images = await (await t.$(SDStep2ServiceImage)).elements();
  let flag = '';
  for (const serviceImage of images) {
    const imgDetails = await t.evaluate(t.image, (element) => {
      return JSON.stringify({
        imageSRC: element.getAttribute('src'),
        imageALT: element.getAttribute('alt'),
        serviceHeight: element.naturalHeight,
      });
    });
    const { imageSRC, imageALT, serviceHeight } = JSON.parse(imgDetails);
    if (!imageSRC) {
      flag = flag + (images.indexOf(serviceImage) + 1) + ' no img src, ';
      gauge.message('Image for service ' + imageALT + ' is NOT displayed. No SRC');
    } else if (serviceHeight > 0) {
      gauge.message('Image for service ' + imageALT + ' is displayed');
    } else {
      flag = flag + (images.indexOf(serviceImage) + 1) + ' no img, ';
      gauge.message('Image for service ' + imageALT + ' is NOT displayed');
    }
  }
  if (flag !== '') {
    assert(!matchCondition, 'IMG is missing for image numbers: ' + flag);
  }
});

const testServiceOAB = 'test2137';
const testServiceVOAB = 'test1410';
step('OAB SD Verify if user can not select more then <number> services <scenario>', { continueOnFailure: true }, async function (number, scenario) {
  let isContentMissing;
  await oabHelp.waitForNotExists(t, SDOABLoader, oabHelp.timeOutLong);
  await oabHelp.existanceCheck(t, SDStep2ServiceContainer, oabHelp.timeOutLong);
  const servicesContainers = await oabHelp.getElementsList(t, SDStep2ServiceContainer);
  const testIDs = [];
  // Search for test service IDs
  for (let i = 0; servicesContainers.length; i++) {
    const currID = await oabHelp.getAttributeElement('data-service-online-id');
    if (currID === testServiceOAB || currID === testServiceVOAB) {
      testIDs.push(currID);
    }
  }
  const maxNumber = Number(number);
  if (servicesContainers.length < maxNumber - testIDs.length) {
    assert(!matchCondition, 'NOT ENOUGH SERVICES TO TEST!');
  } else {
    for (let i = 0; i < maxNumber - 1; i++) {
      const serviceID = await oabHelp.getAttributeElement('data-service-online-id');
      if (serviceID !== testServiceOAB && serviceID !== testServiceVOAB) {
        await oabHelp.closePopupAndClickElement(t, SDPopups, SDStep2ServiceAddBtn, i, false);
      }
    }
    await oabHelp.existanceCheck(t, SDErrorModal, oabHelp.timeOutQuick);
    gauge.message('Error popup is triggered');
    oabHelp.takeScreenshot(device);
    if (scenario === 'content') {
      isContentMissing = await oabHelp.searchMissingContent(t);
    }
    await oabHelp.closePopupAndClickSelector(t, SDPopups, SDErrorModalClose, false);
    await oabHelp.existanceCheck(t, SDErrorModal, oabHelp.timeOutQuick);
    gauge.message('Error popup is closed');
    oabHelp.takeScreenshot(device);
  }
  if (isContentMissing) {
    assert(!matchCondition, 'Missing content');
  }
});

step('OAB SD Verify if user can select/deselect any given services', { continueOnFailure: true }, async function () {
  await oabHelp.waitForNotExists(t, SDOABLoader, oabHelp.timeOutLong);
  if (await (await t.$(SDStep2ServiceAddBtn)).exists(oabHelp.interval, oabHelp.timeOutNorm)) {
    oabHelp.takeScreenshot(device);
  } else {
    assert(!matchCondition, 'NO SERVICES ARE AVAILABLE!');
  }
  let servicesContainers = await (await t.$(SDStep2ServiceContainer)).elements();
  let servicesAddBtn = await (await t.$(SDStep2ServiceAddBtn)).elements();
  const unselectableServiceArr = [];
  let serviceID;
  for (let i = 0; i < servicesAddBtn.length; i++) {
    serviceID = await servicesContainers[i].getAttribute('data-service-online-id');
    if (serviceID === testServiceOAB || serviceID === testServiceVOAB) {
      continue;
    }
    await oabHelp.closePopupAndClickElement(t, SDPopups, SDStep2ServiceAddBtn, i, false);
    if (await (await t.$(SDErrorModal)).exists(oabHelp.interval, oabHelp.timeOutBlink)) {
      unselectableServiceArr.push(i + 1);
      await oabHelp.closePopupAndClickSelector(t, SDPopups, SDErrorModalClose, false);
      await assert.ok(!(await (await t.$(SDErrorModal)).exists(oabHelp.interval, oabHelp.timeOutBlink)), 'Error pop up was not closed!');
      await oabHelp.closePopupAndClickSelector(t, SDPopups, SDStep2ServiceRemoveBtn, false);
    } else {
      await oabHelp.closePopupAndClickSelector(t, SDPopups, SDStep2and3NextBtnActive, false);
      if (await (await t.$(SDErrorModal)).exists(oabHelp.interval, oabHelp.timeOutBlink)) {
        unselectableServiceArr.push(i + 1);
        oabHelp.takeScreenshot(device);
        gauge.message('Error popped out for ' + (i + 1) + ' service');
        await oabHelp.closePopupAndClickSelector(t, SDPopups, SDErrorModalClose, false);
        await assert.ok(!(await (await t.$(SDErrorModal)).exists(oabHelp.interval, oabHelp.timeOutBlink)), 'Error pop up was not closed!');
        await oabHelp.closePopupAndClickSelector(t, SDPopups, SDStep2ServiceRemoveBtn, false);
      } else {
        oabHelp.takeScreenshot(device);
        await oabHelp.closePopupAndClickSelector(t, SDPopups, SDOabGoBackBtn, false);
        await oabHelp.closePopupAndClickSelector(t, SDPopups, SDStep2ServiceRemoveBtn, false);
      }
      servicesAddBtn = await (await t.$(SDStep2ServiceAddBtn)).elements();
      servicesContainers = await (await t.$(SDStep2ServiceContainer)).elements();
    }
  }
  if (unselectableServiceArr.length > 0) {
    assert(!matchCondition, `Services of number: ${unselectableServiceArr} can not be selected`);
  }
});

let serviceName;
let serviceDesc;
let serviceDurationDigit;
let serviceDurationTxt;
let servicePrice;
let indexOfSelectedSerice;
step('OAB SD Select any available service', async function () {
  await oabHelp.waitForNotExists(t, SDOABLoader, oabHelp.timeOutLong);
  await oabHelp.existanceCheck(t, SDStep2ServiceAddBtn, oabHelp.timeOutLong);
  const servicesContainers = await oabHelp.getElementsList(t, SDStep2ServiceContainer);
  const servicesAddBtn = await oabHelp.getElementsList(t, SDStep2ServiceAddBtn); // Deklaracja listy
  let serviceID;
  // Need to wait for images to load.
  async function waitForImageLoad(selector, timeout) {
    await t.waitFor(async () => {
      const height = await t.evaluate(await t.$(selector), (ele) => ele.naturalHeight);
      return height > 0;
    }, timeout);
  }
  try {
    await waitForImageLoad(SDStep2ServiceImage, oabHelp.timeOutNorm);
  } catch (e) {
    gauge.message('Image is not visible');
  }
  for (let i = 0; i < servicesAddBtn.length; i++) {
    serviceID = await oabHelp.getAttributeElement(servicesContainers, i, 'data-service-online-id');
    if (serviceID === testServiceOAB || serviceID === testServiceVOAB) {
      continue;
    }
    await oabHelp.closePopupAndClickElement(t, SDPopups, SDStep2ServiceAddBtn, i, false);
    oabHelp.takeScreenshot(device);
    gauge.message('Service ' + (i + 1) + ' was clicked');
    if (await (await t.$(SDErrorModal)).exists(oabHelp.interval, oabHelp.timeOutBlink)) {
      oabHelp.takeScreenshot(device);
      gauge.message('Error popped out for ' + (i + 1) + ' service');
      await oabHelp.closePopupAndClickSelector(t, SDPopups, SDErrorModalClose, false);
      continue;
    }
    serviceName = await oabHelp.getText(t, SDStep2ServiceTitle, i);
    serviceDesc = await oabHelp.getText(t, SDStep2ServiceDesc, i);
    const durationAll = await oabHelp.getText(t, SDStep2ServiceDuration, i);
    try {
      serviceDurationDigit = durationAll.match(/\d+/).toString();
      serviceDurationTxt = durationAll.match(/\D+/).toString();
    } catch (e) {
      gauge.message(e);
    }
    servicePrice = await oabHelp.getText(t, SDStep2ServicePrice, i);
    await oabHelp.closePopupAndClickSelector(t, SDPopups, SDStep2and3NextBtnActive, false);
    if (await (await t.$(SDErrorModal)).exists(oabHelp.interval, oabHelp.timeOutQuick)) {
      oabHelp.takeScreenshot(device);
      gauge.message('Error popped out for ' + (i + 1) + ' service');
      await oabHelp.closePopupAndClickSelector(t, SDPopups, SDErrorModalClose, false);
      await oabHelp.closePopupAndClickSelector(t, SDPopups, SDStep2ServiceRemoveBtn, false);
    } else {
      await (await t.$(SDStep3Container)).exists(oabHelp.interval, oabHelp.timeOutLong);
      oabHelp.takeScreenshot(device);
      indexOfSelectedSerice = i;
      break;
    }
  }
  gaugeStore.put('Serice Name', serviceName);
  gaugeStore.put('Serice Desc', serviceDesc);
  gaugeStore.put('Serice Dur Txt', serviceDurationDigit);
  gaugeStore.put('Serice Dur Digit', serviceDurationTxt);
  gaugeStore.put('Serice Price', servicePrice);
  if (indexOfSelectedSerice === undefined || indexOfSelectedSerice === null) {
    assert(!matchCondition, 'CAN NOT SELECT ANY SERVICE!');
  }
});

step('OAB SD Change service', { continueOnFailure: true }, async function () {
  let addserviceLength;
  let removeserviceLength;
  let serviceID;
  let indexOfTestServiceOAB;
  let indexOfTestServiceVOAB;
  if (await (await t.$(SDStep2ServiceAddBtn)).exists(oabHelp.interval, oabHelp.timeOutNorm)) {
    addserviceLength = (await (await t.$(SDStep2ServiceAddBtn)).elements()).length;
  }
  if (await (await t.$(SDStep2ServiceRemoveBtn)).exists(oabHelp.interval, oabHelp.timeOutNorm)) {
    removeserviceLength = (await (await t.$(SDStep2ServiceRemoveBtn)).elements()).length;
  } else {
    assert(!matchCondition, 'No service was preselected!');
  }
  const elementsLength = addserviceLength + removeserviceLength;
  const servicesContainers = await oabHelp.getElementsList(t, SDStep2ServiceContainer);
  for (let i = 0; i < elementsLength; i++) {
    serviceID = await servicesContainers[i].getAttribute('data-service-online-id');
    if (elementsLength <= 2 && (serviceID === testServiceOAB || serviceID === testServiceVOAB)) {
      assert(!matchCondition, 'Can not test, need at least one additional service with ID different then 2137 and 1410!');
    } else if (serviceID === testServiceOAB) {
      indexOfTestServiceOAB = i;
    } else if (serviceID === testServiceVOAB) {
      indexOfTestServiceVOAB = i;
    }
  }

  let serviceIndex;
  if (elementsLength >= 2) {
    await oabHelp.closePopupAndClickSelector(t, SDPopups, SDStep2ServiceRemoveBtn, false);
    for (let i = 0; i < elementsLength; i++) {
      if (i !== indexOfSelectedSerice && i !== indexOfTestServiceOAB && i !== indexOfTestServiceVOAB) {
        serviceID = await servicesContainers[i].getAttribute('data-service-online-id');
        serviceIndex = i;
        break;
      }
    }
  } else if (elementsLength === 1) {
    await oabHelp.closePopupAndClickSelector(t, SDPopups, SDStep2ServiceRemoveBtn, false);
    serviceIndex = 0;
    gauge.message('Only 1 service is available.');
  }
  await oabHelp.closePopupAndClickElement(t, SDPopups, SDStep2ServiceAddBtn, serviceIndex, false);
  serviceName = await oabHelp.getText(t, SDStep2ServiceTitle, serviceIndex);
  serviceDesc = await oabHelp.getText(t, SDStep2ServiceDesc, serviceIndex);
  const durationAll = await oabHelp.getText(t, SDStep2ServiceDuration, serviceIndex);
  try {
    serviceDurationDigit = durationAll.match(/\d+/).toString();
    serviceDurationTxt = durationAll.match(/\D+/).toString();
  } catch (e) {
    gauge.message(e);
  }
  servicePrice = await oabHelp.getText(t, SDStep2ServicePrice, serviceIndex);
  gaugeStore.put('Serice Name', serviceName);
  gaugeStore.put('Serice Desc', serviceDesc);
  gaugeStore.put('Serice Dur Txt', serviceDurationDigit);
  gaugeStore.put('Serice Dur Digit', serviceDurationTxt);
  gaugeStore.put('Serice Price', servicePrice);
  oabHelp.takeScreenshot(device);
  gauge.message(serviceIndex + 1 + ' st/nd/rd/th service was selected');
  await oabHelp.closePopupAndClickSelector(t, SDPopups, SDStep2and3NextBtnActive, false);
  await oabHelp.existanceCheck(t, SDStep3Container, oabHelp.timeOutLong);
});

let step3ArtistName = 0;
step('OAB SD Select the <order> Artist', async function (order) {
  let index;
  await oabHelp.waitForNotExists(t, SDOABLoader, oabHelp.timeOutLong);
  await oabHelp.closePopupAndClickSelector(t, SDPopups, SDStep3SelectArtistArrow, false);
  const numberOfSelectableArtists = (await (await t.$(SDStep3ArtistsListEle)).elements()).length;
  if (order === 'last') {
    index = numberOfSelectableArtists - 1;
  } else if (order === 'first') {
    index = 1;
  }
  step3ArtistName = await oabHelp.getText(t, SDStep3ArtistsListEle, index);
  gaugeStore.put('Artist Name', step3ArtistName);
  await oabHelp.closePopupAndClickElement(t, SDPopups, SDStep3ArtistsListEle, index, false);
  // Check if artist is selected.
  if (await (await t.$(SDStep3SelectedArtistBtn)).exists(oabHelp.interval, oabHelp.timeOutQuick)) {
    if ((await (await t.$(SDStep3SelectedArtistBtn)).elements()).length === 1) {
      gauge.message('Artist was selected succesfully: ' + step3ArtistName);
      oabHelp.takeScreenshot(device);
    } else {
      assert(!matchCondition, 'There is more than one artist selected!');
    }
  } else {
    assert(!matchCondition, 'Artist was not selected!');
  }
});

let selectedTimeText;
let selectedDayText;
let oabURLStep3;
step('OAB SD Select date & time of the appointment', async function () {
  // Check if date selected > today
  // const day = new Date();
  // const today = day.getDate();
  await oabHelp.waitForNotExists(t, SDOABLoader, oabHelp.timeOutLong);
  while (
    !(await (await t.$(SDStep3SelectedDay)).exists(oabHelp.interval, oabHelp.timeOutNorm)) &&
    !(await (await t.$(SDStep3ActiveDay)).exists(oabHelp.interval, oabHelp.timeOutNorm))
  ) {
    // TO DO sprawdz przy puszczani
    if (!(await (await t.$(SDStep3NextMonthBtn)).exists(oabHelp.interval, oabHelp.timeOutNorm))) {
      assert(!matchCondition, 'NO AVAILABLE TIME SLOTS!');
    } else {
      await oabHelp.closePopupAndClickSelector(t, SDPopups, SDStep3NextMonthBtn, false);
      gauge.message('Next month button was clicked');
    }
  }
  // PICK DATE
  const activeDays = await (await t.$(SDStep3ActiveDay)).elements();
  const selectedDays = await (await t.$(SDStep3SelectedDay)).elements();
  if (activeDays.length > 0) {
    await oabHelp.closePopupAndClickElement(t, SDPopups, SDStep3ActiveDay, 0, false);
  } else if (selectedDays.length !== 1) {
    assert(!matchCondition, 'THERE IS NO ACTIVE DAY TO SELECT!');
  }
  selectedDayText = await oabHelp.getText(t, SDStep3SelectedDay);
  // PICK TIME
  if (await (await t.$(SDStep3ActiveTime)).exists(oabHelp.interval, oabHelp.timeOutNorm)) {
    // const activeSlots = await (await t.$(SDStep3ActiveTime)).elements();
    await oabHelp.closePopupAndClickElement(t, SDPopups, SDStep3ActiveTime, 0, false);
  } else if (await (await t.$(SDStep3SelectedTime)).exists(oabHelp.interval, oabHelp.timeOutNorm)) {
    gauge.message('Time slot pre selected');
    await oabHelp.closePopupAndClickSelector(t, SDPopups, SDStep3SelectedTime, false);
  } else {
    assert(!matchCondition, 'THERE IS NO TIMESLOT TO SELECT!');
  }
  await oabHelp.existanceCheck(t, SDStep3SelectedTime, oabHelp.timeOutQuick);
  selectedTimeText = await oabHelp.getText(t, SDStep3SelectedTime);
  gaugeStore.put('Selected Day', selectedDayText);
  gaugeStore.put('Selected Time', selectedTimeText);
  oabHelp.takeScreenshot(device);
  oabURLStep3 = await t.currentURL();
  await oabHelp.closePopupAndClickSelector(t, SDPopups, SDStep2and3NextBtnActive, false);
  await oabHelp.existanceCheck(t, SDStep4Container, oabHelp.timeOutLong);
});

step('OAB SD Change Date&Time', async function () {
  await oabHelp.waitForNotExists(t, SDOABLoader, oabHelp.timeOutLong);
  oabHelp.takeScreenshot(device);
  // PICK DATE
  // TO DO sprawdz czy pre selected sie zgadza z tym co edytuje
  if (await (await t.$(SDStep3ActiveDay)).exists(oabHelp.interval, oabHelp.timeOutNorm)) {
    await oabHelp.closePopupAndClickElement(t, SDPopups, SDStep3ActiveDay, 0, false);
  } else if (await (await t.$(SDStep3SelectedDay)).exists(oabHelp.interval, oabHelp.timeOutNorm)) {
    gauge.message('Only active day is available');
  } else {
    await oabHelp.closePopupAndClickSelector(t, SDPopups, SDStep3NextMonthBtn, false);
    gauge.message('Next month button was clicked');
    if (await (await t.$(SDStep3ActiveDay)).exists(oabHelp.interval, oabHelp.timeOutNorm)) {
      await oabHelp.closePopupAndClickElement(t, SDPopups, SDStep3ActiveDay, 0, false);
    }
  }
  selectedDayText = await oabHelp.getText(t, SDStep3SelectedDay);
  // PICK TIME
  if (await (await t.$(SDStep3ActiveTime)).exists(oabHelp.interval, oabHelp.timeOutNorm)) {
    const activeSlots = await (await t.$(SDStep3ActiveTime)).elements();
    if (activeSlots.length >= 1) {
      await oabHelp.closePopupAndClickElement(t, SDPopups, SDStep3ActiveTime, 0, false);
    }
  } else if (await (await t.$(SDStep3SelectedTime)).exists(oabHelp.interval, oabHelp.timeOutNorm)) {
    gauge.message('Time slot pre selected');
    await oabHelp.closePopupAndClickSelector(t, SDPopups, SDStep3SelectedTime, false);
  } else {
    assert(!matchCondition, 'THERE IS NO TIMESLOT TO SELECT!');
  }
  oabHelp.takeScreenshot(device);
  await oabHelp.existanceCheck(t, SDStep3SelectedTime, oabHelp.timeOutQuick);
  selectedTimeText = await oabHelp.getText(t, SDStep3SelectedTime);
  gaugeStore.put('Selected Day', selectedDayText);
  gaugeStore.put('Selected Time', selectedTimeText);
  await oabHelp.closePopupAndClickSelector(t, SDPopups, SDStep2and3NextBtnActive, false);
  await oabHelp.existanceCheck(t, SDStep4Container, oabHelp.timeOutLong);
});

step('OAB SD Select date for <nthOfday> day in calendar colum & time in the <partOfday> of the appointment', async function (nthOfday, partOfday) {
  let timeSlotSelector;
  await oabHelp.waitForNotExists(t, SDOABLoader, oabHelp.timeOutLong);
  async function selectTimeStep3() {
    if (partOfday === 'morning') {
      timeSlotSelector = SDStep3Morning;
    } else if (partOfday === 'afternoon') {
      timeSlotSelector = SDStep3Afternoon;
    } else if (partOfday === 'evening') {
      timeSlotSelector = SDStep3Evening;
    }
    if (await (await t.$(timeSlotSelector)).exists(oabHelp.interval, oabHelp.timeOutQuick)) {
      await oabHelp.closePopupAndClickSelector(t, SDPopups, timeSlotSelector, false);
      selectedTimeText = await oabHelp.getText(t, SDStep3SelectedTime);
      return selectedTimeText;
    } else {
      assert(!matchCondition, 'No timeslot!!!');
    }
  }
  async function selectDateStep3() {
    const activeDays = await (await t.$('table > tbody > tr td:nth-child(' + nthOfday + ')' + SDStep3ActiveDay)).elements();
    const selectedDay = await (await t.$('table > tbody > tr td:nth-child(' + nthOfday + ')' + SDStep3SelectedDay)).elements();
    if (activeDays.length >= 1) {
      await oabHelp.closePopupAndClickElement(t, SDPopups, 'table > tbody > tr td:nth-child(' + nthOfday + ')' + SDStep3ActiveDay, 0, false);
      await selectTimeStep3();
    } else if (selectedDay.length === 1) {
      await selectTimeStep3();
    } else {
      if (!(await (await t.$(SDStep3NextMonthBtn)).exists(oabHelp.interval, oabHelp.timeOutNorm))) {
        assert(!matchCondition, 'NO AVAILABLE TIME SLOTS!');
      } else {
        await oabHelp.closePopupAndClickSelector(t, SDPopups, SDStep3NextMonthBtn, false);
        gauge.message('Next month button was clicked');
        await selectDateStep3();
      }
    }
    selectedDayText = await oabHelp.getText(t, SDStep3SelectedDay);
  }
  gaugeStore.put('Selected Day', selectedDayText);
  gaugeStore.put('Selected Time', selectedTimeText);
  await selectDateStep3();
  oabHelp.takeScreenshot(device);
  oabURLStep3 = await t.currentURL();
  await oabHelp.closePopupAndClickSelector(t, SDPopups, SDStep2and3NextBtnActive, false);
  await oabHelp.existanceCheck(t, SDStep4Container, oabHelp.timeOutLong);
});

step('OAB SD Check if past days and in-active days are not selectable', async function () {
  // TO DO !!!
});

step('OAB SD Get appointment details from review page <type>', async function () {
  // TO DO !!!
});

let step4ArtistText;
let step4DateText;
let step4TimeText;
let step4ServiceDurationDigit;
let step4ServiceDurationTxt;
step('OAB SD Assert appointment details on review page to previous steps <type>', { continueOnFailure: true }, async function (type) {
  let error;
  step4DateText = await oabHelp.getText(t, SDStep4Date);
  step4TimeText = await oabHelp.getText(t, SDStep4Time);
  const step4ServiceTitleText = await oabHelp.getText(t, SDStep4ServiceTitle);
  const step4ServiceDescText = await oabHelp.getText(t, SDStep4ServiceDesc);
  oabHelp.takeScreenshot(device);
  const durationAll = await oabHelp.getText(t, SDStep4ServiceDuration);
  try {
    step4ServiceDurationDigit = durationAll.match(/\d+/).toString();
    step4ServiceDurationTxt = durationAll.match(/\D+/).toString();
  } catch (e) {
    gauge.message(e);
  }
  const step4ServicePricesText = await oabHelp.getText(t, SDStep4ServicePrices);
  // Assert location
  if (type === 'OAB') {
    const step4StoreNameText = await oabHelp.getText(t, SDStep4StoreName);
    // step4StoreAddress1Text = oabHelp.trimAndLowerCase(
    //   await (await t.$(SDStep4StoreAddress1)).text()
    // );
    // step4StoreAddress2Text = oabHelp.trimAndLowerCase(
    //   await (await t.$(SDStep4StoreAddress2)).text()
    // );

    const locationsCheck = oabHelp.compareVal(storeNameStep1, step4StoreNameText, 'Store Step 1', 'Store Step 2');
    if (!locationsCheck) {
      error = oabHelp.composeError(error, oabHelp.messages.appLocationNotSame);
    }
  } else if (type === 'VOAB') {
    const step4VirtualDescText = await oabHelp.getText(t, SDStep4VirtualDesc);
    if (!(await (await t.$(SDStep4StoreName)).exists(oabHelp.interval, oabHelp.timeOutQuick))) {
      gauge.message('Description for VOAB: ' + step4VirtualDescText);
    } else {
      error = oabHelp.composeError(error, oabHelp.messages.appLocationOnVOAB);
    }
  }

  // Assert Artist
  const dateContainerChildrenLength = await t.evaluate(await t.$(SDStep4DateContainer), (ele) => ele.children.length);
  // If the artist was seleted, the children count would be 3. Otherwise it's always 2.
  if (dateContainerChildrenLength === 3 && step3ArtistName !== 0) {
    step4ArtistText = await oabHelp.getText(t, SDStep4Artist);
    // TO DO change it from includes to to camparing it in tabled (last elements from table to last element from table for Step3 artsit splited by space length)
    if (step4ArtistText.includes(step3ArtistName)) {
      gauge.message('Artist name is the same');
    } else {
      error = oabHelp.composeError(error, oabHelp.messages.artistNameNotSame);
    }
    gauge.message('Artist name Step 3: ' + step3ArtistName);
    gauge.message('Artist name review page: ' + step4ArtistText);
  } else {
    gauge.message('Book By Artist feature is disabled or any artist was selected.');
  }

  // Assert date TO DO includes
  if (step4DateText.includes(selectedDayText)) {
    gauge.message('Date is the same');
  } else {
    error = oabHelp.composeError(error, oabHelp.messages.appDateIsNotSame);
  }
  gauge.message('Date Step 3: ' + selectedDayText);
  gauge.message('Date review page: ' + step4DateText);

  // Assert time
  const timesCheck = oabHelp.compareVal(selectedTimeText, step4TimeText, 'Time Step 3', 'Time Step 4');
  if (!timesCheck && selectedTimeText.includes(step4TimeText)) {
    gauge.message(oabHelp.messages.appTimeFormatNotSame);
  } else if (!timesCheck) {
    error = oabHelp.composeError(error, oabHelp.messages.appTimeIsNotSame);
  }
  // Assert Serices
  const servicesCheck = oabHelp.compareVal(serviceName, step4ServiceTitleText, 'Service Step 2', 'Service Step 4');
  if (!servicesCheck) {
    error = oabHelp.composeError(error, oabHelp.messages.serviceNameNotSame);
  }
  // Assert services description
  const descriptionsCheck = oabHelp.compareVal(serviceDesc, step4ServiceDescText, 'Description Step 2', 'Description Step 4');
  if (!descriptionsCheck) {
    error = oabHelp.composeError(error, oabHelp.messages.serviceDescNotSame);
  }
  // Assert services duration
  const durationsDigitCheck = oabHelp.compareVal(serviceDurationDigit, step4ServiceDurationDigit, 'Duration Step 2', 'Duration Step 4');
  if (!durationsDigitCheck) {
    error = oabHelp.composeError(error, oabHelp.messages.serviceDurationNotSame);
  }
  const durationsTxtCheck = oabHelp.compareVal(serviceDurationTxt, step4ServiceDurationTxt, 'Duration Step 2', 'Duration Step 4');
  if (!durationsTxtCheck) {
    error = oabHelp.composeError(error, oabHelp.messages.serviceDurationNotSame);
  }
  // Assert services prices
  const pricesCheck = oabHelp.compareVal(servicePrice, step4ServicePricesText, 'Price Step 2', 'Price Step 4');
  if (!pricesCheck) {
    error = oabHelp.composeError(error, oabHelp.messages.servicePriceNotSame);
  }

  if (error) {
    assert(!matchCondition, error);
  }
});

step('OAB SD Verify functionality of edit location on the review page for <type>', { continueOnFailure: true }, async function (type) {
  if (type === 'OAB') {
    if (await (await t.$(SDStep4EditLocation)).exists(oabHelp.interval, oabHelp.timeOutNorm)) {
      // to do dokonczyc
      oabHelp.takeScreenshot(device);
      await oabHelp.closePopupAndClickSelector(t, SDPopups, SDStep4EditLocation, false);
      await oabHelp.existanceCheck(t, SDStep1NextOABBtn, oabHelp.timeOutLong);
    } else {
      assert(!matchCondition, 'For OAB Appointment edit location button is not displayed!');
    }
  } else if (type === 'VOAB') {
    if (await (await t.$(SDStep4EditLocation)).exists(oabHelp.interval, oabHelp.timeOutQuick)) {
      await t.evaluate(await t.$(SDStep4EditLocation), (ele) => ele.scrollIntoView({ block: 'center' }));
      assert(!matchCondition, 'For VOAB Appointment Edit button is displayed in Review Page');
    } else {
      gauge.message('For VOAB Appointment edit location button is not displayed in Review Page');
    }
  }
});

step('OAB SD Verify functionality of edit time on the review page', { continueOnFailure: true }, async function () {
  if (await (await t.$(SDStep4EditTime)).exists(oabHelp.interval, oabHelp.timeOutNorm)) {
    await oabHelp.closePopupAndClickSelector(t, SDPopups, SDStep4EditTime, false);
    await oabHelp.existanceCheck(t, SDStep3Container, oabHelp.timeOutLong);
  } else {
    assert(!matchCondition, 'Edit time button is not displayed!');
  }
});

step('OAB SD Verify functionality of edit service on the review page', { continueOnFailure: true }, async function () {
  if (await (await t.$(SDStep4EditService)).exists(oabHelp.interval, oabHelp.timeOutNorm)) {
    await oabHelp.closePopupAndClickSelector(t, SDPopups, SDStep4EditService, false);
    await oabHelp.existanceCheck(t, SDStep2Container, oabHelp.timeOutLong);
  } else {
    assert(!matchCondition, 'Edit service button is not displayed!');
  }
});

step('OAB SD Verify functionality of cancel and start over on the review page', async function () {
  if (await (await t.$(SDStep4CancelAndOverBtn)).exists(oabHelp.interval, oabHelp.timeOutNorm)) {
    await oabHelp.closePopupAndClickSelector(t, SDPopups, SDStep4CancelAndOverBtn, false);
    await oabHelp.existanceCheck(t, SDStep1NextOABBtn, oabHelp.timeOutLong);
  } else {
    assert(!matchCondition, 'No cancel and start over button is visible!');
  }
});

const fullNameExceptionList = ['BR', 'KR', 'TW'];
step('OAB SD Enter user first and last name <type>', { continueOnFailure: true }, async function (type) {
  let namesArr;
  let mergedNames;
  if (type === 'test') {
    namesArr = UserDetailsTestStep4;
    mergedNames = CommonData.SDFULLNAMETEST;
  } else {
    namesArr = UserDetailsStep4;
    mergedNames = CommonData.SDFULLNAME;
  }
  // Enter details
  if (fullNameExceptionList.includes(CommonData.SDLOCALEID)) {
    if (await (await t.$(SDStep4FullName)).exists(oabHelp.interval, oabHelp.timeOutNorm)) {
      await oabHelp.writeInto(t, mergedNames, SDStep4FullName);
      gauge.message('Full Name: ' + mergedNames);
    } else {
      assert(!matchCondition, 'Full name field is not visible!');
    }
  } else {
    if (
      (await (await t.$(SDStep4Name)).exists(oabHelp.interval, oabHelp.timeOutNorm)) &&
      (await (await t.$(SDStep4SurrName)).exists(oabHelp.interval, oabHelp.timeOutNorm))
    ) {
      await oabHelp.writeIntoLoop(t, namesArr);
      gauge.message(`First Name ${namesArr[0].data}`);
      gauge.message(`Last Name ${namesArr[1].data}`);
    } else {
      assert(!matchCondition, 'Names field is not visible!');
    }
    // Check if inputs are spwapped for JP
    const inputs = await (await t.$(SDStep4Inputs)).elements();
    const firstInputID = await inputs[0].getAttribute('id');
    const secondInputID = await inputs[1].getAttribute('id');
    if (CommonData.SDLOCALEID.includes('JP')) {
      if (SDStep4SurrName.includes(firstInputID) && SDStep4Name.includes(secondInputID)) {
        gauge.message('Input of the first name is swapped with the last name');
      } else {
        assert(false, 'Fields are not swapped for the market!');
      }
    } else {
      if (SDStep4Name.includes(firstInputID) && SDStep4SurrName.includes(secondInputID)) {
        gauge.message('Input of the first name is not swapped with the last name');
      } else {
        assert(false, 'Fields are swapped for the market!');
      }
    }
  }
});

let emailSave;
step('OAB SD Enter guest email <type>', { continueOnFailure: true }, async function (type) {
  if (await (await t.$(SDStep4Email)).exists(oabHelp.interval, oabHelp.timeOutNorm)) {
    if (type === 'first time') {
      emailSave = oabHelp.qatestdomain();
      gaugeStore.put('Guest Email', emailSave);
      gaugeStoreSpec.put('Guest Email Spec', emailSave);
    }
    await oabHelp.writeInto(t, emailSave, SDStep4Email);
    gauge.message('Email: ' + emailSave);
  } else {
    assert(!matchCondition, 'EMAIL FIELD IS NOT VISIBLE!');
  }
});

step('OAB SD Enter registered user email', { continueOnFailure: true }, async function () {
  const oabEmailValue = await t.evaluate(await t.$(SDStep4Email), (ele) => {return ele.getAttribute('value')})
  if (await (await t.$(SDStep4Email)).exists(oabHelp.interval, oabHelp.timeOutQuick) && oabEmailValue === '') {
    await oabHelp.writeInto(t, CommonData.SDREGISTEREDEMAIL, SDStep4Email);
    gauge.message('Email: ' + CommonData.SDREGISTEREDEMAIL);
  } else if (oabEmailValue !== '') {
    gauge.message('Field prepopulated');
  } else {
    assert(!matchCondition, 'EMAIL FIELD IS NOT VISIBLE!');
  }
});

let valueOfPhoneInput;
step('OAB SD Enter phone number', { continueOnFailure: true }, async function () {
  // TO DO prefixes !!!
  if (await (await t.$(SDStep4Phone)).exists(oabHelp.interval, oabHelp.timeOutQuick)) {
    await oabHelp.writeInto(t, CommonData.SDPHONE, SDStep4Phone);
    gauge.message('Phone: ' + CommonData.SDPHONE);
    const specialChar = /[`~!@#$%^&*()_|+\-=?;:'",.<> \{\}\[\]\\\/]/gi;
    valueOfPhoneInput = await oabHelp.getValue(t, SDStep4Phone);
    if (valueOfPhoneInput.match(specialChar)) {
      valueOfPhoneInput = valueOfPhoneInput.replace(specialChar, '');
      gaugeStore.put('Phone', valueOfPhoneInput);
    }
    oabHelp.takeScreenshot(device);
  } else {
    assert(!matchCondition, 'PHONE FIELD IS NOT VISIBLE!');
  }
});

let cpfUser;
step('OAB SD Enter CPF number <userType>', { continueOnFailure: true }, async function (userType) {
  if (CommonData.SDLOCALEID.includes('BR')) {
    if (await (await t.$(SDStep4CPF)).exists(oabHelp.interval, oabHelp.timeOutQuick)) {
      const ifRequired = await oabHelp.getAttributeSelector(t, SDStep4CPF, 'aria-required');
      if (userType === 'Registred') {
        cpfUser = CommonData.SDCPF;
      } else if (userType === 'Guest') {
        cpfUser = oabHelp.cpf();
        gaugeStore.put('CPF Guest', cpfUser);
      }
      await oabHelp.writeInto(t, cpfUser, SDStep4CPF);
      gauge.message('CPF: ' + cpfUser);
      oabHelp.takeScreenshot(device);
      if (ifRequired !== 'false') {
        assert(!matchCondition, 'CPF FIELD IS NOT OPTIONAL!');
      } else {
        gauge.message('CPF is optional');
      }
    } else {
      assert(!matchCondition, 'CPF FIELD IS NOT VISIBLE!');
    }
  } else {
    gauge.message('This step is not applicable for this locale.');
  }
});

step('OAB SD Validate input fields for empty data', { continueOnFailure: true }, async function () {
  let error;
  if (fullNameExceptionList.includes(CommonData.SDLOCALEID)) {
    await oabHelp.writeInto(t, ' ', SDStep4FullName);
  } else {
    await oabHelp.writeInto(t, ' ', SDStep4Name);
    await oabHelp.writeInto(t, ' ', SDStep4SurrName);
  }
  await oabHelp.writeInto(t, ' ', SDStep4Email);
  await oabHelp.writeInto(t, ' ', SDStep4Phone);
  if (CommonData.SDLOCALEID.includes('BR')) {
    await oabHelp.writeInto(t, ' ', SDStep4CPF);
  }
  await t.focus(await t.$(SDStep4Email));

  // Validate error messages
  // Name
  if (fullNameExceptionList.includes(CommonData.SDLOCALEID)) {
    await oabHelp.checkFieldError(t, SDStep4FullNameError, 'Empty name error', 'SDStep4FullName');
  } else {
    await oabHelp.checkFieldError(t, SDStep4NameError, 'Empty name error', 'SDStep4Name');
  }
  // Surname
  await oabHelp.checkFieldError(t, SDStep4SurNameError, 'Empty surname error', 'SDStep4Surname');
  // Email
  await oabHelp.checkFieldError(t, SDStep4EmailError, 'Empty email error', 'SDStep4Email');
  // Phone
  await oabHelp.checkFieldError(t, SDStep4PhoneError, 'Empty phone error', 'SDStep4Phone');
  // CPF
  if (CommonData.SDLOCALEID === 'BR') {
    await oabHelp.checkFieldError(t, SDStep4FullNameError, 'Empty name error', 'SDStep4FullName');
  }

  if (error) {
    assert(!matchCondition, error);
  }
});

step('OAB SD Validate input fields for incorrect values', { continueOnFailure: true }, async function () {
  let error;

  if (fullNameExceptionList.includes(CommonData.SDLOCALEID)) {
    await oabHelp.writeInto(t, 'test ', SDStep4FullName);
  }
  await oabHelp.writeInto(t, '1233', SDStep4Email);
  await oabHelp.writeInto(t, '1233', SDStep4Phone);
  if (CommonData.SDLOCALEID.includes('BR')) {
    await oabHelp.writeInto(t, '1233', SDStep4CPF);
  }
  await t.focus(await t.$(SDStep4Email));

  // Validate error messages
  // Name
  if (fullNameExceptionList.includes(CommonData.SDLOCALEID)) {
    await oabHelp.checkFieldError(t, SDStep4FullNameError, 'Incorrect name error', 'SDStep4FullName');
  }
  await oabHelp.checkFieldError(t, SDStep4NameError, 'Incorrect name error', 'SDStep4Name');
  // Surname
  await oabHelp.checkFieldError(t, SDStep4SurNameError, 'Incorrect surname error', 'SDStep4Surname');
  // Email
  await oabHelp.checkFieldError(t, SDStep4EmailError, 'Incorrect email error', 'SDStep4Email');
  // Phone
  await oabHelp.checkFieldError(t, SDStep4PhoneError, 'Incorrect phone error', 'SDStep4Phone');
  // CPF
  if (CommonData.SDLOCALEID === 'BR') {
    await oabHelp.checkFieldError(t, SDStep4FullNameError, 'Incorrect CPF error', 'SDStep4FullName');
  }
  // TO DO compare to empty

  if (error) {
    assert(!matchCondition, error);
  }
});

step('OAB SD Check if Step 4 links open in new tab', { continueOnFailure: true }, async function () {
  const linksList = await (await t.$(SDStep4LegalLinks)).elements();
  let flag;
  for (const aHref of linksList) {
    const currLinkTargetProp = await aHref.getAttribute('target');
    const linkName = await aHref.getAttribute('href');
    if (currLinkTargetProp === '_blank') {
      gauge.message(`The ${linkName} link opens in a new tab`);
    } else {
      flag = 1;
      gauge.message(`The ${linkName} link does not open in a new tab!`);
    }
  }
  if (flag === 1) {
    assert(!matchCondition, "NO TARGET = '_BLANK' PROPERTY!");
  }
});

const gdprExeptionList = ['IL', 'TR'];
step('OAB SD Verify GDPR for EMEA markets <scenario>', { continueOnFailure: true }, async function (scenario) {
  let isContentMissing;
  if (CommonData.SDREGIONNAME === 'EMEA' && !gdprExeptionList.includes(CommonData.SDLOCALEID)) {
    if (await (await t.$(SDStep4GDPRHoveer)).exists(oabHelp.interval, oabHelp.timeOutQuick)) {
      await oabHelp.closePopupAndClickSelector(t, SDPopups, SDStep4GDPRHoveer, false);
      oabHelp.takeScreenshot(device);
      if (scenario === 'content') {
        isContentMissing = await oabHelp.searchMissingContent(t);
      }
      await oabHelp.closePopupAndClickSelector(t, SDPopups, SDStep4GDPRClose, false);
    } else {
      assert(!matchCondition, 'GDPR is not visible!');
    }
  } else {
    if (!(await (await t.$(SDStep4GDPRHoveer)).exists(oabHelp.interval, oabHelp.timeOutQuick))) {
      oabHelp.takeScreenshot(device);
    } else {
      assert(!matchCondition, 'GDPR is not visible!');
    }
  }
  if (isContentMissing) {
    assert(!matchCondition, 'Missing content!');
  }
});

step('OAB SD Check Terms & conditions and Privacy Policy checkbox',
  { continueOnFailure: true },
  async function () {
    if (await (await t.$(SDStep4TCCheckbox)).exists(oabHelp.interval, oabHelp.timeOutQuick)) {
      if ((await oabHelp.getAttributeSelector(t, SDStep4TCCheckbox, 'aria-checked')) === 'false') {
        await oabHelp.closePopupAndClickSelector(t, SDPopups, SDStep4TCCheckbox, false);
      } else {
        gauge.message('Checkbox was already preselected');
        oabHelp.takeScreenshot(device);
      }
      // KR does not have aria-checked. Check order of elements. TC should be first.
      if (CommonData.SDLOCALEID === 'KR') {
        await oabHelp.closePopupAndClickSelector(t, SDPopups, SDStep4TCCheckbox, false);
        await oabHelp.closePopupAndClickInLoop(t, SDPopups, SDStep4KoreaDissagreeBtn, 1, false);
      } else {
        const legalCheckbox = await oabHelp.getElementsList(t, SDStep4LegalCheckboxes);
        const firstCheckboxName = await oabHelp.getAttributeElement(legalCheckbox, 0, 'data-test-id');
        if (firstCheckboxName !== 'form_terms_and_conditions') {
          assert(!matchCondition, 'TC and PP IS NOT FIRST!');
        }
      }
    } else {
      assert(!matchCondition, 'TC and PP IS NOT VISIBLE!');
    }
  }
);

step('OAB SD Check SMS notifications checkbox', { continueOnFailure: true }, async function () {
  if (await (await t.$(SDStep4SMSOptInCheckbox)).exists(oabHelp.interval, oabHelp.timeOutQuick)) {
    // TO DO if zalezny od wymagan.
    if ((await (await t.$(SDStep4SMSOptInCheckbox)).attribute('aria-checked')) === 'false') {
      await oabHelp.closePopupAndClickSelector(t, SDPopups, SDStep4SMSOptInCheckbox, false);
      gauge.message('SMS Checkbox is visible');
    } else {
      gauge.message('SMS checkbox was already preselected');
    }
    oabHelp.takeScreenshot(device);
  } else {
    assert(!matchCondition, 'SMS checkbox is not visible!');
  }
});

step('OAB SD Check email newsletter checkbox', { continueOnFailure: true }, async function () {
  if (await (await t.$(SDStep4EmailOptInCheckbox)).exists(oabHelp.interval, oabHelp.timeOutQuick)) {
    if ((await (await t.$(SDStep4EmailOptInCheckbox)).attribute('aria-checked')) === 'false') {
      await oabHelp.closePopupAndClickSelector(t, SDPopups, SDStep4EmailOptInCheckbox, false);
      gauge.message('Email checkbox is visible');
    } else {
      gauge.message('Checkbox was already preselected');
    }
    oabHelp.takeScreenshot(device);
  } else {
    assert(!matchCondition, 'Email newsletter checkbox is not visible!');
  }
});

step('OAB SD Click book the appointment button', async function () {
  await assert.ok(!(await (await t.$(SDStep4NextBtn)).isDisabled()), 'THE NEXT BUTTON IS DISABLED!');
  await oabHelp.closePopupAndClickSelector(t, SDPopups, SDStep4NextBtn, false);
});

let appIDFromResponseFE;
let dateFromResponse;
let smsNotificationFromResponse;
let calendarNameFromResponse;
step('OAB SD Click book the appointment button with intercept', { continueOnFailure: true }, async function () {
  await t.evaluate(await t.$(SDStep4NextBtn), (ele) => ele.scrollIntoView({ block: 'center' }));
  await assert.ok(!(await (await t.$(SDStep4NextBtn)).isDisabled()), 'THE NEXT BUTTON IS DISABLED!');
  oabHelp.takeScreenshot(device);
  await oabHelp.fetchEnable(t, '*appointments*', 'XHR', 'Response');
  await oabHelp.closePopupAndClickSelector(t, SDPopups, SDStep4NextBtn, false);
  const responseData = await oabHelp.getNetworkData(t, '*appointments*', 'Response');
  try {
    const codeResponse = responseData.code;
    if (codeResponse) {
      const codeMsg = responseData.message;
      console.log(`Code: ${codeResponse}. Status: ${codeMsg}`);
      oabHelp.takeScreenshot(device);
    } else {
      const counterDetailsFromResponse = responseData.counter;
      appIDFromResponseFE = responseData.id;
      storeNameFromResponse = counterDetailsFromResponse.name;
      dateFromResponse = responseData.start_time;
      smsNotificationFromResponse = responseData.sms_notifications_enabled;
      calendarNameFromResponse = responseData.calendar.public_name;
      gaugeStore.put('App ID Response', appIDFromResponseFE);
      gaugeStoreSpec.put('App ID Response Spec', appIDFromResponseFE);
      gaugeStore.put('Date Response', dateFromResponse);
      gaugeStoreSpec.put('Date Response Spec', dateFromResponse);
      gaugeStore.put('SMS Response', smsNotificationFromResponse);
      gaugeStoreSpec.put('SMS Response Spec', smsNotificationFromResponse);
      gaugeStore.put('Calendar Name Response', calendarNameFromResponse);
      gaugeStoreSpec.put('Calendar Name Response Spec', calendarNameFromResponse);
    }
  } catch (e) {
    gauge.message(e);
  }
  gaugeStore.put('Store Name', storeNameFromResponse);
  gaugeStoreSpec.put('Store Name Spec', storeNameFromResponse);
});

let optInUserStatus;
let optInFlag;
let userEmailAddress;
let optInFlagPrevState;
let isRegistered;
let isLoggedIn;
step('OAB SD Click book the appointment button with intercept 2', async function () {
  // TO DO zmien nazwe tu i spec
  await t.evaluate(await t.$(SDStep4NextBtn), (ele) => ele.scrollIntoView({ block: 'center' }));
  oabHelp.takeScreenshot(device);
  // client.send('<domain>.<method>', params, sessionId, callback);
  await oabHelp.fetchEnable(t, '*rpc.form*', 'XHR', 'Response');
  await assert.ok(!(await (await t.$(SDStep4NextBtn)).isDisabled()), 'THE NEXT BUTTON IS DISABLED!');
  await oabHelp.closePopupAndClickSelector(t, SDPopups, SDStep4NextBtn, false);
  const responseData = await oabHelp.getNetworkData(t, '*rpc.form*', 'Response');
  try {
    optInFlagPrevState = responseData[0].result.data.userinfo.previously_opted_in_email_promotion;
    isRegistered = responseData[0].result.data.userinfo.registered_user;
    isLoggedIn = responseData[0].result.data.userinfo.signed_in;
    userEmailAddress = responseData[0].result.data.userinfo.email_address;
    optInUserStatus = responseData[0].result.data.dataLayer.datalayer_events.emailSignup.event_data.customer_state;
    optInFlag = responseData[0].result.data.dataLayer.datalayer_events.emailSignup.event_data.pc_email_optin;
  } catch (e) {
    gauge.message(e);
  }
});

step('OAB SD Validate opt-in opt-out results <scenario>', { continueOnFailure: false }, async function (scenario) {
  gauge.message('optInUserStatus ' + optInUserStatus);
  // https://jira.esteeonline.com/browse/OAB-9606
  gauge.message('optInFlag ' + optInFlag);
  gauge.message('userEmailAddress ' + userEmailAddress);
  gauge.message('isRegistered ' + isRegistered);
  gauge.message('isLoggedIn ' + isLoggedIn);
  let error = '';
  if (scenario === 'guest opting in for the first time in OAB flow') {
    gauge.message('optInFlagPrevState ' + optInFlagPrevState);
    if (optInFlag !== 1) {
      gauge.message('The opt in flag is not as expected. Expected: 1, Actual: ' + optInFlag);
      error = 'The opt in flag is not as expected. Expected: 1, Actual: ' + optInFlag;
    }
    if (optInFlagPrevState !== 0 && optInFlagPrevState !== null) {
      gauge.message('The opt in previous state is not as expected. Expected: 0  or null, Actual: ' + optInFlagPrevState);
      error = error + ', The opt in previous state is not as expected. Expected: 0  or null, Actual: ' + optInFlagPrevState;
    }
    if (isRegistered !== 0) {
      gauge.message('The registered state is not as expected. Expected: 0, Actual: ' + isRegistered);
      error = error + ', The registered state is not as expected. Expected: 0, Actual: ' + isRegistered;
    }
    if (isLoggedIn !== 0) {
      gauge.message('The logged state is not as expected. Expected: 0, Actual: ' + isLoggedIn);
      error = error + ', The logged state is not as expected. Expected: 0, Actual: ' + isLoggedIn;
    }
  } else if (scenario === 'guest proceeding again -not selecting newsleter in OAB (as opted id)') {
    gauge.message('RPC call should not be triggered here as no change to status was made');
    if (optInUserStatus !== 'opted in') {
      error = error + ', The opt in status is not as expected. Expected: opted out, Actual: ' + optInUserStatus;
      gauge.message('The opt in status is not as expected. Expected: opted out, Actual: ' + optInUserStatus);
    }
    if (optInFlag !== 1) {
      gauge.message('The opt in flag is not as expected. Expected: 1, Actual: ' + optInFlag);
      error = error + ', The opt in flag is not as expected. Expected: 1, Actual: ' + optInFlag;
    }
    if (isRegistered !== 0) {
      gauge.message('The registered state is not as expected. Expected: 0, Actual: ' + isRegistered);
      error = error + ', The registered state is not as expected. Expected: 0, Actual: ' + isRegistered;
    }
    if (isLoggedIn !== 0) {
      gauge.message('The logged state is not as expected. Expected: 0, Actual: ' + isLoggedIn);
      error = error + ', The logged state is not as expected. Expected: 0, Actual: ' + isLoggedIn;
    }
  } else if (scenario === 'guest proceeding again -selecting newsleter in OAB (as opted in, previously not selecting)') {
    gauge.message('optInFlagPrevState ' + optInFlagPrevState);
    if (optInUserStatus !== 'opted in') {
      error = error + ', The opt in status is not as expected. Expected: opted out, Actual: ' + optInUserStatus;
      gauge.message('The opt in status is not as expected. Expected: opted out, Actual: ' + optInUserStatus);
    }
    if (optInFlag !== 1) {
      gauge.message('The opt in flag is not as expected. Expected: 1, Actual: ' + optInFlag);
      error = error + ', The opt in flag is not as expected. Expected: 1, Actual: ' + optInFlag;
    }
    if (optInFlagPrevState !== 1) {
      gauge.message('The opt in previous state is not as expected. Expected: 1, Actual: ' + optInFlagPrevState);
      error = error + ', The opt in previous state is not as expected. Expected: 1, Actual: ' + optInFlagPrevState;
    }
    if (isRegistered !== 0) {
      gauge.message('The registered state is not as expected. Expected: 0, Actual: ' + isRegistered);
      error = error + ', The registered state is not as expected. Expected: 0, Actual: ' + isRegistered;
    }
    if (isLoggedIn !== 0) {
      gauge.message('The logged state is not as expected. Expected: 0, Actual: ' + isLoggedIn);
      error = error + ', The logged state is not as expected. Expected: 0, Actual: ' + isLoggedIn;
    }
  } else if (scenario === 'registered opting in for the first time in OAB flow') {
    gauge.message('optInFlagPrevState ' + optInFlagPrevState);
    if (optInUserStatus !== 'opted in') {
      error = error + ', The opt in status is not as expected. Expected: opted in, Actual: ' + optInUserStatus;
      gauge.message('The opt in status is not as expected. Expected: opted in, Actual: ' + optInUserStatus);
    }
    if (optInFlag !== 1) {
      gauge.message('The opt in flag is not as expected. Expected: 1, Actual: ' + optInFlag);
      error = error + ', The opt in flag is not as expected. Expected: 1, Actual: ' + optInFlag;
    }
    if (optInFlagPrevState !== 0 && optInFlagPrevState !== null && optInFlagPrevState !== undefined) {
      gauge.message('The opt in previous state is not as expected. Expected: 0 or null, Actual: ' + optInFlagPrevState);
      error = error + ', The opt in previous state is not as expected. Expected: 0 or null, Actual: ' + optInFlagPrevState;
    }
    if (isRegistered !== 1) {
      gauge.message('The registered state is not as expected. Expected: 1, Actual: ' + isRegistered);
      error = error + ', The registered state is not as expected. Expected: 1, Actual: ' + isRegistered;
    }
    if (isLoggedIn !== 0) {
      gauge.message('The logged state is not as expected. Expected: 0, Actual: ' + isLoggedIn);
      error = error + ', The logged state is not as expected. Expected: 0, Actual: ' + isLoggedIn;
    }
  } else if (scenario === 'registered proceeding again -not selecting newsleter in OAB (as opted id)') {
    gauge.message('optInFlagPrevState ' + optInFlagPrevState);
    if (optInUserStatus !== 'opted in') {
      error = error + ', The opt in status is not as expected. Expected: opted out, Actual: ' + optInUserStatus;
      gauge.message('The opt in status is not as expected. Expected: opted out, Actual: ' + optInUserStatus);
    }
    if (optInFlag !== 1) {
      gauge.message('The opt in flag is not as expected. Expected: 1, Actual: ' + optInFlag);
      error = error + ', The opt in flag is not as expected. Expected: 1, Actual: ' + optInFlag;
    }
    if (isRegistered !== 1) {
      gauge.message('The registered state is not as expected. Expected: 1, Actual: ' + isRegistered);
      error = error + ', The registered state is not as expected. Expected: 1, Actual: ' + isRegistered;
    }
    if (isLoggedIn !== 0) {
      gauge.message('The logged state is not as expected. Expected: 0, Actual: ' + isLoggedIn);
      error = error + ', The logged state is not as expected. Expected: 0, Actual: ' + isLoggedIn;
    }
  } else if (scenario === 'registered proceeding again -selecting newsleter in OAB (as opted in, previously not selecting)') {
    gauge.message('optInFlagPrevState ' + optInFlagPrevState);
    if (optInUserStatus !== 'opted in') {
      error = error + ', The opt in status is not as expected. Expected: opted out, Actual: ' + optInUserStatus;
      gauge.message('The opt in status is not as expected. Expected: opted out, Actual: ' + optInUserStatus);
    }
    if (optInFlag !== 1) {
      gauge.message('The opt in flag is not as expected. Expected: 1, Actual: ' + optInFlag);
      error = error + ', The opt in flag is not as expected. Expected: 1, Actual: ' + optInFlag;
    }
    if (optInFlagPrevState !== 1) {
      gauge.message('The opt in previous state is not as expected. Expected: 1, Actual: ' + optInFlagPrevState);
      error = error + ', The opt in previous state is not as expected. Expected: 1, Actual: ' + optInFlagPrevState;
    }
    if (isRegistered !== 1) {
      gauge.message('The registered state is not as expected. Expected: 1, Actual: ' + isRegistered);
      error = error + ', The registered state is not as expected. Expected: 1, Actual: ' + isRegistered;
    }
    if (isLoggedIn !== 0) {
      gauge.message('The logged state is not as expected. Expected: 0, Actual: ' + isLoggedIn);
      error = error + ', The logged state is not as expected. Expected: 0, Actual: ' + isLoggedIn;
    }
  } else if (scenario === 'logged in opting in for the first time in OAB flow') {
    gauge.message('optInFlagPrevState ' + optInFlagPrevState);
    if (optInFlag !== 1) {
      gauge.message('The opt in flag is not as expected. Expected: 1, Actual: ' + optInFlag);
      error = error + ', The opt in flag is not as expected. Expected: 1, Actual: ' + optInFlag;
    }
    if (optInFlagPrevState !== 0 && optInFlagPrevState !== null) {
      gauge.message('The opt in previous state is not as expected. Expected: 0  or null, Actual: ' + optInFlagPrevState);
      error = error + ', The opt in previous state is not as expected. Expected: 0  or null, Actual: ' + optInFlagPrevState;
    }
    if (isRegistered !== 1) {
      gauge.message('The registered state is not as expected. Expected: 1, Actual: ' + isRegistered);
      error = error + ', The registered state is not as expected. Expected: 1, Actual: ' + isRegistered;
    }
    if (isLoggedIn !== 1) {
      gauge.message('The logged state is not as expected. Expected: 1, Actual: ' + isLoggedIn);
      error = error + ', The logged state is not as expected. Expected: 1, Actual: ' + isLoggedIn;
    }
  } else if (scenario === 'logged in proceeding again -not selecting newsleter in OAB (as opted id)') {
    gauge.message('optInFlagPrevState ' + optInFlagPrevState);
    if (optInFlag !== 1) {
      gauge.message('The opt in flag is not as expected. Expected: 1, Actual: ' + optInFlag);
      error = error + ', The opt in flag is not as expected. Expected: 1, Actual: ' + optInFlag;
    }
    if (optInFlagPrevState !== 0 && optInFlagPrevState !== null) {
      gauge.message('The opt in previous state is not as expected. Expected: 0  or null, Actual: ' + optInFlagPrevState);
      error = error + ', The opt in previous state is not as expected. Expected: 0  or null, Actual: ' + optInFlagPrevState;
    }
    if (isRegistered !== 1) {
      gauge.message('The registered state is not as expected. Expected: 1, Actual: ' + isRegistered);
      error = error + ', The registered state is not as expected. Expected: 1, Actual: ' + isRegistered;
    }
    if (isLoggedIn !== 1) {
      gauge.message('The logged state is not as expected. Expected: 1, Actual: ' + isLoggedIn);
      error = error + ', The logged state is not as expected. Expected: 1, Actual: ' + isLoggedIn;
    }
  } else if (scenario === 'logged in proceeding again -selecting newsleter in OAB (as opted in, previously not selecting)') {
    gauge.message('optInFlagPrevState ' + optInFlagPrevState);
    if (optInFlag !== 1) {
      gauge.message('The opt in flag is not as expected. Expected: 1, Actual: ' + optInFlag);
      error = error + ', The opt in flag is not as expected. Expected: 1, Actual: ' + optInFlag;
    }
    if (optInFlagPrevState !== 1) {
      gauge.message('The opt in previous state is not as expected. Expected: 1, Actual: ' + optInFlagPrevState);
      error = error + ', The opt in previous state is not as expected. Expected: 1, Actual: ' + optInFlagPrevState;
    }
    if (isRegistered !== 1) {
      gauge.message('The registered state is not as expected. Expected: 1, Actual: ' + isRegistered);
      error = error + ', The registered state is not as expected. Expected: 1, Actual: ' + isRegistered;
    }
    if (isLoggedIn !== 1) {
      gauge.message('The logged state is not as expected. Expected: 1, Actual: ' + isLoggedIn);
      error = error + ', The logged state is not as expected. Expected: 1, Actual: ' + isLoggedIn;
    }
  }
  if (error !== '') {
    assert(!matchCondition, error);
  }
});

step('OAB SD Check if confirmation page appeared', { continueOnFailure: false }, async function () {
  if (await (await t.$(SDConfPageContainer)).exists(oabHelp.interval, oabHelp.timeOutLong)) {
    await t.evaluate(await t.$(SDConfPageContainer), (ele) => ele.scrollIntoView({ block: 'center' }));
    gauge.message('Navigation to the Confirmation Page was successful');
    oabHelp.takeScreenshot(device);
    oabURLCurrent = await t.currentURL();
  } else {
    assert(!matchCondition, 'Confirmation page not displayed');
  }
});

let confirmationStoreName;
let confirmationStoreLocation1;
let confirmationStoreLocation2;
let confirmationArtist;
let confirmationDate;
let confirmationTime;
let confirmationServiceName;
let confirmationServiceDesc;
let confirmationServiceDurationDigit;
let confirmationServiceDurationTxt;
let confirmationServicePrice;
// let confirmationGetDirectionHref;
let confirmationVirtualDesc;
let confirmationZoomHref;
step('OAB SD Get appointment details from Confrimation page <type>', { continueOnFailure: true }, async function (type) {
  const dateContainerChildrenLength = await t.evaluate(await t.$(SDConfPageDateContainer), (ele) => ele.children.length);
  // If the artist was seleted, the children count would be 3. Otherwise it's always 2.
  if (dateContainerChildrenLength === 3 && step3ArtistName !== 0) {
    confirmationArtist = await oabHelp.getText(t, SDConfPageArtist);
  }
  confirmationDate = await oabHelp.getText(t, SDConfPageDate);
  confirmationTime = await oabHelp.getText(t, SDConfPageTime);
  confirmationServiceName = await oabHelp.getText(t, SDConfPageServiceName);
  gaugeStore.put('Service Name Cof', confirmationServiceName);
  confirmationServiceDesc = await oabHelp.getText(t, SDConfPageServiceDesc);
  oabHelp.takeScreenshot(device);
  const durationAll = await oabHelp.getText(t, SDConfPageServiceDuration);
  try {
    confirmationServiceDurationDigit = durationAll.match(/\d+/).toString();
    confirmationServiceDurationTxt = durationAll.match(/\D+/).toString();
  } catch (e) {
    gauge.message(e);
  }
  confirmationServicePrice = await oabHelp.getText(t, SDConfPageServicePrice);
  if (type === 'OAB') {
    confirmationStoreName = await oabHelp.getText(t, SDConfPageLocationStore);
    confirmationStoreLocation1 = await oabHelp.getText(t, SDConfPageLocationAddress1);
    confirmationStoreLocation2 = await oabHelp.getText(t, SDConfPageLocationAddress2);
    gaugeStore.put('Store Name Conf', confirmationStoreName);
    gaugeStore.put('Store location Conf', confirmationStoreLocation1);
    gaugeStore.put('Store location 2 Conf', confirmationStoreLocation2);
  }
  if (type === 'VOAB') {
    confirmationVirtualDesc = await oabHelp.getText(t, SDConfPageVirtualDesc);
    confirmationZoomHref = oabHelp.trimAndLowerCase(await (await t.$(SDConfPageZoomLink)).attribute('href'));
    gaugeStore.put('Zoom Conf', confirmationZoomHref);
  }
});

step('OAB SD Assert confirmation appointment details to the previous steps for <type>', { continueOnFailure: true }, async function (type) {
  let error;
  // Assert Location
  if (type === 'OAB') {
    const locationsCheck = oabHelp.compareVal(storeNameStep1, confirmationStoreName, 'Store Step 1', 'Store Confirmation');
    if (!locationsCheck) {
      error = oabHelp.composeError(error, oabHelp.messages.appLocationNotSame);
    }
  } else {
    if (!(await (await t.$(SDConfPageLocationStore)).exists(oabHelp.interval, oabHelp.timeOutQuick))) {
      gauge.message('Description for VOAB: ' + confirmationVirtualDesc);
    } else {
      error = oabHelp.composeError(error, oabHelp.messages.appLocationOnVOAB);
    }
  }
  // Assert Artist
  const dateContainerChildrenLength = await t.evaluate(await t.$(SDConfPageDateContainer), (ele) => ele.children.length);
  // If the artist was seleted, the children count would be 3. Otherwise it's always 2.
  if (dateContainerChildrenLength === 3 && step3ArtistName !== 0) {
    const artistsCheck = oabHelp.compareVal(step4ArtistText, confirmationArtist, 'Artist Step 4', 'Artist Confirmation');
    if (!artistsCheck) {
      error = oabHelp.composeError(error, oabHelp.messages.artistNameNotSame);
    }
  } else if (dateContainerChildrenLength !== 3 && step3ArtistName !== 0) {
    error = oabHelp.composeError(error, oabHelp.messages.artistMissing);
  } else {
    gauge.message('Book By Artist feature is disabled or any artist was selected.');
  }
  // Assert Date
  const datesCheck = oabHelp.compareVal(step4DateText, confirmationDate, 'Date Step 4', 'Date Confirmation');
  if (!datesCheck) {
    error = oabHelp.composeError(error, oabHelp.messages.appDateIsNotSame);
  }
  // Assert Time
  const timesCheck = oabHelp.compareVal(step4TimeText, confirmationTime, 'Time Step 4', 'Time Confirmtion');
  if (!timesCheck) {
    error = oabHelp.composeError(error, oabHelp.messages.appTimeIsNotSame);
  }
  // Assert Service Name
  const servicesCheck = oabHelp.compareVal(serviceName, confirmationServiceName, 'Service Step 2', 'Service Confirmation');
  if (!servicesCheck) {
    error = oabHelp.composeError(error, oabHelp.messages.serviceNameNotSame);
  }
  // Assert Service Description
  const descriptionsCheck = oabHelp.compareVal(serviceDesc, confirmationServiceDesc, 'Description Step 2', 'Description Confirmation');
  if (!descriptionsCheck) {
    error = oabHelp.composeError(error, oabHelp.messages.serviceDescNotSame);
  }
  // Assert Service Duration
  const durationsDigitCheck = oabHelp.compareVal(serviceDurationDigit, confirmationServiceDurationDigit, 'Duration Step 2', 'Duration Confirmation');
  if (!durationsDigitCheck) {
    error = oabHelp.composeError(error, oabHelp.messages.serviceDurationNotSame);
  }
  const durationsTxtCheck = oabHelp.compareVal(serviceDurationTxt, confirmationServiceDurationTxt, 'Duration Step 2', 'Duration Confirmation');
  if (!durationsTxtCheck) {
    error = oabHelp.composeError(error, oabHelp.messages.serviceDurationNotSame);
  }
  // Assert Service Price
  const pricesCheck = oabHelp.compareVal(servicePrice, confirmationServicePrice, 'Price Step 2', 'Price Confirmation');
  if (!pricesCheck) {
    error = oabHelp.composeError(error, oabHelp.messages.servicePriceNotSame);
  }
  // Error
  if (error) {
    assert(!matchCondition, error);
  }
});

step('OAB SD Check if ZOOM/Get Directions link exists <type>', { continueOnFailure: true }, async function (type) {
  if (type === 'OAB') {
    if (await (await t.$(SDConfPageGetDirectionsLink)).exists(oabHelp.interval, oabHelp.timeOutNorm)) {
      await t.evaluate(await t.$(SDConfPageGetDirectionsLink), (ele) => ele.scrollIntoView({ block: 'center' }));
      const getDirectionText = await oabHelp.getText(t, SDConfPageGetDirectionsLink);
      // await assert.ok(await getDirectionText.isVisible(), "Get directions link is not visible!");
      if (getDirectionText !== '' && !getDirectionText.includes('::elc_')) {
        gauge.message('Get directions text: ' + getDirectionText);
      } else {
        assert(!matchCondition, 'GET DIRECTIONS TEXT IS EMPTY!');
      }
      // There is no href on confirmation page
      // confirmationGetDirectionHref = oabHelp.trimAndLowerCase(await ((await t.$(SDConfirmationPageGetDirectionsLink))).attribute('href'));
      gauge.message('Get directions link is visible');
      oabHelp.takeScreenshot(device);
    } else {
      assert(!matchCondition, 'GET DIRECTIONS DOES NOT EXIST!');
    }
  } else if (type === 'VOAB') {
    if (await (await t.$(SDConfPageZoomLink)).exists(oabHelp.interval, oabHelp.timeOutNorm)) {
      await t.evaluate(await t.$(SDConfPageZoomLink), (ele) => ele.scrollIntoView({ block: 'center' }));
      await assert.ok(await (await t.$(SDConfPageZoomLink)).isVisible(), 'Zoom link is not visible!');
      confirmationZoomHref = oabHelp.trimAndLowerCase(await (await t.$(SDConfPageZoomLink)).attribute('href'));
      gauge.message('Zoomm link href: ' + confirmationZoomHref);
      oabHelp.takeScreenshot(device);
    } else {
      assert(!matchCondition, 'ZOOMM DOES NOT EXIST!');
    }
  }
});

step('OAB SD Check if ZOOM link is opened in next tab', { continueOnFailure: true }, async function () {
  if (await (await t.$(SDConfPageZoomLink)).attribute('target')) {
    if ((await (await t.$(SDConfPageZoomLink)).attribute('target')) === '_blank') {
      gauge.message('Zoomm link opens in a new tab');
    } else {
      assert(!matchCondition, "NO TARGET = '_BLANK' PROPERTY");
    }
  } else {
    assert(!matchCondition, 'ZOOMM HAS NOT TARGET ATTRIBIUTE!');
  }
});

// ACCOUNT SECTION
step('OAB SD Navigate to the account login page', async function () {
  await goToSubPage(CommonData.SDLOGINURL, SDAccLogInEmail, true);
});

step('OAB SD Log out', async function () {
  if (await (await t.$(SDLogOutMyAcc)).exists(oabHelp.interval, oabHelp.timeOutQuick)) {
    await oabHelp.closePopupAndClickSelector(t, SDPopups, SDLogOutMyAcc, true);
    gauge.message(await t.currentURL());
  } else {
    assert(!matchCondition, 'USER WAS NOT LOGGED OUT!');
  }
});

step('OAB SD Log in to my account', async function () {
  // Change view if opens on registration
  if(await oabHelp.ifVisible(t,SDPopups[0],oabHelp.intervalBlink,oabHelp.timeOutNorm)){
    await oabHelp.popUpClose(t, SDPopups[0]);
  }
  if(await oabHelp.ifVisible(t,SDPopups[1],oabHelp.intervalBlink,oabHelp.timeOutNorm)){
    await oabHelp.popUpClose(t, SDPopups[1]);
  }
  if (SDChangeFormLogIn !== '') {
    if (await (await t.$(SDChangeFormLogIn)).exists(oabHelp.interval, oabHelp.timeOutBlink)) {
      await oabHelp.closePopupAndClickSelector(t, SDPopups, SDChangeFormLogIn, false);
    }
  }
  await oabHelp.writeInto(t, CommonData.SDREGISTEREDEMAIL, SDAccLogInEmail);
  await oabHelp.writeInto(t, CommonData.SDRETURNUSERPWD, SDAccLogInPswd);
  await oabHelp.closePopupAndClickSelector(t, SDPopups, SDAccSubmitLogIn, false, 'js');
  await oabHelp.existanceCheck(t, SDMyAccNav, oabHelp.timeOutLong);
});

// TO DO przerobic globlanie
const newsletterExceptionList = ['JM-HK', 'JM-US', 'JM-CA'];
step('OAB SD Create account <scenario>', async function (scenario) {
  if (await (await t.$(SDChangeFormRegis)).exists(oabHelp.interval, oabHelp.timeOutQuick)) {
    await oabHelp.closePopupAndClickSelector(t, SDPopups, SDChangeFormRegis, false);
  }
  if (await (await t.$(SDEmailRegis)).exists(oabHelp.interval, oabHelp.timeOutQuick)) {
    if (scenario === 'register new') {
      emailSave = oabHelp.qatestdomain();
      gaugeStore.put('Guest Email', emailSave);
      gaugeStoreSpec.put('Guest Email Spec', emailSave);
    }
    await oabHelp.writeInto(t, emailSave, SDEmailRegis);
    gauge.message('Account will be created for email: ' + emailSave);
  } else {
    assert(!matchCondition, 'EMAIL INPUT IS NOT DISPLAYED ON PAGE!');
  }

  // button in JM AU, when user first enter e-mail adres then go to next form where enterns all details
  if (SDSubmitBtnRegis !== '' && (await (await t.$(SDSubmitBtnRegis)).exists(oabHelp.interval, oabHelp.timeOutQuick))) {
    oabHelp.takeScreenshot(device);
    await oabHelp.closePopupAndClickSelector(t, SDPopups, SDSubmitBtnRegis, true);
  }
  if (SDTileRegis !== '' && (await (await t.$(SDTileRegis)).exists(oabHelp.interval, oabHelp.timeOutQuick))) {
    await oabHelp.closePopupAndClickSelector(t, SDPopups, SDTileRegis, false);
  }
  if (SDFirstNameRegis !== '' && (await (await t.$(SDFirstNameRegis)).exists(oabHelp.interval, oabHelp.timeOutQuick))) {
    if (CommonData.SDLOCALEID === 'BR') {
      await oabHelp.writeInto(t, CommonData.SDFULLNAME, SDFirstNameRegis);
    } else {
      await oabHelp.writeInto(t, CommonData.SDFIRSTNAME, SDFirstNameRegis);
    }
  }
  if (SDLastNameRegis !== '' && (await (await t.$(SDLastNameRegis)).exists(oabHelp.interval, oabHelp.timeOutQuick))) {
    if (CommonData.SDLOCALEID === 'BR') {
      await oabHelp.writeInto(t, CommonData.SDFULLNAME, SDLastNameRegis);
    } else {
      await oabHelp.writeInto(t, CommonData.SDLASTNAME, SDLastNameRegis);
    }
  }
  if (await (await t.$(SDPswdRegis)).exists(oabHelp.interval, oabHelp.timeOutQuick)) {
    await oabHelp.writeInto(t, CommonData.SDNEWUSERPWD, SDPswdRegis);
  } else {
    assert(!matchCondition, 'MISSING PASSWORD FIELD!');
  }

  if (SDPswd2Regis !== '' && (await (await t.$(SDPswd2Regis)).exists(oabHelp.interval, oabHelp.timeOutQuick))) {
    await oabHelp.writeInto(t, CommonData.SDNEWUSERPWD, SDPswd2Regis);
  }
  if (SDPswdHintRegis !== '' && (await (await t.$(SDPswdHintRegis)).exists(oabHelp.interval, oabHelp.timeOutQuick))) {
    await oabHelp.writeInto(t, CommonData.SDNEWUSERPWD, SDPswdHintRegis);
  }
  if (SDPhoneNumberRegis !== '' && (await (await t.$(SDPhoneNumberRegis)).exists(oabHelp.interval, oabHelp.timeOutQuick))) {
    await oabHelp.writeInto(t, CommonData.SDPHONE2, SDPhoneNumberRegis);
  }
  if (CommonData.SDLOCALEID === 'BR' && (await (await t.$(SDCPFRegis)).exists(oabHelp.interval, oabHelp.timeOutQuick))) {
    await oabHelp.writeInto(t, cpfUser, SDCPFRegis);
  }
  if (SDBDayYear !== '' && (await (await t.$(SDBDayYear)).exists(oabHelp.interval, oabHelp.timeOutQuick))) {
    await t.evaluate(await t.$(SDBDayYear), (ele) => ele.scrollIntoView({ block: 'center' }));
    await t.dropDown(await { id: SDBDayYearDropDownID }).select({ index: 10 });
    await t.dropDown(await { id: SDBDayMonthDropDownID }).select({ index: 10 });
    await t.dropDown(await { id: SDBDayDayDropDownID }).select({ index: 10 });
  }
  if (scenario === 'register new' && newsletterExceptionList.includes(CommonData.BRANDLOCALE)) {
    // TO DO !!! Sometimes it is preselected, sometimes user has to check to opt out
    if (SDNewsletter1CheckboxRegis !== '') {
      if (await (await t.$(SDNewsletter1CheckboxRegis)).exists(oabHelp.interval, oabHelp.timeOutQuick)) {
        await oabHelp.closePopupAndClickSelector(t, SDPopups, SDNewsletter1CheckboxRegis, false);
      } else {
        gauge.message('Newsletter 1 checkbox is NOT displayed on PAGE');
      }
    }
    if (SDNewsletter2CheckboxRegis !== '') {
      if (await (await t.$(SDNewsletter2CheckboxRegis)).exists(oabHelp.interval, oabHelp.timeOutQuick)) {
        await oabHelp.closePopupAndClickSelector(t, SDPopups, SDNewsletter2CheckboxRegis, false);
      } else {
        gauge.message('Newsletter 2 checkbox is NOT displayed on PAGE');
      }
    }
  }

  if (await (await t.$(SDTCCheckboxRegis)).exists(oabHelp.interval, oabHelp.timeOutQuick)) {
    if ((await (await t.$(SDTCCheckboxRegis)).attribute('aria-checked')) !== 'true') {
      await oabHelp.closePopupAndClickSelector(t, SDPopups, SDTCCheckboxRegis, false);
    } else {
      gauge.message('Checkbox prechecked');
    }
  } else {
    gauge.message('Terms and Conditions checkbox is NOT displayed on PAGE');
  }
  oabHelp.takeScreenshot(device);
  if (await (await t.$(SDCreateAccBtnRegis)).exists(oabHelp.interval, oabHelp.timeOutQuick)) {
    await oabHelp.closePopupAndClickSelector(t, SDPopups, SDCreateAccBtnRegis, false, 'js');
    await oabHelp.existanceCheck(t, SDMyAccNav, oabHelp.timeOutLong);
    gauge.message('Create account button clicked');
  } else {
    assert(!matchCondition, 'CREATE ACCOUNT BUTTON IS NOT DISPLAYED!!');
  }
});

// My Appointments
let myAppURLCurrent;
step('OAB SD Check if My appointments Access Point button is displayed', { continueOnFailure: true }, async function () {
  let error;
  let myAppAccPointText;
  let myAccessPointList;
  let indexToClick;
  if (await oabHelp.ifExists(t, SDMyAppAccessPoint, oabHelp.interval, oabHelp.timeOutLong)) {
    myAccessPointList = await oabHelp.getElementsList(t, SDMyAppAccessPoint);
    for (let i = 0; i < myAccessPointList.length; i++) {
      const CTAtext = await oabHelp.getText(t, SDMyAppAccessPoint, i);
      if (CTAtext !== '') {
        myAppAccPointText = CTAtext;
        indexToClick = i;
        break;
      }
    }
    oabHelp.takeScreenshot(device);
    if (myAppAccPointText) {
      gauge.message('CTA text: ' + myAppAccPointText);
      await oabHelp.closePopupAndClickElement(t, SDPopups, SDMyAppAccessPoint, indexToClick, true);
      await oabHelp.existanceCheck(t, SDMyAppContainer, oabHelp.timeOutLong);
    } else {
      error = oabHelp.composeError(error, oabHelp.messages.myAppMissingCTA);
    }
  } else {
    oabHelp.takeScreenshot(device);
    error = oabHelp.composeError(error, oabHelp.messages.myAppNotExistCTA);
  }
  if (error) {
    await goToSubPage(CommonData.SDMYAPPOINTMENTURL, SDMyAppContainer, true);
  }
  myAppURLCurrent = await t.currentURL();
  gauge.message(myAppURLCurrent);
  if (error) {
    assert(!matchCondition, error);
  }
});

step('OAB SD Open a new tab', async function () {
  // opens a new tab bc book appointmnet with intercept will throw an error when edit appointment used in the same tab
  await t.openTab();
});

step('OAB SD Navigate to the My appointments', async function () {
  await goToSubPage(CommonData.SDMYAPPOINTMENTURL, SDMyAppContainer, true);
  myAppURLCurrent = await t.currentURL();
});

let myAppCurrLength;
step('OAB SD Click Book Appointment button on My appointments page', { continueOnFailure: true }, async function () {
  let error;
  let buttonFound;
  let cta;
  const myApps = await oabHelp.getElementsList(t, SDMyAppCurrent);
  myAppCurrLength = myApps.length;
  if (myAppCurrLength === 0) {
    if (await (await t.$(SDMyAppBookNowBtn)).exists(oabHelp.interval, oabHelp.timeOutLong)) {
      cta = SDMyAppBookNowBtn;
      buttonFound = true;
    }
  } else {
    // if (platform === "MOBILE") {
    //     if (SDMyAppOpenDropDown !== "") {
    //         if (await ((await t.$(SDMyAppOpenDropDown)).exists(100,50000))) {
    //             await t.click((await t.$(SDMyAppOpenDropDown)), { waitForNavigation: false, force: true })
    //         }
    //     }
    // }
    if (await (await t.$(SDMyAppBookAnotherAppBtn)).exists(oabHelp.interval, oabHelp.timeOutLong)) {
      cta = SDMyAppBookAnotherAppBtn;
      buttonFound = true;
    }
  }
  if (buttonFound === true) {
    let myAppBookNewLink = await oabHelp.getAttributeSelector(t, cta, 'href');
    oabHelp.takeScreenshot(device);
    await oabHelp.closePopupAndClickSelector(t, SDPopups, cta, true);
    await oabHelp.existanceCheck(t, SDOABContainer, oabHelp.timeOutLong);
    gauge.message('Book Now button is displayed and has been clicked');
    // Swap URL if needed
    if (isMigration) {
      const currOabLink = await t.currentURL();
      const migrationLink = oabHelp.changeToMigrationLink(currOabLink, CommonData.SDOABURLMOGRATION, CommonData.SDOABURL);
      if (migrationLink) {
        await t.goto(migrationLink, {
          waitForNavigation: true,
          waitForEvents: ['DOMContentLoaded'],
        });
      }
      // Swap href if needed
      myAppBookNewLink = oabHelp.changeToMigrationLink(myAppBookNewLink, CommonData.SDOABURLMOGRATION, CommonData.SDOABURL);
    }
    // Compare link in the button
    const linksCheck = oabHelp.compareVal(myAppBookNewLink, newOabUrl, 'Link on My Apps', 'OAB link');
    if (!linksCheck) {
      error = oabHelp.composeError(error, oabHelp.messages.myAppLinksDifferent);
    }
  } else {
    await goToSubPage(newOabUrl, SDOABContainer, true);
    error = oabHelp.composeError(error, oabHelp.messages.myAppBookNewNotVisible);
  }
  if (error) {
    assert(!matchCondition, error);
  }
});

let myAppServiceName;
let myAppDate;
let myAppTime;
let myAppWhere;
let myAppGetDirectionLink;
let myAppVOABLink;
let myAppVOABHref;
let myAppServiceDurationDigit;
let myAppServiceDurationTxt;
let myAppServicePrice;
let myAppAppoContainerID;
let appIDFromResponseAppHQ;
const serviceDurExeption = ['JM', 'EL', 'CL'];
const servicePriceExeptionList = ['JM', 'EL', 'CL', 'LM', 'AV'];
step(
  'OAB SD Get appointment details from My appointments page <type> when appointment created in <where>',
  { continueOnFailure: true },
  async function (type, where) {
    let error;
    if (await (await t.$(SDMyAppCurrent)).exists(oabHelp.interval, oabHelp.timeOutNorm)) {
      myAppCurrLength = (await (await t.$(SDMyAppCurrent)).elements()).length;
      if (where === 'FE') {
        myAppAppoContainerID = SDMyAppContainerIDPart + appIDFromResponseFE;
      } else if (where === 'AppHQ') {
        myAppAppoContainerID = SDMyAppContainerIDPart + appIDFromResponseAppHQ;
      }
      // GENERAL DATA
      // Get service loation
      if (type === 'OAB') {
        myAppWhere = await oabHelp.getText(t, myAppAppoContainerID + ' ' + SDMyAppWheres);
        gauge.message(`Appointment Location: ${myAppWhere}`);
      }
      // Get service name
      myAppServiceName = await oabHelp.getText(t, myAppAppoContainerID + ' ' + SDMyAppServiceNames);
      gauge.message(`Service name: ${myAppServiceName}`);

      // Service duartion
      const durationMyApp = await oabHelp.getText(t, myAppAppoContainerID + ' ' + SDMyAppServiceDurations);
      let splitDurationMyApp;
      let durationAll;
      if (CommonData.SDBRANDNAME === 'MC') {
        // i.e. 30 min / 35€
        splitDurationMyApp = durationMyApp.split('/');
        durationAll = splitDurationMyApp[0];
      } else if (CommonData.SDBRANDNAME === 'LM' || CommonData.SDBRANDNAME === 'AV') {
        durationAll = durationMyApp;
      } else if (serviceDurExeption.includes(CommonData.SDBRANDNAME)) {
        // i.e. Cleansing Refresher Course (20 min)
        splitDurationMyApp = myAppServiceName.split('(');
        splitDurationMyApp = splitDurationMyApp[1].split(')');
        durationAll = splitDurationMyApp[0];
      } else if (CommonData.SDBRANDNAME === 'BB' || CommonData.SDBRANDNAME === 'TF') {
        // £00.00 / (25 MIN) or £30.00 (30 MIN)
        splitDurationMyApp = durationMyApp.split('(');
        splitDurationMyApp = splitDurationMyApp[1].split(')');
        durationAll = splitDurationMyApp[0];
      }
      try {
        myAppServiceDurationDigit = durationAll.match(/\d+/).toString();
        myAppServiceDurationTxt = durationAll.match(/\D+/).toString();
      } catch (e) {
        gauge.message(e);
      }
      gauge.message(`Service duration digit: ${myAppServiceDurationDigit}, text: ${myAppServiceDurationTxt}`);
      // Service price
      if (servicePriceExeptionList.includes(CommonData.SDBRANDNAME)) {
        myAppServicePrice = 'No price dispalyed for this brand';
      } else if (CommonData.SDBRANDNAME === 'MC') {
        let servicePriceSupp = await oabHelp.getText(t, myAppAppoContainerID + ' ' + SDMyAppServiceDurations);
        servicePriceSupp = servicePriceSupp.split(' / ');
        myAppServicePrice = oabHelp.trimAndLowerCase(servicePriceSupp[1]);
      } else {
        // Price has separate selector
        myAppServicePrice = await oabHelp.getText(t, myAppAppoContainerID + ' ' + SDMyAppServicePrices);
      }
      gauge.message(`Service Price: ${myAppServicePrice}`);
      // Get service date & time
      myAppDate = await oabHelp.getText(t, myAppAppoContainerID + ' ' + SDMyAppDates);
      gauge.message(`Appointment Date: ${myAppDate}`);
      // Brand specific
      if (
        SDMyAppTimes !== '' &&
        (CommonData.SDBRANDNAME === 'MC' ||
          CommonData.SDBRANDNAME === 'LM' ||
          CommonData.SDBRANDNAME === 'BB' ||
          CommonData.SDBRANDNAME === 'AV' ||
          CommonData.SDBRANDNAME === 'TF')
      ) {
        // Separate time
        myAppTime = await oabHelp.getText(t, myAppAppoContainerID + ' ' + SDMyAppTimes);
      } else {
        // Time is included in date string
        myAppTime = myAppDate;
      }
      gauge.message(`Appointment Time: ${myAppTime}`);
      // Get directions link
      if (type === 'OAB') {
        if ((await t.$(myAppAppoContainerID + ' ' + SDMyAppGetDirectionLinks)).exists(oabHelp.interval, oabHelp.timeOutLong)) {
          myAppGetDirectionLink = await oabHelp.getText(t, myAppAppoContainerID + ' ' + SDMyAppGetDirectionLinks);
          const myAppGetDirectionHref = oabHelp.trimAndLowerCase(
            await (await t.$(myAppAppoContainerID + ' ' + SDMyAppGetDirectionLinks)).attribute('href')
          );
          gauge.message(`Get directions text: ${myAppGetDirectionLink} \n Links to: ${myAppGetDirectionHref}`);
        } else {
          error = oabHelp.composeError(error, oabHelp.messages.noGetDirections);
        }
      }
      // Get Zoom link
      if (type === 'VOAB') {
        if ((await t.$(myAppAppoContainerID + ' ' + SDMyAppVOABLinks)).exists(oabHelp.interval, oabHelp.timeOutLong)) {
          try {
            myAppVOABLink = await oabHelp.getText(t, myAppAppoContainerID + ' ' + SDMyAppVOABLinks);
            myAppVOABHref = oabHelp.trimAndLowerCase(await (await t.$(myAppAppoContainerID + ' ' + SDMyAppVOABLinks)).attribute('href'));
          } catch (e) {
            myAppVOABLink = 'BAD LINK';
            myAppVOABHref = 'BAD LINK';
            error = oabHelp.composeError(error, e);
          }
          gauge.message('Zoom link: ' + myAppVOABLink);
        } else {
          error = oabHelp.composeError(error, oabHelp.messages.noZoomLink);
        }
      }
    } else {
      assert(!matchCondition, oabHelp.messages.myAppNoCurrApp);
    }
    if (error) {
      assert(!matchCondition, error);
    }
  }
);

step('OAB SD Click cancel appointment button', async function () {
  if (myAppCurrLength === 0) {
    assert(!matchCondition, 'There is no upcoming appointment on My appointments page!');
  } else {
    await oabHelp.existanceCheck(t, myAppAppoContainerID + ' ' + SDMyAppCancelBtn, oabHelp.timeOutLong);
    await oabHelp.closePopupAndClickSelector(t, SDPopups, myAppAppoContainerID + ' ' + SDMyAppCancelBtn, false);
    if (await (await t.$(SDMyAppYesNoPopup)).isVisible(oabHelp.interval, oabHelp.timeOutBlink)) {
      oabHelp.takeScreenshot(device);
      await oabHelp.closePopupAndClickSelector(t, SDPopups, SDMyAppYesBtn, false);
      // Check if cancellation confirmation popup is displayed
      if ((await (await t.$(SDMyAppCancelConfPopup)).isVisible(oabHelp.interval, oabHelp.timeOutQuick)) === false) {
        assert(!matchCondition, 'CANCEL CONFIMATION POPUP WAS NOT OPENED!');
      }
    } else {
      assert(!matchCondition, 'CANCEL POPUP WAS NOT OPENED!');
    }
  }
  oabHelp.takeScreenshot(device);
});

let serviceNameCancelled;
let serviceDateCancelled;
let serviceWhereCancelled;
let serviceDurationCancelledDigit;
let serviceDurationCancelledTxt;
step('OAB SD Get details of cancelled appointent <type>', { continueOnFailure: true }, async function (type) {
  let error;
  let getOABURL;
  oabHelp.takeScreenshot(device);
  // Service name
  serviceNameCancelled = await oabHelp.getText(t, SDMyAppCancelPopupService);
  gauge.message(`Service name: ${serviceNameCancelled}`);
  // Service duration
  let nameServiceSplitted;
  let durationCancellApp;
  let durationAll;
  if (CommonData.SDBRANDNAME === 'MC') {
    nameServiceSplitted = serviceNameCancelled.split('-');
    durationCancellApp = nameServiceSplitted[nameServiceSplitted.length - 1].split('/');
    durationAll = durationCancellApp[0];
  } else if (serviceDurExeption.includes(CommonData.SDBRANDNAME)) {
    nameServiceSplitted = serviceNameCancelled.split('(');
    durationCancellApp = nameServiceSplitted[1].split(')');
    durationAll = durationCancellApp[0];
  } else if (CommonData.SDBRANDNAME === 'BB' || CommonData.SDBRANDNAME === 'TF') {
    nameServiceSplitted = serviceNameCancelled.split('(');
    const nameServiceSplitted2 = nameServiceSplitted[1].split(')');
    durationCancellApp = nameServiceSplitted2[0].split('/');
    durationAll = durationCancellApp[0];
  } else if (CommonData.SDBRANDNAME === 'LM') {
    // TO DO!!!
    gauge.message('LM does not have Service duration on Cancellation popup!');
  } else if (CommonData.SDBRANDNAME === 'AV') {
    durationAll = await oabHelp.getText(t, SDMyAppCancelPopupDur);
  }
  try {
    serviceDurationCancelledDigit = durationAll.match(/\d+/).toString();
    serviceDurationCancelledTxt = durationAll.match(/\D+/).toString();
  } catch (e) {
    gauge.message(e);
  }
  gauge.message(`Service duration: ${serviceDurationCancelledDigit}, text: ${serviceDurationCancelledTxt}`);
  // Service date
  serviceDateCancelled = await oabHelp.getText(t, SDMyAppCancelPopupDate);
  gauge.message(`Appointment date: ${serviceDateCancelled}`);
  // Location
  // TO DO think through the situation where where section is displayed but has virtual copy. .location-name > .location-address
  if (await (await t.$(SDMyAppCancelPopupWhere)).exists(oabHelp.interval, oabHelp.timeOutNorm)) {
    const where = await oabHelp.getText(t, SDMyAppCancelPopupWhere);
    try {
      const confWhere = oabHelp.escapeRegExp(confirmationStoreName);
      serviceWhereCancelled = oabHelp.trimAndLowerCase(where).match(oabHelp.trimAndLowerCase(confWhere)).toString();
    } catch (e) {
      serviceWhereCancelled = null;
      gauge.message(e);
    }
    if (serviceWhereCancelled !== '' && serviceWhereCancelled !== null) {
      if (type === 'OAB') {
        gauge.message(`Appointment location: ${serviceWhereCancelled}`);
      } else if (type === 'VOAB' && !oabHelp.trimAndLowerCase(serviceWhereCancelled).includes('virtual')) {
        error = oabHelp.composeError(error, oabHelp.messages.appLocationOnVOAB);
      }
    }
  } else {
    if (type === 'OAB') {
      error = oabHelp.composeError(error, oabHelp.messages.appLocationMissing);
    } else if (type === 'VOAB') {
      gauge.message('Location is not displayed on cancellation popup for VOAB.');
    }
  }
  // Check if book appointment button is displayed
  if (await (await t.$(SDMyAppBookNewBtnPopup)).exists(oabHelp.interval, oabHelp.timeOutNorm)) {
    let myAppBookNewBtnHrefCancel = oabHelp.trimAndLowerCase(await t.evaluate(await t.$(SDMyAppBookNewBtnPopup), (ele) => ele.getAttribute('href')));
    const splitOABURL = oabURLStep3.split('/');
    const splitOABURLLength = splitOABURL.length;

    if (!CommonData.SDLANGUAGE || hubFlag === 1 || defaultLinkFlag === 1) {
      getOABURL = splitOABURL[splitOABURLLength - 1];
      getOABURL = oabHelp.trimAndLowerCase('/' + getOABURL);
    } else {
      getOABURL = oabHelp.trimAndLowerCase('/' + splitOABURL[splitOABURLLength - 2] + '/' + splitOABURL[splitOABURLLength - 1]);
    }
    gauge.message('OAB URL: ' + getOABURL);
    gauge.message('Book new service button redirects to: ' + myAppBookNewBtnHrefCancel);

    if (isMigration) {
      myAppBookNewBtnHrefCancel = oabHelp.changeToMigrationLink(myAppBookNewBtnHrefCancel, CommonData.SDOABURLMOGRATION, CommonData.SDOABURL);
    }

    if (myAppBookNewBtnHrefCancel !== getOABURL) {
      error = oabHelp.composeError(error, oabHelp.messages.myAppLinksDifferent);
    }
  } else {
    error = oabHelp.composeError(error, oabHelp.messages.myAppBookNewNotVisible);
  }
  if (error) {
    assert(!matchCondition, error);
  }
});

step('OAB SD Close cancel pop-up and check if it was removed from the page', { continueOnFailure: true }, async function () {
  let error;
  // check if X button is displayed on popup
  if (await (await t.$(SDMyAppClosePopup)).exists(oabHelp.interval, oabHelp.timeOutNorm)) {
    const isCloseable = await (await t.$(SDMyAppClosePopup)).isVisible(oabHelp.interval, oabHelp.timeOutQuick);
    if (!isCloseable) {
      error = oabHelp.composeError(error, oabHelp.messages.myAppCancelNotClosable);
    }
  } else {
    error = oabHelp.composeError(error, oabHelp.messages.myAppCancelNotExist);
  }
  // Close cancel popup
  await oabHelp.closePopupAndClickSelector(t, SDPopups, SDMyAppClosePopup, false);
  // Verify if appointment was removed from the page
  const myAppCurrentLengthAfterCancel = (await (await t.$(SDMyAppCurrent)).elements()).length;
  if (myAppCurrentLengthAfterCancel === myAppCurrLength - 1) {
    gauge.message('Cancelled appointment was properly removed from the page.');
  } else {
    error = oabHelp.composeError(error, oabHelp.messages.myAppAppNotremoved);
  }
  if (error) {
    assert(!matchCondition, error);
  }
  oabHelp.takeScreenshot(device);
});

step('OAB SD Edit appointment', async function () {
  if (myAppCurrLength === 0) {
    assert(!matchCondition, 'NO UPCOMING APPOINTMENT ON MY APPOINTMENTS PAGE!');
  } else {
    if (isMigration) {
      await oabHelp.closePopupAndClickSelector(t, SDPopups, myAppAppoContainerID + ' ' + SDMyAppEditBtn, false);
      const editAppLink = await t.currentURL();
      const linkChanged = oabHelp.changeToMigrationLink(editAppLink, CommonData.SDOABURLMOGRATION, CommonData.SDOABURL);
      await oabHelp.goToPage(t, SDPopups, linkChanged, SDStep3Container, true, device);
    } else {
      await oabHelp.closePopupAndClickSelector(t, SDPopups, myAppAppoContainerID + ' ' + SDMyAppEditBtn, false);
      await oabHelp.existanceCheck(t, SDStep3Container, oabHelp.timeOutLong);
    }
  }
});

step('OAB SD Assert service details from Confirmation page to My appointments page for <type>', { continueOnFailure: true }, async function (type) {
  let error;
  // Compare Servie Name by spliting after space and comparing each part to each part omiting special characters
  // My App: EVERY DAY BEAUTY - 60 MINUTES: 60 MIN / $ 60.00
  // Confirmation: EVERY DAY BEAUTY - 60 MINUTES
  // Assert Service name
  const servicesCheck = [];
  const myAppSer = myAppServiceName.split(' ');
  const confSer = confirmationServiceName.split(' ');
  if (myAppSer.length >= confSer.length) {
    const lastPartIndex = confSer.length - 1;
    for (let i = 0; i < confSer.length; i++) {
      const currMyAppServiceName = myAppSer[i];
      const currConfPageServiceName = confSer[i];
      servicesCheck.push(currMyAppServiceName);
      if (i !== lastPartIndex && oabHelp.compareVal(currMyAppServiceName, currConfPageServiceName)) {
        continue;
      } else if (i === lastPartIndex && oabHelp.trimAndLowerCase(currMyAppServiceName).includes(oabHelp.trimAndLowerCase(currConfPageServiceName))) {
        // MINUTES: -> MINUTES
        continue;
      } else {
        error = oabHelp.composeError(error, oabHelp.messages.serviceNameNotSame);
        break;
      }
    }
    gauge.message(`Service my appointments: ${servicesCheck.join(' ')} \n is same as \n Service Confirmation: ${confirmationServiceName} `);
  } else {
    oabHelp.compareVal(myAppServiceName, confirmationServiceName, 'Service name My App', 'Service name Confirmation');
    error = oabHelp.composeError(error, oabHelp.messages.serviceNameNotSame);
  }
  // Assert Service duration
  const durationsDigitCheck = oabHelp.compareVal(
    myAppServiceDurationDigit,
    confirmationServiceDurationDigit,
    'Duration My App',
    'Duration Confirmation'
  );
  if (!durationsDigitCheck) {
    error = oabHelp.composeError(error, oabHelp.messages.serviceDurationNotSame);
  }
  const durationsTxtCheck = oabHelp.compareVal(
    myAppServiceDurationTxt,
    confirmationServiceDurationTxt,
    'Duration My App',
    'Duration Confirmation',
    CommonData.SDLOCALEID
  );
  if (!durationsTxtCheck) {
    error = oabHelp.composeError(error, oabHelp.messages.serviceDurationNotSame);
  }

  // Assert Location for OAB
  // TO DO VOAB copy
  if (type === 'OAB') {
    const locationsCheck = oabHelp.compareVal(myAppWhere, confirmationStoreName, 'Location My App', 'Location Confirmation');
    if (!locationsCheck) {
      error = oabHelp.composeError(error, oabHelp.messages.appLocationNotSame);
    }
  }
  // } else {
  //   let locationsCheck = oabHelp.compareVal(, confirmationVirtualDesc, 'Location My App', 'Location Confirmation');
  // }

  // Zoom for VOAB
  if (type === 'VOAB') {
    const linksCheck = oabHelp.compareVal(myAppVOABHref, confirmationZoomHref, 'Zoom My App', 'Zoom Confirmation');
    if (!linksCheck) {
      error = oabHelp.composeError(error, oabHelp.messages.zoomLinkNotSame);
    }
  }
  // Assert Date
  const datesCheck = oabHelp.compareDates(myAppDate, confirmationDate, 'My App', 'Confirmation', DateDetails);
  if (!datesCheck) {
    error = oabHelp.composeError(error, oabHelp.messages.appDateIsNotSame);
  }
  // Assert Time
  const timesCheck = oabHelp.compareTimes(myAppTime, confirmationTime, 'My App', 'Confirmation');
  if (!timesCheck) {
    error = oabHelp.composeError(error, oabHelp.messages.appTimeIsNotSame);
  }
  oabHelp.takeScreenshot(device);
  if (error) {
    assert(!matchCondition, error);
  }
});

step('OAB SD Assert service details from Confirmation page to Cancelation popup for <type>', { continueOnFailure: true }, async function (type) {
  let error;
  // Assert Service name
  const serviceCheck = [];
  const cancelledSer = serviceNameCancelled.split(' ');
  const confSer = confirmationServiceName.split(' ');
  if (cancelledSer.length >= confSer.length) {
    const lastPartIndex = confSer.length - 1;
    for (let i = 0; i < confSer.length; i++) {
      const currCancelledServiceName = cancelledSer[i];
      const currConfPageServiceName = confSer[i];
      serviceCheck.push(currCancelledServiceName);
      if (i !== lastPartIndex && oabHelp.compareVal(currCancelledServiceName, currConfPageServiceName)) {
        continue;
      } else if (
        i === lastPartIndex &&
        oabHelp.trimAndLowerCase(currCancelledServiceName).includes(oabHelp.trimAndLowerCase(currConfPageServiceName))
      ) {
        // MINUTES: -> MINUTES
        continue;
      } else {
        error = oabHelp.composeError(error, oabHelp.messages.serviceNameNotSame);
        break;
      }
    }
    gauge.message(`Service cancellation: ${serviceCheck.join(' ')} \n is same as \n Service Confirmation: ${confirmationServiceName} `);
  } else {
    oabHelp.compareVal(myAppServiceName, confirmationServiceName, 'Service name My App', 'Service name Confirmation');
    error = oabHelp.composeError(error, oabHelp.messages.serviceNameNotSame);
  }
  // Assert Service duration
  if (CommonData.SDBRANDNAME !== 'LM') {
    // LM does not have duration on cancellation popoup
    const durationsDigitCheck = oabHelp.compareVal(
      serviceDurationCancelledDigit,
      confirmationServiceDurationDigit,
      'Duration cancellation',
      'Duration confirmation'
    );
    if (!durationsDigitCheck) {
      error = oabHelp.composeError(error, oabHelp.messages.serviceDurationNotSame);
    }
  }
  // if (CommonData.SDBRANDNAME !== 'LM') { // LM does not have duration on cancellation popoup
  //   const durationsTxtCheck = oabHelp.compareVal(
  //     serviceDurationCancelledTxt,
  //     confirmationServiceDurationTxt,
  //     'Duration cancellation',
  //     'Duration confirmation'
  //   );
  //   if (!durationsTxtCheck) {
  //     error = oabHelp.composeError(error, oabHelp.messages.serviceDurationNotSame);
  //   }
  // }
  // Assert Appointment location
  if (type === 'OAB') {
    const locationsCheck = oabHelp.compareVal(serviceWhereCancelled, confirmationStoreName, 'Location Cancellation', 'Location Confirmation');
    if (!locationsCheck) {
      error = oabHelp.composeError(error, oabHelp.messages.appLocationMissing);
    }
  }
  // Assert Date
  const datesCheck = oabHelp.compareDates(confirmationDate, serviceDateCancelled, 'Confirmation', 'Cancellation', DateDetails);
  if (!datesCheck) {
    error = oabHelp.composeError(error, oabHelp.messages.appDateIsNotSame);
  }
  // Assert Time
  const timesCheck = oabHelp.compareTimes(confirmationTime, serviceDateCancelled, 'Confirmation', 'Cancellation');
  if (!timesCheck && CommonData.SDBRANDNAME !== 'TF' && CommonData.SD !== 'TF') {
    // TF does not have time on cancellation popup. QA Clarification:
    error = oabHelp.composeError(error, oabHelp.messages.appTimeIsNotSame);
  }

  if (error) {
    assert(!matchCondition, error);
  }
});

step('OAB SD Switch to <type>', async function (type) {
  if (type === 'AppHQ') {
    await t.switchTo(/Appointments HQ/);
  } else if (type === 'MyApp') {
    await t.switchTo(myAppURLCurrent);
    await t.reload({
      waitForEvents: ['DOMContentLoaded'],
      waitForNavigation: false,
    });
  } else if (type === 'Book Appointment') {
    await t.switchTo(oabURLCurrent);
    await t.reload({
      waitForEvents: ['DOMContentLoaded'],
      waitForNavigation: false,
    });
  }
});

step('OAB AppHQ Assert customer details from Confirmation page to Appointment modal <type>', { continueOnFailure: true }, async function (type) {
  // NAME AND LAST NAME
  let error;
  const customerNameAppHQ = gaugeStore.get('customerNameAppHQ');
  const customerSurnameAppHQ = gaugeStore.get('customerSurnameAppHQ');
  const phoneNumberAppHQ = gaugeStore.get('phoneNumberAppHQ');
  if (type === 'test') {
    if (fullNameExceptionList.includes(CommonData.SDLOCALEID)) {
      await assert.ok(oabHelp.compareUserNameMerged(customerNameAppHQ, customerSurnameAppHQ, CommonData.SDFULLNAMETEST));
    } else {
      await assert.ok(
        oabHelp.compareUserNameSeparate(customerNameAppHQ, CommonData.SDFIRSTNAMETEST, customerSurnameAppHQ, CommonData.SDLASTNAMETEST)
      );
    }
  } else {
    if (fullNameExceptionList.includes(CommonData.SDLOCALEID)) {
      await assert.ok(oabHelp.compareUserNameMerged(customerNameAppHQ, customerSurnameAppHQ, CommonData.SDFULLNAME));
    } else {
      await assert.ok(oabHelp.compareUserNameSeparate(customerNameAppHQ, CommonData.SDFIRSTNAME, customerSurnameAppHQ, CommonData.SDLASTNAME));
    }
  }
  // PHONE // TO DO add comparison of country code (add one to csv)
  const phoneCheck = oabHelp.compareVal(phoneNumberAppHQ, CommonData.SDPHONE, 'Phone AppHQ', 'Phone Test Data');
  if (!phoneCheck) {
    const phoneCheck2 = oabHelp.compareVal(phoneNumberAppHQ, valueOfPhoneInput, 'Phone AppHQ', 'Phone input value');
    if (!phoneCheck2) {
      error = oabHelp.composeError(error, oabHelp.messages.phoneIsNotSame);
    }
  }
  // CPF
  if (CommonData.SDLOCALEID === 'BR') {
    const cpfNumberAppHQ = gaugeStore.get('cpfNumberAppHQ');
    const cpfCheck = oabHelp.compareVal(cpfNumberAppHQ, cpfUser, 'CPF AppHQ', 'CPF Test Data');
    if (!cpfCheck) {
      error = oabHelp.composeError(error, oabHelp.messages.cpfNotSame);
    }
  }
  if (error) {
    assert(!matchCondition, error);
  }
});

step(
  'OAB AppHQ Assert selected service details from Confirmation page to Appointment modal <type>',
  { continueOnFailure: true },
  async function (type) {
    let error;
    // Service name
    const searchServiceAppHQ = gaugeStore.get('searchServiceAppHQ');
    const servicesCheck = oabHelp.compareVal(searchServiceAppHQ, confirmationServiceName, 'Service AppHQ', 'Service Cofnirmation');
    const serviceNameSecondLang = gaugeStore.get('serviceNameSecondLang');
    if (!servicesCheck && serviceNameSecondLang) {
      gauge.message('$Checking for second language.');
      const servicesDualCheck = oabHelp.compareVal(serviceNameSecondLang, confirmationServiceName, 'Service Lang AppHQ', 'Service Confirmation');
      if (!servicesDualCheck) {
        error = oabHelp.composeError(error, oabHelp.messages.serviceNameNotSame);
      }
    }

    // Zoom
    if (type === 'VOAB') {
      const zoomLinkAppHQ = gaugeStore.get('zoomLinkAppHQ');
      if (!oabHelp.trimAndLowerCase(confirmationZoomHref).includes(oabHelp.trimAndLowerCase(zoomLinkAppHQ))) {
        error = oabHelp.composeError(error, oabHelp.messages.zoomLinkNotSame);
      }
      gauge.message(`Zoom link from Confirmation page: ${confirmationZoomHref}`);
      gauge.message(`Zoom link in AppHQ: ${zoomLinkAppHQ}`);
    }
    if (error) {
      assert(!matchCondition, error);
    }
    // TO DO Duration and price
  }
);

let apptHQServiceDurationText;
let apptHQServiceDurationTxt;
step(
  'OAB AppHQ Assert selected service details from Appointment modal to My Appointments <type>',
  { continueOnFailure: true },
  async function (type) {
    let error;
    const searchServiceAppHQ = gaugeStore.get('searchServiceAppHQ');
    if (myAppServiceName.length - searchServiceAppHQ.length === 1) {
      myAppServiceName = myAppServiceName.slice(0, myAppServiceName.length - 1);
    }
    // Name
    const servicesCheck = oabHelp.compareVal(searchServiceAppHQ, myAppServiceName, 'Service AppHQ', 'Service My App');
    if (!servicesCheck) {
      error = oabHelp.composeError(error, oabHelp.messages.serviceNameNotSame);
    }
    // Duration
    const durationsDigitCheck = oabHelp.compareVal(
      apptHQServiceDurationText, // TO DO rename
      myAppServiceDurationDigit,
      'Duration AppHQ',
      'Duration My App'
    );
    if (!durationsDigitCheck) {
      error = oabHelp.composeError(error, oabHelp.messages.serviceDurationNotSame);
    }
    const durationsTxtCheck = oabHelp.compareVal(apptHQServiceDurationTxt, myAppServiceDurationTxt, 'Duration AppHQ', 'Duration My App');
    if (!durationsTxtCheck) {
      error = oabHelp.composeError(error, oabHelp.messages.serviceDurationNotSame);
    }
    // Zoom
    if (type === 'VOAB') {
      const zoomLinkAppHQ = gaugeStore.get('zoomLinkAppHQ');
      if (!oabHelp.trimAndLowerCase(myAppVOABHref).includes(oabHelp.trimAndLowerCase(zoomLinkAppHQ))) {
        error = oabHelp.composeError(error, oabHelp.messages.zoomLinkNotSame);
      }
      gauge.message(`Zoom link from My Appointmetnse: ${myAppVOABHref}`);
      gauge.message(`Zoom link in AppHQ: ${zoomLinkAppHQ}`);
    }
    // TO DO price
    if (error) {
      assert(!matchCondition, error);
    }
  }
);
