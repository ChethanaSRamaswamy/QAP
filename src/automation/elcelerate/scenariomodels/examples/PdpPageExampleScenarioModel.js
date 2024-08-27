const config = require('../../configs/automation.setup');
const ScenarioModel = require('../ScenarioModel');
const BasePageModel = require('../../pagemodels/common/BasePageModel');
const HomePageModel = require('../../pagemodels/home/HomePageModel');
const PopupPageModel = require('../../pagemodels/common/PopupPageModel');
const GnavHeaderPageModel = require('../../pagemodels/header/GnavHeaderPageModel');
const PdpPageModel = require('../../pagemodels/product/PdpPageModel');
const PlpPageModel = require('../../pagemodels/product/PlpPageModel');

/**
 * Represents a Scenario Model for the PDP (Product Detail Page) example.
 *
 * The PdpPageExampleScenarioModel class is responsible for defining and orchestrating
 * the actions and validations related to the PDP of the application. It extends
 * the ScenarioModel class and provides methods for initializing the browser, navigating
 * to the home page, closing any pop-up windows, shopping from the store,
 * navigating to the PLP (Product Listing Page), and validating the PDP page.
 *
 * @class PdpPageExampleScenarioModel
 * @extends ScenarioModel
 */
class PdpPageExampleScenarioModel extends ScenarioModel {
  /**
   * Creates an instance of PdpPageExampleScenarioModel.
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
   * @memberof PdpPageExampleScenarioModel
   * @returns {Promise<void>} A Promise that resolves when the home page validation is complete.
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
   *
   * @memberof PdpPageExampleScenarioModel
   * @returns {Promise<void>} A Promise that resolves when the browser is initialized.
   */
  initBrowser = async () => {
    const base = new BasePageModel(this.testInfo, this.page, config, this.data);
    await base.initBrowser();
  };

  /**
   * This function creates a new instance of the HomePageModel and
   * Navigates to the home page using a HomePageModel instance.
   *
   * @memberof PdpPageExampleScenarioModel
   * @returns {Promise<void>} A Promise that resolves when navigation to the home page is complete.
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
   * @memberof PdpPageExampleScenarioModel
   * @returns {Promise<void>} A Promise that resolves when the pop-up windows are closed.
   */
  closePopup = async (popups) => {
    await new PopupPageModel(this.testInfo, this.page, this.data).closePopup(
      popups
    );
  };

  /**
   * This function creates a new instance of the GnavHeaderPageModel and
   * Navigates to the "PDP" page of the website.
   * This is typically equivalent to shopping from the store.
   *
   * @memberof PdpPageExampleScenarioModel
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
   * This function creates a new instance of the PlpPageModel and verifies the
   *  PLP  (Product Listing Page) page's loading and performs an action on it.
   *
   * @memberof PdpPageExampleScenarioModel
   * @returns {Promise<void>} A Promise that resolves when the PLP validation is complete.
   */
  validatePlpPage = async () => {
    const plp = new PlpPageModel(this.testInfo, this.page, this.data);
    // Implementation to check if the PLP is loaded.
    await plp.isLoaded(this.locatorData.plpPageExamplePlpLandElem);
    // This function navigates to pdp page for the selected product.
    await plp.moveToPdp(this.locatorData.plpPageExamplePdpElem);
  };

  /**
   * This function creates a new instance of the PdpPageModel and
   * Validates the Product Detail Page (PDP) by checking if it is loaded.
   *
   * @memberof PdpPageExampleScenarioModel
   * @returns {Promise<void>} A Promise that resolves when the PDP validation is complete.
   */
  validatePdpPage = async () => {
    const pdp = new PdpPageModel(this.testInfo, this.page, this.data);
    // Implementation to check if the PDP is loaded.
    await pdp.isLoaded(this.locatorData.pdpPageExamplePdpLandElem);
  };
}

module.exports = PdpPageExampleScenarioModel;
