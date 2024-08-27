class SiteDefinitionModel {
  constructor({
    brandLocaleId,
    brandId,
    localeId,
    brandLocale,
    prodUrl,
    preProdUrl,
    devUrl,
    stageUrl,
    localUrl,
    prodMobUrl,
    preProdMobUrl,
    devMobUrl,
    stageMobUrl,
    localMobUrl,
    prodAdminUrl,
    preProdAdminUrl,
    devAdminUrl,
    stageAdminUrl,
    localAdminUrl,
    prodMobAdminUrl,
    preProdMobAdminUrl,
    devMobAdminUrl,
    stageMobAdminUrl,
    localMobAdminUrl,
    pincerUrl,
    stageUrlNoCredential,
    stageMobUrlNoCredential,
    devUrlNoCredential,
    devMobUrlNoCredential,
    localUrlNoCredential,
    localMobUrlNoCredential,
    executionContext,
    region,
    credentials,
    dbAdminUsername,
    dbAdminPassword,
    bCode = -1,
    lCode = -1,
    prEnvUrl,
    prEnvUrlNoCredential,
    intEnvUrl,
    intEnvUrlNoCredential,
    intXEnvUrlNoCredential,
    intXEnvUrl,
    intXEnvAdminUrl,
    tenantDomain,
    testGlobalOffersRequired,
    rcoGhostCookie,
    rcoVulcanCookie,
    toplaceorder,
    brandName,
    localeName,
    brandPrefix,
    localePrefix,
    brandUsername,
    brandPassword,
    adminUsername,
    adminPassword,
    pincerUsername,
    pincerPassword,
    tenantWebUsername,
    tenantWebPassword,
    unifiedUsername,
    unifiedPassword,
    baseUsername,
    basePassword,
  }) {
    this.brandLocaleId = brandLocaleId;
    this.brandId = brandId;
    this.localeId = localeId;
    this.brandLocale = brandLocale;
    this.brandPrefix = brandPrefix;
    this.localePrefix = localePrefix;
    this.prodUrl = prodUrl;
    this.preProdUrl = preProdUrl;
    this.devUrl = devUrl;
    this.stageUrl = stageUrl;
    this.prodMobUrl = prodMobUrl;
    this.preProdMobUrl = preProdMobUrl;
    this.devMobUrl = devMobUrl;
    this.stageMobUrl = stageMobUrl;
    this.prodAdminUrl = prodAdminUrl;
    this.preProdAdminUrl = preProdAdminUrl;
    this.devAdminUrl = devAdminUrl;
    this.stageAdminUrl = stageAdminUrl;
    this.prodMobAdminUrl = prodMobAdminUrl;
    this.preProdMobAdminUrl = preProdMobAdminUrl;
    this.devMobAdminUrl = devMobAdminUrl;
    this.stageMobAdminUrl = stageMobAdminUrl;
    this.pincerUrl = pincerUrl;
    this.stageUrlNoCredential = stageUrlNoCredential;
    this.stageMobUrlNoCredential = stageMobUrlNoCredential;
    this.devUrlNoCredential = devUrlNoCredential;
    this.devMobUrlNoCredential = devMobUrlNoCredential;
    this.executionContext = executionContext;
    this.region = region;
    this.credentials = credentials;
    this.dbAdminUsername = dbAdminUsername;
    this.dbAdminPassword = dbAdminPassword;
    this.localUrl = localUrl;
    this.localMobUrl = localMobUrl;
    this.localAdminUrl = localAdminUrl;
    this.localMobAdminUrl = localMobAdminUrl;
    this.localUrlNoCredential = localUrlNoCredential;
    this.localMobUrlNoCredential = localMobUrlNoCredential;
    this.bCode = bCode;
    this.lCode = lCode;
    this.prEnvUrl = prEnvUrl;
    this.prEnvUrlNoCredential = prEnvUrlNoCredential;
    this.intEnvUrl = intEnvUrl;
    this.intEnvUrlNoCredential = intEnvUrlNoCredential;
    this.intXEnvUrlNoCredential = intXEnvUrlNoCredential;
    this.intXEnvUrl = intXEnvUrl;
    this.intXEnvAdminUrl = intXEnvAdminUrl;
    this.tenantDomain = tenantDomain;
    this.testGlobalOffersRequired = testGlobalOffersRequired;
    this.rcoGhostCookie = rcoGhostCookie;
    this.rcoVulcanCookie = rcoVulcanCookie;
    this.toplaceorder = toplaceorder;
    this.brandName = brandName;
    this.localeName = localeName;
    this.brandUsername = brandUsername;
    this.brandPassword = brandPassword;
    this.adminUsername = adminUsername;
    this.adminPassword = adminPassword;
    this.pincerUsername = pincerUsername;
    this.pincerPassword = pincerPassword;
    this.tenantWebUsername = tenantWebUsername;
    this.tenantWebPassword = tenantWebPassword;
    this.unifiedUsername = unifiedUsername;
    this.unifiedPassword = unifiedPassword;
    this.baseUsername = baseUsername;
    this.basePassword = basePassword;
  }
}

module.exports = SiteDefinitionModel;
