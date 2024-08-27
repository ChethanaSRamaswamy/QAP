/*********Variable declaration **********/
var ruId = [];
var skuId = [];
var notAvailableProductsCount = 0;
var prodCatUrl = '';
var isShoppable = '';
var isDisplayable = '';
var productUrl = '';
var noDisplayableProductError = '';
var sppPageProdHeader = '';
var sppPageProdHeaderMob = '';
let addToBagExist = 0;
var addToBagSPPPop = '';
var javaAlertPopup = '';
var addToBagSPP = '';
var cartCountValue = '';
var gnavCart = '';
var gnavCartMob = '';
var sppPopUp = '';
var cartBag = '';
var cartOverlay = '';
var addressValidation = '';
var creditCardNumber = '';
var creditMonthYear = '';
var creditCVVField = '';
var creditHolderName = '';
var ccPayment1 = '';
var ds1Placeorder = '';
var ds1MOBPlaceorder = '';
var editAddressValidation = '';
var selectBillingAddress = '';
var billingShippingAddressSameCheckbox = '';
var editAddress = '';
var editEnterFirstname = '';
var saveEditAddress = '';
var orderAddressValidation = '';
var orderLink = '';
var secondDayRadioButton = '';
var editDelivery = '';
var homeDelivery = '';
var enterValidOfferCode = '';
var applyOfferButton = '';
var validOfferMsgs = '';
var billingEnterFirstname = '';
var billingEnterLastname = '';
var billingEnterZipcode = '';
var billingEnterPhone = '';
var billingEnterKatFirstname = '';
var billingEnterKatLastname = '';
var inStorePick = '';
var findStore = '';
var selectDifferentStore = '';
var storeAddress = '';
var searchButton = '';
var shopSelected = '';
var selectedButton = '';
var editProductPanel = '';
var editProductLink = '';
var password3DS2 = '';
var continue3DS2 = '';
var username3DS1 = '';
var password3DS1 = '';
var submit3DS1 = '';
var codPayment = '';
var codPlaceOrder = '';
var cartPopUp = '';
var samplePanel = '';
var sample = '';
var samplesAdded = '';
var samplesCheck = '';
var orderId = '';
var popUpId = '';
var checkoutButtonId = '';
var checkoutBtn = '';
var checkoutButtonMob = '';
var selectSamplePC = '';
var selectSampleMOB = '';
var sampleContinue = '';
var samplePageContinue = '';
var shippingAddressContinues = '';
var shippingContinueMobs = '';
var checkoutButtonId1 = '';
var sampleContinue1 = '';
var checkoutButtonMob1 = '';
var sampleContinueMob1 = '';
var samplePageDetails = [];
var sampleContinueMob = '';
var samplePageContinueMob = '';
var samplePageDetailsMob = [];
var signinIDs = '';
var returnUserDetail = [];
var returnUserMobIds = '';
var gnavPopUpCloses = '';
var returnUserIds = '';
var returnUserPwdIds = '';
var returnUserSigninButtons = '';
var signInBtnTxts = '';
var returnUserContinueMobs = '';
var goBackRUs = false;
var timeout = '';
var pollingTime = '';
var customTimeout = '';
var scrollDownValue = '';
const messages = {
  stepNotApplicable: 'This step is not applicable for this Brand/Locale',
  clicksamplebtn: 'Clicked on sample page continue btn',
  inSPP: 'Navigated to SPP',
  notSPP: 'Not in SPP',
  popUp: 'Browser pop-up didnt appear and hence it is skipped',
  samples: 'sample section is displayed in Viewcart: ',
  samplesadded: 'Product samples added to cart: ',
  samplenotadded: 'Product samples not added to cart or not available',
  editLink: 'Edit link is clicked and user navigated to Viewcart Page',
  editAccordion: 'Edit+ Accordion is clicked',
  discountApplicable: 'The discount has been applied is expected.',
  discountNotApplicable: 'The discount has been applied is not expected.',
  validAddress: 'The valide address is expected',
  invalidAddress: 'The valide address is not expected',
  cartOverlayexist: 'Cart overlay exists and clicked on it',
  cartCountzero: 'Cart count value is zero, so clicking on add to bag again',
  cartCountStillzero:
    'Cart count value is still zero, clicking on bag icon and navigating to cart page',
  addToBag: 'Add to Bag btn is enabled and Product added to cart',
  addToBagnotexist:
    'Add to Bag btn does not exist within expected time , thus reloading the page.',
  skuIds: 'The Product with SKU ID - ',
  skuIdAvailable: 'is available and proceeding to add to Cart',
  skuIdNotAvailable: 'is not available for adding it to Cart',
  noSkuAvailable: 'None of the products are available for adding it to Cart',
  orderNo: 'Order Number is : ',
  differentStore: 'selectDifferentStore link clicked',
  cartCount: 'Cart count value = ',
};

function ReturnUserIDs() {
  return ruId[Math.floor(Math.random() * ruId.length)];
}

function reinitialize() {
  ruId = [
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
  ];
  skuId = [
    CommonData.skuId1,
    CommonData.skuId2,
    CommonData.skuId3,
    CommonData.skuId4,
    CommonData.skuId5,
    CommonData.skuId6,
    CommonData.skuId7,
    CommonData.skuId8,
    CommonData.skuId9,
    CommonData.skuId10,
  ];

  returnUserDetail = [
    { loc: signinIDs, action: 'tryCatchClick' },
    { loc: returnUserMobIds, action: 'tryCatchClick' },
    { loc: gnavPopUpCloses, action: 'click' },
    { loc: returnUserIds, data: ReturnUserIDs(), action: 'write' },
    { loc: returnUserPwdIds, data: CommonData.RPWD, action: 'write' },
    { action: 'screenshot' },
  ];

  samplePageDetails = [
    { loc: selectSamplePC, action: 'click' },
    { loc: sampleContinue, action: 'tryCatchClick' },
    { loc: samplePageContinue, action: 'tryCatchClick' },
  ];

  samplePageDetailsMob = [
    { loc: selectSampleMOB, action: 'click' },
    { loc: sampleContinueMob, action: 'tryCatchClick' },
    { loc: samplePageContinueMob, action: 'tryCatchClick' },
  ];
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

var t = require('taiko');
const Helper = require('../../helpers/helper');
const Util = require('../../../../utilities/util');
const assert = require('assert');
let Hengine = require('../../../../datainterface/providers/hengine');
let taikoOverride = require('../../helix_taiko');
let Gen = require('../ReUsableFunction.js');
var {
  openBrowser,
  goto,
  evaluate,
  write,
  click,
  link,
  button,
  textBox,
  into,
  waitFor,
  setConfig,
  setCookie,
  getCookies,
  radioButton,
  deleteCookies,
  checkBox,
  $,
  text,
  emulateDevice,
  dropDown,
  press,
  resizeWindow,
  clear,
  hover,
  closeTab,
  accept,
  confirm,
  currentURL,
  scrollDown,
  title,
  reload,
  focus,
  scrollTo,
  scrollUp,
  screenshot,
  goBack,
  doubleClick,
} = require('taiko');

var toplaceorder = process.env.PLACEORDER || 'true'; //true to place order and false to not place the order
var isDiscovery = process.env.ISDISCOVERY === 'true' ? true : false; // For Self-healing discovery
var doHeal = process.env.DOHEAL === 'true' ? true : false; // For Self-healing
let sourceTaikoDollar = $; // Cloning actual taiko $
let sourceTaikoEvaluate = evaluate; // Cloning actual taiko evaluate
let siteDefinition, source, NullDataException;
var feature = 'React Checkout';
var CommonData = {};

async function GotoProdCat(siteDefinition, t) {
  for (i = 0; i < skuId.length; i++) {
    await goto(
      siteDefinition.executionContext.adminUrl + prodCatUrl + skuId[i],
      {
        waitForEvents: ['DOMContentLoaded'],
      }
    );
    var isShoppableValue = await (await t.$(isShoppable)).text();
    var isDisplayableValue = await (await t.$(isDisplayable)).text();
    if (isShoppableValue === '1' && isDisplayableValue != '0') {
      gauge.message(messages.skuIds + skuId[i] + messages.skuIdAvailable);
      if (await (await t.$(productUrl)).exists(timeout, pollingTime)) {
        let url = await (await t.$(productUrl)).attribute('href');
        gauge.message(url);
        await goto(siteDefinition.executionContext.url + url, {
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
      gauge.message(messages.skuIds + skuId[i] + messages.skuIdNotAvailable);
      notAvailableProductsCount++;
    }
  }
  if (notAvailableProductsCount === skuId.length) {
    gauge.message(messages.noSkuAvailable);
    assert(false);
  }
}

//For Adyen Payment
async function AdyenPay(cardtype) {
  if (cardtype.toUpperCase() === 'VISA') {
    await t.evaluate(await t.$(creditCardNumber), (ele) => ele.focus());
    await t.write(CommonData.CREDITCARD, into(await t.$(creditCardNumber)));
    await t.write(CommonData.CCMONTH, into(await t.$(creditMonthYear)));
    await t.write(CommonData.CVV, into(await t.$(creditCVVField)));
    await t.write(CommonData.CCHOLDERNAME, into(await t.$(creditHolderName)));
  } else if (cardtype.toUpperCase() === 'JCB') {
    await t.evaluate(await t.$(creditCardNumber), (ele) => ele.focus());
    await t.write(CommonData.JCBCARD, into(await t.$(creditCardNumber)));
    await t.write(CommonData.CCMONTH, into(await t.$(creditMonthYear)));
    await t.write(CommonData.CVV, into(await t.$(creditCVVField)));
    await t.write(CommonData.CCHOLDERNAME, into(await t.$(creditHolderName)));
  } else if (cardtype.toUpperCase() === 'DS1') {
    await t.evaluate(await t.$(creditCardNumber), (ele) => ele.focus());
    await t.write(CommonData.DS1CARD, into(await t.$(creditCardNumber)));
    await t.write(CommonData.CCMONTH, into(await t.$(creditMonthYear)));
    await t.write(CommonData.CVV, into(await t.$(creditCVVField)));
    await t.write(CommonData.CCHOLDERNAME, into(await t.$(creditHolderName)));
  } else if (cardtype.toUpperCase() === 'DS2') {
    await t.evaluate(await t.$(creditCardNumber), (ele) => ele.focus());
    await t.write(CommonData.DS2CARD, into(await t.$(creditCardNumber)));
    await t.write(CommonData.CCMONTH, into(await t.$(creditMonthYear)));
    await t.write(CommonData.CVV1, into(await t.$(creditCVVField)));
    await t.write(CommonData.CCHOLDERNAME, into(await t.$(creditHolderName)));
  }
}

async function ValidateInSPP(SPPPageHeader) {
  if (
    (await (await t.$(SPPPageHeader)).exists(pollingTime, timeout),
    { waitForEvents: ['DOMContentLoaded'] })
  ) {
    assert(true);
    gauge.screenshot();
    gauge.message(messages.inSPP);
  } else {
    gauge.message(messages.notSPP);
  }
}

async function AddProductToBag(AddToBag) {
  if (javaAlertPopup !== 0) {
    try {
      alert(javaAlertPopup, async () => await accept());
    } catch (e) {
      gauge.message(messages.popUp);
    }
  }
  if (AddToBag !== 0) {
    for (i = 0; i < 3; i++) {
      if (await (await t.$(AddToBag)).exists(timeout)) {
        await t.evaluate(
          await t.$(AddToBag, { waitForEvents: ['loadEventFired'] }),
          (ele) => ele.focus()
        );
        await t.evaluate(
          await t.$(AddToBag, { waitForEvents: ['loadEventFired'] }),
          (ele) => ele.click(),
          { force: true }
        );
        if (
          siteDefinition.executionContext.environment.toUpperCase() === 'STAGE'
        ) {
          await t.evaluate(
            await t.$(AddToBag, { waitForEvents: ['loadEventFired'] }),
            (ele) => ele.click()
          );
        }
        gauge.screenshot();
        gauge.message(messages.addToBag);
        if (
          siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE'
        ) {
          if (addToBagSPPPop !== 0) {
            gauge.screenshot();
            await Gen.TryCatchClickAction(addToBagSPPPop);
          }
        }
        break;
      } else {
        await reload({ waitForEvents: ['loadEventFired'] });
        await t.waitFor(timeout);
        gauge.message(messages.addToBagnotexist);
        addToBagExist++;
      }
    }
    if (addToBagExist === 3) {
      gauge.message(messages.addToBagnotexist);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function ClickOnCartOverlay(gnavCart) {
  if (await (await t.$(gnavCart)).exists(pollingTime, timeout)) {
    let cartval = 0;
    let cartexists = 0;
    for (i = 0; i < 3; i++) {
      if (await (await t.$(cartCountValue)).exists(pollingTime, timeout)) {
        var cartcount = await (await $(cartCountValue)).text();
        gauge.message(messages.cartCount + cartcount);
        if (!(parseInt(cartcount) === 0 || cartcount === '')) {
          assert(true);
          await t.evaluate(
            await t.$(gnavCart, { waitForEvents: ['loadEventFired'] }),
            (ele) => ele.click()
          );
          gauge.message(messages.cartOverlayexist);
          break;
        } else {
          gauge.message(messages.cartCountzero);
          await t.evaluate(
            await t.$(addToBagSPP, { waitForEvents: ['loadEventFired'] }),
            (ele) => ele.click()
          );
          await t.waitFor(customTimeout);
          cartval++;
        }
      } else {
        cartexists++;
      }
    }
    if (cartval === 3 || cartexists === 3) {
      gauge.message(messages.cartCountStillzero);
      await t.evaluate(
        await t.$(gnavCart, { waitForEvents: ['loadEventFired'] }),
        (ele) => ele.click()
      );
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

/*************Steps*************************/
step('APACRCO Initialize Helix', async function () {
  // Initialize the selectors from DB
  await initFrameworkSettings();
});

step(
  'APACRCO Verify that user is able Signin as rco return user',
  async function () {
    if (returnUserIds !== 0) {
      if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
        await Gen.ElementAction(returnUserDetail);
        if (returnUserSigninButtons !== 0) {
          await Gen.ClickAction(returnUserSigninButtons);
        } else if (signInBtnTxts !== 0) {
          await click(signInBtnTxts);
        }
      } else if (
        siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE'
      ) {
        await Gen.ElementAction(returnUserDetail);
        if (returnUserContinueMobs !== 0) {
          await Gen.ClickAction(returnUserContinueMobs);
        } else if (signInBtnTxts !== 0) {
          await click(signInBtnTxts);
        }
      } else {
        gauge.message(messages.stepNotApplicable);
      }
    }
    if (goBackRUs) {
      await goBack({ waitForEvents: ['loadEventFired'] });
    }
  }
);

step(
  'APACRCO Verify that the user is able to add products to the cart',
  async function () {
    if (CommonData.skuId1 !== 0) {
      await GotoProdCat(siteDefinition, t);
    }

    /**validate in SPP */
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      await ValidateInSPP(sppPageProdHeader);
    } else if (
      siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE'
    ) {
      await ValidateInSPP(sppPageProdHeaderMob);
    }
    /**Onetrust popup*/
    if (sppPopUp !== 0) {
      await Gen.PopUpClose(sppPopUp);
      gauge.message(messages.popUp);
    }

    /**click on 'add to cart' btn */
    await AddProductToBag(addToBagSPP);
  }
);

step(
  'APACRCO Verify user is able to navigate to cart page by clicking on Cart Icon',
  async function () {
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      await ClickOnCartOverlay(gnavCart);
    } else if (
      siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE'
    ) {
      await ClickOnCartOverlay(gnavCartMob);
    }
  }
);

//SAMPLES SELECTION (Complimentary or Intelligent) from Viewcart
step(
  'APACRCO Verify that user is able to add complimentary/Intelligent samples in Cart Page',
  async function () {
    if (cartPopUp !== 0) {
      await Gen.PopUpClose(cartPopUp);
    } else {
      gauge.message(messages.stepNotApplicable);
    }

    //Samples Panel in Cart Page
    if (samplePanel !== 0) {
      await t.evaluate(await t.$(samplePanel), (ele) => ele.focus());
      var sampleSection = await (await t.$(samplePanel)).text();
      gauge.message(messages.samples + sampleSection);
      if (await (await t.$(sample)).exists()) {
        await t.evaluate(await t.$(sample), (ele) => {
          ele.focus();
          ele.click();
          gauge.screenshot();
        });
      } else {
        gauge.message(messages.stepNotApplicable);
      }
      gauge.screenshot();
    }

    //Samples added
    if (await (await t.$(samplesCheck)).exists()) {
      await t.evaluate(await t.$(samplesAdded), (ele) => ele.focus());
      var sampleAdd = await (await t.$(samplesAdded)).text();
      gauge.message(messages.samplesadded + sampleAdd);
      gauge.screenshot();
    } else {
      gauge.message(messages.samplenotadded);
    }
  }
);

// COD Payment
step(
  'APACRCO Verify that user is able to place orders with COD Radio button',
  async function () {
    if (codPayment !== 0) {
      await t.waitFor(customTimeout, codPayment); // wait for the page to load and Cod radio button to display
      await t.evaluate(await t.$(codPayment), (ele) => ele.click());
      gauge.screenshot();
    } else {
      gauge.message(messages.stepNotApplicable);
    }

    if (codPlaceOrder !== 0) {
      await t.evaluate(await t.$(codPlaceOrder), (ele) => ele.click());
      gauge.screenshot();
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

//3DS 1 User and Password steps
step(
  'APACRCO Verify that user is able to enter username and password for 3ds1 card',
  async function () {
    await (await t.$(username3DS1)).exists(timeout);
    if (username3DS1 !== 0) {
      await t.write(CommonData.USERNAME, into(await t.$(username3DS1)));
      gauge.screenshot();
    } else {
      gauge.message(messages.stepNotApplicable);
    }
    if (password3DS1 !== 0) {
      await t.write(CommonData.PASSWORD, into(await t.$(password3DS1)));
      gauge.screenshot();
    } else {
      gauge.message(messages.stepNotApplicable);
    }
    if (submit3DS1 !== 0) {
      await t.evaluate(await t.$(submit3DS1), (ele) => ele.click());
      gauge.screenshot();
    }
  }
);

// 3DS2 Password steps
step(
  'APACRCO Verify that user is able to enter username and password for 3ds2 card',
  async function () {
    if (password3DS2 !== 0) {
      await t.waitFor(customTimeout); //wait till the password field is displayed after giving the 3ds2 Cards
      await t.write(CommonData.PASSWORD, into(await t.$(password3DS2)));
      gauge.screenshot();
    } else {
      gauge.message(messages.stepNotApplicable);
    }

    if (continue3DS2 !== 0) {
      await t.evaluate(await t.$(continue3DS2), (ele) => ele.click());
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

//Edit Product link from APACRCO Delivery Page JP
step(
  'APACRCO Verify that user is able to edit product from <pages> checkout pages',
  async function (pages) {
    if (pages === 'Delivery') {
      if (
        siteDefinition.executionContext.platform.toUpperCase() === 'PC' &&
        editProductLink !== 0
      ) {
        await t.evaluate(await t.$(editProductLink), (ele) => {
          ele.focus();
          ele.click();
          gauge.message(messages.editLink);
        });
      } else if (
        siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE' &&
        editProductLink !== 0
      ) {
        await t.evaluate(await t.$(editProductPanel), (ele) => {
          ele.focus();
          ele.click();
          gauge.message(messages.editAccordion);
        });
        await t.evaluate(await t.$(editProductLink), (ele) => {
          ele.focus();
          ele.click();
          gauge.message(messages.editLink);
        });
      } else {
        gauge.message(messages.stepNotApplicable);
      }
    }

    if (pages === 'Payment') {
      if (
        siteDefinition.executionContext.platform.toUpperCase() === 'PC' &&
        editProductPanel !== 0
      ) {
        await t.evaluate(await t.$(editProductPanel), (ele) => {
          ele.focus();
          ele.click();
          gauge.message(messages.editAccordion);
        });
        await t.evaluate(await t.$(editProductLink), (ele) => {
          ele.focus();
          ele.click();
          gauge.message(messages.editLink);
        });
      } else if (
        siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE' &&
        editProductPanel !== 0
      ) {
        await t.evaluate(await t.$(editProductPanel), (ele) => {
          ele.focus();
          ele.click();
          gauge.message(messages.editAccordion);
        });
        await t.evaluate(await t.$(editProductLink), (ele) => {
          ele.focus();
          ele.click();
          gauge.message(messages.editLink);
        });
      } else {
        gauge.message(messages.stepNotApplicable);
      }
    }
  }
);

//Added for selecting the convienence store JP
step('APACRCO Verify that user is able to select store', async function () {
  if (storeAddress !== 0) {
    await t.evaluate(await t.$(storeAddress), (ele) => ele.focus());
    await clear(await $(storeAddress));
    await t.write(CommonData.FindStore, into(await t.$(storeAddress)));
    gauge.screenshot();
  }
  if (searchButton !== 0) {
    await t.evaluate(await t.$(searchButton), (ele) => ele.click());
  }

  if (shopSelected !== 0) {
    await t.evaluate(await t.$(shopSelected), (ele) => ele.click());
  }

  if (selectedButton !== 0) {
    await t.evaluate(await t.$(selectedButton), (ele) => ele.click());
    gauge.screenshot();
  }
});

step(
  'APACRCO Verify that user is able to Click Instore pickup',
  async function () {
    if (inStorePick !== 0) {
      await t.waitFor(customTimeout); //Takes time to load all the fields, so need to wait for few seconds.
      await t.evaluate(await t.$(inStorePick), (ele) => ele.click());
      gauge.screenshot();
    }
    if (findStore !== 0) {
      try {
        await t.evaluate(await t.$(findStore), (ele) => ele.click());
        await t.write(CommonData.FindStore, into(await t.$(findStore)));
        await press(['Control', 'KeyA']);
        await press('Delete');
        await t.write(CommonData.FindStore, into(await t.$(findStore)));
        await press('Tab');
        await press('Enter');
      } catch (e) {
        gauge.message(messages.stepNotApplicable);
      }
    } else if (await t.$(selectDifferentStore).exists()) {
      await press('Tab');
      await press('Tab');
      await press('Enter');
      gauge.message(messages.differentStore);
    } else {
      gauge.message(messages.stepNotApplicable);
    }
    gauge.screenshot();
  }
);

step(
  'APACRCO Verify that user is able to add Billing Address successfully',
  async function () {
    if (billingEnterFirstname !== 0) {
      await t.evaluate(await t.$(billingEnterFirstname), (ele) => ele.focus());
      await write(CommonData.FIRSTNAME, into(await $(billingEnterFirstname)));
    }

    if (billingEnterKatFirstname !== 0) {
      await t.write(
        CommonData.FIRSTNAMEKAT,
        into(await t.$(billingEnterKatFirstname))
      );
    }

    if (billingEnterLastname !== 0) {
      await t.evaluate(await t.$(billingEnterLastname), (ele) => ele.focus());
      await t.write(CommonData.LASTNAME, into(await t.$(billingEnterLastname)));
      await scrollDown(scrollDownValue);
    }

    if (billingEnterKatLastname !== 0) {
      await t.write(
        CommonData.LASTNAMEKAT,
        into(await t.$(billingEnterKatLastname))
      );
    }

    if (billingEnterZipcode !== 0) {
      await t.evaluate(await t.$(billingEnterZipcode), (ele) => ele.focus());
      await t.write(
        CommonData.BILLINGZIPCODE,
        into(await t.$(billingEnterZipcode))
      );
    }

    if (billingEnterPhone !== 0) {
      await t.evaluate(await t.$(billingEnterPhone), (ele) => ele.focus());
      await t.write(
        CommonData.BILLINGPHONE,
        into(await t.$(billingEnterPhone))
      );
      await scrollDown(scrollDownValue);
    }
    gauge.screenshot();
  }
);

step(
  'APACRCO Verify whether user is able to enter Valid OfferCode and apply successfully',
  async function () {
    if (CommonData.VALIDOFFERCODE !== 0) {
      await t.waitFor(timeout); //After Increasing the Qty need to wait till the page loaded
      await t.evaluate(await t.$(enterValidOfferCode), (ele) =>
        ele.scrollIntoView()
      );
      await t.write(
        CommonData.VALIDOFFERCODE,
        into(await t.$(enterValidOfferCode))
      );
      gauge.screenshot();
    }
    if (applyOfferButton !== 0) {
      await t.evaluate(await t.$(applyOfferButton), (ele) => ele.click());
      gauge.screenshot();
      var ExpectedValidOfferMsg = await (await t.$(validOfferMsgs)).text();
      if (
        ExpectedValidOfferMsg.toUpperCase().search(
          CommonData.VALIDOFFERMSG.toUpperCase()
        ) !== -1
      ) {
        assert(true);
        gauge.message(messages.discountApplicable);
      } else {
        assert(false);
        gauge.message(messages.discountNotApplicable);
      }
    }
  }
);

step(
  'APACRCO Verify that user is able to Click Home Delivery',
  async function () {
    if (homeDelivery !== 0) {
      await t.evaluate(await t.$(homeDelivery), (ele) => ele.click());
      await t.waitFor(customTimeout); //Takes time to load all the fields.
      gauge.screenshot();
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step('APACRCO Verify that user can Edit Delivery Option', async function () {
  if (editDelivery !== 0) {
    await t.waitFor(customTimeout); //Takes time to load all the fields, so need to wait for few seconds.
    await t.evaluate(await t.$(editDelivery), (ele) => ele.scrollIntoView());
    await t.evaluate(await t.$(editDelivery), (ele) => ele.click());
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step('APACRCO Verify that user can select delivery method', async function () {
  if (await (await t.$(secondDayRadioButton)).exists()) {
    await t.evaluate(await t.$(secondDayRadioButton), (ele) =>
      ele.scrollIntoView()
    );
    await t.evaluate(await t.$(secondDayRadioButton), (ele) => ele.click());
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
});

step(
  'APACRCO Verify that user is able to Click on Order Number',
  async function () {
    if (await (await t.$(orderLink)).exists()) {
      await t.waitFor(customTimeout); //Takes time to load all the fields, so need to wait for few seconds.
      await t.evaluate(await t.$(orderLink), (ele) => ele.click());
      gauge.screenshot();
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step(
  'APACRCO Verify that user is navigated Account page after clicking on orderID',
  async function () {
    if (await (await t.$(orderAddressValidation)).exists()) {
      await t.waitFor(customTimeout); //Takes time to load all the fields, so need to wait for few seconds.
      await t.evaluate(await t.$(orderAddressValidation), (ele) =>
        ele.scrollIntoView()
      );
      var Expetedaddress = await (await t.$(orderAddressValidation)).text();
      if (
        Expetedaddress.toUpperCase().search(
          CommonData.VALIDEADDRESS.toUpperCase()
        ) !== -1
      ) {
        gauge.screenshot();
        assert(true);
        gauge.message(messages.validAddress);
      } else {
        gauge.message(messages.invalidAddress);
      }
    }
  }
);

step(
  'APACRCO Verify that user is able to edit address and save the address',
  async function () {
    if (editAddress !== 0) {
      await t.evaluate(await t.$(editAddress), (ele) => ele.click());
      gauge.screenshot();
    }
    if (editEnterFirstname !== 0) {
      await t.evaluate(await t.$(editEnterFirstname), (ele) => ele.focus());
      await press(['Control', 'KeyA']);
      await press('Delete');
      await t.write(CommonData.EFIRSTNAME, into(await t.$(editEnterFirstname)));
      gauge.screenshot();
    }
    if (saveEditAddress !== 0) {
      await t.evaluate(await t.$(saveEditAddress), (ele) => {
        ele.focus();
        ele.click();
      });
      gauge.screenshot();
    }
  }
);

step(
  'APACRCO Verify that user is able to check/uncheck Billing shipping address checkbox',
  async function () {
    if (billingShippingAddressSameCheckbox !== 0) {
      await t.evaluate(await t.$(billingShippingAddressSameCheckbox), (ele) =>
        ele.scrollIntoView()
      );
      await t.evaluate(await t.$(billingShippingAddressSameCheckbox), (ele) => {
        ele.focus();
        ele.click();
      });

      gauge.screenshot();
    }
  }
);

//Billing Address is selected/not selected

step(
  'APACRCO Verify that user is able to select any of the Billing ADDRESS',
  async function () {
    if (selectBillingAddress !== 0) {
      if (await (await t.$(selectBillingAddress)).exists()) {
        await t.waitFor(customTimeout); //Takes time to load all the fields
        await t.evaluate(await t.$(selectBillingAddress), (ele) => {
          ele.focus();
          ele.click();
        });
        gauge.screenshot();
      } else {
        gauge.message(messages.stepNotApplicable);
      }
    }
  }
);

step(
  'APACRCO Verify that user is able check Edit shipping address',
  async function () {
    await t.waitFor(customTimeout); //Takes time to load all the fields, so need to wait for few seconds.
    var Expetedaddress = await (await t.$(editAddressValidation)).text();
    if (
      Expetedaddress.toUpperCase().search(
        CommonData.EFIRSTNAME.toUpperCase()
      ) !== -1
    ) {
      gauge.screenshot();
      assert(true);
      gauge.message(messages.validAddress);
    } else {
      gauge.message(messages.invalidAddress);
    }
  }
);

step('APACRCO Verify user is able to click 3DS Place Order', async function () {
  if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
    if (ds1Placeorder !== 0) {
      await t.evaluate(await t.$(ds1Placeorder), (ele) => {
        ele.focus();
        ele.click();
      });
      gauge.screenshot();
    }
  }
  if (siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE') {
    if (ds1MOBPlaceorder !== 0) {
      await t.evaluate(await t.$(ds1MOBPlaceorder), (ele) => {
        ele.focus();
        ele.click();
      });
      gauge.screenshot();
    }
  }
});

step(
  'APACRCO Verify that user is able to select Credit card radio button and enter Credit Card Details <cardtype>',
  async function (cardtype) {
    if (ccPayment1 !== 0) {
      if (await (await t.$(ccPayment1)).exists(timeout)) {
        await t.evaluate(
          await t.$(ccPayment1, { waitForEvents: ['DOMContentLoaded'] }),
          (ele) => ele.click()
        );
      }
    }
    if (creditCardNumber !== 0) {
      await t.waitFor(customTimeout); //wait till all the fields of CC is loaded
      await AdyenPay(cardtype);
      gauge.screenshot();
    }
  }
);

step(
  'APACRCO Verify that user is able to check store shipping address in payment page',
  async function () {
    if (addressValidation !== 0) {
      await t.waitFor(customTimeout); //Takes time to load all the fields, so need to wait for few seconds.
      await t.evaluate(await t.$(addressValidation), (ele) =>
        ele.scrollIntoView()
      );
      var Expetedaddress = await (await t.$(addressValidation)).text();
      if (
        Expetedaddress.toUpperCase().search(
          CommonData.STOREVALIDADDRESS.toUpperCase()
        ) !== -1
      ) {
        gauge.screenshot();
        assert(true);
        gauge.message(messages.validAddress);
      } else {
        assert(false);
        gauge.message(messages.invalidAddress);
      }
    }
  }
);

step(
  'APACRCO Verify that user is able to click on Cart Icon',
  async function () {
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      if (await (await t.$(cartBag)).exists(pollingTime, timeout)) {
        await t.evaluate(await t.$(cartBag), (ele) => ele.click());
        await t.waitFor(customTimeout, cartBag); // wait for the page to load and CartIcon to display
        await t.evaluate(await t.$(cartOverlay), (ele) => ele.click());
        gauge.screenshot();
      } else {
        gauge.message(messages.stepNotApplicable);
      }
    }
    if (siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE') {
      if (await (await t.$(cartBag)).exists(pollingTime, timeout)) {
        await t.evaluate(await t.$(cartBag), (ele) => ele.click());
      } else {
        gauge.message(messages.stepNotApplicable);
      }
    }
  }
);

step(
  'APACRCO Verify that user is able to click shipping address continue button',
  async function () {
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      if (shippingAddressContinues !== 0) {
        await t.waitFor(timeout); // when it navigates back from Store page it need time to wait for Page to load
        await Gen.TryCatchClickAction(shippingAddressContinues);
        gauge.screenshot();
      }
    }
    if (siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE') {
      if (shippingContinueMobs !== 0) {
        await t.waitFor(timeout); // when it navigates back from Store page it need time to wait for Page to load
        await Gen.TryCatchClickAction(shippingContinueMobs);
        gauge.screenshot();
      }
    }
  }
);

step(
  'APACRCO Verify Order is placed and Order ID displayed',
  async function () {
    await t.waitFor(customTimeout); //Wait for Order Confirmation Page
    if (toplaceorder === 'true' && orderId !== 0) {
      var OrderNum = await (await t.$(orderId)).text();
      gauge.message(messages.orderNo + OrderNum);
      gauge.screenshot();
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

step(
  'APACRCO Verify User is able to Click checkout btn and proceed to Sample/SignIn page',
  async function () {
    await Gen.PopUpClose(popUpId);
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      if (await (await t.$(checkoutButtonId)).exists(pollingTime, timeout)) {
        if (checkoutButtonId !== 0) {
          await Gen.ClickAction(checkoutButtonId);
          gauge.screenshot();
        } else if (checkoutBtn !== 0) {
          await t.waitFor(customTimeout);
          await Gen.ClickAction(checkoutBtn);
          gauge.screenshot();
        }
      } else {
        gauge.message(messages.stepNotApplicable);
      }
    }
    if (siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE') {
      if (await (await t.$(checkoutButtonMob)).exists(pollingTime, timeout)) {
        if (checkoutButtonMob !== 0) {
          await Gen.ClickAction(checkoutButtonMob);
          gauge.screenshot();
        }
      } else {
        gauge.message(messages.stepNotApplicable);
      }
    }
  }
);

step(
  'APACRCO Verify user is able to Click sample continue button/link',
  async function () {
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      if (sampleContinue !== 0 || samplePageContinue !== 0) {
        if (
          (await (await t.$(sampleContinue)).exists(pollingTime, timeout)) ||
          (await (await t.$(samplePageContinue)).exists(pollingTime, timeout))
        ) {
          await Gen.ElementAction(samplePageDetails);
          await Gen.TryCatchClickAction(checkoutButtonId1);
          await Gen.TryCatchClickAction(sampleContinue1);
          gauge.message(messages.clicksamplebtn);
        }
      } else {
        gauge.message(messages.stepNotApplicable);
      }
    }
    if (siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE') {
      if (sampleContinueMob !== 0 || samplePageContinueMob !== 0) {
        if (
          (await (await t.$(sampleContinueMob)).exists(pollingTime, timeout)) ||
          (await (
            await t.$(samplePageContinueMob)
          ).exists(pollingTime, timeout))
        ) {
          await Gen.ElementAction(samplePageDetailsMob);
          await Gen.TryCatchClickAction(checkoutButtonMob1);
          await Gen.TryCatchClickAction(sampleContinueMob1);
          gauge.message(messages.clicksamplebtn);
        }
      } else {
        gauge.message(messages.stepNotApplicable);
      }
    }
  }
);
