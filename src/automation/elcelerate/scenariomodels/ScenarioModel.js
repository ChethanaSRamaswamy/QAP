const VisualRegressionTesting = require('../helpers/visual_regression_testing');
const Helper = require('../helpers/helper.js');

class ScenarioModel {
  constructor(testInfo, page, data) {
    this.testInfo = testInfo;
    this.page = page;
    this.data = data;
    this.locatorData = data.locatorData;
    this.testData = data.testData;
    this.siteData = data.siteData;
    this.vrt = new VisualRegressionTesting(page, data);
  }

  wait = async (ms) => {
    await Helper.wait(ms);
  };
  screenshot = async () => {
    const callerClass = this.constructor.name.replace(/Model$/, '');
    await Helper.takeScreenshot(callerClass, this.page, this.testInfo);
  };
}

module.exports = ScenarioModel;
