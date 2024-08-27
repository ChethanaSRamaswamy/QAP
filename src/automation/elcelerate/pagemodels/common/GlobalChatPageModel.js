const { expect } = require('@playwright/test');

/**
 * Represents a Page Model (PageModel) for handling login-related actions on a brand website.
 * @class PageModel
 */
const PageModel = require('../PageModel');

/**
 * Represents a Page Model (PageModel) of the web application.
 *
 * The GlobalChatModel class encapsulates interactions related to the live chat feature,
 * which typically includes opening, closing and interacting with chat.
 *
 * @class GlobalChatModel
 * @extends PageModel
 */
class GlobalChatModel extends PageModel {
  /**
   * Creates an instance of GlobalChatModel.
   *
   * @param {Object} testInfo - Information about the test.
   * @param {Page} page - The Playwright page object.
   * @param {Object} data - Data (locatorData, testData, siteData) for the test.
   */
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
    this.responseReceived = false;
    this.responseListener = null;
    this.responseStatusOK = 200;
    this.timeoutLong = 60000;
    this.timeoutMiddle = 30000;
    this.timeoutStandard = 15000;
    this.timeoutShort = 5000;
    this.timeoutQuick = 1000;
    this.timeoutBlink = 100;
  }

  /**
   * Sets up network listener that will check if js file with chat loader was fired.
   *
   * @param {string} regexAsString - This regex should come from data file.
   */
  setupNetworkListener(regexAsString) {
    if (regexAsString) {
      const regexPattern = new RegExp(regexAsString);
      this.responseListener = (response) => {
        if (
          regexPattern.test(response.url()) &&
          response.status() === this.responseStatusOK
        ) {
          this.responseReceived = true;
          console.log(`Desired response received: ${response.url()}.`);
        }
      };
      // Add the listener to the page
      this.page.on('response', this.responseListener);
    } else {
      console.log(`Patter was not provided`);
    }
  }

  /**
   * Will remove network listeners.
   *
   */
  removeNetworkListener() {
    if (this.responseListener) {
      this.page.off('response', this.responseListener);
      this.responseListener = null; // Clear the reference
      console.log('Response listener removed.');
    }
  }

  /**
   * Will listen for the response that was set up earlier. Sometimes response is triggered on page load, sometimes after certain action.
   *
   */
  async waitForResponse(timeout = this.timeoutMiddle) {
    const startTime = Date.now();
    while (!this.responseReceived && Date.now() - startTime < timeout) {
      await this.page.waitForTimeout(this.timeoutBlink); // Check every 100ms
    }
    this.removeNetworkListener();
    if (!this.responseReceived) {
      return false;
    } else {
      return true;
    }
  }

  /**
   * This returns number of how many times live person script is delivered to the page.
   *
   */
  getNumberOfLpTags = async () => {
    // TO DO
  };

  /**
   * This returns if live person object is initialized.
   *
   */
  getScriptSdes = async () => {
    // TO DO
  };

  /**
   * This returns optanon category for cookie management and type of the script tag.
   *
   * @param {string} scriptLocatorElem - Locator for live person script.
   */
  getLivePersonScripts = async () => {
    // TO DO
  };

  /**
   * This rejects or accepts cookies from cookie banner.
   *
   * @param {string} cookiesBtnElem - Locator for cookies banner.
   */
  chooseYourCookies = async (cookiesBtnElem) => {
    const acceptOrReject = this.page.locator(cookiesBtnElem);
    await expect(acceptOrReject).toBeVisible();
    await acceptOrReject.click();
  };

  /**
   * This will click chat engagement button. If chat is nested in a drawer, will then click element inside drawer.
   *
   * @param {string} chatIconElem - Locator for the chat engagement button
   * @param {string} chatDrawerElem - Locator if chat is nested in a drawer or similar.
   * @param {string} chatContainerElem - Locator for chat window container.
   */
  clickChat = async (chatIconElem, chatDrawerElem, chatContainerElem) => {
    const chat = this.page.locator(chatIconElem).first();
    await expect(chat).toBeVisible({ timeout: this.timeoutLong });
    await chat.click();
    if (chatDrawerElem !== '') {
      const chatNested = this.page.locator(chatDrawerElem).first();
      await expect(chatNested).toBeVisible();
      await chatNested.click();
    }
    // Add a specific check for chatContainer
    return await this.page
      .waitForSelector(chatContainerElem, {
        state: 'visible',
        timeout: this.timeoutStandard,
      })
      .then(() => true) // If the selector becomes visible within the timeout, return true.
      .catch(() => false); // If the waitForSelector times out or encounters an error, return false.
  };

  /**
   * This return the vendor of active chat window.
   *
   * @param {string} chatContainerElem - Locator for chat window container.
   */
  getVendor = async (chatContainerElem) => {
    const container = this.page.locator(chatContainerElem).first();
    await expect(container).toBeVisible({ timeout: this.timeoutShort });
    let vendor = await container.getAttribute('class');
    if (vendor.includes('lp_maximized')) {
      vendor = 'LivePerson';
    } else if (vendor.includes('showDockableContainer')) {
      vendor = 'Salesforce';
    }
    console.log(`Vendor: ${vendor}`);
    return vendor;
  };

  /**
   * This will verify if chat window has implemented image. Some locales require brand image or logo.
   *
   * @param {string} imageElem - Locator for chat window container.
   * @param {string} imageName - Name of the image in topic -logo or artist image or brand image, etc.
   */
  checkImage = async (imageElem, imageName) => {
    if (!imageElem) {
      console.log(`${imageName} is NOT applicable.`);
    } else {
      const image = this.page.locator(imageElem).first();
      await expect
        .soft(image, `${imageName} IS NOT VISIBLE!`)
        .toBeVisible({ timeout: this.timeoutShort });
    }
  };

  checkChatTitle = async () => {
    // TO DO
  };

  selectChatTopic = async () => {
    // TO DO
  };

  fillInChatSurvey = async () => {
    // TO DO
  };

  /**
   * This will close chat window.
   *
   * @param {string} closeChatBtnElem - Locator for closing the chat window.
   */
  closeChat = async (closeChatBtnElem) => {
    const close = this.page.locator(closeChatBtnElem).first();
    await expect(close).toBeVisible({ timeout: this.timeoutQuick });
    await close.click();
  };
}

module.exports = GlobalChatModel;
