const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
const BrandController = require('../../controllers/BrandController');
const AccessInformationController = require('../../controllers/AccessInformationController');
const importHelper = require('./import_helper');
const Logger = require('../../../utilities/logger');

const printHelp = () => {
  console.log(`
  Usage: node import_selector.js --method "importCredentials" [options]

  importCredentials method is used to upload password CSV file

  Options:
  The following options are mandatory.
  --filepath          Path of the CSV file you want to upload
  --preservefile      CSV file will be deleted by default after upload it, set this flag
                      if you want to keep the file

  The following option is required if you upload your file from a Jenkins job
  --sourcefilename    Should be set from the job

  --help       Show this help message and exit
  --quiet      Suppress verbose message

  Examples:
  node import_selector.js --method "importCredentials" --help
  node import_selector.js --method "importCredentials" --filepath "automation/data/credentials.csv" 
  node import_selector.js --method "importCredentials" --filepath "automation/data/credentials.csv" --preservefile 
  `);
};

const validateArgs = (filePath, sourceFileName) => {
  const fileName =
    sourceFileName === ''
      ? path.basename(filePath).toLowerCase()
      : sourceFileName.toLowerCase();
  if (!fileName.includes('credentials')) {
    throw new Error('Please ensure you are importing credentials CSV file');
  }
};

const importCredentials = async (args, callback) => {
  const {
    filepath: filePath = '',
    sourcefilename: sourceFileName = '',
    preservefile: preserveFile,
    help,
    quiet = false,
  } = args;

  if (importHelper.doHelp(help)) {
    printHelp();
    return;
  }
  validateArgs(filePath, sourceFileName);

  const brands = await new BrandController().fetchBrands();
  const indexBrands = importHelper.createLookup(
    brands,
    'brandName',
    'brandId',
    false
  );
  const records = [];

  // TODO: Can't we use Confluence API to fetch the data instead
  // of downloading the content as a CSV file and uploading it to DB
  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', async (row) => {
      records.push(row);
    })
    .on('end', async () => {
      const objAIC = new AccessInformationController();
      const MISSINGBRANDID = 0;
      // TODO: better to validate the XL file
      // and then truncate the table?
      // TODO: Should support partial uploads
      // // // await objAIC.deleteAccessInformation();

      for (let iCnt = 0; iCnt < records.length; iCnt++) {
        const row = records[iCnt];

        const username = row['Username']?.trim();
        const brand = row['Brands']
          .replace(/&|\.|,|\s/g, '')
          .toLocaleLowerCase()
          .trim();
        const password = row['Password'].trim();

        let brandId = importHelper.findIdByPrefix(brand, indexBrands, true);

        if (brandId === null) {
          brandId = MISSINGBRANDID;
        }

        Logger.log(`Importing ${brand}`, quiet);

        await objAIC.insertAccessInformation(
          brandId,
          brand,
          username,
          password
        );
      }

      if (preserveFile === undefined) {
        fs.unlinkSync(filePath);
      }

      if (callback !== undefined) {
        callback(null, 'ok');
      }
    });
};

/**
 * importTPSCredentials is used to insert a new 3rd party service secrets into the table.
 * @param {Object} params - Destructured parameters.
 * @param {String} params.toolName - Name of 3rd party service - should be from Util.TPSNames.
 * @param {String} params.displayName - Short name of the 3rd party service.
 * @param {String} params.username - Username to access the 3rd party service.
 * @param {String} params.password - Password to access the 3rd party service.
 * @param {String} params.env - Environment of the credentials. Defaulted to prod.
 * @returns {void}
 */
const importTPSCredentials = async (args) => {
  const {
    toolname: toolName,
    displayname: displayName,
    username,
    password,
    env,
  } = args;

  const objAIC = new AccessInformationController();
  await objAIC.insertTPSAccessInformation({
    toolName,
    displayName,
    username,
    password,
    env,
  });
  console.log(`Imported ${toolName}: ${username}`);
};

module.exports = { importCredentials, importTPSCredentials };
