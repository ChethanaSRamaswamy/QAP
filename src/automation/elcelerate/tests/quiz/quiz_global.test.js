// npx playwright test --grep "@QUIZ"
// @ts-check
const { test } = require('@playwright/test');

const ScriptDataAdapter = require('../../adapters/script_data_adapter.js');
const QuizScenarioModel = require('../../scenariomodels/quiz/QuizScenarioModel.js');

const feature = 'QUIZ';
const { SCOPE } = process.env;
const records = SCOPE ? JSON.parse(SCOPE) : [];

for (let iCnt = 0; iCnt < records.length; iCnt++) {
  const tags = records[iCnt];

  test(`${tags} Validating the Quiz Flow feature @QUIZ`, async ({
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

    const quizFlow = new QuizScenarioModel(testInfo, page, data);
    await test.step('Verify that the user is able to navigate to quiz page', async () => {
      await quizFlow.navigateToQuiz();
    });
    await test.step('Verify that the user is able to pick the quiz answers', async () => {
      await quizFlow.pickAnswers();
    });
    await test.step('Verify that the user is able to view the product', async () => {
      await quizFlow.verifyQuizProduct();
    });
  });
}
