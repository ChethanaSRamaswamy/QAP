var t = require('taiko');
let siteDefinition, source, NullDataException;
const Helper = require('../../helpers/helper');
const Util = require('../../../../utilities/util');
const assert = require('assert');

var feature = 'React Checkout';
var CommonData = {};
var continueToPayment = '';
var addressValidation = '';
var psarcoEditShippingAddress = '';
var clickNewBillingAddress = '';
var editAddressValidation = '';
var registerSignuplabel = '';
var registerFirstName = '';
var registerLastName = '';
var enterEmailAddress = '';
var enterPassword = '';
var acceptSignupTermsAndConditions = '';
var joinNowButton = '';
var accountPageTitle = '';
var billingFirstName = '';
var billingLastName = '';
var billingAddress1 = '';
var billingAddress2 = '';
var billingZipCode = '';
var billingPhone = '';
var billingCity = '';
var clickOnShippingDetailsContinueButton1 = '';
var enterOfferCode = '';
var clickOnOfferButton = '';
var validOfferMessage = '';
var autoOffer = '';
var giftWrapValidation = '';
var giftWrap = '';
var updateButton = '';
var pickUpStore = '';
var searchByCityName = '';
var storeName = '';
var enterPurchaserFirstName = '';
var enterPurchaserLastName = '';
var enterPurchaserPhone = '';
var enterPurchaserNewUserId = '';
var searchStore = '';
var selectStore = '';
var cityName = '';
var cityTextBox = '';
var selectDeliveryMethod = '';
var orderConfirmationMsgId = '';
var clickOnGuestUserNewUserSignupPlaceOrder = '';
var timeout = '';
let Hengine = require('../../../../datainterface/providers/hengine');
let Gen = require('../ReUsableFunction.js');
var generatedEmail = makeEmail();
var matchCondition = true;
const messages = {
  stepNotApplicable: 'This step is not applicable for this Brand/Locale',
  acctCreatedSuccess: 'Account created successfully',
  acctCreatedFail: 'Account not created',
  acctNavigation: 'Navigated to Account Page',
  validaddress: 'The valide address is expected',
  notvalidaddress: 'The valide address is not expected',
  orderCreated: 'Order Created successfully',
  orderNotCreated: 'Order not Created',
  giftWrapMsg: 'Giftwrap field is displayed',
  giftWrapMsgNotDisplayed: 'Giftwrap field is displayed',
};

// This file is common template for UK Region
function makeEmail() {
  var strValues = 'abcdefg12345';
  var strEmail = '';
  var strTmp;
  for (var i = 0; i < 10; i++) {
    strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
    strEmail = strEmail + strTmp;
  }
  strTmp = '';
  strEmail = strEmail + '@';
  for (var j = 0; j < 8; j++) {
    strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
    strEmail = strEmail + strTmp;
  }
  strEmail = strEmail + '.com';
  return strEmail;
}

step('UKRCO Initialize Helix', async function () {
  // Initialize the selectors from DB
  await initFrameworkSettings();
});

/******** RCO Steps ******/
step('UKRCO Click Continue to payment', async function () {
  if (continueToPayment.localeCompare('') !== 0) {
    await t.waitFor(timeout); //City and State dropdown values take time to autopopulate, so need to wait for few seconds.
    await t.evaluate(await t.$(continueToPayment), (ele) => ele.click());
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('UKRCO payment page shipping address validation', async function () {
  if (addressValidation.localeCompare('') !== 0) {
    await t.waitFor(timeout); //Takes time to load all the fields, so need to wait for few seconds.
    await t.evaluate(await t.$(addressValidation), (ele) =>
      ele.scrollIntoView()
    );
    var Expetedaddress = await (await t.$(addressValidation)).text();
    if (
      Expetedaddress.toUpperCase().search(
        CommonData.VALIDEADDRESS.toUpperCase()
      ) !== -1
    ) {
      gauge.screenshot();
      matchCondition = true;
      assert(matchCondition, messages.validaddress);
    } else {
      matchCondition = false;
      assert(matchCondition, messages.notvalidaddress);
    }
  }
});

step(
  'UKRCO PSARCO change Shipping address from Order summary',
  async function () {
    if (psarcoEditShippingAddress.localeCompare('') !== 0) {
      await t.evaluate(await t.$(psarcoEditShippingAddress), (ele) =>
        ele.click()
      );
      gauge.screenshot();
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step('UKRCO Click New Billing Address', async function () {
  if (clickNewBillingAddress.localeCompare('') !== 0) {
    await t.waitFor(timeout); //City and State dropdown values take time to autopopulate, so need to wait for few seconds.
    await t.evaluate(await t.$(clickNewBillingAddress), (ele) => ele.click());
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('UKRCO Edit shipping address validation', async function () {
  await t.waitFor(timeout); //Takes time to load all the fields, so need to wait for few seconds.
  var Expetedaddress = await (await t.$(editAddressValidation)).text();
  if (
    Expetedaddress.toUpperCase().search(CommonData.EFIRSTNAME.toUpperCase()) !==
    -1
  ) {
    gauge.screenshot();
    matchCondition = true;
    assert(matchCondition, messages.validaddress);
  } else {
    matchCondition = false;
    assert(matchCondition, messages.notvalidaddress);
  }
});
///////////////////////////////RCO Signup Steps //////////////////////////////
step(
  'UKRCO Verify that the user is able to click on register signup link',
  async function () {
    await (await t.$(registerSignuplabel)).exists(10000);
    if (registerSignuplabel.localeCompare('') !== 0) {
      await t.evaluate(await t.$(registerSignuplabel), (ele) => {
        ele.focus();
        ele.click();
      });
      gauge.screenshot();
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

//////Account Details/////////////////////////////////////
step(
  'UKRCO Verify that the user is able to enter register FIRSTNAME',
  async function () {
    if (registerFirstName.localeCompare('') !== 0) {
      await t.evaluate(await t.$(registerFirstName), (ele) => ele.focus());
      await t.write(CommonData.firstName, t.into(await t.$(registerFirstName)));
      gauge.screenshot();
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);
step(
  'UKRCO Verify that the user is able to enter register LASTNAME',
  async function () {
    if (registerLastName.localeCompare('') !== 0) {
      await t.evaluate(await t.$(registerLastName), (ele) => ele.focus());
      await t.write(CommonData.lastName, t.into(await t.$(registerLastName)));
      gauge.screenshot();
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step(
  'UKRCO Verify that the user is able to enter email address',
  async function () {
    if (enterEmailAddress.localeCompare('') !== 0) {
      await t.write(generatedEmail, t.into(await t.$(enterEmailAddress)));
      gauge.screenshot();
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step('UKRCO Verify that the user is able to enter password', async function () {
  if (enterPassword.localeCompare('') !== 0) {
    await t.write(CommonData.npwd, t.into(await t.$(enterPassword)));
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'UKRCO Verify that the user is able to click on register signup termsandconditions',
  async function () {
    if (acceptSignupTermsAndConditions.localeCompare('') !== 0) {
      try {
        await t.evaluate(await t.$(acceptSignupTermsAndConditions), (ele) =>
          ele.click()
        );
      } catch (e) {
        gauge.message(messages.stepNotApplicable);
      }
    }
    gauge.screenshot();
  }
);

step(
  'UKRCO Verify that the user is able to click on register button',
  async function () {
    if (joinNowButton.localeCompare('') !== 0) {
      await t.evaluate(await t.$(joinNowButton), (ele) => ele.click());
    }
    var SiteAccountpageTitle = await t.evaluate(() => {
      return document.title;
    });
    assert(accountPageTitle.includes(SiteAccountpageTitle));
    gauge.screenshot();
    gauge.message(messages.acctNavigation);
  }
);

// edit Billing address

var BillingDetails = [];
step('UKRCO Enter Billing details <user>', async function (user) {
  if (user === 'NU' || user === 'GU') {
    await Gen.ElementAction(BillingDetails);
    gauge.screenshot();
  }
});
var PurchaserDetails = [];
step('UKRCO Enter Purchaser details <user>', async function (user) {
  if (user === 'NU' || user === 'GU') {
    await Gen.ElementAction(PurchaserDetails);
    gauge.screenshot();
  }
});

step('UKRCO ENTER OFFERCODE', async function () {
  if (enterOfferCode.localeCompare('') !== 0) {
    await t.write(CommonData.validOfferCode, t.into(await t.$(enterOfferCode)));
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('UKRCO Click On Offer Button and Assert', async function () {
  if (clickOnOfferButton.localeCompare('') !== 0) {
    await t.evaluate(await t.$(clickOnOfferButton), (ele) => ele.click());
    gauge.screenshot();
    var ExpectedValidOfferMsg = await (await t.$(validOfferMessage)).text();
    if (
      ExpectedValidOfferMsg.toUpperCase().search(
        CommonData.validOfferMsg.toUpperCase()
      ) !== -1
    ) {
      matchCondition = true;
      assert(matchCondition, 'The discount has been applied is expected.');
    } else {
      matchCondition = false;
      assert(matchCondition, 'The discount has been applied is not expected.');
    }
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'UKRCO Verify that the user is able to validate Auto Offer',
  async function () {
    if (autoOffer.localeCompare('') !== 0) {
      if (await (await t.$(autoOffer)).exists(100, 30000)) {
        assert(true);
        gauge.message('Complimentary SKU is added as Auto offer');
      } else {
        assert(false, 'No Complimentary SKU is added as Auto offer');
      }
    } else {
      gauge.message('Auto offer is not applicable');
    }
  }
);

step(
  'UKRCO Verify that the user is able to validate Gift Wrap',
  async function () {
    if (giftWrapValidation.localeCompare('') !== 0) {
      await t.waitFor(3000); //Takes time to load all the fields, so need to wait for few seconds.
      // await evaluate($(giftwrapvalidation), ele => ele.scrollIntoView());

      if (await (await t.$(giftWrapValidation)).exists()) {
        assert(true);
        gauge.message(messages.giftWrapMsg);
      } else if (giftWrapValidation.localeCompare('') !== 0) {
        gauge.message(messages.giftWrapMsgNotDisplayed);
        assert(false);
      }
      gauge.screenshot();
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step(
  'UKRCO Verify that the user is able to add the Gift Wrap',
  async function () {
    if (giftWrap.localeCompare('') !== 0) {
      if (await (await t.$(updateButton)).exists()) {
      } else {
        //  await evaluate($(Giftwrap), ele => ele.scrollIntoView());
        await t.evaluate(await t.$(giftWrap), (ele) => ele.click());
      }
      try {
        await t.waitFor(9000); //Takes time to load all the fields, so need to wait for few seconds.
        await t.evaluate(await t.$(updateButton), (ele) => ele.click());
      } catch (e) {
        gauge.message(
          'Update Button is not applicable and hence this step is skipped'
        );
      }
      gauge.screenshot();
    } else {
      gauge.message('Gifwrap is not applicable and hence this step is skipped');
    }
  }
);

step(
  'UKRCO Verify that the user is able to select pick up store option',
  async function () {
    if (pickUpStore !== '') {
      await t.evaluate(await t.$(pickUpStore), (ele) => ele.click());
      gauge.screenshot();
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step(
  'UKRCO Verify that the user is able to enter CITY NAME and select address',
  async function () {
    if (searchByCityName!== '') {
      await t.write(
        CommonData.CITY_NAME,
        t.into(await t.$(searchByCityName), { delay: 100 })
      );
      await t.press('ArrowDown');
      await t.press('Enter');
      // await t.focus(await t.$(storeName));
      // // await press("Enter")
      // await t.click(await t.$(storeName));
      gauge.screenshot();
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);
step('UKRCO Verify that the user is able to search store', async function () {
  if (searchStore.localeCompare('') !== 0) {
    await t.evaluate(await t.$(searchStore), (ele) => ele.click());
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('UKRCO Verify that the user is able to select store', async function () {
  if (selectStore.localeCompare('') !== 0) {
    await t.evaluate(await t.$(selectStore), (ele) => ele.click());
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'UKRCO Verify that the user is able to enter CITY NAME and select suggestion',
  async function () {
    if (cityName.localeCompare('') !== 0) {
      await t.write(
        CommonData.CITY_NAME,
        t.into(await t.$(cityName), { delay: 100 })
      );
      await t.evaluate(await t.$(cityTextBox), (ele) => ele.click());
      gauge.screenshot();
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step(
  'UKRCO Select Delivery Radio Button <DeliveryType>',
  async function (DeliveryType) {
    if (selectDeliveryMethod.localeCompare('') !== 0) {
      var selectDeliveryRadioBtn = "//div[text()= '" + DeliveryType + "']";

      if (await (await t.$(selectDeliveryMethod)).exists(100, 5000)) {
        await t.evaluate(await t.$(selectDeliveryRadioBtn), (ele) =>
          ele.click()
        );
      } else {
        gauge.message(
          DeliveryType +
          ' option is not available. Hence, Standard Delivery is selected by default'
        );
      }
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);
step(
  'UKRCO Click On Place Order CTA and Validate Order Confirmation Number',
  async function () {
    await t.waitFor(9000); //As we developed this step for STAGE and DEV for 16 brands each brand loading time is different when its navigating back from 3rd party tool, we tried with all Is exists and Is visible some brand not worked so we used static wait
    if (
      clickOnGuestUserNewUserSignupPlaceOrder.localeCompare('') != 0 &&
      !(
        Helper.envir.toUpperCase() == 'PROD' ||
        Helper.envir.toUpperCase() == 'PREPROD'
      )
    ) {
      if (await (await t.$(clickOnGuestUserNewUserSignupPlaceOrder)).exists()) {
        await t.evaluate(
          await t.$(clickOnGuestUserNewUserSignupPlaceOrder),
          (ele) => ele.click(),
          { waitForEvents: ['DOMContentLoaded'] }
        );
      }
      if (await t.$(orderConfirmationMsgId).exists()) {
        var confirmurl = await currentURL();
        var GetOrderNumber = await t.$(orderConfirmationMsgId).text();
        assert(true);
        gauge.screenshot();
        gauge.message(messages.orderCreated);
        gauge.message(GetOrderNumber);
        console.log(GetOrderNumber);
        gauge.message(messages.orderCreated);
      } else {
        gauge.message(messages.orderNotCreated);
        assert(false);
      }
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

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

  // Re-initialize variables
  reinitialize();

  // Delete all the cookies
  await t.deleteCookies();

  gauge.message('ENVIRONMENT : ' + siteDefinition.executionContext.environment);
}

function reinitialize() {
  BillingDetails = [
    { loc: billingFirstName, data: CommonData.firstName, action: 'write' },
    { loc: billingLastName, data: CommonData.lastName, action: 'write' },
    { loc: billingAddress1, data: CommonData.address1, action: 'write' },
    { loc: billingAddress2, data: CommonData.address2, action: 'write' },
    { loc: billingZipCode, data: CommonData.zipcode, action: 'write' },
    { loc: billingPhone, data: CommonData.phone, action: 'write' },
    { loc: billingCity, data: CommonData.city, action: 'write' },
    { loc: clickOnShippingDetailsContinueButton1, action: 'click' },
  ];

  PurchaserDetails = [
    {
      loc: enterPurchaserFirstName,
      data: CommonData.firstName,
      action: 'write',
    },
    { loc: enterPurchaserLastName, data: CommonData.lastName, action: 'write' },
    { loc: enterPurchaserNewUserId, data: guestUserEmail(), action: 'write' },
    { loc: enterPurchaserPhone, data: CommonData.phone, action: 'write' },
  ];
  function guestUserEmail() {
    var realEmailid = 'elcprodsanity+GuestUser';
    var strValues = 'abcdefg12345';
    var strEmail = '';
    var strTmp;
    for (var i = 0; i < 3; i++) {
      strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
      strEmail = strEmail + strTmp;
    }
    strTmp = '';
    strEmail = realEmailid + strEmail + '@test.com';
    return strEmail;
  }
}
