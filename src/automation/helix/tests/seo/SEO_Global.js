//var { assert } = require('console');
var t = require('taiko');
let siteDefinition, source, NullDataException;
const Helper = require('../../helpers/helper');
const Util = require('../../../../utilities/util');

let fs = require('fs');
let path = require('path');
let csv = require('csv-parser');

const messages = {
  revTagMessageNoSet: 'No revision tag is set',
  strValueNotMatch: 'expected and Actual values are NOT same',
  hreflangFetched:
    'The Country code and Language code are fetched from the file',
  akamaiSetToOne: 'AKAMAI BYPASS IS SET TO 1',
  akamaiSetToZero: 'AKAMAI BYPASS IS SET TO 0',
  varnishSetToOne: 'VARNISH BYPASS IS SET TO 1',
  mobileEmulationNote: 'Device Emulation set to: Galaxy Note II',
  notNavigatedProdCat: 'Not navigated to category on prodcat',
  navigatedMPP: 'Successfully navigated to MPP',
  mppLocatorChange:
    'Application seems to be slow and hence could not navigate to MPP within 60 sec or the locator needs to be updated',
  productIdExist: 'Product ID exists',
  hreflangNotAbsoulute: 'The Hreflang URL is NOT absolute and is relative',
  hreflangNotSecure:
    'The Hreflang URL is NOT secured and does not contain https',
  hreflangAbsolute:
    'All Hreflang URLs are abosolute and not relative as expected',
  hreflangLowerCase:
    'All Hreflang URLs are matching and are in lower case as expected',
  hreflangSecure: 'All Hreflang URLs are in secured and has https',
  notHubsite:
    'This is not a hubsite and hence this step is not applicable for this brand/locale',
  responseNotFound: 'The response code is 404 as expected',
  slashHomeNotExist: '/home should not exist',
  responseCodeNotExpected:
    'The response code is neither 200 not 404 and it is not expected',
  notBidirectional:
    'The URL is not bidirectional and does not contain m. when media attribute is handheld',
  handheldNotAvailable:
    'Media attribute with the value handheld is not available and hence this is skipped',
  canonicalIsExpected: 'The Canonical URL is populated as expected',
  canonicalWrongly: 'The canoncial URL is wrongly populated',
  canonicalNotAbsolute: 'The Canonical URL is NOT absolute and is relative',
  canonicalWithoutHttps:
    'The Canonical URL is NOT secured and does not contain https',
  canonicalIsAbsolute:
    'Canonical URL is abosolute and not relative as expected',
  canonicalInLowercase: 'Canonical URL is in Lowercase as expected',
  canonicalSecure: 'Canonical URL is in secured and has https',
  hreflangNotWorking: 'The Hreflang URLs mentioned above are NOT working',
  sitemapAccesible: 'sitemap.xml is successfully accessible',
  robotsTxtAccesible: 'robot.txt is successfully accessible',
  robotsTxtExpectedValues: 'All expected values are in Robots.txt file',

  stepNotApplicable: 'This step is not applicable for this Brand/Locale',
  acctCreatedSuccess: 'Account created successfully',
  acctCreatedFail: 'Account not created',
};

const matchCondition = true;

//
let Hengine = require('../../../../datainterface/providers/hengine');
let taikoOverride = require('../../helix_taiko');

// This file is common template for multiple brands and locales

let {
  click,
  openBrowser,
  goto,
  resizeWindow,
  textBox,
  scrollUp,
  scrollDown,
  listItem,
  scrollTo,
  switchTo,
  title,
  closeTab,
  equal,
  scrollIntoView,
  search,
  includes,
  reload,
  split,
  clear,
  contains,
  goBack,
  waitFor,
  write,
  into,
  checkBox,
  below,
  dropDown,
  toRightOf,
  link,
  button,
  $,
  emulateDevice,
  evaluate,
  setConfig,
  press,
  text,
  currentURL,
  radioButton,
  deleteCookies,
  setCookie,
} = require('taiko');
//var { assert } = require('console');
assert = require('assert');
let creds = [[]];

var brandLocale = '';
var isDiscovery = process.env.ISDISCOVERY === 'true' ? true : false; // For Self-healing discovery
var doHeal = process.env.DOHEAL === 'true' ? true : false; // For Self-healing
var CommonData = {};
var feature = 'SEO';
var TimeoutSetting = '';
let csvContent = [];
var brand = ''; // The Value shouldn't have any space or special characters

//SEO Specific var and variables
let currURL = '';
var canURL = '';
var canBase = '';
let canBaseURL = '';
let canURLsList = [];
let canonicalURLs = [];
let canURLsListUpper = [];
let canonicalURLsUpper = [];
let hrefLangList = [];
var hrefLangURL = '';
let canList = new Object();
var country = '';
var lang = '';
var hubFlag = '';
var langCountry = '';
//Hreflang
let hrefLangAndURLObj = new Object();
let hrefLangAndURLListActual = [];
let hrefLangAndURLListExpected = [];
var xDefaultLocator = '';

//Required for Navigating to MPP
var mppURL = '';
var mppProdCat = '';
var prodViewGrid = '';
var mppURLfromProdCat = '';
var CategoryUrl = '';

// Required for Navigating to SPP
var ProductID = '';
var prodIDLoc = '';
var notAvailableProductsCount = 0;
var isShoppable = '';
var IsDisplayable = '';
var productUrl = '';
var ProdUrl = '';
var noDisplayableProductError = '';
let prodID = [];
let tmpProdID = '';

var handheld = '';
let handheldURL = '';

//Robot.txt
let elcSeoRobotstxtCA = [];
let elcSeoRobotstxt = [
  [
    'User-agent: *',
    'Allow: /misc/*.css$',
    'Allow: /misc/*.css?',
    'Allow: /misc/*.js$',
    'Allow: /misc/*.js?',
    'Allow: /misc/*.gif',
    'Allow: /misc/*.jpg',
    'Allow: /misc/*.jpeg',
    'Allow: /misc/*.png',
    'Allow: /modules/*.css$',
    'Allow: /modules/*.css?',
    'Allow: /modules/*.js$',
    'Allow: /modules/*.js?',
    'Allow: /modules/*.gif',
    'Allow: /modules/*.jpg',
    'Allow: /modules/*.jpeg',
    'Allow: /modules/*.png',
    'Allow: /profiles/*.css$',
    'Allow: /profiles/*.css?',
    'Allow: /profiles/*.js$',
    'Allow: /profiles/*.js?',
    'Allow: /profiles/*.gif',
    'Allow: /profiles/*.jpg',
    'Allow: /profiles/*.jpeg',
    'Allow: /profiles/*.png',
    'Allow: /themes/*.css$',
    'Allow: /themes/*.css?',
    'Allow: /themes/*.js$',
    'Allow: /themes/*.js?',
    'Allow: /themes/*.gif',
    'Allow: /themes/*.jpg',
    'Allow: /themes/*.jpeg',
    'Allow: /themes/*.png',
  ],
  [
    '# Directories',
    'Disallow: /includes',
    'Disallow: /misc/',
    'Disallow: /modules/',
    'Disallow: /profiles/',
    'Disallow: /scripts/',
    'Disallow: /themes/',
    'Disallow: /templates/',
    'Disallow: /shared/',
  ],
  [
    '# Files',
    'Disallow: /CHANGELOG.txt',
    'Disallow: /cron.php',
    'Disallow: /INSTALL.mysql.txt',
    'Disallow: /INSTALL.pgsql.txt',
    'Disallow: /INSTALL.sqlite.txt',
    'Disallow: /install.php',
    'Disallow: /INSTALL.txt',
    'Disallow: /LICENSE.txt',
    'Disallow: /MAINTAINERS.txt',
    'Disallow: /update.php',
    'Disallow: /UPGRADE.txt',
    'Disallow: /xmlrpc.php',
  ],
  [
    '# Paths (clean URLs)',
    'Disallow: /admin*',
    'Disallow: /comment/reply*',
    'Disallow: /filter/tips*',
    'Disallow: /node/add*',
    'Disallow: */user/register*',
    'Disallow: */user/password*',
    'Disallow: */user/login*',
    'Disallow: */user/logout*',
    'Disallow: */404-page',
    'Disallow: */site_down*.html',
  ],
  [
    '# Paths (no clean URLs)',
    'Disallow: /?q=admin*',
    'Disallow: /?q=comment/reply*',
    'Disallow: /?q=filter/tips*',
    'Disallow: /?q=node/add*',
    'Disallow: /?q=search*',
    'Disallow: /?q=user/password*',
    'Disallow: /?q=user/register*',
    'Disallow: /?q=user/login*',
    'Disallow: /?q=user/logout*',
    'Disallow: /?q=esearch*',
  ],
  [
    '# Yandex',
    'User-agent: Yandex',
    'Clean-param: danboid&epik&bg&id&nb&cm_ven&external-test-ids&_openstat&from&admitad',
    'Clean-param: utm_source&utm_medium&utm_campaign&utm_term&utm_content&yclid&gclid&fbclid',
    'Clean-param: yhid&vto_open&footerclick&cm_mmc&utm_reqid&qs&size&navclick',
  ],
];

var robotTxt = '';
let robotTxtContent = '';

/******** SEO CUSTOM FUNCTIONS START HERE **************/
async function compareAndAssert(stringActual, stringExpected) {
  let strExp = stringExpected;
  let strActual = stringActual;
  gauge.message('Expected value is ' + strExp);
  gauge.message('Expected value is ' + strActual);
  if (strExp == strActual) {
    assert(matchCondition);
    gauge.message('Expected and Actual values are same' + strActual);
  } else {
    gauge.message(messages.strValueNotMatch);
    assert(!matchCondition);
  }
  /*  //await t.goto(mppURL);
    gauge.message(JSON.stringify(canonicalURLs));
    gauge.message(canonicalURLs.length)
    var canURLsList=[];
    let tempURL;
    for (let i=1;i<=canonicalURLs.length;i++)
    {
        tempURL = canonicalURLs[i];
        console.log(tempURL);
        gauge.message(tempURL)
        //canURLsList.push(await)
    }*/
}

function formCANUrlList(canURLs) {
  return true;
}

function getHrefLangURLfromFile(brand) {
  const filePath = path.join(__dirname, '../../specs/seo/data/CountryLang.csv');
  const csvContent = [];
  const readStream = fs.createReadStream(filePath);
  const csvParser = csv({
    delimiter: ',',
    columns: true,
    skip_empty_lines: true,
  });
  readStream.pipe(csvParser);
  csvParser.on('readable', function () {
    let record;
    while ((record = csvParser.read())) {
      const data1 = {
        hrefLang: record.CountryLang,
        urlCan: record.URL,
        brand: record.Brand.toLowerCase(),
      };
      if (
        data1.urlCan.includes(brand.toLowerCase()) &&
        data1.hrefLang.length === 5
      ) {
        csvContent.push(data1);
      }
    }
  });
  csvParser.on('end', function () {
    // console.table(csvContent);
    gauge.message(messages.hreflangFetched);
  });
  readStream.on('error', function (err) {
    console.error(err);
  });
  csvParser.on('error', function (err) {
    console.error(err);
  });
}

async function initAutoHeal() {
  let apisToOverride = { $, evaluate };
  let inclusivityFields = { brandLocale, feature };

  ({ $, evaluate } = await taikoOverride.override(
    apisToOverride,
    inclusivityFields,
    isDiscovery,
    doHeal
  ));
}

function initTestEnvironment(siteDefinition) {
  brandLocale = siteDefinition.brandLocale;

  let allCreds = creds.credentailsManager;
  let brandCode = brandLocale.split('-')[0];
  [featureUser, featurePwd] = getCredentials(allCreds, 'FEATURE');
  let [brUserID, brPasswd] = getCredentials(allCreds, brandCode);
  let [brAdmID, brAdmPasswd] = getCredentials(allCreds, 'ADMIN');
  var [pincerUser, pincerPasswd] = getCredentials(allCreds, 'PINCER');

  let urlBrandPrefix = 'https://' + brUserID + ':' + brPasswd + '@';
  let urlAdmPrefix = 'https://' + brAdmID + ':' + brAdmPasswd + '@';
  let pincerPrefix = 'https://' + pincerUser + ':' + pincerPasswd + '@';

  produrl = siteDefinition.prodUrl;
  produrladm = produrl.replace('https://', urlAdmPrefix);

  stageurlActual = siteDefinition.stageUrl;
  stageurl = stageurlActual.replace('https://', urlBrandPrefix);
  stageurladm = stageurlActual.replace('https://', urlAdmPrefix);

  devurl = stageurl.replace('stage', 'dev'); // Why can't we use siteDefinition.devUrl
  devurladm = stageurladm.replace('stage', 'dev');

  preprodurl = produrl.replace('www.', 'wwwtmp.'); // Why can't we use siteDefinition.preProdUrl
  preprodurladm = produrladm.replace('www.', 'wwwtmp.');

  pincerurl = produrl.replace('https://', pincerPrefix);
  produrladm = produrl.replace('https://', urlAdmPrefix);
}

async function initFrameworkSettings() {
  // This should come from Gauge Tags inputs
  let tags = process.env.tags.split(',');
  ({ siteDefinition, source, NullDataException } = await Hengine.Initializer(
    tags,
    feature,
    this
  ));
  // Abort, if there is any error while setting up the locators and test data
  if (NullDataException.isError) {
    assert(!matchCondition, NullDataException.message.join('\n'));
  }

  // Override this
  Object.assign(this, source);
  // Taiko API overrides
  t = await Helper.initAutoHeal(siteDefinition, t);

  // Re-initialize variables
  reinitialize();

  // Delete all the cookies
  await t.deleteCookies();

  gauge.message('ENVIRONMENT : ' + siteDefinition.executionContext.environment);
}

function reinitialize() {}

/******** CUSTOM FUNCTIONS END HERE **************/

/*step("Read expected hreflang and URL from CSV File", async function() {
    getHrefLangURLfromFile(Brand);
});*/

step('SEO Initialize Helix', async function () {
  // Initialize the selectors from DB
  await initFrameworkSettings();
});

step('SEO Set cookies <plat>', async function () {
  gauge.message('ENVIRONMENT : ' + siteDefinition.executionContext.environment);
  //setConfig({ navigationTimeout: parseInt(TimeoutSetting, 10) });
  await t.setConfig({ navigationTimeout: parseInt(TimeoutSetting, 10) });
  await Helper.setWindowSize(Util.ScreenSizes['1040p'], t);
  await Helper.setWAFCookie(siteDefinition, t);
  await Helper.setAdroll(siteDefinition, t);
  await Helper.setAkamaiBypass(siteDefinition, t);
  await Helper.setApiEnv(siteDefinition, t);
  await Helper.getPerlgemEnvCookie(siteDefinition, t);
  await Helper.setOtherCookies(siteDefinition, t);
});

step('SEO Set test order flag <plat>', async function (plat) {
  if (
    siteDefinition.executionContext.environment.toUpperCase() == 'PROD' ||
    siteDefinition.executionContext.environment.toUpperCase() == 'PREPROD'
  ) {
    await Helper.setWAFCookie(siteDefinition, t);
  }
});

step('SEO Set revision tag <plat>', async function (plat) {
  await Helper.setRevisionTag(siteDefinition, t);
});

step('SEO Mobile Device Emulation', async function () {
  await t.emulateDevice('Galaxy Note II');
  gauge.message(messages.mobileEmulationNote);
});

step('SEO Open Website <plat>', async function () {
  //await t.setConfig({ navigationTimeout: parseInt(TimeoutSetting, 10) });
  await t.goto(siteDefinition.executionContext.url),
    { waitForEvents: ['DOMContentLoaded'] };
  await t.resizeWindow({ width: 1920, height: 1040 });
  gauge.screenshot();
  // await t.goto(siteDefinition.executionContext.url, {waitForEvents : ['DOMContentLoaded']});
  // getHrefLangURLfromFile(brand);
});

step(
  'SEO Go to category in ProdCat and fetching to MPP URL <plat>',
  async function (plat) {
    if (CategoryUrl !== '') {
      await t.goto(
        siteDefinition.executionContext.adminUrl +
          CategoryUrl +
          CommonData.MppCatID,
        { waitForEvents: ['DOMContentLoaded'] }
      );
      mppURLfromProdCat = await (await t.$(mppProdCat)).text();
      gauge.message(messages.mppURLfromProdCat);
    } else {
      gauge.message(messages.notNavigatedProdCat);
    }
  }
);

step('SEO Navigate to MPP <plat>', async function (plat) {
  gauge.message(siteDefinition.executionContext.url + mppURLfromProdCat);
  await t.goto(siteDefinition.executionContext.url + mppURLfromProdCat, {
    waitForNavigation: false,
  });
  if (await (await t.$(prodViewGrid)).exists(100, 60000)) {
    assert(true);
    gauge.message(messages.navigatedMPP);
  } else {
    gauge.message(messages.mppLocatorChange);
    assert(false);
  }
});

step('SEO Go to Prodcat and browse to SPP <plat>', async function () {
  if (await (await t.$(ProductID)).exists()) {
    gauge.message(messages.productIdExist);
    let ProductIDtext = await (await t.$(ProductID)).elements();

    for (let i = 2; i <= ProductIDtext.length + 2; i++) {
      if (await (await t.$(prodIDLoc + i + ']/td[1]')).exists()) {
        tmpProdID = await (await t.$(prodIDLoc + i + ']/td[1]')).text();
        prodID.push(tmpProdID);
      } else {
        break;
      }
    }
    for (let j = 0; j < prodID.length; j++) {
      await t.goto(
        siteDefinition.executionContext.adminUrl + ProdUrl + prodID[j],
        { waitForEvents: ['DOMContentLoaded'] }
      );
      let isShoppableValue = await (await t.$(isShoppable)).text();
      let isDisplayableValue = await (await t.$(IsDisplayable)).text();
      if (isShoppableValue == '1' && isDisplayableValue != '0') {
        gauge.message(
          'The Product with Prod ID - ' +
            prodID[j] +
            ' is available for adding it to Cart '
        );
        if (await (await t.$(productUrl)).exists(100, 20000)) {
          let url = await (await t.$(productUrl)).text();
          gauge.message(messages.url);
          await t.goto(siteDefinition.executionContext.url + url, {
            waitForEvents: ['DOMContentLoaded'],
          });
          gauge.screenshot();
          break;
        } else {
          //var nodisplayableProduct = await $(noDisplayableProductError).text();
          //messages.nodisplayableProduct;
        }
      } else {
        gauge.message(
          'The Product with Prod ID - ' +
            prodID[j] +
            ' is NOT available for adding it to Cart '
        );
        notAvailableProductsCount++;
      }
    }
    if (notAvailableProductsCount == prodID.length) {
      assert(
        !matchCondition,
        'None of the products are available for adding it to Cart'
      );
    }
  }
});

step(
  'Verify the hreflang and the corresponding URLs <plat>',
  { continueOnFailure: true },
  async function (plat) {
    //gauge.screenshot();
    let canFlag = true;
    let temp = await (await t.$(canURL)).elements();
    //console.log(temp);
    gauge.message('Number of elements: ' + temp.length);

    let tempURL = '';
    let tempHrefLang = '';
    let tmp = '';
    for (let i = 1; i <= temp.length; i++) {
      //gauge.message("Length" + temp.length)
      tmp = hrefLangURL + i + ']';
      if (await (await t.$(tmp)).exists()) {
        tempURL = await t.evaluate(await t.$(tmp), (element) =>
          element.getAttribute('href')
        );
        tempHrefLang = await t.evaluate(await t.$(tmp), (element) =>
          element.getAttribute('hreflang')
        );
        if (!tempURL.includes('/ar-me')) {
          canURLsList.push(tempURL);
          hrefLangList.push(tempHrefLang);
          hrefLangAndURLObj.hrefLang = tempHrefLang;
          hrefLangAndURLObj.URL = tempURL;
          hrefLangAndURLListActual.push(hrefLangAndURLObj);
        }

        if (tempURL.includes('//m.')) {
          canFlag = false;
          gauge.message('Actual Hreflang URL in wrong format: ' + tempURL);
          gauge.message(messages.hreflangNotAbsoulute);
          assert(false, 'The Hreflang URL is NOT absolute and is relative');
        }
        if (!tempURL.includes('https')) {
          canFlag = false;
          gauge.message('Actual Hreflang URL in wrong format: ' + tempURL);
          gauge.message(messages.hreflangNotSecure);
          assert(
            false,
            'The Hreflang URL is NOT secured and does not contain https'
          );
        }
        if (!(/[a-z]/.test(tempURL) && !/[A-Z]/.test(tempURL))) {
          // Checking if the hreflang URL is not having uppercase characters
          canFlag = false;
          gauge.message('Actual Hreflang URL: ' + canURLsList[i - 1]);
          assert(false, 'The Hreflang URL is not in lowercase');
        }
      }

      //chkCanonicalLower();

      //await t.goto(siteDefinition.executionContext.url+mppURL.toUpperCase(),{waitForEvents:['loadEventFired']});
      //await t.$(prodViewGrid).isVisible(100,60000)
      //canonicalURLsUpper = await t.$(canURL).elements()
      /* let tempURLUpper;
    for (let i=1;i<=canURLsList.length;i++)
    {
            temp = hrefLangURL+i+"]";
            tempURLUpper = await t.evaluate($(temp), (element) => element.getAttribute("href"));
            if(!(tempURLUpper.includes("/ar-me"))){
                canURLsListUpper.push(tempURLUpper);
                //gauge.message("Canonical URL when MPP URL is in uppercase: " + tempURLUpper)
                //gauge.message("Canonical URL when MPP URL is in lowercase: " + canURLsList[i-1])
                if(canURLsList[i-1]!==canURLsListUpper[i-1]){
                    canFlag=false
                    gauge.message("Expected Hreflang URL: "+canURLsList[i-1]);
                    gauge.message("Actual Hreflang URL: "+canURLsListUpper[i-1]);
                    assert(false,"The Hreflang URL is not in lowercase");
                }
                //canURLsList.push(await)
            }
        } */
    }
    gauge.screenshot();
    if (canFlag) {
      assert(true);
      gauge.message(messages.hreflangAbsolute);
      gauge.message(messages.hreflangLowerCase);
      gauge.message(messages.hreflangSecure);
    }
  }
);

step(
  'SEO Select country and language for the hubsites <plat>',
  async function (plat) {
    if (langCountry !== '') {
      await t.setCookie('LOCALE', langCountry, {
        url: siteDefinition.executionContext.url,
      });
      gauge.message('The Language and Country cookie is set as ' + langCountry);
    } else {
      gauge.message(messages.notHubsite);
    }
  }
);

step(
  'Verify appending to /home not redirecting to homepage <plat>',
  { continueOnFailure: true },
  async function (plat) {
    let pageTitle = await t.title();
    let response = await t.goto(siteDefinition.executionContext.url + '/home', {
      waitForNavigation: false,
    });
    await t.waitFor(5000);
    if (response.status.code == 404) {
      assert(true);
      gauge.message(messages.responseNotFound);
      //currURL = await currentURL();
      // let pageTitleAfter = await t.title();
      // compareAndAssert(pageTitleAfter,pageTitle);
    } else if (response.status.code == 200) {
      gauge.message(messages.slashHomeNotExist);
      assert(false);
    } else {
      gauge.message(messages.responseCodeNotExpected);
      assert(false);
    }
  }
);

step(
  'Bi-directional annotation is present from source code',
  async function () {
    if (await (await t.$(handheld)).exists()) {
      handheldURL = await (await t.$(handheld)).attribute('href');
      if (handheldURL.includes('https://m.')) {
        assert(true);
        gauge.message(
          'The URL is bidirectional as expected and contains m. when media attribute is handheld: ' +
            handheldURL
        );
      } else {
        gauge.message(
          'The URL when media attribute is handheld is ' + handheldURL
        );
        gauge.message(messages.notBidirectional);
        assert(false);
      }
    } else {
      gauge.message(messages.handheldNotAvailable);
    }
  }
);

step(
  'Verify the Canonical Base URL',
  { continueOnFailure: true },
  async function () {
    canBaseURL = await (await t.$(canBase)).attribute('href');
    let canFlag = true;
    let tempURL = await t.currentURL();
    tempURL = tempURL.replace('//m.', '//www.');
    tempURL = tempURL.replace('//mtmp.', '//wwwtmp.');

    if (
      canBaseURL.toLowerCase().includes(tempURL.toLowerCase()) ||
      tempURL.toLowerCase().includes(canBaseURL.toLowerCase())
    ) {
      assert(true);
      gauge.message(messages.canonicalIsExpected);
    } else {
      gauge.message('The expected canonical URL is ' + tempURL);
      gauge.message('The actual canonical URL is ' + canBaseURL);
      gauge.message(messages.canonicalWrongly);
      assert(false);
    }
    if (canBaseURL.includes('//m.')) {
      canFlag = false;
      gauge.message('Actual Canonical URL in wrong format: ' + canBaseURL);
      gauge.message(messages.canonicalNotAbsolute);
      assert(false, 'The Canonical URL is NOT absolute and is relative');
    }
    if (!canBaseURL.includes('https')) {
      canFlag = false;
      gauge.message('Actual Canonical URL in wrong format: ' + canBaseURL);
      gauge.message(messages.canonicalWithoutHttps);
      assert(
        false,
        'The Canonical URL is NOT secured and does not contain https'
      );
    }

    if (canFlag) {
      assert(true);
      gauge.message(messages.canonicalIsAbsolute);
      gauge.message(messages.canonicalInLowercase);
      gauge.message(messages.canonicalSecure);
    }
  }
);

step(
  'Verify the Hreflang URLs are working',
  { continueOnFailure: true },
  async function () {
    //console.table(csvContent);
    let canURLflag = true;
    gauge.message('Number of Hreflang URLs : ' + canURLsList.length);
    let j = 1;
    for (let i = 0; i < canURLsList.length; i++) {
      console.log(hrefLangList[i], canURLsList[i]);
      if (canURLsList[i] != canURLsList[j]) {
        await t.setCookie('NM_AE', '04042020', { url: canURLsList[i] });
        let response = await t.goto(canURLsList[i], {
          waitForEvents: ['loadEventFired'],
        });
        // let response = await t.goto(canURLsList[i],{waitForNavigation:false});

        if (response.status.code == 200) {
          console.log('Success!!');
        } else {
          gauge.message(
            'The URL is not working and the response is ' +
              response.status.code +
              ' ' +
              response.status.text
          );
          console.log(response.status.text);
          guage.message(canURLsList[i]);
          canURLflag = false;
        }
      }
      j++;
    }
    if (canURLflag) {
      assert(true);
      gauge.message(
        'All ' + canURLsList.length + ' the Hreflang URLs are working'
      );
    } else {
      gauge.message(messages.hreflangNotWorking);
      assert(false);
    }
  }
);

step(
  'Verify the x-default URL',
  { continueOnFailure: true },
  async function () {
    //console.table(csvContent);

    // console.log(hrefLangAndURLListActual);
    if (await (await $(xDefaultLocator)).exists()) {
      var xDefaultHref = await evaluate($(xDefaultLocator), (ele) =>
        ele.getAttribute('href')
      );
      gauge.message(`xDefault URL: ${xDefaultHref}`);

      // let xdefaultURLexp = hrefLangAndURLListActual.find(xdefaultURLexp => (xdefaultURLexp.hrefLang).toLowerCase() ==="en-us")
      // let xdefaultURLactual = hrefLangAndURLListActual.find(xdefaultURLactual => (xdefaultURLactual.hrefLang).toLowerCase() ==="x-default")

      // compareAndAssert(xdefaultURLactual["URL"],xdefaultURLexp["URL"]);
    } else {
      gauge.message('x-Default URL is not available');
    }
  }
);

step('Verify that sitemap.xml is accessible <plat>', async function () {
  let response = await t.goto(
    siteDefinition.executionContext.url + '/sitemap.xml',
    { waitForEvents: ['loadEventFired'] }
  );
  if (response.status.code === 200) {
    console.log('Success!!');
    gauge.message(messages.sitemapAccesible);
  } else {
    console.log(response.status.text);
    gauge.message(
      'sitemap.xml is NOT accessible and the error code and message are : ' +
        response.status.code +
        ' ' +
        response.status.text
    );
    assert(false);
  }
});

step('Fetch the values of Robots.txt file <plat>', async function () {
  let response = await t.goto(
    siteDefinition.executionContext.url + '/robots.txt',
    { waitForEvents: ['loadEventFired'] }
  );
  if (response.status.code === 200) {
    console.log('Success!!');
    gauge.message(messages.robotsTxtAccesible);
    //let tmpRobotTxt = (await t.$(robotTxt).text()).split("#");
    robotTxtContent = await (await t.$(robotTxt)).text();

    let i = 0;
    for (i = 0; i < elcSeoRobotstxt.length; i++) {
      for (let j = 0; j < elcSeoRobotstxt[i].length; j++) {
        if (!robotTxtContent.includes(elcSeoRobotstxt[i][j])) {
          console.log(
            'Expected value ' +
              elcSeoRobotstxt[i][j] +
              ' is missing in robots.txt file'
          );
        }
      }
    }
    if (i >= elcSeoRobotstxt.length) {
      gauge.message(messages.robotsTxtExpectedValues);
      console.log('All expected values are in Robots.txt file');
    }
  } else {
    console.log(response.status.text);
    gauge.message(
      'robots.txt is NOT accessible and the error code and message are : ' +
        response.status.code +
        ' ' +
        response.status.text
    );
    assert(false);
  }
});
