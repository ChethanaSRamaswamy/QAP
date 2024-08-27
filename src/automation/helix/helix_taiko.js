const AutoHeal = require('../../plugins/self_heal');

const overridenApis = ['$', 'evaluate'];

const override1 = async (
  t,
  inclusivityFields,
  isDiscovery = false,
  isHeal = false
) => {
  let tmpDollar = t['$'];
  let tmpEval = t['evaluate'];

  // TODO: isDiscovery = true and isHeal = true should not be enabled
  // TODO: $ and evaluate APIs are must, add a condition

  overridenApis.forEach(async (api) => {
    let value = t[api];
    switch (api) {
      case '$':
        t[api] = await taikoDollar(
          value,
          tmpEval,
          inclusivityFields.brandLocale,
          isDiscovery,
          inclusivityFields.feature
        );
        break;
      case 'evaluate':
        t[api] = await taikoEvaluate(
          value,
          tmpDollar,
          isHeal,
          inclusivityFields.brandLocale,
          inclusivityFields.feature
        );
        break;
    }
  });

  return t;
};

const override = async (
  taikoApis,
  inclusivityFields,
  isDiscovery = false,
  isHeal = false
) => {
  let newTaikoApis = {};
  let tmpDollar = taikoApis['$'];
  let tmpEval = taikoApis['evaluate'];

  // TODO: isDiscovery = true and isHeal = true should not be enabled
  // TODO: $ and evaluate APIs are must, add a condition
  for (const [key, value] of Object.entries(taikoApis)) {
    switch (key) {
      case '$':
        newTaikoApis['$'] = await taikoDollar(
          value,
          tmpEval,
          inclusivityFields.brandLocale,
          isDiscovery,
          inclusivityFields.feature
        );
        break;
      case 'evaluate':
        newTaikoApis['evaluate'] = await taikoEvaluate(
          value,
          tmpDollar,
          isHeal,
          inclusivityFields.brandLocale,
          inclusivityFields.feature
        );
        break;
    }
  }

  return newTaikoApis;
};

// Overriding taiko into API
const taikoInto = async (into, $, evaluate, doHeal, brandLocale, feature) => {
  let taiko_into = into;

  return async function () {
    if (
      !doHeal ||
      (arguments[0] && typeof arguments[0].selector === 'undefined')
    ) {
      // No healing - healing is disabled
      // Don't do healing
      return await taiko_into.apply(this, arguments);
    }

    let selector = arguments[0].selector?.label;
    let retVal;

    try {
      retVal = await taiko_into.apply(this, arguments);
    } catch (e) {
      arguments[0] = await handleException(
        e,
        $,
        evaluate,
        selector,
        brandLocale,
        feature,
        arguments[0]
      );

      retVal = await taiko_into.apply(this, arguments);
      console.log(
        `Missing locator ${selector} in ${brandLocale} was successfully healed`
      );
    }
    return retVal;
  };
};

// Overriding taiko scrollTo API
const taikoScrollTo = async function (
  scrollTo,
  $,
  evaluate,
  doHeal,
  brandLocale,
  feature
) {
  let taiko_scrollTo = scrollTo;

  return async function () {
    if (
      !doHeal ||
      (arguments[0] && typeof arguments[0].selector === 'undefined')
    ) {
      return await taiko_scrollTo.apply(this, arguments);
    }

    let selector = arguments[0].selector?.label;
    let retVal;

    try {
      retVal = await taiko_scrollTo.apply(this, arguments);
    } catch (e) {
      arguments[0] = await handleException(
        e,
        $,
        evaluate,
        selector,
        brandLocale,
        feature,
        arguments[0]
      );

      retVal = await taiko_scrollTo.apply(this, arguments);
      console.log(
        `Missing locator ${selector} in ${brandLocale} was successfully healed`
      );
    }
    return retVal;
  };
};

// Overriding taiko highlight API
const taikoHighlight = async function (
  highlight,
  $,
  evaluate,
  doHeal,
  brandLocale,
  feature
) {
  let taiko_highlight = highlight;

  return async function () {
    if (
      !doHeal ||
      (arguments[0] && typeof arguments[0].selector === 'undefined')
    ) {
      return await taiko_highlight.apply(this, arguments);
    }

    let selector = arguments[0].selector?.label;
    let retVal;

    try {
      retVal = await taiko_highlight.apply(this, arguments);
    } catch (e) {
      arguments[0] = await handleException(
        e,
        $,
        evaluate,
        selector,
        brandLocale,
        feature,
        arguments[0]
      );

      retVal = await taiko_highlight.apply(this, arguments);
      console.log(
        `Missing locator ${selector} in ${brandLocale} was successfully healed`
      );
    }
    return retVal;
  };
};

// Overriding taiko clear API
const taikoClear = async function (
  clear,
  $,
  evaluate,
  doHeal,
  brandLocale,
  feature
) {
  let taiko_clear = clear;

  return async function () {
    if (
      !doHeal ||
      (arguments[0] && typeof arguments[0].selector === 'undefined')
    ) {
      return await taiko_clear.apply(this, arguments);
    }

    let selector = arguments[0].selector?.label;
    let retVal;

    try {
      retVal = await taiko_clear.apply(this, arguments);
    } catch (e) {
      arguments[0] = await handleException(
        e,
        $,
        evaluate,
        selector,
        brandLocale,
        feature,
        arguments[0]
      );

      retVal = await taiko_clear.apply(this, arguments);
      console.log(
        `Missing locator ${selector} in ${brandLocale} was successfully healed`
      );
    }
    return retVal;
  };
};

// Overriding taiko focus API
const taikoFocus = async function (
  focus,
  $,
  evaluate,
  doHeal,
  brandLocale,
  feature
) {
  let taiko_focus = focus;

  return async function () {
    if (
      !doHeal ||
      (arguments[0] && typeof arguments[0].selector === 'undefined')
    ) {
      return await taiko_focus.apply(this, arguments);
    }

    let selector = arguments[0].selector?.label;
    let retVal;

    try {
      retVal = await taiko_focus.apply(this, arguments);
    } catch (e) {
      arguments[0] = await handleException(
        e,
        $,
        evaluate,
        selector,
        brandLocale,
        feature,
        arguments[0]
      );

      retVal = await taiko_focus.apply(this, arguments);
      console.log(
        `Missing locator ${selector} in ${brandLocale} was successfully healed`
      );
    }
    return retVal;
  };
};

// Overriding taiko hover API
const taikoHover = async function (
  hover,
  $,
  evaluate,
  doHeal,
  brandLocale,
  feature
) {
  let taiko_hover = hover;

  return async function () {
    // No healing - healing is disabled
    // Don't do healing if selector is not set
    if (
      !doHeal ||
      (arguments[0] && typeof arguments[0].selector === 'undefined')
    ) {
      return await taiko_hover.apply(this, arguments);
    }

    let selector = arguments[0].selector?.label;
    let retVal;

    try {
      retVal = await taiko_hover.apply(this, arguments);
    } catch (e) {
      arguments[0] = await handleException(
        e,
        $,
        evaluate,
        selector,
        brandLocale,
        feature,
        arguments[0]
      );

      retVal = await taiko_hover.apply(this, arguments);
      console.log(
        `Missing locator ${selector} in ${brandLocale} was successfully healed`
      );
    }
    return retVal;
  };
};

// Overriding taiko click API
const taikoClick = async function (
  click,
  $,
  evaluate,
  doHeal,
  brandLocale,
  feature
) {
  let taiko_click = click;

  return async function () {
    // No healing - healing is disabled
    // Don't do healing if selector is not set
    if (
      !doHeal ||
      (arguments[0] && typeof arguments[0].selector === 'undefined')
    ) {
      return await taiko_click.apply(this, arguments);
    }

    let selector = arguments[0].selector?.label;
    let retVal;

    try {
      retVal = await taiko_click.apply(this, arguments);
    } catch (e) {
      arguments[0] = await handleException(
        e,
        $,
        evaluate,
        selector,
        brandLocale,
        feature,
        arguments[0]
      );

      retVal = await taiko_click.apply(this, arguments);
      console.log(
        `Missing locator ${selector} in ${brandLocale} was successfully healed`
      );
    }
    return retVal;
  };
};

// Overriding taiko write API
const taikoWrite = async function (
  write,
  $,
  evaluate,
  doHeal,
  brandLocale,
  feature
) {
  let taiko_write = write;

  return async function () {
    if (
      !doHeal ||
      (arguments[1] && typeof arguments[1].selector === 'undefined')
    ) {
      // No healing - healing is disabled
      // Don't do healing
      return await taiko_write.apply(this, arguments);
    }

    let selector = arguments[1].selector?.label;
    let retVal;

    try {
      retVal = await taiko_write.apply(this, arguments);
    } catch (e) {
      arguments[1] = await handleException(
        e,
        $,
        evaluate,
        selector,
        brandLocale,
        feature,
        arguments[1]
      );

      retVal = await taiko_write.apply(this, arguments);
      console.log(
        `Missing locator ${selector} in ${brandLocale} was successfully healed`
      );
    }
    return retVal;
  };
};

// Overriding taiko evaluate API
const taikoEvaluate = async (evaluate, $, doHeal, brandLocale, feature) => {
  let taiko_evaluate = evaluate;

  return async function () {
    if (
      !doHeal ||
      (arguments[0] && typeof arguments[0].selector === 'undefined')
    ) {
      // No healing - healing is disabled
      // Don't do healing
      return await taiko_evaluate.apply(this, arguments);
    }

    let selector = arguments[0].selector?.label;
    let retVal;

    try {
      retVal = await taiko_evaluate.apply(this, arguments);
    } catch (e) {
      arguments[0] = await handleException(
        e,
        $,
        evaluate,
        selector,
        brandLocale,
        feature,
        arguments[0]
      );

      retVal = await taiko_evaluate.apply(this, arguments);
      console.log(
        `Missing locator ${selector} in ${brandLocale} was successfully healed`
      );
      // TODO: Log the healing details. Create a table for it
    }
    return retVal;
  };
};

// Overriding taiko $ API
const taikoDollar = ($, evaluate, brandLocale, isDiscovery, feature) => {
  let taiko_dollar = $;

  $ = async function () {
    let selector = arguments[0];
    let duplicateSelectors = null;

    if (selector === '') {
      // console.log(`${brandLocale} has an empty selector value`);
    }
    if (!isDiscovery || selector === '') {
      // Data gathering is not required
      return await taiko_dollar.apply(this, arguments);
    }

    // If the selector has duplicate entries then try to gather the metadata to
    // find the right locator entry using the additional information in arguments
    if (
      arguments[1] !== undefined &&
      arguments[1].hasOwnProperty('hasDuplicate')
    ) {
      for (const [key, value] of Object.entries(arguments[1])) {
        if (key === 'hasDuplicate') {
          // console.log(`${key}: ${value}`);
          duplicateSelectors = value;
        }
      }
    }

    await extractFamilyTree(
      selector,
      duplicateSelectors,
      evaluate,
      brandLocale,
      feature,
      taiko_dollar
    );

    return await taiko_dollar.apply(this, arguments);
  };

  return $;
};

// Overriding taiko link API
const taikoLink = (link, $, evaluate, brandLocale, feature, isDiscovery) => {
  let taiko_link = link;

  link = async function () {
    let selector = arguments[0];
    let duplicateSelectors = null;

    if (selector === '') {
      //  console.log(`${brandLocale} has an empty selector value`);
    }
    if (!isDiscovery || selector === '') {
      // Data gathering is not required
      return await taiko_link.apply(this, arguments);
    }

    // If the selector has duplicate entries then try to gather the metadata to
    // find the right locator entry using the additional information in arguments
    if (
      arguments[1] !== undefined &&
      arguments[1].hasOwnProperty('hasDuplicate')
    ) {
      for (const [key, value] of Object.entries(arguments[1])) {
        if (key === 'hasDuplicate') {
          // console.log(`${key}: ${value}`);
          duplicateSelectors = value;
        }
      }
    }

    await extractFamilyTree(
      selector,
      duplicateSelectors,
      evaluate,
      brandLocale,
      feature,
      $
    );

    return await taiko_link.apply(this, arguments);
  };

  return link;
};

// Overriding taiko text API
const taikoText = (text, $, evaluate, brandLocale, feature, isDiscovery) => {
  let taiko_text = text;

  text = async function () {
    let selector = arguments[0];
    let duplicateSelectors = null;

    if (selector === '') {
      //   console.log(`${brandLocale} has an empty selector value`);
    }
    if (!isDiscovery || selector === '') {
      // Data gathering is not required
      return await taiko_text.apply(this, arguments);
    }

    // If the selector has duplicate entries then try to gather the metadata to
    // find the right locator entry using the additional information in arguments
    if (
      arguments[1] !== undefined &&
      arguments[1].hasOwnProperty('hasDuplicate')
    ) {
      for (const [key, value] of Object.entries(arguments[1])) {
        if (key === 'hasDuplicate') {
          // console.log(`${key}: ${value}`);
          duplicateSelectors = value;
        }
      }
    }

    await extractFamilyTree(
      selector,
      duplicateSelectors,
      evaluate,
      brandLocale,
      feature,
      $
    );

    return await taiko_text.apply(this, arguments);
  };

  return text;
};

// Overriding taiko textbox API
const taikoTextBox = (
  textBox,
  $,
  evaluate,
  brandLocale,
  feature,
  isDiscovery
) => {
  let taiko_textBox = textBox;

  textBox = async function () {
    let selector = arguments[0];
    let duplicateSelectors = null;

    if (selector === '') {
      //  console.log(`${brandLocale} has an empty selector value`);
    }
    if (!isDiscovery || selector === '') {
      // Data gathering is not required
      return await taiko_textBox.apply(this, arguments);
    }

    // If the selector has duplicate entries then try to gather the metadata to
    // find the right locator entry using the additional information in arguments
    if (
      arguments[1] !== undefined &&
      arguments[1].hasOwnProperty('hasDuplicate')
    ) {
      for (const [key, value] of Object.entries(arguments[1])) {
        if (key === 'hasDuplicate') {
          // console.log(`${key}: ${value}`);
          duplicateSelectors = value;
        }
      }
    }

    await extractFamilyTree(
      selector,
      duplicateSelectors,
      evaluate,
      brandLocale,
      feature,
      $
    );

    return await taiko_textBox.apply(this, arguments);
  };

  return textBox;
};

// Overriding taiko button API
const taikoButton = (
  button,
  $,
  evaluate,
  brandLocale,
  feature,
  isDiscovery
) => {
  let taiko_button = button;

  button = async function () {
    let selector = arguments[0];
    let duplicateSelectors = null;

    if (selector === '') {
      //  console.log(`${brandLocale} has an empty selector value`);
    }
    if (!isDiscovery || selector === '') {
      // Data gathering is not required
      return await taiko_button.apply(this, arguments);
    }

    // If the selector has duplicate entries then try to gather the metadata to
    // find the right locator entry using the additional information in arguments
    if (
      arguments[1] !== undefined &&
      arguments[1].hasOwnProperty('hasDuplicate')
    ) {
      for (const [key, value] of Object.entries(arguments[1])) {
        if (key === 'hasDuplicate') {
          // console.log(`${key}: ${value}`);
          duplicateSelectors = value;
        }
      }
    }

    await extractFamilyTree(
      selector,
      duplicateSelectors,
      evaluate,
      brandLocale,
      feature,
      $
    );

    return await taiko_button.apply(this, arguments);
  };

  return button;
};

// Overriding taiko dropdown API
const taikoDropDown = (
  dropDown,
  $,
  evaluate,
  brandLocale,
  feature,
  isDiscovery
) => {
  let taiko_dropDown = dropDown;

  dropDown = async function () {
    let selector = arguments[0];
    let duplicateSelectors = null;

    if (selector === '') {
      //  console.log(`${brandLocale} has an empty selector value`);
    }
    if (!isDiscovery || selector === '') {
      // Data gathering is not required
      return await taiko_dropDown.apply(this, arguments);
    }

    // If the selector has duplicate entries then try to gather the metadata to
    // find the right locator entry using the additional information in arguments
    if (
      arguments[1] !== undefined &&
      arguments[1].hasOwnProperty('hasDuplicate')
    ) {
      for (const [key, value] of Object.entries(arguments[1])) {
        if (key === 'hasDuplicate') {
          // console.log(`${key}: ${value}`);
          duplicateSelectors = value;
        }
      }
    }

    await extractFamilyTree(
      selector,
      duplicateSelectors,
      evaluate,
      brandLocale,
      feature,
      $
    );

    return await taiko_dropDown.apply(this, arguments);
  };

  return dropDown;
};

// Overriding taiko checkBox API
const taikoCheckBox = (
  checkBox,
  $,
  evaluate,
  brandLocale,
  feature,
  isDiscovery
) => {
  let taiko_checkBox = checkBox;

  checkBox = async function () {
    let selector = arguments[0];
    let duplicateSelectors = null;

    if (selector === '') {
      //  console.log(`${brandLocale} has an empty selector value`);
    }
    if (!isDiscovery || selector === '') {
      // Data gathering is not required
      return await taiko_checkBox.apply(this, arguments);
    }

    // If the selector has duplicate entries then try to gather the metadata to
    // find the right locator entry using the additional information in arguments
    if (
      arguments[1] !== undefined &&
      arguments[1].hasOwnProperty('hasDuplicate')
    ) {
      for (const [key, value] of Object.entries(arguments[1])) {
        if (key === 'hasDuplicate') {
          // console.log(`${key}: ${value}`);
          duplicateSelectors = value;
        }
      }
    }

    await extractFamilyTree(
      selector,
      duplicateSelectors,
      evaluate,
      brandLocale,
      feature,
      $
    );

    return await taiko_checkBox.apply(this, arguments);
  };

  return checkBox;
};

// Overriding taiko radioButton API
const taikoRadioButton = (
  radioButton,
  $,
  evaluate,
  brandLocale,
  feature,
  isDiscovery
) => {
  let taiko_radioButton = radioButton;

  radioButton = async function () {
    let selector = arguments[0];
    let duplicateSelectors = null;

    if (selector === '') {
      //  console.log(`${brandLocale} has an empty selector value`);
    }
    if (!isDiscovery || selector === '') {
      // Data gathering is not required
      return await taiko_radioButton.apply(this, arguments);
    }

    // If the selector has duplicate entries then try to gather the metadata to
    // find the right locator entry using the additional information in arguments
    if (
      arguments[1] !== undefined &&
      arguments[1].hasOwnProperty('hasDuplicate')
    ) {
      for (const [key, value] of Object.entries(arguments[1])) {
        if (key === 'hasDuplicate') {
          // console.log(`${key}: ${value}`);
          duplicateSelectors = value;
        }
      }
    }

    await extractFamilyTree(
      selector,
      duplicateSelectors,
      evaluate,
      brandLocale,
      feature,
      $
    );

    return await taiko_radioButton.apply(this, arguments);
  };

  return radioButton;
};

// Overriding taiko listItem API
const taikoListItem = (
  listItem,
  $,
  evaluate,
  brandLocale,
  feature,
  isDiscovery
) => {
  let taiko_listItem = listItem;

  listItem = async function () {
    let selector = arguments[0];
    let duplicateSelectors = null;

    if (selector === '') {
      //  console.log(`${brandLocale} has an empty selector value`);
    }
    if (!isDiscovery || selector === '') {
      // Data gathering is not required
      return await taiko_listItem.apply(this, arguments);
    }

    // If the selector has duplicate entries then try to gather the metadata to
    // find the right locator entry using the additional information in arguments
    if (
      arguments[1] !== undefined &&
      arguments[1].hasOwnProperty('hasDuplicate')
    ) {
      for (const [key, value] of Object.entries(arguments[1])) {
        if (key === 'hasDuplicate') {
          // console.log(`${key}: ${value}`);
          duplicateSelectors = value;
        }
      }
    }

    await extractFamilyTree(
      selector,
      duplicateSelectors,
      evaluate,
      brandLocale,
      feature,
      $
    );

    return await taiko_listItem.apply(this, arguments);
  };

  return listItem;
};

// Overriding taiko below API
const taikoBelow = (below, $, evaluate, brandLocale, isDiscovery, feature) => {
  let taiko_below = below;

  below = async function () {
    let selector = arguments[0];
    let duplicateSelectors = null;

    if (selector === '') {
      //  console.log(`below{brandLocale} has an empty selector value`);
    }
    if (!isDiscovery || selector === '') {
      // Data gathering is not required
      return await taiko_below.apply(this, arguments);
    }

    // If the selector has duplicate entries then try to gather the metadata to
    // find the right locator entry using the additional information in arguments
    if (
      arguments[1] !== undefined &&
      arguments[1].hasOwnProperty('hasDuplicate')
    ) {
      for (const [key, value] of Object.entries(arguments[1])) {
        if (key === 'hasDuplicate') {
          // console.log(`below{key}: below{value}`);
          duplicateSelectors = value;
        }
      }
    }

    await extractFamilyTree(
      selector,
      duplicateSelectors,
      evaluate,
      brandLocale,
      feature,
      $
    );

    return await taiko_below.apply(this, arguments);
  };

  return below;
};

// Overriding taiko above API
const taikoAbove = (above, $, evaluate, brandLocale, isDiscovery, feature) => {
  let taiko_above = above;

  above = async function () {
    let selector = arguments[0];
    let duplicateSelectors = null;

    if (selector === '') {
      //  console.log(`above{brandLocale} has an empty selector value`);
    }
    if (!isDiscovery || selector === '') {
      // Data gathering is not required
      return await taiko_above.apply(this, arguments);
    }

    // If the selector has duplicate entries then try to gather the metadata to
    // find the right locator entry using the additional information in arguments
    if (
      arguments[1] !== undefined &&
      arguments[1].hasOwnProperty('hasDuplicate')
    ) {
      for (const [key, value] of Object.entries(arguments[1])) {
        if (key === 'hasDuplicate') {
          // console.log(`above{key}: above{value}`);
          duplicateSelectors = value;
        }
      }
    }

    await extractFamilyTree(
      selector,
      duplicateSelectors,
      evaluate,
      brandLocale,
      feature,
      $
    );

    return await taiko_above.apply(this, arguments);
  };

  return above;
};

module.exports = {
  override1,
  override,
  taikoDollar,
  taikoEvaluate,
  taikoWrite,
  taikoClick,
  taikoHover,
  taikoFocus,
  taikoClear,
  taikoHighlight,
  taikoScrollTo,
  taikoLink,
  taikoText,
  taikoTextBox,
  taikoButton,
  taikoDropDown,
  taikoCheckBox,
  taikoRadioButton,
  taikoListItem,
  taikoInto,
  taikoAbove,
  taikoBelow,
};

// TODO: Harden this function to generate a proper xpath for
// all the possible inputs and update it back to DB
function generateXPath(attributes) {
  // data-heal attribute is used to generate the temp xPath
  // Refer the comment in gatherAttributes function in DOM search
  var parts = attributes.split('|');
  var xpath = '//';
  for (var i = 0; i < parts.length; i++) {
    var keyValue = parts[i].split(':');
    var attr = keyValue[0];
    var value = keyValue[1];
    if (attr === '' || value === '' || attr === 'innerText') {
      continue;
    }
    if (i === 0) {
      xpath += value;
    } else if (attr === 'data-heal') {
      xpath += '[@' + attr + "='" + value + "']";
    }
    /*
    else if (attr === 'innerText') {       
      xpath += "[text()='" + value + "']";
    } else {
      xpath += '[@' + attr + "='" + value + "']";
    }

    */
  }
  return xpath;
}

const extractFamilyTree = async (
  selector,
  duplicateSelectors,
  evaluate,
  brandLocale,
  feature,
  $
) => {
  //

  await AutoHeal.gatherElementMetadata(
    selector,
    duplicateSelectors,
    evaluate,
    brandLocale,
    feature,
    $
  );
};

// TODO: Better move this method to self_heal.js
const healMe = async ($, evaluate, selector, brandLocale, feature) => {
  const { performance } = require('perf_hooks');
  const start = performance.now();

  // Attempting to find the element with self healing data
  console.log(
    `Got a selector not found exception for ${selector} in ${brandLocale}, and attempting self healing`
  );

  let missingSelector = await AutoHeal.locateMissingSelector(
    $,
    evaluate,
    selector,
    brandLocale,
    feature
  );

  // Healing failed
  if (!missingSelector.found) {
    console.log(
      `BrandLocale: ${brandLocale}, Selector: ${selector}, Healing failed: ${missingSelector.message}`
    );
    return '';
  }

  let newSelector = generateXPath(missingSelector.pElement);
  const end = performance.now();

  console.log(
    `BrandLocale: ${brandLocale}, Selector: ${selector}, ${
      missingSelector.message
    }, and here it is : ${newSelector}. Completed healing in ${timetaken(
      start,
      end
    )}`
  );
  return newSelector;
};

// Checking whether the error is a selector not found error
const isSelectorNotFoundException = (err) => {
  // WARNING: Designing code based on Taiko error messages is too brittle,
  // what if Taiko update its messages

  let eMsg = err.message.toLowerCase();
  return (
    eMsg.includes('customselector with query') && eMsg.includes('not found')
  );
};

// Update DollarWrapper with new selector
const constructDWArgs = (dwArgs, newSelector) => {
  dwArgs.selector.label = newSelector;
  dwArgs._description = 'CustomSelector with query ' + newSelector;
  return dwArgs;
};

// Process the exception and return updated DollarWrapper
const handleException = async (
  e,
  $,
  evaluate,
  selector,
  brandLocale,
  feature,
  dwArgs
) => {
  console.log(e);

  // Some other exception, just throw it
  if (!isSelectorNotFoundException(e)) {
    throw e;
  }

  let newSelector = await healMe($, evaluate, selector, brandLocale, feature);
  if (newSelector === '') {
    throw e; // Not able to find the locator with healing data so throw the exeception
  }

  return constructDWArgs(dwArgs, newSelector);
};

const timetaken = (start, end) => {
  const timeTaken = end - start;

  const minutes = Math.floor(timeTaken / (1000 * 60));
  const seconds = Math.floor((timeTaken % (1000 * 60)) / 1000);
  const milliseconds = Math.floor(timeTaken % 1000);

  let timeTakenString = '';

  if (minutes > 0) {
    timeTakenString += `${minutes} minute${minutes > 1 ? 's' : ''}`;
  }

  if (seconds > 0) {
    if (timeTakenString.length > 0) {
      timeTakenString += ', ';
    }
    timeTakenString += `${seconds} second${seconds > 1 ? 's' : ''}`;
  }

  if (milliseconds > 0) {
    if (timeTakenString.length > 0) {
      timeTakenString += ' and ';
    }
    timeTakenString += `${milliseconds} millisecond${
      milliseconds > 1 ? 's' : ''
    }`;
  }
  return timeTakenString;
};
// Function to fetch an element based on any selector

/*

checkSelectorType("//div[@class='example']");
checkSelectorType("#myId");
checkSelectorType(".myClass");
checkSelectorType("div:hover");
checkSelectorType("div > span");
checkSelectorType("div + span");
checkSelectorType("div ~ span");
checkSelectorType("div:nth-child(2)")

*/

/* 
// Save references to the original console methods
const originalConsole = { ...console };

// Override all of the console methods to capture messages
['log', 'info', 'warn', 'error'].forEach((method) => {
  console[method] = function(...args) {
    // Do something with the log message here, e.g. send it to a server for logging
    console.log(`[${method.toUpperCase()}]: ${args.join(' ')}`);

    // Call the original console method to log the message to the console
    originalConsole[method].apply(console, args);
  };
});

*/
