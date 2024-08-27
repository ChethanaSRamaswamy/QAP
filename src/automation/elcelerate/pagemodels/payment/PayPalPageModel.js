const { expect } = require('@playwright/test');
const PageModel = require('../PageModel');

class PayPalPageModel extends PageModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }

  // TODO:We need to clean up the below functions

  /**
   * Clicks on PayPal radio button, CTA button.
   *
   * @param {string} payPalRadioBtnElem - Locator for the PayPal radio button.
   * @param {string} payPalCTAElem - Locator for the PayPal CTA.
   * @returns {Promise<void>} A Promise that resolves after checking and potentially placing the order.
   */
  checkPayPalButton = async (payPalRadioBtnElem, payPalCTAElem) => {
    if (payPalRadioBtnElem) {
      await this.page.locator(payPalRadioBtnElem).first().click();
      if (payPalCTAElem) {
        await this.page.locator(payPalCTAElem).click();
      }
    }
  };

  /**
   * Goes to the PayPal Sandbox if values are present
   *
   * @param {string} paypalurl - String to test if we successfully went to Sandbox.
   * @param {string} payPalSandbox - URL for Sandbox.
   * @returns {Promise<void>} A Promise that resolves after checking the Sandbox URL.
   */
  checkPayPalUrl = async (paypalurl, payPalSandbox) => {
    if (paypalurl) {
      await this.page.goto(payPalSandbox);
      if (await this.page.url().includes(paypalurl)) {
        console.log(
          `${this.siteData.brandLocale} : Successfully navigated to paypal page`
        );
        await this.screenshot();
      } else {
        console.log(
          `${this.siteData.brandLocale} : Did not navigate to paypal page`
        );
      }
    }
  };

  /**
   * Accesses the PayPal portal by interacting with various elements within an iframe.
   * @param {string} payPalIframeElem - Locator for the PayPal iframe element.
   * @param {string} payPalViewCartElem - Locator for the CTA element within the PayPal iframe.
   * @param {string} payPalEmailElem - Locator for the email input field within the PayPal portal.
   * @param {string} payPalEmailNextElem - Locator for the "Next" button after entering the email in the PayPal portal.
   * @param {string} payPalPasswordElem - Locator for the password input field within the PayPal portal.
   * @param {string} payPalLoginElem - Locator for the "Login" button within the PayPal portal.
   * @param {string} payPalSubmitElem - Locator for the submit button within the PayPal portal.
   * @param {string} payPalEmail - PayPal account email address.
   * @param {string} payPalPassword - PayPal account password.
   * @returns {Promise<void>} - A Promise that resolves when the PayPal portal access process is completed.
   */
  accessPayPalPortal = async ({
    payPalIframeElem,
    payPalViewCartElem,
    payPalEmailElem,
    payPalEmailNextElem,
    payPalPasswordElem,
    payPalLoginElem,
    payPalSubmitElem,
    payPalEmail,
    payPalPassword,
  }) => {
    await this.page.waitForTimeout(parseInt(this.locatorData.waitTime));
    const payPalPagePromise = this.page.waitForEvent('popup');
    await this.page
      .frameLocator(payPalIframeElem)
      .locator(payPalViewCartElem)
      .click();
    const payPalPage = await payPalPagePromise;
    await payPalPage.locator(payPalEmailElem).first().fill(payPalEmail);
    console.log('PayPal portal launched successfully');
    await payPalPage
      .locator(payPalEmailNextElem)
      .first()
      .click({ force: true });
    await expect(
      await payPalPage.locator(payPalPasswordElem).first()
    ).toBeVisible();
    await payPalPage.locator(payPalPasswordElem).first().fill(payPalPassword);

    await payPalPage.locator(payPalLoginElem).hover();
    await payPalPage.locator(payPalLoginElem).dispatchEvent('click');
    console.log('PayPal portal login successful');
    await this.page.screenshot();

    await payPalPage.locator(payPalSubmitElem).first().click({ force: true });
    await this.page.screenshot();
  };
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
    await this.page.waitForTimeout(12000);
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

module.exports = PayPalPageModel;
