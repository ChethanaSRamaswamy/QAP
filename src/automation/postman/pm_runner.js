// https://confluence.esteeonline.com/display/QAP/Integrating+Postman+with+Helix
// Parallelism - https://github.com/postmanlabs/newman/blob/develop/examples/parallel-collection-runs.js
// https://javascript.plainenglish.io/api-testing-comparison-cypress-vs-playwright-vs-jest-2ff1f80c5a7b
// https://confluence.esteeonline.com/display/DSDMW/Brand%2C+Region%2C+Country%2C+Language+IDs%2C+Codes+and+Abbreviations
// https://www.npmjs.com/package/newman#reporters

/*
Steps: Install the following packages
npm install -g newman
npm install -S newman-reporter-htmlextra 
*/

const fs = require('fs');
const path = require('path');
const Util = require('../../utilities/util');
const ApiDataAdapter = require('./adapters/api_data_adapter.js');
const { generateApiTestDataCSV } = require('./tools/data_factory');
const newman = require('newman');

const myArgs = process.argv.slice(2);
const cliArgs = Util.getCommandLineArgs(myArgs);

const printHelp = () => {
  console.log(`
  Usage: node pm_runner.js --method "runApiTests" [options]
  
    Executes your Postman collection
  
    Options:
    The following options can be used
  
    --feature   
    --features  
    --collection
    --region    
    --pctag     
    --mobiletag 
    --brand     
    --locale    
  
    --help      Show this help message and exit
    --quiet     Prints only summary
    
    Examples:
     node pm_runner.js --method "runApiTests" --feature "Checkout" --collection "amp_checkout_2.0" --brand "CL" --locale "FI"
    `);
};

// TODO: Include data generation mode alone in the input params
const runApiTests = async ({
  feature,
  features = [],
  region = '',
  pcTag = '',
  mobileTag = '',
  brandPrefix = '',
  localePrefix = '',
  collection,
  quiet = false,
}) => {
  // TODO: we are supporting only singular input, only feature not features

  // TODO: Hardcoded device for now, need to check with the team to
  // understand whether they maintain separate scripts for PC and mobile

  const tags = `${brandPrefix}-${localePrefix}-PC`;
  const data = await ApiDataAdapter.getScriptData(tags.split('-'), feature);

  // console.log(data);

  const collectionPath = path.resolve(
    __dirname,
    `./${feature.toLowerCase()}/${collection}.postman_collection`
  );
  const { filename, hasError } = await generateApiTestDataCSV(data);
  const htmlRpt = path.resolve(__dirname, `./newman`);

  if (hasError) {
    return;
  }

  newman
    .run({
      collection: collectionPath,
      iterationData: filename,
      reporters: ['htmlextra', 'cli'], // , 'html'
    })
    .on('start', function (err, args) {
      console.log('Running your collection...');
    })
    .on('done', function (err, summary) {
      if (err || summary.error) {
        console.error('Your collection run encountered an error');
      } else {
        console.log('Your collection run completed');
      }
      // Delete the temp csv input file
      fs.unlinkSync(filename);

      if (fs.existsSync(htmlRpt)) {
        const folderfiles = fs.readdirSync(htmlRpt);

        const rpt = folderfiles
          .filter((file) => file.endsWith('.html'))
          .map((file) => path.resolve(__dirname, 'newman', file));

        // Renaming the HTML report
        const rptFile = path.resolve(htmlRpt, 'report.html');

        fs.renameSync(rpt[0], rptFile);
      }
    })
    .on('exception', function (err, args) {
      console.log('Exception in your collection run');
    });
};

if (cliArgs.method === 'runApiTests') {
  const { help } = cliArgs;
  if (Util.doHelp(help)) {
    printHelp();
    return;
  }

  if (cliArgs.feature === undefined && cliArgs.features === undefined) {
    throw new Error(
      'Invalid arguments for runApiTests method, please verify the params'
    );
  }

  const feature = cliArgs.feature === undefined ? '' : cliArgs.feature;

  let features = [];
  if (cliArgs.features === undefined || cliArgs.features === 'All') {
    features = [];
  } else {
    features = cliArgs.features.split(',').map((item) => item.trim());
  }

  if (feature !== '' && features.length > 0) {
    throw new Error(
      'You cannot provide both the "feature" and "features" parameters at the same time. Please use only one of them'
    );
  }

  if (cliArgs.collection === undefined) {
    throw new Error(
      'Collection name is missing, please supply collection parameter'
    );
  }
  if (cliArgs.brand === undefined) {
    throw new Error('Brand prefix is missing');
  }
  if (cliArgs.locale === undefined) {
    throw new Error('Locale prefix is missing');
  }
  const param = {
    feature: feature,
    features: features,
    region: cliArgs.region,
    pcTag: cliArgs.pctag,
    mobileTag: cliArgs.mobiletag,
    brandPrefix: cliArgs.brand,
    localePrefix: cliArgs.locale,
    collection: cliArgs.collection,
    quiet: cliArgs.quiet,
  };

  runApiTests(param);
}
