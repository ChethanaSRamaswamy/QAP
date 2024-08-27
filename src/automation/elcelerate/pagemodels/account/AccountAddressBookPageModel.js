const PageModel = require('../PageModel');
const { expect } = require('@playwright/test');

/**
 * Represents an Adress book page model for handling the address book related page actions
 * @class AccountAddressBookPageModel
 * @extends PageModel
 */

class AccountAddressBookPageModel extends PageModel {
  /**
   * Creates an instance of AccountAddressBookPageModel
   * @param {Object} testInfo - Information about the test.
   * @param {Page} page - The Playwright page object.
   * @param {Object} data - Data (locatorData, testData, siteData) for the test.
   */
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }

  /**
   * Adds a new shipping/billing address if the specified element is available.
   * @param {String} accAddAddressElem -Locator of Add address book element
   * @returns {Promise<void>} A Promise that resolves once the address is added or no action is taken.
   */
  addNewShipBillAddress = async (accAddAddressElem) => {
    if (accAddAddressElem) {
      const addressElement = this.page.locator(accAddAddressElem).first();
      if (await addressElement.isVisible()) {
        await addressElement.click();
      } else {
        `Element with selector '${accAddAddressElem}' is not visible or not found on the page.`;
      }
    }
  };

  /**
   * Used to populate the address after entering the zipcode
   * @param {String} populateAddressElem -Locator of populated address element
   * @param {String} randomElem -Random element to populate the address
   */

  populateAddress = async (populateAddressElem, randomElem) => {
    const maxIterations = 3;
    if (populateAddressElem) {
      const element = await this.page.locator(populateAddressElem);
      for (let i = 0; i < maxIterations; i++) {
        if (await element.isVisible()) {
          break;
        } else {
          // click to populate the address
          await this.page.locator(randomElem).first().click();
          await this.page.waitForTimeout(5000);
        }
      }
    }
  };

  /**
   * Enters shipping/billing details based on the provided locators and test data.
   * @async
   * @function
   * @param {Object} options - Options for entering details.
   * @param {string} options.accSelectTitle - Element locator to choose the tittle.
   * @param {string} options.accFirstnameElem - Element locator for the first name input.
   * @param {string} options.accLastNameElem - Element locator for the last name input.
   * @param {string} options.accAddress1Elem - Element locator for the address line 1 input.
   * @param {string} options.accAddress2Elem - Element locator for the address line 2 input.
   * @param {string} options.accAddress3Elem - Element locator for the address line 3 input.
   * @param {string} options.accZipCodeElem - Element locator for the zip code input.
   * @param {string} options.accPopulatedAdressElem - Element locator for a populated address.
   * @param {string} options.accRandomAdrElem - Element locator tto generate address after entering zipcode.
   * @param {string} options.accPhoneElem - Element locator for the phone input.
   * @param {string} options.accPhone2Elem - Element locator for the phone2 input.
   * @param {string} options.accCityElem - Element locator for the city input.
   * @param {string} options.accChooseCityElem - Element locator to choose city name from dropdown.
   * @param {string} options.accChooseStateElem - Element locator to choose state name from dropdown.
   * @param {string} options.accChooseCountryElem - Element locator to choose state name from dropdown.
   * @param {string} options.accChooseDefaultAdrElem - Element locator for choosing a default address.
   * @param {string} options.accAddrSubmitElem - Element locator for the address submission button.
   * @throws {Error} Throws an error if there is an issue during the details entry process.
   * @returns {Promise<void>} A Promise that resolves once the details are entered and submitted.
   */
  enterShipBillDetails = async ({
    accSelectTitle,
    accFirstnameElem,
    accLastNameElem,
    accAddress1Elem,
    accAddress2Elem,
    accAddress3Elem,
    accZipCodeElem,
    accPopulatedAdressElem,
    accRandomAdrElem,
    accPhoneElem,
    accPhone2Elem,
    accCityElem,
    accChooseCityElem,
    accChooseStateElem,
    accChooseCountryElem,
    accChooseDefaultAdrElem,
    accAddrSubmitElem,
  }) => {
    if (accSelectTitle) {
      await this.page.locator(accSelectTitle).first().click();
    }
    await this.page.locator(accFirstnameElem).first().click();
    await this.page
      .locator(accFirstnameElem)
      .first()
      .type(this.testData.FIRSTNAME, { delay: 300 });
    await this.page
      .locator(accLastNameElem)
      .first()
      .type(this.testData.LASTNAME);

    if (accChooseCountryElem) {
      const countryDD = this.page.locator(accChooseCountryElem);
      await countryDD.selectOption(this.testData.SELECTCOUNTRYID);
    }

    if (accAddress1Elem) {
      await this.page
        .locator(accAddress1Elem)
        .first()
        .type(this.testData.ADDRESS1);
    }
    if (accAddress2Elem) {
      await this.page
        .locator(accAddress2Elem)
        .first()
        .type(this.testData.ADDRESS2);
    }

    if (accAddress3Elem) {
      await this.page
        .locator(accAddress3Elem)
        .first()
        .type(this.testData.ADDRESS2);
    }
    if (accCityElem) {
      await this.page.locator(accCityElem).first().type(this.testData.CITY);
    }
    if (accChooseStateElem) {
      const stateDD = this.page.locator(accChooseStateElem);
      await stateDD.selectOption(this.testData.STATE);
    }

    await this.page
      .locator(accZipCodeElem)
      .first()
      .type(this.testData.ZIPCODE, { delay: 300 });

    // Populate the address after entering the zipcode
    await this.populateAddress(accPopulatedAdressElem, accRandomAdrElem);

    if (accChooseCityElem) {
      const cityDD = this.page.locator(accChooseCityElem);
      await cityDD.selectOption(this.testData.CITY);
    }

    if (accPhoneElem) {
      await this.page
        .locator(accPhoneElem)
        .first()
        .type(this.testData.ACPHONE, { delay: 300 });
    }

    if (accPhone2Elem) {
      await this.page
        .locator(accPhone2Elem)
        .first()
        .type(this.testData.ACPHONE2, { delay: 300 });
    }
    if (accChooseDefaultAdrElem !== '') {
      const isVisible = await this.page
        .locator(accChooseDefaultAdrElem)
        .isVisible();
      if (isVisible) {
        console.log('Default address checkbox is available');
        await this.page
          .locator(accChooseDefaultAdrElem)
          .first()
          .click({ force: true });
      } else {
        console.log('Default address checkbox not available');
      }
    }

    // Submit the address
    await this.page.locator(accAddrSubmitElem).first().click();
    await this.page.waitForLoadState('domcontentloaded');
    await this.screenshot();
  };

  /**
   * Verifies the added address
   * @param {String} accAddedAddressElem Locator of added address
   * @returns {Promise<void>} A Promise that resolves once the verification is complete.
   */
  verifyAddedAddress = async (accAddedAddressElem) => {
    await this.page.waitForSelector(accAddedAddressElem);
    await expect(
      await this.page.locator(accAddedAddressElem).first()
    ).toBeVisible();
  };

  /**
   * Navigates back to the main account page
   * @param {String} accMobMainElem Locator of goback to account main page
   */
  navToAccMain = async (accMobMainElem) => {
    if (accMobMainElem) {
      await this.page.locator(accMobMainElem).first().click();
    }
  };

  /**
   * This function is used to delete a address
   * @param {String} accDeleteAddressElem -Locator of Delete address element
   * @param {String} accDeleteAddressConfirmElem -Locator of Delete address confirmation element
   */

  deleteAddress = async (accDeleteAddressElem, accDeleteAddressConfirmElem) => {
    if (accDeleteAddressElem) {
      await this.page.waitForSelector(accDeleteAddressElem);
      await this.page
        .locator(accDeleteAddressElem)
        .first()
        .dispatchEvent('click');
      // Wait for deleteAddressConfirmElem to appear
      await this.page.waitForSelector(accDeleteAddressConfirmElem);
      await this.page
        .locator(accDeleteAddressConfirmElem)
        .first()
        .dispatchEvent('click');
    }
  };

  /**
   * This function is used to Edit an Address
   * @param {String} accEditAddressElem -Locator of editaddress element
   * @param {String} accEditFirstNameElem -Locator of first name element
   * @param {String} accEditLastNameElem -Locator of last name element
   * @param {String} accEditAddressSubmitElem -Locator edit address submit button
   */

  editAnAddress = async ({
    accEditAddressElem,
    accEditFirstNameElem,
    accEditLastNameElem,
    accEditAddressSubmitElem,
  }) => {
    await this.page.locator(accEditAddressElem).first().click();
    await this.page.locator(accEditFirstNameElem).type(this.testData.FIRSTNAME);
    await this.page.locator(accEditLastNameElem).type(this.testData.LASTNAME);
    await this.page.locator(accEditAddressSubmitElem).first().click();
  };
}
module.exports = AccountAddressBookPageModel;
