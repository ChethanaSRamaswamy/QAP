const PopupPageModel = require('../../pagemodels/common/PopupPageModel');
const ScenarioModel = require('../ScenarioModel');
const config = require('../../configs/automation.setup');
const BasePageModel = require('../../pagemodels/common/BasePageModel');
const HomePageModel = require('../../pagemodels/home/HomePageModel');
const CarouselPageModel = require('../../pagemodels/carousel/CarouselPageModel');

class CarouselScenarioModel extends ScenarioModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }

  gotoHomePageVaildation = async () => {
    const popups = [
      this.locatorData.cookieRejectElem,
      this.locatorData.closePopUpElem,
    ];
    await this.initBrowser();
    await this.goto();
    await this.closePopup(popups);
    await this.closePopup(popups);
  };

  initBrowser = async () => {
    const base = new BasePageModel(this.testInfo, this.page, config, this.data);
    await base.initBrowser();
  };

  goto = async () => {
    const home = new HomePageModel(this.testInfo, this.page, this.data);
    await home.isLoaded();
  };

  closePopup = async (popups) => {
    await new PopupPageModel(this.testInfo, this.page, this.data).closePopup(
      popups
    );
  };

  /**
   * Verifies the carousel image visiblity to the Homepage url Carousel.
   * @async
   * @method
   * @memberof CarouselScenarioModel
   */
  clickHomePageCarousel = async () => {
    const carouselLocators = [
      this.locatorData.carouselPrevArrowElem,
      this.locatorData.carouselNextArrowElem,
    ];
    const carousel = new CarouselPageModel(this.testInfo, this.page, this.data);
    await carousel.clickHomePageCarousel(
      carouselLocators,
      this.locatorData.carouselProductLocatorElem,
      this.locatorData.waitTime
    );
  };
}

module.exports = CarouselScenarioModel;
