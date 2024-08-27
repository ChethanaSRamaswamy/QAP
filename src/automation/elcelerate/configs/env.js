/* eslint-disable node/no-unsupported-features/es-syntax */
/* eslint-disable no-process-env */
const path = require('path');
const Helper = require('../../../utilities/helper');
require('dotenv').config({ path: path.resolve(__dirname, '../../../../.env') });

module.exports = {
  // updateSnapshots: !!process.env.UPDATE_SNAPSHOTS,
  updateSnapshots: false,
  enableReportPortal: Helper.parsedBoolean(process.env.ENABLEREPORTPORTAL),
  enableAllurereport: Helper.parsedBoolean(process.env.ENABLEALLUREREPORT),
  toLaunchChrome: Helper.parsedBoolean(process.env.CHROME),
  toLaunchFireFox: Helper.parsedBoolean(process.env.FIREFOX),
  toLaunchEdge: Helper.parsedBoolean(process.env.EDGE),
  toLaunchSafari: Helper.parsedBoolean(process.env.SAFARI),
  toLaunchiPhoneSafari: Helper.parsedBoolean(process.env.IPHONESAFARI),
  toLaunchPixelChrome: Helper.parsedBoolean(process.env.PIXELCHROME),
  enableLambdaTest: Helper.parsedBoolean(process.env.ENABLELAMBDATEST),
  lambdatestUsername: process.env.LAMBDATESTUSERNAME,
  lambdatestAccessKey: process.env.LAMBDATESTACCESSKEY,
};
