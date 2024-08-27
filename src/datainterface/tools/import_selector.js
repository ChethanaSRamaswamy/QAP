const Util = require('../../utilities/util');
const readFromIdFile = require('./import/import_id');
const readFromDataFile = require('./import/import_data');
const readFromLookupFile = require('./import/import_lookup');
const readDataFromMultiFile = require('./import/import_multidata');
const importBrands = require('./import/import_brands');
const importLocales = require('./import/import_locales');
const importFeatures = require('./import/import_features');
const importScenarios = require('./import/import_scenarios');
const importFeatureScenarios = require('./import/import_featurescenarios');
const importDeploymentData = require('./import/import_deploymentdata');
const importAll = require('./import/import_all');
const uploadIdCSV = require('./import/import_id_csv');
const {
  importCredentials,
  importTPSCredentials,
} = require('./import/import_credentials');
const importHelper = require('./import/import_helper');
const importTestCoverage = require('./import/import_test_coverage');

const printHelp = () => {
  console.log(`
  Usage: node import_selector.js options

  Options:
  The following options can be used.

  --method     Name of the method, supports the following methods
               readFromIdFile
               readFromDataFile
               readFromLookupFile
               readDataFromMultiFile
               importBrands
               importLocales
               importFeatures
               importScenarios
               importFeatureScenarios
               importDeploymentData
               importAll
               Usage: node import_selector.js --method "methodName" [params]

  --help       Show this help message and exit
  
  Examples:
  node import_selector.js --method "importAll" --help
  node import_selector.js --method "readFromIdFile" --feature "GNAV Footer" --filepath "gnav_footer/data/tmo_newid_global.csv" 
  `);
};

const myArgs = process.argv.slice(2);
const cliArgs = Util.getCommandLineArgs(myArgs);

const { help, method, quiet } = cliArgs;
cliArgs.quiet = Util.beQuiet(quiet);
if (method === undefined && importHelper.doHelp(help)) {
  printHelp();
  return;
}

// TODO: Throw an error if an unsupported method is called like readFromDataFromMultiFile

if (cliArgs.method === undefined) {
  throw new Error(`Argument 'method' is missing, please verify the params`);
}

if (cliArgs.method === 'uploadIdCSV') {
  uploadIdCSV(cliArgs);
}

if (cliArgs.method === 'readFromIdFile') {
  readFromIdFile(cliArgs);
}

if (cliArgs.method === 'readFromDataFile') {
  readFromDataFile(cliArgs);
}

if (cliArgs.method === 'readDataFromMultiFile') {
  readDataFromMultiFile(cliArgs);
}

if (cliArgs.method === 'readFromLookupFile') {
  readFromLookupFile(cliArgs);
}

if (cliArgs.method === 'importScenarios') {
  importScenarios(cliArgs);
}

if (cliArgs.method === 'importFeatures') {
  importFeatures(cliArgs);
}

if (cliArgs.method === 'importFeatureScenarios') {
  importFeatureScenarios(cliArgs);
}

if (cliArgs.method === 'importBrands') {
  importBrands(cliArgs);
}

if (cliArgs.method === 'importLocales') {
  importLocales(cliArgs);
}

if (cliArgs.method === 'importAll') {
  importAll(cliArgs);
}

if (cliArgs.method === 'importDeploymentData') {
  importDeploymentData(cliArgs);
}

if (cliArgs.method === 'importCredentials') {
  importCredentials(cliArgs);
}

if (cliArgs.method === 'importTPSCredentials') {
  importTPSCredentials(cliArgs);
}

if (cliArgs.method === 'importTestCoverage') {
  importTestCoverage(cliArgs);
}
