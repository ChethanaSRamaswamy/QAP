// This file is common template for A-Comm US
var t = require('taiko');
let siteDefinition, source, NullDataException;
const Helper = require('../../helpers/helper');
const assert = require('assert');

let Hengine = require('../../../../datainterface/providers/hengine.js');
var CommonData = {};
var feature = 'A-Comm';
/******** CODE TO RECEIVE AND FORM THE BASE URL AND ADMIN URL ******/

// PROD, PREPROD, STAGE, DEV, FEAT, ENG, PINCER, PREVIEW
var emailIDVuser = process.env.VUSEREMAIL || ''; // Provision to pass email ID of a User directly from Application tool
var emailIDYuser = process.env.YUSEREMAIL || ''; // Provision to pass email ID of a User directly from Application tool
var emailIDSuser = process.env.SUSEREMAIL || ''; // Provision to pass email ID of a User directly from Application tool
var emailIDHMVuser = process.env.HMVUSEREMAIL || ''; // Provision to pass email ID of a User directly from Application tool
var signOutLoc = '';
// A-Comm Transaction Table
var acommTransSalonFlags = '';
var acommTransSalonID = '';
var acommTransArtistID = '';
var acommTransStylistName = '';
var acommTransLookID = '';
// A-Comm User Table
var acommUserSalonID = '';
var acommUserSalonFlags = '';
var acommUserArtistID = '';
var acommUserStylistName = '';
// Salon Session Table
var salonUserSalonFlags = '';
var salonUserSalonID = '';
var salonUserArtistID = '';
var salonUserLookID = '';
var salonUserArtistName = '';
var salonReferralStartTime = '';
var salonSessionExpireStartTime = '';
var salonSessionExpireValue = '';
// Salon User Table
var salonFlags = '';
var salonSalonID = '';
var salonArtistID = '';
var salonFlagLastModified = '';
var salonUserFlagLastModified = '';
//URLs
//E.g. /locator/get_the_facts.tmpl?SalonID=2335
var salonPageURL = '';
//E.g. /artists/artist.tmpl?artistID=438244199&SalonID=2335
var artistPageURL = '';
//E.g. /?label=Willo%20Salon-%20Elk%20Grove&redirect=shop.aveda.com%2Fsalon%2Fwillo-elk-grove&socialshoppe=1&SalonID=60525
var hssalonPageURL = '';
//E.g. /?products=122899:1&SalonID=33141&artistID=451199769&label=TaylorLambert&socialshoppe=1
var hsartistPageURL = '';
const messages = {
  expireRemainingTime: 'Remaining time has been set to expired',
  expirationNotSet: 'Remaining time has not been set to expired',
};
var userNameLoc = '';
var passwordLoc = '';
var submitButtonLoc = '';

let loginLoc = {};
let loginVal = {};

let expValues = [];
let actValues = [];
const matchCondition = true;
var sessionUserSalonFlag = '';
var sessionUserSalonID = '';
var userSalonFlagLastModified = '';
var userSalonFlagLastModified_AfterCheckout = '';
var remainingTime = '';
var currDate = '';
const retryInterval = 100;
const elementTimeOut = 15000;

// Decode adminDBPasswd whenever it needs to be used
let adminDBUser = '';
let adminDBPasswd = '';
// adminDBPasswd = decodeURIComponent(adminDBPasswd)
var acommMailLoc = '';
var acommTransIDLoc = '';
var acommSubmitBtnLoc = '';
var checkoutCarNavLink = '';
var acReturnUserEmailId = '';
var acReturnUserPWD = '';
var acReturnUserLoginButton = '';
var acommURL = '';
var acommVerificationEleLoc = '';
var mppUrl = '';
var clearDataLoc = '';
var searchAddToBag = '';
var acNavigateSigninUrl = '';
var salonOpt = '';
var salonCheckBox = '';
var salonSelectionRadio = '';
var salonName = '';
var searchSalonsLink = '';
var salonCity_Steet_ZipCode = '';
var salonSearch = '';
var salonTerms_Conditions = '';
var stylistName = '';
var mySalonUrl = '';
var mySalonVerificationEleLog = '';
var salonPageProduct = '';
var artsitPageProduct = '';
var hausmartSalonProduct = '';
var getTransId = false;

function makeEmail() {
  var strValues = 'abcdefghijk12345678';
  var strEmail = '';
  var strTmp;
  for (var i = 0; i < 10; i++) {
    strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
    strEmail = strEmail + strTmp;
  }
  strEmail = strEmail + '@test' + '.com';
  return strEmail;
}

function reinitialize() {
  currDate = new Date().toLocaleString(CommonData.Region, {
    timeZone: CommonData.TimeZone,
  });
  adminDBUser = siteDefinition.dbAdminUsername;
  adminDBPasswd = siteDefinition.dbAdminPassword;
  adminDBPasswd = decodeURIComponent(adminDBPasswd);
  loginLoc = {
    userNameLoc: '',
    passwordLoc: '',
    submitButtonLoc: '',
  };
  loginVal = {
    userNameVal: '',
    passwordVal: '',
  };
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

step('A-COMM Initialize Helix', async function () {
  // Initialize the selectors from DB
  await initFrameworkSettings();
});

//For Preview Environment


function getCredentials(credentialsMap, brand) {
  let brandCredential = [];
  credentialsMap.forEach((item) => {
    let hasFound = item.includes(brand);
    if (hasFound) {
      let [, , username, password] = item;
      brandCredential = [username, encodeURIComponent(password)];
    }
  });
  return brandCredential;
}

async function loginToAdminTool(loginLoc, loginVal, verificationEleLoc) {
  let flag = 0;
  loginLoc.userNameLoc = userNameLoc;
  loginLoc.passwordLoc = passwordLoc;
  loginLoc.submitButtonLoc = submitButtonLoc;
  loginVal.userNameVal = adminDBUser;
  loginVal.passwordVal = adminDBPasswd;
  // if // (!(await t.$(verificationEleLoc).exists(retryInterval, elementTimeOut))) {
  await t.evaluate(
    await t.$(loginLoc.userNameLoc, { waitForEvents: ['DOMContentLoaded'] }),
    (ele) => ele.focus()
  );
  await t.write(loginVal.userNameVal, await t.$(loginLoc.userNameLoc), {
    delay: retryInterval,
  });
  await t.write(loginVal.passwordVal, await t.$(loginLoc.passwordLoc), {
    delay: retryInterval,
  });
  await t.evaluate(await t.$(loginLoc.submitButtonLoc), (ele) => ele.click(), {
    waitForEvents: ['DOMContentLoaded'],
  });
  flag++;
  // } // else {
  gauge.message('Either the login page is not loaded or already logged in');
  // }
  if (flag === 0) {
    await t.reload({ waitForEvents: ['loadEventFired'] });
    gauge.message(
      'login page is not loaded within 30 seconds, thus reloading the page.'
    );
  }
}
async function clearArrays(msg, expValues, actValues) {
  expValues.splice(0, expValues.length);
  actValues.splice(0, actValues.length);
  console.log('The expected and actual values of ', msg, ' are cleared');
}
async function validateFlags(tool, expValues, actValues) {
  let expErrVal = [];
  let actErrVal = [];

  let errCount = 0;
  for (let key in expValues) {
    for (let key1 in expValues[key]) {
      if (expValues[key][key1] !== actValues[key][key1]) {
        let temp = {};
        temp[key1] = expValues[key][key1];
        expErrVal.push(temp);
        gauge.message('Expected Value: ' + JSON.stringify(expErrVal[errCount]));
        temp = {};
        temp[key1] = actValues[key][key1];
        actErrVal.push(temp);
        gauge.message('Actual Value: ' + JSON.stringify(actErrVal[errCount]));
        errCount++;
        temp = {};
      }
    }
  }

  await clearArrays(tool, expValues, actValues);
  if (expErrVal.length !== 0) {
    gauge.message(`One or more Flags in await t.${tool} are incorrect`);
  } else {
    gauge.message(`All the Flags in await t.${tool} are correct`);
    assert(matchCondition);
  }
}

// Fetching Current date & time & converting it to respective TZ
async function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();
  hh = '' + d.getHours();
  mm = '' + d.getMinutes();
  ss = '' + d.getSeconds();

  if (month.length < 2) {
    month = '0' + month;
  }

  if (day.length < 2) {
    day = '0' + day;
  }
  if (hh.length < 2) {
    hh = '0' + hh;
  }
  if (mm.length < 2) {
    mm = '0' + mm;
  }
  if (ss.length < 2) {
    ss = '0' + ss;
  }

  var dates = [year, month, day].join('-');
  var times = [hh, mm, ss].join(':');
  let formatdatetime = dates + ' ' + times;
  return formatdatetime;
}

//This function is used to switch into ACOMM Tool
async function acommtoolemailsubmission(EmailID, TransactionID) {
  if (acommMailLoc !== '') {
    await t.write(EmailID, t.into(await t.$(acommMailLoc)));
  }
  if (acommTransIDLoc !== '') {
    await t.write(TransactionID, t.into(await t.$(acommTransIDLoc)));
  }
  if (acommSubmitBtnLoc !== '') {
    await t.evaluate(await t.$(acommSubmitBtnLoc), (ele) => ele.click());
  }
}

step('A-COMM Open My Salon tool in a new tab', async function () {
  await t.openTab(siteDefinition.executionContext.adminUrl + mySalonUrl, {
    waitForNavigation: false,
  });
  await loginToAdminTool(loginLoc, loginVal, mySalonVerificationEleLog);
  if (await (await t.$(signOutLoc)).exists()) {
    await t.goto(siteDefinition.executionContext.adminUrl + mySalonUrl, {
      waitForNavigation: !matchCondition,
    });
  }
  gauge.screenshot();
});

step('A-COMM Open A-Comm tool in a new tab', async function () {
  await t.openTab(siteDefinition.executionContext.adminUrl + acommURL);
  if (
    !(await (await t.$(acommTransIDLoc)).exists(retryInterval, elementTimeOut))
  ) {
    if (
      !(await (
        await t.$(acommVerificationEleLoc)
      ).exists(retryInterval, elementTimeOut))
    ) {
      await loginToAdminTool(loginLoc, loginVal, acommVerificationEleLoc);
      await t.goto(siteDefinition.executionContext.adminUrl + acommURL, {
        waitForNavigation: !matchCondition,
      });
    }
    gauge.screenshot();
  }
});

step('A-COMM Reset the table', async function () {
  if (clearDataLoc !== '') {
    await t.evaluate(await t.$(clearDataLoc), (ele) => ele.click());
    gauge.screenshot();
  }
});

let order_trans_id;
var regex = /\d+/g;
step('A-COMM Get the Transcation ID', async function () {
  await transactionId();
});

async function transactionId() {
  if (!getTransId) {
    var confirmurl = await t.currentURL();
    //Extract the data after tid
    if (confirmurl.toUpperCase().includes('TID')) {
      var tempData = confirmurl
        .toUpperCase()
        .substring(confirmurl.indexOf('TID=') + 4);
      // extracting Numbers alone
      tempData = tempData.match(regex);
      //Get the first number alone
      transNumberFromOrderDetails = tempData[0];
      console.log('Transaction id alone is: ' + transNumberFromOrderDetails);
      order_trans_id = transNumberFromOrderDetails;
      gauge.message('Transaction id alone is: ' + transNumberFromOrderDetails);
      getTransId = true;
    }
  }
}

let vUserEmail;
let yUserEmail;
let sUserEmail;
let hmvUserEmail;

var currentUserEmail = '';
let currentUserTypeUrl = '';
let Salon_SessionExp = {
  salon_session_flags: '',
  salon_session_id: '',
  salon_artist_session_id: '',
  salon_session_ref_start_time: '',
  user_salon_flags: '',
  user_salon_id: '',
  user_artist_id: '',
  user_salon_ref_start_time: '',
};

let acommExpDetails = {
  acomm_trans_salon_flag: CommonData.commTransSalonFlag,
  acomm_trans_salon_id: CommonData.acommTransSalonID,
  acomm_trans_artist_id: CommonData.acommUserArtistID,
  acomm_user_salon_id: CommonData.acommUserSalonID,
  acomm_user_salon_flag: CommonData.acommUserSalonFlags,
  acomm_user_artist_id: CommonData.acommUserArtistID,
};
let ACommReturnUser = matchCondition;
let newEmailID = makeEmail();
step(
  'A-COMM Assign the Email Address based On <userType>',
  async function (userType) {
    vUserEmail = emailIDVuser || CommonData.vUser;
    yUserEmail = emailIDYuser || CommonData.yUser;
    sUserEmail = emailIDSuser || CommonData.sUser;
    hmvUserEmail = emailIDHMVuser || CommonData.hmvUser;
    switch (userType) {
      case 'NewUser':
        currentUserEmail = newEmailID;
        ACommReturnUser = !matchCondition;
        break;
      case 'V':
        currentUserEmail = vUserEmail;
        Salon_SessionExp.salon_session_flags = CommonData.SalonSessionFlag;
        Salon_SessionExp.salon_session_id = CommonData.SalonSessionId;
        Salon_SessionExp.salon_session_ref_start_time = formatDate(currDate);
        Salon_SessionExp.user_salon_flags = CommonData.UserSalonFlag;
        Salon_SessionExp.user_salon_id = CommonData.UserSalonId;
        acommExpDetails.acomm_trans_salon_flag = CommonData.AcommTransSalonFlag;
        acommExpDetails.acomm_trans_salon_id = CommonData.AcommTransSalonId;
        acommExpDetails.acomm_user_salon_id = CommonData.UserSalonId;
        acommExpDetails.acomm_user_salon_flag = CommonData.UserSalonFlag;
        break;
      case 'Y':
        currentUserEmail = yUserEmail;
        Salon_SessionExp.salon_session_flags = CommonData.YUserFlag;
        Salon_SessionExp.user_salon_flags = CommonData.YUserFlag;
        acommExpDetails.acomm_trans_salon_flag = CommonData.YUserFlag;
        acommExpDetails.acomm_user_salon_flag = CommonData.YUserFlag;
        break;
      case 'S':
        currentUserEmail = sUserEmail;
        Salon_SessionExp.salon_session_flags = CommonData.SUserFlag;
        Salon_SessionExp.salon_session_id = CommonData.SalonSessionId;
        Salon_SessionExp.salon_artist_session_id =
          CommonData.SalonArtistSessionId;
        Salon_SessionExp.user_salon_flags = CommonData.SUserFlag;
        Salon_SessionExp.user_salon_id = CommonData.AcommUserSalonId;
        Salon_SessionExp.user_artist_id = CommonData.ArtistID;
        (acommExpDetails.acomm_trans_salon_flag = CommonData.SUserFlag),
          (acommExpDetails.acomm_trans_salon_id = CommonData.AcommUserSalonId),
          (acommExpDetails.acomm_user_salon_id = CommonData.AcommUserSalonId),
          (acommExpDetails.acomm_user_salon_flag = CommonData.SUserFlag),
          (acommExpDetails.acomm_user_artist_id = CommonData.ArtistID);
        break;
      case 'HMV':
        currentUserEmail = hmvUserEmail;
        (acommExpDetails.acomm_trans_salon_flag = CommonData.HMVUserFlag),
          (Salon_SessionExp.salon_session_flags = CommonData.HMVUserFlag);
        break;
      case 'V12':
        currentUserEmail = vUserEmail;
        (acommExpDetails.acomm_trans_salon_flag = CommonData.V12UserFlag),
          (Salon_SessionExp.salon_session_flags = CommonData.V12UserFlag);
        break;
      case 'Y12':
        currentUserEmail = yUserEmail;
        (acommExpDetails.acomm_trans_salon_flag = CommonData.Y12UserFlag),
          (Salon_SessionExp.salon_session_flags = CommonData.Y12UserFlag);
        break;
      case 'S12':
        currentUserEmail = sUserEmail;
        (acommExpDetails.acomm_trans_salon_flag = CommonData.S12UserFlag),
          (Salon_SessionExp.salon_session_flags = CommonData.S12UserFlag);
        break;
      case 'HMV12':
        currentUserEmail = hmvUserEmail;
        (acommExpDetails.acomm_trans_salon_flag = CommonData.HMV12UserFlag),
          (Salon_SessionExp.salon_session_flags = CommonData.HMV12UserFlag);
        break;
    }
  }
);

step(
  'A-COMM Switch to My Salon Tool and verify the Flags and other details',
  { continueOnFailure: matchCondition },
  async function () {
    await t.switchTo(/my_salon/);
    let salonSessionAct = {};
    salonSessionAct.salon_session_flags = await (
      await t.$(salonUserSalonFlags)
    ).text();
    salonSessionAct.salon_session_id = await (
      await t.$(salonUserSalonID)
    ).text();
    salonSessionAct.salon_artist_session_id = await (
      await t.$(salonUserArtistID)
    ).text();
    salonSessionAct.user_stylist_name = await (
      await t.$(salonUserArtistName)
    ).text();
    salonSessionAct.salon_look_id = await (await t.$(salonUserLookID)).text();
    salonSessionAct.salon_session_ref_start_time = await (
      await t.$(salonReferralStartTime)
    ).text();
    salonSessionAct.user_salon_flags = await (await t.$(salonFlags)).text();
    salonSessionAct.user_salon_id = await (await t.$(salonSalonID)).text();
    salonSessionAct.user_artist_id = await (await t.$(salonArtistID)).text();
    salonSessionAct.user_salon_ref_start_time = await (
      await t.$(salonFlagLastModified)
    ).text();
    actValues.push(salonSessionAct);

    var salonSessionDetails = JSON.stringify(actValues, null, '\t');
    gauge.message(
      'Actual Session Table Details: ' + '\n' + salonSessionDetails
    );
    gauge.screenshot();
    expValues.push(Salon_SessionExp);
    var salonExpSessionDetails = JSON.stringify(expValues, null, '\t');
    gauge.message(
      'Expected Session Table Details: ' + '\n' + salonExpSessionDetails
    );
    console.log('SessionActValue:' + JSON.stringify(actValues, null, '\t'));
    console.log('SessionExpValue:' + JSON.stringify(expValues, null, '\t'));
    await validateFlags('My Salon', actValues, expValues);
  }
);

let aCommExp = [];
let aCommAct = [];
step(
  'A-COMM Switch to A-Comm and Verify the Flags and other details on A-Comm tool',
  { continueOnFailure: matchCondition },
  async function () {
    // await switchTo(/acomm/);
    console.log(order_trans_id);
    acommtoolemailsubmission(currentUserEmail, order_trans_id);
    let acommActDetails = {};
    acommActDetails.acomm_trans_salon_flag = await (
      await t.$(acommTransSalonFlags)
    ).text();
    console.log('acommTransSalonFlags', acommTransSalonFlags);
    acommActDetails.acomm_trans_salon_id = await (
      await t.$(acommTransSalonID)
    ).text();
    acommActDetails.acomm_trans_artist_id = await (
      await t.$(acommTransArtistID)
    ).text();
    acommActDetails.acomm_trans_artist_id = await (
      await t.$(acommTransStylistName)
    ).text();
    acommActDetails.acomm_trans_look_id = await (
      await t.$(acommTransLookID)
    ).text();
    acommActDetails.acomm_user_salon_id = await (
      await t.$(acommUserSalonID)
    ).text();
    acommActDetails.acomm_user_salon_flag = await (
      await t.$(acommUserSalonFlags)
    ).text();
    acommActDetails.acomm_user_artist_id = await (
      await t.$(acommUserArtistID)
    ).text();
    acommActDetails.acomm_stylist_name = await (
      await t.$(acommUserStylistName)
    ).text();
    aCommAct.push(acommActDetails);
    var ACommActualAcounttDetails = JSON.stringify(aCommAct, null, '\t');
    gauge.message(
      'Actual ACOMM Tool Table Details: ' + '\n' + ACommActualAcounttDetails
    );
    aCommExp.push(acommExpDetails);
    var ACommExpectedAcounttDetails = JSON.stringify(aCommExp, null, '\t');
    console.log('ACommExpValue:' + JSON.stringify(acommExpDetails, null, '\t'));
    console.log('ACommActValue:' + JSON.stringify(acommActDetails, null, '\t'));
    gauge.message(
      'Expected ACOMM Tool Table Details: ' + '\n' + ACommExpectedAcounttDetails
    );
    await validateFlags('ACOMM', aCommExp, aCommAct);
  }
);

step('A-COMM Switch back to the cart page', async function () {
  await t.goto(siteDefinition.executionContext.url + checkoutCarNavLink, {
    waitForNavigation: !matchCondition,
  });
});

step('A-COMM Open Web Page <webLink>', async function (webLink) {
  switch (webLink) {
    case 'MPP':
      await t.goto(siteDefinition.executionContext.adminUrl + mppUrl, {
        waitForNavigation: !matchCondition,
      });
      break;
    case 'SalonPage':
      let salonPageLink = salonPageURL.replace(
        '=SalonID',
        '=' + CommonData.SalonID
      );
      await t.goto(siteDefinition.executionContext.adminUrl + salonPageLink, {
        waitForNavigation: !matchCondition,
      });
      break;
    case 'ArtistPage':
      let artistPageLink = artistPageURL
        .replace('=artistID', '=' + CommonData.ArtistID)
        .replace('=SalonID', '=' + CommonData.SalonID);
      await t.goto(siteDefinition.executionContext.adminUrl + artistPageLink, {
        waitForNavigation: !matchCondition,
      });
      break;
    case 'HausmartSalonPage':
      let HausmartSalonPageLink = hssalonPageURL.replace(
        '=HSSalonID',
        '=' + CommonData.HSSalonID
      );
      await t.goto(
        siteDefinition.executionContext.adminUrl + HausmartSalonPageLink,
        { waitForNavigation: !matchCondition }
      );
      break;
    case 'HausmartArtistPage':
      let HausmartArtistPageLink = hsartistPageURL
        .replace('=HSSalonID', '=' + CommonData.HSSalonID)
        .replace('=HSArtistID', '=' + CommonData.HSArtistID);
      await t.goto(
        siteDefinition.executionContext.adminUrl + HausmartArtistPageLink,
        { waitForNavigation: !matchCondition }
      );
      break;
    default:
      await t.goto(
        siteDefinition.executionContext.adminUrl + currentUserTypeUrl,
        { waitForNavigation: !matchCondition }
      );
      gauge.screenshot();
  }
});
step('A-COMM Open Salon Web Page <salonID>', async function (salonID) {
  await t.goto(siteDefinition.executionContext.adminUrl + salonPageURL, {
    waitForNavigation: !matchCondition,
  });
});
step('A-COMM AC Need To Open LogIn Link', async function () {
  await t.goto(siteDefinition.executionContext.url + acNavigateSigninUrl);
  gauge.screenshot();
});

step('A-COMM Return User Login Details with Submit', async function () {
  if (acReturnUserEmailId !== '') {
    await t.evaluate(
      await t.$(acReturnUserEmailId, { waitForEvents: ['DOMContentLoaded'] }),
      (ele) => ele.scrollTo()
    );
    await t.evaluate(
      await t.$(acReturnUserEmailId, { waitForEvents: ['DOMContentLoaded'] }),
      (ele) => ele.focus()
    );
    await t.write(currentUserEmail, t.into(await t.$(acReturnUserEmailId)));
  }

  if (acReturnUserPWD !== '') {
    await t.write(
      CommonData.RegisterUserPwd,
      t.into(await t.$(acReturnUserPWD))
    );
  }

  if (acReturnUserLoginButton !== '') {
    await t.evaluate(await t.$(acReturnUserLoginButton), (ele) => ele.click());
  }
  gauge.screenshot();
});

step('A-COMM Add a product to Cart', async function () {
  if (searchAddToBag !== '') {
    if (
      await (await t.$(searchAddToBag)).exists(retryInterval, elementTimeOut)
    ) {
      await t.evaluate(
        await t.$(searchAddToBag, { waitForEvents: ['DOMContentLoaded'] }),
        (ele) => ele.scrollTo()
      );
      await t.hover(await t.$(searchAddToBag));
      await t.evaluate(
        await t.$(searchAddToBag, { waitForEvents: ['DOMContentLoaded'] }),
        (ele) => ele.click()
      );
      gauge.message('Product add to cart');
      gauge.screenshot();
    }
  }
});

step('A-COMM Add a product to Cart from <webLink>', async function (webLink) {
  if (searchAddToBag !== '')
    switch (webLink) {
      case 'MPP':
        if (
          await (
            await t.$(searchAddToBag)
          ).exists(retryInterval, elementTimeOut)
        )
          await t.evaluate(
            await t.$(searchAddToBag, { waitForEvents: ['DOMContentLoaded'] }),
            (ele) => ele.scrollTo()
          );
        await t.hover(await t.$(searchAddToBag));
        await t.evaluate(
          await t.$(searchAddToBag, { waitForEvents: ['DOMContentLoaded'] }),
          (ele) => ele.click()
        );
        gauge.message('Product add to cart');
        gauge.screenshot();
        break;

      case 'SalonPage':
        if (
          await (
            await t.$(salonPageProduct)
          ).exists(retryInterval, elementTimeOut)
        )
          await t.evaluate(
            await t.$(salonPageProduct, {
              waitForEvents: ['DOMContentLoaded'],
            }),
            (ele) => ele.scrollTo()
          );
        await t.hover(await t.$(salonPageProduct));
        await t.evaluate(
          await t.$(salonPageProduct, { waitForEvents: ['DOMContentLoaded'] }),
          (ele) => ele.click()
        );
        gauge.message('Product add to cart');
        gauge.screenshot();
        break;
      case 'ArtistPage':
        if (
          await (
            await t.$(artsitPageProduct)
          ).exists(retryInterval, elementTimeOut)
        )
          await t.evaluate(
            await t.$(artsitPageProduct, {
              waitForEvents: ['DOMContentLoaded'],
            }),
            (ele) => ele.scrollTo()
          );
        await t.hover(await t.$(artsitPageProduct));
        await t.evaluate(
          await t.$(artsitPageProduct, { waitForEvents: ['DOMContentLoaded'] }),
          (ele) => ele.click()
        );
        gauge.message('Product add to cart');
        gauge.screenshot();
        break;
      case 'HausmartSalonPage':
        if (
          await (
            await t.$(hausmartSalonProduct)
          ).exists(retryInterval, elementTimeOut)
        )
          await t.evaluate(
            await t.$(hausmartSalonProduct, {
              waitForEvents: ['DOMContentLoaded'],
            }),
            (ele) => ele.scrollTo()
          );
        await t.hover(await t.$(hausmartSalonProduct));
        await t.evaluate(
          await t.$(hausmartSalonProduct, {
            waitForEvents: ['DOMContentLoaded'],
          }),
          (ele) => ele.click()
        );
        gauge.message('Product add to cart');
        gauge.screenshot();
        break;

      case 'HausmartArtistPage':
        if (
          await (
            await t.$(hausmartSalonProduct)
          ).exists(retryInterval, elementTimeOut)
        )
          await t.evaluate(
            await t.$(hausmartSalonProduct, {
              waitForEvents: ['DOMContentLoaded'],
            }),
            (ele) => ele.scrollTo()
          );
        await t.hover(await t.$(hausmartSalonProduct));
        await t.evaluate(
          await t.$(hausmartSalonProduct, {
            waitForEvents: ['DOMContentLoaded'],
          }),
          (ele) => ele.click()
        );
        gauge.message('Product add to cart');
        gauge.screenshot();
        break;
    }
});

step('A-COMM Search for new Salons', async function () {
  if (salonOpt !== '') {
    if (await (await t.$(salonOpt)).exists(retryInterval, elementTimeOut)) {
      await t.scrollTo(await t.$(salonOpt));
      gauge.message(
        'Current Salon selected for the RU: ' +
          (await (await t.$(salonName)).text())
      );
      await t.evaluate(
        await t.$(searchSalonsLink, { waitForEvents: ['DOMContentLoaded'] }),
        (ele) => ele.click()
      );
      await t.write(
        CommonData.CityZipCode,
        t.into(await t.$(salonCity_Steet_ZipCode))
      );
      await t.evaluate(
        await t.$(salonSearch, { waitForEvents: ['DOMContentLoaded'] }),
        (ele) => ele.click()
      );
      await t.hover(await t.$(salonSelectionRadio));
      await t.evaluate(
        await t.$(salonSelectionRadio, { waitForEvents: ['DOMContentLoaded'] }),
        (ele) => ele.click()
      );
      gauge.message(
        'Salon Chossed for the RU: ' + (await (await t.$(salonName)).text())
      );
      await t.evaluate(
        await t.$(salonTerms_Conditions, {
          waitForEvents: ['DOMContentLoaded'],
        }),
        (ele) => ele.click()
      );
      gauge.message('The Salon Details Modified');
      gauge.screenshot();
    }
  }
});

step('A-COMM Alter Salon Section', async function () {
  if (!ACommReturnUser) {
    if (
      await (await t.$(salonCheckBox)).exists(retryInterval, elementTimeOut)
    ) {
      await t.scrollTo(await t.$(salonCheckBox));
      await t.evaluate(
        await t.$(salonCheckBox, { waitForEvents: ['DOMContentLoaded'] }),
        (ele) => ele.click()
      );
      gauge.message('Select the Salon Details for New Register User');
      gauge.screenshot();
    }
  }
  if (
    await (await t.$(searchSalonsLink)).exists(retryInterval, elementTimeOut)
  ) {
    await t.evaluate(
      await t.$(searchSalonsLink, { waitForEvents: ['DOMContentLoaded'] }),
      (ele) => ele.click()
    );
    await t.write(
      CommonData.CityZipCode,
      t.into(await t.$(salonCity_Steet_ZipCode))
    );
    await t.evaluate(
      await t.$(salonSearch, { waitForEvents: ['DOMContentLoaded'] }),
      (ele) => ele.click()
    );
    await t.hover(await t.$(salonSelectionRadio));
    await t.evaluate(
      await t.$(salonSelectionRadio, { waitForEvents: ['DOMContentLoaded'] }),
      (ele) => ele.click()
    );
    gauge.message(
      'Salon Chossed for the RU: ' + (await (await t.$(salonName)).text())
    );
    await t.evaluate(
      await t.$(salonTerms_Conditions, { waitForEvents: ['DOMContentLoaded'] }),
      (ele) => ele.click()
    );
    gauge.message('The Salon Details Modified');
    gauge.screenshot();
  }
});

step('A-COMM Unselect the Salon Preference', async function () {
  if (ACommReturnUser) {
    if (
      await (await t.$(salonCheckBox)).exists(retryInterval, elementTimeOut)
    ) {
      await t.scrollTo(await t.$(salonCheckBox));
      await t.evaluate(
        await t.$(salonCheckBox, { waitForEvents: ['DOMContentLoaded'] }),
        (ele) => ele.click()
      );
      gauge.message('Unselect the Salon Details');
      gauge.screenshot();
    }
  }
});

step('A-COMM Alter the stylist name', async function () {
  if (stylistName) {
    if (await (await t.$(stylistName)).exists(retryInterval, elementTimeOut)) {
      await t.scrollTo(await t.$(stylistName));
      await t.write('Test', t.into(await t.$(stylistName)));
      gauge.message('Alter the stylist name');
      gauge.screenshot();
    }
  }
});

step('A-COMM Switch to My Salon Tool', async function () {
  sessionUserSalonFlag = await (await t.$(salonUserSalonFlags)).text();
  sessionUserSalonID = await (await t.$(salonUserSalonID)).text();
  userSalonFlagLastModified = await (await t.$(salonFlagLastModified)).text();
  gauge.message('User_Salon_Flags: ' + sessionUserSalonFlag);
  gauge.message('User_Salon_Id: ' + sessionUserSalonID);
  if (!(userSalonFlagLastModified === '')) {
    gauge.message('SALON_FLAG_LAST_MODIFIED: ' + userSalonFlagLastModified);
  } else {
    gauge.message(
      'SALON_FLAG_LAST_MODIFIED: ' +
        userSalonFlagLastModified +
        'Currently has No value'
    );
  }
  gauge.screenshot();
});

step(
  'A-COMM Expire the time in My Salon Tool',
  { continueOnFailure: matchCondition },
  async function () {
    if (salonSessionExpireStartTime !== '') {
      await t.click(await t.$(salonSessionExpireStartTime));
      remainingTime = await (await t.$(salonSessionExpireValue)).text();
      if (remainingTime.includes('expired')) {
        gauge.message(messages.expireRemainingTime);
      } else {
        gauge.message(messages.expirationNotSet);
        assert(!matchCondition);
      }
      gauge.screenshot();
    }
  }
);

step(
  'A-COMM Expire the time in My Salon Tool at User table',
  { continueOnFailure: matchCondition },
  async function () {
    if (salonUserFlagLastModified !== '') {
      await t.click(await t.$(salonUserFlagLastModified));
      userSalonFlagLastModified_AfterCheckout = await (
        await t.$(salonFlagLastModified)
      ).text();
      if (
        userSalonFlagLastModified_AfterCheckout !== userSalonFlagLastModified
      ) {
        gauge.message(messages.expireRemainingTime);
      } else {
        gauge.message(messages.expirationNotSet);
      }
      gauge.screenshot();
    }
  }
);

step('A-COMM Open A-Comm tool', async function () {
  await t.goto(siteDefinition.executionContext.adminUrl + acommURL);
});
step('A-COMM Open My Salon tool', async function () {
  await t.goto(siteDefinition.executionContext.adminUrl + mySalonUrl);
});

step(
  'A-COMM Verify Salon Logo',
  { continueOnFailure: true },
  async function () {
    if (await (await t.$(logo)).exists(retryInterval, elementTimeOut)) {
      assert(true);
      gauge.message('Acomm logo exists');
    } else {
      gauge.message('Acomm logo do not exist');
    }
  }
);
