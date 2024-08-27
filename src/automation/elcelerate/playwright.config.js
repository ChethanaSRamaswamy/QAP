/* eslint-disable no-process-env */
/* eslint-disable lines-around-comment */
/* eslint-disable no-trailing-spaces */
/* eslint-disable node/no-unsupported-features/es-syntax */

const { defineConfig, devices } = require('@playwright/test');
const env = require('./configs/env');
const globalEnv = require('../../configs/env');
const app = require('../../configs/app');
const Util = require('../../utilities/util');

// Different timeout settings
let timeouts = {
  navigationTimeout: 40 * 1000,
  actionTimeout: 30 * 1000,
  expectTimeout: 30 * 1000,
  testTimeout: 3 * 60 * 1000,
};

// Overriding the timeouts for stage env
// TODO: Need to increase the timeouts for GHA (CI), but it will affect
// Jenkins nodes. More info in https://jira.esteeonline.com/browse/QAP-2709
const envExceptionList = [
  Util.environments.stage,
  Util.environments.int,
  Util.environments.intX,
];
if (envExceptionList.includes(globalEnv.currentEnv.toLowerCase())) {
  timeouts = {
    navigationTimeout: 90 * 1000,
    actionTimeout: 60 * 1000,
    expectTimeout: 120 * 1000,
    testTimeout: 9 * 60 * 1000,
  };
}

const reportPortalConfig = {
  apiKey: app.rpApiKey,
  endpoint: app.rpEndPoint,
  project: app.rpProjectName,
  launch: app.rpLaunchName,
  attributes: [
    {
      key: 'key',
      value: 'value',
    },
    {
      value: 'value',
    },
  ],
  description: app.rpLaunchDescription,
  includeTestSteps: true,
  uploadTrace: true,
};

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

// This is to form the array of the desired report types, default would be HTML and Junit XML reports
const reporterList = [
  ['html'],
  [
    'junit',
    Object({
      outputFolder: './XMLReports',
      outputFile: 'results.xml',
    }),
  ],
];
if (env.enableReportPortal) {
  reporterList.push(['@reportportal/agent-js-playwright', reportPortalConfig]);
}
if (env.enableAllurereport) {
  reporterList.push([
    'allure-playwright',
    {
      detail: true,
      outputFolder: 'allure-results',
      suiteTitle: false,
      environmentInfo: {
        E2E_NODE_VERSION: process.version,
        E2E_OS: process.platform,
      },
    },
  ]);
}

let browsersList = [];
const chrome = {
  name: 'google-chrome',
  use: {
    ...devices['Desktop Chrome'],
    userAgent:
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Taiko',
  },
};
const firefox = {
  name: 'firefox',
  use: {
    ...devices['Desktop Firefox'],
    userAgent:
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Taiko',
  },
};

const safari = {
  name: 'webkit',
  use: {
    ...devices['Desktop Safari'],
    userAgent:
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Taiko',
  },
};

const edge = {
  name: 'Microsoft Edge',
  use: {
    ...devices['Desktop Edge'],
    channel: 'msedge',
    userAgent:
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Taiko',
  },
};

// Test against mobile viewports.
const pixelChrome = {
  name: 'mobile-chrome',
  use: {
    ...devices['Galaxy S9+'],
    userAgent:
      'Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.6167.164 Mobile Safari/537.36 Taiko',
  },
};
const iphoneSafari = {
  name: 'Mobile Safari',
  use: {
    ...devices['iphone 13'],
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Mobile/15E148 Safari/604.1 Taiko',
  },
};

let isPC = false;
let isMobile = false;
const userTags = process.env.TAGS || '';

if (userTags !== '') {
  if (userTags.toLowerCase().includes('pc')) {
    isPC = true;
  }
  if (userTags.toLowerCase().includes('mob')) {
    isMobile = true;
  }
}

if (env.toLaunchChrome && isPC) {
  browsersList.push(chrome);
}
if (env.toLaunchFireFox && isPC) {
  browsersList.push(firefox);
}
if (env.toLaunchEdge && isPC) {
  browsersList.push(edge);
}
if (env.toLaunchSafari && isPC) {
  browsersList.push(safari);
}
if (env.toLaunchiPhoneSafari && isMobile) {
  browsersList.push(iphoneSafari);
}
if (env.toLaunchPixelChrome && isMobile) {
  browsersList.push(pixelChrome);
}

// fallbacks (and un-supporting other browsers for CI/CD)
if (browsersList.length === 0 || process.env.CI) {
  if (isMobile && isPC) {
    browsersList = [pixelChrome, chrome];
  } else if (isMobile) {
    browsersList = [pixelChrome];
  } else {
    browsersList = [chrome];
  }
}

module.exports = defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 1 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 8 : 2,

  reporter: reporterList,
  use: {
    // For Local/Windows10 machine execution
    // userAgent:
    //    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Taiko',
    userAgent:
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Taiko',
    headless: true,
    trace: 'retain-on-failure',
    // screenshot: 'on',
    // video: 'on-first-retry',
    navigationTimeout: timeouts.navigationTimeout,
    actionTimeout: timeouts.actionTimeout,
    ignoreHTTPSErrors: true,
  },
  expect: {
    timeout: timeouts.expectTimeout,
  },

  /* Configure projects for major browsers */
  projects: browsersList,
  globalSetup: require.resolve('./testSetup.js'),
  globalTeardown: require.resolve('./testTeardown.js'),
  timeout: timeouts.testTimeout,
});
