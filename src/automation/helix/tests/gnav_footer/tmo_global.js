var t = require('taiko');
const Helper = require('../../helpers/helper');
const Util = require('../../../../utilities/util');
let Hengine = require('../../../../datainterface/providers/hengine');
var CommonData = {};
var feature = 'GNAV Footer';
let siteDefinition, source, NullDataException;

/* ******** Track Order ****** */

var orderProcessingStatus = '';
var shippedStatus = '';
var deliveredStatus = '';
var cancelledStatus = '';
var returnInProcessStatus = '';
var atWarehouseStatus = '';
var emulationDevice = '';
var tmoTitle = '';
var timeoutSetting = '';
let assertFailCount = 0;
var trackOrderUrl = '';
var tmoPopup = '';
var errorMessageId = '';
var orderSearchTxtBox = '';
var searchBtnTMO = '';
var statusID = '';
var maxNum = '';
var maxOrderID = '';
var errorMessage = '';
var orderIdStatus = '';
var lenghtofID = '';
var courierPg = '';
var onlineTrackingID = '';
var orderStatusTimeout = '';
var courierPgTimeout = '';
var status = {};
const assert = require('assert');

const matchCondition = true;
const messages = {
  stepNotApplicable: `The popup didn't display and hence this step is skipped.`,
};

// Array

function reinitialize() {
  status = {
    processing: orderProcessingStatus,
    shipped: shippedStatus,
    dispatched: deliveredStatus,
    cancelled: cancelledStatus,
    returnInProcess: returnInProcessStatus,
    atWarehouse: atWarehouseStatus,
  };
}

// Created Function to Optimize the Steps
async function closePopUp() {
  if (tmoPopup !== '') {
    // The pop up may be displayed for some of the locales. Hence used Try/Catch
    try {
      await t.evaluate(await t.$(tmoPopup), (ele) => ele.click());
    } catch (e) {
      console.log(messages.stepNotApplicable);
    }
  }
}

async function mobileDeviceEmulation() {
  if (siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE') {
    await t.emulateDevice(emulationDevice);
    gauge.message('Device:' + emulationDevice);
  }
}

async function navigateToTrackOrderPage() {
  await t.goto(Helper.getBaseUrl(siteDefinition, t) + trackOrderUrl, {
    waitForEvents: ['loadEventFired'],
  });
}

async function searchByOrderID(orderID) {
  if (orderID !== '') {
    await t.evaluate(await t.$(tmoTitle), (ele) => ele.scrollIntoView());
    await t.write(orderID, t.into(await t.$(orderSearchTxtBox)));
    await t.evaluate(await t.$(searchBtnTMO), (ele) => ele.click());
    gauge.screenshot();
  }
}

async function assertOrderStatus(orderID, expectedOrderStatus) {
  if (orderID !== '') {
    orderIdStatus = await (await t.$(statusID)).text();
    await t.waitFor(orderIdStatus, orderStatusTimeout);
    if (expectedOrderStatus === orderIdStatus) {
      assert(matchCondition);
      gauge.message(
        'The OrderID = ' +
          orderID +
          ' Status is ' +
          orderIdStatus +
          ' as expected'
      );
      gauge.screenshot();
    } else {
      gauge.message(
        'The OrderID = ' +
          orderID +
          ' Status is not as expected. \n Expected status: ' +
          expectedOrderStatus +
          '\n Actual status: ' +
          orderIdStatus
      );
      gauge.screenshot();
      assertFailCount++;
      assert(!matchCondition, 'Order Status is not as expected');
    }
  }
}

async function enforceOrderIDValidity() {
  if (CommonData.invalidID !== '') {
    await t.evaluate(await t.$(tmoTitle), (ele) => ele.scrollIntoView());
    await t.write(CommonData.invalidID, t.into(await t.$(orderSearchTxtBox)));
    if ((await t.$(searchBtnTMO)).isDisabled()) {
      assert(matchCondition);
      gauge.message(
        'Search Button is disabled due to entry of Invalid Order ID'
      );
    } else {
      gauge.message('Search Button is enabled');
      assertFailCount++;
      assert(
        !matchCondition,
        'Search Button is enabled even after entering the Invalid Order ID'
      );
    }
    gauge.screenshot();
  }
}

async function assertInvalidOrderID() {
  if (CommonData.invalidID !== '') {
    errorMessage = await (await t.$(errorMessageId)).text();
    gauge.message('Expected error message = ' + CommonData.trackOrderErrorMsg);
    gauge.message('Actual error message = ' + errorMessage);

    if (CommonData.trackOrderErrorMsg.includes(errorMessage)) {
      assert(matchCondition);
      gauge.message('Invalid Order ID');
      gauge.screenshot();
    } else {
      assertFailCount++;
    }
  }
}

async function verifyMaxOrderIdLength() {
  if (orderSearchTxtBox !== '') {
    await t.evaluate(await t.$(tmoTitle), (ele) => ele.scrollIntoView());
    for (let i = 1; i <= CommonData.charLength; i++) {
      maxNum = maxNum.concat(i);
    }
    gauge.message('order number inputted = ' + maxNum);
    await t.write(maxNum, t.into(await t.$(orderSearchTxtBox)));
    maxOrderID = await t.evaluate(await t.$(orderSearchTxtBox), (element) =>
      element.getAttribute('value')
    );
    lenghtofID = maxOrderID.length;
    gauge.message('order number entered = ' + maxOrderID);
    if (lenghtofID <= CommonData.orderIdLength) {
      assert(matchCondition);
      gauge.message('order ID <= 30');
    } else {
      gauge.message('order ID > 30 char');
      assertFailCount++;
      assert(!matchCondition);
    }
    gauge.screenshot();
  }
}

async function checkCourierSupport() {
  if (CommonData.deliveredID !== '') {
    await t.evaluate(await t.$(tmoTitle), (ele) => ele.scrollIntoView());
    await t.write(CommonData.deliveredID, t.into(await t.$(orderSearchTxtBox)));
    gauge.screenshot();
    await t.evaluate(await t.$(searchBtnTMO), (ele) => ele.click());
    await t.evaluate(await t.$(onlineTrackingID), (ele) => ele.click());
    await t.waitFor(courierPg, courierPgTimeout);
    gauge.message(await t.title());
    gauge.screenshot();
  }
}

async function assertCount() {
  if (assertFailCount !== 0) {
    gauge.message('The number of Failures:' + assertFailCount);
    assert(!matchCondition);
  }
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

// No input data table in the spec file
step('GNAV Footer_TMO Initialize Helix', async function () {
  // Initialize the selectors from DB
  await initFrameworkSettings();
});

// Step Optimization
step('GNAV Configure Pre-Requisites', async function () {
  t.setConfig({ navigationTimeout: parseInt(timeoutSetting, 10) });
  await Helper.setWindowSize(Util.ScreenSizes['1040p'], t);
  await Helper.setOtherCookies(siteDefinition, t);
  await Helper.setRevisionTag(siteDefinition, t);
  await mobileDeviceEmulation();
  await closePopUp();
  await navigateToTrackOrderPage();
  await closePopUp();
});

step(
  'GNAV Footer_TMO Checking the Order Status',
  { continueOnFailure: matchCondition },
  async function () {
    await searchByOrderID(CommonData.processingID);
    await assertOrderStatus(CommonData.processingID, status.processing);
    await searchByOrderID(CommonData.shippedID);
    await assertOrderStatus(CommonData.shippedID, status.shipped);
    await searchByOrderID(CommonData.deliveredID);
    await assertOrderStatus(CommonData.deliveredID, status.dispatched);
    await searchByOrderID(CommonData.cancelledID);
    await assertOrderStatus(CommonData.cancelledID, status.cancelled);
    await searchByOrderID(CommonData.returnInProgressID);
    await assertOrderStatus(
      CommonData.returnInProgressID,
      status.returnInProcess
    );
    await searchByOrderID(CommonData.atWarehouseID);
    await assertOrderStatus(CommonData.atWarehouseID, status.atWarehouse);
  }
);

step(
  'GNAV Footer_TMO Checking the Order Status with Invalid inputs',
  { continueOnFailure: matchCondition },
  async function () {
    await t.reload();
    await enforceOrderIDValidity();
    await assertInvalidOrderID();
    await t.reload();
    await verifyMaxOrderIdLength();
    await t.reload();
  }
);

step(
  'GNAV Footer_TMO Check Courier Support Online Tracking and Assert Count All',
  { continueOnFailure: matchCondition },
  async function () {
    await checkCourierSupport();
    await assertCount();
  }
);
