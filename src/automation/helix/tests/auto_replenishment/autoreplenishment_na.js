// This file is common template for US UK and CA

// Variable Declaration

var productCatUrl = '';
var skuIds = [];
var notAvailableProductsCount = 0;
var isShoppable = '';
var isDisplayable = '';
var productUrl = '';
var noDisplayableProductError = '';
var cartPopupClose = '';
var arPopUp = '';
var arRadiobutton = '';
var frequencyDropDown = '';
var autoReplenish = '';
var arOnPayment = '';
var backToSignin = '';
var accountProfile = '';
var signIn = '';
var changeARDate = '';
var changeDate = '';
var getDateNumber = '';
var cancelReplenishment = '';
var cancelReplenishmentPopup = '';
var cancelAssert = '';
var autoReplenish1 = '';
var autoReplenish1MOB = '';
var frequencyDropDownPC = '';
var frequencyDropDownMOB = '';
var hamburgerIconMOB = '';
var arMobLoginLink = '';
var editArShipping = '';
var editArPayment = '';
var arSelectCardType = '';
var arSelectCardTypeDropdown = '';
var arEnterCreditCardNumber = '';
var arEnterCVVNumber = '';
var arEnterExpMonth = '';
var arEnterExpYear = '';
var arEnterExpMonthDropdown = '';
var arEnterExpYearDropdown = '';
var arEntermothandyear = '';
var viewDetails = '';
var accountProfileMOB = '';
var arDropdownMob = '';
var arFrequency = '';
var returnUserPaymentLinkTextAr = '';
var waitFortime = '';
var timeOut = '';
var pollingTime = '';
var mobContinuesample1 = '';
var sppPageProdHeader = '';
var sppPageProdHeaderMob = '';
var acSignoutButton = '';
var javaAlertPopUp = '';
var addToBagSPP = '';
var cartPopupClose1 = '';
var cartCountValue = '';
var clickCartPageLink = '';
var clickCartPageLinkMob = '';
var returnUserContinueCheckoutViewCart = '';
var acCreditCardSubmitButton = '';
var selectSampleProduct = '';
var continueSample1 = '';
var continueSample2 = '';
var acEditAddress = '';
var mobCheckoutViewCart = '';
var mobCheckoutCreditcard = '';
var acEnterFirstName = '';
var acEnterLastName = '';
var acEditAddressSubmitButton = '';
var returnUserShippingLinkText = '';
var returnUserAddNewaddress = '';
var returnUserAddNewaddress1 = '';
var cancelReplenishmentMob = '';
var cancelAssertMob = '';
var CommonData = {};
var cancelReplenishmentPopupMob = '';
var acEditShippingDetails = '';
var ReturnUserNewPaymentbuttonAR = '';
var arEnterCCName = '';
var isShoppableValue = '';
var isDisplayableValue = '';
var nodisplayableProduct = '';
var cartcount = '';
let url = '';
var t = require('taiko');

const assert = require('assert');
let siteDefinition, source, NullDataException, tags;
const Helper = require('../../../helix/helpers/helper');
const Util = require('../../../../utilities/util');
const Hengine = require('../../../../datainterface/providers/hengine');
const taikoOverride = require('../../../helix/helix_taiko');

var feature = 'AUTO REPLENISHMENT';

const messages = {
  stepNotApplicable: 'This step is not applicable for this Brand/Locale',
  cancelmessage: 'Auto replenishment is cancelled',
  notCancelAutoreplenishment: 'Auto replenishment is not cancelled',
};

const matchCondition = true;

function reinitialize() {
  skuIds = [
    CommonData.skuARId1,
    CommonData.skuARId2,
    CommonData.skuARId3,
    CommonData.skuARId4,
    CommonData.skuARId5,
  ];
}
acEditShippingDetails = [
  {
    loc: acEnterFirstName,
    data: CommonData.FIRSTNAME,
    action: 'write',
  },
  {
    loc: acEnterLastName,
    data: CommonData.LASTNAME,
    action: 'write',
  },
  {
    loc: acEditAddressSubmitButton,
    action: 'click',
  },
];

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
          if (ElementObj[i].Datafrom == 'Emailfun') {
            await t.evaluate(await t.$(ElementObj[i].loc), (ele) =>
              ele.focus()
            );
            let guestUserNewUserEmailId = makeEmail();
            gauge.message(guestUserNewUserEmailId);
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
            await t.dropDown({ name: ElementObj[i].loc }).select({
              index: indexvalue1,
            });
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

step('AUTOREPLENISHMENT Initialize Helix', async function () {
  // Initialize the selectors from DB
  // eslint-disable-next-line no-use-before-define
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

// Auto-replenish

async function GotoSKUandbrowsetoSPP() {
  for (i = 0; i < skuIds.length; i++) {
    await t.goto(
      siteDefinition.executionContext.adminUrl + productCatUrl + skuIds[i],
      {
        waitForEvents: ['DOMContentLoaded'],
      }
    );
    isShoppableValue = await (await t.$(isShoppable)).text();
    isDisplayableValue = await (await t.$(isDisplayable)).text();
    if (isShoppableValue === '1' && isDisplayableValue !== '0') {
      gauge.message(
        'The Product with SKU ID - ' +
        skuIds[i] +
        ' is available and proceeding to add to Cart'
      );
      if (await (await t.$(productUrl)).exists(timeOut, pollingTime)) {
        url = await (await t.$(productUrl)).text();
        gauge.message(url);
        await t.goto(siteDefinition.executionContext.url + url, {
          waitForEvents: ['DOMContentLoaded'],
        });
        gauge.screenshot();
        break;
      } else {
        nodisplayableProduct = await (
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
}

// If cart popup's id is defined wait and do the popup close
async function CartPopupClosePCAR() {
  if (cartPopupClose1 !== '') {
    await t.waitFor(waitFortime);
    // Cart Popup Close is applicable for few Brand/Locale/platform(PC/MOB)
    try {
      await t.click(await t.$(cartPopupClose1), { waitForNavigation: false });
    } catch (e) {
      gauge.message(
        'View Cart Popup Close is not applicable for this Brand/Locale'
      );
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

// If AR popup's id is defined wait and do the popup close
async function arPopupagree() {
  if (arPopUp !== '') {
    await t.waitFor(waitFortime);
    // Cart Popup Close is applicable for few Brand/Locale/platform(PC/MOB)
    try {
      await t.evaluate(await t.$(arPopUp), (ele) => ele.click());
    } catch (e) {
      gauge.message(
        'View Cart Popup Close is not applicable for this Brand/Locale'
      );
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function clickOnARradiobutton() {
  if (arRadiobutton !== '') {
    await t.evaluate(await t.$(arRadiobutton), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function selectARFrequency() {
  if (frequencyDropDown !== '') {
    await t.dropDown({ class: frequencyDropDown }).select(CommonData.Frequency);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function clickonAutoreplenish() {
  if (autoReplenish !== '') {
    await t.evaluate(await t.$(autoReplenish), (ele) => ele.click());
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function clickAutoreplenishonPayment() {
  if (arOnPayment !== '') {
    await t.evaluate(await t.$(arOnPayment), (ele) => ele.click());
    gauge.screenshot();
  } else {
    gauge.message('This step is not applicable for this Brand/Locale');
  }
}

async function clickonBacktoSignin() {
  if (backToSignin !== '') {
    await t.evaluate(await t.$(backToSignin), (ele) => ele.click());
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function goToAccountProfile() {
  if (accountProfile !== '') {
    await t.evaluate(await t.$(accountProfile), (ele) => ele.click());
  }
  if (signIn !== '') {
    await t.evaluate(await t.$(signIn), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function clickOnChangeARdate() {
  var getdate = await (await t.$(getDateNumber)).text();
  if (changeARDate !== '') {
    await t.evaluate(await t.$(changeARDate), (ele) => ele.click());
  }
  if (changeDate !== '') {
    await t.evaluate(await t.$(changeDate), (ele) => ele.click());
    gauge.message(getdate);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function clickOnCancelreplenishmentMob() {
  if (cancelReplenishmentMob !== '') {
    await t.evaluate(await t.$(cancelReplenishmentMob), (ele) => ele.click());
  }
  if (cancelReplenishmentPopupMob !== '') {
    await t.evaluate(await t.$(cancelReplenishmentPopupMob), (ele) =>
      ele.click()
    );
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function arCancelAssertMob() {
  if ((await t.$(cancelAssertMob)).exists()) {
    assert(matchCondition, messages.cancelmessage);
  } else {
    assert(!matchCondition, messages.notCancelAutoreplenishment);
  }
}

async function clickOnCancelreplenishment() {
  if (cancelReplenishment !== '') {
    await t.evaluate(await t.$(cancelReplenishment), (ele) => ele.click());
  }
  if (cancelReplenishmentPopup !== '') {
    await t.evaluate(await t.$(cancelReplenishmentPopup), (ele) => ele.click());
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function arCancelAssert() {
  if ((await t.$(cancelAssert)).exists()) {
    assert(matchCondition, messages.cancelmessage);
  } else {
    assert(!matchCondition, messages.notCancelAutoreplenishment);
  }
}

async function autoreplenishmentAR() {
  if (autoReplenish1 !== '') {
    await t.scrollDown(parseInt(CommonData.scrolltime));
    await t.scrollTo(autoReplenish1);
    await t.click(autoReplenish1);
  }
}

async function autoreplenishmentMobAR() {
  if (autoReplenish1MOB !== '') {
    await t.scrollDown(parseInt(CommonData.scrolltime1));
    await t.scrollTo(autoReplenish1MOB);
    await t.click(autoReplenish1MOB);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function frequencyAR() {
  if (frequencyDropDownPC !== '') {
    await t.click(frequencyDropDownPC);
  }
}

async function frequencyMOBAR() {
  if (frequencyDropDownMOB !== '') {
    await t.click(frequencyDropDownMOB);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function returnUserShippingDetailsEditLinkAR() {
  if (returnUserShippingLinkText !== '') {
    // Click On Return User Shipping Details Edit Link is applicable for few Brand/Locale/platform(PC/MOB)
    try {
      await t.evaluate(
        await link({ href: returnUserShippingLinkText }),
        (ele) => ele.click()
      );
    } catch (e) {
      gauge.message(
        'Click On Return User Shipping Details Edit Link is not displayed and hence this step is skipped'
      );
      gauge.screenshot();
    }
  } else {
  }
}

async function returnUserAddNewAddressAR() {
  if (returnUserAddNewaddress !== '') {
    try {
      await t.evaluate(await t.$(returnUserAddNewaddress), (ele) =>
        ele.click()
      );
    } catch (e) {
      gauge.message(
        'Return User Add New address is not displayed and hence this step is skipped'
      );
    }
  }
  if (returnUserAddNewaddress1 !== '') {
    // Return User new address is applicable for few Brand/Locale/platform(PC/MOB)
    try {
      await t.evaluate(await t.$(returnUserAddNewaddress1), (ele) =>
        ele.click()
      );
    } catch (e) {
      gauge.message(
        'Return User Add New address1 is not displayed and hence this step is skipped'
      );
    }
    gauge.screenshot();
  }
}

async function arMOBHamburgerIcon() {
  if (hamburgerIconMOB !== '') {
    await t.evaluate(await t.$(hamburgerIconMOB), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function arMOBLoginLink() {
  if (arMobLoginLink !== '') {
    await t.evaluate(await t.$(arMobLoginLink), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function clickOnEditARShippingbutton() {
  if (editArShipping !== '') {
    await t.evaluate(await t.$(editArShipping), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function clickOnEditARPaymentbutton() {
  if (editArPayment !== '') {
    await t.evaluate(await t.$(editArPayment), (ele) => {
      ele.focus();
      ele.click();
    });
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function arEnterCreditCardDetails() {
  if (arSelectCardType !== '') {
    await t.click(arSelectCardType);
    await t.click(CommonData.CARDTYPE);
  }
  if (arSelectCardTypeDropdown !== '') {
    await t
      .dropDown({ id: arSelectCardTypeDropdown })
      .select(CommonData.ARCARDTYPE);
  }
  if (arEnterCreditCardNumber !== '') {
    await t.write(
      CommonData.ARCREDITCARD,
      t.into(await t.$(arEnterCreditCardNumber))
    );
  }
  if (arEnterCCName.localeCompare('') !== 0) {
    await t.write(CommonData.ARCCName, t.into(await t.$(arEnterCCName)));
  }
  if (arEnterCVVNumber !== '') {
    await t.write(CommonData.ARCVV, t.into(await t.$(arEnterCVVNumber)));
  }
  if (arEnterExpMonth !== '') {
    await t.write(CommonData.ARCMONTH, t.into(await t.$(arEnterExpMonth)));
  }
  if (arEnterExpYear !== '') {
    await t.click(arEnterExpYear);
    await t.click(CommonData.ARYEAR);
  }
  if (arEnterExpMonthDropdown !== '') {
    await t
      .dropDown({ id: arEnterExpMonthDropdown })
      .select(CommonData.ARCMONTH);
  }
  if (arEnterExpYearDropdown !== '') {
    await t.dropDown({ id: arEnterExpYearDropdown }).select(CommonData.ARYEAR);
  }
  if (arEntermothandyear !== '') {
    await t.write(
      CommonData.ARPCCVVMONTH,
      t.into(await t.$(arEntermothandyear))
    );
  }
  gauge.screenshot();
}

async function clickOnARViewdetails() {
  try {
    if (viewDetails !== '') {
      await t.evaluate(await t.$(viewDetails), (ele) => ele.click());
    }
  } catch (e) {
    gauge.message(messages.stepNotApplicable);
  }
}

async function goToAccountProfileMobAR() {
  if (accountProfileMOB !== '') {
    await t.evaluate(await t.$(accountProfileMOB), (ele) => ele.click());
  }
  if (signIn !== '') {
    await t.evaluate(await t.$(signIn), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function FrequencyDropdownAR() {
  if (arDropdownMob !== '') {
    if (await (await t.$(arDropdownMob)).exists(timeOut, pollingTime))
      await t.evaluate(await t.$(arDropdownMob), (ele) => ele.click());
    await t.evaluate(await t.$(arFrequency), (ele) => ele.click());
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function arReturnUserPaymentLinkText() {
  if (returnUserPaymentLinkTextAr !== '') {
    // Return User new paymet link is applicable for few Brand/Locale/platform(PC/MOB)
    try {
      await t.evaluate(await t.$(returnUserPaymentLinkTextAr), (ele) =>
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
}

async function arReturnUserNewPaymentRadiobutton() {
  if (ReturnUserNewPaymentbuttonAR !== '') {
    // Return User new paymet button is applicable for few Brand/Locale/platform(PC/MOB)
    try {
      await t.evaluate(await t.$(ReturnUserNewPaymentbuttonAR), (ele) =>
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

async function validateInSPP1() {
  if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
    await validateInSPP(sppPageProdHeader);
  } else {
    await validateInSPP(sppPageProdHeaderMob);
  }
}
async function validateInSPP(SPPpageHeader) {
  if (await (await t.$(SPPpageHeader)).exists(timeOut, pollingTime)) {
    assert(true);
    gauge.message('In SPP.');
  } else {
    assert(false, 'Not in SPP.');
  }
}

async function signoutButton() {
  if (acSignoutButton !== '') {
    await t.evaluate(await t.$(acSignoutButton), (ele) => ele.click());
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function addProductToBag() {
  if (javaAlertPopUp !== '') {
    alert(javaAlertPopUp, async () => await accept());
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
        'Add to Bag btn does not exist within 30 seconds, thus t.reloading the page.'
      );
      AddtoBagExist++;
    }
  }
  if (AddtoBagExist === 2) {
    assert(
      false,
      'Add to bag does not load within expected time and t.reload the page.'
    );
  }
}
async function clickOnCartOverLay(CartpageLink) {
  let cartval = 0;
  let cartexists = 0;
  for (i = 0; i < 3; i++) {
    if (await (await t.$(cartCountValue)).exists(timeOut, pollingTime)) {
      cartcount = await (await t.$(cartCountValue)).text();
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
        gauge.message('The cart count value is 0, so t.reload the page.');
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
      await t.$(Bagicon, { waitForEvents: ['loadEventFired'] }),
      (ele) => ele.click()
    );
  }
}

async function closePopup() {
  // Check for pop-up
  try {
    await t.evaluate(await t.$(cartPopupClose), (ele) => ele.click());
  } catch (error) {
    gauge.message(
      'pop up not available for this brand/locale hence the step is skipped'
    );
  }
}

async function navigateToCartPage(plat) {
  if (plat === 'PC') {
    await clickOnCartOverLay(clickCartPageLink);
  } else {
    await clickOnCartOverLay(clickCartPageLinkMob);
  }
}

async function cartMergeCheckoutbutton() {
  if (returnUserContinueCheckoutViewCart !== '') {
    // Click On Cart Merge Checkout Continue Button is applicable for few Brand/Locale/platform(PC/MOB)
    try {
      await t.evaluate(await t.$(returnUserContinueCheckoutViewCart), (ele) =>
        ele.click()
      );
      gauge.screenshot();
    } catch (e) {
      gauge.message(
        'Cart Merge Checkout Continue Button is not displayed and hence this step is skipped'
      );
    }
  }
}
async function creditCardSubmitButton() {
  if (acCreditCardSubmitButton !== '') {
    try {
      await t.evaluate(await t.$(acCreditCardSubmitButton), (ele) =>
        ele.click()
      );
    } catch (e) {
      gauge.message(
        'credit card button is not displayed and hence this step is skipped'
      );
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function samplePage() {
  if (selectSampleProduct !== '') {
    await t.evaluate(await link({ class: selectSampleProduct }), (ele) =>
      ele.click()
    );
  }
  if (continueSample1 !== '') {
    // MOB checkout viewcart is applicable for few Brand/Locale/platform(MOB)
    try {
      await t.evaluate(await t.$(continueSample1), (ele) => {
        ele.focus();
        ele.click();
      });
      gauge.screenshot();
    } catch (e) {
      gauge.message(
        'sample page1 button is not displayed and hence this step is skipped'
      );
    }
  }
  if (continueSample2.localeCompare('') == 0) {
    // MOB checkout overlay is applicable for few Brand/Locale/platform(MOB)
    try {
      await t.evaluate(await t.$(continueSample2), (ele) => {
        ele.focus();
        ele.click();
      });
      gauge.screenshot();
    } catch (e) {
      gauge.message(
        'sample page2 button is not displayed and hence this step is skipped'
      );
    }
  }
}

async function EditAddress() {
  if (acEditAddress !== '') {
    await t.reload(await t.$(acEditAddress));
    await t.evaluate(await t.$(acEditAddress), (ele) => {
      ele.focus();
      ele.click();
    });
  }
}

async function mobClickOnContinueCheckoutButton() {
  if (mobCheckoutViewCart !== '') {
    // MOB checkout viewcart is applicable for few Brand/Locale/platform(MOB)
    try {
      await t.evaluate(await t.$(mobCheckoutViewCart), (ele) => {
        ele.focus();
        ele.click();
      });
      gauge.screenshot();
    } catch (e) {
      gauge.message(
        'Mobile checkout Viewcart is not displayed and hence this step is skipped'
      );
    }
  }
  if (mobCheckoutCreditcard !== '') {
    // MOB checkout overlay is applicable for few Brand/Locale/platform(MOB)
    try {
      await t.evaluate(await t.$(mobCheckoutCreditcard), (ele) => {
        ele.focus();
        ele.click();
      });
      gauge.screenshot();
    } catch (e) {
      gauge.message(
        'Mobile checkout Creditcard is not displayed and hence this step is skipped'
      );
    }
  }
}

async function mobClickOnSamplePage() {
  if (mobContinuesample1 !== '') {
    // MOB checkout viewcart is applicable for few Brand/Locale/platform(MOB)
    try {
      await t.evaluate(await t.$(mobContinuesample1), (ele) => {
        ele.focus();
        ele.click();
      });
      gauge.screenshot();
    } catch (e) {
      gauge.message(
        'Mobile sample page1 button is not displayed and hence this step is skipped'
      );
    }
  }
}

// Spec Optimization steps

step(
  'AUTOREPLENISHMENT Verify that the user is able to navigate to SPP AR',
  async function () {
    await GotoSKUandbrowsetoSPP();
    await validateInSPP1();
    await CartPopupClosePCAR();
    await closePopup();
  }
);

step(
  'AUTOREPLENISHMENT Verify that the user is able to select AR frequency',
  async function () {
    await clickOnARradiobutton();
    await autoreplenishmentAR();
    await frequencyAR();
    await selectARFrequency();
  }
);

step(
  'AUTOREPLENISHMENT Verify that the user is able to select AR frequency in mobile',
  async function () {
    await clickOnARradiobutton();
    await autoreplenishmentMobAR();
    await frequencyMOBAR();
    await selectARFrequency();
  }
);

step(
  'AUTOREPLENISHMENT Verify that the user is able to add products to cart',
  async function () {
    await addProductToBag();
    await navigateToCartPage();
    await closePopup();
    await arPopupagree();
  }
);

step(
  'AUTOREPLENISHMENT Verify that the user is able to proceed to Cart Merge Checkout successfully',
  async function () {
    await cartMergeCheckoutbutton();
    await samplePage();
    await arPopupagree();
    await returnUserShippingDetailsEditLinkAR();
    await returnUserAddNewAddressAR();
  }
);

step(
  'AUTOREPLENISHMENT Verify that the user is able to proceed to return user payment page',
  async function () {
    await arReturnUserPaymentLinkText();
    await arReturnUserNewPaymentRadiobutton();
  }
);

step(
  'AUTOREPLENISHMENT Verify that the user is able to change date and cancel AR order',
  async function () {
    await goToAccountProfile();
    await clickonAutoreplenish();
    await clickOnARViewdetails();
    await clickOnChangeARdate();
    await clickOnCancelreplenishment();
    await arCancelAssert();
    await signoutButton();
  }
);

step(
  'AUTOREPLENISHMENT Verify that the user is able to edit shipping and payment in AR order',
  async function () {
    await goToAccountProfile();
    await clickonAutoreplenish();
    await clickOnARViewdetails();
    await clickOnEditARShippingbutton();
    await ElementAction(acEditShippingDetails);
    await clickOnEditARPaymentbutton();
    await arEnterCreditCardDetails();
    await creditCardSubmitButton();
  }
);

step(
  'AUTOREPLENISHMENT Verify that the user is able to edit shipping and payment in AR order Mobile',
  async function () {
    await goToAccountProfileMobAR();
    await arMOBHamburgerIcon();
    await arMOBLoginLink();
    await clickonAutoreplenish();
    await clickOnARViewdetails();
    await clickOnEditARShippingbutton();
    await ElementAction(acEditShippingDetails);
    await clickOnEditARPaymentbutton();
    await arEnterCreditCardDetails();
    await creditCardSubmitButton();
  }
);

step(
  'AUTOREPLENISHMENT Verify that the user is able to cancel AR order and signout',
  async function () {
    await clickonAutoreplenish();
    await clickOnARViewdetails();
    await clickOnCancelreplenishment();
    await arCancelAssert();
    await signoutButton();
  }
);
step(
  'AUTOREPLENISHMENT Verify that the user is able to proceed to Cart Merge Checkout successfully Mobile',
  async function () {
    await mobClickOnContinueCheckoutButton();
    await mobClickOnSamplePage();
    await arPopupagree();
    await returnUserShippingDetailsEditLinkAR();
    await returnUserAddNewAddressAR();
  }
);

step(
  'AUTOREPLENISHMENT Verify that the user is able to change date and cancel AR order Mobile',
  async function () {
    await goToAccountProfileMobAR();
    await arMOBHamburgerIcon();
    await arMOBLoginLink();
    await clickonAutoreplenish();
    await clickOnARViewdetails();
    await clickOnChangeARdate();
    await clickOnCancelreplenishmentMob();
    await arCancelAssertMob();
    await clickonBacktoSignin();
    await signoutButton();
  }
);
