const ScenarioModel = require('../ScenarioModel');
const GuestUserScenarioModel = require('./GuestUserScenarioModel');
const ViewCartPageModel = require('../../pagemodels/cart/ViewCartPageModel');
const SigninPageModel = require('../../pagemodels/signin/SigninPageModel');
const ShipmentPageModel = require('../../pagemodels/shipment/ShipmentPageModel');
const Util = require('../../../../utilities/util');
const AddressPageModel = require('./../../pagemodels/common/AddressPageModel');
const ReviewPageModel = require('../../pagemodels/review/ReviewPageModel');

class ReturnUserScenarioModel extends ScenarioModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
    this.guestUser = new GuestUserScenarioModel(testInfo, page, data);
    this.delivery = new ShipmentPageModel(this.testInfo, this.page, this.data);
  }

  /**
   * Validate whether the return user able to sign in using their credentials.
   * @async
   * @method
   * @memberof ReturnUserScenarioModel
   */
  returnUserSignInDetails = async () => {
    const user = new SigninPageModel(this.testInfo, this.page, this.data);
    const ruIds = [
      this.testData.RID,
      this.testData.RID1,
      this.testData.RID2,
      this.testData.RID3,
      this.testData.RID4,
      this.testData.RID5,
      this.testData.RID6,
      this.testData.RID7,
      this.testData.RID8,
      this.testData.RID9,
      this.testData.RID10,
    ];

    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await user.signInReturnUser(
        this.locatorData.signInElem,
        this.locatorData.signInUserEmailElem,
        this.locatorData.signInUserPasswordElem,
        this.locatorData.signInSubmitElem,
        ruIds,
        this.testData.returnUserPassword
      );
    } else {
      await user.signInReturnUser(
        this.locatorData.mobSignInElem,
        this.locatorData.mobSignInUserEmailElem,
        this.locatorData.mobSignInUserPasswordElem,
        this.locatorData.mobSignInSubmitElem,
        ruIds,
        this.testData.returnUserPassword
      );
    }
  };

  /**
   * Locators for return user shipping details through guest user method.
   * @async
   * @method
   * @memberof ReturnUserScenarioModel
   */
  // using GuestUserModel

  deliveryDetails = async () => {
    const addNewAddress = new AddressPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      const shipAddressDetails = {
        firsNameField: this.locatorData.ruShipFirstNameElem,
        lastNameField: this.locatorData.ruShipLastNameElem,
        enterAddressManually: this.locatorData.ruShipManualAddressElem,
        addressField1: this.locatorData.ruShipAddress1Elem,
        addressField2: this.locatorData.ruShipAddress2Elem,
        cityField: this.locatorData.ruShipCityElem,
        zipCodeField: this.locatorData.ruShipZipCodeElem,
        mobileFieldElem: this.locatorData.ruShipPhoneElem,
        provinceField: this.locatorData.ruShipCountryDdElem,
        regionFieldAction: this.locatorData.ruShipRegionActionElem,
        regionFieldValue: this.locatorData.ruShipRegionValueElem,
        colonyFieldAction: this.locatorData.ruShipColonyActionElem,
        colonyFieldValue: this.locatorData.ruShipColonyValueElem,
        termsAndCond: this.locatorData.ruShipTermsCondElem,
        useSameAddressElem: this.locatorData.ruShipUseSameAddressElem,
        pressTab: this.locatorData.ruShipPressTabElem,
        titleElem: this.locatorData.ruShipTitleElem,
        selectZipCodeElem: this.locatorData.ruShipSelectZipCodeElem,
        provinceDDValueElem: this.locatorData.ruShipCountryDdValueElem,
        titleValueElem: this.locatorData.ruShipTitleValueElem,
        secondSurnameElem: this.locatorData.ruShipSecondSurnameElem,
        areaElem: this.locatorData.ruShipAreaElem,
        areaValueElem: this.locatorData.ruShipAreaValueElem,
        submitElem: this.locatorData.ruShipAddressSubmitElem,
      };
      await addNewAddress.shipAddNewAddress(shipAddressDetails);
    } else {
      const mobShipAddressDetails = {
        firsNameField: this.locatorData.ruMobShipFirstNameElem,
        lastNameField: this.locatorData.ruMobShipLastNameElem,
        enterAddressManually: this.locatorData.ruMobShipManualAddressElem,
        addressField1: this.locatorData.ruMobShipAddress1Elem,
        addressField2: this.locatorData.ruMobShipAddress2Elem,
        cityField: this.locatorData.ruMobShipCityElem,
        zipCodeField: this.locatorData.ruMobShipZipCodeElem,
        mobileFieldElem: this.locatorData.ruMobShipPhoneElem,
        provinceField: this.locatorData.ruMobShipCountryDdElem,
        regionFieldAction: this.locatorData.ruMobShipRegionActionElem,
        regionFieldValue: this.locatorData.ruMobShipRegionValueElem,
        colonyFieldAction: this.locatorData.ruMobShipColonyActionElem,
        colonyFieldValue: this.locatorData.ruMobShipColonyValueElem,
        termsAndCond: this.locatorData.ruMobShipTermsCondElem,
        useSameAddressElem: this.locatorData.ruMobShipUseSameAddressElem,
        pressTab: this.locatorData.ruMobShipPressTabElem,
        titleElem: this.locatorData.ruMobShipTitleElem,
        selectZipCodeElem: this.locatorData.ruMobShipSelectZipCodeElem,
        provinceDDValueElem: this.locatorData.ruMobShipCountryDdValueElem,
        titleValueElem: this.locatorData.ruMobShipTitleValueElem,
        secondSurnameElem: this.locatorData.ruMobShipSecondSurnameElem,
        areaElem: this.locatorData.ruMobShipAreaElem,
        areaValueElem: this.locatorData.ruMobShipAreaValueElem,
        submitElem: this.locatorData.ruMobShipAddressSubmitElem,
      };
      await addNewAddress.shipAddNewAddress(mobShipAddressDetails);
    }
  };

  /**
   * Validate whether the user able to perform mergecart scenario.
   * @async
   * @method
   * @memberof ReturnUserScenarioModel
   */
  performMergeCartAndHandleSamplePage = async () => {
    // validate merge cart scenario
    const mergeCart = new ViewCartPageModel(
      this.testInfo,
      this.page,
      this.data
    );
    const navigatedToSamplePage = await mergeCart.mergeCartValidation(
      this.locatorData.cartContinueElem,
      this.locatorData.mobCartContinueElem,
      this.locatorData.mobCartOptionalContinueElem
    );
    if (navigatedToSamplePage) {
      await this.guestUser.selectSample();
    }
  };

  /**
   * Verifies the return user able to add their shipping address.
   * @async
   * @method
   * @memberof ReturnUserScenarioModel
   */
  // using GuestUserModel
  shippingDetails = async () => {
    await this.deliveryDetails();
    await this.goToPaymentFromShipment();
  };

  /**
   * Validate the return user able to click on continue button in shipping details page to proceed with payment page.
   * @async
   * @method
   * @memberof ReturnUserScenarioModel
   */
  goToPaymentFromShipment = async () => {
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await this.delivery.navigateToPaymentFromShipping(
        this.locatorData.ruShipContinueElem,
        this.locatorData.ruShipCoreContentElem
      );
    } else {
      await this.delivery.navigateToPaymentFromShipping(
        this.locatorData.ruMobShipContinueElem,
        this.locatorData.ruMobShipCoreContentElem
      );
    }
  };

  /**
   * Validate the return user able to click on add new shipping address.
   * @async
   * @method
   * @memberof ReturnUserScenarioModel
   */
  // adding new shipment details for return user
  addNewRUShippingDetails = async () => {
    const newRUDeliveryInfo = new ShipmentPageModel(
      this.testInfo,
      this.page,
      this.data
    );

    // Before deivery address form open
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await newRUDeliveryInfo.editRUShipmentDetails(
        this.locatorData.ruShipModifyAddress,
        this.locatorData.ruShipAddressEditElem,
        this.locatorData.ruShipAddNewAddressElem
      );
    } else {
      await newRUDeliveryInfo.editRUShipmentDetails(
        this.locatorData.ruMobShipModifyAddress,
        this.locatorData.ruMobShipAddressEditElem,
        this.locatorData.ruMobShipAddNewAddressElem
      );
    }
  };

  /**
   * Review pay details function for legacy sites
   * @returns {Promise<void>} A Promise that resolves when the review is complete.
   */
  reviewPayDetails = async () => {
    const review = new ReviewPageModel(this.testInfo, this.page, this.data);
    if (this.siteData.executionContext.platform === Util.devices.pc) {
      await review.reviewOrder(
        this.locatorData.ruReviewTermsCondElem,
        this.locatorData.ruReviewContinueElem
      );
    } else {
      await review.reviewOrder(
        this.locatorData.ruMobReviewTermsCondElem,
        this.locatorData.ruMobReviewContinueElem
      );
    }
  };
}
module.exports = ReturnUserScenarioModel;
