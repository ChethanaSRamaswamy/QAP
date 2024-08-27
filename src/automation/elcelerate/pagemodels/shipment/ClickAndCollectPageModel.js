const PageModel = require('../PageModel');

class ClickAndCollectPageModel extends PageModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }

  /**
   * Retrieves click and collect details during checkout.
   * @param {HTMLElement} shipClickCollectElem - The element related to click and collect.
   * @param {HTMLElement} shipDeliveryFirstNameElem - The element for delivery first name.
   * @param {HTMLElement} shipDeliveryLastNameElem - The element for delivery last name.
   * @param {HTMLElement} shipDeliveryPhoneElem - The element for delivery phone number.
   * @param {HTMLElement} shipSelectCollectPointElem - The element to select a collection point.
   * @param {HTMLElement} shipFindStoreElem - The element to find a store.
   * @param {HTMLElement} shipSearchStoreElem - The element to search for a store.
   * @param {HTMLElement} shipSelectStoreElem - The element to select a store.
   * @param {HTMLElement} shipPurchaserFirstNameElem - The element for purchaser's first name.
   * @param {HTMLElement} shipPurchaserLastNameElem - The element for purchaser's last name.
   * @param {HTMLElement} shipPurchaserMobileNumberElem - The element for purchaser's mobile number.
   * @param {HTMLElement} shipContinueElem - The element to continue.
   * @param {HTMLElement} shipContinueToBillingElem - The element to continue to billing.
   * @param {HTMLElement} shipShowStoresElem - The element to show stores.
   * @param {string} shipZipCode - The ZIP code for shipping.
   * @param {string} shipPurchaserFirstName - The purchaser's first name.
   * @param {string} shipPurchaserLastName - The purchaser's last name.
   * @param {string} shipPurchaserMobileNumber - The purchaser's mobile number.
   * @param {string} shipDeliveryFirstName - The delivery first name.
   * @param {string} shipDeliveryLastName - The delivery last name.
   * @param {string} shipDeliveryPhone - The delivery phone number.
   * @param {string} shipFindStore - The store to find.
   * @returns {Promise<void>} - A Promise indicating completion.
   */
  provideClickCollectDetailsInCheckout = async ({
    shipClickCollectElem,
    shipDeliveryFirstNameElem,
    shipDeliveryLastNameElem,
    shipDeliveryPhoneElem,
    shipSelectCollectPointElem,
    shipFindStoreElem,
    shipSearchStoreElem,
    shipSelectStoreElem,
    shipPurchaserFirstNameElem,
    shipPurchaserLastNameElem,
    shipPurchaserMobileNumberElem,
    shipContinueElem,
    shipContinueToBillingElem,
    shipShowStoresElem,
    shipZipCode,
    shipPurchaserFirstName,
    shipPurchaserLastName,
    shipPurchaserMobileNumber,
    shipDeliveryFirstName,
    shipDeliveryLastName,
    shipDeliveryPhone,
    shipFindStore,
  }) => {
    if (shipDeliveryFirstNameElem) {
      // flow for non-RCO / Legacy brands
      await this.page
        .locator(shipDeliveryFirstNameElem)
        .fill(shipDeliveryFirstName);
      await this.page
        .locator(shipDeliveryLastNameElem)
        .fill(shipDeliveryLastName);
      await this.page.locator(shipDeliveryPhoneElem).fill(shipDeliveryPhone);
      await this.page
        .locator(shipSelectCollectPointElem)
        .dispatchEvent('click');
      await this.page.locator(shipFindStoreElem).fill(shipZipCode); // Text Box for post code
      await this.page.waitForSelector(shipSearchStoreElem);
      await this.page.locator(shipSearchStoreElem).click();
      if (shipShowStoresElem) {
        await this.page.locator(shipShowStoresElem).click({ force: true });
      }
      await this.page.waitForSelector(shipSelectStoreElem);
      await this.page
        .locator(shipSelectStoreElem)
        .first()
        .click({ force: true });
      await this.page.locator(shipContinueElem).dispatchEvent('click');
      await this.page.waitForSelector(shipContinueToBillingElem);
      await this.page.locator(shipContinueToBillingElem).click({ force: true });
    } else {
      // flow for RCO implemneted brands
      await this.page.locator(shipClickCollectElem).click();
      console.log(
        'click and collect delivery type selected successfully in delivery address page!'
      );
      let isAttached = await this.page.locator(shipSelectStoreElem).isVisible();
      while (!isAttached) {
        await this.page.locator(shipFindStoreElem).clear();
        await this.page.locator(shipFindStoreElem).fill(shipZipCode);
        await this.page.waitForTimeout(2000);
        await this.page.getByText(shipFindStore).click({ force: true });
        await this.page.locator(shipSearchStoreElem).hover();
        await this.page.locator(shipSearchStoreElem).click({ force: true });
        await this.page.waitForTimeout(5000);
        isAttached = await this.page.locator(shipSelectStoreElem).isVisible();
      }
      await this.page.locator(shipSelectStoreElem).dispatchEvent('click');
      await this.page
        .locator(shipPurchaserFirstNameElem)
        .fill(shipPurchaserFirstName);
      await this.page
        .locator(shipPurchaserLastNameElem)
        .fill(shipPurchaserLastName);
      await this.page
        .locator(shipPurchaserMobileNumberElem)
        .fill(shipPurchaserMobileNumber);
    }
  };

  /**
   * Retrieves click and collect billing details.
   * @param {HTMLElement} shipBillingToElem - The element for billing to.
   * @param {HTMLElement} shipBillingToSelectElem - The element to select billing recipient.
   * @param {HTMLElement} shipBillingFirstNameElem - The element for billing first name.
   * @param {HTMLElement} shipBillingLastNameElem - The element for billing last name.
   * @param {HTMLElement} shipBillingAddressOneElem - The element for billing address line one.
   * @param {HTMLElement} shipBillingAddressTwoElem - The element for billing address line two.
   * @param {HTMLElement} shipBillingZipCodeElem - The element for billing ZIP code.
   * @param {HTMLElement} shipBillingPhoneElem - The element for billing phone number.
   * @param {HTMLElement} shipBillingContinueElem - The element to continue billing process.
   * @param {HTMLElement} shipSaveBillingElem - The element to save billing details.
   * @param {string} shipBillingFirstName - The billing first name.
   * @param {string} shipBillingLastName - The billing last name.
   * @param {string} shipBillingAddressOne - The billing address line one.
   * @param {string} shipBillingAddressTwo - The billing address line two.
   * @param {string} shipBillingZipCode - The billing ZIP code.
   * @param {string} shipBillingPhone - The billing phone number.
   * @returns {Promise<void>} - A Promise indicating completion.
   */
  clickCollectBillingDetails = async ({
    shipBillingToElem,
    shipBillingToSelectElem,
    shipBillingFirstNameElem,
    shipBillingLastNameElem,
    shipBillingAddressOneElem,
    shipBillingAddressTwoElem,
    shipBillingZipCodeElem,
    shipBillingPhoneElem,
    shipBillingContinueElem,
    shipSaveBillingElem,
    shipBillingFirstName,
    shipBillingLastName,
    shipBillingAddressOne,
    shipBillingAddressTwo,
    shipBillingZipCode,
    shipBillingPhone,
  }) => {
    if (shipBillingToElem) {
      await this.page.locator(shipBillingToElem).click();
      await this.page.waitForSelector(shipBillingToSelectElem);
      await this.page.locator(shipBillingToSelectElem).click();
    }
    await this.screenshot();
    await this.page
      .locator(shipBillingFirstNameElem)
      .fill(shipBillingFirstName);
    await this.page.locator(shipBillingLastNameElem).fill(shipBillingLastName);
    await this.page
      .locator(shipBillingAddressOneElem)
      .fill(shipBillingAddressOne);
    await this.page
      .locator(shipBillingAddressTwoElem)
      .fill(shipBillingAddressTwo);
    await this.page.locator(shipBillingZipCodeElem).fill(shipBillingZipCode);
    await this.page.locator(shipBillingPhoneElem).fill(shipBillingPhone);
    if (shipBillingContinueElem) {
      await this.page.locator(shipBillingContinueElem).click();
    }
    if (shipSaveBillingElem) {
      await this.page.locator(shipSaveBillingElem).click();
    }
  };
}

module.exports = ClickAndCollectPageModel;
