const FeatureController = require('../../controllers/FeatureController');
const FileDownloadController = require('../../controllers/FileDownloadController');
const Util = require('../../../utilities/util');

async function isValidFeature(feature) {
  const featureId = await new FeatureController().getFeatureId(feature);
  return featureId === null ? false : true;
}

// Create index object for faster lookup
const createLookup = (arr, key, value, isCaseSenitiveSearch = true) => {
  return arr.reduce((acc, obj) => {
    const accumulator = acc;
    const temp = isCaseSenitiveSearch
      ? obj[key]
      : obj[key].replace(/&|\.|\s/g, '').toLocaleLowerCase();
    accumulator[temp] = obj[value];
    return accumulator;
  }, {});
};

const findIdByPrefix = (key, objs, canMatchPartialKey = false) => {
  let matchingKey = key;
  if (canMatchPartialKey) {
    const keys = Object.keys(objs);
    matchingKey = keys.find((item) => item.includes(key) || key.includes(item));
  }
  return objs[matchingKey] || null;
};

const findRecordByKey = (objs, brandLocale, key, value) => {
  if (objs.has(brandLocale)) {
    const records = objs.get(brandLocale);
    return records.find(
      (record) => record[key].toLowerCase() === value.toLowerCase()
    );
  }
  return null;
};

const doHelp = (help) => {
  return Util.doHelp(help);
};

const isValidCSVFile = async ({
  fileType,
  feature,
  region,
  sourceFileName,
}) => {
  const objFC = new FileDownloadController();
  const downloadInfo = await objFC.fetchDownloadDetails(
    fileType,
    '',
    feature,
    region
  );
  const { userId } = Util.getEnvironmentVariables();

  const file = downloadInfo.filter((item) => {
    return item.fileName === sourceFileName;
  })[0];

  let msg = '';
  if (file === undefined) {
    msg = `You cannot upload this file because it was not downloaded from Helix`;
  } else if (file.operation === 'Q') {
    msg = `You cannot upload this file because it was downloaded as readonly file`;
  } else if (file.uploadedOn !== null) {
    msg = `This file was already uploaded on ${file.uploadedOn} by ${file.uploadedBy}`;
  } else if (file.downloadedBy !== userId) {
    msg = `This file was downloaded by ${file.downloadedBy} so you can't upload it`;
  } else if (file.isOutdated) {
    msg = 'Your file is outdated, please download and try again';
  }

  if (msg !== '') {
    console.log(msg);
    process.exitCode = 1;
    return { isValid: false, file };
  }

  /* let usersWhoDownloaded = [];
  if (downloadInfo.length > 1) {
    for (let iCnt = 0; iCnt < downloadInfo.length; iCnt++) {
      const {
        fileName,
        operation,
        downloadedOn,
        downloadedBy,
        uploadedOn,
        uploadedBy,
        isOutdated,
      } = downloadInfo[iCnt];

      if (
        fileName !== file.fileName &&
        operation === 'C' &&
        downloadedOn > file.downloadedOn
      ) {
        usersWhoDownloaded.push(downloadedBy);
      }
    }
    if (usersWhoDownloaded.length > 0) {
      process.exitCode = 1;
      console.log(
        ` ${usersWhoDownloaded.join(
          ','
        )} downloaded following your download. Please re-download to complete your update`
      );
      return { isValid: false, file };
    }
  } */
  return { isValid: true, file };
};

module.exports = {
  findIdByPrefix,
  createLookup,
  findRecordByKey,
  isValidFeature,
  doHelp,
  isValidCSVFile,
};
