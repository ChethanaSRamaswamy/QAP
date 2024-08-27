const fs4 = require('fs');
const xlsx = require('xlsx');
const gds = gauge.dataStore.specStore;
const suiteStore = gauge.dataStore.suiteStore;
// const tempData = [];

beforeSuite(async () => {
  suiteStore.put('arrData', []);
  suiteStore.put('writeReportToExcel', 'N'); // N - Do not generate excel report, Y - generate the report
});

beforeSpec(async () => {
  gds.put('DSGenerateOrderReport', 'N'); // N - Do not generate CSV report, Y - generate the report
  gds.put('DSBrand', '');
  gds.put('DSLocale', '');
  gds.put('DSUserType', '');
  gds.put('DSOrderID', '');
  gds.put('DSFilename', '');

  // For ROM Scripts, we need to write in XL instead of CSV
  gds.put('DSGenerateROMOrderReport', 'N'); // N - Do not generate CSV report, Y - generate the report
  gds.put('DSROMSetNo', '0');
  gds.put(
    'DSROMRptSource',
    './helix-app/src/automation/report_templates/ROM_Automation_Report.xlsx'
  );
  gds.put('DSROMRptSheet', 'Automation_Report');

  // Location, Store - country validation report generation in xlsx
  gds.put('brand', '');
  gds.put('region', '');
  gds.put('country', '');
  gds.put('url', '');
  gds.put('result', '');
  gds.put('availableValues', '');
  gds.put('unavailableValues', '');
  gds.put('failureReason', '');
  gds.put('feature', '');
  gds.put('siteType', '');
});

afterSpec(async () => {
  let canGenerateOrderReport = gds.get('DSGenerateOrderReport');
  let canGenerateROMOrderReport = gds.get('DSGenerateROMOrderReport');
  const dataToPush = {
    brand: gds.get('brand'),
    region: gds.get('region'),
    country: gds.get('country'),
    url: gds.get('url'),
    result: gds.get('result'),
    availableValues: gds.get('availableValues'),
    unavailableValues: gds.get('unavailableValues'),
    failureReason: gds.get('failureReason'),
    feature: gds.get('feature'),
    siteType: gds.get('siteType'),
  };

  // tempData.push(dataToPush);
  // suiteStore.put('arrData').push(dataToPush);
  if (canGenerateROMOrderReport.toUpperCase() === 'Y') {
    // ROM reports are in XL format so DSGenerateROMOrderReport takes
    // more precedence than DSGenerateOrderReport
    writeROMRptToXL();
  } else if (canGenerateOrderReport.toUpperCase() === 'Y') {
    // Generating order report in CSV format
    writeOrderRptToCSV();
  }
});

afterSuite(async () => {
  let canGenerateExcelReport = suiteStore.get('writeReportToExcel');
  console.log('arrData: \n');
  console.log(suiteStore.get('arrData'));
  // suiteStore.put('arrData', tempData);
  const data = suiteStore.get('arrData');

  if (canGenerateExcelReport.toUpperCase() === 'Y') {
    await writeDataToExcel(data);
  }
});

function writeROMRptToXL() {
  // read from a XLS file
  let filename = gds.get('DSFilename') || 'rom_rpt.xlsx';
  let sourcefilename = gds.get('DSROMRptSource');
  let sheetName = gds.get('DSROMRptSheet');
  let setNo = gds.get('DSROMSetNo');

  filename = './reports/html-report/' + filename;

  let workbook = xlsx.readFile(sourcefilename);
  let worksheet = workbook.Sheets[sheetName];
  let rows = xlsx.utils.sheet_to_json(worksheet, { defval: '' });

  for (let k = 1; k < rows.length; k++) {
    let i = `H${k + 1}`;
    if (
      typeof worksheet[i] !== 'undefined' &&
      worksheet[i].v.toLowerCase() === `set-${setNo}`
    ) {
      // Found the matching row
      // Datetime DSBrand DSLocale DSUserType DSOrderID
      xlsx.utils.sheet_add_aoa(worksheet, [[getCurrentDatetime()]], {
        origin: `N${k + 1}`,
      });
      xlsx.utils.sheet_add_aoa(worksheet, [[gds.get('DSBrand')]], {
        origin: `O${k + 1}`,
      });
      xlsx.utils.sheet_add_aoa(worksheet, [[gds.get('DSLocale')]], {
        origin: `P${k + 1}`,
      });
      xlsx.utils.sheet_add_aoa(worksheet, [[gds.get('DSUserType')]], {
        origin: `Q${k + 1}`,
      });
      xlsx.utils.sheet_add_aoa(worksheet, [[gds.get('DSOrderID')]], {
        origin: `R${k + 1}`,
      });

      // worksheet[`R${k + 1}`].v = gds.get('DSOrderID')];
    }
  }
  // write to the file
  xlsx.writeFile(workbook, filename);
}

function writeOrderRptToCSV() {
  let rows =
    getCurrentDatetime() +
    ',' +
    gds.get('DSBrand') +
    ',' +
    gds.get('DSLocale') +
    ',' +
    gds.get('DSUserType') +
    ',' +
    gds.get('DSOrderID') +
    '\n';

  let filename = gds.get('DSFilename');

  //  write the content to the csv file
  if (fs4.existsSync(filename)) {
    fs4.appendFileSync(filename, rows, function (err) {
      console.log(err);
    });
  } // end of if(fs4.existsSync(filename))s
  else {
    header = ['Date Time,Brand,Locale, User Type,Order ID'];
    header = header.concat(rows).join('\n');
    fs4.writeFileSync(filename, header, 'utf8', function (err) {
      if (err) return console.log(err);
    });
  } //end of else part of if(fs4.existsSync(filename))
}

function getCurrentDatetime() {
  const today = new Date();
  const date = today.toISOString().slice(0, 10);
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  };
  const time = today.toLocaleTimeString('en-US', options);
  const dateTime = `${date} ${time}`;
  return dateTime;
}

async function writeDataToExcel(toWrite) {
  const titles = [
    'Brand',
    'Region',
    'Locale',
    'URL',
    'Result',
    'Available Values',
    'Unavailable Values',
    'Failure Reason',
    'Feature',
    'Site Type',
    'JIRA ID',
  ]; // Group data by feature and siteType
  const groupedData = {};

  toWrite.forEach((rowData) => {
    const { feature, siteType } = rowData;
    const sheetName = `${feature}_${siteType}`;
    if (!groupedData[sheetName]) {
      groupedData[sheetName] = [titles];
    }
    groupedData[sheetName].push(Object.values(rowData));
  });

  // File path for the Excel file
  const dateTime = new Date();
  /*const filePath = `Location_Store_Countries_Validation_${
    dateTime.getMonth() + 1
  }-${dateTime.getDate()}-${dateTime.getFullYear()}.xlsx`;
  */
  const filePath = `Location_Store_Countries_Validation.xlsx`;

  let workbook;
  if (fs4.existsSync(filePath)) {
    // File exists, read the existing data into a copy of the workbook
    const existingWorkbook = xlsx.readFile(filePath);
    workbook = xlsx.utils.book_new();
    Object.keys(existingWorkbook.Sheets).forEach((sheetName) => {
      const worksheet = xlsx.utils.sheet_to_json(
        existingWorkbook.Sheets[sheetName],
        { header: 1 }
      );
      if (groupedData[sheetName]) {
        groupedData[sheetName].forEach((row, index) => {
          // Skip the title row (already present in the existing sheet)
          if (index > 0) {
            worksheet.push(row);
          }
        });
      }
      const newWorksheet = xlsx.utils.aoa_to_sheet(worksheet);
      xlsx.utils.book_append_sheet(workbook, newWorksheet, sheetName);
    });
  } else {
    // File doesn't exist, create a new workbook and add sheets
    workbook = xlsx.utils.book_new();
    for (const sheetName in groupedData) {
      const worksheet = xlsx.utils.aoa_to_sheet(groupedData[sheetName]);
      xlsx.utils.book_append_sheet(workbook, worksheet, sheetName);
    }
  }

  // Write the workbook to a new file
  xlsx.writeFile(workbook, filePath);

  console.log(`Data has been written to ${filePath}`);
}
