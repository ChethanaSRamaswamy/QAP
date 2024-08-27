// @ts-check
const { test } = require('@playwright/test');

const ScriptDataAdapter = require('../../adapters/script_data_adapter.js');
const GuestUserScenarioModel = require('../../scenariomodels/checkout/GuestUserScenarioModel.js');
const NextDayDeliveryTypeScenarioModel = require('../../scenariomodels/delivery_types/NextDayDeliveryTypeScenarioModel.js');
const NamedDayDeliveryTypeScenarioModel = require('../../scenariomodels/delivery_types/NamedDayDeliveryTypeScenarioModel.js');
const SaturdayDeliveryTypeScenarioModel = require('../../scenariomodels/delivery_types/SaturdayDeliveryTypeScenarioModel.js');
const ClickAndCollectScenarioModel = require('../../scenariomodels/delivery_types/ClickAndCollectScenarioModel.js');

const feature = 'Checkout';
const payFeature = 'Payment';

const { SCOPE } = process.env;
const records = SCOPE ? JSON.parse(SCOPE) : [];

for (let iCnt = 0; iCnt < records.length; iCnt++) {
  const tags = records[iCnt];
  test(`${tags} A guest user can successfully choose NextDay Delivery and proceed to place an order @NEXTDAYDELIVERY`, async ({
    browser,
  }, testInfo) => {
    const canSkipTest = ScriptDataAdapter.isTestEligible(testInfo, tags);
    if (canSkipTest) {
      test.skip();
    }
    const context = await browser.newContext();
    const page = await context.newPage();
    const checkoutData = await ScriptDataAdapter.getScriptData(
      tags.split('-'),
      feature,
      testInfo.title
    );

    const paymentData = await ScriptDataAdapter.getScriptData(
      tags.split('-'),
      payFeature,
      testInfo.title
    );

    const guestUser = new GuestUserScenarioModel(testInfo, page, checkoutData);

    const nextDayDeliveryType = new NextDayDeliveryTypeScenarioModel(
      testInfo,
      page,
      paymentData,
      checkoutData
    );

    await test.step('Verify that the user is able to add products to the cart', async () => {
      await nextDayDeliveryType.includeProductFromProdcatTool();
    });

    await test.step('Verify that the user is able to select the nextday delivery type and update the cart', async () => {
      await nextDayDeliveryType.selectNextDayDeliveryInCart();
      await guestUser.validateAndReinitializeProduct();
    });

    await test.step('Verify that the user is able to navigate to the sign-in page', async () => {
      await guestUser.checkoutContinueSamplePage();
    });

    await test.step('Verify that the user is able to enter sign-in details', async () => {
      await guestUser.guestUserSignInDetails();
    });

    await test.step('Verify that the user is able to enter the shipping details', async () => {
      await nextDayDeliveryType.selectNextDayDeliveryInCheckout();
      await guestUser.shippingDetails();
    });

    await test.step('Verify that the user is able to select the payment method and place an order', async () => {
      await guestUser.reviewPayDetails();
      await nextDayDeliveryType.validateDeliveryTypeInPayment();
      await guestUser.paymentDetails();
      await guestUser.orderConfirmationMsg();
    });
  });

  test(`${tags} A guest user can successfully choose NamedDay Delivery and proceed to place an order @NAMEDDAYDELIVERY`, async ({
    browser,
  }, testInfo) => {
    const canSkipTest = ScriptDataAdapter.isTestEligible(testInfo, tags);
    if (canSkipTest) {
      test.skip();
    }
    const context = await browser.newContext();
    const page = await context.newPage();
    const checkoutData = await ScriptDataAdapter.getScriptData(
      tags.split('-'),
      feature,
      testInfo.title
    );

    const paymentData = await ScriptDataAdapter.getScriptData(
      tags.split('-'),
      payFeature,
      testInfo.title
    );

    const guestUser = new GuestUserScenarioModel(testInfo, page, checkoutData);

    const namedDayDeliveryType = new NamedDayDeliveryTypeScenarioModel(
      testInfo,
      page,
      paymentData,
      checkoutData
    );

    await test.step('Verify that the user is able to add products to the cart', async () => {
      await namedDayDeliveryType.includeProductFromProdcatTool();
    });

    await test.step('Verify that the user is able to select the nextday delivery type and update the cart', async () => {
      await namedDayDeliveryType.selectNamedDayDeliveryInCart();
      await guestUser.validateAndReinitializeProduct();
    });

    await test.step('Verify that the user is able to navigate to the sign-in page', async () => {
      await guestUser.checkoutContinueSamplePage();
    });

    await test.step('Verify that the user is able to enter sign-in details', async () => {
      await guestUser.guestUserSignInDetails();
    });

    await test.step('Verify that the user is able to enter the shipping details', async () => {
      await namedDayDeliveryType.selectNamedDayDeliveryInCheckout();
      await guestUser.shippingDetails();
    });

    await test.step('Verify that the user is able to select the payment method and place an order', async () => {
      await guestUser.reviewPayDetails();
      await namedDayDeliveryType.validateDeliveryTypeInPayment();
      await guestUser.paymentDetails();
      await guestUser.orderConfirmationMsg();
    });
  });

  test(`${tags} A guest user can successfully choose Saturday Delivery and proceed to place an order @SATURDAYDELIVERY`, async ({
    browser,
  }, testInfo) => {
    const canSkipTest = ScriptDataAdapter.isTestEligible(testInfo, tags);
    if (canSkipTest) {
      test.skip();
    }
    const context = await browser.newContext();
    const page = await context.newPage();
    const checkoutData = await ScriptDataAdapter.getScriptData(
      tags.split('-'),
      feature,
      testInfo.title
    );

    const paymentData = await ScriptDataAdapter.getScriptData(
      tags.split('-'),
      payFeature,
      testInfo.title
    );

    const guestUser = new GuestUserScenarioModel(testInfo, page, checkoutData);

    const saturdayDeliveryType = new SaturdayDeliveryTypeScenarioModel(
      testInfo,
      page,
      paymentData,
      checkoutData
    );

    await test.step('Verify that the user is able to add products to the cart', async () => {
      await saturdayDeliveryType.includeProductFromProdcatTool();
    });

    await test.step('Verify that the user is able to select the nextday delivery type and update the cart', async () => {
      await saturdayDeliveryType.selectSaturdayDeliveryInCart();
      await guestUser.validateAndReinitializeProduct();
    });

    await test.step('Verify that the user is able to navigate to the sign-in page', async () => {
      await guestUser.checkoutContinueSamplePage();
    });

    await test.step('Verify that the user is able to enter sign-in details', async () => {
      await guestUser.guestUserSignInDetails();
    });

    await test.step('Verify that the user is able to enter the shipping details', async () => {
      await saturdayDeliveryType.selectSaturdayDeliveryInCheckout();
      await guestUser.shippingDetails();
    });

    await test.step('Verify that the user is able to select the payment method and place an order', async () => {
      await guestUser.reviewPayDetails();
      await saturdayDeliveryType.validateDeliveryTypeInPayment();
      await guestUser.paymentDetails();
      await guestUser.orderConfirmationMsg();
    });
  });

  test(`${tags} As a guest, I want to add a product and use Click and Collect for checkout @CLICKANDCOLLECTCHECKOUT`, async ({
    browser,
  }, testInfo) => {
    const canSkipTest = ScriptDataAdapter.isTestEligible(testInfo, tags);
    if (canSkipTest) {
      test.skip();
    }
    const context = await browser.newContext();
    const page = await context.newPage();
    const checkoutData = await ScriptDataAdapter.getScriptData(
      tags.split('-'),
      feature,
      testInfo.title
    );
    const paymentData = await ScriptDataAdapter.getScriptData(
      tags.split('-'),
      payFeature,
      testInfo.title
    );

    const guestUser = new GuestUserScenarioModel(testInfo, page, checkoutData);

    const clickCollect = new ClickAndCollectScenarioModel(
      testInfo,
      page,
      paymentData,
      checkoutData
    );

    await test.step('Verify that the user is able to add products to the cart', async () => {
      await clickCollect.includeProductFromProdcatTool();
    });
    await test.step('Verify that the user is able to view and update the cart', async () => {
      await clickCollect.clickCollectDetailsInCart();
      await guestUser.validateAndReinitializeProduct();
    });

    await test.step('Verify that the user is able to navigate to the sign-in page', async () => {
      await guestUser.checkoutContinueSamplePage();
    });

    await test.step('Verify that the user is able to enter sign-in details', async () => {
      await guestUser.guestUserSignInDetails();
    });

    await test.step('Verify that the user is able to enter the shipping details', async () => {
      await clickCollect.clickCollectDetailsInCheckout();
      await clickCollect.clickCollectBillingDetails();
    });

    await test.step('Verify that the user is able to select the payment method and place an order', async () => {
      await guestUser.paymentDetails();
      await guestUser.orderConfirmationMsg();
    });
  });
}
