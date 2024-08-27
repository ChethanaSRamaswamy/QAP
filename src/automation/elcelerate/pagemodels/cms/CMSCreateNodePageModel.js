const PageModel = require('../PageModel');
const CMSFunctionsPageModel = require('../../pagemodels/cms/CMSFunctionsPageModel');

class CMSCreateNodePageModel extends PageModel {
  /**
   * Create a CMSCreateNodePageModel.
   * @param {Object} testInfo - Test information object.
   * @param {Object} page - Playwright page object.
   * @param {Object} data - Data  (locatorData, testData, siteData) for the test.
   */
  constructor(testInfo, page, data, context) {
    super(testInfo, page, data, context);
    this.messages = {
      navigateToAddContent: 'Navigated to Add Content Page',
      navigateToPage: 'Navigated to Page Content',
      revisionTagEntered: 'Unique Value in Revision Tag has been returned',
      expandNewItemClicked: 'Clicked on Expand To add New Item',
      selectedTemplate: 'Template Selected from dropdown',
      selectedMedia: 'Select Media Button has been Clicked',
      selectedImage: 'Image has been uploaded',
      titleEntered: 'Unique Value in Title Field has been returned',
      analyticsValueEntered:
        'Unique Value in Analytics Field has been returned',
      selectedSiteSection: 'Site Section has been Selected',
      createdNode: 'Created a Node Successfully',
      nodeApproved: 'Node has been approved',
      nodePublished: 'Node published Successfully',
    };
  }

  /**
   * Navigates to Add Content Page
   * @param cmsAddContentElem - locator for Add Content Element
   * @memberof CMSCreateNodePageModel
  */
  addContentClick = async (cmsAddContentElem) => {
    if (cmsAddContentElem) {
      await this.page.locator(cmsAddContentElem).click();
      console.log(this.messages.navigateToAddContent);
    }
  };

  /**
   * Navigate to Page Node Form
   * @param cmsPageTemplateElem - locator for Page Template Element
   * @memberof CMSCreateNodePageModel
  */
  pageClick = async (cmsPageTemplateElem) => {
    if (cmsPageTemplateElem) {
      await this.page.locator(cmsPageTemplateElem).click();
      console.log(this.messages.navigateToPage);
    }
  };

  /**
   * Enter Unique Revision Tag
   * @param cmsEnterRevisionTagElem - locator for Revision Tag field text box
   * @memberof CMSCreateNodePageModel
  */
  revisionTagMet = async (cmsEnterRevisionTagElem) => {
    const uniqueRevision = new CMSFunctionsPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    if (cmsEnterRevisionTagElem) {
      await this.page
        .locator(cmsEnterRevisionTagElem)
        .first()
        .fill(uniqueRevision.setRevisionTagName(cmsEnterRevisionTagElem));
      console.log(this.messages.revisionTagEntered);
    }
  };

  /**
   * Clicks on 'Expand To Add New Item'
   * @param cmsExpandAddNewItemElem - locator for 'expand to add new item' link
   * @memberof CMSCreateNodePageModel
  */
  expandToAddNewItem = async (cmsExpandAddNewItemElem) => {
    if (cmsExpandAddNewItemElem) {
      await this.page.waitForLoadState();
      // await this.page.locator(cmsExpandAddNewItemElem).click();
      await this.page.locator(cmsExpandAddNewItemElem).dispatchEvent('click');
      console.log(this.messages.expandNewItemClicked);
    }
  };

  /**
   * Select a template with Image Type
   * @param templateElem - locator for templates
   * @param cmsSelectImageTemplateElem - locator for the particular template to be selected from dropdown
   * @memberof CMSCreateNodePageModel
  */
  templateDropdown = async (templateElem, cmsSelectImageTemplateElem) => {
    if (templateElem) {
      await this.page.waitForLoadState();
      const templateSelect = await this.page.locator(templateElem);
      templateSelect.selectOption(cmsSelectImageTemplateElem);
      console.log(this.messages.selectedTemplate);
      await this.page.waitForLoadState();
    }
  };

  /**
   * Click on Media Button and Select Image for Image Localization
   * @param selectMediaElem - locator for Select Media button
   * @param selectImageElem - locator for the particular image to be selected
   * @param iFrameImageWindowElem - iframe for media library popup
   * @memberof CMSCreateNodePageModel
  */
  mediaAndImageClick = async (
    selectMediaElem,
    selectImageElem,
    iFrameImageWindowElem
  ) => {
    if (selectMediaElem) {
      await this.page.locator(selectMediaElem).click();
      await this.screenshot();
      await this.page.waitForLoadState();
      console.log(this.messages.selectedMedia);
    }
    if (selectImageElem) {
      await this.page
        .frameLocator(iFrameImageWindowElem)
        .locator(selectImageElem)
        .click();
      await this.screenshot();
      console.log(this.messages.selectedImage);
    }
  };

  /**
   * Click on Media Button and Select Image for Alfresco
   * @param selectMediaElem - locator for Select Media button
   * @param imageElem - locator for the particular image to be selected for Alfresco Test
   * @param iFrameImageWindowElem - iframe for media library popup
   * @memberof CMSCreateNodePageModel
  */
  mediaThenImageClick = async (
    selectMediaElem,
    imageElem,
    iFrameImageWindowElem
  ) => {
    if (selectMediaElem) {
      await this.page.locator(selectMediaElem).click();
      await this.screenshot();
      await this.page.waitForLoadState();
      console.log(this.messages.selectedMedia);
    }
    if (imageElem) {
      await this.page
        .frameLocator(iFrameImageWindowElem)
        .locator(imageElem)
        .click();
      await this.screenshot();
      console.log(this.messages.selectedImage);
    }
  };

  /**
   * Click on Media Button and Select Image for Alfresco
   * @param scrollToBasicInfoElem - locator for Basic Info tab
   * @param basicInfoTitleElem - locator for Title in basic info Tab
   * @param basicInfoAnalyticsElem -locator for Analytics in basic info Tab
   * @param cmsSiteSectionElem - Locator Site Section Field
   * @param cmsSelectSiteSection - Test data to select value in Site Section Locator
   * @memberof CMSCreateNodePageModel
  */
  basicInfoTab = async (
    scrollToBasicInfoElem,
    basicInfoTitleElem,
    basicInfoAnalyticsElem,
    cmsSiteSectionElem,
    cmsSelectSiteSection
  ) => {
    const uniqueTitleAnalytics = new CMSFunctionsPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    await this.page.locator(scrollToBasicInfoElem).isVisible();
    if (scrollToBasicInfoElem) {
      await this.page.locator(scrollToBasicInfoElem).click();
    }
    if (basicInfoTitleElem) {
      await this.page.locator(basicInfoTitleElem).click();
      await this.page
        .locator(basicInfoTitleElem)
        .first()
        .fill(uniqueTitleAnalytics.setTitleAnalyticsTag(basicInfoTitleElem));
      console.log(this.messages.titleEntered);
    }
    if (basicInfoAnalyticsElem) {
      await this.page.locator(basicInfoAnalyticsElem).click();
      await this.page
        .locator(basicInfoAnalyticsElem)
        .first()
        .fill(
          uniqueTitleAnalytics.setTitleAnalyticsTag(basicInfoAnalyticsElem)
        );
      console.log(this.messages.analyticsValueEntered);
    }
    if (cmsSiteSectionElem) {
      const selectSiteSection = await this.page.locator(cmsSiteSectionElem);
      selectSiteSection.selectOption(cmsSelectSiteSection);
      await this.screenshot();
      console.log(this.messages.selectedSiteSection);
    }
  };

  /**
   * Save a node form by clicking on 'Save and Change Workflow Status Button'
   * @param saveAndChangeWorkflowStatusElem - locator for save and change workflow status button
   * @param messagesStatusElem - locator for status message
   * @param cmsDraftMessageElem - locator for draft message
   * @memberof CMSCreateNodePageModel
  */
  saveAndChangeWorkFlowStatus = async (
    saveAndChangeWorkflowStatusElem,
    messagesStatusElem,
    cmsDraftMessageElem
  ) => {
    if (saveAndChangeWorkflowStatusElem) {
      await this.page.locator(saveAndChangeWorkflowStatusElem).click();
    }
    if (messagesStatusElem) {
      await this.page
        .locator(messagesStatusElem)
        .getByText(cmsDraftMessageElem);
      console.log(messagesStatusElem);
      console.log(this.messages.createdNode);
    }
  };

  /**
   * Approve the created Node
   * @param approveElem - locator for Approve button
   * @param logMessageElem - locator for log message text box
   * @param cmsNextElem - locator 'for Next' button
   * @param cmsEnterLogMessageElem - text message to be entered as a log message
   * @memberof CMSCreateNodePageModel
  */
  approveNode = async (
    approveElem,
    logMessageElem,
    cmsNextElem,
    cmsEnterLogMessageElem
  ) => {
    if (approveElem) {
      await this.page.locator(approveElem).click();
    }
    if (logMessageElem) {
      await this.page.locator(logMessageElem).click();
      await this.page
        .locator(logMessageElem)
        .first()
        .fill(cmsEnterLogMessageElem);
      await this.page.locator(cmsNextElem).click();
    }
  };

  /**
   * Verifying Approve Status Message
   * @param messagesStatusElem - locator for status message
   * @param cmsApproveMessage - text message displayed
   * @memberof CMSCreateNodePageModel
  */
  approveStatusMessage = async (messagesStatusElem, cmsApproveMessage) => {
    if (messagesStatusElem) {
      await this.page.locator(messagesStatusElem).getByText(cmsApproveMessage);
      await this.screenshot();
      console.log(messagesStatusElem);
      console.log(this.messages.nodeApproved);
    }
  };

  /**
   * Publish the Node
   * @param publishElem - locator for 'Publish' button
   * @param logMessageElem - locator for 'log message' text box
   * @param cmsNextElem - locator for 'Next' button
   * @param cmsEnterLogMessageElem - log message text
   * @param publishConfirmElem -  locator for 'confirm' button
   * @memberof CMSCreateNodePageModel
  */
  publishNode = async (
    publishElem,
    logMessageElem,
    cmsNextElem,
    cmsEnterLogMessageElem,
    publishConfirmElem
  ) => {
    if (publishElem) {
      await this.page.locator(publishElem).click();
    }
    if (logMessageElem) {
      await this.page.locator(logMessageElem).click();
      await this.page
        .locator(logMessageElem)
        .first()
        .fill(cmsEnterLogMessageElem);
      await this.screenshot();
      await this.page.locator(cmsNextElem).click();
    }
    if (publishConfirmElem) {
      await this.page.locator(publishConfirmElem).click();
    }
  };

  /**
   * Verify Publish Success Message
   * @param messagesStatusElem - locator for status message
   * @param cmsPublishMessage - publish success message displayed
   * @memberof CMSCreateNodePageModel
  */
  publishStatusMessage = async (messagesStatusElem, cmsPublishMessage) => {
    if (messagesStatusElem) {
      await this.page.locator(messagesStatusElem).getByText(cmsPublishMessage);
      await this.screenshot();
      console.log(messagesStatusElem);
      console.log(this.messages.nodePublished);
    }
  };
}

module.exports = CMSCreateNodePageModel;
