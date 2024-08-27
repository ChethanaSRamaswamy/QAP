// npx playwright test --grep "@CAROUSEL"
// @ts-check
const { test } = require('@playwright/test');

const ScriptDataAdapter = require('../../adapters/script_data_adapter.js');
const CarouselScenarioModel = require('../../scenariomodels/carousel/CarouselScenarioModel.js');

const feature = 'CAROUSEL';

const { SCOPE } = process.env;
const records = SCOPE ? JSON.parse(SCOPE) : [];

for (let iCnt = 0; iCnt < records.length; iCnt++) {
  const tags = records[iCnt];
  test(`${tags} AS A USER VERIFY HOME PAGE CAROUSEL IMAGE LOADING OR NOT @CAROUSEL`, async ({
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

    const carousel = new CarouselScenarioModel(testInfo, page, data);

    await test.step('Verify that the user is able to open home page', async () => {
      await carousel.gotoHomePageVaildation();
    });

    await test.step('Verify that the user is able to click home page carousel', async () => {
      await carousel.clickHomePageCarousel();
    });
  });
}
