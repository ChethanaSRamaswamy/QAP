const fs = require('fs');
const path = require('path');
const Util = require('../../utilities/util');

const BrandController = require('../controllers/BrandController');
const LocaleController = require('../controllers/LocaleController');
const FeatureController = require('../controllers/FeatureController');
const FeatureScenarioController = require('../controllers/FeatureScenarioController');
const TestCoverageController = require('../controllers/TestCoverageController');
const LocatorDefinitionController = require('../controllers/LocatorDefinitionController');
const FileDownloadController = require('../controllers/FileDownloadController');

async function generateHelixMetadata(outputFilePath) {
  // node data_factory.js --method "generateHelixMetadata"
  const metadata = {
    brands: [],
    locales: [],
    supportedDevices: ['PC', 'Mobile'],
    supportedEnvironments: [
      'Prod',
      'PreProd',
      'Stage',
      'Dev',
      'Feature',
      'PersonalENG',
      'Preview',
    ],
    features: [],
    items: [],
  };
  const brands = await new BrandController().fetchBrands();
  for (let i = 0; i < brands.length; i++) {
    metadata.brands.push(brands[i].brandName);
  }

  const locales = await new LocaleController().fetchLocales();
  for (let i = 0; i < locales.length; i++) {
    metadata.locales.push(locales[i].localeName);
  }

  const features = await new FeatureController().fetchFeatures();
  for (let i = 0; i < features.length; i++) {
    metadata.features.push(features[i].featureName);
  }

  const allFeatureScenarios =
    await new FeatureScenarioController().fetchFeatureScenarios();

  const distinctScenarios = [
    ...new Set(allFeatureScenarios.map((obj) => obj.featureScenarioCode)),
  ];

  for (let iCnt = 0; iCnt < distinctScenarios.length; iCnt++) {
    const fsCode = distinctScenarios[iCnt];
    const filteredArray = allFeatureScenarios.filter(
      (obj) => obj.featureScenarioCode === fsCode
    );

    const objTs = {
      tcId: '',
      tcGroup: '',
      tcName: '',
      PC: '',
      mob: '',
    };

    for (let i = 0; i < filteredArray.length; i++) {
      const obj = filteredArray[i];
      objTs.tcId = obj.featureScenarioCode;
      objTs.tcGroup = obj.featureName;
      objTs.tcName = obj.scenarioName;
      if (obj.isPC === 1) {
        objTs.PC = obj.tag;
      } else {
        objTs.mob = obj.tag;
      }
    }
    metadata.items.push(objTs);
  }

  const jsonMetadata = JSON.stringify(metadata);
  let metadataFile = 'helixmetadata.json';
  if (outputFilePath !== undefined) {
    metadataFile = outputFilePath.trim() + '/' + metadataFile;
  }
  metadataFile = path.normalize(metadataFile);
  fs.writeFileSync(metadataFile, jsonMetadata, { encoding: 'utf8' });
  console.log(
    'Helix metadata file ' + path.resolve(metadataFile) + ' is generated'
  );
}

async function generateHelixTestCoverage(
  features = [],
  outputFilePath,
  shouldGenerateTagValues = true
) {
  // node data_factory.js --method "generateHelixTestCoverage"
  // node data_factory.js --method "generateHelixTestCoverage" --features "Store Locator, Checkout::LATAM"
  // node data_factory.js --method generateHelixTestCoverage --features "Loyalty::NA, Checkout::LATAM"

  let featuresList = [];
  const featureRegionMaps = {};

  if (features.length > 0) {
    featuresList.push(
      ...features.map((f) => {
        const [feature, region] = f.split('::');
        if (region !== undefined) {
          if (featureRegionMaps[feature] === undefined) {
            featureRegionMaps[feature] = {};
          }
          featureRegionMaps[feature][region] = region;
        }
        return feature;
      })
    );
  }

  featuresList = Util.removeDuplicateEntries(featuresList);

  const testCoverages =
    await new TestCoverageController().fetchTestCoverageInfo({
      featuresList: featuresList,
    });

  if (testCoverages.length === 0) {
    console.log('Not able to find any test coverage details');
    return;
  }

  let coverageDetails =
    'Brand,BrandTag,Region,Country,CountryTag,PC/Mobile,Feature,TestScenario,ScenarioTag,Tenant\n';
  const coverageInfo = []; // To gather tagValues
  for (let i = 0; i < testCoverages.length; i++) {
    const tc = testCoverages[i];

    const bName = tc.brandModel.brandName;
    const bPrefix = tc.brandModel.brandPrefix;
    const lName = tc.localeModel.localeName;
    const lPrefix = tc.localeModel.localePrefix;
    const sName = tc.featureScenarioModel.scenarioName;
    const device = tc.featureScenarioModel.tag;
    const fName = tc.featureScenarioModel.featureName;
    const rName = tc.localeModel.region;

    let sTag = device;
    let tenant = 'Helix';
    if (tc.isActive === 2 || tc.isActive === 3) {
      tenant = 'ELCelerate';
      sTag = sTag.replace('MOBILE', '').replace('PC', '').replace('MOB', '');
    }

    let deviceType = 'Mobile';
    if (device.includes('PC')) {
      deviceType = 'PC';
    }

    if (
      featureRegionMaps[fName] !== undefined &&
      featureRegionMaps[fName][rName] === undefined
    ) {
      continue;
    }

    const row = `${bName},${bPrefix},${rName},${lName},${lPrefix},${deviceType},${fName},"${sName}",${sTag},${tenant}\n`;
    // console.log(row);
    coverageDetails += row;

    if (shouldGenerateTagValues) {
      coverageInfo.push([bPrefix, lPrefix, device, tc.isActive]);
    }
  }

  let testCoverageFile = 'CoverageData.csv';
  if (outputFilePath !== undefined) {
    testCoverageFile = outputFilePath.trim() + '/' + testCoverageFile;
  }
  testCoverageFile = path.normalize(testCoverageFile);

  fs.writeFileSync(testCoverageFile, coverageDetails, { encoding: 'utf8' });
  console.log(
    'Test coverage file ' + path.resolve(testCoverageFile) + ' is generated'
  );

  if (shouldGenerateTagValues) {
    let tagValuesFile = 'tagValues.js';
    if (outputFilePath !== undefined) {
      tagValuesFile = outputFilePath.trim() + '/' + tagValuesFile;
    }
    tagValuesFile = path.normalize(tagValuesFile);

    fs.writeFileSync(tagValuesFile, JSON.stringify(coverageInfo), {
      encoding: 'utf8',
    });
    console.log(
      'Tag values file ' + path.resolve(tagValuesFile) + ' is generated'
    );
  }
}

async function generateIdCSV(feature, region = '', action = 'Q') {
  // node data_factory.js --method "generateIdCSV" --action "C" --feature "Payment" --region "NA"
  const locatorDefinitions =
    await new LocatorDefinitionController().fetchLocatorDefinitions(
      '',
      feature,
      region
    );

  const records = new Map();
  const brandLocales = [];
  const pageInfo = new Map();
  let header = 'tt,Page,BrandLocale';
  const formattedRegion = region === '' ? 'global' : region;
  const featureNameFormatted = feature.replace(' ', '_').toLowerCase();

  const idFile = path.resolve(
    `${featureNameFormatted}_id_${formattedRegion}_${Date.now()}.csv`
  );

  for (let i = 0; i < locatorDefinitions.length; i++) {
    const { locatorKey, brandLocale, locatorValue, page } =
      locatorDefinitions[i];

    if (!records.has(locatorKey)) {
      records.set(locatorKey, new Map());
      pageInfo.set(locatorKey, page);
    }

    if (!brandLocales.includes(brandLocale)) {
      brandLocales.push(brandLocale);
      header += ',' + brandLocale;
    }

    const locRecords = records.get(locatorKey);
    if (!locRecords.has(brandLocale)) {
      locRecords.set(brandLocale, locatorValue);
    }
  }

  let rows = header + '\n';

  for (const [key, value] of records) {
    let row = '1,' + pageInfo.get(key) + ',' + key;
    for (let iCnt = 0; iCnt < brandLocales.length; iCnt++) {
      const bl = brandLocales[iCnt];
      const val = value.get(bl);
      const idVal = val === undefined ? '' : val;
      row += ',' + Util.escapeCSVCellValue(idVal);
    }
    row += '\n';
    rows += row;
  }

  // Adding Byte Order Mark (BOM) to ensure proper Unicode handling
  const bom = '\ufeff';
  const contentWithBOM = bom + rows;
  fs.writeFileSync(idFile, contentWithBOM, { encoding: 'utf8' });

  await new FileDownloadController().insertDownloadDetails(
    'Id',
    path.basename(idFile),
    action,
    feature,
    formattedRegion
  );
  console.log('ID file ' + idFile + ' is generated');

  if (Util.isExecutedFromCI()) {
    // File will be zipped only if it is generated from a Jenkins job
    Util.zipAFile(path.basename(idFile), 'Download.zip', true, true);
  }
}

const myArgs = process.argv.slice(2);
const cliArgs = Util.getCommandLineArgs(myArgs);

if (cliArgs.method === 'generateHelixMetadata') {
  generateHelixMetadata(cliArgs.outputfilepath);
}

if (cliArgs.method === 'generateHelixTestCoverage') {
  generateHelixTestCoverage(
    cliArgs.features === undefined
      ? []
      : cliArgs.features.split(',').map((feature) => feature.trim()),
    cliArgs.outputfilepath,
    cliArgs.shouldgeneratetagvalues === undefined ? true : false
  );
}

if (cliArgs.method === 'generateIdCSV') {
  if (cliArgs.feature === undefined) {
    throw new Error(`Argument 'feature' is missing, please verify the params`);
  }
  generateIdCSV(cliArgs.feature, cliArgs.region, cliArgs.action);
}
