class ExecutionContext {
  constructor({
    platform,
    env,
    allCookies,
    revisionTag,
    featureStr,
    perlgemEnv,
    akamaiBypass,
    varnishBypass,
    apiEnv,
    jsRepo,
    ncsaServerNo,
    intX,
    intXPGEnv,
    prNo,
    isDiscovery,
    doHeal,
    url,
    adminUrl,
    feature,
    localeInfo,
    userId,
    buildId,
    isExecutedFromJenkins,
    testGlobalOffersRequired,
    rcoGhostCookie,
    rcoVulcanCookie,
    toPlaceOrder,
    addToBagUrl,
    isMobile,
    isPC,
    urlWithNoCredential,
    urlWithTenant,
    urlWithTenantAndNoCredential,
    tenantQS,
  }) {
    this.platform = platform;
    this.environment = env;
    this.cookies = allCookies;
    this.revisionTag = revisionTag;
    this.featureStr = featureStr;
    this.perlgemEnv = perlgemEnv;
    this.akamaiBypass = akamaiBypass;
    this.varnishBypass = varnishBypass;
    this.apiEnv = apiEnv;
    this.jsRepo = jsRepo;
    this.ncsaServerNo = ncsaServerNo;
    this.intX = intX;
    this.intXPGEnv = intXPGEnv;
    this.prNo = prNo;
    this.isDiscovery = isDiscovery;
    this.doHeal = doHeal;
    this.url = url;
    this.adminUrl = adminUrl;
    this.feature = feature;
    this.localeInfo = localeInfo;
    this.userId = userId;
    this.buildId = buildId;
    this.isExecutedFromJenkins = isExecutedFromJenkins;
    this.testGlobalOffersRequired = testGlobalOffersRequired;
    this.rcoGhostCookie = rcoGhostCookie;
    this.rcoVulcanCookie = rcoVulcanCookie;
    this.toPlaceOrder = toPlaceOrder;
    this.addToBagUrl = addToBagUrl;
    this.isMobile = isMobile;
    this.isPC = isPC;
    this.urlWithNoCredential = urlWithNoCredential;
    this.urlWithTenant = urlWithTenant;
    this.urlWithTenantAndNoCredential = urlWithTenantAndNoCredential;
    this.tenantQS = tenantQS;
  }
}

module.exports = ExecutionContext;
