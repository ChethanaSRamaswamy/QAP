const Util = require('../../../utilities/util');
const taikoOverride = require('../helix_taiko');
const DIHelper = require('../../../datainterface/helpers/helper');

class Helper {
  /**
   * getBaseUrl is to get Base url
   * @param {SiteDefinitionModel} siteDef - Object of type SiteDefinitionModel
   * @param {Boolean} includePlainUrl - Set it to true, if you need plain url
   * @returns Base url
   */
  static getBaseUrl(siteDef, includePlainUrl = false) {
    return DIHelper.getBaseUrl(siteDef, includePlainUrl);
  }

  /**
   * getAdminUrl is used to get the Admin url
   * @param {includePlainUrl} siteDef - Object of type SiteDefinitionModel
   * @returns Admin url
   */
  static getAdminUrl(siteDef) {
    return DIHelper.getAdminUrl(siteDef);
  }

  static async setRevisionTag(siteDef, t) {
    const envir = siteDef.executionContext.environment.toLowerCase();
    const revTag = siteDef.executionContext.revisionTag;
    const url = siteDef.executionContext.url;

    if (
      revTag !== '' &&
      !(envir === Util.environments.prod || envir === Util.environments.preprod)
    ) {
      await t.setCookie(Util.props.elcSiteTag, revTag, { url: url });
      gauge.message('Revision tag is set as ' + revTag);
    } else {
      gauge.message('No revision tag is set');
    }
  }

  static async setRevisionTagByUrl(siteDef, t) {
    const envir = siteDef.executionContext.environment.toLowerCase();
    const revTag = siteDef.executionContext.revisionTag;
    const url = siteDef.executionContext.url;
    if (
      revTag !== '' &&
      !(envir === Util.environments.prod || envir === Util.environments.preprod)
    ) {
      await t.goto(url + '/elc-tag/set-tag/' + revTag);
      gauge.message('Revision tag is set as ' + revTag);
    } else {
      gauge.message('No revision tag is set');
    }
  }

  static async setWAFCookie(siteDef, t) {
    const [wafUser, wafPwd] = Util.fetchCredentialsByUsername(
      siteDef.credentials,
      Util.defaultUsers.wafCookie.username
    );

    const [wafBypassUser, uwafBypassPwd] = Util.fetchCredentialsByUsername(
      siteDef.credentials,
      Util.defaultUsers.wafBypassCookie.username
    );

    if (!wafUser || !wafBypassUser) {
      return;
    }

    await t.setCookie(wafUser, wafPwd, {
      url: siteDef.executionContext.url,
    });
    await t.setCookie(wafBypassUser, uwafBypassPwd, {
      url: siteDef.executionContext.url,
    });
  }
  static async setAkamaiBypass(siteDef, t) {
    if (siteDef.executionContext.akamaiBypass === 'true') {
      await t.setCookie(Util.props.bypassAkamai, '1', {
        url: siteDef.executionContext.url,
      });
      gauge.message('AKAMAI BYPASS IS SET TO 1');
    }
  }
  static async setVarnishBypass(siteDef, t) {
    const envir = siteDef.executionContext.environment.toLowerCase();
    const varnishBypass = siteDef.executionContext.varnishBypass;

    if (
      varnishBypass === 'true' &&
      (envir === Util.environments.prod || envir === Util.environments.preprod)
    ) {
      await t.setCookie(Util.props.bypassVarnish, '1', {
        url: siteDef.executionContext.url,
      });
      gauge.message('VARNISH BYPASS IS SET TO 1');
    }
  }
  static async setAdroll(siteDef, t) {
    await t.setCookie(Util.props.adroll, 'opt_out', {
      url: siteDef.executionContext.url,
    });
  }
  static async setApiEnv(siteDef, t) {
    const apiEnv = siteDef.executionContext.apiEnv;
    const envir = siteDef.executionContext.environment.toLowerCase();
    if (
      !(
        apiEnv === '' ||
        envir === Util.environments.prod ||
        envir === Util.environments.preprod
      )
    ) {
      await t.setCookie(Util.props.elcSiteMSEnv, apiEnv, {
        url: siteDef.executionContext.url,
      });
    }
  }
  static async setJsRepo(siteDef, t) {
    const jsRepo = siteDef.executionContext.jsRepo;
    const envir = siteDef.executionContext.environment.toLowerCase();
    if (
      !(
        jsRepo === '' ||
        envir === Util.environments.prod ||
        envir === Util.environments.preprod
      )
    ) {
      await t.setCookie(Util.props.elcSiteJSRepoEnv, jsRepo, {
        url: siteDef.executionContext.url,
      });
    }
  }
  static async setOtherCookies(siteDef, t) {
    const allCookies = siteDef.executionContext.cookies;
    // TODO: test and remove localeCompare
    if (allCookies.localeCompare('') !== 0) {
      const cookiesList = allCookies.split(',');
      for (let i = 0; i < cookiesList.length; i++) {
        const [cookieName, cookieVal] = cookiesList[i].split(':');
        await t.setCookie(cookieName, cookieVal, {
          url: siteDef.executionContext.url,
        });
      }
    }
  }

  static async setTestOrderCookie(siteDef, t) {
    const envir = siteDef.executionContext.environment.toLowerCase();
    if (
      envir === Util.environments.prod ||
      envir === Util.environments.preprod
    ) {
      await t.setCookie(Util.props.testTrans, '1', {
        url: siteDef.executionContext.url,
      });
    }
  }

  static async setLocaleCookie(siteDef, t, localeCookie) {
    if (localeCookie === null) {
      gauge.message(`Locale is set to the default locale`);
    } else {
      await t.setCookie(Util.props.locale, localeCookie, {
        url: siteDef.executionContext.url,
      });
      gauge.message(`Locale is set to ${localeCookie} locale`);
    }
  }
  static async setShowErrorsCookie(siteDef, t) {
    await t.setCookie(Util.props.showErrors, '1', {
      url: siteDef.executionContext.url,
    });
  }
  static async setWindowSize(size, t) {
    await t.resizeWindow(size);
  }

  static async getPerlgemEnvCookie(siteDef, t) {
    const envir = siteDef.executionContext.environment.toLowerCase();
    const url = siteDef.executionContext.url;
    const stageUrl = siteDef.stageUrl;
    const perlgemEnv = siteDef.executionContext.perlgemEnv;

    if (envir === Util.environments.preview) {
      let pgCookie = '';
      pgCookie =
        stageUrl.substring(
          stageUrl.split('.', 5).join('.').length + 1,
          stageUrl.split('.', 6).join('.').length
        ) + perlgemEnv;
      await t.setCookie(Util.props.targetEnv, pgCookie, { url: url });
      gauge.message(
        'PerlGem Environment Cookie target_env is set as ' + pgCookie
      );
    }
  }

  static async initAutoHeal(siteDef, t) {
    const inclusivityFields = {
      brandLocale: siteDef.brandLocale,
      feature: siteDef.executionContext.feature,
    };
    return await taikoOverride.override1(
      t,
      inclusivityFields,
      siteDef.executionContext.isDiscovery,
      siteDef.executionContext.doHeal
    );
  }

  static async closePopups(selector, t) {
    const modal = await t.$(selector);
    if (await modal.exists()) {
      await t.evaluate(modal, (ele) => ele.click());
    }
  }

  static async setTestGlobalOffer(siteDef, t) {
    if (siteDef.executionContext.testGlobalOffersRequired === 'true') {
      await t.setCookie(Util.props.testGlobalOffers, '1', {
        url: siteDef.executionContext.url,
      });
      gauge.message('TEST GLOBAL OFFERS IS SET TO 1');
    }
  }

  static async setMockCookie(siteDef, t, mockCookieValue) {
    const envir = siteDef.executionContext.environment.toLowerCase();
    // const mockCookie = siteDef.executionContext.mockCookie;

    if (
      mockCookieValue === '1' &&
      (envir === Util.environments.prod || envir === Util.environments.preprod)
    ) {
      await t.setCookie(Util.props.mockPay, '1', {
        url: siteDef.executionContext.url,
      });
      gauge.message('VARNISH BYPASS IS SET TO 1');
    }
  }

  static async setRcoGhostCookie(siteDef, t) {
    if (siteDef.executionContext.rcoGhostCookie === 'true') {
      await t.setCookie(Util.props.rcoGhost, '1', {
        url: siteDef.executionContext.url,
      });
      gauge.message('RCO GHOST COOKIE IS SET TO 1');
    }
  }

  static async setRcoVulcanCookie(siteDef, t) {
    const envir = siteDef.executionContext.environment.toLowerCase();

    if (
      siteDef.executionContext.rcoVulcanCookie === 'true' &&
      envir === Util.environments.prod
    ) {
      await t.setCookie(Util.props.vulcanize, '1', {
        url: siteDef.executionContext.url,
      });
      gauge.message('RCO VULCAN COOKIE IS SET TO 1');
    }
  }
}

module.exports = Helper;
