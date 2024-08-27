/* This file is common template for MPPSPP Features for multiple brands and locale */

/* *** Variable Declaration **** */

var t = require('taiko');
let siteDefinition, source, NullDataException;
const Helper = require('../../helpers/helper');
const Util = require('../../../../utilities/util');

/* *** General Quiz and Result page locators *** */
var timeoutSettings = '';
var emulationDevice = '';
var countryName = '';
var languageName = '';
var hubsiteSubmit = '';
var firstQuizClosePopup = '';
var secondQuizClosePopup = '';
var thirdQuizClosePopup = '';
var quizLoadingState = '';
var resAddToBag = '';
var resQuickShop = '';
var resAddToBagM = '';
var resQuickShopM = '';
var resCartLink = '';
var resCartLinkM = '';

/* *** Skincare Quiz Locators **** */
var skinQuizUrl = '';
var skinLaunchQuiz = '';
var skinLaunchQuizM = '';
var skinQuizOptions = '';
var skinQuizOptionsM = '';
var skinQuizResultHeader = '';
var skinQuizResultHeaderM = '';
var skinNextBtn = '';
var skinNextBtnM = '';
var skinQuestionText = '';
var skinQuestionTextM = '';
var skinSubmitBtn = '';
var skinSubmitBtnM = '';
var skinResProdGrid = '';
var skinResProdGridM = '';
var skinResultPage = '';
var skinResultPageM = '';
var skinViewCartProdName = '';
var skinViewCartProdNameM = '';
var skinResProdName = '';
var skinResProdNameM = '';
var skinRetakeQuiz = '';
var skinRetakeQuizM = '';
var skinMaxQuestions = '';
var skinMaxQuestionsM = '';
var skinMinQuestions = '';
var skinMinQuestionsM = '';
var skinEmailInputPath = '';
var skinEmailInputPathM = '';
var skinDynamicOrder = '';
var skinDynamicOrderM = '';
var skinQuizOptionOne = '';
var skinQuizOptionTwo = '';
var skinQuizOptionThree = '';
var skinQuizOptionFour = '';
var skinQuizOptionFive = '';
var skinQuizOptionSix = '';
var skinQuizOptionSeven = '';
var skinQuizOptionEight = '';
var skinQuizOptionNine = '';
var skinQuizOptionTen = '';
var skinQuizOptionEleven = '';
var skinQuizOptionTwelve = '';
var skinQuizQuestionOptions = [];
var skinQuizOptionOneM = '';
var skinQuizOptionTwoM = '';
var skinQuizOptionThreeM = '';
var skinQuizOptionFourM = '';
var skinQuizOptionFiveM = '';
var skinQuizOptionSixM = '';
var skinQuizOptionSevenM = '';
var skinQuizOptionEightM = '';
var skinQuizOptionNineM = '';
var skinQuizOptionTenM = '';
var skinQuizOptionElevenM = '';
var skinQuizOptionTwelveM = '';
var skinQuizQuestionOptionsM = [];

/** *** Foundation Quiz Locators ***** */
var fndnQuizUrl = '';
var fndnLaunchQuiz = '';
var fndnLaunchQuizM = '';
var fndnQuizOptions = '';
var fndnQuizOptionsM = '';
var fndnQuizResultHeader = '';
var fndnQuizResultHeaderM = '';
var fndnNextBtn = '';
var fndnNextBtnM = '';
var fndnQuestionText = '';
var fndnQuestionTextM = '';
var fndnSubmitBtn = '';
var fndnSubmitBtnM = '';
var fndnResProdGrid = '';
var fndnResProdGridM = '';
var fndnResultPage = '';
var fndnResultPageM = '';
var fndnViewCartProdName = '';
var fndnViewCartProdNameM = '';
var fndnResProdName = '';
var fndnResProdNameM = '';
var fndnRetakeQuiz = '';
var fndnRetakeQuizM = '';
var fndnMaxQuestions = '';
var fndnMaxQuestionsM = '';
var fndnMinQuestions = '';
var fndnMinQuestionsM = '';
var fndnEmailInputPath = '';
var fndnEmailInputPathM = '';
var fndnDynamicOrder = '';
var fndnDynamicOrderM = '';
var fndnQuizOptionOne = '';
var fndnQuizOptionTwo = '';
var fndnQuizOptionThree = '';
var fndnQuizOptionFour = '';
var fndnQuizOptionFive = '';
var fndnQuizOptionSix = '';
var fndnQuizOptionSeven = '';
var fndnQuizOptionEight = '';
var fndnQuizOptionNine = '';
var fndnQuizOptionTen = '';
var fndnQuizOptionEleven = '';
var fndnQuizOptionTwelve = '';
var fndnQuizQuestionOptions = [];
var fndnQuizOptionOneM = '';
var fndnQuizOptionTwoM = '';
var fndnQuizOptionThreeM = '';
var fndnQuizOptionFourM = '';
var fndnQuizOptionFiveM = '';
var fndnQuizOptionSixM = '';
var fndnQuizOptionSevenM = '';
var fndnQuizOptionEightM = '';
var fndnQuizOptionNineM = '';
var fndnQuizOptionTenM = '';
var fndnQuizOptionElevenM = '';
var fndnQuizOptionTwelveM = '';
var fndnQuizQuestionOptionsM = [];

/* *** Hair Quiz Locators ******** */
var hairQuizUrl = '';
var hairLaunchQuiz = '';
var hairLaunchQuizM = '';
var hairQuizOptions = '';
var hairQuizOptionsM = '';
var hairQuizResultHeader = '';
var hairQuizResultHeaderM = '';
var hairNextBtn = '';
var hairNextBtnM = '';
var hairQuestionText = '';
var hairQuestionTextM = '';
var hairSubmitBtn = '';
var hairSubmitBtnM = '';
var hairResProdGrid = '';
var hairResProdGridM = '';
var hairResultPage = '';
var hairResultPageM = '';
var hairViewCartProdName = '';
var hairViewCartProdNameM = '';
var hairResProdName = '';
var hairResProdNameM = '';
var hairRetakeQuiz = '';
var hairRetakeQuizM = '';
var hairMaxQuestions = '';
var hairMaxQuestionsM = '';
var hairMinQuestions = '';
var hairMinQuestionsM = '';
var hairEmailInputPath = '';
var hairEmailInputPathM = '';
var hairDynamicOrder = '';
var hairDynamicOrderM = '';
var hairQuizOptionOne = '';
var hairQuizOptionTwo = '';
var hairQuizOptionThree = '';
var hairQuizOptionFour = '';
var hairQuizOptionFive = '';
var hairQuizOptionSix = '';
var hairQuizOptionSeven = '';
var hairQuizOptionEight = '';
var hairQuizOptionNine = '';
var hairQuizOptionTen = '';
var hairQuizOptionEleven = '';
var hairQuizOptionTwelve = '';
var hairQuizQuestionOptions = [];
var hairQuizOptionOneM = '';
var hairQuizOptionTwoM = '';
var hairQuizOptionThreeM = '';
var hairQuizOptionFourM = '';
var hairQuizOptionFiveM = '';
var hairQuizOptionSixM = '';
var hairQuizOptionSevenM = '';
var hairQuizOptionEightM = '';
var hairQuizOptionNineM = '';
var hairQuizOptionTenM = '';
var hairQuizOptionElevenM = '';
var hairQuizOptionTwelveM = '';
var hairQuizQuestionOptionsM = [];

/* *** Moisturizer Quiz Locators **** */
var mstrQuizUrl = '';
var mstrLaunchQuiz = '';
var mstrLaunchQuizM = '';
var mstrQuizOptions = '';
var mstrQuizOptionsM = '';
var mstrQuizResultHeader = '';
var mstrQuizResultHeaderM = '';
var mstrNextBtn = '';
var mstrNextBtnM = '';
var mstrQuestionText = '';
var mstrQuestionTextM = '';
var mstrSubmitBtn = '';
var mstrSubmitBtnM = '';
var mstrResProdGrid = '';
var mstrResProdGridM = '';
var mstrResultPage = '';
var mstrResultPageM = '';
var mstrViewCartProdName = '';
var mstrViewCartProdNameM = '';
var mstrResProdName = '';
var mstrResProdNameM = '';
var mstrRetakeQuiz = '';
var mstrRetakeQuizM = '';
var mstrMaxQuestions = '';
var mstrMaxQuestionsM = '';
var mstrMinQuestions = '';
var mstrMinQuestionsM = '';
var mstrEmailInputPath = '';
var mstrEmailInputPathM = '';
var mstrDynamicOrder = '';
var mstrDynamicOrderM = '';
var mstrQuizOptionOne = '';
var mstrQuizOptionTwo = '';
var mstrQuizOptionThree = '';
var mstrQuizOptionFour = '';
var mstrQuizOptionFive = '';
var mstrQuizOptionSix = '';
var mstrQuizOptionSeven = '';
var mstrQuizOptionEight = '';
var mstrQuizOptionNine = '';
var mstrQuizOptionTen = '';
var mstrQuizOptionEleven = '';
var mstrQuizOptionTwelve = '';
var mstrQuizQuestionOptions = [];
var mstrQuizOptionOneM = '';
var mstrQuizOptionTwoM = '';
var mstrQuizOptionThreeM = '';
var mstrQuizOptionFourM = '';
var mstrQuizOptionFiveM = '';
var mstrQuizOptionSixM = '';
var mstrQuizOptionSevenM = '';
var mstrQuizOptionEightM = '';
var mstrQuizOptionNineM = '';
var mstrQuizOptionTenM = '';
var mstrQuizOptionElevenM = '';
var mstrQuizOptionTwelveM = '';
var mstrQuizQuestionOptionsM = [];

/* *** Scent Quiz Locators ******* */
var scntQuizUrl = '';
var scntLaunchQuiz = '';
var scntLaunchQuizM = '';
var scntQuizOptions = '';
var scntQuizOptionsM = '';
var scntQuizResultHeader = '';
var scntQuizResultHeaderM = '';
var scntNextBtn = '';
var scntNextBtnM = '';
var scntQuestionText = '';
var scntQuestionTextM = '';
var scntSubmitBtn = '';
var scntSubmitBtnM = '';
var scntResProdGrid = '';
var scntResProdGridM = '';
var scntResultPage = '';
var scntResultPageM = '';
var scntViewCartProdName = '';
var scntViewCartProdNameM = '';
var scntResProdName = '';
var scntResProdNameM = '';
var scntRetakeQuiz = '';
var scntRetakeQuizM = '';
var scntMaxQuestions = '';
var scntMaxQuestionsM = '';
var scntMinQuestions = '';
var scntMinQuestionsM = '';
var scentInputEmailPath = '';
var scntEmailInputPathM = '';
var scntGender = '';
var scntGenderM = '';
var scntDynamicOrder = '';
var scntDynamicOrderM = '';
var scntQuizOptionOne = '';
var scntQuizOptionTwo = '';
var scntQuizOptionThree = '';
var scntQuizOptionFour = '';
var scntQuizOptionFive = '';
var scntQuizOptionSix = '';
var scntQuizOptionSeven = '';
var scntQuizOptionEight = '';
var scntQuizOptionNine = '';
var scntQuizOptionTen = '';
var scntQuizOptionEleven = '';
var scntQuizOptionTwelve = '';
var scntQuizQuestionOptions = [];
var scntQuizOptionOneM = '';
var scntQuizOptionTwoM = '';
var scntQuizOptionThreeM = '';
var scntQuizOptionFourM = '';
var scntQuizOptionFiveM = '';
var scntQuizOptionSixM = '';
var scntQuizOptionSevenM = '';
var scntQuizOptionEightM = '';
var scntQuizOptionNineM = '';
var scntQuizOptionTenM = '';
var scntQuizOptionElevenM = '';
var scntQuizOptionTwelveM = '';
var scntQuizQuestionOptionsM = [];

/* ****** CODE TO RECEIVE AND FORM THE BASE URL AND ADMIN URL ***** */
// PROD, PREPROD, STAGE, DEV, FEAT, ENG, PINCER, PREVIEW
var feature = 'Find Me';
var CommonData = {};

const messages = {
  stepNotApplicable: `This step is not applicable for this Brand/Locale.`,
  notAvailable: (ele, page) => `The ${ele} not available on ${page} page.`,
  isAvailable: (ele, page) => `The ${ele} available on ${page} page.`,
  notOnPage: (page) => `Not on the ${page} page.`,
  quizConcluded: `Quiz has been successfully completed and has landed on the results page.`,
  popupClose: (popupNumber) =>
    `The ${popupNumber} popup is closed successfully`,
  popupNotDisplayed: (popupNumber) =>
    `The ${popupNumber} popup was not displayed`,
  isDisplayed: (ele, page) => `The ${ele} is displayed on ${page} page.`,
  notDisplayed: (ele, page) => `The ${ele} is not displayed on ${page} page.`,
  quizError: `An error occured during the quiz.`,
};

const matchCondition = true;

assert = require('assert');
let Hengine = require('../../../../datainterface/providers/hengine');

function reinitialize() {
  skinQuizQuestionOptions = [
    skinQuizOptionOne,
    skinQuizOptionTwo,
    skinQuizOptionThree,
    skinQuizOptionFour,
    skinQuizOptionFive,
    skinQuizOptionSix,
    skinQuizOptionSeven,
    skinQuizOptionEight,
    skinQuizOptionNine,
    skinQuizOptionTen,
    skinQuizOptionEleven,
    skinQuizOptionTwelve,
  ];
  skinQuizQuestionOptionsM = [
    skinQuizOptionOneM,
    skinQuizOptionTwoM,
    skinQuizOptionThreeM,
    skinQuizOptionFourM,
    skinQuizOptionFiveM,
    skinQuizOptionSixM,
    skinQuizOptionSevenM,
    skinQuizOptionEightM,
    skinQuizOptionNineM,
    skinQuizOptionTenM,
    skinQuizOptionElevenM,
    skinQuizOptionTwelveM,
  ];
  fndnQuizQuestionOptions = [
    fndnQuizOptionOne,
    fndnQuizOptionTwo,
    fndnQuizOptionThree,
    fndnQuizOptionFour,
    fndnQuizOptionFive,
    fndnQuizOptionSix,
    fndnQuizOptionSeven,
    fndnQuizOptionEight,
    fndnQuizOptionNine,
    fndnQuizOptionTen,
    fndnQuizOptionEleven,
    fndnQuizOptionTwelve,
  ];
  fndnQuizQuestionOptionsM = [
    fndnQuizOptionOneM,
    fndnQuizOptionTwoM,
    fndnQuizOptionThreeM,
    fndnQuizOptionFourM,
    fndnQuizOptionFiveM,
    fndnQuizOptionSixM,
    fndnQuizOptionSevenM,
    fndnQuizOptionEightM,
    fndnQuizOptionNineM,
    fndnQuizOptionTenM,
    fndnQuizOptionElevenM,
    fndnQuizOptionTwelveM,
  ];
  hairQuizQuestionOptions = [
    hairQuizOptionOne,
    hairQuizOptionTwo,
    hairQuizOptionThree,
    hairQuizOptionFour,
    hairQuizOptionFive,
    hairQuizOptionSix,
    hairQuizOptionSeven,
    hairQuizOptionEight,
    hairQuizOptionNine,
    hairQuizOptionTen,
    hairQuizOptionEleven,
    hairQuizOptionTwelve,
  ];
  hairQuizQuestionOptionsM = [
    hairQuizOptionOneM,
    hairQuizOptionTwoM,
    hairQuizOptionThreeM,
    hairQuizOptionFourM,
    hairQuizOptionFiveM,
    hairQuizOptionSixM,
    hairQuizOptionSevenM,
    hairQuizOptionEightM,
    hairQuizOptionNineM,
    hairQuizOptionTenM,
    hairQuizOptionElevenM,
    hairQuizOptionTwelveM,
  ];
  mstrQuizQuestionOptions = [
    mstrQuizOptionOne,
    mstrQuizOptionTwo,
    mstrQuizOptionThree,
    mstrQuizOptionFour,
    mstrQuizOptionFive,
    mstrQuizOptionSix,
    mstrQuizOptionSeven,
    mstrQuizOptionEight,
    mstrQuizOptionNine,
    mstrQuizOptionTen,
    mstrQuizOptionEleven,
    mstrQuizOptionTwelve,
  ];
  mstrQuizQuestionOptionsM = [
    mstrQuizOptionOneM,
    mstrQuizOptionTwoM,
    mstrQuizOptionThreeM,
    mstrQuizOptionFourM,
    mstrQuizOptionFiveM,
    mstrQuizOptionSixM,
    mstrQuizOptionSevenM,
    mstrQuizOptionEightM,
    mstrQuizOptionNineM,
    mstrQuizOptionTenM,
    mstrQuizOptionElevenM,
    mstrQuizOptionTwelveM,
  ];
  scntQuizQuestionOptions = [
    scntQuizOptionOne,
    scntQuizOptionTwo,
    scntQuizOptionThree,
    scntQuizOptionFour,
    scntQuizOptionFive,
    scntQuizOptionSix,
    scntQuizOptionSeven,
    scntQuizOptionEight,
    scntQuizOptionNine,
    scntQuizOptionTen,
    scntQuizOptionEleven,
    scntQuizOptionTwelve,
  ];
  scntQuizQuestionOptionsM = [
    scntQuizOptionOneM,
    scntQuizOptionTwoM,
    scntQuizOptionThreeM,
    scntQuizOptionFourM,
    scntQuizOptionFiveM,
    scntQuizOptionSixM,
    scntQuizOptionSevenM,
    scntQuizOptionEightM,
    scntQuizOptionNineM,
    scntQuizOptionTenM,
    scntQuizOptionElevenM,
    scntQuizOptionTwelveM,
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

/* ******* BASE URL and ADM URL IS RECEIVED ***** */

// Generic re-useable functions

async function tryCatchClick(element, custommessage, custommessage2) {
  if (element !== '') {
    try {
      await t.click(await t.$(element));
      gauge.message(custommessage);
    } catch (error) {
      gauge.message(custommessage2);
    }
  }
}

/**
 * @description Connecting to the base URL by passing the expansion url.
 * @param {string} plat - plat should be pc or mob.
 * @param {url} expansionurl - It would be any url that concate with baseurl.
 */

async function goToThisUrl(siteDef, expansionurl) {
  if (expansionurl !== '') {
    await t.goto((await Helper.getBaseUrl(siteDef)) + expansionurl, {
      waitForEvents: ['DOMContentLoaded'],
    });
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

/**
 * @description It is used to scroll through the element that may be displayed on the page.
 * @param {var} element - The locator of the element.
 */

async function scrollToElement(element) {
  await t.evaluate(await t.$(element), (ele) => ele.scrollIntoView());
  await t.scrollUp(parseInt(CommonData.scrollUpVal, 10));
}

/**
 * @description It is used to scroll through the element that may be displayed on the page.
 * @param {var} element - The locator of the element.
 */

async function scrollAndClickBySelector(element) {
  await t.evaluate(await t.$(element), (ele) => ele.scrollIntoView());
  await t.scrollUp(parseInt(CommonData.scrollUpVal, 10));
  await t.evaluate(await t.$(element), (ele) => ele.click());
}

/**
 * @description It is used to scroll through the element that may be displayed on the page.
 * @param {var} element - Handles element objects returned from the .elements().
 */

async function scrollAndClickByElementObject(element) {
  await t.evaluate(element, (ele) => ele.scrollIntoView());
  await t.scrollUp(parseInt(CommonData.scrollUpVal, 10));
  await t.evaluate(element, (ele) => ele.click());
}

/**
 * @description Check if the element exists on the page and click on it if not return false.
 * @param {var} element - The locator of the element.
 * @param {string} custommessage - It would be a proper message depending on the scenario.
 */

async function verifyElementExistsAndClick(element, custommessage) {
  if (element !== '') {
    if (
      await (
        await t.$(element)
      ).exists(
        parseInt(CommonData.existsCheckFrequency, 10),
        parseInt(CommonData.existsWaitTime, 10)
      )
    ) {
      await scrollToElement(element);
      await t.evaluate(
        await t.$(element, { waitForEvents: ['targetNavigated'] }),
        (ele) => {
          ele.focus();
          ele.click();
        }
      );
      gauge.screenshot();
      assert(matchCondition);
      gauge.message(`${custommessage} exists and able to click`);
    } else {
      assert(
        !matchCondition,
        `${custommessage} doesn't exists within  10 seconds`
      );
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

/* *** Re-useable functions for Find Me scenarios ***** */

/**
 * @description It is used to check if the popup appear in Quiz page and closes it
 */

async function closeQuizPopUps() {
  if (firstQuizClosePopup !== '' || secondQuizClosePopup !== '') {
    await tryCatchClick(
      firstQuizClosePopup,
      messages.popupClose('First'),
      messages.popupNotDisplayed('First')
    );
    await tryCatchClick(
      secondQuizClosePopup,
      messages.popupClose('Second'),
      messages.popupNotDisplayed('Second')
    );
    await tryCatchClick(
      thirdQuizClosePopup,
      messages.popupClose('Third'),
      messages.popupNotDisplayed('Third')
    );
  }
}

/**
 * @description It is used to select Quiz options for each quesiton.
 */

async function isSameExistInViewCart(viewCartProduct, resProduct) {
  if (viewCartProduct !== null) {
    gauge.message(
      `Result page product: ${resProduct}, View cart product: ${viewCartProduct}`
    );
    if (resProduct.toLowerCase === viewCartProduct.toLowerCase) {
      assert(matchCondition);
      gauge.message(messages.isDisplayed('quiz result product', 'view cart'));
      gauge.screenshot();
    } else {
      gauge.message(messages.notDisplayed('quiz result product', 'view cart'));
      assert(!matchCondition);
    }
  } else {
    gauge.message(messages.notAvailable('products', 'view cart'));
    assert(!matchCondition);
  }
}

async function selectRandomOption(options) {
  const randomOptionIndex = Math.floor(Math.random() * options.length);
  const option = options[randomOptionIndex];
  return [option, randomOptionIndex];
}

async function autoAdvancedQuiz(
  quizOptions,
  questionLocator,
  resultsPageHeader
) {
  let questionText = '';
  let counter = 0;
  const options = await (await t.$(quizOptions)).elements();
  questionText = await (await t.$(questionLocator)).text();
  let selectedOption = await selectRandomOption(options);
  let option = selectedOption[0];
  let randomOptionIndex = selectedOption[1];
  await scrollAndClickByElementObject(option);

  try {
    await t.waitFor(await await t.$(questionLocator));
    while (
      (await (await t.$(questionLocator)).text()) === questionText &&
      counter < options.length
    ) {
      options.splice(randomOptionIndex, 1);
      selectedOption = await selectRandomOption(options);
      [option, randomOptionIndex] = selectedOption;
      await scrollAndClickByElementObject(option);
      await t.waitFor(parseInt(quizLoadingState, 10));
      counter += 1;
    }
  } catch (error) {
    if (await (await t.$(resultsPageHeader)).exists()) {
      assert(matchCondition);
      gauge.message(messages.quizConcluded);
      gauge.screenshot();
    } else if (await (await t.$(quizOptions)).exists()) {
      await scrollAndClickByElementObject(option);
    } else {
      gauge.message(messages.quizError);
      assert(!matchCondition);
    }
  }
}

async function nonAutoAdvancedQuiz(
  quizOptions,
  nextButton,
  resultButton,
  questionNumber,
  minQuestions
) {
  const options = await (await t.$(quizOptions)).elements();
  let selectedOption = await selectRandomOption(options);
  let option = selectedOption[0];
  let randomOptionIndex = selectedOption[1];
  let counter = 0;
  await scrollAndClickByElementObject(option);

  while (counter < options.length) {
    if (
      (await (await t.$(resultButton)).exists()) &&
      questionNumber >= minQuestions - 1
    ) {
      await scrollAndClickBySelector(resultButton);
      break;
    } else if (await (await t.$(nextButton)).exists()) {
      await scrollAndClickBySelector(nextButton);
      break;
    }
    options.splice(randomOptionIndex, 1);
    selectedOption = await selectRandomOption(options);
    [option, randomOptionIndex] = selectedOption;
    await scrollAndClickByElementObject(option);
    await t.waitFor(parseInt(quizLoadingState, 10));
    counter += 1;
  }
}

async function takeQuiz(
  quizOptions,
  quizSelections,
  maxQuestions,
  minQuestions,
  resultsPageHeader,
  questionText,
  nextButton,
  resultButton,
  dynamicOrder
) {
  if (quizOptions !== '' || quizSelections[0] !== '') {
    let nonEmptyQuizSelections;
    const parsedMaxQuestions = parseInt(maxQuestions, 10);
    const parsedMinQuestions = parseInt(minQuestions, 10);
    let quizChoices = '';

    if (quizSelections[0] !== '') {
      nonEmptyQuizSelections = quizSelections.filter(
        (selection) => selection !== 0
      );
    }

    for (let i = 0; i < parsedMaxQuestions; i += 1) {
      if (quizOptions !== '') {
        quizChoices = quizOptions;
      } else if (dynamicOrder !== '') {
        const dynamicOrderNumber = await (await t.$(dynamicOrder)).text();
        quizChoices =
          nonEmptyQuizSelections[parseInt(dynamicOrderNumber, 10) - 1];
      } else {
        quizChoices = nonEmptyQuizSelections[i];
      }

      await t.waitFor(await t.$(quizChoices));

      if (questionText !== '') {
        await autoAdvancedQuiz(quizChoices, questionText, resultsPageHeader);
      } else {
        await nonAutoAdvancedQuiz(
          quizChoices,
          nextButton,
          resultButton,
          i,
          parsedMinQuestions
        );
      }

      // for dynamic quizzes exist the loop if it results
      if (i >= parsedMinQuestions - 1) {
        if (await (await t.$(resultsPageHeader)).exists()) {
          assert(matchCondition);
          gauge.message(messages.quizConcluded);
          break;
        }
      }
    }
    gauge.screenshot();
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function launchQuizButton(launchBtn, quizType, genderOptions = '') {
  if (launchBtn !== '') {
    if (
      await (
        await t.$(launchBtn)
      ).exists(
        parseInt(CommonData.existsCheckFrequency, 10),
        parseInt(CommonData.existsWaitTime, 10)
      )
    ) {
      gauge.message(`${quizType} Landing page`);
      await scrollAndClickBySelector(launchBtn);
      assert(matchCondition);
    } else {
      gauge.message(messages.notOnPage('Landing'));
      assert(!matchCondition);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
  if (genderOptions !== '') {
    const genders = await (await t.$(genderOptions)).elements();
    const randomOptionIndex = Math.floor(Math.random() * genders.length);
    const gender = genders[randomOptionIndex];
    await scrollAndClickByElementObject(gender);
  }
}

async function verifyProductsResultsPage(
  resultsPageLocator,
  resProductLocator,
  resultsPageMobLocator,
  resProductMobLocator,
  plat
) {
  let resultsPage;
  let result;
  if (plat === 'PC') {
    resultsPage = resultsPageLocator;
    result = resProductLocator;
  } else {
    resultsPage = resultsPageMobLocator;
    result = resProductMobLocator;
  }

  if (resultsPage !== '') {
    if (
      await (
        await t.$(resultsPage)
      ).exists(
        parseInt(CommonData.existsCheckFrequency, 10),
        parseInt(CommonData.existsWaitTime, 10)
      )
    ) {
      if (
        await (
          await t.$(result)
        ).exists(
          parseInt(CommonData.existsCheckFrequency, 10),
          parseInt(CommonData.existsWaitTime, 10)
        )
      ) {
        assert(matchCondition);
        gauge.message(messages.isAvailable('products', 'results'));
        gauge.screenshot();
      } else {
        gauge.message(messages.notAvailable('products', 'results'));
        assert(!matchCondition);
      }
    } else {
      gauge.message(messages.notOnPage('Results'));
      assert(!matchCondition);
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function addToBagAndValidatCartOverlay(
  resProduct,
  quickshop,
  addToBag,
  cartPageLink,
  viewCartProduct
) {
  if (addToBag !== '' || quickshop !== '') {
    const resProductTitle = await (await t.$(resProduct)).text();
    if (await (await t.$(quickshop)).exists()) {
      await t.evaluate(await t.$(quickshop), (ele) => ele.click(), {
        waitForNavigation: false,
      });
      await t.waitFor(await await t.$(addToBag));
      await t.click(await t.$(addToBag));
    } else {
      await scrollAndClickBySelector(addToBag);
    }
    await verifyElementExistsAndClick(cartPageLink, 'Cart overlay');
    await scrollToElement(viewCartProduct);
    const viewCartProductTitle = await (await t.$(viewCartProduct)).text();
    await isSameExistInViewCart(viewCartProductTitle, resProductTitle);
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function inputValue(value, inputBox, nextButton = '') {
  if (inputBox !== '') {
    await t.write(value, t.into(await t.$(inputBox)));
    if (nextButton !== '') {
      await scrollAndClickBySelector(nextButton);
      gauge.screenshot();
    }
  } else {
    gauge.message(messages.stepNotApplicable);
  }
}

async function chooseCountryAndLanguage(country, language, submitbtn) {
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

/* ******* Step Implementation *********** */

step('FINDME Initialize Helix', async () => {
  // Initialize the selectors from DB
  await initFrameworkSettings();
});

step(
  'FINDME Configuring the prerequisites like set cookies, revision tag',
  async function () {
    await t.setConfig({ navigationTimeout: parseInt(timeoutSettings, 10) });
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

step('FINDME Mobile device emulation store', async function () {
  await t.emulateDevice(emulationDevice);
  gauge.message('Emulation device: ' + emulationDevice);
});

step('FINDME <quizType> QUIZ Go to finder page', async (quizType) => {
  switch (quizType.toLowerCase()) {
    case 'skincare':
      await goToThisUrl(siteDefinition, skinQuizUrl);
      await closeQuizPopUps();
      await chooseCountryAndLanguage(countryName, languageName, hubsiteSubmit);
      break;
    case 'foundation':
      await goToThisUrl(siteDefinition, fndnQuizUrl);
      await closeQuizPopUps();
      await chooseCountryAndLanguage(countryName, languageName, hubsiteSubmit);
      break;
    case 'hair':
      await goToThisUrl(siteDefinition, hairQuizUrl);
      await closeQuizPopUps();
      await chooseCountryAndLanguage(countryName, languageName, hubsiteSubmit);
      break;
    case 'moisturizer':
      await goToThisUrl(siteDefinition, mstrQuizUrl);
      await closeQuizPopUps();
      await chooseCountryAndLanguage(countryName, languageName, hubsiteSubmit);
      break;
    default:
      await goToThisUrl(siteDefinition, scntQuizUrl);
      await closeQuizPopUps();
      await chooseCountryAndLanguage(countryName, languageName, hubsiteSubmit);
      break;
  }
});

step('FINDME <quizType> QUIZ Validate quiz landing page', async (quizType) => {
  if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
    switch (quizType.toLowerCase()) {
      case 'skincare':
        await launchQuizButton(skinLaunchQuiz, quizType);
        break;
      case 'foundation':
        await launchQuizButton(fndnLaunchQuiz, quizType);
        break;
      case 'hair':
        await launchQuizButton(hairLaunchQuiz, quizType);
        break;
      case 'moisturizer':
        await launchQuizButton(mstrLaunchQuiz, quizType);
        break;
      default:
        await launchQuizButton(scntLaunchQuiz, quizType, scntGender);
        break;
    }
  } else {
    switch (quizType.toLowerCase()) {
      case 'skincare':
        await launchQuizButton(skinLaunchQuizM, quizType);
        break;
      case 'foundation':
        await launchQuizButton(fndnLaunchQuizM, quizType);
        break;
      case 'hair':
        await launchQuizButton(hairLaunchQuizM, quizType);
        break;
      case 'moisturizer':
        await launchQuizButton(mstrLaunchQuizM, quizType);
        break;
      default:
        await launchQuizButton(scntLaunchQuizM, quizType, scntGenderM);
        break;
    }
  }
});

step(
  'FINDME <QuizType> QUIZ Select options for finder quiz',
  async (quizType) => {
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      switch (quizType.toLowerCase()) {
        case 'skincare':
          await takeQuiz(
            skinQuizOptions,
            skinQuizQuestionOptions,
            skinMaxQuestions,
            skinMinQuestions,
            skinQuizResultHeader,
            skinQuestionText,
            skinNextBtn,
            skinSubmitBtn,
            skinDynamicOrder
          );
          break;
        case 'foundation':
          await takeQuiz(
            fndnQuizOptions,
            fndnQuizQuestionOptions,
            fndnMaxQuestions,
            fndnMinQuestions,
            fndnQuizResultHeader,
            fndnQuestionText,
            fndnNextBtn,
            fndnSubmitBtn,
            fndnDynamicOrder
          );
          break;
        case 'hair':
          await takeQuiz(
            hairQuizOptions,
            hairQuizQuestionOptions,
            hairMaxQuestions,
            hairMinQuestions,
            hairQuizResultHeader,
            hairQuestionText,
            hairNextBtn,
            hairSubmitBtn,
            hairDynamicOrder
          );
          break;
        case 'moisturizer':
          await takeQuiz(
            mstrQuizOptions,
            mstrQuizQuestionOptions,
            mstrMaxQuestions,
            mstrMinQuestions,
            mstrQuizResultHeader,
            mstrQuestionText,
            mstrNextBtn,
            mstrSubmitBtn,
            mstrDynamicOrder
          );
          break;
        default:
          await takeQuiz(
            scntQuizOptions,
            scntQuizQuestionOptions,
            scntMaxQuestions,
            scntMinQuestions,
            scntQuizResultHeader,
            scntQuestionText,
            scntNextBtn,
            scntSubmitBtn,
            scntDynamicOrder
          );
          break;
      }
    } else {
      switch (quizType.toLowerCase()) {
        case 'skincare':
          await takeQuiz(
            skinQuizOptionsM,
            skinQuizQuestionOptionsM,
            skinMaxQuestionsM,
            skinMinQuestionsM,
            skinQuizResultHeaderM,
            skinQuestionTextM,
            skinNextBtnM,
            skinSubmitBtnM,
            skinDynamicOrderM
          );
          break;
        case 'foundation':
          await takeQuiz(
            fndnQuizOptionsM,
            fndnQuizQuestionOptionsM,
            fndnMaxQuestionsM,
            fndnMinQuestionsM,
            fndnQuizResultHeaderM,
            fndnQuestionTextM,
            fndnNextBtnM,
            fndnSubmitBtnM,
            fndnDynamicOrderM
          );
          break;
        case 'hair':
          await takeQuiz(
            hairQuizOptionsM,
            hairQuizQuestionOptionsM,
            hairMaxQuestionsM,
            hairMinQuestionsM,
            hairQuizResultHeaderM,
            hairQuestionTextM,
            hairNextBtnM,
            hairSubmitBtnM,
            hairDynamicOrderM
          );
          break;
        case 'moisturizer':
          await takeQuiz(
            mstrQuizOptionsM,
            mstrQuizQuestionOptionsM,
            mstrMaxQuestionsM,
            mstrMinQuestionsM,
            mstrQuizResultHeaderM,
            mstrQuestionTextM,
            mstrNextBtnM,
            mstrSubmitBtnM,
            mstrDynamicOrderM
          );
          break;
        default:
          await takeQuiz(
            scntQuizOptionsM,
            scntQuizQuestionOptionsM,
            scntMaxQuestionsM,
            scntMinQuestionsM,
            scntQuizResultHeaderM,
            scntQuestionTextM,
            scntNextBtnM,
            scntSubmitBtnM,
            scntDynamicOrderM
          );
          break;
      }
    }
  }
);

step(
  'FINDME <quizType> QUIZ Verify if results are displayed on quiz results page',
  async (quizType) => {
    const {
      executionContext: { platform },
    } = siteDefinition;
    switch (quizType.toLowerCase()) {
      case 'skincare':
        await verifyProductsResultsPage(
          skinResultPage,
          skinResProdGrid,
          skinResultPageM,
          skinResProdGridM,
          platform
        );
        break;
      case 'foundation':
        await verifyProductsResultsPage(
          fndnResultPage,
          fndnResProdGrid,
          fndnResultPageM,
          fndnResProdGridM,
          platform
        );
        break;
      case 'hair':
        await verifyProductsResultsPage(
          hairResultPage,
          hairResProdGrid,
          hairResultPageM,
          hairResProdGridM,
          platform
        );
        break;
      case 'moisturizer':
        await verifyProductsResultsPage(
          mstrResultPage,
          mstrResProdGrid,
          mstrResultPageM,
          mstrResProdGridM,
          platform
        );
        break;
      default:
        await verifyProductsResultsPage(
          scntResultPage,
          scntResProdGrid,
          scntResultPageM,
          scntResProdGridM,
          platform
        );
        break;
    }
  }
);

step(
  'FINDME <quizType> QUIZ Add a product to Cart from quiz results page and validate in viewcart',
  async (quizType) => {
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      switch (quizType.toLowerCase()) {
        case 'skincare':
          await addToBagAndValidatCartOverlay(
            skinResProdName,
            resQuickShop,
            resAddToBag,
            resCartLink,
            skinViewCartProdName
          );
          break;
        case 'foundation':
          await addToBagAndValidatCartOverlay(
            fndnResProdName,
            resQuickShop,
            resAddToBag,
            resCartLink,
            fndnViewCartProdName
          );
          break;
        case 'hair':
          await addToBagAndValidatCartOverlay(
            hairResProdName,
            resQuickShop,
            resAddToBag,
            resCartLink,
            hairViewCartProdName
          );
          break;
        case 'moisturizer':
          await addToBagAndValidatCartOverlay(
            mstrResProdName,
            resQuickShop,
            resAddToBag,
            resCartLink,
            mstrViewCartProdName
          );
          break;
        default:
          await addToBagAndValidatCartOverlay(
            scntResProdName,
            resQuickShop,
            resAddToBag,
            resCartLink,
            scntViewCartProdName
          );
          break;
      }
    } else {
      switch (quizType.toLowerCase()) {
        case 'skincare':
          await addToBagAndValidatCartOverlay(
            skinResProdNameM,
            resQuickShopM,
            resAddToBagM,
            resCartLinkM,
            skinViewCartProdNameM
          );
          break;
        case 'foundation':
          await addToBagAndValidatCartOverlay(
            fndnResProdNameM,
            resQuickShopM,
            resAddToBagM,
            resCartLinkM,
            fndnViewCartProdNameM
          );
          break;
        case 'hair':
          await addToBagAndValidatCartOverlay(
            hairResProdNameM,
            resQuickShopM,
            resAddToBagM,
            resCartLinkM,
            hairViewCartProdNameM
          );
          break;
        case 'moisturizer':
          await addToBagAndValidatCartOverlay(
            mstrResProdNameM,
            resQuickShopM,
            resAddToBagM,
            resCartLinkM,
            mstrViewCartProdNameM
          );
          break;
        default:
          await addToBagAndValidatCartOverlay(
            scntResProdNameM,
            resQuickShopM,
            resAddToBagM,
            resCartLinkM,
            scntViewCartProdNameM
          );
          break;
      }
    }
  }
);

step(
  'FINDME <quizType> QUIZ Click on Start Over to Re-take the quiz',
  async (quizType) => {
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      switch (quizType.toLowerCase()) {
        case 'skincare':
          await verifyElementExistsAndClick(skinRetakeQuiz, 'Start over');
          if (
            await (
              await t.$(skinLaunchQuiz)
            ).exists(
              parseInt(CommonData.existsCheckFrequency, 10),
              parseInt(CommonData.existsWaitTime, 10)
            )
          ) {
            await launchQuizButton(skinLaunchQuiz, quizType);
          }
          break;
        case 'foundation':
          await verifyElementExistsAndClick(fndnRetakeQuiz, 'Start over');
          if (
            await (
              await t.$(fndnLaunchQuiz)
            ).exists(
              parseInt(CommonData.existsCheckFrequency, 10),
              parseInt(CommonData.existsWaitTime, 10)
            )
          ) {
            await launchQuizButton(fndnLaunchQuiz, quizType);
          }
          break;
        case 'hair':
          await verifyElementExistsAndClick(hairRetakeQuiz, 'Start over');
          if (
            await (
              await t.$(hairLaunchQuiz)
            ).exists(
              parseInt(CommonData.existsCheckFrequency, 10),
              parseInt(CommonData.existsWaitTime, 10)
            )
          ) {
            await launchQuizButton(hairLaunchQuiz, quizType);
          }
          break;
        case 'moisturizer':
          await verifyElementExistsAndClick(mstrRetakeQuiz, 'Start over');
          if (
            await (
              await t.$(mstrLaunchQuiz)
            ).exists(
              parseInt(CommonData.existsCheckFrequency, 10),
              parseInt(CommonData.existsWaitTime, 10)
            )
          ) {
            await launchQuizButton(mstrLaunchQuiz, quizType);
          }
          break;
        default:
          await verifyElementExistsAndClick(scntRetakeQuiz, 'Start over');
          if (
            await (
              await t.$(scntLaunchQuiz)
            ).exists(
              parseInt(CommonData.existsCheckFrequency, 10),
              parseInt(CommonData.existsWaitTime, 10)
            )
          ) {
            await launchQuizButton(scntLaunchQuiz, quizType, scntGender);
          }
          break;
      }
    } else {
      switch (quizType.toLowerCase()) {
        case 'skincare':
          await verifyElementExistsAndClick(skinRetakeQuizM, 'Start over');
          if (
            await (
              await t.$(skinLaunchQuizM)
            ).exists(
              parseInt(CommonData.existsCheckFrequency, 10),
              parseInt(CommonData.existsWaitTime, 10)
            )
          ) {
            await launchQuizButton(skinLaunchQuizM, quizType);
          }
          break;
        case 'foundation':
          await verifyElementExistsAndClick(fndnRetakeQuizM, 'Start over');
          if (
            await (
              await t.$(fndnLaunchQuizM)
            ).exists(
              parseInt(CommonData.existsCheckFrequency, 10),
              parseInt(CommonData.existsWaitTime, 10)
            )
          ) {
            await launchQuizButton(fndnLaunchQuizM, quizType);
          }
          break;
        case 'hair':
          await verifyElementExistsAndClick(hairRetakeQuizM, 'Start over');
          if (
            await (
              await t.$(hairLaunchQuizM)
            ).exists(
              parseInt(CommonData.existsCheckFrequency, 10),
              parseInt(CommonData.existsWaitTime, 10)
            )
          ) {
            await launchQuizButton(hairLaunchQuizM, quizType);
          }
          break;
        case 'moisturizer':
          await verifyElementExistsAndClick(mstrRetakeQuizM, 'Start over');
          if (
            await (
              await t.$(mstrLaunchQuizM)
            ).exists(
              parseInt(CommonData.existsCheckFrequency, 10),
              parseInt(CommonData.existsWaitTime, 10)
            )
          ) {
            await launchQuizButton(mstrLaunchQuizM, quizType);
          }
          break;
        default:
          await verifyElementExistsAndClick(scntRetakeQuizM, 'Start over');
          if (
            await (
              await t.$(scntLaunchQuizM)
            ).exists(
              parseInt(CommonData.existsCheckFrequency, 10),
              parseInt(CommonData.existsWaitTime, 10)
            )
          ) {
            await launchQuizButton(scntLaunchQuizM, quizType, scntGender);
          }
          break;
      }
    }
  }
);

step(
  'FINDME <quizType> QUIZ Enter email to save quiz results',
  async (quizType) => {
    if (siteDefinition.executionContext.platform.toUpperCase() === 'PC') {
      switch (quizType.toLowerCase()) {
        case 'skincare':
          await inputValue(
            CommonData.emailAddress,
            skinEmailInputPath,
            skinNextBtn
          );
          break;
        case 'foundation':
          await inputValue(
            CommonData.emailAddress,
            fndnEmailInputPath,
            fndnNextBtn
          );
          break;
        case 'hair':
          await inputValue(
            CommonData.emailAddress,
            hairEmailInputPath,
            hairNextBtn
          );
          break;
        case 'moisturizer':
          await inputValue(
            CommonData.emailAddress,
            mstrEmailInputPath,
            mstrNextBtn
          );
          break;
        default:
          await inputValue(
            CommonData.emailAddress,
            scentInputEmailPath,
            scntNextBtn
          );
          break;
      }
    } else {
      switch (quizType.toLowerCase()) {
        case 'skincare':
          await inputValue(
            CommonData.emailAddress,
            skinEmailInputPathM,
            skinNextBtnM
          );
          break;
        case 'foundation':
          await inputValue(
            CommonData.emailAddress,
            fndnEmailInputPathM,
            fndnNextBtnM
          );
          break;
        case 'hair':
          await inputValue(
            CommonData.emailAddress,
            hairEmailInputPathM,
            hairNextBtnM
          );
          break;
        case 'moisturizer':
          await inputValue(
            CommonData.emailAddress,
            mstrEmailInputPathM,
            mstrNextBtnM
          );
          break;
        default:
          await inputValue(
            CommonData.emailAddress,
            scntEmailInputPathM,
            scntNextBtnM
          );
          break;
      }
    }
  }
);
