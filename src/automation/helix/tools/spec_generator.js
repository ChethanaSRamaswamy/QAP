const fs = require('fs');
const path = require('path');
const rl = require('readline');
const Util = require('../../../utilities/util');
const Logger = require('../../../utilities/logger');
const TestCoverageController = require('../../../datainterface/controllers/TestCoverageController');

const printHelp = () => {
  console.log(`
Usage: node spec_generator.js --method "generateSpecFiles" [options]

  Spec generator file will generate spec files

  Options:
  The following options can be used

  --feature   Single feature name for which spec files need to be generated 
  --features  Multiple features separated by comma like f1, f2 and region can be included like f1::r1, f2::r2 for which spec files need to be generated. Don't supply both "feature" and "features" parameters at the same time. Please use only one of them
  --region    By default, specs will be generated for all regions. If specified, specs will be generated for that region alone
  --pctag     By default, specs will be generated for all PC and MOBILE tags. If specified, specs will be generated for that PC tag alone
  --mobiletag By default, specs will be generated for all PC and MOBILE tags. If specified, specs will be generated for that MOBILE tag alone
  --brand     By default, specs will be generated for all brands. If specified, specs will be generated for that brand alone
  --locale    By default, specs will be generated for all locales. If specified, specs will be generated for that locale alone

  --help      Show this help message and exit
  --quiet     Prints only summary
  
  Examples:
   node spec_generator.js --method generateSpecFiles --feature "All"
   node spec_generator.js --method generateSpecFiles --feature "Loyalty" --region "NA"
   node spec_generator.js --method generateSpecFiles --features "Store Locator, Search"
   node spec_generator.js --method generateSpecFiles --features "Store Locator, Loyalty::NA"
   node spec_generator.js --method generateSpecFiles --feature "Loyalty" --pctag "GUPC" --brand "AV" --locale "NA"
   node spec_generator.js --method generateSpecFiles --feature "Loyalty" --region "NA" --pctag "GUPC" --mobiletag "GUMOB" --brand "AV" --locale "US"
  `);
};

function updateTestSet(feature, specFile, setNos) {
  let output = '';
  let prevLine = '';
  let outputSpecFile = '';
  // node .\spec_generator.js --method updateTestSet --feature ROM --setnos "6,7,8" --specfile "..\\automation\\specs\\ROM\\SPEC\\PC\\CLUSGUROMPC.spec"
  if (feature === 'ROM') {
    // Create a copy folder and copy the generated site spec, and
    // update the setno in the copied spec file
    let romSpecsDir = path.resolve(
      __dirname,
      '../',
      'specs/rom/specs/sitespecific/copy/pc/'
    );

    if (!fs.existsSync(romSpecsDir)) {
      fs.mkdirSync(romSpecsDir, { recursive: true });
    }
    romSpecsDir = path.resolve(
      __dirname,
      '../',
      'specs/rom/specs/sitespecific/copy/mobile/'
    );
    if (!fs.existsSync(romSpecsDir)) {
      fs.mkdirSync(romSpecsDir, { recursive: true });
    }
    if (specFile.toLowerCase().includes('pc')) {
      outputSpecFile = path.resolve(
        __dirname,
        '../',
        'specs/rom/specs/sitespecific/copy/pc/' + path.basename(specFile)
      );
    }
    if (specFile.toLowerCase().includes('mob')) {
      outputSpecFile = path.resolve(
        __dirname,
        '../',
        'specs/rom/specs/sitespecific/copy/mobile/' + path.basename(specFile)
      );
    }
  }

  console.log('specFile', specFile);
  console.log('outputSpecFile', outputSpecFile);
  const lineReader = rl.createInterface({
    input: fs.createReadStream(specFile),
  });

  lineReader.on('line', function (line) {
    let formattedLine = line;
    if (prevLine.includes('|set_no|') && formattedLine.includes('|------|')) {
      const sets = setNos.split(',');
      for (let i = 0; i < sets.length; i++) {
        formattedLine += `\n     |${sets[i]}    |`;
      }
    }
    if (!formattedLine.includes('|0     |')) {
      output += formattedLine + '\n';
    }
    prevLine = formattedLine;
  });

  lineReader.on('close', function () {
    fs.writeFileSync(outputSpecFile, output, { encoding: 'utf8' });
    console.log('Successfully updated to given sets.');
  });
}

function transformSpecData(specData, brandLocale, inputSpecFile) {
  const specDataLines = specData.split('\n');
  let outputData = '';

  // Check if Tag is already defined in the spec file and record the
  // tag value and the position
  const LEN = 5;
  let tagDefined = false;
  let tagValue = '';
  let tagPosition = -1;
  let tagLine = '';
  for (let i = 0; i < specDataLines.length; i++) {
    const firstFiveChar = specDataLines[i].substring(0, LEN);
    if (firstFiveChar === 'Tags:') {
      tagDefined = true;
      tagValue = specDataLines[i];
      tagValue = tagValue.substring(0, tagValue.length - 1); // The new line at the end is removed
      tagPosition = i;
    }
  }

  for (let i = 0; i < specDataLines.length; i++) {
    // The original tag line is skipped as new tag line is created
    if (i === tagPosition) continue;

    // For the Spec heading Brand-Locale is added for more readability in report ( starting with #<space> )
    if (specDataLines[i][0] === '#' && specDataLines[i][1] === ' ') {
      specDataLines[i] =
        '# ' +
        brandLocale +
        ' ' +
        specDataLines[i].substring(2, specDataLines[i].length);
    }

    outputData = outputData + specDataLines[i] + '\n';

    // If the last line added is the spec name, add the tag in the next line
    // The tag line will be as follows
    //     Tags: <Brand>, <Locale>, <SpecName>
    if (specDataLines[i][0] === '#' && specDataLines[i][1] === ' ') {
      // If tag is already defined, generated tag is added to it, else it is fresh tag

      if (tagDefined) {
        tagLine = tagValue + ', ';
      } else {
        tagLine = 'Tags: ';
      }

      // adding Brand and Locale to the tag line

      const tbrandLocale = brandLocale.replace('-', ', ');
      tagLine = tagLine + tbrandLocale + ', ';

      // adding SpecName to the tag line
      const specNamePath = inputSpecFile;
      let specName = specNamePath.replace(/^.*[\\/]/, ''); // To get only filename from full path
      specName = specName.replace('.spec', '').toUpperCase();
      tagLine = tagLine + specName;
      outputData = outputData + tagLine + '\n';
    }
  }

  return outputData;
}
function countFileChanges(map, feature, region, genericSpec, changeType) {
  const records = map;
  if (!records.has(feature)) {
    records.set(feature, new Map());
  }

  const featureRecords = records.get(feature);

  if (!featureRecords.has(region)) {
    featureRecords.set(region, {
      created: 0,
      deleted: 0,
      missingSpecs: [],
    });
  }

  const regionRecords = featureRecords.get(region);

  if (changeType === 'creation') {
    regionRecords.created++;
  } else if (changeType === 'deletion') {
    regionRecords.deleted++;
  } else if (changeType === 'missing') {
    const tmpArr = regionRecords.missingSpecs;
    tmpArr.push(path.basename(genericSpec));
    regionRecords.missingSpecs = Util.removeDuplicateEntries(tmpArr);
  }
}

async function generateSpecFiles({
  feature,
  features = [],
  region = '',
  pcTag = '',
  mobileTag = '',
  brandPrefix = '',
  localePrefix = '',
  disableMissingTags = false,
  quiet = false,
}) {
  // node spec_generator.js --method generateSpecFiles --feature "All"
  // node spec_generator.js --method generateSpecFiles --feature "Loyalty" --region "NA"
  // node spec_generator.js --method generateSpecFiles --features "Store Locator, Search"
  // node spec_generator.js --method generateSpecFiles --features "Store Locator, Loyalty::NA"
  // node spec_generator.js --method generateSpecFiles --feature "Loyalty" --pctag "GUPC" --brand "AV" --locale "US"
  // node spec_generator.js --method generateSpecFiles --feature "Loyalty" --region "NA" --pctag "GUPC" --mobiletag "GUMOB" --brand "AV" --locale "US"

  // Checking both feature and features param
  let featuresList = [];
  const featureRegionMaps = {};
  const summary = new Map();

  if (feature !== '') {
    featuresList.push(feature);
  }

  if (features.length > 0) {
    featuresList.push(
      ...features.map((f) => {
        const [fPart, rPart] = f.split('::');
        if (rPart !== undefined) {
          if (featureRegionMaps[fPart] === undefined) {
            featureRegionMaps[fPart] = {};
          }
          featureRegionMaps[fPart][rPart] = rPart;
        }
        return fPart;
      })
    );
  }

  featuresList = [...new Set(featuresList)];

  // [1, 0, 3] is considered as the coverage for Helix
  const helixCoverage = [
    Util.tenant.helix,
    Util.tenant.none,
    Util.tenant.helix + Util.tenant.elcelerate,
  ];

  const testCoverages =
    await new TestCoverageController().fetchTestCoverageInfo({
      brandPrefix,
      localePrefix,
      featuresList,
      pcTag,
      mobileTag,
      region,
      testCoverageStatus: helixCoverage,
    });

  if (testCoverages.length === 0) {
    console.log(
      'Not able to find any test coverage details for the given feature to generate the spec files'
    );
    process.exitCode = 1;
    return;
  }

  let createdFilesCount = 0;
  let deletedFilesCount = 0;

  let specFilesNotFound = [];
  let specFilePath = '';
  for (let i = 0; i < testCoverages.length; i++) {
    const tc = testCoverages[i];

    const tag = tc.featureScenarioModel.tag;
    const featureName = tc.featureScenarioModel.featureName;
    let regionName = tc.localeModel.region;
    const isTCActive = tc.isActive;
    const brandLocale =
      tc.brandModel.brandPrefix + '-' + tc.localeModel.localePrefix;

    if (
      featureRegionMaps[featureName] !== undefined &&
      featureRegionMaps[featureName][regionName] === undefined
    ) {
      continue;
    }

    const devices = [tag.toLowerCase()];
    const absolutePath = path.resolve(__dirname, '..');

    const featureNameFormatted = featureName.replace(' ', '_').toLowerCase();
    regionName = regionName.toLowerCase();

    specFilePath = path.join(
      absolutePath,
      `specs/${featureNameFormatted}/specs`
    );
    // specFilePath = `../automation/specs/${feature_name}/specs`;
    const gen = '/generic';
    const ss = '/sitespecific';
    const pc = '/pc';
    const mob = '/mobile';
    const global = '/global';
    const sPc = '/sitespecific/pc/';

    const tbrdLoc = brandLocale.replace('-', '').toLowerCase();
    for (let j = 0; j < devices.length; j++) {
      const tTag = devices[j];
      let inSpecPath = `${specFilePath}`;
      let inSpecFile = '';
      let outSpecPath = `${specFilePath}${sPc}${tTag}`;
      let outSpecFile = `${outSpecPath}/${tbrdLoc}${tTag}.spec`;

      inSpecPath = `${specFilePath}${gen}/${regionName}${pc}`;
      outSpecPath = `${specFilePath}${ss}/${regionName}${pc}/${tTag}`;
      if (tTag.includes('mob')) {
        inSpecPath = `${specFilePath}${gen}/${regionName}${mob}`;
        outSpecPath = `${specFilePath}${ss}/${regionName}${mob}/${tTag}`;
      }
      inSpecFile = `${inSpecPath}/${tTag}.spec`;
      outSpecFile = `${outSpecPath}/${tbrdLoc}${tTag}.spec`;

      if (
        !fs.existsSync(`${specFilePath}${gen}/${regionName}`) &&
        fs.existsSync(`${specFilePath}${gen}${global}`)
      ) {
        // Found a global folder, so using that spec

        inSpecPath = `${specFilePath}${gen}/${global}${pc}`;
        outSpecPath = `${specFilePath}${ss}/${global}${pc}/${tTag}`;
        if (tTag.includes('mob')) {
          inSpecPath = `${specFilePath}${gen}/${global}${mob}`;
          outSpecPath = `${specFilePath}${ss}/${global}${mob}/${tTag}`;
        }
        inSpecFile = `${inSpecPath}/${tTag}.spec`;
        outSpecFile = `${outSpecPath}/${tbrdLoc}${tTag}.spec`;
      }

      inSpecPath = path.normalize(inSpecPath);
      inSpecFile = path.normalize(inSpecFile);
      outSpecPath = path.normalize(outSpecPath);
      outSpecFile = path.normalize(outSpecFile);

      if (fs.existsSync(inSpecFile)) {
        if (isTCActive) {
          if (!fs.existsSync(outSpecPath)) {
            fs.mkdirSync(outSpecPath, { recursive: true });
          }

          const specData = fs.readFileSync(inSpecFile, { encoding: 'utf8' });
          const outputSpecData = transformSpecData(
            specData,
            brandLocale,
            inSpecFile
          );
          fs.writeFileSync(outSpecFile, outputSpecData, { encoding: 'utf8' });
          Logger.log('Output file ' + outSpecFile + ' is generated', quiet);
          createdFilesCount++;
          // countFileCreated(summary, feature_name, region_name);
          countFileChanges(
            summary,
            featureName,
            regionName,
            inSpecFile,
            'creation'
          );
        } else {
          if (fs.existsSync(outSpecFile)) {
            console.log('Deleting ', outSpecFile);
            fs.unlinkSync(outSpecFile);
            deletedFilesCount++;
            // countFileDeleted(summary, feature_name, region_name);
            countFileChanges(
              summary,
              featureName,
              regionName,
              inSpecFile,
              'deletion'
            );
          }
        }
      } else {
        if (isTCActive) {
          specFilesNotFound.push(inSpecFile);
          countFileChanges(
            summary,
            featureName,
            regionName,
            inSpecFile,
            'missing'
          );

          await new TestCoverageController().disableTestCoverage(
            tTag,
            tc.brandModel.brandId,
            tc.localeModel.localeId
          );
        }
      }
    }
  }

  for (const [f, r] of summary) {
    let deletedFileCount = 0;
    let createdFileCount = 0;
    console.log(`\n${f} spec files summary:`);
    for (const [l, value] of r) {
      deletedFileCount += value.deleted;
      createdFileCount += value.created;
      console.log(`- Created ${value.created} spec files for ${l}`);
      if (value.deleted > 0) {
        console.log(`- Deleted ${value.deleted} spec files for ${l}`);
      }
    }
    console.log(
      `Total: created ${createdFileCount} spec files and deleted ${deletedFileCount} spec files for ${f}\n`
    );
  }

  if (
    createdFilesCount === 0 &&
    deletedFilesCount === 0 &&
    specFilesNotFound.length === 0
  ) {
    console.log('No spec files were generated for the given input');
    process.exitCode = 1;
  }

  if (createdFilesCount > 0) {
    Logger.log(`${createdFilesCount} spec files were created`, quiet);
  }

  if (deletedFilesCount > 0) {
    Logger.log(`${deletedFilesCount} spec files were deleted`, quiet);
  }

  if (specFilesNotFound.length > 0) {
    specFilesNotFound = Util.removeDuplicateEntries(specFilesNotFound);
    let msg = '';
    if (disableMissingTags) {
      msg =
        '\nThe following generic spec files cannot be located and have been disabled\n';
    } else {
      msg = '\nThe following generic spec files cannot be located\n';
      process.exitCode = 1;
    }

    console.log(msg, specFilesNotFound.join('\n'));
  }

  return { summary, createdFilesCount, deletedFilesCount, specFilesNotFound };
}

async function deleteSpecFiles({ feature, region = '' }) {
  // node spec_generator.js --method "deleteSpecFiles" --feature "Store Locator"
  // node spec_generator.js --method "deleteSpecFiles" --feature "Checkout" --region "LATAM"

  const featureName = feature.replace(' ', '_').toLowerCase();
  const regionName = region.toLowerCase();
  const absolutePath = path.resolve(__dirname, '..');
  const specFilePath = path.join(
    absolutePath,
    `specs/${featureName}/specs/sitespecific/${regionName}`
  );

  if (fs.existsSync(specFilePath)) {
    fs.rmdirSync(specFilePath, { recursive: true });
    console.log('Deleted ', specFilePath);
  } else {
    console.log(`Path not found - ${specFilePath}`);
  }
}

const myArgs = process.argv.slice(2);
const cliArgs = Util.getCommandLineArgs(myArgs);
const { quiet } = cliArgs;
cliArgs.quiet = Util.beQuiet(quiet);

if (cliArgs.method === 'updateTestSet') {
  if (
    cliArgs.feature === undefined ||
    cliArgs.specfile === undefined ||
    cliArgs.setnos === undefined
  ) {
    throw new Error(
      'Invalid arguments for updateTestSet method, please verify the params'
    );
  }
  updateTestSet(cliArgs.feature, cliArgs.specfile, cliArgs.setnos);
}

if (cliArgs.method === 'generateSpecFiles') {
  const { help } = cliArgs;
  if (Util.doHelp(help)) {
    printHelp();
    return;
  }

  if (cliArgs.feature === undefined && cliArgs.features === undefined) {
    throw new Error(
      'Invalid arguments for generateSpecFiles method, please verify the params'
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
  const param = {
    feature: feature,
    features: features,
    region: cliArgs.region,
    pcTag: cliArgs.pctag,
    mobileTag: cliArgs.mobiletag,
    brandPrefix: cliArgs.brand,
    localePrefix: cliArgs.locale,
    quiet: cliArgs.quiet,
  };

  generateSpecFiles(param);
}

if (cliArgs.method === 'deleteSpecFiles') {
  if (cliArgs.feature === undefined) {
    throw new Error(
      'Invalid arguments for generateSpecFiles method, please verify the params'
    );
  }

  const feature = cliArgs.feature === undefined ? '' : cliArgs.feature.trim();

  const param = {
    feature: feature,
    region: cliArgs.region,
  };

  deleteSpecFiles(param);
}

module.exports = {
  generateSpecFiles,
  deleteSpecFiles,
  updateTestSet,
};
