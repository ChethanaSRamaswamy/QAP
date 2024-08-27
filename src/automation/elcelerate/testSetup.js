/* eslint-disable no-process-env */
const { chromium } = require('playwright');

const SuiteAdapter = require('./adapters/suite_adapter');
const env = require('./configs/env');

async function globalSetup() {
  let browser = '';
  if (env.enableLambdaTest) {
    const capabilities = {
      browserName: 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
      browserVersion: 'latest',
      'LT:Options': {
        platform: 'Windows 10',
        build: 'Playwright Sample Build',
        name: 'Playwright Sample Test',
        user: env.lambdatestUsername,
        accessKey: env.lambdatestAccessKey,
        network: true,
        video: true,
        console: true,
      },
    };
    browser = await chromium.connect({
      wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
        JSON.stringify(capabilities)
      )}`,
    });
    console.log('Running On LAMBDA TEST');
  } else {
    browser = await chromium.launch();
    console.log('Running normally.');
  }

  process.env.SCOPE = JSON.stringify([]);
  const userTags = process.env.TAGS || '';
  if (userTags !== '') {
    const tags = await SuiteAdapter.fetchTestableSites(userTags);
    process.env.SCOPE = JSON.stringify(tags);
  }

  return { browser };
}

module.exports = globalSetup;
