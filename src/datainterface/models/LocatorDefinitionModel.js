class LocatorDefinitionModel {
  constructor(
    locatorId,
    locatorKey,
    locatorValue,
    brandId,
    localeId,
    brandLocale,
    feature,
    page,
    platform,
    region_name
  ) {
    this.locatorKey = locatorKey;
    this.brandId = brandId;
    this.localeId = localeId;
    this.brandLocale = brandLocale;
    this.feature = feature;
    this.locatorValue = locatorValue;
    this.locatorId = locatorId;
    this.page = page;
    this.platform = platform;
    this.regionName = region_name;
  }
}

module.exports = LocatorDefinitionModel;
