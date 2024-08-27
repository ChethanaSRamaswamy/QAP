const util = require('util');
const Util = require('../../../utilities/util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs');
const path = require('path');
const specGenerator = require('./spec_generator');
const FeatureController = require('../../../datainterface/controllers/FeatureController');

function getFirstFileFromSubfolders(folder) {
  const specFiles = [];
  const subfolders = fs
    .readdirSync(folder, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => path.join(folder, dirent.name));

  for (const subfolder of subfolders) {
    const files = fs
      .readdirSync(subfolder, { withFileTypes: true })
      .filter((dirent) => dirent.isFile() && dirent.name.endsWith('.spec'))
      .map((dirent) => dirent.name);

    if (files.length > 0) {
      const firstFile = path.join(subfolder, files[0]);
      specFiles.push(firstFile);
    }
    const subfolderSpecFiles = getFirstFileFromSubfolders(subfolder);
    specFiles.push(...subfolderSpecFiles);
  }
  return specFiles;
}

const validateSpecs = async (featureName) => {
  const specName = featureName.replace(' ', '_').toLowerCase();

  const specFolder = path.resolve(
    __dirname,
    '../',
    `specs/${specName}/specs/sitespecific/`
  );

  let msg = 'Not seeing any site specific specs';
  if (!fs.existsSync(specFolder)) {
    return { hasError: true, message: msg, specFolder };
  }

  const files = getFirstFileFromSubfolders(specFolder);

  if (files.length === 0) {
    return { hasError: true, message: msg, specFolder };
  }

  // set as 2 MB
  // eslint-disable-next-line no-magic-numbers
  const maxBuffer = 1024 * 1024 * 2;
  try {
    // const { stdout, stderr } = await exec(`gauge validate ${specFolder}`, {
    const cmd = `gauge validate ${files.join(' ')}`;
    const { stdout, stderr } = await exec(cmd, {
      maxBuffer,
    });

    if (stdout.includes('No errors found')) {
      return { hasError: false, message: stdout, specFolder };
    } else {
      // TODO: Not sure whether we need else block, need testing to validate
      // throw new Error(`Error executing gauge validate: ${stdout}`);
    }
    if (stderr !== '') {
      return { hasError: true, message: stderr, specFolder };
    }
  } catch (error) {
    if (error.stdout !== '') {
      console.log(error.stdout);
    }

    if (error.stderr !== '') {
      console.log(error.stderr);
    }

    // Refer ParseError and ValidationError in
    // https://docs.gauge.org/troubleshooting.html?os=linux&language=javascript&ide=vscode
    msg = `Error executing gauge validate`;
    return { hasError: true, message: msg, specFolder };
  }
};

const validateBuild = async (featuresList, disableMissingTags = false) => {
  // node build_validator.js --method validateBuild --features "Search"
  // node build_validator.js --method validateBuild --features "Store Locator, Search, GNAV Footer"
  // node build_validator.js --method validateBuild --features "Loyalty::NA, Search"
  // node build_validator.js --method validateBuild --features "Loyalty::NA, Search, Checkout::LATAM"
  // node build_validator.js --method validateBuild --features "All"
  // node build_validator.js --method validateBuild --features  "BOPIS::EMEA --disablemissingtags true
  try {
    let features;
    const errorMessages = {};
    const featureRegionMaps = {};
    const specCreationDetails = [];

    if (featuresList.length !== 0) {
      features = featuresList.map((f) => {
        const [feature, region] = f.featureName.split('::');
        if (region !== undefined) {
          if (featureRegionMaps[feature] === undefined) {
            featureRegionMaps[feature] = {};
          }
          featureRegionMaps[feature][region] = region;
        }
        return f;
      });
      // features = Util.removeDuplicateEntries(features);
    } else {
      // Get all the features
      features = await new FeatureController().fetchFeatures();
    }

    for (let i = 0; i < features.length; i++) {
      let { featureName } = features[i];
      const featureWithRegion = featureName;
      [featureName] = featureName.split('::');

      console.log(`Generating spec files for ${featureName}...`);

      let details;
      if (featureRegionMaps[featureName] !== undefined) {
        details = await specGenerator.generateSpecFiles({
          feature: '',
          features: [featureWithRegion],
          disableMissingTags,
          quiet: true,
        });
      } else {
        details = await specGenerator.generateSpecFiles({
          feature: featureName,
          disableMissingTags,
          quiet: true,
        });
      }

      specCreationDetails.push(details);

      console.log(`Validating ${featureName} spec files...`);

      errorMessages[featureName] = await validateSpecs(featureName);
      if (errorMessages[featureName].hasError) {
        console.log(`${featureName} was validated and it failed\n`);
      } else {
        console.log(`${featureName} was validated and it passed\n`);
      }
    }

    // console.log(specCreationDetails);
    let createdFilesCount = 0;
    let deletedFilesCount = 0;
    const msg = ['Build summary:'];

    for (let iCnt = 0; iCnt < specCreationDetails.length; iCnt++) {
      const item = specCreationDetails[iCnt];
      createdFilesCount += item.createdFilesCount;
      deletedFilesCount += item.deletedFilesCount;

      if (item.specFilesNotFound.length === 0) {
        continue;
      }
      for (const [f, r] of item.summary) {
        // disableMissingTags i true show disabled message
        if (disableMissingTags) {
          msg.push(
            `The following generic spec files are missing for ${f} and have been disabled`
          );
        } else {
          msg.push(`The following generic spec files are missing for ${f}`);
        }

        // eslint-disable-next-line no-unused-vars
        for (const [l, value] of r) {
          msg.push(...value.missingSpecs);
        }
      }
    }
    msg.push(`Created ${createdFilesCount} spec files`);
    msg.push(`Deleted ${deletedFilesCount} spec files`);

    const failedFeatures = [];
    for (const obj in errorMessages) {
      if (errorMessages[obj].hasError) {
        failedFeatures.push(obj);
      }
    }

    if (failedFeatures.length > 0) {
      msg.push('Build has failed for the following features');
      msg.push(failedFeatures.join('\n'));
      process.exitCode = 1;
    } else {
      msg.push('Build is successful');
    }

    console.log(msg.join('\n'));
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
};

const myArgs = process.argv.slice(2);
const cliArgs = Util.getCommandLineArgs(myArgs);

if (cliArgs.method === undefined) {
  throw new Error('The method name is missing, which is a mandatory parameter');
}

if (cliArgs.method === 'validateBuild') {
  if (cliArgs.features === undefined) {
    throw new Error('Features parameter is missing');
  }

  let featuresList = [];
  let disableMissingTags = true;

  if (cliArgs.disablemissingtags === undefined) {
    disableMissingTags = false;
  }

  // We are converting the features list to a list of objects because
  // if no input is supplied from CLI then we need to fetch the features from
  // DB which will be array of FeatureModel
  if (cliArgs.features !== undefined && cliArgs.features !== 'All') {
    featuresList = cliArgs.features.split(',').map((feature) => {
      return { featureName: feature.trim() };
    });
  }

  validateBuild(featuresList, disableMissingTags);
}

module.exports = { validateBuild };
