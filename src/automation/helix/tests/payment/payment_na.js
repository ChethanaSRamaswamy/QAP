// This file is common template for US UK and CA

// Variable Declaration
var CommonData = {};
var selectAfterpay = '';
var enterPassword = '';
var enterEmail = '';
var continueAfterpay = '';
var loginAfterPay = '';
var submitAfterpay = '';
var continueToProceed = '';
var selectPaypal = '';
var ppMobCheckoutCreditCard = '';
var ppMobCheckout = '';
var continuePaypal = '';
var continueToLoginPaypal = '';
var enterPasswordPaypal = '';
var enterEmailPaypal = '';
var continueToProceedPaypal = '';
var ppPlaceOrder = '';
var ppOrderConfirmationMsgid = '';
var ppPlaceordervalidation = '';
var waitFortime = '';
var expressPaypalCheckout = '';
var ppCheckout = '';
var submitPaypal = '';
var ppRadiobutton = '';
var confirmPaypal = '';
var loadingTime = '';
var timeout = '';
var pollingTime = '';
var ppUseBillingAddress = '';
var ppReturnUserSelectAddress = '';
var ppOrderPagepopupClose = '';
var ppMobOrderpagepopupclose = '';
var ppNavigateSigninurl = '';
var ppSignoutButton = '';
var ppNeedToClickLogInLinkAgain = '';
var ppReturnUserEmailId = '';
var newemail = '';
var ppReturnUserPWD = '';
var ppReturnUserLoginButton = '';
var confirmPaymentPaypal = '';
var ppreturnUserPaymentLinkText = '';
var ppreturnUserNewPaymentbutton = '';
var continueToLogin = '';
var confirmurl = '';
var getOrderNumber = '';
var ppSample = '';
var toplaceorder = process.env.PLACEORDER || 'true'; // true to place order and false to not place the order
var t = require('taiko');

const assert = require('assert');
let siteDefinition, source, NullDataException;
const Helper = require('../../helpers/helper');
const Util = require('../../../../utilities/util');
const Hengine = require('../../../../datainterface/providers/hengine');
const feature = 'PAYMENT';

const messages = {
  stepNotApplicable: 'This step is not applicable for this Brand/Locale',
};

function reinitialize() {
  RUID = [
    CommonData.RID,
    CommonData.RID1,
    CommonData.RID2,
    CommonData.RID3,
    CommonData.RID4,
    CommonData.RID5,
    CommonData.RID6,
    CommonData.RID7,
    CommonData.RID8,
    CommonData.RID9,
    CommonData.RID10,
    CommonData.RID11,
    CommonData.RID12,
    CommonData.RID13,
    CommonData.RID14,
    CommonData.RID15,
  ];

  SCRUID = [CommonData.SCRID, CommonData.SCRID1, CommonData.SCRID2];
}

step('NAPAYMENT Initialize Helix', async function () {
  // Initialize the selectors from DB
  await initFrameworkSettings();
});

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
    // eslint-disable-next-line no-undef
    assert(!matchCondition, NullDataException.message.join('\n'));
  }

  // Override this
  Object.assign(this, source);
  // Taiko API overrides
  t = await Helper.initAutoHeal(siteDefinition, t);

  // Re-initialize variables
  reinitialize();

  // Delete all the cookies
  await t.deleteCookies();

  gauge.message('ENVIRONMENT : ' + siteDefinition.executionContext.environment);
}

// AfterPay

async function afSelectAfterpay() {
  if (selectAfterpay !== '') {
    await t.evaluate(await t.$(selectAfterpay), (ele) => ele.focus());
    await t.evaluate(await t.$(selectAfterpay), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function afContinueAfterpay() {
  if (continueAfterpay !== '') {
    await t.evaluate(await t.$(continueAfterpay), (ele) => ele.click());
    if (await (await t.$(continueAfterpay)).exists(timeout, pollingTime)) {
      await t.evaluate(await t.$(continueAfterpay), (ele) => ele.click());
      await t.waitFor(waitFortime);
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
}

async function returnUserPaymentLinkText() {
  if (ppreturnUserPaymentLinkText !== '') {
    // Return User new paymet link is applicable for few Brand/Locale/platform(PC/MOB)
    try {
      await t.evaluate(await t.$(ppreturnUserPaymentLinkText), (ele) =>
        ele.click()
      );
    } catch (e) {
      gauge.message(
        'Return User new paymet link is not displayed and hence this step is skipped'
      );
    }
  }
}

async function returnUserNewPaymentbutton() {
  if (ppreturnUserNewPaymentbutton !== '') {
    // Return User new paymet button is applicable for few Brand/Locale/platform(PC/MOB)
    try {
      await t.evaluate(await t.$(ppreturnUserNewPaymentbutton), (ele) =>
        ele.click()
      );
    } catch (e) {
      gauge.message(
        'Return User new paymet button is not displayed and hence this step is skipped'
      );
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function afContinueToLogin() {
  if (continueToLogin !== '') {
    await t.evaluate(await t.$(continueToLogin), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function afEnterPassword() {
  if (enterPassword !== '') {
    await t.write(CommonData.Password, t.into(await t.$(enterPassword)));
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function afEnterEmail() {
  if (enterEmail !== '') {
    await t.write(CommonData.EnterEmail, t.into(await t.$(enterEmail)));
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function afClickLoginAfterpay() {
  if (loginAfterPay !== '') {
    if (await (await t.$(loginAfterPay)).exists(timeout, pollingTime)) {
      await t.evaluate(await t.$(loginAfterPay), (ele) => {
        ele.focus();
        ele.click();
      });
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
}

async function afClickonSubmitAfterpay() {
  if (submitAfterpay !== '') {
    await t.waitFor(waitFortime);
    await t.evaluate(await t.$(submitAfterpay), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function afContinueToProceed() {
  if (continueToProceed !== '') {
    await t.evaluate(await t.$(continueToProceed), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function signoutButton() {
  if (ppSignoutButton !== '') {
    await t.evaluate(await t.$(ppSignoutButton), (ele) => ele.click());
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function clickLogInLinkAgain() {
  if (ppNeedToClickLogInLinkAgain !== '') {
    await t.evaluate(await t.$(ppNeedToClickLogInLinkAgain), (ele) =>
      ele.click()
    );
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function enterReturnUserDetails() {
  if (ppReturnUserEmailId !== '') {
    await t.evaluate(await t.$(ppReturnUserEmailId), (ele) => ele.focus());
    await t.write(newemail, t.into(await t.$(ppReturnUserEmailId)));
  }
  if (ppReturnUserPWD !== '') {
    await t.write(CommonData.NPWD, t.into(await t.$(ppReturnUserPWD)));
  }
  if (ppReturnUserLoginButton !== '') {
    await t.evaluate(await t.$(ppReturnUserLoginButton), (ele) => ele.click());
    gauge.screenshot();
  }
}

// PAYPAL

async function ppSelectPaypal() {
  if (selectPaypal !== '') {
    await t.evaluate(await t.$(selectPaypal), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function ppContinuePaypal() {
  if (continuePaypal !== '') {
    await t.evaluate(await t.$(continuePaypal), (ele) => ele.click());
    if (await (await t.$(continuePaypal)).exists(timeout, loadingTime)) {
      await t.evaluate(await t.$(continuePaypal), (ele) => ele.click());
      await t.waitFor(waitFortime);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function ppContinueToLogin() {
  if (continueToLoginPaypal !== '') {
    await t.evaluate(await t.$(continueToLoginPaypal), (ele) => ele.click());
    await t.waitFor(loadingTime);
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function ppEnterPassword() {
  if (enterPasswordPaypal !== '') {
    await t.write(
      CommonData.EXPPassword,
      t.into(await t.$(enterPasswordPaypal))
    );
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function ppEnterEmail() {
  if (enterEmailPaypal !== '') {
    await t.write(CommonData.EXPEmail, t.into(await t.$(enterEmailPaypal)));
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function ppClickonConfirmPaypal() {
  if (confirmPaymentPaypal !== '') {
    await t.evaluate(await t.$(confirmPaymentPaypal), (ele) => ele.click());
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function ppContinueToProceed() {
  if (continueToProceedPaypal !== '') {
    await t.evaluate(await t.$(continueToProceedPaypal), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function ppClickOnPlaceOrder() {
  if (toplaceorder === 'true' && ppPlaceOrder !== '') {
    try {
      // Click On Place order is applicable for few Brand/Locale/platform(PC/MOB)
      await t.evaluate(await t.$(ppPlaceOrder), (ele) => {
        ele.focus();
        ele.click();
      });
    } catch (e) {
      gauge.message(
        'View Cart Popup Close is not applicable for this Brand/Locale'
      );
    }
    gauge.screenshot();
  }
}

async function ppPlaceOrderValidation() {
  if (toplaceorder === 'true' && ppPlaceordervalidation !== '') {
    await t.waitFor(waitFortime); // As we developed this step for STAGE for 14 brands each brand loading time is different when its navigating back from 3rd party tool, we tried with all Is exists and Is visible some brand not worked so we used static wait
    if (await (await t.$(ppOrderConfirmationMsgid)).exists()) {
      assert(true);
      confirmurl = await t.currentURL();
      getOrderNumber = await (await t.$(ppOrderConfirmationMsgid)).text();
      assert(confirmurl.includes(ppPlaceordervalidation));
      gauge.message('Order placed successfully');
      gauge.message(getOrderNumber);
      console.log(getOrderNumber);
      gauge.screenshot();
    } else {
      gauge.message('Order not placed');
      gauge.screenshot();
      assert(false);
    }
  }
}

// Express paypal

async function ppExpresspaypalcheckout() {
  if (expressPaypalCheckout !== '') {
    await t.waitFor(waitFortime);
    await t.focus(await t.$(expressPaypalCheckout));
    await t.press(['Shift', 'Tab']);
    await t.press('Enter');
  }
  if (ppCheckout !== '') {
    await t.waitFor(waitFortime);
    await t.focus(await t.$(ppCheckout));
    await t.press('Tab');
    await t.press('Enter');
  }
  gauge.screenshot();
}

async function ppSubmitPaypal() {
  if (submitPaypal !== '') {
    let loopCount = 1;
    if (await (await t.$(ppRadiobutton)).exists(timeout, pollingTime)) {
      while (
        (await (await t.$(ppRadiobutton)).attribute('checked')) !== 'true'
      ) {
        await t.waitFor(waitFortime); // As we developed this step for STAGE for 14 brands each brand loading time is different when its navigating back from 3rd party tool, we tried with all Is exists and Is visible some brand not worked so we used static wait
        loopCount++;
        if (loopCount === 20) {
          break;
        }
      }
      if (loopCount !== 20) {
        try {
          await t.evaluate(await t.$(submitPaypal), (ele) => ele.click());
        } catch (e) {}
      } else {
        assert(
          false,
          'Paypal radio button is either not available or not loaded properly.'
        );
      }
      gauge.screenshot();
    } else {
      assert(false, 'The NAPAYMENT page is not loaded');
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function ppConfirmPaypal() {
  if (confirmPaypal !== '') {
    await t.waitFor(pollingTime); // As we developed this step for STAGE for 14 brands each brand loading time is different when its navigating back from 3rd party tool, we tried with all Is exists and Is visible some brand not worked so we used static wait
    await t.evaluate(await t.$(confirmPaypal), (ele) => ele.click());
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function ExpPPMOBCHECKOUT() {
  if (ppMobCheckoutCreditCard !== '') {
    await t.waitFor(waitFortime);
    await t.focus(await t.$(ppMobCheckoutCreditCard));
    await t.press(['Shift', 'Tab']);
    await t.press('Enter');
  }
  if (ppMobCheckout !== '') {
    await t.waitFor(waitFortime);
    await t.focus(await t.$(ppMobCheckout));
    await t.press('Tab');
    await t.press('Enter');
  }
  gauge.screenshot();
}

async function UseBillingaddress1() {
  if (ppUseBillingAddress !== '') {
    // Click on Use Billing address is applicable for few Brand/Locale/platform(PC/MOB)
    await t.evaluate(await t.$(ppUseBillingAddress), (ele) => ele.click());
  }
}

async function selectreturnuseraddress() {
  if (ppReturnUserSelectAddress !== '') {
    try {
      await t.dropDown({ name: ppReturnUserSelectAddress }).select({
        index: indexvalue,
      });
    } catch (e) {
      gauge.message(
        'click on adyen button is not displayed and hence this step is skipped'
      );
    }
    gauge.screenshot();
  }
}

async function afterplacingorderpopup() {
  if (toplaceorder === 'true' && ppOrderPagepopupClose !== '') {
    await t.waitFor(waitFortime);
    await (await t.$(ppOrderPagepopupClose)).exists(pollingTime, timeout);
    try {
      await t.evaluate(await t.$(ppOrderPagepopupClose), (ele) => {
        ele.focus();
        ele.click();
      });
      // orderpage Popup Close is applicable for few Brand/Locale/platform(PC)
    } catch (e) {
      gauge.message(
        'Orderpage Popup is not displayed and hence this step is skipped'
      );
    }
  }
}

async function MOBafterplacingorderpopup() {
  if (toplaceorder === 'true' && ppMobOrderpagepopupclose !== '') {
    await (await t.$(ppMobOrderpagepopupclose)).exists(pollingTime, timeout);
    await t.waitFor(waitFortime);
    // orderpage Popup Close is applicable for few Brand/Locale/platform(MOB)
    try {
      await t.evaluate(await t.$(ppMobOrderpagepopupclose), (ele) => {
        ele.focus();
        ele.click();
      });
    } catch (e) {
      gauge.message(
        'Orderpage Popup is not displayed and hence this step is skipped'
      );
    }
  }
}

async function NavigatetoSignInPage() {
  if (ppNavigateSigninurl !== '') {
    await t.goto(siteDefinition.executionContext.url + ppNavigateSigninurl, {
      waitForEvents: ['DOMContentLoaded'],
    });
  }
}

async function samplePage() {
  if (ppSample !== '') {
    if (await (await t.$(ppSample)).exists(timeout, pollingtime)) {
      await t.evaluate(await t.$(ppSample), (ele) => ele.click());
      gauge.screenshot();
    }
  } else {
    gauge.message('This step is not applicable for this Brand/Locale');
  }
}

// SPEC OPTIMIZATION STEPS

step(
  'NAPAYMENT Verify that the user is able to select paypal payment',
  async function () {
    await returnUserPaymentLinkText();
    await returnUserNewPaymentbutton();
    await ppSelectPaypal();
    await ppContinuePaypal();
    await ppEnterEmail();
    await ppContinueToProceed();
    await ppEnterPassword();
    await ppContinueToLogin();
    await samplePage();
    await ppClickonConfirmPaypal();
  }
);

step(
  'NAPAYMENT Verify that the user is able to select expresspaypal payment',
  async function () {
    await ppExpresspaypalcheckout();
    await ppEnterEmail();
    await ppContinueToProceed();
    await ppEnterPassword();
    await ppContinueToLogin();
    await ppClickonConfirmPaypal();
    await ppSubmitPaypal();
    await ppConfirmPaypal();
  }
);

step(
  'NAPAYMENT Verify that the user is able to select afterpay payment',
  async function () {
    await returnUserPaymentLinkText();
    await returnUserNewPaymentbutton();
    await afSelectAfterpay();
    await afContinueAfterpay();
    await UseBillingaddress1();
    await afClickLoginAfterpay();
    await afEnterEmail();
    await afContinueToProceed();
    await afEnterPassword();
    await afContinueToLogin();
    await afClickonSubmitAfterpay();
  }
);

step(
  'NAPAYMENT Verify the user is able to login as return user',
  async function () {
    await signoutButton();
    await clickLogInLinkAgain();
    await enterReturnUserDetails();
  }
);

step(
  'NAPAYMENT Verify that the user is able to place the order successfully',
  async function () {
    await UseBillingaddress1();
    await selectreturnuseraddress();
    await ppClickOnPlaceOrder();
    await afterplacingorderpopup();
    await ppPlaceOrderValidation();
    await afterplacingorderpopup();
    await MOBafterplacingorderpopup();
  }
);
