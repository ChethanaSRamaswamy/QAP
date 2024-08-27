const importBrands = require('./import_brands');
const importLocales = require('./import_locales');
const importFeatures = require('./import_features');
const importScenarios = require('./import_scenarios');
const importFeatureScenarios = require('./import_featurescenarios');
const importHelper = require('./import_helper');

const printHelp = () => {
  console.log(`
  Usage: node import_selector.js --method "importDeploymentData"

  importDeploymentData method is used to import brands, locales, features, scenarios and feature's scenarios from deployment file to DB
  
  --help       Show this help message and exit
  --quiet      Not supported
  
  Examples:
  node import_selector.js --method "importDeploymentData" 
  `);
};

async function importDeploymentData(args, callback) {
  let { help } = args;

  if (importHelper.doHelp(help)) {
    printHelp();
    return;
  }

  // Import available brands
  await importBrands(args);

  // Import available markets
  await importLocales(args);

  // Import available features
  await importFeatures(args);

  // Import available scenarios
  await importScenarios(args);

  // Import supported feature and scenarios mappings
  await importFeatureScenarios(args);

  if (callback !== undefined) {
    callback(null, 'ok');
  }
}

module.exports = importDeploymentData;
