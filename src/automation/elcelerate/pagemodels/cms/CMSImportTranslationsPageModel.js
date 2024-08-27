const { expect } = require('@playwright/test');
const path = require('path');

const PageModel = require('../PageModel');
const CMSFunctionsPageModel = require('../../pagemodels/cms/CMSFunctionsPageModel');

class CMSImportTranslationsPageModel extends PageModel {
  /**
   * Create a CMSImportTranslationsPageModel.
   * @param {Object} testInfo - Test information object.
   * @param {Object} page - Playwright page object.
   * @param {Object} data - Data  (locatorData, testData, siteData) for the test.
   */
  constructor(testInfo, page, data, context) {
    super(testInfo, page, data, context);
    this.brandLocale = this.siteData.brandLocale;
    this.messages = {
      navigateToImportTranslationPage: 'Navigated to Import Translations Page',
      fileUploaded: 'File Uploaded successfully',
      revisionTagEntered: 'Unique Value in Revision Tag has been returned',
      importReview: 'Review of import File successful',
      importFinalized: 'Finalize of import File successful',
      importedValue: 'Value of imported Content is',
      importedAsExpected: 'Import Content Displayed As Expected',
      navigateToFindContent: 'Navigated to Find Content Page',
      selectedDownloadTranslations:
        'Download Translations has been Selected from Dropdown',
      downloadTranslationsSuccessful: 'Download Translations is successful',
    };
  }

  /**
   * Navigate to Import Translations
   * @param cmsImportTranslationsElem - locator for 'Import Translations'
   * @memberof CMSImportTranslationsPageModel
   */
  importClick = async (cmsImportTranslationsElem) => {
    if (cmsImportTranslationsElem) {
      await this.page.waitForTimeout(8000);
      await this.page.locator(cmsImportTranslationsElem).click();
      await this.screenshot();
      console.log(this.messages.navigateToImportTranslationPage);
      console.log(await this.page.title());
    }
  };

  /**
   * Choose and Upload File
   * @param {Object} params - Destructured parameters.
   * @param {Locator} params.fileFieldElem - locator for File Element
   * @param {Locator} params.uploadFieldElem - Locator File Upload Element
   * @param {Locator} params.cmsImportBrandAFiledElem - Locator for Aveda Brand
   * @param {Locator} params.cmsImportRevisionTagFieldElem - Locator of Revision Tag element in Import Page.
   * @param {Locator} params.cmsImportedRevisionTagFieldElem - Locator of Imported Revision Tag.
   * @param {Locator} params.cmsEnterKeywordFieldElem - Locator of Keyword Search
   * @param {Locator} params.cmsFindContentFilterFieldElem - Locator Find Content Filter
   * @param {Locator} params.editLocalizedNodeFieldElem - Locator of Edit node in find Content Page.
   * @param {Locator} params.seoTabFieldElem - Locator to validate Imported Content tab.
   * @param {Locator} params.seoTitleFieldElem - Locator to validate Imported Content.
   * @param {Locator} params.cmsImportedContentFieldElem - locator to Validate Actual Value of Imported Content
   * @param {Locator} params.basicInfoAnalyticsImportFieldElem - Expected Value for importing Content
   * @memberof CMSImportTranslationsPageModel
   */
  uploadFileToImport = async ({fileFieldElem, uploadFieldElem, cmsImportBrandAFiledElem, cmsImportRevisionTagFieldElem, cmsEnterKeywordFieldElem, cmsFindContentFilterFieldElem, editLocalizedNodeFieldElem, seoTabFieldElem, seoTitleFieldElem, cmsImportedContentFieldElem, basicInfoAnalyticsImportFieldElem}) => {
    const uniqueRevision = new CMSFunctionsPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    if (fileFieldElem && uploadFieldElem) {
      const brancLocaleValue = this.brandLocale;
      console.log(`value is ${brancLocaleValue}`);
      const filePath = path.resolve(__dirname, `../../../../datainterface/data/xl/cms/import${brancLocaleValue}.xls`);
      await this.page
        .locator(fileFieldElem)
        .setInputFiles(filePath);
      await this.screenshot();
      await this.page.locator(uploadFieldElem).click();
      console.log(this.messages.fileUploaded);
      await this.page
        .locator(cmsImportRevisionTagFieldElem)
        .first()
        .fill(uniqueRevision.setRevisionTagName(cmsImportRevisionTagFieldElem));
      await this.screenshot();
      console.log(this.messages.revisionTagEntered);
      await this.page.locator(uploadFieldElem).click();
      await this.page.waitForLoadState();
      console.log(this.messages.importReview);
      await this.page.locator(uploadFieldElem).click();
      console.log(this.messages.importFinalized);
    }

    if (
      cmsEnterKeywordFieldElem &&
      cmsFindContentFilterFieldElem &&
      editLocalizedNodeFieldElem
    ) {
      await this.page.locator(editLocalizedNodeFieldElem).click();
    }

    if (seoTabFieldElem) {
      await this.page.locator(seoTabFieldElem).click();
      await this.screenshot();
    }

    if (seoTitleFieldElem) {
      console.log(this.messages.importedValue + basicInfoAnalyticsImportFieldElem);
      await this.page.locator(seoTitleFieldElem).click();
    }
    if (cmsImportedContentFieldElem) {
      if (cmsImportBrandAFiledElem) {
        await expect(this.page.locator(cmsImportedContentFieldElem)).toContainText(
          basicInfoAnalyticsImportFieldElem
        );
      } else {
        await expect(this.page.locator(cmsImportedContentFieldElem)).toHaveValue(
          basicInfoAnalyticsImportFieldElem
        );
      }
      await this.page.waitForLoadState();
      await this.screenshot();
      console.log(this.messages.importedAsExpected);
    }
    await this.screenshot();
  };

  /**
   * Navigate to Find Content
   * @param cmsFindContent - locator for 'Find Content Page'
   * @memberof CMSImportTranslationsPageModel
   */

  findContentClick = async (cmsFindContent) => {
    if (cmsFindContent) {
      await this.page.waitForLoadState();
      await this.page.waitForSelector(cmsFindContent);
      await this.page.locator(cmsFindContent).click();
      await this.page.waitForLoadState();
      await this.screenshot();
      console.log(this.messages.selectedDownloadTranslations);
    }
  };

  /**
   * Download Translations  of a content
    * @param {Object} params - Destructured parameters.
   * @param {Locator} params.cmsEnterKeywordField - Locator for Keyword Search.
   * @param {Locator} params.cmsKeywordSearchForDownloadTranslationsField - Value for Keyword Search.
   * @param {Locator} params.cmsChooseTypeeField - Locator to Choose Content type.
   * @param {Locator} params.cmsFindContentFilterField - Locator of Filter Button.
   * @param {Locator} params.cmsCheckFCField - Locator to select the Content to download
   * @param {Locator} params.cmsBulkOperationsElemField - Locator to choose Bulk Operations.
   * @param {Locator} params.updateField - Locator to Update button
   * @param {Locator} params.cmsClickNextField - Locator to navigate to Next Page.
   * @param {Locator} params.uploadElemField - Locator to download or Upload.
   * @param {Locator} params.messagesStatus1Field - Locator to validate the Success Message.
   * @param {Locator} params.downloadTranslationsPagesField - Locator to validate all the the download translations Pages.
   * @memberof CMSImportTranslationsPageModel
   */

  downloadTranslations = async ({cmsEnterKeywordField, cmsKeywordSearchForDownloadTranslationsField, cmsChooseTypeeField, cmsFindContentFilterField, cmsCheckFCField, cmsBulkOperationsElemField, updateField, cmsClickNextField, uploadElemField, messagesStatus1Field, downloadTranslationsPagesField}) => {
    if (
      cmsEnterKeywordField &&
      cmsChooseTypeeField &&
      cmsFindContentFilterField &&
      cmsBulkOperationsElemField
    ) {
      // await this.page.waitForTimeout(8000);
      await this.page.locator(cmsEnterKeywordField).click();
      await this.page
        .locator(cmsEnterKeywordField)
        .first()
        .fill(cmsKeywordSearchForDownloadTranslationsField);
      const chooseType = await this.page.locator(cmsChooseTypeeField);
      chooseType.selectOption(this.testData.chooseTypee);
      await this.page.locator(cmsFindContentFilterField).click();
      await this.page.waitForTimeout(18000);
    }
    if (cmsCheckFCField && cmsBulkOperationsElemField) {
      await this.page.locator(cmsCheckFCField).click();

      await this.page.waitForTimeout(8000);
      const findContentOption = await this.page.locator(cmsBulkOperationsElemField);
      findContentOption.selectOption(this.testData.chooseDownloadTranslations);
      await this.screenshot();
      // console.log('Download Translations has been Selected from Dropdown');
      console.log(this.messages.selectedDownloadTranslations);
    }

    if (updateField) {
      await this.page.locator(updateField).click();
      await this.screenshot();
    }

    if (cmsClickNextField) {
      await this.page.locator(cmsClickNextField).click();
      await this.screenshot();
    }
    if (uploadElemField) {
      await this.page.locator(uploadElemField).click();
      await this.page.waitForTimeout(18000);
      await this.screenshot();
    }
    if (downloadTranslationsPagesField) {
      await this.page.locator(downloadTranslationsPagesField).isVisible();
      await this.page.waitForTimeout(18000);
      await this.screenshot();
    }

    if (messagesStatus1Field) {
      await this.page.locator(messagesStatus1Field).isVisible();
      // console.log('Download Translations is successful');
      console.log(this.messages.downloadTranslationsSuccessful);
      await this.screenshot();
    }
  };
}
module.exports = CMSImportTranslationsPageModel;
