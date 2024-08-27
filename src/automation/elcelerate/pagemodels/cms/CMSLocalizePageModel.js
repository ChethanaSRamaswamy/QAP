const { expect } = require('@playwright/test');

const PageModel = require('../PageModel');
const CMSFunctionsPageModel = require('../../pagemodels/cms/CMSFunctionsPageModel');

class CMSLocalizePageModel extends PageModel {
  /**
   * Create a CMSLocalizePageModel.
   * @param {Object} testInfo - Test information object.
   * @param {Object} page - Playwright page object.
   * @param {Object} data - Data  (locatorData, testData, siteData) for the test.
   */
  constructor(testInfo, page, data, context) {
    super(testInfo, page, data, context);
    this.messages = {
      nodeLocalized: 'Node Localized Successfully',
      localizeImage: 'Value of localize image is',
      imageDisplayed: 'Image Displayed As Expected',
    };
  }

  /**
   * Navigate to Localize Tab
   * @param localizeTabElem - locator for 'Localize' tab
   * @memberof CMSLocalizePageModel
  */
  localizeTabDetails = async (localizeTabElem) => {
    if (localizeTabElem) {
      await this.page.locator(localizeTabElem).click();
    }
  };

  /**
   * Enter Localize From and Localize To details
   * @param selectCountryLocalizeFromElem - locator for 'Select Country Localize From'
   * @param countryLanguageLocalizeFromElem - locator for Country to be selected from the list to localize from
   * @param selectCountryLocalizeToElem - locator for 'Select Country Localize To'
   * @param cmsImportRevisionTagElem - locator to enter new 'Revision Tag'
   * @param cmsLocalizeElem - locator for 'Localize' button
   * @memberof CMSLocalizePageModel
  */
  localizeDetails = async (
    selectCountryLocalizeFromElem,
    countryLanguageLocalizeFromElem,
    selectCountryLocalizeToElem,
    cmsImportRevisionTagElem,
    cmsLocalizeElem
  ) => {
    const uniqueRevision = new CMSFunctionsPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    if (
      selectCountryLocalizeFromElem &&
      selectCountryLocalizeToElem &&
      cmsImportRevisionTagElem &&
      cmsLocalizeElem
    ) {
      const localizeForm = await this.page.locator(
        selectCountryLocalizeFromElem
      );
      localizeForm.selectOption(countryLanguageLocalizeFromElem);
      await this.page.locator(selectCountryLocalizeToElem).click();
      await this.page
        .locator(cmsImportRevisionTagElem)
        .first()
        .fill(uniqueRevision.setRevisionTagName(cmsImportRevisionTagElem));
      await this.page.waitForLoadState('domcontentloaded');
      await this.screenshot();
      await this.page.locator(cmsLocalizeElem).click();
    }
  };

  /**
   * Verifying Localization Success Message
   * @param cmsLocalizeMessageElem - locator for localization success message
   * @param cmsLocalizeStatusMessageElem - expected localization message1
   * @param cmsLocalizeMessageStatusElem - expected localization message2
   * @memberof CMSLocalizePageModel
  */
  localizeMessageStatus = async (
    cmsLocalizeMessageElem,
    cmsLocalizeStatusMessageElem,
    cmsLocalizeMessageStatusElem
  ) => {
    if (cmsLocalizeMessageElem) {
      await this.page
        .locator(cmsLocalizeMessageElem)
        .getByText(cmsLocalizeStatusMessageElem);
      await this.page
        .locator(cmsLocalizeMessageElem)
        .getByText(cmsLocalizeMessageStatusElem);
      console.log(cmsLocalizeMessageElem);
      console.log(this.messages.nodeLocalized);
      await this.screenshot();
    }
  };

  /**
   * Edit localize Details
   * @param editLocalizedNodeElem - locator for 'edit node'
   * @param localizedImageNameElem - locator for 'localized image name'
   * @param imageNameElem - expected 'localized image name'
   * @memberof CMSLocalizePageModel
  */
  editLocalizeDetails = async (
    editLocalizedNodeElem,
    localizedImageNameElem,
    imageNameElem
  ) => {
    await this.page.locator(editLocalizedNodeElem).isVisible();
    await this.page.waitForLoadState('domcontentloaded');
    if (editLocalizedNodeElem) {
      await this.page.locator(editLocalizedNodeElem).click();
      await this.page.waitForLoadState();
    }
    if (localizedImageNameElem) {
      console.log(this.messages.localizeImage + imageNameElem);
      await expect(this.page.locator(localizedImageNameElem)).toHaveText(
        imageNameElem
      );
      await this.screenshot();
      console.log(this.messages.imageContent);
    }
  };
}

module.exports = CMSLocalizePageModel;
