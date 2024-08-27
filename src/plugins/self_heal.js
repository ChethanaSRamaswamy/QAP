const db = require('../utilities/db/mysql/mysql_provider');
const AutoHealController = require('../datainterface/controllers/AutoHealController');

class AutoHeal {
  // Decide whether to run element metadata gathering or not
  // static isDiscovery = true;

  static async fetchSelectors() {
    let sql = `SELECT locator_definition_id, locator_key, locator_value, brand_id, locale_id,\
      brand_locale, page, platform FROM locator_definitions`;

    let results = await db.MySQLProvider.executeQuery(sql);
    for (let i = 0; i < results.length; i++) {
      /* let { locator_key, locator_value } = results[i];
        console.log(locator_key, locator_value); */
    }
  }

  static async insertSelectors(
    elementInfo,
    locatorValue,
    brandLocale,
    feature,
    duplicateSelectors
  ) {
    let insertParam = [];

    let {
      pageUrl,
      targetInfo,
      targetDOMTreeInfo: {
        parent,
        previousSibiling,
        nextSibiling,
        firstChild,
        lastChild,
      },
    } = elementInfo;

    let targetInfoColumn = generateData(targetInfo);
    let parentInfoColumn = generateData(parent);
    let prevSblInfoColumn = generateData(previousSibiling);
    let nextSblInfoColumn = generateData(nextSibiling);
    let firstChildInfoColumn = generateData(firstChild);
    let lastChildInfoColumn = generateData(lastChild);

    // TODO: The below query should yield only one result. Validate after populating the entire data
    // Use the following query to find duplicates
    // SELECT brand_locale, feature, locator_value, count(*) c FROM helix.locator_definitions where locator_value != '' group by brand_locale, feature, locator_value having c>1 order by c, brand_locale, feature
    // Better to cache the records of locator_definitions table - better reuse LocatorDefinitionController
    let sql = `SELECT locator_definition_id FROM locator_definitions WHERE\
    brand_locale=? AND locator_value=? AND feature=?`;
    let params = [brandLocale, locatorValue, feature];

    // If the selector has duplicate entries then try to find
    // the right locator using the additional information in duplicateSelectors
    if (duplicateSelectors !== null) {
      for (const [key, value] of Object.entries(duplicateSelectors.fields)) {
        if (key === 'locatorKey') {
          sql += ' AND locator_key=?';
        }
        if (key === 'page') {
          sql += ' AND page=?';
        }
        params.push(value);
        // console.log(value);
      }
    }

    let results = await db.MySQLProvider.getValue(sql, params);

    if (results === null) {
      console.log(
        `${locatorValue} - Locator not available in locator_definitions table of ${brandLocale}`
      );
      return;
    }

    /*
     * TODO: DON'T DO ANYTHING IF THERE ARE DUPLICATES
     * JUST RETURN
     */

    // Remove all the records in auto_heal table related to locator_definition_id in results
    // This may create problem for elements like QS in MPP grid, in the
    // second it will wipe out the previously saved records - Test and fix it
    sql = 'DELETE FROM auto_heal WHERE locator_definition_id = ?';
    params = [results];
    await db.MySQLProvider.executeQuery(sql, params);

    insertParam = [
      results,
      targetInfoColumn,
      parentInfoColumn,
      prevSblInfoColumn,
      nextSblInfoColumn,
      firstChildInfoColumn,
      lastChildInfoColumn,
      pageUrl,
      '',
    ];
    sql = `INSERT INTO auto_heal (locator_definition_id, target_info, parent, \
           previous_sibiling, next_sibiling, first_child, last_child, page_url, locator_healed_value) \
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    await db.MySQLProvider.insertRecord(sql, insertParam);
    // await db.MySQLProvider.disconnect();
  }

  // This is healing
  static async locateMissingSelector(
    $,
    evaluate,
    selector,
    brandLocale,
    feature
  ) {
    // /////////////// TODO: Address the follow todos ///////////////
    // Correct the typo
    // What if the data in auto_heal table is not accurate/correct?
    // Try only once - no try, and try and try again because it adds complexity
    // On successful healing, update the new selector to locator_definitions table and keep a track of old selector in history table
    // On successful healing, after updating locator_definitions table report back to the user to correct the selecor in their local CSV file
    // Don't forget to handle duplicate selector values (remember hasDuplicate object?)
    // Duplicate has to handled properly in common functions like ElementAction
    // Healing should not happen in discovery phase. Basically DOHEAL should be false when ISDISCOVERY is true
    // What if we are not able to find the parent itself?
    // Handle | in xPath, PROD | STAGE
    // DisableHealing annotation for elements (healing only selective selectors)
    // Find out a way to locate the element even if there is a failure
    // /////////////// End of the todo block  ///////////////

    let objAutoHealController = new AutoHealController();
    let domMetadataFromDB = await objAutoHealController.fetchAutoHealData(
      brandLocale,
      feature,
      selector,
      ''
    );
    if (domMetadataFromDB.length === 0) {
      // No healing data

      let missingObj = {
        found: false,
        message: 'There is no healing data in the database',
        pElement: JSON.stringify({}),
      };
      return missingObj;
    }
    // console.log(domMetadataFromDB);
    let options = { args: [domMetadataFromDB] };
    var missingElemInfo = null;
    try {
      missingElemInfo = await evaluate(
        $('//body'),
        (body, args) => {
          try {
            function getAttributeValue(findAttr, domInfo) {
              let domAttrs = domInfo.split('|');

              for (let iCnt = 0; iCnt < domAttrs.length; iCnt++) {
                let [attributeName, attributeValue] = domAttrs[iCnt].split(':');

                if (attributeName === '' || attributeValue === '') {
                  continue;
                }
                attributeValue = attributeValue?.toLowerCase();

                if (attributeName === findAttr) {
                  return attributeValue;
                }
              }
              return '';
            }

            function getClass(domInfo) {
              return getAttributeValue('className', domInfo);
            }
            // Dom query constructor
            function domQueryBuilder(domInfo) {
              let domAttrs = domInfo.split('|');
              let domQuery = '';
              let tagName = '';
              for (let iCnt = 0; iCnt < domAttrs.length; iCnt++) {
                let [attributeName, attributeValue] = domAttrs[iCnt].split(':');

                if (
                  attributeName === '' ||
                  attributeValue === '' ||
                  attributeName === 'data-heal'
                ) {
                  continue;
                }
                //  attributeValue = attributeValue?.toLowerCase();
                attributeName =
                  attributeName === 'className' ? 'class' : attributeName;
                if (attributeName === 'tagName') {
                  tagName = attributeValue;
                } else {
                  domQuery = `${domQuery}[${attributeName}="${attributeValue}"]`;
                }
              }
              // Append tag name
              domQuery = `${tagName}${domQuery}`;
              console.log('domQuery:', domQuery);

              return domQuery;
            }

            function getElementsFromDOMQuery(elementInfo, searchSource) {
              // TODO: The below querySelectorAll should yield only one node.
              // What if it gives more than one node? Better solve this while discovery
              let searchQuery = domQueryBuilder(elementInfo);
              if (searchQuery === '') return null;
              let elements = searchSource.querySelectorAll(searchQuery);
              if (elements.length !== 0) {
                return elements[0];
              } else {
                return null;
              }
            }

            function compareWithMissingElement(targetInfo, pMatchingElem) {
              // Compare the attributes from DB with the attributes of the element we just found

              if (
                typeof pMatchingElem === 'undefined' ||
                pMatchingElem === null
              )
                return false;

              let targetAttr = targetInfo.split('|');
              let matchCnt = 0;

              for (let jCnt = 0; jCnt < targetAttr.length; jCnt++) {
                let [attributeName, attributeValue] =
                  targetAttr[jCnt].split(':');

                if (attributeName === '' || attributeValue === '') {
                  continue;
                }
                attributeValue = attributeValue?.toLowerCase();

                if (
                  pMatchingElem[attributeName]?.toString().toLowerCase() ===
                  attributeValue
                ) {
                  matchCnt++;
                }
              }
              if (matchCnt >= 1) return true;

              return false;
            }

            function compareDOMElements(elem1, elem2) {
              // Comparing the elements by reference
              // You can also compare by properties using getAttribute() method
              // Compare by content using innerHTML or innerText

              if (
                typeof elem1 === 'undefined' ||
                elem1 === null ||
                typeof elem2 === 'undefined' ||
                elem2 === null
              )
                return false;
              return elem1 === elem2 ? true : false;
            }

            function gatherAttributes(element) {
              // Dynamically adding data-heal attribute to locate the
              // element easily and continue the execution

              element.setAttribute(
                'data-heal',
                (Math.random() + 1).toString(36).substring(7)
              );
              let myAttributes = element.attributes;
              let targetInfo = {};
              targetInfo.tagName = element.tagName.toLowerCase();

              // INFO: skipAttributes is not considered here because
              // we are not going to update the new locator value in the DB
              // We need to consider skipAttributes if we save the new locator back to DB
              for (let i = 0; i < myAttributes.length; i++) {
                if (myAttributes[i].nodeName.toLowerCase().includes('style')) {
                  continue;
                }
                targetInfo[myAttributes[i].nodeName] =
                  myAttributes[i].nodeValue;
              }

              targetInfo.innerText = element.innerText;
              return JSON.stringify(targetInfo);
            }

            function constructReturnObj(
              found,
              message,
              pElement = JSON.stringify({})
            ) {
              let missingObj = {
                found: found,
                message: message,
                pElement: pElement, // missingObj is JSON.stringified
              };
              return missingObj;
            }

            function findElementByMatchingClass(
              elementInfo,
              searchSource = document
            ) {
              const classString = getClass(elementInfo);
              const classes = classString.split(' ');
              let uParent = null;
              let currentClass = '';

              classes.forEach((className) => {
                currentClass += `.${className}`;
                const uElement = searchSource.querySelector(`${currentClass}`);
                if (uElement) {
                  uParent = uElement;
                } else {
                  currentClass = currentClass.replace(`.${className}`, '');
                }
              });
              return uParent;
            }

            function getChildAtIndex(parent, targetInfo) {
              let currentIndex = 0;
              let children = parent.childNodes;
              let index = parseInt(getAttributeValue('index', targetInfo));
              let pChild = null;
              for (let i = 0; i < children.length; i++) {
                if (children[i].nodeType === 1) {
                  if (currentIndex === index) {
                    pChild = children[i];
                    break;
                  }
                  currentIndex++;
                }
              }

              if (compareWithMissingElement(targetInfo, pChild)) {
                return pChild;
              } else {
                return null;
              }
            }

            function removeKeyFromDomInfo(str, key) {
              let parts = str.split('|');
              let result = [];
              for (let i = 0; i < parts.length; i++) {
                let currentPart = parts[i];
                let currentKey = currentPart.split(':')[0];
                if (currentKey !== key) {
                  result.push(currentPart);
                }
              }
              return result.join('|');
            }

            function parseDOM() {
              let domMetadata = args[0][0];

              let {
                targetInfo,
                parent: parentInfo,
                previousSibiling: previousSiblingInfo,
                nextSibiling: nextSiblingInfo,
                firstChild: firstChildInfo,
                lastChild: lastChildInfo,
                pageUrl: pageUrl,
                locatorHealedValue: locatorHealedValue,
              } = domMetadata;
              let pMissingElem = null;

              // Page url is different - urls during discovery and heal different
              let curPage = window.location.origin + window.location.pathname;
              if (curPage !== pageUrl) {
                return constructReturnObj(
                  false,
                  `Because page ${curPage} differs from ${pageUrl} in metadata, healing cannot continue`
                );
              }

              // Use locatorHealedValue to find the element, if not able to find it
              // then use the family tree details to locate the element
              if (locatorHealedValue !== '') {
                pMissingElem = getElementsFromDOMQuery(
                  locatorHealedValue,
                  document
                );
                if (pMissingElem !== null) {
                  return constructReturnObj(
                    true,
                    'Found the element using previously healed data',
                    gatherAttributes(pMissingElem)
                  );
                }
              }

              // Find the parent with its info from DB
              let myParent = getElementsFromDOMQuery(parentInfo, document);

              if (myParent === null) {
                // Not able to find the parent with the info from DB
                // Just trying to see whether we can find the parent based
                // on its classes because few class names may be dynamic

                let uParent = findElementByMatchingClass(parentInfo);
                if (uParent !== null) {
                  myParent = uParent;
                } else {
                  return constructReturnObj(
                    false,
                    'Parent element not found to continue healing'
                  );
                }
              }

              // Just trying out to find the element based on its index
              // If we are not able to find the element using
              // its index then there is a structural change to the DOM
              pMissingElem = getChildAtIndex(myParent, targetInfo);
              if (pMissingElem !== null) {
                // Found the missing element using its index
                return constructReturnObj(
                  true,
                  'Found the element using its index',
                  gatherAttributes(pMissingElem)
                );
              }

              // Not able to find the element using its index
              // There is a chance that Dom structure is changed
              // Removing index from targetInfo
              targetInfo = removeKeyFromDomInfo(targetInfo, 'index');

              // Found the parent (going with first element) and finding its children
              let childNodes = myParent.childNodes;
              let myPrevSib = getElementsFromDOMQuery(
                previousSiblingInfo,
                myParent
              );
              let myNextSib = getElementsFromDOMQuery(
                nextSiblingInfo,
                myParent
              );
              let pMissingElem1 = myPrevSib?.nextElementSibling;
              let pMissingElem2 = myNextSib?.previousElementSibling;
              // comparing the siblings, if they match then it is a possible element
              let doCompareSiblings = compareDOMElements(
                pMissingElem1,
                pMissingElem2
              );

              if (doCompareSiblings) {
                if (compareWithMissingElement(targetInfo, pMissingElem1)) {
                  // Found the element and it is pMissingElem1/pMissingElem2
                  //
                  pMissingElem = pMissingElem1;
                }
              } else {
                if (
                  pMissingElem1 &&
                  compareWithMissingElement(targetInfo, pMissingElem1)
                ) {
                  // Found the element and it is pMissingElem1
                  //
                  pMissingElem = pMissingElem1;
                }

                if (
                  pMissingElem2 &&
                  compareWithMissingElement(targetInfo, pMissingElem2)
                ) {
                  // Found the element and it is pMissingElem2
                  //
                  pMissingElem = pMissingElem2;
                }
              }

              if (pMissingElem !== null) {
                //Found the missing element
                return constructReturnObj(
                  true,
                  'Found the element using siblings',
                  gatherAttributes(pMissingElem)
                );
              }

              // Not able to find the element with its siblings from DB so continuing the search with children
              let myFirstChild = getElementsFromDOMQuery(
                firstChildInfo,
                myParent
              );
              let myLastChild = getElementsFromDOMQuery(
                lastChildInfo,
                myParent
              );
              pMissingElem1 = myFirstChild?.parentElement;
              pMissingElem2 = myLastChild?.parentElement;
              let doCompareChildren = compareDOMElements(
                pMissingElem1,
                pMissingElem2
              );

              if (doCompareChildren) {
                if (compareWithMissingElement(targetInfo, pMissingElem1)) {
                  // Found the element and it is pMissingElem1/pMissingElem2
                  pMissingElem = pMissingElem1;
                }
              } else {
                if (
                  pMissingElem1 &&
                  compareWithMissingElement(targetInfo, pMissingElem1)
                ) {
                  // Found the element and it is pMissingElem1
                  pMissingElem = pMissingElem1;
                }

                if (
                  pMissingElem2 &&
                  compareWithMissingElement(targetInfo, pMissingElem2)
                ) {
                  // Found the element and it is pMissingElem2
                  pMissingElem = pMissingElem2;
                }
              }

              if (pMissingElem !== null) {
                //Found the missing element
                //domQueryBuilder(pMissingElem); //
                return constructReturnObj(
                  true,
                  'Found the element using children',
                  gatherAttributes(pMissingElem)
                );
              }

              // Not able to find the element with its children so continuing the search
              // Try to find the element with targetInfo within myParent
              // but this may not be fruitful

              let targetAttr = targetInfo.split('|');
              let possibleElements = [];

              // Using its class names to locate the element
              let uElement = findElementByMatchingClass(targetAttr, myParent);
              if (uElement !== null) {
                return constructReturnObj(
                  true,
                  'Found the element using its class attribute',
                  gatherAttributes(uElement)
                );
              }

              // Using its othe attributes to find the element within its parent
              for (let iCnt = 0; iCnt < childNodes.length; iCnt++) {
                let matchCnt = 0;

                for (let jCnt = 0; jCnt < targetAttr.length; jCnt++) {
                  let attr = targetAttr[jCnt].split(':');
                  let attrName = attr[0];
                  let attrValue = attr[1]?.toLowerCase();
                  if (
                    attrName === '' ||
                    attrValue === '' ||
                    attrName === 'className'
                  ) {
                    continue;
                  }

                  if (
                    childNodes[iCnt][attrName]
                      ?.toLowerCase()
                      .includes(attrValue)
                  ) {
                    matchCnt++;
                  }
                }
                if (matchCnt >= 1) {
                  // There is an element with more than two matching attributes with the missing element
                  possibleElements.push(childNodes[iCnt]);
                }
              }

              if (possibleElements.length > 0) {
                // There are few matching elements
                // But how to find the correct element?
                // For now going with first element just like other nodes array

                return constructReturnObj(
                  true,
                  'Found the element using its own attributes',
                  gatherAttributes(possibleElements[0])
                );
              } else {
                return constructReturnObj(
                  false,
                  'Not able to find the element even with healing data'
                );
              }
            }

            return parseDOM();
          } catch (ex) {
            let missingObj = {
              found: false,
              message: ex.stack,
              pElement: JSON.stringify({}),
            };
            return missingObj;
          }
        },
        options
      );
      //return missingElemInfo;
    } catch (ex) {
      // TODO: Don't import taiko here, just pass the API
      var { currentURL } = require('taiko');
      console.log(
        `Error while trying to locate the element from ${await currentURL()}, and the error is`,
        ex
      );
      let missingObj = {
        found: false,
        message: ex.stack,
        pElement: JSON.stringify({}),
      };
      return missingObj;
    }

    missingElemInfo.pElement = generateData(
      JSON.parse(missingElemInfo.pElement)
    );
    // Healing success, found the element, store it in DB
    if (missingElemInfo.found) {
      let { autoHealId } = domMetadataFromDB[0];

      await objAutoHealController.updateHealedData(
        autoHealId,
        missingElemInfo.pElement
      );
    }

    return missingElemInfo;
  }

  // This is discovery
  static async gatherElementMetadata(
    selector,
    duplicateSelectors,
    evaluate,
    brandLocale,
    feature,
    $
  ) {
    //
    let options = { args: [selector] };
    var gatherElementFamilyTree = null;
    try {
      gatherElementFamilyTree = await evaluate(
        $('//body'),
        (body, args) => {
          // Collect family tree details
          // TODO: Collect position of each element and X & Y co-ordinates

          let selector = args[0];
          let allMetadata = [];
          let isValidxPath = selector.includes('//');
          let errorMsg = '';
          // console.log('isValidxPath: ', isValidxPath);

          try {
            if (isValidxPath) {
              // Given selector is a valid xPath
              let domBodyElements = document.evaluate(
                selector,
                document,
                null,
                XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
                null
              );

              // xPath yields empty result
              if (domBodyElements.snapshotLength === 0) {
                errorMsg = `Unable to find ${selector} in the DOM`;
                return JSON.stringify({ errorMsg, allMetadata });
              }

              for (let i = 0; i < domBodyElements.snapshotLength; i++) {
                let element = domBodyElements.snapshotItem(i);
                allMetadata.push(getMetadata(element));
              }
            } else {
              // Given selector is a CSS selector
              let domBodyElements = document.querySelectorAll(selector);
              // No element found for the given selector
              if (domBodyElements.length === 0) {
                // errorMsg = `Unable to find ${selector} in the DOM, ${element}`;
                errorMsg = `Unable to find ${selector} in the DOM`;
                return JSON.stringify({ errorMsg, allMetadata });
                /*
                // Lets give one more try, the selector might be a text
                const xpath = `//*[contains(text(), "${selector}")]`;
                domBodyElements = document.evaluate(
                  xpath,
                  document,
                  null,
                  XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
                  null
                );

                if (domBodyElements.snapshotLength === 0) {
                  errorMsg = `Unable to find ${selector} in the DOM, ${element}`;
                  return JSON.stringify({ errorMsg, allMetadata });
                } else {
                  for (i = 0; i < domBodyElements.snapshotLength; i++) {
                    let element = domBodyElements.snapshotItem(i);
                    allMetadata.push(getMetadata(element));
                  }
                }
                */
              } else {
                // 'Found the error using temp xpath';
                for (let i = 0; i < domBodyElements.length; i++) {
                  let element = domBodyElements[i];
                  allMetadata.push(getMetadata(element));
                }
              }
            }
          } catch (err) {
            errorMsg = `Encountered ${err.stack}`;
            return JSON.stringify({ errorMsg, allMetadata });
          }

          function getElementIndexWithinParent(element, parent) {
            let index = 0;
            let children = parent.childNodes;
            for (let i = 0; i < children.length; i++) {
              if (children[i] === element) {
                return index;
              }
              // Filter/Count only elements
              if (children[i].nodeType === 1) {
                index++;
              }
            }
            return -1;
          }

          function getMetadata(element) {
            // Don't gather the following attributes
            let skipAttributes = [
              'style',
              'aria',
              'autocomplete',
              'maxlength',
              'placeholder',
              'rows',
              'tabindex',
              'colspan',
              'alt',
              'title',
            ];
            let myAttributes = element.attributes; // Get all the attributes

            let attributesAnnotation = {
              pageUrl: window.location.origin + window.location.pathname,
              targetInfo: {},
              targetDOMTreeInfo: {},
            };
            let tagName, className;

            attributesAnnotation.targetInfo.tagName =
              element.tagName.toLowerCase();

            // Parse associated attributes
            for (let i = 0; i < myAttributes.length; i++) {
              let attributeName = myAttributes[i].nodeName.toLowerCase();
              if (skipAttributes.some((a) => attributeName.includes(a))) {
                continue;
              }

              let value = myAttributes[i].nodeValue;

              if (attributeName.includes('href')) {
                // Remove query string, it is not required
                value = myAttributes[i].nodeValue.split('?')[0];
              }
              attributesAnnotation.targetInfo[myAttributes[i].nodeName] = value;
            }

            // Gather innerText
            attributesAnnotation.targetInfo.innerText =
              element.innerText?.substring(0, 50);

            // Find elements index within its parent
            attributesAnnotation.targetInfo.index = getElementIndexWithinParent(
              element,
              element.parentNode
            );

            // Get family tree
            ({ tagName, className } = element.parentElement || {});
            attributesAnnotation.targetDOMTreeInfo.parent = {
              tagName,
              className,
            };

            ({ tagName, className } =
              element.parentElement?.parentElement || {});
            attributesAnnotation.targetDOMTreeInfo.grandParent = {
              tagName,
              className,
            };

            ({ tagName, className } = element.previousElementSibling || {});
            attributesAnnotation.targetDOMTreeInfo.previousSibiling = {
              tagName,
              className,
            };
            ({ tagName, className } = element.nextElementSibling || {});
            attributesAnnotation.targetDOMTreeInfo.nextSibiling = {
              tagName,
              className,
            };

            //firstElementChild/lastElementChild maybe null for non-container tags
            ({ tagName, className } = element.firstElementChild || {});

            attributesAnnotation.targetDOMTreeInfo.firstChild = {
              tagName,
              className:
                typeof className === 'object'
                  ? element.firstElementChild.getAttribute('class')
                  : className,
            };
            ({ tagName, className } = element.firstElementChild || {});
            attributesAnnotation.targetDOMTreeInfo.lastChild = {
              tagName,
              className:
                typeof className === 'object'
                  ? element.lastElementChild.getAttribute('class')
                  : className,
            };

            return attributesAnnotation;
          }

          return JSON.stringify({ errorMsg, allMetadata });
        },
        options
      );
    } catch (err) {
      // TODO: Don't import taiko here, just pass the API
      var { currentURL } = require('taiko');
      console.log(
        `Error while collecting metadata from ${await currentURL()}, and the error is`,
        err
      );
      gatherElementFamilyTree = JSON.stringify({
        errorMsg: err.stack,
        allMetadata: [],
      });
    }
    let { allMetadata, errorMsg } = JSON.parse(gatherElementFamilyTree);
    //console.log('allMetadata: ', allMetadata);
    //console.log('errorMsg: ', errorMsg);
    /* 
    if (errorMsg !== '') {
      console.log(
        `${brandLocale} - selector: ${selector}, error will collecting metadata. Error: ${errorMsg}`
      );
    }
 */
    if (allMetadata.length === 0) {
      // Not printing cboxClose if element is not available
      if (!selector.includes('cboxClose')) {
        console.log(
          `${brandLocale} - selector: ${selector} metadata is not collected. Reason: ${errorMsg}`
        );
      }
    } else {
      console.log(
        `${brandLocale} - selector: `,
        selector,
        ' metadata collected'
      );
    }

    for (let i = 0; i < allMetadata.length; i++) {
      // Taiko script execution should not be stopped because of DB errors
      await AutoHeal.insertSelectors(
        allMetadata[i],
        selector,
        brandLocale,
        feature,
        duplicateSelectors
      );
    }
  }
  // End of class
}

// To generate promity data in the format tagName:span|class:locator-link|
const generateData = (obj) => {
  let column = '';
  for (let [key, value] of Object.entries(obj)) {
    // Don't append it id value is empty.
    // For example: tagName:STRONG|className:|
    if (value === '') {
      continue;
    }

    column += key + ':' + value + '|';
  }
  return column.substring(0, column.length - 1); // Removing last |
};

module.exports = AutoHeal;
