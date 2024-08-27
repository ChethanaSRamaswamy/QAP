const assert = require('assert');
const Buffer = require('buffer');
const matchCondition = true;
const waitForParam = 1000;
const intervalBlink = 10;
const interval = 100;
const timeoutQuickBlink = 20;
const timeOutBlink = 900;
const timeOutQuick = 3000;
const timeOutNorm = 15000;
const timeOutLong = 50000;
const messages = {
  stepNotApplicable: 'This step is not applicable for this Brand/Locale',
  navigationIssue: 'NAVIGATION DID NOT HAPPEN!',
  serviceNameNotSame: 'SERVICE NAME IS NOT THE SAME!',
  serviceDurationNotSame: 'SERVICE DURATION IS NOT THE SAME!',
  serviceDescNotSame: 'SERVICE DESCRIPTION IS NOT THE SAME!',
  servicePriceNotSame: 'SERVICE PRICE IS NOT THE SAME!',
  appLocationNotSame: 'LOCATION IS NOT THE SAME!',
  appLocationOnVOAB: 'STORE NAME IS DISPLAYED FOR VOAB!',
  appLocationMissing: 'LOCATION IS MISSING!',
  appDateIsNotSame: 'DATE IS NOT THE SAME!',
  appTimeIsNotSame: 'TIME IS NOT THE SAME!',
  appTimeFormatNotSame: 'TIME FORMAT IS NOT THE SAME!',
  artistNameNotSame: 'ARTIST IS NOT THE SAME!',
  artistMissing: 'NO ARTIST NAME DISPLAYED ON PAGE!',
  myAppMissingCTA: 'MY APPOINTMENTS CTA IS EMPTY!',
  myAppNotExistCTA: 'MY APPOINTMENTS CTA IS EMPTY!',
  myAppMissingSection: 'MY APPOINTMENTS SECTION IS NOT VISIBLE!',
  myAppNoCurrApp: 'NO CURRENT APPOINTMENTS ARE VISIBLE!',
  myAppBookNewNotVisible: 'BOOK APPOINTMENT BUTTON IS NOT DISPLAYED!',
  myAppLinksDifferent: 'LINKS ARE DIFFERENT!',
  myAppCancelNotClosable: 'CLOSE BUTTON IS NOT VISIBLE!',
  myAppCancelNotExist: 'CLOSE BUTTON ON POPUP DOES NOT EXIST IN DOM!',
  myAppAppNotremoved: 'CANCELLED APPOINTMENT DID NOT DISSAPEAR FROM THE PAGE!',
  noGetDirections: 'NO GET DIRECTIONS LINK!',
  noZoomLink: 'NO ZOOM LINK',
  zoomLinkNotSame: 'ZOOM LINK IS NOT THE SAME!',
  phoneIsNotSame: 'PHONE IS INCCORECTLY TRANSFERRED!',
  cpfNotSame: 'CPF IS INCCORECTLY TRANSFERRED!',
  msgStoreStep1: 'Store Step 1',
  msgStoreStep4: 'Store Step 4',
  msgStoreStep5: 'Store Step 5',
  msgServiceStep2: 'Service Step 2',
  msgServiceStep4: 'Service Step 4',
  msgServiceStep5: '',
  msgDurationStep2: 'Duration Step 2',
  msgDurationStep4: 'Duration Step 4',
  msgDurationStep5: '',
  msgDescStep2: 'Description Step 2',
  msgDescStep4: 'Description Step 4',
  msgDescStep5: '',
  msgPriceStep2: 'Price Step 2',
  msgPriceStep4: 'Price Step 4',
  msgPriceStep5: '',
  modalMsgCredencialsNotMatch: 'These credentials do not match our records.',
  modalMsgFieldsRequired: 'The email field is required\nThe password field is required',
  modalMsgLogOut: 'You have successfully logged out.',
  msgNoResultsSearch: `No results found for '*'`,
  modalMsgAppDeleted: 'The appointment has been cancelled',
  modalMsgPaswordChangedExpired: 'TO DO',
  modalMsgPasswordNotMatch: 'The new password confirmation does not match.',
  modalMsgOldPasswordIncorrect: 'The old password supplied is incorrect',
  modalMsgOldPasswordExpired:
    'The password associated with this account has expired. Please set a new password.',
  modalMsgPasswordSuccessReset: 'Your password has been reset successfully',
  modalMsgCreated: (param) => `${param} created`,
  modalMsgUpdated: (param) => `${param} updated`,
  modalMsgDeleted: (param) => `${param} deleted`,
  modalMsgDeleted2: (param) => `${param} has been deleted`,
  modalMsgSelected: (param) => `${param} selected`,
  modalMsgUnSelected: (param) => `${param} unselected`,
  modalMsgArchived: (name, param) =>
    `${name.trim()} ${param.trim()} has been successfully archived.`,
  modalMsgReactivated: (name, param) =>
    `${name.trim()} ${param.trim()} has been successfully reactivated.`,
  modalTimeSlotCreated: 'Availability time slot created.',
  modalTimeSlotRemoved: 'Availability time slot deleted.',
  featureUpdated: (param) => `Feature "${param}" updated.`,
};
async function fetchEnable(t, pattern, type, stage) {
  // client.send('<domain>.<method>', params, sessionId, callback);
  await t.client().send('Fetch.enable', {
    // https://vanilla.aslushnikov.com/?Fetch.RequestStage
    patterns: [
      {
        urlPattern: pattern,
        resourceType: type,
        requestStage: stage,
      },
    ],
  });
}

async function getNetworkData(t, pattern, stage) {
  return new Promise(async (resolve, reject) => {
    let responseParsed;
    await t.client().on('Fetch.requestPaused', async (req) => {
      const { requestId } = req;
      const responseObj = await t.client().send('Fetch.getResponseBody', {
        requestId,
      });
      const response = new Buffer.Buffer.from(responseObj.body, 'base64').toString();
      try {
        responseParsed = JSON.parse(response);
      } catch (e) {
        const errorMessage = 'Error parsing response: ' + e.message;
        reject(errorMessage);
        return;
      }
      await t.client().send('Fetch.continueRequest', {
        requestId,
      });
      await t.client().send('Fetch.disable', {
        patterns: [
          {
            urlPattern: pattern,
            requestStage: stage,
          },
        ],
      });
      resolve(responseParsed);
    });
  });
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function cpf() {
  const numberRandom = (number) => Math.round(Math.random() * number);
  const createArray = (total, numero) => Array.from(Array(total), () => numberRandom(numero));
  const mod = (dividendo, divisor) =>
    Math.round(dividendo - Math.floor(dividendo / divisor) * divisor);
  const totalArray = 9;
  const n = 9;
  const [n1, n2, n3, n4, n5, n6, n7, n8, n9] = createArray(totalArray, n);
  let d1 = n9 * 2 + n8 * 3 + n7 * 4 + n6 * 5 + n5 * 6 + n4 * 7 + n3 * 8 + n2 * 9 + n1 * 10;
  d1 = 11 - mod(d1, 11);
  if (d1 >= 10) d1 = 0;
  let d2 =
    d1 * 2 + n9 * 3 + n8 * 4 + n7 * 5 + n6 * 6 + n5 * 7 + n4 * 8 + n3 * 9 + n2 * 10 + n1 * 11;
  d2 = 11 - mod(d2, 11);
  if (d2 >= 10) d2 = 0;
  return `${n1}${n2}${n3}.${n4}${n5}${n6}.${n7}${n8}${n9}-${d1}${d2}`;
}

function qatestdomain() {
  const chars = 'bchibcdefgddffwwwjklqmnopqrstuvwxyz1234567890';
  let string = '';
  for (let i = 0; i < 15; i++) {
    string += chars[Math.floor(Math.random() * chars.length)];
  }
  return string + '@qa.com';
}

function dateParserApp(dateToParse1, dateToParse2) {
  const date = new Date(dateToParse1);
  const date1 = new Date(dateToParse2);
  return date.getTime() === date1.getTime();
}

function trimAndLowerCase(stringText) {
  try {
    return stringText.trim().toLowerCase();
  } catch (e) {
    gauge.message(`Incorrect string! ${stringText}. ${e}`);
  }
}

function takeScreenshot(typeOfdevice) {
  if (typeOfdevice === 'PC' || typeOfdevice === 'Any') {
    gauge.screenshot();
  }
}

function changeToMigrationLink(linkToChange, migrationLink, defaultLink) {
  if (linkToChange.includes(migrationLink)) {
    assert(!matchCondition, 'MIGRATION LINK IS HARDCODED IN FLOW!');
    return false;
  } else {
    return linkToChange.replace(defaultLink, migrationLink);
  }
}

function getMonthNumber(monthName, monthdetails) {
  const montNameCompare = trimAndLowerCase(monthName);
  const monthsInLocale = monthdetails[0].split(',');
  const monthsInLocaleShort = monthdetails[1].split(',');
  // monthsInLocale = monthsInLocale.map((element) => {
  //   return trimAndLowerCase(element);
  // });
  const isSame = (element) =>
    montNameCompare.localeCompare(element, monthdetails[2], {
      sensitivity: 'base',
    }) === 0;
  let foundIndex = monthsInLocale.findIndex(isSame);
  if (foundIndex < 0) {
    // -1
    foundIndex = monthsInLocaleShort.findIndex(isSame);
    if (foundIndex < 0) {
      const optionsIndex = monthsInLocaleShort.findIndex(
        (element) => element.includes('/') // Will retur only first result
      );
      if (optionsIndex >= 0) {
        const options = monthsInLocaleShort[optionsIndex].split('/');
        for (let i = 0; i < options.length; i++) {
          monthsInLocaleShort[optionsIndex] = options[i];
          foundIndex = monthsInLocaleShort.findIndex(isSame);
          if (foundIndex >= 0) {
            break;
          }
        }
      }
    }
  }
  if (foundIndex >= 0) {
    // -1
    return foundIndex;
  } else {
    gauge.message('MONTH NOT FOUND!');
    return 'MONTH NOT FOUND!';
  }
  // Define a mapping of month names to their corresponding numbers
  // if (monthsInLocale.indexOf(montNameCompare) !== -1) {
  //   return monthsInLocale.indexOf(montNameCompare);
  // } else if (monthsInLocaleShort.indexOf(montNameCompare) !== -1) {
  //   return monthsInLocaleShort.indexOf(montNameCompare);
  // } else {
  //   error = 'MONTH NOT FOUND!';
  // }
}

function parseDate(date, monthdetails) {
  const dateString = trimAndLowerCase(date);
  const dateFormats = [
    // DD-MM-YYYY
    {
      type: 'numeric',
      format: /\d{2}-\d{2}-\d{4}/,
      partsOrder: [2, 1, 0],
      split: '-',
    },
    // YYYY/MM/DD
    {
      type: 'numeric',
      format: /\d{4}\/\d{2}\/\d{2}/,
      partsOrder: [0, 1, 2],
      split: '/',
    },
    // DD/MM/YYYY
    {
      type: 'numeric',
      format: /\d{2}\/\d{2}\/\d{4}/,
      partsOrder: [2, 1, 0],
      split: '/',
    },
    // D MonthName YYYY Brasil segunda-feira, 17 de jul, de 2023
    {
      type: 'string',
      format: /(\d{1,2}) de ([a-zA-Z]+) de (\d{4})/u,
      partsOrder: [2, 1, 0],
      split: 'de',
    },
    // D MonthName YYYY
    {
      type: 'string',
      format: /\d{1,2}\s\w+\s\d{4}/u,
      partsOrder: [2, 1, 0],
      split: ' ',
    },
    // MonthName D YYYY
    {
      type: 'string',
      format: /\w+\s\d{1,2}\s\d{4}/u,
      partsOrder: [2, 0, 1],
      split: ' ',
    },
    // MonthName Drd/th YYYY
    {
      type: 'string',
      format: /\w+\s\d{1,2}[a-zA-Z]{2}\s\d{4}/u,
      partsOrder: [2, 0, 1],
      split: ' ',
    },
    // MonthName Drd/th YYYY
    {
      type: 'string noYear',
      format: /\w+\s\d{1,2}[a-zA-Z]{2}/u,
      partsOrder: [2, 0, 1],
      split: ' ',
    },
    // YYYY MonthName D - Taiwan 星期一, 2023年 七月 17日 - 13:00
    {
      type: 'string',
      format: /\d{4}年\s[一二三四五六七八九十]+月\s\d{1,2}日/u,
      partsOrder: [0, 1, 2],
      split: ' ',
    },
    // YYYY Month D CHINA NO SPACE 星期一, 2023年7月17日-14:30
    {
      type: 'numeric',
      format: /\d{4}年\d{1,2}月\d{1,2}日/u,
      partsOrder: [0, 1, 2],
      split: /\D/,
    },
    // YYYY MonthName D - JAPAN 2023年7月17日
    {
      type: 'numeric',
      format: /\d{4}年\d{1,2}月\d{1,2}日/u,
      partsOrder: [0, 1, 2],
      split: ' ',
    },
    // YYYY Month D - KOREA 2023년 7월 16일
    {
      type: 'numeric',
      format: /\d{4}년\s\d{1,2}월\s\d{1,2}일/u,
      partsOrder: [0, 1, 2],
      split: ' ',
    },
    // Month D YYYY - KOREA 7월 16일 2023
    {
      type: 'numeric',
      format: /\d{1,2}월\s\d{1,2}일\s\d{4}/u,
      partsOrder: [2, 0, 1],
      split: ' ',
    },
    // Israel יום שלישי 19 בספט׳ 2023 -> D/M/Y
    {
      type: 'string',
      format: /\d{1,2}\s\D{3,6}\s\d{4}/u,
      partsOrder: [2, 1, 0],
      split: ' ',
    },
    // Israel ספט׳ 19 2023 -> M/D/Y
    {
      type: 'string',
      format: /\D{3,6}\s\d{1,2}\s\d{4}/u,
      partsOrder: [2, 0, 1],
      split: ' ',
    },
    // D MonthName YYYY Greek ΔΕΥΤΕΡΑ 17 ΙΟΥΛ 2023
    {
      type: 'string',
      format: /\d{1,2}\s\D+\s\d{4}/u,
      partsOrder: [2, 1, 0],
      split: ' ',
    },
  ];
  let cleanDate = dateString.replace(/[,.]/gi, ' ').replace(/\s\s/gi, ' ');
  for (const { type, format, partsOrder, split } of dateFormats) {
    if (cleanDate.match(format)) {
      cleanDate = cleanDate.match(format);
      cleanDate = cleanDate.toString();
      const parts = cleanDate.split(split);
      const day = parseInt(parts[partsOrder[2]], 10);
      let month;
      if (type === 'string' || type === 'string noYear') {
        month = getMonthNumber(parts[partsOrder[1]], monthdetails);
      } else {
        month = parseInt(parts[partsOrder[1]], 10) - 1;
      }
      let year;
      if (type === 'string noYear') {
        year = new Date().getFullYear();
      } else {
        year = parseInt(parts[partsOrder[0]], 10);
      }
      return new Date(year, month, day);
    }
  }
  gauge.message('UNKNOWN DATE FORMAT!');
  return date; // Unknown date format
}

function compareDates(date1, date2, where1, where2, monthdetails) {
  const parsedDate1 = parseDate(date1, monthdetails);
  const parsedDate2 = parseDate(date2, monthdetails);
  const message =
    parsedDate1.getTime() === parsedDate2.getTime()
      ? `Date on ${where1}: ${date1}\n is same as\n ${where2}: ${date2}`
      : `Date on ${where1}: ${date1}\n is NOT same as\n ${where2}: ${date2}`;
  gauge.message(message);

  return parsedDate1.getTime() === parsedDate2.getTime();
}

function parseTime(time) {
  let timeString = trimAndLowerCase(time);
  timeString = timeString.replace(/\s\s/gi, ' ');
  // FORMATS MUST BE ORDERED FROM MOST SPECIFIC -> MOST GENERIC
  const timeFormats = [
    // 8:00 / 08:00 + AM/PM
    {
      type: 'am/pm',
      format: /(0?[1-9]|1[0-2]):[0-5][0-9]\s?(am|pm)/i,
      split: ':',
    },
    // 8h00 / 08h00 + AM/PM
    {
      type: 'am/pm',
      format: /(0?[1-9]|1[0-2])h[0-5][0-9]\s?(am|pm)/i,
      split: 'h',
    },
    // 8:00 / 08:00
    { type: 'standard', format: /(0?[1-9]|[0-2][0-9]):[0-5][0-9]/, split: ':' },
    // 8h00 / 08h00
    {
      type: 'france',
      format: /(0?[1-9]|[0-2][0-9])h[0-5][0-9]\s?/i,
      split: 'h',
    },
    // Only hour and ends the string
    { type: 'hour', format: /(0?[1-9]|[0-2][0-9])$/, split: '' },
    // Only hour + AM/PM and ends the string
    { type: 'hour am/pm', format: /(0?[1-9]|1[0-2])\s?(am|pm)$/i, split: '' },
  ];
  for (const { type, format } of timeFormats) {
    if (timeString.match(format)) {
      timeString = timeString.match(format);
      timeString = timeString.toString();
      timeString = timeString.split(',')[0];
      const clearTime = timeString;
      if (type === 'am/pm') {
        timeString = timeString.replace(/\s/gi, '');
        timeString =
          timeString.slice(0, timeString.length - 2) +
          ' ' +
          timeString.slice(timeString.length - 2, timeString.length);
      } else if (type === 'hour am/pm') {
        timeString = timeString.replace(/\s/gi, '');
        timeString =
          timeString.slice(0, timeString.length - 2) +
          ':00' +
          ' ' +
          timeString.slice(timeString.length - 2, timeString.length);
      } else if (type === 'hour') {
        timeString = timeString + ':00';
      } else if (type === 'france') {
        timeString = timeString.replace('h', ':');
      }
      return [timeString, clearTime];
    }
  }
  return [time, time]; // Unknown time format
}

// Only time must be separate starting time.
function compareTimes(time1, time2, where1, where2) {
  const timeParsed1 = parseTime(time1);
  const timeParsed2 = parseTime(time2);
  const timeDifference =
    new Date('December 17, 1995 ' + timeParsed1[0]) -
    new Date('December 17, 1995 ' + timeParsed2[0]);
  const timeDifferenceInMinutes = timeDifference / 1000 / 60;
  const message =
    timeDifferenceInMinutes === 0
      ? `Time on ${where1}: ${timeParsed1[1]}\n is same as\n ${where2}: ${timeParsed2[1]}`
      : `Time on ${where1}: ${timeParsed1[1]}\n is NOT same as\n ${where2}: ${timeParsed2[1]}`;
  gauge.message(message);
  return timeDifferenceInMinutes === 0;
}

// TO DO AGAAA
function compareVal(val1, val2, msg1, msg2, langSensitive) {
  let result;
  const trimAndLow1 = trimAndLowerCase(val1.toString());
  const trimAndLow2 = trimAndLowerCase(val2.toString());
  if (langSensitive) {
    result =
      trimAndLow1.localeCompare(trimAndLow2, langSensitive, {
        sensitivity: 'base',
      }) === 0;
  } else {
    result = trimAndLow1 === trimAndLow2;
  }
  if (msg1 && msg2) {
    const message =
      result === true
        ? `${msg1}: ${val1}\n is same as\n ${msg2}: ${val2}`
        : `${msg1}: ${val1}\n is NOT same as\n ${msg2}: ${val2}`;
    gauge.message(message);
  }
  return result;
}

function compareUserNameMerged(fullnameActual, lastNameActual, fullnameExpected) {
  const names = fullnameExpected.split(' ');
  const firstName = names[0];
  let lastName = '';
  if (names.length > 2) {
    lastName = `${names[1]} ${names[2]}`;
  } else {
    lastName = `${names[1]}`;
  }
  if (!compareVal(fullnameActual, fullnameExpected, 'Expected fullname', 'Acctual fullname')) {
    return (
      compareVal(fullnameActual, firstName, 'Acctual name', 'Expected name') &&
      compareVal(lastNameActual, lastName, 'Acctual last name', 'Expected last name')
    );
  } else {
    return true;
  }
}

function compareUserNameSeparate(
  firstnameActual,
  firstnameExpected,
  lastnameActual,
  lastnameExpected
) {
  return (
    compareVal(firstnameActual, firstnameExpected, 'Acctual name', 'Expected name') &&
    compareVal(lastnameActual, lastnameExpected, 'Acctual last name', 'Expected last name')
  );
}

function calculateTimeDiff(endDay, endTime, startDay, startTime) {
  const timeDifference = new Date(endDay + ' ' + endTime) - new Date(startDay + ' ' + startTime);
  const timeDifferenceInMunutes = timeDifference / 1000 / 60;
  return timeDifferenceInMunutes;
}

async function ifExists(t, selector, retry, timeout) {
  return await (await t.$(selector)).exists(retry, timeout);
}

async function existanceCheck(t, selector, timeout) {
  await assert.ok(
    await (await t.$(selector)).exists(intervalBlink, timeout),
    `${selector} DOES NOT EXIST!`
  );
}

async function ifVisible(t, selector, retry, timeout) {
  if (await (await t.$(selector)).exists(retry, timeout)) {
    await t.evaluate(await t.$(selector), (ele) => {
      ele.scrollIntoViewIfNeeded(false);
    });
    return await (await t.$(selector)).isVisible(retry, timeout);
  } else {
    return false;
  }
}

async function getElementsList(t, selector) {
  return await (await t.$(selector)).elements();
}

async function popUpClose(t, selector) {
  // To short-circut non-existance
  if (await ifExists(t, selector, 0, 0)) {
    let elems = await getElementsList(t, selector);
    for (let i = 0; i < elems.length; i++) {
      if (await (await elems[i]).isVisible(0, 0)) {
        // Will be clicked for remaining existing elements
        await t.evaluate(
          await elems[i],
          (ele) => {
            ele.focus();
            ele.click();
          },
          { waitForNavigation: false, waitForEvents: ['DOMContentLoaded'] }
        );
        elems = await getElementsList(t, selector);
      }
    }
  }
}

// Substring url on lower env to due error: "Malformed URL was passed to the URL constructor. Error URI.Parde."

async function goToPage(t, popups, url, loadCheckSelector, navigation, device) {
  await t.goto(url, {
    waitForNavigation: navigation,
    waitForEvents: ['DOMContentLoaded'],
  });
  if (await (await t.$(loadCheckSelector)).exists(interval, timeOutLong)) {
    gauge.message('Navigated to: ' + (await t.currentURL()));
  } else {
    gauge.message(await t.currentURL());
    assert(!matchCondition, 'NAVIGATION DID NOT HAPPEN!');
  }
  await popUpClose(t, popups[0]);
  await popUpClose(t, popups[1]);
  takeScreenshot(device);
}

async function makeVisible(t, element, eleIndex) {
  if (eleIndex === null || eleIndex === undefined) {
    await t.evaluate(await element, (ele) => {
      ele.scrollIntoView({
        behavior: 'instant',
        block: 'center',
        inline: 'nearest',
      });
    });
  } else {
    await t.evaluate(await element[eleIndex], (ele) => {
      ele.scrollIntoView({
        behavior: 'instant',
        block: 'center',
        inline: 'nearest',
      });
    });
  }
}

async function makeVisibleifNeeded(t, element, eleIndex) {
  if (eleIndex === null || eleIndex === undefined) {
    await t.evaluate(await element, (ele) => {
      ele.scrollIntoViewIfNeeded(false);
    });
  } else {
    await t.evaluate(await element[eleIndex], (ele) => {
      ele.scrollIntoViewIfNeeded(false);
    });
  }
}
// TO DO PRZEROBIC JEDNAK NA 2 WSPOLNE DLA APPHQ I OAB
async function closePopupAndClickSelector(t, popupsArr, selector, navigation, method) {
  const cachedEle = await t.$(selector);
  await popUpClose(t, popupsArr[0]);
  await popUpClose(t, popupsArr[1]);
  await makeVisible(t, cachedEle, null);
  if (method === 'js') {
    await t.evaluate(
      await cachedEle,
      (ele) => {
        // ele.focus();
        ele.click();
      },
      { waitForNavigation: navigation, waitForEvents: ['DOMContentLoaded'] }
    );
  } else {
    await t.click(await cachedEle, {
      waitForNavigation: navigation,
      waitForEvents: ['DOMContentLoaded'],
    });
  }
}

async function closePopupAndClickElement(t, popups, selector, eleIndex, navigation, method) {
  const cachedEle = await getElementsList(t, selector);
  await popUpClose(t, popups[0]);
  await popUpClose(t, popups[1]);
  await makeVisible(t, cachedEle, eleIndex);
  if (method === 'js') {
    await t.evaluate(
      await cachedEle[eleIndex],
      (ele) => {
        // ele.focus();
        ele.click();
      },
      { waitForNavigation: navigation, waitForEvents: ['DOMContentLoaded'] }
    );
  } else {
    await t.click(await cachedEle[eleIndex], {
      waitForEvents: ['DOMContentLoaded'],
      waitForNavigation: navigation,
    });
  }
}

async function closePopupAndClickInLoop(t, popups, selector, param, navigation, doStuff) {
  const cachedEle = await getElementsList(t, selector);
  const res = [];
  for (let i = param; i < cachedEle.length; i++) {
    await popUpClose(t, popups[0]);
    await popUpClose(t, popups[1]);
    await makeVisible(t, cachedEle, i);
    if (doStuff) {
      res.push(await doStuff(selector, 0));
    }
    await t.click(await cachedEle[i], {
      waitForEvents: ['DOMContentLoaded'],
      waitForNavigation: navigation,
    });
  }
  if (doStuff) {
    return res;
  }
}

async function scrollToAndClickSelector(t, selector, navigation, method) {
  const cachedEle = await t.$(selector);
  // makevisible is needed to chnage region for user do not touch!
  await makeVisibleifNeeded(t, cachedEle, null);
  if (method === 'js') {
    await t.evaluate(
      await cachedEle,
      (ele) => {
        // ele.focus();
        ele.click();
      },
      { waitForNavigation: navigation, waitForEvents: ['DOMContentLoaded'] }
    );
  } else {
    await t.click(await cachedEle, {
      waitForNavigation: navigation,
      waitForEvents: ['DOMContentLoaded'],
    });
  }
}

async function scrollToAndClickElement(t, selector, eleIndex, navigation, method) {
  const cachedEle = await getElementsList(t, selector);
  await makeVisibleifNeeded(t, cachedEle, eleIndex);
  if (method === 'js') {
    await t.evaluate(
      await cachedEle[eleIndex],
      (ele) => {
        // ele.focus();
        ele.click();
      },
      { waitForNavigation: navigation, waitForEvents: ['DOMContentLoaded'] }
    );
  } else {
    await t.click(await cachedEle[eleIndex], {
      waitForEvents: ['DOMContentLoaded'],
      waitForNavigation: navigation,
    });
  }
}

async function scrollToAndClickInLoop(t, selector, start, stop, navigation, doStuff) {
  const cachedEle = await getElementsList(t, selector);
  const res = [];
  let end;
  if (stop === 0) {
    end = cachedEle.length;
  } else {
    end = stop;
  }
  for (let i = start; i < end; i++) {
    await makeVisibleifNeeded(t, cachedEle, i);
    if (doStuff) {
      res.push(await doStuff(t, selector, 0));
    }
    await t.click(await cachedEle[i], {
      waitForEvents: ['DOMContentLoaded'],
      waitForNavigation: navigation,
    });
  }
  if (doStuff) {
    return res;
  }
}

async function clickModuleAppHQ(t, subPageBtnToGo, status) {
  let visibility;
  // Elements exist in DOM but have display none
  if (await ifExists(t, subPageBtnToGo, interval, timeOutQuick)) {
    const height = await t.evaluate(await t.$(subPageBtnToGo), (ele) => ele.offsetHeight);
    if (height > 0) {
      await t.evaluate(
        await t.$(subPageBtnToGo),
        (ele) => {
          ele.click();
        },
        { waitForNavigation: true }
      );
      visibility = 'visible';
    } else {
      visibility = 'invisible';
    }
  } else {
    visibility = 'invisible';
  }
  if (visibility === status) {
    gauge.message('Navigation to module successul');
  } else {
    assert(!matchCondition, `THIS MODULE SHOULD BE ${status} FOR THIS USER!`);
  }
}

async function writeIntoLoop(t, testDataArr) {
  for (let i = 0; i < testDataArr.length; i++) {
    const cachedEle = await t.$(testDataArr[i].loc);
    await makeVisible(t, cachedEle, null);
    await t.focus(cachedEle, { waitForNavigation: false });
    await t.clear(cachedEle, { waitForNavigation: false });
    await t.write(testDataArr[i].data, t.into(cachedEle), {
      waitForNavigation: false,
    });
  }
}

async function writeInto(t, testData, selector) {
  const cachedEle = await t.$(selector);
  await makeVisible(t, cachedEle, null);
  await t.focus(cachedEle, { waitForNavigation: false });
  await t.clear(cachedEle, { waitForNavigation: false });
  await t.write(testData, t.into(cachedEle, { waitForNavigation: false }));
}

async function scrollToAndWriteInto(t, testData, selector) {
  const cachedEle = await t.$(selector);
  await makeVisibleifNeeded(t, cachedEle, null);
  await t.focus(cachedEle, { waitForNavigation: false });
  await t.clear(cachedEle, { waitForNavigation: false });
  await t.write(testData, t.into(cachedEle, { waitForNavigation: false }));
}

async function getText(t, selector, eleIndex) {
  if (eleIndex === undefined) {
    const cachedEle = await t.$(selector);
    await makeVisible(t, cachedEle, null);
    return await cachedEle.text();
  } else {
    const cachedEle = await getElementsList(t, selector);
    if (eleIndex === 'all') {
      const res = [];
      for (let i = 0; i < cachedEle.length; i++) {
        res.push(await cachedEle[i].text());
      }
      return res.toString();
    } else {
      await makeVisible(t, cachedEle, eleIndex);
      return await cachedEle[eleIndex].text();
    }
  }
}

async function getTextClear(t, selector, eleIndex) {
  if (eleIndex === undefined) {
    const cachedEle = await t.$(selector);
    await makeVisible(t, cachedEle, null);
    let text = await cachedEle.text();
    text = text.replace('\n', '').trim();
    return text;
  } else {
    const cachedEle = await getElementsList(t, selector);
    if (eleIndex === 'all') {
      const res = [];
      for (let i = 0; i < cachedEle.length; i++) {
        let text = await cachedEle[i].text();
        text = text.replace('\n', '').trim();
        res.push(text);
      }
      return res.toString();
    } else {
      await makeVisible(t, cachedEle, eleIndex);
      let text = await cachedEle[eleIndex].text();
      text = text.replace('\n', '').trim();
      return text;
    }
  }
}

async function getValue(t, selector, eleIndex) {
  if (eleIndex === undefined) {
    const cachedEle = await t.$(selector);
    return await t.evaluate(cachedEle, (ele) => ele.value);
  } else {
    const cachedEle = await getElementsList(t, selector);
    if (eleIndex === 'all') {
      const res = [];
      for (let i = 0; i < cachedEle.length; i++) {
        res.push(await t.evaluate(await cachedEle[i], (ele) => ele.value));
      }
      return res.toString();
    } else {
      await makeVisible(t, cachedEle, eleIndex);
      return await t.evaluate(await cachedEle[eleIndex], (ele) => ele.value);
    }
  }
}

async function getAttributeSelector(t, selector, attribute) {
  return await (await t.$(selector)).attribute(attribute);
}

async function getAttributeElement(ele, eleIndex, attribute) {
  return await ele[eleIndex].getAttribute(attribute);
}

function composeError(multipleError, msg) {
  let errorArr;
  if (multipleError) {
    errorArr = [multipleError];
  } else {
    errorArr = [];
  }
  errorArr.push(msg);
  const errorClean = errorArr.toString().toUpperCase();
  return errorClean;
}

// TO DO AGA tutaj musisz pokombinowac z tym errorem jesli to a byc w osonym pliku
async function checkFieldError(t, selector, errorMessage, fieldName) {
  let error = '';
  if (await (await t.$(selector)).exists(interval, timeOutBlink)) {
    const errorText = await getText(t, selector);
    if (errorText !== '' && !errorText.includes('::elc_')) {
      gauge.message(`${errorMessage}: ${errorText}`);
    } else {
      error = composeError(error, `ERROR MESSAGE FOR ${fieldName} FIELD IS NOT DISPLAYED PROPERLY`);
    }
  } else {
    error = composeError(error, `ERROR MESSAGE FOR ${fieldName} FIELD IS NOT DISPLAYED`);
  }
  return error;
}

// TO DO else if for empty PROD
let isContentMissing = false;
async function searchMissingContent(t) {
  let missingContentID;
  if (await (await t.text('::elc_')).exists(interval, timeOutQuick)) {
    const missingContentElements = await (await t.text('::elc_')).get();
    const missingCount = missingContentElements.length;
    for (let i = 0; i < missingCount; i++) {
      await t.highlight(await missingContentElements[i]);
      missingContentID = await getText(t, missingContentElements, i); // <-- TO DO align with new approach
      gauge.message(missingContentID);
      if (await (await missingContentElements[i]).isVisible()) {
        gauge.message('Missing content');
        isContentMissing = true;
      }
      gauge.screenshot();
    }
  }
  return isContentMissing;
}

async function isChecked(t, element, eleIndex) {
  if (eleIndex === null || eleIndex === undefined) {
    return await t.evaluate(await t.$(element), ele => ele.checked);
  } else {
    return await t.evaluate(await element[eleIndex], ele => ele.checked);
  }
}

async function waitForNotExists(t, selector, timeout) {
  await t.waitFor(async () => {
    return !(await (await t.$(selector)).exists(0, 0));
  }, timeout);
}

async function waitForExists(t, selector, timeout) {
  await t.waitFor(async () => {
    return (await (await t.$(selector)).isVisible(0, 0));
  }, timeout);
}

function getRandomNumber(min, max, step) {
  return step * Math.floor(Math.random() * ((max - min + step) / step)) + min;
}

async function checkMessageOnModal(t, popup, closeicon,container,expectedTxt) {
  if (await (await t.$(popup)).exists(intervalBlink, timeOutQuick)) {
    const closeIcons = await getElementsList(t, closeicon);
    let messagesCheck;
    const msgArr = [];
    for (let i = 0; i < closeIcons.length; i++) {
      msgArr.push(await getText(t, popup, i));
      await t.evaluate(
        await closeIcons[i],
        (ele) => {
          ele.click();
        },
        { waitForNavigation: false, waitForEvents: ['DOMContentLoaded'] }
      );
    }
    await waitForNotExists(t,container,timeOutQuick);
    for(let i=0; i < msgArr.length;i++){
      messagesCheck = compareVal(
        msgArr[i],
        expectedTxt,
        'Message displayed',
        'Message expected'
      );
      if (messagesCheck) {
        break;
      }
    }
    if (!messagesCheck && expectedTxt !== '') {
      if(msgArr.length === 0) {
        gauge.message('POPUP MESSAGE DID NOT APPEAR AT ALL!');
      }
      assert(!matchCondition, 'MESSAGE IS NOT AS EXPECTED!');
    }
  } else {
    gauge.message('POPUP MESSAGE NOT EXISTS!');
  }
}

function percentAndRound(param1,param2){
  if(param2 === '0' || param2 === 0){
    return '0%';
  }else {
    return (Number(param1) / Number(param2) * 100).toFixed(0) + "%";
  }
}

module.exports = {
  fetchEnable,
  getNetworkData,
  escapeRegExp,
  cpf,
  qatestdomain,
  dateParserApp,
  trimAndLowerCase,
  takeScreenshot,
  changeToMigrationLink,
  getMonthNumber, // TO DO
  parseDate,
  compareDates,
  parseTime,
  compareTimes,
  compareVal,
  compareUserNameMerged,
  compareUserNameSeparate,
  calculateTimeDiff,
  ifExists,
  ifVisible,
  existanceCheck,
  getElementsList,
  popUpClose,
  goToPage,
  makeVisible,
  makeVisibleifNeeded,
  scrollToAndClickSelector,
  closePopupAndClickSelector,
  scrollToAndClickElement,
  closePopupAndClickElement,
  scrollToAndClickInLoop,
  closePopupAndClickInLoop,
  clickModuleAppHQ,
  writeIntoLoop,
  writeInto,
  scrollToAndWriteInto,
  getText,
  getTextClear,
  getValue,
  getAttributeSelector,
  getAttributeElement,
  composeError,
  checkFieldError, // TO DO tu jest problem z errorem
  checkMessageOnModal,
  searchMissingContent,
  isChecked,
  waitForNotExists,
  waitForExists,
  getRandomNumber,
  percentAndRound,
  messages,
  waitForParam,
  intervalBlink,
  interval,
  timeoutQuickBlink,
  timeOutBlink,
  timeOutQuick,
  timeOutNorm,
  timeOutLong,
};
