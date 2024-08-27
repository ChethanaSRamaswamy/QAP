const ScenarioModel = require('../ScenarioModel');
const PlpPageModel = require('../../pagemodels/product/PlpPageModel');
const PlpPdpScenarioModel = require('./PlpPdpScenarioModel');
const PlpQuickViewScenarioModel = require('./PlpQuickViewScenarioModel');
const Util = require('../../../../utilities/util');

// TODO: Add Logger

class PlpValidateFilterScenarioModel extends ScenarioModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
    this.plp = new PlpPdpScenarioModel(testInfo, page, data);
    this.quickView = new PlpQuickViewScenarioModel(testInfo, page, data);
    this.productCountVal = '';
  }

  selectAndCheckFilterCount = async () => {
    await this.closePopup();
    await this.chooseFiltersAndApply();
  };

  // closing popups on PLPS if any
  closePopup = async () => {
    const popup = new PlpPageModel(this.testInfo, this.page, this.data);
    const popupsElems = [
      this.locatorData.closePopupElem,
      this.locatorData.closeSecPopupElem,
      this.locatorData.closeThirdPopupElem,
    ];
    const iframeElems = this.locatorData.frameClosePopupElem;
    if (iframeElems) {
      await popup.closePopupWithFrames(popupsElems, iframeElems);
    } else {
      await popup.closePopup(popupsElems);
    }
  };

  chooseFiltersAndApply = async () => {
    const chooseFilter = new PlpPageModel(this.testInfo, this.page, this.data);
    let filterOptionSelectors = '';
    let filterButton = '';
    let noProductsElem = '';
    let applyFilterElem = '';
    let valuesToSelect = '';

    if (this.siteData.executionContext.platform === Util.devices.pc) {
      filterButton = this.locatorData.plpFilterButtonElem;
      filterOptionSelectors = this.locatorData.plpFilterTypeElem;
      noProductsElem = this.locatorData.plpNoProductsElem;
      applyFilterElem = this.locatorData.plpApplyFilterElem;
      valuesToSelect = this.locatorData.plpFilterSelectionOneElem;
    } else {
      filterButton = this.locatorData.mobPlpFilterButtonElem;
      filterOptionSelectors = this.locatorData.mobPlpFilterTypeElem;
      noProductsElem = this.locatorData.mobPlpNoProductsElem;
      applyFilterElem = this.locatorData.mobPlpApplyFilterElem;
      valuesToSelect = this.locatorData.mobPlpFilterSelectionOneElem;
    }

    const filterLocatorsElem = {
      productCount: this.locatorData.plpProductCountElem,
      filter: filterButton,
      filterOptions: filterOptionSelectors,
      textValue: valuesToSelect,
      totalNoOfProducts: noProductsElem,
      applyFilter: applyFilterElem,
      resultText: this.testData.plpfilterResultText,
      waitTime: this.testData.waitTimeTwoK,
    };
    if (filterOptionSelectors !== '') {
      this.productCountVal = await chooseFilter.chooseFiltersAndApply(
        filterLocatorsElem
      );
      await this.verifyChosenFiltersCount();
    } else {
      console.log('Filter Scenario is not required for this brand');
    }
  };

  verifyChosenFiltersCount = async () => {
    const verifyCount = new PlpPageModel(this.testInfo, this.page, this.data);
    let totalNoOfProductElem = '';
    if (this.locatorData.plpProductCountElem) {
      await verifyCount.validateFilterCount(
        this.locatorData.plpProductCountElem,
        this.productCountVal
      );
    } else {
      if (this.siteData.executionContext.platform === Util.devices.pc) {
        totalNoOfProductElem = this.locatorData.plpNoProductsElem;
      } else {
        totalNoOfProductElem = this.locatorData.mobPlpNoProductsElem;
      }
      await verifyCount.validatePordCountWithoutFilterCount(
        totalNoOfProductElem,
        this.productCountVal
      );
    }
  };
}

module.exports = PlpValidateFilterScenarioModel;
