const { expect } = require('@playwright/test');
const PageModel = require('../PageModel');
const Util = require('../../../../utilities/util');
// TODO: Take the pickedSkuIds inside the class
const pickedSkuIds = [];
class SkuPageModel extends PageModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }

  // TODO: We have to cleanup below three functions and rename them to more meaningful names
  /**
   * Retrieves product catalog data, iterates through SKU IDs, and adds the available products to the cart.
   *
   * @param {string} adminUrl - Admin base URL.
   * @param {string} baseURL - Base URL for the main website.
   * @param {Array<string>} skuIds - Array of SKU IDs to be processed.
   * @param {string} prodCatUrl - Locator for the product catalog URL.
   * @param {string} isShoppable - Locator for determining if the product is shoppable.
   * @param {string} isDisplayable - Locator for determining if the product is displayable.
   * @param {string} donationElem - Locator for determining if the product is not donation sku.
   * @param {string} sppUrl - Locator for the product detail page (PDP) URL.
   * @param {string} noDisplayableProductError - Locator for an error message when the product is not displayable.
   * @param {Array<string>} pdpUrlList - Array of PDP URLs for product availability check in prEnv environment.
   * @param {string} pdpSkuElem - Locator for the PDP SKU element.
   * @param {string} pdpSkuValue - Attribute value to be checked in the PDP SKU element.
   * @param {number} [qty=1] - Quantity of the product to add to the cart.
   * @param {string} [addToBagUrl=''] - Additional URL for adding the product to the cart, if applicable.
   * @returns {Promise<void>} A Promise that resolves after retrieving and processing product catalog data.
   */

  // TODO: Disabling max-params rule for existing functions to allow
  // lint checks to pass. This will be addressed in QAP-2666
  // eslint-disable-next-line max-params
  getProdcatData = async (
    adminUrl,
    baseURL,
    skuIds,
    prodCatUrl,
    isShoppable,
    isDisplayable,
    donationElem,
    sppUrl,
    noDisplayableProductError,
    pdpUrlList,
    pdpSkuElem,
    pdpSkuValue,
    qty = 1,
    addToBagUrl = ''
  ) => {
    let donationElemLocator = donationElem;
    // TODO: donationElem field value should not be defaulted to hardcoded value.
    // This hardcoded value will be removed after migration script.
    if (!donationElem) {
      donationElemLocator =
        '//*[@id="Sku_Details"]/table[9]/tbody/tr[19]/td[3]';
    }
    if (
      this.siteData.executionContext.environment !==
      Util.environments.prEnv.toUpperCase()
    ) {
      let isAnyProductUnavailable = true;
      let nodisplayableProduct = '';
      for (let i = 0; i < skuIds.length; i++) {
        await this.page.goto(adminUrl + prodCatUrl + skuIds[i]);
        const isShoppableValue =
          parseInt(await this.page.locator(isShoppable).textContent()) === 1;

        const isDisplayableValue =
          parseInt(await this.page.locator(isDisplayable).textContent()) !== 0;

        const isDonation =
          parseInt(
            await this.page.locator(donationElemLocator).textContent()
          ) === 0;
        if (
          isShoppableValue &&
          isDisplayableValue &&
          !pickedSkuIds.includes(skuIds[i]) &&
          isDonation
        ) {
          isAnyProductUnavailable = false;
          console.log(
            `${this.siteData.brandLocale} :  The Product with ` +
              skuIds[i] +
              '-' +
              ' is available and proceeding to add to Cart'
          );
          pickedSkuIds.push(skuIds[i]);
          if (qty === 1) {
            const sppPageUrl = await this.page.locator(sppUrl);
            if (sppPageUrl.isVisible()) {
              const url = await this.page.locator(sppUrl).textContent();
              console.log(url);
              await this.page.goto(baseURL + url);
              // await this.page.waitForTimeout(8000);
              await this.screenshot();
              break;
            } else {
              nodisplayableProduct = await this.page
                .locator(noDisplayableProductError)
                .textContent();
              console.log(nodisplayableProduct);
            }
          } else {
            await this.page.goto(
              addToBagUrl + skuIds[i].replace(/\D/g, '') + `&QTY=${qty}`
            );
            await this.page.waitForNavigation();
            break;
          }
        } else {
          console.log(
            `${this.siteData.brandLocale}: The Product with ` +
              skuIds[i] +
              ' is NOT available for adding it to Cart '
          );
        }
        console.log('next iteration');
      }
      if (isAnyProductUnavailable) {
        await expect(isAnyProductUnavailable).toContain('false');
        console.log(
          `${this.siteData.brandLocale} : None of the products are available for adding it to Cart`
        );
      }
    } else {
      let foundMatchingProduct = false;

      for (let i = 0; i < pdpUrlList.length; i++) {
        await this.page.goto(baseURL + pdpUrlList[i]);
        // Fetch the current page URL using page.url()
        const currentURL = await this.page.url();
        console.log(
          `${this.siteData.brandLocale} - Current Page URL: ${currentURL}`
        );

        const productSize = currentURL.split('=')[1].replace('_', ' ');
        console.log(
          `${this.siteData.brandLocale} : Product Size: ${productSize}`
        );

        const attributeValue = await this.page
          .locator(pdpSkuElem)
          .first()
          .getAttribute(pdpSkuValue);

        if (attributeValue) {
          const parsedSkus = JSON.parse(attributeValue);
          // Now, parsedSkus contains the parsed JSON object

          for (let j = 0; j < parsedSkus.length; j++) {
            if (
              parsedSkus[j].size === productSize &&
              parsedSkus[j].inventory_status === 'active'
            ) {
              console.log(
                `${this.siteData.brandLocale} : Products Inventory Status is : ` +
                  parsedSkus[j].inventory_status +
                  ' So, Product is available for add to cart.'
              );
              foundMatchingProduct = true;
              break;
            } else {
              console.log(
                `${this.siteData.brandLocale} : Either Product or its size not availbale. ` +
                  'Products Inventory Status is : ' +
                  parsedSkus[j].inventory_status
              );
            }
          }
        }

        if (foundMatchingProduct) {
          break;
        } else {
          console.log(
            `${this.siteData.brandLocale} : Product is not availbale so,iterating to next product`
          );
        }
      }
    }
  };

  /**
   * Retrieves random product data, navigates to the corresponding product page, and validates its availability.
   *
   * @param {string} randomSkuUrl - Locator for the random SKU URL.
   * @param {string} skuLink - Locator for the SKU link on the admin page.
   * @param {string} adminUrl - Admin base URL.
   * @param {string} baseURL - Base URL for the main website.
   * @param {string} isShoppable - Locator for determining if the product is shoppable.
   * @param {string} isDisplayable - Locator for determining if the product is displayable.
   * @param {string} donationElem - Locator for determining if the product is not donation sku.
   * @param {string} pdpUrl - Locator for the product detail page (PDP) URL.
   * @param {string} noDisplayableProductError - Locator for an error message when the product is not displayable.
   * @param {string} prodCatUrl - Locator for the product catalog URL, used in case of product unavailability.
   * @param {string} skuIds - SKU IDs, if needed for further processing.
   * @param {string} addToBag - Locator for the "Add to Bag" button.
   * @param {number} qty - Quantity of the product to add to the cart.
   * @param {string} [randomAddToCartUrl=''] - Locator for the random "Add to Cart" URL, if applicable.
   * @returns {Promise<void>} A Promise that resolves after retrieving and processing random product data.
   */

  // TODO: Disabling max-params rule for existing functions to allow
  // lint checks to pass. This will be addressed in QAP-2666
  // eslint-disable-next-line max-params
  getRandomData = async (
    randomSkuUrl,
    skuLink,
    adminUrl,
    baseURL,
    isShoppable,
    isDisplayable,
    donationElem,
    pdpUrl,
    noDisplayableProductError,
    prodCatUrl,
    skuIds,
    addToBag,
    pdpUrlList,
    pdpSkuElem,
    pdpSkuValue,
    randomAddToCartUrl = '',
    qty = 1,
    addToBagUrl = ''
  ) => {
    const maxIterations = 5;
    let productUnavailable = true;
    let skuIdUrl = '';
    let customQtyAddToCartUrl = '';
    let SkuId = '';
    let pdpUrlLink = '';
    let noDisplayableProduct = '';
    let donationElemLocator = donationElem;
    // TODO: donationElem field value should not be defaulted to hardcoded value.
    // This hardcoded value will be removed after migration script.
    if (!donationElem) {
      donationElemLocator =
        '//*[@id="Sku_Details"]/table[9]/tbody/tr[19]/td[3]';
    }
    if (randomSkuUrl !== '') {
      for (let i = 0; i < maxIterations; i++) {
        await this.page.goto(adminUrl + randomSkuUrl);
        skuIdUrl = await this.page.locator(skuLink).getAttribute('href');
        if (randomAddToCartUrl !== '') {
          customQtyAddToCartUrl = (
            await this.page.locator(randomAddToCartUrl).getAttribute('href')
          ).replace('QTY=1', `QTY=${qty}`);
        }
        await this.page.goto(adminUrl + skuIdUrl);

        SkuId = skuIdUrl.split('=')[1];

        const isShoppableValue =
          parseInt(await this.page.locator(isShoppable).textContent()) === 1;

        const isDisplayableValue =
          parseInt(await this.page.locator(isDisplayable).textContent()) !== 0;

        const isDonation =
          parseInt(
            await this.page.locator(donationElemLocator).textContent()
          ) === 0;

        if (isShoppableValue && isDisplayableValue && isDonation) {
          // const pdpPageUrl = this.page.locator(pdpUrl);
          if (this.page.locator(pdpUrl).isVisible()) {
            pdpUrlLink = await this.page.locator(pdpUrl).textContent();

            if (
              !(
                pdpUrlLink.includes('custom') || pdpUrlLink.includes('giftcard')
              )
            ) {
              console.log(
                `${this.siteData.brandLocale} :  The Product with ` +
                  SkuId +
                  pdpUrlLink +
                  ' is available and proceeding to add to Cart'
              );
              if (qty === 1) {
                await this.page.goto(baseURL + pdpUrlLink);
              } else {
                if (customQtyAddToCartUrl) {
                  await this.page.goto(baseURL + customQtyAddToCartUrl);
                  await this.page.waitForNavigation();
                } else {
                  throw new Error(
                    `${this.siteData.brandLocale} : Please provide locator value for randomAddToCartUrlElem`
                  );
                }
              }
              if (this.page.locator(addToBag).first().isVisible()) {
                productUnavailable = false;
                await this.screenshot();
                break;
              } else {
                console.log(
                  `${this.siteData.brandLocale} :  Product not available to proceed further`
                );
              }
            } else {
              console.log(
                `${this.siteData.brandLocale} : The Product with  ` +
                  SkuId +
                  '- ' +
                  pdpUrlLink +
                  ' is available but a custom product set and hence skipping this SKU'
              );
            }
          } else {
            noDisplayableProduct = await this.page
              .locator(noDisplayableProductError)
              .textContent();
            console.log(
              `${this.siteData.brandLocale} :  ${noDisplayableProduct} ` +
                ' and hence couldnt proceed with this SKU - ' +
                SkuId
            );
          }
        } else {
          console.log(
            `${this.siteData.brandLocale} : The Product with ` +
              SkuId +
              ' is NOT available for adding it to Cart '
          );
        }
      }
    }

    if (productUnavailable) {
      if (prodCatUrl !== '') {
        await this.getProdcatData(
          adminUrl,
          baseURL,
          skuIds,
          prodCatUrl,
          isShoppable,
          isDisplayable,
          donationElem,
          pdpUrl,
          noDisplayableProductError,
          pdpUrlList,
          pdpSkuElem,
          pdpSkuValue,
          qty,
          addToBagUrl
        );
      }
    }
  };

  /**
   * Ensure the user can add products from the prodcat tool using specific SKUs without navigating to the PDP pages.
   * @async
   * @function addProductWithoutPDPNavigation
   * @param {string} adminUrl - URL for administrative purposes.
   * @param {string[]} skuIds - Array of SKU identifiers.
   * @param {string} prodCatUrl - URL related to the product category.
   * @param {string} isShoppable - Element identifier related to shoppability.
   * @param {string} isDisplayable - Element identifier related to displayability.
   * @param {string} addToCart - Element identifier related to adding to the cart.
   * @param {string} pcCheckoutButtonID - Element identifier for PC checkout button.
   * @param {string} mobCheckoutButtonID - Element identifier for mobile checkout button.
   * @returns {Promise<void>}
   */
  addProductWithoutPDPNavigation = async ({
    adminUrl,
    skuIds,
    prodCatUrl,
    isShoppable,
    isDisplayable,
    addToCart,
    pcCheckoutButtonID,
    mobCheckoutButtonID,
    viewCartUrl = '',
  }) => {
    if (
      this.siteData.executionContext.environment !==
      Util.environments.prEnv.toUpperCase()
    ) {
      let isAnyProductUnavailable = true;
      let CheckoutButton;
      for (let i = 0; i < skuIds.length; i++) {
        await this.page.goto(adminUrl + prodCatUrl + skuIds[i]);
        const isShoppableValue =
          parseInt(await this.page.locator(isShoppable).textContent()) === 1;
        const isDisplayableValue =
          parseInt(await this.page.locator(isDisplayable).textContent()) !== 0;
        if (isShoppableValue && isDisplayableValue) {
          isAnyProductUnavailable = false;
          console.log(
            `The Product with ${skuIds[i]} is available and proceeding to add to Cart`
          );
          await this.screenshot();
          await this.page.locator(addToCart).first().click();
          console.log('Add to Cart Link is clicked on Prodcat Tool');
          if (this.siteData.executionContext.platform === Util.devices.pc) {
            CheckoutButton = await this.page.locator(pcCheckoutButtonID);
          } else {
            CheckoutButton = await this.page.locator(mobCheckoutButtonID);
          }
          for (i = 0; i <= 1; i++) {
            await this.page.goto(adminUrl + viewCartUrl, {
              WaitUntil: 'domcontentloaded',
            });
            await expect(CheckoutButton.first()).toBeVisible();
            if (CheckoutButton.isVisible()) {
              console.log('View Cart Page is loaded');
              await this.screenshot();
              break;
            } else {
              await this.page.reload();
              console.log(
                'View Cart Page is not loading, so page is re-loaded'
              );
            }
          }
          break;
        } else {
          console.log(
            `The Product with ${skuIds[i]} is NOT available for adding it to Cart`
          );
        }
        console.log('next iteration');
      }
      if (isAnyProductUnavailable) {
        await expect(isAnyProductUnavailable).toContain('false');
        console.log('None of the products are available for adding it to Cart');
      }
    }
  };
}

module.exports = SkuPageModel;
