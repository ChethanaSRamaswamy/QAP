const PageModel = require('../PageModel');
// const { expect } = require('@playwright/test');

// TODO: This has to be refactored, to use it wherever new address has to be added

/**
 * Represents an Adress book page model for handling the address book related page actions
 * @class AddressPageModel
 * @extends PageModel
 */

class AddressPageModel extends PageModel {
  /**
   * Creates an instance of AddressPageModel
   * @param {Object} testInfo - Information about the test.
   * @param {Page} page - The Playwright page object.
   * @param {Object} data - Data (locatorData, testData, siteData) for the test.
   */
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }

  /**
   * Fills in new shipping address details on a form.
   *
   * @param {string} firsNameField - Locator for the first name input field.
   * @param {string} lastNameField - Locator for the last name input field.
   * @param {string} enterAddressManually - Locator for the "Enter Address Manually" option, if applicable.
   * @param {string} addressField1 - Locator for the first address input field.
   * @param {string} addressField2 - Locator for the second address input field.
   * @param {string} cityField - Locator for the city input field.
   * @param {string} zipCodeField - Locator for the zip code input field.
   * @param {string} mobileFieldElem - Locator for the mobile/phone input field.
   * @param {string} provinceField - Locator for the province input field.
   * @param {string} termsAndCond - Locator for the "Terms and Conditions" checkbox, if applicable.
   * @param {string} useSameAddressElem - Locator for an option to use the same address, if applicable.
   * @param {string} pressTab - Locator for the element to press Tab after filling the form.
   * @param {string} [titleElem=''] - Locator for the title element, if applicable.
   * @param {string} [selectZipCodeElem=''] - Locator for selecting the zip code, if applicable.
   * @param {string} [provinceDDValueElem=''] - Locator for selecting the province dropdown value, if applicable.
   * @returns {Promise<void>} A Promise that resolves after filling in the shipping destination details.
   */

  // TODO: Disabling max-params rule for existing functions to allow
  // lint checks to pass. This will be addressed in QAP-2666

  shipAddNewAddress = async ({
    firsNameField,
    lastNameField,
    enterAddressManually,
    addressField1,
    addressField2,
    cityField,
    zipCodeField,
    mobileFieldElem,
    provinceField,
    regionFieldAction,
    regionFieldValue,
    colonyFieldAction,
    colonyFieldValue,
    termsAndCond,
    useSameAddressElem,
    pressTab,
    titleElem,
    selectZipCodeElem,
    provinceDDValueElem,
    titleValueElem,
    secondSurnameElem,
    areaElem,
    areaValueElem,
    submitElem,
  }) => {
    if (titleElem) {
      await this.page.locator(titleElem).first().click();
    }

    if (titleValueElem) {
      const selectElement = await this.page.locator(titleValueElem);
      await selectElement.selectOption(this.testData.TITLE);
    }

    if (firsNameField) {
      await this.page
        .locator(firsNameField)
        .first()
        .fill(this.testData.FIRSTNAME);
    }

    if (lastNameField) {
      await this.page
        .locator(lastNameField)
        .first()
        .type(this.testData.LASTNAME);
    }

    if (enterAddressManually) {
      await this.page.locator(enterAddressManually).first().click();
    }

    if (addressField1) {
      await this.page
        .locator(addressField1)
        .first()
        .type(this.testData.ADDRESS1);
    }

    if (addressField2) {
      await this.page
        .locator(addressField2)
        .first()
        .type(this.testData.ADDRESS2);
    }

    if (zipCodeField) {
      await this.page
        .locator(zipCodeField)
        .first()
        .type(this.testData.ZIPCODE, { delay: 300 });
      await this.selectTab(pressTab);
    }

    if (selectZipCodeElem) {
      await this.page.locator(selectZipCodeElem).first().click();
    }

    if (cityField) {
      await this.page.locator(cityField).first().type(this.testData.CITY);
    }
    // await mobile.type(this.testData.PHONE, { delay: 100 });

    if (provinceField) {
      const provinceDD = this.page.locator(provinceField);
      if (provinceDDValueElem) {
        await provinceDD.click();
        await this.wait(2000);
        await this.page.locator(provinceDDValueElem).click();
      } else {
        provinceDD.selectOption(this.testData.STATE);
      }
      await this.page.waitForTimeout(6000);
    }

    // update region field
    if (regionFieldAction && regionFieldValue) {
      await this.page.locator(regionFieldAction).click();
      await this.page.locator(regionFieldValue).click();
    }

    // update Colony/Commune field
    if (colonyFieldAction && colonyFieldValue) {
      await this.page.locator(colonyFieldAction).click();
      await this.page.locator(colonyFieldValue).click();
    }

    if (termsAndCond) {
      // await this.page.locator(termsAndCond).first().click({ force: true });
      const shipTermsAndCond = this.page.locator(termsAndCond);
      await this.page.waitForTimeout(5000);
      await shipTermsAndCond.dispatchEvent('click');
      await this.screenshot();
    }

    if (areaElem) {
      const StateDD = this.page.locator(areaElem);
      if (areaValueElem !== '') {
        await StateDD.click();
        await this.wait(2000);
        await this.page.locator(areaValueElem).click();
      } else {
        StateDD.selectOption(this.testData.CITY);
      }
      await this.page.waitForTimeout(6000);
    }

    if (mobileFieldElem) {
      await this.page.locator(mobileFieldElem).click();
      await this.page
        .locator(mobileFieldElem)
        .pressSequentially(this.testData.PHONE);
    }

    // update second surname field
    if (secondSurnameElem) {
      await this.page
        .locator(secondSurnameElem)
        .first()
        .type(this.testData.SECONDSURNAME);
    }

    if (submitElem) {
      await this.page.locator(submitElem).first().click();
    }

    await this.checkTheCheckBox(useSameAddressElem);
    await this.selectTab(pressTab);
  };

  /**
   * Selects the tab key if a condition is met.
   *
   * @param {boolean} locators - If true, the tab key will be pressed.
   * @returns {Promise<void>} - A Promise that resolves after pressing the tab key.
   */
  selectTab = async (locators) => {
    if (locators) {
      await this.page.keyboard.press('Tab');
    }
  };
}
module.exports = AddressPageModel;
