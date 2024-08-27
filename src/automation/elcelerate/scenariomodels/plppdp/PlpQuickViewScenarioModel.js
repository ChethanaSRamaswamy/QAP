const Util = require('../../../../utilities/util');
const PlpPageModel = require('../../pagemodels/product/PlpPageModel');
const ScenarioModel = require('../ScenarioModel');
const PlpPdpScenarioModel = require('./PlpPdpScenarioModel');
const ActionPageModel = require('../../pagemodels/common/ActionPageModel');
const ShopPageModel = require('../../pagemodels/product/ShopPageModel');
// TODO: Add Logger

class PlpQuickViewScenarioModel extends ScenarioModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
    this.plp = new PlpPdpScenarioModel(testInfo, page, data);
    this.commonActions = new ActionPageModel(
      this.testInfo,
      this.page,
      this.data
    );
  }

  goToPlpAndValidate = async () => {
    await this.validatePlp();
  };

  clickQVOnPlp = async () => {
    await this.verifyQuickView();
  };

  incrementDecrementQtyPLP = async () => {
    await this.modifyProductQtyPLP(true);
    await this.modifyProductQtyPLP(false);
  };

  validatePlp = async () => {
    const plp = new PlpPageModel(this.testInfo, this.page, this.data);
    await plp.goToAPlp(this.locatorData.plpUrlElem);
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await plp.plpGridValidation(this.locatorData.plpGridElem);
    } else {
      await plp.plpGridValidation(this.locatorData.mobPlpGridElem);
    }
  };

  verifyQuickView = async () => {
    const quickView = new PlpPageModel(this.testInfo, this.page, this.data);
    const qvwindowdata = [this.testData.plpQuickViewWindow];
    const qvwindow = [this.locatorData.plpQuickViewWindowElem];
    const mobQvwindow = [this.locatorData.mobPlpQuickViewWindowElem];
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await quickView.hoverProductAndClick(
        this.locatorData.plpGridImageElem,
        this.locatorData.plpQuickViewElem
      );
      await this.commonActions.areElementsAvailable(qvwindow, qvwindowdata);
      await this.commonActions.isElementAvailableAndClick([
        this.locatorData.plpQuickViewWindowCloseElem,
      ]);
    } else {
      await quickView.hoverProductAndClick(
        this.locatorData.plpGridImageElem,
        this.locatorData.mobPlpQuickViewElem
      );
      await this.commonActions.areElementsAvailable(mobQvwindow, qvwindowdata);
      await this.commonActions.isElementAvailableAndClick([
        this.locatorData.mobPlpQuickViewWindowCloseElem,
      ]);
    }
  };

  modifyProductQtyPLP = async (isIncrement) => {
    let counterElem, customMessage;

    if (isIncrement) {
      counterElem = this.locatorData.increaseQtyBtnMpp;
      customMessage = 'IncrementBtn';
    } else {
      counterElem = this.locatorData.decreaseQtyBtnMpp;
      customMessage = 'DecrementBtn';
    }

    if (counterElem) {
      const pdpShop = new ShopPageModel(this.testInfo, this.page, this.data);
      if (this.siteData.executionContext.platform === Util.devices.pc) {
        await pdpShop.changeQuantityCounter(
          counterElem,
          this.testData.qtyVal,
          customMessage
        );
      }
    } else {
      console.log(
        `${isIncrement ? 'Increase' : 'Decrease'} Quantity Button is not available for the given site`
      );
    }
  };
}

module.exports = PlpQuickViewScenarioModel;
