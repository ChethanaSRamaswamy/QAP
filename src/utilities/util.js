const zlib = require('zlib');
const fs = require('fs');
const { execSync } = require('child_process');
const envConfig = require('../configs/env');

class Util {
  // QAP Url
  static QAPUrl = 'https://helix.esteeonline.com/';

  // Tenant to consider for the sites and scenarios coverage in the DB
  static tenant = {
    none: 0,
    helix: 1,
    elcelerate: 2,
    postman: 3,
  };

  // @deprecated, don't use envs, instead use Util.environments
  static envs = [
    'dev',
    'stage',
    'prod',
    'cms',
    'preprod',
    'feature',
    'pincer',
    'eng',
  ];
  static environments = {
    dev: 'dev',
    stage: 'stage',
    prod: 'prod',
    cms: 'cms',
    preprod: 'preprod',
    feature: 'feature',
    pincer: 'pincer',
    eng: 'eng',
    preview: 'preview',
    localhost: 'localhost',
    prEnv: 'prenv',
    int: 'int',
    intX: 'intx',
    branchServer: 'branchserver',
  };

  static regions = {
    na: 'na',
    emea: 'emea',
    latam: 'latam',
    apac: 'apac',
    cn: 'cn',
    uk: 'uk',
  };

  static locale = { brazil: 'br', darphin: 'da', beautyperks: 'eb' };

  static brand = { tomford: 'tfb' };

  static devices = { pc: 'pc', mobile: 'mobile' };

  static expires = {
    value: -1,
  };

  static ScreenSizes = {
    '1040p': { width: 1920, height: 1040 },
    '820p': { width: 1300, height: 820 },
    '860p': { width: 1600, height: 860 },
    '800p': { width: 360, height: 640 },
  };

  static props = {
    elcSiteTag: 'ELC_SITE_TAG',
    bypassAkamai: 'BYPASS_AKAMAI',
    bypassVarnish: 'BYPASS_VARNISH',
    adroll: '__adroll',
    elcSiteMSEnv: 'ELC_SITE_MICROSERVICES_ENVIRONMENT',
    elcSiteJSRepoEnv: 'ELC_SITE_JSREPO_ENVIRONMENT',
    testTrans: 'testtrans',
    locale: 'LOCALE',
    showErrors: 'SHOWERRORS',
    targetEnv: 'target_env',
    testGlobalOffers: 'TESTGLOBALOFFERS',
    mockPay: 'MOCKPAY',
    rcoGhost: 'RCOGHOST',
    vulcanize: 'VULCANIZE',
  };

  static defaultUsers = {
    elc: { displayName: 'esteeonline', username: 'elc' },
    feature: { displayName: 'aws', username: 'feature' },
    pincer: { displayName: 'pincer', username: 'pincer' },
    tenantWeb: { displayName: 'tenantweb', username: 'pincer_tenant_web' },
    unified: { displayName: 'unified', username: 'unified' },
    dbtool: { displayName: 'dbtool', username: '' },
    wafCookie: { displayName: 'wafcookie', username: 'NM_AE' },
    wafBypassCookie: { displayName: 'wafbypasscookie', username: 'WAF-Bypass' },
  };
  // NF - Not found. Will be used when the system is not able to find
  // a matching brand, locale or region. Refer setting up brand objects
  // in Jira Manager for Util.NF usage
  static NF = 'NF';
  static NA = 'NA';

  /**
   * TPSNames contains the list of 3rd party services supported with QAP
   */
  static TPSNames = {
    Slack: 'Slack',
    Jenkins: 'Jenkins',
    PagerDuty: 'PD',
    Datadog: 'DD',
    SumoLogic: 'SL',
  };

  /**
   * Jenkins build status
   */
  static JenkinsBuildState = {
    Success: 'SUCCESS',
    Unstable: 'UNSTABLE',
  };
  constructor() {}

  /*
  static getHelixSupportedFeatures() {
    // static tcNames = {
    //   features: ['Checkout', 'Account', 'SPP', 'MPP'],
    //   items: [
    //     {
    //       tcId: '11214',
    //       tcGroup: 'Checkout',
    //       tcName: '*****SELECT CHECKOUT SCENARIOS*****',
    //       PC: 'PC',
    //       mob: 'Mob',
    //     },

    //   ],
    // };
    let features = [];
    Util.tcNames.reduce((accumulator, item) => {
      if (accumulator.indexOf(item[1].trim()) >= 0) {
        return accumulator;
      } else {
        features.push([item[0], item[1].trim()]);
        accumulator.push(item[1].trim());
        return accumulator;
      }
    }, []);
    return features;
  }
  */

  /**
   *
   * @param {Array} credentialsMap credentailsManager
   * @param {String} brand Brand shortcode
   * @returns Http credential of the given brand with url encoded password
   */
  static getCredentials(credentialsMap, brand) {
    let brandCredential = [];
    credentialsMap.forEach((item) => {
      const hasFound = item.includes(brand);
      if (hasFound) {
        const [, , username, password] = item;
        brandCredential = [username, encodeURIComponent(password)];
      }
    });
    return brandCredential;
  }

  static fetchCredentialsByUsername(credentialsMap, brand) {
    let brandCredential = [];
    credentialsMap.forEach((item) => {
      const hasFound = item.username === brand;
      if (hasFound) {
        const { username, password } = item;
        brandCredential = [username, encodeURIComponent(password)];
      }
    });
    return brandCredential;
  }

  static fetchCredentialsByBrandId(credentialsMap, brandId) {
    const temp = credentialsMap.filter((item) => {
      if (item.brandId === brandId) return item;
    });
    return Util.fetchCredentialsByUsername(temp, temp[0]?.username);
  }

  static fetchCredentialsByDisplayName(credentialsMap, displayName) {
    const temp = credentialsMap.filter((item) => {
      if (item.displayName === displayName) return item;
    });
    return Util.fetchCredentialsByUsername(temp, temp[0]?.username);
  }

  /**
   *
   * @param {String} hostname Pass the hostname
   * @returns Environment of the given host. Environment can be anyone of
   * dev, stage, cms, prod, preprod, feature
   */
  static getEnvFromUrl(hostname) {
    let env = Util.envs.find((item) => {
      // Perform exact match
      const regex = new RegExp('\\b(' + item + ')\\b');
      return hostname.toLowerCase().match(regex) !== null;
    });
    if (env === undefined) {
      // This condition is purely based on assumption
      if (hostname.indexOf('tmp') === -1) {
        env = 'prod';
      } else {
        env = 'preprod';
      }
    }
    return env;
  }

  /**
   * Takes arguments in the form of --arg-name value and puts them into an object (argv).
   * Argument keys begin with double hyphens and additional hyphens are converted to camelCase.
   * For example: --notify-slack-level1 will be converted to notifySlackLevel1
   * @param {string[]} params Pass process.argv (ex: process.argv.slice(2))
   */

  static getCommandLineArgs(args) {
    const argv = {};

    const params = args.flatMap((item) => {
      if (
        item.includes('--ignore') ||
        item.includes('--help') ||
        item.includes('--create') ||
        item.includes('--quiet') ||
        item.includes('--preservefile') ||
        item.includes('--commit') ||
        item.includes('--revert')
      ) {
        return [item, item.replace(/-/g, '')];
      }
      return item;
    });

    if (params.length % 2) throw new Error('Invalid number of arguments');

    for (let i = 0; i < params.length; i += 2) {
      let key = params[i];

      if (!/^--([a-z]+-)*[a-z]+\d*$/g.test(key)) {
        throw new Error('Invalid argument name');
      }

      key = key
        .replace(/^--/, '')
        .replace(/-([a-z])/g, (g) => g[1].toUpperCase());

      argv[key] = params[i + 1];
    }

    return argv;
  }

  /**
   * Removes duplicates entries from an array of string items
   * @param {[]} inputArray Array of string items
   * @returns Array with unique sgtring items
   */
  static removeDuplicateEntries(inputArray) {
    const uniqueEntries = {};
    const resultArray = [];

    // TODO: see this can refined with new Set()
    // featuresList = [...new Set(featuresList)];
    // featuresList = Util.removeDuplicateEntries(featuresList);

    for (let i = 0; i < inputArray.length; i++) {
      if (!uniqueEntries[inputArray[i]]) {
        uniqueEntries[inputArray[i]] = true;
        resultArray.push(inputArray[i]);
      }
    }

    return resultArray;
  }

  static timetaken = (start, end) => {
    const timeTaken = end - start;

    const minutes = Math.floor(timeTaken / (1000 * 60));
    const seconds = Math.floor((timeTaken % (1000 * 60)) / 1000);
    const milliseconds = Math.floor(timeTaken % 1000);

    let timeTakenString = '';

    if (minutes > 0) {
      timeTakenString += `${minutes} minute${minutes > 1 ? 's' : ''}`;
    }

    if (seconds > 0) {
      if (timeTakenString.length > 0) {
        timeTakenString += ', ';
      }
      timeTakenString += `${seconds} second${seconds > 1 ? 's' : ''}`;
    }

    if (milliseconds > 0) {
      if (timeTakenString.length > 0) {
        timeTakenString += ' and ';
      }
      timeTakenString += `${milliseconds} millisecond${
        milliseconds > 1 ? 's' : ''
      }`;
    }
    return timeTakenString;
  };

  static gZipAFile = (sourceFile, targetFile) => {
    const sourceFileStream = fs.createReadStream(sourceFile);
    const targetFileStream = fs.createWriteStream(targetFile);
    const zipStream = zlib.createGzip();

    sourceFileStream.pipe(zipStream).pipe(targetFileStream);

    targetFileStream.on('close', () => {
      console.log('File zipped successfully.');
    });
  };

  static zipAFile = (
    sourceFile,
    targetFile,
    deleteSource = false,
    deleteTarget = false
  ) => {
    if (deleteTarget && fs.existsSync(targetFile)) {
      fs.unlinkSync(targetFile);
    }

    const cmd = `zip ${targetFile} ${sourceFile}`;

    try {
      execSync(cmd);
      console.log('CSV file zipped successfully');
      if (deleteSource) {
        fs.unlinkSync(sourceFile);
      }
    } catch (error) {
      console.error('Error occurred while zipping the file:', error);
    }
  };

  static isExecutedFromCI = () => {
    const { buildId, ci } = Util.getEnvironmentVariables();
    if (buildId !== undefined || ci !== undefined) {
      return true;
    } else {
      return false;
    }
  };

  static escapeCSVCellValue = (value) => {
    if (typeof value === 'string' && value.includes(',')) {
      return `"${value}"`;
    }
    return value;
  };

  /**
   * Retrieves all environment variable names and their values from the current process,
   */
  static getEnvironmentVariables() {
    return envConfig;
  }

  static doHelp = (help) => {
    return help !== undefined ? true : false;
  };

  static beQuiet = (quiet) => {
    return quiet !== undefined ? true : false;
  };

  /**
   * Generates an array of numbers within the specified range.
   *
   * @param {number} start - Starting value of the range.
   * @param {number} end - Ending value of the range.
   * @param {number} [step=1] - The step or increment between numbers. Default is 1.
   * @returns {Array<number>} An array containing numbers within the specified range.
   */
  static range = (start, end, step = 1) => {
    const result = [];

    if (step > 0) {
      for (let i = start; i <= end; i += step) {
        result.push(i);
      }
    } else {
      for (let i = start; i >= end; i += step) {
        result.push(i);
      }
    }

    return result;
  };
}

module.exports = Util;
