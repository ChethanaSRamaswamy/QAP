const ScenarioModel = require('../ScenarioModel');
const PlpPageModel = require('../../pagemodels/product/PlpPageModel');
const PlpPdpScenarioModel = require('./PlpPdpScenarioModel');
const PlpQuickViewScenarioModel = require('./PlpQuickViewScenarioModel');

// TODO: Add Logger

class PlpValidateShadeImgScenarioModel extends ScenarioModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);

    this.plp = new PlpPdpScenarioModel(testInfo, page, data);
    this.quickView = new PlpQuickViewScenarioModel(testInfo, page, data);
  }

  validateShadeImgOnQV = async () => {
    await this.verifyShadeImg();
  };

  verifyShadeImg = async () => {
    const components = new PlpPageModel(this.testInfo, this.page, this.data);
    await components.hoverProductAndClick(
      this.locatorData.plpGridImageElem,
      this.locatorData.plpQuickViewElem
    );
    await components.verifyProductImageChangeForSelectedShade(
      this.locatorData.plpShadeDropdownValuesQVElem,
      this.locatorData.plpImgAttributeQVElem,
      this.locatorData.plpDropdownQVElem
    );
  };
}

module.exports = PlpValidateShadeImgScenarioModel;
