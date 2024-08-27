const Util = require('../../utilities/util');

class Helper {
  /**
   * getPlatform is used to get the platform
   * @param {String} platform - PC or Mobile tag
   * @returns PC or Mobile
   */
  static getPlatform(platform) {
    // We are deriving the platform from test coverage
    // if testCoverage is '', then platform is set to PC
    return platform.toLocaleLowerCase().includes('mob')
      ? Util.devices.mobile
      : Util.devices.pc;
  }
  /**
   *generateMobileUrl is used to generate the mobile url
   * @param {*} hostname
   * @returns mobile url
   */
  static generateMobileUrl(hostname) {
    if (hostname.includes('cn')) {
      if (hostname.includes('bobbibrown')) {
        return hostname;
      }
    }

    if (
      hostname.includes('drjart') ||
      hostname.includes('pincer') ||
      hostname.includes('jomalone') ||
      hostname.includes('tomfordbeauty') ||
      hostname.includes('localhost')
    ) {
      return hostname;
    }

    if (
      hostname.includes('darphin') &&
      (hostname.includes('de') ||
        hostname.includes('it') ||
        hostname.includes('be') ||
        hostname.includes('fr') ||
        hostname.includes('nl') ||
        hostname.includes('es'))
    ) {
      return hostname;
    }

    // For PreProd
    if (hostname.includes('wwwtmp.')) {
      return hostname.replace('wwwtmp.', 'mtmp.');
    }
    // For Prod
    if (hostname.includes('www.')) {
      return hostname.replace('www.', 'm.');
    }
    // For Stage
    if (hostname.includes('@e.')) {
      return hostname.replace('@e.', '@m.e.');
    }

    if (hostname.includes('//e.')) {
      return hostname.replace('//e.', '//m.e.');
    }

    console.log(
      'Not able to convert the given url into mobile url - ' + hostname
    );
    return hostname;
  }
  /**
   * getAdminUrl is used to get the Admin url
   * @param {*} siteDef
   * @returns admin url
   */
  static getAdminUrl(siteDef) {
    const envir = siteDef.executionContext.environment.toLowerCase();
    const platform = siteDef.executionContext.platform.toLowerCase();
    let adminUrl = '';
    let tUrl = '';

    switch (envir) {
      case Util.environments.intX:
        // Platform is not considered
        adminUrl = siteDef.intXEnvAdminUrl;
        break;
      case Util.environments.int:
        // Platform is not considered
        adminUrl = siteDef.intEnvUrl;
        break;
      case Util.environments.prEnv:
        // Platform is not considered
        adminUrl = siteDef.prEnvUrl;
        break;
      case Util.environments.localhost:
        adminUrl =
          platform === Util.devices.pc ? siteDef.localUrl : siteDef.localMobUrl;
        break;
      case Util.environments.dev:
        adminUrl =
          platform === Util.devices.pc ? siteDef.devUrl : siteDef.devMobUrl;
        break;
      case Util.environments.stage:
        adminUrl =
          platform === Util.devices.pc ? siteDef.stageUrl : siteDef.stageMobUrl;
        break;
      case Util.environments.preprod:
        adminUrl =
          platform === Util.devices.pc
            ? siteDef.preProdAdminUrl
            : siteDef.preProdMobAdminUrl;
        break;
      case Util.environments.prod:
        adminUrl =
          platform === Util.devices.pc
            ? siteDef.prodAdminUrl
            : siteDef.prodMobAdminUrl;
        break;
      case Util.environments.feature:
        tUrl = Helper.generateFeatureEnvUrl(
          siteDef.stageAdminUrl,
          siteDef.executionContext.featureStr,
          siteDef.executionContext.perlgemEnv,
          siteDef.credentials
        );
        adminUrl =
          platform === Util.devices.pc ? tUrl : Helper.generateMobileUrl(tUrl);
        break;
      case Util.environments.eng:
        tUrl = Helper.generatePersonalEngUrl(
          siteDef.stageUrl,
          siteDef.executionContext.featureStr,
          siteDef.executionContext.ncsaServerNo
        );
        adminUrl =
          platform === Util.devices.pc ? tUrl : Helper.generateMobileUrl(tUrl);
        break;
      case Util.environments.preview:
        tUrl = Helper.generatePreviewUrl(
          siteDef.stageAdminUrl,
          siteDef.executionContext.featureStr,
          siteDef.executionContext.perlgemEnv
        );
        adminUrl =
          platform === Util.devices.pc ? tUrl : Helper.generateMobileUrl(tUrl);
        break;
      case Util.environments.pincer:
        adminUrl =
          platform === Util.devices.pc
            ? siteDef.prodAdminUrl
            : siteDef.prodMobAdminUrl;
        break;
      default:
        adminUrl =
          platform === Util.devices.pc
            ? siteDef.prodAdminUrl
            : siteDef.prodMobAdminUrl;
        break;
    }
    return adminUrl;
  }

  /**
   * getBaseUrlCredentials returns http credentials of the site being executed
   * @param {SiteDefinitionModel} siteDef - Instance of SiteDefinitionModel.
   * @returns {object} creds - Returns username and password as an object.
   * @property {string} user - Usernme.
   * @property {string} pwd - Password.
   */
  static getBaseUrlCredentials(siteDef) {
    const envir = siteDef.executionContext.environment.toLowerCase();

    let creds = '';
    switch (envir) {
      case Util.environments.intX:
        creds = {
          user: siteDef.unifiedUsername,
          pwd: siteDef.unifiedPassword,
        };
        break;
      case Util.environments.int:
      case Util.environments.prEnv:
        creds = {
          user: siteDef.tenantWebUsername,
          pwd: siteDef.tenantWebPassword,
        };
        break;
      case Util.environments.localhost:
        break;
      case Util.environments.dev:
      case Util.environments.stage:
      case Util.environments.preprod:
      case Util.environments.prod:
      case Util.environments.feature:
        creds = {
          user: siteDef.brandUsername,
          pwd: siteDef.brandPassword,
        };
        break;
      case Util.environments.pincer:
        creds = {
          user: siteDef.pincerUsername,
          pwd: siteDef.pincerPassword,
        };
        break;
    }
    return creds;
  }

  /**
   * getBaseUrl is to get Base url
   * @param {*} siteDef
   * @param {*} includePlainUrl
   * @returns Base url
   */
  static getBaseUrl(siteDef, includePlainUrl = false) {
    const envir = siteDef.executionContext.environment.toLowerCase();
    const platform = siteDef.executionContext.platform.toLowerCase();

    let baseUrl = '';
    let tUrl = '';
    let plainUrl = '';
    let tenantQS = '';
    let qsPart = '';
    switch (envir) {
      case Util.environments.intX:
        // Platform is not considered for INTX ENV - Url is same for PC & MOB
        baseUrl = siteDef.intXEnvUrl;
        plainUrl = siteDef.intXEnvUrlNoCredential;
        break;
      case Util.environments.int:
        // Platform is not considered for INT ENV - Url is same for PC & MOB
        baseUrl = siteDef.intEnvUrl.split('/?')[0];
        plainUrl = siteDef.intEnvUrlNoCredential.split('/?')[0];
        qsPart = siteDef.intEnvUrl.split('/?')[1];
        tenantQS = qsPart === undefined ? '' : '/?' + qsPart;
        break;
      case Util.environments.prEnv:
        // Platform is not considered for PR ENV - Url is same for PC & MOB
        baseUrl = siteDef.prEnvUrl.split('/?')[0];
        plainUrl = siteDef.prEnvUrlNoCredential.split('/?')[0];
        qsPart = siteDef.prEnvUrl.split('/?')[1];
        tenantQS = qsPart === undefined ? '' : '/?' + qsPart;
        break;
      case Util.environments.localhost:
        baseUrl =
          platform === Util.devices.pc ? siteDef.localUrl : siteDef.localMobUrl;
        plainUrl =
          platform === Util.devices.pc
            ? siteDef.localUrlNoCredential
            : siteDef.localMobUrlNoCredential;
        break;
      case Util.environments.dev:
        baseUrl =
          platform === Util.devices.pc ? siteDef.devUrl : siteDef.devMobUrl;
        plainUrl =
          platform === Util.devices.pc
            ? siteDef.devUrlNoCredential
            : siteDef.devMobUrlNoCredential;
        break;
      case Util.environments.stage:
        baseUrl =
          platform === Util.devices.pc ? siteDef.stageUrl : siteDef.stageMobUrl;
        plainUrl =
          platform === Util.devices.pc
            ? siteDef.stageUrlNoCredential
            : siteDef.stageMobUrlNoCredential;
        break;
      case Util.environments.preprod:
        baseUrl =
          platform === Util.devices.pc
            ? siteDef.preProdUrl
            : siteDef.preProdMobUrl;
        plainUrl = baseUrl;
        break;
      case Util.environments.prod:
        baseUrl =
          platform === Util.devices.pc ? siteDef.prodUrl : siteDef.prodMobUrl;
        plainUrl = baseUrl;
        break;
      case Util.environments.feature: // TODO : FEAT or FEATURE, Jawahar has to cascade to the team
        tUrl = Helper.generateFeatureEnvUrl(
          siteDef.stageUrl,
          siteDef.executionContext.featureStr,
          siteDef.executionContext.perlgemEnv,
          siteDef.credentials,
          includePlainUrl
        );
        baseUrl =
          platform === Util.devices.pc
            ? tUrl.featureUrl
            : Helper.generateMobileUrl(tUrl.featureUrl);

        plainUrl =
          platform === Util.devices.pc
            ? tUrl.tempUrl
            : Helper.generateMobileUrl(tUrl.tempUrl);
        break;
      case Util.environments.eng:
        tUrl = Helper.generatePersonalEngUrl(
          siteDef.stageUrl,
          siteDef.executionContext.featureStr,
          siteDef.executionContext.ncsaServerNo
        );
        baseUrl =
          platform === Util.devices.pc ? tUrl : Helper.generateMobileUrl(tUrl);
        plainUrl =
          platform === Util.devices.pc
            ? siteDef.stageUrlNoCredential
            : Helper.generateMobileUrl(siteDef.stageUrlNoCredential);
        break;
      case Util.environments.preview:
        tUrl = Helper.generatePreviewUrl(
          siteDef.stageAdminUrl,
          siteDef.executionContext.featureStr,
          siteDef.executionContext.perlgemEnv
        );
        baseUrl =
          platform === Util.devices.pc ? tUrl : Helper.generateMobileUrl(tUrl);
        plainUrl =
          platform === Util.devices.pc
            ? siteDef.stageUrlNoCredential
            : Helper.generateMobileUrl(siteDef.stageUrlNoCredential);
        break;
      case Util.environments.pincer:
        if (platform !== '') {
          baseUrl = siteDef.pincerUrl.replace('www.', 'pincer.');
          plainUrl = baseUrl;
        }
        break;
      default:
        baseUrl =
          platform === Util.devices.pc ? siteDef.prodUrl : siteDef.prodMobUrl;
        plainUrl = baseUrl;
        break;
    }
    if (includePlainUrl) {
      return { baseUrl, plainUrl, tenantQS };
    } else {
      return baseUrl;
    }
  }

  /**
   *getIntEnvUrl is used to generate INT env url
   * @param {*} akamaiBypass
   * @param {*} tenantWebUser
   * @param {*} tenantWebPwd
   * @param {*} tenantDomain
   * @returns INT env url
   */
  static getIntEnvUrl(akamaiBypass, tenantWebUser, tenantWebPwd, tenantDomain) {
    // With Akamai - https://int.clinique.com
    // Without Akamai - https://vulcan.usva.eks.integration.web.elco.cloud/?tenant=darphin.fr

    const protcol = 'https://';
    const protocolWithAuth = protcol + tenantWebUser + ':' + tenantWebPwd + '@';
    let url = '',
      intEnvUrlNoCredential = '',
      intEnvUrl = '';

    // TODO: Typecast it to Boolean while retrieving it
    // Analyze the automtion scripts before making the change as
    // team is treating all the process vars as string
    if (akamaiBypass === 'false') {
      url = 'int.' + tenantDomain;
      intEnvUrlNoCredential = protcol + url;
      intEnvUrl = protocolWithAuth + url;
    } else {
      url =
        'vulcan.usva.eks.integration.web.elco.cloud/?tenant=' + tenantDomain;
      intEnvUrlNoCredential = protcol + url;
      intEnvUrl = protocolWithAuth + url;
    }
    return {
      intEnvUrlNoCredential,
      intEnvUrl,
    };
  }

  /**
   * getPrEnvUrl is used to generate PR env url
   * @param {String} prNo - PR number
   * @param {String} tenantWebUser - Username
   * @param {String} tenantWebPwd - Password
   * @param {String} tenantDomain - Domain
   * @returns PR env url
   */
  static getPrEnvUrl(prNo, tenantWebUser, tenantWebPwd, tenantDomain) {
    // https://vulcan-pr-env-6780.usva.eks.integration.web.elco.cloud/
    const protcol = 'https://';
    const protocolWithAuth = protcol + tenantWebUser + ':' + tenantWebPwd + '@';
    const url = `vulcan-pr-env-${prNo}.usva.eks.integration.web.elco.cloud/?tenant=${tenantDomain}`;
    const prEnvUrlNoCredential = protcol + url;
    const prEnvUrl = protocolWithAuth + url;
    return { prEnvUrlNoCredential, prEnvUrl };
  }
  /**
   * generateFeatureEnvUrl is to generate Feature ENV url
   * @param {*} url
   * @param {*} featureStr
   * @param {*} perlgemEnv
   * @param {*} credentials
   * @param {*} includePlainUrl
   * @returns Feature env url
   */
  static generateFeatureEnvUrl(
    url,
    featureStr,
    perlgemEnv,
    credentials,
    includePlainUrl = false
  ) {
    const [featureUser, featurePwd] = Util.fetchCredentialsByUsername(
      credentials,
      Util.environments.feature
    );

    let tempUrl = '';
    let featureUrl = '';

    tempUrl =
      url.split('.', 4).join('.') +
      '.' +
      featureStr +
      url.substring(
        url.split('.', 5).join('.').length,
        url.split('.', 6).join('.').length
      ) +
      perlgemEnv +
      '.usva1.feature.elco.cloud/';
    if (url.includes('elc:')) {
      featureUrl = tempUrl;
    } else {
      tempUrl = tempUrl.replace(
        tempUrl.substring(
          tempUrl.split('/', 2).join('/').length + 1,
          tempUrl.split(':', 2).join(':').length
        ),
        featureUser
      );
      featureUrl = tempUrl.replace(
        tempUrl.substring(
          tempUrl.split(':', 2).join(':').length + 1,
          tempUrl.split('@', 1).join('@').length
        ),
        featurePwd
      );
    }
    if (includePlainUrl) {
      return { featureUrl, tempUrl };
    } else {
      return featureUrl;
    }
  }
  /**
   * getIntXEnvUrl is to get the INTX Env url
   * @param {*} param0
   * @returns INTX env url
   */
  static getIntXEnvUrl({
    // eslint-disable-next-line no-unused-vars
    akamaiBypass,
    unifiedUser,
    unifiedPwd,
    tenantDomain,
    intX,
    intXPGEnv,
    devUrlNoCredential,
    stageUrlNoCredential,
    FeatStr: branchServer,
    ncsaSerNum,
    bUser,
    bPwd,
  }) {
    // https://[d2d-pg-domain-prefix]--int-[x]--[d2d-tenant_domain].unified-platform.sdapi.io
    // TODO: Building only Unified platform URLs. Refer
    // https://turbo-couscous-fbb76acd.pages.github.io/deployment.html

    const protcol = 'https://';
    const protocolWithAuth = protcol + unifiedUser + ':' + unifiedPwd + '@';
    const protocolWithBrandAuth = protcol + bUser + ':' + bPwd + '@';
    let sourceUrl = '';

    if (intXPGEnv === Util.environments.dev) {
      sourceUrl = devUrlNoCredential;
    } else if (intXPGEnv === Util.environments.stage) {
      sourceUrl = stageUrlNoCredential;
    } else {
      sourceUrl = Helper.generatePersonalEngUrl(
        stageUrlNoCredential,
        branchServer,
        ncsaSerNum
      );
    }
    sourceUrl = sourceUrl.replace('.elcdev.net', '');
    sourceUrl = sourceUrl.replace(/[.]/g, '-');
    const url =
      sourceUrl +
      '--int-' +
      intX +
      '--' +
      tenantDomain.replace(/[.]/g, '-') +
      '.unified-platform.sdapi.io';
    const intXEnvUrlNoCredential = url;
    const intXEnvUrl = url.replace('https://', protocolWithAuth);
    const intXEnvAdminUrl = url.replace('https://', protocolWithBrandAuth);
    return {
      intXEnvUrlNoCredential,
      intXEnvUrl,
      intXEnvAdminUrl,
    };
  }
  /**
   *generatePersonalEngUrl is to generate Personal url
   * @param {*} ncsaServerNo
   * @returns Personal url
   */
  static generatePersonalEngUrl(url, featureStr, ncsaServerNo) {
    let branchUrl = '';
    branchUrl =
      url.split('.', 4).join('.') +
      '.' +
      featureStr +
      url.substring(
        url.split('.', 5).join('.').length,
        url.split('.', 5).join('.').length
      ) +
      '.eng.ncsa' +
      ncsaServerNo +
      '.elcdev.net';
    return branchUrl;
  }
  /**
   * generatePreviewUrl is to generate preview url
   * @param {*} url
   * @param {*} featureStr
   * @returns preview url
   */
  static generatePreviewUrl(url, featureStr) {
    let previewUrl = '';
    previewUrl =
      url.split('.', 4).join('.') + '.' + featureStr + '.preview.elco.cloud';
    return previewUrl;
  }
}

module.exports = Helper;
