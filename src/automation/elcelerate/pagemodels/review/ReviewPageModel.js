const PageModel = require('../PageModel');

class ReviewPageModel extends PageModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }

  /**
   * Reviews the order by accepting terms and conditions (if provided) and continuing to the next step.
   *
   * @param {string} reviewTermsCondElem - Locator for the element related to order review terms and conditions (optional).
   * @param {string} reviewContinueElem - Locator for the element to continue with the order review (optional).
   * @returns {Promise<void>} - A Promise that resolves after reviewing the order.
   */
  reviewOrder = async (reviewTermsCondElem, reviewContinueElem) => {
    if (reviewTermsCondElem) {
      const termsAndCond = await this.page.locator(reviewTermsCondElem).first();
      await termsAndCond.waitFor();
      await termsAndCond.click({ force: true });
    }

    if (reviewContinueElem) {
      const continueElem = await this.page.locator(reviewContinueElem).first();
      await continueElem.waitFor();
      await continueElem.click({ force: true });
      await this.screenshot();
    }
  };
}

module.exports = ReviewPageModel;
