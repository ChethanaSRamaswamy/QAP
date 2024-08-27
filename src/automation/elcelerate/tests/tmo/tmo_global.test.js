// npx playwright test --grep "@EXISTINGORDERTRACKING" (Existing Order Id Tracking)
// npx playwright test --grep "@NEWORDERTRACKING" (New Order Id Tracking)
// @ts-check
const { test } = require('@playwright/test');

const ScriptDataAdapter = require('../../adapters/script_data_adapter.js');
const TMOScenarioModel = require('../../scenariomodels/tmo/TMOScenarioModel.js');
const GuestUserScenarioModel = require('../../scenariomodels/checkout/GuestUserScenarioModel.js');

const feature = 'TMO';
const checkoutFeature = 'Checkout';

const { SCOPE } = process.env;
const records = SCOPE ? JSON.parse(SCOPE) : [];

records.forEach((/** @type {string} */ tags) => {
  test(`${tags} VERIFY EXISTING ORDER ID TO TMO LANDING PAGE @EXISTINGORDERTRACKING`, async ({
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

    const trackMyOrder = new TMOScenarioModel(testInfo, page, data);

    await test.step('Verify that the user is able to open home page', async () => {
      await trackMyOrder.gotoHomePageVaildation();
    });

    await test.step('Verify that the user is able to open TMO landing page', async () => {
      await trackMyOrder.gotoTMOLandingPage();
    });

    await test.step('Verify the TMO order Id status', async () => {
      await trackMyOrder.validateTMOOrderId();
    });

    await test.step('Verify the TMO landing page order details', async () => {
      await trackMyOrder.getTMOStatus();
    });

    await test.step('Verify the user is able to click TMO landing page policy link', async () => {
      await trackMyOrder.clickTMOPolicyPageLink();
    });
  });

  test(`${tags} PLACING ORDER AS GUEST USER AND VERIFYING ORDER ID ON TMO LANDING PAGE @NEWORDERTRACKING`, async ({
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

    const checkoutData = await ScriptDataAdapter.getScriptData(
      tags.split('-'),
      checkoutFeature,
      testInfo.title
    );

    const guestUser = new GuestUserScenarioModel(testInfo, page, checkoutData);
    const trackMyOrder = new TMOScenarioModel(testInfo, page, data);

    await test.step('Verify that the user is able to add products to the cart', async () => {
      await guestUser.addProductFromRandomUrl();
    });
    await test.step('Verify that the user is able to view and update the cart', async () => {
      await guestUser.validateAndReinitializeProduct();
    });

    await test.step('Verify that the user is able to navigate to the sign-in page', async () => {
      await guestUser.checkoutContinueSamplePage();
    });

    await test.step('Verify that the user is able to enter sign-in details', async () => {
      await guestUser.guestUserSignInDetails();
    });

    await test.step('Verify that the user is able to enter the shipping details', async () => {
      await guestUser.shippingDetails();
    });

    await test.step('Verify that the user is able to select the payment method and place an order', async () => {
      await guestUser.orderPlace();
      await guestUser.orderConfirmationMsg();
    });

    await test.step('Verify that the order id status in TMO landing page', async () => {
      await trackMyOrder.validateOrderIdInTMOPage();
    });

    await test.step('Verify the TMO landing page order details', async () => {
      await trackMyOrder.getTMOStatus();
    });

    await test.step('Verify the user is able to click TMO landing page policy link', async () => {
      await trackMyOrder.clickTMOPolicyPageLink();
    });
  });
});
