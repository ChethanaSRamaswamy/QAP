'use strict';
const path = require('path');
const Util = require('../../../utilities/util');
const {
  openBrowser,
  write,
  closeBrowser,
  goto,
  press,
  screenshot,
  click,
  checkBox,
  toLeftOf,
  link,
  text,
  into,
  textBox,
  evaluate,
} = require('taiko');
const assert = require('assert');
// const headless = process.env.headless_chrome.toLowerCase() === 'true';

// var build_id = process.env.BUILD_ID || '';
// var job_url = process.env.JOB_URL || '';
// var jenkins_url = process.env.JENKINS_URL || '';
// job_url = ' /' + job_url.replace(jenkins_url, '');
// build_id = ' ' + build_id;

beforeScenario(async (context) => {
  process.env.tags = context.currentSpec.tags;
  let browserOptions = {
    headless: false,
    dumpio: false,
    // Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36
    // Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4314.0 Safari/537.36
    // args:['--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4314.0 Safari/537.36 Taiko' + job_url + build_id]
    args: [
      '--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 Taiko',
    ],
  };

  if (Util.isExecutedFromCI()) {
    browserOptions = {
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
        '--disable-setuid-sandbox',
        '--user-agent=Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.5615.49 Safari/537.36 Taiko',
      ],
    };
  }

  await openBrowser(browserOptions);
});

afterScenario(async () => {
  await closeBrowser();
});

// Return a screenshot file name
gauge.customScreenshotWriter = async function () {
  const screenshotFilePath = path.join(
    process.env['gauge_screenshots_dir'],
    `screenshot-${process.hrtime.bigint()}.png`
  );

  await screenshot({
    path: screenshotFilePath,
  });
  return path.basename(screenshotFilePath);
};

step('Add task <item>', async (item) => {
  await write(item, into(textBox('What needs to be done?')));
  await press('Enter');
});

step('View <type> tasks', async function (type) {
  await click(link(type));
});

step('Complete tasks <table>', async function (table) {
  for (var row of table.rows) {
    await click(checkBox(toLeftOf(row.cells[0])));
  }
});

step('Clear all tasks', async function () {
  await evaluate(() => localStorage.clear());
});

step('Open todo application', async function () {
  await goto('todo.taiko.dev');
});

step('Must not have <table>', async function (table) {
  for (var row of table.rows) {
    assert.ok(!(await text(row.cells[0]).exists(0, 0)));
  }
});

step('Must display <message>', async function (message) {
  assert.ok(await text(message).exists(0, 0));
});

step('Add tasks <table>', async function (table) {
  for (var row of table.rows) {
    await write(row.cells[0]);
    await press('Enter');
  }
});

step('Must have <table>', async function (table) {
  for (var row of table.rows) {
    assert.ok(await text(row.cells[0]).exists());
  }
});
