const config = require('../../configs/automation.setup');
const ScenarioModel = require('../ScenarioModel');
const BasePageModel = require('../../pagemodels/common/BasePageModel');

class BuildVerificationScenarioModel extends ScenarioModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }

  gotoHomePage = async () => {
    await this.initBrowser();
    await this.goto();
  };

  initBrowser = async () => {
    const base = new BasePageModel(this.testInfo, this.page, config, this.data);
    await base.initBrowser();
  };
  goto = async () => {
    await this.page.goto(
      this.siteData.executionContext.url +
        this.siteData.executionContext.tenantQS
    );
    await this.screenshot();
  };
}

module.exports = BuildVerificationScenarioModel;
