const Util = require('../../utilities/util');
const BrandLocaleController = require('../../datainterface/controllers/BrandLocaleController');
const AccessInformationController = require('../../datainterface/controllers/AccessInformationController');
const JenkinsManager = require('../../integrations/jenkins/jenkins_manager');
const STNotificationMgr = require('./st_notification');
const SlackManager = require('../../integrations/slack/slack_manager');
const { jpaUsername } = Util.getEnvironmentVariables();

// TODO: Lauch Prep steps
/**
 * Set JPA_USERNAME in Jenkins and Org secrets
 * Set TPS_ENCRYPTIONKEY (should be different from ENCRYPTIONKEY)
 * Create job to update TPS details into table tps_access_information
 * Send IP as a param from the Job
 */

class SyntheticTestManager {
  constructor() {}

  /**
   * manageAlerts is used to enable or disable Synthetic Test alerts send to
   * notification channels like #prod-alerts Slack channel.
   * @param {Object} params - Destructured parameters.
   * @param {String} params.device - PC or Mob.
   * @param {String} params.brand - Brand prefix. E.g.: "AV", "BB".
   * @param {String} params.locale - Locale prefix. E.g.: "US", "CA".
   * @param {String} params.enable - A flag the indicates the alert status. 1 - enable, 0 - disable
   * @returns {void}
   */
  static manageAlerts = async ({ device, brand, locale, enable }) => {
    // node st_manager.js --method "manageAlerts" --device "PC" --brand "AV" --locale "US" --enable "1"

    const brandLocale = brand + '-' + locale;

    await new BrandLocaleController().enableSyntheticTests(
      device,
      brandLocale,
      parseInt(enable)
    );
    console.log(`Updated the alert status of ${brandLocale}`);
  };

  /**
   * fetchSTAlertStatusOfASite is used to fetch synthetic test alerts notifications status of a site.
   * @param {Object} params - Destructured parameters.
   * @param {String} params.device - PC or Mob.
   * @param {String} params.brand - Brand prefix. E.g.: "AV", "BB".
   * @returns {Number} - Returns the notification status. Either 0 or 1
   */
  static fetchSTAlertStatusOfASite = async ({ device, brand, locale }) => {
    // node st_manager.js --method "fetchSTAlertStatus" --device "PC" --brand "AV" --locale "US"

    const brandLocale = brand + '-' + locale;

    const stStatus =
      await new BrandLocaleController().fetchSTAlertStatusOfASite(
        device,
        brandLocale
      );
    console.log(`Alert Status of ${brandLocale} is ${stStatus}`);

    return stStatus;
  };

  /**
   * fetchSTAlertStatuses is used to fetch synthetic test alerts notifications statuses of a set of sites.
   * @param {String[]} brandLocales - List of sites. E.g.: ['AV-US', 'CL-CA']
   * @returns {Object[]} - Returns an array of BrandLocaleModel objects.
   */
  static fetchSTAlertStatuses = async (brandLocales) => {
    const sites = await new BrandLocaleController().fetchSTAlertStatuses(
      brandLocales
    );

    return sites;
  };

  /**
   * notifyHelixSTTestsFailedStatuses is used to analyze Synthetic tests builds and
   * send notifcation to different channels based on its build and test run statuses
   * @param {Object} params - Destructured parameters.
   * @param {String} params.job - Relative path of the Jenkins job.
   * @param {String} params.ip - IP from the job.
   * @param {String} params.env - Env (dev or prod). Defaulted to prod.
   * @param {String} params.notifySlackLevel1 - Contains comma separated Slack channel names for POC tasks
   * @param {String} params.notifySlackLevel2 - Contains comma separated Slack channel names for dev tasks
   * @param {String} params.notifySlackLevel3 - Contains comma separated Slack channel names for prod alertings
   * @returns {void}
   */
  static notifyHelixSTTestsFailedStatuses = async (myArgs) => {
    // node st_manager.js --method "notifyHelixFailedStatuses" --job "/job/HealthCheckN01/job/PCTest/" --ip "127.0.0.1" --notify-slack-level1 "qap-team-test-channel"
    // node st_manager.js --method "notifyHelixStatuses" --job "job" --ip "ip" --notify-slack-level1 "poc-channel" --notify-slack-level2 "dev-channel" --notify-slack-level3 "prod-channel"
    // node st_manager.js --method "notifyHelixFailedStatuses" --job "/job/HealthCheckN12/job/MobileTest/" --ip "127.0.0.1 IGNORE" --notify-slack-level1 "qap-team-test-channel" --env "dev"
    // node st_manager.js --method "notifyHelixFailedStatuses" --job "/job/HealthCheckN12/job/MobileTest/" --ip "127.0.0.1 IGNORE" --notify-slack-level1 "qap-team-test-channel"

    const { job, ip, env = Util.environments.prod } = myArgs;
    const slackChannels = { poc: [], dev: [], prod: [] };
    const objAIC = new AccessInformationController();

    for (const [key, value] of Object.entries(myArgs)) {
      if (key.includes('notifySlack')) {
        const level = key.replace('notifySlack', '').toLowerCase();
        const channels = value.split(',').map((item) => item.trim());
        switch (level) {
          case 'level1': // POC Channels
            slackChannels.poc = channels;
            break;
          case 'level2': // Dev Channels
            slackChannels.dev = channels;
            break;
          case 'level3': // Prod Channels
            slackChannels.prod = channels;
            break;
        }
      }
    }

    const { username, password } = await objAIC.fetchTPSAccessInformation(
      Util.TPSNames.Jenkins,
      jpaUsername,
      env
    );

    const args = {
      job,
      buildId: '',
      username,
      token: password,
    };

    // Get the last build id
    const buildId = await JenkinsManager.getLastBuildId(args);
    args.buildId = buildId;

    // Helix
    // https://helix.esteeonline.com/job/HealthCheckN12/job/MobileTest/
    // args.buildId = 22314; // Both prev and next builds are passed
    // // // args.buildId = 22381; // Prev build is failed and next build is passed

    // ELCelerate
    // https://helix.esteeonline.com/job/HealthCheckN14/job/MC_GU_MOB/
    // args.buildId = 6245;

    // Get the status of last build - SUCCESS or UNSTABLE
    const { status, stTimestamp, endTimestamp, keepLog } =
      await JenkinsManager.getBuildStatus(args);
    if (status === null) {
      console.log('A build is in progress');
      process.exitCode = 1;
      return;
    }
    // Get TASKLIST of last build
    const failedCases = await STNotificationMgr.getStatusOfHelixTests(args);

    // Get the status of one before the last build - SUCCESS or UNSTABLE
    args.offset = 1;
    const { status: prevStatus } = await JenkinsManager.getBuildStatus(args);
    // Get TASKLIST of one before the last build
    const prevFailedCases = await STNotificationMgr.getStatusOfHelixTests(args);

    args.stTimestamp = stTimestamp;
    args.endTimestamp = endTimestamp;
    args.externalIP = ip;
    args.failedCases = failedCases;
    args.keepLog = keepLog;

    // We have to get the list of failed cases
    const faultyCases = failedCases.split(' ').sort();
    const brandLocales = faultyCases.map((item) => {
      const [brand, locale] = item.split('-');
      return `${brand}-${locale}`;
    });

    // Find out which sites have notifications disabled
    args.siteAlertStates =
      await SyntheticTestManager.fetchSTAlertStatuses(brandLocales);

    // Create Slack message
    const { payloadPath, canSendNotification } =
      await STNotificationMgr.createHelixSlackMessage(args);

    if (!canSendNotification) {
      // TODO: Need to test this block with different use cases
      console.log('No alerts to send');
      return;
    }

    // Status of last build
    if (
      status === Util.JenkinsBuildState.Unstable ||
      status === Util.JenkinsBuildState.Success
    ) {
      // Post the alert message on L1 and L2 channels - alert failures immediately
      if (status === 'UNSTABLE') {
        const channels = [...slackChannels.poc, ...slackChannels.dev];
        for (let iCnt = 0; iCnt < channels.length; iCnt++) {
          const scName = channels[iCnt];
          const { password: hookCreds } =
            await objAIC.fetchTPSAccessInformation(Util.TPSNames.Slack, scName);
          console.log(`Sending alert to ${scName} Slack channel`);
          await SlackManager.postJsonMessageFromFile({
            hookCreds,
            payloadPath,
          });
        }
      }

      // Proceding to PROD channel alerts
      if (
        prevStatus === Util.JenkinsBuildState.Unstable ||
        prevStatus === Util.JenkinsBuildState.Success
      ) {
        const concludedStatus = STNotificationMgr.consolidateStatus(
          failedCases,
          prevFailedCases
        );

        // Alert if the status has FAILED tests
        if (concludedStatus.includes('FAILED')) {
          const channels = slackChannels.prod;
          for (let iCnt = 0; iCnt < channels.length; iCnt++) {
            const scName = channels[iCnt];
            const { password: hookCreds } =
              await objAIC.fetchTPSAccessInformation(
                Util.TPSNames.Slack,
                scName
              );
            console.log(`Sending alert to ${scName} Slack channel`);

            // TODO: PROD Channel should NOT send a alert from local
            await SlackManager.postJsonMessageFromFile({
              hookCreds,
              payloadPath,
            });
          }
          // Persist the build logs
          if (!keepLog) {
            await JenkinsManager.keepThisBuild(args);
          }
        }
      }
    }

    // TODO: Complete the steps based on report_job_pw.sh
  };
}
const myArgs = process.argv.slice(2);
const cliArgs = Util.getCommandLineArgs(myArgs);

if (cliArgs.method === 'manageAlerts') {
  SyntheticTestManager.manageAlerts(cliArgs);
}

if (cliArgs.method === 'fetchSTAlertStatus') {
  SyntheticTestManager.fetchSTAlertStatus(cliArgs);
}

if (cliArgs.method === 'notifyHelixFailedStatuses') {
  SyntheticTestManager.notifyHelixSTTestsFailedStatuses(cliArgs);
}

module.exports = SyntheticTestManager;
