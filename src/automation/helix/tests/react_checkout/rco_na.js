// This file is common template for US UK and CA

function makeEmail() {
  var strValues = 'abcdefghijk12345678';
  var strEmail = '';
  var strTmp;
  for (var i = 0; i < 10; i++) {
    strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
    strEmail = strEmail + strTmp;
  }
  strEmail = strEmail + '@test' + '.com';
  return strEmail;
}

var t = require('taiko');
let siteDefinition, source, NullDataException;
const Helper = require('../../helpers/helper');
const Util = require('../../../../utilities/util');
var toplaceorder = process.env.PLACEORDER || 'true'; //true to place order and false to not place the order

var matchCondition = true;
var timeoutSetting = '';
var waitingTime = '';
var existsTime = '';
var mockCookieValue = '0';
var productUrl = '';
var closePopup = '';
var checkoutButtonId = '';
var selectSampleProduct = '';
var continueSample1 = '';
var continueSample2 = '';
var mobGuestUserLink = '';
var guestUserLink = '';
var psaEditShippingAddress = '';
var psaEnterFirstName = '';
var billingAddressCheckbox = '';
var billingEnterFirstName = '';
var billingEnterLastName = '';
var billingEnterPhone = '';
var billingEnterAddress1 = '';
var billingEnterAddress2 = '';
var billingEnterZipcode = '';
var billingEnterCity = '';
var billingSelectState = '';
var billingState = '';
var continueToPayment = '';
var mobContinueToPayment = '';
var giftwrapValidation = '';
var addToCart = '';
var enterValidOfferCode = '';
var applyOfferButton = '';
var validOfferMsg = '';
var signupPopupClose = '';
var editAddressValidation = '';
var selectBillingAddress = '';
var returnUserSigninLink = '';
var mobReturnUserSigninLink = '';
var returnUserId = '';
var returnUserPwd = '';
var returnUserSigninButton = '';
var returnUserSigninLabel = '';
var editAddress = '';
var editEnterFirstName = '';
var saveEditAddress = '';
var enterFirstName = '';
var enterLastName = '';
var enterAddress1 = '';
var enterAddress2 = '';
var californiaEnterZipcode = '';
var enterCity = '';
var enterPhone = '';
var selectState = '';
var state = '';
var californiaContinueToPayment = '';
var californiaAddressValidation = '';
var apoEnterZipcode = '';
var apoAddressValidation = '';
var selectUseThisAddress = '';
var homeDelivery = '';
var increaseDecreaseInSpp = '';
var increaseQtybtn = '';
var editProductPanel = '';
var editProductLink = '';
var ccPayment = '';
var creditCardDetails = '';
var ccFieldId = '';
var pcMonthYear = '';
var cvvFieldId = '';
var ccName = '';
var creditCardDetails1Flag = 0;
var ds1PlaceOrder = '';
var username3ds = '';
var password3ds = '';
var submit3ds = '';
var orderNumberClass = '';
var inStorePick = '';
var findStore = '';
var selectDifferentStore = '';
var inventoryStatus = '';
var selectStore = '';
var statusFlag = 0;
var boFirstName = '';
var boLastName = '';
var boPhone = '';
var boEmail = '';
var billFirstName = '';
var billLastName = '';
var billAddress1 = '';
var billAddress2 = '';
var billZipcode = '';
var billCity = '';
var billPhone = '';
var editDelivery = '';
var secondDayRadioButton = '';
var orderAddressValidation = '';
var orderLink = '';
var cartPopupClose = '';
var giftwrap = '';
var updateButton = '';
var newCreditCard = '';
var newCreditCardSecond = '';
var newRadialCreditCard = '';
var cvv = '';
var scvv = '';
var offerCodeAccordiion = '';
var offerAccordiionSecond = '';
var mobCheckoutViewCart = '';
var mobCheckoutCreditCard = '';
var mobContinueSample1 = '';
var mobContinueSample2 = '';
var returnUserAddNewAddress = '';
var restrictedProductUrl = '';
var notAvailableProductsCount = 0;
var isShoppable = '';
var rcoEditShipAddressAndSave = [];
var rcoEditPayPageShipAddress = [];
var rcoBillingAddressCheckBox = [];
var rcoBillingAddressDetails = [];
var rcoSelectBillingAddress = [];
var rcoContinuetoPayment = [];
var rcoSelectAddress = [];
var rcoCaliforniaShipDetails = [];
var rcoAPOZIPCode = [];
var rcoHomeDelivery = [];
var rcoEditProductPanel = [];
var rcoEditProductLink = [];
var rcoCreditCardRadioButton = [];
var rcoCreditCardDetails3DS = [];
var rcoPlaceOrder3DS = [];
var rcoClickInstorePickup = [];
var rcoBopisProfileDetails = [];
var rcoBopisBillingDetails = [];
var rcoBopisEditDeliveryOption = [];
var rcoBopisSelectDeliveryMethod = [];
var rcoBopisOrderNumber = [];
var orderPagePopup = '';
var mobOrderPagePopup = '';
var returnPlaceOrder = '';
var placeOrderValidation = '';
var orderConfirmationMsgId = '';
var physicalGiftCardUrl = '';
var newBillingAddress = '';

assert = require('assert');
let Gen = require('../ReUsableFunction.js');
let Hengine = require('../../../../datainterface/providers/hengine');
let taikoOverride = require('../../helix_taiko');
var CommonData = {};
var feature = 'React Checkout';

const messages = {
  stepNotApplicable: 'This step is not applicable for this Brand/Locale',
  addressExpected: 'The valid eaddress is expected',
  addressNotExpected: 'The valid eaddress is not expected',
};

function ReturnUserID() {
  return RUID[Math.floor(Math.random() * RUID.length)];
}

function reinitialize() {
  skuIds = [
    CommonData.skuId1,
    CommonData.skuId2,
    CommonData.skuId3,
    CommonData.skuId4,
    CommonData.skuId5,
  ];
  CatID = [CommonData.CatID];

  RUID = [
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
  ];

  checkoutbutton = [
    {
      loc: checkoutButtonId,
      action: 'click',
    },
  ];

  samplepage = [
    {
      loc: continueSample1,
      action: 'tryCatchClick',
    },
    {
      loc: continueSample2,
      action: 'tryCatchClick',
    },
  ];

  guestUserLink = [
    {
      loc: mobGuestUserLink,
      action: 'tryCatchClick',
    },
    {
      loc: guestUserLink,
      action: 'tryCatchClick',
    },
  ];

  ShippingDetails = [
    {
      loc: enterFirstName,
      data: CommonData.FIRSTNAME,
      action: 'write',
    },
    {
      loc: enterLastName,
      data: CommonData.LASTNAME,
      action: 'write',
    },
    {
      loc: enterAddress1,
      data: CommonData.ADDRESS1,
      action: 'write',
    },
    {
      loc: enterAddress2,
      data: CommonData.ADDRESS2,
      action: 'write',
    },
    {
      loc: enterZIPCODE,
      data: CommonData.ZIPCODE,
      action: 'write',
    },
    {
      loc: enterPhone,
      data: CommonData.PHONE,
      action: 'write',
    },
    {
      loc: enterCity,
      data: CommonData.CITY,
      action: 'write',
    },
    {
      loc: selectState,
      data: CommonData.MSTATE,
      action: 'IDDropdowntxt',
    },
    {
      loc: state,
      action: 'click',
    },
    {
      loc: continueToPayment,
      action: 'click',
    },
    {
      loc: selectUseThisAddress,
      action: 'tryCatchClick',
    },
  ];

  rcoCaliforniaShipDetails = [
    { loc: enterFirstName, data: CommonData.FIRSTNAME, action: 'write' },
    { loc: enterLastName, data: CommonData.LASTNAME, action: 'write' },
    { loc: enterAddress1, data: CommonData.ADDRESS1, action: 'write' },
    { loc: enterAddress1, data: CommonData.ADDRESS2, action: 'write' },
    {
      loc: californiaEnterZipcode,
      data: CommonData.CaliforniaZIPCODE,
      action: 'write',
    },

    { loc: enterPhone, data: CommonData.PHONE, action: 'write' },
    { action: 'screenshot' },
    { loc: californiaContinueToPayment, action: 'waitForElementNClick' },
    { action: 'screenshot' },
  ];

  rcoAPOZIPCode = [
    {
      loc: apoEnterZipcode,
      data: CommonData.APOZIPCODE,
      action: 'waitAfterWrite',
    },
    { action: 'screenshot' },
  ];

  rcoContinuetoPayment = [
    { loc: continueToPayment, action: 'waitForElementNClick' },
    { action: 'screenshot' },
  ];

  rcoSelectAddress = [
    { loc: selectUseThisAddress, action: 'tryCatchClick' },
    { action: 'screenshot' },
  ];

  rcoEditPayPageShipAddress = [
    { loc: psaEditShippingAddress, action: 'waitForElementNClick' },
    {
      loc: psaEnterFirstName,
      data: CommonData.EFIRSTNAME,
      action: 'clearNwrite',
    },
    { action: 'screenshot' },
  ];

  rcoBillingAddressCheckBox = [
    { loc: billingAddressCheckbox, action: 'waitForElementNClick' },
    { action: 'screenshot' },
  ];

  rcoBillingAddressDetails = [
    { loc: newBillingAddress, action: "click" },
    { loc: billingEnterFirstName, data: CommonData.FIRSTNAME, action: 'write' },
    { loc: billingEnterLastName, data: CommonData.LASTNAME, action: 'write' },
    { loc: billingEnterPhone, data: CommonData.BILLINGPHONE, action: 'write' },
    {
      loc: billingEnterAddress1,
      data: CommonData.BILLINGADDRESS1,
      action: 'write',
    },
    {
      loc: billingEnterAddress2,
      data: CommonData.BILLINGADDRESS2,
      action: 'write',
    },
    {
      loc: billingEnterZipcode,
      data: CommonData.BILLINGZIPCODE,
      action: 'write',
    },
    { loc: billingEnterCity, data: CommonData.BILLINGCITY, action: 'write' },
    { loc: billingSelectState, action: 'click' },
    { loc: billingState, action: 'click' },
    { action: 'screenshot' },
  ];

  rcoHomeDelivery = [
    { loc: homeDelivery, action: 'click' },
    { action: 'screenshot' },
  ];

  rcoEditProductPanel = [
    { loc: editProductPanel, action: 'waitForElementNClick' },
    { action: 'screenshot' },
  ];

  rcoEditProductLink = [
    { loc: editProductLink, action: 'waitForElementNClick' },
    { action: 'screenshot' },
  ];

  rcoEditShipAddressAndSave = [
    { loc: editAddress, action: 'click' },
    {
      loc: editEnterFirstName,
      data: CommonData.EFIRSTNAME,
      action: 'clearNwrite',
    },
    { loc: saveEditAddress, action: 'click' },
    { action: 'screenshot' },
  ];

  rcoSelectBillingAddress = [
    { loc: selectBillingAddress, action: 'waitForElementNClick' },
    { action: 'screenshot' },
  ];

  rcoCreditCardRadioButton = [
    { loc: ccPayment, action: 'click' },
    { action: 'screenshot' },
  ];

  rcoCreditCardDetails3DS = [
    { loc: ccFieldId, data: CommonData.DS1CARD, action: 'write' },
    { loc: pcMonthYear, data: CommonData.PCCVVMONTH, action: 'write' },
    { loc: cvvFieldId, data: CommonData.CVV, action: 'write' },
    { loc: ccName, data: CommonData.CCNAME, action: 'write' },
    { action: 'screenshot' },
  ];

  rcoPlaceOrder3DS = [
    { loc: ds1PlaceOrder, action: 'click' },
    //{ loc: username3ds, data: CommonData.USERNAME, action: 'write' },
    // { loc: password3ds, data: CommonData.PASSWORD, action: 'write' },
    // { loc: submit3ds, action: 'click' },
    { action: 'screenshot' },
  ];

  rcoClickInstorePickup = [
    { loc: inStorePick, action: 'click' },
    { action: 'screenshot' },
  ];

  rcoBopisProfileDetails = [
    { loc: boFirstName, data: CommonData.FIRSTNAME, action: 'clearNwrite' },
    { loc: boLastName, data: CommonData.LASTNAME, action: 'write' },
    { loc: boEmail, data: makeEmail(), action: 'write' },
    { action: 'screenshot' },
  ];

  rcoBopisBillingDetails = [
    { loc: billFirstName, data: CommonData.FIRSTNAME, action: 'write' },
    { loc: billLastName, data: CommonData.LASTNAME, action: 'write' },
    { loc: billAddress1, data: CommonData.ADDRESS1, action: 'write' },
    { loc: billAddress2, data: CommonData.ADDRESS2, action: 'write' },
    { loc: billZipcode, data: CommonData.BILLINGZIPCODE, action: 'write' },
    { loc: billCity, data: CommonData.BILLINGCITY, action: 'write' },
    { loc: billingSelectState, action: 'click' },
    { loc: billingState, action: 'click' },
    { loc: billPhone, data: CommonData.PHONE, action: 'write' },
    { action: 'screenshot' },
  ];

  rcoBopisEditDeliveryOption = [
    { loc: editDelivery, action: 'click' },
    { action: 'screenshot' },
  ];

  rcoBopisSelectDeliveryMethod = [
    { loc: secondDayRadioButton, action: 'click' },
    { action: 'screenshot' },
  ];

  rcoBopisOrderNumber = [
    { loc: orderLink, action: 'click' },
    { action: 'screenshot' },
  ];
}

async function closeCartPopup() {
  /**Check for pop-up**/
  try {
    await t.evaluate(await t.$(cartPopupClose), (ele) => ele.click());
  } catch (error) {
    gauge.message(messages.stepNotApplicable);
  }
}

async function cookierejectbutton() {
  /**Check for pop-up**/
  try {
    await t.evaluate(await t.$(CookieRejectButton), (ele) => ele.click());
  } catch (error) {
    gauge.message(messages.stepNotApplicable);
  }
}

async function closeSignupPopup() {
  if (signupPopupClose !== '') {
    await t.waitFor(waitingTime);
    /**signup Popup Close is applicable for few Brand/Locale/platform(PC/MOB) */
    try {
      await t.click(await t.$(signupPopupClose));
    } catch (e) {
      gauge.message(messages.stepNotApplicable);
    }
  } else {
  }
}

var skuIds = [
  CommonData.skuId1,
  CommonData.skuId2,
  CommonData.skuId3,
  CommonData.skuId4,
  CommonData.skuId5,
];

async function addProductToCart(siteDefinition, t) {
  for (i = 0; i < skuIds.length; i++) {
    await t.goto(
      siteDefinition.executionContext.adminUrl + productUrl + skuIds[i],
      {
        waitForEvents: ['DOMContentLoaded'],
      }
    );
    gauge.screenshot();
    var isShoppableValue = await (await t.$(isShoppable)).text();
    if (isShoppableValue === '1') {
      gauge.message(
        'The Product with SKU ID - ' +
        skuIds[i] +
        ' is available and proceeding to add to Cart'
      );
      let elements = await (await t.$(addToCart)).elements();
      let attributePromises = elements.map((e) => {
        return t.evaluate(e, (elem) => {
          return elem.getAttribute('href');
        });
      });
      var viewCartUrl = await Promise.all(attributePromises);
      await t.goto(siteDefinition.executionContext.url + viewCartUrl, {
        waitForEvents: ['DOMContentLoaded'],
      });
      gauge.screenshot();
      break;
    } else {
      gauge.message(
        'The Product with SKU ID - ' +
        skuIds[i] +
        ' is NOT available for adding it to Cart '
      );
      notAvailableProductsCount++;
    }
  }
  if (notAvailableProductsCount === skuIds.length) {
    assert(
      !matchCondition,
      'None of the products are available for adding it to Cart'
    );
  }
}

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

//RCO Specific Steps

step('NARCO Initialize Helix', async function () {
  // Initialize the selectors from DB
  await initFrameworkSettings();
});

async function rcoNewCreditCardButton() {
  await t.waitFor(existsTime);
  if (newCreditCard !== '') {
    await (await t.$(newCreditCard)).exists(existsTime);
    await t.evaluate(await t.$(newCreditCard), (ele) => ele.click());
  } else if (newCreditCardSecond !== '') {
    await (await t.$(newCreditCardSecond)).exists(existsTime);
    await t.evaluate(await t.$(newCreditCardSecond), (ele) => ele.click());
    await t.evaluate(await t.$(newCreditCard), (ele) => ele.click());
  } else if (newRadialCreditCard !== '') {
    await t.evaluate(await t.$(newRadialCreditCard), (ele) => ele.click());
  }
  gauge.screenshot();
}

step(
  'NARCO Verify that the user is able to click on New Credit card radio button',
  async function () {
    await rcoNewCreditCardButton();
  }
);

async function rcoAddGiftWrap() {
  if (giftwrap !== '') {
    await t.evaluate(await t.$(giftwrap), (ele) => {
      ele.scrollIntoView();
      ele.click();
    });
    //Gift wrap is applicable for few brands/locales.
    try {
      await (await t.$(updateButton)).exists(existsTime);
      await t.evaluate(await t.$(updateButton), (ele) => ele.click());
    } catch (e) {
      gauge.message(messages.stepNotApplicable);
    }
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

step('NARCO Verify user is able to add Gift Wrap', async function () {
  await rcoAddGiftWrap();
});

async function savedCard() {
  if (cvv !== '') {
    await (await t.$(cvv)).exists(existsTime);
    await t.write(CommonData.CVV, t.into(await t.$(cvv)));
    gauge.screenshot();
  } else if (scvv !== '') {
    await t.write(CommonData.CVV, t.into(await t.$(scvv)));
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

step(
  'NARCO Verify that the user is able to enter Saved Card CVV',
  async function () {
    await savedCard();
  }
);

async function setGeoLocation(siteDefinition, t) {
  await t.overridePermissions(siteDefinition.executionContext.url, [
    'geolocation',
  ]);
  await t.setLocation({
    latitude: parseInt(CommonData.Latitude),
    longitude: parseInt(CommonData.Longitude),
    accuracy: parseInt(CommonData.Accuracy),
  });
  console.log('geo location set');
}

step(
  'NARCO BOPIS Verify that the user is able to add products to the cart successfully',
  async function () {
    let {
      executionContext: { platform },
    } = siteDefinition;
    await setGeoLocation(siteDefinition, t);
    await addProductToCart(siteDefinition, t);
    await cookierejectbutton();
    await closeCartPopup();
  }
);

async function rcoClickAccordionButton() {
  if (offerCodeAccordiion !== '') {
    await t.evaluate(await t.$(offerCodeAccordiion), (ele) => ele.click());
    gauge.screenshot();
  } else if (offerAccordiionSecond !== '') {
    await t.evaluate(await t.$(offerAccordiionSecond), (ele) => ele.click());
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

step(
  'NARCO Verify that the user is able to Click on Accordion Button',
  async function () {
    await rcoClickAccordionButton();
  }
);

async function enterOfferCodeAndapplyOffer() {
  if (CommonData.VALIDOFFERCODE !== '') {
    await t.evaluate(await t.$(enterValidOfferCode), (ele) =>
      ele.scrollIntoView()
    );
    await t.write(
      CommonData.VALIDOFFERCODE,
      t.into(await t.$(enterValidOfferCode))
    );
    await t.evaluate(await t.$(applyOfferButton), (ele) => ele.click());
    gauge.screenshot();
  }
}

async function assertOffercode() {
  await Gen.AssertText(
    validOfferMsg,
    CommonData.VALIDOFFERMSG,
    'The discount has been applied',
    'The discount has been not applied'
  );
  gauge.screenshot();
}

step(
  'NARCO Verify that the user is able to apply the Offer successfully',
  async function () {
    await enterOfferCodeAndapplyOffer();
    await assertOffercode();
  }
);

async function checkoutAndNavigateToSamplepage() {
  if (checkoutButtonId !== '') {
    //Click On checkoutAndNavigateToSamplepage is applicable for few Brands/Locale/platform(PC/MOB)
    try {
      await t.evaluate(await t.$(checkoutButtonId), (ele) => ele.click());
      gauge.screenshot();
    } catch (e) {
      gauge.message(messages.stepNotApplicable);
    }
  }
}

async function samplepages() {
  if (selectSampleProduct !== '') {
    await t.evaluate(await t.link({ class: selectSampleProduct }), (ele) =>
      ele.click()
    );
  }
  if (continueSample1 !== '') {
    /**MOB checkout viewcart is applicable for few Brand/Locale/platform(MOB) */
    try {
      await t.evaluate(await t.$(continueSample1), (ele) => {
        ele.focus();
        ele.click();
      });
      gauge.screenshot();
    } catch (e) {
      gauge.message(messages.stepNotApplicable);
    }
  }
  if (continueSample2 !== '') {
    /**MOB checkout overlay is applicable for few Brand/Locale/platform(MOB) */
    try {
      await t.evaluate(await t.$(continueSample2), (ele) => {
        ele.focus();
        ele.click();
      });
      gauge.screenshot();
    } catch (e) {
      gauge.message(messages.stepNotApplicable);
    }
  }
}

async function returnUserLinks() {
  if (returnUserSigninLink !== '') {
    /**Click On Return User Shipping Details Edit Link is applicable for few Brand/Locale/platform(PC/MOB) */
    try {
      await t.evaluate(await t.$(returnUserSigninLink), (ele) => ele.click());
    } catch (e) { }
  }
  if (mobReturnUserSigninLink !== '') {
    /**Click on mobReturnUserSigninLink is applicable for few Brand/Locale/platform(PC/MOB) */
    try {
      await t.evaluate(await t.$(mobReturnUserSigninLink), (ele) =>
        ele.click()
      );
    } catch (e) { }
  }
}

async function returnUserEmailIdDetails() {
  if (returnUserId !== '') {
    let ReturnuserEmail = ReturnUserID();
    await t.evaluate(await t.$(returnUserId), (ele) => ele.focus());
    await t.write(ReturnuserEmail, t.into(await t.$(returnUserId)));
    gauge.message('Return user Email ID: ' + ReturnuserEmail);
    gauge.screenshot();
  }
  if (returnUserPwd !== '') {
    await t.write(CommonData.RPWD, t.into(await t.$(returnUserPwd)));
    gauge.screenshot();
  }
  if (returnUserSigninLabel !== '') {
    await t.evaluate(t.button(returnUserSigninLabel), (ele) => ele.click());
    gauge.screenshot();
  }
  if (returnUserSigninButton !== '') {
    await t.evaluate(await t.$(returnUserSigninButton), (ele) => {
      ele.focus();
      ele.click();
    });
    gauge.screenshot();
  }
}

step(
  'NARCO Verify that the user is able to add products to the cart successfully',
  async function () {
    await addProductToCart(siteDefinition, t);
    await cookierejectbutton();
    await closeCartPopup();
  }
);

step(
  'NARCO Verify that the user is able to proceed to Return User Details successfully',
  async function () {
    await checkoutAndNavigateToSamplepage();
    await samplepages();
    await returnUserLinks();
    await returnUserEmailIdDetails();
    await closeSignupPopup();
  }
);

async function rcoReturnUserAddNewAddress() {
  if (returnUserAddNewAddress !== '') {
    //rcoReturnUserAddNewAddress is applicable for few brands/locale.
    try {
      await t.evaluate(await t.$(returnUserAddNewAddress), (ele) =>
        ele.click()
      );
    } catch (e) { }
  } else {
  }
  gauge.screenshot();
}

step(
  'NARCO Verify that the user is able to Click On Return User Add New Address Button/Link',
  async function () {
    await rcoReturnUserAddNewAddress();
  }
);

async function addRestrictedProductToCart(siteDefinition, t) {
  await t.goto(
    siteDefinition.executionContext.adminUrl + restrictedProductUrl,
    {
      waitForNavigation: false,
    }
  );
  let elements = await (await t.$(addToCart)).elements();
  let attributePromises = elements.map((e) => {
    return t.evaluate(e, (elem) => {
      return elem.getAttribute('href');
    });
  });
  var viewCartUrl = await Promise.all(attributePromises);
  await t.goto(siteDefinition.executionContext.url + viewCartUrl, {
    waitForNavigation: false,
  });
}

step(
  'NARCO Verify that the user is able to add restricted product to the cart',
  async function () {
    let {
      executionContext: { platform },
    } = siteDefinition;
    await addRestrictedProductToCart(siteDefinition, t);
    await cookierejectbutton();
    await closeCartPopup();
  }
);

async function mobContinueCheckout() {
  if (mobCheckoutViewCart !== '') {
    /**MOB checkout viewcart is applicable for few Brand/Locale/platform(MOB) */
    try {
      await t.evaluate(await t.$(mobCheckoutViewCart), (ele) => {
        ele.focus();
        ele.click();
      });
      gauge.screenshot();
    } catch (e) { }
  }
  if (mobCheckoutCreditCard !== '') {
    /**MOB checkout overlay is applicable for few Brand/Locale/platform(MOB) */
    try {
      await t.evaluate(await t.$(mobCheckoutCreditCard), (ele) => {
        ele.focus();
        ele.click();
      });
      gauge.screenshot();
    } catch (e) { }
  }
}

async function mobSamplePage() {
  if (mobContinueSample1 !== '') {
    /**MOB checkout viewcart is applicable for few Brand/Locale/platform(MOB) */
    try {
      await t.evaluate(await t.$(mobContinueSample1), (ele) => {
        ele.focus();
        ele.click();
      });
      gauge.screenshot();
    } catch (e) {
      gauge.message(messages.stepNotApplicable);
    }
  }
  if (mobContinueSample2 !== '') {
    /**MOB checkout overlay is applicable for few Brand/Locale/platform(MOB) */
    try {
      await t.evaluate(await t.$(mobContinueSample2), (ele) => {
        ele.focus();
        ele.click();
      });
      gauge.screenshot();
    } catch (e) {
      gauge.message(messages.stepNotApplicable);
    }
  }
}

step(
  'NARCO Verify that the user is able to proceed to Mobile Return User Details successfully',
  async function () {
    await mobContinueCheckout();
    await mobSamplePage();
    await returnUserLinks();
    await returnUserEmailIdDetails();
  }
);

step(
  'NARCO Verify that the user is able to Edit the Shipping Address and Save the Address',
  async function () {
    await Gen.ElementAction(rcoEditShipAddressAndSave);
  }
);

step(
  'NARCO Verify that the user is able to Edit the Payment Page Shipping Address from Order Summary',
  async function () {
    await Gen.ElementAction(rcoEditPayPageShipAddress);
  }
);

step(
  'NARCO Verify that the user is able to Enter the Billing Details',
  async function () {
    await Gen.ElementAction(rcoBillingAddressCheckBox);
    await Gen.ElementAction(rcoBillingAddressDetails);
  }
);

step(
  'NARCO Verify that the user is able to Select a Billing Address',
  async function () {
    await Gen.ElementAction(rcoBillingAddressCheckBox);
    await Gen.ElementAction(rcoSelectBillingAddress);
  }
);

async function payPageShipAddressValidation() {
  await t.waitFor(waitingTime); //Takes time to load all the fields, so need to wait for few seconds.
  var Expectedaddress = await (await t.$(editAddressValidation)).text();
  if (
    Expectedaddress.toUpperCase().search(CommonData.EFIRSTNAME.toUpperCase()) !=
    -1
  ) {
    gauge.screenshot();
    assert(matchCondition);
    gauge.message(messages.addressExpected);
  } else {
    gauge.message(messages.addressNotExpected);
    assert(!matchCondition);
  }
}

step(
  'NARCO Verify that the user is able to Validate the Payment Page Shipping Address',
  async function () {
    await payPageShipAddressValidation();
  }
);

step(
  'NARCO Verify that the user is able to Click on Continue to Payment',
  async function () {
    await Gen.ElementAction(rcoContinuetoPayment);
    await Gen.ElementAction(rcoSelectAddress);
  }
);

async function giftwrapValidationPayPage() {
  if (giftwrapValidation !== '') {
    if (await (await t.$(giftwrapValidation)).exists(existsTime)) {
      assert(true);
      gauge.message('giftwrap field is displayed');
    } else if (giftwrapValidation !== '') {
      gauge.message('giftwrap field is not displayed');
      assert(false);
    }
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

step('NARCO Verify Gift Wrap is displayed in Payment Page', async function () {
  await giftwrapValidationPayPage();
});

step(
  'NARCO Verify that the user is able to Enter the California Shipping Details',
  async function () {
    await Gen.ElementAction(rcoCaliforniaShipDetails);
  }
);

async function rcoCaliforniaAddressValidation() {
  gauge.screenshot();
  if (californiaAddressValidation !== '') {
    await (await t.$(californiaAddressValidation)).exists(existsTime);
    var Californiadaddress = await (
      await t.$(californiaAddressValidation)
    ).text();
    if (
      Californiadaddress.toUpperCase().search(
        CommonData.CVALIDEADDRESS.toUpperCase()
      ) !== -1
    ) {
      gauge.screenshot();
      assert(matchCondition);
      gauge.message(messages.addressExpected);
    } else {
      gauge.message(messages.addressNotExpected);
      assert(!matchCondition);
    }
  }
}

step(
  'NARCO Verify that the user is able to Validate the California Address',
  async function () {
    await rcoCaliforniaAddressValidation();
  }
);

step(
  'NARCO Verify that the user is able to Enter the APO ZIPCODE',
  async function () {
    await Gen.ElementAction(rcoAPOZIPCode);
  }
);

async function rcoValidateAPOAddress() {
  await t.waitFor(waitingTime);
  var APOadaddress = await (await t.$(apoAddressValidation)).text();
  if (
    APOadaddress.toUpperCase().search(
      CommonData.APOVALIDEADDRESS.toUpperCase()
    ) !== -1
  ) {
    gauge.screenshot();
    assert(matchCondition, 'The valid message is expected');
    gauge.message('The valid message is expected');
  } else {
    assert(!matchCondition, 'The valid message is not expected');
  }
}

step(
  'NARCO Verify that the user is able to validate the APO address',
  async function () {
    await rcoValidateAPOAddress();
  }
);

step(
  'NARCO Verify that the user is able to Click on Home Delivery',
  async function () {
    await Gen.ElementAction(rcoHomeDelivery);
  }
);

step(
  'NARCO Verify that the user is able to Click on Edit Product Panel',
  async function () {
    await Gen.ElementAction(rcoEditProductPanel);
  }
);

async function editQuantity() {
  if (increaseDecreaseInSpp) {
    for (var i = 0; i < 1; i++) {
      await t.evaluate(await t.$(increaseQtybtn), (ele) => ele.click());
      gauge.screenshot();
    }
  }
}

step(
  'NARCO Verify that the user is able to Edit Product Quantity',
  async function () {
    await Gen.ElementAction(rcoEditProductLink);
    await editQuantity();
  }
);

step(
  'NARCO Verify that the user is able to Click on Credit Card Radio button 3DS1',
  async function () {
    await Gen.ElementAction(rcoCreditCardRadioButton);
  }
);

async function rcoCreditCardDetailsDS() {
  if (creditCardDetails !== '') {
    await Gen.ElementAction(rcoCreditCardDetails3DS);
    creditCardDetails1Flag = 1;
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

step(
  'NARCO Verify that the user is able to Enter Credit Card Details DS1',
  async function () {
    await rcoCreditCardDetailsDS();
    await Gen.ElementAction(rcoPlaceOrder3DS);
  }
);

async function rcoValidateOrderNumber() {
  if (
    (await (await t.$(orderNumberClass)).exists(),
      { waitForEvents: ['DOMContentLoaded'] })
  ) {
    assert(true);
    var confirmurl = await t.currentURL();
    var GetOrderNumber = await (await t.$(orderNumberClass)).text();
    assert(confirmurl.includes(CommonData.CHECKOUTCONFIRMURL));
    gauge.message('Order is created successfully');
    gauge.message(GetOrderNumber);
    console.log(GetOrderNumber);
  } else {
    assert(false, 'Order is not created');
  }
  gauge.screenshot();
}

step(
  'NARCO Verify that the user is able to validate the Order Number',
  async function () {
    await rcoValidateOrderNumber();
  }
);

step(
  'NARCO Verify that the user is able to Click Instore pickup',
  async function () {
    await Gen.ElementAction(rcoClickInstorePickup);
  }
);

async function rcoBOPISFindStore() {
  if (findStore !== '') {
    //Find Store is applicable for few brands/locales.
    try {
      await t.evaluate(await t.$(findStore), (ele) => ele.click());
      await t.write(CommonData.FindStore, t.into(await t.$(findStore)));
      await t.press(['Control', 'KeyA']);
      await t.press('Delete');
      await t.write(CommonData.FindStore, t.into(await t.$(findStore)));
      await t.press('Tab');
      await t.press('Enter');
    } catch (e) {
      gauge.message(messages.stepNotApplicable);
    }
  } else if (await (await t.$(selectDifferentStore)).exists()) {
    await t.press('Tab');
    await t.press('Tab');
    await t.press('Enter');
    gauge.message('selectDifferentStore link clicked');
  } else {
    gauge.message(messages.stepNotApplicable);
  }
  gauge.screenshot();
}

step('NARCO Verify that the user is able to Find a store', async function () {
  await rcoBOPISFindStore();
});

async function rcoBOPISSelectStore() {
  if (inventoryStatus !== '') {
    gauge.screenshot();
    await (await t.$(inventoryStatus)).exists(existsTime);
    var numstore = (await (await t.$(inventoryStatus)).elements()).length;
    console.log('store count', numstore);

    for (var i = 1; i <= numstore; i++) {
      InvstatusTxt = await (
        await t.$("(//span[@class = 'item-availability-text'])[" + i + ']')
      ).text();
      console.log('Inventory status', InvstatusTxt);
      if (InvstatusTxt.includes(CommonData.AvlStatus)) {
        statusFlag = 1;
        await t.evaluate(
          await t.$(
            "(//button[contains(@class,'select-store-custom-button')])[" +
            statusFlag +
            ']'
          ),
          (ele) => ele.click()
        );
        console.log('select store button clicked');
        break;
      }
      if (statusFlag === 0) {
        console.log('product not available');
      }
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

step(
  'NARCO Verify that the user is able to Click select store',
  async function () {
    await rcoBOPISSelectStore();
  }
);

async function rcoEnterBOPISDetails() {
  if (boPhone !== '') {
    await t.scrollDown(parseInt(CommonData.scrollDownValue));
    await t.focus(await t.$(boPhone));
    for (let i = 0; i < 11; i++) {
      await t.press('Backspace');
    }
    await t.write(CommonData.PHONE, t.into(await t.$(boPhone)));
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

step(
  'NARCO Verify that the user is able to Enter the BOPIS Profile Details',
  async function () {
    await Gen.ElementAction(rcoBopisProfileDetails);
    await rcoEnterBOPISDetails();
  }
);

step(
  'NARCO Verify that the user is able to Enter the BOPIS Billing Details',
  async function () {
    await Gen.ElementAction(rcoBopisBillingDetails);
  }
);

step(
  'NARCO Verify that the user is able to Edit the Delivery Option',
  async function () {
    await Gen.ElementAction(rcoBopisEditDeliveryOption);
  }
);

step(
  'NARCO Verify that the user is able to Select the Delivery Method',
  async function () {
    await Gen.ElementAction(rcoBopisSelectDeliveryMethod);
  }
);

async function orderAddress() {
  if (orderAddressValidation !== '') {
    await (await t.$(orderAddressValidation)).exists(existsTime);
    await t.evaluate(await t.$(orderAddressValidation), (ele) =>
      ele.scrollIntoView()
    );
    var Expectedaddress = await (await t.$(orderAddressValidation)).text();
    if (
      Expectedaddress.toUpperCase().search(
        CommonData.VALIDEADDRESS.toUpperCase()
      ) !== -1
    ) {
      gauge.screenshot();
      assert(matchCondition);
      gauge.message(messages.addressExpected);
    } else {
      gauge.message(messages.addressNotExpected);
      assert(!matchCondition);
    }
  }
}

step(
  'NARCO Verify that the user is able to Validate the Account page order shipping address',
  async function () {
    await Gen.ElementAction(rcoBopisOrderNumber);
    await orderAddress();
  }
);

step(
  'NARCO Verify that the user is able to Navigate to Shipping Details',
  async function () {
    await checkoutAndNavigateToSamplepage();
    await samplepages();
    await closeSignupPopup();
  }
);

step(
  'NARCO Verify that the user is able to Navigate to Mobile Shipping Details',
  async function () {
    await mobContinueCheckout();
    await mobSamplePage();
    await closeSignupPopup();
  }
);

async function placeOrderPopup() {
  if (toplaceorder === 'true' && orderPagePopup.localeCompare('') !== 0) {
    await (await t.$(orderPagePopup)).exists(waitingTime, existsTime);
    /**orderpage Popup Close is applicable for few Brand/Locale/platform(PC) */
    try {
      await t.evaluate(await t.$(orderPagePopup), (ele) => {
        ele.focus();
        ele.click();
      });
    } catch (e) {
      gauge.message(messages.stepNotApplicable);
    }
  }
}

async function mobPlaceOrderPopup() {
  if (toplaceorder === 'true' && mobOrderPagePopup.localeCompare('') !== 0) {
    await (await t.$(mobOrderPagePopup)).exists(waitingTime, existsTime);
    /**orderpage Popup Close is applicable for few Brand/Locale/platform(MOB) */
    try {
      await t.evaluate(await t.$(mobOrderPagePopup), (ele) => {
        ele.focus();
        ele.click();
      });
    } catch (e) {
      gauge.message(messages.stepNotApplicable);
    }
  }
}

async function returnUserPlaceOrder() {
  if (await (await t.$(returnPlaceOrder)).exists()) {
    await t.evaluate(await t.$(returnPlaceOrder), (ele) => {
      ele.focus();
      ele.click();
      gauge.screenshot();
    });
  }
}

async function orderValidation() {
  if (placeOrderValidation.localeCompare('') !== 0) {
    if (await (await t.$(orderConfirmationMsgId)).exists()) {
      var confirmurl = await t.currentURL();
      var GetOrderNumber = await (await t.$(orderConfirmationMsgId)).text();
      assert(confirmurl.includes(placeOrderValidation));
      gauge.message('Order placed successfully');
      gauge.message(GetOrderNumber);
      console.log(GetOrderNumber);
      gauge.screenshot();
    } else {
      gauge.message('Order not placed');
      assert(false);
    }
  }
}

step(
  'NARCO Verify that the return user is able to place the order successfully',
  async function () {
    await returnUserPlaceOrder();
    await placeOrderPopup();
    await mobPlaceOrderPopup();
    await orderValidation();
    await placeOrderPopup();
    await mobPlaceOrderPopup();
  }
);

//Physical Gift Card

async function addGiftCardToCart(siteDefinition, t) {
  await t.goto(siteDefinition.executionContext.adminUrl + physicalGiftCardUrl, {
    waitForNavigation: false,
  });
  let elements = await (await t.$(addToCart)).elements();
  let attributePromises = elements.map((e) => {
    return t.evaluate(e, (elem) => {
      return elem.getAttribute('href');
    });
  });
  var viewCartUrl = await Promise.all(attributePromises);
  await t.goto(siteDefinition.executionContext.url + viewCartUrl, {
    waitForNavigation: false,
  });
  gauge.screenshot();
}

step(
  'NARCO Verify that the user is able to add gift card to the cart successfully',
  async function () {
    let {
      executionContext: { platform },
    } = siteDefinition;
    await addGiftCardToCart(siteDefinition, t);
    await cookierejectbutton();
    await closeCartPopup();
    gauge.screenshot();
  }
);
