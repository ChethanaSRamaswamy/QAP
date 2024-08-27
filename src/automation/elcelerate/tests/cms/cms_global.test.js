// npx playwright test --grep "@CMSIMAGELOC"
// @ts-check
const { test } = require('@playwright/test');

const ScriptDataAdapter = require('../../adapters/script_data_adapter.js');
const CMSAlfrescoScenarioModel = require('../../scenariomodels/cms/CMSAlfrescoScenarioModel.js');
const CMSImageLocScenarioModel = require('../../scenariomodels/cms/CMSImageLocScenarioModel.js');
const CMSImportTranslationsScenarioModel = require('../../scenariomodels/cms/CMSImportTranslationsScenarioModel.js');

const feature = 'CMS';

const { SCOPE } = process.env;
const records = JSON.parse(SCOPE);

for (let iCnt = 0; iCnt < records.length; iCnt++) {
  const tags = records[iCnt];
  test(`${tags} Localize with Image @CMSIMAGELOC`, async ({
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

    const cms = new CMSImageLocScenarioModel(testInfo, page, data, context);

    await test.step('CMS Login to CMS as a test User', async () => {
      await cms.loginAsTestUser();
    });

    await test.step('Navigate to Add Content and Click Page', async () => {
      await cms.addContent();
      await cms.clickPage();
    });

    await test.step('Enter Content', async () => {
      await cms.enterRevisionTag();
      await cms.expandToAddNewItem();
      await cms.selectImageTemplate();
      await cms.selectMediaAndSelectImage();
    });

    await test.step('CMS Click Basic Info', async () => {
      await cms.basicInfo();
    });

    await test.step('CMS Save and Change Workflow Status', async () => {
      await cms.clickSaveAndChangeWorkFlowStatus();
    });

    await test.step('CMS Approve and Publish', async () => {
      await cms.clickApprove();
      await cms.approveMsg();
      await cms.clickPublish();
      await cms.publishMsg();
    });

    await test.step('CMS Localize', async () => {
      await cms.localizeTabOption();
      await cms.localize();
      await cms.localizeStatusMessage();
    });

    await test.step('CMS Validate Image Localized', async () => {
      await cms.clickLocalizedEdit();
    });
  });

  test(`${tags} Alfresco Validation @CMSALFRESCO`, async ({
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

    const cms = new CMSAlfrescoScenarioModel(testInfo, page, data, context);

    await test.step('CMS Login to CMS as a test User', async () => {
      await cms.loginAsTestUser();
    });

    await test.step('Navigate to Add Content and Click Page type', async () => {
      await cms.addContent();
      await cms.clickPage();
    });

    await test.step('Enter Content', async () => {
      await cms.enterRevisionTag();
      await cms.expandToAddNewItem();
      await cms.selectImageTemplate();
      await cms.selectMediaThenSelectImage();
    });

    await test.step('CMS Click Basic Info', async () => {
      await cms.basicInfo();
    });

    await test.step('CMS Save and Change Workflow Status', async () => {
      await cms.clickSaveAndChangeWorkFlowStatus();
    });

    await test.step('CMS Approve and Publish', async () => {
      await cms.clickApprove();
      await cms.approveMsg();
      await cms.clickPublish();
      await cms.publishMsg();
    });

    await test.step('Validate Image Content on Front End', async () => {
      await cms.navigateToFE();
      await cms.validateTheImageOnFE();
    });
  });

  test(`${tags} Import Translations @CMSIMPORTTRANSLATIONS`, async ({
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

    const cms = new CMSImportTranslationsScenarioModel(
      testInfo,
      page,
      data,
      context
    );

    await test.step('CMS Login to CMS as a test User', async () => {
      await cms.loginAsTestUser();
    });

    await test.step('Download Translations', async () => {
      await cms.findContent();
      await cms.downloadTranslations();
    });

    await test.step('Navigate to Add Content and Click Import Translations', async () => {
      await cms.addContent();
      await cms.clickImportTranslations();
    });

    await test.step('Upload File to Import', async () => {
      await cms.chooseFileAndUpload();
    });
  });
}
