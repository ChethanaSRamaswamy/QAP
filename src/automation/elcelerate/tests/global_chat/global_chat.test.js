// npx playwright test --grep "@GU"
// @ts-check
const { test } = require('@playwright/test');

const ScriptDataAdapter = require('../../adapters/script_data_adapter.js');
const GlobalChatScenarioModel = require('../../scenariomodels/global_chat/GlobalChatScenarioModel.js');

const feature = 'Live Chat';

const { SCOPE } = process.env;
const records = SCOPE ? JSON.parse(SCOPE) : [];

records.forEach((/** @type {string} */ tags) => {
  test(`${tags} Validating the Live Chat feature in Home page @CHECKCHATONHOMEPAGE`, async ({
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

    const globalChat = new GlobalChatScenarioModel(testInfo, page, data);
    await test.step('GC Verify that the user is able to navigate to Home page', async () => {
      await globalChat.goToHomePage();
    });
    await test.step('GC Accept cookies if applicable', async () => {
      await globalChat.acceptCookies(true);
    });
    await test.step('GC Verify that the user is able to click chat button for', async () => {
      await globalChat.openChat();
    });
    let vendor = ''; // Do not like it here, not sure how to handle vendor check across whole test differently J.S
    await test.step('GC Verify if chat images are visible', async () => {
      vendor = await globalChat.getVendor(); // Up. Do not like it here, not sure how to handle vendor check across whole test differently J.S
      await globalChat.verifyLogoImage(vendor);
      await globalChat.verifyBrandImage(vendor);
    });
    await test.step('GC Close chat', async () => {
      await globalChat.exitChat();
    });
  });

  test(`${tags} Validating the Live Chat feature in PLP page @CHECKCHATODPRODUCTLISTINGPAGE`, async ({
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

    const globalChat = new GlobalChatScenarioModel(testInfo, page, data);

    await test.step('GC Verify that the user is able to navigate to PLP', async () => {
      await globalChat.goToPLP();
    });
    await test.step('GC Accept cookies if applicable', async () => {
      await globalChat.acceptCookies(true);
    });
    await test.step('GC Verify that the user is able to click chat button for', async () => {
      await globalChat.openChat();
    });
    let vendor = ''; // Do not like it here, not sure how to handle vendor check across whole test differently J.S
    await test.step('GC Verify if chat images are visible', async () => {
      vendor = await globalChat.getVendor(); // Up. Do not like it here, not sure how to handle vendor check across whole test differently J.S
      await globalChat.verifyLogoImage(vendor);
      await globalChat.verifyBrandImage(vendor);
    });
    await test.step('GC Close chat', async () => {
      await globalChat.exitChat();
    });
  });

  test(`${tags} Validating the Live Chat feature in PDP page @CHECKCHATONPRODUCTDETAILSPAGE`, async ({
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

    const globalChat = new GlobalChatScenarioModel(testInfo, page, data);

    await test.step('GC Verify that the user is able to navigate to PDP page', async () => {
      await globalChat.goToPDP();
    });
    await test.step('GC Accept cookies if applicable', async () => {
      await globalChat.acceptCookies(true);
    });
    await test.step('GC Verify that the user is able to click chat button for', async () => {
      await globalChat.openChat();
    });
    let vendor = ''; // Do not like it here, not sure how to handle vendor check across whole test differently J.S
    await test.step('GC Verify if chat images are visible', async () => {
      vendor = await globalChat.getVendor(); // Up. Do not like it here, not sure how to handle vendor check across whole test differently J.S
      await globalChat.verifyLogoImage(vendor);
      await globalChat.verifyBrandImage(vendor);
    });
    await test.step('GC Close chat', async () => {
      await globalChat.exitChat();
    });
  });

  test(`${tags} Validating the cookies management negative @REJECTCOOKIESANDCHECKCOMPLIANCE`, async ({
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

    const globalChat = new GlobalChatScenarioModel(testInfo, page, data);

    await test.step('GC Verify that the user is able to navigate to Home page', async () => {
      await globalChat.goToHomePage();
    });
    await test.step('GC Reject cookies', async () => {
      await globalChat.checkComplianceBeforeCookies();
      await globalChat.acceptCookies(false);
      await globalChat.checkComplianceAfterCookies(false);
    });
    await test.step('Check if chat button is visible', async () => {
      await globalChat.verifyChatButtonVisibility(false);
    });
  });

  test(`${tags} Validating the cookies management positive @ACCEPTCOOKIESANDCHECKCOMPLIANCE`, async ({
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

    const globalChat = new GlobalChatScenarioModel(testInfo, page, data);

    await test.step('GC Verify that the user is able to navigate to Home page', async () => {
      await globalChat.goToHomePage();
    });
    await test.step('GC Accept cookies', async () => {
      await globalChat.checkComplianceBeforeCookies();
      await globalChat.acceptCookies(true);
      await globalChat.checkComplianceAfterCookies(true);
    });
    await test.step('Check if chat button is visible', async () => {
      await globalChat.verifyChatButtonVisibility(true);
    });
  });
});
