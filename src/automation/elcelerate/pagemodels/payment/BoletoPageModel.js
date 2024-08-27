const { expect } = require('@playwright/test');
const PageModel = require('../PageModel');

class BoletoPageModel extends PageModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }

  /**
   * Clicks on Boleto radio button, CTA button.
   *
   * @param {string} boletoChooseElem - Locator for the Boleto choice element.
   * @param {string} boletoCTAElem - Locator for the Boleto CTA.
   * @param {string} orderConfirmationMsgIdElem - Locator for the Boleto confirmation.
   * @returns {Promise<void>} A Promise that resolves after checking and potentially placing the order.
   */
  selectBoleto = async (
    boletoChooseElem,
    boletoCTAElem,
    orderConfirmationMsgIdElem
  ) => {
    if (boletoChooseElem) {
      await this.page.locator(boletoChooseElem).first().click();
      await this.screenshot();
      if (boletoCTAElem) {
        await this.page.locator(boletoCTAElem).click();
        await expect(
          this.page.locator(orderConfirmationMsgIdElem)
        ).toBeVisible();
        // Logging Transaction ID from URL
        // eslint-disable-next-line node/no-unsupported-features/node-builtins
        const urlObj = new URL(this.page.url());
        const tid = urlObj.searchParams.get('TID');
        console.log(`Transaction ID: ${tid}`);

        await this.screenshot();
      }
    }
  };
}

module.exports = BoletoPageModel;
