const ScenarioModel = require('../ScenarioModel');
const CMSLoginPageModel = require('../../pagemodels/cms/CMSLoginPageModel');
const CMSCreateNodePageModel = require('../../pagemodels/cms/CMSCreateNodePageModel');
const CMSLocalizePageModel = require('../../pagemodels/cms/CMSLocalizePageModel');
const Util = require('../../../../utilities/util');

// TODO: Add Logger

class CMSImageLocScenarioModel extends ScenarioModel {
  constructor(testInfo, page, data, context) {
    super(testInfo, page, data, context);
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

  // Navigate to Page Node Form

  clickPage = async () => {
    await this.clickPageLink();
  };

  // Enter Unique Revision Tag

  enterRevisionTag = async () => {
    await this.revisionTag();
  };

  // Click on Expand to Add New Item

  expandToAddNewItem = async () => {
    await this.clickExpandToAddNewItem();
  };

  // Select Image Template

  selectImageTemplate = async () => {
    await this.imageTemplateDropdown();
  };

  // Select Media and upload Image

  selectMediaAndSelectImage = async () => {
    await this.mediaAndImage();
  };

  // Provide details in Basic Info Tab

  basicInfo = async () => {
    await this.basicInfoDetails();
  };

  // Save a Node

  clickSaveAndChangeWorkFlowStatus = async () => {
    await this.saveWorkflow();
  };

  // Approve Node

  clickApprove = async () => {
    await this.approve();
  };

  // Verify Approved Success Message

  approveMsg = async () => {
    await this.approveMessage();
  };

  // Publish the Node

  clickPublish = async () => {
    await this.publish();
  };

  // Verify Published Success Message

  publishMsg = async () => {
    await this.publishMessage();
  };

  // Navigate to Localize Tab

  localizeTabOption = async () => {
    await this.localizeTab();
  };

  // Enter Localize From and Localize To details

  localize = async () => {
    await this.localizeTabInfo();
  };

  // Verifying Localization Success Message

  localizeStatusMessage = async () => {
    await this.localizeMsg();
  };

  // Verifying Correct Image Localized or not

  clickLocalizedEdit = async () => {
    await this.localizeEdit();
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

  clickPageLink = async () => {
    const pageLink = new CMSCreateNodePageModel(
      this.testInfo,
      this.page,
      this.data
    );
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await pageLink.pageClick(this.locatorData.cmsPageTemplateElem);
    }
  };

  revisionTag = async () => {
    const revision = new CMSCreateNodePageModel(
      this.testInfo,
      this.page,
      this.data
    );
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await revision.revisionTagMet(this.locatorData.cmsEnterRevisionTagElem);
    }
  };

  clickExpandToAddNewItem = async () => {
    const expandAddNewItem = new CMSCreateNodePageModel(
      this.testInfo,
      this.page,
      this.data
    );
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await expandAddNewItem.expandToAddNewItem(
        this.locatorData.cmsExpandAddNewItemElem
      );
    }
  };

  imageTemplateDropdown = async () => {
    const imageTemplate = new CMSCreateNodePageModel(
      this.testInfo,
      this.page,
      this.data
    );
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await imageTemplate.templateDropdown(
        this.locatorData.templateElem,
        this.testData.cmsSelectImageTemplateElem
      );
    }
  };

  mediaAndImage = async () => {
    const mediaImage = new CMSCreateNodePageModel(
      this.testInfo,
      this.page,
      this.data
    );
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await mediaImage.mediaAndImageClick(
        this.locatorData.selectMediaElem,
        this.locatorData.selectImageElem,
        this.locatorData.iFrameImageWindowElem
      );
    }
  };

  basicInfoDetails = async () => {
    const basicInfoDetail = new CMSCreateNodePageModel(
      this.testInfo,
      this.page,
      this.data
    );
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await basicInfoDetail.basicInfoTab(
        this.locatorData.scrollToBasicInfoElem,
        this.locatorData.basicInfoTitleElem,
        this.locatorData.basicInfoAnalyticsElem,
        this.locatorData.cmsSiteSectionElem,
        this.testData.cmsSelectSiteSection
      );
    }
  };

  saveWorkflow = async () => {
    const save = new CMSCreateNodePageModel(
      this.testInfo,
      this.page,
      this.data
    );
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await save.saveAndChangeWorkFlowStatus(
        this.locatorData.saveAndChangeWorkflowStatusElem,
        this.locatorData.messagesStatusElem,
        this.testData.cmsDraftMessageElem
      );
    }
  };

  approve = async () => {
    const approveLink = new CMSCreateNodePageModel(
      this.testInfo,
      this.page,
      this.data
    );
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await approveLink.approveNode(
        this.locatorData.approveElem,
        this.locatorData.logMessageElem,
        this.locatorData.cmsNextElem,
        this.testData.cmsEnterLogMessageElem
      );
    }
  };

  approveMessage = async () => {
    const approveStatus = new CMSCreateNodePageModel(
      this.testInfo,
      this.page,
      this.data
    );
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await approveStatus.approveStatusMessage(
        this.locatorData.messagesStatusElem,
        this.testData.cmsApproveMessage
      );
    }
  };

  publish = async () => {
    const publishLink = new CMSCreateNodePageModel(
      this.testInfo,
      this.page,
      this.data
    );
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await publishLink.publishNode(
        this.locatorData.publishElem,
        this.locatorData.logMessageElem,
        this.locatorData.cmsNextElem,
        this.testData.cmsEnterLogMessageElem,
        this.locatorData.publishConfirmElem
      );
    }
  };

  publishMessage = async () => {
    const publishStatus = new CMSCreateNodePageModel(
      this.testInfo,
      this.page,
      this.data
    );
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await publishStatus.publishStatusMessage(
        this.locatorData.messagesStatusElem,
        this.testData.cmsPublishMessage
      );
    }
  };

  localizeTab = async () => {
    const localizeInfo = new CMSLocalizePageModel(
      this.testInfo,
      this.page,
      this.data
    );
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await localizeInfo.localizeTabDetails(this.locatorData.localizeTab);
    }
  };

  localizeTabInfo = async () => {
    const localizeInfo = new CMSLocalizePageModel(
      this.testInfo,
      this.page,
      this.data
    );
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await localizeInfo.localizeDetails(
        this.locatorData.selectCountryLocalizeFromElem,
        this.testData.countryLanguageLocalizeFromElem,
        this.locatorData.selectCountryLocalizeToElem,
        this.locatorData.cmsImportRevisionTagElem,
        this.locatorData.cmsLocalizeElem
      );
    }
  };

  localizeMsg = async () => {
    const localizeStatus = new CMSLocalizePageModel(
      this.testInfo,
      this.page,
      this.data
    );
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await localizeStatus.localizeMessageStatus(
        this.locatorData.cmsLocalizeMessageElem,
        this.testData.cmsLocalizeStatusMessageElem,
        this.testData.cmsLocalizeMessageStatusElem
      );
    }
  };

  localizeEdit = async () => {
    const editLocalizedNodee = new CMSLocalizePageModel(
      this.testInfo,
      this.page,
      this.data
    );
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await editLocalizedNodee.editLocalizeDetails(
        this.locatorData.editLocalizedNodeElem,
        this.locatorData.localizedImageNameElem,
        this.testData.imageNameElem
      );
    }
  };
}

module.exports = CMSImageLocScenarioModel;
