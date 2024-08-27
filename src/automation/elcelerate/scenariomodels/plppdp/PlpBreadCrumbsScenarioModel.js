const ScenarioModel = require('../ScenarioModel');
const Util = require('../../../../utilities/util');
const PlpPageModel = require('../../pagemodels/product/PlpPageModel');
const PlpPdpScenarioModel = require('./PlpPdpScenarioModel');
const PlpQuickViewScenarioModel = require('./PlpQuickViewScenarioModel');
// TODO: Add Logger

class PlpBreadCrumbsScenarioModel extends ScenarioModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);

    this.plp = new PlpPdpScenarioModel(testInfo, page, data);
    this.quickView = new PlpQuickViewScenarioModel(testInfo, page, data);
  }

  clickBreadcrumbsAndValidateInHomePage = async () => {
    const breadCrumbs = new PlpPageModel(this.testInfo, this.page, this.data);
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await breadCrumbs.clickBreadCrumbsAndValidatePage(
        this.locatorData.plpBreadCrumbElem,
        this.testData.breadCrumbHome
      );
    } else {
      await breadCrumbs.clickBreadCrumbsAndValidatePage(
        this.locatorData.mobPlpBreadCrumbElem,
        this.testData.breadCrumbHome
      );
    }
  };
}

module.exports = PlpBreadCrumbsScenarioModel;
