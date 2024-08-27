// npx playwright test --grep "@GU"
// @ts-check
const { test } = require('@playwright/test');

const ScriptDataAdapter = require('../../adapters/script_data_adapter.js');
const GuestUserScenarioModel = require('../../scenariomodels/checkout/GuestUserScenarioModel.js');
const AntiDiversionScenarioModel = require('../../scenariomodels/checkout/AntiDiversionScenarioModel.js');
const feature = 'Checkout';

const { SCOPE } = process.env;
const records = SCOPE ? JSON.parse(SCOPE) : [];

records.forEach((/** @type {string} */ tags) => {
  test(`${tags} AS A GUEST USER I LIKE TO ADD MAX QTY OF SAME PRODUCT AND COMPLETE CHECKOUT FLOW @ADDMAXQTYCHK`, async ({
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

    const guestUser = new GuestUserScenarioModel(testInfo, page, data);
    const objAdp = new AntiDiversionScenarioModel(testInfo, page, data);

    await test.step('Verify that the user is able to add max qty of same product to the cart', async () => {
      await objAdp.addMaxAllowedQuantities();
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
  });

  test(`${tags} AS A GUEST USER I LIKE TO ADD MAX QTY OF ONE PRODUCT AND SECOND MAX QTY OF ANOTHER PRODUCT AND COMPLETE CHECKOUT FLOW @ADDMAXCARTCHK`, async ({
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

    const guestUser = new GuestUserScenarioModel(testInfo, page, data);
    const objAdp = new AntiDiversionScenarioModel(testInfo, page, data);

    await test.step('Verify that the user is able to add max qty of one product and second max qty of another product to the cart', async () => {
      await objAdp.addMaxCartProduct();
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
  });
});
