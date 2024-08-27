const PageModel = require('../PageModel');

class CMSAlfrescoValidationPageModel extends PageModel {
  /**
   * Create a CMSAlfrescoValidationPageModel.
   * @param {Object} testInfo - Test information object.
   * @param {Object} page - Playwright page object.
   * @param {Object} data - Data  (locatorData, testData, siteData) for the test.
   */
  constructor(testInfo, page, data, context) {
    super(testInfo, page, data, context);
    this.messages = {
      displayedImage: 'Image Displayed As Expected',
    };
  }

  /**
   * Navigates to Front End Page of a Node
   * @param contentTitleElem - locator for content Title
   * @memberof CMSAlfrescoValidationPageModel
  */
  navigateToFrontEnd = async (contentTitleElem) => {
    if (contentTitleElem) {
      await this.page.locator(contentTitleElem).click();
      await this.screenshot();
    }
  };

  /**
   * Verifies if the Image is visible
   * @param feImageElem - locator for front end Image
   * @memberof CMSAlfrescoValidationPageModel
  */
  validateTheImage = async (feImageElem) => {
    if (feImageElem) {
      await this.page.locator(feImageElem).isVisible();
      console.log(this.messages.displayedImage);
    }
  };
}
module.exports = CMSAlfrescoValidationPageModel;
