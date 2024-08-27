class TestCoverageModel {
  constructor(
    testCoverageId,
    brandModel,
    localeModel,
    featureScenarioModel,
    isPC,
    isActive
  ) {
    this.testCoverageId = testCoverageId;
    this.brandModel = brandModel;
    this.localeModel = localeModel;
    this.featureScenarioModel = featureScenarioModel;
    this.isPC = isPC;
    this.isActive = isActive;
  }
}
module.exports = TestCoverageModel;
