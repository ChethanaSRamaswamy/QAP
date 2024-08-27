const PageModel = require('../PageModel');
class QuizPageModel extends PageModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }

  /**
   * Navigate to the Homepage url.
   * @param {string} url - homepage url.
   * @returns {Promise<void>}
   * @memberof QuizPageModel
   */
  goto = async (url) => {
    await this.page.goto(url);
  };

  /**
   * Navigate to the Quiz flow page.
   * @param {string} url - page url.
   * @param {string} quizUrl - quiz page url.
   * @returns {Promise<void>}
   * @memberof QuizPageModel
   */
  navigateToQuizPage = async (url, quizUrl) => {
    if (quizUrl) {
      await this.page.goto(url + quizUrl);
      await this.screenshot();
    }
  };

  /**
   * Select the quiz answers.
   * @param {string} quizAnswerElem - Locator for the answer CTA element.
   * @param {string} totalQuestionElem - Total count of the quiz questions.
   * @param {string} quizFrameElem - Locator for the quiz page iframe element.
   * @returns {Promise<void>}
   * @memberof QuizPageModel
   */
  pickAnswers = async (quizAnswerElem, totalQuestionElem, quizFrameElem) => {
    if (quizAnswerElem) {
      for (let q = 1; q <= totalQuestionElem; q++) {
        const answer = quizAnswerElem.replace('index', q);
        await this.page.frameLocator(quizFrameElem).locator(answer).click();
        await this.screenshot();
      }
    }
  };

  /**
   * Select the quiz answers.
   * @param {string} addToBagElem - Locator for the add to bag CTA element.
   * @param {string} quizFrameElem - Locator for the quiz page iframe element.
   * @param {string} timeoutSetting - Timeout for the after pick the answer to be page wait.
   * @param {string} productStatus - Messages for the product available and unavailable.
   * @returns {Promise<void>}
   * @memberof QuizPageModel
   */
  verifyQuizProduct = async (
    addToBagElem,
    quizFrameElem,
    timeoutSetting,
    productStatus
  ) => {
    if (addToBagElem) {
      await this.page.waitForTimeout(parseInt(timeoutSetting));
      const isVisible = await this.page
        .frameLocator(quizFrameElem)
        .locator(addToBagElem)
        .isVisible();
      if (isVisible) {
        console.log(productStatus.available);
      } else {
        console.log(productStatus.unavailable);
      }
      await this.screenshot();
    } else {
      console.log(productStatus.unavailableMessage);
    }
  };
}

module.exports = QuizPageModel;
