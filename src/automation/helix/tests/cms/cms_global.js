var t = require('taiko');
let siteDefinition, source, NullDataException;
let Hengine = require('../../../../datainterface/providers/hengine');
const Helper = require('../../helpers/helper');
const Util = require('../../../../utilities/util');
//const taikoOverride = require('../../../helix_taiko');
var timeoutSetting = '';
var adminPageTitle = '';
var messagesStatus = '';
var scrollToEdit = '';
var cookieRejectButton = '';
var feedbackPopupClose = '';
var cmsPopupClose = '';
var homePageURL = '';
var cmsLoginUserName = '';
var cmsLoginPassword = '';
var cmsLoginButton = '';
var permissionsLink = '';
var content = '';
var pageLink = '';
var contentBlockLink = '';
var spprcisLink = '';
var cmsPageTemplate = '';
var cmsCBTemplate = '';
var cmsSPPRCISTemplate1 = '';
var cmsHtmlContent = '';
var description = '';
var addAnotherItem = '';
var cmsSPPRCISTemplate2 = '';
var spprcisTemplate = '';
var slot1CrossSellCheckBox = '';
var slot2NodeRefInput = '';
var slot3AvedaBannerCheckBox = '';
var lowerSlots = '';
var slot2Title = '';
var slot2Dropdown = '';
var slot3 = '';
var slot3Title = '';
var slot3Dropdown = '';
var slot3NodeRef = '';
var slot4Title = '';
var slot4Dropdown = '';
var brandName = '';
var provider = '';
var youtubeID = '';
var cmsSPPRCISTemplate3 = '';
var noderef = '';
var brand = '';
var explandAll = '';
var checkBoxId = '';
var checkBoxValue = '';
var productName = '';
var formatterTemplateLabel = '';
var cmsFormatterTemplate = '';
var scrollToBasicInfo = '';
var cmsEnterTitle = '';
var cmsEnterAnalytics = '';
var cmsSiteSection = '';
var urlAliasCheckBox = '';
var urlAliasTextfield = '';
var saveAndChangeWorkflowStatus = '';
var cmsEnterLogMessage = '';
var contentName = '';
var contentWorkflowURL = '';
var contentTitle = '';
var contentURL = '';
var urlAlias = '';
var consolidatedUrlAlias = '';
var cmsKeywordSearch = '';
var filter = '';
var cmsEnterRevisionTag = '';
var cmsCountryLanguage = '';
var cmschooseType = '';
var cmschooseWorkflowState = '';
var cmsCountryLanguageLocalize = '';
var cmsAddRevisionTag = '';
var cmsClickLocalizeButton = '';
var allRevisions = '';
var titleValue = '';
var countryValue = '';
var typeValue = '';
var workflowStateValue = '';
var nodeStatus = '';
var locSuccessMessage = '';
var localizedContentTitle = '';
var localizedIntoLocale1 = '';
var selectAll = '';
var cmsBulkOperations = '';
var update = '';
var next = '';
var cmsEnterbulkLogMessage = '';
var bulkPublishConfirmation = '';
var bulkUnpublishConfirmation = '';
var selectContent1 = '';
var selectContent2 = '';
var selectContent3 = '';
var selectContent4 = '';
var selectContent5 = '';
var selectMedia = '';
var selectImage = '';
var feImage = '';
var selectTemplateLibrary = '';
var previewSection = '';
var localizeLocal1 = '';
var localizeLocal2 = '';
var localizedContentT1 = '';
var localizedContentT2 = '';
var countryLanguageCA = '';
var countryLanguageDE = '';
var localizedIntoLocaleT1 = '';
var localizedIntoLocaleT2 = '';
var revTag = '';
var newRevTag = '';
var currentRevision = '';
var revisionDropdown = '';
var draftRevision1 = '';
var draftRevision2 = '';
var draftRevision3 = '';
var draftRevision4 = '';
var draftRevision5 = '';
var latestRevTagInList1 = '';
var latestRevTagInList2 = '';
var latestRevTagInList3 = '';
var latestRevTagInList4 = '';
var latestRevTagInList5 = '';
var autoLocalizeOption3 = '';
var autoLocalizeLink = '';
var runAutoLocalizeLink = '';
var autoLocSuccessMessage = '';
var autoLocalizeLocal1 = '';
var autoLocalizeLocal2 = '';
var autoLocalizationMessage = '';
var destinationNode = '';
var targetLocaleWorkflow = '';
var publishedRevision = '';
var latestContentInTable = '';
var clone = '';
var country1 = '';
var locale1 = '';
var selectedCountryName1 = '';
var cmsSelectLocalize = '';
var locale2 = '';
var selectedCountryName2 = '';
var country2 = '';
var localizeMessage = '';
var countryTitle = '';
var localizeButton = '';
var localizedToLocaleT1 = '';
var localizedToLocaleT2 = '';
var actualLocales = '';
var expectedLocales = '';
var localeValidation1 = '';
var localeValidation2 = '';
var nodeTitle = '';
var actualRevisionTag = '';
var successMessage = '';
var titleValidation = '';
var countryValidation = '';
var typeValidation = '';
var workflowStateValidation = '';
var nodeStatusField = '';
var localizeSuccessMessage = '';
var contentValidation = '';
var localeValidation = '';
var local1SuccessMessage = '';
var local2SuccessMessage = '';
var contentValidation1 = '';
var contentValidation2 = '';
var localFinalSuccessMessage = '';
var message = '';
var countryName1 = '';
var actualContent = '';
var local1 = '';
var local2 = '';
var baseURL = '';
var cmsAutolocEnabledKeywordSearch = '';
var cmsAutomaticLocalizationCountryFrom = '';
var cmsAutomaticLocalizationCountryTo = '';
var clickOnWorkflow = '';
var localizationStatusField = '';
var localizationStatus = '';
var logoutLink = '';
var mediaBrowserWindow = '';
var expectedAPIResponse = '';
var actualAPIResponse = '';
var apiResponseJSONLoc = '';
var strAliasval = '';
var selectedImage = '';
var cmsImageWindow = '';
var selectImage1 = '';
var pcTabletContent = '';
var basicInfoField1 = '';
var basicInfoField2 = '';
var basicInfoAnalyticsField = '';
var basicInfoTitleField = '';
var workflow = '';
var addToExport = '';
var translationExport = '';
var generateReport = '';
var fileToDownload = '';
var translationSuccessMessage = '';
var messagesStatus1 = '';

var CommonData = {};
var feature = 'CMS';

const messages = {
  stepNotApplicable: 'This step is not applicable for this Brand/Locale',
  popupNotApplicable:
    'FEEDBACK Popup Close is not applicable for this Brand/Locale',
  locSuccessMessage: 'Localization Success Message Is Correct',
  successMsgIncorrect: 'Success status message displayed is not correct',
  nodeStatusCorrect: 'Node Status Displayed Correctly',
  nodeStatusIncorrect: 'Node Status Displayed is not correct',
  nodeLocalized: 'Node is Localized to',
  nodeNotLocalized: 'Node is not Localized to',
  localesMatch: 'Expected and Actual locales are matching ',
  localesMismatch: 'Expected locales are not in the table. The table has ',
  feCorrectContent: 'Content displaying fine on FE ',
  feIncorrectContent: 'Content is not displaying on FE ',
  disableAutolocSuccessMessages: 'Localization Success Message Is Correct',
  autoLocalizationStatusEnable: 'Auto Localization Status Is Enabled',
  autoLocalizationStatusDisable: 'Auto Localization Status Is Disabled',
  localizationStatusmessage: 'Automatically Localizing',
  disableAutoLocalizationMessage:
    'Disabled Automatic Localization for 1 item(s).',
  cookieRejectButtonNotDispalyedSkipped:
    'Cookie RejectButton is not displayed and hence this step is skipped',
  cmsPopupNotApplicable:
    'CMS Popup Close is not applicable for this Brand/Locale',
  navigatedToDashboard: 'Navigated to Dashboard Admin Page Successfully',
  failedToNavigatedToDashboard: 'Failed to navigate to Dashboard Admin Page',
  navigatedToStructure: 'Navigated to Structure Admin Page Successfully',
  failedToNavigatedToStructure: 'Failed to navigate to Structure Admin Page',
  navigatedToAppearance: 'Navigated to Appearance Admin Page Successfully',
  failedToNavigatedToAppearance: 'Failed to navigate to Appearance Admin Page',
  navigatedToPeople: 'Navigated to People Admin Page Successfully',
  failedToNavigatedToPeople: 'Failed to navigate to People Admin Page',
  navigatedToModules: 'Navigated to Modules Admin Page Successfully',
  failedToNavigatedToModules: 'Failed to navigate to Modules Admin Page',
  navigatedToModules: 'Navigated to Modules Admin Page Successfully',
  failedToNavigatedToModules: 'Failed to navigate to Modules Admin Page',
  navigatedToConfiguration:
    'Navigated to Configuration Admin Page Successfully',
  failedToNavigatedToConfiguration:
    'Failed to navigate to Configuration Admin Page',
  navigatedToPermissions:
    'Navigated to People - Permissions Admin Page Successfully',
  failedToNavigatedToPermissions:
    'Failed to navigate to People - Permissions Admin Page',
  navigatedToSites: 'Navigated to Sites Admin Page Successfully',
  failedToNavigatedToSites: 'Failed to navigate to Sites Admin Page',
  navigatedToReports: 'Navigated to Reports Admin Page Successfully',
  failedToNavigatedToReports: 'Failed to navigate to Reports Admin Page',
  navigatedToAddContent: 'Navigated to Add Content Admin Page Successfully',
  failedToNavigatedToAddContent: 'Failed to navigate to Add Content Admin Page',
  navigatedToAddPage: 'Navigated to Add Page Admin Page Successfully',
  failedToNavigatedToAddPage: 'Navigated to Add Page Admin Page Successfully',
  navigatedToAddCB: 'Navigated to Add CB Admin Page Successfully',
  navigatedToPDPSPP:
    'Navigated to Add PDP(SPP) related content Item Set Admin Page Successfully',
  productSelected: 'selected the product ',
  productNotSelected: 'Not able to select the product',
  autoAliasChecked: 'Generate Automatic URL alias checkbox is checked',
  autoAliasNotChecked: 'Generate Automatic URL alias checkbox is not checked',
  navigatedToCustomUrlAlias: 'Navigated to correct custom URL Alias',
  failedToNavigatedToCustomUrlAlias: 'Failed to navigate to custom URL Alias',
  navigatedToPageAutoUrlAlias: 'Navigated to content page with Auto URL Alias',
  failedToNavigatedToAutoUrlAlias: 'Failed to navigate to Auto URL Alias',
  navigatedToSPP: 'Navigated to SPP Page successfully',
  contentRCIS: 'RCIS Content displaying fine on SPP',
  navigatedToFindContent: 'Navigated to Find Content Admin Page Successfully',
  failedToNavigatedToFindContent:
    'Failed to navigate to Find Content Admin Page',
  localizeFrequencyClicked:
    'Clicked on Next when we have localization Frequency section',
  keywordSearch: 'Keyword search validation is working fine',
  countryLanguage: 'Country Language validation is working fine',
  typeValidation: 'Type validation is working fine',
  workflowstateValidation: 'Workflowstate validation is working fine',
  draftSuccess: 'Draft Success Message is displaying',
  updateSuccess: 'Update Success Message is displaying',
  approveSuccess: 'Approve Success Message is displaying',
  publishSuccess: 'Published Success Message is displaying',
  unpublishSuccess: 'unpublished Success Message is displaying',
  contentValidated: 'Content Name is validated',
  incorrectContent: 'Incorrect content',
  correctLocale: 'Locale is validated',
  incorrectLocale: 'Incorrect locale',
  bulkPublishmsg: 'CMSBULKPUBLISH message is displayed fine',
  bulkUnpublishmsg: 'CMSBULKUNPUBLISH message is displayed fine',
  bulkApprovemsg: 'CMSBULKAPPROVE message is displayed fine',
  bulkUnapprovemsg: 'CMSBULKUNAPPROVE message is displayed fine',
  imageDisplayed: 'Image displaying fine on FE',
  imageNotdisplayed: 'Image is not displaying on FE',
  navToTemplatePage: 'Templates landing Page is displaying fine',
  failedToTemplatePage: 'Failed to navigate to Template landing page',
  actualContentSame: 'Actual content is same as expected content ',
  actualContentNotSame: 'Actual content is not same as expected content ',
  nodeNotfound: 'Node not found',
  newCotentDisplayed: 'New Content displaying fine on FE ',
  newCotentNotDisplayed: 'New Content is not displaying on FE ',
  incorrectSuccessMsg: 'Incorrect Success Message',
  newRevisionPublished: 'New Revision is published ',
  newRevisionNotPublished: 'New Revision is not published ',
  clonedContent: 'It is a cloned content',
  notClonedContent: 'It is not a cloned content',
  selectedCountry1: 'Selected Country 1 is',
  selectedCountry2: 'Selected Country 2 is',
  selectedNodesLocalized: 'Selected Nodes are Localized to correct Local',
  selectedNodesNotLocalized: 'Selected Nodes are not Localized to Local',
  countryCorrect: 'Country Name is displaying correctly in table',
  countryNotCorrect: 'Country Name displayed is not correct in table',
  correctLocalizeMsg: 'Localize message displaying correctly',
  nodesLocalizetoLoc1: 'Selected Nodes are Localized to Local one',
  nodesNotLocalizetoLoc1: 'Selected Nodes are not Localized to Local one',
  nodesLocalizetoLoc2: 'Selected Nodes are Localized to Local two',
  nodesNotLocalizetoLoc2: 'Selected Nodes are not Localized to Local two',
  nodesLocalized: 'Selected Nodes are Localized Correctly',
  nodesNotLocalized: 'Selected Nodes are not Localized',
  apiTitle: 'Title Matched',
  apiTitleMismatch: 'Title Not Matched',
  differenceExpected: 'Difference are Expected',
  differencesNotExpected: 'Difference are Not Expected',
  localizedCorrectImage: 'Both Images are Equal',
  localizedInCorrectImage: 'Both Images are not Equal',
  selectMediaClicked: 'Select Media is clicked',
  cmsTranslationsSuccessMessage:
    'Your translation export should start downloading automatically.',
};

const matchCondition = true;
assert = require('assert');

// Setting Revision Tag
function setRevisionTagName() {
  let strValues = 'abcd12345';
  let strRevisionTag = 'Test Content ';
  let strTmp;
  for (let i = 0; i < 10; i++) {
    strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
    strRevisionTag = strRevisionTag + strTmp;
  }
  return strRevisionTag;
}

// Setting title and Analytics in basic info tab
function setTitleAnalyticsTag() {
  let strValues = 'abcd12345';
  let strTitleAnalytics = 'Test Content';
  let strTmp;
  for (let i = 0; i < 10; i++) {
    strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
    strTitleAnalytics = strTitleAnalytics + strTmp;
  }
  return strTitleAnalytics;
}

function setCustomAlias() {
  let stralias = 'alias12';
  let strTitleAlias = 'Test';
  let strTmp1;
  for (let i = 0; i < 10; i++) {
    strTmp1 = stralias.charAt(Math.round(stralias.length * Math.random()));
    strTitleAlias = strTitleAlias + strTmp1;
  }
  return strTitleAlias;
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
  //reinitialize();

  // Delete all the cookies
  await t.deleteCookies();

  gauge.message('ENVIRONMENT : ' + siteDefinition.executionContext.environment);
}

//Compare function for API Validation Scenario.

function compareObjects(obj1, obj2) {
  expectedAPIResponse = Object.keys(obj1);
  actualAPIResponse = Object.keys(obj2);

  console.log('Keys: ', expectedAPIResponse);

  expectedAPIResponse.forEach((key) => {
    if (obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
      gauge.message("Expected Value for key '" + key + "': " + obj1[key]);
      gauge.message("Actual Value for key '" + key + "': " + obj2[key]);
    } else {
      gauge.message("Difference are '" + key + "': " + obj1[key]);
      gauge.message("Difference are '" + key + "': " + obj2[key]);
      let expectedDifferenceValue1 = obj1[key];
      let expectedDifferenceValue2 = obj2[key];
      let actualDifferenceValue1 = CommonData.actualData1;
      let actualDifferenceValue2 = CommonData.actualData2;
      let actualDifferenceValue3 = CommonData.actualData3;
      let actualDifferenceValue4 = CommonData.actualData4;
      if (
        (expectedDifferenceValue1 === actualDifferenceValue1 ||
          actualDifferenceValue3) &&
        (expectedDifferenceValue2 === actualDifferenceValue2 ||
          actualDifferenceValue4)
      ) {
        assert(matchCondition);
        gauge.message(messages.differenceExpected);
      } else {
        gauge.message(messages.differencesNotExpected);
        assert(!matchCondition);
      }
    }
  });
}

// CMS STEPS

step(
  'CMS Configuring the prerequisites like set cookies, revision tag',
  async function () {
    await t.setConfig({ navigationTimeout: parseInt(timeoutSetting, 10) });
    await Helper.setWindowSize(Util.ScreenSizes['1040p'], t);
    await Helper.setWAFCookie(siteDefinition, t);
    await Helper.setAdroll(siteDefinition, t);
    await Helper.setAkamaiBypass(siteDefinition, t);
    await Helper.setApiEnv(siteDefinition, t);
    await Helper.getPerlgemEnvCookie(siteDefinition, t);
    await Helper.setOtherCookies(siteDefinition, t);
    await Helper.setRevisionTag(siteDefinition, t);
  }
);

step('CMS Initialize Helix', async function () {
  // Initialize the selectors from DB
  await initFrameworkSettings();
});

step('CMS Open CMS Website', async function () {
  await t.setConfig({ navigationTimeout: parseInt(timeoutSetting, 10) });
  //await t.goto(Helper.getBaseUrl(stageUrl)), { waitForEvents: ['DOMContentLoaded'] };
  await t.goto(siteDefinition.executionContext.url),
    { waitForEvents: ['DOMContentLoaded'] };
  await t.resizeWindow({ width: 1920, height: 1040 });
  gauge.screenshot();
});

// If cart popup's id is defined wait and do the popup close
step('CMS CookieRejectButton', async function () {
  if (cookieRejectButton !== '') {
    /** CookieRejectButton is applicable for few Brand/Locale/platform(PC/MOB) */
    try {
      await t.click(await t.$(cookieRejectButton));
    } catch (e) {
      gauge.message(messages.cookieRejectButtonNotDispalyedSkipped);
    }
  } else {
    console.log(messages.stepNotApplicable);
  }
});

// If FEEDBACK popup's id is defined wait and do the popup close
step('CMS FEEDBACK Popup Close', async function () {
  if (feedbackPopupClose !== '') {
    /** Cart Popup Close is applicable for few Brand/Locale/platform(PC/MOB) */
    try {
      await t.evaluate(await t.$(feedbackPopupClose), (ele) => {
        ele.focus();
        ele.click();
      });
    } catch (e) {
      gauge.message(messages.popupNotApplicable);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

// If CMS popup's id is defined wait and do the popup close
step('CMS Popup Close', async function () {
  if (cmsPopupClose !== '') {
    /** Cart Popup Close is applicable for few Brand/Locale/platform(PC/MOB) */
    try {
      await t.click(await t.$(cmsPopupClose), { waitForNavigation: false });
    } catch (e) {
      gauge.message(messages.cmsPopupNotApplicable);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('CMS Login to CMS as a test User', async function () {
  homePageURL = await t.currentURL();
  await t.goto(
    siteDefinition.executionContext.url + CommonData.cmsUrlExtension,
    { waitForEvents: ['DOMContentLoaded'] }
  );
  gauge.screenshot();
});

step('CMS Login User Name', async function () {
  if (cmsLoginUserName !== '') {
    await t.write(
      CommonData.cmsUserName,
      t.into(t.textBox({ id: cmsLoginUserName }))
    );
  }
});

step('CMS Login Password', async function () {
  if (cmsLoginPassword !== '') {
    await t.write(
      CommonData.cmsPwd,
      t.into(t.textBox({ id: cmsLoginPassword }))
    );
  }
});

step('CMS Login Button', async function () {
  if (cmsLoginButton !== '') {
    await t.evaluate(await t.$(cmsLoginButton), (ele) => {
      ele.focus();
      ele.click();
    });
    if (
      (await (await t.$(adminPageTitle)).text()) === CommonData.cmsDashboard
    ) {
      assert(matchCondition);
      gauge.message(messages.navigatedToDashboard);
    } else {
      gauge.message(messages.failedToNavigatedToDashboard);
      assert(!matchCondition);
    }
  }
});

step('CMS STRUCTURE', async function () {
  await t.click(CommonData.cmsStructure);
  if ((await (await t.$(adminPageTitle)).text()) === CommonData.cmsStructure) {
    assert(matchCondition);
    gauge.message(messages.navigatedToStructure);
  } else {
    gauge.message(messages.failedToNavigatedToStructure);
    assert(!matchCondition);
  }
});

step('CMS APPEARANCE', async function () {
  await t.click(CommonData.cmsAppearance);
  if ((await (await t.$(adminPageTitle)).text()) === CommonData.cmsAppearance) {
    assert(matchCondition);
    gauge.message(messages.navigatedToAppearance);
  } else {
    gauge.message(messages.failedToNavigatedToAppearance);
    assert(!matchCondition);
  }
});

step('CMS PEOPLE', async function () {
  await t.click(CommonData.cmsPeople);
  if ((await (await t.$(adminPageTitle)).text()) === CommonData.cmsPeople) {
    assert(matchCondition);
    gauge.message(messages.navigatedToPeople);
  } else {
    gauge.message(messages.failedToNavigatedToPeople);
    assert(!matchCondition);
  }
});

step('CMS MODULES', async function () {
  await t.click(CommonData.cmsModules);
  if ((await (await t.$(adminPageTitle)).text()) === CommonData.cmsModules) {
    assert(matchCondition);
    gauge.message(messages.navigatedToModules);
  } else {
    assert(!matchCondition);
    gauge.message(messages.failedToNavigatedToModules);
  }
});

step('CMS CONFIGURATION', async function () {
  await t.click(CommonData.cmsConfiguration);
  if (
    (await (await t.$(adminPageTitle)).text()) === CommonData.cmsConfiguration
  ) {
    assert(matchCondition);
    gauge.message(messages.navigatedToConfiguration);
  } else {
    gauge.message(messages.failedToNavigatedToConfiguration);
    assert(!matchCondition);
  }
});

step('CMS PERMISSIONS', async function () {
  if (await (await t.$(permissionsLink)).exists()) {
    await t.click(await t.$(permissionsLink));
    /** Cart Popup Close is applicable for few Brand/Locale/platform(PC/MOB) */
    if ((await (await t.$(adminPageTitle)).text()) === CommonData.cmsPeople) {
      assert(matchCondition);
      gauge.message(messages.navigatedToPermissions);
    } else {
      gauge.message(messages.failedToNavigatedToPermissions);
      assert(!matchCondition);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('CMS SITES', async function () {
  await t.click(CommonData.cmsSites);
  if ((await (await t.$(adminPageTitle)).text()) === CommonData.cmsSites) {
    assert(matchCondition);
    gauge.message(messages.navigatedToSites);
  } else {
    gauge.message(messages.failedToNavigatedToSites);
    assert(!matchCondition);
  }
});

step('CMS REPORTS', async function () {
  await t.click(CommonData.cmsReports);
  if ((await (await t.$(adminPageTitle)).text()) === CommonData.cmsReports) {
    assert(matchCondition);
    gauge.message(messages.navigatedToReports);
  } else {
    gauge.message(messages.failedToNavigatedToReports);
    assert(!matchCondition);
  }
});

step('CMS ADD CONTENT', async function () {
  await t.click(CommonData.cmsAddContent);
  if ((await (await t.$(adminPageTitle)).text()) === CommonData.cmsAddContent) {
    assert(matchCondition);
    gauge.message(messages.navigatedToAddContent);
  } else {
    gauge.message(messages.failedToNavigatedToAddContent);
    assert(!matchCondition);
  }
});

step('CMS CLICK PAGE', async function () {
  await t.evaluate(await t.$(pageLink), (ele) => {
    ele.focus();
    ele.click();
  });
  content = await (await t.$(adminPageTitle)).text();
  gauge.message(messages.navigatedToAddPage);
});

step('CMS CLICK CONTENTBLOCK', async function () {
  await t.evaluate(await t.$(contentBlockLink), (ele) => {
    ele.focus();
    ele.click();
  });
  content = await (await t.$(adminPageTitle)).text();
  gauge.message(messages.navigatedToAddCB);
});

step('CMS CLICK SPPRCIS', async function () {
  await t.evaluate(await t.$(spprcisLink), (ele) => {
    ele.focus();
    ele.click();
  });
  content = await (await t.$(adminPageTitle)).text();
  gauge.message(messages.navigatedToPDPSPP);
});

step('CMS EXPAND TO ADD NEW ITEM', async function () {
  await t.click(CommonData.cmsExpandToAddNewItem);
});

step('CMS SELECT LAYOUT TEMPLATE1', async function () {
  if ((await (await t.$(adminPageTitle)).text()) === CommonData.cmsCreatePage) {
    await t
      .dropDown({ id: cmsPageTemplate })
      .select(CommonData.cmsSelectLayoutTempalte);
    gauge.screenshot();
  }
  if ((await (await t.$(adminPageTitle)).text()) === CommonData.cmsCreateCB) {
    await t
      .dropDown({ id: cmsCBTemplate })
      .select(CommonData.cmsSelectLayoutTempalte);
    gauge.screenshot();
  }
  if (
    (await (await t.$(adminPageTitle)).text()) === CommonData.cmsCreateSpprcis
  ) {
    await t
      .dropDown({ id: cmsSPPRCISTemplate1 })
      .select(CommonData.cmsSpprcisLayoutTempalte1);
    gauge.screenshot();
  }
});

step('CMS Enter HTML Content', async function () {
  await t.click(await t.$(cmsHtmlContent));
  await t.write(CommonData.cmsHtmlContentt);
  gauge.screenshot();
});

step('CMS ENTER SOME TEXT IN DESCRIPTION', async function () {
  await t
    .dropDown({ id: cmsTextFormat })
    .select(CommonData.cmsSelectTextFormat);
  gauge.screenshot();
  await t.click(await t.$(description));
  await t.write(CommonData.cmsDescription);
  gauge.screenshot();
  //await t.scrollDown(1000);
});

step('CMS CLICK ADD ANOTHER ITEM', async function () {
  await t.click(await t.$(addAnotherItem));
});

step('CMS SELECT LAYOUT TEMPLATE2', async function () {
  await t
    .dropDown({ id: cmsSPPRCISTemplate2 })
    .select(CommonData.cmsSpprcisLayoutTempalte2);
  gauge.screenshot();
});

step('CMS POPULATE LOWER SLOTS', async function () {
  brand = await (await t.$(brandName)).text();
  if (brand.includes(CommonData.kilianBrand)) {
    await t.dropDown({ id: provider }).select(CommonData.cmsYouTube);
    await t.evaluate(await t.$(youtubeID), (ele) => {
      ele.focus();
      ele.click();
    });
    await t.write(CommonData.cmsYouTubeId);
    await t.click(await t.$(addAnotherItem));
    //await t.scrollUp(200);
    await t.click(CommonData.cmsExpandToAddNewItem);
    await t
      .dropDown({ id: cmsSPPRCISTemplate3 })
      .select(CommonData.cmsSpprcisLayoutTempalte3);
    await t.click(await t.$(noderef));
    await t.write(CommonData.cmsNodeRefInput);
    gauge.screenshot();
  } else if (
    (await (await t.$(spprcisTemplate)).text()) ===
      CommonData.cmsMacSpprcisTemplate.toUpperCase() ||
    (await (await t.$(spprcisTemplate)).text()) ===
      CommonData.cmsAvedaSpprcisTemplate.toUpperCase()
  ) {
    await t.evaluate(await t.$(slot1CrossSellCheckBox), (ele) => {
      ele.focus();
      ele.click();
    });
    await t.scrollTo(await t.$(slot2NodeRefInput));
    await t.evaluate(await t.$(slot2NodeRefInput), (ele) => {
      ele.focus();
      ele.click();
    });
    gauge.screenshot();
  } else if (brand.includes(CommonData.FMBrand)) {
    await t.click(await t.$(addAnotherItem));
    await t.click(CommonData.cmsExpandToAddNewItem);
    await t
      .dropDown({ id: cmsSPPRCISTemplate3 })
      .select(CommonData.cmsSpprcisLayoutTempalte3);
    await t.click(await t.$(slot3NodeRef));
    await t.write(CommonData.cmsLowerSlotContent);
  } else if (
    (await (await t.$(spprcisTemplate)).text()) ===
    CommonData.cmsStardustSpprcisTemplate.toUpperCase()
  ) {
    await t.scrollTo(await t.$(lowerSlots));
    await t.click(await t.$(slot2Title));
    await t.write(CommonData.cmsSlot2Title);
    await t
      .dropDown({ id: slot2Dropdown })
      .select(CommonData.cmsLowerSlotCrosssell);
    await t.scrollTo(await t.$(slot3));
    await t.click(await t.$(slot3Title));
    await t.write(CommonData.cmsSlot3Title);
    await t
      .dropDown({ id: slot3Dropdown })
      .select(CommonData.cmsLowerSlotNoderef);
    await t.click(await t.$(slot3NodeRef));
    await t.write(CommonData.cmsLowerSlotContent);
    await t.click(await t.$(slot4Title));
    await t.write(CommonData.cmsSlot4Title);
    await t.dropDown({ id: slot4Dropdown }).select(CommonData.cmsLowerSlotugc);
  }
});

step('CMS SELECT PRODUCT FROM PRODUCTTREE', async function () {
  await t.evaluate(await t.$(explandAll), (ele) => {
    ele.focus();
    ele.click();
  });
  productName = await (await t.$(checkBoxValue)).text();
  await t.scrollTo(await t.$(checkBoxValue));
  await t.highlight(await t.$(checkBoxId));
  if ((await t.$(checkBoxId)).exists()) {
    await t.evaluate(await t.$(checkBoxId), (ele) => {
      ele.focus();
      ele.click();
    });
    assert(matchCondition);
    gauge.message(messages.productSelected + productName);
    gauge.screenshot();
  } else {
    gauge.message(messages.productNotSelected + productName);
    assert(!matchCondition);
  }
});

step('CMS SELECT FORMATTER TEMPLATE', async function () {
  if (
    brand.includes(CommonData.kilianBrand) ||
    brand.includes(CommonData.FMBrand)
  ) {
    gauge.message(messages.stepNotApplicable);
  } else if (
    (await (await t.$(spprcisTemplate)).text()) ===
    CommonData.cmsStardustSpprcisTemplate.toUpperCase()
  ) {
    await t.scrollTo(await t.$(formatterTemplateLabel));
    await t
      .dropDown({ id: cmsFormatterTemplate })
      .select(CommonData.cmsSelectFormatterTempalte);
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('CMS CLICK BASIC INFO', async function () {
  await t.evaluate(await t.$(scrollToBasicInfo), (ele) => {
    ele.focus();
    ele.click();
  });
  await t.waitFor(5000);
  gauge.screenshot();
});

step('CMS ENTER TITLE', async function () {
  await t.waitFor(5000);
  await t.write(
    setTitleAnalyticsTag(),
    t.into(t.textBox({ id: cmsEnterTitle }))
  );
});

step('CMS REENTER TITLE ANALYTICS', async function () {
  await t.clear(t.textBox({ id: cmsEnterTitle }));
  await t.click(t.textBox({ id: cmsEnterTitle }));
  await t.waitFor(5000);
  await t.write(
    setTitleAnalyticsTag(),
    t.into(t.textBox({ id: cmsEnterTitle }))
  );
  await t.clear(t.textBox({ id: cmsEnterAnalytics }));
  await t.click(t.textBox({ id: cmsEnterAnalytics }));
  await t.write(
    setTitleAnalyticsTag(),
    t.into(t.textBox({ id: cmsEnterAnalytics }))
  );
});

step('CMS ENTER ANALYTICS', async function () {
  await t.waitFor(5000);
  await t.write(
    setTitleAnalyticsTag(),
    t.into(t.textBox({ id: cmsEnterAnalytics }))
  );
});

step('CMS SELECT SITE SECTION', async function () {
  await t.waitFor(5000);
  await t
    .dropDown({ id: cmsSiteSection })
    .select(CommonData.cmsSelectSiteSection);
  gauge.screenshot();
});

step('CMS CHECK AUTO URL ALIAS CHECKBOX', async function () {
  if (await t.checkBox('Generate automatic URL alias').isChecked()) {
    gauge.message(messages.autoAliasChecked);
  } else {
    gauge.message(messages.autoAliasNotChecked);
    await t.click(t.$(urlAliasCheckBox));
  }
});

step('CMS ENTER CUSTOM URL ALIAS', async function () {
  await t.click(await t.$(urlAliasCheckBox));
  await t.click(await t.$(urlAliasTextfield));
  //await t.write(CommonData.cmsCustomUrlAlias);
  await t.write(setCustomAlias(), t.into(t.$(urlAliasTextfield)));
  gauge.screenshot();
  strAliasval = await (await t.$(urlAliasTextfield)).text();
});

step('CMS SAVE & CHANGE WORK FLOW STATUS', async function () {
  await t.evaluate(await t.$(saveAndChangeWorkflowStatus), (ele) => {
    ele.focus();
    ele.click();
  });
  await (await t.$(messagesStatus)).exists(500, 30000);
  await t.evaluate(await t.$(messagesStatus), (ele) => ele.highlight());
  successMessage = await (await t.$(messagesStatus)).text();
  gauge.message(successMessage);
  gauge.screenshot();
});

step(
  'CMS CLICK WORKFLOW <workflowstatevalue>',
  async function (workflowstatevalue) {
    if (workflowstatevalue === CommonData.cmsWorkflowEdit) {
      await t.evaluate(await t.$(scrollToEdit), (ele) => {
        ele.focus();
        ele.click();
      });
    } else if (workflowstatevalue === CommonData.cmsClickApprove) {
      await t.click(CommonData.cmsClickApprove);
    } else if (workflowstatevalue === CommonData.cmsClickUnapprove) {
      await t.click(CommonData.cmsClickUnapprove);
    } else if (workflowstatevalue === CommonData.cmsClickPublish) {
      await t.click(CommonData.cmsClickPublish);
    } else if (workflowstatevalue === CommonData.cmsClickUnpublish) {
      await t.click(CommonData.cmsClickUnpublish);
    } else if (workflowstatevalue === CommonData.cmsClickRepublish) {
      await t.click(CommonData.cmsClickRepublish);
    }
    gauge.screenshot();
  }
);

step('CMS ENTER LOG MESSAGE', async function () {
  await t.write(
    CommonData.cmsEnterLogMessagee,
    t.into(t.textBox({ id: cmsEnterLogMessage }))
  );
  gauge.screenshot();
});

step('CMS CLICK UPDATE STATE', async function () {
  await t.click(CommonData.cmsClickUpdateState);
  gauge.screenshot();
});

step('CMS CLICK YES PUBLISH THIS CONTENT', async function () {
  await t.click(CommonData.cmsClickYesPublishthiscontent);
  gauge.screenshot();
  contentName = await (await t.$(contentTitle)).text();
  gauge.message(contentName);
  contentWorkflowURL = await t.currentURL();
});

step('CMS CLICK ON TITLE TO NAVIGATE TO FRONTEND', async function () {
  await t.evaluate(await t.$(contentTitle), (ele) => {
    ele.focus();
    ele.click();
  });
  contentURL = await t.currentURL();
  //await t.reload(contentURL);
  gauge.screenshot();
});

step('CMS VALIDATE CUSTOM URL ALIAS', async function () {
  urlAlias = strAliasval;
  gauge.message(urlAlias);
  consolidatedUrlAlias = urlAlias.replace(' ', '-');
  gauge.message(consolidatedUrlAlias);
  if (contentURL.includes(homePageURL + consolidatedUrlAlias)) {
    assert(matchCondition);
    gauge.message(messages.navigatedToCustomUrlAlias);
  } else {
    gauge.message(messages.failedToNavigatedToCustomUrlAlias);
    assert(!matchCondition);
  }
});

step('CMS VALIDATE AUTO URL ALIAS', async function () {
  urlAlias = contentName.toLowerCase();
  gauge.message(urlAlias);
  consolidatedUrlAlias = urlAlias.replace(' ', '-');
  gauge.message(consolidatedUrlAlias);
  if (contentURL.includes(homePageURL + consolidatedUrlAlias)) {
    assert(matchCondition);
    gauge.message(messages.navigatedToPageAutoUrlAlias);
  } else {
    gauge.message(messages.failedToNavigatedToAutoUrlAlias);
    assert(!matchCondition);
  }
});

step('CMS VALIDATE CONTENT ON FRONTEND', async function () {
  if (await t.text(CommonData.cmsHtmlContentt).exists()) {
    await t.highlight(t.text(CommonData.cmsHtmlContentt));
    gauge.message(messages.feCorrectContent);
    gauge.screenshot();
  } else if (await t.text(CommonData.cmsDescription).exists()) {
    await t.highlight(t.text(CommonData.cmsDescription));
    gauge.message(messages.feCorrectContent);
    gauge.screenshot();
  } else {
    gauge.message(messages.feIncorrectContent);
  }
});

step('CMS NAVIGATE TO SPP', async function () {
  await t.goto(homePageURL + CommonData.sppUrl, {
    waitForEvents: ['DOMContentLoaded'],
  });
  gauge.message(messages.navigatedToSPP);
  await t.text(CommonData.cmsDescription).exists();
  await t.highlight(t.text(CommonData.cmsDescription));
  gauge.message(messages.contentRCIS);
  gauge.screenshot();
  //await t.scrollDown(1000);
  gauge.screenshot();
});

step('CMS LOGOUT FROM CMS', async function () {
  await t.click(await t.$(logoutLink));
  await t.reload(await t.currentURL());
  gauge.screenshot();
});

step('CMS LAUNCH CONTENT AS AN ANONYMOUS USER', async function () {
  await t.goto(contentURL, { waitForEvents: ['DOMContentLoaded'] });
  try {
    await t.evaluate(await t.$(feedbackPopupClose), (ele) => {
      ele.focus();
      ele.click();
    });
  } catch (e) {
    gauge.message(messages.popupNotApplicable);
  }
  if (
    content.includes(CommonData.cmsCreatePage) ||
    content.includes(CommonData.cmsCreateCB)
  ) {
    await t.highlight(t.text(CommonData.cmsHtmlContentt));
    gauge.message(messages.feCorrectContent);
    gauge.screenshot();
  } else if (content.includes(CommonData.cmsCreateSpprcis)) {
    await t.highlight(t.text(CommonData.cmsDescription));
    gauge.message(messages.feCorrectContent);
    gauge.screenshot();
  } else {
    gauge.message(messages.feIncorrectContent);
  }
});

step('CMS NAVIGATE TO SPP AS AN ANONYMOUS USER', async function () {
  await t.goto(homePageURL + CommonData.sppUrl, {
    waitForEvents: ['DOMContentLoaded'],
  });
  gauge.message(messages.navigatedToSPP);
  try {
    await t.evaluate(await t.$(feedbackPopupClose), (ele) => {
      ele.focus();
      ele.click();
    });
  } catch (e) {
    gauge.message(messages.popupNotApplicable);
  }
  await t.text(CommonData.cmsDescription).exists();
  await t.highlight(t.text(CommonData.cmsDescription));
  gauge.message(messages.contentRCIS);
  gauge.screenshot();
  gauge.screenshot();
});

step('CMS CLICK HOME ICON', async function () {
  await t.click(await t.$(CommonData.cmsClickHomeIcon));
  gauge.screenshot();
});

step('CMS FIND CONTENT', async function () {
  await t.click(CommonData.cmsFindContent);
  if (
    (await (await t.$(adminPageTitle)).text()) ===
    CommonData.cmsFindContentTitle
  ) {
    assert(matchCondition);
    gauge.message(messages.navigatedToFindContent);
  } else {
    gauge.message(messages.failedToNavigatedToFindContent);
    assert(!matchCondition);
  }
});

step('CMS KEYWORD SEARCH', async function () {
  await t.write(
    CommonData.cmsKeywordSearch,
    t.into(t.textBox(cmsKeywordSearch))
  );
  gauge.screenshot();
});

step('CMS CLICK FILTER', async function () {
  await t.evaluate(await t.$(filter), (ele) => {
    ele.focus();
    ele.click();
  });
  gauge.screenshot();
});

step('CMS CLICK NEW DRAFT', async function () {
  await t.click(CommonData.cmsClickNewDraft);
  gauge.screenshot();
});

step('CMS ENTER REVISION TAG', async function () {
  await t.write(setRevisionTagName(), t.into(t.textBox(cmsEnterRevisionTag)));
  gauge.screenshot();
});

step('CMS ENTER REVISION TAG TO LOCALIZE CONTENT', async function () {
  await t.write(setRevisionTagName(), t.into(t.textBox(cmsEnterRevisionTag)));
  gauge.screenshot();
  brand = await (await t.$(brandName)).text();
  if (brand.includes(CommonData.localizationFrequency)) {
    await t.evaluate(await t.$(next), (ele) => ele.highlight());
    await t.click(await t.$(next));
    gauge.screenshot();
    gauge.message(messages.localizeFrequencyClicked);
  }
});

step('CMS COUNTRY LANGUAGE', async function () {
  await t
    .dropDown({ id: cmsCountryLanguage })
    .select(CommonData.countryLanguage);
  gauge.screenshot();
});

step('CMS CHOOSE TYPE', async function () {
  await t.dropDown({ id: cmsChooseType }).select(CommonData.chooseType);
  gauge.screenshot();
});

step('CMS CHOOSE CONTENT BLOCK TYPE', async function () {
  await t.dropDown({ id: cmsChooseType }).select(CommonData.chooseTypeCB);
  gauge.screenshot();
  await t.evaluate(await t.$(filter), (ele) => {
    ele.focus();
    ele.click();
  });
  gauge.screenshot();
});

step('CMS CHOOSE WORKFLOW STATE', async function () {
  await t
    .dropDown({ id: cmsChooseWorkflowState })
    .select(CommonData.chooseWorkflowState);
  gauge.screenshot();
});

step('CMS CLICK LOCALIZE TAB', async function () {
  await t.click(CommonData.cmsLocalizeLink);
  gauge.screenshot();
});

step('CMS SELECT COUNTRY LANGUAGE TO LOCALIZE FROM', async function () {
  await t
    .dropDown({ id: cmsCountryLanguageLocalize })
    .select(CommonData.countryLanguageLocalizeFrom);
  gauge.screenshot();
});

step('CMS SELECT 1 LOCALE TO LOCALIZE TO', async function () {
  await t.evaluate(await t.$(countryLanguageCA), (ele) => {
    ele.focus();
    ele.click();
  });
  gauge.screenshot();
});

step('CMS ADD REVISION TAG', async function () {
  await t.write(
    setRevisionTagName(),
    t.into(t.textBox({ id: cmsAddRevisionTag }))
  );
  gauge.screenshot();
});

step('CMS CLICK LOCALIZE BUTTON', async function () {
  if (cmsClickLocalizeButton !== '') {
    await t.evaluate(await t.$(cmsClickLocalizeButton), (ele) => {
      ele.focus();
      ele.click();
    });
  }
  gauge.screenshot();
});

step('CMS ALL REVISIONS', async function () {
  await t.evaluate(await t.$(allRevisions), (ele) => {
    ele.focus();
    ele.click();
  });
  gauge.screenshot();
});

step('CMS KEYWORD SEARCH VALIDATION', async function () {
  titleValidation = await (await t.$(titleValue)).text();
  if (titleValidation.includes(CommonData.cmsKeywordSearch)) {
    assert(matchCondition);
    gauge.message(messages.keywordSearch);
  } else {
    gauge.message('fail');
    assert(!matchCondition);
  }
});

step('CMS COUNTRY LANGUAGE VALIDATION', async function () {
  countryValidation = await (await t.$(countryValue)).text();
  if (CommonData.countryLanguage.includes(countryValidation)) {
    assert(matchCondition);
    gauge.message(messages.countryLanguage);
  } else {
    gauge.message('fail');
    assert(!matchCondition);
  }
});

step('CMS TYPE VALIDATION', async function () {
  typeValidation = await (await t.$(typeValue)).text();
  if (CommonData.chooseType.includes(typeValidation)) {
    assert(matchCondition);
    gauge.message(messages.typeValidation);
  } else {
    gauge.message('fail');
    assert(!matchCondition);
  }
});

step('CMS WORKFLOWSTATE VALIDATION', async function () {
  workflowStateValidation = await (await t.$(workflowStateValue)).text();
  if (CommonData.chooseWorkflowState.includes(workflowStateValidation)) {
    assert(matchCondition);
    gauge.message(messages.workflowstateValidation);
  } else {
    gauge.message('fail');
    assert(!matchCondition);
  }
});

step('CMS DRAFT SUCCESS MESSAGE', async function () {
  if (await (await t.$(messagesStatus)).exists(500, 30000)) {
    await t.evaluate(await t.$(messagesStatus), (ele) => ele.highlight());
    successMessage = await (await t.$(messagesStatus)).text();
  }
  nodeTitle = await (await t.$(contentTitle)).text();
  if (
    successMessage.includes(
      CommonData.cmsDraftMessage1 +
        ' ' +
        nodeTitle +
        ' ' +
        CommonData.cmsDraftMessage2
    )
  ) {
    assert(matchCondition);
    gauge.message(messages.draftSuccess);
    gauge.message(successMessage);
  } else {
    gauge.message(successMessage);
    gauge.message(messages.successMsgIncorrect);
    assert(!matchCondition);
  }
});

step('CMS UPDATED SUCCESS MESSAGE', async function () {
  if (await (await t.$(messagesStatus)).exists(500, 30000)) {
    await t.evaluate(await t.$(messagesStatus), (ele) => ele.highlight());
    successMessage = await (await t.$(messagesStatus)).text();
    nodeTitle = await (await t.$(contentTitle)).text();
    if (
      successMessage.includes(
        CommonData.cmsDraftMessage1 +
          ' ' +
          nodeTitle +
          ' ' +
          CommonData.cmsUpdateMessage
      )
    ) {
      assert(matchCondition);
      gauge.message(messages.updateSuccess);
      gauge.message(successMessage);
    } else {
      gauge.message(successMessage);
      gauge.message(messages.successMsgIncorrect);
      assert(!matchCondition);
    }
  }
});

step('CMS APPROVE SUCCESS MESSAGE', async function () {
  if (await (await t.$(messagesStatus)).exists(500, 30000)) {
    await t.evaluate(await t.$(messagesStatus), (ele) => ele.highlight());
    successMessage = await (await t.$(messagesStatus)).text();
  }
  nodeTitle = await (await t.$(contentTitle)).text();
  if (successMessage.includes(nodeTitle + ' ' + CommonData.cmsApproveMessage)) {
    assert(matchCondition);
    gauge.message(messages.approveSuccess);
    gauge.message(successMessage);
  } else {
    gauge.message(successMessage);
    gauge.messgae(messages.successMsgIncorrect);
    assert(!matchCondition);
  }
});

step('CMS PUBLISH SUCCESS MESSAGE', async function () {
  if (await (await t.$(messagesStatus)).exists(500, 30000)) {
    await t.evaluate(await t.$(messagesStatus), (ele) => ele.highlight());
    successMessage = await (await t.$(messagesStatus)).text();
  }
  nodeTitle = await (await t.$(contentTitle)).text();
  if (successMessage.includes(nodeTitle + ' ' + CommonData.cmsPublishMessage)) {
    assert(matchCondition);
    gauge.message(messages.publishSuccess);
    gauge.message(successMessage);
  } else {
    gauge.message(successMessage);
    gauge.message(messages.successMsgIncorrect);
    assert(!matchCondition);
  }
});

step('CMS UNPUBLISH SUCCESS MESSAGE', async function () {
  if (await (await t.$(messagesStatus)).exists(500, 30000)) {
    await t.evaluate(await t.$(messagesStatus), (ele) => ele.highlight());
    successMessage = await (await t.$(messagesStatus)).text();
  }
  nodeTitle = await (await t.$(contentTitle)).text();
  if (
    successMessage.includes(nodeTitle + ' ' + CommonData.cmsUnpublishMessage)
  ) {
    assert(matchCondition);
    gauge.message(messages.unpublishSuccess);
    gauge.message(successMessage);
  } else {
    gauge.message(successMessage);
    gauge.message(messages.successMsgIncorrect);
    assert(!matchCondition);
  }
});

step('CMS UNAPPROVE SUCCESS MESSAGE', async function () {
  if (await (await t.$(messagesStatus)).exists(500, 30000)) {
    await t.evaluate(await t.$(messagesStatus), (ele) => ele.highlight());
    successMessage = await (await t.$(messagesStatus)).text();
  }
  nodeTitle = await (await t.$(contentTitle)).text();
  if (
    successMessage.includes(nodeTitle + ' ' + CommonData.cmsUnapproveMessage)
  ) {
    assert(matchCondition);
    gauge.message(messages.draftSuccess);
    gauge.message(successMessage);
  } else {
    gauge.message(successMessage);
    gauge.message(messages.successMsgIncorrect);
    assert(!matchCondition);
  }
});

step('CMS VERIFY DRAFT STATUS', async function () {
  await t.evaluate(await t.$(nodeStatus), (ele) => ele.highlight());
  nodeStatusField = await (await t.$(nodeStatus)).text();
  gauge.message(nodeStatusField);
  if (nodeStatusField === CommonData.draftStatus) {
    assert(matchCondition);
    gauge.message(messages.nodeStatusCorrect);
  } else {
    gauge.message(nodeStatusField);
    gauge.message(messages.nodeStatusIncorrect);
    assert(!matchCondition);
  }
});

step('CMS VERIFY APPROVED STATUS', async function () {
  await t.evaluate(await t.$(nodeStatus), (ele) => ele.highlight());
  nodeStatusField = await (await t.$(nodeStatus)).text();
  gauge.message(nodeStatusField);
  if (nodeStatusField === CommonData.approvedStatus) {
    assert(matchCondition);
    gauge.message(messages.nodeStatusCorrect);
  } else {
    gauge.message(nodeStatusField);
    gauge.message(messages.nodeStatusIncorrect);
    assert(!matchCondition);
  }
});

step('CMS VERIFY PUBLISHED STATUS', async function () {
  await t.evaluate(await t.$(nodeStatus), (ele) => ele.highlight());
  nodeStatusField = await (await t.$(nodeStatus)).text();
  gauge.message(nodeStatusField);
  if (nodeStatusField === CommonData.publishedstatus) {
    assert(matchCondition);
    gauge.message(messages.nodeStatusCorrect);
  } else {
    gauge.message(nodeStatusField);
    gauge.message(messages.nodeStatusIncorrect);
    assert(!matchCondition);
  }
});

step('CMS VERIFY UNPUBLISHED STATUS', async function () {
  await t.evaluate(await t.$(nodeStatus), (ele) => ele.highlight());
  nodeStatusField = await (await t.$(nodeStatus)).text();
  gauge.message(nodeStatusField);
  if (nodeStatusField === CommonData.unpublishedStatus) {
    assert(matchCondition);
    gauge.message(messages.nodeStatusCorrect);
  } else {
    gauge.message(nodeStatusField);
    gauge.message(messages.nodeStatusIncorrect);
    assert(!matchCondition);
  }
});

step('CMS CLICK YES UNPUBLISH THIS CONTENT', async function () {
  await t.click(CommonData.cmsClickYesUnpublishThisContent);
  gauge.screenshot();
});

step('CMS VALIDATE LOCALIZATION SUCCESS MESSAGE', async function () {
  await t.evaluate(await t.$(locSuccessMessage), (ele) => ele.highlight());
  localizeSuccessMessage = await (await t.$(locSuccessMessage)).text();
  if (
    localizeSuccessMessage.includes(
      CommonData.localizationCommonMessage +
        ' ' +
        CommonData.countryLanguageLocalizeTo
    )
  ) {
    assert(matchCondition);
    gauge.message(messages.locSuccessMessage);
    gauge.message(localizeSuccessMessage);
  } else {
    gauge.message(localizeSuccessMessage);
    gauge.message(messages.successMsgIncorrect);
    assert(!matchCondition);
  }
});

step('CMS VALIDATE CORRECT CONTENT IS LOCALIZED', async function () {
  gauge.screenshot();
  contentValidation = await (await t.$(localizedContentTitle)).text();
  if (contentValidation.includes(contentName)) {
    assert(matchCondition);
    gauge.message(messages.contentValidated);
  } else {
    gauge.message(messages.incorrectContent);
    assert(!matchCondition);
  }
});

step('CMS VALIDATE LOCALE', async function () {
  await t.evaluate(await t.$(localizedIntoLocale1), (ele) => ele.highlight());
  gauge.screenshot();
  localeValidation = await (await t.$(localizedIntoLocale1)).text();
  if (CommonData.countryLanguageLocalizeTo.includes(localeValidation)) {
    assert(matchCondition);
    gauge.message(messages.correctLocale);
  } else {
    gauge.message(messages.incorrectLocale);
    assert(!matchCondition);
  }
});

step('CMS CLICK SELECT ALL CHECKBOX', async function () {
  await t.evaluate(await t.$(selectAll), (ele) => {
    ele.focus();
    ele.click();
  });
  gauge.screenshot();
});

step('CMS SELECT BULK OPERATION <bulkvalue>', async function (bulkvalue) {
  if (bulkvalue === CommonData.cmsClickApprove) {
    await t
      .dropDown({ id: cmsBulkOperations })
      .select(CommonData.cmsClickApprove);
  } else if (bulkvalue === CommonData.cmsClickUnapprove) {
    await t
      .dropDown({ id: cmsBulkOperations })
      .select(CommonData.cmsClickUnapprove);
  } else if (bulkvalue === CommonData.cmsClickPublish) {
    await t
      .dropDown({ id: cmsBulkOperations })
      .select(CommonData.cmsClickPublish);
  } else if (bulkvalue === CommonData.cmsClickUnpublish) {
    await t
      .dropDown({ id: cmsBulkOperations })
      .select(CommonData.cmsClickUnpublish);
  } else if (bulkvalue === CommonData.cmsClickRepublish) {
    await t
      .dropDown({ id: cmsBulkOperations })
      .select(CommonData.cmsClickRepublish);
  }
  gauge.screenshot();
});

step('CMS CLICK UPDATE', async function () {
  await t.evaluate(await t.$(update), (ele) => {
    ele.focus();
    ele.click();
  });
  gauge.screenshot();
});

step('CMS CLICK NEXT OR CONFIRM', async function () {
  await t.evaluate(await t.$(next), (ele) => ele.highlight());
  await t.click(await t.$(next, { waitForEvents: ['DOMContentLoaded'] }));
  gauge.screenshot();
});

step('CMS ENTER BULK LOG MESSAGE', async function () {
  await t.write(
    CommonData.cmsEnterLogMessagee,
    t.into(t.textBox({ id: cmsEnterbulkLogMessage }))
  );
  gauge.screenshot();
});

step('CMS CLICK PUBLISH CONFIRMATION', async function () {
  await t.evaluate(await t.$(bulkPublishConfirmation), (ele) => {
    ele.focus();
    ele.click();
  });
  gauge.screenshot();
});

step('CMS CLICK UNPUBLISH CONFIRMATION', async function () {
  await t.evaluate(await t.$(bulkUnpublishConfirmation), (ele) => {
    ele.focus();
    ele.click();
  });
  gauge.screenshot();
});

step('CMS BULK PUBLISH SUCCESS MESSAGE', async function () {
  await t.waitFor(5000);
  if (await (await t.$(messagesStatus)).exists(500, 30000)) {
    await t.evaluate(await t.$(messagesStatus), (ele) => ele.highlight());
  }
  successMessage = await (await t.$(messagesStatus)).text();
  if (successMessage.includes(CommonData.cmsBulkPublishMessage)) {
    assert(matchCondition);
    gauge.message(messages.bulkPublishmsg);
  } else {
    gauge.message(messages.successMsgIncorrect);
    assert(!matchCondition);
  }
});

step('CMS CLICK SELECT FIVE CONTENTS', async function () {
  if (await (await t.$(selectContent1)).exists()) {
    await t.evaluate(await t.$(selectContent1), (ele) => {
      ele.focus();
      ele.click();
    });
  }
  if (await (await t.$(selectContent2)).exists()) {
    await t.evaluate(await t.$(selectContent2), (ele) => {
      ele.focus();
      ele.click();
    });
  }
  if (await (await t.$(selectContent3)).exists()) {
    await t.evaluate(await t.$(selectContent3), (ele) => {
      ele.focus();
      ele.click();
    });
  }
  if (await (await t.$(selectContent4)).exists()) {
    await t.evaluate(await t.$(selectContent4), (ele) => {
      ele.focus();
      ele.click();
    });
  }
  if (await (await t.$(selectContent5)).exists()) {
    await t.evaluate(await t.$(selectContent5), (ele) => {
      ele.focus();
      ele.click();
    });
  }
  gauge.screenshot();
});

step('CMS BULK UNPUBLISH SUCCESS MESSAGE', async function () {
  await t.waitFor(5000);
  if (await (await t.$(messagesStatus)).exists(500, 30000)) {
    await t.evaluate(await t.$(messagesStatus), (ele) => ele.highlight());
    successMessage = await (await t.$(messagesStatus)).text();
    if (successMessage.includes(CommonData.cmsBulkUnpublishMessage)) {
      assert(matchCondition);
      gauge.message(messages.bulkUnpublishmsg);
    } else {
      gauge.message(messages.successMsgIncorrect);
      assert(!matchCondition);
    }
  }
});

step('CMS BULK APPROVE SUCCESS MESSAGE', async function () {
  await t.waitFor(5000);
  if (await (await t.$(messagesStatus)).exists(500, 30000)) {
    await t.evaluate(await t.$(messagesStatus), (ele) => ele.highlight());
    successMessage = await (await t.$(messagesStatus)).text();
    if (successMessage.includes(CommonData.cmsBulkApprovedMessage)) {
      assert(matchCondition);
      gauge.message(messages.bulkApprovemsg);
    } else {
      gauge.message(messages.successMsgIncorrect);
      assert(!matchCondition);
    }
  }
});

step('CMS BULK UNAPPROVE SUCCESS MESSAGE', async function () {
  await t.waitFor(5000);
  if (await (await t.$(messagesStatus)).exists(500, 30000)) {
    await t.evaluate(await t.$(messagesStatus), (ele) => ele.highlight());
    successMessage = await (await t.$(messagesStatus)).text();
    if (successMessage.includes(CommonData.cmsBulkUnapprovedMessage)) {
      assert(matchCondition);
      gauge.message(messages.bulkUnapprovemsg);
    } else {
      gauge.message(messages.successMsgIncorrect);
      assert(!matchCondition);
    }
  }
});

step('CMS CLICK SELECT MEDIA BUTTON', async function () {
  if (await (await t.$(selectMedia)).exists(500, 30000)) {
    await t.evaluate(await t.$(selectMedia), (ele) => ele.highlight());
    gauge.screenshot();
    await t.click(await t.$(selectMedia), { waitForNavigation: false });
    await t.setConfig({ navigationTimeout: parseInt(timeoutSetting, 10) });
    //await t.waitFor(10000);
  }
  if (await (await t.$(cmsImageWindow)).exists(500, 30000)) {
    await t.waitFor(10000);
    console.log(messages.selectMediaClicked);
    gauge.screenshot();
  }
});

step('CMS SELECT IMAGE', async function () {
  await t.waitFor(10000);
  if (await (await t.$(selectImage1)).exists(500, 30000)) {
    selectedImage = await (await t.$(selectImage1)).text();
    gauge.message(selectedImage);
    await t.click(await t.$(selectImage1), { waitForNavigation: false });
    await t.setConfig({ navigationTimeout: parseInt(timeoutSetting, 10) });
    gauge.screenshot();
    // await t.waitFor(10000);
    await (await t.$(adminPageTitle)).exists(500, 30000);
  }
  if ((await (await t.$(adminPageTitle)).text()) === CommonData.cmsCreatePage) {
    assert(matchCondition);
    gauge.message(messages.navigatedToAddPage);
  } else {
    assert(!matchCondition);
    gauge.message(messages.failedToNavigatedToAddPage);
  }
});

step('CMS SELECT IMAGE LAYOUT TEMPALTE', async function () {
  if ((await (await t.$(adminPageTitle)).text()) === 'Create Page') {
    await t
      .dropDown({ id: cmsPageTemplate })
      .select(CommonData.cmsSelectImageLayoutTempalte);
    gauge.screenshot();
  }
});

step('CMS VALIDATE IMAGE CONTENT ON FRONTEND', async function () {
  if (await (await t.$(feImage)).exists()) {
    assert(matchCondition);
    await t.highlight(await t.$(feImage));
    gauge.message(messages.imageDisplayed);
    gauge.screenshot();
  } else {
    gauge.message(messages.imageNotdisplayed);
    assert(!matchCondition);
  }
});

step('CMS SELECT TEMPLATE LIBRARY', async function () {
  await t.evaluate(await t.$(selectTemplateLibrary), (ele) => {
    ele.focus();
    ele.click();
  });
});

step('CMS VALIDATE TEMPLATE LANDING PAGE', async function () {
  if (await (await t.$(previewSection)).exists()) {
    assert(matchCondition);
    await t.highlight(await t.$(previewSection));
    gauge.message(messages.navToTemplatePage);
  } else {
    gauge.message(messages.failedToTemplatePage);
    assert(!matchCondition);
  }
});

step('CMS VALIDATE 1 TO MANY LOCALIZATION SUCCESS MESSAGE', async function () {
  await t.evaluate(await t.$(locSuccessMessage), (ele) => ele.highlight());
  localizeSuccessMessage = await (await t.$(locSuccessMessage)).text();
  if (localizeSuccessMessage.includes(CommonData.localizationCommonMessage2)) {
    assert(matchCondition);
    gauge.message(messages.locSuccessMessage);
    gauge.message(localizeSuccessMessage);
  } else {
    gauge.message(localizeSuccessMessage);
    gauge.message(messages.successMsgIncorrect);
    assert(!matchCondition);
  }
  await t.evaluate(await t.$(localizeLocal1), (ele) => ele.highlight());
  local1SuccessMessage = await (await t.$(localizeLocal1)).text();
  if (local1SuccessMessage === CommonData.countryLanguageLocalizeTo) {
    assert(matchCondition);
    gauge.message(
      messages.nodeLocalized + CommonData.countryLanguageLocalizeTo
    );
  } else {
    gauge.message(
      messages.nodeNotLocalized + CommonData.countryLanguageLocalizeTo
    );
    assert(!matchCondition);
  }
  await t.evaluate(await t.$(localizeLocal2), (ele) => ele.highlight());
  local2SuccessMessage = await (await t.$(localizeLocal2)).text();
  if (local2SuccessMessage === CommonData.countryLanguageLocalizeTo2) {
    assert(matchCondition);
    gauge.message(
      messages.nodeLocalized + CommonData.countryLanguageLocalizeTo2
    );
  } else {
    gauge.message(
      messages.nodeNotLocalized + CommonData.countryLanguageLocalizeTo2
    );
    assert(!matchCondition);
  }
});

step('CMS VALIDATE CONTENT FROM TABLE', async function () {
  gauge.screenshot();
  contentValidation1 = await (await t.$(localizedContentT1)).text();
  contentValidation2 = await (await t.$(localizedContentT2)).text();
  actualContent = [contentValidation1, contentValidation2];
  for (let i = 0; i < actualContent.length; i++) {
    if (actualContent.includes(contentName)) {
      assert(matchCondition);
      gauge.message(
        'Actual content is same as expected content ' + actualContent[i]
      );
      gauge.message(messages.actualContentSame + actualContent[i]);
    } else {
      gauge.message(messages.actualContentNotSame + actualContent[i]);
      assert(!matchCondition);
    }
  }
});

step('CMS SELECT MULTIPLE LOCALES TO LOCALIZE TO', async function () {
  await t.evaluate(await t.$(countryLanguageCA), (ele) => {
    ele.focus();
    ele.click();
  });
  await t.evaluate(await t.$(countryLanguageDE), (ele) => {
    ele.focus();
    ele.click();
  });
  gauge.screenshot();
});

step('CMS VALIDATE ALL LOCALES FROM TABLE', async function () {
  await t.evaluate(await t.$(localizedIntoLocaleT1), (ele) => ele.highlight());
  localeValidation1 = await (await t.$(localizedIntoLocaleT1)).text();
  await t.evaluate(await t.$(localizedIntoLocaleT2), (ele) => ele.highlight());
  localeValidation2 = await (await t.$(localizedIntoLocaleT2)).text();
  actualLocales = localeValidation1 + ' ,' + localeValidation2;
  expectedLocales = [
    CommonData.countryLanguageLocalizeTo,
    CommonData.countryLanguageLocalizeTo2,
  ];
  for (let i = 0; i < expectedLocales.length; i++) {
    if (actualLocales.includes(expectedLocales[i])) {
      assert(matchCondition);
      gauge.message(messages.localesMatch + expectedLocales[i]);
    } else {
      gauge.message(messages.localesMismatch + expectedLocales[i]);
      assert(!matchCondition);
    }
  }
});

step('CMS NAVIGATE TO WORKFLOW PAGE', async function () {
  await t.goto(contentWorkflowURL, { waitForEvents: ['DOMContentLoaded'] });
  gauge.screenshot();
});

step('CMS CLICK COPY TO NEW DRAFT', async function () {
  await t.click(CommonData.cmsCopyToNewDraft);
  gauge.screenshot();
});

step('CMS EDIT HTML CONTENT', async function () {
  await t.click(await t.$(cmsHtmlContent));
  await t.clear();
  await t.write(CommonData.cmsHtmlEditContent);
  gauge.screenshot();
});

step('CMS EDIT REVISION TAG', async function () {
  await t.clear(t.textBox(cmsEnterRevisionTag));
  await t.click(t.textBox(cmsEnterRevisionTag));
  await t.write(setRevisionTagName());
  gauge.screenshot();
});

step('CMS COPY REVISION TAG', async function () {
  newRevTag = await (await t.$(revTag)).text();
  gauge.message(newRevTag);
});

step('CMS NAVIGATE TO ORIGINAL CONTENT ON FE', async function () {
  await t.scrollTo(await t.$(currentRevision));
  await t.evaluate(await t.$(currentRevision), (ele) => {
    ele.focus();
    ele.click();
  });
  gauge.screenshot();
});

step('CMS SELECT NEW CONTENT FROM REVISION TAG', async function () {
  await t.evaluate(await t.$(revisionDropdown), (ele) => ele.highlight());
  await t.hover(await t.$(revisionDropdown));
  latestRevTagInList1 = await (await t.$(draftRevision1)).text();
  latestRevTagInList2 = await (await t.$(draftRevision2)).text();
  latestRevTagInList3 = await (await t.$(draftRevision3)).text();
  latestRevTagInList4 = await (await t.$(draftRevision4)).text();
  latestRevTagInList5 = await (await t.$(draftRevision5)).text();
  if (latestRevTagInList1 === newRevTag) {
    assert(matchCondition);
    await t.click(await t.$(draftRevision1));
    gauge.message(latestRevTagInList1);
    gauge.screenshot();
  } else if (latestRevTagInList2 === newRevTag) {
    assert(matchCondition);
    await t.click(await t.$(draftRevision2));
    gauge.message(latestRevTagInList2);
    gauge.screenshot();
  } else if (latestRevTagInList3 === newRevTag) {
    assert(matchCondition);
    await t.click(await t.$(draftRevision3));
    gauge.message(latestRevTagInList3);
    gauge.screenshot();
  } else if (latestRevTagInList4 === newRevTag) {
    assert(matchCondition);
    gauge.message(latestRevTagInList4);
    await t.click(await t.$(draftRevision4));
    gauge.screenshot();
  } else if (latestRevTagInList5 === newRevTag) {
    assert(matchCondition);
    await t.click(await t.$(draftRevision5));
    gauge.message(latestRevTagInList5);
    gauge.screenshot();
  } else {
    gauge.screenshot();
    gauge.message(messages.nodeNotfound);
    assert(!matchCondition);
  }
});

step('CMS VALIDATE THE NEW CONTENT', async function () {
  if (await t.text(CommonData.cmsHtmlEditContent).exists()) {
    assert(matchCondition);
    await t.highlight(t.text(CommonData.cmsHtmlEditContent));
    gauge.message(messages.newCotentDisplayed);
    gauge.screenshot();
  } else {
    gauge.message(messages.newCotentNotDisplayed);
    assert(!matchCondition);
  }
});

step('CMS SELECT AUTOLOCALIZE OPTION', async function () {
  await t.evaluate(await t.$(autoLocalizeOption3), (ele) => {
    ele.focus();
    ele.click();
  });
  gauge.screenshot();
});

step('CMS CLICK CONTINUE', async function () {
  await t.click(CommonData.cmsClickContinueLocalizeAndPublish);
  gauge.screenshot();
});

step('CMS NAVIGATE TO SOURCE NODE', async function () {
  await t.goto(contentWorkflowURL);
  gauge.screenshot();
});

step('CMS CLICK AUTO LOCALIZE', async function () {
  await t.evaluate(await t.$(autoLocalizeLink), (ele) => {
    ele.focus();
    ele.click();
  });
  gauge.screenshot();
});

step('CMS CLICK RUN AUTO LOCALIZE', async function () {
  await t.evaluate(await t.$(runAutoLocalizeLink), (ele) => {
    ele.focus();
    ele.click();
  });
  gauge.screenshot();
});

step('CMS VALIDATE AUTOLOCALIZATION SUCCESS MESSAGE', async function () {
  if (await (await t.$(autoLocSuccessMessage)).exists(500, 30000)) {
    await t.evaluate(await t.$(autoLocSuccessMessage), (ele) =>
      ele.highlight()
    );
    localizeSuccessMessage = await (await t.$(autoLocSuccessMessage)).text();
    if (
      localizeSuccessMessage.includes(CommonData.localizationCommonMessage2)
    ) {
      assert(matchCondition);
      gauge.message(messages.locSuccessMessage);
      gauge.message(localizeSuccessMessage);
    } else {
      gauge.message(localizeSuccessMessage);
      gauge.message(messages.successMsgIncorrect);
      assert(!matchCondition);
    }
    await t.evaluate(await t.$(autoLocalizeLocal1), (ele) => ele.highlight());
    local1SuccessMessage = await (await t.$(autoLocalizeLocal1)).text();
    if (local1SuccessMessage === CommonData.countryLanguageLocalizeTo) {
      assert(matchCondition);
      gauge.message(
        messages.nodeLocalized + CommonData.countryLanguageLocalizeTo
      );
    } else {
      gauge.message(
        messages.nodeNotLocalized + CommonData.countryLanguageLocalizeTo
      );
      assert(!matchCondition);
    }
    await t.evaluate(await t.$(autoLocalizeLocal2), (ele) => ele.highlight());
    local2SuccessMessage = await (await t.$(autoLocalizeLocal2)).text();
    if (local2SuccessMessage === CommonData.countryLanguageLocalizeTo2) {
      assert(matchCondition);
      gauge.message(
        messages.nodeLocalized + CommonData.countryLanguageLocalizeTo2
      );
    } else {
      gauge.message(
        messages.nodeNotLocalized + CommonData.countryLanguageLocalizeTo2
      );
      assert(!matchCondition);
    }
    await t.evaluate(await t.$(autoLocalizationMessage), (ele) =>
      ele.highlight()
    );
    localFinalSuccessMessage = await (
      await t.$(autoLocalizationMessage)
    ).text();
    if (
      localFinalSuccessMessage.includes(
        CommonData.autoLocalizationCommonMessage
      )
    ) {
      assert(matchCondition);
      gauge.message(messages.locSuccessMessage);
      gauge.message(localFinalSuccessMessage);
    } else {
      gauge.message(localFinalSuccessMessage);
      gauge.message(messages.incorrectSuccessMsg);
      assert(!matchCondition);
    }
  }
});

step('CMS SAVE THE DESTINATION NODE', async function () {
  await t.evaluate(await t.$(targetLocaleWorkflow), (ele) => {
    ele.focus();
    ele.click();
  });
  destinationNode = await t.currentURL();
});

step('CMS VALIDATE THE NEW PUBLISHED REVISION', async function () {
  await t.goto(destinationNode);
  await t.scrollTo(await t.$(publishedRevision));
  gauge.screenshot();
  await t.evaluate(await t.$(publishedRevision), (ele) => ele.highlight());
  actualRevisionTag = await (await t.$(publishedRevision)).text();
  if (actualRevisionTag.includes(newRevTag)) {
    assert(matchCondition);
    gauge.message(messages.newRevisionPublished + actualRevisionTag);
  } else {
    gauge.message(messages.newRevisionNotPublished + actualRevisionTag);
    assert(!matchCondition);
  }
});

step('CMS CLICK CLONE CONTENT TAB', async function () {
  await t.click(CommonData.cmsCloneContentTab);
  gauge.screenshot();
});

step('CMS CLICK YES CLONE THIS CONTENT', async function () {
  await t.click(CommonData.cmsYesCloneThisContent);
  gauge.screenshot();
});

step('CMS EDIT ANALYTICS', async function () {
  await t.clear(t.textBox({ id: cmsEnterAnalytics }));
  await t.write(
    setTitleAnalyticsTag(),
    t.into(t.textBox({ id: cmsEnterAnalytics }))
  );
  gauge.screenshot();
});

step('CMS VALIDATE CONTENT IS A CLONE', async function () {
  nodeTitle = await (await t.$(contentTitle)).text();
  if (nodeTitle.includes('Clone')) {
    assert(matchCondition);
    gauge.message(messages.clonedContent);
    gauge.message(nodeTitle);
  } else {
    gauge.message(nodeTitle);
    gauge.message(messages.notClonedContent);
    assert(!matchCondition);
  }
});

step('CMS CLICK CLONE', async function () {
  await t.evaluate(await t.$(latestContentInTable), (ele) => ele.highlight());
  await t.evaluate(await t.$(clone), (ele) => {
    ele.focus();
    ele.click();
  });
});

step('CMS SELECT WORKFLOW STATE', async function () {
  await t
    .dropDown({ id: cmsChooseWorkflowState })
    .select(CommonData.selectWorkflowState);
  gauge.screenshot();
});

step('CMS SELECT A COUNTRY-LANGUAGE TO LOCALIZE TO', async function () {
  await t.evaluate(await t.$(locale1), (ele) => {
    ele.focus();
    ele.click();
  });
  country1 = await (await t.$(selectedCountryName1)).text();
  gauge.message(country1);
  gauge.screenshot();
});

step(
  'CMS SELECT LOCALIZE FROM UPDATE MULTIPLE ITEMS AT ONCE',
  async function () {
    await t
      .dropDown({ id: cmsSelectLocalize })
      .select(CommonData.chooseLocalize);
    gauge.screenshot();
  }
);

step(
  'CMS SELECT MULTIPLE COUNTRIES-LANGUAGES TO LOCALIZE TO',
  async function () {
    await t.evaluate(await t.$(locale1), (ele) => {
      ele.focus();
      ele.click();
    });
    country1 = await (await t.$(selectedCountryName1)).text();
    gauge.message(messages.selectedCountry1 + country1);
    await t.evaluate(await t.$(locale2), (ele) => {
      ele.focus();
      ele.click();
    });
    country2 = await (await t.$(selectedCountryName2)).text();
    gauge.message(messages.selectedCountry2 + country2);
    gauge.screenshot();
  }
);

step('CMS VERIFY LOCALIZE SUCCESS MESSAGE AND LOCALE', async function () {
  if (await (await t.$(localizeMessage)).exists(500, 30000)) {
    await t.evaluate(await t.$(localizeMessage), (ele) =>
      ele.highlight(await(t.$(localizeMessage)))
    );
    message = await (await t.$(localizeMessage)).text();
    gauge.message(message);
    if (
      message.includes(CommonData.cmsLocalizeMessage1) ||
      CommonData.cmsLocalizeMessage2
    ) {
      assert(matchCondition);
      gauge.message(messages.correctLocalizeMsg);
      gauge.screenshot();
    } else {
      gauge.message(messages.successMsgIncorrect);
      assert(!matchCondition);
    }
    if (message.includes(CommonData.countrylanguagelocalizesto1)) {
      assert(matchCondition);
      gauge.message(messages.selectedNodesLocalized);
    } else {
      gauge.message(messages.selectedNodesNotLocalized);
      assert(!matchCondition);
    }
    countryName1 = await (await t.$(countryTitle)).text();
    gauge.message(countryName1);
    if (countryName1.includes(CommonData.countrylanguagelocalizesto1)) {
      assert(matchCondition);
      gauge.message(messages.countryCorrect);
    } else {
      gauge.message(countryName1);
      gauge.message(messages.countryNotCorrect);
      assert(!matchCondition);
    }
  }
});

step('CMS LOCALIZE REFERENCED CONTENT', async function () {
  if (await (await t.$(localizeButton)).exists()) {
    await t.click(
      await t.$(localizeButton, { waitForEvents: ['DOMContentLoaded'] })
    );
  }
});

step(
  'CMS VERIFY LOCALIZE SUCCESS MESSAGE AND MULTIPLE LOCALES IN SUCEESS MESSAGE',
  async function () {
    if (await (await t.$(localizeMessage)).exists(500, 30000)) {
      await t.evaluate(await t.$(localizeMessage), (ele) =>
        ele.highlight(await(t.$(localizeMessage)))
      );
      message = await (await t.$(localizeMessage)).text();
      gauge.message(message);
      if (
        message.includes(CommonData.cmsLocalizeMessage1) ||
        CommonData.cmsLocalizeMessage2
      ) {
        assert(matchCondition);
        gauge.message(messages.correctLocalizeMsg);
        gauge.screenshot();
      } else {
        gauge.message(messages.successMsgIncorrect);
        assert(!matchCondition);
      }
      await t.evaluate(await t.$(localizeLocal1), (ele) =>
        ele.highlight(await(t.$(localizeLocal1)))
      );
      local1 = await (await t.$(localizeLocal1)).text();
      gauge.message(local1);
      if (
        local1.includes(CommonData.countrylanguagelocalizesto1) ||
        CommonData.countryLanguageLocalizesTo2
      ) {
        assert(matchCondition);
        gauge.message(messages.nodesLocalizetoLoc1);
      } else {
        gauge.message(messages.nodesNotLocalizetoLoc1);
        assert(!matchCondition);
      }
      await t.evaluate(await t.$(localizeLocal2), (ele) =>
        ele.highlight(await(t.$(localizeLocal2)))
      );
      local2 = await (await t.$(localizeLocal2)).text();
      gauge.message(local2);
      if (
        local2.includes(CommonData.countrylanguagelocalizesto1) ||
        CommonData.countryLanguageLocalizesTo2
      ) {
        assert(matchCondition);
        gauge.message(messages.nodesLocalizetoLoc2);
      } else {
        gauge.message(messages.nodesNotLocalizetoLoc2);
        assert(!matchCondition);
      }
      if (local1 !== local2) {
        assert(matchCondition);
        gauge.message(messages.nodesLocalized);
      } else {
        gauge.message(messages.nodesNotLocalized);
        assert(!matchCondition);
      }
    }
  }
);

step('CMS VALIDATE LOCALES FROM TABLE', async function () {
  await t.evaluate(await t.$(localizedToLocaleT1), (ele) => ele.highlight());
  localeValidation1 = await (await t.$(localizedToLocaleT1)).text();
  await t.evaluate(await t.$(localizedToLocaleT2), (ele) => ele.highlight());
  localeValidation2 = await (await t.$(localizedToLocaleT2)).text();
  gauge.screenshot();
  actualLocales = localeValidation1 + ' ,' + localeValidation2;
  expectedLocales = [
    CommonData.countrylanguagelocalizesto1,
    CommonData.countryLanguageLocalizesTo2,
  ];
  for (let i = 0; i < expectedLocales.length; i++) {
    if (actualLocales.includes(expectedLocales[i])) {
      assert(matchCondition);
      gauge.message(messages.localesMatch + expectedLocales[i]);
    } else {
      gauge.message(messages.localesMismatch + expectedLocales[i]);
      assert(!matchCondition);
    }
  }
});

step('CMS AUTOLOC ENABLED SEARCH', async function () {
  await t.write(
    CommonData.cmsAutolocEnabledKeywordSearch,
    t.into(t.textBox(cmsAutolocEnabledKeywordSearch))
  );
  gauge.screenshot();
});

step('CMS AUTOMATIC LOCALIZATION COUNTRY FROM', async function () {
  brand = await (await t.$(brandName)).text();
  if (brand.includes(CommonData.lamerBrand)) {
    await t
      .dropDown({ id: cmsAutomaticLocalizationCountryFrom })
      .select(CommonData.automaticLocalizationCountryFrom);
  }
  gauge.screenshot();
});

step('CMS AUTOMATIC LOCALIZATION COUNTRY TO', async function () {
  await t
    .dropDown({ id: cmsAutomaticLocalizationCountryTo })
    .select(CommonData.automaticLocalizationCountryTo);
  gauge.screenshot();
});

step('CMS CLICK ON WORKFLOW', async function () {
  await t.evaluate(await t.$(clickOnWorkflow), (ele) => {
    ele.focus();
    ele.click();
  });
});

step(
  'CMS VERIFY AUTOLOCALIZE IS ENABLED FOR SELECTED LOCALE',
  async function () {
    await t.evaluate(await t.$(searchSelectedTargetLocale), (ele) =>
      ele.highlight()
    );
    await t.scrollTo(await t.$(searchSelectedTargetLocale));
    localizationStatus = await (await t.$(localizationStatusField)).text();
    if (localizationStatus.includes(messages.localizationStatusmessage)) {
      assert(matchCondition);
      gauge.message(messages.autoLocalizationStatusEnable);
    } else {
      gauge.message(messages.autoLocalizationStatusDisable);
      assert(!matchCondition);
    }
  }
);

step('CMS SELECT FILTERED CONTENT', async function () {
  await t.evaluate(await t.$(selectContent1), (ele) => {
    ele.focus();
    ele.click();
  });
});

step(
  'CMS SELECT A COUNTRY LANGUAGE TO DISABLE AUTOLOCALIZE',
  async function () {
    await t.evaluate(await t.$(searchForTargetLocale), (ele) => {
      ele.focus();
      ele.click();
    });
  }
);

step('CMS SELECT DISABLE AUTOLOCALIZE OPTION', async function () {
  await t.evaluate(await t.$(disableAutoLocalizeOption), (ele) => {
    ele.focus();
    ele.click();
  });
  gauge.screenshot();
});

step('CMS VERIFY DISABLE AUTOLOCALIZE SUCCESS MESSAGE', async function () {
  if (await (await t.$(disableAutoLocSuccessMessage)).exists(500, 30000)) {
    await t.evaluate(await t.$(disableAutoLocSuccessMessage), (ele) =>
      ele.highlight()
    );
    const disableAutoLocalizeSuccessMessage = await (
      await t.$(disableAutoLocSuccessMessage)
    ).text();
    if (
      disableAutoLocalizeSuccessMessage.includes(
        messages.disableAutoLocalizationMessage
      )
    ) {
      assert(matchCondition);
      gauge.message(messages.disableAutolocSuccessMessages);
    } else {
      gauge.message(messages.successMsgIncorrect);
      assert(!matchCondition);
    }
  }
});

step(
  'CMS VERIFY AUTOLOCALIZE IS DISABLED FOR SELECTED LOCALE',
  async function () {
    await t.evaluate(await t.$(searchSelectedTargetLocale), (ele) =>
      ele.highlight()
    );
    await t.scrollTo(await t.$(searchSelectedTargetLocale));
    gauge.screenshot();
    if (
      (await (await t.$(localizationStatusField)).text()) !==
      messages.localizationStatusmessage
    ) {
      assert(matchCondition);
      gauge.message(messages.autoLocalizationStatusDisable);
    } else {
      gauge.message(messages.autoLocalizationStatusEnable);
      assert(!matchCondition);
    }
  }
);

step('CMS Login to CMS as a test User and Authentication', async function () {
  homePageURL = await t.currentURL();
  await t.goto(
    siteDefinition.executionContext.url + CommonData.cmsUrlExtension,
    { waitForEvents: ['DOMContentLoaded'] }
  );
  gauge.screenshot();

  if (cmsLoginUserName !== '') {
    await t.write(
      CommonData.cmsUserName,
      t.into(t.textBox({ id: cmsLoginUserName }))
    );
  }
  if (cmsLoginPassword !== '') {
    await t.write(
      CommonData.cmsPwd,
      t.into(t.textBox({ id: cmsLoginPassword }))
    );
  }
  if (cmsLoginButton !== '') {
    await t.evaluate(await t.$(cmsLoginButton), (ele) => {
      ele.focus();
      ele.click();
    });
    if (
      (await (await t.$(adminPageTitle)).text()) === CommonData.cmsDashboard
    ) {
      assert(matchCondition);
      gauge.message(messages.navigatedToDashboard);
    } else {
      gauge.message(messages.failedToNavigatedToDashboard);
      assert(!matchCondition);
    }
  }
});

step('CMS ADD CONTENT and CLICK PAGE', async function () {
  await t.click(CommonData.cmsAddContent);
  if ((await (await t.$(adminPageTitle)).text()) === CommonData.cmsAddContent) {
    assert(matchCondition);
    gauge.message(messages.navigatedToAddContent);
  } else {
    assert(!matchCondition);
    gauge.message(messages.failedToNavigatedToAddContent);
  }
  await t.evaluate(await t.$(pageLink), (ele) => {
    ele.focus();
    ele.click();
  });
  content = await (await t.$(adminPageTitle)).text();
  gauge.message(messages.navigatedToAddPage);
});

step('CMS Provide Data In Page Node Form', async function () {
  await t.write(setRevisionTagName(), t.into(t.textBox(cmsEnterRevisionTag)));
  gauge.screenshot();
  await t.click(CommonData.cmsExpandToAddNewItem);
  if ((await (await t.$(adminPageTitle)).text()) === 'Create Page') {
    await t
      .dropDown({ id: cmsPageTemplate })
      .select(CommonData.cmsSelectImageLayoutTempalte);
    gauge.screenshot();
  }

  if (await (await t.$(selectMedia)).exists(500, 30000)) {
    await t.click(await t.$(selectMedia), { waitForNavigation: false });
    await t.setConfig({ navigationTimeout: parseInt(timeoutSetting, 10) });
    //await t.waitFor(10000);
  }
  if (await (await t.$(cmsImageWindow)).exists(500, 30000)) {
    await t.waitFor(10000);
    console.log(messages.selectMediaClicked);
    gauge.screenshot();
  }
  if (await (await t.$(selectImage1)).exists(500, 30000)) {
    await t.waitFor(10000);
    selectedImage = await (await t.$(selectImage1)).text();
    gauge.message(selectedImage);
    await t.click(await t.$(selectImage1), { waitForNavigation: false });
    await t.setConfig({ navigationTimeout: parseInt(timeoutSetting, 10) });
    // await t.waitFor(10000);
  }
  gauge.screenshot();
  await (await t.$(adminPageTitle)).exists(500, 30000);
  if ((await (await t.$(adminPageTitle)).text()) === CommonData.cmsCreatePage) {
    assert(matchCondition);
    gauge.message(messages.navigatedToAddPage);
  } else {
    assert(!matchCondition);
    gauge.message(messages.failedToNavigatedToAddPage);
  }
  await (await t.$(scrollToBasicInfo)).exists(500, 30000);
  await t.evaluate(await t.$(scrollToBasicInfo), (ele) => {
    ele.focus();
    ele.click();
  });
  await t.waitFor(5000);
  gauge.screenshot();
  await t.write(
    setTitleAnalyticsTag(),
    t.into(t.textBox({ id: cmsEnterTitle }))
  );
  await t.waitFor(5000);
  await t.write(
    setTitleAnalyticsTag(),
    t.into(t.textBox({ id: cmsEnterAnalytics }))
  );
  await t.waitFor(5000);
  await t
    .dropDown({ id: cmsSiteSection })
    .select(CommonData.cmsSelectSiteSection);
  await t.write(
    setTitleAnalyticsTag(),
    t.into(t.textBox({ id: cmsEnterTitle }))
  );
  await t.write(
    setTitleAnalyticsTag(),
    t.into(t.textBox({ id: cmsEnterAnalytics }))
  );
  gauge.screenshot();
});

step('CMS ENTER LOG MESSAGE and CLICK UPDATE STATE', async function () {
  await t.write(
    CommonData.cmsEnterLogMessagee,
    t.into(t.textBox({ id: cmsEnterLogMessage }))
  );
  gauge.screenshot();
  await t.click(CommonData.cmsClickUpdateState);
  gauge.screenshot();
});

step('CMS Launch Expected API Endpoint', async function () {
  await t.goto(
    siteDefinition.prodUrl +
      CommonData.apiEndPoint +
      CommonData.cmsExpectedEndpoint,
    { waitForEvents: ['DOMContentLoaded'] }
  );
  expectedAPIResponse = JSON.parse(
    await (await t.$(apiResponseJSONLoc)).text()
  );
});

step('CMS Launch Actual API Endpoint', async function () {
  await t.goto(
    siteDefinition.executionContext.url +
      CommonData.apiEndPoint +
      CommonData.cmsActualEndpoint,
    { waitForEvents: ['DOMContentLoaded'] }
  );
  actualAPIResponse = JSON.parse(await (await t.$(apiResponseJSONLoc)).text());
  gauge.screenshot();
});

step('CMS Validate Expected API and Actual API Response', async function () {
  if (expectedAPIResponse.title === actualAPIResponse.title) {
    assert(matchCondition);
    gauge.message(messages.apiTitle);
    assert;
  } else {
    assert(!matchCondition);
    gauge.message(messages.apiTitleMismatch);
  }
  compareObjects(expectedAPIResponse.metadata, actualAPIResponse.metadata);
});

step('CMS Launch Expected API Endpoint of PLP', async function () {
  await t.goto(
    siteDefinition.prodUrl +
      CommonData.apiEndPoint +
      CommonData.cmsPLPExpectedEndpoint,
    { waitForEvents: ['DOMContentLoaded'] }
  );
  expectedAPIResponse = JSON.parse(
    await (await t.$(apiResponseJSONLoc)).text()
  );
});

step('CMS Launch Actual API Endpoint of PLP', async function () {
  await t.goto(
    siteDefinition.executionContext.url +
      CommonData.apiEndPoint +
      CommonData.cmsPLPActualEndpoint,
    { waitForEvents: ['DOMContentLoaded'] }
  );
  actualAPIResponse = JSON.parse(await (await t.$(apiResponseJSONLoc)).text());
  gauge.screenshot();
});

step(
  'CMS Validate Expected API and Actual API Response of PLP',
  async function () {
    if (expectedAPIResponse.title === actualAPIResponse.title) {
      assert(matchCondition);
      gauge.message(messages.apiTitle);
      assert;
    } else {
      assert(!matchCondition);
      gauge.message(messages.apiTitleMismatch);
    }
    compareObjects(expectedAPIResponse.metadata, actualAPIResponse.metadata);
  }
);

step('CMS CLICK ON EDIT BUTTON', async function () {
  await (await t.$(editLocalizedNode)).exists(500, 30000);
  await t.evaluate(await t.$(editLocalizedNode), (ele) => {
    ele.focus();
    ele.click();
    gauge.screenshot();
  });
});

step('CMS VALIDATE IMAGE LOCALIZED', async function () {
  await (await t.$(localizedImageName)).exists(500, 30000);
  targetLocaleImage = await (await t.$(localizedImageName)).text();
  gauge.message(targetLocaleImage);
  gauge.screenshot();
  if (targetLocaleImage === selectedImage) {
    assert(matchCondition);
    gauge.message(messages.localizedCorrectImage);
    gauge.screenshot();
  } else {
    assert(!matchCondition);
    gauge.message(messages.localizedInCorrectImage);
  }
});
step('CMS SELECT CONTENT FOR TRANSLATIONS', async function () {
  await t.evaluate(await t.$(selectContent1), (ele) => {
    ele.focus();
    ele.click();
  });
  await t.evaluate(await t.$(selectContent2), (ele) => {
    ele.focus();
    ele.click();
  });
});

step(
  'CMS SELECT DOWNLOAD TRANSLATION FROM UPDATE MULTIPLE ITEMS AT ONCE',
  async function () {
    await t
      .dropDown({ id: cmsBulkOperations })
      .select(CommonData.chooseDownloadTranslations);
    gauge.screenshot();
  }
);

step('CMS ENTER EXPORT NAME', async function () {
  await t.click(await t.$(customExportFileName));
  await t.clear();
  await t.write(CommonData.cmsExportFileName);
  gauge.screenshot();
});

step('CMS CLICK NEXT', async function () {
  await t.evaluate(await t.$(nextButton), (ele) => ele.highlight());
  await t.click(await t.$(nextButton, { waitForEvents: ['DOMContentLoaded'] }));
  gauge.screenshot();
});

step('CMS VERIFY DOWNLOAD TRANSLATION SUCCESS MESSAGE', async function () {
 if(await (await t.$(messagesStatus1)).exists(500, 100000)){
  await t.evaluate(await t.$(messagesStatus1), (ele) => ele.highlight());
  translationSuccessMessage = await (await t.$(messagesStatus1)).text();
  if (
    translationSuccessMessage.includes(CommonData.cmsTranslationsSuccessMessage)
  ) {
    assert(matchCondition);
    gauge.message(messages.cmsTranslationsSuccessMessage);
  } else {
    gauge.message(messages.successMsgIncorrect);
    assert(!matchCondition);
  }
}
  gauge.screenshot();
});

step('CMS CLICK WORKFLOW OF THE FIRST LISTED NODE', async function () {
  await t.evaluate(await t.$(latestContentInTable), (ele) => ele.highlight());
  await t.evaluate(await t.$(workflow), (ele) => {
    ele.focus();
    ele.click();
  });
});

step('CMS CLICK TRANSLATION EXPORT TAB', async function () {
  await t.click(CommonData.cmsTranslationExportTab);
  gauge.screenshot();
});

step('CMS CLICK ADD TO EXPORT', async function () {
  await t.evaluate(await t.$(addToExport), (ele) => {
    ele.focus();
    ele.click();
  });
  gauge.screenshot();
});

step('CMS CLICK TRANSLATION EXPORT', async function () {
  await t.scrollTo(await t.$(translationExport));
  await t.evaluate(await t.$(translationExport), (ele) => {
    ele.focus();
    ele.click();
  });
  gauge.screenshot();
});

step('CMS CLICK THE REPORT TO DOWNLOAD', async function () {
  await t.scrollTo(await t.$(fileToDownload));
  await t.evaluate(await t.$(fileToDownload), (ele) => {
    ele.focus();
    ele.click();
  });
  gauge.screenshot();
});

step('CMS CLICK GENERATE REPORT', async function () {
  await t.evaluate(await t.$(generateReport), (ele) => {
    ele.focus();
    ele.click();
  });
  gauge.screenshot();
});
