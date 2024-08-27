class PopupPageModel {
  constructor(testInfo, page, data) {
    this.testInfo = testInfo;
    this.page = page;
    this.data = data;
    this.locatorData = data.locatorData;
    this.testData = data.testData;
    this.siteData = data.siteData;
  }

  /**
   * Closes a popup by clicking on the specified elements identified by locators.
   *
   * @param {string[]} locators - An array of locators identifying the elements to click for closing the popup.
   * @returns {Promise<void>} - A Promise that resolves when the popup is closed.
   */
  closePopup = async (locators) => {
    for (let iCnt = 0; iCnt < locators.length; iCnt++) {
      const element = locators[iCnt];
      if (element) {
        await this.page.waitForTimeout(1000);
        const isVisible = await this.page.locator(element).isVisible();
        if (isVisible) {
          await this.page.locator(element).click({ force: true });
        }
      }
    }
  };
  // If selectors are provided in csv separated by comma under one selector name.
  closePopupNasty = async (locators) => {
    if (locators !== '') {
      const popups = await this.page.locator(locators);
      let count = await popups.count();
      for (let i = 0; i < count; i++) {
        const isVisible = await popups.nth(i).isVisible();
        if (isVisible) {
          await popups.nth(i).click({ force: true });
        }
        // Each time a popup is closeD, popup list gets refreshed, to CLOSE THEM ALL.
        count = await popups.count();
      }
    }
  };
}

module.exports = PopupPageModel;
