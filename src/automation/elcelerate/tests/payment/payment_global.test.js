// @ts-check
const { test } = require('@playwright/test');
const ScriptDataAdapter = require('../../adapters/script_data_adapter.js');
const GuestUserScenarioModel = require('../../scenariomodels/checkout/GuestUserScenarioModel.js');
const PayByLinkGuestUserScenarioModel = require('../../scenariomodels/payment/PayByLinkGuestUserScenarioModel.js');
const GuestUserGiftCardScenarioModel = require('../../scenariomodels/payment/GuestUserGiftCardScenarioModel.js');
const GuestUserClearpayScenarioModel = require('../../scenariomodels/payment/GuestUserClearpayScenarioModel.js');
const GuestUserPayPalScenarioModel = require('../../scenariomodels/payment/GuestUserPayPalScenarioModel.js');
const DonationScenarioModel = require('../../scenariomodels/payment/DonationScenarioModel.js');
const GuestUserExpressPaypalScenarioModel = require('../../scenariomodels/payment/GuestUserExpressPaypalScenarioModel.js');

const feature = 'Checkout';
const payFeature = 'Payment';

const { SCOPE } = process.env;
const records = SCOPE ? JSON.parse(SCOPE) : [];

records.forEach((/** @type {string} */ tags) => {
  test(`${tags} As a guest user complete checkout with the STD offer code with PBL @STDPBL`, async ({
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
    const payByLinkGuestUser = new PayByLinkGuestUserScenarioModel(
      testInfo,
      page,
      paymentData,
      checkoutData
    );

    await test.step('Verify that the user is able to add products to the cart', async () => {
      await payByLinkGuestUser.includeProductFromProdcatTool();
    });

    await test.step('Verify that the user is able to view and apply offer code and update the cart', async () => {
      await payByLinkGuestUser.applyOfferCodeInCart();
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

    await test.step('Verify that the user is able to select the pay by link payment method and place an order', async () => {
      await guestUser.reviewPayDetails();
      await payByLinkGuestUser.payByLinkPayment();
    });
  });

  test(`${tags} As a guest user, I want to add a product and complete checkout using a gift card @GIFTCARDCHECKOUT`, async ({
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
    const guestUserGiftCard = new GuestUserGiftCardScenarioModel(
      testInfo,
      page,
      paymentData,
      checkoutData
    );

    await test.step('Verify that the user is able to add products to the cart', async () => {
      await guestUserGiftCard.includeProductFromProdcatTool();
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

    await test.step('Verify that the user is able to select the payment method with GiftCard and place an order', async () => {
      await guestUser.reviewPayDetails();
      await guestUserGiftCard.payWithGiftCard();
      await guestUserGiftCard.paymentOrderConfirmationMsg();
    });
  });

  test(`${tags} As a guest user, I want to add a product and complete checkout using a clearpay @CLEARPAYCHECKOUT`, async ({
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
    const guestUserClearpay = new GuestUserClearpayScenarioModel(
      testInfo,
      page,
      paymentData,
      checkoutData
    );

    await test.step('Verify that the user is able to add products to the cart', async () => {
      await guestUserClearpay.includeProductFromProdcatTool();
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
      await guestUser.reviewPayDetails();
      await guestUserClearpay.clearpayOrderPlace();
      await guestUserClearpay.paymentOrderConfirmationMsg();
    });
  });

  test(`${tags} As a guest user, I want to add a product and complete checkout using paypal @PAYPALCHECKOUT`, async ({
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
    const guestUserPayPal = new GuestUserPayPalScenarioModel(
      testInfo,
      page,
      paymentData,
      checkoutData
    );

    const guestUser = new GuestUserScenarioModel(testInfo, page, checkoutData);

    await test.step('Verify that the user is able to add products to the cart', async () => {
      await guestUserPayPal.includeProductFromProdcatTool();
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

    await test.step('Verify that the user is able to select the PayPal payment method and place an order', async () => {
      await guestUser.reviewPayDetails();
      await guestUserPayPal.selectPayPalPayment();
      await guestUserPayPal.accessPayPalPortal();
      await guestUserPayPal.paymentOrderConfirmationMsg();
    });
  });

  test(`${tags} AS A GUEST USER I LIKE TO ADD DONATION AND COMPLETE CHECKOUT FLOW @DONATION`, async ({
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
    const donation = new DonationScenarioModel(testInfo, page, paymentData);

    await test.step('Verify that the user is able to add products to the cart', async () => {
      await guestUser.addProductFromRandomUrl();
    });

    await test.step('Verify that the user is able to add donation', async () => {
      await donation.addDonationToCart();
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

  test(`${tags} As a guest user, I want to add a product and complete checkout using express paypal @EXPRESSPAYPALCHECKOUT`, async ({
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

    const expressPaypal = new GuestUserExpressPaypalScenarioModel(
      testInfo,
      page,
      paymentData,
      checkoutData
    );

    await test.step('Verify that the user is able to add products to the cart', async () => {
      await expressPaypal.includeProductFromProdcatTool();
    });

    await test.step('Verify that the user is able to navigate to the Express paypal sign-in page', async () => {
      await expressPaypal.reloadViewCartPage();
      await expressPaypal.selectExpressPayPalPayment();
      await expressPaypal.providePayPalCreds();
      await expressPaypal.expressCheckoutContinueSamplePage();
    });

    await test.step('Verify that the user is able to make express PayPal payment and place an order', async () => {
      await expressPaypal.reviewPayDetails();
      await expressPaypal.continueWithExpressPayPal();
      await expressPaypal.paymentOrderConfirmationMsg();
    });
  });
});
