const JenkinsManager = require('../../integrations/jenkins/jenkins_manager');
const Helper = require('../../utilities/helper');
const fs = require('fs');
const path = require('path');

class SyntheticTestNotificationManager {
  constructor() {}

  /**
   * getAllTaskStatus is renamed to getStatusOfHelixTests.
   * getStatusOfHelixTests returns the status of all Helix tests from a build.
   * @param {Object} params - Destructured parameters.
   * @param {String} params.job - Relative path of the Jenkins job.
   * @param {String} params.buildId - Build Id from a Jenkins job.
   * @param {String} params.username - Username to access Jenkins.
   * @param {String} params.token - Access token.
   * @param {Number} params.offset - Offset is set if you want to get the details of previous builds. Default is 0.
   * @returns {String} - Returns the status of all the tests. Ex: EL-CN-RUMOB-PASSED MC-RO-GUMOB-FAILED.
   */
  static getStatusOfHelixTests = async ({
    job,
    buildId,
    offset = 0,
    username,
    token,
  }) => {
    // getAllTaskStatus is renamed to getStatusOfHelixTests
    // node jenkins_manager.js --method "getStatusOfHelixTests" --job "job/HealthCheckN01/job/PCTest/" --buildid "39240"

    const resData = await JenkinsManager.getTestReportDetails({
      job,
      buildId,
      offset,
      username,
      token,
    });

    const tBuildId = parseInt(buildId) - parseInt(offset);

    const mySuites = resData['suites'];
    const noOfTasks = mySuites.length;
    let result = '';

    for (let i = 0; i < noOfTasks; i++) {
      let taskStatus = mySuites[i]['cases'][0]['status'];
      const taskCasename = mySuites[i]['cases'][0]['className'];

      // To get the test name from the full test name, which includes the full file path
      //
      // Input will come as      _xxxx_xxx_xx_xxx_clukgupc.spec.CL-UK Running Guest User PC Test
      // The output needed is    GUPC
      //
      let fullTCName = mySuites[i]['name'];
      let tcArray = fullTCName.split('.spec.'); // Neglect after .spec.
      fullTCName = tcArray[0];
      tcArray = fullTCName.split('_'); // Take the last after splitting with _
      fullTCName = tcArray[tcArray.length - 1];
      const tcName = fullTCName.substring(4).toUpperCase(); // Neglect the BrandLocale (4 char) at the start

      // PASSED or FIXED is the status which comes for test passing
      if (taskStatus === 'PASSED' || taskStatus === 'FIXED') {
        taskStatus = 'PASSED';
      } else {
        taskStatus = 'FAILED';
      }

      // The test case string will be like
      //     EL-US Running Guest User PC Test
      const taskArray = taskCasename.split(' ');

      result = result + taskArray[0] + '-' + tcName + '-' + taskStatus + ' ';
    }
    result = result.trim();
    console.log(
      `The status of all of tasks of the build ${tBuildId} is ${result}`
    );
    return result;
  };

  /**
   * createHelixSlackMessage is used to create a message from Helix tests to post in Slack channels.
   * @param {Object} params - Destructured parameters.
   * @param {String} params.buildId - Jenkins build Id.
   * @param {String} params.job - relative path of the Jenkins job.
   * @param {String} params.stTimestamp - Start time of Helix test.
   * @param {String} params.endTimestamp - End time of Helix test.
   * @param {String} params.failedCases - List of failed tests.
   * @param {String} params.externalIP - IP.
   * @param {Boolean} params.beatCheck - A boolean flag - 0 or 1.
   * @returns {String} - A string that can be posted as a message to Slack channel.
   */
  static createHelixSlackMessage = async ({
    buildId,
    job,
    stTimestamp,
    endTimestamp,
    failedCases,
    externalIP,
    siteAlertStates,
    beatCheck = 0,
  }) => {
    let canSendNotification = false;
    let result = '';
    result = result + '{\n';
    result = result + '    text: "';
    result = result + '*Helix Alert...*\\n';

    // We have to get the list of failed cases
    const faultyCases = failedCases.split(' ');
    faultyCases.sort();

    // TODO: We should not rely on job name to decide PC or mobile
    // Can't we use tag instead? Should work for Helix, have to test ELCelerate
    let isPC = false;
    if (job.includes('PC')) {
      isPC = true;
    }

    for (let iCnt = 0; iCnt < faultyCases.length; iCnt++) {
      // CL-US-GUPC-PASSED
      const [brand, locale, tag, status] = faultyCases[iCnt].split('-');

      if (beatCheck === 1 || status === 'FAILED') {
        if (beatCheck === 1) {
          result = result + 'Beat check... ';
        }

        const brandSite = siteAlertStates.find((item) => {
          if (item.brandLocale === `${brand}-${locale}`) {
            return item;
          }
          //
        });

        // Alert is disabled - skip the site
        if ((isPC && !brandSite.hasPCSM) || (!isPC && !brandSite.hasMobileSM)) {
          console.log(`Alert for ${brand}-${locale} is disabled`);
          continue;
        }

        result =
          result + '*' + brandSite.brandName + ' ' + brandSite.localeName;

        if (isPC) {
          result = result + ' PC';
        } else {
          result = result + ' Mobile';
        }
        result = result + ' ' + Helper.getReadableTcName(tag) + ' failed*\\n';
        canSendNotification = true;
      }
    }

    result =
      result + JenkinsManager.qapUrl + job + buildId + '/HTML_20Report/ ';

    // Putting the start and end time in the comment of the query
    result = result + '```';

    // <!date^1645774072^{date_short} {time_secs}|default> to <!date^1645774198^{date_short} {time_secs}|default>

    result =
      result +
      '// <!date^' +
      stTimestamp +
      '^{date_short} {time_secs}|default> to <!date^' +
      endTimestamp +
      '^{date_short} {time_secs}|default>\\n';

    // For the PC tests we can narrow down to a build since we set UA
    if (isPC) {
      //
      // Inputs are
      // /job/HealthCheck/job/CL-US-GUPC/    92
      //
      // Output is
      // Taiko AND CL-US-GUPC AND 92
      //

      const jobNameArray = job.split('/');
      const filteredJobName = jobNameArray[jobNameArray.length - 2];

      result = result + 'Taiko AND ' + filteredJobName + ' AND ' + buildId;
      result = result + '```';
    } else {
      // For the Mobile test we are not able to set UA, hence by IP

      result = result + '\\"' + externalIP + '\\"';
      result = result + '```';
    }

    result = result + '"\n}\n';
    // const archivePath = path.resolve(__dirname, '../../../../db_backup/');

    const payloadPath = path.join(__dirname, 'message.json');
    fs.writeFileSync(payloadPath, result, { encoding: 'utf8' });
    return { payloadPath, canSendNotification };
  };

  /**
   * consolidateStatus merges two lists.
   * The inputs being "CL-US-GUPC-PASSED EL-US-GUPC-FAILED MC-US-GUPC-PASSED BB-US-GUPC-FAILED"
   * and "CL-US-GUPC-PASSED EL-US-GUPC-FAILED MC-US-GUPC-FAILED BB-US-GUPC-PASSED"
   * The output will be "CL-US-GUPC-PASSED EL-US-GUPC-FAILED MC-US-GUPC-PASSED BB-US-GUPC-PASSED"
   *
   * @param {String} statusesA - First status list
   * @param {String} statusesB - Second status list
   * @returns {String} - A merged list of statuses
   */
  static consolidateStatus = (statusesA, statusesB) => {
    const statuses = statusesA.split(' ');
    let result = '';
    for (let iCnt = 0; iCnt < statuses.length; iCnt++) {
      const status = statuses[iCnt];
      // If passed add to the return
      if (status.includes('PASSED')) {
        result += status + ' ';
        continue;
      }

      // If failed and the previous test is also falied add to the return
      if (status.includes('FAILED') && statusesB.includes(status)) {
        result += status + ' ';
      }

      // If failed and the previous test is not failed, add as passed to the return
      if (status.includes('FAILED') && !statusesB.includes(status)) {
        result += status.replace('FAILED', 'PASSED') + ' ';
      }
    }
    result = result.trim();

    console.log(`The consolidated status from last two runs is ${result}`);
    return result;
  };
}

module.exports = SyntheticTestNotificationManager;
