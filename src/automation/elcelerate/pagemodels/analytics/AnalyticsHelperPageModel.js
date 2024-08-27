/* eslint-disable node/prefer-global/url-search-params */
const PopupPageModel = require('../common/PopupPageModel');
const PageModel = require('../PageModel');
const path = require('path');

class AnalyticsHelperPageModel extends PageModel {
  /**
   * Creates an instance of AnalyticsHelperPageModel.
   *
   * @param {Object} testInfo - Information about the test.
   * @param {Page} page - The Playwright page object.
   * @param {Object} data - Data (locatorData, testData, siteData) for the test.
   * @param {String} jsonPath - path of the regional JSON file.
   * @param {Object} productDetails - will collect and store the product details in local.
   */
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
    this.jsonPath = '';
    this.productDetails = {
      [this.pID]: this.pid,
      [this.pName]: this.pname,
      [this.pSkuID]: this.pskuID,
      [this.pPrice]: this.pprice,
      [this.pSize]: this.psize,
      [this.pVariant]: this.pvariant,
    };
  }

  /**
   * Asynchronously intercepts network requests matching the provided GA4Regex pattern.
   *
   * @param {RegExp} ga4Regex - The regular expression pattern to match against network request URLs.
   * @type {Array<string>} payloadData - Array to store URL and postData of intercepted requests
   * @returns {Promise<Array<string>>} - A promise that resolves to an array containing URL and postData of intercepted requests.
   * @memberof AnalyticsHelperPageModel
   */
  intercept = async (regexURL) => {
    const payloadData = [];
    await this.page.route(regexURL, async (route) => {
      const request = route.request();
      payloadData.push(request.url());
      payloadData.push(request.postData());
      await route.continue();
    });
    return payloadData;
  };

  /** pickJSON used to pick the respective regional JSON files
   *
   * @param {Object} commonTags - The common JSON objects.
   * @param {String} local - have the local site value.
   * @param {String} selectJSON - pick the region of loacl fromJSON file
   * @returns {Promise<String>} - A promise that resolves to a string containig path of regional json file.
   * @memberof AnalyticsHelperPageModel
   */
  pickJSON = (locale, commonTags) => {
    const selectJSON = Object.keys(commonTags.regionFromLocal).find((key) =>
      commonTags.regionFromLocal[key].includes(locale)
    );
    this.jsonPath = path.join(
      __dirname,
      '../../../../datainterface/data/json/analytics/' +
        [selectJSON.toLocaleLowerCase()] +
        'GA4.json'
    );
    console.log(this.jsonPath);
    return this.jsonPath;
  };

  /** accept cookies is necessary to tags capturing in the network
   * @param {Object} commonTags - The common JSON objects.
   * @param {String} acceptCookies - Contains the locator for cookie accept button.
   * @returns {Promise<void>} - A promise that resolves after successfully accepted the cookies.
   * @memberof AnalyticsHelperPageModel
   */
  acceptCookies = async (commonTags) => {
    const acceptCookies = [commonTags.misc.acceptCookie];
    await new PopupPageModel(this.testInfo, this.page, this.data).closePopup(
      acceptCookies
    );
  };

  /** The details of the product are captured before adding to cart,
   * @param {Object} context - Browser context for a new page.
   * @param {Object} commonTags - The common JSON objects.
   * @returns {Promise<void>} - A promise that resolves after reading product details and storing it in local successfully.
   * @memberof AnalyticsHelperPageModel
   */
  readProductDetails = async (context, commonTags) => {
    const prodLocator = commonTags.prodImpression.firstProductInThePage;

    const productAttributeSkuID = commonTags.productAttribute.dataProductID;
    const productAttributeSkuValue =
      commonTags.productAttribute.dataProductIDValue;

    const getProductSku = async (attribute) => {
      try {
        const skuElement = await this.page
          .locator(prodLocator)
          .first()
          .getAttribute(attribute);
        return skuElement;
      } catch (e) {
        console.log('No product captured in this page');
      }
    };

    const skuID = await getProductSku(productAttributeSkuID);
    const sku2Value = await getProductSku(productAttributeSkuValue);

    const sku = skuID || sku2Value;

    console.log('productSku', sku);

    const skuInfoPage = await context.newPage();
    await skuInfoPage.goto(
      `${this.siteData.executionContext.adminUrl}${commonTags.sharedTool}SKU${sku}`
    );
    try {
      const productCatalog = Promise.all([
        await skuInfoPage
          .locator(commonTags.productAttributes.pID)
          .textContent(),
        await skuInfoPage
          .locator(commonTags.productAttributes.pName)
          .textContent(),
        await skuInfoPage
          .locator(commonTags.productAttributes.pSkuID)
          .textContent(),
        await skuInfoPage
          .locator(commonTags.productAttributes.pPrice)
          .textContent(),
        await skuInfoPage
          .locator(commonTags.productAttributes.pSize)
          .textContent(),
        await skuInfoPage
          .locator(commonTags.productAttributes.pVariant)
          .textContent(),
      ]);
      const [
        pIdValue,
        pNameValue,
        pSkuIDValue,
        pPriceValue,
        pSizeValue,
        pVariantValue,
      ] = await productCatalog;
      const { pIDKey, pNameKey, pSkuIDKey, pPriceKey, pSizeKey, pVariantKey } =
        {
          pIDKey: 'ProdID',
          pNameKey: 'ProdName',
          pSkuIDKey: 'ProdSkuID',
          pPriceKey: 'ProdPrice',
          pSizeKey: 'ProdSize',
          pVariantKey: 'ProdVariant',
        };

      this.productDetails = {
        [pIDKey]: pIdValue,
        [pNameKey]: pNameValue,
        [pSkuIDKey]: pSkuIDValue,
        [pPriceKey]: pPriceValue,
        [pSizeKey]: pSizeValue,
        [pVariantKey]: pVariantValue,
      };
      skuInfoPage.close();
      return this.productDetails;
    } catch (e) {
      console.log('Product details are not available');
    }
  };

  /**
   * product in the home page, PLP, and products in recommened section of PDP are captured, for verification
   *
   * @param {Object} commonTags - The common JSON objects.
   * @param {String} HomePageProductList - Locator for the product impressions.
   * @param {String} productsCountInPage - the number of products available in a page.
   * @param {String} productList - list the products available in the page
   * @param {String} prodID - contains the id of the product.
   * @returns {Promise<void>} - A promise that resolves after successfully read the product impressions on respective pages.
   *  @memberof AnalyticsHelperPageModel
   */
  trackImpressions = async (commonTags) => {
    const homePageProductList = commonTags.prodImpression.homePageImpression;
    const plpPageProducts = commonTags.prodImpression.plpPageProducts;
    const productList = {};
    let prodID;
    let impressionFlag = false;
    try {
      if (await this.page.locator.homePageProductList) {
        impressionFlag = true;
        prodID = await this.page
          .locator(`${homePageProductList}[${1}]`)
          .first()
          .getAttribute('data-product-id');
      } else if (await this.page.locator.plpPageProducts) {
        impressionFlag = true;
        prodID = await this.page
          .locator(`${plpPageProducts}[${1}]`)
          .first()
          .getAttribute('data-product-productid-value');
      }
      if (impressionFlag) {
        const prodImpression = prodID.includes('PROD')
          ? `id${prodID}`
          : `idPROD${prodID}`;
        const tempIDKey = `pr${1}`;
        productList[tempIDKey] = prodImpression;
      }
    } catch (e) {
      console.log('Impression is either not available, or not tracked');
    }
    return productList;
  };

  /** payRevenueDetails
   * @param {Object} commonTags - The common JSON objects.
   * @returns {Promise<void>} - A promise that resolves after successfully accepted the cookies.
   * @memberof AnalyticsHelperPageModel
   */

  payRevenueDetails = async (commonTags) => {
    const revenueSelector = commonTags.paymentRevenueDetails.revenue;
    const shippingSelector = commonTags.paymentRevenueDetails.shipping;
    const subTotalSelector = commonTags.paymentRevenueDetails.subtotal;
    const taxSelector = commonTags.paymentRevenueDetails.tax;
    await Promise.all([
      this.page.waitForSelector(revenueSelector),
      this.page.waitForSelector(shippingSelector),
      this.page.waitForSelector(subTotalSelector),
      this.page.waitForSelector(taxSelector),
    ]);
    const revenueElement = await this.page.$(revenueSelector);
    const shippingElement = await this.page.$(shippingSelector);
    const subTotalElement = await this.page.$(subTotalSelector);
    const taxElement = await this.page.$(taxSelector);
    const revenue = (await revenueElement.textContent()).replace(
      /[^0-9\\.]+/g,
      ''
    );
    const shipping = (await shippingElement.textContent()).replace(
      /[^0-9\\.]+/g,
      ''
    );
    const subTotal = (await subTotalElement.textContent()).replace(
      /[^0-9\\.]+/g,
      ''
    );
    const tax = (await taxElement.textContent()).replace(/[^0-9\\.]+/g, '');
    this.revenueDetails = {
      revenue: revenue,
      shipping: shipping,
      subTotal: subTotal,
      tax: tax,
    };
    console.log('Revenue detauils : ', this.revenueDetails);
  };

  /** mergeReports summary.
   *
   * @param {string} input - consolidated report of each page
   * @returns {Promise<void>} summeraizing common keys, with tags.
   * @memberof AnalyticsHelperPageModel
   */

  mergeReports = (input) => {
    const mergedReport = {};
    input.forEach((obj) => {
      for (const [key, value] of Object.entries(obj)) {
        if (key in mergedReport) {
          mergedReport[key] = mergedReport[key].concat(value);
        } else {
          mergedReport[key] = value;
        }
      }
    });

    return Object.entries(mergedReport).map(([key, value]) => ({
      [key]: value,
    }));
  };

  /** Final report summary.
   *
   * @param {string} sanityReport - Report stored in the JSON for comparion
   * @param {string} endReport - Result obtained from excution to compare with sanity report
   * @param {string} getArrayDifference - To check the element is present in the array
   * @returns {Promise<void>} A Promise that summerises the final report.
   * @memberof AnalyticsHelperPageModel
   */

  finalReport = (sanityReport, endReport) => {
    const finalReport = this.mergeReports(endReport);
    const getArrayDifference = (arr1, arr2) => {
      return arr1.filter((value) => !arr2.includes(value));
    };
    console.log('FINAL CONSOLIDATED REPORT');
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');
    finalReport.forEach((finalItem) => {
      Object.keys(finalItem).forEach((key) => {
        if (key in finalItem) {
          const finalValues = Object.values(finalItem);
          const sanityValues = sanityReport.find((item) =>
            Object.values(finalItem).includes(item)
          );
          if (sanityValues) {
            const diff = getArrayDifference(finalValues, sanityValues[key]);
            if (diff.length > 0) {
              console.log(
                `\n In ${key}: the tags ${diff} has not fired as expected\n`
              );
            }
          } else {
            console.log(`\n${key}: ${finalValues}\n are Fires as expected`);
          }
        }
      });
    });
  };
}
module.exports = AnalyticsHelperPageModel;
