const Util = require('../../utilities/util');
const HttpClient = require('../../utilities/http_client');

/**
 * All the methods needed to interact with Jenkins from QAP are
 * included in the JenkinsManager class.
 */
class JenkinsManager {
  static qapUrl = Util.QAPUrl;

  /**
   * getLastBuildId returns the last build of a Jenkins job.
   * @param {Object} params - Destructured parameters.
   * @param {string} params.job - Relative path of the Jenkins job.
   * @param {string} params.username - Username to access Jenkins.
   * @param {string} params.token - Access token.
   * @returns {string} - Returns the last build Id of the Jenkins job.
   */
  static getLastBuildId = async ({ job, username, token }) => {
    // node jenkins_manager.js --method "getLastBuildId" --job "job/HealthCheckN01/job/PCTest/"
    const jsonPath = 'lastBuild/api/json?pretty=true';

    const url = JenkinsManager.qapUrl + job + jsonPath;

    const resData = await HttpClient.sendSecureGetRequest(url, username, token);
    const lastBuildId = resData.number;

    // console.log('Last build number: ' + lastBuildId);
    return lastBuildId;
  };

  /**
   * keepThisBuild is used to set the logs of a build forever.
   * @param {Object} params - Destructured parameters.
   * @param {String} params.job - Relative path of the Jenkins job.
   * @param {String} params.buildId - Build Id from a Jenkins job.
   * @param {String} params.username - Username to access Jenkins.
   * @param {String} params.token - Access token.
   * @returns {void}
   */
  static keepThisBuild = async ({ job, buildId, username, token }) => {
    const jsonPath = '/toggleLogKeep';

    const url = JenkinsManager.qapUrl + job + buildId + jsonPath;
    await HttpClient.sendSecurePostRequest(url, null, username, token);
    console.log(`Persisting the logs of the build ${buildId}`);
  };

  /**
   * getBuildStatus returns the status of a Jenkins build.
   * @param {Object} params - Destructured parameters.
   * @param {String} params.job - Relative path of the Jenkins job.
   * @param {String} params.buildId - Build Id from a Jenkins job.
   * @param {String} params.username - Username to access Jenkins.
   * @param {String} params.token - Access token.
   * @param {Number} params.offset - Offset is set if you want to get the details of previous builds. Default is 0.
   * @returns {Object} - Returns an object.
   * @property {String} status - The status of the build.
   * @property {String} stTimestamp - Start time as timestamp string.
   * @property {String} endTimestamp - End  time as timestamp string.
   * @property {Boolean} keepLog - A flag that indicates the log status.
   */
  static getBuildStatus = async ({
    job,
    buildId,
    offset = 0,
    username,
    token,
  }) => {
    // node jenkins_manager.js --method "getStartEndTimestamp" --job "job/HealthCheckN01/job/PCTest/" --buildid "39240"
    // node jenkins_manager.js --method "getStartEndTimestamp" --job "job/HealthCheckN01/job/PCTest/" --buildid "39240" --offset "1"
    const tBuildId = parseInt(buildId) - parseInt(offset);
    const jsonPath = '/api/json?pretty=true';
    const url = JenkinsManager.qapUrl + job + tBuildId + jsonPath;

    const resData = await HttpClient.sendSecureGetRequest(url, username, token);

    let status = null;
    if (resData.result === null) {
      console.log(`The build status of the build ${tBuildId} is in progress`); // Build in progress is returned as NULL
    } else {
      console.log(
        `The build status of the build ${tBuildId} is ${resData.result}`
      ); // Any other status is returned as it is
      status = resData.result;
    }

    const { stTimestamp, endTimestamp } =
      await JenkinsManager.getStartEndTimestamp({
        resPayload: resData,
        job,
        buildId,
        username,
        token,
      });
    return { status, stTimestamp, endTimestamp, keepLog: resData.keepLog };
  };

  /**
   * getStartEndTimestamp returns the start and end timestamps of a Jenkins build.
   * @param {Object} params - Destructured parameters.
   * @param {String} params.job - Relative path of the Jenkins job.
   * @param {String} params.buildId - Build Id from a Jenkins job.
   * @param {String} params.username - Username to access Jenkins.
   * @param {String} params.token - Access token.
   * @param {Object} params.resPayload - JSON payload. If not set, then a
   * Jenkins request is send to fetch the data.
   * @returns {Object} - Returns an object.
   * @property {String} stTimestamp - Start time as timestamp string.
   * @property {String} endTimestamp - End  time as timestamp string.
   */
  static getStartEndTimestamp = async ({
    resPayload,
    job,
    buildId,
    username,
    token,
  }) => {
    // node jenkins_manager.js --method "getStartEndTimestamp" --job "job/HealthCheckN01/job/PCTest/" --buildid "39240"

    const jsonPath = '/api/json?pretty=true';
    const url = JenkinsManager.qapUrl + job + buildId + jsonPath;
    let resData = resPayload;
    if (resPayload === null) {
      resData = await HttpClient.sendSecureGetRequest(url, username, token);
    }

    if (isNaN(resData.timestamp) && isNaN(resData.duration)) {
      console.log(
        `The start and end timestamps of the build ${buildId} are 0000000000 0000000000`
      );
    }

    let startTime = resData.timestamp.toString();
    startTime = startTime.substring(0, startTime.length - 3);
    let duration = resData.duration.toString();
    duration = duration.substring(0, duration.length - 3);

    const startVal = parseInt(startTime);
    const durVal = parseInt(duration);
    const endVal = startVal + durVal;
    const endTime = endVal.toString();

    console.log(
      `The start and end timestamps of the build ${buildId} are ${startTime} ${endTime}`
    );

    return { stTimestamp: startTime, endTimestamp: endTime };
  };

  /**
   * getTestReportDetails is used to fetch the details of a test run
   * @param {Object} params - Destructured parameters.
   * @param {String} params.job - Relative path of the Jenkins job.
   * @param {String} params.buildId - Build Id from a Jenkins job.
   * @param {String} params.username - Username to access Jenkins.
   * @param {String} params.token - Access token.
   * @param {Number} params.offset - Offset is set if you want to get the details of previous builds. Default is 0.
   * @returns {Object} - Returns test details as a JSON object.
   */
  static getTestReportDetails = async ({
    job,
    buildId,
    offset = 0,
    username,
    token,
  }) => {
    const tBuildId = parseInt(buildId) - parseInt(offset);
    const jsonPath = '/testReport/api/json?pretty=true';
    const url = JenkinsManager.qapUrl + job + tBuildId + jsonPath;

    const resData = await HttpClient.sendSecureGetRequest(url, username, token);
    return resData;
  };
}

const myArgs = process.argv.slice(2);
const cliArgs = Util.getCommandLineArgs(myArgs);

if (cliArgs.method === 'getLastBuildId') {
  (async function () {
    const buildId = await JenkinsManager.getLastBuildId(cliArgs);
    console.log('buildId:', buildId);
  })();
}

if (cliArgs.method === 'getBuildStatus') {
  JenkinsManager.getBuildStatus(cliArgs);
}

if (cliArgs.method === 'getStartEndTimestamp') {
  JenkinsManager.getStartEndTimestamp(cliArgs);
}

if (cliArgs.method === 'getStatusOfHelixTests') {
  JenkinsManager.getStatusOfHelixTests(cliArgs);
}

module.exports = JenkinsManager;
