const fs = require('fs');
const path = require('path');
const specGenerator = require('../../../automation/helix/tools/spec_generator');
const FeatureController = require('../../controllers/FeatureController');
const readFromIdFile = require('./import_id');
const readFromDataFile = require('./import_data');
const readFromLookupFile = require('./import_lookup');
const importDeploymentData = require('./import_deploymentdata');
const importHelper = require('./import_helper');

const printHelp = () => {
  console.log(`
  Usage: node import_selector.js --method "importAll" [options]

  importAll method is used to import deployment data, lookup file, 
  ID and data CSV files and generate spec files

  Options:
  The following options can be used. 
  --feature        Name of the Feature. This is optional, if omitted all the features are considered
  --features       Multiple features separated by comma like f1, f2 and region can be included
                   like f1::r1, f2::r2 for which spec files need to be generated.
                   Don't supply both "feature" and "features" parameters at the same time.
                   Please use only one of them
  --region         By default, all csv files will be uploaded. If specified, only files related to
                   that region will be uploaded. "region" param can be used only with "feature"
                   and not with "features" parameter
  --ignore-dd      Do not import deployment_data.js file
  --ignore-lookup  Do not import lookup.csv file
  --create-spec    By default spec files are not created, supply this param to create spec files

  --help           Show this help message and exit
  
  Examples:
  node import_selector.js --method "importAll"
  node import_selector.js --method "importAll" --create-spec
  node import_selector.js --method "importAll" --feature "Loyalty"
  node import_selector.js --method "importAll" --feature "Loyalty" --region "NA" --ignore-dd
  node import_selector.js --method "importAll" --features "SEO, Search::EMEA" --create-spec
  node import_selector.js --method "importAll" --feature "CMS" --ignore-lookup
  node import_selector.js --method "importAll" --feature "OAB" --ignore-lookup --ignore-dd --create-spec
  `);
};

async function importAll(args) {
  let {
    help,
    feature = '',
    features = [],
    region = '',
    ignoreDd,
    ignoreLookup,
    createSpec,
  } = args;

  const quiet = true;

  if (importHelper.doHelp(help)) {
    printHelp();
    return;
  }

  if (feature !== '' && features.length > 0) {
    throw new Error(
      'You cannot provide both the "feature" and "features" parameters at the same time. Please use only one of them'
    );
  }

  if (region !== '' && features.length > 0) {
    throw new Error(
      'You cannot provide "region" with "features" parameters instead use "feature'
    );
  }

  const dataFilesPath = path.resolve(
    __dirname,
    '../../..',
    'automation/helix/'
  );
  const lookupFilePath = path.resolve(__dirname, '..', '..');
  let featureCatalog = [];
  let featuresList = [];
  let featureRegionMaps = {};
  // eslint-disable-next-line node/no-unsupported-features/es-syntax
  let params = { ...args, quiet };

  if (ignoreDd === undefined) {
    console.log('Importing deployment data...');
    await new Promise((resolve, reject) => {
      importDeploymentData(params, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
    console.log('\n');
  }

  params = {
    filepath: path.normalize(`${lookupFilePath}/data/Lookup.csv`),
    quiet,
  };

  if (ignoreLookup === undefined) {
    console.log('Importing lookup file...');
    await new Promise((resolve, reject) => {
      readFromLookupFile(params, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
    console.log('\n');
  }

  if (features.length > 0) {
    features = features.split(',').map((feature) => feature.trim());
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

  if (feature === '') {
    // Fetch all the features
    featureCatalog = await new FeatureController().fetchFeatures();
  } else {
    featureCatalog = await new FeatureController().fetchFeatureByName(feature);
  }

  for (let i = 0; i < featureCatalog.length; i++) {
    const { featureName } = featureCatalog[i];
    const featureNameFormatted = featureName.replace(' ', '_').toLowerCase();

    if (features.length > 0 && !featuresList.includes(featureName)) {
      continue;
    }

    const csvFilePath = path.normalize(
      `${dataFilesPath}/specs/${featureNameFormatted}/data/`
    );

    if (!fs.existsSync(csvFilePath)) {
      continue;
    }

    const csvFiles = fs
      .readdirSync(csvFilePath)
      .filter((file) => path.extname(file) === '.csv');

    console.log(`Importing CSV files for ${featureName}`);

    for (let jCnt = 0; jCnt < csvFiles.length; jCnt++) {
      const filePath = csvFilePath + csvFiles[jCnt];
      const fileName = csvFiles[jCnt].toLowerCase();
      params = {
        filepath: filePath,
        feature: featureName,
        quiet,
      };

      if (featureRegionMaps[featureName] !== undefined) {
        const regions = Object.keys(featureRegionMaps[featureName]);

        const canUpload = regions.some((element) =>
          fileName.includes(element.toLowerCase())
        );
        if (!canUpload) {
          continue;
        }
      }

      if (
        region !== undefined &&
        !fileName.includes(region.toLocaleLowerCase())
      ) {
        continue;
      }

      if (fileName.includes('id')) {
        await new Promise((resolve, reject) => {
          readFromIdFile(params, (err, data) => {
            if (err) {
              reject(err);
            } else {
              resolve(data);
            }
          });
        });
      }

      if (fileName.includes('data')) {
        await new Promise((resolve, reject) => {
          readFromDataFile(params, (err, data) => {
            if (err) {
              reject(err);
            } else {
              resolve(data);
            }
          });
        });
      }
      console.log('\n');
    }
    // Generate spec files
    if (createSpec !== undefined) {
      if (features.length > 0) {
        const specificFeatures = features.filter((item) => {
          if (item.startsWith(featureName)) return item;
        });
        params = {
          features: specificFeatures,
          quiet,
        };
      } else {
        params = {
          feature: featureName,
          quiet,
          region,
        };
      }
      await specGenerator.generateSpecFiles(params);
    }
    // TODO: Handle ROM specific spec files
    // if (featureName.toLocaleLowerCase() === 'rom') {
    //   specGenerator.updateTestSet(featureName);
    // }
  }
}

module.exports = importAll;
