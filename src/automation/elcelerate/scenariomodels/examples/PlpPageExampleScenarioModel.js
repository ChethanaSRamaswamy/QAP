const config = require('../../configs/automation.setup');
const ScenarioModel = require('../ScenarioModel');
const BasePageModel = require('../../pagemodels/common/BasePageModel');
const HomePageModel = require('../../pagemodels/home/HomePageModel');
const PopupPageModel = require('../../pagemodels/common/PopupPageModel');
const GnavHeaderPageModel = require('../../pagemodels/header/GnavHeaderPageModel');
const PlpPageModel = require('../../pagemodels/product/PlpPageModel');

/**
 * Represents a Scenario Model for the PLP (Product Listing Page) example.
 *
 * The PlpPageExampleScenarioModel class is responsible for defining and orchestrating
 * the actions and validations related to the PLP of the application. It extends
 * the ScenarioModel class and provides methods for initializing the browser, navigating
 * to the home page, closing any pop-up windows, shopping from the store, and
 * validating the PLP page.
 *
 * @class PlpPageExampleScenarioModel
 * @extends ScenarioModel
 */
class PlpPageExampleScenarioModel extends ScenarioModel {
  /**
   * Creates an instance of PlpPageExampleScenarioModel.
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
   *
   * @memberof PlpPageExampleScenarioModel
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
   * This function creates a new instance of the GnavHeaderPageModel and
   * Initiates shopping from the store by visiting the product collection page.
   *
   * @memberof PlpPageExampleScenarioModel
   * @returns {Promise<void>} A Promise that resolves when navigation to the "Our Products" section is complete.
   */
  shopFromStore = async () => {
    const productCollection = new GnavHeaderPageModel(
      this.testInfo,
      this.page,
      this.data
    );

    await productCollection.visitOurGoods(
      this.locatorData.gnavHeaderExampleNavElem,
      this.locatorData.gnavHeaderExampleHamburgerElem
    );
  };

  /**
   * This function creates a new instance of the PlpPageModel and
   * Validates the PLP (Product Listing Page) by checking if it is loaded.
   *
   * @memberof PlpPageExampleScenarioModel
   *  @returns {Promise<void>} A Promise that resolves when navigation to the "Our Products" section is complete.
   */
  validatePlpPage = async () => {
    const plp = new PlpPageModel(this.testInfo, this.page, this.data);
    // This function verifies that the plp page is fully loaded.
    await plp.isLoaded(this.locatorData.plpPageExamplePlpGridElem);
  };

  /**
   * Initializes the browser by creating a BasePageModel instance.
   *
   * @memberof PlpPageExampleScenarioModel
   * @returns {Promise<void>} A Promise that resolves when navigation to the "Our Products" section is complete.
   */
  initBrowser = async () => {
    const base = new BasePageModel(this.testInfo, this.page, config, this.data);
    await base.initBrowser();
  };

  /**
   * This function creates a new instance of the HomePageModel and
   * Navigates to the home page using a HomePageModel instance.
   *
   * @memberof PlpPageExampleScenarioModel
   * @returns {Promise<void>} A Promise that resolves when navigation to the "Our Products" section is complete.
   */
  goto = async () => {
    const home = new HomePageModel(this.testInfo, this.page, this.data);
    await home.isLoaded(); // This function verifies that the home page is fully loaded.
  };

  /**
   * This function creates a new instance of the PopupPageModel and
   * Closes pop-up windows using a PopupPageModel instance.
   *
   * @param {Array} popups - An array of locator elements for pop-up windows to close.
   * @memberof PlpPageExampleScenarioModel
   * @returns {Promise<void>} A Promise that resolves when navigation to the "Our Products" section is complete.
   */
  closePopup = async (popups) => {
    await new PopupPageModel(this.testInfo, this.page, this.data).closePopup(
      popups
    );
  };
}

module.exports = PlpPageExampleScenarioModel;
