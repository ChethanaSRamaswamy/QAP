// Import necessary modules
const ScenarioModel = require('../ScenarioModel');
const AccountExampleScenarioModel = require('./AccountExampleScenarioModel');

/**
 * Represents a Page Model for the account order history example.
 * @class AccountOrderHistoryExampleScenarioModel
 * @extends ScenarioModel
 * @description In this AccountOrderHistoryExampleScenarioModel, we do not create a new Page Model.
 *  Instead, we use AccountExample Scenario Model, which already has all related Page Model
 *  functions initialized, allowing us to call PageModel's functions from AccountExampleScenarioModel in this file.
 */
class AccountOrderHistoryExampleScenarioModel extends ScenarioModel {
  /**
   * Create an AccountOrderHistoryExampleScenarioModel.
   * @param {Object} testInfo - Test information object.
   * @param {Object} page - Playwright page object.
   * @param {Object} data - Data for the test.
   */
  constructor(testInfo, page, data) {
    super(testInfo, page, data);

    // Create an instance of AccountExampleScenarioModel to access user profile functions
    this.userProfile = new AccountExampleScenarioModel(testInfo, page, data);
  }

  /**
   * Verify the order history by invoking the orderActivityLog function.
   * Access the order activity log within the user's profile.
   * @async
   * @method
   * @memberof AccountOrderHistoryExampleScenarioModel
   */
  verifyOrderHistory = async () => {
    // Navigate to the order history page using user profile data
    await this.userProfile.mySpace.navigateToOrderHistory(
      this.locatorData.orderHistory,
      this.testData.orderHistoryUrl,
      this.locatorData.historyLog,
      this.locatorData.noHistoryLog
    );
  };
}

module.exports = AccountOrderHistoryExampleScenarioModel;
