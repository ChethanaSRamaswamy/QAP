/* eslint-disable no-magic-numbers */
const Util = require('../../../utilities/util');

class Helper {
  static async setRevisionTag(siteData, context) {
    const envir = siteData.executionContext.environment.toLowerCase();
    const revTag = siteData.executionContext.revisionTag;
    const url = siteData.executionContext.url;

    if (
      revTag !== '' &&
      !(envir === Util.environments.prod || envir === Util.environments.preprod)
    ) {
      await context.addCookies([
        {
          name: Util.props.elcSiteTag,
          value: revTag,
          url: url,
          sameSite: 'None',
          secure: true,
          expires: Util.expires.value,
        },
      ]);
      // test.reporter.epilogue('Revision tag is set as ' + revTag);
    } else {
      // test.reporter.epilogue('No revision tag is set');
    }
  }
  static async deleteCookie(context) {
    await context.clearCookies();
  }

  static async setWAFCookie(siteData, context) {
    const [wafUser, wafPwd] = Util.fetchCredentialsByUsername(
      siteData.credentials,
      Util.defaultUsers.wafCookie.username
    );

    const [wafBypassUser, wafBypassPwd] = Util.fetchCredentialsByUsername(
      siteData.credentials,
      Util.defaultUsers.wafBypassCookie.username
    );

    if (!wafUser || !wafBypassUser) {
      return;
    }

    await context.addCookies([
      {
        name: wafUser,
        value: wafPwd,
        url: siteData.executionContext.url,
        sameSite: 'None',
        secure: true,
        expires: Util.expires.value,
      },
      {
        name: wafBypassUser,
        value: wafBypassPwd,
        url: siteData.executionContext.url,
        sameSite: 'None',
        secure: true,
        expires: Util.expires.value,
      },
    ]);
  }

  static async setAkamaiBypass(siteData, context) {
    if (siteData.executionContext.akamaiBypass === 'true') {
      // Set a cookie
      await context.addCookies([
        {
          name: Util.props.bypassAkamai,
          value: '1',
          url: siteData.executionContext.url,
          sameSite: 'None',
          secure: true,
          expires: Util.expires.value,
        },
      ]);
      // test.reporter.epilogue('AKAMAI BYPASS IS SET TO 1');
    }
  }
  static async setVarnishBypass(siteData, t) {
    const envir = siteData.executionContext.environment.toLowerCase();
    const varnishBypass = siteData.executionContext.varnishBypass;

    if (
      varnishBypass === 'true' &&
      (envir === Util.environments.prod || envir === Util.environments.preprod)
    ) {
      await t.setCookie(Util.props.bypassVarnish, '1', {
        url: siteData.executionContext.url,
      });
      // test.reporter.epilogue('VARNISH BYPASS IS SET TO 1');
    }
  }
  static async setAdroll(siteData, context) {
    await context.addCookies([
      {
        name: Util.props.adroll,
        value: 'opt_out',
        url: siteData.executionContext.url,
        sameSite: 'None',
        secure: true,
        expires: Util.expires.value,
      },
    ]);
  }
  static async setApiEnv(siteData, context) {
    const apiEnv = siteData.executionContext.apiEnv;
    const envir = siteData.executionContext.environment.toLowerCase();
    if (
      !(
        apiEnv === '' ||
        envir === Util.environments.prod ||
        envir === Util.environments.preprod
      )
    ) {
      await context.addCookies([
        {
          name: Util.props.elcSiteMSEnv,
          value: apiEnv,
          url: siteData.executionContext.url,
          sameSite: 'None',
          secure: true,
          expires: Util.expires.value,
        },
      ]);
    }
  }
  static async setOtherCookies(siteData, context) {
    const allCookies = siteData.executionContext.cookies;
    // TODO: test and remove localeCompare
    if (allCookies.localeCompare('') !== 0) {
      const cookiesList = allCookies.split(',');
      for (let i = 0; i < cookiesList.length; i++) {
        const [cookieName, cookieVal] = cookiesList[i].split(':');
        await context.addCookies([
          {
            name: cookieName,
            value: cookieVal,
            url: siteData.executionContext.url,
            sameSite: 'None',
            secure: true,
            expires: Util.expires.value,
          },
        ]);
      }
    }
  }

  static async setTestOrderCookie(siteData, context) {
    const envir = siteData.executionContext.environment.toLowerCase();
    if (
      envir === Util.environments.prod ||
      envir === Util.environments.preprod
    ) {
      await context.addCookies([
        {
          name: Util.props.testTrans,
          value: '1',
          url: siteData.executionContext.url,
          sameSite: 'None',
          secure: true,
          expires: Util.expires.value,
        },
      ]);
    }
  }

  /**
   * This method is used to set the LOCALE cookie for a hub site
   * @param {string} localeCookie - comes from the testdata , provide cookie value for LOCALE cookie in testdata file
   * @param {string} url - baseurl, comes from the sitedata
   * @param {string} context - playwright context
   */
  static async setLocaleCookie(localeCookie, url, context, siteData) {
    if (localeCookie) {
      await context.addCookies([
        {
          name: Util.props.locale,
          value: localeCookie,
          url: url,
        },
      ]);
      console.log(
        `${siteData.brandLocale} : Locale is set to ${localeCookie} locale`
      );
    } else {
      console.log(
        `${siteData.brandLocale} : Locale is set to the default locale`
      );
    }
  }
  static async setShowErrorsCookie(siteData, context) {
    await context.addCookies([
      {
        name: Util.props.showErrors,
        value: '1',
        url: siteData.executionContext.url,
        sameSite: 'None',
        secure: true,
        expires: Util.expires.value,
      },
    ]);
  }
  static async setWindowSize(size, page) {
    await page.setViewportSize(Util.ScreenSizes[size]);
  }

  static async getPerlgemEnvCookie(siteData, context) {
    const envir = siteData.executionContext.environment.toLowerCase();
    const url = siteData.executionContext.url;
    const stageUrl = siteData.stageUrl;
    const perlgemEnv = siteData.executionContext.perlgemEnv;

    if (envir === Util.environments.preview) {
      let pgCookie = '';
      pgCookie =
        stageUrl.substring(
          stageUrl.split('.', 5).join('.').length + 1,
          stageUrl.split('.', 6).join('.').length
        ) + perlgemEnv;
      await context.addCookies([
        {
          name: Util.props.targetEnv,
          value: pgCookie,
          url: url,
          sameSite: 'None',
          secure: true,
          expires: Util.expires.value,
        },
      ]);
      // test.reporter.epilogue(
      //  'PerlGem Environment Cookie target_env is set as ' + pgCookie
      // );
    }
  }

  static async wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  static async takeScreenshot(stepName, page, testInfo) {
    const currentdate = new Date();

    await testInfo.attach(stepName, {
      body: await page.screenshot({
        path:
          stepName +
          '_screenshot' +
          currentdate.getMonth() +
          currentdate.getDay() +
          '_' +
          currentdate.getHours() +
          currentdate.getMinutes() +
          currentdate.getSeconds() +
          '.png',
        fullPage: false,
      }),
      contentType: 'image/png',
    });
  }

  static generateMailId(siteData) {
    const values = 'abcdefghijk12345678';
    const userNameDomain = '@test';
    const topLevelDomain = '.com';
    let emailId = '';
    for (let i = 0; i < 10; i++) {
      emailId =
        emailId + values.charAt(Math.round(values.length * Math.random()));
    }
    console.log(
      `${siteData.brandLocale} : Generated MailId: ` +
        emailId +
        userNameDomain +
        topLevelDomain
    );
    return emailId + userNameDomain + topLevelDomain;
  }

  // TODO remove this function and replace it with generateMailId() once it is refactored
  static generateGmailId(siteData) {
    const values = 'abcdefghijk12345678';
    const userNameDomain = '@gmail';
    const topLevelDomain = '.com';
    let emailId = '';
    for (let i = 0; i < 10; i++) {
      emailId =
        emailId + values.charAt(Math.round(values.length * Math.random()));
    }
    console.log(
      `${siteData.brandLocale} : Generated MailId: ` +
        emailId +
        userNameDomain +
        topLevelDomain
    );
    return emailId + userNameDomain + topLevelDomain;
  }

  static generateCPF() {
    const numberRandom = (number) => Math.round(Math.random() * number);
    const createArray = (total, numero) =>
      Array.from(Array(total), () => numberRandom(numero));
    const mod = (dividendo, divisor) =>
      Math.round(dividendo - Math.floor(dividendo / divisor) * divisor);

    const generateCheckDigit = (digits) => {
      let sum = 0;
      for (let i = 1; i <= digits.length; i++) {
        sum += digits[digits.length - i] * (i + 1);
      }
      const remainder = mod(sum, 11);
      return remainder < 2 ? 0 : 11 - remainder;
    };

    const totalArray = 9;
    const n = 9;
    const [n1, n2, n3, n4, n5, n6, n7, n8, n9] = createArray(totalArray, n);

    const d1 = generateCheckDigit([n1, n2, n3, n4, n5, n6, n7, n8, n9]);
    const d2 = generateCheckDigit([n1, n2, n3, n4, n5, n6, n7, n8, n9, d1]);

    return `${n1}${n2}${n3}.${n4}${n5}${n6}.${n7}${n8}${n9}-${d1}${d2}`;
  }

  // TODO remove this function and replace it with generateMailId() once it is refactored
  static generateBrazilMailId(siteData) {
    const chars = 'bchibcdefgddffwwwjklqmnopqrstuvwxyz1234567890';
    let string = '';
    for (let ii = 0; ii < 10; ii++) {
      string += chars[Math.floor(Math.random() * chars.length)];
    }
    console.log(
      `${siteData.brandLocale} : Generated MailId: elcqalatam+${string}@estee.com`
    );

    // return 'elcqalatam' + '+' + string + '@estee.com';
    return `elcqalatam+${string}@estee.com`;
  }

  static async generateFederalDocNumber(
    context,
    federalGeneratorUrlElem,
    federalGenerateIdElem
  ) {
    const federalPage = await context.newPage();
    await federalPage.goto(federalGeneratorUrlElem);
    await federalPage.locator(federalGenerateIdElem).click();

    const federalIdNumber = await federalPage.evaluate(() => {
      return document.getElementById('iid').value;
    });

    await federalPage.close();
    return federalIdNumber;
  }
}

module.exports = Helper;
