const PopupPageModel = require('../../pagemodels/common/PopupPageModel');
const GlobalChatPageModel = require('../../pagemodels/common/GlobalChatPageModel');
const HomePageModel = require('../../pagemodels/home/HomePageModel');
const PdpPageModel = require('../../pagemodels/product/PdpPageModel');
const PlpPageModel = require('../../pagemodels/product/PlpPageModel');
const ScenarioModel = require('../ScenarioModel');
const BasePageModel = require('../../pagemodels/common/BasePageModel');
const ActionPageModel = require('../../pagemodels/common/ActionPageModel');
const Util = require('../../../../utilities/util');
const config = require('../../configs/automation.setup');
const { expect } = require('@playwright/test');

class GlobalChatScenarioModel extends ScenarioModel {
  /**
   * Creates an instance of Global Chat scenario model.
   * @param {Object} testInfo - Information about the test.
   * @param {Page} page - The Playwright page object.
   * @param {Object} data - Data (locatorData, testData, siteData) for the test.
   */
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
    this.chat = new GlobalChatPageModel(this.testInfo, this.page, this.data);
    this.hp = new HomePageModel(this.testInfo, this.page, this.data);
    this.pdp = new PdpPageModel(this.testInfo, this.page, this.data);
    this.plp = new PlpPageModel(this.testInfo, this.page, this.data);
    this.popup = new PopupPageModel(this.testInfo, this.page, this.data);
    this.base = new BasePageModel(this.testInfo, this.page, config, this.data);
    this.actions = new ActionPageModel(
      this.testInfo,
      this.page,
      config,
      this.data
    );
    this.responseReceived = false;
    this.device = this.siteData.executionContext.platform;
    this.vendor = this.testData.vendor;
    const {
      cookieAcceptButton,
      cookieRejectButton,
      popups,
      chatBtnPC,
      chatBtnMobile,
      chatBtnTest,
      drawerCustomerSupportPC,
      drawerBeautyAgentPC,
      drawerCustomerSupportMOB,
      drawerBeautyAgentMOB,
      chatWindowContainer,
      chatLoadingLeavesDOM,
      chatLoadingStaysDOM,
      chatTitle,
      chatChips,
      chatChipBeauty,
      chatInput,
      chatClose,
      chatConfirmClose,
      MPPpage,
      SPPpage,
      brandImage,
      agentImage,
      brandIcon,
      endChat,
      emulationDevice,
    } = this.locatorData;
    this.chatElements = {
      cookieAcceptButton,
      cookieRejectButton,
      popups,
      chatBtnPC,
      chatBtnMobile,
      chatBtnTest,
      drawerCustomerSupportPC,
      drawerBeautyAgentPC,
      drawerCustomerSupportMOB,
      drawerBeautyAgentMOB,
      chatWindowContainer,
      chatLoadingLeavesDOM,
      chatLoadingStaysDOM,
      chatTitle,
      chatChips,
      chatChipBeauty,
      chatInput,
      chatClose,
      chatConfirmClose,
      MPPpage,
      SPPpage,
      brandImage,
      agentImage,
      brandIcon,
      endChat,
      emulationDevice,
    };
    const {
      region,
      regionNumber,
      brandShort,
      brandFull,
      locale,
      localeCookie,
      timeZone,
      status,
      vendor,
      delivery,
      openingHours,
      botTitle,
      agentTitle,
      genericTitle,
      messageIgnore,
      messageGeneric,
      userName,
      userEmail,
      prodURL,
      mppURL,
      sppURL,
      lpURL,
      lpMessages,
    } = this.testData;
    this.chatData = {
      region,
      regionNumber,
      brandShort,
      brandFull,
      locale,
      localeCookie,
      timeZone,
      status,
      vendor,
      delivery,
      openingHours,
      botTitle,
      agentTitle,
      genericTitle,
      messageIgnore,
      messageGeneric,
      userName,
      userEmail,
      prodURL,
      mppURL,
      sppURL,
      lpURL,
      lpMessages,
    };
    this.messages = {
      stepNotApplicable: (param) =>
        `Action: ${param} -is not applicable for ${this.siteData.brandLocale}`,
      liveChatUnavailable: 'Live chat service is currently unavailable.',
      cookiesAccepted: 'Cookies were accepted.',
      cookiesRejected: 'Cookies were rejected.',
      popupClosed: 'The Popup window is closed',
      dataURL: (param) => `Data URL: ${param}`,
      currURL: (param) => `Current URL: ${param}`,
      lpTagNumber: (param) => `window.lpTag._tagCount: ${param}`,
      responseError: 'CRITICAL RESPONSE NOT RECEIVED WITHIN TIMEOUT!',
      chatWindowNotAvailable: 'FAILED TO OPEN CHAT AFTER MAXIMUM ATTEMPTS!',
      deliveredMoreThanOnce:
        'LIVE PERSON SCRIPT IS BEING DELIVERED MORE THAN ONCE!',
      initializedOnRejection:
        'LIVE PERSON WAS INITIALIZED EVEN WHEN COOKIES WERE REJECTED!',
      scriptFiredOnRejection:
        'LIVE PERSON SCRIPT IS BEING DELIVERED EVEN WHEN COOKIES WERE REJECTED!',
    };
    this.cookieLocaleSet1 = ['CA', 'MX', 'BR', 'UK'];
    this.cookieLocalesSet2 = [
      'AU',
      'JP',
      'CE',
      'IL',
      'IN',
      'ZA',
      'KSA',
      'QA',
      'UAE',
    ];
    this.cookieLocalesSet3 = ['US'];
    this.cookiesExceptionList = ['BB-CH', 'CL-CH', 'MC-CH', 'EL-CH'];
    this.timeoutLong = 60000;
    this.timeoutMiddle = 30000;
    this.timeoutStandard = 15000;
    this.timeoutShort = 5000;
    this.timeoutQuick = 1000;
    this.timeoutBlink = 100;
  }

  initBrowser = async () => {
    if (this.device === Util.devices.pc) {
      config.browser.windowSize = '1040p';
    }
    await this.base.initBrowser();
  };

  goToHomePage = async () => {
    const ele = this.chatElements;
    const data = this.chatData;
    await this.initBrowser();
    this.chat.setupNetworkListener(data.delivery);
    await this.hp.isLoaded();
    await this.popup.closePopupNasty(ele.popups);
  };

  goToPLP = async () => {
    const ele = this.chatElements;
    const data = this.chatData;
    await this.initBrowser();
    this.chat.setupNetworkListener(data.delivery);
    await this.plp.goToAPlp(data.mppURL);
    await this.popup.closePopupNasty(ele.popups);
  };

  goToPDP = async () => {
    const ele = this.chatElements;
    const data = this.chatData;
    config.browser.windowSize = '1040p';
    const pdpURLs = [data.sppURL]; // TO DO. I do not like this way J.S.
    await this.base.initBrowser();
    this.chat.setupNetworkListener(data.delivery);
    await this.pdp.moveToPdp(pdpURLs); // This function takes arrays.
    await this.popup.closePopupNasty(ele.popups);
  };

  checkComplianceBeforeCookies = async () => {
    // TO DO
  };
  checkComplianceAfterCookies = async () => {
    // Setting accept as default true for countries like US, where cookies are accepted by default.
    //  TO DO
  };

  acceptCookies = async (accept = true) => {
    // Setting as default true for countries like US, where cookies are accepted by default.
    const ele = this.chatElements;
    const data = this.chatData;
    const cookieAction = accept
      ? ele.cookieAcceptButton
      : ele.cookieRejectButton;
    const actionMessage = accept
      ? this.messages.cookiesAccepted
      : this.messages.cookiesRejected;
    // Accept or reject cookies based on region
    if (
      this.cookieLocaleSet1.includes(data.locale) ||
      (data.region === 'EMEA' && cookieAction !== '')
    ) {
      await this.chat.chooseYourCookies(cookieAction);
      console.log(actionMessage);
    } else {
      console.log(this.messages.stepNotApplicable(actionMessage));
    }
    const responseReceived = await this.chat.waitForResponse();
    if (accept) {
      expect(responseReceived, this.messages.responseError).toBeTruthy();
    } else {
      expect
        .soft(responseReceived, this.messages.scriptFiredOnRejection)
        .toBeFalsy();
    }
  };

  verifyChatButtonVisibility = async (visibility = true) => {
    const data = this.chatData;
    let chatButton = '';
    if (data.status === 'active') {
      if (this.device === Util.devices.pc) {
        chatButton = this.chatElements.chatBtnPC;
      } else {
        chatButton = this.chatElements.chatBtnMobile;
      }
      if (visibility) {
        await this.actions.waitForVisible(chatButton, this.timeoutLong);
      } else {
        await this.actions.waitForNotVisible(chatButton, this.timeoutLong);
      }
    } else {
      console.log(this.messages.liveChatUnavailable);
    }
    await this.screenshot();
  };

  // EL CA, LM CA, SB US MOBILE have problems loading chat icon. Works on real device.
  openChat = async () => {
    const data = this.chatData;
    if (data.status === 'active') {
      const ele = this.chatElements;
      const maxAttempts = 2;
      let targetChat = '';
      let targetDrawer = '';
      let chatOpened = false;
      if (this.device === Util.devices.pc) {
        targetChat = ele.chatBtnPC;
        targetDrawer = ele.drawerBeautyAgentPC;
      } else {
        targetChat = ele.chatBtnMobile;
        targetDrawer = ele.drawerBeautyAgentMOB;
      }
      await this.popup.closePopupNasty(ele.popups);
      // Will click the icon 3 times, waiting 3 seconds each time for chat to load, before failing.
      // Thinking about more elegant way to handle chat being un-responsive sometimes.
      for (let i = 0; i <= maxAttempts; i++) {
        await this.actions.pressKeyboard('Escape');
        chatOpened = await this.chat.clickChat(
          targetChat,
          targetDrawer,
          ele.chatWindowContainer
        );
        if (chatOpened) {
          break; // If chat is successfully opened, exit the loop.
        }
      }
      // Proceed if chat is opened
      if (chatOpened) {
        await this.actions.waitForNotVisible(ele.chatLoadingLeavesDOM);
        await this.actions.waitForNotVisible(ele.chatLoadingStaysDOM);
      }
      await this.screenshot();
      expect(chatOpened, this.messages.chatWindowNotAvailable).toBeTruthy();
    } else {
      console.log(this.messages.liveChatUnavailable);
    }
  };

  getVendor = async () => {
    const ele = this.chatElements;
    return await this.chat.getVendor(ele.chatWindowContainer);
  };

  verifyLogoImage = async (vendor) => {
    const ele = this.chatElements;
    if (vendor === 'LivePerson') {
      await this.chat.checkImage(ele.brandImage, 'Brand Logo');
    } else {
      console.log(this.messages.stepNotApplicable('Logo visibility'));
    }
  };

  verifyBrandImage = async (vendor) => {
    const ele = this.chatElements;
    if (vendor === 'LivePerson') {
      await this.chat.checkImage(ele.agentImage, 'Brand image');
    } else {
      console.log(this.messages.stepNotApplicable('Brand image visibility'));
    }
  };

  verifyChatWindow = async (vendor) => {
    await this.verifyLogoImage(vendor);
    await this.verifyBrandImage(vendor);
  };

  exitChat = async () => {
    const ele = this.chatElements;
    await this.chat.closeChat(ele.chatClose);
    await this.screenshot();
  };
}

module.exports = GlobalChatScenarioModel;
