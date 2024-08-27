// npx playwright test --grep "@GA4PLPPDPVALIDATION"
// npx playwright test --grep "@GA4NEWUSERVALIDATION"
// npx playwright test --grep "@GA4CHECKOUTVALIDATION"
// npx playwright test --grep "@GA4RETURNUSERVALIDATION"
// @ts-check
/* eslint-disable global-require */
const { test } = require('@playwright/test');
const ScriptDataAdapter = require('../../adapters/script_data_adapter.js');
const AnalyticsSanityScenarioModel = require('../../scenariomodels/analytics/GA4SanityScenarioModel.js');
const AnalyticsGUScenarioModel = require('../../scenariomodels/analytics/GA4GuestUserScenarioModel.js');
const GA4NewUserScenarioModel = require('../../scenariomodels/analytics/GA4NewUserScenarioModel.js');
const AnalyticsRUScenarioModel = require('../../scenariomodels/analytics/GA4ReturnUserScenarioModel.js');
const feature = 'Analytics';
const checkoutFeature = 'Checkout';
const plpPdpFeature = 'MPPSPP';

const { SCOPE } = process.env;
const records = SCOPE ? JSON.parse(SCOPE) : [];

records.forEach((/** @type {string} */ tags) => {
  test(`${tags} Google Analytics GA4 sanity check till viewcart page @GA4PLPPDPVALIDATION`, async ({
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
    const plpPdpData = await ScriptDataAdapter.getScriptData(
      tags.split('-'),
      plpPdpFeature,
      testInfo.title
    );

    const analyticsData = [data, checkoutData, plpPdpData];

    const analytics = new AnalyticsSanityScenarioModel(
      testInfo,
      page,
      analyticsData
    );

    await test.step('Intercept the browser and launch Home page', async () => {
      await analytics.initBrowser();
      await analytics.gotoHome();
    });

    await test.step('Intercept the browser and launch Home page', async () => {
      await analytics.gotoPlp();
    });

    await test.step('Go to PLP and add product to cart, verify GA4 taggings', async () => {
      await analytics.addProductFromPlp(context);
    });

    await test.step('Navigate to PDP and verify GA4 taggings', async () => {
      await analytics.gotoPdp();
    });

    await test.step('Add product to cart from PDP and verify GA4 taggings', async () => {
      await analytics.addProductFromPdp(context);
    });

    await test.step('view Cart page and verify GA4 taggings', async () => {
      await analytics.viewCartProduct();
      analytics.finalReport();
    });
  });
  test(`${tags} Google Analytics GA4 checkout Guest User @GA4CHECKOUTVALIDATION`, async ({
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
    const plpPdpData = await ScriptDataAdapter.getScriptData(
      tags.split('-'),
      plpPdpFeature,
      testInfo.title
    );

    const analyticsData = [data, checkoutData, plpPdpData];

    const analyticsGU = new AnalyticsGUScenarioModel(
      testInfo,
      page,
      analyticsData
    );

    await test.step('Intercept the browser and launch Home page', async () => {
      await analyticsGU.analyticsSanity.initBrowser();
      await analyticsGU.analyticsSanity.gotoHome();
    });

    await test.step('Intercept the browser and launch Home page', async () => {
      await analyticsGU.analyticsSanity.gotoPlp();
    });

    await test.step('Go to PLP and add product to cart, verify GA4 taggings', async () => {
      await analyticsGU.analyticsSanity.addProductFromPlp(context);
    });

    await test.step('Navigate to PDP and verify GA4 taggings', async () => {
      await analyticsGU.analyticsSanity.gotoPdp();
    });

    await test.step('Add product to cart from PDP and verify GA4 taggings', async () => {
      await analyticsGU.analyticsSanity.addProductFromPdp(context);
    });

    await test.step('view Cart page and verify GA4 taggings', async () => {
      await analyticsGU.analyticsSanity.viewCartProduct();
    });
    await test.step('Verify that the user is able to navigate to the sign-in page and verify GA4 taggings', async () => {
      await analyticsGU.reinitializationOfDataForGU();
      await analyticsGU.validateProductInCart();
      await analyticsGU.checkoutSamplePage();
    });

    await test.step('Verify that the user is able to enter sign-in details and verify GA4 taggings', async () => {
      await analyticsGU.guestUserpage();
    });

    await test.step('Verify that the user is able to enter the shipping details and verify GA4 taggings', async () => {
      await analyticsGU.deliveryDetails();
    });

    await test.step('Verify that the user is able to select the payment method and place an order and verify GA4 taggings', async () => {
      await analyticsGU.orderConfirmationPage();
      analyticsGU.analyticsSanity.finalReport();
    });
  });
  test(`${tags} Google Analytics GA4 checkout New User @GA4NEWUSERVALIDATION`, async ({
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
    const plpPdpData = await ScriptDataAdapter.getScriptData(
      tags.split('-'),
      plpPdpFeature,
      testInfo.title
    );

    const analyticsData = [data, checkoutData, plpPdpData];

    const analyticsNU = new GA4NewUserScenarioModel(
      testInfo,
      page,
      analyticsData
    );
    await test.step('Intercept the browser and launch Home page and verify GA4 taggings', async () => {
      await analyticsNU.analyticsSanity.initBrowser();
      await analyticsNU.analyticsSanity.gotoHome();
    });

    await test.step('Intercept the browser and launch Home page', async () => {
      await analyticsNU.analyticsSanity.gotoPlp();
    });

    await test.step('Go to PLP and add product to cart, verify GA4 taggings', async () => {
      await analyticsNU.analyticsSanity.addProductFromPlp(context);
    });

    await test.step('Navigate to PDP and verify GA4 taggings', async () => {
      await analyticsNU.analyticsSanity.gotoPdp();
    });

    await test.step('Add product to cart from PDP and verify GA4 taggings', async () => {
      await analyticsNU.analyticsSanity.addProductFromPdp(context);
    });

    await test.step('view Cart page and verify GA4 taggings', async () => {
      await analyticsNU.analyticsSanity.viewCartProduct();
    });
    await test.step('Verify that the user is able to navigate to the sign-in page and verify GA4 taggings', async () => {
      await analyticsNU.analyticsGU.reinitializationOfDataForGU();
      await analyticsNU.analyticsGU.checkoutSamplePage();
    });

    await test.step('Verify that the user is able to enter sign-in details and verify GA4 taggings', async () => {
      await analyticsNU.analyticsGU.guestUserpage();
    });

    await test.step('Verify that the user is able to enter the shipping details and verify GA4 taggings', async () => {
      await analyticsNU.analyticsGU.deliveryDetails();
    });

    await test.step('Verify that the user is able to select the payment method and place an order and verify GA4 taggings', async () => {
      await analyticsNU.analyticsGU.orderConfirmationPage();
    });

    await test.step('Verify that the user is able to create new account after purchase and verify GA4 taggings ', async () => {
      await analyticsNU.reinitializationOfDataForNU();
      await analyticsNU.newUserSignInDetails();
    });
  });
  test(`${tags} Google Analytics GA4 check Return User @GA4RETURNUSERVALIDATION`, async ({
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
    const plpPdpData = await ScriptDataAdapter.getScriptData(
      tags.split('-'),
      plpPdpFeature,
      testInfo.title
    );

    const analyticsData = [data, checkoutData, plpPdpData];
    const analyticsRU = new AnalyticsRUScenarioModel(
      testInfo,
      page,
      analyticsData
    );

    await test.step('Intercept the browser and launch Home page', async () => {
      await analyticsRU.analyticsSanity.initBrowser();
      await analyticsRU.analyticsSanity.gotoHome();
    });

    await test.step('Intercept the browser and launch Home page', async () => {
      await analyticsRU.analyticsSanity.gotoPlp();
    });

    await test.step('Go to PLP and add product to cart, verify GA4 taggings', async () => {
      await analyticsRU.analyticsSanity.addProductFromPlp(context);
    });

    await test.step('Navigate to PDP and verify GA4 taggings', async () => {
      await analyticsRU.analyticsSanity.gotoPdp();
    });

    await test.step('Add product to cart from PDP and verify GA4 taggings', async () => {
      await analyticsRU.analyticsSanity.addProductFromPdp(context);
    });

    await test.step('View the Cart page and verify GA4 taggings', async () => {
      await analyticsRU.analyticsSanity.viewCartProduct();
    });
    await test.step('Navigate to the sign-in page and verify GA4 taggings', async () => {
      await analyticsRU.analyticsGU.reinitializationOfDataForGU();
      await analyticsRU.analyticsGU.checkoutSamplePage();
    });

    await test.step('Return user able to enter sign-in details and verify GA4 tagging', async () => {
      await analyticsRU.reinitializationOfDataForRU();
      await analyticsRU.returnUserSignIn();
    });

    await test.step('Navigate to sample page and verify GA4 tagging', async () => {
      await analyticsRU.mergeCart();
      await analyticsRU.analyticsGU.checkoutSamplePage();
    });

    await test.step('Add new shipping details and verify GA4 tagging ', async () => {
      await analyticsRU.addNewShipping();
    });

    await test.step('Select the payment method and place an order, verify GA4 tagging', async () => {
      await analyticsRU.payAndConfirmOrder();
    });
  });
});
