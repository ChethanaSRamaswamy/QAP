var CommonData = {};
const feature = 'OAB';
// https://github.com/getgauge/gauge-js/blob/master/docs/syntax/data-stores.md
const gaugeStore = gauge.dataStore.scenarioStore;
const gaugeStoreSpec = gauge.dataStore.specStore;

var UserEmailFieldAppHQ = '';
var UserPswdFieldAppHQ = '';
var UserSubmitBtnAppHQ = '';
var PhoneNumberFieldAppHQ = '';
var UserNameFieldAppHQ = '';
var UserLastNameFieldAppHQ = '';
var UserCPFFieldAppHQ = '';
var UserZoomLinkFieldAppHQ = '';
var UserGetSmsNotificationONAppHQ = '';
var ContainerAppHQ = '';
var LanguageAppHQ = '';
var LoaderAppHQ = '';
var LogoAppHQ = '';
var FooterContainerAppHQ = '';
var FooterAddAppAppHQ = '';
var FooterSettingsAppHQ = '';
var FooterSchedulePageAppHQ = '';
var FooterSearchAppBtnAppHQ = '';
var FooterDashboardBtnAppHQ = '';
var KebabIconAppHQ = '';
var KebabEditAppHQ = '';
var KebabDeleteAppHQ = '';
var KebabResetPswdAppHQ = '';
var ModalDeleteBtnAppHQ = '';
var NextMonthArrowAppHQ = '';
var PrevMonthArrowAppHQ = '';
var DayByDateCalendarAppHQ = '';
var AppointmentStatusAppHQ = '';
var BookedViaAppHQ = '';
var CountryCodeCreationAppHQ = '';
var SelectLanguageAppHQ = '';
var PhoneNumberInputAppHQ = '';
var CreateBtnFooterAppHQ = '';
var NotificationPageAppHQ = '';
var NotificationCloseAppHQ = '';
var NotificationContainerAppHQ = '';
var SaveBtnFooterAppHQ = '';
var CancelBtnFooterAppHQ = '';
var CancelBtnHeaderAppHQ = '';
var CancelBtnAppHQ = '';
var ConfirmBtnModalAppHQ = '';
var DeleteBtnModalAppHQ = '';
var ConfirmBtnFooterAppHQ = '';
var CloseModalHeaderAppHQ = '';
var CreateNewAppHQ = '';
var AddNewAppHQ = '';
var ArchiveBtnKebabAppHQ = '';
var ArchiveBtnModalAppHQ = '';
var ActivateBtnKebabAppHQ = '';
var ActivateBtnModalAppHQ = '';
var ArchivedTabAppHQ = '';
var ActiveTabAppHQ = '';
var FilterBtnAppHQ = '';
var RemoveBtnAppHQ = '';
var SearchClearBtnAppHQ = '';
var ModuleServicesAppHQ = '';
var ModuleServicesCategoriesAppHQ = '';
var ModuleUsersAppHQ = '';
var ModuleSmsAppHQ = '';
var ModuleUnclosedAppointmentsAppHQ = '';
var ModuleDataFeedsMainAppHQ = '';
var ModuleReportingMainAppHQ = '';
var ModuleRetailersAppHQ = '';
var ModuleImportStoresAppHQ = '';
var ModuleFeaturesAppHQ = '';
var ModuleGlobalAppHQ = '';
var ModuleAboutAppHQ = '';
var ModuleStoresAppHQ = '';
var ModuleScheduleAppHQ = '';
var ReportGeneralReportingAppHQ = '';
var ReportSmsReportingAppHQ = '';
var ReportLeagueTableAppHQ = '';
var ReportLeagueTableStatusAppHQ = '';
var ReportUsersReportingAppHQ = '';
var ReportArtistCommReportingAppHQ = '';
var ReportStoreReportingAppHQ = '';
var ReportBookingUtilizReportingAppHQ = '';
var ReportServicesAppHQ = '';
var ReportCustomReportingAppHQ = '';
var DataFeedsAppointmentAppHQ = '';
var DataFeedsStoresAppHQ = '';
var DataFeedsServicesAppHQ = '';
var ReportingActionBtnAppHQ = '';
var BackToSettingsAppHQ = '';
var SearchInModulesAppHQ = '';
var StoreMenuOpenAppHQ = '';
var SeeMoreButtonAppHQ = '';
var BrandDropDownAppHQ = '';
var BrandNameInputAppHQ = '';
var BrandInputAppHQ = '';
var CountryDropDownAppHQ = '';
var CountryInputAppHQ = '';
var ContinueButtonAppHQ = '';
var CountryResultAppHQ = '';
var StoreDropdownAppHQ = '';
var StoreInputAppHQ = '';
var StoreResultAppHQ = '';
var StoresInDropdownAppHQ = '';
var StoresInDropdownSpecificAppHQ = '';
var BrandsInDropdownAppHQ = '';
var RegionsInDropdownAppHQ = '';
var ModalSelectBrandRegionAppHQ = '';
var SearchAppInputAppHQ = '';
var SearchBtnAppHQ = '';
var CloseSearchAppHQ = '';
var SearchSchadowAppHQ = '';
var AppointmentResultsAppHQ = '';
var GetServiceAppHQ = '';
var GetDateAppHQ = '';
var SelectedServiceNameAppHQ = '';
var SelectedServiceDurationAppHQ = '';
var RegionIDAppHQ = '';
var ServiceCategoryInputAppHQ = '';
var ServiceCategoryAppHQ = '';
var ServiceTabNameAppHQ = '';
var OnlineContentIDContainerAppHQ = '';
var ServiceNameInputAppHQ = '';
var ServiceOnlineIDInputAppHQ = '';
var SelectVirtualServiceAppHQ = '';
var ServiceDurationDropdownAppHQ = '';
var ServiceIDInputAppHQ = '';
var OnlineServiceIDAppHQ = '';
var TestAppointmentAppHQ = '';
var TestEmailAppHQ = '';
var ServiceAllAppHQ = '';
var ServiceToSelectAppHQ = '';
var ServiceDuartionAppHQ = '';
var ServiceSelectedAppHQ = '';
var ServiceNameAppHQ = '';
var SelectedDayAppHQ = '';
var DayInCalendarThisMonthAppHQ = '';
var NoTimeSlotsAvaAppHQ = '';
var TimeslotsAppHQ = '';
var NextAvailableTimeslotsAppHQ = '';
var PasswordExpiredTitleAppHQ = '';
var PswdOldInputAppHQ = '';
var PswdNew1AppHQ = '';
var PswdNew2AppHQ = '';
var PswdConfAppHQ = '';
var ResetBtnFooterAppHQ = '';
var ProfileIconAppHQ = '';
var ProfileUpdateBtnAppHQ = '';
var ProfileLogoutBtnAppHQ = '';
var ColapsableContainersAppHQ = '';
var StoresListAppHQ = '';
var CreateStoreBrandNameAppHQ = '';
var CreateStoreCountryAppHQ = '';
var CreateStoreIDAppHQ = '';
var CreateStoreNameInputAppHQ = '';
var CreateStoreNumberInputAppHQ = '';
var CreateStoreTown1InputAppHQ = '';
var CreateStoreAddress1AppHQ = '';
var CreateStoreStateinputAppHQ = '';
var CreateStorePostCodeInputAppHQ = '';
var CreateStoreMaxConcurAppByDayAppHQ = '';
var CreateStoreMaxConcurentAppHQ = '';
var CreateStoreMaxConcurAppAppHQ = '';
var CreateStoreIsVirtualAppHQ = '';
var CreateStoreMaxAppServicesAppHQ = '';
var CreateStore12TimeFormatAppHQ = '';
var CreateStore24TimeFormatAppHQ = '';
var CreateStoreTimeZoneAppHQ = '';
var SchedulePageHeaderAppHQ = '';
var ScheduleCalendarDropdownAppHQ = '';
var ScheduleCalendarDropdownNameAppHQ = '';
var ScheduleTitleAppHQ = '';
var ScheduleTitleListAppHQ = '';
var ScheduleWeeklyViewAppHQ = '';
var ScheduleTodayWeeklyViewAppHQ = '';
var ScheduleMonthlyViewAppHQ = '';
var SchedulePageRightArrowAppHQ = '';
var ScheduleZoomEmailAppHQ = '';
var SchedulePageLeftArrowAppHQ = '';
var ScheduleCalendarHeaderAppHQ = '';
var SchedulePageFutureEventAppHQ = '';
var ScheduleNameAppHQ = '';
var ScheduleModeOnlineAppHQ = '';
var ScheduleModeOfflineAppHQ = '';
var ScheduleIsVirtualAppHQ = '';
var ScheduleCreateTimeSlotAppHQ = '';
var ScheduleTimeFromAppHQ = '';
var ScheduleTimeToAppHQ = '';
var ScheduleDetailsTabAppHQ = '';
var ScheduleWorkingHrsTabAppHQ = '';
var ScheduleDayIsClosedAppHQ = '';
var ScheduleHourTimeAppHQ = '';
var ScheduleMinTimeAppHQ = '';
var ScheduleAmOrPmAppHQ = '';
var ScheduleAmAppHQ = '';
var SchedulePmAppHQ = '';
var ScheduleAddNewSlotAppHQ = '';
var ScheduleRemoveSlotAppHQ = '';
var ScheduleDayAppHQ = '';
var ScheduleServicesCategoryAppHQ = '';
var ScheduleServicesNotSelectedAppHQ = '';
var ScheduleServicesNameAppHQ = '';
var ScheduleIDAppHQ = '';
var ScheduleOnlineAppHQ = '';
var ScheduleOfflineAppHQ = '';
var ScheduleOffSetAppHQ = '';
var ScheduleEndOffSetAppHQ = '';
var SchedulesListAppHQ = '';
var ScheduleDayListAppHQ = '';
var ScheduleTimeSlotsListAppHQ = '';
var ScheduleBookingModeLabelAppHQ = '';
var SchedulePageActiveCalAppHQ = '';
var ScheduleTvelveHourBoxAppHQ = '';
var ScheduleStartTimeAppHQ = '';
var ScheduleEndTimeAppHQ = '';
var DashboardPeriodDDAppHQ = '';
var DashboardSectionsAppHQ = '';
var DashboardTotalCalHrsTitleAppHQ = '';
var DashboardTotalAppHrsTitleAppHQ = '';
var DashboardStoreOpenHrsUtilTitleAppHQ = '';
var DashboardCalUtilTitleAppHQ = '';
var DashboardMaxCalAvailAppHQ = '';
var DashboardTotalAvailCalHrsAppHQ = '';
var DashboardStoreStatusAppHQ = '';
var DashboardTotalBookedAppHQ = '';
var DashboardOnlineBookedAppHQ = '';
var DashboardInStoreBookedAppHQ = '';
var DashboardWalkInBookedAppHQ = '';
var DashboardPhoneBookedAppHQ = '';
var DashboardPendingAppHQ = '';
var DashboardNoShowAppHQ = '';
var DashboardCompleteNoPurAppHQ = '';
var DashboardCompletePurAppHQ = '';
var DashboardCancelledAppHQ = '';
var DashboardLoaderAppHQ = '';
var CreateUserRoleDropDownAppHQ = '';
var CreateUserRolesOptionsAppHQ = '';
var CreateUserIDAppHQ = '';
var CreateUserCounterNameAppHQ = '';
var CreateUserCounterListAppHQ = '';
var CreateUserRegionNameAppHQ = '';
var CreateUserAssignAppHQ = '';
var CreateUserBrandsCheckedAppHQ = '';
var CreateUserRegionCheckedAppHQ = '';
var CreateUserStoresCheckedAppHQ = '';
var ShowOtherCounterUsersAppHQ = '';
var UsersListAppHQ = '';
var UsersListEmailAppHQ = '';
var UsersResetPwdAppHQ = '';
var UsersUpdateUserAppHQ = '';
var UserBrandCheckedAppHQ = '';
var UserRegionCheckedAppHQ = '';
var SelectAllStoresAppHQ = '';
var UnclosedAppsContainerAppHQ = '';
var CloseUnclosedPageAppHQ = '';
var FeaturesStatusAppHQ = '';
var FeaturesAppHQ = '';
var FeatureStatusModalAppHQ = '';
var FeatureAssignAppHQ = '';
var FeatureAllBrandsAppHQ = '';
var FeatureAllRegionsAppHQ = '';
var FeatureSelectArtistCheckboxAppHQ = '';
var FeatureExclusiveServiceAppHQ = '';
var FeaturePrePucharseAppHQ = '';
var FeaturesInvoiceNoAppHQ = '';
var FeaturesPucharsePriceAppHQ = '';

var t = require('taiko');
const Helper = require('../../helpers/helper');
const Hengine = require('../../../../datainterface/providers/hengine');
const oabHelp = require('../../helpers/oab_helper.js');
const assert = require('assert');
let siteDefinition, source, NullDataException;
const matchCondition = true;
// Global variables
let device = gaugeStore.get('device');
var UserDetailsAppHQ = [];
var UserDetailsEditAppHQ = [];
var UserCreateDetailsAppHQ = [];
var UserEditDetailsAppHQ = [];
var UserDetailsTestAppHQ = []; // in progress
var UserDetailsTestEditAppHQ = [];
var ResetPasswordAppHQ = [];
var ChangePasswordAppHQ = [];
var ChangePasswordIncorrecAppHQ = [];
var BrandAndCountryAppHQ = [];
var ServiceAddAppHQ = [];
var ServiceEditAppHQ = [];
var DropDownsAppHQ = [];
var ServiceCategoryAddAppHQ = [];
var ServiceCategoryEditAppHQ = [];
var StoreAddAppHQ = [];
var StoreEditAppHQ = [];
var ScheduleAddAppHQ = [];
var ScheduleEditAppHQ = [];
var TestStore = [];
var StaffEmailsAppHQ = {};
function reinitialize() {
  UserDetailsAppHQ = [
    { loc: UserNameFieldAppHQ, data: CommonData.SDFIRSTNAME },
    { loc: UserLastNameFieldAppHQ, data: CommonData.SDLASTNAME },
    { loc: PhoneNumberInputAppHQ, data: CommonData.SDPHONE },
  ];
  UserDetailsTestAppHQ = [
    { loc: UserNameFieldAppHQ, data: CommonData.SDFIRSTNAMETEST },
    { loc: UserLastNameFieldAppHQ, data: CommonData.SDLASTNAMETEST },
    { loc: PhoneNumberInputAppHQ, data: CommonData.SDPHONE },
  ];
  UserDetailsEditAppHQ = [
    { loc: UserNameFieldAppHQ, data: CommonData.SDFIRSTNAME },
    { loc: UserLastNameFieldAppHQ, data: CommonData.SDLASTNAME },
    { loc: PhoneNumberInputAppHQ, data: CommonData.SDPHONE },
  ];
  UserDetailsTestEditAppHQ = [
    { loc: UserNameFieldAppHQ, data: CommonData.SDFIRSTNAMETEST },
    { loc: UserLastNameFieldAppHQ, data: CommonData.SDLASTNAMETEST },
    { loc: PhoneNumberInputAppHQ, data: CommonData.SDPHONE },
  ];
  UserCreateDetailsAppHQ = [
    { loc: UserNameFieldAppHQ, data: '#A Test' },
    { loc: UserLastNameFieldAppHQ, data: 'User Add' },
    { loc: UserPswdFieldAppHQ, data: CommonData.SDPASSWORDTOAPPHQ },
    { loc: PswdConfAppHQ, data: CommonData.SDPASSWORDTOAPPHQ },
  ];
  UserEditDetailsAppHQ = [
    { loc: UserNameFieldAppHQ, data: '#A Test' },
    { loc: UserLastNameFieldAppHQ, data: 'User Edit' },
  ];
  ResetPasswordAppHQ = [
    { loc: PswdOldInputAppHQ, data: CommonData.SDNEWUSERPWD },
    { loc: PswdNew1AppHQ, data: CommonData.SDPASSWORDTOAPPHQ },
    { loc: PswdNew2AppHQ, data: CommonData.SDPASSWORDTOAPPHQ },
  ];
  ChangePasswordAppHQ = [
    { loc: PswdOldInputAppHQ, data: CommonData.SDPASSWORDTOAPPHQ },
    { loc: PswdNew1AppHQ, data: CommonData.SDNEWUSERPWD },
    { loc: PswdNew2AppHQ, data: CommonData.SDNEWUSERPWD },
  ];
  ChangePasswordIncorrecAppHQ = [
    { loc: PswdOldInputAppHQ, data: 'CommonData.SDPASSWORDTOAPPHQ' },
    { loc: PswdNew1AppHQ, data: 'CommonData.SDNEWUSERPWD ' },
    { loc: PswdNew2AppHQ, data: 'CommonData.SDNEWUSERPWD' },
  ];
  BrandAndCountryAppHQ = [
    { loc: BrandNameInputAppHQ, data: CommonData.SDBRANDFULLNAME },
    { loc: CountryInputAppHQ, data: CommonData.SDCOUNTRY },
  ];
  ServiceAddAppHQ = [{ loc: ServiceNameInputAppHQ, data: '#A Test Service' }];
  ServiceEditAppHQ = [
    { loc: ServiceNameInputAppHQ, data: '#A Test Service Edit' },
  ];
  DropDownsAppHQ = [
    { loc: 'serviceTime', dataNew: '20 min', dataEdit: '10 min' },
    { loc: 'timezone', data: CommonData.SDTIMEZONE },
    {
      loc: 'roleId',
      dataAd: 4,
      dataCM: 5,
      dataAr: 6,
      dataRM: 7,
      dataPM: 8,
      dataSU: 9,
    },
  ];
  ServiceCategoryAddAppHQ = [
    { loc: ServiceCategoryInputAppHQ, data: '#A Test Service Category' },
  ];
  ServiceCategoryEditAppHQ = [
    { loc: ServiceCategoryInputAppHQ, data: '#A Test Service Category Edit' },
  ];
  TestStore = [
    {
      loc: CreateStoreNameInputAppHQ,
      data: `#Automation Test Store ${CommonData.SDBRANDNAME} ${CommonData.SDLOCALEID}`,
    },
    { loc: CreateStoreNumberInputAppHQ, data: '00112137' },
    { loc: CreateStoreAddress1AppHQ, data: '#A Test Address' },
    { loc: CreateStoreTown1InputAppHQ, data: '#A Test Town' },
    { loc: CreateStoreStateinputAppHQ, data: '#A Test State' },
    { loc: CreateStorePostCodeInputAppHQ, data: '12345' },
    { loc: PhoneNumberFieldAppHQ, data: '71234567890' },
    { loc: CreateStoreMaxConcurAppByDayAppHQ, data: '1,1,1,1,1,1,1' },
    { loc: CreateStoreMaxConcurAppAppHQ, data: '1' },
    { loc: CreateStoreMaxAppServicesAppHQ, data: '1' },
  ];
  StoreAddAppHQ = [
    { loc: CreateStoreNameInputAppHQ, data: '#A Test Store' },
    { loc: CreateStoreNumberInputAppHQ, data: '1' },
    { loc: CreateStoreAddress1AppHQ, data: 'storeAdressAppHQ' },
    { loc: CreateStoreTown1InputAppHQ, data: 'storeTown' },
    { loc: CreateStoreStateinputAppHQ, data: 'test store STATE' },
    { loc: CreateStorePostCodeInputAppHQ, data: '12883' },
    { loc: PhoneNumberFieldAppHQ, data: '987654321' },
    { loc: CreateStoreMaxConcurAppByDayAppHQ, data: '1,1,1,1,1,1,1' },
    { loc: CreateStoreMaxConcurAppAppHQ, data: '1' },
    { loc: CreateStoreMaxAppServicesAppHQ, data: '1' },
  ];
  StoreEditAppHQ = [
    { loc: CreateStoreNameInputAppHQ, data: '#A Test Store Edit' },
    {
      loc: CreateStoreNumberInputAppHQ,
      data: '0',
    },
    { loc: CreateStoreAddress1AppHQ, data: 'storeAdressAppHQ' },
    { loc: CreateStoreTown1InputAppHQ, data: 'storeTown' },
    { loc: CreateStoreStateinputAppHQ, data: 'test store STATE' },
    { loc: CreateStorePostCodeInputAppHQ, data: '12883' },
    { loc: PhoneNumberFieldAppHQ, data: '897654312' },
    { loc: CreateStoreMaxConcurAppByDayAppHQ, data: '0,0,0,0,0,0,0' },
    { loc: CreateStoreMaxConcurAppAppHQ, data: '2' },
    { loc: CreateStoreMaxAppServicesAppHQ, data: '1' },
  ];
  ScheduleAddAppHQ = [
    { loc: ScheduleNameAppHQ, data: '#Automation Schedule DO NOT TOUCH' },
    { loc: ScheduleOffSetAppHQ, data: '24' },
    { loc: ScheduleEndOffSetAppHQ, data: '33' },
  ];
  ScheduleEditAppHQ = [
    { loc: ScheduleNameAppHQ, data: '#A Test Schedule Edit' },
    { loc: ScheduleOffSetAppHQ, data: '24' },
    { loc: ScheduleEndOffSetAppHQ, data: '30' },
  ];
  StaffEmailsAppHQ = {
    superadministrator: 'superadministrator@automation.qa',
    brandadmin: 'brandadmin@automation.qa',
    countermanager: 'countermanager@automation.qa',
    reportmanager: 'reportmanager@automation.qa',
    passwordmanager: 'passwordmanager@automation.qa',
    artist: 'artist@automation.qa',
  };
}
let searchAppHQFound;
let storeNameFromResponse = '';
let brandNameSelected = '';
let searchedUser = '';
let appDateFromResposneAppHQ;
let dateSelectedAppHQ;
let appointmentFound;
let searchServiceAppHQ;
let searchDateAppHQ;
let serviceNameSecondLang;
let allExceedMaxDurAppHQ;
let apptHQServiceDurationText;
let apptHQServiceName;
let apptHQServiceDurationNumber;
let selectedDayInAppHQ;
let selectedTimeInAppHQ;
let regionIDServCat;
let servCatName;
let serviceIDAppHQ;
let serviceNameAppHQ;
let serviceDurationAppHQ;
let userRoleText;
let userRoleValue;
let userNewEmail = '';
let userLastName = '';
let customerNewEmail;
let userListOfStoresNew;
let userNameModalText;
let userSurNameModalText;
let userEmailModalText;
let userRoleModalValue;
let userListOfStores;
let bookingUtilizationAppHQ;
let maxCalendarAva;
let totalCalendarHours;
let totalAppHrs;
let totalAvailCalHrs;
let storeOpenHrsUtil;
let calUtilTxt;
let onlineStoresAppHQ;
let storeStatus;
let appointmentsBookedAppHQ;
let totalBooked;
let onlineBooked;
let inStoreBooked;
let walkInBooked;
let phoneBooked;
let appointmentsStatusAppHQ;
let pendingApp;
let noShowApp;
let completeAppNoPur;
let completeAppPur;
let cancelledApp;
let permisions;
let modalServiceNameAppHQ;
let modalServiceDurationAppHQ;
let customerNameAppHQ;
let customerSurnameAppHQ;
let emailAppHQ;
let phoneNumberAppHQ;
let zoomLinkAppHQ;
let cpfNumberAppHQ;
let appHQSMSEnabled;
let storeNameAppHQ;
let storeNumberAppHQ;
let storeAdressAppHQ;
let storeTownAppHQ;
let storeStateAppHQ;
let storePostCodeAppHQ;
let storePhoneAppHQ;
let storePhonePrefixAppHQ;
let storeMaxConcurAppHQ;
let storeMaxServicesAppHQ;
const storeMaxConcurListAppHQ = [];
let storeStatusRes;
let totalBookedRes;
let onlineBookedRes;
let inStoreBookedRes;
let walkInBookedRes;
let phoneBookedRes;
let pendingAppRes;
let noShowAppRes;
let completeAppNoPurRes;
let completeAppPurRes;
let cancelledAppRes;
let maxCalendarAvaRes;
let totalCalendarHoursRes;
let totalAppHrsRes;
let totalAvailCalHrsRes;
let storeOpenHrsUtilRes;
let calUtilTxtRes;
const scheduleTimeSlots = [];
const timeslotsSavedAppHq = [];
const initialFeatureStatus = [];
let isEnabledGlobal;
let featureEnabledInBrandAppHQ;
let featureEnabledInRegionAppHQ;
let featureEnabledInStoreAppHQ;
let currentFeature = '';
let serviceCategoryGlobal = '';
let serviceIDNew = '';
let serviceGlobal = '';
let storeAddID = '';
let storeGlobal = '';
let scheduleGlobal = '';

async function initFrameworkSettings() {
  // This should come from Gauge Tags inputs
  const tags = process.env.tags.split(',');
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

  // Reinitialize
  reinitialize();

  // Delete all the cookies
  await t.deleteCookies();

  gauge.message('ENVIRONMENT : ' + siteDefinition.executionContext.environment);
}

// APPHQ
// REQUIRES BOOK APPOINTMENT WITH INTERCEPT
async function loaderDissappear(timeout) {
  await t.waitFor(async () => {
    return !(await (await t.$(LoaderAppHQ)).exists(0, 0));
  }, timeout);
}
let apptHQUrl;
async function searchFor(phaseTosearch, inputSelector, listOfResults) {
  let phraseSearched;
  await oabHelp.scrollToAndWriteInto(t, phaseTosearch, inputSelector);
  if (await oabHelp.ifExists(t, FilterBtnAppHQ, 0, 0)) {
    if (await oabHelp.ifExists(t, ShowOtherCounterUsersAppHQ, 0, 0)) {
      const isChecked = await oabHelp.isChecked(t, ShowOtherCounterUsersAppHQ);
      if (!isChecked) {
        await oabHelp.scrollToAndClickSelector(
          t,
          ShowOtherCounterUsersAppHQ,
          false
        );
      }
    }
    await oabHelp.scrollToAndClickSelector(t, FilterBtnAppHQ, false);
    await t
      .text(phaseTosearch, { exactMatch: true }, t.below(phaseTosearch))
      .exists(oabHelp.intervalBlink, oabHelp.timeOutBlink);
  }
  await loaderDissappear(oabHelp.timeOutLong);
  const listOfElements = await oabHelp.getElementsList(t, listOfResults);
  for (let i = 0; i < listOfElements.length; i++) {
    phraseSearched = await t.evaluate(
      await listOfElements[i],
      (ele) => ele.firstChild.textContent
    );
    if (oabHelp.compareVal(phraseSearched, phaseTosearch)) {
      return [phraseSearched, i];
    }
  }
  if (!phraseSearched) {
    return false;
  }
}

step('OAB AppHQ Initialize Helix', async function () {
  // Initialize the selectors from DB
  await initFrameworkSettings();
  device = siteDefinition.executionContext.platform.toUpperCase();
});

step('OAB AppHQ Go to Appointment HQ page', async function () {
  if (siteDefinition.executionContext.environment.toUpperCase() === 'DEV') {
    await t.openTab(
      'https://appointmentbooking.dev.omni.esteeonline.com/appointments-hq/auth/login',
      {
        waitForNavigation: true,
        waitForEvents: ['DOMContentLoaded'],
      }
    );
    gauge.message('Redirection to AppHQ DEV');
  } else if (
    siteDefinition.executionContext.environment.toUpperCase() === 'STAGE' ||
    siteDefinition.executionContext.environment.toUpperCase() === 'FEAT'
  ) {
    await t.openTab(
      'https://stage.appointmentbooking.dev.omni.esteeonline.com/appointments-hq/auth/login',
      {
        waitForNavigation: true,
        waitForEvents: ['DOMContentLoaded'],
      }
    );
    gauge.message('Redirection to AppHQ STAGE');
  } else if (
    siteDefinition.executionContext.environment.toUpperCase() === 'PREPROD'
  ) {
    await t.openTab('https://dev.omni.esteeonline.com/appointments-hq/', {
      waitForNavigation: true,
      waitForEvents: ['DOMContentLoaded'],
    });
    gauge.message('Redirection to AppHQ PREPROD');
  } else if (
    siteDefinition.executionContext.environment.toUpperCase() === 'PROD'
  ) {
    if (CommonData.SDREGIONNAME.includes('EMEA')) {
      await t.openTab(
        'https://appointmentbooking.prod.omni.esteeonline.com/appointments-hq/auth/login',
        {
          waitForNavigation: true,
          waitForEvents: ['DOMContentLoaded'],
        }
      );
      gauge.message('Redirection to AppHQ EMEA PROD');
    } else if (CommonData.SDREGIONNAME.includes('APAC')) {
      await t.openTab(
        'https://appointmentbooking.prod.kr.omni.esteeonline.com/appointments-hq/auth/login',
        {
          waitForNavigation: true,
          waitForEvents: ['DOMContentLoaded'],
        }
      );
      gauge.message('Redirection to AppHQ APAC PROD');
    } else if (
      CommonData.SDREGIONNAME.includes('NA') ||
      CommonData.SDREGIONNAME.includes('LATAM')
    ) {
      await t.openTab(
        'https://appointmentbooking.prod.us.omni.esteeonline.com/appointments-hq/auth/login',
        {
          waitForNavigation: true,
          waitForEvents: ['DOMContentLoaded'],
        }
      );
      gauge.message('Redirection to AppHQ NA PROD');
    }
  }
  apptHQUrl = await t.currentURL();
  gauge.message(apptHQUrl);
});

// log in
step(
  'OAB AppHQ Log in into Appointment HQ with <credencialsType> credencials',
  async function (credencialsType) {
    let loginAppHQ;
    let pwdAppHQ;
    let msg;
    if (credencialsType === 'correct') {
      loginAppHQ = CommonData.SDLOGINTOAPPHQ;
      pwdAppHQ = CommonData.SDPASSWORDTOAPPHQ;
    } else if (credencialsType === 'not existing user') {
      loginAppHQ = 'notexists@qa.com';
      pwdAppHQ = CommonData.SDPASSWORDTOAPPHQ;
      msg = oabHelp.messages.modalMsgCredencialsNotMatch;
    } else if (credencialsType === 'empty') {
      loginAppHQ = '';
      pwdAppHQ = '';
      msg = oabHelp.messages.modalMsgFieldsRequired;
    } else if (credencialsType === 'new user') {
      loginAppHQ = userNewEmail;
      pwdAppHQ = CommonData.SDPASSWORDTOAPPHQ;
    } else if (credencialsType === 'new user edited') {
      loginAppHQ = userNewEmail;
      pwdAppHQ = CommonData.SDPASSWORDTOAPPHQ;
    }
    await oabHelp.scrollToAndWriteInto(t, loginAppHQ, UserEmailFieldAppHQ);
    await oabHelp.scrollToAndWriteInto(t, pwdAppHQ, UserPswdFieldAppHQ);
    oabHelp.takeScreenshot(device);
    await oabHelp.scrollToAndClickSelector(t, UserSubmitBtnAppHQ, false);
    await loaderDissappear(oabHelp.timeOutLong);
    if (
      credencialsType === 'correct' ||
      credencialsType === 'new user' ||
      credencialsType === 'new user edited'
    ) {
      if (
        await oabHelp.ifExists(
          t,
          PasswordExpiredTitleAppHQ,
          oabHelp.interval,
          oabHelp.timeOutBlink
        )
      ) {
        if (credencialsType !== 'new user edited') {
          await oabHelp.checkMessageOnModal(
            t,
            NotificationPageAppHQ,
            NotificationCloseAppHQ,
            NotificationContainerAppHQ,
            oabHelp.messages.modalMsgOldPasswordExpired
          );
          await oabHelp.writeIntoLoop(t, ChangePasswordAppHQ);
          await oabHelp.scrollToAndClickSelector(t, UserSubmitBtnAppHQ, false);
          await loaderDissappear(oabHelp.timeOutLong);
          await oabHelp.checkMessageOnModal(
            t,
            NotificationPageAppHQ,
            NotificationCloseAppHQ,
            NotificationContainerAppHQ,
            oabHelp.messages.modalMsgPasswordSuccessReset
          );
          // Revert to old password
          await oabHelp.scrollToAndClickSelector(t, ProfileIconAppHQ, false);
          await oabHelp.scrollToAndClickSelector(
            t,
            ProfileUpdateBtnAppHQ,
            false
          );
          await oabHelp.scrollToAndClickSelector(t, ResetBtnFooterAppHQ, false);
          await oabHelp.writeIntoLoop(t, ResetPasswordAppHQ);
          await oabHelp.scrollToAndClickSelector(
            t,
            ConfirmBtnFooterAppHQ,
            false
          );
          await loaderDissappear(oabHelp.timeOutLong);
          await oabHelp.checkMessageOnModal(
            t,
            NotificationPageAppHQ,
            NotificationCloseAppHQ,
            NotificationContainerAppHQ,
            ''
          ); // TO DO pomyslec!
          await oabHelp.scrollToAndClickSelector(
            t,
            CancelBtnFooterAppHQ,
            false
          );
          await loaderDissappear(oabHelp.timeOutQuick);
        } else {
          gauge.message('Reset password form visible!');
          await t.reload({
            waitForEvents: ['DOMContentLoaded'],
            waitForNavigation: false,
          });
        }
      }
    } else {
      await oabHelp.checkMessageOnModal(
        t,
        NotificationPageAppHQ,
        NotificationCloseAppHQ,
        NotificationContainerAppHQ,
        msg
      );
    }
  }
);

step(
  'OAB AppHQ Log in into Appointment HQ as <userType> with <api>',
  { continueOnFailure: true },
  async function (userType, api) {
    let landingModuleAppHQ;
    let landingPage;
    permisions = [];
    if (userType === 'superadministrator') {
      landingModuleAppHQ = DashboardSectionsAppHQ;
      landingPage = 'Dashboard';
    } else if (userType === 'brandadmin') {
      landingModuleAppHQ = DashboardSectionsAppHQ;
      landingPage = 'Dashboard';
    } else if (userType === 'countermanager') {
      landingModuleAppHQ = SchedulePageActiveCalAppHQ;
      landingPage = 'Schedule';
    } else if (userType === 'reportmanager') {
      landingModuleAppHQ = ModuleReportingMainAppHQ;
      landingPage = 'Settings';
    } else if (userType === 'passwordmanager') {
      landingModuleAppHQ = ShowOtherCounterUsersAppHQ;
      landingPage = 'Users';
    } else if (userType === 'artist') {
      landingModuleAppHQ = SchedulePageActiveCalAppHQ;
      landingPage = 'Schedule';
    }
    const loginAppHQ = StaffEmailsAppHQ[userType];
    oabHelp.takeScreenshot(device);
    await oabHelp.scrollToAndWriteInto(t, loginAppHQ, UserEmailFieldAppHQ);
    await oabHelp.scrollToAndWriteInto(
      t,
      CommonData.SDPASSWORDTOAPPHQ,
      UserPswdFieldAppHQ
    );
    if (api === 'api') {
      await oabHelp.fetchEnable(t, `*${userType}*`, 'XHR', 'Response');
    }
    await oabHelp.scrollToAndClickSelector(t, UserSubmitBtnAppHQ, false);
    if (api === 'api') {
      try {
        const responseData = await oabHelp.getNetworkData(
          t,
          `*${userType}*`,
          'Response'
        );
        const allPermisions = responseData.permissions;
        if (allPermisions) {
          for (let i = 0; i < allPermisions.length; i++) {
            permisions.push(allPermisions[i]);
          }
        } else {
          assert(!matchCondition, 'SMTH BROKEN!');
        }
      } catch (error) {
        console.error(error);
      }
    }
    // TO DO on reset response data is not provided
    if (
      await (
        await t.$(PasswordExpiredTitleAppHQ)
      ).exists(oabHelp.interval, oabHelp.timeOutQuick)
    ) {
      await oabHelp.writeIntoLoop(t, ChangePasswordAppHQ);
      await oabHelp.scrollToAndClickSelector(t, UserSubmitBtnAppHQ, false);
      // Revert to old password
      await oabHelp.scrollToAndClickSelector(t, ProfileIconAppHQ, false);
      await oabHelp.scrollToAndClickSelector(t, ProfileUpdateBtnAppHQ, false);
      await oabHelp.scrollToAndClickSelector(t, ResetBtnFooterAppHQ, false);
      await oabHelp.writeIntoLoop(t, ResetPasswordAppHQ);
      await oabHelp.scrollToAndClickSelector(t, ConfirmBtnFooterAppHQ, false);
      await oabHelp.scrollToAndClickSelector(t, CloseModalHeaderAppHQ, false);
    }
    if (
      await oabHelp.ifVisible(
        t,
        landingModuleAppHQ,
        oabHelp.intervalBlink,
        oabHelp.timeOutLong
      )
    ) {
      gauge.message(
        `${userType} has been redirected correctly to ${landingPage}!`
      );
    } else {
      // TO DO asercja
      assert(
        !matchCondition,
        `${userType.toUpperCase()} HAS NOT BEEN REDIRECTED CORRECTLY!`
      );
    }
  }
);

step('OAB AppHQ Log out from Appointment HQ', async function () {
  await oabHelp.scrollToAndClickSelector(t, ProfileIconAppHQ, false);
  await oabHelp.scrollToAndClickSelector(t, ProfileLogoutBtnAppHQ, false);
  await loaderDissappear(oabHelp.timeOutLong);
  await oabHelp.checkMessageOnModal(
    t,
    NotificationPageAppHQ,
    NotificationCloseAppHQ,
    NotificationContainerAppHQ,
    oabHelp.messages.modalMsgLogOut
  );
});

step('OAB AppHQ Select brand, country and <type> store', async function (type) {
  const appHQElement = 'Store';
  await loaderDissappear(oabHelp.timeOutLong);
  // must be with js
  await oabHelp.scrollToAndClickSelector(t, StoreMenuOpenAppHQ, false, 'js');
  await oabHelp.scrollToAndClickSelector(t, SeeMoreButtonAppHQ, false);
  // Select Brand and Region
  await oabHelp.scrollToAndClickSelector(t, BrandDropDownAppHQ, false);
  if (type === 'OAB' || type === 'VOAB' || type === 'Online') {
    await oabHelp.scrollToAndWriteInto(
      t,
      CommonData.SDBRANDFULLNAME,
      BrandNameInputAppHQ
    );
    brandNameSelected = CommonData.SDBRANDFULLNAME;
  } else {
    await oabHelp.scrollToAndWriteInto(
      t,
      CommonData.SDTESTBRANDNAME,
      BrandNameInputAppHQ
    );
    brandNameSelected = CommonData.SDTESTBRANDNAME;
  }
  await oabHelp.scrollToAndClickSelector(t, BrandInputAppHQ, false);
  await oabHelp.scrollToAndClickSelector(t, CountryDropDownAppHQ, false);
  await oabHelp.scrollToAndWriteInto(
    t,
    CommonData.SDCOUNTRY,
    CountryInputAppHQ
  );
  await oabHelp.scrollToAndClickSelector(t, CountryResultAppHQ, false);
  gauge.message('Brand selected: ' + brandNameSelected);
  gauge.message('Country selected: ' + BrandAndCountryAppHQ[1].data);
  oabHelp.takeScreenshot(device);
  // Selecting Store
  let msg = oabHelp.messages.modalMsgSelected(appHQElement);
  let store;
  await oabHelp.scrollToAndClickSelector(t, ContinueButtonAppHQ, false);
  await oabHelp.scrollToAndClickSelector(t, StoreDropdownAppHQ, false);
  storeNameFromResponse = gaugeStore.get('Store Name');
  if (!storeNameFromResponse) {
    storeNameFromResponse = gaugeStoreSpec.get('Store Name Spec');
  }
  if (type === 'OAB' || type === 'VOAB' || type === 'Online') {
    // store = '-- All --';
    store = storeNameFromResponse;
  } else {
    if (type === 'Test created' || type === 'Test edited') {
      store = storeGlobal;
    } else if (type === 'Test OAB') {
      store = CommonData.SDTESTSTOREOAB;
    } else if (type === 'Test VOAB') {
      store = CommonData.SDTESTSTOREVOAB;
    } else {
      store = '-- All --';
      msg = oabHelp.messages.modalMsgUnSelected(appHQElement);
    }
  }
  await oabHelp.scrollToAndWriteInto(t, store, StoreInputAppHQ);
  await oabHelp.scrollToAndClickSelector(t, StoreResultAppHQ, false);
  oabHelp.takeScreenshot(device);
  gauge.message('Counter selected: ' + store);
  // Continue
  await t.waitFor(oabHelp.timeOutBlink);
  await oabHelp.scrollToAndClickSelector(t, ContinueButtonAppHQ, false);
  await oabHelp.waitForExists(t, NotificationPageAppHQ, oabHelp.timeOutLong);
  await oabHelp.checkMessageOnModal(
    t,
    NotificationPageAppHQ,
    NotificationCloseAppHQ,
    NotificationContainerAppHQ,
    msg
  );
  await loaderDissappear(oabHelp.timeOutLong);
});

// appointment
step(
  'OAB AppHQ Search Appointment for a <userType> with <isApi>',
  async function (userType, isApi) {
    await oabHelp.waitForNotExists(t, SearchSchadowAppHQ, oabHelp.timeOutNorm);
    await oabHelp.scrollToAndClickSelector(t, FooterSearchAppBtnAppHQ, false);
    await (
      await t.$(SearchAppInputAppHQ)
    ).exists(oabHelp.interval, oabHelp.timeOutNorm);
    if (userType === 'Return User') {
      searchedUser = CommonData.SDREGISTEREDEMAIL;
    } else if (userType === 'created by AppHQ') {
      searchedUser = customerNewEmail;
    } else {
      let emailSave = gaugeStore.get('Guest Email');
      if (!emailSave) {
        emailSave = gaugeStoreSpec.get('Guest Email Spec');
      }
      searchedUser = emailSave;
    }
    let appIDFromResponseFE = gaugeStore.get('App ID Response');
    if (!appIDFromResponseFE) {
      appIDFromResponseFE = gaugeStoreSpec.get('App ID Response Spec');
    }
    await oabHelp.scrollToAndWriteInto(t, searchedUser, SearchAppInputAppHQ);
    if (isApi === 'api') {
      await oabHelp.fetchEnable(t, '*results*', 'XHR', 'Response');
      await oabHelp.scrollToAndClickSelector(t, SearchBtnAppHQ, false);
      const parsedResponse = await oabHelp.getNetworkData(
        t,
        '*results*',
        'Response'
      );
      try {
        const appointmentListTotal = parsedResponse.total;
        if (appointmentListTotal === 0) {
          appointmentFound = false;
        } else {
          for (let i = 0; i < appointmentListTotal; i++) {
            appDateFromResposneAppHQ = parsedResponse.data[i].start_time;
            const appIDFromResponseAppHQ = parsedResponse.data[i].id;
            // In case the ID of appointment is already known (i.e. from Fe or previous search)
            if (appIDFromResponseAppHQ === appIDFromResponseFE) {
              appointmentFound = i;
              break;
            } else if (
              oabHelp.dateParserApp(appDateFromResposneAppHQ, dateSelectedAppHQ)
            ) {
              // DateSelected is only provied if Appo created in AppHQ
              // appIDFromResponseAppHQFound = appIDFromResponseAppHQ;
              appointmentFound = i;
              break;
            } else {
              appointmentFound = false;
            }
          }
        }
      } catch (e) {
        gauge.message(e);
      }
    } else {
      await oabHelp.scrollToAndClickSelector(t, SearchBtnAppHQ, false);
      await loaderDissappear(oabHelp.timeOutLong);
      if (await oabHelp.ifVisible(t, GetDateAppHQ, 0, 0)) {
        const listOfApp = await oabHelp.getElementsList(t, GetDateAppHQ);
        for (let i = 0; i < listOfApp.length; i++) {
          const searchedDateAppHQ = await oabHelp.getText(t, GetDateAppHQ, i);
          if (oabHelp.dateParserApp(searchedDateAppHQ, dateSelectedAppHQ)) {
            appointmentFound = i;
            break;
          }
        }
        if (appointmentFound === false) {
          assert(!matchCondition, 'NO APPOINTMENT FOUND');
        }
      } else {
        assert(!matchCondition, 'THERE IS NO APPOINTMENT FOR THIS USER');
      }
    }
  }
);

step(
  'OAB AppHQ Get appointment details from search result for <appointmentType> appointment',
  async function (appointmentType) {
    await loaderDissappear(oabHelp.timeOutLong);
    if (appointmentFound !== false) {
      if (appointmentType === 'cancelled') {
        assert(
          !matchCondition,
          `FOR ${searchedUser} USER THERE SHOULD NOT BE ANY APPOINTMENT!`
        );
      } else {
        searchDateAppHQ = await oabHelp.getText(
          t,
          GetDateAppHQ,
          appointmentFound
        );
        searchServiceAppHQ = await oabHelp.getText(
          t,
          GetServiceAppHQ,
          appointmentFound
        );
        await oabHelp.scrollToAndClickElement(
          t,
          AppointmentResultsAppHQ,
          appointmentFound,
          false
        );
        await loaderDissappear(oabHelp.timeOutLong);
        gaugeStore.put('searchServiceAppHQ', searchServiceAppHQ);
        gauge.message('Service Name Appts HQ: ' + searchServiceAppHQ);
        gauge.message('Appointment date Appts HQ: ' + searchDateAppHQ);
      }
    } else {
      if (appointmentType === 'pending') {
        assert(
          !matchCondition,
          `FOR ${searchedUser} USER THERE SHOULD BE AN APPOINTMENT!`
        );
      } else {
        gauge.message(`Appointment cancelled for: ${searchedUser}`);
      }
    }
  }
);

step(
  'OAB AppHQ Get appointment details from modal <type>',
  async function (type) {
    await loaderDissappear(oabHelp.timeOutLong);
    // Schedule TO DO
    let calendarNameFromResponse = gaugeStore.get('Calendar Name Response');
    if (!calendarNameFromResponse) {
      calendarNameFromResponse = gaugeStoreSpec.get(
        'Calendar Name Response Spec'
      );
    }
    if (calendarNameFromResponse) {
      await t
        .text(
          calendarNameFromResponse,
          { exactMatch: true },
          t.below('Select Schedule')
        )
        .exists();
    }
    // Service name
    modalServiceNameAppHQ = await oabHelp.getText(t, SelectedServiceNameAppHQ);
    gauge.message('Service name AppHQ: ' + modalServiceNameAppHQ);
    // Service duration
    modalServiceDurationAppHQ = await oabHelp.getText(
      t,
      SelectedServiceDurationAppHQ
    );
    gauge.message('Service duration AppHQ: ' + modalServiceDurationAppHQ);
    // Name
    customerNameAppHQ = await oabHelp.getValue(t, UserNameFieldAppHQ);
    gauge.message('Name Appts HQ: ' + customerNameAppHQ);
    gaugeStore.put('customerNameAppHQ', customerNameAppHQ);
    // Last name
    customerSurnameAppHQ = await oabHelp.getValue(t, UserLastNameFieldAppHQ);
    gauge.message('Surname Appts HQ: ' + customerSurnameAppHQ);
    gaugeStore.put('customerSurnameAppHQ', customerSurnameAppHQ);
    // email
    emailAppHQ = await oabHelp.getValue(t, UserEmailFieldAppHQ);
    gauge.message('Email Appts HQ: ' + emailAppHQ);
    gaugeStore.put('emailAppHQ', emailAppHQ);
    // Phone
    phoneNumberAppHQ = await oabHelp.getValue(t, PhoneNumberFieldAppHQ);
    gauge.message('Phone number Appts HQ: ' + phoneNumberAppHQ);
    gaugeStore.put('phoneNumberAppHQ', phoneNumberAppHQ);
    // SMS TO DO
    if (
      await oabHelp.ifExists(
        t,
        UserGetSmsNotificationONAppHQ,
        oabHelp.interval,
        oabHelp.timeOutQuick
      )
    ) {
      await t.evaluate(await t.$(UserGetSmsNotificationONAppHQ), (ele) =>
        ele.scrollIntoView({ block: 'center' })
      );
      appHQSMSEnabled = true;
      gauge.message('SMS Notification is ON');
    } else {
      gauge.message('SMS Notification is OFF');
    }
    oabHelp.takeScreenshot(device);

    // Zoom link
    if (type === 'VOAB') {
      zoomLinkAppHQ = await oabHelp.getValue(t, UserZoomLinkFieldAppHQ);
      gaugeStore.put('zoomLinkAppHQ', zoomLinkAppHQ);
      gauge.message('Zoom link Appts HQ: ' + zoomLinkAppHQ);
      oabHelp.takeScreenshot(device);
    }
    // CPF
    if (CommonData.SDLOCALEID.includes('BR')) {
      cpfNumberAppHQ = await oabHelp.getValue(t, UserCPFFieldAppHQ);
      gauge.message('CPF Appts HQ: ' + cpfNumberAppHQ);
      gaugeStore.put('cpfNumberAppHQ', cpfNumberAppHQ);
      oabHelp.takeScreenshot(device);
    }
  }
);

step(
  'OAB AppHQ Dual Langage second service name check',
  { continueOnFailure: true },
  async function () {
    // TO DO!!! add for app created in Appthq
    if (CommonData.SDLANGUAGECOOKIE) {
      const confirmationServiceName = gaugeStore.get('Service Name Cof');
      if (!oabHelp.compareVal(confirmationServiceName, searchServiceAppHQ)) {
        await oabHelp.scrollToAndClickSelector(t, FooterSettingsAppHQ, false);
        await oabHelp.clickModuleAppHQ(t, ModuleServicesAppHQ, 'visible');
        const servicesCategoriesList = await oabHelp.getElementsList(
          t,
          ColapsableContainersAppHQ
        );
        for (let i = 0; i < servicesCategoriesList.length; i++) {
          // JOLA I AGA
          await oabHelp.scrollToAndClickElement(
            t,
            ColapsableContainersAppHQ,
            i,
            false
          );
          const servicesNamesList = await oabHelp.getElementsList(
            t,
            ColapsableContainersAppHQ +
              '[' +
              (i + 1) +
              ']' +
              ServiceTabNameAppHQ
          );
          for (let j = 0; j < servicesNamesList.length; j++) {
            const serviceName = await oabHelp.getText(
              t,
              ColapsableContainersAppHQ +
                '[' +
                (i + 1) +
                ']' +
                ServiceTabNameAppHQ,
              j
            );
            if (serviceName === searchServiceAppHQ) {
              await oabHelp.scrollToAndClickElement(
                t,
                KebabIconAppHQ,
                j,
                false
              );
              await t.click(await 'Edit', { waitForNavigation: false });
              await t.click(await 'Additional Languages', {
                waitForNavigation: false,
              });
              const getSecondLang = async () => {
                serviceNameSecondLang = await oabHelp.getValue(
                  t,
                  '#service-languages input'
                );
                return serviceNameSecondLang;
              };
              serviceNameSecondLang = await getSecondLang();
              gauge.message(
                'Second language service name: ' + serviceNameSecondLang
              );
              gaugeStore.put('serviceNameSecondLang', serviceNameSecondLang);
              await t.click(await 'Cancel', { waitForNavigation: false });
              i = 1000;
            }
          }
        }
        apptHQUrl = await t.currentURL();
      } else {
        gauge.message('Service name matches Confirmation page and AppHQ');
      }
    } else {
      gauge.message('This is skipped for single language sites.');
    }
  }
);

step(
  'OAB AppHQ Assert if SMS notifications were correctly transffered <state> from <where>',
  { continueOnFailure: true },
  async function (state, where) {
    let error;
    // SMS Notifications
    if (where === 'FE') {
      const smsNotificationFromResponse = gaugeStore.get('SMS Response');
      if (state === 'on') {
        if (appHQSMSEnabled === true && smsNotificationFromResponse === 0) {
          error = 'SMS WERE ENABLED IN THE APPHQ BUT NOT IN THE NETWORK CALL!';
        } else if (
          appHQSMSEnabled !== true &&
          smsNotificationFromResponse === 1
        ) {
          error =
            'SMS WERE NOT ENABLED IN THE APPHQ BUT ARE ENABLED IN THE NETWORK CALL!';
        } else if (
          appHQSMSEnabled !== true &&
          smsNotificationFromResponse === 0
        ) {
          error =
            'SMS WERE NOT ENABLED IN THE APPHQ AND ARE NOT ENABLED IN THE NETWORK CALL!';
        }
      } else {
        if (appHQSMSEnabled === true && smsNotificationFromResponse === 1) {
          error = 'SMS WERE ENABLED IN THE APPHQ AND IN THE NETWORK CALL!';
        } else if (
          appHQSMSEnabled === true &&
          smsNotificationFromResponse === 0
        ) {
          error = 'SMS WERE ENABLED IN THE APPHQ!';
        } else if (
          appHQSMSEnabled !== true &&
          smsNotificationFromResponse === 1
        ) {
          error =
            'SMS WERE NOT ENABLED IN THE APPHQ BUT ARE ENABLED IN THE NETWORK CALL!';
        }
      }
      gauge.message(
        `sms_notifications_enabled:' + ${smsNotificationFromResponse}`
      );
    } else {
      if (state === 'on') {
        if (appHQSMSEnabled === false) {
          error = 'SMS were disabled in the AppHQ!';
        }
      } else {
        if (appHQSMSEnabled === true) {
          error = 'SMS were enabled in the AppHQ!';
        }
      }
    }
    gauge.message(`SMS checkbox checked: ${appHQSMSEnabled}`);
    if (error) {
      assert(!matchCondition, error);
    }
  }
);

step('OAB AppHQ Clear and close searched appointment', async function () {
  let error;
  const newValueinInput = await oabHelp.getValue(t, SearchAppInputAppHQ);
  if (newValueinInput !== '') {
    await oabHelp.scrollToAndClickSelector(t, SearchClearBtnAppHQ, false);
    const newValueInInputAfterClear = await oabHelp.getValue(
      t,
      SearchAppInputAppHQ
    );
    if (newValueInInputAfterClear !== '') {
      error = 'Field was not cleared!';
    }
  }
  await oabHelp.scrollToAndClickSelector(t, CloseSearchAppHQ, false);
  await oabHelp.scrollToAndClickSelector(t, LogoAppHQ, false);
  await oabHelp.waitForNotExists(t, SearchSchadowAppHQ, oabHelp.timeOutNorm);
  if (error) {
    assert(!matchCondition, error);
  }
});

// Appointment creation in AppHQ

step(
  'OAB AppHQ Check if services listed do not exceed maximum duration',
  { continueOnFailure: true },
  async function () {
    let error = '';
    const wrongDurationArr = [];
    const serviceList = await oabHelp.getElementsList(t, ServiceAllAppHQ);
    const maxAppDurFromResponse = gaugeStore.get('Max appointment duration');
    for (let i = 0; i < serviceList.length; i++) {
      const apptHQSerDurAll = await oabHelp.getText(t, ServiceDuartionAppHQ, i);
      const apptHQSerDurDigit = Number(apptHQSerDurAll.split(' ')[0]);
      if (apptHQSerDurDigit >= maxAppDurFromResponse) {
        const apptHQSerName = await oabHelp.getText(t, ServiceNameAppHQ, i);
        wrongDurationArr.push(i);
        error = oabHelp.composeError(
          error,
          `Service that exceeds max duration: ${apptHQSerName}, number on list: ${i}`
        );
      }
    }
    if (wrongDurationArr.length === serviceList.length) {
      error = oabHelp.composeError(
        error,
        'ALL SERVICES EXCEED MAXIMUM DURATION!'
      );
      allExceedMaxDurAppHQ = true;
    }
    if (error) {
      assert(!matchCondition, error);
    }
  }
);

step(
  'OAB AppHQ Select service from appointment modal <action>',
  { continueOnFailure: false },
  async function (action) {
    let selectableCheck;
    await loaderDissappear(oabHelp.timeOutLong);
    const serviceList = await oabHelp.getElementsList(t, ServiceAllAppHQ);
    if (
      (await oabHelp.ifExists(
        t,
        ServiceToSelectAppHQ,
        oabHelp.interval,
        oabHelp.timeOutQuick
      )) &&
      !allExceedMaxDurAppHQ
    ) {
      const durationsArray = [];
      for (let i = 0; i < serviceList.length; i++) {
        apptHQServiceDurationText = await oabHelp.getText(
          t,
          ServiceDuartionAppHQ,
          i
        );
        apptHQServiceName = await oabHelp.getText(t, ServiceNameAppHQ, i);
        apptHQServiceDurationNumber = Number(
          apptHQServiceDurationText.split(' ')[0]
        );
        durationsArray.push(apptHQServiceDurationNumber, apptHQServiceName);
      }
      // Selecting shortest serice
      let shortestService;
      const durationsArraySort = durationsArray
        .slice()
        .sort((a, b) => a[0] - b[0]);
      if (action === 'create') {
        shortestService = durationsArray.findIndex((element) => {
          return element[0] === durationsArraySort[0][0];
        });
        selectableCheck = await oabHelp.getAttributeElement(
          serviceList,
          shortestService,
          'class'
        );
      }
      let serviceIndex;
      // If booking for the first time first statement is applicable.
      if (action === 'create' && selectableCheck.includes('not-selected')) {
        serviceIndex = shortestService;
      } else if (action === 'edit') {
        await oabHelp.scrollToAndClickSelector(t, ServiceSelectedAppHQ, false);
        const shortestService2 = durationsArray.findIndex((element) => {
          return element[1] === durationsArraySort[1][1];
        });
        serviceIndex = shortestService2;
      } else {
        const maxAppDurFromResponse = gaugeStore.get(
          'Max appointment duration'
        );
        durationsArray[shortestService] = maxAppDurFromResponse + 1;
        const secondMin = Math.min(...durationsArray);
        if (secondMin <= maxAppDurFromResponse) {
          const secondShortestService = durationsArray.indexOf(secondMin);
          serviceIndex = secondShortestService;
        } else {
          assert(!matchCondition, 'SERVICE CAN NOT BE EDITED!');
        }
      }
      await oabHelp.scrollToAndClickElement(
        t,
        ServiceAllAppHQ,
        serviceIndex,
        false
      );
      apptHQServiceName = await oabHelp.getText(
        t,
        ServiceNameAppHQ,
        serviceIndex
      );
      apptHQServiceDurationText = await oabHelp.getText(
        t,
        ServiceDuartionAppHQ,
        serviceIndex
      );
      apptHQServiceDurationNumber = Number(
        apptHQServiceDurationText.split(' ')[0]
      );
      gauge.message('Service selected: ' + apptHQServiceName);
      gauge.message('Service duration: ' + apptHQServiceDurationText);
      oabHelp.takeScreenshot(device);
    } else {
      if (action === 'edit') {
        gauge.message('There is only one service.');
      } else {
        assert(!matchCondition, 'NO SERVICES CAN BE SELECTED!');
      }
    }
  }
);

async function selectTimeSlot(serviceDuration, dateSelected, action) {
  let counterTime = 0;
  let counterEle = 0;
  let avalCondition;
  const listOfTimeslots = await oabHelp.getElementsList(t, TimeslotsAppHQ);
  const listOfSlotsAva = [];
  for (let i = 0; i < listOfTimeslots.length; i++) {
    const classofEle = await oabHelp.getAttributeElement(
      listOfTimeslots,
      i,
      'class'
    );
    const timeslotTxt = await oabHelp.getText(t, TimeslotsAppHQ, i);
    if (action === 'create') {
      avalCondition = classofEle === 'timeslot unavailable' ? false : true;
    } else {
      avalCondition =
        classofEle === 'timeslot unavailable' ||
        classofEle === 'timeslot available selected'
          ? false
          : true;
    }
    listOfSlotsAva.push({
      time: timeslotTxt,
      aval: avalCondition,
    });
    if (i > 0) {
      if (listOfSlotsAva[i - 1].aval && listOfSlotsAva[i].aval) {
        counterTime += oabHelp.calculateTimeDiff(
          dateSelected,
          listOfSlotsAva[i].time,
          dateSelected,
          listOfSlotsAva[i - 1].time
        );
        counterEle++;
        if (counterTime >= serviceDuration) {
          selectedTimeInAppHQ = await oabHelp.getText(
            t,
            TimeslotsAppHQ,
            i - counterEle
          );
          await oabHelp.scrollToAndClickElement(
            t,
            TimeslotsAppHQ,
            i - counterEle,
            false
          );
          return selectedTimeInAppHQ;
        } else {
          continue;
        }
      } else {
        counterTime = 0;
        counterEle = 0;
        continue;
      }
    }
  }
  console.log('THERE IS NO FREE TIMESLOT FOR THIS DAY');
  return false;
}

step(
  'OAB AppHQ Select date and time <futureOrPast> from appointment modal <action>',
  async function (futureOrPast, action) {
    selectedDayInAppHQ = '';
    selectedTimeInAppHQ = '';
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
    if (futureOrPast === 'future') {
      const dateSelectedNum = await oabHelp.getText(t, SelectedDayAppHQ);
      let listOfDaysInCal = await oabHelp.getElementsList(
        t,
        DayInCalendarThisMonthAppHQ
      );
      const nextElementToClick = Number(dateSelectedNum);
      const startIndex =
        nextElementToClick < listOfDaysInCal.length ? nextElementToClick : 0;
      if (startIndex === 0) {
        await oabHelp.scrollToAndClickSelector(t, NextMonthArrowAppHQ, false);
        await t.waitFor(oabHelp.waitForParam);
        listOfDaysInCal = await oabHelp.getElementsList(
          t,
          DayInCalendarThisMonthAppHQ
        );
      }
      for (let i = startIndex; i < listOfDaysInCal.length; i++) {
        await oabHelp.scrollToAndClickElement(
          t,
          DayInCalendarThisMonthAppHQ,
          i,
          false
        );
        await loaderDissappear(oabHelp.timeOutLong);
        if (
          !(await oabHelp.ifExists(
            t,
            NoTimeSlotsAvaAppHQ,
            oabHelp.intervalBlink,
            oabHelp.timeOutBlink
          ))
        ) {
          selectedDayInAppHQ = await oabHelp.getAttributeElement(
            listOfDaysInCal,
            i,
            'aria-label'
          );
          await loaderDissappear(oabHelp.timeOutLong);
          selectedTimeInAppHQ = await selectTimeSlot(
            apptHQServiceDurationNumber,
            selectedDayInAppHQ,
            action
          );
        }
        if (!selectedTimeInAppHQ) {
          listOfDaysInCal = await oabHelp.getElementsList(
            t,
            DayInCalendarThisMonthAppHQ
          );
          continue;
        }
        break;
      }
    } else {
      const yestardayDate = new Date(
        new Date().setDate(new Date().getDate() - 1)
      );
      const todayDate = new Date(new Date().setDate(new Date().getDate()));
      const yesterdayDateTxt = yestardayDate.toLocaleDateString(
        'en-US',
        options
      );
      const dayInpastEle = DayByDateCalendarAppHQ.replace(
        '*',
        yesterdayDateTxt
      );
      if (todayDate.getMonth() !== yestardayDate.getMonth()) {
        await oabHelp.scrollToAndClickSelector(t, PrevMonthArrowAppHQ, false);
      }
      await oabHelp.scrollToAndClickSelector(t, dayInpastEle, false);
      const selectedDayInPastAppHQ = await oabHelp.getAttributeSelector(
        t,
        dayInpastEle,
        'aria-label'
      );
      selectedTimeInAppHQ = await selectTimeSlot(
        apptHQServiceDurationNumber,
        selectedDayInPastAppHQ,
        action
      );
    }

    if (!selectedDayInAppHQ && !selectedTimeInAppHQ) {
      assert(!matchCondition, 'NO DATE CAN BE SELECTED!');
    } else {
      if (action === 'edit') {
        gauge.message('Date edited');
      }
      gauge.message('Selected date: ' + selectedDayInAppHQ);
      gauge.message('Selected time: ' + selectedTimeInAppHQ);
      dateSelectedAppHQ = selectedDayInAppHQ + ' ' + selectedTimeInAppHQ;
    }
  }
);

step(
  'OAB AppHQ Enter customer details and appointment language from appointment modal <action> <type>',
  async function (action, type) {
    let userAppHQ;
    if (type === 'test') {
      userAppHQ =
        action === 'create' ? UserDetailsTestAppHQ : UserDetailsTestEditAppHQ;
      await oabHelp.scrollToAndClickSelector(t, TestAppointmentAppHQ, false);
    } else {
      userAppHQ = action === 'create' ? UserDetailsAppHQ : UserDetailsEditAppHQ;
    }
    // Customer details
    if (action === 'create') {
      customerNewEmail = oabHelp.qatestdomain();
      await oabHelp.writeInto(t, customerNewEmail, UserEmailFieldAppHQ);
    }
    await oabHelp.writeIntoLoop(t, userAppHQ);
    // const countryCodeInput = await oabHelp.getValue(t, CountryCodeCreationAppHQ);
    // const countryCode = countryCodeInput.replace(/\D/g, '');
    oabHelp.takeScreenshot(device);
    await oabHelp.scrollToAndClickSelector(t, BookedViaAppHQ, false);
    if (CommonData.SDLOCALEID === 'BR') {
      if (
        await oabHelp.ifExists(
          t,
          UserCPFFieldAppHQ,
          oabHelp.interval,
          oabHelp.timeOutBlink
        )
      ) {
        await oabHelp.scrollToAndWriteInto(
          t,
          CommonData.SDCPF,
          UserCPFFieldAppHQ
        );
      } else {
        assert(!matchCondition, 'NO CPF FIELD FOR BRAZIL!');
      }
    }
    await t.dropDown({ name: 'bookedVia' }).select({ index: 0 });

    if (CommonData.SDMULTILANGUAGE === 'true' && CommonData.SDLANGUAGE) {
      // TO DO !!!!
      if (
        await oabHelp.ifExists(
          t,
          SelectLanguageAppHQ,
          oabHelp.interval,
          oabHelp.timeOutNorm
        )
      ) {
        await oabHelp.scrollToAndClickSelector(t, SelectLanguageAppHQ, false);
        await (await t.dropDown({ name: 'languageCode' })).select({ index: 0 }); // TO DO ZMIENIC NA ANGIELSKI !!!
      } else {
        assert(
          !matchCondition,
          'NO LANGUAGE SELECTION FIELD FOR MULTILANGUAGE SITE!'
        );
      }
    }
  }
);

step(
  'OAB AppHQ Change appointment status to <status>',
  async function (status) {
    await oabHelp.scrollToAndClickSelector(t, AppointmentStatusAppHQ, false);
    // status === 'Cancelled By Artist','Cancelled By Customer','No Show'

    await (await t.dropDown({ name: 'state' })).select(status);
    await oabHelp.scrollToAndClickSelector(t, SaveBtnFooterAppHQ, false);
  }
);

step(
  'OAB AppHQ Assert if appointment was <action> <type>',
  { continueOnFailure: true },
  async function (action, type) {
    let error;
    // Service name
    const servicesCheck = oabHelp.compareVal(
      apptHQServiceName,
      modalServiceNameAppHQ,
      'Service AppHQ',
      'Service AppHQ modal'
    );
    if (!servicesCheck) {
      error = oabHelp.composeError(error, oabHelp.messages.serviceNameNotSame);
    }
    // Service duration
    const durationsCheck = oabHelp.compareVal(
      apptHQServiceDurationText,
      modalServiceDurationAppHQ,
      'Duration AppHQ',
      'Duration AppHQ moda'
    );
    if (!durationsCheck) {
      error = oabHelp.composeError(
        error,
        oabHelp.messages.serviceDurationNotSame
      );
    }
    // User name
    let nameToCompare;
    let surNameToCompare;
    let emailToComapre;
    let phoneNumberToCompare;
    if (type === 'test') {
      nameToCompare =
        action === 'added'
          ? UserDetailsTestAppHQ[0].data
          : UserDetailsTestEditAppHQ[0].data;
      surNameToCompare =
        action === 'added'
          ? UserDetailsTestAppHQ[1].data
          : UserDetailsTestEditAppHQ[1].data;
      emailToComapre = customerNewEmail;
      phoneNumberToCompare =
        action === 'added'
          ? CommonData.SDCOUNTRYCODE + UserDetailsTestAppHQ[2].data
          : UserDetailsTestEditAppHQ[2].data;
    } else {
      nameToCompare =
        action === 'added'
          ? UserDetailsAppHQ[0].data
          : UserDetailsEditAppHQ[0].data;
      surNameToCompare =
        action === 'added'
          ? UserDetailsAppHQ[1].data
          : UserDetailsEditAppHQ[1].data;
      emailToComapre = customerNewEmail;
      phoneNumberToCompare =
        action === 'added'
          ? CommonData.SDCOUNTRYCODE + UserDetailsAppHQ[2].data
          : UserDetailsEditAppHQ[2].data;
    }
    const nameCheck = oabHelp.compareVal(
      customerNameAppHQ,
      nameToCompare,
      'User name from modal',
      'User name expected'
    );
    const surnameCheck = oabHelp.compareVal(
      customerSurnameAppHQ,
      surNameToCompare,
      'User surname from modal',
      'User surname expected'
    );
    const emailCheck = oabHelp.compareVal(
      emailAppHQ,
      emailToComapre,
      'User email from modal',
      'User email expected'
    );
    const phoneNumberCheck = oabHelp.compareVal(
      phoneNumberAppHQ,
      phoneNumberToCompare,
      'User phone number from modal',
      'User phone number expected'
    );
    if (!nameCheck) {
      error = oabHelp.composeError(error, 'NAME IS NOT THE SAME');
    }
    if (!surnameCheck) {
      error = oabHelp.composeError(error, 'SURNAME IS NOT THE SAME');
    }
    if (!emailCheck) {
      error = oabHelp.composeError(error, 'EMAIL IS NOT THE SAME');
    }
    if (!phoneNumberCheck) {
      error = oabHelp.composeError(error, 'PHONENUMBER IS NOT THE SAME');
    }
    // data and time TO DO NIE WYKORZYTSUJ PARU FUNKCJI DO TEGO SAMEGO
    const dateAndTimeCheck = oabHelp.dateParserApp(
      dateSelectedAppHQ,
      searchDateAppHQ
    );
    if (!dateAndTimeCheck) {
      error = oabHelp.composeError(
        error,
        `DATE AND TIME SAVED ${searchDateAppHQ}\n IS NOT THE SAME AS DATE CHOSEN ${dateSelectedAppHQ}`
      );
    } else {
      gauge.message(
        `Date and time saved ${searchDateAppHQ}\n is the same as date chosen ${dateSelectedAppHQ}`
      );
    }

    // CPF
    if (CommonData.SDLOCALEID === 'BR') {
      const cpfCheck = oabHelp.compareVal(
        CommonData.SDCPF,
        cpfNumberAppHQ,
        'CPF Test Data',
        'CPF AppHQ modal'
      );
      if (!cpfCheck) {
        error = oabHelp.composeError(error, oabHelp.messages.cpfNotSame);
      }
    }

    if (error) {
      assert(!matchCondition, error);
    }
    // TO DO Duration and price
  }
);

step(
  'OAB AppHQ Check if test <element> button is <status>',
  async function (element, status) {
    const buttonToCheck =
      element === 'appointment' ? TestAppointmentAppHQ : TestEmailAppHQ;
    const isVisible = await oabHelp.ifVisible(t, buttonToCheck, 0, 0);
    if (
      (isVisible && status === 'visible') ||
      (!isVisible && status !== 'visible')
    ) {
      gauge.message(
        isVisible
          ? 'Checkbox to create test appointment is visible!'
          : 'Checkbox to create test appointment is not visible!'
      );
    } else {
      assert(
        !matchCondition,
        `CHECKBOX TO CREATE TEST APPOINTMENT SHOULD${
          isVisible ? ' NOT' : ''
        } BE VISIBLE`
      );
    }
  }
);

// Common actions
step(
  'OAB AppHQ Click <saveOrCreate> <element> button from modal',
  { continueOnFailure: true },
  async function (saveOrCreate, element) {
    let buttonToClick;
    let msg;
    if (saveOrCreate === 'create') {
      buttonToClick = CreateBtnFooterAppHQ;
      msg = oabHelp.messages.modalMsgCreated(element);
    } else if (saveOrCreate === 'save') {
      buttonToClick = SaveBtnFooterAppHQ;
      if (element === 'timeslots') {
        msg = oabHelp.messages.modalTimeSlotCreated;
      } else if (element === 'feature') {
        msg = oabHelp.messages.featureUpdated(currentFeature);
      } else {
        msg = oabHelp.messages.modalMsgUpdated(element);
      }
    }
    await oabHelp.scrollToAndClickSelector(t, buttonToClick, false);
    await loaderDissappear(oabHelp.timeOutLong);
    await oabHelp.checkMessageOnModal(
      t,
      NotificationPageAppHQ,
      NotificationCloseAppHQ,
      NotificationContainerAppHQ,
      msg
    );
  }
);

step(
  'OAB AppHQ Search for <status> <moduleElement>',
  async function (status, moduleElement) {
    let elementList;
    let name;
    if (moduleElement === 'Service Category') {
      elementList = ServiceCategoryAppHQ;
      name = serviceCategoryGlobal;
    } else if (moduleElement === 'Service') {
      elementList = ServiceTabNameAppHQ;
      name = serviceGlobal;
    } else if (moduleElement === 'Store') {
      elementList = StoresListAppHQ;
      if (status === 'specific') {
        name = storeNameFromResponse;
      } else {
        name = storeGlobal;
      }
    } else if (moduleElement === 'Schedule') {
      elementList = SchedulesListAppHQ;
      name = scheduleGlobal;
    } else if (moduleElement === 'User') {
      elementList = UsersListEmailAppHQ;
      if (status === 'added' || status === 'edited' || status === 'deleted') {
        name = userNewEmail;
      } else {
        name = StaffEmailsAppHQ[status];
      }
    }

    searchAppHQFound = await searchFor(
      name,
      SearchInModulesAppHQ,
      elementList,
      moduleElement
    );
    oabHelp.takeScreenshot(device);
    if (searchAppHQFound) {
      if (status !== 'deleted') {
        gauge.message(`${moduleElement} ${name} was ${status}`);
      } else {
        assert(!matchCondition, `${moduleElement} ${name} WAS NOT ${status}`);
      }
    } else {
      if (status === 'deleted') {
        gauge.message(`${moduleElement} ${name} was ${status}`);
      } else {
        assert(!matchCondition, `${moduleElement} ${name} WAS NOT ${status}`);
      }
    }
  }
);

step(
  'OAB AppHQ Confirm <action> <element> from confirmation modal',
  { continueOnFailure: true },
  async function (action, element) {
    // ACTIONS - DELETE (), CONFIRM CANCEL APPO, ARCHIVE
    let msg;
    let cta;
    let name;
    if (action === 'delete') {
      msg =
        element === 'User'
          ? oabHelp.messages.modalMsgDeleted2(UserCreateDetailsAppHQ[0].data)
          : oabHelp.messages.modalMsgDeleted(element);
      cta = DeleteBtnModalAppHQ;
    } else if (action === 'confirm') {
      msg =
        element === 'appointment' ? '' : oabHelp.messages.modalMsgAppDeleted;
      cta = ConfirmBtnModalAppHQ;
    } else if (action === 'archive') {
      name = searchAppHQFound[0];
      msg = oabHelp.messages.modalMsgArchived(name, element);
      cta = ArchiveBtnModalAppHQ;
    } else if (action === 'reactivate') {
      name = searchAppHQFound[0];
      msg = oabHelp.messages.modalMsgReactivated(name, element);
      cta = ActivateBtnModalAppHQ;
    }
    await oabHelp.scrollToAndClickSelector(t, cta, false);
    await oabHelp.waitForExists(t, NotificationPageAppHQ, oabHelp.timeOutLong);
    await oabHelp.checkMessageOnModal(
      t,
      NotificationPageAppHQ,
      NotificationCloseAppHQ,
      NotificationContainerAppHQ,
      msg
    );
    await loaderDissappear(oabHelp.timeOutLong);
  }
);

step(
  'OAB AppHQ Click add new <subcategory> <status>',
  async function (subcategory, status) {
    let buttonToClick;
    if (
      subcategory === 'Store' ||
      subcategory === 'Schedule' ||
      subcategory === 'User' ||
      subcategory === 'Datafeed'
    ) {
      buttonToClick = CreateNewAppHQ;
    } else {
      // service, service caategory
      buttonToClick = AddNewAppHQ;
    }
    if (status === 'visible') {
      await oabHelp.scrollToAndClickSelector(t, buttonToClick, false);
      await loaderDissappear(oabHelp.timeOutLong);
    } else {
      if (
        await oabHelp.ifVisible(
          t,
          buttonToClick,
          oabHelp.intervalBlink,
          oabHelp.timeOutQuick
        )
      ) {
        assert(!matchCondition, 'USER CAN CREATE NEW!');
      }
    }
    oabHelp.takeScreenshot(device);
  }
);

// This can be used only for filtered resutls
step(
  'OAB AppHQ Open kebab menu <status> <any>',
  { continueOnFailure: true },
  async function (status, any) {
    if (status === 'visible') {
      const kebabExpanded = await oabHelp.getAttributeSelector(
        t,
        KebabIconAppHQ,
        'aria-expanded'
      );
      if (kebabExpanded === 'false') {
        if (any === 'any') {
          await oabHelp.scrollToAndClickElement(t, KebabIconAppHQ, 0, false);
        } else {
          await oabHelp.scrollToAndClickElement(
            t,
            KebabIconAppHQ,
            searchAppHQFound[1],
            false
          );
        }
      }
    } else {
      if (
        await oabHelp.ifVisible(
          t,
          KebabIconAppHQ,
          oabHelp.intervalBlink,
          oabHelp.timeOutQuick
        )
      ) {
        assert(!matchCondition, 'USER CAN SEE OPTION ON THE ELEMENT!');
      } else {
        gauge.message('User can not edit element.');
      }
    }
  }
);

// This can be used only for filtered resutls
step(
  'OAB AppHQ Open modal from list <status>',
  { continueOnFailure: true },
  async function (status) {
    if (status === 'visible') {
      await oabHelp.scrollToAndClickSelector(t, KebabEditAppHQ, false);
      await loaderDissappear(oabHelp.timeOutLong);
    } else {
      if (
        await oabHelp.ifVisible(
          t,
          KebabEditAppHQ,
          oabHelp.intervalBlink,
          oabHelp.timeOutQuick
        )
      ) {
        assert(!matchCondition, 'USER CAN EDIT ELEMENT!');
      } else {
        gauge.message('User can not edit element.');
      }
    }
  }
);

step(
  'OAB AppHQ Delete <moduleElement> from <where> <status>',
  { continueOnFailure: true },
  async function (moduleElement, where, status) {
    const buttonToClick =
      where === 'kebab' ? KebabDeleteAppHQ : ModalDeleteBtnAppHQ;
    if (status === 'visible') {
      await oabHelp.scrollToAndClickSelector(t, buttonToClick, false);
      await loaderDissappear(oabHelp.timeOutLong);
    } else {
      if (
        await oabHelp.ifVisible(
          t,
          buttonToClick,
          oabHelp.intervalBlink,
          oabHelp.timeOutQuick
        )
      ) {
        assert(!matchCondition, 'USER CAN DELETE ELEMENT!');
      } else {
        gauge.message('User can not delete element.');
      }
    }
  }
);

step(
  'OAB AppHQ Archive <moduleElement> from <where> <status>',
  async function (moduleElement, where, status) {
    // CAN BE ARCHIVED: STORE, SCHEDULE, SERVICE (kebab &modal)
    if (moduleElement === 'Schedule') {
      const bookingModeLabel = await oabHelp.getText(
        t,
        ScheduleBookingModeLabelAppHQ
      );
      gaugeStore.put('bookingModeLabel', bookingModeLabel);
    }
    const buttonToClick =
      where === 'kebab' ? ArchiveBtnKebabAppHQ : ArchiveBtnModalAppHQ;
    if (status === 'visible') {
      await oabHelp.scrollToAndClickSelector(t, buttonToClick, false);
      // TO DO BUG SERVICE DOES NOT HAVE CONFIRMATION POPUP FOR ARCHIVE
      if (moduleElement === 'Service') {
        await oabHelp.waitForExists(
          t,
          NotificationPageAppHQ,
          oabHelp.timeOutLong
        );
        await oabHelp.checkMessageOnModal(
          t,
          NotificationPageAppHQ,
          NotificationCloseAppHQ,
          NotificationContainerAppHQ,
          oabHelp.messages.modalMsgUpdated(moduleElement)
        );
      }
      await loaderDissappear(oabHelp.timeOutLong);
    } else {
      if (
        await oabHelp.ifVisible(
          t,
          buttonToClick,
          oabHelp.intervalBlink,
          oabHelp.timeOutQuick
        )
      ) {
        assert(!matchCondition, 'USER CAN ARCHIVE ELEMENT!');
      } else {
        gauge.message('User can not archive element.');
      }
    }
  }
);

step(
  'OAB AppHQ Activate <moduleElement> <status>',
  { continueOnFailure: true },
  async function (moduleElement, status) {
    let bookingModeCheck;
    if (moduleElement === 'Schedule') {
      const bookingModeLabel = await oabHelp.getText(
        t,
        ScheduleBookingModeLabelAppHQ
      );
      const remeberedMode = gaugeStore.get('bookingModeLabel');
      bookingModeCheck = oabHelp.compareVal(
        remeberedMode,
        bookingModeLabel,
        'Status before archive',
        'Status after achive'
      );
    } else {
      bookingModeCheck = true;
    }
    if (status === 'visible') {
      await oabHelp.scrollToAndClickSelector(t, ActivateBtnKebabAppHQ, false);
    } else {
      if (
        await oabHelp.ifVisible(
          t,
          ActivateBtnKebabAppHQ,
          oabHelp.intervalBlink,
          oabHelp.timeOutBlink
        )
      ) {
        assert(!matchCondition, 'ACTIVATE BUTTON SHOULD NOT BE VISIBLE!');
      } else {
        gauge.message('Activate button is not visible');
      }
    }
    if (moduleElement === 'Service') {
      await oabHelp.waitForExists(
        t,
        NotificationPageAppHQ,
        oabHelp.timeOutLong
      );
      await oabHelp.checkMessageOnModal(
        t,
        NotificationPageAppHQ,
        NotificationCloseAppHQ,
        NotificationContainerAppHQ,
        oabHelp.messages.modalMsgUpdated(moduleElement)
      );
    }
    await loaderDissappear(oabHelp.timeOutLong);
    if (!bookingModeCheck) {
      // TO DO
      // assert(!matchCondition, 'BOOKING MODE WAS NOT PRESERVED!');
    }
  }
);

step('OAB AppHQ Switch to Archive tab', async function () {
  await oabHelp.scrollToAndClickSelector(t, ArchivedTabAppHQ, false);
});

step('OAB AppHQ Switch to Active tab', async function () {
  await oabHelp.scrollToAndClickSelector(t, ActiveTabAppHQ, false);
});

step('OAB AppHQ Close modal window', async function () {
  await loaderDissappear(oabHelp.timeOutLong);
  await oabHelp.scrollToAndClickElement(t, CancelBtnAppHQ, 0, false);
  await t.waitFor(oabHelp.timeOutBlink);
});

// Modules
step('OAB AppHQ Click back to settings icon', async function () {
  await oabHelp.scrollToAndClickSelector(t, BackToSettingsAppHQ, false);
});

step(
  'OAB AppHQ Click <element> from footer <status>',
  async function (element, status) {
    let eleToClick;
    if (element === 'Dashboard') {
      eleToClick = FooterDashboardBtnAppHQ;
    } else if (element === 'Schedule') {
      eleToClick = FooterSchedulePageAppHQ;
    } else if (element === 'Add Appointment') {
      eleToClick = FooterAddAppAppHQ;
    } else if (element === 'Search') {
      eleToClick = FooterSearchAppBtnAppHQ;
    } else if (element === 'Settings') {
      eleToClick = FooterSettingsAppHQ;
    }

    if (status === 'visible') {
      await oabHelp.waitForNotExists(
        t,
        SearchSchadowAppHQ,
        oabHelp.timeOutQuick
      );
      await oabHelp.scrollToAndClickSelector(t, eleToClick, false);
      await loaderDissappear(oabHelp.timeOutLong);
      oabHelp.takeScreenshot(device);
    } else {
      const display = await oabHelp.getAttributeSelector(
        t,
        FooterContainerAppHQ,
        'style'
      );
      if (display === 'display: none;') {
        gauge.message('Footer is disabled for this user.');
      } else {
        assert(!matchCondition, 'FOOTER IS VISIBLE FOR THE USER!');
      }
    }
  }
);

step('OAB AppHQ Go to Stores <status>', async function (status) {
  await oabHelp.clickModuleAppHQ(t, ModuleStoresAppHQ, status);
  await loaderDissappear(oabHelp.timeOutLong);
  oabHelp.takeScreenshot(device);
});

step('OAB AppHQ Go to Schedules <status>', async function (status) {
  await oabHelp.clickModuleAppHQ(t, ModuleScheduleAppHQ, status);
  await loaderDissappear(oabHelp.timeOutLong);
  oabHelp.takeScreenshot(device);
});

step(
  'OAB AppHQ Go to Services <status>',
  { continueOnFailure: false },
  async function (status) {
    await oabHelp.clickModuleAppHQ(t, ModuleServicesAppHQ, status);
    await loaderDissappear(oabHelp.timeOutLong);
    if (
      status === 'visible' &&
      (await oabHelp.ifVisible(t, ColapsableContainersAppHQ, 0, 0))
    ) {
      await oabHelp.scrollToAndClickInLoop(
        t,
        ColapsableContainersAppHQ,
        0,
        1,
        false
      );
    }
    oabHelp.takeScreenshot(device);
  }
);

step(
  'OAB AppHQ Go to Service Categories <status>',
  { continueOnFailure: false },
  async function (status) {
    await oabHelp.clickModuleAppHQ(t, ModuleServicesCategoriesAppHQ, status);
    await loaderDissappear(oabHelp.timeOutLong);
    oabHelp.takeScreenshot(device);
  }
);

step(
  'OAB AppHQ Go to Users <status>',
  { continueOnFailure: false },
  async function (status) {
    await oabHelp.clickModuleAppHQ(t, ModuleUsersAppHQ, status);
    await loaderDissappear(oabHelp.timeOutLong);
    oabHelp.takeScreenshot(device);
  }
);

step(
  'OAB AppHQ Go to SMS Communications <status>',
  { continueOnFailure: false },
  async function (status) {
    await oabHelp.clickModuleAppHQ(t, ModuleSmsAppHQ, status);
    await loaderDissappear(oabHelp.timeOutLong);
    oabHelp.takeScreenshot(device);
  }
);

step(
  'OAB AppHQ Go to Unclosed Appointments <status>',
  { continueOnFailure: true },
  async function (status) {
    await oabHelp.clickModuleAppHQ(t, ModuleUnclosedAppointmentsAppHQ, status);
    if (await oabHelp.ifVisible(t, UnclosedAppsContainerAppHQ, 0, 0)) {
      await oabHelp.scrollToAndClickSelector(t, CloseUnclosedPageAppHQ, false);
    }
  }
);

// TO DO MORE dropdowns
step(
  'OAB AppHQ Go to Datafeeds <status>',
  { continueOnFailure: false },
  async function (status) {
    await oabHelp.clickModuleAppHQ(t, ModuleDataFeedsMainAppHQ, status);
    oabHelp.takeScreenshot(device);
  }
);
// TO DO MORE dropdowns
step(
  'OAB AppHQ Go to Reporting <status>',
  { continueOnFailure: false },
  async function (status) {
    await oabHelp.clickModuleAppHQ(t, ModuleReportingMainAppHQ, status);
    oabHelp.takeScreenshot(device);
  }
);

step(
  'OAB AppHQ Go to module <submodule>',
  { continueOnFailure: false },
  async function (submodule) {
    let buttonToClick;
    if (submodule === 'General Reporting') {
      buttonToClick = ReportGeneralReportingAppHQ;
    } else if (submodule === 'SMS Statistics') {
      buttonToClick = ReportSmsReportingAppHQ;
    } else if (submodule === 'League Table') {
      buttonToClick = ReportLeagueTableAppHQ;
    } else if (submodule === 'League Table Status') {
      buttonToClick = ReportLeagueTableStatusAppHQ;
    } else if (submodule === 'Users & Roles') {
      buttonToClick = ReportUsersReportingAppHQ;
    } else if (submodule === 'Artist Comments') {
      buttonToClick = ReportArtistCommReportingAppHQ;
    } else if (submodule === 'Stores') {
      buttonToClick = ReportStoreReportingAppHQ;
    } else if (submodule === 'Booking Utilization') {
      buttonToClick = ReportBookingUtilizReportingAppHQ;
    } else if (submodule === 'Services') {
      buttonToClick = ReportServicesAppHQ;
    } else if (submodule === 'Custom Reports') {
      buttonToClick = ReportCustomReportingAppHQ;
    } else if (submodule === 'Appointments Datafeeds') {
      buttonToClick = DataFeedsAppointmentAppHQ;
    } else if (submodule === 'Online Stores Datafeeds') {
      buttonToClick = DataFeedsStoresAppHQ;
    } else if (submodule === 'Services Datafeeds') {
      buttonToClick = DataFeedsServicesAppHQ;
    }
    // await t.evaluate(await t.$(buttonToClick), (ele) => {
    //   ele.scrollIntoViewIfNeeded(false);
    // });
    // await oabHelp.scrollToAndClickSelector(buttonToClick, false);
    await oabHelp.clickModuleAppHQ(t, buttonToClick, 'visible');
    await loaderDissappear(oabHelp.timeOutLong);
  }
);

step(
  'OAB AppHQ Go to Retailers <status>',
  { continueOnFailure: false },
  async function (status) {
    await oabHelp.clickModuleAppHQ(t, ModuleRetailersAppHQ, status);
    await loaderDissappear(oabHelp.timeOutLong);
    oabHelp.takeScreenshot(device);
  }
);

step(
  'OAB AppHQ Go to Import Stores <status>',
  { continueOnFailure: true },
  async function (status) {
    await oabHelp.clickModuleAppHQ(t, ModuleImportStoresAppHQ, status);
    await loaderDissappear(oabHelp.timeOutLong);
    oabHelp.takeScreenshot(device);
  }
);

step(
  'OAB AppHQ Go to Features <status>',
  { continueOnFailure: true },
  async function (status) {
    await oabHelp.clickModuleAppHQ(t, ModuleFeaturesAppHQ, status);
    await loaderDissappear(oabHelp.timeOutLong);
    oabHelp.takeScreenshot(device);
  }
);

step(
  'OAB AppHQ Go to Global <status>',
  { continueOnFailure: true },
  async function (status) {
    await oabHelp.clickModuleAppHQ(t, ModuleGlobalAppHQ, status);
    await loaderDissappear(oabHelp.timeOutLong);
    oabHelp.takeScreenshot(device);
  }
);

step(
  'OAB AppHQ Go to About <status>',
  { continueOnFailure: true },
  async function (status) {
    await oabHelp.clickModuleAppHQ(t, ModuleAboutAppHQ, status);
    await loaderDissappear(oabHelp.timeOutLong);
    oabHelp.takeScreenshot(device);
  }
);

let assignedBrands = [];
let assignedRegions = [];
let assignedStores = [];
step(
  'OAB AppHQ Check users assigned counters',
  { continueOnFailure: true },
  async function () {
    assignedBrands = (
      await oabHelp.getText(t, CreateUserBrandsCheckedAppHQ, 'all')
    ).split(',');
    assignedRegions = (
      await oabHelp.getText(t, CreateUserRegionCheckedAppHQ, 'all')
    ).split(',');
    assignedStores = (
      await oabHelp.getText(t, CreateUserStoresCheckedAppHQ, 'all')
    ).split(',');
  }
);

// super admin can store can brand region
// brand admin can store can bran region
// password mamanger can store can bran region
// counter manager can store can not brand region
// artist - can store, can not brand region
// reportmanager can nothing
step(
  'OAB AppHQ Check if user <ifCan> change store',
  { continueOnFailure: true },
  async function (ifCan) {
    await loaderDissappear(oabHelp.timeOutLong);
    const isDropDownDisabled = await t.evaluate(
      await t.$(StoreMenuOpenAppHQ),
      (ele) => ele.disabled
    );
    if (isDropDownDisabled) {
      if (ifCan === 'can') {
        assert(!matchCondition, `DROPDOWN IS DISABLED!`);
      } else {
        gaugeStore.put(
          'storesInDropdownArr',
          (await oabHelp.getText(t, StoreMenuOpenAppHQ)).split()
        );
        gauge.message(`User cannot change store.`);
      }
    } else {
      if (ifCan === 'can') {
        await loaderDissappear(oabHelp.timeOutLong);
        // must be with js
        await oabHelp.scrollToAndClickSelector(
          t,
          StoreMenuOpenAppHQ,
          false,
          'js'
        );
        // Get assigned stores
        gaugeStore.put(
          'storesInDropdownArr',
          (await oabHelp.getText(t, StoresInDropdownAppHQ, 'all'))
            .replace('-- All --,', '')
            .split(',')
        );
        // Click Test store existing OAB
        const storesInDropdownSpecific = StoresInDropdownSpecificAppHQ.replace(
          'Replace',
          CommonData.SDTESTSTOREOAB
        );
        await oabHelp.scrollToAndClickSelector(
          t,
          storesInDropdownSpecific,
          false
        );
        await loaderDissappear(oabHelp.timeOutLong);
        await oabHelp.checkMessageOnModal(
          t,
          NotificationPageAppHQ,
          NotificationCloseAppHQ,
          NotificationContainerAppHQ,
          oabHelp.messages.modalMsgSelected('Store')
        );
        gauge.message(`User can change stores.`);
      } else {
        assert(!matchCondition, `DROPDOWN IS NOT DISABLED!`);
      }
    }
  }
);

step(
  'OAB AppHQ Check if user <ifCan> change brand and region',
  { continueOnFailure: true },
  async function (ifCan) {
    await loaderDissappear(oabHelp.timeOutLong);
    const isDropDownDisabled = await t.evaluate(
      await t.$(StoreMenuOpenAppHQ),
      (ele) => ele.disabled
    );
    const isDropDownExpaned = await oabHelp.getAttributeSelector(
      t,
      StoreMenuOpenAppHQ,
      'aria-expanded'
    );
    if (isDropDownDisabled) {
      if (ifCan === 'can') {
        assert(!matchCondition, `DROPDOWN IS DISABLED!`);
      } else {
        gauge.message(`User cannot change brand or region.`);
      }
    } else {
      if (ifCan === 'can') {
        if (isDropDownExpaned === 'false') {
          // must be with js
          await oabHelp.scrollToAndClickSelector(
            t,
            StoreMenuOpenAppHQ,
            false,
            'js'
          );
        }
        await loaderDissappear(oabHelp.timeOutLong);
        await oabHelp.scrollToAndClickSelector(t, SeeMoreButtonAppHQ, false);
        // Get brands and regions
        gaugeStore.put(
          'brandsInDropdownArr',
          await oabHelp.getElementsList(t, BrandsInDropdownAppHQ)
        );
        gaugeStore.put(
          'brandsInDropdown',
          await oabHelp.getTextClear(t, BrandsInDropdownAppHQ, 'all')
        );
        gaugeStore.put(
          'regionsInDropdownArr',
          await oabHelp.getElementsList(t, RegionsInDropdownAppHQ)
        );
        gaugeStore.put(
          'regionsInDropdown',
          await oabHelp.getTextClear(t, RegionsInDropdownAppHQ, 'all')
        );
        await oabHelp.scrollToAndClickSelector(t, BrandDropDownAppHQ, false);
        await oabHelp.scrollToAndWriteInto(
          t,
          CommonData.SDTESTBRANDNAME,
          BrandNameInputAppHQ
        );
        await oabHelp.scrollToAndClickSelector(t, BrandInputAppHQ, false);
        await oabHelp.scrollToAndClickSelector(t, CountryDropDownAppHQ, false);
        await oabHelp.scrollToAndWriteInto(
          t,
          CommonData.SDCOUNTRY,
          CountryInputAppHQ
        );
        await oabHelp.scrollToAndClickSelector(t, CountryResultAppHQ, false);
        await oabHelp.scrollToAndClickSelector(t, ContinueButtonAppHQ, false);
        await oabHelp.scrollToAndClickSelector(t, StoreDropdownAppHQ, false);
        await oabHelp.scrollToAndWriteInto(
          t,
          CommonData.SDTESTSTOREOAB,
          StoreInputAppHQ
        );
        await oabHelp.scrollToAndClickSelector(t, StoreResultAppHQ, false);
        await t.waitFor(oabHelp.timeOutBlink);
        await oabHelp.scrollToAndClickSelector(t, ContinueButtonAppHQ, false);
        await loaderDissappear(oabHelp.timeOutLong);
      } else {
        if (
          await oabHelp.ifVisible(
            t,
            SeeMoreButtonAppHQ,
            oabHelp.intervalBlink,
            oabHelp.timeOutQuick
          )
        ) {
          assert(
            !matchCondition,
            `USER CAN SEE MORE BRANDS AND REGIONS BUTTON!`
          );
        } else {
          gauge.message('User can not see more stores and regions button');
        }
      }
      oabHelp.takeScreenshot(device);
    }
  }
);

step(
  'OAB AppHQ Assert assigned stores',
  { continueOnFailure: true },
  async function () {
    // Assert with assigned stores
    const storesInDropdown = gaugeStore.get('storesInDropdownArr');
    const setOfAssignedStores = new Set(assignedStores);
    const commonStores = [...setOfAssignedStores].filter((element) =>
      storesInDropdown.includes(element)
    );
    storesInDropdown.sort();
    commonStores.sort();
    const storesAssignedCheck = oabHelp.compareVal(
      commonStores,
      storesInDropdown,
      'Common Stores',
      'Stores in dropdown'
    );
    if (!storesAssignedCheck) {
      assert(!matchCondition, `ASSIGNED STORES DO NOT MATCH!`);
    }
  }
);

step(
  'OAB AppHQ Assert assigned brands and regions',
  { continueOnFailure: true },
  async function () {
    // Assert with assigned brands
    const brandsInDropdownArr = gaugeStore.get('brandsInDropdownArr');
    const regionsInDropdownArr = gaugeStore.get('regionsInDropdownArr');
    const brandsInDropdown = gaugeStore.get('brandsInDropdown');
    const regionsInDropdown = gaugeStore.get('regionsInDropdown');
    let brandsAssignedCheck;
    let regionsAssignedCheck;
    // Brand admin will be assigned to all brands/regions but not by -- All -- button
    if (brandsInDropdownArr.length === assignedBrands.length) {
      brandsAssignedCheck = oabHelp.compareVal(
        assignedBrands,
        brandsInDropdown,
        'Stores Expected',
        'Stores Assigned'
      );
    } else if (assignedBrands.includes('-- All --')) {
      // Super admin will be assigned to all brands by -- All -- button
      brandsAssignedCheck = oabHelp.compareVal(
        brandsInDropdown.split(',')[0],
        assignedBrands[0],
        'Stores Expected:',
        'Stores Assigned:'
      );
    }

    if (regionsInDropdownArr.length === assignedRegions.length) {
      regionsAssignedCheck = oabHelp.compareVal(
        assignedRegions,
        regionsInDropdown,
        'Regions Expected:',
        'Regions Assigned:'
      );
    } else if (assignedRegions.includes('-- All --')) {
      // Super admin will be assigned to all regions by -- All -- button
      regionsAssignedCheck = oabHelp.compareVal(
        regionsInDropdown.split(',')[0],
        assignedRegions[0],
        'Regions Expected:',
        'Regions Assigned:'
      );
    }

    if (!brandsAssignedCheck) {
      assert(!matchCondition, `ASSIGNED BRANDS DO NOT MATCH!`);
    }
    if (!regionsAssignedCheck) {
      assert(!matchCondition, `ASSIGNED REGIONS DO NOT MATCH!`);
    }
  }
);

// Services
step(
  'OAB AppHQ Verify if there are no doubled online contend IDs',
  { continueOnFailure: true },
  async function () {
    const contendIDsContainer = await oabHelp.getElementsList(
      t,
      OnlineContentIDContainerAppHQ
    );
    let conentID;
    const helperArr = [];
    for (let i = 0; i < contendIDsContainer.length; i++) {
      const current = await oabHelp.getText(
        t,
        OnlineContentIDContainerAppHQ,
        i
      );
      const splitForID = current.split('ID');
      conentID = splitForID[1];
      helperArr.push(conentID);
    }
    const duplicates = helperArr.filter(
      (item, index) => index !== helperArr.indexOf(item)
    );
    if (duplicates.length > 0) {
      assert(!matchCondition, 'Service IDs that are duplicated: ' + duplicates);
    }
  }
);

step(
  'OAB AppHQ Enter service category details <type>',
  { continueOnFailure: false },
  async function (type) {
    const regionID = await oabHelp.getText(t, RegionIDAppHQ);
    if (regionID === CommonData.SDCOUNTRY) {
      if (type === 'OAB') {
        serviceCategoryGlobal = 'CATEGORY OAB';
      } else if (type === 'VOAB') {
        serviceCategoryGlobal = 'CATEGORY VOAB';
      } else if (type === 'Test') {
        serviceCategoryGlobal = `${oabHelp.getRandomNumber(
          100000,
          900000,
          1
        )} ${ServiceCategoryAddAppHQ[0].data}`;
      }
      await oabHelp.scrollToAndWriteInto(
        t,
        serviceCategoryGlobal,
        ServiceCategoryInputAppHQ
      );
    } else {
      assert(
        !matchCondition,
        'REGION ID DOES NOT MATCH THE COUNTRY OF THE STORE!'
      );
    }
  }
);

step('OAB AppHQ Get service category details', async function () {
  await oabHelp.scrollToAndClickElement(
    t,
    KebabIconAppHQ,
    searchAppHQFound[1],
    false
  );
  await oabHelp.scrollToAndClickSelector(t, KebabEditAppHQ, false);
  await loaderDissappear(oabHelp.timeOutLong);
  regionIDServCat = await oabHelp.getText(t, RegionIDAppHQ);
  servCatName = await oabHelp.getValue(t, ServiceCategoryEditAppHQ[0].loc);
});

step(
  'OAB AppHQ Edit Service Category details',
  { continueOnFailure: true },
  async function () {
    serviceCategoryGlobal = `${oabHelp.getRandomNumber(100000, 900000, 1)} ${
      ServiceCategoryEditAppHQ[0].data
    }`;
    await oabHelp.scrollToAndWriteInto(
      t,
      serviceCategoryGlobal,
      ServiceCategoryInputAppHQ
    );
  }
);

step(
  'OAB AppHQ Assert if service category was <addedOrEdited>',
  { continueOnFailure: true },
  async function (addedOrEdited) {
    let error;
    const regionCheck = oabHelp.compareVal(
      regionIDServCat,
      CommonData.SDCOUNTRY,
      'Region in AppHQ',
      'Region Expected'
    );
    const serviceNameToCompare = serviceCategoryGlobal;
    const serviceCheck = oabHelp.compareVal(
      servCatName,
      serviceNameToCompare,
      'Service category in AppHQ',
      'Service category Expected'
    );
    if (!regionCheck) {
      error = oabHelp.composeError(error, 'REGION IS NOT THE SAME');
    }
    if (!serviceCheck) {
      error = oabHelp.composeError(
        error,
        'SERVICE CATEGORY NAME IS NOT THE SAME'
      );
    }
    if (error) {
      assert(!matchCondition, error);
    }
  }
);

step(
  'OAB AppHQ Enter service details <type>',
  { continueOnFailure: false },
  async function (type) {
    // Name and ID
    if (type === 'OAB') {
      serviceGlobal = 'TEST OAB';
      serviceCategoryGlobal = 'CATEGORY OAB';
      serviceIDNew = oabHelp.getRandomNumber(10000, 90000, 1);
    } else if (type === 'VOAB') {
      serviceGlobal = 'TEST VOAB';
      serviceCategoryGlobal = 'CATEGORY VOAB';
      serviceIDNew = oabHelp.getRandomNumber(10000, 90000, 1);
    } else if (type === 'Test') {
      serviceIDNew = oabHelp.getRandomNumber(10000, 90000, 1);
      serviceGlobal = `${serviceIDNew} ${ServiceAddAppHQ[0].data}`;
    }
    await oabHelp.writeInto(t, serviceIDNew, ServiceOnlineIDInputAppHQ);
    await oabHelp.writeInto(t, serviceGlobal, ServiceAddAppHQ[0].loc);
    // Pick category
    await t.dropDown(await { name: 'category' }).select(serviceCategoryGlobal);
    // Select if virtual
    if (type === 'VOAB') {
      await oabHelp.scrollToAndClickSelector(
        t,
        SelectVirtualServiceAppHQ,
        false
      );
    }
    // Select duration
    await t
      .dropDown(await { name: DropDownsAppHQ[0].loc })
      .select(DropDownsAppHQ[0].dataNew);
  }
);

step('OAB AppHQ Get service details', async function () {
  let error;
  await oabHelp.scrollToAndClickElement(
    t,
    KebabIconAppHQ,
    searchAppHQFound[1],
    false
  );
  await oabHelp.scrollToAndClickSelector(t, KebabEditAppHQ, false);
  await loaderDissappear(oabHelp.timeOutLong);
  const checkDisabledID = await oabHelp.getAttributeSelector(
    t,
    ServiceIDInputAppHQ,
    'disabled'
  );
  if (checkDisabledID === 'disabled') {
    gauge.message('ID is ' + checkDisabledID);
  } else {
    error = oabHelp.composeError(error, 'ID is ' + checkDisabledID);
  }
  serviceIDAppHQ = await oabHelp.getValue(t, OnlineServiceIDAppHQ);
  serviceNameAppHQ = await oabHelp.getValue(t, ServiceEditAppHQ[0].loc);
  serviceDurationAppHQ = await oabHelp.getValue(
    t,
    ServiceDurationDropdownAppHQ
  );
  if (error) {
    assert(!matchCondition, error);
  }
});

let serviceIDEdit = '';
step(
  'OAB AppHQ Edit service details',
  { continueOnFailure: true },
  async function () {
    // Name and ID
    serviceIDEdit = oabHelp.getRandomNumber(10000, 90000, 1);
    serviceGlobal = `${serviceIDEdit} ${ServiceEditAppHQ[0].data}`;
    await oabHelp.writeInto(t, serviceGlobal, ServiceEditAppHQ[0].loc);
    await oabHelp.writeInto(t, serviceIDEdit, ServiceOnlineIDInputAppHQ);
    // Change category
    await t.dropDown({ name: 'category' }).select(serviceCategoryGlobal);
    // TO DO Check if virtual disabled
    // TO DO Edit padding
    // Check if duration is disabled
    await (
      await t.dropDown({ name: DropDownsAppHQ[0].loc })
    ).select(DropDownsAppHQ[0].dataEdit);
  }
);

step(
  'OAB AppHQ Assert if service was <addedOrEdited>',
  { continueOnFailure: true },
  async function (addedOrEdited) {
    let error;
    const serviceIDAppHQReference =
      addedOrEdited === 'added' ? serviceIDNew : serviceIDEdit;
    const serviceNameAppHQReference = serviceGlobal;
    const serviceDurAppHQReference =
      addedOrEdited === 'added'
        ? DropDownsAppHQ[0].dataNew
        : DropDownsAppHQ[0].dataEdit;
    const idCheck = oabHelp.compareVal(
      serviceIDAppHQ,
      serviceIDAppHQReference,
      'ID in AppHQ',
      'ID Expected'
    );
    const serviceCheck = oabHelp.compareVal(
      serviceNameAppHQ,
      serviceNameAppHQReference,
      'Service name in AppHQ',
      'Service name Expected'
    );
    const durationCheck = oabHelp.compareVal(
      serviceDurationAppHQ + ' min',
      serviceDurAppHQReference,
      'Service duration in AppHQ',
      'Service duration Expected'
    );
    if (!idCheck) {
      error = oabHelp.composeError(error, 'IDs ARE NOT THE SAME!');
    }
    if (!serviceCheck) {
      error = oabHelp.composeError(error, oabHelp.messages.serviceNameNotSame);
    }
    if (!durationCheck) {
      error = oabHelp.composeError(
        error,
        oabHelp.messages.serviceDurationNotSame
      );
    }
    if (error) {
      assert(!matchCondition, error);
    }
  }
);

const twelveHourRegionSet = ['AU', 'US', 'UK', 'CA'];
// stores
step('OAB AppHQ Enter store details <storeType>', async function (storeType) {
  let timeFormat;
  await oabHelp.writeIntoLoop(t, StoreAddAppHQ);
  storeAddID = oabHelp.getRandomNumber(100000, 900000, 1);
  storeGlobal = `${storeAddID} ${StoreAddAppHQ[0].data}`;
  await oabHelp.writeInto(t, storeAddID, CreateStoreNumberInputAppHQ);
  await oabHelp.writeInto(t, storeGlobal, CreateStoreNameInputAppHQ);
  if (storeType === 'VOAB') {
    await oabHelp.scrollToAndClickSelector(t, CreateStoreIsVirtualAppHQ, false);
  }
  // Select timezone
  await t
    .dropDown(await { name: DropDownsAppHQ[1].loc })
    .select(DropDownsAppHQ[1].data);
  const concurAppInputsAppHQ = await oabHelp.getElementsList(
    t,
    CreateStoreMaxConcurAppByDayAppHQ
  );
  // inputs are numberd from 1 to 7
  const concurAppDataAppHQ = TestStore[7].data.split(',');
  for (let i = 1, j = 0; i <= concurAppInputsAppHQ.length; i++, j++) {
    const currDay = CreateStoreMaxConcurentAppHQ.replace('*', i);
    await oabHelp.scrollToAndWriteInto(t, concurAppDataAppHQ[j], currDay);
  }
  if (twelveHourRegionSet.indexOf(CommonData.SDLOCALEID) >= 0) {
    timeFormat = CreateStore12TimeFormatAppHQ;
  } else {
    timeFormat = CreateStore24TimeFormatAppHQ;
  }
  await oabHelp.scrollToAndClickSelector(t, timeFormat, false);
});

step(
  'OAB AppHQ Get store details',
  { continueOnFailure: true },
  async function () {
    let error;
    await oabHelp.scrollToAndClickElement(
      t,
      KebabIconAppHQ,
      searchAppHQFound[1],
      false
    );
    await oabHelp.scrollToAndClickSelector(t, KebabEditAppHQ, false);
    await loaderDissappear(oabHelp.timeOutLong);
    const brandNameInCreateCounter = await oabHelp.getText(
      t,
      CreateStoreBrandNameAppHQ
    );
    const countryInCreateCounter = await oabHelp.getText(
      t,
      CreateStoreCountryAppHQ
    );
    const checkDisabledID = await oabHelp.getAttributeSelector(
      t,
      CreateStoreIDAppHQ,
      'disabled'
    );
    storeNameAppHQ = await oabHelp.getValue(t, StoreAddAppHQ[0].loc);
    storeNumberAppHQ = await oabHelp.getValue(t, StoreAddAppHQ[1].loc);
    storeAdressAppHQ = await oabHelp.getValue(t, StoreAddAppHQ[2].loc);
    storeTownAppHQ = await oabHelp.getValue(t, StoreAddAppHQ[3].loc);
    storeStateAppHQ = await oabHelp.getValue(t, StoreAddAppHQ[4].loc);
    storePostCodeAppHQ = await oabHelp.getValue(t, StoreAddAppHQ[5].loc);
    storePhoneAppHQ = await oabHelp.getValue(t, StoreAddAppHQ[6].loc);
    storePhonePrefixAppHQ = await oabHelp.getValue(t, CountryCodeCreationAppHQ);
    storePhoneAppHQ = (storePhonePrefixAppHQ + storePhoneAppHQ).replace(
      /\D/g,
      ''
    );
    storeMaxConcurAppHQ = await oabHelp.getValue(t, StoreAddAppHQ[8].loc);
    storeMaxServicesAppHQ = await oabHelp.getValue(t, StoreAddAppHQ[9].loc);
    const concurAppInputsAppHQ = await oabHelp.getElementsList(
      t,
      CreateStoreMaxConcurAppByDayAppHQ
    );
    // inputs are numberd from 1 to 7
    storeMaxConcurListAppHQ.length = 0;
    for (let i = 1; i <= concurAppInputsAppHQ.length; i++) {
      const currDay = CreateStoreMaxConcurentAppHQ.replace('*', i);
      storeMaxConcurListAppHQ.push(await oabHelp.getValue(t, currDay));
    }
    const brandCheck = oabHelp.compareVal(
      brandNameInCreateCounter,
      CommonData.SDTESTBRANDNAME,
      'Brand actual',
      'Brand expected'
    );
    const localeCheck = oabHelp.compareVal(
      countryInCreateCounter,
      CommonData.SDCOUNTRY,
      'Country actual',
      'Country expected'
    );
    if (brandCheck && localeCheck) {
      gauge.message(
        `Store will be updated for ${CommonData.SDTESTBRANDNAME} ${CommonData.SDCOUNTRY}`
      );
    } else {
      error = oabHelp.composeError(
        error,
        `Store is not updated for ${CommonData.SDTESTBRANDNAME} ${CommonData.SDCOUNTRY}`
      );
    }
    if (checkDisabledID === 'disabled') {
      gauge.message('ID is ' + checkDisabledID);
    } else {
      error = oabHelp.composeError(error, 'ID is ' + checkDisabledID);
    }
    if (error) {
      assert(!matchCondition, error);
    }
  }
);

let storeEditID = '';
step('OAB AppHQ Edit store details', async function () {
  await oabHelp.writeIntoLoop(t, StoreEditAppHQ);
  storeEditID = oabHelp.getRandomNumber(100000, 900000, 1);
  storeGlobal = `${storeEditID} ${StoreEditAppHQ[0].data}`;
  await oabHelp.writeInto(t, storeEditID, CreateStoreNumberInputAppHQ);
  await oabHelp.writeInto(t, storeGlobal, CreateStoreNameInputAppHQ);
  const concurAppDataAppHQ = StoreEditAppHQ[7].data.split(',');
  for (let i = 1, j = 0; i <= concurAppDataAppHQ.length; i++, j++) {
    const currDay = CreateStoreMaxConcurentAppHQ.replace('*', i);
    await oabHelp.scrollToAndWriteInto(t, concurAppDataAppHQ[j], currDay);
  }
});

step(
  'OAB AppHQ Assert if store was <addedOrEdited>',
  { continueOnFailure: true },
  async function (addedOrEdited) {
    let error;
    const storeNameAppHQReference = storeGlobal;
    const storeNumberAppHQReference =
      addedOrEdited === 'added' ? storeAddID : storeEditID;
    const storeAdressAppHQReference =
      addedOrEdited === 'added'
        ? StoreAddAppHQ[2].data
        : StoreEditAppHQ[2].data;
    const storeTownAppHQReference =
      addedOrEdited === 'added'
        ? StoreAddAppHQ[3].data
        : StoreEditAppHQ[3].data;
    const storeStateAppHQReference =
      addedOrEdited === 'added'
        ? StoreAddAppHQ[4].data
        : StoreEditAppHQ[4].data;
    const storePostCodeAppHQReference =
      addedOrEdited === 'added'
        ? StoreAddAppHQ[5].data
        : StoreEditAppHQ[5].data;
    const storePhoneAppHQReference =
      addedOrEdited === 'added'
        ? CommonData.SDCOUNTRYCODE + StoreAddAppHQ[6].data
        : CommonData.SDCOUNTRYCODE + StoreEditAppHQ[6].data;
    const storeMaxConcurListAppHQReference =
      addedOrEdited === 'added'
        ? StoreAddAppHQ[7].data
        : StoreEditAppHQ[7].data;
    const storeMaxConcurAppHQReference =
      addedOrEdited === 'added'
        ? StoreAddAppHQ[8].data
        : StoreEditAppHQ[8].data;
    const storeMaxServicesAppHQReference =
      addedOrEdited === 'added'
        ? StoreAddAppHQ[9].data
        : StoreEditAppHQ[9].data;
    const storeNameCheck = oabHelp.compareVal(
      storeNameAppHQ,
      storeNameAppHQReference,
      'Store name in AppHQ',
      'Store name Expected'
    );
    const storeNumberCheck = oabHelp.compareVal(
      storeNumberAppHQ,
      storeNumberAppHQReference,
      'Store number in AppHQ',
      'Store number Expected'
    );
    const storeAdressCheck = oabHelp.compareVal(
      storeAdressAppHQ,
      storeAdressAppHQReference,
      'Store adress in AppHQ',
      'Store adress Expected'
    );
    const storeTownCheck = oabHelp.compareVal(
      storeTownAppHQ,
      storeTownAppHQReference,
      'Store town in AppHQ',
      'Store town Expected'
    );
    const storeStateCheck = oabHelp.compareVal(
      storeStateAppHQ,
      storeStateAppHQReference,
      'Store state in AppHQ',
      'Store state Expected'
    );
    const storePostCodeCheck = oabHelp.compareVal(
      storePostCodeAppHQ,
      storePostCodeAppHQReference,
      'Store post code number in AppHQ',
      'Store post code number Expected'
    );
    const storePhoneCheck = oabHelp.compareVal(
      storePhoneAppHQ,
      storePhoneAppHQReference,
      'Store phone number in AppHQ',
      'Store phone number Expected'
    );
    const storeConcurAppListCheck = oabHelp.compareVal(
      storeMaxConcurListAppHQ.toString(),
      storeMaxConcurListAppHQReference,
      'Store max concurent appointments in AppHQ',
      'Store max concurent appointments Expected'
    );
    const storeConcurAppCheck = oabHelp.compareVal(
      storeMaxConcurAppHQ,
      storeMaxConcurAppHQReference,
      'Store max concurent appointments day in AppHQ',
      'Store max concurent appointments day Expected'
    );
    const storeMaxServCheck = oabHelp.compareVal(
      storeMaxServicesAppHQ,
      storeMaxServicesAppHQReference,
      'Store max services in AppHQ',
      'Store max services Expected'
    );
    if (!storeNameCheck) {
      error = oabHelp.composeError(error, 'STORE NAME IS NOT THE SAME');
    }
    if (!storeNumberCheck) {
      error = oabHelp.composeError(error, 'STORE NUMBER IS NOT THE SAME');
    }
    if (!storeAdressCheck) {
      error = oabHelp.composeError(error, 'STORE ADRESS IS NOT THE SAME');
    }
    if (!storeTownCheck) {
      error = oabHelp.composeError(error, 'STORE TOWN IS NOT THE SAME');
    }
    if (!storeStateCheck) {
      error = oabHelp.composeError(error, 'STORE STATE IS NOT THE SAME');
    }
    if (!storePostCodeCheck) {
      error = oabHelp.composeError(error, 'STORE POSTAL CODE IS NOT THE SAME');
    }
    if (!storePhoneCheck) {
      error = oabHelp.composeError(error, 'STORE PHONE NUMBER IS NOT THE SAME');
    }
    if (!storeConcurAppListCheck) {
      error = oabHelp.composeError(
        error,
        'STORE MAX CONCURENT APPOINTMENT IS NOT THE SAME'
      );
    }
    if (!storeConcurAppCheck) {
      error = oabHelp.composeError(
        error,
        'STORE MAX CONCURENT APPOINTMENT BY DAY IS NOT THE SAME'
      );
    }
    if (!storeMaxServCheck) {
      error = oabHelp.composeError(error, 'STORE MAX SERVICES IS NOT THE SAME');
    }
    if (error) {
      assert(!matchCondition, error);
    }
  }
);

// TO DO
const mutipleZoneLocales = ['America'];
step('OAB AppHQ Check if store has proper timezone', async function () {
  const timezone = await oabHelp.getValue(t, CreateStoreTimeZoneAppHQ);
  const timezoneCheck = oabHelp.compareVal(
    timezone,
    CommonData.SDTIMEZONE,
    'Actual timezone',
    'Expected timezone'
  );
  if (!timezoneCheck) {
    const isSame = (element) => timezone.includes(element);
    const includes = mutipleZoneLocales.findIndex(isSame);
    if (includes >= 0) {
      gauge.message(
        `Locale has multipple timezones under the main zone: ${mutipleZoneLocales[includes]}`
      );
    } else {
      assert(!matchCondition, 'TIMZEONE IS NOT PROPERLY SET FOR THE STORE!');
    }
  }
});

// Schedules
// TO DO zrob parametry do wartosci i do selektorw jak trzeba. Np ilosc serwisow itp
let scheduleAddedServicesAppHQ;
step(
  'OAB AppHQ Enter schedule details <type> <bookingMode>',
  { continueOnFailure: false },
  async function (type, bookingMode) {
    let bookingModeButton;
    gaugeStore.put('bookingModeCheckbox', bookingMode);
    if (bookingMode === 'online') {
      bookingModeButton = ScheduleModeOnlineAppHQ;
    } else if (bookingMode === 'offline') {
      bookingModeButton = ScheduleModeOfflineAppHQ;
    }
    await oabHelp.scrollToAndClickSelector(t, bookingModeButton, false);
    if (type === 'VOAB') {
      await oabHelp.scrollToAndClickSelector(t, ScheduleIsVirtualAppHQ, false);
      await oabHelp.writeInto(
        t,
        CommonData.SDZOOMEMAILAPPHQ,
        ScheduleZoomEmailAppHQ
      );
    }
    await oabHelp.writeIntoLoop(t, ScheduleAddAppHQ);
    scheduleGlobal = `${oabHelp.getRandomNumber(100000, 900000, 1)} ${
      ScheduleAddAppHQ[0].data
    }`;
    await oabHelp.writeInto(t, scheduleGlobal, ScheduleNameAppHQ);
    await oabHelp.scrollToAndClickInLoop(
      t,
      ScheduleServicesCategoryAppHQ,
      0,
      0,
      false
    );
    scheduleAddedServicesAppHQ = (
      await oabHelp.scrollToAndClickInLoop(
        t,
        ScheduleServicesNotSelectedAppHQ,
        0,
        1,
        false,
        oabHelp.getText
      )
    ).toString();
  }
);

step('OAB AppHQ Make schedule <onlineStatus>', async function (onlineStatus) {
  await oabHelp.scrollToAndClickSelector(t, ScheduleDetailsTabAppHQ, false);
  if (onlineStatus === 'online') {
    await oabHelp.scrollToAndClickSelector(t, ScheduleModeOnlineAppHQ, false);
  } else {
    await oabHelp.scrollToAndClickSelector(t, ScheduleModeOfflineAppHQ, false);
  }
});

step(
  'OAB AppHQ Add schedule opening hours for <dayNameOrWeek> with <correctness> timeslots as <numberOfEntry> entry',
  async function (dayNameOrWeek, correctness, numberOfEntry) {
    const numberOfTimes = Number(numberOfEntry);
    if (numberOfTimes === 0) {
      scheduleTimeSlots.length = 0;
    }
    // First time
    if (
      await oabHelp.ifVisible(
        t,
        ScheduleCreateTimeSlotAppHQ,
        oabHelp.intervalBlink,
        oabHelp.timeOutBlink
      )
    ) {
      await oabHelp.scrollToAndClickSelector(
        t,
        ScheduleCreateTimeSlotAppHQ,
        false
      );
    }
    // Get entry number
    let entryNumber;
    if (numberOfTimes > 0) {
      entryNumber = numberOfTimes - 1;
    } else {
      entryNumber = 0;
    }
    // Get time range
    // TO DO bug for can not select minutes 00
    const startHour = oabHelp.getRandomNumber(9, 11, 1);
    let endHour;
    const startMinute = oabHelp.getRandomNumber(5, 55, 5);
    const endMinute = oabHelp.getRandomNumber(5, 55, 5);
    // Default Store opening hours 9 - 20
    if (correctness === 'valid') {
      if (
        await oabHelp.ifExists(
          t,
          ScheduleTvelveHourBoxAppHQ,
          oabHelp.intervalBlink,
          oabHelp.timeOutBlink
        )
      ) {
        endHour = startHour - 4;
      } else {
        endHour = startHour + 8;
      }
    } else {
      endHour = startHour - 1;
    }
    const timeRangeInt = [
      [startHour, startMinute],
      [endHour, endMinute],
    ];
    const timeRange = timeRangeInt.map((subarray) => {
      return subarray.map((x) => {
        let str = x.toString();
        if (str.length === 1) {
          str = '0' + str;
        }
        return str;
      });
    });
    // Add another time range
    if (numberOfTimes > 0) {
      await oabHelp.scrollToAndClickElement(
        t,
        ScheduleAddNewSlotAppHQ,
        entryNumber,
        false
      );
    }
    // Select start and end time (as new entry)
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        let timeToClick = timeRange[i][j];
        let rangeToClick;
        // From - to
        if (i % 2 === 0) {
          rangeToClick = ScheduleTimeFromAppHQ;
        } else {
          rangeToClick = ScheduleTimeToAppHQ;
        }
        // Hour - minute
        if (j % 2 === 0) {
          timeToClick = ScheduleHourTimeAppHQ.replace('*', timeToClick);
        } else {
          timeToClick = ScheduleMinTimeAppHQ.replace('*', timeToClick);
        }
        await oabHelp.scrollToAndClickElement(
          t,
          rangeToClick,
          numberOfTimes,
          false
        );
        await oabHelp.scrollToAndClickSelector(t, timeToClick, false);
        await loaderDissappear(oabHelp.timeOutLong);
      }
    }
    // Select AM/PM if needed
    if (
      await oabHelp.ifExists(
        t,
        ScheduleTvelveHourBoxAppHQ,
        oabHelp.intervalBlink,
        oabHelp.timeOutBlink
      )
    ) {
      for (let i = 0; i < 2; i++) {
        let tvelveHourSuffix;
        let rangeToClick;
        if (i % 2 === 0) {
          tvelveHourSuffix = ScheduleAmOrPmAppHQ.replace('*', 'am');
          rangeToClick = ScheduleTimeFromAppHQ;
        } else {
          tvelveHourSuffix = ScheduleAmOrPmAppHQ.replace('*', 'pm');
          rangeToClick = ScheduleTimeToAppHQ;
        }
        await oabHelp.scrollToAndClickElement(
          t,
          rangeToClick,
          numberOfTimes,
          false
        );
        await oabHelp.scrollToAndClickSelector(t, tvelveHourSuffix, false);
      }
    }
    await loaderDissappear(oabHelp.timeOutLong);
    const startTime = await oabHelp.getValue(
      t,
      ScheduleStartTimeAppHQ,
      numberOfTimes
    );
    const endTime = await oabHelp.getValue(
      t,
      ScheduleEndTimeAppHQ,
      numberOfTimes
    );
    let clickDay;
    let timeSlots;
    const arrOfDays = dayNameOrWeek.split(',');
    for (let i = 0; i < arrOfDays.length; i++) {
      clickDay = ScheduleDayAppHQ.replace('*', arrOfDays[i]);
      await oabHelp.scrollToAndClickElement(t, clickDay, numberOfTimes, false);
      await loaderDissappear(oabHelp.timeOutLong);
      timeSlots = `${arrOfDays[i]}s ${startTime} - ${endTime}`;
      scheduleTimeSlots.push(timeSlots);
    }
    oabHelp.takeScreenshot(device);
  }
);

step('OAB AppHQ Get schedule timeslots', async function () {
  await loaderDissappear(oabHelp.timeOutLong);
  timeslotsSavedAppHq.length = 0;
  for (let i = 0; i < 7; i++) {
    const time = await oabHelp.getText(t, ScheduleTimeSlotsListAppHQ, i);
    if (time !== '') {
      const day = await oabHelp.getText(t, ScheduleDayListAppHQ, i);
      const timeslotOfDay = `${day} ${time}`;
      timeslotsSavedAppHq.push(timeslotOfDay);
    }
  }
  await t.reload({
    waitForEvents: ['DOMContentLoaded'],
    waitForNavigation: false,
  });
  await loaderDissappear(oabHelp.timeOutLong);
});

step('OAB AppHQ Remove schedule timeslots', async function () {
  await oabHelp.scrollToAndClickSelector(t, ScheduleWorkingHrsTabAppHQ, false);
  const listOfslots = await oabHelp.getElementsList(t, ScheduleRemoveSlotAppHQ);
  for (let i = 0; i < listOfslots.length; i++) {
    await oabHelp.scrollToAndClickElement(t, ScheduleRemoveSlotAppHQ, 0, false);
    await loaderDissappear(oabHelp.timeOutLong);
    await oabHelp.scrollToAndClickSelector(t, RemoveBtnAppHQ, false);
    await loaderDissappear(oabHelp.timeOutLong);
    // await oabHelp.checkMessageOnModal(t, PageNotificationAppHQ, NotificationCloseAppHQ,NotificationContainerAppHQ, oabHelp.messages.modalTimeSlotRemoved);
  }
});

let scheduleNameAppHQ;
let scheduleStartOffSetAppHQ;
let scheduleEndOffSetAppHQ;
let scheduleSelectedServicesAppHQ;
let scheduleBookingModeAppHQ;
// TO DO Future for offline
step(
  'OAB AppHQ Get schedule details',
  { continueOnFailure: true },
  async function () {
    let error;
    await oabHelp.scrollToAndClickElement(
      t,
      KebabIconAppHQ,
      searchAppHQFound[1],
      false
    );
    await oabHelp.scrollToAndClickSelector(t, KebabEditAppHQ, false);
    await oabHelp.scrollToAndClickSelector(t, ScheduleDetailsTabAppHQ, false);
    await loaderDissappear(oabHelp.timeOutLong);
    const checkDisabledID = await oabHelp.getAttributeSelector(
      t,
      ScheduleIDAppHQ,
      'disabled'
    );
    if (checkDisabledID === 'disabled') {
      gauge.message('ID is ' + checkDisabledID);
    } else {
      error = oabHelp.composeError(error, 'ID is ' + checkDisabledID);
    }
    if (await oabHelp.ifExists(t, ScheduleOnlineAppHQ, 0, 0)) {
      scheduleBookingModeAppHQ = await oabHelp.getValue(t, ScheduleOnlineAppHQ);
    } else if (await oabHelp.ifExists(t, ScheduleOfflineAppHQ, 0, 0)) {
      scheduleBookingModeAppHQ = await oabHelp.getValue(
        t,
        ScheduleOfflineAppHQ
      );
    }
    gauge.message(`Schedule is ${scheduleBookingModeAppHQ}.`);
    // TO DO Online Content ID, langs, can choose this schedule by name, link to another schedule, Employee ID
    scheduleNameAppHQ = await oabHelp.getValue(t, ScheduleAddAppHQ[0].loc);
    scheduleStartOffSetAppHQ = await oabHelp.getValue(
      t,
      ScheduleAddAppHQ[1].loc
    );
    scheduleEndOffSetAppHQ = await oabHelp.getValue(t, ScheduleAddAppHQ[2].loc);
    scheduleSelectedServicesAppHQ = await oabHelp.getText(
      t,
      ScheduleServicesNameAppHQ,
      'all'
    );
    if (scheduleStartOffSetAppHQ > scheduleEndOffSetAppHQ * 24) {
      error = oabHelp.composeError(
        error,
        `SCHEDULE OFFSET IS INCORRECT FOR ${scheduleNameAppHQ}!`
      );
    }
    if (error) {
      assert(!matchCondition, error);
    }
  }
);

step('OAB AppHQ Edit Schedule details', async function () {
  await oabHelp.writeIntoLoop(t, ScheduleEditAppHQ);
  scheduleGlobal = ScheduleEditAppHQ[0].data;
  scheduleGlobal = `${oabHelp.getRandomNumber(100000, 900000, 1)} ${
    ScheduleEditAppHQ[0].data
  }`;
  await oabHelp.writeInto(t, scheduleGlobal, ScheduleNameAppHQ);
  // TO DO Edit services, time
});

step(
  'OAB AppHQ Assert if schedule was <addedOrEdited>',
  { continueOnFailure: true },
  async function (addedOrEdited) {
    let error;
    const scheduleNameReference = scheduleGlobal;
    const scheduleBookingModeReference = gaugeStore.get('bookingModeCheckbox');
    const scheduleStartOffSetReference =
      addedOrEdited === 'added'
        ? ScheduleAddAppHQ[1].data
        : ScheduleEditAppHQ[1].data;
    const scheduleEndOffSetReference =
      addedOrEdited === 'added'
        ? ScheduleAddAppHQ[2].data
        : ScheduleEditAppHQ[2].data;
    const scheduleNameCheck = oabHelp.compareVal(
      scheduleNameAppHQ,
      scheduleNameReference,
      'Schedule name AppHQ',
      'Schedule name Expected'
    );
    const scheduleBookingModeCheck = oabHelp.compareVal(
      scheduleBookingModeAppHQ,
      scheduleBookingModeReference,
      'Schedule booking mode AppHQ',
      'Schedule mode Expected'
    );
    const scheduleStartOffCheck = oabHelp.compareVal(
      scheduleStartOffSetAppHQ,
      scheduleStartOffSetReference,
      'Schedule start offset AppHQ',
      'Schedule start offset Expected'
    );
    const scheduleEndOffSetCheck = oabHelp.compareVal(
      scheduleEndOffSetAppHQ,
      scheduleEndOffSetReference,
      'Schedule end offset AppHQ',
      'Schedule end offsets Expected'
    );
    const servicesSelectedCheck = oabHelp.compareVal(
      scheduleSelectedServicesAppHQ,
      scheduleAddedServicesAppHQ,
      'Schedule services AppHQ',
      'Schedule services Expected'
    );
    const timeSlotsCheck = oabHelp.compareVal(
      scheduleTimeSlots,
      timeslotsSavedAppHq,
      'Time slots AppHQ',
      'Time slots Expected'
    );
    if (!scheduleNameCheck) {
      error = oabHelp.composeError(error, 'SCHEDULE NAME IS NOT THE SAME');
    }
    if (!scheduleStartOffCheck) {
      error = oabHelp.composeError(
        error,
        'SCHEDULE START OFFSET IS NOT THE SAME'
      );
    }
    if (!scheduleEndOffSetCheck) {
      error = oabHelp.composeError(
        error,
        'SCHEDULE END OFFSET IS NOT THE SAME'
      );
    }
    if (!servicesSelectedCheck) {
      error = oabHelp.composeError(
        error,
        'SCHEDULE SERVICE SELECT IS NOT THE SAME'
      );
    }
    if (!timeSlotsCheck) {
      error = oabHelp.composeError(error, 'SCHEDULE TIMESLOT IS NOT THE SAME');
    }
    if (!scheduleBookingModeCheck) {
      error = oabHelp.composeError(
        error,
        'SCHEDULE BOOKING MODE IS NOT THE SAME'
      );
    }
    if (error) {
      assert(!matchCondition, error);
    }
  }
);

// Users

step(
  'OAB AppHQ Search users from other stores <status>',
  { continueOnFailure: true },
  async function (status) {
    if (status === 'visible') {
      await oabHelp.scrollToAndClickSelector(
        t,
        ShowOtherCounterUsersAppHQ,
        false
      );
      await loaderDissappear(oabHelp.timeOutLong);
    } else {
      if (
        oabHelp.ifVisible(
          t,
          ShowOtherCounterUsersAppHQ,
          oabHelp.intervalBlink,
          oabHelp.timeOutQuick
        )
      ) {
        assert(!matchCondition, 'USER CAN SEARCH USERS FROM OTHER STORES!');
      }
    }
    oabHelp.takeScreenshot(device);
  }
);

// !!! TO DO dane bo sa uzywane i porownywane a sa w chaosie
step(
  'OAB AppHQ Enter user details <type>',
  { continueOnFailure: true },
  async function (type) {
    let value;
    const brandSelect = CreateUserAssignAppHQ.replace(
      'Replace',
      CommonData.SDTESTBRANDNAME
    );
    const regionSelect = CreateUserAssignAppHQ.replace(
      'Replace',
      CommonData.SDCOUNTRY
    );
    if (type === 'brandadmin') {
      value = DropDownsAppHQ[2].dataAd;
    } else if (type === 'countermanager') {
      value = DropDownsAppHQ[2].dataCM;
    } else if (type === 'artist') {
      value = DropDownsAppHQ[2].dataAr;
    } else if (type === 'reportmanager') {
      value = DropDownsAppHQ[2].dataRM;
    } else if (type === 'passwordmanager') {
      value = DropDownsAppHQ[2].dataPM;
    } else if (type === 'superadministrator') {
      value = DropDownsAppHQ[2].dataSU;
    }
    userLastName = type;
    UserCreateDetailsAppHQ[1].data = type;
    await oabHelp.writeIntoLoop(t, UserCreateDetailsAppHQ);
    userNewEmail = oabHelp.qatestdomain();
    await oabHelp.scrollToAndWriteInto(t, userNewEmail, UserEmailFieldAppHQ);
    await t.dropDown(await { name: DropDownsAppHQ[2].loc }).select(type);
    userRoleText = type;
    userRoleValue = value;
    await oabHelp.scrollToAndClickSelector(t, brandSelect, false);
    await oabHelp.scrollToAndClickSelector(t, regionSelect, false);
    await oabHelp.scrollToAndClickSelector(t, SelectAllStoresAppHQ, false);
    userListOfStoresNew = await oabHelp.getText(
      t,
      CreateUserStoresCheckedAppHQ,
      'all'
    );
    oabHelp.takeScreenshot(device);
  }
);

step('OAB AppHQ Get user details', async function () {
  let error;
  await oabHelp.scrollToAndClickElement(
    t,
    KebabIconAppHQ,
    searchAppHQFound[1],
    false
  );
  await oabHelp.scrollToAndClickSelector(t, KebabEditAppHQ, false);
  await loaderDissappear(oabHelp.timeOutLong);
  const checkDisabledID = await oabHelp.getAttributeSelector(
    t,
    CreateUserIDAppHQ,
    'disabled'
  );
  if (checkDisabledID === 'disabled') {
    gauge.message('ID is ' + checkDisabledID);
  } else {
    error = oabHelp.composeError(error, 'ID is ' + checkDisabledID);
  }
  userNameModalText = await oabHelp.getValue(t, UserCreateDetailsAppHQ[0].loc);
  userSurNameModalText = await oabHelp.getValue(
    t,
    UserCreateDetailsAppHQ[1].loc
  );
  userEmailModalText = await oabHelp.getValue(t, UserEmailFieldAppHQ);
  userRoleModalValue = await oabHelp.getValue(t, CreateUserRoleDropDownAppHQ);
  userListOfStores = await oabHelp.getText(
    t,
    CreateUserStoresCheckedAppHQ,
    'all'
  );
  if (error) {
    assert(!matchCondition, error);
  }
});

step('OAB AppHQ Edit User details', async function () {
  await oabHelp.writeIntoLoop(t, UserEditDetailsAppHQ);
});

step(
  'OAB AppHQ Set stores according to precondtions <user>',
  async function (user) {
    // Set for current region
    if (
      user === 'artist' ||
      user === 'countermanager' ||
      user === 'reportmanager'
    ) {
      await oabHelp.scrollToAndClickInLoop(
        t,
        UserBrandCheckedAppHQ,
        0,
        0,
        false
      );
      await oabHelp.scrollToAndClickInLoop(
        t,
        UserRegionCheckedAppHQ,
        0,
        0,
        false
      );
      const brandSelect = CreateUserAssignAppHQ.replace(
        'Replace',
        CommonData.SDTESTBRANDNAME
      );
      const regionSelect = CreateUserAssignAppHQ.replace(
        'Replace',
        CommonData.SDCOUNTRY
      );
      await oabHelp.scrollToAndClickSelector(t, brandSelect, false);
      await oabHelp.scrollToAndClickSelector(t, regionSelect, false);
    } else if (user === 'passwordmanager') {
      await oabHelp.scrollToAndClickInLoop(
        t,
        UserBrandCheckedAppHQ,
        0,
        0,
        false
      );
      await oabHelp.scrollToAndClickInLoop(
        t,
        UserRegionCheckedAppHQ,
        0,
        0,
        false
      );
      const brandSelect = CreateUserAssignAppHQ.replace(
        'Replace',
        CommonData.SDTESTBRANDNAME
      );
      const regionSelect = CreateUserAssignAppHQ.replace('Replace', 'All');
      await oabHelp.scrollToAndClickElement(t, brandSelect, 0, false);
      await oabHelp.scrollToAndClickElement(t, regionSelect, 1, false);
    } else if (user === 'superadministrator') {
      await oabHelp.scrollToAndClickInLoop(
        t,
        UserBrandCheckedAppHQ,
        0,
        0,
        false
      );
      await oabHelp.scrollToAndClickInLoop(
        t,
        UserRegionCheckedAppHQ,
        0,
        0,
        false
      );
      const brandSelect = CreateUserAssignAppHQ.replace('Replace', 'All');
      const regionSelect = CreateUserAssignAppHQ.replace('Replace', 'All');
      await oabHelp.scrollToAndClickElement(t, brandSelect, 0, false);
      await oabHelp.scrollToAndClickElement(t, regionSelect, 1, false);
    } else if (user === 'brandadmin') {
      // input[name='brandIds']:not(:checked)
    }
    // Set stores according to precodpreconditions.
    if (
      user === 'superadministrator' ||
      user === 'brandadmin' ||
      user === 'passwordmanager'
    ) {
      await oabHelp.scrollToAndClickSelector(t, SelectAllStoresAppHQ, false);
    } else if (user === 'countermanager') {
      const storeSelect = CreateUserAssignAppHQ.replace(
        'Replace',
        'Test Brand Test'
      );
      await oabHelp.scrollToAndClickInLoop(t, storeSelect, 0, 0, false);
    } else if (user === 'artist' || user === 'reportmanager') {
      const storeSelect = CreateUserAssignAppHQ.replace(
        'Replace',
        CommonData.SDTESTSTOREOAB
      );
      await oabHelp.scrollToAndClickSelector(t, storeSelect, false);
    }
    oabHelp.takeScreenshot(device);
  }
);

step(
  'OAB AppHQ Assert if user was <addedOrEdited>',
  { continueOnFailure: true },
  async function (addedOrEdited) {
    let error;
    const userNameReference =
      addedOrEdited === 'added'
        ? UserCreateDetailsAppHQ[0].data
        : UserEditDetailsAppHQ[0].data;
    const userLastNameReference =
      addedOrEdited === 'added' ? userLastName : UserEditDetailsAppHQ[1].data;
    const userNameCheck = oabHelp.compareVal(
      userNameModalText,
      userNameReference,
      'User name AppHQ',
      'User name Expected'
    );
    const userLastNameCheck = oabHelp.compareVal(
      userSurNameModalText,
      userLastNameReference,
      'User Last Name AppHQ',
      'User Last Name Expected'
    );
    const userEmailCheck = oabHelp.compareVal(
      userEmailModalText,
      userNewEmail,
      'User email AppHQ',
      'User email Expected'
    );
    const storesSelectedCheck = oabHelp.compareVal(
      userListOfStoresNew.toString(),
      userListOfStores.toString(),
      'List of stores selected AppHQ',
      'List of stores selected Expected'
    );
    if (!userNameCheck) {
      error = oabHelp.composeError(error, 'USER NAME IS NOT THE SAME');
    }
    if (!userLastNameCheck) {
      error = oabHelp.composeError(error, 'USER START OFFSET IS NOT THE SAME');
    }
    if (!userEmailCheck) {
      error = oabHelp.composeError(error, 'USER EMAIL IS NOT THE SAME');
    }
    if (!storesSelectedCheck) {
      error = oabHelp.composeError(
        error,
        'LIST OF STORES SELECTED IS NOT THE SAME'
      );
    }
    if (error) {
      assert(!matchCondition, error);
    }
  }
);

step(
  'OAB AppHQ Check which type of user <user> can create',
  async function (user) {
    await oabHelp.scrollToAndClickSelector(
      t,
      CreateUserRoleDropDownAppHQ,
      false
    );
    const listOfUserTypes = await oabHelp.getElementsList(
      t,
      CreateUserRolesOptionsAppHQ
    );
    const rolesArr = [];
    for (let i = 0; i < listOfUserTypes.length; i++) {
      rolesArr.push(await oabHelp.getText(t, CreateUserRolesOptionsAppHQ, i));
    }
    let expectedRoles;
    if (user === 'countermanager') {
      expectedRoles = 'artist';
    } else if (user === 'brandadmin') {
      expectedRoles =
        'brandadmin,countermanager,artist,reportmanager,passwordmanager';
    } else if (user === 'superadministrator') {
      expectedRoles =
        'brandadmin,countermanager,artist,reportmanager,passwordmanager,superadministrator';
    }
    const rolesCheck = oabHelp.compareVal(
      rolesArr,
      expectedRoles,
      'Displayed Roles',
      'Expected Roles'
    );
    if (!rolesCheck) {
      assert(!matchCondition, 'DISPLAYED ROLES DO NOT MATCH!');
    }
  }
);

step(
  'OAB AppHQ Reset password in AppHQ with <typeofCredencials> from <where> <status>',
  async function (typeofCredencials, where, status) {
    let msg;
    const user = 'TO DO'; // TO DO
    const buttonToClick =
      where === 'kebab' ? KebabResetPswdAppHQ : UsersResetPwdAppHQ;
    if (status === 'visible' || status === 'click') {
      await oabHelp.scrollToAndClickSelector(t, buttonToClick, false);
      await loaderDissappear(oabHelp.timeOutLong);
      if (status === 'click') {
        if (typeofCredencials === 'valid') {
          msg = `The password for ${user} has been updated`;
          await oabHelp.writeIntoLoop(t, ChangePasswordAppHQ);
        } else if (typeofCredencials === 'invalid old password') {
          await oabHelp.writeIntoLoop(t, ChangePasswordAppHQ);
          msg = oabHelp.messages.modalMsgOldPasswordIncorrect;
        } else if (typeofCredencials === 'invalid new password confirmation') {
          msg = oabHelp.messages.modalMsgPasswordNotMatch;
          await oabHelp.writeIntoLoop(t, ChangePasswordIncorrecAppHQ);
        }
        await oabHelp.scrollToAndClickSelector(t, ConfirmBtnFooterAppHQ, false);
        await loaderDissappear(oabHelp.timeOutLong);
        await oabHelp.checkMessageOnModal(
          t,
          NotificationPageAppHQ,
          NotificationCloseAppHQ,
          NotificationContainerAppHQ,
          ''
        ); // TO DO
        if (where === 'modal') {
          await oabHelp.scrollToAndClickSelector(
            t,
            CloseModalHeaderAppHQ,
            false
          );
        }
      }
    } else {
      if (
        await oabHelp.ifVisible(
          t,
          buttonToClick,
          oabHelp.intervalBlink,
          oabHelp.timeOutQuick
        )
      ) {
        assert(!matchCondition, 'USER CAN RESET OTHERS PASSWORD!');
      } else {
        gauge.message('User can not reset others passwords.');
      }
    }
  }
);

// dashboard
step(
  'OAB AppHQ Check if dropdown to change language is visible',
  async function () {
    if (await oabHelp.ifVisible(t, LanguageAppHQ, 0, 0)) {
      gauge.message('Dropdown to change language is visible!');
    }
    await oabHelp.scrollToAndClickSelector(t, LanguageAppHQ, false);
    await oabHelp.scrollToAndClickSelector(t, LanguageAppHQ, false);
  }
);

step(
  'OAB AppHQ Read stores values from API calls for <module> AppHQ by <method> <period>',
  async function (module, method, period) {
    let responseData;
    await oabHelp.fetchEnable(t, `*${module}*`, 'XHR', 'Response');
    if (method === 'reload') {
      await t.reload({
        waitForEvents: ['DOMContentLoaded'],
        waitForNavigation: false,
      });
    } else if (method === 'dropdown') {
      await oabHelp.scrollToAndClickSelector(t, DashboardPeriodDDAppHQ, false);
      // period : Past 7 days, Past 30 days, Future 7 days,Future 30 days
      await t.click(await t.text(period), { waitForNavigation: false });
    }
    try {
      responseData = await oabHelp.getNetworkData(
        t,
        `*${module}*`,
        'Response',
        'XHR'
      );
    } catch (error) {
      console.error(error);
    }
    if (module === 'storeMetrics') {
      storeStatusRes = responseData.data.single_store.content;
      gauge.message('storeStatusRes ' + storeStatusRes);
    } else if (module === 'appointmentsBooked') {
      totalBookedRes = 'no value';
      onlineBookedRes = responseData.data.bookedOnline.total;
      inStoreBookedRes = responseData.data.bookedInStore.total;
      walkInBookedRes = responseData.data.bookedWalkIn.total;
      phoneBookedRes = responseData.data.bookedPhone.total;
      gauge.message('onlineBookedRes ' + onlineBookedRes);
      gauge.message('inStoreBookedRes ' + inStoreBookedRes);
      gauge.message('walkInBookedRes ' + walkInBookedRes);
      gauge.message('phoneBookedRes ' + phoneBookedRes);
    } else if (module === 'appointmentsStatus') {
      pendingAppRes = responseData.data.pending.total;
      noShowAppRes = responseData.data.no_show.total;
      completeAppNoPurRes = responseData.data.complete.total;
      completeAppPurRes = responseData.data.complete_with_purchase.total;
      cancelledAppRes = responseData.data.cancelled.total;
      gauge.message('pendingAppRes ' + pendingAppRes);
      gauge.message('noShowAppRes ' + noShowAppRes);
      gauge.message('completeAppNoPurRes ' + completeAppNoPurRes);
      gauge.message('completeAppPurRes ' + completeAppPurRes);
      gauge.message('cancelledAppRes ' + cancelledAppRes);
    } else if (module === 'bookingUtilization') {
      maxCalendarAvaRes = responseData.data.maxCalendarAvailability.value;
      totalCalendarHoursRes = responseData.data.totalCalendarHours.value;
      totalAppHrsRes = responseData.data.totalAppointmentHours.value;
      totalAvailCalHrsRes = responseData.data.totalAvailableCalendarHours.value;
      storeOpenHrsUtilRes = responseData.data.storeOpenHoursUtilization.value;
      calUtilTxtRes = responseData.data.calendarUtilization.value;
      gauge.message('maxCalendarAvaRes ' + maxCalendarAvaRes);
      gauge.message('totalCalendarHoursRes ' + totalCalendarHoursRes);
      gauge.message('totalAppHrsRes ' + totalAppHrsRes);
      gauge.message('totalAvailCalHrsRes ' + totalAvailCalHrsRes);
      gauge.message('storeOpenHrsUtilRes ' + storeOpenHrsUtilRes);
      gauge.message('calUtilTxtRes ' + calUtilTxtRes);
    }
  }
);

step('OAB AppHQ Get Dashboard details for <module>', async function (module) {
  if (
    await oabHelp.ifVisible(
      t,
      DashboardSectionsAppHQ,
      oabHelp.interval,
      oabHelp.timeOutNorm
    )
  ) {
    await oabHelp.waitForNotExists(
      t,
      DashboardLoaderAppHQ,
      oabHelp.timeOutLong
    );
    // Booking Utilization (Online Calendars Only) Statistics
    if (module === 'bookingUtilization') {
      bookingUtilizationAppHQ = await oabHelp.getText(
        t,
        DashboardSectionsAppHQ,
        0
      );
      maxCalendarAva = (
        await oabHelp.getText(t, DashboardMaxCalAvailAppHQ)
      ).split('\n');
      totalCalendarHours = (
        await oabHelp.getText(t, DashboardTotalCalHrsTitleAppHQ)
      ).split('\n');
      totalAppHrs = (
        await oabHelp.getText(t, DashboardTotalAppHrsTitleAppHQ)
      ).split('\n');
      totalAvailCalHrs = (
        await oabHelp.getText(t, DashboardTotalAvailCalHrsAppHQ)
      ).split('\n');
      storeOpenHrsUtil = (
        await oabHelp.getText(t, DashboardStoreOpenHrsUtilTitleAppHQ)
      ).split('\n');
      calUtilTxt = (await oabHelp.getText(t, DashboardCalUtilTitleAppHQ)).split(
        '\n'
      );
      gauge.message(`${bookingUtilizationAppHQ} headers: 
          \n${maxCalendarAva[1]} : ${maxCalendarAva[0]}
          \n${totalCalendarHours[1]} : ${totalCalendarHours[0]}
          \n${totalAppHrs[1]} : ${totalAppHrs[0]}
          \n${totalAvailCalHrs[1]} : ${totalAvailCalHrs[0]}
          \n${storeOpenHrsUtil[1]} : ${storeOpenHrsUtil[0]}
          \n${calUtilTxt[1]} : ${calUtilTxt[0]}`);
    } else if (module === 'storeMetrics') {
      // Online Sttres
      onlineStoresAppHQ = await oabHelp.getText(t, DashboardSectionsAppHQ, 1);
      storeStatus = (await oabHelp.getText(t, DashboardStoreStatusAppHQ)).split(
        '\n'
      );
      gauge.message(`${onlineStoresAppHQ} headers: 
          \n${storeStatus[1]} : ${storeStatus[0]}`);
    } else if (module === 'appointmentsBooked') {
      // Appointments Booked
      appointmentsBookedAppHQ = await oabHelp.getText(
        t,
        DashboardSectionsAppHQ,
        2
      );
      totalBooked = (await oabHelp.getText(t, DashboardTotalBookedAppHQ)).split(
        '\n'
      );
      onlineBooked = (
        await oabHelp.getText(t, DashboardOnlineBookedAppHQ)
      ).split('\n');
      inStoreBooked = (
        await oabHelp.getText(t, DashboardInStoreBookedAppHQ)
      ).split('\n');
      walkInBooked = (
        await oabHelp.getText(t, DashboardWalkInBookedAppHQ)
      ).split('\n');
      phoneBooked = (await oabHelp.getText(t, DashboardPhoneBookedAppHQ)).split(
        '\n'
      );
      gauge.message(`${appointmentsBookedAppHQ} headers: 
      \n${onlineBooked[1]} : ${onlineBooked[0]}
      \n${inStoreBooked[1]} : ${inStoreBooked[0]}
      \n${walkInBooked[1]} : ${walkInBooked[0]}
      \n${phoneBooked[1]} : ${phoneBooked[0]}`);
    } else if (module === 'appointmentsStatus') {
      // Appointments Status
      appointmentsStatusAppHQ = await oabHelp.getText(
        t,
        DashboardSectionsAppHQ,
        3
      );
      pendingApp = (await oabHelp.getText(t, DashboardPendingAppHQ)).split(
        '\n'
      );
      noShowApp = (await oabHelp.getText(t, DashboardNoShowAppHQ)).split('\n');
      completeAppNoPur = (
        await oabHelp.getText(t, DashboardCompleteNoPurAppHQ)
      ).split('\n');
      completeAppPur = (
        await oabHelp.getText(t, DashboardCompletePurAppHQ)
      ).split('\n');
      cancelledApp = (await oabHelp.getText(t, DashboardCancelledAppHQ)).split(
        '\n'
      );
      gauge.message(`${appointmentsStatusAppHQ} headers: 
          \n${pendingApp[1]} : ${pendingApp[0]}
          \n${noShowApp[1]} : ${noShowApp[0]}
          \n${completeAppNoPur[1]} : ${completeAppNoPur[0]}
          \n${completeAppPur[1]} : ${completeAppPur[0]}
          \n${cancelledApp[1]} : ${cancelledApp[0]}`);
    }
    oabHelp.takeScreenshot(device);
  } else {
    assert(!matchCondition, 'Not all dashboard sections are visible!');
  }
});

step(
  'OAB AppHQ Assert if <module> on dashboard has proper details',
  { continueOnFailure: true },
  async function (module) {
    let error;
    if (module === 'bookingUtilization') {
      const maxCalendarAvaCheck = oabHelp.compareVal(
        maxCalendarAva[0].toString(),
        maxCalendarAvaRes.toString(),
        'Dashboard value',
        'API value'
      );
      const totalCalendarHoursCheck = oabHelp.compareVal(
        totalCalendarHours[0].toString(),
        totalCalendarHoursRes.toString(),
        'Dashboard value',
        'API value'
      );
      const totalAppHrsCheck = oabHelp.compareVal(
        totalAppHrs[0].toString(),
        totalAppHrsRes.toString(),
        'Dashboard value',
        'API value'
      );
      const totalAvailCalHrsCheck = oabHelp.compareVal(
        totalAvailCalHrs[0].toString(),
        totalAvailCalHrsRes.toString(),
        'Dashboard value',
        'API value'
      );
      const storeOpenHrsUtilCheck = oabHelp.compareVal(
        storeOpenHrsUtil[0],
        parseInt(storeOpenHrsUtilRes) + '%',
        'Dashboard value',
        'API value'
      );
      const calUtilTxtCheck = oabHelp.compareVal(
        calUtilTxt[0],
        Math.floor(calUtilTxtRes) + '%',
        'Dashboard value',
        'API value'
      );
      if (!maxCalendarAvaCheck) {
        error = oabHelp.composeError(
          error,
          'MAX CALENDAR AVABILITY IS NOT THE SAME'
        );
      }
      if (!totalCalendarHoursCheck) {
        error = oabHelp.composeError(
          error,
          'TOTAL CALENDAR HOURS IS NOT THE SAME'
        );
      }
      if (!totalAppHrsCheck) {
        error = oabHelp.composeError(
          error,
          'TOTAL APPOINTMENT HOURS IS NOT THE SAME'
        );
      }
      if (!totalAvailCalHrsCheck) {
        error = oabHelp.composeError(
          error,
          'TOTAL AVAIABLE CALENDAR HOURS IS NOT THE SAME'
        );
      }
      if (!storeOpenHrsUtilCheck) {
        error = oabHelp.composeError(error, 'STORE OPEN HOURS IS NOT THE SAME');
      }
      if (!calUtilTxtCheck) {
        error = oabHelp.composeError(
          error,
          'CALENDAR UTILITIES VALUE IS NOT THE SAME'
        );
      }
    } else if (module === 'storeMetrics') {
      const storeStatusCheck = oabHelp.compareVal(
        storeStatus[0],
        storeStatusRes,
        'Dashboard value',
        'API value'
      );
      if (!storeStatusCheck) {
        error = oabHelp.composeError(error, 'STORE STATUS IS NOT THE SAME');
      }
    } else if (module === 'appointmentsBooked') {
      const onlineBookedCheck = oabHelp.compareVal(
        onlineBooked[0],
        oabHelp.percentAndRound(onlineBookedRes, totalBooked[0]),
        'Dashboard value',
        'API value'
      );
      const inStoreBookedCheck = oabHelp.compareVal(
        inStoreBooked[0],
        oabHelp.percentAndRound(inStoreBookedRes, totalBooked[0]),
        'Dashboard value',
        'API value'
      );
      const walkInBookedCheck = oabHelp.compareVal(
        walkInBooked[0],
        oabHelp.percentAndRound(walkInBookedRes, totalBooked[0]),
        'Dashboard value',
        'API value'
      );
      const phoneBookedCheck = oabHelp.compareVal(
        phoneBooked[0],
        oabHelp.percentAndRound(phoneBookedRes, totalBooked[0]),
        'Dashboard value',
        'API value'
      );
      if (!onlineBookedCheck) {
        error = oabHelp.composeError(
          error,
          'APPOINTMENT BOOKED ONLINE IS NOT THE SAME'
        );
      }
      if (!inStoreBookedCheck) {
        error = oabHelp.composeError(
          error,
          'APPOINTMENT BOOKED IN STORE IS NOT THE SAME'
        );
      }
      if (!walkInBookedCheck) {
        error = oabHelp.composeError(
          error,
          'APPOINTMENT BOOKED WALK IN IS NOT THE SAME'
        );
      }
      if (!phoneBookedCheck) {
        error = oabHelp.composeError(
          error,
          'APPOINTMENT BOOKED BY PHONE IS NOT THE SAME'
        );
      }
    } else if (module === 'appointmentsStatus') {
      const pendingAppCheck = oabHelp.compareVal(
        pendingApp[0],
        oabHelp.percentAndRound(pendingAppRes, totalBooked[0]),
        'Dashboard value',
        'API value'
      );
      const noShowAppCheck = oabHelp.compareVal(
        noShowApp[0],
        oabHelp.percentAndRound(noShowAppRes, totalBooked[0]),
        'Dashboard value',
        'API value'
      );
      const completeAppNoPurCheck = oabHelp.compareVal(
        completeAppNoPur[0],
        oabHelp.percentAndRound(completeAppNoPurRes, totalBooked[0]),
        'Dashboard value',
        'API value'
      );
      const completeAppPurCheck = oabHelp.compareVal(
        completeAppPur[0],
        oabHelp.percentAndRound(completeAppPurRes, totalBooked[0]),
        'Dashboard value',
        'API value'
      );
      const cancelledAppCheck = oabHelp.compareVal(
        cancelledApp[0],
        oabHelp.percentAndRound(cancelledAppRes, totalBooked[0]),
        'Dashboard value',
        'API value'
      );
      if (!pendingAppCheck) {
        error = oabHelp.composeError(
          error,
          'APPOINTMENT BOOKED ONLINE IS NOT THE SAME'
        );
      }
      if (!noShowAppCheck) {
        error = oabHelp.composeError(
          error,
          'APPOINTMENT BOOKED IN STORE IS NOT THE SAME'
        );
      }
      if (!completeAppNoPurCheck) {
        error = oabHelp.composeError(
          error,
          'APPOINTMENT BOOKED WALK IN IS NOT THE SAME'
        );
      }
      if (!completeAppPurCheck) {
        error = oabHelp.composeError(
          error,
          'APPOINTMENT BOOKED BY PHONE IS NOT THE SAME'
        );
      }
      if (!cancelledAppCheck) {
        error = oabHelp.composeError(
          error,
          'APPOINTMENT BOOKED BY PHONE IS NOT THE SAME'
        );
      }
    }
    if (error) {
      assert(!matchCondition, error);
    }
  }
);

step(
  'OAB AppHQ Check if <moduleEle> in dashboard is <status>',
  async function (moduleEle, status) {
    let elementToCheck;
    let visibility;
    if (moduleEle === 'bookingUtilization') {
      elementToCheck = DashboardMaxCalAvailAppHQ;
    } else if (moduleEle === 'storeMetrics') {
      elementToCheck = DashboardStoreStatusAppHQ;
    } else if (moduleEle === 'appointmentsBooked') {
      elementToCheck = DashboardTotalBookedAppHQ;
    } else if (moduleEle === 'appointmentsStatus') {
      elementToCheck = DashboardNoShowAppHQ;
    }
    if (
      await oabHelp.ifExists(
        t,
        elementToCheck,
        oabHelp.interval,
        oabHelp.timeOutQuick
      )
    ) {
      await t.evaluate(await t.$(elementToCheck), (ele) => {
        ele.scrollIntoView({
          behavior: 'instant',
          block: 'center',
          inline: 'nearest',
        });
      });
    }
    if (
      await (
        await t.$(elementToCheck)
      ).isVisible(oabHelp.interval, oabHelp.timeOutQuick)
    ) {
      visibility = 'visible';
    } else {
      visibility = 'invisible';
    }
    if (visibility === status) {
      gauge.message(`This module ${moduleEle} is ${status} for this user!`);
    } else {
      assert(!matchCondition, `THIS MODULE SHOULD BE ${status} FOR THIS USER!`);
    }
  }
);

step('OAB AppHQ Open profile from My Profile icon', async function () {
  if (
    await oabHelp.ifVisible(
      t,
      ProfileIconAppHQ,
      oabHelp.intervalBlink,
      oabHelp.timeOutLong
    )
  ) {
    await oabHelp.scrollToAndClickSelector(t, ProfileIconAppHQ, false);
    await oabHelp.scrollToAndClickSelector(t, ProfileUpdateBtnAppHQ, false);
    await loaderDissappear(oabHelp.timeOutLong);
  }
});

step('OAB AppHQ Check global status of features', async function () {
  const featuresStatusAppHQ = await oabHelp.getElementsList(
    t,
    FeaturesStatusAppHQ
  );
  for (let i = 0; i < featuresStatusAppHQ.length; i++) {
    initialFeatureStatus.push(
      await oabHelp.isChecked(t, featuresStatusAppHQ, i)
    );
  }
  oabHelp.takeScreenshot(device);
});

step(
  'OAB AppHQ Set global status of <featureName> feature <status>',
  async function (featureName, status) {
    const featuresStatusAppHQ = await oabHelp.getElementsList(
      t,
      FeaturesStatusAppHQ
    );
    let enable;
    if (status === 'on') {
      enable = true;
    } else if (status === 'off') {
      enable = false;
    }
    let featureAppHQ;
    if (featureName === 'UK WMF Schedule Integration') {
      featureAppHQ = 0;
    } else if (featureName === 'Selection of Online Calendar by Name') {
      featureAppHQ = 1;
    } else if (featureName === 'Enable Prepurchase Fields For Appointments') {
      featureAppHQ = 2;
    } else if (featureName === 'Exclusive Service Link') {
      featureAppHQ = 3;
    }
    if (initialFeatureStatus[featureAppHQ] !== enable) {
      await oabHelp.scrollToAndClickElement(
        t,
        FeaturesStatusAppHQ,
        featureAppHQ,
        false
      );
      await loaderDissappear(oabHelp.timeOutLong);
    }
    isEnabledGlobal = await oabHelp.isChecked(
      t,
      featuresStatusAppHQ,
      featureAppHQ
    );
    oabHelp.takeScreenshot(device);
    gauge.message(`Feature status: ${isEnabledGlobal}`);
  }
);

step('OAB AppHQ Click <featureName> feature', async function (featureName) {
  let featureAppHQ;
  if (featureName === 'UK WMF Schedule Integration') {
    featureAppHQ = 0;
  } else if (featureName === 'Selection of Online Calendar by Name') {
    featureAppHQ = 1;
  } else if (featureName === 'Enable Prepurchase Fields For Appointments') {
    featureAppHQ = 2;
  } else if (featureName === 'Exclusive Service Link') {
    featureAppHQ = 3;
  }
  await oabHelp.scrollToAndClickElement(t, FeaturesAppHQ, featureAppHQ, false);
  await loaderDissappear(oabHelp.timeOutLong);
  const isEnabled = await oabHelp.isChecked(t, FeatureStatusModalAppHQ);
  if (isEnabledGlobal !== isEnabled) {
    assert(!matchCondition, 'STATUS DOES NOT MATCH!');
  }
  currentFeature = featureName;
});

step(
  'OAB AppHQ Set specific status of the feature for <store> as <status>',
  async function (store, status) {
    let enable;
    let storeName;
    let brandName;
    let allBrandsEnabled = false;
    let allRegionsEnabled = false;
    if (status === 'on') {
      enable = true;
    } else if (status === 'off') {
      enable = false;
    }
    if (store.includes('Test')) {
      storeName = `${store} ${CommonData.SDLOCALEID}`;
      brandName = CommonData.SDTESTBRANDNAME;
    } else if (store === 'PROD') {
      // brand z common data
      brandName = CommonData.SDBRANDFULLNAME;
    }

    const NewSelectedBrand = FeatureAssignAppHQ.replace('Replace', brandName);
    const NewSelectedRegion = FeatureAssignAppHQ.replace(
      'Replace',
      CommonData.SDCOUNTRY
    );
    const NewSelectedStoreAppHQ = FeatureAssignAppHQ.replace(
      'Replace',
      storeName
    );
    featureEnabledInBrandAppHQ = await oabHelp.isChecked(t, NewSelectedBrand);
    featureEnabledInRegionAppHQ = await oabHelp.isChecked(t, NewSelectedRegion);
    if (await oabHelp.ifVisible(t, FeatureAllBrandsAppHQ, 0, 0)) {
      allBrandsEnabled = await oabHelp.isChecked(t, FeatureAllBrandsAppHQ);
    }
    if (await oabHelp.ifVisible(t, FeatureAllRegionsAppHQ, 0, 0)) {
      allRegionsEnabled = await oabHelp.isChecked(t, FeatureAllRegionsAppHQ);
    }
    if (featureEnabledInBrandAppHQ === false && allBrandsEnabled === false) {
      await oabHelp.scrollToAndClickSelector(t, NewSelectedBrand, false);
      await loaderDissappear(oabHelp.timeOutLong);
    }
    if (featureEnabledInRegionAppHQ === false && allRegionsEnabled === false) {
      await oabHelp.scrollToAndClickSelector(t, NewSelectedRegion, false);
      await loaderDissappear(oabHelp.timeOutLong);
    }
    featureEnabledInStoreAppHQ = await oabHelp.isChecked(
      t,
      NewSelectedStoreAppHQ
    );
    if (
      (enable && !featureEnabledInStoreAppHQ) ||
      (!enable && featureEnabledInStoreAppHQ)
    ) {
      await oabHelp.scrollToAndClickSelector(t, NewSelectedStoreAppHQ, false);
      await loaderDissappear(oabHelp.timeOutLong);
    }
  }
);

step(
  'OAB AppHQ Check if checkbox to <featureName> is <visiblity> and status is <status>',
  async function (featureName, visiblity, status) {
    let enable;
    let checkboxToCheck;
    if (status === 'on') {
      enable = true;
    } else if (status === 'off') {
      enable = false;
    }
    if (featureName === 'Selection of Online Calendar by Name') {
      await oabHelp.scrollToAndClickSelector(t, ScheduleDetailsTabAppHQ, false);
      await loaderDissappear(oabHelp.timeOutLong);
      checkboxToCheck = FeatureSelectArtistCheckboxAppHQ;
    } else if (featureName === 'Exclusive Service Link') {
      checkboxToCheck = FeatureExclusiveServiceAppHQ;
    } else if (featureName === 'Enable Prepurchase Fields For Appointments') {
      checkboxToCheck = FeaturePrePucharseAppHQ;
    }
    const isVisible = await oabHelp.ifVisible(t, checkboxToCheck, 0, 0);
    if (
      (isVisible && visiblity === 'visible') ||
      (!isVisible && visiblity !== 'visible')
    ) {
      gauge.message(`Checkbox to ${featureName} is ${visiblity}`);
    } else {
      assert(
        !matchCondition,
        `CHECKBOX TO ${featureName.toUpperCase()} SHOULD BE ${visiblity.toUpperCase()}`
      );
    }
    if (isVisible) {
      const isEnabled = await oabHelp.isChecked(t, checkboxToCheck);
      if (brandNameSelected === CommonData.SDTESTBRANDNAME) {
        if (enable === isEnabled || status === 'any') {
          gauge.message(`Status is correct: ${isEnabled}`);
        } else {
          assert(!matchCondition, `STATUS IS INCORRECT: ${isEnabled}`);
        }
      } else {
        gauge.message('Status is not checked for PROD stores');
      }
    }
  }
);

step(
  'OAB AppHQ <enable> option to <featureName>',
  async function (enable, featureName) {
    let shouldBeEnabled;
    let checkboxToCheck;
    if (enable === 'Enable') {
      shouldBeEnabled = true;
    } else if (enable === 'Disable') {
      shouldBeEnabled = false;
    }
    if (featureName === 'Selection of Online Calendar by Name') {
      await oabHelp.scrollToAndClickSelector(t, ScheduleDetailsTabAppHQ, false);
      await loaderDissappear(oabHelp.timeOutLong);
      checkboxToCheck = FeatureSelectArtistCheckboxAppHQ;
    } else if (featureName === 'Exclusive Service Link') {
      checkboxToCheck = FeatureExclusiveServiceAppHQ;
    } else if (featureName === 'Enable Prepurchase Fields For Appointments') {
      checkboxToCheck = FeaturePrePucharseAppHQ;
    }
    const isEnabled = await oabHelp.isChecked(t, checkboxToCheck);
    if ((shouldBeEnabled && !isEnabled) || (!shouldBeEnabled && isEnabled)) {
      await oabHelp.scrollToAndClickSelector(t, checkboxToCheck, false);
      await loaderDissappear(oabHelp.timeOutLong);
    }
  }
);

step('OAB AppHQ Enter prepucharse details', async function () {
  const invoiceNoGenerated = Math.floor(Math.random() * 101);
  const pucharsePriceGenerated = (
    Math.random() * 101 +
    1 +
    Math.random()
  ).toFixed(2);
  gaugeStore.put('invoiceNoGenerated', invoiceNoGenerated);
  gaugeStore.put('pucharsePriceGenerated', pucharsePriceGenerated);
  await oabHelp.writeInto(t, invoiceNoGenerated, FeaturesInvoiceNoAppHQ);
  await oabHelp.writeInto(
    t,
    pucharsePriceGenerated,
    FeaturesPucharsePriceAppHQ
  );
});

step(
  'OAB AppHQ Get appointment prepucharse details from modal',
  async function () {
    await loaderDissappear(oabHelp.timeOutLong);
    // invoiceNo
    const invoiceNoSaved = await oabHelp.getValue(t, FeaturesInvoiceNoAppHQ);
    gauge.message('invoiceNoSaved' + invoiceNoSaved);
    gaugeStore.put('invoiceNoSaved', invoiceNoSaved);
    // pucharsePrice
    const pucharsePriceSaved = await oabHelp.getValue(
      t,
      FeaturesPucharsePriceAppHQ
    );
    gauge.message('pucharsePriceSaved' + pucharsePriceSaved);
    gaugeStore.put('pucharsePriceSaved', pucharsePriceSaved);
  }
);

step('OAB AppHQ Assert if prepucharse details were added', async function () {
  let error;
  await loaderDissappear(oabHelp.timeOutLong);
  const invoiceNoSaved = gaugeStore.get('invoiceNoSaved');
  const pucharsePriceSaved = gaugeStore.get('pucharsePriceSaved');
  const invoiceNoGenerated = gaugeStore.get('invoiceNoGenerated');
  const pucharsePriceGenerated = gaugeStore.get('pucharsePriceGenerated');

  const invoiceNoCheck = oabHelp.compareVal(
    invoiceNoGenerated,
    invoiceNoSaved,
    'Invoce number entered',
    'Invoce number saved'
  );
  const pucharsePriceCheck = oabHelp.compareVal(
    pucharsePriceGenerated,
    pucharsePriceSaved,
    'Pucharse price entered',
    'Pucharse price saved'
  );

  if (!invoiceNoCheck) {
    error = oabHelp.composeError(error, 'INVOICE NUMBER IS NOT THE SAME');
  }
  if (!pucharsePriceCheck) {
    error = oabHelp.composeError(error, 'PREPUCHARSE PRICE IS NOT THE SAME');
  }

  if (error) {
    assert(!matchCondition, error);
  }
});

step('OAB AppHQ Restore global status of features', async function () {
  let error;
  const featuresStatusAppHQ = await oabHelp.getElementsList(
    t,
    FeaturesStatusAppHQ
  );
  const restoredStatus = [];
  for (let i = 0; i < featuresStatusAppHQ.length; i++) {
    const newStatus = await oabHelp.isChecked(t, featuresStatusAppHQ, i);
    if (newStatus !== initialFeatureStatus[i]) {
      await oabHelp.scrollToAndClickElement(t, FeaturesStatusAppHQ, i, false);
    }
    await loaderDissappear(oabHelp.timeOutLong);
    const restoredNewStatus = await oabHelp.isChecked(
      t,
      featuresStatusAppHQ,
      i
    );
    restoredStatus.push(restoredNewStatus);
  }
  const isRestored = oabHelp.compareVal(initialFeatureStatus, restoredStatus);
  if (!isRestored) {
    error = oabHelp.composeError(error, 'FEATURES STATUS WAS NOT RESTORED!');
    assert(!matchCondition, error);
  }
});

// reporting
step(
  'OAB AppHQ Check <buttonType> in Reporing tab <action>',
  async function (buttonType, action) {
    const buttonToClick = ReportingActionBtnAppHQ.replace(
      'Replace',
      buttonType
    );
    if (action === 'visible') {
      const isVisible = await oabHelp.ifVisible(
        t,
        buttonToClick,
        oabHelp.intervalBlink,
        oabHelp.timeOutNorm
      );
      if (isVisible) {
        gauge.message(`${buttonType} is visible`);
      } else {
        assert(!matchCondition, `${buttonType.toUpperCase()} IS NOT VISIBLE!`);
      }
    } else if (action === 'click') {
      await oabHelp.scrollToAndClickSelector(t, buttonToClick, false, 'js');
      await loaderDissappear(oabHelp.timeOutLong);
    }
    oabHelp.takeScreenshot(device);
  }
);
