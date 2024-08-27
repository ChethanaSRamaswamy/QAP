const PopupPageModel = require('../../pagemodels/common/PopupPageModel');
const ScenarioModel = require('../ScenarioModel');
const config = require('../../configs/automation.setup');
const BasePageModel = require('../../pagemodels/common/BasePageModel');
const QuizPageModel = require('../../pagemodels/quiz/QuizPageModel');

class QuizScenarioModel extends ScenarioModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
    this.quizPageModel = new QuizPageModel(testInfo, page, data);
  }

  /**
   * Verifies user able to navigate to quiz page.
   * @async
   * @method
   * @memberof QuizScenarioModel
   */
  navigateToQuiz = async () => {
    const popupElem = [
      this.locatorData.closePopupElem,
      this.locatorData.closeSecPopupElem,
      this.locatorData.closeThirdPopupElem,
    ];
    await this.initBrowser();
    await this.goto();
    await this.closePopup(popupElem);
    await this.quizPageModel.navigateToQuizPage(
      this.siteData.executionContext.url,
      this.locatorData.quizUrl
    );
  };

  /**
   * Verifies user able to pick the quiz answers.
   * @async
   * @method
   * @memberof QuizScenarioModel
   */
  pickAnswers = async () => {
    await this.quizPageModel.pickAnswers(
      this.locatorData.quizAnswerElem,
      this.locatorData.totalQuestionElem,
      this.locatorData.quizFrameElem
    );
  };

  /**
   * Verifies user able to view the product.
   * @async
   * @method
   * @memberof QuizScenarioModel
   */
  verifyQuizProduct = async () => {
    const productStatus = {
      available: this.locatorData.availableMessage,
      unavailable: this.locatorData.unavailableMessage,
    };
    await this.quizPageModel.verifyQuizProduct(
      this.locatorData.addToBagElem,
      this.locatorData.quizFrameElem,
      this.locatorData.timeoutSetting,
      productStatus
    );
  };
  closePopup = async (popupElem) => {
    await new PopupPageModel(this.testInfo, this.page, this.data).closePopup(
      popupElem
    );
  };
  initBrowser = async () => {
    const base = new BasePageModel(this.testInfo, this.page, config, this.data);
    await base.initBrowser();
  };
  goto = async () => {
    await this.quizPageModel.goto(this.siteData.executionContext.url);
  };
}

module.exports = QuizScenarioModel;
