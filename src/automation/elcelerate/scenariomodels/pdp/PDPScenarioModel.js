const ScenarioModel = require('../ScenarioModel');
const Base = require('../../pagemodels/common/BasePageModel');
const Popup = require('../../pagemodels/common/PopupPageModel');
const Util = require('../../../../utilities/util');
const config = require('../../configs/automation.setup');
const env = require('../../configs/env');

const { expect } = require('@playwright/test');
// TODO: Add logger

class PDPScenarioModel extends ScenarioModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }

  navigateThenVerifyPDP = async () => {
    await this.goto();
    const popups = ["//button[@id='onetrust-reject-all-handler']"];
    await this.closePopup(popups);

    // this.locatorData.vrtAddToBag = '#log-in';
    // this.locatorData.vrtAddToBag = "//div[contains(@id, 'pdp_')]";
    await this.vrt.visualTestSection(this.locatorData.vrtAddToBag);
  };

  goto = async () => {
    // await this.page.goto(this.siteData.executionContext.url);
    await this.page.goto(
      'https://www.darphin.fr/product/intral-inner-youth-s%C3%A9rum-essentiel'
    );

    // await this.page.goto('https://demo.applitools.com/index.html');
    // await this.page.goto('https://demo.applitools.com/index_v2.html');
  };

  closePopup = async (popups) => {
    await new Popup(this.page, this.data).closePopup(popups);
  };
}
module.exports = PDPScenarioModel;
