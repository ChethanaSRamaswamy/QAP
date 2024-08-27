const PageModel = require('../PageModel');

class CMSLoginPageModel extends PageModel {
  /**
   * Create a CMSLoginPageModel.
   * @param {Object} testInfo - Test information object.
   * @param {Object} page - Playwright page object.
   * @param {Object} data - Data  (locatorData, testData, siteData) for the test.
   */
  constructor(testInfo, page, data, context) {
    super(testInfo, page, data, context);
    this.messages = {
      loginSuccessMessage: 'Successfully Logged in as CMS User',
    };
  }

  /**
   * Navigate to CMS Login Page
   * @param cmsUrlExtensionElem - url extension to open the webpage
   * @memberof CMSLoginPageModel
  */
  goToCmsLoginPage = async (cmsUrlExtensionElem) => {
    if (cmsUrlExtensionElem) {
      await this.page.goto(
        this.siteData.executionContext.url + cmsUrlExtensionElem
      );
      await this.screenshot();
    }
  };

  /**
   * Login to CMS as a test user
   * @param cmsLoginUserNameElem - locator for 'Username' text field
   * @param cmsUserNameElem - test username to login
   * @param cmsLoginPasswordElem - locator for 'Password' text field
   * @param cmsPwdElem - test password to login
   * @param cmsLoginElem - locator for Login button
   * @memberof CMSLoginPageModel
  */
  loginDetails = async (
    cmsLoginUserNameElem,
    cmsUserNameElem,
    cmsLoginPasswordElem,
    cmsPwdElem,
    cmsLoginElem
  ) => {
    if (cmsLoginUserNameElem) {
      await this.page.locator(cmsLoginUserNameElem).click();
      await this.page
        .locator(cmsLoginUserNameElem)
        .first()
        .fill(cmsUserNameElem);
    }
    if (cmsLoginPasswordElem && cmsLoginElem) {
      await this.page.locator(cmsLoginPasswordElem).click();
      await this.page.locator(cmsLoginPasswordElem).fill(cmsPwdElem);
      await this.page.locator(cmsLoginElem).click();
      await this.screenshot();
      console.log(this.messages.loginSuccessMessage);
    }
  };
}

module.exports = CMSLoginPageModel;
