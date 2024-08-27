/* eslint-disable node/prefer-global/url-search-params */
const { URLSearchParams } = require('url');

const globalJSON = require('../../../../datainterface/data/json/analytics/globalGA4.json');
const PageModel = require('../PageModel');

class GA4PageModel extends PageModel {
  /**
   * Creates an instance of GA4PageModel.
   *
   * @param {Object} testInfo - Information about the test.
   * @param {Page} page - The Playwright page object.
   * @param {Object} data - Data (locatorData, testData, siteData) for the test.
   * @param {Object} productDetails - will collect and store the product details in local.
   * @param {Object} brandDetails - Contains the tags details for particular brand local from respective JSON file.
   */
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
    this.analFlag = false;
    this.commonTags = globalJSON[0];
    this.homePageProductList = this.commonTags.prodImpression.homePageProducts;
    this.productsCountInPage = '';
  }

  /**
   * The tags captured from the regexed GA4 are verified against the data expected data, stored in JSON.
   * Compares expected data with actual data and logs the verification status for each key-value pair.
   *
   * @param {Object} expectedData - The expected data to be compared.
   * @param {Object} actual - The actual data for comparison.
   *  @memberof GA4PageModel
   */
  compareJSON = (expectedData, actual, verifyAll) => {
    if (expectedData) {
      const tag = Object.keys(expectedData);
      for (let i = 0; i < tag.length; i++) {
        for (const [key, value] of actual) {
          if (
            Object.keys(expectedData)[i] === key &&
            Object.values(expectedData)[i] === value &&
            verifyAll
          ) {
            console.log(key + '=' + value + '   is verified');
          } else if (
            Object.keys(expectedData)[i] === key &&
            value.includes(Object.values(expectedData)[i]) &&
            verifyAll === false
          ) {
            console.log(key + '=' + value + '   is verified');
          } else if (
            Object.keys(expectedData)[i] === key &&
            Object.values(!expectedData)[i] === value
          ) {
            console.log(key + '=' + value + 'is not verified');
          }
        }
      }
    } else {
      console.log('Some parameters are not available for verification');
    }
  };

  /**
   * The tags captured from the regexed GA4 are verified against the data expected data, stored in JSON.
   * Compares expected data with actual data and logs the verification status for each key-value pair.
   *
   * @param {Object} expectedData - The expected data to be compared.
   * @param {Object} actual - The actual data for comparison.
   *  @memberof GA4PageModel
   */
  checkProductDetails = (productDetails, pr1) => {
    if (!productDetails) {
      console.error('Product details are null or undefined.');
      return;
    }

    const unMatchedValues = {};
    const matchedValues = {};

    Object.values(productDetails).forEach((value) => {
      const encodedValue = encodeURIComponent(value).replace(/~/g, '%7E');
      if (pr1.includes(encodedValue)) {
        matchedValues[value] = value;
      } else {
        unMatchedValues[value] = value;
      }
    });

    Object.keys(matchedValues).forEach((key) => {
      console.log(`${key} is verified`);
    });
    Object.keys(unMatchedValues).forEach((key) => {
      console.log(`${key} is not verified`);
    });
  };

  /**  GA4 regexed data are converted to JSON and tags are mapped to verify.
   *
   * @param {Array<string>} GA4Data - An array containing URL and postData of intercepted requests.
   * @returns {Promise<void>} - A promise that resolves after GA4 regexed data are converted to JSON and tags are mapped to verify successfully.
   * @memberof GA4PageModel
   */
  tagValidation = async (
    GA4Data,
    brandDetails,
    impressions,
    productDetails,
    revenueDetails
  ) => {
    const ga4Regex = this.commonTags.misc.GA4Regex;
    const result = {};
    let tempEvent = [];
    let verifyAll = true;
    let tempPage = '';
    const ga4Page = this.commonTags.ga4Page;
    const events = this.commonTags.events;
    let purchaseEventCaptured = false;
    let dataArray;
    if (GA4Data) {
      for (let tags of GA4Data) {
        if (tags !== null) {
          dataArray = tags.includes('en=')
            ? tags.split(/(?=en=)/)
            : [decodeURIComponent(tags)];
          dataArray.forEach((dataForIteration) => {
            tags = new URLSearchParams(dataForIteration);
            const actualData = Array.from(tags.entries());
            for (const page of ga4Page) {
              const pageTemplate = (
                dataForIteration.split('ep.page_template=')[1] || ''
              ).split('&')[0];
              const actualEvent = (
                dataForIteration.split('en=')[1] || ''
              ).split('&')[0];
              const pr1 = (dataForIteration.split('pr1=')[1] || '').split(
                '&'
              )[0];
              for (const event of events) {
                if (pageTemplate === page && actualEvent === event) {
                  tempEvent.push(actualEvent);
                  tempPage = page;
                  console.log(
                    '\n\nVerifying GA4 from ',
                    page,
                    ' and validating ',
                    event
                  );
                  console.log(
                    '```````````````````````````````````````````````````````'
                  );
                  this.compareJSON(brandDetails.BrandInfo, tags, verifyAll);
                  this.compareJSON(this.commonTags[page], tags, verifyAll);
                  this.compareJSON(this.commonTags[event], tags, verifyAll);
                  if (
                    actualEvent === 'page_view' &&
                    pageTemplate === 'checkout'
                  ) {
                    const orderTypeData = actualData.find(
                      ([key]) => key === 'ep.page_type'
                    );
                    const orderType = orderTypeData ? orderTypeData[1] : null;
                    if (orderType === 'order') {
                      const queryString = tags.get('ep.query_string');
                      const pageType = tags.get('ep.page_type');
                      const contentGroup = tags.get('ep.content_group');
                      console.log(queryString);
                      const expectedData = {
                        'ep.query_string': queryString,
                        'ep.page_type': pageType,
                        'ep.content_group': contentGroup,
                      };
                      this.compareJSON(expectedData, actualData, verifyAll);
                    }
                  }
                  if (actualEvent === 'purchase') {
                    if (revenueDetails) {
                      const transactionId = tags.get('epn.transaction_id');
                      const shipping = tags.get('epn.shipping');
                      const tax = tags.get('epn.tax');
                      const value = tags.get('epn.value');
                      const revenueDetailsToCompare = {
                        'epn.transaction_id': transactionId,
                        'epn.shipping': shipping,
                        'epn.tax': tax,
                        'epn.value': value,
                      };
                      if (tags) {
                        this.compareJSON(
                          revenueDetailsToCompare,
                          actualData,
                          verifyAll
                        );
                      } else {
                        console.log('Tags are null, cannot compare.');
                      }
                    }
                  }
                  if (event === 'view_item_list' && impressions) {
                    verifyAll = false;
                    this.compareJSON(impressions, tags, verifyAll);
                  } else if (!impressions && event === 'view_item_list') {
                    console.log(
                      'No impressions data available for view_item_list event'
                    );
                  } else if (
                    pr1 &&
                    (event !== 'view_item_list') | (event !== 'select_item')
                  ) {
                    this.checkProductDetails(productDetails, pr1);
                  }
                  if (tempPage) {
                    result[tempPage] = tempEvent;
                  }
                  purchaseEventCaptured = true;
                  break;
                }
              }
              tempEvent = [];
            }
          });
        }
      }
    } else {
      console.log('No regxed data');
    }
    if (!purchaseEventCaptured) {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second
    }

    await this.page.route(ga4Regex, (route) => route.abort());
    return result;
  };
}
module.exports = GA4PageModel;
