assert = require('assert');
var {
  evaluate,
  $,
  into,
  write,
  waitFor,
  text,
  textBox,
  press,
  dropDown,
  click,
  focus,
  reload,
  currentURL,
  goto,
  confirm,
  accept,
  checkBox,
  tap,
} = require('taiko');

const pollingTime = 100;
const timeout = 30000;
const matchCondition = true;
const delayTimeForWrite = 100;

// Element action function

/**
 * used to perform click action
 * @param {*} ElementLoc - Pass Element xpath
 */
async function ClickAction(ElementLoc) {
  if (ElementLoc !== '') {
    await evaluate(
      await $(ElementLoc, { waitForEvents: ['DOMContentLoaded'] }),
      (ele) => {
        ele.focus();
        ele.click();
      }
    );
  }
}

/**
 * used to perform write action
 * @param {*} ElementLoc - Pass Element xpath
 * @param {*} ElementData - Pass Data for the TextBox
 */
async function WriteAction(ElementLoc, ElementData) {
  if (ElementLoc !== '') {
    await evaluate(
      await $(ElementLoc, { waitForEvents: ['DOMContentLoaded'] }),
      (ele) => ele.focus()
    );
    await write(ElementData, into(await $(ElementLoc)), {
      delay: delayTimeForWrite,
    });
  }
}

/**
 * used to perform click action with try catch block
 * @param {*} ElementLoc - Pass Element xpath
 */

async function TryCatchClickAction(ElementLoc) {
  if (ElementLoc !== '') {
    try {
      await evaluate(
        await $(ElementLoc, { waitForEvents: ['DOMContentLoaded'] }),
        (ele) => {
          ele.focus();
          ele.click();
        }
      );
    } catch (e) {
      console.log(ElementLoc + 'Element did not appear hence it is skipped');
    }
  }
}

async function existsClickAction(ElementLoc) {
  if (await (await $(ElementLoc)).exists()) {
    await evaluate(ElementLoc, (ele) => {
      ele.focus();
      ele.click();
    });
  } else {
    gauge.message('There is no orders');
  }
}

/**
 * used to perform scroll action with try catch block
 * @param {*} ElementLoc - Pass Element xpath to scroll into element
 */
async function TryCatchScrollAction(ElementLoc) {
  if (ElementLoc !== '') {
    try {
      await evaluate(
        await $(ElementLoc, { waitForEvents: ['DOMContentLoaded'] }),
        (ele) => {
          ele.focus();
          ele.scrollIntoView();
        }
      );
      gauge.screenshot();
    } catch (e) {
      console.log(ElementLoc + 'Element did not appear hence it is skipped');
    }
  }
}

/**
 * used to perform click action in loop
 * @param {*} ElementLoc - Pass Element xpath to perform click action in loop
 */
async function ClickInLoop(ElementLoc) {
  if (ElementLoc !== '') {
    let productList = await (await $(ElementLoc)).elements();
    for (i = 1; i <= productList.length + 1; i++) {
      await waitFor(
        3000
      ); /**sites take time / reload after removing the product */
      if (await (await $(ElementLoc)).exists()) {
        await ClickAction(ElementLoc);
      } else {
        break;
      }
    }
  }
}

/**
 * used to perform click action in loop
 * @param {*} ElementLoc - Pass Element xpath to perform click action in loop
 */
async function removeExcessProduct(ElementLoc) {
  if (ElementLoc !== '') {
    let productList = await (await $(ElementLoc)).elements();
    for (i = 1; i < productList.length - 2; i++) {
      await waitFor(
        3000
      ); /**sites take time / reload after removing the product */
      if (await (await $(ElementLoc)).exists()) {
        await ClickAction(ElementLoc);
      } else {
        break;
      }
    }
  }
}

/**
 * used to Assert URL string
 * @param {*} URLstring - Expected URL string to compare
 * @param {*} expectedMessage - Message to be printed if Assert true
 * @param {*} NegativeMessage - Message to be printed if Assert false
 */
async function AssertUrl(URLstring, expectedMessage, NegativeMessage) {
  if (URLstring !== '') {
    var Curl = await currentURL();
    if (Curl.toUpperCase().includes(URLstring.toUpperCase())) {
      assert(true);
      gauge.message(expectedMessage);
    } else {
      gauge.message(NegativeMessage);
      assert(false);
    }
  }
}

/**
 * used to Assert/compare Text
 * @param {*} MessageID - Pass 'Text' xpath
 * @param {*} MessageText - Pass Expected 'Text' to compare
 * @param {*} PositiveMessage - Message to be printed if Assert true
 * @param {*} NegativeMessage - Message to be printed if Assert false
 */
async function AssertText(
  MessageID,
  MessageText,
  PositiveMessage,
  NegativeMessage
) {
  if (MessageID !== '') {
    var cartMaxPurerror = await (await $(MessageID)).text();
    if (cartMaxPurerror.toUpperCase().includes(MessageText.toUpperCase())) {
      assert(true);
      gauge.message(PositiveMessage);
      gauge.message(cartMaxPurerror);
      gauge.screenshot();
    } else {
      gauge.message(NegativeMessage);
      gauge.message(cartMaxPurerror);
      assert(false);
    }
  }
}

/**
 * used to perform set of element action in same page
 * @param {*} ElementObj Pass the array of element action with locator, test Data and type of action to be performed
 */
async function ElementAction(ElementObj) {
  for (i = 0; i < ElementObj.length; i++) {
    switch (ElementObj[i].action) {
      case 'screenshot':
        {
          gauge.screenshot();
        }
        break;
      case 'Waitfor':
        {
          if (ElementObj[i].loc !== '') {
            await waitFor(await $(ElementObj[i].loc), ElementObj[i].data);
          }
        }
        break;
      case 'write':
        {
          if (ElementObj[i].loc !== '') {
            await evaluate(
              await $(ElementObj[i].loc, {
                waitForEvents: ['DOMContentLoaded'],
              }),
              (ele) => ele.focus()
            );
            await write(ElementObj[i].data, into(await $(ElementObj[i].loc)),{
              delay: delayTimeForWrite
            });
          }
        }
        break;
        case 'expeditedWrite':
        {
          if (ElementObj[i].loc !== '') {
            await evaluate(
              await $(ElementObj[i].loc, {
                waitForEvents: ['DOMContentLoaded'],
              }),
              (ele) => ele.focus()
            );
            await write(ElementObj[i].data, into(await $(ElementObj[i].loc)));
          }
        }
        break;
        case 'waitBeforeWrite':
        {
          if (ElementObj[i].loc !== '') {
            const delayTimeForWrite = 100;
            await waitFor(5000);
            await evaluate(
              await $(ElementObj[i].loc),
              (ele) => ele.focus({waitForNavigation: false})
            );
            await write(ElementObj[i].data, into(await $(ElementObj[i].loc)), {
              delay: delayTimeForWrite,
            });
          }
        }
        break;
      case 'pressKeysWrite':
        if (ElementObj[i].loc !== '') {
          await focus(await $(ElementObj[i].loc));
          const tempEmail = ElementObj[i].data.split('');
          // await write(tempEmail, into(await $(ElementObj[i].loc)), { delay: delayTimeForWrite });
          await press(tempEmail, { delay: delayTimeForWrite });
        }
        break;
      case 'writeAPI':
        {
          if (ElementObj[i].txt !== '') {
            await write(
              ElementObj[i].data,
              into(await textBox(ElementObj[i].txt), {
                force: true,
                delay: delayTimeForWrite,
              })
            );
          }
        }
        break;
      case 'Onlywrite':
        {
          if (ElementObj[i].loc !== '') {
            await write(ElementObj[i].data, into(await $(ElementObj[i].loc)), {
              delay: delayTimeForWrite,
            });
          }
        }
        break;
      case 'clearNwrite':
        {
          if (ElementObj[i].loc !== '') {
            await write(ElementObj[i].data, into(await $(ElementObj[i].loc)), {
              delay: delayTimeForWrite,
            });
            await press(['Control', 'KeyA']);
            await press('Delete');
            await write(ElementObj[i].data, into(await $(ElementObj[i].loc)), {
              delay: delayTimeForWrite,
            });
          }
        }
        break;
      case 'WaitforElementNwrite':
        {
          if (ElementObj[i].loc !== '') {
            for (j = 1; j <= 5; j++) {
              if (await (await $(ElementObj[i].loc)).exists()) {
                await evaluate(await $(ElementObj[i].loc), (ele) => {
                  ele.focus(), { force: true };
                  ele.click();
                });
                await write(
                  ElementObj[i].data,
                  into(await $(ElementObj[i].loc)),
                  { delay: delayTimeForWrite }
                );
                break;
              } else {
                if (j == 5) {
                  assert(
                    false,
                    'Element did not appear even after waiting for 62 sec'
                  );
                }
                await waitFor(3000);
              }
            }
          }
        }
        break;
      case 'TryCatchWrite':
        {
          if (ElementObj[i].loc !== '') {
            try {
              if (await (await $(ElementObj[i].loc)).exists()) {
                await evaluate(
                  await $(ElementObj[i].loc, {
                    waitForEvents: ['DOMContentLoaded'],
                  }),
                  (ele) => {
                    ele.focus(), { force: true };
                    ele.click();
                  }
                );
                await write(
                  ElementObj[i].data,
                  into(await $(ElementObj[i].loc)),
                  { delay: delayTimeForWrite }
                );
              }
            } catch (e) {
              ElementObj[i].loc +
                '=' +
                'This element did not appear hence got skipped';
            }
          }
        }
        break;
      case 'click':
        {
          if (ElementObj[i].loc !== '') {
            await focus(await $(ElementObj[i].loc), {
              waitForNavigation: false,
            });
            await evaluate(
              await $(ElementObj[i].loc, {
                waitForEvents: ['loadEventFired'],
              }),
              (ele) => {
                ele.click();
              }
            );
          }
        }
        break;
      case 'tap':
        {
          if (ElementObj[i].loc !== '') {
            await tap(await $(ElementObj[i].loc));
          }
        }
        break;
      case 'tryCatchClick':
        {
          if (ElementObj[i].loc !== '') {
            try {
              await evaluate(
                await $(ElementObj[i].loc, {
                  waitForEvents: ['DOMContentLoaded'],
                }),
                (ele) => {
                  ele.focus();
                  ele.click();
                }
              );
            } catch (e) {
              console.log(
                ElementObj[i].loc +
                '=' +
                'This element did not appear hence got skipped'
              );
            }
          }
        }
        break;
      case 'tryCatchDoubleClick':
        {
          if (ElementObj[i].loc !== '') {
            try {
              await evaluate(
                await $(ElementObj[i].loc, {
                  waitForEvents: ['DOMContentLoaded'],
                }),
                (ele) => {
                  ele.focus();
                  ele.click(), { force: true };
                  ele.click(), { force: true };
                }
              );
            } catch (e) {
              ElementObj[i].loc +
                '=' +
                'This element did not appear hence got skipped';
            }
          }
        }
        break;
      case 'waitForElementNClick':
        {
          if (ElementObj[i].loc !== '') {
            for (j = 1; j <= 5; j++) {
              if (await (await $(ElementObj[i].loc)).exists()) {
                await evaluate(
                  await $(ElementObj[i].loc, {
                    waitForEvents: ['loadEventFired'],
                  }),
                  (ele) => {
                    ele.focus(), { force: true };
                    ele.click();
                  }
                );
                gauge.screenshot();
                break;
              } else {
                if (j == 5) {
                  assert(
                    false,
                    'Element did not appear even after waiting for 62 sec'
                  );
                }
                await waitFor(3000);
              }
            }
          }
        }
        break;
      case 'IDDropdown':
        {
          if (ElementObj[i].loc !== '') {
            await (
              await dropDown({ id: ElementObj[i].loc })
            ).select(ElementObj[i].data);
          }
        }
        break;
      case 'IDDropdowntxt':
        {
          if (ElementObj[i].loc !== '') {
            await (
              await dropDown({ id: ElementObj[i].loc })
            ).select(ElementObj[i].data);
            await waitFor(
              ElementObj[i].data,
              13000
            ); /**Wait helps for TW sites shipping details */
          }
        }
        break;
      case 'NameDropDowntxt':
        {
          if (ElementObj[i].loc !== '') {
            await (
              await dropDown({ name: ElementObj[i].loc })
            ).select(ElementObj[i].data);
          }
        }
        break;
      case 'IndexDropDownID':
        {
          if (ElementObj[i].loc !== '') {
            await (
              await dropDown({ id: ElementObj[i].loc })
            ).select({ index: ElementObj[i].data });
          }
        }
        break;
      case 'IndexDropdownName':
        {
          if (ElementObj[i].loc !== '') {
            await (
              await dropDown({ name: ElementObj[i].loc })
            ).select({ index: ElementObj[i].data });
          }
        }
        break;
      case 'ClickDropDown':
        {
          if (ElementObj[i].loc !== '') {
            await evaluate(await $(ElementObj[i].loc), (ele) => {
              ele.scrollIntoView();
              ele.click();
            });
            gauge.screenshot();
            await evaluate(await $(ElementObj[i].data), (ele) => ele.click());
            gauge.screenshot();
          }
        }
        break;
      case 'Scrollintoview':
        {
          if (ElementObj[i].loc !== '') {
            await evaluate(await $(ElementObj[i].loc), (ele) =>
              ele.scrollIntoView()
            );
          }
        }
        break;
      case 'SelectaddressWithPress':
        {
          if (ElementObj[i].loc !== '') {
            await write(ElementObj[i].data, into(await $(ElementObj[i].loc)), {
              delay: delayTimeForWrite,
            });
            if (ElementObj[i].press !== '') {
              await waitFor(ElementObj[i].press, 10000);
              await press('ArrowDown');
              await waitFor(
                4000
              ); /**waitFor is used to slowdown the press action */
              await press('ArrowDown');
              await waitFor(4000);
              await press('ArrowDown');
              await waitFor(4000);
              await press('Enter');
              await waitFor(4000);
            }
          }
        }
        break;
      case 'ClickSuggestedaddress':
        {
          if (ElementObj[i].loc !== '') {
            await write(ElementObj[i].data, into(await $(ElementObj[i].loc)), {
              delay: delayTimeForWrite,
            });
            if (ElementObj[i].clickAdd !== '') {
              await waitFor(ElementObj[i].clickAdd, 80000);
              gauge.screenshot();
              await click(ElementObj[i].clickAdd);
              await waitFor(
                5000
              ); /**This step is applicable for AU and NZ sites, after clicking the suggested address sometime sites take time to load the other fields etc   */
            }
          }
        }
        break;
      case 'scrollClickSuggestedaddress':
        {
          if (ElementObj[i].loc !== '') {
            await evaluate(await $(ElementObj[i].loc), (ele) =>
              ele.scrollIntoView()
            );
            await write(ElementObj[i].data, into(await $(ElementObj[i].loc)), {
              delay: delayTimeForWrite,
            });
            if (ElementObj[i].clickAdd !== '') {
              await waitFor(ElementObj[i].clickAdd, 3000);
              gauge.screenshot();
              //await focus(ElementObj[i].clickAdd);
              await click(ElementObj[i].clickAdd);
              await waitFor(
                8000
              ); /**This step is applicable for AU and NZ sites, after clicking the suggested address sometime sites take time to load the other fields etc   */
            }
          }
        }
        break;
      case 'pressEnter':
        {
          if (ElementObj[i].loc !== '') {
            await press('Enter');
            await waitFor(3000);
          }
        }
        break;
      case 'pressTab':
        {
          if (ElementObj[i].loc) {
            await press('Tab');
            await waitFor(6000);
          }
        }
        break;
      case 'reload':
        {
          if (ElementObj[i].loc) {
            await reload({ waitForEvents: ['loadEventFired'] });
          }
        }
        break;
      case 'assertURL':
        {
          if (ElementObj[i].loc !== '') {
            var Curl = await currentURL();
            if (Curl.toUpperCase().includes(ElementObj[i].loc.toUpperCase())) {
              gauge.message('Registeration done on Signin.tmpl');
            } else {
              gauge.message('Registeration not done on Signin.tmpl');
            }
          }
        }
        break;
      case 'waitForelementtoappear':
        {
          if (ElementObj[i].loc !== '') {
            for (k = 0; k < 5; k++) {
              if (await (await $(ElementObj[i].loc)).exists()) {
                gauge.message('Element appeared');
                break;
              } else {
                if (k == 4) {
                  assert(false, 'Element did not appeared');
                }
                await waitFor(6000);
              }
            }
          }
        }
        break;
      case 'Dropdownwithoutselecttag':
        {
          if (ElementObj[i].loc !== '') {
            await waitFor(
              3500
            ); /*Dynamic dropdown waiting to load the options*/
            await click(await $(ElementObj[i].loc));
            await click(await text(ElementObj[i].data));
          }
        }
        break;
      case 'ClickDropdownwithxpaths':
        {
          if (ElementObj[i].loc !== '') {
            await waitFor(
              3500
            ); /*Dynamic dropdown waiting to load the options*/
            await click(await $(ElementObj[i].loc));
          }
        }
        break;
      case 'ClickDropdownvaluewithxpaths':
        {
          if (ElementObj[i].loc !== '') {
            await waitFor(
              3500
            ); /*Dynamic dropdown waiting to load the options*/
            await click(await $(ElementObj[i].loc));
          }
        }
        break;
      case 'ClickDropDownwithTrycatch':
        {
          if (ElementObj[i].loc !== '') {
            try {
              await evaluate(await $(ElementObj[i].loc), (ele) =>
                ele.scrollIntoView()
              );
              await evaluate(await $(ElementObj[i].loc), (ele) => ele.click());
              await evaluate(await $(ElementObj[i].data), (ele) => ele.click());
            } catch (error) { }
          }
        }
        break;
      case 'IDDropdowntxtTrycatch':
        {
          if (ElementObj[i].loc !== '') {
            try {
              await dropDown({ id: ElementObj[i].loc }).select(
                ElementObj[i].data
              );
            } catch (error) { }
          }
        }
        break;
      case 'Writewithcustomtimeout':
        {
          if (ElementObj[i].loc !== '') {
            if (ElementObj[i].loc1) {
              for (var j = 0; j < 5; j++) {
                if (await await $(ElementObj[i].loc).isVisible()) {
                  break;
                } else {
                  await waitFor(4000);
                  j++;
                }
              }
            }
            await evaluate(await $(ElementObj[i].loc), (ele) => ele.focus());
            await write(ElementObj[i].data, into(await $(ElementObj[i].loc)), {
              delay: delayTimeForWrite,
            });
          }
        }
        break;
      case 'waitAfterWrite':
        {
          //after write waiting for elements to autopopulate
          if (ElementObj[i].loc !== '') {
            const waitingTime = 6000;
            await evaluate(await $(ElementObj[i].loc), (ele) => ele.focus());
            await write(ElementObj[i].data, into(await $(ElementObj[i].loc)), {
              delay: delayTimeForWrite,
            });
            await waitFor(waitingTime);
          }
        }
        break;
      case 'javaScriptPopUp':
        {
          if (ElementObj[i].loc !== '') {
            await confirm(ElementObj[i].data, async () => await accept()); // Enter first word form alert Message from PopUp
            await evaluate(await $(ElementObj[i].loc), (ele) => ele.click());
          }
        }
        break;
      case 'checkTheCheckBox':
        {
          if (ElementObj[i].loc !== '') {
            if (
              !(await await checkBox({ id: ElementObj[i].loc }).isChecked())
            ) {
              await checkBox({ id: ElementObj[i].loc }).check();
              gauge.message('Check box is selected manually');
            } else {
              gauge.message('Check box is selected automatically');
            }
          }
        }
        break;
    }
  }
}
/**
 * used to close pop up
 * @param {*} popUpId - Pass Element xpath
 */
async function PopUpClose(popUpId) {
  if (popUpId !== '') {
    try {
      await waitFor(await $(popUpId), 8000);
      await evaluate(
        await $(popUpId, { waitForEvents: ['loadEventFired'] }),
        (ele) => ele.click()
      );
    } catch (e) {
      console.log('pop-up did not appear hence it is skipped');
    }
  }
}
/**
 * used to perform focus and click action for Temporary cache
 * @param {*} ElementLoc - Pass Element xpath
 */
async function focusClickAction(ElementLoc) {
  await evaluate(ElementLoc, (ele) => {
    ele.focus();
    ele.click();
  });
}

/**
 * used to get transaction Id
 * @param {*} transIdLocator - Pass Element xpath
 */
async function getTransId(transIdLocator) {
  if (transIdLocator !== '') {
    try {
      let Trans_Id = {};
      let Temp = await (await $(transIdLocator)).text();
      //Perlgem sites
      if (Temp.includes('page_data,')) {
        Temp = Temp.split('page_data,')[1];
        Temp = Temp.split(' );')[0].trim();
      }
      //clinique
      else if (Temp.includes('perlgem =')) {
        Temp = Temp.split('perlgem =')[1];
        Temp = Temp.trim();
      } else if (Temp.includes('page_data=')) {
        Temp = Temp.split('page_data=')[1];
        Temp = Temp.trim();
      }
      //RCO sites
      else {
        Temp = Temp.split('page_data =')[1];
        if (Temp.includes('// To prevent IE')) {
          Temp = Temp.split('// To prevent IE')[0];
        }
        Temp = Temp.trim();
      }
      Trans_Id = JSON.parse(Temp);
      gauge.message(
        'Transaction ID : ' + Trans_Id.data.transaction.trans.TRANS_ID
      );
      gauge.message(
        'Transaction ORDER ID : ' +
        Trans_Id.data.transaction.order.TRANS_ORDER_ID
      );
    } catch (e) {
      console.log(
        'Couldnt generate Trans Id due to Syntax error in JSON format'
      );
    }
  }
}

async function gotoProdcat(
  adminUrl,
  baseURL,
  skuIds,
  productUrl,
  isShoppable,
  isDisplayable,
  sppUrl,
  noDisplayableProductError
) {
  let isAnyProductUnavailable = true;
  for (let i = 0; i < skuIds.length; i++) {
    await goto(adminUrl + productUrl + skuIds[i], {
      waitForEvents: ['DOMContentLoaded'],
    });
    const isShoppableValue = (await (await $(isShoppable)).text()) === '1';
    const isDisplayableValue = (await (await $(isDisplayable)).text()) !== '0';
    if (isShoppableValue && isDisplayableValue) {
      isAnyProductUnavailable = false;
      gauge.message(
        'The Product with SKU ID - ' +
        skuIds[i] +
        ' is available and proceeding to add to Cart'
      );
      if (await (await $(sppUrl)).exists(pollingTime, timeout)) {
        const url = await (await $(sppUrl)).text();
        gauge.message(url);
        await goto(baseURL + url, {
          waitForNavigation: false,
        });
        gauge.screenshot();
        break;
      } else {
        const nodisplayableProduct = await (
          await $(noDisplayableProductError)
        ).text();
        gauge.message(nodisplayableProduct);
      }
    } else {
      gauge.message(
        'The Product with SKU ID - ' +
        skuIds[i] +
        ' is NOT available for adding it to Cart '
      );
    }
  }
  if (isAnyProductUnavailable) {
    assert(
      !matchCondition,
      'None of the products are available for adding it to Cart'
    );
  }
}

async function randomSkuFlow(
  randomSkuUrl,
  adminUrl,
  baseURL,
  addToCart,
  viewCartUrl
) {
  if (randomSkuUrl !== '') {
    await goto(adminUrl + randomSkuUrl, {
      waitForEvents: ['DOMContentLoaded'],
    });
    let skuIdUrl = await $(addToCart).attribute('href');
    await goto(adminUrl + skuIdUrl, {
      waitForEvents: ['DOMContentLoaded'],
    });
    await goto(baseURL + viewCartUrl, {
      waitForEvents: ['DOMContentLoaded'],
    });
  }
}

async function randomSkuOrProdCatFlow(
  randomSkuUrl,
  skuLink,
  adminUrl,
  baseURL,
  isShoppable,
  isDisplayable,
  pdpUrl,
  noDisplayableProductError,
  productUrl,
  skuIds,
  addToBag
) {
  const maxIterations = 5;
  let productUnavailable = true;
  if (randomSkuUrl !== '') {
    for (let i = 0; i < maxIterations; i++) {
      await goto(adminUrl + randomSkuUrl, {
        waitForEvents: ['DOMContentLoaded'],
      });

      let skuIdUrl = await $(skuLink).attribute('href');
      await goto(adminUrl + skuIdUrl, {
        waitForEvents: ['DOMContentLoaded'],
      });

      let SKUID = skuIdUrl.split('=')[1];
      const isShoppableValue =
        parseInt(await (await $(isShoppable)).text()) === 1;
      const isDisplayableValue =
        parseInt(await (await $(isDisplayable)).text()) !== 0;

      if (isShoppableValue && isDisplayableValue) {
        // productUnavailable = false;
        if (await (await $(pdpUrl)).exists()) {
          let url = await (await $(pdpUrl)).text();

          if (!(url.includes('custom') || url.includes('giftcard'))) {
            gauge.message(
              `The Product with ${SKUID} - ${url} is available and proceeding to add to Cart`
            );
            await goto(baseURL + url, {
              waitForNavigation: false,
            });

            if (await (await $(addToBag)).exists(pollingTime, timeout)) {
              productUnavailable = false;
              gauge.screenshot();
              break;
            } else {
              gauge.message(`Product not available to proceed further`);
            }
          } else {
            gauge.message(
              `The Product with ${SKUID} - ${url} is available but a custom product set and hence skipping this SKU`
            );
          }
        } else {
          let nodisplayableProduct = await (
            await $(noDisplayableProductError)
          ).text();
          gauge.message(
            `${nodisplayableProduct} and hence couldn't proceed with this SKU - ${SKUID}`
          );
        }
      } else {
        gauge.message(
          `The Product with ${SKUID} is NOT available for adding it to Cart `
        );
      }
    }
  }

  if (productUnavailable) {
    if (productUrl !== '') {
      await gotoProdcat(
        adminUrl,
        baseURL,
        skuIds,
        productUrl,
        isShoppable,
        isDisplayable,
        pdpUrl,
        noDisplayableProductError
      );
    }
  }
}

async function waitForElementNClick(element){
  if (element!== '') {
    for (let j = 1; j <= 5; j++) {
      if (await (await $(element)).exists()) {
        await evaluate(
          await $(element, {
            waitForEvents: ['loadEventFired'],
          }),
          (ele) => {
            ele.focus(), { force: true };
            ele.click();
          }
        );
        gauge.screenshot();
        break;
      } else {
        if (j == 5) {
          assert(
            false,
            'Element did not appear even after waiting for 62 sec'
          );
        }
        await waitFor(3000);
      }
    }
  }
}

module.exports = {
  ClickAction,
  WriteAction,
  TryCatchClickAction,
  TryCatchScrollAction,
  ClickInLoop,
  ElementAction,
  existsClickAction,
  PopUpClose,
  AssertUrl,
  AssertText,
  focusClickAction,
  getTransId,
  removeExcessProduct,
  randomSkuOrProdCatFlow,
  randomSkuFlow,
  gotoProdcat,
  waitForElementNClick
};
