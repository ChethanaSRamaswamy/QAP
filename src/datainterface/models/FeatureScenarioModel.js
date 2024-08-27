class FeatureScenarioModel {
  constructor(
    featureScenarioId,
    featureId,
    featureName,
    scenarioId,
    scenarioName,
    featureScenarioCode,
    tag,
    isPC,
    isActive
  ) {
    this.featureScenarioId = featureScenarioId;
    this.featureId = featureId;
    this.featureName = featureName;
    this.scenarioId = scenarioId;
    this.scenarioName = scenarioName;
    this.featureScenarioCode = featureScenarioCode;
    this.tag = tag;
    this.isPC = isPC;
    this.isActive = isActive;
  }
}

module.exports = FeatureScenarioModel;
