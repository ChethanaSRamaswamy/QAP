const config = require('../../configs/automation.setup');
const ScenarioModel = require('../ScenarioModel');
const BasePageModel = require('../../pagemodels/common/BasePageModel');
const HomePageModel = require('../../pagemodels/home/HomePageModel');
const PopupPageModel = require('../../pagemodels/common/PopupPageModel');

/**
 * Represents a Scenario Model for the HomePage example.
 *
 * The HomePageExampleScenarioModel class is responsible for defining and orchestrating
 * the actions and validations related to the home page of the application. It
 * extends the ScenarioModel class and provides methods for initializing the browser,
 * navigating to the home page, and closing any pop-up windows.
 * In this - We create only Scenario Model & not creating any new PageModel instead using
 *  existing HomePageModel.
 *
 * @class HomePageExampleScenarioModel
 * @extends ScenarioModel
 */
class HomePageExampleScenarioModel extends ScenarioModel {
  /**
   * Creates an instance of HomePageExampleScenarioModel.
   *
   * @param {Object} testInfo - Information about the test.
   * @param {Page} page - The Playwright page object.
   * @param {Object} data - Data (locatorData, testData, siteData) for the scenario.
   */
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }

  /**
   * Validates the home page by performing actions such as initializing the browser,
   * navigating to the home page, and closing any relevant pop-up windows.
   * @async
   * @method
   * @memberof HomePageExampleScenarioModel
   */
  validateHomePage = async () => {
    // List of popups to close
    const popups = [
      this.locatorData.homepageExampleCookieElem,
      this.locatorData.commonExampleclosePopUpElem,
    ];

    // Initialize the browser
    await this.initBrowser();

    // Navigate to the home page
    await this.goto();

    // Close any pop-up windows
    await this.closePopup(popups);
  };

  /**
   * Initializes the browser by creating a BasePageModel instance.
   * @async
   * @method
   * @memberof HomePageExampleScenarioModel
   */
  initBrowser = async () => {
    const base = new BasePageModel(this.testInfo, this.page, config, this.data);
    await base.initBrowser();
  };

  /**
   * This function creates a new instance of the HomePageModel and
   * Navigates to the home page using the existing HomePageModel instance.
   * @async
   * @method
   * @memberof HomePageExampleScenarioModel
   */
  goto = async () => {
    const home = new HomePageModel(this.testInfo, this.page, this.data);
    await home.isLoaded(); // This function verifies that the home page is fully loaded.
  };

  /**
   * This function creates a new instance of the PopupPageModel and
   * Closes pop-up windows using a PopupPageModel instance.
   * @async
   * @method
   * @param {Array} popups - An array of locator elements for pop-up windows to close.
   * @memberof HomePageExampleScenarioModel
   */
  closePopup = async (popups) => {
    await new PopupPageModel(this.testInfo, this.page, this.data).closePopup(
      popups
    );
  };
}

module.exports = HomePageExampleScenarioModel;
