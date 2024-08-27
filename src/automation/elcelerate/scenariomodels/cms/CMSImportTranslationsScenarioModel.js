const ScenarioModel = require('../ScenarioModel');
const CMSLoginPageModel = require('../../pagemodels/cms/CMSLoginPageModel');
const CMSCreateNodePageModel = require('../../pagemodels/cms/CMSCreateNodePageModel');
const CMSImportTranslationsPageModel = require('../../pagemodels/cms/CMSImportTranslationsPageModel');
const Util = require('../../../../utilities/util');

// TODO: Add Logger

class CMSImportTranslationsScenarioModel extends ScenarioModel {
  constructor(testInfo, page, data, context) {
    super(testInfo, page, data, context);
    this.brandLocale = this.siteData.brandLocale;
  }

  // Launch Site and Login as CMS USer

  loginAsTestUser = async () => {
    await this.cmsLoginPage();
    await this.loginAsCMSUser();
  };

  // Navigate to Add Content Page
  addContent = async () => {
    await this.clickAddContent();
  };

  // Navigate to Import Translations
  clickImportTranslations = async () => {
    await this.clickImportTranslationsLink();
  };

  // Choose File and Upload File
  chooseFileAndUpload = async () => {
    await this.chooseUploadFile();
  };

  // Navigate to Find content
  findContent = async () => {
    await this.clickFindContent();
  };

  // Download Translations
  downloadTranslations = async () => {
    await this.downloadTranslationsFC();
  };

  cmsLoginPage = async () => {
    const login = new CMSLoginPageModel(this.testInfo, this.page, this.data);
    await login.goToCmsLoginPage(this.testData.cmsUrlExtensionElem);
  };

  loginAsCMSUser = async () => {
    const loginInfo = new CMSLoginPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await loginInfo.loginDetails(
        this.locatorData.cmsLoginUserNameElem,
        this.testData.cmsUserNameElem,
        this.locatorData.cmsLoginPasswordElem,
        this.testData.cmsPwdElem,
        this.locatorData.cmsLoginElem
      );
    }
  };

  clickAddContent = async () => {
    const addContent = new CMSCreateNodePageModel(
      this.testInfo,
      this.page,
      this.data
    );
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await addContent.addContentClick(this.locatorData.cmsAddContentElem);
    }
  };

  clickImportTranslationsLink = async () => {
    const importLink = new CMSImportTranslationsPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await importLink.importClick(this.locatorData.cmsImportTranslations);
    }
  };

  chooseUploadFile = async () => {
    const uploadFile = new CMSImportTranslationsPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    this.brandLocale = this.siteData.brandLocale;
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      const importFileDetails = {
        fileFieldElem: this.locatorData.fileElem,
        uploadFieldElem: this.locatorData.uploadElem,
        cmsImportBrandAFiledElem: this.locatorData.cmsImportBrandAElem,
        cmsImportRevisionTagFieldElem: this.locatorData.cmsImportRevisionTag,
        cmsImportedRevisionTagFieldElem: this.locatorData.cmsImportedRevisionTag,
        messagesStatus1FieldElem: this.locatorData.messagesStatus1,
        cmsEnterKeywordFieldElem: this.locatorData.cmsEnterKeyword,
        cmsFindContentFilterFieldElem: this.locatorData.cmsFindContentFilter,
        editLocalizedNodeFieldElem: this.locatorData.editLocalizedNodeElem,
        basicInfoTitleFieldElem: this.locatorData.basicInfoTitle,
        basicInfoTabFieldElem: this.locatorData.basicInfoTab,
        seoTabFieldElem: this.locatorData.seoTab,
        seoTitleFieldElem: this.locatorData.seoTitle,
        cmsImportedContentFieldElem: this.locatorData.cmsImportedContent,
        basicInfoAnalyticsImportFieldElem: this.testData.basicInfoAnalyticsImport,
        basicInfoAnalyticsFieldElem: this.locatorData.basicInfoAnalytics,
      };
      await uploadFile.uploadFileToImport(importFileDetails);
    }
  };

  clickFindContent = async () => {
    const findContentDetails = new CMSImportTranslationsPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await findContentDetails.findContentClick(
        this.locatorData.cmsFindContent
      );
    }
  };

  downloadTranslationsFC = async () => {
    const download = new CMSImportTranslationsPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      const downloadTranslationDetails = {
        cmsEnterKeywordField: this.locatorData.cmsEnterKeyword,
        cmsKeywordSearchForDownloadTranslationsField:
          this.testData.cmsKeywordSearchForDownloadTranslations,
        cmsChooseTypeeField: this.locatorData.cmsChooseTypee,
        chooseTypeeFieldData: this.testData.chooseTypee,
        cmsFindContentFilterField: this.locatorData.cmsFindContentFilter,
        cmsCheckFCField: this.locatorData.cmsCheckFC,
        cmsBulkOperationsElemField: this.locatorData.cmsBulkOperationsElem,
        chooseDownloadTranslationsData:
          this.testData.chooseDownloadTranslations,
        updateField: this.locatorData.update,
        cmsClickNextField: this.locatorData.cmsClickNext,
        uploadElemField: this.locatorData.uploadElem,
        messagesStatus1Field: this.locatorData.messagesStatus1,
        downloadTranslationsPagesField:
          this.locatorData.downloadTranslationsPages,
      };
      await download.downloadTranslations(downloadTranslationDetails);
    }
  };
}
module.exports = CMSImportTranslationsScenarioModel;
