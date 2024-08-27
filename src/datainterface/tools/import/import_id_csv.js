const FileDownloadController = require('../../controllers/FileDownloadController');
const readFromIdFile = require('./import_id');
const importHelper = require('./import_helper');

const printHelp = () => {
  console.log(`
  Usage: node import_selector.js --method "uploadIdCSV" [options]

  uploadIdCSV method is used to upload your ID CSV files downloaded 
  using generateIdCSV from data_factory.js
  
  Options:
  The following options are mandatory.  
  --feature    Name of the Feature you want to upload your CSV files
  --filepath   Path of the CSV file you want to upload  
  --sourcefilename    Should be set from the job
  
  --help       Show this help message and exit
  --quiet      Not supported
  
  Examples:
  node import_selector.js --method "uploadIdCSV" --feature "Search" --filepath "Search_id_NA_1685354639294.csv" --sourcefilename "Search_id_NA_1685354639294.csv"
  `);
};

const uploadIdCSV = async (args) => {
  // node import_selector.js --method "uploadIdCSV" --feature "Search" --filepath "Search_id_NA_1685354639294.csv" --sourcefilename "Search_id_NA_1685354639294.csv"
  // node import_selector.js --method "uploadIdCSV" --feature "Search" --filepath "Search_id_global_1685361557632.csv" --sourcefilename "Search_id_global_1685361557632.csv"

  const { feature, help, sourcefilename: sourceFileName = '' } = args;
  const featureNameFormatted = feature.replace(' ', '_').toLowerCase();
  const region = sourceFileName
    ?.replace(featureNameFormatted, '')
    .split('_')[2];

  if (importHelper.doHelp(help)) {
    printHelp();
    return;
  }

  const { isValid, file } = await importHelper.isValidCSVFile({
    fileType: 'Id',
    feature,
    region,
    sourceFileName,
  });

  if (!isValid) {
    return;
  }

  await new Promise((resolve, reject) => {
    readFromIdFile(args, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });

  const objFC = new FileDownloadController();
  await objFC.updateDownloadDetails(file.downloadId);
  await objFC.invalidateDownloads(file);
};

module.exports = uploadIdCSV;
