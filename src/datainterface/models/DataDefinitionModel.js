class DataDefinitionModel {
  constructor({
    dataId,
    dataKey,
    dataValue,
    brandId,
    localeId,
    brandLocale,
    feature,
    page,
    platform,
    region,
    hasInputSet,
    setNo,
  }) {
    this.dataKey = dataKey;
    this.brandId = brandId;
    this.localeId = localeId;
    this.brandLocale = brandLocale;
    this.feature = feature;
    this.dataValue = dataValue;
    this.dataId = dataId;
    this.page = page;
    this.platform = platform;
    // if hasInputSet = 1, then the data should come from data_definitions_multi_values table
    this.hasInputSet = hasInputSet;
    this.setNo = setNo;
    this.regionName = region;
  }
}

module.exports = DataDefinitionModel;
