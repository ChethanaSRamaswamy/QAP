class BrandLocaleModel {
  constructor({
    brandLocaleId,
    brandName,
    brandPrefix,
    localeName,
    localePrefix,
    brandLocale,
    hasPCSM,
    hasMobileSM,
  }) {
    this.brandLocaleId = brandLocaleId;
    this.brandName = brandName;
    this.brandPrefix = brandPrefix;
    this.localeName = localeName;
    this.localePrefix = localePrefix;
    this.brandLocale = brandLocale;
    this.hasPCSM = hasPCSM;
    this.hasMobileSM = hasMobileSM;
  }
}

module.exports = BrandLocaleModel;
