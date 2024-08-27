const ScenarioModel = require('../ScenarioModel');
const PlpPageModel = require('../../pagemodels/product/PlpPageModel');
const PlpPdpScenarioModel = require('./PlpPdpScenarioModel');
const PlpQuickViewScenarioModel = require('./PlpQuickViewScenarioModel');
const ActionPageModel = require('../../pagemodels/common/ActionPageModel');
// TODO: Add Logger

class PlpProductDetailsCheckScenarioModel extends ScenarioModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);

    this.plp = new PlpPdpScenarioModel(testInfo, page, data);
    this.quickView = new PlpQuickViewScenarioModel(testInfo, page, data);
    this.commonActions = new ActionPageModel(this.testInfo, this.page, this.data);
  }

  validatePlpComponentsOnQV = async () => {
    await this.verifyPlpComponents();
  };

  verifyPlpComponents = async () => {
    const components = new PlpPageModel(this.testInfo, this.page, this.data);
    const qvComponents = [
      this.locatorData.plpProductTitleQVElem,
      this.locatorData.plpProductPriceQVElem,
      this.locatorData.plpProductImgQVElem,
    ];
    const customMessages = [
      this.testData.productTitleQV,
      this.testData.productPriceQV,
      this.testData.productImgQV,
    ];
    await components.hoverProductAndClick(
      this.locatorData.plpGridImageElem,
      this.locatorData.plpQuickViewElem
    );
    await this.commonActions.areElementsAvailable(qvComponents, customMessages);
  };
}

module.exports = PlpProductDetailsCheckScenarioModel;
