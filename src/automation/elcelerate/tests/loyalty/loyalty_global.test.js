// npx playwright test --grep "@LOYALTYENROLLORDERCONPAGE"
// @ts-check
const { test } = require('@playwright/test');

const ScriptDataAdapter = require('../../adapters/script_data_adapter.js');
const LoyaltyEnrollRegisterPageScenarioModel = require('../../scenariomodels/loyalty/LoyaltyEnrollRegisterPageScenarioModel.js');
const LoyaltyEnrollOrderConfPageScenarioModel = require('../../scenariomodels/loyalty/LoyaltyEnrollOrderConfPageScenarioModel.js');
const LoyaltyEnrollMarketPageScenarioModel = require('../../scenariomodels/loyalty/LoyaltyEnrollMarketPageScenarioModel.js');
const LoyaltyPaidEnrollCartPgScenarioModel = require('../../scenariomodels/loyalty/LoyaltyPaidEnrollCartPgScenarioModel.js');
const LoyaltyPaidEnrollMrktPgScenarioModel = require('../../scenariomodels/loyalty/LoyaltyPaidEnrollMrktPgScenarioModel.js');

const LoyaltyWelcomeOfferScenarioModel = require('../../scenariomodels/loyalty/LoyaltyWelcomeOfferScenarioModel.js');

const loyFeature = 'Loyalty';
const feature = 'Checkout';

const { SCOPE } = process.env;
const records = SCOPE ? JSON.parse(SCOPE) : [];

records.forEach((/** @type {string} */ tags) => {
  test(`${tags} AS A NEW USER ENROLL INTO LOYALTY USING ACCOUNT REGISTRATION PAGE @LOYALTYENROLLREGPAGE`, async ({
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
      loyFeature,
      testInfo.title
    );

    const loyaltyenrollregpage = new LoyaltyEnrollRegisterPageScenarioModel(
      testInfo,
      page,
      data
    );

    await test.step('Verify that the user is able to navigate to the sign-in page and enter details', async () => {
      await loyaltyenrollregpage.clickOnRegisterGnavLinkLoyalty();
    });

    await test.step('Click on Loyalty terms and conditions and complete registration', async () => {
      await loyaltyenrollregpage.loyaltyRegisterTermsCond();
    });

    await test.step('Navigate to loyalty sign up page from account index', async () => {
      await loyaltyenrollregpage.navigateToLoyaltyProgramDetails();
    });

    await test.step('Accept loyalty terms and conditions from account page', async () => {
      await loyaltyenrollregpage.acceptLoyaltyTermsAndConditionsAccountPage();
    });

    /* await test.step('Navigate to loyalty rewards section', async () => {
      await loyaltyenrollregpage.goToRewardsLoyalty();
    }); */

    await test.step('Verify that the user is able to navigate to rewards and loyalty section in account page', async () => {
      await loyaltyenrollregpage.displayLoyaltyStatus();
    });
  });

  test(`${tags} AS A NEW USER ENROLL INTO LOYALTY USING MARKETING PAGE @LOYALTYENROLLMARKETINGPAGE`, async ({
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
      loyFeature,
      testInfo.title
    );

    const loyaltyEnrollMarketpage = new LoyaltyEnrollMarketPageScenarioModel(
      testInfo,
      page,
      data
    );

    await test.step('Verify that the user is able to navigate to the sign-in page and enter details', async () => {
      await loyaltyEnrollMarketpage.loyRegPg.clickOnRegisterGnavLinkLoyalty();
    });

    await test.step('Click on Account terms and conditions and complete registration', async () => {
      await loyaltyEnrollMarketpage.accountRegisterTerms();
    });

    await test.step('Verify that the user is able to enroll loyalty in Marketing page', async () => {
      await loyaltyEnrollMarketpage.enrollMarketingtPageDetails();
    });

    await test.step('Verify that the user is able to navigate to loyalty section', async () => {
      await loyaltyEnrollMarketpage.loyRegPg.displayTierStatus();
    });
  });

  test(`${tags} AS A NEW USER ENROLL INTO LOYALTY USING FOOTER MARKETING PAGE @LOYALTYENROLLFOOTERMARKETINGPAGE`, async ({
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
      loyFeature,
      testInfo.title
    );

    const loyaltyEnrollMarketpage = new LoyaltyEnrollMarketPageScenarioModel(
      testInfo,
      page,
      data
    );

    await test.step('Verify that the user is able to navigate to the marketing page', async () => {
      await loyaltyEnrollMarketpage.navigateToLoyaltyMarketingPageFromFooter();
    });

    await test.step('Verify that the user is able to enter user details on the marketing page', async () => {
      await loyaltyEnrollMarketpage.newLoyaltyUserRegistrationDetailsMarktPage();
    });

    await test.step('Click on Account terms and conditions and complete registration', async () => {
      await loyaltyEnrollMarketpage.marketingPageAcceptTerms();
    });

    await test.step('Verify that the user is able to navigate to loyalty section', async () => {
      await loyaltyEnrollMarketpage.loyRegPg.displayLoyaltyStatus();
    });
  });

  test(`${tags} AS A GUEST USER ENROLL INTO LOYALTY USING ORDER CONFIRMATION PAGE @LOYALTYENROLLORDERCONPAGE`, async ({
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
    const loyData = await ScriptDataAdapter.getScriptData(
      tags.split('-'),
      loyFeature,
      testInfo.title
    );

    const checkoutPage = new LoyaltyEnrollOrderConfPageScenarioModel(
      testInfo,
      page,
      checkoutData
    );
    const loyEnrollOrdConfpage = new LoyaltyEnrollOrderConfPageScenarioModel(
      testInfo,
      page,
      loyData
    );

    await test.step('Verify that the user is able to add products to the cart', async () => {
      await checkoutPage.guestCheckout.addProductFromRandomUrl();
    });

    await test.step('Verify that the user is able to view and update the cart', async () => {
      await checkoutPage.guestCheckout.validateAndReinitializeProduct();
    });

    await test.step('Verify that the user is able to proceed to Sign in successfully', async () => {
      await checkoutPage.guestCheckout.checkoutContinueSamplePage();
    });

    await test.step('Verify that the user is able to enter sign-in details', async () => {
      await checkoutPage.guestCheckout.guestUserSignInDetails();
      await loyEnrollOrdConfpage.newLoyaltyUserRegDetails();
      await loyEnrollOrdConfpage.newUserAcceptTermsAndCondition();
    });

    await test.step('Verify that the user is able to enter the shipping details', async () => {
      await checkoutPage.guestCheckout.shippingDetails();
    });

    await test.step('Verify that the user is able to select the payment method and place an order', async () => {
      await checkoutPage.guestCheckout.orderPlace();
      await checkoutPage.guestCheckout.orderConfirmationMsg();
    });

    await test.step('Verify that the user is able to enroll in loyalty from order confirmation page', async () => {
      await loyEnrollOrdConfpage.orderConfirmPageloyaltyDetails();
    });

    await test.step('Verify that the user is able to navigate to rewards and display tier points', async () => {
      await loyEnrollOrdConfpage.loyRegPg.displayLoyaltyStatus();
    });
  });

  test(`${tags} VERIFY WHETHER LOYALTY USER IS ABLE TO REDEEM THE WELCOME OFFER @LOYALTYWELCOMEOFFER`, async ({
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
    const loyData = await ScriptDataAdapter.getScriptData(
      tags.split('-'),
      loyFeature,
      testInfo.title
    );

    const newuser = new LoyaltyWelcomeOfferScenarioModel(
      testInfo,
      page,
      checkoutData
    );
    const loyaltyoffer = new LoyaltyWelcomeOfferScenarioModel(
      testInfo,
      page,
      loyData
    );

    await test.step('Verify that the user is able to navigate to the sign-in page and enter details', async () => {
      await loyaltyoffer.regPage.clickOnRegisterGnavLinkLoyalty();
    });

    await test.step('Click on Loyalty terms and conditions and complete registration', async () => {
      await loyaltyoffer.regPage.loyaltyRegisterTermsCond();
    });

    await test.step('Verify that the user is able to navigate to rewards and loyalty section in account page', async () => {
      await loyaltyoffer.regPage.displayLoyaltyStatus();
    });

    await test.step('Verify that the user is able to add products to the cart', async () => {
      await newuser.addProductFromRandomUrl();
    });

    await test.step('Verify that the user is able to navigate loyalty landing page and redeem welcome offer', async () => {
      await loyaltyoffer.welcomeOfferRedemption();
    });

    await test.step('Navigate to offer manager and verify welcome offer', async () => {
      await loyaltyoffer.validateWelcomeOffer();
    });

    await test.step('Verify that the user is able to view and update the cart', async () => {
      await newuser.checkout.validateAndReinitializeProduct();
    });

    await test.step('Verify that the user is able to proceed to Sign in successfully', async () => {
      await newuser.checkout.checkoutContinueSamplePage();
    });

    await test.step('Verify that the user is able to enter the shipping details', async () => {
      await newuser.checkout.shippingDetails();
    });

    await test.step('Verify that the user is able to select the payment method and place an order', async () => {
      await newuser.checkout.orderPlace();
      await newuser.checkout.orderConfirmationMsg();
    });
  });
  test(`${tags} AS A NEW USER ENROLL INTO PAID LOYALTY PROGRAM USING CART PAGE. @NewUserLOYPAIDENROLLINCARTPAGE`, async ({
    browser,
  }, testInfo) => {
    const canSkipTest = ScriptDataAdapter.isTestEligible(testInfo, tags);
    if (canSkipTest) {
      test.skip();
    }
    const context = await browser.newContext();
    const page = await context.newPage();
    const { title } = testInfo;
    const data = await ScriptDataAdapter.getScriptData(
      tags.split('-'),
      feature,
      title
    );

    const paidEnrollCartScenario = new LoyaltyPaidEnrollCartPgScenarioModel(
      testInfo,
      page,
      data
    );

    await test.step('Add Loyalty Membership SKU from Cart Page', async () => {
      await paidEnrollCartScenario.navigateToCart();
      await paidEnrollCartScenario.addPaidLoyaltySKUinCart();
    });
    await test.step('Verify the Loyalty Membership SKU in Cart Page', async () => {
      await paidEnrollCartScenario.verifyLoyaltySKU();
    });
    await test.step('Checkout sign up', async () => {
      await paidEnrollCartScenario.checkoutSignUp();
    });
    await test.step('Fill out checkout information', async () => {
      await paidEnrollCartScenario.fillOutCheckoutInformation();
    });
    await test.step('Verify the creation of a loyalty account with membership number', async () => {
      await paidEnrollCartScenario.verifyPaidLoyaltyMembershipNumber();
    });
  });

  test(`${tags} AS A NEW USER ENROLL INTO PAID LOYALTY PROGRAM USING LOYALTY MARKETING PAGE. @NewUserLOYPAIDENROLLINMRKTPAGE`, async ({
    browser,
  }, testInfo) => {
    const canSkipTest = ScriptDataAdapter.isTestEligible(testInfo, tags);
    if (canSkipTest) {
      test.skip();
    }
    const context = await browser.newContext();
    const page = await context.newPage();
    const { title } = testInfo;
    const data = await ScriptDataAdapter.getScriptData(
      tags.split('-'),
      feature,
      title
    );

    const paidEnrollMrktScenario = new LoyaltyPaidEnrollMrktPgScenarioModel(
      testInfo,
      page,
      data
    );

    await test.step('Add Loyalty Membership SKU from Loyalty Marketing Page', async () => {
      await paidEnrollMrktScenario.navigateToLoyaltyMrktPage();
      await paidEnrollMrktScenario.addPaidLoyaltySKUinMrkt();
    });
    await test.step('Verify the Loyalty Membership SKU in Cart Page', async () => {
      await paidEnrollMrktScenario.verifyLoyaltySKU();
    });
    await test.step('Sign up as a new user', async () => {
      await paidEnrollMrktScenario.checkoutSignUp();
    });
    await test.step('Complete checkout process', async () => {
      await paidEnrollMrktScenario.fillOutCheckoutInformation();
    });
    await test.step('Verify the creation of a loyalty account with membership number', async () => {
      await paidEnrollMrktScenario.verifyPaidLoyaltyMembershipNumber();
    });
  });
});
