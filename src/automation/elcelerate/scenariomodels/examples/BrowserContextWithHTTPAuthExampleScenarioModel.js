const config = require('../../configs/automation.setup');
const ScenarioModel = require('../ScenarioModel');
const BasePageModel = require('../../pagemodels/common/BasePageModel');

class BrowserContextWithHTTPAuthExampleScenarioModel extends ScenarioModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
    this.base = new BasePageModel(this.testInfo, this.page, config, this.data);
  }

  gotoHomePage = async () => {
    await this.initBrowser();
    await this.goto();
  };

  initBrowser = async () => {
    await this.base.initBrowser();
  };
  goto = async () => {
    // INFO: We should use url without credentials embedded in it
    await this.base.goto(
      this.siteData.executionContext.urlWithTenantAndNoCredential
    );

    await this.screenshot();

    // await this.page.pause();
  };
}

module.exports = BrowserContextWithHTTPAuthExampleScenarioModel;
