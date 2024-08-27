const { expect } = require('@playwright/test');

const PageModel = require('../PageModel');

class ShipmentPageModel extends PageModel {
  constructor(testInfo, page, data, context) {
    super(testInfo, page, data);
    this.context = context;
  }

  /**
   * Fills in shipping destination details on a form.
   *
   * @param {string} firstNameField - Locator for the first name input field.
   * @param {string} lastNameField - Locator for the last name input field.
   * @param {string} enterAddressManually - Locator for the "Enter Address Manually" option, if applicable.
   * @param {string} addressField1 - Locator for the first address input field.
   * @param {string} addressField2 - Locator for the second address input field.
   * @param {string} cityField - Locator for the city input field.
   * @param {string} zipCodeField - Locator for the zip code input field.
   * @param {string} mobileField - Locator for the mobile/phone input field.
   * @param {string} provinceField - Locator for the province input field.
   * @param {string} regionFieldActionElem - Locator for the region dropdown button.
   * @param {string} regionFieldValueElem - Locator for the region value.
   * @param {string} colonyFieldActionElem - Locator for the colony dropdown button.
   * @param {string} colonyFieldValueElem - Locator for the colony value.
   * @param {string} termsAndCond - Locator for the "Terms and Conditions" checkbox, if applicable.
   * @param {string} useSameAddressElem - Locator for an option to use the same address, if applicable.
   * @param {string} pressTab - Locator for the element to press Tab after filling the form.
   * @param {string} [titleElem=''] - Locator for the title element, if applicable.
   * @param {string} [selectZipCodeElem=''] - Locator for selecting the zip code, if applicable.
   * @param {string} [provinceDDValueElem=''] - Locator for selecting the province dropdown value, if applicable.
   * @param {string} [titleValueElem=''] - Locator for selecting the title value, if applicable.
   * @param {string} [secondSurnameElem=''] - Locator for selecting the second surname, if applicable.
   * @returns {Promise<void>} A Promise that resolves after filling in the shipping destination details.
   */

  // TODO: Disabling max-params rule for existing functions to allow
  // lint checks to pass. This will be addressed in QAP-2666
  // eslint-disable-next-line max-params
  shipDestination = async (
    firstNameField,
    lastNameField,
    enterAddressManually,
    addressField1,
    addressField2,
    cityField,
    zipCodeField,
    mobileField,
    provinceField,
    regionFieldActionElem,
    regionFieldValueElem,
    colonyFieldActionElem,
    colonyFieldValueElem,
    termsAndCond,
    useSameAddressElem,
    pressTab,
    titleElem = '',
    selectZipCodeElem = '',
    provinceDDValueElem = '',
    titleValueElem = '',
    secondSurnameElem = '',
    areaElem = '',
    areaValueElem = '',
    floorNoElem = '',
    federalDocNumberElem = '',
    federalGeneratorUrlElem = '',
    federalGenerateIdElem = '',
    provinceField2Elem,
    provinceField3Elem,
    provinceField4Elem,
    provinceValue2Elem = '',
    provinceValue3Elem = '',
    provinceValue4Elem = ''
  ) => {
    if (titleElem) {
      await this.page.locator(titleElem).first().click();
    }

    if (titleValueElem) {
      const selectElement = await this.page.locator(titleValueElem);
      await selectElement.selectOption(this.testData.TITLE);
    }

    if (federalDocNumberElem) {
      const federalIdNumber = await this.generateFederalId(
        this.context,
        federalGeneratorUrlElem,
        federalGenerateIdElem
      );

      await this.page
        .locator(federalDocNumberElem)
        .first()
        .fill(federalIdNumber);
    }

    // const firstName = this.page.locator(firsNameField);
    // await expect(this.page.locator(firsNameField)).toBeEditable();

    if (firstNameField) {
      await this.page
        .locator(firstNameField)
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
      await this.page.locator(addressField1).first().click({ force: true });
      await this.page.locator(enterAddressManually).first().click();
    }

    if (provinceField) {
      await this.dropdown(
        provinceField,
        provinceDDValueElem,
        this.testData.STATE
      );
    }

    if (provinceField2Elem) {
      await this.dropdown(
        provinceField2Elem,
        provinceValue2Elem,
        this.testData.STATE2
      );
    }

    if (provinceField3Elem) {
      await this.dropdown(
        provinceField3Elem,
        provinceValue3Elem,
        this.testData.STATE3
      );
    }

    if (provinceField4Elem) {
      await this.dropdown(
        provinceField4Elem,
        provinceValue4Elem,
        this.testData.STATE4
      );
    }

    if (zipCodeField) {
      await this.page
        .locator(zipCodeField)
        .first()
        .type(this.testData.ZIPCODE, { delay: 300 });
      await this.selectTab(pressTab);
      await this.page.waitForTimeout(2000);
    }

    if (addressField1) {
      await this.page
        .locator(addressField1)
        .first()
        .type(this.testData.ADDRESS1);
      await this.screenshot();
    }

    // if (enterAddressManuallyTab) {
    //   await this.page.locator(enterAddressManuallyTab).first().click();
    // }

    // Update floor no field
    if (floorNoElem) {
      await this.page.locator(floorNoElem).first().type(this.testData.FLOORNO);
    }

    /**
     * Updates the city field with the specified city name.
     * If a city field is provided, it checks if a zip code selector is also provided.
     * If both city field and zip code selector are provided, it repeatedly clicks on the zip code picker until the city text matches the specified city.
     * If only a city field is provided, it types the specified city name into the first city field found.
     *
     */
    if (cityField) {
      if (selectZipCodeElem) {
        const zipCodePicker = this.page.locator(selectZipCodeElem);
        let cityText = await this.page.locator(cityField).textContent();
        while (cityText.toLowerCase() !== this.testData.CITY.toLowerCase()) {
          await zipCodePicker.dispatchEvent('click');
          cityText = await this.page.locator(cityField).textContent();
        }
      } else {
        await this.page.locator(cityField).first().type(this.testData.CITY);
      }
    }

    // update region field
    if (regionFieldActionElem && regionFieldValueElem) {
      await this.page.locator(regionFieldActionElem).click();
      await this.page.locator(regionFieldValueElem).click();
    }

    // update Colony/Commune field
    if (colonyFieldActionElem && colonyFieldValueElem) {
      await this.page.locator(colonyFieldActionElem).click();
      await this.page.locator(colonyFieldValueElem).click();
    }

    if (termsAndCond) {
      const shipTermsAndCond = this.page.locator(termsAndCond);
      //  await this.page.waitForTimeout(5000);
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
      await this.page.waitForTimeout(3000);
    }

    if (mobileField) {
      // Need to handle both fill & pressSequentially case.
      // await this.page.locator(mobileField).click();
      // await this.page.locator(mobileField).pressSequentially(this.testData.PHONE);
      await this.page.locator(mobileField).fill(this.testData.PHONE);
    }

    // update second surname field
    if (secondSurnameElem) {
      await this.page
        .locator(secondSurnameElem)
        .first()
        .type(this.testData.SECONDSURNAME);
    }

    if (useSameAddressElem) {
      await this.checkTheCheckBox(useSameAddressElem);
      await this.selectTab(pressTab);
    }

    if (addressField2) {
      await this.page
        .locator(addressField2)
        .first()
        .type(this.testData.ADDRESS2);
    }
    await this.selectTab(pressTab);
  };

  /**
   * Navigating to payment page after adding/editing delivery address details.
   * @param {*} shipmentContinue - Locator for shipment page continue button
   * @param {string} coreContentElem - Locator of the shipment body page when the shipping continue button is disabled.
   * @returns {Promise<void>}
   * @memberof ShipmentPageModel
   */

  navigateToPaymentFromShipping = async (
    shipmentContinue,
    coreContentElem = ''
  ) => {
    if (coreContentElem) {
      console.log(`${this.siteData.brandLocale} : Clicking on the body page.`);
      await this.page.locator(coreContentElem).click();
    }
    console.log(`${this.siteData.brandLocale} : Entered shipment details`);
    await this.screenshot();

    await expect(this.page.locator(shipmentContinue).first()).toBeEnabled();
    if (this.testData.clickPosition) {
      const clickPosition = parseInt(this.testData.clickPosition, 10);
      await this.page
        .locator(shipmentContinue)
        .first()
        .click({ position: { x: clickPosition, y: clickPosition } });
      await this.page.waitForTimeout(3000);
      return;
    }
    await this.page.locator(shipmentContinue).first().click();
    await this.page.waitForTimeout(3000);
  };

  /**
   * Verifies the continuation of a shipment process based on the visibility of elements.
   *
   * @param {string} shipmentContinue - The selector for the shipment continuation button.
   * @param {string} coreContentElem - The selector for the core content element indicating the current page state.
   * @param {string} [errorTextElem=''] - The selector for the error text element, if any.
   * @returns {Promise<void>} - A Promise that resolves once the verification is complete.
   */
  shipmentContinuationVerifier = async (
    shipmentContinue,
    coreContentElem,
    errorTextElem = ''
  ) => {
    if (errorTextElem) {
      let errorMessageElem = await this.page
        .locator(errorTextElem)
        .first()
        .isVisible();
      let currentPageElem = await this.page
        .locator(coreContentElem)
        .isVisible();
      while (currentPageElem && !errorMessageElem) {
        try {
          await this.navigateToPaymentFromShipping(
            shipmentContinue,
            coreContentElem
          );
        } catch (error) {
          console.error(
            `${this.siteData.brandLocale} : Error while navigating to payment from shipping`
          );
        }
        errorMessageElem = await this.page
          .locator(errorTextElem)
          .first()
          .isVisible();
        currentPageElem = await this.page.locator(coreContentElem).isVisible();
      }
      if (errorMessageElem) {
        await expect(this.page.locator(shipmentContinue).first()).toBeEnabled();
      }
    }
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

  /**
   * edit/add new shipping details for return user.
   * @param {*} shipAddressEditElem - Locator for editing the delivery addrress in payment page
   * @param {*} shipAddNewAddressElem - Locator for delivery address page add new address button
   * @returns {Promise<void>}
   * @memberof ShipmentPageModel
   */

  editShipmentDetails = async (shipAddressEditElem, shipAddNewAddressElem) => {
    await this.page.waitForTimeout(5000);
    if (shipAddressEditElem) {
      await this.page
        .locator(shipAddressEditElem)
        .first()
        .click({ force: true });
    }

    if (shipAddNewAddressElem) {
      await this.page
        .locator(shipAddNewAddressElem)
        .first()
        .click({ force: true });
    }
    await this.screenshot();
  };

  /**
   * edit/add new shipping details for return user.
   * @param {*} ruShipModifyAddress - Locator for clicking modify to navigate to the delivery addrress in shipping page
   * @param {*} ruShipAddressEditElem - Locator for editing the delivery addrress in shipping page
   * @param {*} ruShipAddNewAddressElem - Locator for delivery address page add new address button
   * @returns {Promise<void>}
   * @memberof ShipmentPageModel
   */

  editRUShipmentDetails = async (
    ruShipModifyAddress,
    ruShipAddressEditElem,
    ruShipAddNewAddressElem
  ) => {
    await this.page.waitForTimeout(5000);
    if (ruShipModifyAddress) {
      await this.page
        .locator(ruShipModifyAddress)
        .first()
        .click({ force: true });
    }
    if (ruShipAddressEditElem) {
      await this.page.waitForSelector(ruShipAddressEditElem);
      await this.page
        .locator(ruShipAddressEditElem)
        .first()
        .click({ force: true });
    }
    if (ruShipAddNewAddressElem) {
      await this.page.waitForSelector(ruShipAddNewAddressElem);
      await this.page
        .locator(ruShipAddNewAddressElem)
        .first()
        .click({ force: true });
    }
    await this.screenshot();
  };

  /**
   * Selects a delivery type element in checkout and captures a screenshot.
   * @async
   * @function deliveryTypeInCheckout
   * @param {string} deliveryTypeElem - The selector for the delivery type element.
   * @returns {Promise<void>}
   */
  deliveryTypeInCheckout = async (deliveryTypeElem) => {
    if (deliveryTypeElem) {
      const deliveryType = await this.page.locator(deliveryTypeElem);
      await deliveryType.click({ force: true });
      await this.screenshot();
      const deliveryTypeName = await deliveryType.textContent();
      console.log(deliveryTypeName + 'selected successfully!');
    } else {
      console.log(
        'selecting delivery type on checkout page is not applicable for this brand/locale'
      );
    }
  };
}

module.exports = ShipmentPageModel;
