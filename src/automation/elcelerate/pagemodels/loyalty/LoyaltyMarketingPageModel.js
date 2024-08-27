const PageModel = require('../PageModel.js');

class LoyaltyMarketingPageModel extends PageModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }
  addPaidLoyaltyMembershipToCart = async(pageElem, joinCTAElem, toCheckoutElem) => {
    await this.page.keyboard.press('Home');
    await this.page.getByRole('link', {name: pageElem }).click();
    await this.page.getByRole('link', {name: joinCTAElem }).first().click();
    await this.clickOnButtonByAccessibleName(toCheckoutElem);
  };
}
module.exports = LoyaltyMarketingPageModel;