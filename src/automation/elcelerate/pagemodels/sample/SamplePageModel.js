const PageModel = require('../PageModel');

class SamplePageModel extends PageModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }

  /**
   * Continues to the sample page by triggering the next step based on provided checkout elements.
   *
   * @param {string} checkoutFromSamplePage1 - Locator for the first checkout element related to the sample page.
   * @param {string} checkoutFromSamplePage2 - Locator for the second checkout element related to the sample page.
   * @param {string} checkoutFromSamplePage3 - Locator for the third checkout element related to the sample page.
   * @param {boolean} scrollFlag - Flag indicating whether to trigger a scroll before continuing to the sample page.
   * @returns {Promise<void>} - A Promise that resolves after continuing to the sample page.
   */
  continueToSamplePage = async (
    checkoutFromSamplePage1,
    checkoutFromSamplePage2,
    checkoutFromSamplePage3,
    scrollFlag
  ) => {
    const samples = [
      checkoutFromSamplePage1,
      checkoutFromSamplePage2,
      checkoutFromSamplePage3,
    ];
    await this.triggerNextStep(samples, scrollFlag);
  };

  /**
   * Triggers the next step by checking if the sample page exists based on provided locators and scroll flag.
   *
   * @param {string[]} locators - Array of Locators for elements representing checkout steps.
   * @param {boolean} scrollFlag - Flag indicating whether to trigger a scroll before checking the sample page existence.
   * @returns {Promise<void>} - A Promise that resolves after triggering the next step for each locator.
   */
  triggerNextStep = async (locators, scrollFlag) => {
    for (let iCnt = 0; iCnt < locators.length; iCnt++) {
      const element = locators[iCnt];
      if (element) {
        await this.checkIfSamplePageExists(element, scrollFlag);
      } else {
        console.log(
          `${this.siteData.brandLocale} : There is no sample available for this product.`
        );
      }
    }
  };

  /**
   * Checks if the sample page exists based on the provided element locator and scroll flag, and takes appropriate actions.
   *
   * @param {string} elementLocator - Locator for the element representing the sample page.
   * @param {string} [scrollFlag='0'] - Flag indicating whether to trigger a scroll before checking the sample page existence (default is '0').
   * @returns {Promise<void>} - A Promise that resolves after checking the sample page existence and taking appropriate actions.
   */
  checkIfSamplePageExists = async (elementLocator, scrollFlag = '0') => {
    if (scrollFlag === '1') {
      await this.page.evaluate(() => {
        window.scrollBy(0, 500);
      });
    }
    await this.page.waitForTimeout(10000);
    const sampleElem = await this.page.locator(elementLocator);
    const isElemAvailable = (await sampleElem.count()) > 0;
    if (isElemAvailable) {
      await this.screenshot();
      await this.page.locator(elementLocator).first().click();
      console.log(
        `${this.siteData.brandLocale}: Sample page is available but excluding the sample products from this selection`
      );
    } else {
      console.log(
        `${this.siteData.brandLocale} : Sample page is not available; hence, it is skipped.`
      );
    }
  };
}

module.exports = SamplePageModel;
