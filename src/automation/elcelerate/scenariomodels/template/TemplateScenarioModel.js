// TODO: Remove all HINT:, TODO: and INSTRUCTION: after copying the template
// INSTRUCTION:
// 1. Any text/value/variable that starts with template is a placeholder
// 2. Any text between {{}} and [[]] are placeholders
// 3. Replace the placeholder with right text/value

const ScenarioModel = require('../ScenarioModel');
const config = require('../../configs/automation.setup');
const BasePageModel = require('../../pagemodels/common/BasePageModel');
const PopupPageModel = require('../../pagemodels/common/PopupPageModel');

const TemplatePageModel = require('../../pagemodels/template/TemplatePageModel');

class TemplateScenarioModel extends ScenarioModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
    this.templateModel = new TemplatePageModel(testInfo, page, data);
  }

  // TODO: Remove printData function
  // HINT: Provides insights into how to retrieve and utilize various types of data
  // This method is only for debugging and understanding the data object
  // INSTRUCTION: Refer the link below to explore the rich set of data provide by the platform
  // https://confluence.esteeonline.com/display/QAP/Multi-tenant+QA+automation+platform#MultitenantQAautomationplatform-SiteDefinition
  printData = () => {
    // Locator Data
    console.log('productBrief: ', this.locatorData.productBrief);
    // Object destructuring - another way to pull data and shorten a lengthy code line
    const { timeoutSetting } = this.locatorData;
    console.log('timeoutSetting: ', timeoutSetting);

    // Test Data
    console.log('emailAddress: ', this.testData.emailAddress);

    // Site Data
    console.log('Prod Url: ', this.siteData.prodUrl);

    // Execution Context
    console.log(
      'Currently executing env: ',
      this.siteData.executionContext.environment
    );

    // Playwright page object
    console.log('Playwright object: ', this.page);
  };

  navigateToAPage = async () => {
    // Setup the browser
    await this.initBrowser();
    // Goto to a webpage
    await this.goto();
    const popups = [
      this.locatorData.closePopup,
      this.locatorData.closeSecPopup,
      this.locatorData.closeThirdPopup,
    ];
    // Close the popups
    await this.closePopup(popups);

    // TODO: A method to execute a method in TemplatePageModel
    await this.doSomeThing();
  };

  // HINT: Retain initBrowser, goto, and closeup functions in the region below
  //#region
  // This function will setup the brower with required cookies
  initBrowser = async () => {
    const base = new BasePageModel(this.testInfo, this.page, config, this.data);
    await base.initBrowser();
  };

  // Navigate to the page you are planning to start with
  goto = async () => {
    // Navigate to base url of the site (url is determined based on env)
    await this.templateModel.goto(this.siteData.executionContext.url);
  };

  // Function to close popups
  closePopup = async (popups) => {
    await new PopupPageModel(this.testInfo, this.page, this.data).closePopup(
      popups
    );
  };
  //#endregion

  // TODO: Call a method in PageModel
  // INSTRUCTION: Delete this function after copying the code
  doSomeThing = async () => {
    await this.templateModel.exampleMethod();
    // HINT: Call other methods in the PageModel to complete your scenario
  };
}

// TODO: Don't forget to export your scenario object model
module.exports = TemplateScenarioModel;
