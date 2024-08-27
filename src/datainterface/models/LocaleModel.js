class LocaleModel {
  constructor(localeId, localeName, localePrefix, region, elcCode) {
    this.localeId = localeId;
    this.localeName = localeName;
    this.localePrefix = localePrefix;
    this.region = region;
    this.elcCode = elcCode;
  }
}

module.exports = LocaleModel;
