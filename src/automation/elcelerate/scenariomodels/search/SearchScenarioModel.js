const PopupPageModel = require('../../pagemodels/common/PopupPageModel');
const ScenarioModel = require('../ScenarioModel');
const config = require('../../configs/automation.setup');
const BasePageModel = require('../../pagemodels/common/BasePageModel');
const SearchPageModel = require('../../pagemodels/search/SearchPageModel');
const SigninPageModel = require('../../pagemodels/signin/SigninPageModel');
const Util = require('../../../../utilities/util');

// TODO:
// Add Logger

/**
 * Represents a scenario model for automating search and interaction with products on a website.
 * Extends the base ScenarioModel class to encapsulate various methods for navigating to the site,
 * performing searches, verifying search results, adding products to the cart, and managing Beauty Perks account-related actions.
 *
 * @class SearchScenarioModel
 * @extends ScenarioModel
 */
class SearchScenarioModel extends ScenarioModel {
  /**
   * Creates an instance of SearchScenarioModel.
   * @param {Object} testInfo - Information related to the test.
   * @param {Object} page - The page object for interacting with the browser.
   * @param {Object} data - Additional data needed for the scenario.
   */
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
    // Create instances of page models
    this.ecommShop = new SearchPageModel(testInfo, page, data);
    this.returnUser = new SigninPageModel(testInfo, page, data);
    // Array of popups to close before initiating the search
    this.popups = [
      this.locatorData.closePopupElem,
      this.locatorData.closeSecPopupElem,
      this.locatorData.closeThirdPopupElem,
    ];
    // Message to display when a step is not applicable
    this.messages = 'This step is not applicable for this Brand/Locale';
  }

  /**
   * Navigates to the website by initializing the browser and navigating to the specified URL.
   * @async
   */
  navigateToSite = async () => {
    await this.initBrowser();
    await this.goto();
    await this.framePopUp();
  };

  /**
   * Signs in to the Beauty Perks account.
   * @async
   */
  beautyPerksSignin = async () => {
    await this.signinToBeautyPerksAccount();
  };

  /**
   * Initiates the search process by closing popups and filling in the search text.
   * @async
   */
  searchProduct = async () => {
    await this.closePopup(this.popups);
    await this.initSearch();
    await this.fillSearchText();
  };

  /**
   * Verifies search results by checking for suggestions, predictive results, and clicking the search button.
   * @async
   */
  verifySearchResults = async () => {
    await this.hasSuggestions();
    await this.hasPredictiveResults();
    await this.clickSearch();
  };

  /**
   * Adds a product to the cart from the search results.
   * @async
   */
  addProductFromSearchResults = async () => {
    // Array of popups to close before adding a product
    const popups = [this.locatorData.randomPopupCloseElem];
    await this.closePopup(popups);
    await this.pickAProductFromResults();
    await this.addProductToCart();
    await this.beautyPerksDelistProduct();
  };

  initBrowser = async () => {
    const base = new BasePageModel(this.testInfo, this.page, config, this.data);
    await base.initBrowser();
  };

  goto = async () => {
    await this.page.goto(this.siteData.executionContext.url);
  };

  closePopup = async (popups) => {
    await new PopupPageModel(this.testInfo, this.page, this.data).closePopup(
      popups
    );
  };

  initSearch = async () => {
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await this.ecommShop.triggerSearch(
        this.locatorData.gnavHeaderHoverSearchElem,
        this.locatorData.gnavHeaderSearchElem,
        this.locatorData.gnavHeaderOverlayInputElem,
        this.locatorData.waitTime
      );
    } else {
      await this.ecommShop.triggerSearch(
        this.locatorData.gnavHeaderHoverSearchElem,
        this.locatorData.mobGnavHeaderSearchElem,
        this.locatorData.mobGnavHeaderOverlayInputElem,
        this.locatorData.mobHamburgerElem,
        this.locatorData.waitTime
      );
    }
  };

  fillSearchText = async () => {
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await this.ecommShop.provideSearchInput(
        this.locatorData.gnavHeaderOverlayInputElem,
        this.testData.searchKeyword,
        this.popups
      );
    } else {
      await this.ecommShop.provideSearchInput(
        this.locatorData.mobGnavHeaderOverlayInputElem,
        this.testData.searchKeyword,
        this.popups
      );
    }
  };

  hasSuggestions = async () => {
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await this.ecommShop.searchResultMessage(
        this.locatorData.searchGridMessageOverlayElem
      );
    } else {
      await this.ecommShop.searchResultMessage(
        this.locatorData.mobSearchGridMessageOverlayElem
      );
    }
  };

  hasPredictiveResults = async () => {
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await this.ecommShop.showsSearchPredictions(
        this.locatorData.searchGridPredictiveItemElem
      );
    } else {
      await this.ecommShop.showsSearchPredictions(
        this.locatorData.mobSearchGridPredictiveItemElem
      );
    }
  };

  clickSearch = async () => {
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await this.ecommShop.hitSearch(
        this.locatorData.searchGridResultLinkElem,
        this.locatorData.searchGridItemUnavailableElem,
        this.locatorData.gnavHeaderOverlayInputElem
      );
    } else {
      await this.ecommShop.hitSearch(
        this.locatorData.mobSearchGridResultLinkElem,
        this.locatorData.mobSearchGridItemUnavailableElem,
        this.locatorData.mobGnavHeaderOverlayInputElem
      );
    }
  };

  pickAProductFromResults = async () => {
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await this.ecommShop.chooseProduct(
        this.locatorData.plpFirstProductElem,
        this.locatorData.plpQuickShopElem,
        this.locatorData.plpAddToBagElem,
        this.locatorData.plpPdpProductElem
      );
    } else {
      await this.ecommShop.chooseProduct(
        this.locatorData.mobPlpFirstProductElem,
        this.locatorData.mobPlpQuickShopElem,
        this.locatorData.mobPlpAddToBagElem,
        this.locatorData.mobPlpPdpProductElem
      );
    }
  };

  addProductToCart = async () => {
    const {
      pdpJavaAlertPopupElem,
      pdpAddToBagElem,
      gnavHeaderBagProductElem,
      gnavHeaderCartElem,
      pdpNotifyMeElem,
      mobPdpJavaAlertPopupElem,
      mobPdpAddToBagElem,
      mobGnavHeaderBagProductElem,
      mobGnavHeaderCartElem,
      mobPdpNotifyMeElem,
    } = this.locatorData;
    const ensureProductInCart = {
      javaAlertPopupElem:
        this.siteData.executionContext.platform === Util.devices.pc
          ? pdpJavaAlertPopupElem
          : mobPdpJavaAlertPopupElem,
      addToBagElem:
        this.siteData.executionContext.platform === Util.devices.pc
          ? pdpAddToBagElem
          : mobPdpAddToBagElem,
      bagProductElem:
        this.siteData.executionContext.platform === Util.devices.pc
          ? gnavHeaderBagProductElem
          : mobGnavHeaderBagProductElem,
      cartElem:
        this.siteData.executionContext.platform === Util.devices.pc
          ? gnavHeaderCartElem
          : mobGnavHeaderCartElem,
      notifyMeElem:
        this.siteData.executionContext.platform === Util.devices.pc
          ? pdpNotifyMeElem
          : mobPdpNotifyMeElem,
      handlePopups: this.popups,
    };
    await this.ecommShop.addProductAndValidateCart(ensureProductInCart);
  };

  /**
   * Signs in to the Beauty Perks account.
   * @async
   */
  signinToBeautyPerksAccount = async () => {
    // Destructure locator data for easier access
    const ruIds = [this.testData.bpReturnUserEmailId];
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      if (this.locatorData.accountElcEmployeeElem) {
        await this.returnUser.signInReturnUser(
          this.locatorData.accountElcEmployeeElem,
          this.locatorData.accountEmailElem,
          this.locatorData.accountPasswordElem,
          this.locatorData.accountSigninElem,
          ruIds,
          this.testData.bpReturnUserPassword
        );
      } else {
        console.log(this.messages);
      }
    } else {
      if (this.locatorData.mobAccountElcEmployeeElem) {
        await this.returnUser.signInReturnUser(
          this.locatorData.mobAccountElcEmployeeElem,
          this.locatorData.mobAccountEmailElem,
          this.locatorData.mobAccountPasswordElem,
          this.locatorData.mobAccountSigninElem,
          ruIds,
          this.testData.bpReturnUserPassword
        );
      } else {
        console.log(this.messages);
      }
    }
  };

  /**
   * Removes the product from the cart as part of the Beauty Perks delisting process.
   * @async
   */
  beautyPerksDelistProduct = async () => {
    // Check platform and call the appropriate method to remove the product
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await this.ecommShop.removeProduct(
        this.locatorData.cartRemoveProductElem
      );
    } else {
      await this.ecommShop.removeProduct(
        this.locatorData.mobCartRemoveProductElem
      );
    }
  };

  framePopUp = async () => {
    if (this.siteData.executionContext.isPC) {
      await this.ecommShop.handleFrames(
        this.locatorData.frameCloseElem,
        this.locatorData.iFrameElem,
        this.locatorData.frameWaitElem
      );
    } else {
      await this.ecommShop.handleFrames(
        this.locatorData.mobFrameCloseElem,
        this.locatorData.mobIFrameElem,
        this.locatorData.frameWaitElem
      );
    }
  };
}

module.exports = SearchScenarioModel;
