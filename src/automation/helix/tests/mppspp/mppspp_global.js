// This file is common template for MPPSPP Features for multiple brands and locales

var t = require('taiko');
let siteDefinition, source, NullDataException;
const Helper = require('../../helpers/helper');
const Util = require('../../../../utilities/util');

var feature = 'MPPSPP';
var CommonData = {};

// Regression variables
var mppClosePopup = '';
var sppClosePopup = '';
var notAvailableProductsCount = 0;
var skuIDCount = 0;
var prodCatUrl = '';
var isShoppable = '';
var isDisplayable = '';
var productUrl = '';
var noDisplayableProductError = '';
var lifeOfProduct = '';
var sharedPageShadeName = '';
var shadeNamelabel = '';
var verifyNotifyMsg = '';
var verifyMsgPath = '';
var submitBtn = '';
var inputEmailPath = '';
var agreeBox = '';
var notifymeCloseBtn = '';
var doggerel = '';
var totalTable = '';
var skuIdDetails = [];
var filePathOne = '';
var filePathTwo = '';
var timeoutSetting = '';
var sppProductUrl = '';
var shadedUrl = '';
var mppPageUrl = '';
var verifyMaxErrorMsg = '';
var shadePath = '';
var cartPagePlusBtn = '';
var mobShadePath = '';
var autoReplenishBtn = '';
var autoReplenishBtnSpp = '';
var clickFreqDropDown = '';
var clickFreqDropDownSPP = '';
var outOfStockMsgPath = '';
var oosShadedMsg = '';
var productPrice = '';
var addToBagMpp = '';
var addToBagSpp = '';
var closePopup = '';
var closeSecPopup = '';
var closeThirdPopup = '';
var increaseQtyBtnMpp = '';
var decreaseQtyBtnMpp = '';
var productViewClass = '';
var clickShadeBtnSpp = '';
var closeShadeBtnSpp = '';
var stickyMiniBagSpp = '';
var shadePathText = '';
var priceRange = '';
var socialWebsiteLinkMob = '';
var clickStickyShadeDropDown = '';
var clickCartPageLinkMob = '';
var clickCartPageLink = '';
var sppPage = '';
var sppRightColumnSec = '';
var mppPage = '';
var mppGridImage = '';
var cartPageURLText = '';
var countryName = '';
var chooseLanguage = '';
var hubsiteSubmitBtn = '';
var hubsiteExtensionUrl = '';
var filterPageUrl = '';
var shadedSkuIds = [];
var nonShadedSkuIds = [];
var nonShadedSizeProductUrl = '';
var detailsProductSppUrl = '';
var stickyShadedOverlayUrl = '';
var stickyNonshadedOverlayUrl = '';
var specificSppProductUrl = '';
var cpSppProductUrl = '';
var socialSiteSppProductUrl = '';
var engravingUrl = '';
var quickViewClass = '';
var quickViewClassMob = '';
var quickViewMultiSizedProduct = '';
var quickViewMultiSizedProductMob = '';
var quickViewSingleSizedProduct = '';
var quickViewSingleSizedProductMob = '';
var resizeFlag = '';
var increaseQtyBtnSpp = '';
var decreaseQtyBtnSpp = '';
var addEngraving = '';
var engravingSec = '';
var addEngravingMob = '';
var engraveLid = '';
var engraveLidMOB = '';
var autoReplenishDropDown = '';
var autoReplenishDropDownMob = '';
var clickFreqDropDownMob = '';
var subLocMpp = '';
var autoReplenishDropDownSpp = '';
var autoReplenishDropDownSppMob = '';
var clickFreqDropDownSppMob = '';
var subscriptionLoc = '';
var addToBagMppMob = '';
var sppPageUrl = '';
var stickyAddtoBagSpp = '';
var productOnCartOverlay = '';
var productPriceOnCartOverlay = '';
var productOnCartOverlayMob = '';
var productPriceOnCartOverlayMob = '';
var cartItem = '';
var outOfStockMsgPathMob = '';
var oosShadedMsgMob = '';
var oosNonshadedMsgPath = '';
var oosNonshadedMsg = '';
var oosNonshadedMsgPathMob = '';
var oosNonshadedMsgMob = '';
var facebookLink = '';
var socialTwitterLink = '';
var pinterestLink = '';
var socialLinks = '';
var socialArrLinks = [];
var pageElements = [];
var productNameMpp = '';
var productPriceMpp = '';
var productRatingMpp = '';
var productNameSpp = '';
var productPriceSpp = '';
var productRatingSpp = '';
var nonshadedMultiSizeMppUrl = '';
var nonshadedSizeMppUrl = '';
var badgesMppUrl = '';
var productBadge = '';
var clickShadeDropDownMpp = '';
var pcShadePathMpp = '';
var mobShadePathMpp = '';
var clickShadeDropDownMppMob = '';
var selectClassShadeDropDownMpp = '';
var selectClassShadeDropDownMppMob = '';
var clickShadeBtnSppTwo = '';
var clickShadeBtnSppThree = '';
var selectClassShadeDropDown = '';
var selectClassShadeDropDownMob = '';
var pcShadePathSpp = '';
var ooShadePathText = '';
var ooSelectClassShadeDropDown = '';
var ooSelectClassShadeDropDownMob = '';
var clickShadeBtnSppMob = '';
var clickShadeBtnSppMobTwo = '';
var clickShadeBtnSppMobThree = '';
var stickyShadeDropDownClass = '';
var clickStickyShadeDropDownMob = '';
var stickyShadeDropDownClassMob = '';
var clickDropDownSizeMpp = '';
var clickDropDownSizeMppMob = '';
var selectDropDownSizeMOB = '';
var selectDropDownSize = '';
var pcSizePathMpp = '';
var mobSizePathMPP = '';
var dropDownSizeInSpp = '';
var dropDownSizeInSppMob = '';
var selectDropDownClass = '';
var selectDropDownClassMob = '';
var chooseSizeInSpp = '';
var sizePicker = '';
var sizePickerMob = '';
var stickyClickSizeDropDown = '';
var stickyClickSizeDropDownMob = '';
var stickySizeDropDownClass = '';
var stickySizeDropDownClassMob = '';
var histogramBar = '';
var customerReviewComments = '';
var notifymeBtn = '';
var nonshadedNotifymeBtn = '';
var reviewLink = '';
var reviewSection = '';
var readReviewProductUrl = '';
var totalProdReviewCount = '';
var starHistogramCount = '';
var writeReviewLink = '';
var signInPageLoc = '';
var increaseBtnInCart = '';
var qtyDropDownInCart = '';
var excessMsgPath = '';
var closeExcessMsg = '';
var chooseHTL = '';
var sortyByDropDownClass = '';
var sortyByDropDownClassMob = '';
var evaluateSortByLoc = '';
var clickSortByLoc = '';
var clickSortByLocMob = '';
var closeSortDropDown = '';
var closeSortDropDownMob = '';
var chooseLTH = '';
var filter = '';
var filterTypeOne = '';
var filterTypeTwo = '';
var applyFilterBtn = '';
var productCountOnMpp = '';
var prodCountVal = '';
var filterTypeThree = '';
var filterClearAll = '';
var faq = '';
var faqContnetPlus = '';
var faqText = '';
var infoIcon = '';
var afterPayLogo = '';
var infoCloseButton = '';
var quizFooter = '';
var subscriptionMppUrl = '';
var subscriptionSppUrl = '';
var qvSubscriptionProduct = '';
var qvSubscriptionProductMob = '';
var productBrief = '';
var favoritesLocMpp = '';
var favouritesMppUrl = '';
var favoritesLocMppMOB = '';
var quickViewForRandomProductREG = '';
var favoritesPopupMessage = '';
var favoritesPopupMessageMob = '';
var favouritesCountVal = '';
var prodSizeOnCartOverlay = '';
var prodQtyOnCartOverlay = '';
var cartLinks = [];
var cartValueLinks = [];
var cartValueLinksMpp = [];
var singleVolumePicker = '';
var singleVolumePickerMob = '';
var cartOverlayCloseLoc = '';
var addToBagSingleVolume = '';
var addToBagMultiVolume = '';
var detailsSection = '';
var ingredientsSection = '';
var howToUseSection = '';
var productImgOnSpp = '';
var productImgOnNewWindow = '';
var productImgOnSppMob = '';
var productImgArrowOnSpp = '';
var productImagesOnSpp = '';
var productImgWindowClose = '';
var productImgArrowOnSppMob = '';
var productImagesOnSppMob = '';
var productImgWindowCloseMob = '';
var thumbnailsOnSpp = '';
var thumbnailsOnSppMob = '';
var askForAnswer = '';
var askForAnswerTab = '';
var afaSearchBox = '';
var afaSearchButton = '';
var afaAnswersList = '';
var sendGiftLinkSpp = '';
var giftTitleOnOverlay = '';
var sgOverlay = '';
var sgClosedOverLay = '';
var cancelGiftLink = '';
var seeGiftBtn = '';
var productInfoOnGiftOverlay = '';
var prepareMyGiftBtn = '';
var giftRemoveLink = '';
var crossSellProd = '';
var learnMore = '';
var lmAfterPay = '';
var pincodeSearchBox = '';
var findButton = '';
var editLink = '';
var findResults = '';
var errorEle = '';
var change = '';
var engLidLoc = '';
var productEngLoc = '';
var firstLineLoc = '';
var secondLineLoc = '';
var prodFirstLine = '';
var prodSecondLine = '';
var preview = '';
var addToBagEngSpp = '';
var addToBagEngSppMOB = '';
var editEngraving = '';
var editEngavingLoc = '';
var saveBtn = '';
var textboxValue = '';
var removeEng = '';
var addEngravingCart = '';
var cartAddEngraving = '';
var cartFirstLine = '';
var cartSecondLine = '';
var cartProdFirstLine = '';
var cartProdSecondLine = '';
var accountRegisterNow = '';
var accountRegistrationFirstName = '';
var accountRegistrationLastName = '';
var accountRegisterPhone = '';
var accountRegisterEmailId = '';
var accountRegisterPWD = '';
var accountRegisterationTerms = '';
var accountRegisterButton = '';
var acMobRegisterNow = '';
var mobAccountRegisterationTerms = '';
var acMobRegisterButton = '';
var favoritesSppReg = '';
var favoritesLinkReg = '';
var myAccountLinkReg = '';
var startNewButtonReg = '';
var clickQuickViewFavoritesReg = '';
var addProductToFavoritesReg = '';
var addToBagFav = '';
var addToBagFavMob = '';
var checkBagIconReg = '';
var seeAllFavorites = '';
var acMobileHamburgerIcon = '';
var sortQuestionByDropDown = '';
var chooseQuestion = '';
var selectClassSortQuestion = '';
var sortQuestionByDropDownMob = '';
var chooseQuestionMob = '';
var selectClassSortQuestionMob = '';
var searchResult = '';
var askaQuestionButton = '';
var questionInputText = '';
var enterEmailId = '';
var enterNickname = '';
var thankYouMsgPath = '';
var skipFilterClick = '';
var youtubeSPPURL = '';
var youtubeLoc = '';
var youtubeClickLoc = '';
var youtubeLocMob = '';
var youtubeClickLocMob = '';
var brandLocale = '';

// Sanity variables
var mppUrl = '';
var javaAlertPopupMpp = '';
var javaAlertPopupSpp = '';
var bagIconLinkPc = '';
var bagIconLinkMob = '';
var checkoutOverlayPopup = '';
var overlayCloseBtn = '';
var clickElcEmployeeBtn = '';
var returnUserSignInBtn = '';
var acEnterEmail = '';
var acEnterPassword = '';
var mppBagBtn = '';
var sppBagBtn = '';
var sppPageProdHeaderPc = '';
var sppPageProdHeaderMob = '';
var productViewClassMppPc = '';
var productViewClassMPPMob = '';
var quickViewClassMppPc = '';
var quickViewClassMppMob = '';
var productViewTextPc = '';
var productViewTextMob = '';
var mppPageGrid = '';
var clickOverlayLinkPc = '';
var clickOverlayLinkMob = '';
var cartProductNameLocPc = '';
var cartProductNameLocMob = '';
var scrollDownValue = '';
var productName = '';

let Hengine = require('../../../../datainterface/providers/hengine.js');
let fs = require('fs');
const assert = require('assert');

const matchCondition = true;
const messages = {
  stepNotApplicable: 'This step is not applicable for this Brand/Locale',
};

function reinitialize() {
  shadedSkuIds = [
    CommonData.shadedSkuId1,
    CommonData.shadedSkuId2,
    CommonData.shadedSkuId3,
    CommonData.shadedSkuId4,
    CommonData.shadedSkuId5,
    CommonData.shadedSkuId6,
    CommonData.shadedSkuId7,
    CommonData.shadedSkuId8,
    CommonData.shadedSkuId9,
    CommonData.shadedSkuId10,
  ];
  nonShadedSkuIds = [
    CommonData.nonShadedSkuId1,
    CommonData.nonShadedSkuId2,
    CommonData.nonShadedSkuId3,
    CommonData.nonShadedSkuId4,
    CommonData.nonShadedSkuId5,
    CommonData.nonShadedSkuId6,
    CommonData.nonShadedSkuId7,
    CommonData.nonShadedSkuId8,
    CommonData.nonShadedSkuId9,
    CommonData.nonShadedSkuId10,
  ];
  socialArrLinks = [facebookLink, socialTwitterLink, pinterestLink];
  pageElements = [
    CommonData.facebookTitle,
    CommonData.twitterTitle,
    CommonData.pinterestTitle,
  ];
  cartLinks = [
    productOnCartOverlay,
    prodSizeOnCartOverlay,
    productPriceOnCartOverlay,
    prodQtyOnCartOverlay,
  ];
  cartValueLinks = [
    CommonData.cartHeader,
    CommonData.productSizeValue,
    CommonData.cartPrize,
    CommonData.cartQTY,
  ];
  cartValueLinksMpp = [
    CommonData.cartHeaderMpp,
    CommonData.productSizeValueMpp,
    CommonData.cartPrizeMpp,
    CommonData.cartQTYMpp,
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

/**
 * @description It checks the sort order.
 * @param {array} Array - It is an array of product prices after refined on the sorting function.
 * @returns - It returns the sorting order text.
 */

function AscDscArray(Array) {
  var Array1 = [];
  for (let i = 0; i < Array.length; i++) {
    Array1.push('' + Array[i]);
  }
  var Longestelement = Longest_str_in_array(Array1);
  var Array2 = [];
  for (let i = 0; i < Array1.length; i++) {
    if (Array1[i].length < parseInt(Longestelement.length)) {
      Array2.push('0' + Array1[i]);
    } else {
      Array2.push(Array1[i]);
    }
  }
  console.log(Array2);
  var ascending = !matchCondition,
    descending = !matchCondition;
  for (let i = 0; i < Array2.length - 1; i++) {
    if (Array2[i] < Array2[i + 1]) {
      ascending = matchCondition;
    }
    if (Array2[i] > Array2[i + 1]) {
      descending = matchCondition;
    }
  }
  if (ascending && descending) return 'unsorted';
  return ascending ? 'ascending' : 'descending';
}

function Longest_str_in_array(Array) {
  var Max_str = Array[0].length;
  var Longest = Array[0];
  for (let i = 1; i < Array.length; i++) {
    var Maxi = Array[i].length;
    if (Maxi > Max_str) {
      Longest = Array[i];
      Max_str = Maxi;
    }
  }
  return Longest;
}

// Generic re-useable functions

/**
 * @description It is used to split the name and password for lower urls environments, which was used to validate the home page.
 * @param {string} plat - plat should be pc or mob.
 * @returns url after spliting for lower environments otherwise return the base url.
 */

function Splittingurl(siteDef) {
  var newurl = '';
  // if (getBaseURL().includes('@')) {
  if (Helper.getBaseUrl(siteDef).includes('@')) {
    const [, second] = Helper.getBaseUrl(siteDef).split('@');
    newurl = 'https://' + second;
    return newurl;
  } else {
    return Helper.getBaseUrl(siteDef);
  }
}

/**
 * @description It is used to go to any page connecting to the base URL by passing the expansion url.
 * @param {string} siteDef - plat should be pc or mob.
 * @param {url} expansionurl - It would be any url that concate with baseurl.
 */

async function Gotothisurl(siteDef, expansionurl) {
  if (expansionurl !== '') {
    await t.goto((await Helper.getBaseUrl(siteDef)) + expansionurl, {
      waitForEvents: ['DOMContentLoaded'],
    });
  }
}

/**
 * @description It is used to check if the element exists on the page if not return false.
 * @param {var} element - The locator of the element.
 * @param {string} custommessage - It would be a proper message depending on the scenario.
 */

async function VerifyElementexists(element, custommessage) {
  if (element !== '') {
    if (await (await t.$(element)).exists()) {
      await ScrolltoElement(element);
      gauge.message(custommessage + ' exists');
    } else {
      assert(
        !matchCondition,
        custommessage + " doesn't exists within 10 seconds"
      );
    }
  }
}

/**
 * @description It is used to check if the element exists on the page and click on it if not return false.
 * @param {var} element - The locator of the element.
 * @param {string} custommessage - It would be a proper message depending on the scenario.
 */

async function VerifyElementExistsandClick(element, custommessage) {
  if (element !== '') {
    if (await (await t.$(element)).exists()) {
      await ScrolltoElement(element);
      await t.evaluate(
        await t.$(element, { waitForEvents: ['loadEventFired'] }),
        (ele) => {
          ele.focus();
          ele.click();
        }
      );
      gauge.screenshot();
      gauge.message(custommessage + ' exists and able to click');
      await t.waitFor(parseInt(CommonData.waitTimeOneK, 10));
    } else {
      assert(
        !matchCondition,
        custommessage + " doesn't exists within 10 seconds"
      );
    }
  }
}

/**
 * @description It is used to check if the element exists on the page and do multiple click on it in a loop if not return false.
 * @param {var} element - The locator of the element.
 * @param {String} qtyval - The value of max quantity user can select.
 * @param {string} custommessage  - It would be a proper message depending on the scenario.
 */

async function VerifyElementExistsandMultipleClickonLoop(
  element,
  qtyval,
  custommessage
) {
  if (element !== '') {
    if (await (await t.$(element)).exists()) {
      for (let i = 1; i < qtyval; i++) {
        await t.evaluate(await t.$(element), (ele) => ele.click());
      }
      gauge.screenshot();
      gauge.message(custommessage + ' exists and able to do multiple click');
    } else {
      assert(
        !matchCondition,
        custommessage + " doesn't exists within 10 seconds"
      );
    }
  }
}

/**
 * @description It is used to scroll through the element that may be displayed on the page.
 * @param {var} element - The locator of the element.
 */

async function ScrolltoElement(element) {
  await t.evaluate(await t.$(element), (ele) => ele.scrollIntoView());
  await t.scrollUp(parseInt(CommonData.scrollUpVal, 10));
}

/**
 * @description It is used to check if the text exists on the page if not return false.
 * @param {string} data - The text of the element.
 * @param {string} custommsg - It would be a proper message depending on the scenario.
 */

async function Verifytextexists(data, custommsg) {
  if (data !== '') {
    if (await t.text(data).exists()) {
      gauge.message(custommsg + ' exists');
      assert(matchCondition);
      gauge.screenshot();
    } else {
      assert(!matchCondition, custommsg + " doesn't exist");
    }
  }
}

/**
 * @description It is used to perfom click action on the element if exists
 * @example It can be used to close intermittent popups between pages.
 * @param {var} element - The locator of the element.
 * @param {string} custommessage - It would be a proper message depending on the scenario on try block
 * @param {string} custommessage2 - It would be a proper message depending on the scenario on catch block.
 */

async function Trycatchclick(element, custommessage, custommessage2) {
  if (element !== '') {
    try {
      await t.click(t.$(element));
      gauge.message(custommessage);
    } catch (error) {
      gauge.message(custommessage2);
    }
  }
}

/**
 * @description It is used to check if the element exists on the page and focus and click on it if not returns else part message.
 * @param {var} element - The locator of the element.
 * @param {string} customtext- It would be a proper message depending on the scenario inside if.
 * @param {string} elsecustomtext- It would be a proper message depending on the scenario on else part.
 */

async function FocusAndClick(element, customtext, elsecustomtext) {
  if (element !== '') {
    if (await (await t.$(element)).exists()) {
      await t.evaluate(
        await t.$(element, { waitForEvents: ['loadEventFired'] }),
        (ele) => {
          ele.focus();
          ele.click();
        }
      );
      gauge.message(customtext);
    } else {
      gauge.message(elsecustomtext);
    }
  }
}

/**
 * @description It is used Get the currenturl of the page and validate it with the provided text
 * @param {String} text - The Text to validate with url
 * @param {String} custommsg - It would be a proper message depending on the scenario inside if
 * @param {String} elsecustommsg - It would be a proper message depending on the scenario on else part
 */

async function ValidateURLwithtext(text, custommsg, elsecustommsg) {
  if (text !== '') {
    var CPurl = await t.currentURL();
    if (CPurl.includes(text)) {
      gauge.message(custommsg);
    } else {
      assert(!matchCondition, elsecustommsg);
    }
  }
}

/**
 * @description It is used to check if the element exists on the page and hover and click on another element if not returns else part message.
 * @param {var} element - The locator of the element to hover over.
 * @param {var} element2 - The locator of the element to click on.
 * @param {string} customtext- It would be a proper message depending on the scenario inside if.
 * @param {string} elsecustomtext- It would be a proper message depending on the scenario on else part.
 */

async function HoverAndClick(element, element2, customtext, elsecustomtext) {
  if (element !== '') {
    if (await (await t.$(element)).exists()) {
      await t.hover(await t.$(element));
      await t.click(await t.$(element2));
      gauge.message(customtext);
    } else {
      assert(!matchCondition, elsecustomtext);
    }
  }
}

/**
 * @description It validates is button is disabled  or not
 * @param {var} PlusORMinusButton - The locator of the cart overlay. *
 * @param {CustomText} - Specific Text
 */

async function VerifyDisableElement(PlusORMinusButton, CustomText) {
  if (PlusORMinusButton !== '') {
    if (await (await t.$(PlusORMinusButton)).isDisabled()) {
      assert(matchCondition);
      gauge.message('The ' + CustomText + ' Button is Greyed Out');
      gauge.screenshot();
    } else if (await (await t.$(PlusORMinusButton)).exists()) {
      // For vulcan/gemini mpp pages the isDisabled api is not returning the right value, so using the class attribute to validate the button disabled.
      let classattribute = await (
        await t.$(PlusORMinusButton)
      ).attribute('class');
      assert(classattribute.includes('opacity'));
      gauge.message('The ' + CustomText + ' Button is Disabled');
      gauge.screenshot();
    } else {
      assert(!matchCondition, 'The ' + CustomText + '  Button is not disabled');
    }
  }
}

/**
 * @description It Enters the Given Text
 * @param {var}  element- The locator where we need to enter text *
 * @param {var}  TextToEnter- Text to Enter
 * @param {var}  LocatorScollDown- Scroll Down Value to reach the element*
 */

async function EnterCode(element, TextToEnter, LocatorScollDown) {
  if (element !== '') {
    await t.scrollDown(parseInt(LocatorScollDown));
    await t.write(TextToEnter, t.into(await t.$(element)));
    gauge.message('Entered ' + TextToEnter);
    gauge.screenshot();
  }
}

/**
 * @description It Validates the Page Title
 * @param {var}  arrLinks- Array of Locators extract the values
 * @param {var}  arrValues- Array of Values
 * @param {var}  Customtext- Customized Text
 */

async function MultipleTextValidation(arrLinks, arrValues, Customtext) {
  for (let i = 0; i < arrLinks.length; i++) {
    if (arrLinks[i] !== '') {
      let CValue = await (await t.$(arrLinks[i])).text();
      if (CValue.toUpperCase() === arrValues[i].toUpperCase()) {
        assert(matchCondition);
        gauge.message(CValue + ' is displayed  on ' + Customtext);
      } else {
        assert(!matchCondition, CValue + ' is not displayed  on ' + Customtext);
      }
    }
  }
}

// Re-useable functions for front end scenarios

/**
 * @description It is used to check in MPP and the MPP grid is completely loaded, otherwise it tries to reload it and check it again otherwise fails.
 */

async function VerifyMPPGrid() {
  if (await (await t.$(mppPage)).exists()) {
    gauge.message('In Multi Product Page.');
    let MPPGridcount = 0;
    for (let i = 0; i < 3; i++) {
      if (
        await (
          await t.$(mppGridImage)
        ).exists(
          parseInt(CommonData.existsCheckFrequency, 10),
          parseInt(CommonData.existsWaitTime, 10)
        )
      ) {
        gauge.message('Grid loading is completed as expected.');
        break;
      } else {
        await t.scrollDown(parseInt(CommonData.scrollDownVal, 10));
        MPPGridcount++;
      }
    }
    if (MPPGridcount === 3) {
      await t.reload({ waitForEvents: ['DOMContentLoaded'] });
      gauge.message("Page hasn't loaded thus reloading the page.");
      await t.scrollUp(parseInt(CommonData.waitTimeTenK, 10));
      await t.scrollDown(parseInt(CommonData.scrollDownVal, 10));
      if (
        await (
          await t.$(mppGridImage)
        ).exists(
          parseInt(CommonData.existsCheckFrequency, 10),
          parseInt(CommonData.existsWaitTime, 10)
        )
      ) {
        gauge.message('Grid loading is completed as expected.');
      } else {
        assert(
          !matchCondition,
          'Grid is not loaded after re-loading the page.'
        );
      }
    }
    await Trycatchclick(mppClosePopup, 'popup closed', 'no popups displayed');
  } else {
    assert(!matchCondition, 'Not in Multi Product Page.');
  }
}

/**
 * @description It is used to check in SPP and the SPP RightColumn section is completely loaded, otherwise it tries to reload it and check it again otherwise fails.
 */

async function VerifySPPGrid() {
  if (await (await t.$(sppPage)).exists()) {
    gauge.message('In Single Product Page.');
    let SPPGridcount = 0;
    for (let i = 0; i < 2; i++) {
      if (
        await (
          await t.$(sppRightColumnSec)
        ).exists(
          parseInt(CommonData.existsCheckFrequency, 10),
          parseInt(CommonData.existsWaitTime, 10)
        )
      ) {
        gauge.message(
          'SPP RightColumn section loading is completed as expected.'
        );
        break;
      } else {
        await t.reload({ waitForEvents: ['loadEventFired'] });
        gauge.message("Page hasn't loaded thus reloading the page.");
        SPPGridcount++;
      }
    }
    if (SPPGridcount === 2) {
      assert(
        !matchCondition,
        'SPP RightColumn section is not loaded after re-loading the page twice.'
      );
    }
    await Trycatchclick(sppClosePopup, 'popup closed', 'no popups displayed');
  } else {
    assert(!matchCondition, 'Not in Single Product Page.');
  }
}

/**
 * @description It has the steps to complete the quiz for Jomalone sites. Reused after clicking the Retake Quiz.
 */

async function Quizsteps() {
  await t.click(await t.$(quizFooter));
  gauge.screenshot();
  await t.click(CommonData.quizstepTextOne);
  await t.click(CommonData.quizstepTextTwo);
  await t.click(CommonData.quizstepTextThree);
  await t.click(CommonData.quizstepTextFour);
  await t.click(CommonData.quizstepTextFive);
}

/**
 * @description This is a re-usable function to select subscription for multiple brands.
 * @param {var} FreqDD - The locator of frequency dropdown.
 * @param {var} Autoreplenish-The locator of autoreplenish radio btn.
 * @param {var} Autoreplenishloc = Subscription toggle btn
 * @param {var} subloc - autoreplenish with Dealy
 */

async function Selectsubscription(
  FreqDD,
  Autoreplenishloc,
  AutoreplenishDD,
  Frequency,
  subloc
) {
  if (FreqDD !== '') {
    if (await (await t.$(Autoreplenishloc)).exists()) {
      await ScrolltoElement(Autoreplenishloc);
      await t.evaluate(await t.$(Autoreplenishloc), (ele) => ele.click());
    }
    if (await (await t.$(FreqDD)).exists()) {
      await ScrolltoElement(FreqDD);
      await t.click(await t.$(FreqDD));
      await t.click(await t.text(Frequency));
      gauge.screenshot();
      gauge.message(Frequency + 'Frequency selected');
    }
  } else if (AutoreplenishDD !== '') {
    if (await (await t.$(Autoreplenishloc)).exists()) {
      await ScrolltoElement(Autoreplenishloc);
      await t.evaluate(await t.$(Autoreplenishloc), (ele) => ele.click());
    }
    await t.dropDown({ class: AutoreplenishDD }).select(Frequency);
    gauge.message(Frequency + 'Frequency selected');
  } else if (subloc !== '') {
    if (await (await t.$(Autoreplenishloc)).exists()) {
      // As scrollIntoView() was not working added scrollDown to navigate to specific location
      await t.scrollDown(parseInt(CommonData.scrollValue, 10));
      await t.evaluate(await t.$(Autoreplenishloc), (ele) => ele.click());
    }
    await t.click(await t.$(subloc));
    await t.click(await t.text(Frequency));
    gauge.screenshot();
    gauge.message(Frequency + 'Frequency selected');
  }
}

/**
 * @description It handles any warning pop-up and checks that Add to Bag exists and also checks that it is not disabled and clicks on it in SPP.
 * @param {var} addtobagspp - The locator of the addtobag btn in spp.
 */

async function AddproducttoBaginSPP(addtobagspp, javaAlertPopup = '') {
  if (addtobagspp !== '') {
    if (javaAlertPopup !== '') {
      t.alert(async ({ message }) => {
        console.log(message);
        if (message.includes(javaAlertPopup)) {
          console.log('message matches');
          await t.accept();
        }
      });
    }

    let AddtoBagExist = 0;
    for (let i = 0; i < 2; i++) {
      if (
        await (
          await t.$(addtobagspp)
        ).exists(
          parseInt(CommonData.existsCheckFrequency, 10),
          parseInt(CommonData.existsWaitTime, 10)
        )
      ) {
        if ((await (await t.$(addtobagspp)).isDisabled()) !== matchCondition) {
          await t.evaluate(
            await t.$(addtobagspp, {
              waitForEvents: ['loadEventFired'],
            }),
            (ele) => {
              ele.focus();
              ele.click();
            }
          );
          gauge.message('Add to Bag btn is enabled and Product added to cart.');
          // For a few sites after clicking Add to Bag, overlays take a while to appear, so wait a second.
          await t.waitFor(parseInt(CommonData.waitTimeOneK, 10));
          gauge.screenshot();
          break;
        } else {
          assert(!matchCondition, 'Add to Bag btn is disabled.');
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
        !matchCondition,
        'Add to bag does not load within expected time and reload the page.'
      );
    }
  }
}

/**
 * @description It is used to click on the given logo and checks that it navigates to the expected page.
 * @param {var} logolocator - The locator of the logo to click.
 * @param {var} exptitle - The data of the title to assert.
 * @param {string} custommsg - It would be a proper message depending on the scenario.
 */

async function Assertlogoinwebsite(logolocator, exptitle, custommsg) {
  if (logolocator !== '') {
    if (await (await t.$(logolocator)).exists()) {
      // As we move to another tab, we have to wait for the content to be loaded on that page.
      await t.evaluate(
        await t.$(logolocator, { waitForEvents: ['targetNavigated'] }),
        (ele) => ele.click()
      );
      await t.waitFor(parseInt(CommonData.waitTimeThreeK, 10));
      gauge.screenshot();
      var pagetitle = await t.title();
      gauge.message('ActualPagetitle : ' + pagetitle);
      gauge.message('ExpectedPagetitle : ' + custommsg);
      if (pagetitle === exptitle) {
        assert(matchCondition);
        gauge.message('Successfully navigated to ' + custommsg);
      } else {
        assert(!matchCondition, 'Not able to navigate to ' + custommsg);
      }
    }
  }
}

/**
 * @description It is used to go back to the page and check it with the title before and then go back.
 * @param {var} Spppageurl - url of the SPP page
 */

async function Gobackpreviouspage(Spppageurl) {
  var title = await t.evaluate(() => {
    return document.title;
  });
  gauge.message('Currentpagetitle : ' + title);
  try {
    await t.switchTo(Spppageurl);
  } catch (e) {
    await t.goBack({ waitForEvents: ['loadEventFired'] });
  }
  var backtitle = await t.evaluate(() => {
    return document.title;
  });
  if (title !== backtitle) {
    assert(matchCondition);
    gauge.message('Successfully navigated to previous page');
  } else {
    assert(!matchCondition, 'Not able to navigate to previous page');
  }
  gauge.message('Pagetitle after clicked on go back: ' + backtitle);
}

/**
 * @description It is used to click on the link of the given social website and check that it landed on this page by asserting the title.
 * @param {var} SourceWebsiteLink - The locator of the website link to click.
 * @param {string} WebsiteName - The Respective Website Details
 */

async function SocialSiteValidation(SourceWebsiteLink, WebsiteName) {
  if (SourceWebsiteLink !== '') {
    var socialpageurl = await t.currentURL();
    if (socialWebsiteLinkMob !== '') {
      if (await (await t.$(socialWebsiteLinkMob)).exists()) {
        await t.evaluate(
          await t.$(socialWebsiteLinkMob, {
            waitForEvents: ['loadEventFired'],
          }),
          (ele) => ele.click()
        );
        gauge.screenshot();
      }
    }
    if (await (await t.$(SourceWebsiteLink)).exists()) {
      await t.evaluate(
        await t.$(SourceWebsiteLink, { waitForEvents: ['loadEventFired'] }),
        (ele) => ele.click()
      );
      // As we move to another tab, we have to wait for the content to be loaded on that page.
      await t.waitFor(parseInt(CommonData.waitTimeThreeK, 10));
      var pagetitle = await t.title();
      var pageurl = await t.currentURL();
      gauge.message('ActualPagetitle : ' + pagetitle);
      gauge.screenshot();
      if (WebsiteName.toLowerCase().includes(pagetitle.toLowerCase())) {
        gauge.message('ExpectedPagetitle : ' + WebsiteName);
        assert(matchCondition);
        gauge.message('Successfully navigated to ' + WebsiteName);
      } else if (WebsiteName.toLowerCase().includes(pageurl)) {
        assert(matchCondition);
        gauge.message('Successfully navigated to ' + WebsiteName);
      } else {
        assert(!matchCondition, 'Not able to navigate to ' + WebsiteName);
      }
      try {
        await t.switchTo(socialpageurl);
      } catch (e) {
        gauge.message('No tab available');
      }
      await t.closeTab(pageurl);
    } else {
      gauge.message(SourceWebsiteLink + "link doesn't exists in SPP");
    }
  }
}

/**
 * @description It is used to validate the shaded and nonshaded out of stock message for multiple brands.
 * @param {var} msgpath - The locator of the message.
 * @param {string} expectedmsg - It is string of the message we want to assert.
 * @param {string} custommsg - It would be a proper message depending on the scenario.
 */

async function Validateshadednonshadedoutofstockmsg(
  msgpath,
  expectedmsg,
  custommsg
) {
  if (msgpath !== '') {
    if (await (await t.$(msgpath)).exists()) {
      await ScrolltoElement(msgpath);
      if (await (await t.$(msgpath)).isVisible()) {
        var ActualMsg = await (await t.$(msgpath)).text();
        gauge.message('ActualMessage : ' + ActualMsg);
        gauge.screenshot();
        gauge.message('ExpectedMessage :' + expectedmsg);
        if (ActualMsg.search(expectedmsg) !== -1) {
          assert(matchCondition);
          gauge.message(
            'The selected ' + custommsg + ' is Out of Stock/Coming soon/Soldout'
          );
        } else {
          assert(!matchCondition, 'The error msg not matched');
        }
      } else {
        gauge.message('The msg path is not visible');
      }
    } else {
      gauge.message(
        'The ' +
          custommsg +
          ' item is available to checkout/No OOSmessage displayed'
      );
    }
  }
}

/**
 * @description It checks the shade text on the shopping cart page and the shade we used to select are the same, otherwise fails.
 * @param {var} shadepath - The locator of the shade in cartpage.
 * @param {var} shadepathtext - The locator of the shade to choose in Spp.
 */

async function Validateshadeincart(shadepath, shadepathtext, ShadeName) {
  if (await (await t.$(shadepath)).exists()) {
    var Actualshade = await (await t.$(shadepath)).text();
    gauge.message('ActualShadename : ' + Actualshade);
    if (Actualshade !== null) {
      if (Actualshade.toUpperCase().includes(ShadeName.toUpperCase())) {
        assert(matchCondition);
        gauge.message('ExpectedShadename : ' + ShadeName);
        gauge.message('Expected and Actual shade matches');
      } else if (shadepathtext.includes(Actualshade)) {
        assert(matchCondition);
        gauge.message('Selected shade matches in cartpage');
      } else if (await t.text(ShadeName).exists()) {
        assert(matchCondition);
        gauge.message('Selected shade matches in cartpage');
      } else {
        gauge.message('ExpectedShadename : ' + ShadeName);
        assert(!matchCondition, 'Selected Shade not matched');
      }
      gauge.screenshot();
    } else {
      assert(!matchCondition, 'Actualshade text returns null');
    }
  } else {
    gauge.message('No shaded item added to the cart');
  }
}

/**
 * @description This is used to choose the value from the Mpp drop-down menu for multiple brands.
 * @param {var} dropdownlocatormpp - The locator of the dropdown in Mpp.
 * @param {string} shadeorsizetextmpp - The data of the shade or size to select.
 * @param {string} customtext - It would be a proper message depending on the scenario.
 * @param {var} selectdropdownloc - The locator of the select class dropdown in Spp.
 */

async function ChoosevalueinDD(
  dropdownlocatormpp,
  shadeorsizetextmpp,
  shadetextloc,
  customtext,
  selectdropdownloc
) {
  if (dropdownlocatormpp !== '') {
    if (CommonData.scrollValueMpp !== '') {
      // As scrollIntoView() was not working added scrollDown to navigate to specific location
      await t.scrollDown(parseInt(CommonData.scrollValueMpp, 10));
    } else {
      await ScrolltoElement(dropdownlocatormpp);
    }
    await t.click(await t.$(dropdownlocatormpp));
    await t.click(await t.text(shadeorsizetextmpp), {
      waitForNavigation: !matchCondition,
    });
    gauge.message(customtext + ' : ' + shadeorsizetextmpp);
    gauge.screenshot();
  } else if (shadetextloc !== '') {
    await ScrolltoElement(shadetextloc);
    await t.evaluate(await t.$(shadetextloc), (ele) => ele.click(), {
      waitForNavigation: !matchCondition,
    });
    gauge.screenshot();
  } else if (selectdropdownloc !== '') {
    await t.dropDown({ class: selectdropdownloc }).select(shadeorsizetextmpp);
    gauge.message('Selected Shade :' + shadeorsizetextmpp);
    gauge.screenshot();
  }
}

/**
 * @description This generic function allows you to select the value in the Spp dropdown menu for several brands.
 * @param {var} dropdownlocatorspp2 - The locator of the dropdown in Spp(for esteelauder and smashbox sites).
 * @param {var} selectdropdownloc - The locator of the select class dropdown in Spp.
 * @param {string} shadetext - The data of the shade or size to select.
 * @param {var} shadepathloc - The locator of the shade to choose in Spp.
 */

async function ChoosevalueinDDSPP(
  dropdownlocatorspp2,
  selectdropdownloc,
  shadetext,
  shadepathloc
) {
  if (dropdownlocatorspp2 !== '') {
    await ScrolltoElement(dropdownlocatorspp2);
    await t.click(await t.$(dropdownlocatorspp2));
    await t.scrollTo(shadetext);
    await ScrolltoElement(dropdownlocatorspp2);
    await t.click(shadetext, { waitForNavigation: !matchCondition });
    gauge.message('Selected Shade :' + shadetext);
    gauge.screenshot();
  } else if (selectdropdownloc !== '') {
    await t.dropDown({ class: selectdropdownloc }).select(shadetext);
    gauge.message('Selected Shade :' + shadetext);
    gauge.screenshot();
  } else if (shadepathloc !== '') {
    await ScrolltoElement(shadepathloc);
    await t.evaluate(await t.$(shadepathloc), (ele) => ele.click(), {
      waitForNavigation: !matchCondition,
    });
    gauge.screenshot();
  }
}

/**
 * @description This is a generic function used to choose the shade or size from the sticky spp drop-down menu for multiple brands.
 * @param {var} stickyshadeorsizelocator - The locator of the sticky shade dropdown in Spp.
 * @param {string} shadeorsizenametext - The data of the shade to select.
 * @param {string} custommessage - It would be a proper message depending on the scenario.
 * @param {var} stickyshadeorsizeclass - The class of the sticky shade dropdown in Spp.
 */

async function ChooseshadeorsizefromStickyDD(
  stickyshadeorsizelocator,
  shadeorsizenametext,
  custommessage,
  stickyshadeorsizeclass
) {
  if (stickyshadeorsizelocator !== '' || stickyshadeorsizeclass !== '') {
    if (await (await t.$(reviewLink)).exists()) {
      await t.evaluate(
        await t.$(reviewLink, { waitForEvents: ['loadEventFired'] }),
        (ele) => ele.click(),
        {
          waitForNavigation: !matchCondition,
        }
      );
      gauge.message('Clicked on Review link and scrolled to Sticky section');
    } else {
      await t.scrollDown(parseInt(CommonData.scrollToStickyValue, 10));
    }
    if (stickyshadeorsizeclass !== '') {
      await ChoosevalueinDDSPP(
        stickyshadeorsizelocator,
        stickyshadeorsizeclass,
        shadeorsizenametext
      );
    } else {
      await Trycatchclick(
        closeThirdPopup,
        'popup closed',
        'no popups displayed'
      );
      if (stickyMiniBagSpp !== '') {
        if (await (await t.$(stickyMiniBagSpp)).exists()) {
          await t.click(await t.$(stickyMiniBagSpp));
        }
      }
      await t.click(
        await t.$(stickyshadeorsizelocator, {
          waitForEvents: ['loadEventFired'],
        })
      );
      gauge.screenshot();
      await t.waitFor(shadeorsizenametext);
      await t.click(shadeorsizenametext, {
        waitForNavigation: !matchCondition,
      });
    }
    gauge.message(custommessage + shadeorsizenametext);
  }
}

/**
 * @description This is used to choose the size from the Spp drop-down menu for multiple brands.
 * @param {var} sizelocator - The locator of the size dropdown in Spp.
 * @param {var} sizelocatormob - The locator of the mob size dropdown in Spp.
 * @param {var} selectdropdown - The locator of the size dropdown in Spp.
 * @param {string} sizetext - The data of the size to select.
 * @param {var} dropdownval - The data of the dropdown size to select.
 * @param {var} sizepicloc - Locator for SizePicker
 */

async function SelectsizeinDropdownSPP(
  sizelocator,
  selectdropdown,
  secsizelocator,
  sizetext,
  dropdownval,
  sizepicloc
) {
  if (sizelocator !== '') {
    if (await (await t.$(sizelocator)).exists()) {
      await ScrolltoElement(sizelocator);
      await t.click(await t.$(sizelocator));
      gauge.screenshot();
      await t.waitFor(sizetext);
      await t.click(sizetext);
      gauge.message('Selected size : ' + sizetext);
      gauge.screenshot();
    }
  } else if (selectdropdown !== '') {
    await t.dropDown({ class: selectdropdown }).select(dropdownval);
    gauge.screenshot();
  } else if (secsizelocator !== '') {
    if (await (await t.$(secsizelocator)).exists()) {
      await ScrolltoElement(secsizelocator);
      await t.waitFor(sizetext);
      await t.click(sizetext);
      gauge.message('Selected size : ' + sizetext);
      gauge.screenshot();
    }
  } else if (sizepicloc !== '') {
    // As ScrolltoElement() was not working as expected for some brands added scrollDown to navigate to specific location
    if (CommonData.scrollValue !== '') {
      await t.scrollDown(parseInt(CommonData.scrollValue, 10));
    } else {
      await ScrolltoElement(sizepicloc);
    }
    await t.click(await t.text(sizetext), {
      waitForNavigation: !matchCondition,
    });
    gauge.message('Selected size : ' + sizetext);
    gauge.screenshot();
  }
}

async function HTLandLTHsortingEvaluateClick(sortdropdownloc, sortingoption) {
  if (
    await (
      await t.$(sortdropdownloc)
    ).exists(
      parseInt(CommonData.existsCheckFrequency, 10),
      parseInt(CommonData.existsWaitTime, 10)
    )
  ) {
    await ScrolltoElement(sortdropdownloc);
    await t.evaluate(await t.$(sortdropdownloc), (ele) => ele.click());
    await t.evaluate(await t.$(sortingoption), (ele) => ele.click(), {
      waitForNavigation: !matchCondition,
    });
    // Once the sorting options are selected, the products will be refreshed, so wait 2 seconds.
    await t.waitFor(parseInt(CommonData.waitTimeTwoK, 10));
    gauge.screenshot();
  } else {
    assert(
      !matchCondition,
      'Sorting Dropdown not exits/Locator change/ page not loaded within 20 seconds'
    );
  }
}

async function HTLandLTHsortingClick(
  sortdropdownloc,
  sortingoptiontext,
  closesortdropdown
) {
  if (
    await (
      await t.$(sortdropdownloc)
    ).exists(
      parseInt(CommonData.existsCheckFrequency, 10),
      parseInt(CommonData.existsWaitTime, 10)
    )
  ) {
    await ScrolltoElement(sortdropdownloc);
    await t.click(await t.$(sortdropdownloc));
    await t.click(await t.text(sortingoptiontext), {
      waitForNavigation: !matchCondition,
    });
    // Once the sorting options are selected, the products will be refreshed, so wait 2 seconds.
    await t.waitFor(parseInt(CommonData.waitTimeTwoK, 10));
    gauge.screenshot();
    if (closesortdropdown !== '') {
      await t.click(await t.$(closesortdropdown));
    }
  } else {
    assert(
      !matchCondition,
      'Sorting Dropdown not exits/Locator change/ page not loaded within 20 seconds'
    );
  }
}

async function HTLandLTHsortingSelectDropdown(
  sortdropdownclass,
  sortingoption
) {
  if (
    await t
      .dropDown({ class: sortdropdownclass })
      .exists(
        parseInt(CommonData.existsCheckFrequency, 10),
        parseInt(CommonData.existsWaitTime, 10)
      )
  ) {
    await t.dropDown({ class: sortdropdownclass }).select(sortingoption);
    // Once the sorting options are selected, the products will be refreshed, so wait 2 seconds.
    await t.waitFor(parseInt(CommonData.waitTimeTwoK, 10));
    gauge.screenshot();
  } else {
    assert(
      !matchCondition,
      'Sorting Dropdown not exits/Locator change/ page not loaded within 20 seconds'
    );
  }
}

async function VerifyProductImageonSPP(Imageloc, ImgonNewwindowloc) {
  if (Imageloc !== '') {
    if (await (await t.$(Imageloc)).exists()) {
      await t.evaluate(await t.$(Imageloc), (ele) => ele.click());
      gauge.message('Product Image exists and able to click on SPP');
      if (await (await t.$(ImgonNewwindowloc)).exists()) {
        assert(matchCondition);
        gauge.message('Images are opened in a new window');
        gauge.screenshot();
      } else {
        assert(!matchCondition, 'Images are not opened in a new window');
      }
    } else {
      assert(!matchCondition, "Product Image doesn't exists or locator change");
    }
  }
}

async function ClickonArrowAndValidateImage(Imagesloc, Arrowbtnloc) {
  if (Imagesloc !== '') {
    let imgElements = await (await t.$(Imagesloc)).elements();
    let imgCount = imgElements.length;
    let count = 1;
    for (let i = 1; i < imgCount; i++) {
      if (await (await t.$(Imagesloc)).exists()) {
        count++;
        gauge.screenshot();
        await t.tap(
          await t.$(Arrowbtnloc, { waitForEvents: ['loadEventFired'] })
        );
        await t.waitFor(parseInt(CommonData.waitTimeOneK, 10));
      }
    }
    if (count === imgCount) {
      assert(matchCondition);
      gauge.message('All Images are loaded as expected');
    } else {
      assert(!matchCondition, 'All Images are not loaded as expected');
    }
  }
}

/**
 * @description It is used to navigate image carousel via thumbnails.
 * @param {var} ThumbnailLoc - The locator of the thumbnails.
 */

async function ClickonThumbnailAndValidateImage(ThumbnailLoc) {
  if (ThumbnailLoc !== '') {
    let Thumbnails = await (await t.$(ThumbnailLoc)).elements();
    let imgCount = Thumbnails.length;
    let count = 0;
    gauge.screenshot();
    for (let Thumbnail of Thumbnails) {
      count++;
      await t.evaluate(Thumbnail, (ele) => ele.click());
      await t.waitFor(1500);
      gauge.screenshot();
    }
    if (count === imgCount) {
      assert(matchCondition);
      gauge.message('All Images are loaded as expected');
    } else {
      assert(!matchCondition, 'All Images are not loaded as expected');
    }
  }
}

/**
 * @description It is used to remove unwanted characters from the price of the captured product from the UI.
 * @param {string} sortingorder - The sort order output of the AscDscArray function.
 * @param {string} sortingordertext - It would be a proper message depending on the scenario.
 */

async function Sortingfunction(sortingorder, sortingordertext) {
  var PricesArray = [];
  brandLocale = siteDefinition.brandLocale;
  if (await (await t.$(productPrice)).exists()) {
    var newproductprice = await (await t.$(productPrice)).elements();
    for (let newprice of newproductprice) {
      PricesArray.push((await newprice.text()) + '');
    }
    // For some brands the reduced prices come with space instead \n, so replace it with \n to make it common and take the lowest price in later steps
    var ReplaceBlankspaceArray = [];
    for (let myArray of PricesArray) {
      ReplaceBlankspaceArray.push(myArray.trim().replace(' ', '\n'));
    }
    var ReplacePricesArray = [];
    for (let myArray of ReplaceBlankspaceArray) {
      ReplacePricesArray.push(
        myArray.replace(
          /[t.$, £, ¥, €, ₪, ₹, RM, HK, บาท, zł, ₩, CA, 美元起, R]/g,
          ''
        )
      );
    }
    var SplitPricesArray = [];
    for (let filterprice of ReplacePricesArray) {
      // Checks if one of the product's prices has a price range and depending on the Pricerange condition, it will fetch that value otherwise skips
      if (await filterprice.includes('-')) {
        let price = [];
        price = await filterprice.split(/[-]/);
        if (price.length > 1) {
          if (sortingorder === 'descending') {
            // To check the price range's sorting, update Pricerange var to true
            if (priceRange === 'TRUE') {
              var maxprice = Math.max(...price);
              SplitPricesArray.push((await maxprice) + '');
            }
          } else {
            if (priceRange === 'TRUE') {
              var minprice = Math.min(...price);
              SplitPricesArray.push((await minprice) + '');
            }
          }
        }
        // Checks if one of the product's prices has a reduced price by \n symbol, if it exists splits both prices and takes the minimum value
      } else if (await filterprice.includes('\n')) {
        let price = [];
        price = await filterprice.split(/\n/).filter(function (value) {
          return value !== '' || null;
        });
        if (price.length > 1) {
          var minprice = Math.min(...price);
          SplitPricesArray.push((await minprice) + '');
        } else {
          SplitPricesArray.push(await filterprice.replace('\n', ''));
        }
      } else {
        SplitPricesArray.push(await filterprice);
      }
    }
    var FinalArray = [];
    for (let i = 0; i < SplitPricesArray.length; i++) {
      if (SplitPricesArray[i].length <= parseInt(CommonData.priceLength, 10)) {
        FinalArray.push(SplitPricesArray[i] + '.00');
      } else if (
        SplitPricesArray[i].length <= parseInt(CommonData.priceLengthTwo, 10)
      ) {
        FinalArray.push(SplitPricesArray[i] + '0');
      } else {
        FinalArray.push(SplitPricesArray[i]);
      }
    }
    // If any brand/locale has the first product as a promotion, then include these websites below to move it and sorting works well
    if (
      brandLocale.includes('CL-IL') ||
      brandLocale.includes('CL-MX') ||
      brandLocale.includes('CL-FR')
    ) {
      FinalArray.shift();
    }
    gauge.message('Product price from UI =' + JSON.stringify(FinalArray));
    gauge.message('Sorting order : ' + AscDscArray(FinalArray));
    assert(
      AscDscArray(FinalArray) === sortingorder,
      sortingordertext + ' sorting order not as expected'
    );
  } else {
    gauge.message('The product price locator not exists/locator change');
  }
}

/**
 * @description This is used to choose the size from the Spp drop-down menu for multiple brands.
 * @param {string} siteDefinition - plat should be pc or mob.
 * @param {var} arrSkyId - Array of skuId's
 * @param {string} customtext- It would be a proper message depending on the scenario inside if.
 */

async function GotoOutofStockProduct(arrSkyId, customtext) {
  for (let i = 0; i < arrSkyId.length; i++) {
    if (arrSkyId[i] !== '') {
      skuIDCount++;
      await t.goto(
        Helper.getAdminUrl(siteDefinition) + prodCatUrl + arrSkyId[i],
        {
          waitForEvents: ['DOMContentLoaded'],
        }
      );
      var isShoppableValue = await (await t.$(isShoppable)).text();
      var isDisplayableValue = await (await t.$(isDisplayable)).text();
      var LifeOfProductValue = await (await t.$(lifeOfProduct)).text();
      shadeNamelabel = await (await t.$(sharedPageShadeName)).text();
      if (
        isShoppableValue === '0' &&
        isDisplayableValue !== '0' &&
        LifeOfProductValue === '2 (Basic Reorder)'
      ) {
        gauge.message(
          'The ' +
            customtext +
            ' Product with SKU ID - ' +
            arrSkyId[i] +
            ' is not available in Stock and proceeding to verify out of stock'
        );
        if (await (await t.$(productUrl)).exists()) {
          let url = await (await t.$(productUrl)).attribute('href');
          gauge.message(url);
          await t.goto(Helper.getBaseUrl(siteDefinition) + url, {
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
          'The ' +
            customtext +
            ' Product with SKU ID - ' +
            arrSkyId[i] +
            ' is not applicable to validate Temporarily out of stock scenario '
        );
        notAvailableProductsCount++;
      }
    }
  }
  if (notAvailableProductsCount === skuIDCount) {
    assert(
      !matchCondition,
      "None of the skuId's are valid for Temporary out of stock scenarios"
    );
  }
}

/**
 * @description This is used to Validate Notify Me feature.
 * @param {var} notifymebtn - Locator of Notify Me button
 * @param {string} customtext- It would be a proper message depending on the scenario inside if.
 */

async function NotifyMe(notifymebtn, customtext) {
  if (await (await t.$(notifymebtn)).exists()) {
    await t.scrollTo(await t.$(notifymebtn));
    // Sometimes t.evaluate doesn't work so adding click method in catch block
    try {
      await t.evaluate(
        await t.$(notifymebtn),
        (ele) => {
          ele.focus();
          ele.click();
        },
        { waitForNavigation: !matchCondition }
      );
      await t.write(CommonData.emailAddress, t.into(await t.$(inputEmailPath)));
    } catch (error) {
      await t.click(t.$(notifymebtn));
      await t.write(CommonData.emailAddress, t.into(await t.$(inputEmailPath)));
    }
    if (agreeBox !== '') {
      await t.tap(await t.$(agreeBox));
      gauge.screenshot();
    }
    try {
      await t.click(await t.$(submitBtn), {
        waitForNavigation: !matchCondition,
      });
    } catch (error) {
      await t.evaluate(await t.$(submitBtn), (ele) => ele.click(), {
        waitForNavigation: !matchCondition,
      });
    }
    if (await (await t.$(verifyMsgPath)).exists()) {
      var NotMsg = await (await t.$(verifyMsgPath)).text();
      gauge.message('NotifymeActualmsg : ' + NotMsg);
      gauge.message('NotifymeExpectedmsg : ' + verifyNotifyMsg);
      gauge.screenshot();
      if (NotMsg.search(verifyNotifyMsg) !== -1) {
        assert(matchCondition);
        gauge.message(
          'Notify message was displayed successfully and matched for ' +
            customtext +
            'products'
        );
        if (notifymeCloseBtn !== '') {
          await t.evaluate(await t.$(notifymeCloseBtn), (ele) => ele.click());
        }
      } else {
        assert(!matchCondition, 'Notify message text not matched');
      }
    } else {
      assert(
        !matchCondition,
        'Notify message not displayed or submit btn not working as expected for ' +
          customtext +
          'products'
      );
    }
  } else {
    gauge.message('Notify me btn not exists/visible/Product available ');
  }
}

/**
 * @description This function is used to extract all the skuid's with the condition is Shoppable N on the Prodcat page.
 */

async function ExtractSkuidS() {
  await t.goto(Helper.getAdminUrl() + doggerel, {
    waitForEvents: ['DOMContentLoaded'],
  });
  var TableCount = await (await t.$(totalTable)).elements();
  for (let i = 4; i <= TableCount.length; i++) {
    var validRows = '/html/body/a[' + i + ']/table/tbody/tr//tbody/tr[2]';
    let rows = await (await t.$(validRows)).elements();
    for (let j = 0; j < rows.length; j++) {
      rowValue = await rows[j].text();
      tempRowValues = rowValue.split('\t');
      if (tempRowValues[6] === 'N') {
        skuIdDetails.push(tempRowValues[1]);
        tempRowValues = '';
      }
    }
  }
}

/**
 * @description This function is used to extract all the OOS skuid's Suitable for notify me scenario.
 */

async function ExtractOOSSkuID() {
  var skyidcount = skuIdDetails.length;
  let OOSShadedskuIDList = [];
  let OOSNonShadedskuIDList = [];
  var Shadecount = 0;
  var Nonshadecount = 0;
  var Countstop = 0;

  for (let i = 0; i <= skyidcount - 1; i++) {
    await t.goto(Helper.getAdminUrl() + prodCatUrl + skuIdDetails[i], {
      waitForEvents: ['DOMContentLoaded'],
    });
    var isShoppableValue = await (await t.$(isShoppable)).text();
    var isDisplayableValue = await (await t.$(isDisplayable)).text();
    var LifeOfProductValue = await (await t.$(lifeOfProduct)).text();
    shadeNamelabel = await (await t.$(sharedPageShadeName)).text();
    if (
      isShoppableValue === '0' &&
      isDisplayableValue !== '0' &&
      LifeOfProductValue === '2 (Basic Reorder)'
    ) {
      if (shadeNamelabel !== '') {
        OOSShadedskuIDList.push(skuIdDetails[i]);
        var result = OOSShadedskuIDList.toString();
        fs.writeFile(filePathOne, result, (err) => {
          if (err) throw err;
          else {
            console.log('The file is updated with the given data');
          }
        });
        Shadecount++;
        if (Shadecount === 10) {
          Countstop++;
        }
      } else {
        OOSNonShadedskuIDList.push(skuIdDetails[i]);
        var result1 = OOSNonShadedskuIDList.toString();
        Nonshadecount++;
        fs.writeFile(filePathTwo, result1, (err) => {
          if (err) throw err;
          else {
            console.log('The file is updated with the given data');
          }
        });
        if (Nonshadecount === 10) {
          Countstop++;
        }
      }
    }
    if (Countstop === 2) {
      break;
    }
  }
}

/**
 * @description It is used to check the MPP grid is completely loaded, otherwise it tries to reload it and check it again otherwise fails.
 */

async function VerifyMPPGridonly() {
  let MPPGridcount = 0;
  for (let i = 0; i < 2; i++) {
    await t.scrollDown(parseInt(scrollDownValue));
    var MPPtitle = await t.evaluate(() => {
      return document.title;
    });
    if (
      await (
        await t.$(mppPageGrid)
      ).exists(
        parseInt(CommonData.existsCheckFrequency, 10),
        parseInt(CommonData.existsWaitTime, 10)
      )
    ) {
      gauge.message('In MPP, grid loading is completed as expected.');
      gauge.message('MPP page title :' + MPPtitle);
      break;
    } else {
      await t.reload({ waitForEvents: ['DOMContentLoaded'] });
      gauge.message("Page hasn't loaded thus reloading the page.");
      MPPGridcount++;
    }
  }
  if (MPPGridcount === 2) {
    assert(
      !matchCondition,
      'MPP grid is not loaded after re-loading the page twice.'
    );
  }
}

/**
 * @description It is used to check if the element visible on the page if not return not visible and fails.
 * @param {var} element - The locator of the element.
 * @param {string} custommessage - It would be a proper message depending on the scenario.
 * @param {string} elsecustommessage - It would be a proper message depending on the scenario.
 */

async function VerifyElementIsVisible(
  element,
  custommessage,
  elsecustommessage
) {
  if (element !== '') {
    if (
      await (
        await t.$(element)
      ).isVisible(
        parseInt(CommonData.existsCheckFrequency, 10),
        parseInt(CommonData.existsWaitTime, 10)
      )
    ) {
      gauge.message(custommessage);
    } else {
      assert(!matchCondition, elsecustommessage);
    }
  }
}

/**
 * @description It is used to check that the product class exists in MPP and retrieve the product name text and click on it otherwise it fails.
 * @param {var} ProductView - The locator of the product view class in Mpp.
 * @param {var} Producttext - The locator of the product view name in Mpp.
 */

async function ClickonProductview(ProductView, Producttext) {
  if (ProductView !== '') {
    await t.scrollDown(parseInt(scrollDownValue));
    if (
      await (
        await t.$(Producttext)
      ).exists(
        parseInt(CommonData.existsCheckFrequency, 10),
        parseInt(CommonData.existsWaitTime, 10)
      )
    ) {
      productName = await (await t.$(Producttext)).text();
      await t.evaluate(
        await t.$(ProductView, { waitForEvents: ['loadEventFired'] }),
        (ele) => ele.click(),
        { waitForNavigation: false }
      );
      gauge.screenshot();
    } else {
      assert(
        !matchCondition,
        'Element is not exists within 30 seconds/Locator change.'
      );
    }
  }
}

/**
 * @description It is used to verify the selected product and the product which is added to cart is same if not return false.
 */

async function ValidateproductinCart(UIproductname) {
  var CPurl = await t.currentURL();
  if (CPurl.includes(cartPageURLText)) {
    gauge.message('Navigated to Cartpage as expected');
    gauge.message('Selected product name :' + productName);
    if (await t.text(productName).exists()) {
      assert(matchCondition);
      gauge.message(
        'Selected Product and product which is added to cart is same'
      );
    } else if (UIproductname !== '') {
      var producttextoncart = await (await t.$(UIproductname)).text();
      assert(producttextoncart.includes(productName));
      gauge.message('Product name in cartpage :' + producttextoncart);
      gauge.message(
        'Selected Product and product which is added to cart is same'
      );
    } else {
      assert(!matchCondition, 'Selected product not added to the cart');
    }
  } else {
    assert(!matchCondition, 'Not in Cartpage');
  }
}

/**
 * @description It is used to close all the visible popup's
 */

async function Lookforpopupsandclose() {
  let PopupCount = 0;
  if (closePopup !== '') {
    const tClosepopup = await t.$(closePopup);
    if (await tClosepopup.exists()) {
      await t.evaluate(tClosepopup, (ele) => ele.click());
      PopupCount++;
    }
  }
  if (closeSecPopup !== '') {
    const tCloseSecpopup = await t.$(closeSecPopup);
    if (await tCloseSecpopup.exists()) {
      await t.evaluate(tCloseSecpopup, (ele) => ele.click());
      PopupCount++;
    }
  }
  if (closeThirdPopup !== '') {
    const tClosethirdpopup = await t.$(closeThirdPopup);
    if (await tClosethirdpopup.exists()) {
      await t.evaluate(tClosethirdpopup, (ele) => ele.click());
      PopupCount++;
    }
  }
  if (PopupCount === 0) {
    gauge.message('no pop ups appeared');
  } else {
    gauge.message('pop ups closed');
  }
}

/**
 * @description It is used to select the country, language for the hub sites based on data file
 * @param {string} country - The text of the country name
 * @param {string} language - The text of the language to choose
 * @param {const} submitbtn - The locator of the submit button to click
 */

async function ChooseCountryAndLanguage(country, language, submitbtn) {
  if (country !== '') {
    await t.click(t.text(country));
    gauge.message(country + ' Country is selected');
    if (language !== '') {
      await t.click(t.text(language));
      gauge.message(language + ' Langugage is selected');
      gauge.screenshot();
    }

    if (await (await t.$(submitbtn)).exists()) {
      await t.evaluate(
        await t.$(submitbtn, { waitForEvents: ['loadEventFired'] }),
        (ele) => ele.click()
      );
    } else {
      gauge.message('Submit btn not available');
    }
  }
}

function makeEmail() {
  var strValues = 'abcdefghijk12345678';
  var strEmail = '';
  var strTmp;
  for (let i = 0; i < 10; i++) {
    strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
    strEmail = strEmail + strTmp;
  }
  strEmail = strEmail + '@test' + '.com';
  return strEmail;
}

/** Steps starts here */

step('MPPSPP Initialize Helix', async function () {
  // Initialize the selectors from DB
  await initFrameworkSettings();
});

step(
  'MPPSPP Configuring the prerequisites like set cookies, revision tag',
  async function () {
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
    gauge.message(
      'ENVIRONMENT : ' + siteDefinition.executionContext.environment
    );
    let printBaseUrl = Helper.getBaseUrl(siteDefinition);
    if (printBaseUrl.search('@') !== -1) {
      // if uid/password is there in url remove before printing
      const printBaseUrlList = printBaseUrl.split('@');
      printBaseUrl = 'https://' + printBaseUrlList[1];
    }
    gauge.message('URL : ' + printBaseUrl);
    console.log('URL : ' + printBaseUrl);
  }
);

step(
  'MPPSPP Open Home Page and Choose Country & Language in case of hubsites',
  async function () {
    await t.goto(Helper.getBaseUrl(siteDefinition), {
      waitForEvents: ['DOMContentLoaded'],
    });
    await Lookforpopupsandclose();
    gauge.screenshot();
    await ChooseCountryAndLanguage(
      countryName,
      chooseLanguage,
      hubsiteSubmitBtn
    );
  }
);

step('MPPSPP Mobile Device Emulation', async function () {
  await t.emulateDevice(CommonData.emulationDevice);
  gauge.message('Device Emulation set to: CommonData.emulationDevice');
});

step(
  'MPPSPP Verify Home page for the selected Country displayed properly',
  async function () {
    var HPurl = await t.currentURL();
    var HPtitle = await t.evaluate(() => {
      return document.title;
    });
    // Validate the user on the homepage by using the retrieved URL from the user interface with the URL provided. And replace(/\/t.$/, '') is used to remove the slash at the end of the string
    if (
      HPurl.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '') ===
      Splittingurl(siteDefinition)
        .toLowerCase()
        .replace(/[^a-zA-Z0-9 ]/g, '') +
        hubsiteExtensionUrl.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '')
    ) {
      assert(matchCondition);
      gauge.message('In Homepage and the current page title is : ' + HPtitle);
    } else if (
      HPurl.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '') ===
      Splittingurl(siteDefinition)
        .toLowerCase()
        .replace('m.', 'www.')
        .replace(/[^a-zA-Z0-9 ]/g, '') +
        hubsiteExtensionUrl.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '')
    ) {
      assert(matchCondition);
      gauge.message('In Homepage and page title is : ' + HPtitle);
    } else {
      assert(
        !matchCondition,
        'Not in Homepage and the current page title is : ' + HPtitle
      );
    }
  }
);

/** Sanity steps */

step(
  'MPPSPP Verify that the user is able to add products to the cart successfully from MPP Quick View',
  async function () {
    await t.goto(Helper.getBaseUrl(siteDefinition) + mppUrl, {
      waitForEvents: ['DOMContentLoaded'],
    });
    await VerifyMPPGridonly();
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      await FocusAndClick(
        quickViewClassMppPc,
        'Quick view exists and able to click on it in MPP',
        'Quick view not exists/not available for this brand'
      );
    } else {
      await FocusAndClick(
        quickViewClassMppMob,
        'Quick view exists and able to click on it in MPP',
        'Quick view not exists/not available for this brand'
      );
    }
    if (javaAlertPopupMpp !== '') {
      t.alert(javaAlertPopupMpp, async () => await t.accept());
    }
    if (await (await t.$(mppBagBtn)).exists()) {
      await t.evaluate(
        await t.$(mppBagBtn, { waitForEvents: ['loadEventFired'] }),
        (ele) => ele.click()
      );
      gauge.message('Product added to bag in MPP');
      gauge.screenshot();
    } else {
      gauge.message('Add to bag is not present in MPP');
    }
  }
);

step(
  'MPPSPP Verify that the user is able to navigate to SPP for the product selected from MPP',
  async function () {
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      await ClickonProductview(productViewClassMppPc, productViewTextPc);
      await VerifyElementexists(sppPageProdHeaderPc, 'In SPP', 'Not in SPP');
    } else {
      await ClickonProductview(productViewClassMPPMob, productViewTextMob);
      await VerifyElementexists(sppPageProdHeaderMob, 'In SPP', 'Not in SPP');
    }
  }
);

step(
  'MPPSPP Verify that the user is able to add products to the cart successfully from SPP',
  async function () {
    if (javaAlertPopupSpp !== '') {
      t.alert(javaAlertPopupSpp, async () => await t.accept());
    }
    if (
      await (
        await t.$(sppBagBtn)
      ).exists(
        parseInt(CommonData.existsCheckFrequency, 10),
        parseInt(CommonData.existsWaitTime, 10)
      )
    ) {
      if ((await (await t.$(sppBagBtn)).isDisabled()) !== matchCondition) {
        await t.evaluate(
          await t.$(sppBagBtn, { waitForEvents: ['loadEventFired'] }),
          (ele) => ele.click()
        );
        gauge.message(
          'Add to Bag btn is enabled and Product added to bag in SPP'
        );
        gauge.screenshot();
      } else {
        assert(!matchCondition, 'Add to Bag btn is disabled in SPP');
      }
    } else {
      assert(
        !matchCondition,
        'Add to Bag btn is not available within 30 seconds/Item is out of stock/comingsoon.'
      );
    }
  }
);

step(
  'MPPSPP Verify that the user is able to view the added product in the Cart',
  async function () {
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      await VerifyElementExistsandClick(clickOverlayLinkPc, 'Cart overlay');
      await ValidateproductinCart(cartProductNameLocPc);
    } else {
      await VerifyElementExistsandClick(clickOverlayLinkMob, 'Cart overlay');
      await ValidateproductinCart(cartProductNameLocMob);
    }
  }
);

/** Bag Icon check step */

step(
  'MPPSPP Verify that the user is able to view the added product in the Cart by clicking on Bag Icon',
  async function () {
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      await VerifyElementExistsandClick(overlayCloseBtn, '');
      await VerifyElementExistsandClick(bagIconLinkPc, 'Bag Icon');
      await VerifyElementexists(
        checkoutOverlayPopup,
        'Cart overlay displays',
        "Cart overlay doesn't displays"
      );
      await VerifyElementIsVisible(
        clickOverlayLinkPc,
        'Checkout btn is visible',
        'Checkout btn is not visible'
      );
      await Verifytextexists(productName, 'Selected product in overlay');
    } else {
      await VerifyElementExistsandClick(overlayCloseBtn, '');
      await VerifyElementExistsandClick(bagIconLinkMob, 'Bag Icon');
      await ValidateproductinCart(cartProductNameLocMob);
    }
  }
);

/** Login to ELC user account step for Beauty perks site */

step(
  'MPPSPP Verify the ELC user is able to enter the login details and successfully log in',
  async function () {
    if (clickElcEmployeeBtn !== '') {
      await t.evaluate(
        await t.$(clickElcEmployeeBtn, {
          waitForEvents: ['DOMContentLoaded'],
        }),
        (ele) => ele.click()
      );
      if (acEnterEmail !== '') {
        let tACEnterEmail = await t.$(acEnterEmail);
        let tACEnterPassword = await t.$(acEnterPassword);
        if (
          await tACEnterEmail.exists(
            parseInt(CommonData.existsCheckFrequency, 10),
            parseInt(CommonData.existsWaitTime, 10)
          )
        ) {
          await t.evaluate(tACEnterEmail, (ele) => ele.focus());
          await t.write(CommonData.acEmail, t.into(tACEnterEmail));
          await t.evaluate(tACEnterPassword, (ele) => ele.focus());
          await t.write(CommonData.acPwd, t.into(tACEnterPassword));
          gauge.screenshot();
        } else {
          assert(
            !matchCondition,
            "The email textbox doesn't exists within 20 seconds"
          );
        }
      }
      if (returnUserSignInBtn !== '') {
        let tReturnUserSigninButton = await t.$(returnUserSignInBtn);
        if (
          await tReturnUserSigninButton.exists(
            parseInt(CommonData.existsCheckFrequency, 10),
            parseInt(CommonData.existsWaitTime, 10)
          )
        ) {
          await t.evaluate(tReturnUserSigninButton, (ele) => {
            ele.focus();
            ele.click();
          });
        } else {
          assert(
            !matchCondition,
            "signin btn doesn't exists within 20 seconds"
          );
        }
      }
      await t.goto(
        Helper.getAdmURL(siteDefinition) + '/shared/deletecart.tmpl',
        {
          waitForEvents: ['loadEventFired'],
        }
      );
      gauge.message('Products deleted from cart after login');
      await t.goto(Helper.getBaseURL(siteDefinition), {
        waitForEvents: ['loadEventFired'],
      });
    } else {
      gauge.message(messages.stepNotApplicable);
    }
  }
);

/** MPPQVSHADEQTYSUBFAV steps */

step(
  'MPPSPP Verify that the user is able to open quickview on MPP',
  async function () {
    await Gotothisurl(siteDefinition, shadedUrl);
    if (shadedUrl !== '') {
      await VerifyMPPGrid();
      await VerifyElementexists(productNameMpp, 'ProductName on MPP');
      await VerifyElementexists(productPriceMpp, 'ProductPrice on MPP');
      await VerifyElementexists(productRatingMpp, 'ProductRating on MPP');
      if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
        await VerifyElementExistsandClick(quickViewClass, 'Quick view');
      } else {
        await VerifyElementExistsandClick(quickViewClassMob, 'Quick view');
      }
    }
  }
);

step(
  'MPPSPP Verify that the +/- button is greyed out by increasing or decreasing  the quantity on MPP',
  async function () {
    await VerifyElementExistsandMultipleClickonLoop(
      increaseQtyBtnMpp,
      CommonData.qtyVal,
      'Increase qty btn on MPP'
    );
    await VerifyDisableElement(increaseQtyBtnMpp, 'Plus');
    await VerifyElementExistsandMultipleClickonLoop(
      decreaseQtyBtnMpp,
      CommonData.qtyVal,
      'Increase qty btn on MPP'
    );
    await VerifyDisableElement(decreaseQtyBtnMpp, 'Minus');
  }
);

step(
  'MPPSPP Verify that the user is able to add to cart by selecting the shade and validate the cart overlay',
  async function () {
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      if (
        clickShadeDropDownMpp !== '' ||
        pcShadePathMpp !== '' ||
        selectClassShadeDropDownMpp !== ''
      ) {
        await Trycatchclick(
          closeThirdPopup,
          'popup closed',
          'no popups displayed'
        );
        await ChoosevalueinDD(
          clickShadeDropDownMpp,
          CommonData.shadeNameMpp,
          pcShadePathMpp,
          'Selected Shade',
          selectClassShadeDropDownMpp
        );
        await FocusAndClick(
          addToBagMpp,
          'Product added to Bag',
          'Add to Bag not available in MPP for this Brand/Locale'
        );
      }
      if (productOnCartOverlay !== '') {
        await VerifyElementexists(clickCartPageLink, 'Cart overlay');
        await VerifyElementexists(
          productOnCartOverlay,
          'Product on Cart overlay'
        );
        await VerifyElementexists(
          productPriceOnCartOverlay,
          'Product price on Cart overlay'
        );
      }
    } else {
      if (
        clickShadeDropDownMppMob !== '' ||
        mobShadePathMpp !== '' ||
        selectClassShadeDropDownMppMob !== ''
      ) {
        await Trycatchclick(
          closeThirdPopup,
          'popup closed',
          'no popups displayed'
        );
        if (CommonData.scrollValueShadeReviewMob !== '') {
          await t.scrollDown(
            parseInt(CommonData.scrollValueShadeReviewMob, 10)
          );
        }
        await ChoosevalueinDD(
          clickShadeDropDownMppMob,
          CommonData.shadeNameMppMob,
          mobShadePathMpp,
          'Selected Shade',
          selectClassShadeDropDownMppMob
        );
        await FocusAndClick(
          addToBagMppMob,
          'Product added to Bag',
          'Add to Bag not available in MPP for this Brand/Locale'
        );
      }
      if (productOnCartOverlayMob !== '') {
        await VerifyElementexists(clickCartPageLinkMob, 'Cart overlay');
        await VerifyElementexists(
          productOnCartOverlayMob,
          'Product on Cart overlay'
        );
        await VerifyElementexists(
          productPriceOnCartOverlayMob,
          'Product price on Cart overlay'
        );
      }
    }
  }
);

step('MPPSPP Verify the cart page with selected product', async function () {
  if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
    await VerifyElementExistsandClick(clickCartPageLink, 'Cart overlay');
    await ValidateURLwithtext(
      cartPageURLText,
      'In a cartpage',
      'Not in a cartpage'
    );
  } else {
    if (addToBagMppMob !== '') {
      await VerifyElementExistsandClick(clickCartPageLinkMob, 'Cart overlay');
      await ValidateURLwithtext(
        cartPageURLText,
        'In a cartpage',
        'Not in a cartpage'
      );
    }
    if (resizeFlag) {
      await t.emulateDevice(CommonData.emulationDevice);
    }
  }
  if (CommonData.shadeNameMpp !== '' || pcShadePathMpp !== '') {
    await ValidateURLwithtext(
      cartPageURLText,
      'In a cartpage',
      'Not in a cartpage'
    );
    if (cartPagePlusBtn !== '') {
      if (await (await t.$(cartPagePlusBtn)).exists()) {
        await t.evaluate(await t.$(cartPagePlusBtn), (ele) => ele.click());
      }
    }
    await Validateshadeincart(
      shadePath,
      pcShadePathMpp,
      CommonData.shadeNameMpp
    );
  }
});

step(
  'MPPSPP Verify that the user is able to add a Subscription from MPP and validate the same on the cart page',
  async function () {
    await Gotothisurl(siteDefinition, subscriptionMppUrl);
    if (subscriptionMppUrl !== '') {
      await VerifyMPPGrid();
      if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
        await VerifyElementExistsandClick(
          qvSubscriptionProduct,
          'Quick view for subscription product'
        );
        await Selectsubscription(
          clickFreqDropDown,
          autoReplenishBtn,
          autoReplenishDropDown,
          CommonData.subscriptionFreq,
          subLocMpp
        );
        if (clickFreqDropDown !== '' || autoReplenishDropDown !== '') {
          await FocusAndClick(
            addToBagMpp,
            'Product added to Bag',
            'Add to Bag not available in MPP for this Brand/Locale'
          );
          await VerifyElementExistsandClick(clickCartPageLink, 'Cart overlay');
          await ValidateURLwithtext(
            cartPageURLText,
            'In a cartpage',
            'Not in a cartpage'
          );
          await Verifytextexists(
            CommonData.subscriptionFreq,
            'Selected subscription in MPP'
          );
        }
      } else {
        await VerifyElementExistsandClick(
          qvSubscriptionProductMob,
          'Quick view for subscription product'
        );
        await Selectsubscription(
          clickFreqDropDownMob,
          autoReplenishBtn,
          autoReplenishDropDown,
          CommonData.subscriptionFreqMob,
          subLocMpp
        );
        if (clickFreqDropDownMob !== '' || autoReplenishDropDownMob !== '') {
          await FocusAndClick(
            addToBagMpp,
            'Product added to Bag',
            'Add to Bag not available in MPP for this Brand/Locale'
          );
          await VerifyElementExistsandClick(
            clickCartPageLinkMob,
            'Cart overlay'
          );
          await ValidateURLwithtext(
            cartPageURLText,
            'In a cartpage',
            'Not in a cartpage'
          );
          await Verifytextexists(
            CommonData.subscriptionFreqMob,
            'Selected subscription in MPP'
          );
        }
        if (resizeFlag) {
          await t.emulateDevice(CommonData.emulationDevice);
        }
      }
    }
  }
);

step('MPPSPP Verify the badge present in MPP product image', async function () {
  if (badgesMppUrl !== '') {
    await Gotothisurl(siteDefinition, badgesMppUrl);
    await t.scrollUp(parseInt(CommonData.waitTimeTenK, 10));
    await VerifyMPPGrid();
    await VerifyElementexists(productBadge, 'Product badge');
  }
});

step(
  'MPPSPP Verify that the user is able to add the product to favourites and validate the confirmation popup',
  async function () {
    if (favouritesMppUrl !== '') {
      await Gotothisurl(siteDefinition, favouritesMppUrl);
      await VerifyMPPGrid();
      await t.scrollDown(parseInt(CommonData.scrollFav, 10));
      if (quickViewForRandomProductREG !== '') {
        await t.evaluate(
          await t.$(quickViewForRandomProductREG, {
            waitForEvents: ['loadEventFired'],
          }),
          (ele) => ele.click()
        );
        await HoverAndClick(
          productBrief,
          favoritesLocMpp,
          'Product was added to the favorites',
          'Unable to add product to favorites'
        );
      } else {
        if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
          await HoverAndClick(
            productBrief,
            favoritesLocMpp,
            'Product was added to the favorites',
            'Unable to add product to favorites'
          );
        } else {
          // You cannot hover on mobile sites so clicking on the wishlist
          await VerifyElementExistsandClick(
            favoritesLocMppMOB,
            'Favourites link or button'
          );
        }
      }
      if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
        if (favoritesPopupMessage !== '') {
          await Verifytextexists(
            favoritesPopupMessage,
            'Favorites confirmation message'
          );
        } else if (favouritesCountVal !== '') {
          if (
            await (
              await t.$(favouritesCountVal)
            ).exists(
              parseInt(CommonData.existsCheckFrequency, 10),
              parseInt(CommonData.existsWaitTime, 10)
            )
          ) {
            await t.waitFor(parseInt(CommonData.waitTimeTwoK, 10));
            var countval = await (await t.$(favouritesCountVal)).text();
            if (parseInt(countval) === 1) {
              assert(matchCondition);
              gauge.message('The product successfully added to wishlist');
            } else {
              assert(!matchCondition, 'No product added to wishlist');
            }
          }
        }
      } else {
        if (favoritesPopupMessageMob !== '') {
          await Verifytextexists(
            favoritesPopupMessageMob,
            'Favorites confirmation message'
          );
        } else if (favouritesCountVal !== '') {
          if (
            await (
              await t.$(favouritesCountVal)
            ).exists(
              parseInt(CommonData.existsCheckFrequency, 10),
              parseInt(CommonData.existsWaitTime, 10)
            )
          ) {
            await t.waitFor(parseInt(CommonData.waitTimeTwoK, 10));
            var countval = await (await t.$(favouritesCountVal)).text();
            if (parseInt(countval) === 1) {
              assert(matchCondition);
              gauge.message('The product successfully added to wishlist');
            } else {
              assert(!matchCondition, 'No product added to wishlist');
            }
          }
        }
      }
    }
  }
);

/** MPPSIZED steps */
step(
  'MPPSPP Verify that the user is able to open quickview for nonshaded multisized product on MPP',
  async function () {
    await Gotothisurl(siteDefinition, nonshadedMultiSizeMppUrl);
    if (nonshadedMultiSizeMppUrl !== '') {
      await VerifyMPPGrid();
    }
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      await VerifyElementExistsandClick(
        quickViewMultiSizedProduct,
        'Quick view for specific element'
      );
    } else {
      await VerifyElementExistsandClick(
        quickViewMultiSizedProductMob,
        'Quick view for specific element'
      );
    }
  }
);

step(
  'MPPSPP Verify that the user is able to select different sizes and validate the selected size and add to the cart',
  async function () {
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      if (
        clickDropDownSizeMpp !== '' ||
        selectDropDownSize !== '' ||
        pcSizePathMpp !== ''
      ) {
        await Trycatchclick(
          closeThirdPopup,
          'popup closed',
          'no popups displayed'
        );
        await ChoosevalueinDD(
          clickDropDownSizeMpp,
          CommonData.chooseSizeInMpp,
          pcSizePathMpp,
          'Selected Size in MPP',
          selectDropDownSize
        );
        await Verifytextexists(CommonData.chooseSizeInMpp, 'Selected size');
        await FocusAndClick(
          addToBagMultiVolume,
          'Multi Volume Product added to Bag',
          'Add to Bag not available in MPP for this Brand/Locale'
        );
      }
    } else {
      if (
        clickDropDownSizeMppMob !== '' ||
        selectDropDownSizeMOB !== '' ||
        mobSizePathMPP !== ''
      ) {
        await Trycatchclick(
          closeThirdPopup,
          'popup closed',
          'no popups displayed'
        );
        await ChoosevalueinDD(
          clickDropDownSizeMppMob,
          CommonData.chooseSizeInMpp,
          mobSizePathMPP,
          'Selected Size in MPP',
          selectDropDownSizeMOB
        );
        await Verifytextexists(CommonData.chooseSizeInMpp, 'Selected size');
        await FocusAndClick(
          addToBagMultiVolume,
          'Multi Volume Product added to Bag',
          'Add to Bag not available in MPP for this Brand/Locale'
        );
      }
    }
  }
);

step(
  'MPPSPP Verify that the user is able to open quickview for nonshaded singlesized product on MPP',
  async function () {
    await Gotothisurl(siteDefinition, nonshadedSizeMppUrl);
    if (nonshadedSizeMppUrl !== '') {
      await VerifyMPPGrid();
    }
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      await VerifyElementExistsandClick(
        quickViewSingleSizedProduct,
        'Quick view for specific element'
      );
    } else {
      await VerifyElementExistsandClick(
        quickViewSingleSizedProductMob,
        'Quick view for specific element'
      );
    }
  }
);

step(
  'MPPSPP Verify that the user is able to navigate to single sized product and validate and add to the cart',
  async function () {
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      if (singleVolumePicker !== '') {
        await VerifyElementexists(singleVolumePicker, 'Single-sized Product');
        await FocusAndClick(
          addToBagSingleVolume,
          'Single Volume Product added to Bag',
          'Add to Bag not available in MPP for this Brand/Locale'
        );
        gauge.screenshot();
      }
    } else {
      if (singleVolumePickerMob !== '') {
        await VerifyElementexists(
          singleVolumePickerMob,
          'Single-sized Product'
        );
        await FocusAndClick(
          addToBagSingleVolume,
          'Single Volume Product added to Bag',
          'Add to Bag not available in MPP for this Brand/Locale'
        );
        gauge.screenshot();
      }
    }
  }
);

/** SPPSHARESOCIALMED steps */

step(
  'MPPSPP Verify that the user is able to navigate to all available social sites',
  async function () {
    await Gotothisurl(siteDefinition, socialSiteSppProductUrl);
    if (socialSiteSppProductUrl !== '') {
      await VerifySPPGrid();
    }
    if (socialLinks !== '') {
      for (let i = 0; i <= socialArrLinks.length - 1; i++) {
        if (socialArrLinks[i] !== '') {
          await SocialSiteValidation(socialArrLinks[i], pageElements[i]);
        }
      }
    }
  }
);

/** SPPSUBGIFTSTOREAP steps */

step(
  'MPPSPP Verify that the user is able to send a product as a gift and validate the cart Overlay on SPP',
  async function () {
    await Gotothisurl(siteDefinition, specificSppProductUrl);
    if (specificSppProductUrl !== '') {
      await VerifySPPGrid();
    }
    if (sendGiftLinkSpp !== '') {
      if (await (await t.$(sendGiftLinkSpp)).exists()) {
        await ScrolltoElement(sendGiftLinkSpp);
        await t.evaluate(await t.$(sendGiftLinkSpp), (ele) => ele.click(), {
          waitForNavigation: !matchCondition,
        });
        gauge.message('Smart gifts link exists on SPP and clicked on it');
        if (sgClosedOverLay !== '') {
          if (await (await t.$(sgClosedOverLay)).isVisible()) {
            await t.evaluate(await t.$(sgClosedOverLay), (ele) => ele.click());
            gauge.message(
              'Smart gifts closed overlay displays on SPP and clicked on it'
            );
          }
        }
        if (await (await t.$(sgOverlay)).isVisible()) {
          assert(matchCondition);
          gauge.message('Smart Gift overlay displays');
          await VerifyElementexists(
            giftTitleOnOverlay,
            'And Send the Perfect Gift title'
          );
          gauge.screenshot();
        } else {
          assert(!matchCondition, "Smart Gift overlay doesn't displays");
        }
      } else {
        assert(
          !matchCondition,
          "Smart Gift link doesn't exists/locator change"
        );
      }
    }
    if (cancelGiftLink !== '') {
      if (await (await t.$(cancelGiftLink)).exists()) {
        await t.evaluate(await t.$(cancelGiftLink), (ele) => ele.click());
        gauge.message(
          'Cancel gift link exists in Gift overlay and clicked on it'
        );
        if (!(await (await t.$(sgOverlay)).exists())) {
          assert(matchCondition);
          gauge.message('Smart Gift overlay closed as expected');
        } else {
          assert(!matchCondition, 'Smart Gift overlay not closed');
        }
      } else {
        assert(
          !matchCondition,
          "Cancel gift link doesn't exists in Gift overlay"
        );
      }
    }
    if (seeGiftBtn !== '') {
      await ScrolltoElement(sendGiftLinkSpp);
      await t.evaluate(await t.$(sendGiftLinkSpp), (ele) => ele.click(), {
        waitForNavigation: !matchCondition,
      });
      if (await (await t.$(seeGiftBtn)).exists()) {
        await t.evaluate(await t.$(seeGiftBtn), (ele) => ele.click());
        gauge.message('See gift btn exists in Gift overlay and clicked on it');
        if (await (await t.$(productInfoOnGiftOverlay)).exists()) {
          assert(matchCondition);
          gauge.message('The Product is added as Gift');
          if (!(await (await t.$(prepareMyGiftBtn)).isDisabled())) {
            assert(matchCondition);
            gauge.screenshot();
            gauge.message('The PrepareMyGiftBtn is enabled');
          } else {
            assert(!matchCondition, 'The PrepareMyGiftBtn is disabled');
          }
        } else {
          assert(!matchCondition, 'The Product is not added as Gift');
        }
      } else {
        assert(
          !matchCondition,
          "See gift Button doesn't exists in Gift overlay"
        );
      }
    }
  }
);

step(
  'MPPSPP Verify that the user is able to Remove the product as gift and validate on SPP',
  async function () {
    if (giftRemoveLink !== '') {
      await t.evaluate(await t.$(giftRemoveLink), (ele) => ele.click());
      gauge.message('Gift is Removed');
      if (!(await (await t.$(sgOverlay)).exists())) {
        assert(matchCondition);
        gauge.message('Smart Gift overlay closed as expected');
      } else {
        assert(!matchCondition, 'Smart Gift overlay not closed');
      }
    }
  }
);

step(
  'MPPSPP Verify that the user is able to add Subscription on SPP and Validate on Cart page',
  async function () {
    await Gotothisurl(siteDefinition, subscriptionSppUrl);
    if (subscriptionSppUrl !== '') {
      await VerifySPPGrid();
    }
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      await Selectsubscription(
        clickFreqDropDownSPP,
        autoReplenishBtnSpp,
        autoReplenishDropDownSpp,
        CommonData.subscriptionFreqSpp,
        subscriptionLoc
      );
    } else {
      await Selectsubscription(
        clickFreqDropDownSppMob,
        autoReplenishBtnSpp,
        autoReplenishDropDownSppMob,
        CommonData.subscriptionFreqSppMob,
        subscriptionLoc
      );
    }

    if (
      clickFreqDropDownSPP !== '' ||
      autoReplenishDropDownSpp !== '' ||
      autoReplenishDropDownSppMob !== ''
    ) {
      await FocusAndClick(
        addToBagSpp,
        'Product added to Bag',
        'Add to Bag not available in MPP for this Brand/Locale'
      );
      if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
        await VerifyElementExistsandClick(clickCartPageLink, 'Cart overlay');
      } else {
        await VerifyElementExistsandClick(clickCartPageLinkMob, 'Cart overlay');
        if (resizeFlag) {
          await t.emulateDevice(CommonData.emulationDevice);
        }
      }
    }
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      if (CommonData.subscriptionFreqSpp !== '') {
        await ValidateURLwithtext(
          cartPageURLText,
          'In a cartpage',
          'Not in a cartpage'
        );
        await Verifytextexists(
          CommonData.subscriptionFreqSpp,
          'Selected subscription in SPP'
        );
      }
    } else {
      if (CommonData.subscriptionFreqSppMob !== '') {
        await ValidateURLwithtext(
          cartPageURLText,
          'In a cartpage',
          'Not in a cartpage'
        );
        await Verifytextexists(
          CommonData.subscriptionFreqSppMob,
          'Selected subscription in SPP'
        );
      }
    }
  }
);

step(
  'MPPSPP Verify that the cross sell product section and afterpay or clear pay info are available on SPP',
  async function () {
    await Gotothisurl(siteDefinition, cpSppProductUrl);
    if (cpSppProductUrl !== '') {
      await VerifySPPGrid();
    }
    if (crossSellProd !== '') {
      await VerifyElementexists(crossSellProd, 'SPP Cross Sell Products');
    }
    await Trycatchclick(closeThirdPopup, 'popup closed', 'no popups displayed');
    if (infoIcon !== '') {
      if (await (await t.$(infoIcon)).exists()) {
        await t.evaluate(await t.$(infoIcon), (ele) => ele.click(), {
          waitForNavigation: !matchCondition,
        });
        await t.waitFor(parseInt(CommonData.waitTimeOneK, 10));
        gauge.message(
          'AfterPay/ClearPay info icon is displayed in SPP and able to click'
        );
        await VerifyElementexists(
          afterPayLogo,
          'Can click on info icon and the logo'
        );
        gauge.screenshot();
        await t.evaluate(await t.$(infoCloseButton), (ele) => ele.click(), {
          waitForNavigation: !matchCondition,
        });
      } else {
        assert(
          !matchCondition,
          'AfterPay or ClearPay info icon is not displayed'
        );
      }
    }
  }
);

step(
  'MPPSPP Verify find in store functionality for valid  and invalid pincode on SPP',
  async function () {
    if (learnMore !== '') {
      await t.evaluate(await t.$(learnMore), (ele) => ele.click(), {
        waitForNavigation: !matchCondition,
      });
      gauge.message('LearnMore Link is clicked');
      await VerifyElementexists(
        lmAfterPay,
        'AfterPay Logo appeared by clicking on Learn More Link '
      );
      gauge.screenshot();
      await t.press('Escape');
    }
    if (editLink !== '') {
      await t.evaluate(await t.$(editLink), (ele) => ele.click());
      gauge.message('Edit Link is Clicked');
    }
    if (pincodeSearchBox !== '') {
      await EnterCode(
        pincodeSearchBox,
        CommonData.validPincode,
        CommonData.scrollDownZipCode
      );
      await t.evaluate(await t.$(findButton), (ele) => ele.click());
      gauge.message('Find button is Clicked');
    }
    if (findResults !== '') {
      await VerifyElementexists(findResults, ' Store Results window');
    }
    if (pincodeSearchBox !== '') {
      if (await (await t.$(change)).exists()) {
        await t.evaluate(await t.$(change), (ele) => ele.click());
      }
      await t.scrollUp(parseInt(CommonData.scrollDownZipCode, 10));
      await EnterCode(
        pincodeSearchBox,
        CommonData.invalidPincode,
        CommonData.scrollDownZipCode
      );
      await t.evaluate(await t.$(findButton), (ele) => ele.click());
      let ErrMsg = await (await t.$(errorEle)).text();
      if (ErrMsg.toLowerCase() === CommonData.errorMessage.toLowerCase()) {
        gauge.message(CommonData.errorMessage + ' Error Message is Displayed');
        gauge.screenshot();
      } else {
        gauge.message(
          CommonData.errorMessage + ' is not Error Message Displayed'
        );
      }
    }
  }
);

/** MPPSORTFILTERFAQ steps */

step(
  'MPPSPP Verify that the user is able to sort the product by price(High to Low) in MPP',
  { continueOnFailure: true },
  async function () {
    await Gotothisurl(siteDefinition, mppPageUrl);
    if (mppPageUrl !== '') {
      await VerifyMPPGrid();
    }
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      if (evaluateSortByLoc !== '') {
        await HTLandLTHsortingEvaluateClick(evaluateSortByLoc, chooseHTL);
        await Sortingfunction('descending', 'HightoLow');
      } else if (clickSortByLoc !== '') {
        await HTLandLTHsortingClick(
          clickSortByLoc,
          CommonData.chooseHTL,
          closeSortDropDown
        );
        await Sortingfunction('descending', 'HightoLow');
      } else if (sortyByDropDownClass !== '') {
        await HTLandLTHsortingSelectDropdown(
          sortyByDropDownClass,
          CommonData.chooseHTL
        );
        await Sortingfunction('descending', 'HightoLow');
      }
    } else {
      if (sortyByDropDownClassMob !== '') {
        await HTLandLTHsortingSelectDropdown(
          sortyByDropDownClassMob,
          CommonData.chooseHTL
        );
        await Sortingfunction('descending', 'HightoLow');
      } else if (clickSortByLocMob !== '') {
        await HTLandLTHsortingClick(
          clickSortByLocMob,
          CommonData.chooseHTL,
          closeSortDropDownMob
        );
        await Sortingfunction('descending', 'HightoLow');
      }
    }
  }
);

step(
  'MPPSPP Verify that the user is able to sort the product by price(Low to High) in MPP',
  { continueOnFailure: true },
  async function () {
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      if (evaluateSortByLoc !== '') {
        await HTLandLTHsortingEvaluateClick(evaluateSortByLoc, chooseLTH);
        await Sortingfunction('ascending', 'LowtoHigh');
      } else if (clickSortByLoc !== '') {
        await HTLandLTHsortingClick(
          clickSortByLoc,
          CommonData.chooseLTH,
          closeSortDropDown
        );
        await Sortingfunction('ascending', 'LowtoHigh');
      } else if (sortyByDropDownClass !== '') {
        await HTLandLTHsortingSelectDropdown(
          sortyByDropDownClass,
          CommonData.chooseLTH
        );
        await Sortingfunction('ascending', 'LowtoHigh');
      }
    } else {
      if (sortyByDropDownClassMob !== '') {
        await HTLandLTHsortingSelectDropdown(
          sortyByDropDownClassMob,
          CommonData.chooseLTH
        );
        await Sortingfunction('ascending', 'LowtoHigh');
      } else if (clickSortByLocMob !== '') {
        await HTLandLTHsortingClick(
          clickSortByLocMob,
          CommonData.chooseLTH,
          closeSortDropDownMob
        );
        await Sortingfunction('ascending', 'LowtoHigh');
      }
    }
  }
);

step(
  'MPPSPP Verify that the user is able to Filter the product and validate the product count after applying filter',
  async function () {
    await Gotothisurl(siteDefinition, filterPageUrl);
    if (filterPageUrl !== '') {
      await VerifyMPPGrid();
    }
    // Select the required Filter
    if (filter !== '') {
      if (await (await t.$(filter)).exists()) {
        gauge.message('Filter section exists in MPP');
        if (
          skipFilterClick == 0 ||
          siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE'
        ) {
          await t.evaluate(await t.$(filter), (ele) => ele.click());
        }
        if (productCountOnMpp !== '') {
          prodCountVal = await (await t.$(productCountOnMpp)).text();
        }
        if (filterTypeOne !== '') {
          await t.evaluate(await t.$(filterTypeOne), (ele) => ele.click());
          await t.click(await t.text(CommonData.filterTypeOne));
          gauge.message('Selected Filter name : ' + CommonData.filterTypeOne);
          await t.evaluate(await t.$(filterTypeOne), (ele) => ele.click());
        }
        if (filterTypeTwo !== '') {
          await t.evaluate(await t.$(filterTypeTwo), (ele) => ele.click());
          await t.click(await t.text(CommonData.filterTypeTwo));
          gauge.message('Selected Filter name : ' + CommonData.filterTypeTwo);
          await t.evaluate(await t.$(filterTypeTwo), (ele) => ele.click());
        }
        if (filterTypeThree !== '') {
          await t.click(await t.text(CommonData.filterTypeOne));
          gauge.message('Selected Filter name : ' + CommonData.filterTypeTwo);
          await t.evaluate(await t.$(filterTypeThree), (ele) => ele.click());
          gauge.screenshot();
          await t.evaluate(await t.$(filterTypeThree), (ele) => ele.click());
        }
        if (await (await t.$(applyFilterBtn)).exists()) {
          await t.evaluate(await t.$(applyFilterBtn), (ele) => ele.click());
          gauge.message('Clicked on Apply Filter button');
        }
        gauge.screenshot();
      } else {
        assert(
          !matchCondition,
          "Filter section doesn't exists/locator change."
        );
      }
    }
    // Validate the product count
    if (productCountOnMpp !== '') {
      if (await (await t.$(productCountOnMpp)).exists()) {
        var prodcountvalafterfilter = await (
          await t.$(productCountOnMpp)
        ).text();
        if (
          parseInt(prodcountvalafterfilter.replace(/\D/g, '')) <
          parseInt(prodCountVal.replace(/\D/g, ''))
        ) {
          assert(matchCondition);
          gauge.message(
            'Filter is applied and Product count is reduced from ' +
              prodCountVal +
              ' to ' +
              prodcountvalafterfilter
          );
        } else {
          assert(!matchCondition, 'Filter is not applied');
        }
      }
    }
    // Clear the Filter
    if (filterClearAll !== '') {
      if (await (await t.$(filterClearAll)).exists()) {
        await t.evaluate(
          await t.$(filterClearAll, { waitForEvents: ['loadEventFired'] }),
          (ele) => ele.click()
        );
        gauge.message('Clearall link exists and able to click on it');
        // After clicked on Clearall link, the page takes few seconds to apply changes, so wait 2 seconds
        await t.waitFor(parseInt(CommonData.waitTimeTwoK, 10));
        prodcountclearfilter = await (await t.$(productCountOnMpp)).text();
        if (
          parseInt(prodcountclearfilter.replace(/\D/g, '')) ===
          parseInt(prodCountVal.replace(/\D/g, ''))
        ) {
          assert(matchCondition);
          gauge.message(
            'Selected Filter option is Cleared and the product count is ' +
              prodcountclearfilter
          );
          gauge.screenshot();
        } else {
          assert(!matchCondition, 'Selected Filter option is not cleared');
        }
      }
    }
  }
);

step(
  'MPPSPP Verify that the user is able to navigate to FAQ section on MPP and Validate',
  async function () {
    if (faq !== '') {
      if (await (await t.$(faq)).exists()) {
        await ScrolltoElement(faq);
        if (await (await t.$(faqContnetPlus)).exists()) {
          await t.evaluate(await t.$(faqContnetPlus), (ele) => ele.click());
          if (await (await t.$(faqText)).exists()) {
            gauge.message('Answer for First FAQ is present');
            gauge.screenshot();
          } else {
            assert(!matchCondition, 'FAQ text not found');
          }
        } else {
          assert(!matchCondition, 'FAQ content does not exist');
        }
      } else {
        gauge.message('FAQ questionaries are not present');
      }
    }
  }
);

/** SPPSTICKYOVERLAY steps */

step(
  'MPPSPP Verify that the user is able to add the shaded product to the cart and validate the shade from sticky and on the cart page',
  async function () {
    await Gotothisurl(siteDefinition, stickyShadedOverlayUrl);
    if (stickyShadedOverlayUrl !== '') {
      await VerifySPPGrid();
    }
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      await ChooseshadeorsizefromStickyDD(
        clickStickyShadeDropDown,
        CommonData.stickyShadeName,
        'Selected Shade : ',
        stickyShadeDropDownClass
      );
      if (closeShadeBtnSpp !== '') {
        await t.evaluate(
          await t.$(closeShadeBtnSpp, { waitForEvents: ['loadEventFired'] }),
          (ele) => ele.click(),
          { waitForNavigation: !matchCondition }
        );
      }
      await FocusAndClick(
        stickyAddtoBagSpp,
        'Product added to Bag from sticky',
        'Add to Bag is not available on sticky'
      );
      await FocusAndClick(
        clickCartPageLink,
        'Cart overlay exists and clicked on it',
        'Cart overlay does not exists'
      );
      if (CommonData.stickyShadeName !== '') {
        try {
          // some brand dropdown value contains shade and price
          await Validateshadeincart(
            shadePath,
            pcShadePathSpp,
            CommonData.stickyShadeName
          );
        } catch (e) {
          var ShadeText = CommonData.stickyShadeName.split('/');
          await Validateshadeincart(shadePath, pcShadePathSpp, ShadeText[0]);
        }
      }
    } else {
      await ChooseshadeorsizefromStickyDD(
        clickStickyShadeDropDownMob,
        CommonData.stickyShadeName,
        'Selected Shade : ',
        stickyShadeDropDownClassMob
      );
      if (closeShadeBtnSpp !== '') {
        await t.evaluate(
          await t.$(closeShadeBtnSpp, { waitForEvents: ['loadEventFired'] }),
          (ele) => ele.click(),
          { waitForNavigation: !matchCondition }
        );
      }
      await FocusAndClick(
        stickyAddtoBagSpp,
        'Product added to Bag from sticky',
        'Add to Bag is not available on sticky'
      );
      await FocusAndClick(
        clickCartPageLinkMob,
        'Cart overlay exists and clicked on it',
        'Cart overlay does not exists'
      );
      if (resizeFlag) {
        await t.emulateDevice(CommonData.emulationDevice);
      }
      if (CommonData.stickyShadeNameMob !== '') {
        await Validateshadeincart(
          shadePath,
          pcShadePathSpp,
          CommonData.stickyShadeNameMob
        );
      }
    }
  }
);

step(
  'MPPSPP Verify that the user is able to add the non shaded product to the cart and validate the size from sticky and on the cart page',
  async function () {
    await Gotothisurl(siteDefinition, stickyNonshadedOverlayUrl);
    if (stickyNonshadedOverlayUrl !== '') {
      await VerifySPPGrid();
    }
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      await ChooseshadeorsizefromStickyDD(
        stickyClickSizeDropDown,
        CommonData.stickyChooseSize,
        'Selected Size : ',
        stickySizeDropDownClass
      );
      await FocusAndClick(
        stickyAddtoBagSpp,
        'Product added to Bag from sticky',
        'Add to Bag is not available on sticky'
      );
      await FocusAndClick(
        clickCartPageLink,
        'Cart overlay exists and clicked on it',
        'Cart overlay does not exists'
      );
      if (CommonData.stickyChooseSize !== '') {
        await VerifyElementexists(cartItem, 'Cart Item');
        // some brand dropdown value contains size and price
        try {
          await Verifytextexists(CommonData.stickyChooseSize, 'Selected size');
        } catch (e) {
          var SizeText = CommonData.stickyChooseSize.split(' ');
          await Verifytextexists(SizeText[1], 'Selected size');
        }
      }
    } else {
      await ChooseshadeorsizefromStickyDD(
        stickyClickSizeDropDownMob,
        CommonData.stickyChooseSizeMob,
        'Selected Size : ',
        stickySizeDropDownClassMob
      );
      await FocusAndClick(
        stickyAddtoBagSpp,
        'Product added to Bag from sticky',
        'Add to Bag is not available on sticky'
      );
      await FocusAndClick(
        clickCartPageLinkMob,
        'Cart overlay exists and clicked on it',
        'Cart overlay does not exists'
      );
      if (resizeFlag) {
        await t.emulateDevice(CommonData.emulationDevice);
      }
      if (CommonData.stickyChooseSizeMob !== '') {
        await VerifyElementexists(cartItem, 'Cart Item');
        // some brand dropdown value contains size and price
        try {
          await Verifytextexists(
            CommonData.stickyChooseSizeMob,
            'Selected size'
          );
        } catch (e) {
          var SizeText = CommonData.stickyChooseSizeMob.split(' ');
          await Verifytextexists(SizeText[1], 'Selected size');
        }
      }
    }
  }
);

/** SPPSIZEDIMGVAL Steps */

step(
  'MPPSPP Verify that the user is able to select size of the non shaded product on SPP',
  async function () {
    await Gotothisurl(siteDefinition, nonShadedSizeProductUrl);
    if (nonShadedSizeProductUrl !== '') {
      await VerifySPPGrid();
    }
    await VerifyElementexists(productNameSpp, 'ProductName on SPP');
    await VerifyElementexists(productPriceSpp, 'ProductPrice on SPP');
    await VerifyElementexists(productRatingSpp, 'ProductRating on SPP');
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      await SelectsizeinDropdownSPP(
        dropDownSizeInSpp,
        selectDropDownClass,
        chooseSizeInSpp,
        CommonData.chooseSize,
        CommonData.selectDropdownValSize,
        sizePicker
      );
    } else {
      await SelectsizeinDropdownSPP(
        dropDownSizeInSppMob,
        selectDropDownClassMob,
        chooseSizeInSpp,
        CommonData.chooseSizeMob,
        CommonData.SelectDropdownValSizeMob,
        sizePickerMob
      );
    }
  }
);

step(
  'MPPSPP Verify that the user is able to add the selected product to cart and validate on cart page',
  async function () {
    sppPageUrl = await t.currentURL();
    await AddproducttoBaginSPP(addToBagSpp);
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      await VerifyElementExistsandClick(clickCartPageLink, 'Cart overlay');
    } else {
      await VerifyElementExistsandClick(clickCartPageLinkMob, 'Cart overlay');
    }
    if (CommonData.chooseSize !== '') {
      // some brand dropdown value contains size and price
      try {
        await Verifytextexists(CommonData.chooseSize, 'Selected size');
      } catch (e) {
        var SizeText = CommonData.chooseSize.split(' ');
        await Verifytextexists(SizeText[1], 'Selected size');
      }
    }
  }
);

step(
  'MPPSPP Verify that the user is able to navigate to different images of a product on SPP',
  async function () {
    await Gotothisurl(siteDefinition, specificSppProductUrl);
    if (specificSppProductUrl.localeCompare('') !== 0) {
      await VerifySPPGrid();
    }
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      await VerifyProductImageonSPP(productImagesOnSpp, productImgOnNewWindow);
      await ClickonArrowAndValidateImage(productImgOnSpp, productImgArrowOnSpp);
      await ClickonThumbnailAndValidateImage(thumbnailsOnSpp);
      await VerifyElementExistsandClick(
        productImgWindowClose,
        'ProductwindowImage'
      );
    } else {
      await VerifyProductImageonSPP(productImgOnSppMob, productImgOnNewWindow);
      await ClickonArrowAndValidateImage(
        productImagesOnSppMob,
        productImgArrowOnSppMob
      );
      await ClickonThumbnailAndValidateImage(thumbnailsOnSppMob);
      await VerifyElementExistsandClick(
        productImgWindowCloseMob,
        'ProductwindowImage'
      );
    }
  }
);

/** SPPENGRAVING Steps */
step(
  'MPPSPP Verify that the user is able to add engraving to the product lid',
  async function () {
    await Gotothisurl(siteDefinition, engravingUrl);
    if (engravingUrl !== '') {
      await VerifySPPGrid();
    }
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      await VerifyElementExistsandClick(engravingSec, 'Engraving section');
      await VerifyElementExistsandClick(addEngraving, 'Add engraving');
      await VerifyElementExistsandClick(engraveLid, 'Engrave Lid');
    } else {
      await VerifyElementExistsandClick(engravingSec, 'Engraving section');
      await VerifyElementExistsandClick(addEngravingMob, 'Add engraving');
      await VerifyElementExistsandClick(engraveLidMOB, 'Engrave Lid');
    }
    if (engLidLoc !== '') {
      await ScrolltoElement(engLidLoc);
      await t.write(CommonData.engravingLidText, t.into(await t.$(engLidLoc)));
      gauge.message(
        'Engraving text on the LID is Entered : ' + CommonData.engravingLidText
      );
      gauge.screenshot();
      if (productEngLoc !== '') {
        let productText = await (await t.$(productEngLoc)).text();
        if (
          productText.toLowerCase() ===
          CommonData.engravingLidText.toLowerCase()
        ) {
          gauge.message(
            CommonData.engravingLidText + ' Engraving Text displayed on Product'
          );
        } else {
          assert(
            !matchCondition,
            CommonData.engravingLidText +
              ' Engraving Text is not displayed on Product'
          );
        }
      }
    }
  }
);

step(
  'MPPSPP Verify that the user is able to add engraving to the product',
  async function () {
    await Gotothisurl(siteDefinition, engravingUrl);
    if (engravingUrl !== '') {
      await VerifySPPGrid();
    }
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      await VerifyElementExistsandClick(engravingSec, 'Engraving section');
      await VerifyElementExistsandClick(addEngraving, 'Add engraving');
      await VerifyElementExistsandClick(engraveLid, 'Engrave Lid');
    } else {
      await VerifyElementExistsandClick(engravingSec, 'Engraving section');
      await VerifyElementExistsandClick(addEngravingMob, 'Add engraving');
      await VerifyElementExistsandClick(engraveLidMOB, 'Engrave Lid');
    }
    if (firstLineLoc !== '') {
      await ScrolltoElement(firstLineLoc);
      await t.write(
        CommonData.engravingBtlTextOne,
        t.into(await t.$(firstLineLoc))
      );
      gauge.message(
        'First Line text on the Product is Entered : ' +
          CommonData.engravingBtlTextOne
      );
      if (secondLineLoc !== '') {
        await ScrolltoElement(secondLineLoc);
        await t.write(
          CommonData.engravingBtlTextTwo,
          t.into(await t.$(secondLineLoc))
        );
        gauge.message(
          'Second Line text on the Product is Entered : ' +
            CommonData.engravingBtlTextTwo
        );
      }
      if (preview !== '' && (await (await t.$(preview)).exists())) {
        await t.evaluate(await t.$(preview), (ele) => ele.click(), {
          waitForNavigation: !matchCondition,
        });
        await t.waitFor(parseInt(CommonData.waitTimeTwoK, 10));
      }
      gauge.screenshot();
    }
    if (prodFirstLine !== '') {
      MultipleTextValidation(
        [prodFirstLine, prodSecondLine],
        [CommonData.engravingBtlTextOne, CommonData.engravingBtlTextTwo],
        'Engraving Text'
      );
    }
  }
);

step(
  'MPPSPP Verify that the user is able to add the engraving product to the cart and validate',
  async function () {
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      if (addToBagEngSpp !== '') {
        await t.evaluate(await t.$(addToBagEngSpp), (ele) => ele.click(), {
          waitForNavigation: !matchCondition,
        });
        await t.waitFor(parseInt(CommonData.waitTimeTwoK, 10));
        gauge.message('Engraving Text is added to cart');
      }
      await VerifyElementExistsandClick(clickCartPageLink, 'Cart overlay');
    } else {
      if (addToBagEngSppMOB !== '') {
        await t.evaluate(await t.$(addToBagEngSppMOB), (ele) => ele.click(), {
          waitForNavigation: !matchCondition,
        });
        await t.waitFor(parseInt(CommonData.waitTimeTwoK, 10));
        gauge.message('Engraving Text is added to cart');
      }
      await VerifyElementExistsandClick(clickCartPageLinkMob, 'Cart overlay');
    }
  }
);

step(
  'MPPSPP Verify that the user is able to add the engraving from cart page',
  async function () {
    if (cartAddEngraving !== '') {
      await VerifyElementExistsandClick(cartAddEngraving, 'Add engraving');
      await ScrolltoElement(cartFirstLine);
      await t.write(
        CommonData.engravingBtlTextOne,
        t.into(await t.$(cartFirstLine))
      );
      gauge.message(
        'First Line text on the Product is Entered : ' +
          CommonData.engravingBtlTextOne
      );
      if (cartSecondLine !== '') {
        await ScrolltoElement(cartSecondLine);
        await t.write(
          CommonData.engravingBtlTextTwo,
          t.into(await t.$(cartSecondLine))
        );
        gauge.message(
          'Second Line text on the Product is Entered : ' +
            CommonData.engravingBtlTextTwo
        );
      }
      if (
        siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE' &&
        preview !== '' &&
        (await (await t.$(preview)).exists())
      ) {
        await t.evaluate(await await t.$(preview), (ele) => ele.click(), {
          waitForNavigation: !matchCondition,
        });
        await t.waitFor(parseInt(CommonData.waitTimeTwoK, 10));
      }
      if (saveBtn !== '') {
        await FocusAndClick(saveBtn, 'Save button');
      } else {
        await FocusAndClick(
          addToBagEngSpp,
          'Engraving Product added to Bag',
          'Engraving Add to Bag not available in SPP for this Brand/Locale'
        );
      }
      MultipleTextValidation(
        [cartProdFirstLine, cartProdSecondLine],
        [CommonData.engravingBtlTextOne, CommonData.engravingBtlTextTwo],
        'Engraving Text'
      );
      gauge.screenshot();
    }
    await Verifytextexists(
      CommonData.engravingBtlTextOne,
      CommonData.engravingBtlTextTwo + ' Engraving Text'
    );
  }
);

step(
  'MPPSPP Verify that the user is able to modify the added engraving on cart page',
  async function () {
    if (editEngraving !== '') {
      await VerifyElementExistsandClick(editEngraving, 'Edit Link');
      await ScrolltoElement(editEngavingLoc);
      await t.clear(t.textBox({ name: textboxValue }));
      await t.write(
        CommonData.modifyEngText,
        t.into(await t.$(editEngavingLoc))
      );
      if (saveBtn !== '') {
        await FocusAndClick(saveBtn, 'Save button');
      } else {
        if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
          await FocusAndClick(
            addToBagEngSpp,
            'Engraving Product added to Bag',
            'Engraving Add to Bag not available in SPP for this Brand/Locale'
          );
        } else {
          if (addToBagEngSppMOB !== '') {
            await FocusAndClick(
              addToBagEngSppMOB,
              'Engraving Product added to Bag',
              'Engraving Add to Bag not available in SPP for this Brand/Locale'
            );
          }
        }
      }
    }
    await Verifytextexists(
      CommonData.modifyEngText,
      CommonData.modifyEngText + ' a Modified Engraving Text'
    );
  }
);

step(
  'MPPSPP Verify that the user is able to remove the added engraving and readd on cart page',
  async function () {
    if (removeEng !== '') {
      await FocusAndClick(
        removeEng,
        'Removing Added Engraving from Cart Page',
        'Removing Added Engraving from Cart Page not available for this Brand/Locale'
      );
      await Verifytextexists(
        CommonData.addEngravingCart,
        'Added Engraving is removed from Cart page and Add engraving link appeared on cart page'
      );
    }
    if (addEngravingCart !== '') {
      await VerifyElementExistsandClick(
        addEngravingCart,
        'Add Engraving  Link from Cart page '
      );
      await ScrolltoElement(editEngavingLoc);
      await t.write(
        CommonData.engravingBtlTextOne,
        t.into(await t.$(editEngavingLoc))
      );
      await t.waitFor(parseInt(CommonData.waitTimeTwoK, 10));
      await Verifytextexists(
        CommonData.engravingBtlTextOne,
        CommonData.engravingBtlTextOne + ' an Engraving Text added again'
      );
    }
  }
);

/** SPPOOSNOTIFY Steps */

step(
  'MPPSPP Verify that the user is able to validate notifyme for shaded temp out of stock product',
  async function () {
    if (shadedSkuIds[0] !== '') {
      await GotoOutofStockProduct(siteDefinition, shadedSkuIds, 'Shaded');
      await VerifySPPGrid();
      if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
        if (clickShadeBtnSpp !== '') {
          await Trycatchclick(
            closeThirdPopup,
            'popup closed',
            'no popups displayed'
          );
          await ChoosevalueinDD(
            clickShadeBtnSpp,
            shadeNamelabel,
            pcShadePathSpp,
            'Selected Shade'
          );
          if (closeShadeBtnSpp !== '') {
            await t.evaluate(
              await t.$(closeShadeBtnSpp),
              (ele) => ele.click(),
              {
                waitForNavigation: !matchCondition,
              }
            );
          }
        } else {
          await Trycatchclick(
            closeThirdPopup,
            'popup closed',
            'no popups displayed'
          );
          await ChoosevalueinDDSPP(
            clickShadeBtnSppThree,
            ooSelectClassShadeDropDown,
            shadeNamelabel,
            ooShadePathText
          );
        }
        await Validateshadednonshadedoutofstockmsg(
          outOfStockMsgPath,
          oosShadedMsg,
          'Shadeditem'
        );
      } else {
        if (clickShadeBtnSpp !== '') {
          await Trycatchclick(
            closeThirdPopup,
            'popup closed',
            'no popups displayed'
          );
          await ChoosevalueinDD(
            clickShadeBtnSpp,
            shadeNamelabel,
            pcShadePathMpp,
            'Selected Shade'
          );
          if (closeShadeBtnSpp !== '') {
            await t.evaluate(
              await t.$(closeShadeBtnSpp),
              (ele) => ele.click(),
              {
                waitForNavigation: !matchCondition,
              }
            );
          }
        } else {
          await Trycatchclick(
            closeThirdPopup,
            'popup closed',
            'no popups displayed'
          );
          if (CommonData.scrollValueShadeReviewMob !== '') {
            await t.scrollDown(
              parseInt(CommonData.scrollValueShadeReviewMob, 10)
            );
          }
          await ChoosevalueinDDSPP(
            clickShadeBtnSppMobThree,
            ooSelectClassShadeDropDownMob,
            shadeNamelabel,
            ooShadePathText
          );
        }
        await Validateshadednonshadedoutofstockmsg(
          outOfStockMsgPathMob,
          oosShadedMsgMob,
          'Shadeditem'
        );
      }
      await NotifyMe(notifymeBtn, 'Shaded');
    }
  }
);

step(
  'MPPSPP Verify that the user is able to validate notifyme for non shaded temp out of stock product',
  async function () {
    if (CommonData.nonShadedSkuId1 !== '') {
      await GotoOutofStockProduct(siteDefinition, nonShadedSkuIds, 'NonShaded');
      await VerifySPPGrid();
      if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
        await Validateshadednonshadedoutofstockmsg(
          oosNonshadedMsgPath,
          oosNonshadedMsg,
          'Nonshadeditem'
        );
      } else {
        await Validateshadednonshadedoutofstockmsg(
          oosNonshadedMsgPathMob,
          oosNonshadedMsgMob,
          'Nonshadeditem'
        );
      }
      await NotifyMe(nonshadedNotifymeBtn, 'NonShaded');
    }
  }
);

/** SPPREVIEWASKANS Steps */

step(
  'MPPSPP Verify that the user is able to navigate to read review section and validate star histogram',
  async function () {
    await Gotothisurl(siteDefinition, readReviewProductUrl);
    if (readReviewProductUrl !== '') {
      await VerifySPPGrid();
    }
    if (reviewLink !== '') {
      if (
        await (
          await t.$(reviewLink)
        ).exists(
          parseInt(CommonData.existsCheckFrequency, 10),
          parseInt(CommonData.existsWaitTime, 10)
        )
      ) {
        // For some sites the review link takes a few seconds to show up, so these wait used.
        await t.waitFor(parseInt(CommonData.waitTimeThreeK, 10));
        if (CommonData.scrollValueShadeReviewMob !== '') {
          await t.scrollDown(
            parseInt(CommonData.scrollValueShadeReviewMob, 10)
          );
        }
        await t.evaluate(await t.$(reviewLink), (ele) => ele.click(), {
          waitForNavigation: !matchCondition,
        });
        if (await (await t.$(reviewSection)).exists()) {
          assert(matchCondition);
          gauge.screenshot();
          gauge.message(
            'Able to navigate to Rating and review section after clicking on Readreviews link'
          );
        } else {
          assert(
            !matchCondition,
            'Not able to navigate to Rating and review Section'
          );
        }
      } else {
        gauge.message('Reviews not available for this product');
        gauge.screenshot();
      }
    }
    if (totalProdReviewCount !== '') {
      var ReviewText = await (await t.$(totalProdReviewCount)).text();
      var ReviewText = ReviewText.replace(/[{(\D)}]/g, '');
      var ReviewCount = ReviewText.split(' ');
      var count = 0;
      var Stars = await (await t.$(starHistogramCount)).elements();
      for (let star of Stars) {
        var starCount = await star.text();
        count = count + parseInt(starCount);
      }
      assert.equal(parseInt(ReviewCount), count);
      gauge.message(
        'The Review Count ' + ReviewCount + ' Matched to Start Count : ' + count
      );
    }
    if (histogramBar !== '') {
      if (await (await t.$(histogramBar)).exists()) {
        await ScrolltoElement(histogramBar);
        await t.evaluate(await t.$(histogramBar), (ele) => ele.click());
        if (await (await t.$(customerReviewComments)).exists()) {
          assert(matchCondition);
          gauge.screenshot();
          gauge.message('User is navigated to Star Histogram section');
        } else {
          assert(
            !matchCondition,
            'User is not navigated to Star Histogram section'
          );
        }
      }
    }
  }
);

step(
  'MPPSPP Verify that the user is able to write a review',
  async function () {
    if (writeReviewLink !== '') {
      await t.evaluate(
        await t.$(writeReviewLink, { waitForEvents: ['loadEventFired'] }),
        (ele) => ele.click()
      );
      if (await (await t.$(signInPageLoc)).exists()) {
        assert(matchCondition);
        gauge.message('User is navigated to Sign In Page');
        gauge.screenshot();
      } else {
        assert(!matchCondition, 'User is not navigated to Sign In Page');
      }
    }
  }
);

step(
  'MPPSPP Verify that the user is able to navigate to ask and answer and search for the result',
  async function () {
    await Gotothisurl(siteDefinition, readReviewProductUrl);
    if (readReviewProductUrl !== '') {
      await VerifySPPGrid();
    }
    if (askForAnswer !== '') {
      if (
        await (
          await t.$(reviewLink)
        ).exists(
          parseInt(CommonData.existsCheckFrequency, 10),
          parseInt(CommonData.existsWaitTime, 10)
        )
      ) {
        // For some sites the review link takes a few seconds to show up, so these wait used.
        await t.waitFor(parseInt(CommonData.waitTimeThreeK, 10));
        await t.evaluate(await t.$(reviewLink), (ele) => ele.click(), {
          waitForNavigation: !matchCondition,
        });
      }
      await ScrolltoElement(askForAnswer);
      await t.evaluate(await t.$(askForAnswer), (ele) => ele.click());
      if (await (await t.$(askForAnswerTab)).exists()) {
        assert(matchCondition);
        gauge.message(
          'User is navigated to Questionaries from Ask for answer section'
        );
        gauge.screenshot();
      } else {
        assert(
          !matchCondition,
          'User is not navigated to Questionaries from Ask for answer section'
        );
      }
    }
    if (afaSearchBox !== '') {
      await ScrolltoElement(afaSearchBox);
      await t.write(CommonData.afaSearchText, t.into(await t.$(afaSearchBox)));
      gauge.message(CommonData.afaSearchText + ' is entered in the searchbox');
      if (afaSearchButton !== '') {
        await t.evaluate(await t.$(afaSearchButton), (ele) => ele.click());
      } else {
        await t.press('Enter');
      }
      await t.waitFor(parseInt(CommonData.waitTimeTwoK, 10));
      gauge.screenshot();
      if (afaAnswersList !== '') {
        var AnsResults = await (await t.$(afaAnswersList)).elements();
        var count = 0;
        for (let result of AnsResults) {
          var AnsText = await result.text();
          if (
            AnsText.toLowerCase().search(
              CommonData.afaSearchText.toLowerCase()
            ) !== -1
          ) {
            count++;
          }
        }
        assert.equal(AnsResults.length, count);
        gauge.message(
          'Text [' +
            CommonData.afaSearchText +
            '] Available in all search results'
        );
        gauge.screenshot();
      }
    }
  }
);

step(
  'MPPSPP Verify that the user is able to sort the search result in ask and answer section',
  async function () {
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      if (sortQuestionByDropDown !== '') {
        await HTLandLTHsortingEvaluateClick(
          sortQuestionByDropDown,
          chooseQuestion
        );
      } else if (selectClassSortQuestion !== '') {
        await HTLandLTHsortingSelectDropdown(
          selectClassSortQuestion,
          CommonData.chooseQuestion
        );
      }
    } else {
      if (selectClassSortQuestionMob !== '') {
        await HTLandLTHsortingSelectDropdown(
          selectClassSortQuestionMob,
          CommonData.chooseQuestion
        );
      } else if (sortQuestionByDropDownMob !== '') {
        await HTLandLTHsortingEvaluateClick(
          sortQuestionByDropDownMob,
          chooseQuestionMob
        );
      }
    }
    if (CommonData.chooseQuestion !== '') {
      let SortResult = await (await t.$(searchResult)).elements();
      // gets the values of the attribute datetime
      let SortResults = SortResult.map((e) => {
        return t.evaluate(e, (elem) => {
          return elem.getAttribute('datetime');
        });
      });
      var count = 0;

      for (let i = 0; i <= SortResults.length - 1; i++) {
        // passes the string value of datetime to the date objects so we can use the .getTime() method
        let Firstdate = new Date(await SortResults[i]);
        let SecondDate = new Date(await SortResults[i + 1]);

        // convert the string dates into ms (numerical values)
        if (CommonData.chooseQuestion === 'Oldest') {
          if (Firstdate.getTime() <= SecondDate.getTime()) {
            count++;
          } else if (Firstdate.getTime() > SecondDate.getTime()) {
            assert(!matchCondition, 'Not in Oldest order');
          }
        }
        if (CommonData.chooseQuestion === 'Newest') {
          if (Firstdate.getTime() >= SecondDate.getTime()) {
            count++;
          } else if (Firstdate.getTime() < SecondDate.getTime()) {
            assert(!matchCondition, 'Not in Newest order');
          }
        }
      }
      if (count === SortResults.length - 1) {
        gauge.message(
          'The Ask and Answer sort results are sorted as : ' +
            CommonData.chooseQuestion
        );
        assert(matchCondition);
        gauge.screenshot();
      } else {
        assert(
          !matchCondition,
          'The Ask and Answer sort results are not sorted as : ' +
            CommonData.chooseQuestion
        );
      }
    }
  }
);

step(
  'MPPSPP Verify that the user is able to submit the question',
  async function () {
    if (askaQuestionButton !== '') {
      if (await (await t.$(askaQuestionButton)).exists()) {
        await t.evaluate(
          await t.$(askaQuestionButton, {
            waitForEvents: ['DOMContentLoaded'],
          }),
          (ele) => ele.click()
        );
        gauge.screenshot();
        await t.click(await t.text(CommonData.questionCategory));
        if (await (await t.$(questionInputText)).exists()) {
          await ScrolltoElement(questionInputText);
          await t.write(
            CommonData.questionToAsk,
            t.into(await t.$(questionInputText))
          );
          await t.write(
            CommonData.emailAddress,
            t.into(await t.$(enterEmailId))
          );
          await t.write(CommonData.nickName, t.into(await t.$(enterNickname)));
          gauge.screenshot();
        }
      }
    }
    if (questionInputText !== '') {
      if (await (await t.$(questionInputText)).exists()) {
        await t.click(await t.$(submitBtn));
        var ThankyouMsg = await (await t.$(thankYouMsgPath)).text();
        gauge.message('ActualExcessMsg : ' + ThankyouMsg);
        gauge.message('ExpectedExcessmsg : ' + CommonData.thankYouMsg);
        if (ThankyouMsg.includes(CommonData.thankYouMsg)) {
          assert(matchCondition);
          gauge.message('Thank you message displayed');
        } else {
          assert(!matchCondition, 'Message displayed but not matched');
        }
      } else {
        gauge.message('Thank you message popup not displayed');
      }
    }
  }
);

/** SPPSHADEQTYDET Steps */

step(
  'MPPSPP Verify that the user can navigate to shaded SPP from MPP',
  async function () {
    await Gotothisurl(siteDefinition, shadedUrl);
    if (shadedUrl !== '') {
      await VerifyMPPGrid();
    }
    await VerifyElementExistsandClick(productViewClass, 'Productview class');
    if (productViewClass !== '') {
      await VerifySPPGrid();
    }
    if (siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE') {
      if (resizeFlag) {
        await t.emulateDevice(CommonData.emulationDevice);
      }
    }
  }
);

step(
  'MPPSPP Verify that the +/- button is greyed out by increasing or decreasing  the quantity on SPP',
  async function () {
    await Trycatchclick(closeThirdPopup, 'popup closed', 'no popups displayed');
    await VerifyElementExistsandMultipleClickonLoop(
      increaseQtyBtnSpp,
      CommonData.qtyVal,
      'Increase qty btn on SPP'
    );
    await VerifyDisableElement(increaseQtyBtnSpp, 'Plus');
    await VerifyElementExistsandMultipleClickonLoop(
      decreaseQtyBtnSpp,
      CommonData.qtyVal,
      'Increase qty btn on SPP'
    );
    await VerifyDisableElement(decreaseQtyBtnSpp, 'Minus');
    await VerifyElementExistsandMultipleClickonLoop(
      increaseQtyBtnSpp,
      CommonData.qtyVal,
      'Increase qty btn on SPP'
    );
    await VerifyDisableElement(increaseQtyBtnSpp, 'Plus');
  }
);

step(
  'MPPSPP Verify that the user is able to add to cart by selecting the shade on SPP',
  async function () {
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      if (clickShadeBtnSpp !== '' || pcShadePathSpp !== '') {
        await Trycatchclick(
          closeThirdPopup,
          'popup closed',
          'no popups displayed'
        );
        await ChoosevalueinDD(
          clickShadeBtnSpp,
          CommonData.shadeName,
          pcShadePathSpp,
          'Selected Shade'
        );
        if (closeShadeBtnSpp !== '') {
          await t.evaluate(await t.$(closeShadeBtnSpp), (ele) => ele.click(), {
            waitForNavigation: !matchCondition,
          });
        }
      } else {
        await Trycatchclick(
          closeThirdPopup,
          'popup closed',
          'no popups displayed'
        );
        await ChoosevalueinDDSPP(
          clickShadeBtnSppTwo,
          selectClassShadeDropDown,
          CommonData.shadeName,
          shadePathText
        );
      }
    } else {
      if (clickShadeBtnSppMob !== '') {
        await Trycatchclick(
          closeThirdPopup,
          'popup closed',
          'no popups displayed'
        );
        await t.evaluate(await t.$(clickShadeBtnSppMob), (ele) => ele.click(), {
          waitForNavigation: !matchCondition,
        });
        await t.evaluate(await t.$(mobShadePath), (ele) => ele.click(), {
          waitForNavigation: !matchCondition,
        });
        gauge.message('Selected Shade path :' + mobShadePath);
        gauge.screenshot();
        await t.evaluate(await t.$(closeShadeBtnSpp), (ele) => ele.click(), {
          waitForNavigation: !matchCondition,
        });
      } else {
        await Trycatchclick(
          closeThirdPopup,
          'popup closed',
          'no popups displayed'
        );
        if (CommonData.scrollValueShadeReviewMob !== '') {
          await t.scrollDown(
            parseInt(CommonData.scrollValueShadeReviewMob, 10)
          );
        }
        await ChoosevalueinDDSPP(
          clickShadeBtnSppMobTwo,
          selectClassShadeDropDownMob,
          CommonData.shadeName,
          shadePathText
        );
      }
    }
    sppPageUrl = await t.currentURL();
    await AddproducttoBaginSPP(addToBagSpp);
  }
);

step(
  'MPPSPP Verify the cart page with the selected product from SPP',
  async function () {
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      await VerifyElementExistsandClick(clickCartPageLink, 'Cart overlay');
    } else {
      await VerifyElementExistsandClick(clickCartPageLinkMob, 'Cart overlay');
    }
    await ValidateURLwithtext(
      cartPageURLText,
      'In a cartpage',
      'Not in a cartpage'
    );
    if (CommonData.shadeName !== '') {
      if (cartPagePlusBtn !== '') {
        if (await (await t.$(cartPagePlusBtn)).exists()) {
          await t.evaluate(await t.$(cartPagePlusBtn), (ele) => ele.click());
        }
      }
      await Validateshadeincart(
        shadePath,
        pcShadePathMpp,
        CommonData.shadeName
      );
    }
  }
);

step(
  'MPPSPP Verify excess of product added to cart message appeared on SPP',
  async function () {
    if (qtyDropDownInCart !== '') {
      if (await t.dropDown({ name: qtyDropDownInCart }).exists()) {
        await t
          .dropDown({ name: qtyDropDownInCart })
          .select(CommonData.chooseQtyInCartPage);
        gauge.message('Able to choose quantity in cartpage');
        gauge.screenshot();
      } else {
        assert(!matchCondition, "Quantity dropdown doesn't exists in cartpage");
      }
    } else if (increaseBtnInCart !== '') {
      if (await (await t.$(increaseBtnInCart)).exists()) {
        for (let i = 1; i < parseInt(CommonData.qtyVal, 10); i++) {
          await t.evaluate(
            await t.$(increaseBtnInCart, { waitForEvents: ['loadEventFired'] }),
            (ele) => ele.click()
          );
          await t.waitFor(parseInt(CommonData.waitTimeThreeK, 10));
        }
        gauge.message('Able to choose quantity in cartpage');
        gauge.screenshot();
      } else {
        assert(!matchCondition, "Increase qty btn doesn't exists in cartpage");
      }
    }
    // For some of the sites back to the previous page does not function as expected in the automation, therefore recalling the step again in the catch block.
    try {
      await Gobackpreviouspage(sppPageUrl);
    } catch (error) {
      await Gobackpreviouspage(sppPageUrl);
    }
    sppPageUrl = await t.currentURL();
    await AddproducttoBaginSPP(addToBagSpp);
    if (excessMsgPath !== '') {
      if (await (await t.$(excessMsgPath)).exists()) {
        gauge.screenshot();
        var Maxmsg = await (await t.$(excessMsgPath)).text();
        gauge.message('ActualExcessMsg : ' + Maxmsg);
        gauge.message('ExpectedExcessmsg : ' + verifyMaxErrorMsg);
        if (Maxmsg.includes(verifyMaxErrorMsg)) {
          assert(matchCondition);
          if (closeExcessMsg !== '') {
            await t.click(await t.$(closeExcessMsg));
          }
        } else {
          assert(
            !matchCondition,
            'Message displayed but error message not matched'
          );
        }
      } else {
        gauge.message('Excess verify message popup not displayed');
      }
    }
  }
);

step(
  'MPPSPP Verify that the user is able to navigate to mpp from breadcrumps',
  async function () {
    if (CommonData.breadcrumbsLink !== '') {
      await t.goto(Helper.getBaseUrl(siteDefinition) + sppProductUrl, {
        waitForEvents: ['DOMContentLoaded'],
      });
      if (await t.link(CommonData.breadcrumbsLink).exists()) {
        gauge.screenshot();
        await t.evaluate(t.link(CommonData.breadcrumbsLink), (ele) =>
          ele.click()
        );
        var BCurl = await t.currentURL();
        if (
          Helper.getBaseUrl(siteDefinition) +
          shadedUrl
            .substring(12)
            .toUpperCase()
            .includes(BCurl.substring(12).toUpperCase())
        ) {
          assert(matchCondition);
          gauge.message('Successfully navigated to MPP from SPP');
        } else {
          assert(!matchCondition, 'Not able to navigate to MPP from SPP');
        }
      }
    } else {
      gauge.message('Breadcrumbs link not available for the product in SPP');
    }
  }
);

step('MPPSPP Verify details section on spp', async function () {
  await Gotothisurl(siteDefinition, detailsProductSppUrl);
  if (detailsProductSppUrl !== '') {
    await VerifySPPGrid();
  }
  if (detailsSection !== '') {
    if (await (await t.$(detailsSection)).exists()) {
      assert(matchCondition);
      gauge.message('Details section exists on SPP');
      var DetailSections = [ingredientsSection, howToUseSection];
      var DetailText = ['Ingredients Section', 'How To Use Section'];
      for (let i = 0; i < DetailSections.length; i++) {
        if (DetailSections[i] !== '') {
          await VerifyElementExistsandClick(DetailSections[i], DetailText[i]);
          gauge.message(
            `Able to Navigate to t.${DetailText[i]} section and expand and collapse panel`
          );
        }
      }
    } else {
      assert(!matchCondition, "Details section doesn't exists");
    }
  }
});

/** sppyoutubevideo Steps */

step(
  'MPPSPP Verify youtube video is available and user is able to play the video on spp',
  async function () {
    await Gotothisurl(siteDefinition, youtubeSPPURL);
    if (youtubeSPPURL !== '') {
      await VerifySPPGrid();
    }
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      await t.waitFor(parseInt(CommonData.waitTimeThreeK, 10));
      if (youtubeLoc !== '') {
        await t.evaluate(await t.$(youtubeLoc), (ele) => ele.scrollIntoView());
        await t.waitFor(parseInt(CommonData.waitTimeThreeK, 10));
        gauge.screenshot();
        if (await (await t.$(youtubeLoc)).exists()) {
          await assert.ok(await (await t.$(youtubeLoc)).exists());
          await t.click(await t.$(youtubeClickLoc));
          await t.waitFor(parseInt(CommonData.waitTimeThreeK, 10));
          gauge.message('Youtube Link is available on SPP');
          gauge.message('User is able to click on Youtube Video');
        } else {
          assert(!matchCondition, 'Youtube Link is not available on SPP');
        }
      }
    } else {
      await t.evaluate(await t.$(youtubeLocMob), (ele) => ele.scrollIntoView());
      await t.waitFor(parseInt(CommonData.waitTimeThreeK, 10));
      gauge.screenshot();
      if (await (await t.$(youtubeLocMob)).exists()) {
        await assert.ok(await (await t.$(youtubeLocMob)).exists());
        await t.click(await t.$(youtubeClickLocMob));
        await t.waitFor(parseInt(CommonData.waitTimeThreeK, 10));
        gauge.message('Youtube Link is available on SPP');
        gauge.message('User is able to click on Youtube Video');
      } else {
        assert(!matchCondition, 'Youtube Link is not available on SPP');
      }
    }
  }
);

/** accmppsppfav Steps */

step('MPPSPP Click on My Account Link', async function () {
  if (myAccountLinkReg !== '') {
    await t.evaluate(await t.$(myAccountLinkReg), (ele) => ele.click());
    gauge.screenshot();
  }
});

/** EMEA BEX Regression Favorites testcase */

step(
  'MPPSPP Click on Account Registration Button and Enter Account Details and Navigate to Account Index Page',
  async function () {
    if (accountRegisterNow !== '') {
      await t.waitFor(parseInt(CommonData.waitTimeThreeK, 10));
      await (await t.$(accountRegisterNow)).exists();
      await t.evaluate(await t.$(accountRegisterNow), (ele) => {
        ele.focus();
        ele.click();
      });
      gauge.screenshot();
    }
    if (accountRegistrationFirstName !== '') {
      await t.evaluate(await t.$(accountRegistrationFirstName), (ele) =>
        ele.focus()
      );
      await t.write(
        CommonData.firstName,
        t.into(await t.$(accountRegistrationFirstName))
      );
    }
    if (accountRegistrationLastName !== '') {
      await t.evaluate(await t.$(accountRegistrationLastName), (ele) =>
        ele.focus()
      );
      await t.write(
        CommonData.lastName,
        t.into(await t.$(accountRegistrationLastName))
      );
    }
    if (accountRegisterPhone !== '') {
      await t.evaluate(await t.$(accountRegisterPhone), (ele) => ele.focus());
      await t.write(CommonData.phone, t.into(await t.$(accountRegisterPhone)));
    }
    if (accountRegisterEmailId !== '') {
      let accountNewUserEmailId = makeEmail();
      await t.evaluate(await t.$(accountRegisterEmailId), (ele) => ele.focus());
      await t.write(
        accountNewUserEmailId,
        t.into(await t.$(accountRegisterEmailId))
      );
      gauge.message('Account New user Email ID: ' + accountNewUserEmailId);
    }
    if (accountRegisterPWD !== '') {
      await t.evaluate(await t.$(accountRegisterPWD), (ele) => ele.focus());
      await t.write(CommonData.nPwd, t.into(await t.$(accountRegisterPWD)));
    }
    if (accountRegisterationTerms !== '') {
      await t.evaluate(await t.$(accountRegisterationTerms), (ele) => {
        ele.focus();
        ele.click();
      });
    }
    if (accountRegisterButton !== '') {
      await t.evaluate(await t.$(accountRegisterButton), (ele) => {
        ele.focus();
        ele.click();
      });
    }
    gauge.screenshot();
  }
);

step(
  'MPPSPP MOB Click on Account Registration Button and Enter Account Details and Navigate to Account Index Page',
  async function () {
    if (acMobRegisterNow !== '') {
      await t.evaluate(await t.$(acMobRegisterNow), (ele) => {
        ele.focus();
        ele.click();
      });
      gauge.screenshot();
    }
    if (accountRegistrationFirstName !== '') {
      await t.evaluate(await t.$(accountRegistrationFirstName), (ele) =>
        ele.focus()
      );
      await t.write(
        CommonData.firstName,
        t.into(await t.$(accountRegistrationFirstName))
      );
    }
    if (accountRegistrationLastName !== '') {
      await t.evaluate(await t.$(accountRegistrationLastName), (ele) =>
        ele.focus()
      );
      await t.write(
        CommonData.lastName,
        t.into(await t.$(accountRegistrationLastName))
      );
    }
    if (accountRegisterPhone !== '') {
      await t.evaluate(await t.$(accountRegisterPhone), (ele) => ele.focus());
      await t.write(CommonData.phone, t.into(await t.$(accountRegisterPhone)));
    }
    if (accountRegisterEmailId !== '') {
      let AccountNewUserEmailId = makeEmail();
      await t.evaluate(await t.$(accountRegisterEmailId), (ele) => ele.focus());
      await t.write(
        AccountNewUserEmailId,
        t.into(await t.$(accountRegisterEmailId))
      );
      gauge.message('Account New user Email ID: ' + AccountNewUserEmailId);
    }
    if (accountRegisterPWD !== '') {
      await t.evaluate(await t.$(accountRegisterPWD), (ele) => ele.focus());
      await t.write(CommonData.nPwd, t.into(await t.$(accountRegisterPWD)));
    }
    if (mobAccountRegisterationTerms !== '') {
      await t.evaluate(await t.$(mobAccountRegisterationTerms), (ele) => {
        ele.focus();
        ele.click();
      });
    }
    if (acMobRegisterButton !== '') {
      if (await (await t.$(acMobRegisterButton)).exists()) {
        await t.evaluate(await t.$(acMobRegisterButton), (ele) => {
          ele.focus();
          ele.click();
        });
      }
    }
    gauge.screenshot();
  }
);

/** EMEA BEX Regression Favorites testcase */

step(
  'MPPSPP Go to Favourites MPP and hover over on a product brief and add to favorites',
  async function () {
    if (favouritesMppUrl !== '') {
      await Gotothisurl(siteDefinition, favouritesMppUrl);
      await VerifyMPPGrid();
      await t.scrollDown(parseInt(CommonData.scrollFav, 10));
      if (quickViewForRandomProductREG !== '') {
        await t.evaluate(
          await t.$(quickViewForRandomProductREG, {
            waitForEvents: ['loadEventFired'],
          }),
          (ele) => ele.click()
        );
        await HoverAndClick(
          productBrief,
          favoritesLocMpp,
          'Product was added to the favorites',
          'Unable to add product to favorites'
        );
      } else {
        if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
          await HoverAndClick(
            productBrief,
            favoritesLocMpp,
            'Product was added to the favorites',
            'Unable to add product to favorites'
          );
        } else {
          // You cannot hover on mobile sites so clicking on the wishlist
          await VerifyElementExistsandClick(
            favoritesLocMppMOB,
            'Favourites link or button'
          );
        }
      }
    }
  }
);
step('MPPSPP Click on Product view class in MPP', async function () {
  await VerifyElementExistsandClick(productViewClass, 'Productview class');
  if (productViewClass !== '') {
    await VerifySPPGrid();
  }
  if (siteDefinition.executionContext.platform.toUpperCase() === 'MOBILE') {
    if (resizeFlag) {
      await t.emulateDevice(CommonData.emulationDevice);
    }
  }
});

step('MPPSPP Add a product from SPP to favorites', async function () {
  if (favoritesSppReg !== '') {
    await t.evaluate(await t.$(favoritesSppReg), (ele) => ele.click());
  }
});

step('MPPSPP Click on Favorites Link', async function () {
  if (favoritesLinkReg !== '') {
    await t.evaluate(await t.$(favoritesLinkReg), (ele) => ele.click());
  }
});

step(
  'MPPSPP Click on Start New Button and add a product to favourites',
  async function () {
    if (startNewButtonReg !== '') {
      await t.evaluate(await t.$(startNewButtonReg), (ele) => ele.click());
      gauge.screenshot();
    }

    if (clickQuickViewFavoritesReg !== '') {
      await t.evaluate(await t.$(clickQuickViewFavoritesReg), (ele) =>
        ele.click()
      );
      gauge.screenshot();
    }

    if (addProductToFavoritesReg !== '') {
      await t.evaluate(await t.$(addProductToFavoritesReg), (ele) =>
        ele.click()
      );
      gauge.screenshot();
    }
  }
);

step('MPPSPP Click on See all favourites', async function () {
  if (seeAllFavorites !== '') {
    await t.evaluate(await t.$(seeAllFavorites), (ele) => ele.click());
  }
});

step('MPPSPP Add product to Bag in FAV', async function () {
  if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
    await FocusAndClick(
      addToBagFav,
      'Product added to Bag',
      'Add to Bag not available in MPP for this Brand/Locale'
    );
  } else {
    await FocusAndClick(
      addToBagFavMob,
      'Product added to Bag',
      'Add to Bag not available in MPP for this Brand/Locale'
    );
  }
});

step('MPPSPP Close MPP cart overlay', async function () {
  await FocusAndClick(
    cartOverlayCloseLoc,
    'Cart overlay is closed',
    'Cart overlay is not appliable this Brand/Locale'
  );
});

step('MPPSPP Assert Bag Icon after Product Added', async function () {
  if (await (await t.$(checkBagIconReg)).exists()) {
    assert(matchCondition, 'product added to cart');
    gauge.screenshot();
  } else {
    assert(!matchCondition, 'product not added');
  }
});

step('MPPSPP AC Mobile Hamburger Icon', async function () {
  if (acMobileHamburgerIcon !== '') {
    if (await (await t.$(acMobileHamburgerIcon)).exists()) {
      await t.evaluate(await t.$(acMobileHamburgerIcon), (ele) => {
        ele.focus();
        ele.click();
      });
    }
  }
});

/** extractskuid Steps */

step('MPPSPP Extract skuId Json format', async function () {
  await ExtractSkuidS();
});

step('MPPSPP Extract OOS skuId', async function () {
  await ExtractOOSSkuID();
});
