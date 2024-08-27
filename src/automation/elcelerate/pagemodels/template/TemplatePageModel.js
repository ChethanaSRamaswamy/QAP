// TODO: Remove all HINT:, TODO: and INSTRUCTION: after copying the template
// INSTRUCTION:
// 1. Any text/value/variable that starts with template is a placeholder
// 2. Any text between {{}} and [[]] are placeholders
// 3. Replace the placeholder with right text/value

const PageModel = require('../PageModel.js');

class TemplatePageModel extends PageModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }

  // Function that navigates to page
  goto = async (url) => {
    await this.page.goto(url);
  };

  // TODO: Replace this with an appropriate method description
  async exampleMethod() {
    // TODO: Implement your logic here
    // HINT: You can access different types of data as in ScenarioModel
    // Locator Data - this.locatorData.addToBag
    // Test Data - this.testData.addToBag
    // Site Data - this.siteData.prodUrl
    // Execution Context - this.siteData.executionContext.env
  }
}

// TODO: Don't forget to export your page object model
module.exports = TemplatePageModel;
