const fs = require('fs');
const path = require('path');
const Util = require('../../../utilities/util');

async function generateApiTestDataCSV({ testData, siteData }) {
  if (testData.length === 0) {
    console.log('Not able to find any test data for the given input');
    process.exitCode = 1;
    return { filename: '', hasError: true };
  }

  let header = 'BrandLocale, brand, region, baseUrl';
  const pmVars = Object.keys(testData);
  for (let iCnt = 0; iCnt < pmVars.length; iCnt++) {
    header += ',' + pmVars[iCnt];
  }

  let rows = header + '\n';

  const { brandLocale, bCode, lCode, executionContext } = siteData;
  let row =
    brandLocale + ',' + bCode + ',' + lCode + ',' + executionContext.url;
  for (let jCnt = 0; jCnt < pmVars.length; jCnt++) {
    const key = pmVars[jCnt];
    row += ',' + testData[key];
    // TODO: Util.escapeCSVCellValue(idVal);
  }
  row += '\n';
  rows += row;

  const filename = `${(Math.random() + 1)
    .toString(36)
    .substring(7)}_${Date.now()}.csv`;

  const apiFile = path.resolve(filename);

  // Adding Byte Order Mark (BOM) to ensure proper Unicode handling
  const bom = '\ufeff';
  const contentWithBOM = bom + rows;
  fs.writeFileSync(apiFile, contentWithBOM, { encoding: 'utf8' });

  return { filename: apiFile, hasError: false };
}

module.exports = { generateApiTestDataCSV };
