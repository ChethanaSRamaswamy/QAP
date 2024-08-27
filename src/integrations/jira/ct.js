const Jira = require('./jira_manager');
const Util = require('../../utilities/util');
const FeatureScenarioController = require('../../datainterface/controllers/FeatureScenarioController');
const TestCoverageController = require('../../datainterface/controllers/TestCoverageController');

function postErrorMessage(ticketId, message, jiraEnv) {
  new Jira.JiraManager(jiraEnv).addComment(ticketId, message);
}

async function automateTicket(objJiraTicket, response, jiraEnv) {
  let messageToJob = '';
  let warningMessage = '';
  const errorMessages = [];
  let doAbort = false;
  const MAXTESTCOUNT = 100;
  const TRIMLEN = -3;

  if (objJiraTicket.brandsToBeTested.length === 0) {
    errorMessages.push('Please select a brand to test');
  }

  if (objJiraTicket.localesToBeTested.length === 0) {
    errorMessages.push('Please select a market to test');
  }

  if (objJiraTicket.featureToBeTested === '') {
    errorMessages.push('Please select a feature to test');
  }

  if (objJiraTicket.scenarioToBeTested === '') {
    errorMessages.push('Please select a scenario to test');
  }

  if (objJiraTicket.deviceToBeTested.length === 0) {
    errorMessages.push('Please select a device to test');
  }

  if (objJiraTicket.environmentToBeTested.length === 0) {
    errorMessages.push('Please select an environment to test');
  }

  // Mandatory field(s) are missing so abort
  // the execution and inform the user
  if (errorMessages.length > 0) {
    doAbort = true;
  }

  // Filtering out NF (Not Found)
  const newBrandslist = objJiraTicket.brandsToBeTested.filter((item) => {
    if (item.prefix === Util.NF) {
      warningMessage = `${warningMessage}${item.name} is not supported\n`;
    }
    return item.prefix !== Util.NF;
  });

  const newLocaleslist = objJiraTicket.localesToBeTested.filter((item) => {
    if (item.prefix === Util.NF) {
      warningMessage = `${warningMessage}${item.name} is not supported\n`;
    }
    return item.prefix !== Util.NF;
  });

  // List of brands
  const listOfBrands = newBrandslist
    .reduce((accumulator, item) => {
      return accumulator + item.prefix + ' | ';
    }, '')
    .slice(0, TRIMLEN);

  // List of markets
  const listOfLocales = newLocaleslist
    .reduce((accumulator, item) => {
      return accumulator + item.prefix + ' | ';
    }, '')
    .slice(0, TRIMLEN);

  const allFeatureScenarios =
    await new FeatureScenarioController().fetchFeatureScenarios(
      '',
      '',
      objJiraTicket.featureToBeTested
    );

  const testCasesForSelectedFeatures = allFeatureScenarios.filter((item) => {
    if (objJiraTicket.scenarioToBeTested?.includes(item.scenarioName)) {
      return item;
    }
  });

  // Decide what device to test
  let doValidatePC = false;
  let doValidateMobile = false;
  for (const item of objJiraTicket.deviceToBeTested) {
    const value = item?.value?.toString().toLowerCase();
    if (value?.includes(Util.devices.mobile)) {
      doValidateMobile = true;
    }
    if (value?.includes(Util.devices.pc)) {
      doValidatePC = true;
    }
  }
  if (!doValidateMobile && !doValidatePC) {
    doValidateMobile = true;
    doValidatePC = true;
    warningMessage = `${warningMessage} no device is selected, so executing both PC and mobile\n`;
  }

  const brandLocaleTagsToTest = []; // Based on inputs from Jira
  const brandLocaleNoMatchingTags = [];
  const brandLocaleMatchingTags = [];
  // TODO: This nested loop can be removed
  // if all the required data comes from DB
  newBrandslist.forEach((brand) => {
    newLocaleslist.forEach((market) => {
      testCasesForSelectedFeatures.forEach((tag) => {
        const isMobile = tag.tag.toLowerCase().includes('mob') ? true : false;
        if (doValidatePC && !isMobile) {
          brandLocaleTagsToTest.push([
            `${brand.prefix}-${market.prefix}-${tag.tag}`,
            brand.name,
            market.name,
            'PC',
            tag.featureName,
            tag.scenarioName,
          ]);
        }
        if (doValidateMobile && isMobile) {
          brandLocaleTagsToTest.push([
            `${brand.prefix}-${market.prefix}-${tag.tag}`,
            brand.name,
            market.name,
            'Mobile',
            tag.featureName,
            tag.scenarioName,
          ]);
        }
      });
    });
  });

  const testCoverages =
    await new TestCoverageController().fetchTestCoverageInfo({});

  brandLocaleTagsToTest.forEach((detailedTag) => {
    let hasFound = false;
    for (let i = 0; i < testCoverages.length; i++) {
      const tc = testCoverages[i];
      const brandPrefix = tc.brandModel.brandPrefix;
      const localePrefix = tc.localeModel.localePrefix;
      const tag = tc.featureScenarioModel.tag;
      const scope = brandPrefix + '-' + localePrefix + '-' + tag;
      if (detailedTag[0] === scope) {
        hasFound = true; // Supported by Helix
        brandLocaleMatchingTags.push(detailedTag);
        break;
      }
    }
    // Not supported by Helix
    if (!hasFound) {
      brandLocaleNoMatchingTags.push(detailedTag);
    }
  });

  // No tags to test, just alert the
  // user and abort the execution
  if (brandLocaleMatchingTags.length === 0) {
    errorMessages.push(
      'There are no tests to test for the given test scope (Brands/Locales/Features/Scenarios)'
    );
    doAbort = true;
  } else if (brandLocaleMatchingTags.length > MAXTESTCOUNT) {
    errorMessages.push(
      'Maximum no. of tests that can be run is 100. Please re-run after modifying the test scope (Brands/Locales/Features/Scenarios)'
    );
    doAbort = true;
  }

  const result = {};
  brandLocaleNoMatchingTags.forEach((item) => {
    const fifthElement = item[5];
    if (result[fifthElement]) {
      result[fifthElement].push(item);
    } else {
      result[fifthElement] = [item];
    }
  });

  let printMessage = '';
  if (brandLocaleNoMatchingTags.length >= 1) {
    for (const [key, value] of Object.entries(result)) {
      printMessage += key + ' is not available in \n';
      for (let iCnt = 0; iCnt < value.length; iCnt++) {
        const item = value[iCnt];
        printMessage = `${printMessage}${item[1]}, ${item[2]}, ${item[3]} \n`;
      }
    }
    warningMessage = printMessage;
  }

  // Fetch tags from the indented test cases based on the device selected for testing
  let pcTags = '';
  let mobileTags = '';

  testCasesForSelectedFeatures.forEach((item) => {
    // const pcTag = item.PC;
    // const mobileTag = item.mob;
    // pcTags += pcTag + ' | ';
    // mobileTags += mobileTag + ' | ';

    if (item.isPC) {
      pcTags += item.tag + ' | ';
    } else {
      mobileTags += item.tag + ' | ';
    }
  });

  // Arrive device coverage
  const deviceCoverage = [
    {
      doValidate: doValidatePC,
      testingTags: pcTags.slice(0, TRIMLEN),
      device: 'PC',
    },
    {
      doValidate: doValidateMobile,
      testingTags: mobileTags.slice(0, TRIMLEN),
      device: 'MOBILE',
    },
  ];

  const allJobs = [];
  deviceCoverage.forEach((item) => {
    if (item.doValidate) {
      objJiraTicket.environmentToBeTested.forEach((env) => {
        const aJob = {
          LAUNCHDESCP: encodeURIComponent(objJiraTicket.ticketName),
          LAUNCHNAME: encodeURIComponent(
            objJiraTicket.project.name +
              '-' +
              objJiraTicket.project.projectCategory.name +
              '-' +
              env.value
          ),
          TAGVALUE: encodeURIComponent(
            `( ${listOfBrands} ) & ( ${listOfLocales} ) & ( ${item.testingTags} )`
          ),
          ENVIRONMENT: env.value,
          AKAMAIBYPASS: objJiraTicket.bypassAkamai.value,
          VARNISHBYPASS: objJiraTicket.bypassVarnish.value,
          COOKIEVAL: '',
          COOKIEPATH: '',
          RETRYCOUNT: 1,
          REVISIONTAG: encodeURIComponent(objJiraTicket.revisionTag),
          APIENV: objJiraTicket.apiEnvironment.value,
          DEVICE: item.device,
          JIRAID: encodeURIComponent(objJiraTicket.engEnvironemntParameters),
          PERLGEMENV: objJiraTicket.perlgemBackend.value,
          NCSASERVERNUM: objJiraTicket.ncsaServerNumber,
        };
        allJobs.push(aJob);
      });
    }
  });

  // Post the error messages in Jira ticket
  if (doAbort) {
    postErrorMessage(
      objJiraTicket.ticketName,
      Util.removeDuplicateEntries(errorMessages).join('\n'),
      jiraEnv
    );
  }

  if (warningMessage === '') {
    messageToJob = Util.NA;
  } else {
    messageToJob = warningMessage;
  }

  const jobsToRun = {
    count: allJobs.length,
    jobs: allJobs,
    messagetojob: encodeURIComponent(messageToJob),
    doAbort: doAbort,
  };

  const toSend = JSON.stringify(jobsToRun);
  // This console stmt is required to pass data from node to shell
  console.log(toSend);

  // console.log(JSON.parse(toSend));
}

function postMessage(ticketId, buildId, buildUrl, jiraEnv) {
  const buildInfo = `[${buildId}|${buildUrl}]`;
  new Jira.JiraManager(jiraEnv).addComment(
    ticketId,
    `Helix Run is in progress and the build id is ${buildInfo}`
  );
}

function postTicketExecutionStatus({
  ticketId,
  ticketDetails,
  // buildId,
  buildStatus,
  buildUrl,
  messageFromJob = '',
  env,
}) {
  let jiraMessage = '';
  let ticketDetailsParsed = ticketDetails;

  const htmlReportUrl = `${buildUrl}/HTML_20Report/`;
  const buildInfo = `[Build|${buildUrl}]`;

  let htmlReport = '';

  ticketDetailsParsed = JSON.parse(ticketDetailsParsed);

  if (ticketDetailsParsed.jobs.length > 1) {
    htmlReport = 'below\n';
    ticketDetailsParsed.jobs.forEach((item) => {
      const multiReportUrl = `${htmlReportUrl}${item.DEVICE}-${item.ENVIRONMENT}/html-report/index.html`;
      htmlReport += `[${item.DEVICE}-${item.ENVIRONMENT}|${multiReportUrl}]\n`;
      // item.reportUrl = multiReportUrl;
      console.log(multiReportUrl);
    });
  } else {
    htmlReport = `[here|${htmlReportUrl}]`;
  }

  let newTicketStatusId;
  const ACCEPTED = 61;
  const INPROGRESS = 31;
  if (buildStatus === 'SUCCESS') {
    jiraMessage = `${buildInfo} ran successfully. Please view the report ${htmlReport}`;
    newTicketStatusId = ACCEPTED; // Accepted
  } else {
    jiraMessage = `${buildInfo} has failed and you can view the report ${htmlReport}`;
    newTicketStatusId = INPROGRESS; // In Progress
  }

  if (messageFromJob !== '' && messageFromJob !== Util.NA) {
    jiraMessage = `${jiraMessage}
    Note:
     ${decodeURIComponent(messageFromJob)}`;
  }

  const jiraMgr = new Jira.JiraManager(env);

  // Jira is throwing an error if we try to change the status to its current status
  // Note: objJiraTicket.status.id is transitions.to.id whereas to update the status
  // we have to pass transitions.id. Basically if objJiraTicket.status.id is not in
  // transitions.to.id then current status of the ticket is transitions.id and
  // Jira yells at us if we set transitions.id

  jiraMgr.listTransitions(ticketId).then((transitionData) => {
    const transitions = transitionData.transitions.filter((item) => {
      return parseInt(item.id) === newTicketStatusId;
    });

    if (transitions.length > 0) {
      // Change the ticket status
      // TODO: commented changing the ticket status after
      // script execution. Will revisit later.
      /*
      jiraMgr.updateStatus(ticketId, {
        transition: { id: newTicketStatusId },
      });
      */
    }
  });

  // Post the message as a comment to the ticket
  jiraMgr.addComment(ticketId, jiraMessage);
}

function fetchTicketDetails(jiraIdForFA, jiraEnv) {
  const objJira = new Jira.JiraManager(jiraEnv);

  // Get Details of a ticket
  objJira
    .getTicketDetails(jiraIdForFA)
    .then((response) => {
      const objJiraTicket = Object.assign(new Jira.JiraTicket(), response);
      automateTicket(objJiraTicket, response, jiraEnv);
    })
    .catch((err) => {
      console.log(err.message);
    });
}

// node ct.js --method fetchTicketDetails --ticket-id ASMBLY4-1089
const myArgs = process.argv.slice(2);

const cliArgs = Util.getCommandLineArgs(myArgs);

if (cliArgs.method === 'fetchTicketDetails') {
  if (cliArgs.ticketId === undefined) {
    throw new Error('Invalid ticket id, please supply a valid ticket id');
  }

  if (cliArgs.env === undefined) {
    // prod or dev
    // node src/continous_testing/ct.js --method fetchTicketDetails --ticket-id HELIX-1973 --env prod
    throw new Error('Jira environment is mandatory');
  }

  // Fetch the ticket details from Jira
  fetchTicketDetails(cliArgs.ticketId, cliArgs.env);
} else if (cliArgs.method === 'postTicketExecutionStatus') {
  if (
    cliArgs.ticketId === undefined ||
    cliArgs.ticketDetails === undefined ||
    cliArgs.buildId === undefined ||
    cliArgs.buildStatus === undefined ||
    cliArgs.buildUrl === undefined
  ) {
    throw new Error(
      'Invalid arguments for postTicketExecutionStatus method, please verify the params'
    );
  }

  // console.log(cliArgs);
  // Post the comment and change the ticket status
  postTicketExecutionStatus(cliArgs);
} else if (cliArgs.method === 'postMessage') {
  postMessage(cliArgs.ticketId, cliArgs.buildId, cliArgs.buildUrl, cliArgs.env);
} else {
  throw new Error('Invalid method invocation, please check the method name');
}
