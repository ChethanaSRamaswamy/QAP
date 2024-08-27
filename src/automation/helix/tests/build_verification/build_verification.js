const { goto } = require('taiko');
const assert = require('assert');
const Hengine = require('../../../../datainterface/providers/hengine');
const feature = 'Store Locator';
let siteDefinition = null;

async function initFrameworkSettings() {
  let [brand, locale] = process.env.tags.split(',');

  ({ siteDefinition } = await Hengine.generator(`${brand}-${locale}`, feature));

  if (siteDefinition.brandLocale === undefined) {
    assert(
      false,
      `There are no site details for ${brand}-${locale} in the database`
    );
  }
}

step('BV: Initialize Helix', async function () {
  await initFrameworkSettings();
});

step('BV: Open MAC US PC website', async function () {
  await goto(siteDefinition.prodUrl, { waitForNavigation: true });
});
