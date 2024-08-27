var t = require('taiko');
const Helper = require('../../helpers/helper');
const Util = require('../../../../utilities/util');
let Hengine = require('../../../../datainterface/providers/hengine');
const assert = require('assert');
const matchCondition = true;
let liveChatFlag = true;
let popupFlag = false;
let siteDefinition, source, NullDataException;

const feature = 'Live Chat';
var CommonData = {};
var timeoutSetting = '';
var LCD = '';
var chatClickBtn = '';
var MPPURL = '';
var cookieAcceptButton = '';
var SPPURL = '';
var isShadowDom = '';
var chatBtnPC = '';
var chatBtnMobile = '';
var chatBtnPrimary = '';
var chatInvitationClose = '';
var brandImage = '';
var LCDTitle = '';
var predefinedMessage = '';
var chatWindowMessage = '';
var chatWindowMessageIndex = '';
var enterYourName = '';
var enterYourID = '';
var submitSurvey = '';
var noService = '';
var nextSurvey = '';
var privacyCheck = '';
var selectQusContainer = '';
var LCDChatInput = '';
var closePopupBtn = '';
var endChat = '';
var LPSurvey = '';
var popup = '';
var primaryPopup = '';
var otherPopup = '';
var emulationDevice = '';
const waitTimeOut = 60000;
const awaitTime = 1000;
const liveChatRetryCount = 5;
const pageDownPosition = 300;
const delayTime = 100;
const messages = {
  chatWindowNotAvailable:
    'Chat Window is not displayed after clicking the chat icon 4 times within  60 sec',
  stepNotApplicable: 'This step is not applicable for this brand/locale',
  liveChatUnavailable: 'Live chat service is currently unavailable',
  popupClosed: 'The Popup window is closed',
};

async function initFrameworkSettings() {
  // This should come from Gauge Tags inputs
  let tags = process.env.tags.split(',');
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

async function clickChat(chatPC, chatMobile, chatPrimary) {
  let chatWindowFlag = false;
  if (
    chatPrimary !== '' &&
    siteDefinition.executionContext.platform.toUpperCase() !== 'PC'
  ) {
    await t.scrollDown(pageDownPosition);
    await assert.ok(
      await (await t.$(chatPrimary)).exists(delayTime, waitTimeOut)
    );
    await t.scrollTo(await t.$(chatPrimary));
    await t.evaluate(await t.$(chatPrimary), (ele) => ele.tap(), {
      waitForNavigation: false,
    });
    await t.evaluate(await t.$(chatMobile), (ele) => ele.tap(), {
      waitForNavigation: false,
    });
    for (let i = 1; i < liveChatRetryCount; i++) {
      if (await (await t.$(LCD)).exists(delayTime, timeoutSetting)) {
        chatWindowFlag = true;
        break;
      } else {
        await t.evaluate(await t.$(chatMobile), (ele) => ele.click(), {
          waitForNavigation: false,
        });
        await t.evaluate(await t.$(chatPrimary), (ele) => ele.click(), {
          waitForNavigation: false,
        });
      }
    }
  } else if (siteDefinition.executionContext.platform.toUpperCase() !== 'PC') {
    await t.scrollDown(pageDownPosition);
    await (await t.$(chatMobile)).exists(delayTime, waitTimeOut);
    await t.scrollTo(await t.$(chatMobile));
    await t.evaluate(await t.$(chatMobile), (ele) => ele.tap(), {
      waitForNavigation: false,
    });
    if (chatClickBtn !== '') {
      await t.evaluate(await t.$(chatClickBtn), (ele) => ele.click(), {
        waitForNavigation: false,
      });
    }
    for (let i = 1; i < liveChatRetryCount; i++) {
      if (await (await t.$(LCD)).exists(delayTime, timeoutSetting)) {
        chatWindowFlag = true;
        break;
      } else {
        await t.evaluate(await t.$(chatMobile), (ele) => ele.tap(), {
          waitForNavigation: false,
        });
        await t.evaluate(await t.$(chatMobile), (ele) => ele.click(), {
          waitForNavigation: false,
        });
      }
    }
  } else {
    await t.scrollDown(pageDownPosition);
    await assert.ok(await (await t.$(chatPC)).exists(delayTime, waitTimeOut));
    await t.scrollTo(await t.$(chatPC));
    await t.hover(await t.$(chatPC));
    await t.evaluate(await t.$(chatPC), (ele) => ele.click(), {
      waitForNavigation: false,
    });
    if (chatClickBtn !== '') {
      await t.evaluate(await t.$(chatClickBtn), (ele) => ele.click(), {
        waitForNavigation: false,
      });
    }
    for (let i = 1; i < liveChatRetryCount; i++) {
      if (await (await t.$(LCD)).exists(delayTime, timeoutSetting)) {
        chatWindowFlag = true;
        break;
      } else {
        await t.evaluate(await t.$(chatPC), (ele) => ele.click(), {
          waitForNavigation: false,
        });
      }
    }
  }
  if (!chatWindowFlag) {
    gauge.message(messages.chatWindowNotAvailable);
    assert(!matchCondition, messages.chatWindowNotAvailable);
  }
}

step('LCD Initialize Helix', async function () {
  // Initialize the selectors from DB
  await initFrameworkSettings();
});

step('LCD Mobile Device Emulation', async function () {
  await t.emulateDevice(emulationDevice);
  gauge.message('Emulation device: ' + emulationDevice);
});

step(
  'LCD Configuring the prerequisites like set cookies, revision tag',
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
  }
);

async function acceptCookies() {
  if (cookieAcceptButton !== '') {
    try {
      await t.waitFor(await t.$(cookieAcceptButton), waitTimeOut);
      await t.evaluate(await t.$(cookieAcceptButton), (ele) => {
        ele.focus();
        ele.click();
      });
    } catch (e) {
      gauge.message('Cookie acception is not applicable and hence skipped.');
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

step(
  'LCD Verify that the user is able to navigate to web page for <webPage>',
  async function (webPage) {
    switch (webPage) {
      case 'MPP':
        await t.goto(siteDefinition.executionContext.url + MPPURL, {
          waitForEvents: ['DOMContentLoaded'],
        });
        gauge.message('User is able to navigate to MPP: ' + MPPURL);
        gauge.screenshot();
        break;
      case 'SPP':
        await t.goto(siteDefinition.executionContext.url + SPPURL, {
          waitForEvents: ['DOMContentLoaded'],
        });
        gauge.message('User is able to navigate to SPP: ' + SPPURL);
        gauge.screenshot();
        break;
      default:
        await t.goto(siteDefinition.executionContext.url);
        gauge.screenshot();
        gauge.message('Home Page is displayed');
    }
    await acceptCookies();
  }
);

step(
  'LCD Verify that the user is able to click livechat button',
  async function () {
    if (chatInvitationClose !== '') {
      if (await (await t.$(chatInvitationClose)).exists()) {
        await t.click(await t.$(chatInvitationClose));
      }
    }
    let chatWindowFlag = false;
    if (chatBtnPC !== 0 || chatBtnMobile !== '') {
      if (isShadowDom === '1') {
        await t.click(await t.$(chatBtnPC));
        for (let i = 1; i < liveChatRetryCount; i++) {
          if (await (await t.$(LCD)).exists(delayTime, timeoutSetting)) {
            chatWindowFlag = true;
            break;
          }
        }
        if (!chatWindowFlag) {
          gauge.message(messages.chatWindowNotAvailable);
          assert(!matchCondition);
        }
      } else {
        await clickChat(chatBtnPC, chatBtnMobile, chatBtnPrimary);
      }
      gauge.message('Live Chat button is clicked');
      gauge.screenshot();
    }
  }
);

step(
  'LCD Verify that the user is able to view livechat window',
  { continueOnFailure: true },
  async function () {
    // Check the existence of the popup - Locator
    if (LCD !== '') {
      assert(matchCondition);
      if (isShadowDom === '1') {
        gauge.message('LCD title is NOT Available for this Brand/Locale');
        assert(matchCondition);
      } else {
        // Capture the title - var and Locator
        let chatTitle = 'Loading';
        while (chatTitle.includes('Loading')) {
          chatTitle = await (await t.$(LCDTitle)).text();
          await t.waitFor(awaitTime);
        }
        await t.waitFor(CommonData.Hi, waitTimeOut);
        // Compare the actual title with the expected value passed form the data file
        if (chatTitle.includes(CommonData.Hi)) {
          gauge.message(
            'LCD title text is displayed ' + chatTitle + ' as expected'
          );
          assert(matchCondition);
        } else {
          gauge.message(
            'LCD title text is not displayed as expected and it is ' +
              CommonData.Hi +
              ' but the actual title is ' +
              chatTitle
          );
          assert(!matchCondition);
        }
      }
      // Existence of the brand image locator
      if (brandImage !== '') {
        gauge.message('Brand Image is NOT Available in this Brand/Locale');
        assert(matchCondition);
      } else if (await (await t.$(brandImage)).exists()) {
        gauge.message('Brand Image is displayed as expected');
        assert(matchCondition);
      } else {
        gauge.message('Brand Image is NOT displayed');
        assert(matchCondition);
      }
      gauge.message('Live Chat Popup is displayed');
      gauge.screenshot();
    } else {
      gauge.message('Live Chat Popup is NOT displayed');
      assert(!matchCondition);
    }
  }
);

async function chatVerification(chatMgsText, chatWindowMsgLocator) {
  const MsgChatText = await (await t.$(chatWindowMsgLocator)).text();
  if (chatMgsText.toLowerCase() === MsgChatText.toLowerCase()) {
    assert(matchCondition);
    gauge.message('The message ' + MsgChatText + ' is entered successfully');
  } else {
    gauge.message(
      'The value entered is ' +
        chatMgsText +
        ' but the value displayed is ' +
        MsgChatText
    );
    assert(!matchCondition);
  }
}

step(
  'LCD Verify that the user is able to chat message on the chat window',
  async function () {
    // If live person privacy popup comes it's help to click the popup
    if (privacyCheck !== '') {
      await t.click(await t.$(privacyCheck), (ele) => ele.click());
    }
    if (enterYourName !== '') {
      // Enter survey details
      if (await (await t.$(enterYourName)).exists()) {
        await t.write(CommonData.yourName, t.into(await t.$(enterYourName)), {
          delay: delayTime,
        });
        await t.focus(await t.$(enterYourName), { waitForNavigation: false });
        if (
          siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE'
        ) {
          await t.click(await t.$(nextSurvey), (ele) => ele.click());
        }
        if (await (await t.$(enterYourName)).exists()) {
          await t.write(CommonData.yourID, t.into(await t.$(enterYourID)), {
            delay: delayTime,
          });
          await t.focus(await t.$(enterYourID), { waitForNavigation: false });
          if (
            siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE'
          ) {
            await t.click(await t.$(nextSurvey), (ele) => ele.click());
          }
        }
        if (selectQusContainer !== '') {
          await t.scrollDown(pageDownPosition);
          await t
            .dropDown(t.below(CommonData.selectQusLabel))
            .select(CommonData.selectOption);
        }
        await t.click(await t.$(submitSurvey), (ele) => ele.click());
        await t.waitFor(awaitTime);
        gauge.message('Survey sent succesfully');
      }
    } else if (noService && (await (await t.$(noService)).exists())) {
      assert(matchCondition, `${messages.liveChatUnavailable}`);
      liveChatFlag = false;
    } else {
      gauge.message(messages.stepNotApplicable);
    }
    if (predefinedMessage !== '' && liveChatFlag === true) {
      if (await (await t.$(predefinedMessage)).exists(delayTime, awaitTime)) {
        const predefMsgText = await (await t.$(predefinedMessage)).text();
        await t.click(await t.$(predefinedMessage), (ele) => ele.click());
        await t.waitFor(awaitTime);
        await chatVerification(predefMsgText, chatWindowMessage);
      }
      // Ensure the message is displayed on the chat window and matches the value passed
      await t.write(CommonData.chatMessage, t.into(await t.$(LCDChatInput)), {
        delay: delayTime,
      });
      await t.waitFor(awaitTime);
      await t.focus(await t.$(LCDChatInput), { waitForNavigation: false });
      await t.press('Enter');
      await t.waitFor(awaitTime);
      gauge.screenshot();
      if (isShadowDom === '') {
        await chatVerification(
          CommonData.chatMessage,
          '(' + chatWindowMessage + ')[' + chatWindowMessageIndex + ']'
        );
      }
      gauge.screenshot();
    } else {
      gauge.message(
        `${messages.stepNotApplicable} or ${messages.liveChatUnavailable}`
      );
    }
  }
);

step(
  'LCD Verify that the user is able to closing the conversation',
  async function () {
    // Click on End Coversation
    await t.evaluate(await t.$(closePopupBtn), (ele) => {
      ele.focus();
      ele.click();
    });
    // Click on Yes to close the Live Chat session
    await t.waitFor(awaitTime);
    if (await (await t.$(endChat)).exists(delayTime, awaitTime)) {
      gauge.screenshot();
      await t.evaluate(await t.$(endChat), (ele) => {
        ele.focus();
        ele.click();
      });
      await t.waitFor(awaitTime);
    }
    if (await (await t.$(LCD)).exists(delayTime, awaitTime)) {
      await t.evaluate(await t.$(closePopupBtn), (ele) => {
        ele.focus();
        ele.click();
      });
    }
    if (
      LPSurvey !== '' &&
      liveChatFlag === true &&
      (await (await t.$(closePopupBtn)).exists())
    ) {
      await t.evaluate(await t.$(closePopupBtn), (ele) => ele.click());
    }
    if (!(await (await t.$(LCD)).exists(delayTime, awaitTime))) {
      assert(matchCondition);
      gauge.message('Live Chat Popup is closed.');
      gauge.screenshot();
    }
  }
);

step('LCD Verify that the user is able to close the popup', async function () {
  if (popup !== '') {
    if (await (await t.$(popup)).exists()) {
      await Helper.closePopups(popup, t);
      gauge.message(messages.popupClosed);
      popupFlag = true;
    }
  }
  if (primaryPopup !== '') {
    if (await (await t.$(primaryPopup)).exists()) {
      await Helper.closePopups(primaryPopup, t);
      gauge.message(messages.popupClosed);
      popupFlag = true;
    }
  }
  if (otherPopup !== '') {
    if (await (await t.$(otherPopup)).exists()) {
      await Helper.closePopups(otherPopup, t);
      gauge.message(messages.popupClosed);
      popupFlag = true;
    }
  }
  if (!popupFlag) {
    gauge.message('This step is skipped since there is no popup displayed.');
  } else {
    gauge.message(messages.popupClosed);
  }
  await t.press('Escape');
  gauge.screenshot();
});
