const PageModel = require('../PageModel.js');
const Util = require('../../../../utilities/util');

class TranslationPageModel extends PageModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }

  /**
   * Click to the french site homepage url .
   * @param {string} preprodUrlElem - Locator for the Pre prod url.
   * @param {string} translatePageLinkElem - Locator for the footer transaltion link.
   * @param {string} translateLanguageSelectorElem - Locator for the language selector wrapper transaltion link.
   * @returns {Promise<void>}
   * @memberof TranslationPageModel
   */
  gotoTranslateHomePage = async (
    environment,
    preprodUrlElem,
    translatePageLinkElem,
    translateLanguageSelectorElem
  ) => {
    if (environment === Util.environments.preprod.toUpperCase()) {
      console.log(environment);
      await this.page.goto(preprodUrlElem);
      await this.screenshot();
    } else {
      if (translateLanguageSelectorElem) {
        await this.page
          .locator(translateLanguageSelectorElem)
          .click({ force: true });
      }
      await this.page.locator(translatePageLinkElem).click({ force: true });
      await this.screenshot();
    }
  };

  /**
   * Validate the homepage tranlsation text.
   * @param {string} homePageLocatorsElem - Locator for the home page elements.
   * @returns {Promise<void>}
   * @memberof TranslationPageModel
   */
  gotoTranslateHomePageValidation = async (homePageLocatorsElem) => {
    const homePageText = [
      this.testData.translateHomePageShopNow,
      this.testData.translateHomePageAddToBag,
      this.testData.translateHomePageFooter,
    ];
    for (let iCnt = 0; iCnt < homePageLocatorsElem.length; iCnt++) {
      const homePageElements = homePageLocatorsElem[iCnt];
      const homePageElementText = await this.page.textContent(homePageElements);
      if (homePageElementText.includes(homePageText[iCnt])) {
        console.log(
          'Translate Home Page "' +
            homePageText[iCnt] +
            '" Text Assertion Verified.'
        );
      } else {
        console.error(
          'Text Home Page Assertion failed. "' + homePageElementText + '" '
        );
      }
    }
    await this.screenshot();
  };

  /**
   * Validate the PLP page tranlsation text.
   * @param {string} plpPageLinkELem - Locator for the plp product link element.
   * @param {string} plpPageLocatorsElem - Locator for the plp page elements.
   * @returns {Promise<void>}
   * @memberof TranslationPageModel
   */
  gotoTranslatePlpPageValidation = async (
    plpPageLinkELem,
    plpPageLocatorsElem
  ) => {
    if (plpPageLinkELem) {
      const plpPageText = [
        this.testData.translatePlpFilterLabel,
        this.testData.translatePlpDropDownLabel,
        this.testData.translateHomePageFooter,
      ];
      await this.page.locator(plpPageLinkELem).click();
      for (let iCnt = 0; iCnt < plpPageLocatorsElem.length; iCnt++) {
        const plpPageElements = plpPageLocatorsElem[iCnt];
        const plpPageElementText = await this.page.textContent(plpPageElements);
        if (plpPageElementText.includes(plpPageText[iCnt])) {
          console.log(
            'Translate PLP Page "' +
              plpPageText[iCnt] +
              '" Text Assertion Verified.'
          );
        } else {
          console.error(
            'Text PLP Page Assertion failed. "' + plpPageElementText + '" '
          );
        }
      }
      await this.screenshot();
    }
  };

  /**
   * Validate the PLP page tranlsation text.
   * @param {string} plpPageLinkELem - Locator for the plp product link element.
   * @param {string} hamburgerIconELem - Locator for the mobile hamburger element.
   * @param {string} plpPageLocatorsElem - Locator for the plp page elements.
   * @returns {Promise<void>}
   * @memberof TranslationPageModel
   */
  gotoMobTranslatePlpPageValidation = async (
    plpPageLinkELem,
    hamburgerIconELem,
    plpPageLocatorsElem
  ) => {
    const plpPageText = [
      this.testData.translatePlpFilterLabel,
      this.testData.translatePlpDropDownLabel,
      this.testData.translateHomePageFooter,
    ];
    if (hamburgerIconELem) {
      await this.page.locator(hamburgerIconELem).click();
    }
    await this.page.locator(plpPageLinkELem).click();
    for (let iCnt = 0; iCnt < plpPageLocatorsElem.length; iCnt++) {
      const plpPageElements = plpPageLocatorsElem[iCnt];
      const plpPageElementText = await this.page.textContent(plpPageElements);
      if (plpPageElementText.includes(plpPageText[iCnt])) {
        console.log(
          'Translate PLP Page "' +
            plpPageText[iCnt] +
            '" Text Assertion Verified.'
        );
      } else {
        console.error(
          'Text PLP Page Assertion failed. "' + plpPageElementText + '" '
        );
      }
    }
    await this.screenshot();
  };

  /**
   * Validate the PDP page tranlsation text.
   * @param {string} pdpPageLinkElem - Locator for the pdp product link element.
   * @param {string} pdpPageLocatorElem - Locator for the pdp page elements.
   * @param {string} pdpQuanityElem - Locator for the pdp page elements.
   * @returns {Promise<void>}
   * @memberof TranslationPageModel
   */
  gotoTranslatePdpPageValidation = async (
    pdpPageLinkElem,
    pdpPageLocatorElem,
    pdpQuanityElem
  ) => {
    if (pdpPageLinkElem) {
      await this.page.locator(pdpPageLinkElem).click();
      const pdpAddToBagText = this.testData.translatePdpPageAddToBag;
      const pdpQuanityLabelText = this.testData.translatePdpQuanityLabel;
      const pdpPageElementText =
        await this.page.textContent(pdpPageLocatorElem);
      if (pdpPageElementText.includes(pdpAddToBagText)) {
        console.log(
          'Translate PDP Page "' +
            pdpAddToBagText +
            '" Text Assertion Verified.'
        );
      } else {
        console.error(
          'Text PDP Page Assertion failed. "' + pdpPageElementText + '" '
        );
      }
      await this.screenshot();

      const pdpQuanityElementText = await this.page.textContent(pdpQuanityElem);
      if (pdpQuanityElementText.includes(pdpQuanityLabelText)) {
        console.log(
          'Translate PDP Page "' +
            pdpQuanityLabelText +
            '" Text Assertion Verified.'
        );
      } else {
        console.error(
          'Text PDP Page Assertion failed. "' + pdpQuanityElementText + '" '
        );
      }
      await this.screenshot();
    }
  };

  /**
   * Validate the pdp cart overlay tranlsation text.
   * @param {string} pdpCartLinkElem - Locator for the cart overlay elements.
   * @returns {Promise<void>}
   * @memberof TranslationPageModel
   */
  addToCartOverlay = async (pdpCartLinkElem) => {
    if (pdpCartLinkElem) {
      const pdpCartText = this.testData.translatePdpCartLink;
      const pdpCartLinkText = await this.page.textContent(pdpCartLinkElem);
      if (pdpCartLinkText.includes(pdpCartText)) {
        console.log(
          'Translate Cart Overaly "' +
            pdpCartText +
            '" Text Assertion Verified.'
        );
      } else {
        console.error(
          'Text Cart Overaly Assertion failed. "' + pdpCartLinkText + '" '
        );
      }
      await this.screenshot();
    }
  };

  /**
   * Validate the view cart page tranlsation text.
   * @param {string} viewCartLocatorElem - Locator for the view cart page elements.
   * @param {string} viewCartText - Locator for the view cart page translation text.
   * @returns {Promise<void>}
   * @memberof TranslationPageModel
   */
  viewCartTranslateValidation = async (viewCartLocatorElem, viewCartText) => {
    for (let iCnt = 0; iCnt < viewCartLocatorElem.length; iCnt++) {
      const viewCartElement = viewCartLocatorElem[iCnt];
      const viewCartElementText = await this.page.textContent(viewCartElement);
      if (viewCartElementText.includes(viewCartText[iCnt])) {
        console.log(
          'Translate View Cart Page "' +
            viewCartText[iCnt] +
            '" Text Assertion Verified.'
        );
      } else {
        console.error(
          'Text  View Cart Assertion failed. "' + viewCartElementText + '" '
        );
      }
    }
    await this.screenshot();
  };

  /**
   * Validate the view signin page tranlsation text.
   * @param {string} signInPageLocatorElem - Locator for the signin page elements.
   * @returns {Promise<void>}
   * @memberof TranslationPageModel
   */
  guestUserSignInPageTranslateValidation = async (signInPageLocatorElem) => {
    const signInPageText = [
      this.testData.translateCheckoutNewUser,
      this.testData.translateCheckoutReturnUUser,
      this.testData.translateCheckoutContinue,
    ];
    for (let iCnt = 0; iCnt < signInPageLocatorElem.length; iCnt++) {
      const signInPageElements = signInPageLocatorElem[iCnt];
      const signInPageElementText =
        await this.page.textContent(signInPageElements);
      if (signInPageElementText.includes(signInPageText[iCnt])) {
        console.log(
          'Translate Guest User Sign In Page "' +
            signInPageText[iCnt] +
            '" Text Assertion Verified.'
        );
      } else {
        console.error(
          'Text  View Cart Assertion failed. "' + signInPageElementText + '" '
        );
      }
    }
    await this.screenshot();
  };

  /**
   * Validate the view shipping page tranlsation text.
   * @param {string} shippingPageLocatorElem - Locator for the shipping page elements.
   * @returns {Promise<void>}
   * @memberof TranslationPageModel
   */
  shippingPageTranslateValidation = async (shippingPageLocatorElem) => {
    const shippingPageText = [
      this.testData.translateShippingText1,
      this.testData.translateShippingText2,
      this.testData.translateShippingText3,
    ];
    for (let iCnt = 0; iCnt < shippingPageLocatorElem.length; iCnt++) {
      const shippingPageElements = shippingPageLocatorElem[iCnt];
      const shippingPageElementText =
        await this.page.textContent(shippingPageElements);
      if (shippingPageElementText.includes(shippingPageText[iCnt])) {
        console.log(
          'Translate Shipping Page "' +
            shippingPageText[iCnt] +
            '" Text Assertion Verified.'
        );
      } else {
        console.error(
          'Text Shipping Page Assertion failed. "' +
            shippingPageElementText +
            '" '
        );
      }
    }
    await this.screenshot();
  };

  /**
   * Validate the view payment page tranlsation text.
   * @param {string} paymentPageElem - Locator for the payment page elements.
   * @returns {Promise<void>}
   * @memberof TranslationPageModel
   */
  paymentPageTranslateValidation = async (paymentPageElem) => {
    const paymentPageText = this.testData.TRANSLATEPAYMENT;
    const paymentPageElementText = await this.page.textContent(paymentPageElem);
    if (paymentPageElementText.includes(paymentPageText)) {
      console.log(
        'Translate Payment Page "' +
          paymentPageText +
          '" Text Assertion Verified.'
      );
    } else {
      console.error(
        'Text Payment Page Assertion failed. "' + paymentPageElementText + '" '
      );
    }
    await this.screenshot();
  };
}

module.exports = TranslationPageModel;
