/* eslint-disable global-require */
const { test } = require('@playwright/test');
const ScriptDataAdapter = require('../../adapters/script_data_adapter.js');
const BrazeScenarioModel = require('../../scenariomodels/analytics/BrazeScenarioModel.js');

const feature = 'Analytics';
const checkoutFeature = 'Checkout';
const plpPdpFeature = 'MPPSPP';

const { SCOPE } = process.env;
const records = SCOPE ? JSON.parse(SCOPE) : [];

records.forEach((/** @type {string} */ tags) => {
  // Braze- marketing pixel
  test(`${tags} Google Analytics braze data check plp pdp User @BRAZEMARKETIGPIXEL`, async ({
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
    const brazeMP = new BrazeScenarioModel(testInfo, page, analyticsData);

    await test.step('Intercept the browser and launch Home page', async () => {
      await brazeMP.initBrowser();
      await brazeMP.gotoHome();
    });

    await test.step('Navigate to PLP add a product to cart from plp and verify braze MP taggings', async () => {
      await brazeMP.addProductToCartFromPlp();
    });

    await test.step('Navigate to PDP and verify braze MP taggings', async () => {
      await brazeMP.gotoPdp();
    });

    await test.step('Add to cart and verify braze MP taggings', async () => {
      await brazeMP.addProductToCart();
    });

    await test.step('Validate product in cart page and navigate to the sign-in page and verify GA4 taggings', async () => {
      await brazeMP.validateProductInCart();
      await brazeMP.checkoutSamplePage();
    });

    await test.step('Verify the user is able to checkout as a guest user and verify GA4 taggings', async () => {
      await brazeMP.guestUserPage();
    });

    await test.step('Verify that the user is able to enter the shipping details and verify GA4 taggings', async () => {
      await brazeMP.deliveryDetails();
    });

    await test.step('Verify that the user is able to select the payment method and place an order and verify GA4 taggings', async () => {
      await brazeMP.orderConfirmationPage();
    });
  });
});
