class AutoHealModel {
  constructor(
    autoHealId,
    locatorId,
    locatorKey,
    locatorValue,
    targetInfo,
    parent,
    previousSibiling,
    nextSibiling,
    firstChild,
    lastChild,
    brandId,
    localeId,
    brandLocale,
    feature,
    page,
    platform,
    pageUrl,
    locatorHealedValue,
    xCoordinate,
    yCoordinate,
    width,
    height
  ) {
    this.autoHealId = autoHealId;
    this.locatorId = locatorId;
    this.locatorKey = locatorKey;
    this.locatorValue = locatorValue;
    this.targetInfo = targetInfo;
    this.parent = parent;
    this.previousSibiling = previousSibiling;
    this.nextSibiling = nextSibiling;
    this.firstChild = firstChild;
    this.lastChild = lastChild;
    this.brandId = brandId;
    this.localeId = localeId;
    this.brandLocale = brandLocale;
    this.feature = feature;
    this.page = page;
    this.platform = platform;
    this.pageUrl = pageUrl;
    this.locatorHealedValue = locatorHealedValue;
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
    this.width = width;
    this.height = height;
  }
}

module.exports = AutoHealModel;
