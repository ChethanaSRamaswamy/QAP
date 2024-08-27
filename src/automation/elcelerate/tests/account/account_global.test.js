const { test } = require('@playwright/test');

const ScriptDataAdapter = require('../../adapters/script_data_adapter.js');
const AccountScenarioModel = require('../../scenariomodels/account/AccountScenarioModel.js');

const feature = 'Checkout';

const { SCOPE } = process.env;
const records = SCOPE ? JSON.parse(SCOPE) : [];

for (let iCnt = 0; iCnt < records.length; iCnt++) {
  const tags = records[iCnt];
  // console.log(tags);
  test(`${tags} AS A USER I WOULD LIKE TO CHECK THE ACCOUNT FUNCTIONALITIES @ACC`, async ({
    browser,
  }, testInfo) => {
    const canSkipTest = ScriptDataAdapter.isTestEligible(testInfo, tags);
    if (canSkipTest) {
      test.skip();
    }
    const context = await browser.newContext();
    const page = await context.newPage();
    const data = await ScriptDataAdapter.getScriptData(
      tags.split('-'),
      feature,
      testInfo.title
    );

    const account = new AccountScenarioModel(testInfo, page, data);

    await test.step('Verify that the user is able to create a new account', async () => {
      await account.createNewAccount();
    });
    await test.step('Verify that the user is able to add the account shipping details and sign out', async () => {
      await account.submitNewShipBillAddress();
      await account.accountSignout();
    });

    await test.step('Verify that the user is able to login as a return user', async () => {
      await account.signInToExistingAccount();
    });

    await test.step('Verify that the return user is able to perform profile page actions', async () => {
      await account.viewMyOrderDetails();
      await account.deleteAddress();
      await account.submitNewShipBillAddress();
    });

    await test.step('Verify that the return user is able to edit address details on the Profile page and sign out', async () => {
      await account.editAnExistingAddress();
      await account.accountSignout();
    });
  });
}
