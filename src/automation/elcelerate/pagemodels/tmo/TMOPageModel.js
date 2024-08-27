const PageModel = require('../PageModel.js');
const { expect } = require('@playwright/test');

class TMOPageModel extends PageModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }

  /**
   * Returns a random order id from the provided array of order ids.
   *
   * @param {string[]} tmoOrderIds - An array of test order ids.
   * @returns {Promise<void>} - A promise that return one random order id
   * @memberof TMOPageModel
   */
  getRandomOrderId = (tmoOrderIds) => {
    return tmoOrderIds[Math.floor(Math.random() * tmoOrderIds.length)];
  };

  /**
   * Goto the TMO landing page.
   * @param {string} tmoUrl - TMO landing page url.
   * @param {string} siteUrl - Site base url.
   * @returns {Promise<void>} - A promise that go to TMO landing page
   * @memberof TMOPageModel
   */
  gotoTMOLandingPage = async (tmoUrl, siteUrl) => {
    await this.page.goto(siteUrl + tmoUrl);
    console.log('Navigated to TMO Landing Page');
    await this.screenshot();
  };

  /**
   * Validate the TMO landing page order id
   * @param {string} tmoOrderInputElem - Locator for the order id input field.
   * @param {string} tmoContinueElem - Locator for the continue button field.
   * @param {string} tmoorderId - Test order id.
   * @returns {Promise<void>} - A promise that validate order id and go to order details page.
   * @memberof TMOPageModel
   */
  validateTMOOrderId = async (
    tmoOrderInputElem,
    tmoContinueElem,
    tmoOrderId
  ) => {
    if (tmoOrderInputElem) {
      await expect(this.page.locator(tmoOrderInputElem).first()).toBeEditable();
      await this.page.locator(tmoOrderInputElem).first().fill(tmoOrderId);
      await this.page.locator(tmoContinueElem).click({ force: true });
      await this.page.waitForTimeout(5000);
      await this.screenshot();
    }
  };

  /**
   * Get the order id status and deatils
   * @param {string} tmoCurrentStatusElem - Locator for the order id current status field.
   * @param {string} tmoCurrentValueElem - Locator for the order id current status description field.
   * @param {string} tmoOrderDetailsElem - Locator for the order id details field.
   * @returns {Promise<void>} - A promise that return order details.
   * @memberof TMOPageModel
   */
  getTMOStatus = async (
    tmoCurrentStatusElem,
    tmoCurrentValueElem,
    tmoOrderDetailsElem
  ) => {
    if (tmoCurrentStatusElem) {
      await expect(this.page.locator(tmoCurrentStatusElem)).toBeVisible();
      const getOrderStatus = await this.page
        .locator(tmoCurrentStatusElem)
        .first()
        .textContent();
      console.log('Order Stauts: ' + getOrderStatus);
    }
    if (tmoCurrentValueElem) {
      await expect(this.page.locator(tmoCurrentValueElem)).toBeVisible();
      const getOrderStatusDescription = await this.page
        .locator(tmoCurrentValueElem)
        .first()
        .textContent();
      console.log('Order Status Description: ' + getOrderStatusDescription);
    }
    for (let iCnt = 0; iCnt < tmoOrderDetailsElem.length; iCnt++) {
      const element = tmoOrderDetailsElem[iCnt];
      if (element) {
        await expect(this.page.locator(element)).toBeVisible();
        const getOrderDetails = await this.page
          .locator(element)
          .first()
          .textContent();
        console.log('Order details: ' + getOrderDetails);
      }
    }
  };

  /**
   * Goto the TMO landing page policy pages
   * @param {string} tmoCustomerServiceElem - Locator for the customer service page link.
   * @param {string} tmoReturnPolicyElem - Locator for the return policy page link.
   * @param {string} tmoUrl - TMO landing page url.
   * @param {string} siteUrl - Site base url.
   * @returns {Promise<void>} - A promise that vaildate click in TMO landing policy pages.
   * @memberof TMOPageModel
   */
  clickTMOPolicyPageLink = async (
    tmoCustomerServiceElem,
    tmoReturnPolicyElem,
    tmoUrl,
    siteUrl
  ) => {
    if (tmoCustomerServiceElem) {
      await this.page.locator(tmoCustomerServiceElem).click({ force: true });
      console.log('Verified Customer Service Page');
      await this.screenshot();
      await this.gotoTMOLandingPage(tmoUrl, siteUrl);
    }

    if (tmoReturnPolicyElem) {
      await this.page.locator(tmoReturnPolicyElem).click({ force: true });
      console.log('Verified Return Policy Page');
      await this.screenshot();
    }
  };

  /**
   * Retrieves the order number from the order confirmation page.
   *
   * @param {string} orderConfirmationIdElem - Locator for the element containing the order confirmation number.
   * @param {string} tmoOrderInputElem - Locator for the order id input field.
   * @param {string} tmoContinueElem - Locator for the continue button field.
   * @param {string} tmoUrl - TMO landing page url.
   * @param {string} siteUrl - Site base url.
   * @returns {Promise<void>} - A Promise that resolves after retrieving the order number.
   * @memberof TMOPageModel
   */
  getOrderNumber = async (
    tmoOrderInputElem,
    tmoContinueElem,
    orderConfirmationIdElem,
    tmoUrl,
    siteUrl
  ) => {
    if (orderConfirmationIdElem) {
      const orderId = await this.page
        .locator(orderConfirmationIdElem)
        .first()
        .textContent();
      console.log('Test order is placed using creditcard:' + orderId);
      await this.screenshot();
      await this.gotoTMOLandingPage(tmoUrl, siteUrl);
      await this.validateTMOOrderId(
        tmoOrderInputElem,
        tmoContinueElem,
        orderId
      );
    }
  };
}

module.exports = TMOPageModel;
