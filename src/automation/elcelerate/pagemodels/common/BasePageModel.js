const Helper = require('../../helpers/helper.js');
const PageModel = require('../PageModel.js');

class BasePageModel extends PageModel {
  constructor(testInfo, page, config, data) {
    super(testInfo, page, data);
    this.context = this.page.context();
    this.config = config;
  }

  /**
   * Initializes the browser settings and configurations based on the provided options.
   * Sets viewport size, handles cookies, and performs various browser-related tasks.
   *
   * @returns {Promise<void>} A Promise that resolves after initializing the browser.
   */
  initBrowser = async () => {
    // TODO: Not sure whether we need this global timeoutSetting in PW
    // t.setConfig({ navigationTimeout: parseInt(timeoutSetting, 10) });
    // TODO: Handle User-Agent

    const { browser } = this.config;
    const { siteData } = this;

    const device = siteData.executionContext.platform.toUpperCase();
    await Helper.deleteCookie(this.context);
    if (device === 'PC') {
      await Helper.setWindowSize(browser.windowSize, this.page);
      console.log(
        `${this.siteData.brandLocale} : ViewPort on PC: ${browser.windowSize}`
      );
    } else {
      await Helper.setWindowSize(browser.windowSizeMobile, this.page);
      console.log(
        `${this.siteData.brandLocale} : ViewPort on Mobile: ${browser.windowSizeMobile}`
      );
    }

    if (browser.setWAFCookie) {
      await Helper.setWAFCookie(this.siteData, this.context);
    }
    if (browser.setAdroll) {
      await Helper.setAdroll(this.siteData, this.context);
    }
    if (browser.setAkamaiBypass) {
      await Helper.setAkamaiBypass(this.siteData, this.context);
    }
    if (browser.setApiEnv) {
      await Helper.setApiEnv(this.siteData, this.context);
    }
    if (browser.getPerlgemEnvCookie) {
      await Helper.getPerlgemEnvCookie(this.siteData, this.context);
    }
    if (browser.setOtherCookies) {
      await Helper.setOtherCookies(this.siteData, this.context);
    }
    if (browser.setRevisionTag) {
      await Helper.setRevisionTag(this.siteData, this.context);
    }
    if (browser.setShowErrorsCookie) {
      await Helper.setShowErrorsCookie(this.siteData, this.context);
    }
    if (browser.isTestOrder) {
      await Helper.setTestOrderCookie(this.siteData, this.context);
    }
    await Helper.setLocaleCookie(
      this.testData.localeCookie,
      this.siteData.executionContext.url,
      this.context,
      this.siteData
    );
  };

  /**
   * Navigates the page to the specified URL.
   *
   * @param {string} url - The URL to navigate to.
   * @returns {Promise<void>} A Promise that resolves after navigating to the specified URL.
   */
  goto = async (url) => {
    await this.page.goto(url);
  };
}
module.exports = BasePageModel;
