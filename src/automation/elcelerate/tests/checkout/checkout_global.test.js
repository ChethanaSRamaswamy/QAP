// npx playwright test --grep "@GU"
// @ts-check
const { test } = require('@playwright/test');

const ScriptDataAdapter = require('../../adapters/script_data_adapter.js');
const GuestUserScenarioModel = require('../../scenariomodels/checkout/GuestUserScenarioModel.js');
const NewUserScenarioModel = require('../../scenariomodels/checkout/NewUserScenarioModel.js');
const ReturnUserScenarioModel = require('../../scenariomodels/checkout/ReturnUserScenarioModel.js');

const feature = 'Checkout';

const { SCOPE } = process.env;
const records = SCOPE ? JSON.parse(SCOPE) : [];

records.forEach((/** @type {string} */ tags) => {
  test(`${tags} AS A GUEST USER I LIKE TO ADD PRODUCT AND COMPLETE CHECKOUT FLOW @GU`, async ({
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

    const guestUser = new GuestUserScenarioModel(testInfo, page, data, context);

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
  });

  test(`${tags} AS A NEW USER I LIKE TO ADD PRODUCT AND COMPLETE CHECKOUT FLOW @NU`, async ({
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

    const newUser = new NewUserScenarioModel(testInfo, page, data);

    await test.step('Verify that the user is able to add products to the cart', async () => {
      await newUser.guestUser.addProductFromRandomUrl();
    });
    await test.step('Verify that the user is able to view and update the cart', async () => {
      await newUser.guestUser.validateAndReinitializeProduct();
    });

    await test.step('Verify that the user is able to navigate to the sign-in page', async () => {
      await newUser.guestUser.checkoutContinueSamplePage();
    });

    await test.step('Verify that the user is able to enter sign-in details', async () => {
      await newUser.guestUser.guestUserSignInDetails();
    });

    await test.step('Verify that the user is able to enter the shipping details', async () => {
      await newUser.guestUser.shippingDetails();
    });

    await test.step('Verify that the user is able to select the payment method and place an order', async () => {
      await newUser.guestUser.orderPlace();
      await newUser.guestUser.orderConfirmationMsg();
    });

    await test.step('Verify that the user is able to create an account on the order confirmation page', async () => {
      await newUser.registerNewUserOnOrderConfirmation();
      await newUser.validateAccountPage();
    });
  });

  test(`${tags} AS A RETURN USER I LIKE TO ADD PRODUCT AND COMPLETE CHECKOUT FLOW @RU`, async ({
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

    const returnUser = new ReturnUserScenarioModel(testInfo, page, data);

    await test.step('Verify that the user is able to add products to the cart', async () => {
      await returnUser.guestUser.addProductFromRandomUrl();
    });
    await test.step('Verify that the user is able to view and update the cart', async () => {
      await returnUser.guestUser.validateAndReinitializeProduct();
    });

    await test.step('Verify that the user is able to navigate to the sign-in page', async () => {
      await returnUser.guestUser.checkoutContinueSamplePage();
    });

    await test.step('Verify that the return user is able to enter sign-in details', async () => {
      await returnUser.returnUserSignInDetails();
    });

    await test.step('Verify that the return user is able to perform merge cart', async () => {
      await returnUser.performMergeCartAndHandleSamplePage();
    });

    await test.step('Verify that the user is able to add new shipping details', async () => {
      await returnUser.addNewRUShippingDetails();
      await returnUser.shippingDetails();
    });

    await test.step('Verify that the user is able to select the payment method and place an order', async () => {
      await returnUser.reviewPayDetails();
      await returnUser.guestUser.paymentDetails();
      await returnUser.guestUser.orderConfirmationMsg();
    });
  });
});
