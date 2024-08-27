// This file is common template for US UK and CA

var feature = 'ROM';
var CommonData = {};
var currentSetNo = 0;
var brandLocale = '';
var Url = '';
var productID = '';
var prodID = [];
var notAvailableProductsCount = 0;
var isShoppable = '';
var isDisplayable = '';
var noDisplayableProductError = '';
var productUrl = '';
var categoryUrl = '';
let tmpProdID = '';
var prodIDSingle = '';
var sppPageprodHeader = '';
var sppPageprodHeaderMob = '';
var javaAlertPopup = '';
var addToBagSPP = '';
var clickCartpageLink = '';
var bagIcon = '';
var clickCartpageLinkMob = '';
var CartpageURLText = '';
var cartCountValue = '';
var emptyCart = '';
var emptyCartMob = '';
var productText = '';
var productUrlRom = '';
var checkoutButtonId = '';
var continueSample1 = '';
var continueSample2 = '';
var signupPopupClose = '';
var mobGuestUserLink = '';
var guestUserLink = '';
var guestUserId = '';
var continueAsGuest = '';
var enterFirstName = '';
var enterLastName = '';
var enterAddress1 = '';
var enterAddress2 = '';
var enterZipcode = '';
var enterPhone = '';
var returnEnterAddress1 = '';
var enterCity = '';
var selectState = '';
var selectState1 = '';
var state = '';
var selectUseThisAddress = '';
var continueToPayment = '';
var continueToPayment1 = '';
var ccDetails = '';
var creditCardNumber = '';
var cvvFieldId = '';
var selectPcMonth = '';
var nameMonth = '';
var selectPcYear = '';
var nameYear = '';
var pcMonthYear = '';
var enterCcName = '';
var selectMobileMonth = '';
var selectMobileYear = '';
var ccTime = '';
var useBillingAddress = '';
var placeOrderValidation = '';
var orderConfirmationMsgid = '';
var placeOrder = '';
var returnUserSelectAddress = '';
var checkoutButton = [];
var samplePage = [];
var shippingDetails = [];
var skuIds = [];
var timeoutSetting = '';
var orderPagePopupClose = '';
var mobOrderPagePopupClose = '';
var returnUserSigninLink = '';
var mobReturnUserSigninLink = '';
var returnUserId = '';
var returnUserPWD = '';
var returnUserSigninButton = '';
var returnUserSigninlabel = '';
var returnUserContinueCHECKOUTVIEWCART = '';
var returnUserShippingLinkText = '';
var returnUserAddNewaddress = '';
var returnUserAddNewaddress1 = '';
var returnUserPaymentLinkText = '';
var returnUserNewPaymentbutton = '';
var emulationDevice = '';
var mobCheckoutViewcart = '';
var mobCheckoutCreditCard = '';
var mobContinueSample1 = '';
var mobContinueSample2 = '';
var quantitySelect1 = '';
var quantitySelect = '';
var offerCode = '';
var offerCodeButton = '';
var validOfferMsg = '';
var offerEditButton = '';
var enterInvalidOfferCode = '';
var applyOfferButton1 = '';
var inValidOfferMsg = '';
var removeProductAssert = '';
var removeProduct = '';
var testOffersUrl = '';
var productUrl1 = '';
var newCreditCardRadioButton = '';
var shippingType = '';
var shippingMethod1 = '';
var shippingMethod2 = '';
var shippingMethod3 = '';
var giftWrap = '';
var giftWrapButtonEnable = '';
var giftWrapButton = '';
var giftWrapMessage = '';
var cartPageSampleProduct = '';
var freeGiftWrap = [];
var freeSampleProduct = [];
var accountPageValidation = '';
var adyenPassword = '';
var clickOnAdyenButton = '';
var placeOrderToPasswordPage = '';
var cookieRejectButton = '';
var selectPaypal = '';
var continuePaypal = '';
var ppSelectPaypal = '';
var continueToLoginPaypal = '';
var enterPasswordPaypal = '';
var enterEmailPaypal = '';
var confirmPaymentPaypal = '';
var ppAccountpageValidation = '';
var continueToProceedPaypal = '';
var continueWithSample = '';
var placeOrder1 = '';
var orderConfirmationMsgid1 = '';
var placeOrderValidation1 = '';
var waitFortime = '';
var expressPaypalCheckout = '';
var ppCheckout = '';
var submitPaypal = '';
var ppRadiobutton = '';
var ppSample = '';
var confirmPaypal = '';
var ppMobCheckoutCreditCard = '';
var mobCheckoutPp = '';
var selectAfterpay = '';
var continueAfterpay = '';
var continueToLogin = '';
var enterPassword = '';
var enterEmail = '';
var loginAfterPay = '';
var submitAfterpay = '';
var confirmPaymentAfterPay = '';
var continueToProceed = '';
var enterVerificationCode = '';
var enterEmailAfterPay = '';
var acRegisterNow = '';
var acNavigateSigninurl = '';
var acRegistrationFirstName = '';
var acRegistrationLastName = '';
var acRegisterEmailId = '';
var acRegisterPWD = '';
var acRegisterationTerms = '';
var acRegisterButton = '';
var useReload = '';
var useReload1 = '';
var newemail = '';
var PPorderpagepopupclose = '';
var acSignoutButton = '';
var acNeedToClickLogInLinkAgain = '';
var acReturnUserEmailId = '';
var acReturnUserPWD = '';
var acReturnUserLoginButton = '';
var addTitle = '';
var acMobNavigateSigninurl = '';
var acMobHamburgerIcon = '';
var acMobRegisterNow = '';
var acMobLoggedInProfileLink = '';
var acMobNeedToClickLogInLinkAgain = '';
var acMobSignoutButton = '';
var acMobRegistrationFirstName = '';
var acMobRegistrationLastName = '';
var acMobRegisterEmailId = '';
var acMobRegisterPWD = '';
var acMobRegisterationTerms = '';
var acMobRegisterButton = '';
var giftWrapFlag = '';
var accountSettings = '';
var xLRptWriteFlag = process.env.WRITETOCSV || 'true';
var orderNumberFromOrderDetails = '';
var regex = /\d+/g;
var getOrderIDREG = '';
var orderNumberFromOrderDetails = '';
var loadingTime = '';
var timeOut = '';
var pollingTime = '';
var pollingTime1 = '';
var waitingTime = '';
var cartPopupClose = '';
var envir = process.env.ENVIRONMENT || 'PROD';

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

function newUserEmail() {
  var realEmailid = 'saramcc.elc';
  var strValues = 'abc123';
  var strEmail = '';
  var strTmp;
  for (var i = 0; i < 4; i++) {
    strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
    strEmail = strEmail + strTmp;
  }
  strTmp = '';
  strEmail = realEmailid + '+' + strEmail + '@gmail.com';
  return strEmail;
}

var RUID = [];
function ReturnUserID() {
  return RUID[Math.floor(Math.random() * RUID.length)];
}

var SCRUID = [];
function SCReturnUserID() {
  return SCRUID[Math.floor(Math.random() * SCRUID.length)];
}

var t = require('taiko');
const assert = require('assert');
let siteDefinition, source, NullDataException;
let Hengine = require('../../../../datainterface/providers/hengine');
const Helper = require('../../helpers/helper');
const Util = require('../../../../utilities/util.js');

const messages = {
  stepNotApplicable: 'This step is not applicable for this Brand/Locale',
  discountApplied: 'The discount has been applied.',
  discountNotApplied: 'The discount has been not applied.',
  couponExpected:
    'The coupon code test_global_percent_discountt is not valid. is expected',
  couponNotExpected:
    'The coupon code test_global_percent_discountt is not valid. is not expected',
  productRemoved: 'Remove Product is expected',
  productNotRemoved: 'Remove Product is not expected',
};

const matchCondition = true;

var toplaceorder = process.env.PLACEORDER || 'true'; //true to place order and false to not place the order


function reinitialize() {
  skuIds = [
    CommonData.skuId1,
    CommonData.skuId2,
    CommonData.skuId3,
    CommonData.skuId4,
    CommonData.skuId5,
  ];

  freeSampleProduct = [
    {
      loc: cartPageSampleProduct,
      action: 'click',
    },
  ];

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
  checkoutButton = [
    {
      loc: checkoutButtonId,
      action: 'click',
    },
  ];

  samplePage = [
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

  shippingDetails = [
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
      loc: enterZipcode,
      data: CommonData.ZIPCODE,
      action: 'Onlywrite',
    },
    {
      loc: enterPhone,
      data: CommonData.PHONE,
      action: 'write',
    },
    {
      loc: returnEnterAddress1,
      data: CommonData.ADDRESS1,
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
      loc: selectState1,
      data: CommonData.STATE,
      action: 'tryCatchClick',
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
    {
      loc: continueToPayment1,
      action: 'tryCatchClick',
    },
  ];

  freeGiftWrap = [
    {
      loc: giftWrap,
      action: 'click',
    },
    {
      loc: giftWrapButtonEnable,
      action: 'click',
    },
    {
      loc: giftWrapMessage,
      data: CommonData.giftmessage,
      action: 'write',
    },
    {
      loc: giftWrapButton,
      action: 'click',
    },
  ];
}

async function initFrameworkSettings(setNo) {
  // This should come from Gauge Tags inputs
  let tags = process.env.tags.split(',');
  ({ siteDefinition, source, NullDataException } = await Hengine.Initializer(
    tags,
    feature,
    this,
    setNo
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

step('ROM Initialize Helix <set_no>', async function (setNo) {
  // console.log(process.env.tags.split(','));
  // console.log('set_no: ' + setNo);
  // Initialize the selectors from DB
  await initFrameworkSettings(setNo);
});

step('ROM Set Cookies', async function () {
  await t.setConfig({ navigationTimeout: parseInt(timeoutSetting, 10) });
  await Helper.setWindowSize(Util.ScreenSizes['1040p'], t);
  await Helper.setWAFCookie(siteDefinition, t);
  await Helper.setAdroll(siteDefinition, t);
  await Helper.setAkamaiBypass(siteDefinition, t);
  await Helper.setApiEnv(siteDefinition, t);
  await Helper.getPerlgemEnvCookie(siteDefinition, t);
  await Helper.setOtherCookies(siteDefinition, t);
  await Helper.setTestOrderCookie(siteDefinition, t);
  await Helper.setRevisionTag(siteDefinition, t);
});

step('ROM Go to category and browse to Product', async function () {
  if (categoryUrl !== '') {
    await t.goto(
      siteDefinition.executionContext.adminUrl + categoryUrl + CommonData.CatID,
      {
        waitForEvents: ['DOMContentLoaded'],
      }
    );
  }
});

async function DropdownAction(dropdownloc) {
  if (dropdownloc !== '') {
    gauge.screenshot();
    await t.dropDown({ name: dropdownloc }).select({ index: 1 });
    gauge.screenshot();
  }
}

async function ElementAction(ElementObj) {
  for (i = 0; i < ElementObj.length; i++) {
    switch (ElementObj[i].action) {
      case 'write':
        {
          if (ElementObj[i].loc !== '') {
            await t.evaluate(await t.$(ElementObj[i].loc), (ele) =>
              ele.focus()
            );
            await t.write(
              ElementObj[i].data,
              t.into(await t.$(ElementObj[i].loc))
            );
          }
        }
        break;
      case 'Onlywrite':
        {
          if (ElementObj[i].loc !== '') {
            await t.write(
              ElementObj[i].data,
              t.into(await t.$(ElementObj[i].loc))
            );
            await t.waitFor(waitFortime);
          }
        }
        break;
      case 'click':
        {
          if (ElementObj[i].loc !== '') {
            await t.evaluate(await t.$(ElementObj[i].loc), (ele) => {
              ele.focus();
              ele.click();
            });
            gauge.screenshot();
          }
        }
        break;
      case 'tryCatchClick':
        {
          if (ElementObj[i].loc !== '') {
            try {
              gauge.screenshot();
              await t.evaluate(await t.$(ElementObj[i].loc), (ele) => {
                ele.focus();
                ele.click();
              });
            } catch (e) {
              console.log('Element did not appear hence it is skipped');
            }
          }
        }
        break;

      case 'IDDropdowntxt':
        {
          if (ElementObj[i].loc !== '') {
            await t
              .dropDown({ id: ElementObj[i].loc })
              .select(ElementObj[i].data);
            gauge.screenshot();
          }
        }
        break;

      case 'writeusingdatafromfunction':
        if (ElementObj[i].loc !== '') {
          if (ElementObj[i].Datafrom === 'Emailfun') {
            await t.evaluate(await t.$(ElementObj[i].loc), (ele) =>
              ele.focus()
            );
            let guestUserNewUserEmailId = newUserEmail();
            await t.write(
              guestUserNewUserEmailId,
              t.into(await t.$(ElementObj[i].loc))
            );
          }
        }
        break;

      case 'IndexDropdownName':
        {
          if (ElementObj[i].loc !== '') {
            await t.dropDown({ name: ElementObj[i].loc }).select({ index: 5 });
            gauge.screenshot();
          }
        }
        break;

      case 'WaitforElementNwritealongwithkeyword':
        if (ElementObj[i].loc !== '') {
          await t.evaluate(await t.$(ElementObj[i].loc), (ele) => ele.focus(), {
            force: true,
          });
          await t.write(
            ElementObj[i].data,
            t.into(await t.$(ElementObj[i].loc))
          );
        }
        break;
    }
  }
}

async function GotoProdcatSkuID() {
  await t.t.goto(
    siteDefinition.executionContext.adminUrl + categoryUrl + CommonData.CatID,
    {
      waitForEvents: ['DOMContentLoaded'],
    }
  );
  if (await (await t.$(productID)).exists()) {
    gauge.message('Product ID exists');
    var ProductIDtext = await (await t.$(productID)).elements();
    for (let i = 2; i <= ProductIDtext.length + 2; i++) {
      let prodIdlocator = prodIDSingle + i + ']/td[1]';
      if (await (await t.$(prodIdlocator)).exists()) {
        tmpProdID = await (await t.$(prodIdlocator)).text();
        prodID.push(tmpProdID);
      } else {
        break;
      }
    }
    for (let j = 0; j < prodID.length; j++) {
      await t.goto(
        siteDefinition.executionContext.adminUrl + productUrl + prodID[j],
        {
          waitForEvents: ['DOMContentLoaded'],
        }
      );
      var isShoppableValue = await (await t.$(isShoppable)).text();
      var isDisplayableValue = await (await t.$(isDisplayable)).text();
      if (isShoppableValue === '1' && isDisplayableValue !== '0') {
        gauge.message(
          'The Product with Prod ID - ' +
            prodID[j] +
            ' is available and proceeding to add to Cart'
        );
        if (await (await t.$(productUrl)).exists(timeOut, pollingTime)) {
          let url = await (await t.$(productUrl)).text();
          gauge.message(url);
          await t.goto(siteDefinition.executionContext.url + url, {
            waitForEvents: ['DOMContentLoaded'],
          });
          gauge.screenshot();
          break;
        }
      } else {
        gauge.message(
          'The Product with Prod ID - ' +
            prodID[j] +
            ' is NOT available for adding it to Cart '
        );
        notAvailableProductsCount++;
      }
    }
    if (notAvailableProductsCount === prodID.length) {
      matchCondition = false;
      assert(
        matchCondition,
        'None of the products are available for adding it to Cart.'
      );
    }
  }
}

async function ValidateinSPP(SPPpageHeader) {
  if (await (await t.$(SPPpageHeader)).exists(timeOut, pollingTime)) {
    assert(true);
    gauge.message('In SPP.');
  } else {
    assert(false, 'Not in SPP.');
  }
}

async function AddproducttoBag() {
  if (javaAlertPopup !== '') {
    t.alert(javaAlertPopup, async () => await t.accept());
  }
  let AddtoBagExist = 0;
  for (let i = 0; i < 2; i++) {
    if (await (await t.$(addToBagSPP)).exists(timeOut, pollingTime)) {
      if ((await (await t.$(addToBagSPP)).isDisabled()) !== true) {
        await t.evaluate(
          await t.$(addToBagSPP, { waitForEvents: ['loadEventFired'] }),
          (ele) => {
            ele.focus();
            ele.click();
          }
        );
        gauge.message('Add to Bag btn is enabled and Product added to cart.');
        gauge.screenshot();
        break;
      } else {
        assert(false, 'Add to Bag btn is disabled.');
      }
    } else {
      await t.reload({ waitForEvents: ['loadEventFired'] });
      gauge.message(
        'Add to Bag btn does not exist within 30 seconds, thus reloading the page.'
      );
      AddtoBagExist++;
    }
  }
  if (AddtoBagExist === 2) {
    assert(
      false,
      'Add to bag does not load within expected time and reload the page.'
    );
  }
}

async function Clickoncartoverlay(CartpageLink) {
  let cartval = 0;
  let cartexists = 0;
  for (i = 0; i < 3; i++) {
    if (await (await t.$(cartCountValue)).exists(timeOut, pollingTime)) {
      var cartcount = await (await t.$(cartCountValue)).text();
      gauge.message('Cart count value =' + cartcount);
      if (!(parseInt(cartcount) === 0 || cartcount === '')) {
        assert(true);
        await t.evaluate(
          await t.$(CartpageLink, { waitForEvents: ['loadEventFired'] }),
          (ele) => ele.click()
        );
        gauge.message('Cart overlay exists and clicked on it.');
        gauge.screenshot();
        break;
      } else {
        gauge.message('The cart count value is 0, so reload the page.');
        await t.reload({ waitForEvents: ['loadEventFired'] });
        cartval++;
        if (cartval === 1) {
          await t.evaluate(
            await t.$(addToBagSPP, { waitForEvents: ['loadEventFired'] }),
            (ele) => ele.click()
          );
        }
      }
    } else {
      cartexists++;
    }
  }
  if (cartval === 3 || cartexists === 3) {
    gauge.message(
      'The shopping cart value is 0, so click the bag icon and browse to the shopping cart page.'
    );
    await t.evaluate(
      await t.$(bagIcon, { waitForEvents: ['loadEventFired'] }),
      (ele) => ele.click()
    );
  }
}

let Noproductincart = 0;

async function Validateincartpage(emptycartmsg) {
  var CPurl = await t.currentURL();
  if (CPurl.includes(CartpageURLText)) {
    gauge.message('Navigated to cart page as expected.');
    gauge.screenshot();
    if (await (await t.$(emptycartmsg)).exists(timeOut, pollingTime)) {
      gauge.message('No Product added to cart.');
      Noproductincart++;
    } else {
      gauge.message('Product added to cart.');
    }
  } else {
    assert(false, 'Expected to be navigated to Cartpage but it is not.');
  }
}

/******Respective Front end steps********/

/*This step applicable only for adding product from category ID*/
step('ROM Go to SkuId and browse to SPP', async function () {
  await GotoProdcatSkuID();
});

step('ROM Add Product to the cart', async function () {
  for (i = 0; i < skuIds.length; i++) {
    await t.goto(
      siteDefinition.executionContext.adminUrl + productUrl + skuIds[i],
      {
        waitForEvents: ['DOMContentLoaded'],
      }
    );
    var isShoppableValue = await (await t.$(isShoppable)).text();
    var isDisplayableValue = await (await t.$(isDisplayable)).text();
    if (isShoppableValue === '1' && isDisplayableValue !== '0') {
      gauge.message(
        'The Product with SKU ID - ' +
          skuIds[i] +
          ' is available and proceeding to add to Cart'
      );
      if (await (await t.$(productUrlRom)).exists(timeOut, pollingTime)) {
        let url = await (await t.$(productUrlRom)).text();
        gauge.message(url);
        await t.goto(siteDefinition.executionContext.url + url, {
          waitForEvents: ['DOMContentLoaded'],
        });
        gauge.screenshot();
        break;
      } else {
        var nodisplayableProduct = await (
          await t.$(noDisplayableProductError)
        ).text();
        gauge.message(nodisplayableProduct);
      }
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
    matchCondition = false;
    assert(
      matchCondition,
      'None of the products are available for adding it to Cart'
    );
  }
});
step('ROM Open Website', async function () {
  await t.goto(siteDefinition.executionContext.adminUrl + productUrl, {
    waitForNavigation: false,
  });
  gauge.screenshot();
});

step('ROM Go to Prodcat and browse to SPP', async function () {
  if (await t.$(productID).exists()) {
    gauge.message('Product ID exists');

    var ProductIDtext = await (await t.$(productID)).elements();

    for (let i = 2; i <= ProductIDtext.length + 2; i++) {
      let prodIdlocator = prodIDSingle + i + ']/td[1]';
      if (await (await t.$(prodIdlocator)).exists()) {
        tmpProdID = await (await t.$(prodIdlocator)).text();
        prodID.push(tmpProdID);
      } else {
        break;
      }
    }
    for (let j = 0; j < prodID.length; j++) {
      await t.goto(
        siteDefinition.executionContext.adminUrl + productUrl + prodID[j],
        {
          waitForEvents: ['DOMContentLoaded'],
        }
      );
      var isShoppableValue = await (await t.$(isShoppable)).text();
      var isDisplayableValue = await (await t.$(isDisplayable)).text();
      if (isShoppableValue === '1' && isDisplayableValue !== '0') {
        gauge.message(
          'The Product with Prod ID - ' +
            prodID[j] +
            ' is available and proceeding to add to Cart'
        );

        if (await (await t.$(productUrl)).exists(timeOut, pollingTime)) {
          let url = await (await t.$(productUrl)).text();
          gauge.message(url);
          await t.goto(siteDefinition.executionContext.url + url, {
            waitForEvents: ['DOMContentLoaded'],
          });
          gauge.screenshot();
          break;
        }
      } else {
        gauge.message(
          'The Product with Prod ID - ' +
            prodID[j] +
            ' is NOT available for adding it to Cart '
        );
        notAvailableProductsCount++;
      }
    }
    if (notAvailableProductsCount === prodID.length) {
      matchCondition = false;
      assert(
        matchCondition,
        'None of the products are available for adding it to Cart'
      );
    }
  }
});

step('ROM Mltiple Product Add to the cart', async function () {
  let counter = 0;
  for (i = 0; i < skuIds.length; i++) {
    await t.goto(
      siteDefinition.executionContext.adminUrl + productUrl + skuIds[i],
      {
        waitForEvents: ['DOMContentLoaded'],
      }
    );

    if (await (await t.$(isShoppable)).exists()) {
      var isShoppableValue = await (await t.$(isShoppable)).text();
      if (isShoppableValue === '1') {
        gauge.message(
          'The Product with SKU ID - ' +
            skuIds[i] +
            ' is available and proceeding to add to Cart'
        );
        let elements = await (await t.$(productText)).elements();
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
        counter++;
        if (counter === 2) {
          break;
        }
      } else {
        gauge.message(
          'The Product with SKU ID - ' +
            skuIds[i] +
            ' is NOT available for adding it to Cart '
        );
        notAvailableProductsCount++;
      }
    } else {
      gauge.message(skuIds[i] + ' is not a valid SKU ID');
    }
  }
  if (notAvailableProductsCount === skuIds.length) {
    matchCondition = false;
    assert(
      matchCondition,
      'None of the products are available for adding it to Cart'
    );
  }
});

step('ROM Three Product Add to the cart', async function () {
  let counter = 0;
  for (i = 0; i < skuIds.length; i++) {
    await t.goto(
      siteDefinition.executionContext.adminUrl + productUrl + skuIds[i],
      {
        waitForEvents: ['DOMContentLoaded'],
      }
    );

    if (await (await t.$(isShoppable)).exists()) {
      var isShoppableValue = await (await t.$(isShoppable)).text();
      if (isShoppableValue === '1') {
        gauge.message(
          'The Product with SKU ID - ' +
            skuIds[i] +
            ' is available and proceeding to add to Cart'
        );
        let elements = await (await t.$(productText)).elements();
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
        counter++;
        if (counter === 3) {
          break;
        }
      } else {
        gauge.message(
          'The Product with SKU ID - ' +
            skuIds[i] +
            ' is NOT available for adding it to Cart '
        );
        notAvailableProductsCount++;
      }
    } else {
      gauge.message(skuIds[i] + ' is not a valid SKU ID');
    }
  }
  if (notAvailableProductsCount === skuIds.length) {
    matchCondition = false;
    assert(
      matchCondition,
      'None of the products are available for adding it to Cart'
    );
  }
});

step('ROM Validate in SPP or not', async function () {
  if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
    await ValidateinSPP(sppPageprodHeader);
  } else {
    await ValidateinSPP(sppPageprodHeaderMob);
  }
});

step('ROM Add product to Bag in SPP', async function () {
  await AddproducttoBag();
});

step(
  'ROM Navigate to cart page by clicking on Cart overlay',
  async function () {
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      await Clickoncartoverlay(clickCartpageLink);
    } else {
      await Clickoncartoverlay(clickCartpageLinkMob);
    }
  }
);

/*Note: For NA use "await GotoProdcatSkuID()" function in "Validate in Cartpage or not step"*/
step('ROM Validate in Cartpage or not', async function () {
  if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
    await Validateincartpage(emptyCart);
    if (Noproductincart === 1) {
      gauge.message(
        'In the first iteration the product was not added, so go for second iteration.'
      );
      await GotoProdcatSkuID();
      await ValidateinSPP(sppPageprodHeader);
      await AddproducttoBag();
      await Clickoncartoverlay(clickCartpageLink);
      await Validateincartpage(emptyCart);
      if (Noproductincart === 2) {
        assert(
          false,
          'After the 2nd iteration, the product was not added to the basket.'
        );
      }
    }
  } else {
    await Validateincartpage(emptyCartMob);
    if (Noproductincart === 1) {
      gauge.message(
        'In the first iteration the product was not added, so go for second iteration.'
      );
      await GotoProdcatSkuID();
      await ValidateinSPP(sppPageprodHeaderMob);
      await AddproducttoBag();
      await Clickoncartoverlay(clickCartpageLinkMob);
      await Validateincartpage(emptyCartMob);
      if (Noproductincart === 2) {
        assert(
          false,
          'After the 2nd iteration, the product was not added to the basket.'
        );
      }
    }
  }
});

step('ROM Open Website', async function () {
  await t.goto(siteDefinition.executionContext.adminUrl + productUrl, {
    waitForNavigation: false,
  });
  gauge.screenshot();
});

step('ROM ReOpen Product Url', async function () {
  await t.goto(siteDefinition.executionContext.adminUrl + productUrl, {
    waitForNavigation: false,
  });
  gauge.screenshot();
});

// If cart popup's id is defined wait and do the popup close
step('ROM Cart Popup Close', async function () {
  if (cartPopupClose !== '') {
    await t.waitFor(waitFortime);
    /**Cart Popup Close is applicable for few Brand/Locale/platform(PC/MOB) */
    try {
      await t.click(await t.$(cartPopupClose), { waitForNavigation: false });
    } catch (e) {
      gauge.message(
        'View Cart Popup Close is not applicable for this Brand/Locale'
      );
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('ROM Click ADD TO Cart', async function () {
  //await t.evaluate(link("Add to Cart"), ele => ele.click());
  let elements = await (await t.$(productText)).elements();
  let attributePromises = elements.map((e) => {
    return t.evaluate(e, (elem) => {
      return elem.getAttribute('href');
    });
  });
  var viewCartUrl = await Promise.all(attributePromises);
  await t.goto(siteDefinition.executionContext.url + viewCartUrl, {
    waitForNavigation: false,
  });
});

// If signup popup's id is defined wait and do the popup close
step('ROM Signup Popup Close', async function () {
  if (signupPopupClose !== '') {
    await t.waitFor(waitFortime);
    /**signup Popup Close is applicable for few Brand/Locale/platform(PC/MOB) */
    try {
      await t.click(await t.$(signupPopupClose));
    } catch (e) {
      gauge.message(
        'Signup Popup Close is not applicable for this Brand/Locale'
      );
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

/***** Generic function with switch case to handle different element action*********/

step(
  'ROM Enter Guest/New User Email Id and Navigate to Shipping Details Page',
  async function () {
    var GuestuserDetails = [
      {
        loc: guestUserId,
        Datafrom: 'Emailfun',
        action: 'writeusingdatafromfunction',
      },
      {
        loc: continueAsGuest,
        action: 'click',
      },
    ];

    await ElementAction(GuestuserDetails);
  }
);

/****** How to pass argument for function (Example) ************/

step(
  'ROM Click On Continue Checkout Button and Navigate to Samples/Sign In page',
  async function () {
    await ElementAction(checkoutButton);
  }
);

step(
  'ROM Click On Sample Page1 Continue Button and Proceed to Samples/SignIn Page',
  async function () {
    await ElementAction(samplePage);
  }
);

step(
  'ROM Click On Guest/New User Header Tab to Enter Guest/New User Details',
  async function () {
    await ElementAction(guestUserLink);
  }
);

step('ROM Enter shipping address', async function () {
  await ElementAction(shippingDetails);
});

step('ROM Enter Credit Details', async function () {
  //This step is applicable for all US and CA brands except BU-US and BU-CA
  if (ccDetails !== '') {
    if (creditCardNumber !== '') {
      if (!(await (await t.$(creditCardNumber)).exists(timeOut, ccTime))) {
        await t.reload();
      }
      await t.waitFor(await t.$(creditCardNumber), ccTime);
      if (await (await t.$(creditCardNumber)).exists()) {
        assert(true);
        await t.evaluate(await t.$(creditCardNumber), (ele) => ele.focus());
        await t.clear(await t.$(creditCardNumber));
        await t.write(
          CommonData.CREDITCARD,
          t.into(await t.$(creditCardNumber))
        );
        gauge.screenshot();

        if (cvvFieldId !== '') {
          await t.evaluate(await t.$(cvvFieldId), (ele) => ele.focus());
          await t.write(CommonData.CVV, t.into(await t.$(cvvFieldId)));
        }
        /** SelectPCMonth and SelectPCYear are only for OR-CA, SB-US and SB-CA */
        if (selectPcMonth !== '') {
          await t.dropDown({ id: selectPcMonth }).select({ index: '5' });
        }
        if (selectPcYear !== '') {
          await t.dropDown({ id: selectPcYear }).select({ index: '5' });
        }
        /** namemonth and nameyear are only for JM-US, JM-CA and LS-US */
        if (nameMonth !== '') {
          await t.dropDown({ name: nameMonth }).select({ index: '5' });
        }
        if (nameYear !== '') {
          await t.dropDown({ name: nameYear }).select({ index: '5' });
        }
        //All except JM-US, JM-CA, SB-US, SB-CA, OR-US and LS-US
        if (pcMonthYear !== '') {
          await t.evaluate(await t.$(pcMonthYear), (ele) => ele.focus());
          await t.write(CommonData.PCCVVMONTH, t.into(await t.$(pcMonthYear)));
        }
        if (enterCcName !== '') {
          await t.write(CommonData.CCNAME, t.into(await t.$(enterCcName)));
        }
        if (selectMobileMonth !== '') {
          await t
            .dropDown({ id: selectMobileMonth })
            .select(CommonData.CCMONTH);
        }
        if (selectMobileYear !== '') {
          await t.dropDown({ id: selectMobileYear }).select(CommonData.YEAR);
        }
      }
    } else {
      gauge.message("The Credit card fields doesn't exist!");
      assert(false);
    }
  }
  gauge.screenshot();
});

step('ROM Click on Use Billing address', async function () {
  if (useBillingAddress !== '') {
    /**Click on Use Billing address is applicable for few Brand/Locale/platform(PC/MOB) */
    await t.evaluate(await t.$(useBillingAddress), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'ROM Click On Guest User / New User / Return Place Order',
  async function () {
    if (toplaceorder === 'true' && placeOrder !== '') {
      /**Click On Place order is applicable for few Brand/Locale/platform(PC/MOB) */
      await t.evaluate(await t.$(placeOrder), (ele) => {
        ele.focus();
        ele.click(),
          {
            waitForEvents: ['loadEventFired'],
          };
      });

      /*gauge.message('some time unable to navigate order cofirm page so,clicking pay button one more time to place the order')*/
      for (i = 0; i < 3; i++) {
        if (await (await t.$(orderConfirmationMsgid)).exists()) {
          break;
        } else {
          gauge.message(
            'Order Number is not available and hence clicking Place order button again'
          );
          await t.evaluate(await t.$(placeOrder), (ele) => {
            ele.focus();
            ele.click();
          });
        }
      }
      gauge.screenshot();
    }
  }
);

step('ROM Return User select address', async function () {
  if (returnUserSelectAddress !== '') {
    try {
      await t
        .dropDown({ name: returnUserSelectAddress })
        .select({ index: '1' });
    } catch (e) {
      gauge.message(
        'click on adyen button is not displayed and hence this step is skipped'
      );
    }
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('ROM Place order validation', async function () {
  if (placeOrderValidation !== '') {
    if (await (await t.$(orderConfirmationMsgid)).exists()) {
      assert(true);
      var confirmurl = await t.currentURL();
      var GetOrderNumber = await (await t.$(orderConfirmationMsgid)).text();
      assert(confirmurl.includes(placeOrderValidation));
      gauge.message('Order placed successfully');
      gauge.message(GetOrderNumber);
      console.log(GetOrderNumber);
      gauge.screenshot();
    } else {
      gauge.message('Order not placed');
      gauge.screenshot();
      assert(false);
    }
  }
});

step('ROM Removing popup after placing order', async function () {
  if (orderPagePopupClose !== '') {
    await (await t.$(orderPagePopupClose)).exists(timeOut, pollingTime1);
    try {
      await t.evaluate(await t.$(orderPagePopupClose), (ele) => {
        ele.focus();
        ele.click();
      });
      /**orderpage Popup Close is applicable for few Brand/Locale/platform(PC) */
    } catch (e) {
      gauge.message(
        'Orderpage Popup is not displayed and hence this step is skipped'
      );
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('ROM MOB Removing popup after placing order', async function () {
  if (mobOrderPagePopupClose !== '') {
    await (await t.$(mobOrderPagePopupClose)).exists(timeOut, pollingTime1);
    /**orderpage Popup Close is applicable for few Brand/Locale/platform(MOB) */
    try {
      await t.evaluate(await t.$(mobOrderPagePopupClose), (ele) => {
        ele.focus();
        ele.click();
      });
    } catch (e) {
      gauge.message(
        'Orderpage Popup is not displayed and hence this step is skipped'
      );
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'ROM Click On Return User Header Tab to Enter Return User Details',
  async function () {
    if (returnUserSigninLink !== '') {
      /**Click On Return User Shipping Details Edit Link is applicable for few Brand/Locale/platform(PC/MOB) */
      await t.evaluate(await t.$(returnUserSigninLink), (ele) => ele.click());
    }
    if (mobReturnUserSigninLink !== '') {
      await t.evaluate(await t.$(mobReturnUserSigninLink), (ele) =>
        ele.click()
      );
    }
  }
);

step(
  'ROM Enter Return User Email Id Details and Navigate to Cart Merge Checkout/Order Review Page',
  async function () {
    if (returnUserId !== '') {
      await t.evaluate(await t.$(returnUserId), (ele) => ele.focus());
      await t.write(CommonData.RID, t.into(await t.$(returnUserId)));
      gauge.message('Return user Email ID: ' + CommonData.RID);
    }
    if (returnUserPWD !== '') {
      await t.write(CommonData.RPWD, t.into(t.textBox({ id: returnUserPWD })));
    }
    if (returnUserSigninlabel !== '') {
      await t.evaluate(t.button(returnUserSigninlabel), (ele) => ele.click());
    }
    if (returnUserSigninButton !== '') {
      await t.evaluate(await t.$(returnUserSigninButton), (ele) => {
        ele.focus();
        ele.click();
      });
      gauge.screenshot();
    }
  }
);

step('ROM Cart Merge Checkout', async function () {
  if (returnUserContinueCHECKOUTVIEWCART !== '') {
    /**Click On Cart Merge Checkout Continue Button is applicable for few Brand/Locale/platform(PC/MOB) */
    try {
      await t.evaluate(await t.$(returnUserContinueCHECKOUTVIEWCART), (ele) =>
        ele.click()
      );
      gauge.screenshot();
    } catch (e) {
      gauge.message(
        'Cart Merge Checkout Continue Button is not displayed and hence this step is skipped'
      );
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('ROM Click Cart Merge Sample Checkout', async function () {
  if (continueSample1 !== '') {
    /**Cart Merge Sample Page Continue Button is applicable for few Brand/Locale/platform(PC/MOB) */
    try {
      await t.evaluate(await t.$(continueSample1), (ele) => ele.click());
      await t.evaluate(await t.$(continueSample2), (ele) => ele.click());
    } catch (e) {
      gauge.message(
        'Cart Merge Sample Page Continue Button is not displayed and hence this step is skipped'
      );
    }
  }
});

step('ROM Click On Return User Shipping Details Edit Link', async function () {
  if (returnUserShippingLinkText !== '') {
    /**Click On Return User Shipping Details Edit Link is applicable for few Brand/Locale/platform(PC/MOB) */
    try {
      await t.evaluate(t.link({ href: returnUserShippingLinkText }), (ele) =>
        ele.click()
      );
    } catch (e) {
      gauge.message(
        'Click On Return User Shipping Details Edit Link is not displayed and hence this step is skipped'
      );
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
  gauge.screenshot();
});

step('ROM Click On Return User Add New Address Button/Link', async function () {
  if (returnUserAddNewaddress !== '') {
    try {
      await t.evaluate(await t.$(returnUserAddNewaddress), (ele) =>
        ele.click()
      );
    } catch (e) {}
  }
  if (returnUserAddNewaddress1 !== '') {
    /**Return User new address is applicable for few Brand/Locale/platform(PC/MOB) */
    try {
      await t.evaluate(await t.$(returnUserAddNewaddress1), (ele) =>
        ele.click()
      );
    } catch (e) {}
  } else {
  }
  gauge.screenshot();
});

step('ROM Return User Payment Link Text', async function () {
  if (returnUserPaymentLinkText !== '') {
    /**Return User new paymet link is applicable for few Brand/Locale/platform(PC/MOB) */
    try {
      await t.evaluate(await t.$(returnUserPaymentLinkText), (ele) =>
        ele.click()
      );
    } catch (e) {
      gauge.message(
        'Return User new paymet link is not displayed and hence this step is skipped'
      );
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('ROM Return User New Payment Radio button', async function () {
  if (returnUserNewPaymentbutton !== '') {
    /**Return User new paymet button is applicable for few Brand/Locale/platform(PC/MOB) */
    try {
      await t.evaluate(await t.$(returnUserNewPaymentbutton), (ele) =>
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
});

/********************************       MOB Steps           *******************************/

step('ROM Mobile Device Emulation', async function () {
  if (emulationDevice !== '') {
    await t.emulateDevice(emulationDevice);
    gauge.message('Emulation device: ' + emulationDevice);
  }
});

step('ROM Open Mobile Website', async function () {
  await t.goto(
    siteDefinition.executionContext.platform.toUpperCase() ===
      'MOBILE' + productUrl,
    { waitForNavigation: false }
  );
});

step('ROM MOB ReOpen Product Url', async function () {
  await t.goto(
    siteDefinition.executionContext.platform.toUpperCase() ===
      'MOBILE' + productUrl,
    { waitForNavigation: false }
  );
  gauge.screenshot();
});

step(
  'ROM MOB Click On Continue Checkout Button and Navigate to Samples/Sign In page',
  async function () {
    if (mobCheckoutViewcart !== '') {
      /**MOB checkout viewcart is applicable for few Brand/Locale/platform(MOB) */
      try {
        await t.evaluate(await t.$(mobCheckoutViewcart), (ele) => {
          ele.focus();
          ele.click();
        });
        gauge.screenshot();
      } catch (e) {}
    }
    if (mobCheckoutCreditCard !== '') {
      /**MOB checkout overlay is applicable for few Brand/Locale/platform(MOB) */
      try {
        await t.evaluate(await t.$(mobCheckoutCreditCard), (ele) => {
          ele.focus();
          ele.click();
        });
        gauge.screenshot();
      } catch (e) {}
    }
  }
);

step(
  'ROM MOB Click On Sample Page1 Continue Button and Proceed to Samples/SignIn Page',
  async function () {
    if (mobContinueSample1 !== '') {
      /**Click On MOB Sample Page1 Continue Button is applicable for few Brand/Locale/platform(MOB) */
      try {
        await t.evaluate(await t.$(mobContinueSample1), (ele) => {
          ele.focus();
          ele.click();
        });
        await t.evaluate(await t.$(mobContinueSample2), (ele) => {
          ele.focus();
          ele.click();
        });
        gauge.screenshot();
      } catch (e) {}
    }
  }
);
/***********************************************************CART******************************************************/

step('ROM Select QTY increase', async function () {
  if (CommonData.QNTY !== '') {
    await t.evaluate(await t.$(quantitySelect1), (ele) => ele.click());
    await t.evaluate(await t.$(quantitySelect1), (ele) => ele.click());
    gauge.screenshot();
  }
});

step('ROM Select QTY dropdown', async function () {
  if (quantitySelect !== '') {
    await t.dropDown({ name: quantitySelect }).select(CommonData.QNTY);
    gauge.screenshot();
  }
});

step('ROM ENTER VALID OFFERCODE', async function () {
  if (offerCode !== '') {
    await t.write(
      CommonData.OFFERCODENUMBER,
      t.into(t.textBox({ id: offerCode }))
    );
    gauge.screenshot();
  }
});

step('ROM Apply Offer Button and Assert', async function () {
  if (offerCodeButton !== '') {
    await t.evaluate(await t.$(offerCodeButton), (ele) => ele.click());
    gauge.screenshot();
    var ExpectedValidOfferMsg = await (await t.$(validOfferMsg)).text();
    if (
      ExpectedValidOfferMsg.toUpperCase().search(
        CommonData.VALIDOFFERMSG.toUpperCase()
      ) !== -1
    ) {
      assert(matchCondition, messages.discountApplied);
    } else {
      assert(!matchCondition, messages.discountNotApplied);
    }
  }
});

step('ROM Apply Offer Edit Button', async function () {
  if (offerEditButton !== '') {
    await t.evaluate(await t.$(offerEditButton), (ele) => ele.click());
    gauge.screenshot();
  }
});

step('ROM ENTER INVALID OFFERCODE', async function () {
  if (CommonData.INVALIDOFFERCODE !== '') {
    await t.clear(t.textBox({ id: enterInvalidOfferCode }));
    await t.write(
      CommonData.INVALIDOFFERCODE,
      t.into(t.textBox({ id: enterInvalidOfferCode }))
    );
    gauge.screenshot();
  }
});

step('ROM Apply Offer Button1 and Assert', async function () {
  if (applyOfferButton1 !== '') {
    await t.evaluate(await t.$(applyOfferButton1), (ele) => ele.click());
    gauge.screenshot();
    var ExpectedINValidOfferMsg = await (await t.$(inValidOfferMsg)).text();
    if (
      ExpectedINValidOfferMsg.toUpperCase().search(
        CommonData.INVALIDOFFERMSG.toUpperCase()
      ) !== -1
    ) {
      assert(matchCondition, messages.couponExpected);
    } else {
      assert(!matchCondition, messages.couponNotExpected);
    }
  }
});

step('ROM REMOVE PRODUCT ASSERT', async function () {
  if (
    removeProductAssert
      .toUpperCase()
      .search(CommonData.REMOVEPRODUCT.toUpperCase()) !== -1
  ) {
    gauge.screenshot();
    assert(matchCondition, messages.productRemoved);
  } else {
    assert(!matchCondition, messages.productNotRemoved);
  }
});

step('ROM REMOVE PRODUCT', async function () {
  if (removeProduct !== '') {
    await t.evaluate(await t.$(removeProduct), (ele) => ele.click());
    gauge.screenshot();
  }
});

step('ROM Open Test Offers PCURL', async function () {
  await t.goto(siteDefinition.executionContext.adminUrl + testOffersUrl, {
    waitForNavigation: false,
  });
});

step('ROM Open Test Offers MOBURL', async function () {
  await t.goto(
    siteDefinition.executionContext.platform.toUpperCase() ===
      'MOBILE' + testOffersUrl,
    {
      waitForNavigation: false,
    }
  );
});

step('ROM Open website1', async function () {
  await t.goto(siteDefinition.executionContext.adminUrl + productUrl1, {
    waitForNavigation: false,
  });
});

step('ROM MOBOpen website1', async function () {
  await t.goto(
    siteDefinition.executionContext.platform.toUpperCase() ===
      'MOBILE' + productUrl1,
    { waitForNavigation: false }
  );
});

step('ROM New Credit card radio button', async function () {
  if (newCreditCardRadioButton !== '') {
    await t.evaluate(t.radioButton({ id: newCreditCardRadioButton }), (ele) =>
      ele.click()
    );
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

// ROM

step('ROM Select Shipping Type', async function () {
  if (shippingType !== '') {
    await t.dropDown({ name: shippingType }).select({
      index: CommonData.SHIPPINGMETHOD,
    });
    gauge.screenshot();
  }
});

step('ROM Choose Shipping Method', async function () {
  if (CommonData.SHIPPING1 !== '') {
    await t.evaluate(await t.$(shippingMethod1), (ele) => ele.click());
  }
  if (CommonData.SHIPPING2 !== '') {
    await t.evaluate(await t.$(shippingMethod2), (ele) => ele.click());
  }
  if (CommonData.SHIPPING3 !== '') {
    await t.evaluate(await t.$(shippingMethod3), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('ROM Free Gift Wrap', async function () {
  if (CommonData.GiftWrapFlag !== '') {
    await ElementAction(freeGiftWrap);
  }
});

step('ROM Add Sample to Cart', async function () {
  await ElementAction(freeSampleProduct);
});

// *****************************ENE *******************************//

step('ROM Open Home Page Website', async function () {
  await t.goto(siteDefinition.executionContext.url + Url, {
    waitForEvents: ['DOMContentLoaded'],
  });
  gauge.screenshot();
});

step('ROM Open Mobile Home Page Website', async function () {
  await t.goto(siteDefinition.executionContext.url + Url, {
    waitForEvents: ['DOMContentLoaded'],
  });
  gauge.screenshot();
});

step('ROM Account page validation', async function () {
  if (accountPageValidation !== '') {
    var confirmurl = await t.currentURL();
    assert(confirmurl.includes(accountPageValidation));
    gauge.message('In Accouct Page');
    gauge.screenshot();
  }
});

step('ROM ENTER adyenpassword', async function () {
  if (adyenPassword !== '') {
    /**ENTER adyenpassword is applicable for few Brand/Locale/platform(PC/MOB) */
    try {
      await t.write(CommonData.ANPWD, t.into(await t.$(adyenPassword)));
    } catch (e) {
      gauge.message(
        'ENTER adyenpassword is not displayed and hence this step is skipped'
      );
    }
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('ROM click on adyen button', async function () {
  if (clickOnAdyenButton !== '') {
    /**click on adyen button is applicable for few Brand/Locale/platform(PC/MOB) */
    try {
      await t.evaluate(await t.$(clickOnAdyenButton), (ele) => ele.click());
    } catch (e) {
      gauge.message(
        'click on adyen button is not displayed and hence this step is skipped'
      );
    }
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('ROM place order to password page', async function () {
  if (placeOrderToPasswordPage !== '') {
    await t.evaluate(await t.$(placeOrderToPasswordPage), (ele) => ele.click());
  }
});

// If cart popup's id is defined wait and do the popup close
step('ROM CookieRejectButton', async function () {
  if (cookieRejectButton !== '') {
    /**CookieRejectButton is applicable for few Brand/Locale/platform(PC/MOB) */
    try {
      await t.click(await t.$(cookieRejectButton));
    } catch (e) {
      gauge.message(
        'Cookie RejectButton is not displayed and hence this step is skipped'
      );
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

/************************************************************************************Paypal***********************************************/

step('ROM PP Select Paypal', async function () {
  if (selectPaypal !== '') {
    await t.evaluate(await t.$(selectPaypal), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('ROM PP Continue Paypal', async function () {
  if (continuePaypal !== '') {
    await t.evaluate(await t.$(continuePaypal), (ele) => ele.click());
    if (await (await t.$(continuePaypal)).exists(timeOut, pollingTime)) {
      await t.evaluate(await t.$(continuePaypal), (ele) => ele.click());
    }

    if (ppSelectPaypal !== '') {
      await t.waitFor(waitFortime);
      await t.focus(await t.$(ppSelectPaypal));
      await t.press('Tab');
      await t.press('Enter');
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
});

step('ROM PP Continue To Login', async function () {
  if (continueToLoginPaypal !== '') {
    await t.evaluate(await t.$(continueToLoginPaypal), (ele) => ele.click());
    await t.waitFor(loadingTime);
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('ROM PP Enter Password', async function () {
  if (enterPasswordPaypal !== '') {
    await t.write(
      CommonData.PPPassword,
      t.into(await t.$(enterPasswordPaypal))
    );
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('ROM PP Enter Email', async function () {
  if (enterEmailPaypal !== '') {
    await t.write(CommonData.PPEmail, t.into(await t.$(enterEmailPaypal)));
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('ROM PP Click on ConfirmPaymentPaypal', async function () {
  if (confirmPaymentPaypal !== '') {
    await t.evaluate(await t.$(confirmPaymentPaypal), (ele) => ele.click());
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('ROM PP Account page validation', async function () {
  if (toplaceorder === 'true' && ppAccountpageValidation !== '') {
    await t.waitFor(waitFortime);
    var confirmurl = await t.currentURL();
    assert(confirmurl.includes(ppAccountpageValidation));
    gauge.message('In Accouct Page');
    gauge.screenshot();
  }
});

step('ROM PP Removing popup after placing order', async function () {
  if (PPorderpagepopupclose !== '') {
    await t.waitFor(waitFortime);
    await (await t.$(PPorderpagepopupclose)).exists(timeOut, pollingTime1);
    try {
      await t.evaluate(await t.$(PPorderpagepopupclose), (ele) => {
        ele.focus();
        ele.click();
      });
      /**orderpage Popup Close is applicable for few Brand/Locale/platform(PC) */
    } catch (e) {
      gauge.message(
        'Orderpage Popup is not displayed and hence this step is skipped'
      );
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('ROM PP Continue To Proceed', async function () {
  if (continueToProceedPaypal !== '') {
    await t.evaluate(await t.$(continueToProceedPaypal), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('ROM Continuewithsample', async function () {
  if (continueWithSample !== '') {
    await t.evaluate(await t.$(continueWithSample), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'ROM PP Click On Guest User / New User / Return Place Order',
  async function () {
    if (toplaceorder === 'true' && placeOrder1 !== '') {
      try {
        /**Click On Place order is applicable for few Brand/Locale/platform(PC/MOB) */
        await t.evaluate(await t.$(placeOrder1), (ele) => {
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
);

step('ROM PP Place order validation', async function () {
  if (toplaceorder === 'true' && placeOrderValidation1 !== '') {
    await t.waitFor(waitFortime); //As we developed this step for STAGE for 14 brands each brand loading time is different when its navigating back from 3rd party tool, we tried with all Is exists and Is visible some brand not worked so we used static wait
    if (await (await t.$(orderConfirmationMsgid1)).exists()) {
      assert(true);
      var confirmurl = await t.currentURL();
      var GetOrderNumber = await (await t.$(orderConfirmationMsgid1)).text();
      assert(confirmurl.includes(placeOrderValidation1));
      gauge.message('Order placed successfully');
      gauge.message(GetOrderNumber);
      console.log(GetOrderNumber);
      gauge.screenshot();
    } else {
      gauge.message('Order not placed');
      gauge.screenshot();
      assert(false);
    }
  }
});

/***************************************************************Express paypal*********************************************/
step('ROM PP Expresspaypalcheckout', async function () {
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
});

step('ROM PP Submit Paypal', async function () {
  if (submitPaypal !== '') {
    let loopCount = 1;
    if (await (await t.$(ppRadiobutton)).exists(timeOut, pollingTime)) {
      while (
        (await (await t.$(ppRadiobutton)).attribute('checked')) !== 'true'
      ) {
        await t.waitFor(waitFortime); //As we developed this step for STAGE for 14 brands each brand loading time is different when its navigating back from 3rd party tool, we tried with all Is exists and Is visible some brand not worked so we used static wait
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
      assert(false, 'The Payment page is not loaded');
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('ROM PP Sample page', async function () {
  if (ppSample !== '') {
    await t.waitFor(waitFortime);
    await t.evaluate(await t.$(ppSample), (ele) => ele.click());
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('ROM PP ConfirmPaypal', async function () {
  if (confirmPaypal !== '') {
    await t.waitFor(loadingTime); //As we developed this step for STAGE for 14 brands each brand loading time is different when its navigating back from 3rd party tool, we tried with all Is exists and Is visible some brand not worked so we used static wait
    await t.evaluate(await t.$(confirmPaypal), (ele) => ele.click());
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('ROM Exp PP MOB CHECKOUT', async function () {
  if (ppMobCheckoutCreditCard !== '') {
    await t.waitFor(waitFortime);
    await t.focus(await t.$(ppMobCheckoutCreditCard));
    await t.press(['Shift', 'Tab']);
    await t.press('Enter');
  }
  if (mobCheckoutPp !== '') {
    await t.waitFor(waitFortime);
    await t.focus(await t.$(mobCheckoutPp));
    await t.press('Tab');
    await t.press('Enter');
  }
  gauge.screenshot();
});

/**********************************************************************************AfterPay**********************************************/

step('ROM AF Select Afterpay', async function () {
  if (selectAfterpay !== '') {
    await t.evaluate(await t.$(selectAfterpay), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('ROM AF Continue Afterpay', async function () {
  if (continueAfterpay !== '') {
    await t.evaluate(await t.$(continueAfterpay), (ele) => ele.click());
    if (await (await t.$(continueAfterpay)).exists(timeOut, pollingTime)) {
      await t.evaluate(await t.$(continueAfterpay), (ele) => ele.click());
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
});

step('ROM AF Continue To Login', async function () {
  if (continueToLogin !== '') {
    await t.evaluate(await t.$(continueToLogin), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('ROM AF Enter Password', async function () {
  if (enterPassword !== '') {
    await t.write(CommonData.Password, t.into(await t.$(enterPassword)));
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('ROM AF Enter Email', async function () {
  if (enterEmail !== '') {
    await t.write(CommonData.EnterEmail, t.into(await t.$(enterEmail)));
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

// This step is for US brands
step('ROM AF Click LoginAfterPay', async function () {
  if (loginAfterPay !== '') {
    await t.reload(loginAfterPay);
    if (await (await t.$(loginAfterPay)).exists(timeOut, pollingTime)) {
      await t.evaluate(await t.$(loginAfterPay), (ele) => {
        ele.focus();
        ele.click();
      });
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
});

step('ROM AF Click on SubmitAfterpay', async function () {
  if (submitAfterpay !== '') {
    await t.evaluate(await t.$(submitAfterpay), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('ROM AF Click on ConfirmPaymentAfterPay', async function () {
  if (confirmPaymentAfterPay !== '') {
    await t.evaluate(await t.$(confirmPaymentAfterPay), (ele) => {
      ele.focus();
      ele.click();
    });
    if (
      await (await t.$(confirmPaymentAfterPay)).exists(timeOut, waitingTime)
    ) {
      await t.evaluate(await t.$(confirmPaymentAfterPay), (ele) => ele.click());
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('ROM AF Continue To Proceed', async function () {
  if (continueToProceed !== '') {
    await t.evaluate(await t.$(continueToProceed), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('ROM AF Enter Verification Code', async function () {
  if (enterVerificationCode !== '') {
    for (let i = 0; i <= 6; i++) {
      try {
        await t.write(
          CommonData.verificationcode,
          t.into(await t.$(enterVerificationCode))
        );
      } catch (e) {}
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('ROM AF Enter EmailAfterPay', async function () {
  if (enterEmailAfterPay !== '') {
    let afterpaymail = makeEmail();
    await t.write(afterpaymail, t.into(await t.$(enterEmailAfterPay)));
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

/**********************************************************************************ACC**********************************************/

step('ROM AC Register Now', async function () {
  if (acRegisterNow !== '') {
    await t.evaluate(await t.$(acRegisterNow), (ele) => {
      ele.focus();
      ele.click();
    });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('ROM AC Navigate Signin url', async function () {
  if (acNavigateSigninurl !== '') {
    await t.goto(siteDefinition.executionContext.url + acNavigateSigninurl, {
      waitForEvents: ['DOMContentLoaded'],
    });
  }
});

step('ROM AC Registration Details with Submit', async function () {
  if (acRegistrationFirstName !== '') {
    if (useReload) {
      await t.reload();
      gauge.message(
        'Some brands these fields are not working so, reload is used'
      );
    }
    await t.evaluate(await t.$(acRegistrationFirstName), (ele) => ele.focus());
    await t.focus(await t.$(acRegistrationFirstName));
    await t.write(
      CommonData.FIRSTNAME,
      t.into(await t.$(acRegistrationFirstName))
    );
  }
  if (acRegistrationLastName !== '') {
    await t.evaluate(await t.$(acRegistrationLastName), (ele) => ele.focus());
    await t.focus(await t.$(acRegistrationLastName));
    await t.write(
      CommonData.LASTNAME,
      t.into(await t.$(acRegistrationLastName))
    );
  }
  if (acRegisterEmailId !== '') {
    if (useReload1) {
      await t.reload();
      gauge.message(
        'Some brands these fields are not working so, reload is used'
      );
    }
    await t.evaluate(await t.$(acRegisterEmailId), (ele) => ele.focus());
    await t.focus(await t.$(acRegisterEmailId));
    newemail = newUserEmail();
    await t.write(newemail, t.into(await t.$(acRegisterEmailId)));
  }

  if (acRegisterPWD !== '') {
    await t.evaluate(await t.$(acRegisterPWD), (ele) => ele.focus());
    await t.focus(await t.$(acRegisterPWD));
    await t.write(CommonData.NPWD, t.into(await t.$(acRegisterPWD)));
  }
  if (acRegisterationTerms !== '') {
    await t.evaluate(await t.$(acRegisterationTerms), (ele) => {
      ele.focus();
      ele.click();
    });
  }
  if (acRegisterButton !== '') {
    await t.evaluate(await t.$(acRegisterButton), (ele) => {
      ele.focus();
      ele.click();
    });
  }
  gauge.screenshot();
});

step('ROM AC Signout Button', async function () {
  if (acSignoutButton !== '') {
    await t.evaluate(await t.$(acSignoutButton), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
  gauge.screenshot();
});

step('ROM AC Need To Click LogIn Link Again', async function () {
  if (acNeedToClickLogInLinkAgain !== '') {
    await t.evaluate(await t.$(acNeedToClickLogInLinkAgain), (ele) =>
      ele.click()
    );
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('ROM AC Return User Login Details with Submit', async function () {
  if (acReturnUserEmailId !== '') {
    await t.evaluate(await t.$(acReturnUserEmailId), (ele) => ele.focus());
    await t.focus(await t.$(acReturnUserEmailId));
    await t.write(newemail, t.into(await t.$(acReturnUserEmailId)));
  }
  if (acReturnUserPWD !== '') {
    await t.write(CommonData.NPWD, t.into(await t.$(acReturnUserPWD)));
  }
  if (acReturnUserLoginButton !== '') {
    await t.evaluate(await t.$(acReturnUserLoginButton), (ele) => ele.click());
  }
  gauge.screenshot();
});

step('ROM AddTitle', async function () {
  if (addTitle !== '') {
    await t.dropDown({ id: addTitle }).select(CommonData.Title);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

// Account Mobile Steps

step('ROM AC MOB Navigate Signin url', async function () {
  if (acMobNavigateSigninurl !== '') {
    await t.goto(siteDefinition.executionContext.url + acMobNavigateSigninurl, {
      waitForEvents: ['DOMContentLoaded'],
    });
    gauge.screenshot();
  }
});

step('ROM AC MOB Hamburger Icon', async function () {
  if (acMobHamburgerIcon !== '') {
    await t.evaluate(await t.$(acMobHamburgerIcon), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('ROM AC MOB Register Now', async function () {
  if (acMobRegisterNow !== '') {
    await t.evaluate(await t.$(acMobRegisterNow), (ele) => {
      ele.focus();
      ele.click();
    });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('ROM AC MOB LoggedIn Profile Link', async function () {
  if (acMobLoggedInProfileLink !== '') {
    await t.evaluate(await t.$(acMobLoggedInProfileLink), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('ROM AC MOB Need To Click LogIn Link Again', async function () {
  if (acMobNeedToClickLogInLinkAgain !== '') {
    await t.evaluate(await t.$(acMobNeedToClickLogInLinkAgain), (ele) =>
      ele.click()
    );
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('ROM AC MOB Signout Button', async function () {
  if (acMobSignoutButton !== '') {
    await t.evaluate(await t.$(acMobSignoutButton), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
  gauge.screenshot();
});

step('ROM AC MOB Registration Details with Submit', async function () {
  if (acMobRegistrationFirstName !== '') {
    await t.evaluate(await t.$(acMobRegistrationFirstName), (ele) =>
      ele.focus()
    );
    await t.focus(await t.$(acMobRegistrationFirstName));
    await t.write(
      CommonData.FIRSTNAME,
      t.into(await t.$(acMobRegistrationFirstName))
    );
  }
  if (acMobRegistrationLastName !== '') {
    await t.evaluate(await t.$(acMobRegistrationLastName), (ele) =>
      ele.focus()
    );
    await t.focus(await t.$(acMobRegistrationLastName));
    await t.write(
      CommonData.LASTNAME,
      t.into(await t.$(acMobRegistrationLastName))
    );
  }
  if (acMobRegisterEmailId !== '') {
    await t.evaluate(await t.$(acMobRegisterEmailId), (ele) => ele.focus());
    await t.focus(await t.$(acMobRegisterEmailId));
    newemail = makeEmail();
    await t.write(newemail, t.into(await t.$(acMobRegisterEmailId)));
  }
  if (acMobRegisterPWD !== '') {
    await t.evaluate(await t.$(acMobRegisterPWD), (ele) => ele.focus());
    await t.focus(await t.$(acMobRegisterPWD));
    await t.write(CommonData.NPWD, t.into(await t.$(acMobRegisterPWD)));
  }
  if (acMobRegisterationTerms !== '') {
    await t.evaluate(await t.$(acMobRegisterationTerms), (ele) => {
      ele.focus();
      ele.click();
    });
  }
  if (acMobRegisterButton !== '') {
    await t.evaluate(await t.$(acMobRegisterButton), (ele) => {
      ele.focus();
      ele.click();
    });
  }
  gauge.screenshot();
});

step('ROM Test Gift Wrap Flag Url', async function () {
  if (
    siteDefinition.executionContext.environment.toUpperCase() === 'PROD' ||
    siteDefinition.executionContext.environment.toUpperCase() === 'PREPROD'
  ) {
    await t.setCookie('testtrans', giftWrapFlag, {
      url: siteDefinition.executionContext.url,
    });
  }
});

step('ROM Click on Account settings', async function () {
  if (accountSettings !== '') {
    await t.evaluate(await t.$(accountSettings), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('ROM Get Order Confirmation ID', async function () {
  if (getOrderIDREG !== '' && xLRptWriteFlag.toUpperCase !== 'FALSE') {
    orderNumberFromOrderDetails = await (await t.$(getOrderIDREG)).text();
    var numList = orderNumberFromOrderDetails.match(regex);
    orderNumberFromOrderDetails = numList[0];
    console.log(
      'order id from confirmation page is : ' + orderNumberFromOrderDetails
    );
  }
});
step('ROM Write Data to DataStore <UserType>', async function (UserType) {
  if (xLRptWriteFlag.toUpperCase !== 'FALSE') {
    gauge.message('collect and save in data store');
    gauge.dataStore.specStore.put('DSUserType', UserType + ' User');
    gauge.dataStore.specStore.put('DSOrderID', orderNumberFromOrderDetails);
  }
});
step('ROM Set BrandLocale variables', async function () {
  if (xLRptWriteFlag.toUpperCase !== 'FALSE') {
    var [Brand, Locale] = brandLocale.split('-');
    // var Brand = brandLocale.substring(0,2);
    // var Locale = brandLocale.substring(3,5);
    gauge.dataStore.specStore.put('DSBrand', Brand);
    gauge.dataStore.specStore.put('DSLocale', Locale);
    gauge.dataStore.specStore.put('DSEnv', envir);
    gauge.dataStore.specStore.put('DSFilename', CommonData.OutputFileName);
    gauge.dataStore.specStore.put('DSROMSetNo', currentSetNo);
    gauge.dataStore.specStore.put('DSGenerateROMOrderReport', 'Y');
  }
});
