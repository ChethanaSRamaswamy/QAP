// npx playwright test --grep "@PLPQUICKVIEW"
// @ts-check
const { test } = require('@playwright/test');

const ScriptDataAdapter = require('../../adapters/script_data_adapter.js');
const PlpQuickViewScenarioModel = require('../../scenariomodels/plppdp/PlpQuickViewScenarioModel.js');
const PlpProductDetailsCheckScenarioModel = require('../../scenariomodels/plppdp/PlpProductDetailsCheckScenarioModel.js');
const PlpBreadCrumbsScenarioModel = require('../../scenariomodels/plppdp/PlpBreadCrumbsScenarioModel.js');
const PlpValidateShadeImgScenarioModel = require('../../scenariomodels/plppdp/PlpValidateShadeImgScenarioModel.js');
const PlpValidateFilterScenarioModel = require('../../scenariomodels/plppdp/PlpValidateFilterScenarioModel.js');
const PlpValidateShadedProductScenarioModel = require('../../scenariomodels/plppdp/PlpValidateShadedProductScenarioModel.js');

const feature = 'MPPSPP';

const { SCOPE } = process.env;
const records = SCOPE ? JSON.parse(SCOPE) : [];

records.forEach((/** @type {string} */ tags) => {
  test(`${tags} Move the mouse over the product card and check if the Quick View option appears, then open it @PLPQUICKVIEW`, async ({
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

    const quickView = new PlpQuickViewScenarioModel(testInfo, page, data);

    await test.step('Verify on the homepage and then navigate to any PLP', async () => {
      await quickView.plp.validateInHomePage();
      await quickView.goToPlpAndValidate();
    });

    await test.step('Verify the Quick View for any product on the PLP', async () => {
      await quickView.clickQVOnPlp();
    });
  });

  test(`${tags} Checking breadcrumb navigation to the home page @PLPBREADCRUMBS`, async ({
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

    const breadCrumbs = new PlpBreadCrumbsScenarioModel(testInfo, page, data);

    await test.step('Verify on the homepage and then navigate to any PLP', async () => {
      await breadCrumbs.plp.validateInHomePage();
      await breadCrumbs.quickView.goToPlpAndValidate();
    });

    await test.step('Verifying successful navigation to the homepage using breadcrumbs from the PLP', async () => {
      await breadCrumbs.clickBreadcrumbsAndValidateInHomePage();
    });
  });

  test(`${tags} Check a random product card and its components, such as price, title, and images @PLPCOMPONENTSCHECK`, async ({
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

    const componentsCheck = new PlpProductDetailsCheckScenarioModel(
      testInfo,
      page,
      data
    );

    await test.step('Verify on the homepage and then navigate to any PLP', async () => {
      await componentsCheck.plp.validateInHomePage();
      await componentsCheck.quickView.goToPlpAndValidate();
    });

    await test.step('Click on Quick View and validate the components: price, title, and image', async () => {
      await componentsCheck.validatePlpComponentsOnQV();
    });

    await test.step('Verify that if the user is able to increment or decrement the product counter in PLP', async () => {
      await componentsCheck.quickView.incrementDecrementQtyPLP();
    });
  });

  test(`${tags} Select a shade and see the product image responding to change @PLPVALIDATESHADEIMG`, async ({
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

    const shadeImg = new PlpValidateShadeImgScenarioModel(testInfo, page, data);

    await test.step('Verify on the homepage and then navigate to any PLP', async () => {
      await shadeImg.plp.validateInHomePage();
      await shadeImg.quickView.goToPlpAndValidate();
    });

    await test.step('Select a shade and see the product image responding to change', async () => {
      await shadeImg.validateShadeImgOnQV();
    });
  });

  test(`${tags} Checking filters, applying a filter, and observing changes in the number of products @PLPVALIDATEFILTER`, async ({
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

    const filterCheck = new PlpValidateFilterScenarioModel(
      testInfo,
      page,
      data
    );

    await test.step('Verify on the homepage and then navigate to any PLP', async () => {
      await filterCheck.plp.validateInHomePage();
      await filterCheck.quickView.goToPlpAndValidate();
    });

    await test.step('Apply the filters and confirm the subsequent changes in the product quantity', async () => {
      await filterCheck.selectAndCheckFilterCount();
    });
  });

  test(`${tags} Add shaded product to the cart from PLP @PLPVALIDATESHADEDPRODUCT`, async ({
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

    const shaded = new PlpValidateShadedProductScenarioModel(
      testInfo,
      page,
      data
    );

    await test.step('Verify on the homepage and then navigate to shaded PLP', async () => {
      await shaded.plp.validateInHomePage();
      await shaded.goToShadedPlp();
    });

    await test.step('Verify that the user is able to add a shaded product to the cart successfully from PLP', async () => {
      await shaded.addShadedProductsAndValidate();
    });

    await test.step('Verify that the user is able to view the added shaded product in the Cart', async () => {
      await shaded.isQuickViewClosed();
      await shaded.clickBagAndMoveToCart();
      await shaded.validateCartShadedProduct();
    });
  });
});
