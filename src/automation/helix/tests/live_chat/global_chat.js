var t = require('taiko');
const Helper = require('../../helpers/helper');
const Util = require('../../../../utilities/util');
const Hengine = require('../../../../datainterface/providers/hengine');
const gcHelp = require('../../helpers/oab_helper.js');
const assert = require('assert');
const matchCondition = true;
let siteDefinition, source, NullDataException;

const feature = 'Live Chat';
// https://github.com/getgauge/gauge-js/blob/master/docs/syntax/data-stores.md
const globalInScenario = gauge.dataStore.scenarioStore;
var CommonData = {};
var timeoutSetting = '';
var cookieAcceptButton = '';
var popups;
var chatBtnPC = '';
var chatBtnMobile = '';
var chatBtnTest = '';
var brandImage = '';
var agentImage = '';
var privacyCheck = '';
var emulationDevice = '';

var drawerCustomerSupportPC = ''; // MC-MX
var drawerBeautyAgentPC = ''; // TF BR
var drawerCustomerSupportMOB = ''; // MC-MX
var drawerBeautyAgentMOB = ''; // TF BR
var chatWindowContainer = ''; // live person .lp_maximized[data-lp-cust-id='maximizedWindow']
var chatLoadingLeavesDOM = '';
var chatLoadingStaysDOM = '';
var chatTitle = 'div.bot-name';
var chatChips = '';
var chatChipOrder = '';
var chatChipBeauty = '';
var chatInput = '';
var chatClose = '';
var chatConfirmClose = '';
// wyzej musi korespondowac z common data imie dla bota imie dla agenta i imie dla brandu przed wybraniem

const waitTimeOutLong = 60000;
const waitTimeOutMiddle = 30000;
const waitTimeStandard = 15000;
const waitTime = 1000;
const delayTime = 10;

const messages = {
  chatWindowNotAvailable:
    'Chat Window is not displayed after clicking the chat icon and waiting  60 sec',
  stepNotApplicable: 'This step is not applicable for this brand/locale',
  liveChatUnavailable: 'Live chat service is currently unavailable',
  cookiesAccepted: 'Cookies were accepted.',
  popupClosed: 'The Popup window is closed',
  valuesNotMatch: 'COMPARED VALUED DOES NOT MATCH!',
};

const cookieLocaleSet1 = ['CA', 'MX', 'BR', 'UK'];

// Global variables
let globalDevice = '';
let globalURL = '';

// Functions

async function initFrameworkSettings() {
  // This should come from Gauge Tags inputs
  const tags = process.env.tags.split(',');
  ({ siteDefinition, source, NullDataException } = await Hengine.Initializer(
    tags,
    feature,
    this
  ));

  // Abort, if there is any error while setting up the locators and test data
  if (NullDataException.isError) {
    assert(!matchCondition, NullDataException.message.join('\n'));
  }

  // Override this
  Object.assign(this, source);
  // Taiko API overrides
  t = await Helper.initAutoHeal(siteDefinition, t);

  // Delete all the cookies
  await t.deleteCookies();

  gauge.message('ENVIRONMENT : ' + siteDefinition.executionContext.environment);
}

function takeScreenshot(typeOfdevice) {
  if (typeOfdevice === 'PC' || typeOfdevice === 'Any') {
    gauge.screenshot();
  }
}

/**
 * @param {String} selector The selector
 * @param {number} timeout The wait for time value
 */
async function waitForNotExists(selector, timeout) {
  await t.waitFor(async () => {
    // This will throw true until it throws false
    return !(await (await t.$(selector)).exists(0, 0));
  }, timeout);
}

async function waitForNotVisible(selector, timeout) {
  if (await (await t.$(selector)).exists(0, 0)) {
    await t.waitFor(async () => {
      // This will throw true until it throws false - isVisible(0, 0)
      return !(await (await t.$(selector)).isVisible(0, 0));
    }, timeout);
  } else {
    return true;
  }
}

/**
 * @param {String} selector The selector
 * @param {number} timeout The wait for time value
 */
async function ifExists(selector, timeout) {
  return await (await t.$(selector)).exists(delayTime, timeout);
}

/**
 * @param {String} selector The selector
 * @param {number} timeout The wait for time value
 */
async function ifVisible(selector, timeout) {
  if (await ifExists(selector, timeout)) {
    await t.evaluate(await t.$(selector), (ele) => {
      ele.scrollIntoView({ block: 'center' });
    });
    const visibility = await (
      await t.$(selector)
    ).isVisible(delayTime, timeout);
    const height = await t.evaluate(
      await t.$(selector),
      (ele) => ele.offsetHeight
    );
    if (visibility && height) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

/**
 * @param {String} selector The selector
 * @param {boolean} navigation The navigation value
 */
async function scrollAndClick(selector, navigation) {
  const eleToClick = await t.$(selector);
  await t.scrollTo(await eleToClick);
  // await t.evaluate(
  //   await eleToClick,
  //   (ele) => {
  //     ele.focus();
  //     ele.click();
  //   },
  //   { waitForNavigation: navigation, waitForEvents: ['DOMContentLoaded'] }
  // );
  await t.click(await eleToClick, {
    waitForNavigation: navigation,
    waitForEvents: ['DOMContentLoaded'],
  });
}

// This function clicks chat engagement button and waits just for container.
/**
 * @param {String} chatPC The selector
 * @param {String} chatMobile The selector
 * @param {String} chatPrimary The selector
 */
async function clickChat(chatPC, chatMobile, chatType) {
  const isPC = globalDevice === 'PC';
  let vendor = '';
  let clickCount = 0;
  let targetChat;
  if (!isPC) {
    targetChat = chatMobile;
  } else {
    targetChat = chatPC;
  }
  await gcHelp.popUpClose(t, popups); // To close nasty pupups
  do {
    await scrollAndClick(targetChat, false);
    // If chat CTA is nested in drawer or other element
    if (
      chatType !== '' &&
      (await ifVisible(chatType, waitTimeStandard))
    ) {
      takeScreenshot(globalDevice);
      await ifVisible(chatType, waitTime);
      await scrollAndClick(chatType, false);
    }
    if (await ifVisible(chatWindowContainer, waitTimeOutMiddle)) {
      vendor = await t.evaluate(
        await t.$(chatWindowContainer),
        (ele) => ele.className
      );
      if (vendor.includes('lp_maximized')) {
        vendor = 'LivePerson';
      } else if (vendor.includes('showDockableContainer')) {
        vendor = 'Salesforce';
      }
    }
    clickCount++;
  } while (!vendor && clickCount < 2);

  if (!vendor) {
    assert(!matchCondition, messages.chatWindowNotAvailable);
  }
  return vendor;
}
// TO DO:
// function isChatOpen() {
//   const openingTime = CommonData.openingHours.split('-')[0];
//   const closingTime = CommonData.openingHours.split('-')[0];
//   const chatTimeZone = CommonData.timeZone;
//   const currentDate = new Date();
//   const currentHour = currentDate.toLocaleString('en-US', {
//     timeZone: chatTimeZone,
//     hour: 'numeric',
//     hour12: false,
//   });
//   const currentMinute = currentDate.toLocaleString('en-US', {
//     timeZone: chatTimeZone,
//     minute: 'numeric',
//   });
//   const currentTime = parseInt(currentHour) * 60 + parseInt(currentMinute);
//   const openingTimeMinutes =
//     parseInt(openingTime.split(':')[0]) * 60 +
//     parseInt(openingTime.split(':')[1]);
//   const closingTimeMinutes =
//     parseInt(closingTime.split(':')[0]) * 60 +
//     parseInt(closingTime.split(':')[1]);

//   if (closingTimeMinutes < openingTimeMinutes) {
//     return (
//       currentTime >= openingTimeMinutes || currentTime <= closingTimeMinutes
//     );
//   } else {
//     return (
//       currentTime >= openingTimeMinutes && currentTime <= closingTimeMinutes
//     );
//   }
// }

/**
 * @param {String} selector The selector or the chat name
 */
async function checkChatName(selector, chatType) {
  const dispalyedChatTitle = await gcHelp.getText(t, selector);
  let titleToCompare = '';
  switch (chatType) {
    case 'Customer Support':
      titleToCompare = CommonData.botTitle;
      break;
    case 'Beauty Chat':
      titleToCompare = CommonData.agentTitle;
      break;
    case 'Test':
      titleToCompare = CommonData.agentTitle;
      break;
    default:
      titleToCompare = CommonData.genericTitle;
      break;
  }
  return gcHelp.compareVal(
    dispalyedChatTitle,
    titleToCompare,
    'Chat name displayed',
    'Chat name expected'
  );
}

step('GC Initialize Helix', async function () {
  // Initialize the selectors from DB
  await initFrameworkSettings();
});

step('GC Mobile Device Emulation', async function () {
  await t.emulateDevice(emulationDevice);
  gauge.message('Emulation device: ' + emulationDevice);
});

step(
  'GC Configuring the prerequisites like set cookies, revision tag',
  async function () {
    await t.setConfig({ navigationTimeout: parseInt(timeoutSetting, 10) });
    await Helper.setWindowSize(Util.ScreenSizes['1040p'], t);
    await Helper.setWAFCookie(siteDefinition, t);
    await Helper.setAdroll(siteDefinition, t);
    await Helper.setAkamaiBypass(siteDefinition, t);
    await Helper.setApiEnv(siteDefinition, t);
    await Helper.getPerlgemEnvCookie(siteDefinition, t);
    await Helper.setOtherCookies(siteDefinition, t);
    await Helper.setRevisionTag(siteDefinition, t);
    globalDevice = siteDefinition.executionContext.platform.toUpperCase();
    globalURL = siteDefinition.executionContext.url;
  }
);

step(
  'GC User is able to navigate to web page for <webPage>',
  async function (webPage) {
    let targetURL = '';
    switch (webPage) {
      case 'MPP':
        targetURL = globalURL + CommonData.mppURL;
        break;
      case 'SPP':
        targetURL = globalURL + CommonData.sppURL;
        break;
      case 'LP':
        targetURL = CommonData.lpURL;
        break;
      default:
        targetURL = globalURL;
        break;
    }
    await t.goto(targetURL, {
      waitForEvents: ['DOMContentLoaded'],
    });
    gauge.message(`${webPage} Page is displayed: ${targetURL}`);
    takeScreenshot(globalDevice);
  }
);

step('GC Accept cookies if applicable', async function () {
  if (
    cookieLocaleSet1.includes(CommonData.locale) ||
    CommonData.region === 'EMEA'
  ) {
    await ifVisible(cookieAcceptButton, waitTimeOutLong);
    await scrollAndClick(cookieAcceptButton, false);
    gauge.message(messages.cookiesAccepted);
  } else {
    gauge.message(messages.stepNotApplicable);
    await t.waitFor(waitTimeStandard);
  }
});

step('GC Close pop-ups', async function () {
  await gcHelp.popUpClose(t, popups);
  await t.press('Escape', { waitForNavigation: false });
});

// Accept Cookies if needed and verify script[class="optanon-category-3"] type is equals to text/javascript (Not needed for NA)

step(
  'GC User is able to click livechat button for <chatType>',
  async function (chatType) {
    let targetChatPC = '';
    let targetChatMOB = '';
    let targetChat = '';
    let vendor = '';
    switch (chatType) {
      case 'Customer Support':
        targetChatPC = drawerCustomerSupportPC;
        targetChatMOB = drawerCustomerSupportMOB;
        break;
      case 'Beauty Chat':
        targetChatPC = drawerBeautyAgentPC;
        targetChatMOB = drawerBeautyAgentMOB;
        break;
      default:
        // Nothing to execute
        break;
    }
    takeScreenshot(globalDevice);
    if (globalDevice === 'PC') {
      targetChat = targetChatPC;
    } else {
      targetChat = targetChatMOB;
    }
    if (chatType === 'Test') {
      vendor = await clickChat(chatBtnTest, chatBtnTest, targetChat);
    } else {
      vendor = await clickChat(chatBtnPC, chatBtnMobile, targetChat);
    }
    gauge.message('Vendor: ' + vendor);
    globalInScenario.put('Chat Type', chatType);
    globalInScenario.put('Chat Drawer', targetChat);
    globalInScenario.put('Vendor', vendor);
    gauge.message('Live Chat button is clicked');
  }
);

step(
  'GC User is able to view livechat window',
  // Notes to self: AV-MX seems closed all the time
  { continueOnFailure: true },
  async function () {
    // Check if container for chat appeared
    if (!globalInScenario.get('Vendor')) {
      assert(!matchCondition, messages.chatWindowNotAvailable);
    } else {
      // Wait for all the loading indicators to dissapear.
      if (chatLoadingLeavesDOM !== '') {
        await waitForNotExists(chatLoadingLeavesDOM, waitTimeOutLong);
      }
      if (chatLoadingStaysDOM !== '') {
        await waitForNotVisible(chatLoadingStaysDOM, waitTimeOutLong);
      }
      takeScreenshot(globalDevice);
    }
    // TO DO
    // Check if chat with agent is in opening hours
    // const isOpen = isChatOpen();
    // globalInScenario.put('Is Chat Open', isOpen);
  }
);

step('GC Accept in-chat privacy policy', async function () {
  // Accept privacy policy if applicable
  const vendor = globalInScenario.get('Vendor');
  if (privacyCheck !== '' && vendor === 'Salesforce') {
    await scrollAndClick(privacyCheck, false);
    gauge.message('Privacy policy was closed.');
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'GC Verify if brand image is displayed correctly',
  { continueOnFailure: true },
  async function () {
    // Check brand image if applicable
    const vendor = globalInScenario.get('Vendor');
    if (vendor === 'Salesforce') {
      gauge.message(messages.stepNotApplicable);
    } else {
      // Logo
      if (brandImage === '') {
        gauge.message('Brand Logo is NOT applicable.');
      } else if (await ifVisible(brandImage, waitTimeOutMiddle)) {
        gauge.message('Brand Logo is displayed as expected');
      } else {
        assert(!matchCondition, 'Brand Logo is NOT displayed!');
      }
      // Agent/Brand image
      if (agentImage === '') {
        gauge.message('Brand Image is NOT applicable.');
      } else if (await ifVisible(agentImage, waitTimeOutMiddle)) {
        gauge.message('Brand Image is displayed as expected');
      } else {
        assert(!matchCondition, 'Brand Image is NOT displayed!');
      }
      takeScreenshot(globalDevice);
    }
  }
);

step(
  'GC User is able to message on the chat window <topic>',
  async function (topic) {
    // Select chat topic if needed.
    let targetTopic = '';
    switch (topic) {
      case 'Track Order':
        targetTopic = chatChipOrder;
        break;
      case 'Beauty Advice':
        targetTopic = chatChipBeauty;
        break;
      default:
        // Nothing to execute
        break;
    }
    //  If a drawer system exists, it means the chat topic should be pre-selected
    if (await ifVisible(chatChips, waitTimeStandard)) {
      await scrollAndClick(targetTopic, false);
    }
    await gcHelp.writeInto(t, CommonData.messageGeneric, chatInput);
    await t.waitFor(1000);
    await t.press('Enter', { delay: 10, waitForNavigation: false });
    await t.waitFor(6000);
    // Imie czatu
    // Check  chat name. TO DO
    // If type was preselected, it should match the bot or agent. Else -generic.
    const titleCheck = await checkChatName(
      chatTitle,
      globalInScenario.get('Chat Type')
    );
    takeScreenshot(globalDevice);
    if (!titleCheck) {
      assert(!matchCondition, messages.valuesNotMatch);
    }
  }
);

step('GC User is able to send the survey', async function () {
  //
});

step('GC Click close the chat', async function () {
  await scrollAndClick(chatClose, false);
  await scrollAndClick(chatConfirmClose, false);
  if (await ifVisible(chatClose, waitTime)) {
    await scrollAndClick(chatClose, false);
  }
  await waitForNotExists(chatWindowContainer, waitTimeStandard);
  takeScreenshot(globalDevice);
});

const lpAgentAvatar = '.top-level-menu-switch.agent-avatar';
const lpCloseArea = '.connection-profile-close-arrow';
step('GC Log in to Live Person account', async function () {
  if (await ifVisible('#siteNumber', waitTimeStandard)) {
    await gcHelp.writeInto(t, CommonData.regionNumber, '#siteNumber');
    await scrollAndClick('.login-button.primary', false);
    await waitForNotVisible('#loader .iconLoader', waitTimeStandard);
    await gcHelp.writeInto(t, 'jszajnow', '#userName');
    await gcHelp.writeInto(t, 'Pracowe44!', '#sitePass');
    await scrollAndClick('.login-button.primary', false);
    await ifVisible('.startLoaderImg', waitTimeStandard);
    await waitForNotExists('.startLoaderImg', waitTimeStandard);
    if (await ifVisible(lpAgentAvatar, waitTimeStandard)) {
      gauge.message('Logged in.');
      if (await ifVisible(lpCloseArea, waitTimeStandard)) {
        await scrollAndClick(lpCloseArea, false);
      }
      takeScreenshot(globalDevice);
    } else {
      assert(!matchCondition, 'USER WAS NOT LOGGED IN!');
    }
  } else {
    assert(!matchCondition, 'LOG IN PAGE NOT LOADED PROPERLY!');
  }
});

const lpLogoutBtn = "[v-tooltip='Logout']";
const lpEndSessionBtn = '.actionBtn button';
const lpLoginContainer = '.container #welcomeLabel';
step('GC Log out from Live Person account', async function () {
  await scrollAndClick(lpAgentAvatar, false);
  await scrollAndClick(lpLogoutBtn, false);
  await scrollAndClick(lpEndSessionBtn, false);
  if (await ifVisible(lpLoginContainer, waitTimeStandard)) {
    gauge.message('Logged out.');
    takeScreenshot(globalDevice);
  } else {
    assert(!matchCondition, 'NOT LOGGED OUT!');
  }
});

const lpAgentOnline = "[lp-data-at='status-item-Online']";
const lpAgentAway = "[lp-data-at='status-item-Away']";
const lpAgentLoading = "[data-lp-at='avatar-loader-display']";
step('GC Set agent status to <status>', async function (status) {
  let targetStatus;
  if (status === 'Online') {
    targetStatus = lpAgentOnline;
  } else if (status === 'Away') {
    targetStatus = lpAgentAway;
  }
  await waitForNotExists(lpAgentLoading, waitTimeStandard);
  await ifVisible(lpAgentAvatar, waitTimeStandard);
  await scrollAndClick(lpAgentAvatar, false);
  await scrollAndClick(targetStatus, false);
  takeScreenshot(globalDevice);
});

const lpConversationLoding = "[aria-label='Loading']";
const lpConversation = 'div.conversation-preview';
const lpConversationStatus =
  'div.conversation-preview div.conversation-status i';
const lpConversationKebab =
  "[aria-label='Additional conversation options'].action-menu";
const lpConversationClose = 'li.close-conversation-action';
const lpConversationRemove = 'li.deselect-conversation-action';
const lpConfirmClose = ".inner-dialog [data-test='primary_button'].le-button";
const lpEntryPage =
  '.consumer-info-item.item-container.consumerInfo_referrer a';
const lpConversationID = '.conversationInfo_conversationId .value';
const lpSkill = '.conversationInfo_skill .value';
step(
  'GC Close old conversations',
  { continueOnFailure: true },
  async function () {
    let statuses = await gcHelp.getElementsList(t, lpConversationStatus);
    let prodID;
    for (let i = 0; i < statuses.length; i++) {
      const status = await gcHelp.getAttributeElement(
        statuses,
        i,
        'aria-label'
      );
      // Closing conversatoins each time, so each time must clisk first one.
      await gcHelp.scrollToAndClickElement(t, lpConversation, 0, false);
      await waitForNotExists(lpConversationLoding, waitTimeStandard);
      if (status.includes('Overdue')) {
        const entry = await gcHelp.getAttributeSelector(t, lpEntryPage, 'href');
        if (
          !entry.includes('.stage.') &&
          !entry.includes('.dev.') &&
          !entry.includes('temp')
        ) {
          const skill = await gcHelp.getText(t, lpSkill);
          prodID = await gcHelp.getText(t, lpConversationID);
          takeScreenshot(globalDevice);
          gauge.message(
            `Conversation ID: ${prodID}, \n Entry URL: ${entry}, \n Skill: ${skill}.`
          );
        }
      }
      await scrollAndClick(lpConversationKebab, false);
      await scrollAndClick(lpConversationClose, false);
      await scrollAndClick(lpConfirmClose, false);
      await scrollAndClick(lpConversationKebab, false);
      await scrollAndClick(lpConversationRemove, false);
      // Refreshing conversations due to conversations limit.
      const newLength = await gcHelp.getElementsList(t, lpConversationStatus);
      if (newLength.length > statuses.length) {
        statuses = newLength;
      }
    }
    if (prodID) {
      assert(!matchCondition, 'USER ENTERED FROM PROD SITE!');
    }
  }
);

step('GC Select incoming message', async function () {
  await ifVisible(lpConversation, waitTimeStandard);
  await gcHelp.scrollToAndClickElement(t, lpConversation, 0, false);
  await waitForNotExists(lpConversationLoding, waitTimeStandard);
  takeScreenshot(globalDevice);
});

step('GC Select a product for product card', async function () {
  await t.goto(CommonData.prodURL + CommonData.sppURL, {
    waitForEvents: ['DOMContentLoaded'],
  });
});

step('GC Send a product card', async function () {
  await t.waitFor(5000);
  const product = CommonData.prodURL + CommonData.sppURL;
  // await t.write(product, t.into(t.textBox({placeholder:"Enter Product Link"})));
  await gcHelp.writeInto(t, product, '.search__input');
  await scrollAndClick('.button--main', false);
  await t.waitFor(5000);
  await scrollAndClick('.product-item__buttons .button--main', false);
  takeScreenshot(globalDevice);
  await scrollAndClick(
    "[data-test='primary_button'] button.variant-primary.size-default",
    false
  );
  await t.waitFor(5000);
});

const productCard = ".lp-json-pollock";
const productCardStyled = '.lp-json-pollock.card';
step(
  'GC Recieve a product card',
  { continueOnFailure: true },
  async function () {
    if (await ifVisible(productCard, waitTimeStandard)) {
      gauge.message('Product Card is recieved');
      if (await ifVisible(productCardStyled, waitTimeStandard)) {
        gauge.message('Product Card recieved with styling.');
      } else {
        assert(!matchCondition, 'PRODUCT CARD DOES NOT HAVE STYLING!');
      }
      takeScreenshot(globalDevice);
    } else {
      assert(!matchCondition, 'PRODUCT CARD IS NOT RECIEVED!');
    }
  }
);

step('GC Open a new tab', async function () {
  await t.openTab();
});

step('GC Switch to <tab>', async function (tab) {
  let targetTab;
  if (tab === 'Brand.com') {
    targetTab = globalURL;
  } else if (tab === 'LivePerson') {
    targetTab = CommonData.lpMessages;
  }
  await t.switchTo(targetTab);
});
