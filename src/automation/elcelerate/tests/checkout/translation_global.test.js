// npx playwright test --grep "@TRANSLATION"
// @ts-check
const { test } = require('@playwright/test');

const ScriptDataAdapter = require('../../adapters/script_data_adapter.js');
const TranslationScenarioModel = require('../../scenariomodels/checkout/TranslationScenarioModel.js');
const GuestUserScenarioModel = require('../../scenariomodels/checkout/GuestUserScenarioModel.js');

const feature = 'Checkout';

const { SCOPE } = process.env;
const records = SCOPE ? JSON.parse(SCOPE) : [];

records.forEach((/** @type {string} */ tags) => {
  test(`${tags} VERIFY THE FRENCH TRANSLATION AND COMPLETE CHECKOUT FLOW @TLA`, async ({
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
      feature,
      testInfo.title
    );

    const guestUser = new GuestUserScenarioModel(testInfo, page, checkoutData);
    const translationScenario = new TranslationScenarioModel(
      testInfo,
      page,
      data
    );

    await test.step('Verify the user is able to open home page', async () => {
      await translationScenario.gotoHomePageVaildation();
    });

    await test.step('Verify the user is able to open french tranlsate home page', async () => {
      await translationScenario.gotoTranslateHomePage();
    });

    await test.step('Validate the transalte text home page', async () => {
      await translationScenario.gotoTranslateHomePageValidation();
    });

    await test.step('Validate the transalte text plp page', async () => {
      await translationScenario.gotoTranslatePlpPageValidation();
    });

    await test.step('Validate the transalte text pdp page', async () => {
      await translationScenario.gotoTranslatePdpPageValidation();
    });

    await test.step('Verify that the user is able to add products to the cart', async () => {
      await guestUser.putProductInCartFromSPP();
      await translationScenario.addToCartOverlayTranslateValidation();
      await guestUser.accessShoppingBag();
    });

    await test.step('Verify that the user is able to view and update the cart', async () => {
      await translationScenario.viewCartTranslateValidation();
      await guestUser.validateAndReinitializeProduct();
    });

    await test.step('Verify that the user is able to navigate to the sign-in page', async () => {
      await guestUser.checkoutContinueSamplePage();
    });

    await test.step('Verify that the user is able to enter sign-in details', async () => {
      await translationScenario.guestUserSignInPageTranslateValidation();
      await guestUser.guestUserSignInDetails();
    });

    await test.step('Verify that the user is able to enter the shipping details', async () => {
      await translationScenario.shippingPageTranslateValidation();
      await guestUser.shippingDetails();
    });

    await test.step('Verify that the user is able to select the payment method and place an order', async () => {
      await translationScenario.paymentPageTranslateValidation();
      await guestUser.orderPlace();
      await guestUser.orderConfirmationMsg();
    });
  });
});
