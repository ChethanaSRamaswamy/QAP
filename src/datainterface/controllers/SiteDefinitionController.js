const db = require('../../utilities/db/mysql/mysql_provider');
const SiteDefinitionModel = require('../models/SiteDefinitionModel');
const ExecutionContext = require('../models/ExecutionContext');
const AccessInformationController = require('./AccessInformationController');
const Util = require('../../utilities/util');
const Helper = require('../../datainterface/helpers/helper');

class SiteDefinitionController {
  SiteDefinitionController() {}

  async fetchSiteDefinitions(brandLocale, feature, testCoverage) {
    let env = '';
    let allCookies = '';
    let revTag = '';
    let FeatStr = '';
    let perlGemEnv = '';
    let akamaiBypass = '';
    let varnishBypass = '';
    let apiEnv = '';
    let jsRepo = '';
    let ncsaSerNum = '';
    let intX = '';
    let intXPGEnv = '';
    let prNo = '';
    let isDiscovery = '';
    let doHeal = '';
    let localeInfo = '';
    let userId = '';
    let buildId = '';
    let lhSourceUrl = '';
    const testGlobalOffersRequired = '';
    const rcoGhostCookie = '';
    const rcoVulcanCookie = '';
    const toPlaceOrder = '';

    ({
      currentEnv: env,
      allCookies,
      revTag,
      featureStr: FeatStr,
      perlgemEnv: perlGemEnv,
      akamaiBypass,
      varnishBypass,
      apiEnv,
      jsRepo,
      ncsaServerNo: ncsaSerNum,
      intX,
      intXPGEnv,
      prNo,
      isDiscovery,
      doHeal,
      localeInfo,
      userId,
      buildId,
      localhost: lhSourceUrl,
    } = Util.getEnvironmentVariables());

    let objSDM = new SiteDefinitionModel({});
    const objAIC = new AccessInformationController();

    const sql = `select brand_locales_id, bl.brand_id, b.brand_name, bl.locale_id,
               l.locale_name, brand_locale_prefix, prod_url, pre_prod_url,
               dev_url, stage_url, language, region_name, l.elc_code 'lCode',
               b.elc_code 'bCode' from brand_locales bl
               inner join locales l on (l.locale_id = bl.locale_id)
               inner join brands b on (b.brand_id = bl.brand_id)
               where brand_locale_prefix = ? and bl.language = ?`;

    const params = [brandLocale, localeInfo];
    // NOTE: This query should return only result
    const results = await db.MySQLProvider.executeQuery(sql, params);

    if (results.length === 0) {
      return objSDM;
    }

    const {
      brand_locales_id: brandLocalesId,
      brand_id: brandId,
      locale_id: localeId,
      brand_locale_prefix: brandLocalePrefix,
      prod_url: prodUrl,
      stage_url: stageSourceUrl,
      region_name: regionName,
      lCode,
      bCode,
      brand_name: brandName,
      locale_name: localeName,
    } = results[0] || {};

    const credentials = await objAIC.fetchAccessInformation(brandId);
    const [bUser, bPwd] = Util.fetchCredentialsByBrandId(credentials, brandId);

    const [bAdminUser, bAdminPwd] = Util.fetchCredentialsByUsername(
      credentials,
      Util.defaultUsers.elc.username
    );

    const [pincerUser, pincerPwd] = Util.fetchCredentialsByUsername(
      credentials,
      Util.defaultUsers.pincer.username
    );
    const [tenantWebUser, tenantWebPwd] = Util.fetchCredentialsByUsername(
      credentials,
      Util.defaultUsers.tenantWeb.username
    );
    const [unifiedUser, unifiedPwd] = Util.fetchCredentialsByUsername(
      credentials,
      Util.defaultUsers.unified.username
    );
    const [dbAdminUser, dbAdminPwd] = Util.fetchCredentialsByDisplayName(
      credentials,
      Util.defaultUsers.dbtool.displayName
    );

    const bAuthUrl = 'https://' + bUser + ':' + bPwd + '@';
    const bAdminAuthUrl = 'https://' + bAdminUser + ':' + bAdminPwd + '@';
    const pincerAuthUrl = 'https://' + pincerUser + ':' + pincerPwd + '@';
    const tenantDomain = prodUrl.replace('https://www.', '');

    // TODO: Generate local url for mobile
    const localUrl = lhSourceUrl
      .replace('http://', bAuthUrl)
      .replace('https:', 'http:');
    const localMobUrl = Helper.generateMobileUrl(localUrl);
    const localUrlNoCredential = lhSourceUrl;
    const localMobUrlNoCredential = Helper.generateMobileUrl(lhSourceUrl);
    const localAdminUrl = lhSourceUrl
      .replace('http://', bAdminAuthUrl)
      .replace('https:', 'http:');
    const localMobAdminUrl = Helper.generateMobileUrl(localAdminUrl);

    const prodAdminUrl = prodUrl.replace('https://', bAdminAuthUrl);
    const stageUrl = stageSourceUrl.replace('https://', bAuthUrl);
    const stageAdminUrl = stageSourceUrl.replace('https://', bAdminAuthUrl);

    const stageUrlNoCredential = stageSourceUrl;
    const stageMobUrlNoCredential = Helper.generateMobileUrl(stageSourceUrl);

    const devUrl = stageUrl.replace('stage', 'dev');
    const devAdminUrl = stageAdminUrl.replace('stage', 'dev');
    const devUrlNoCredential = stageSourceUrl.replace('stage', 'dev');
    const devMobUrlNoCredential = Helper.generateMobileUrl(devUrlNoCredential);

    const preProdUrl = prodUrl.replace('www.', 'wwwtmp.');
    const preProdAdminUrl = prodAdminUrl.replace('www.', 'wwwtmp.');

    const prodMobUrl = Helper.generateMobileUrl(prodUrl);
    const preProdMobUrl = Helper.generateMobileUrl(preProdUrl);
    const devMobUrl = Helper.generateMobileUrl(devUrl);
    const stageMobUrl = Helper.generateMobileUrl(stageUrl);

    const prodMobAdminUrl = Helper.generateMobileUrl(prodAdminUrl);
    const preProdMobAdminUrl = Helper.generateMobileUrl(preProdAdminUrl);
    const devMobAdminUrl = Helper.generateMobileUrl(devAdminUrl);
    const stageMobAdminUrl = Helper.generateMobileUrl(stageAdminUrl);

    const pincerUrl = prodUrl.replace('https://', pincerAuthUrl);
    const { prEnvUrlNoCredential, prEnvUrl } = Helper.getPrEnvUrl(
      prNo,
      tenantWebUser,
      tenantWebPwd,
      tenantDomain
    );

    const { intEnvUrlNoCredential, intEnvUrl } = Helper.getIntEnvUrl(
      akamaiBypass,
      tenantWebUser,
      tenantWebPwd,
      tenantDomain
    );

    const { intXEnvUrlNoCredential, intXEnvUrl, intXEnvAdminUrl } =
      Helper.getIntXEnvUrl({
        akamaiBypass,
        unifiedUser,
        unifiedPwd,
        tenantDomain,
        intX,
        intXPGEnv: intXPGEnv.toLowerCase(),
        devUrlNoCredential,
        stageUrlNoCredential,
        FeatStr,
        ncsaSerNum,
        bUser,
        bPwd,
      });

    const [brandPrefix, localePrefix] = brandLocalePrefix.split('-');

    objSDM = new SiteDefinitionModel({
      brandLocaleId: brandLocalesId,
      brandId,
      localeId,
      brandLocale: brandLocalePrefix,
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
      executionContext: {},
      region: regionName,
      credentials,
      dbAdminUsername: dbAdminUser,
      dbAdminPassword: dbAdminPwd,
      bCode,
      lCode,
      prEnvUrl,
      prEnvUrlNoCredential,
      intEnvUrl,
      intEnvUrlNoCredential,
      intXEnvUrlNoCredential,
      intXEnvUrl,
      intXEnvAdminUrl,
      tenantDomain,
      brandName,
      localeName,
      brandPrefix,
      localePrefix,
      brandUsername: bUser,
      brandPassword: decodeURIComponent(bPwd),
      adminUsername: bAdminUser,
      adminPassword: decodeURIComponent(bAdminPwd),
      pincerUsername: pincerUser,
      pincerPassword: decodeURIComponent(pincerPwd),
      tenantWebUsername: tenantWebUser,
      tenantWebPassword: decodeURIComponent(tenantWebPwd),
      unifiedUsername: unifiedUser,
      unifiedPassword: decodeURIComponent(unifiedPwd),
    });

    const platform = Helper.getPlatform(testCoverage);

    const isMobile = platform === Util.devices.mobile ? true : false;
    const isPC = platform === Util.devices.pc ? true : false;

    const objEC = new ExecutionContext({
      platform,
      env,
      allCookies,
      revisionTag: revTag,
      featureStr: FeatStr,
      perlgemEnv: perlGemEnv,
      akamaiBypass,
      varnishBypass,
      apiEnv,
      jsRepo,
      ncsaServerNo: ncsaSerNum,
      intX,
      intXPGEnv,
      prNo,
      isDiscovery,
      doHeal,
      url: '',
      adminUrl: '',
      feature,
      localeInfo,
      userId,
      buildId,
      isExecutedFromJenkins: Util.isExecutedFromCI(),
      testGlobalOffersRequired,
      rcoGhostCookie,
      rcoVulcanCookie,
      toPlaceOrder,
      isMobile,
      isPC,
    });

    objSDM.executionContext = objEC;

    // tenantQS - Query string for tenant domain
    const { baseUrl, plainUrl, tenantQS } = Helper.getBaseUrl(objSDM, true);
    objSDM.executionContext.url = baseUrl;
    objSDM.executionContext.urlWithNoCredential = plainUrl;
    objSDM.executionContext.urlWithTenant = baseUrl + tenantQS;
    objSDM.executionContext.urlWithTenantAndNoCredential = plainUrl + tenantQS;
    objSDM.executionContext.addToBagUrl =
      baseUrl + '/shared/add_to_bag.tmpl?SKU_BASE_ID=';
    objSDM.executionContext.tenantQS = tenantQS;
    objSDM.executionContext.adminUrl = Helper.getAdminUrl(objSDM);

    const auth = Helper.getBaseUrlCredentials(objSDM);
    objSDM.baseUsername = auth.user;
    objSDM.basePassword = auth.pwd;

    db.MySQLProvider.disconnect();

    return objSDM;
  }

  async fetchAllSiteDefinitions() {
    const sql = `select brand_locales_id, bl.brand_id, bl.locale_id, brand_locale_prefix,
               prod_url, pre_prod_url, dev_url, stage_url, language, region_name
               from brand_locales bl 
               inner join locales l on (l.locale_id = bl.locale_id)
               inner join brands b on (b.brand_id = bl.brand_id)
               where l.is_active = 1 and b.is_active = 1
               order by brand_locale_prefix`;

    const results = await db.MySQLProvider.executeQuery(sql);

    const sitesSupported = [];
    for (let iCnt = 0; iCnt < results.length; iCnt++) {
      let objSDM = new SiteDefinitionModel({});
      const {
        brand_locales_id: brandLocalesId,
        brand_id: brandId,
        locale_id: localeId,
        brand_locale_prefix: brandLocalePrefix,
        prod_url: prodUrl,
        region_name: regionName,
      } = results[iCnt] || {};

      objSDM = new SiteDefinitionModel({
        brandLocaleId: brandLocalesId,
        brandId,
        localeId,
        brandLocale: brandLocalePrefix,
        prodUrl,
        region: regionName,
      });
      sitesSupported.push(objSDM);
    }

    db.MySQLProvider.disconnect();
    return sitesSupported;
  }
}

module.exports = SiteDefinitionController;

// (async function () {
//   const op = await new SiteDefinitionController().fetchSiteDefinitions(
//     'DA-FR',
//     'Checkout',
//     'GUPC'
//   );
//   console.log(op);
// })();
