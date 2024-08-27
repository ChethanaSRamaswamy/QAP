const PopupPageModel = require('../../pagemodels/common/PopupPageModel');
const ScenarioModel = require('../ScenarioModel');
const config = require('../../configs/automation.setup');
const BasePageModel = require('../../pagemodels/common/BasePageModel');
const GnavPageModel = require('../../pagemodels/gnav/GnavPageModel');

class GnavScenarioModel extends ScenarioModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
    this.gnavPageModel = new GnavPageModel(testInfo, page, data);
  }

  /**
   * Verifies user able to navigate to quiz page.
   * @async
   * @method
   * @memberof GnavScenarioModel
   */
  navigateToGnavPage = async () => {
    const popupElem = [
      this.locatorData.closePopupElem,
      this.locatorData.closeSecPopupElem,
      this.locatorData.closeThirdPopupElem,
    ];
    await this.initBrowser();
    await this.goto();
    await this.closePopup(popupElem);
    await this.gnavPageModel.navigateToGnavPage(
      this.siteData.executionContext.url,
      this.locatorData.validateGnavUrl
    );
  };

  /**
   * Verifies user able to click the menu.
   * @async
   * @method
   * @memberof GnavScenarioModel
   */
  clickOnMenu = async () => {
    await this.gnavPageModel.clickMenu(this.locatorData.menuElem);
    await this.gnavPageModel.clickSubMenu(
      this.locatorData.gnavShopElem,
      this.locatorData.gnavShopNewElem
    );
    await this.gnavPageModel.gotoMainMenu(
      this.locatorData.gnavShopElem,
      this.locatorData.mainMenuElem
    );
    await this.gnavPageModel.clickSubMenu(
      this.locatorData.gnavGiftElem,
      this.locatorData.gnavGiftCollectionElem
    );
  };

  /**
   * Verifies user able to validate the gnav element.
   * @async
   * @method
   * @memberof QuizScenarioModel
   */
  verifyGnavElement = async () => {
    await this.gnavPageModel.verifyGnavElement(this.locatorData.mainMenuElem);
  };

  closePopup = async (popups) => {
    await new PopupPageModel(this.testInfo, this.page, this.data).closePopup(
      popups
    );
  };
  initBrowser = async () => {
    const base = new BasePageModel(this.testInfo, this.page, config, this.data);
    await base.initBrowser();
  };
  goto = async () => {
    await this.gnavPageModel.goto(this.siteData.executionContext.url);
  };
}

module.exports = GnavScenarioModel;
