const PageModel = require('../PageModel');

class CMSFunctionsPageModel extends PageModel {
  /**
   * Create a CMSFunctionsPageModel.
   * @param {Object} testInfo - Test information object.
   * @param {Object} page - Playwright page object.
   * @param {Object} data - Data  (locatorData, testData, siteData) for the test.
   */
  constructor(testInfo, page, data, context) {
    super(testInfo, page, data, context);
  }

  /**
   * Generate Unique Revision Tag Value
   * @memberof CMSFunctionsPageModel
  */
  setRevisionTagName = () => {
    const strValues = 'abcd12345';
    const strRevisionTag = 'Test Content ';
    let strTmp = '';
    for (let i = 0; i < 10; i++) {
      strTmp =
        strTmp + strValues.charAt(Math.round(strValues.length * Math.random()));
    }
    console.log('Generated Revision Tag: ' + strRevisionTag + strTmp);
    return strRevisionTag + strTmp;
  };

  /**
   * Generate Unique Title and Analytics Field Value
   * @memberof CMSFunctionsPageModel
  */
  setTitleAnalyticsTag = () => {
    const strValues = 'abcd12345';
    const strTitleAnalytics = 'Test Content ';
    let strTmp = '';
    for (let i = 0; i < 10; i++) {
      strTmp =
        strTmp + strValues.charAt(Math.round(strValues.length * Math.random()));
    }
    console.log('Generated Revision Tag: ' + strTitleAnalytics + strTmp);
    return strTitleAnalytics + strTmp;
  };
}

module.exports = CMSFunctionsPageModel;
