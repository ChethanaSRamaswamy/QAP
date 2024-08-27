const { expect } = require('@playwright/test');
const PageModel = require('../PageModel');
const Util = require('../../../../utilities/util');

class ClearpayPageModel extends PageModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }

  /**
   * Clicks on the Clearpay "Not You?" link if it is present.
   *
   * @param {string} clearpayNotYouElem - The element locator for the Clearpay "Not You?" link.
   * @returns {Promise<void>} A Promise that resolves when the link is clicked and a screenshot is taken.
   */
  clickOnClearpayNotYouLink = async (clearpayNotYouElem) => {
    if (clearpayNotYouElem) {
      try {
        await this.page.locator(clearpayNotYouElem).first().click();
        console.log('Clearpay Not you link is clicked');
      } catch (e) {
        console.log('Clearpay Not you link page does not appear');
      }
      await this.screenshot();
    }
  };

  /**
   * Enters an email ID on the Clearpay email ID field if the environment is not PROD or PREPROD.
   *
   * @param {string} clearpayAcceptCloseElem - The element locator for the Clearpay Accept popup close button.
   * @param {string} clearpayEmailIdElem - The element locator for the Clearpay email ID field.
   * @param {string} clearpayEmailIdText - The email ID to be entered in the Clearpay email ID field.
   * @returns {Promise<void>} A Promise that resolves when the email ID is entered.
   */
  enterEmailIdOnClearpayEmailIdField = async (
    clearpayAcceptCloseElem,
    clearpayEmailIdElem,
    clearpayEmailIdText
  ) => {
    if (
      !(
        this.siteData.executionContext.environment.toLowerCase() ===
          Util.environments.prod ||
        this.siteData.executionContext.environment.toLowerCase() ===
          Util.environments.preprod
      )
    ) {
      if (clearpayAcceptCloseElem && clearpayEmailIdElem) {
        try {
          await expect(
            await this.page.locator(clearpayAcceptCloseElem).first()
          ).toBeVisible();
          await this.page.locator(clearpayAcceptCloseElem).first().click();
          console.log('Clearpay Accept popup appears and closed');
        } catch (e) {
          console.log('Clearpay Accept popup does not appear');
        }
        await expect(
          await this.page.locator(clearpayEmailIdElem).first()
        ).toBeVisible();
        await this.page.locator(clearpayEmailIdElem).first().clear();
        await this.page
          .locator(clearpayEmailIdElem)
          .first()
          .fill(clearpayEmailIdText);
        console.log('Entered Email Id: ' + clearpayEmailIdText);
      }
    } else {
      console.log(
        'Clearpay Payment cannot be processed on PROD or PREPROD environments. Hence, Test Order cannot be placed'
      );
    }
  };

  /**
   * Clicks on the Clearpay Email ID Continue button if the environment is not PROD or PREPROD.
   *
   * @memberof YourClass
   * @param {string} clearpayEmailIdContinueElem - The element locator for the Clearpay Email ID Continue button.
   * @returns {Promise<void>} A Promise that resolves when the button is clicked, and a screenshot is taken.
   */
  clickOnClearpayEmailIdContinueButton = async (
    clearpayEmailIdContinueElem
  ) => {
    if (
      !(
        this.siteData.executionContext.environment.toLowerCase() ===
          Util.environments.prod ||
        this.siteData.executionContext.environment.toLowerCase() ===
          Util.environments.preprod
      )
    ) {
      if (clearpayEmailIdContinueElem) {
        await this.page.locator(clearpayEmailIdContinueElem).first().click();
        console.log('Email Id Continue button Clicked');
      }
      await this.screenshot();
    }
  };

  enterClearpayPasswordOnPasswordField = async (
    clearpayPasswordElem,
    clearpayPasswordText
  ) => {
    if (
      !(
        this.siteData.executionContext.environment.toLowerCase() ===
          Util.environments.prod ||
        this.siteData.executionContext.environment.toLowerCase() ===
          Util.environments.preprod
      )
    ) {
      if (clearpayPasswordElem) {
        await expect(
          await this.page.locator(clearpayPasswordElem).first()
        ).toBeVisible();
        await this.page.locator(clearpayPasswordElem).first().clear();
        await this.page
          .locator(clearpayPasswordElem)
          .first()
          .fill(clearpayPasswordText);
        console.log('Entered Password: ' + clearpayPasswordText);
      }
    }
  };

  /**
   * Enters a Clearpay password on the specified password field if the environment is not PROD or PREPROD.
   *
   * @param {string} clearpayPasswordElem - The element locator for the Clearpay password field.
   * @param {string} clearpayPasswordText - The password to be entered in the Clearpay password field.
   * @returns {Promise<void>} A Promise that resolves when the password is entered.
   */
  clickOnClearpayPasswordContinueButton = async (
    clearpayPasswordContinueElem
  ) => {
    if (
      !(
        this.siteData.executionContext.environment.toLowerCase() ===
          Util.environments.prod ||
        this.siteData.executionContext.environment.toLowerCase() ===
          Util.environments.preprod
      )
    ) {
      if (clearpayPasswordContinueElem) {
        await this.page.locator(clearpayPasswordContinueElem).first().click();
        console.log('Password Continue button Clicked');
      }
      await this.screenshot();
    }
  };

  /**
   * Clicks on the Clearpay Confirm button if the environment is not PROD or PREPROD.
   *
   * @param {string} clearpayConfirmElem - The element locator for the Clearpay Confirm button.
   * @returns {Promise<void>} A Promise that resolves when the button is clicked, and a screenshot is taken.
   */
  clickOnClearpayConfirmButton = async (clearpayConfirmElem) => {
    if (
      !(
        this.siteData.executionContext.environment.toLowerCase() ===
          Util.environments.prod ||
        this.siteData.executionContext.environment.toLowerCase() ===
          Util.environments.preprod
      )
    ) {
      if (clearpayConfirmElem) {
        await expect(
          await this.page.locator(clearpayConfirmElem).first()
        ).toBeVisible();
        await this.page.locator(clearpayConfirmElem).first().click();
        console.log('Confirm button Clicked');
        await this.screenshot();
      }
    }
  };
}

module.exports = ClearpayPageModel;
