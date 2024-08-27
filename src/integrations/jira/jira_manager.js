const JiraApi = require('jira-client');
const Util = require('../../utilities/util');
const BrandController = require('../../datainterface/controllers/BrandController');
const LocaleController = require('../../datainterface/controllers/LocaleController');

/**
 * Class representing a Jira project
 */
class JiraProject {
  /**
   *
   * @param {string} id Pass project id, Ex: 10001
   * @param {string} key Pass project key, Ex: GI
   * @param {string} url Pass Api url of the project
   * @param {string} name Pass the project name
   */
  constructor(id = '', key = '', url = '', name = '', projectCategory = {}) {
    this.id = id;
    this.prefix = key;
    this.url = url;
    this.name = name;
    // projectCategory is an object with name and id
    // Ex: "Global Feature Rollout" is the category for "Account & Checkout Feature Rollouts" project
    this.projectCategory = projectCategory;
  }
}

/**
 * Class representing a Brand
 */
class JiraBrand {
  /**
   *
   * @param {string} id Pass brand id, Ex: 10001
   * @param {string} url Pass Api url of the brand option
   * @param {string} name Pass the brand name
   * @param {string} prefix Pass the brand code

   */
  constructor(id = '', url = '', prefix = '', name = '') {
    this.id = id;
    this.url = url;
    this.name = name;
    this.prefix = prefix;
  }
}

/**
 * Class representing a locale
 */
class JiraLocale {
  /**
   *
   * @param {string} id Pass Locale id, Ex: 10001
   * @param {string} url Pass Api url of the locale option
   * @param {string} name Pass the locale name
   */
  constructor(id = '', url = '', prefix = '', region = '', name = '') {
    this.id = id;
    this.url = url;
    this.prefix = prefix;
    this.region = region;
    this.name = name;
  }
}

/**
 * Class representing a Region
 */
class JiraRegion {
  /**
   *
   * @param {string} id Pass project id, Ex: 10001
   * @param {string} url Pass Api url of the brand option
   * @param {string} name Pass the brand name
   */
  constructor(id = '', url = '', name = '') {
    this.id = id;
    this.url = url;
    this.name = name;
  }
}

/**
 * Represent a custom Jira field
 */
class JiraCustomField {
  /**
   *
   * @param {string} id Pass custom field id
   * @param {string} value Custom field value
   * @param {string} url Api url to get more details of the custome field
   */
  constructor(id, value, url) {
    this.id = id;
    this.value = value; // See whether value can be renamed to name
    this.url = url;
  }
}

/**
 * Represent a Jira comment
 */
class JiraComment {
  /**
   *
   * @param {string} id Comment id
   * @param {string} body Comment itself
   * @param {string} url Api url to get more details of the comment
   */
  constructor(id, body, url) {
    this.id = id;
    this.url = url;
    /*
     * TODO: Ideally body should be defined as Atlassian Document Format
     * and not as string. Refer response of "Get comments" Api
     */
    this.body = body;
  }
}

/**
 * Represent a Jira user
 */
class JiraUser {
  /**
   *
   * @param {string} emailAddress User email address
   * @param {string} accountId Account Id, (from Jira)
   * @param {string} url Api url to get more details
   * @param {string} displayName User display name
   */
  constructor(emailAddress = '', accountId = '', url = '', displayName = '') {
    this.accountId = accountId;
    this.emailAddress = emailAddress;
    this.url = url;
    this.displayName = displayName;
  }
}
/**
 * Class representing a Jira ticket
 */
class JiraTicket {
  constructor() {
    this.ticketId = '';
    this.ticketName = '';
    this.apiUrl = '';
    this.watchers = '';
    this.locales = []; // customfield_11513
    this.brands = []; // customfield_13501
    this.regions = []; // customfield_17804
    this.environments = []; // customfield_14801
    this.devices = []; // customfield_14502
    this.stepsToReproduce = ''; // customfield_10514
    this.expectedResults = ''; // customfield_18401
    this.siteSection = new JiraCustomField(); // customfield_11601

    this.brandsToBeTested = []; // customfield_31002 // Brands to be tested
    this.localesToBeTested = []; // ccustomfield_31003 // Locales to be tested
    this.featureToBeTested = ''; // customfield_31000 // Feature to be tested
    this.scenarioToBeTested = ''; // customfield_31001 // Scenario to be tested
    this.deviceToBeTested = []; // customfield_31004 // Devices to be tested
    this.environmentToBeTested = []; // customfield_31005 // Environment to be tested
    this.bypassAkamai = new JiraCustomField(); // customfield_31013 // Bypass Akamai Cache
    this.bypassVarnish = new JiraCustomField(); // customfield_31014 // Bypass Varnish Cache
    this.engEnvironemntParameters = ''; // customfield_31010, // Feature or Personal ENG Environment Parameters
    this.perlgemBackend = new JiraCustomField(); // customfield_31011 // PerlGem Backend
    this.ncsaServerNumber = ''; // customfield_31012 // NCSA Server Number
    this.revisionTag = ''; // customfield_31015 // Revision Tag
    this.apiEnvironment = new JiraCustomField(); // customfield_31016 // API Environment

    // this.epic = {} // customfield_10008
    this.parent = {}; // Not available, can we replace with epic?

    this.project = new JiraProject();
    this.summary = '';
    this.description = '';
    this.issuetype = {};
    this.resolution = '';
    this.priority = {};
    this.labels = [];
    this.issuelinks = [];
    this.assignee = {};
    this.creator = {};
    this.reporter = {};
    this.status = {};
    this.subtasks = [];
    this.comments = [];
    this.created = '';
    this.updated = '';
    this.duedate = '';
    this.responseMessage = '';
    this.errorMessage = '';
  }
}

/**
 * Contains methods to work with a Jira instance
 */
class JiraManager {
  constructor(jiraEnv) {
    // console.log('Jira Env: ', jiraEnv);

    const { jiraProdPAT, JiraDevPAT } = Util.getEnvironmentVariables();

    /**
     * Initialize Jira endpoint
     */
    // TODO: Post an error and abort if not able to connect to Jira
    // TODO: Update the code to handle both Jira dev and prod
    if (jiraEnv === Util.environments.prod) {
      this.bearer = jiraProdPAT;
      this.host = 'jira.esteeonline.com';
    } else {
      this.bearer = JiraDevPAT;
      this.host = 'jira.dev.esteeonline.com';
    }
    this.jira = new JiraApi({
      protocol: 'https',
      host: this.host,
      bearer: this.bearer,
      apiVersion: '2',
      strictSSL: true,
    });

    /**
     * List if issuetypes. Ideally we should not have pre-defined values like below,
     * instead listIssueTypes method should be called to get the available issuetypes
     * directly from Jira endpoint - since the usage of this Jira SDK is limited so decided
     * to go with pre-defined constant values.
     */
    this.IssueTypes = Object.freeze({
      Epic: { name: 'Epic', id: '10000' },
      Story: { name: 'Story', id: '10001' },
      Task: { name: 'Task', id: '10002' },
      Subtask: { name: 'Subtask', id: '10003' },
      Bug: { name: 'Bug', id: '10004' },
    });
  }

  /**
   * Fetch the Issue types available from a particular Jira instance
   * @returns A Promise, and the caller will get an Object with key as
   * issue name and value as issue id on resolving the promise
   * @example  { Subtask: '10003', Story: '10001' }
   */
  listIssueTypes() {
    return this.jira
      .listIssueTypes()
      .then((data) => {
        const issueTypes = {};
        data.forEach((item) => {
          issueTypes[item.name.replace('-', '')] = item.id;
        });
        return issueTypes;
      })
      .catch(function (err) {
        // console.error(err);
        throw err;
      });
  }

  /**
   * Get the details of a give Jira ticket
   * @param {string} issueName Ticket ID, Ex: HELIX-1785
   * @returns A Promise, and the caller will get the ticket details as an
   * instance of class JiraTicket on resolving the promise
   */
  getTicketDetails(issueName) {
    return this.jira
      .findIssue(issueName)
      .then(async function (issue) {
        // console.log(issue);

        const brands = await new BrandController().fetchBrands();
        const brandNames = [];
        for (let i = 0; i < brands.length; i++) {
          const brand = brands[i];
          brandNames.push([brand.brandPrefix, brand.brandName]);
        }

        const locales = await new LocaleController().fetchLocales();
        const localeNames = [];
        for (let i = 0; i < locales.length; i++) {
          const locale = locales[i];
          localeNames.push([
            locale.localePrefix,
            locale.region,
            locale.localeName,
          ]);
        }

        const {
          id: ticketId,
          key: ticketName,
          self: url,
          fields: {
            issuetype,
            parent,
            project,
            resolution,
            watches,
            created,
            priority,
            labels,
            issuelinks,
            assignee,
            updated,
            status,
            creator,
            subtasks,
            reporter,
            comment,
            summary,
            duedate,
            customfield_17804, // region
            customfield_13501, // brand
            customfield_11513, // locale
            customfield_14801, // environments
            customfield_10514, // Steps to Reproduce
            customfield_18401, // Expected Results
            customfield_11601, // Site Sections (Features)
            customfield_14502, // Devices

            // Jira prod settings
            customfield_31002, // Brands to be tested
            customfield_31003, // Locales to be tested
            customfield_31000, // Feature to be tested
            customfield_31001, // Scenario to be tested
            customfield_31004, // Devices to be tested
            customfield_31005, // Environment to be tested
            customfield_31013, // Bypass Akamai Cache
            customfield_31014, // Bypass Varnish Cache
            customfield_31010, // Feature or Personal ENG Environment Parameters
            customfield_31011, // PerlGem Backend
            customfield_31012, // NCSA Server Number
            customfield_31015, // Revision Tag
            customfield_31016, // API Environment
          },
        } = issue;

        const objJiraTicket = new JiraTicket();
        objJiraTicket.ticketId = ticketId;
        objJiraTicket.ticketName = ticketName;
        objJiraTicket.apiUrl = url;

        // TODO: replace with epic
        if (parent !== undefined) {
          objJiraTicket.parent = {
            id: parent.id,
            ticketName: parent.key,
            url: parent.self,
          };
        }

        // TODO: use JiraManager.IssueTypes - keys may not match because we are replacing - with ''
        // objJiraTicket.issuetype = JiraManager.IssueTypes[issuetype.name];
        // issuetype is undefined in ELC jira
        objJiraTicket.issuetype = {
          id: issuetype.id,
          name: issuetype.name,
        };

        // TODO: Fetch the list of projects and do lookup to populate objJiraTicket.project
        // Basically we need to create a method to get the project list just like issueTypes
        objJiraTicket.project = new JiraProject(
          project.id,
          project.key,
          project.self,
          project.name,
          project.projectCategory
        );

        objJiraTicket.resolution = resolution;
        objJiraTicket.created = created; // Format date
        objJiraTicket.updated = updated; // Format date
        objJiraTicket.duedate = duedate; // Format date
        objJiraTicket.labels = labels;
        objJiraTicket.issuelinks = issuelinks;
        objJiraTicket.summary = summary;
        objJiraTicket.subtasks = subtasks;

        objJiraTicket.watchers = {
          url: watches.self,
          watchersCount: watches.watchCount,
        };

        objJiraTicket.priority = {
          url: priority?.self,
          name: priority?.name,
          id: priority?.id,
        };

        objJiraTicket.assignee = {
          url: assignee?.self,
          name: assignee?.displayName,
        };

        objJiraTicket.status = {
          url: status?.self,
          name: status?.name,
          id: status?.id,
        };

        objJiraTicket.creator = {
          url: creator?.self,
          email: creator?.emailAddress,
          name: creator?.displayName,
        };

        objJiraTicket.reporter = {
          url: reporter?.self,
          email: reporter?.emailAddress,
          name: reporter?.displayName,
        };

        customfield_14502?.forEach((device) => {
          objJiraTicket.devices.push(
            new JiraCustomField(device.id, device.value, device.self)
          );
        });

        customfield_14801?.forEach((env) => {
          objJiraTicket.environments.push(
            new JiraCustomField(env.id, env.value, env.self)
          );
        });

        objJiraTicket.siteSection = new JiraCustomField(
          customfield_11601?.id,
          customfield_11601?.value,
          customfield_11601?.self
        );

        // Even though "Brands to be tested looks" like a multi-select
        // dropdown in Jira UI but it is not - it is a simple textbox
        // that looks like a dropdown. All the selected values
        // will be listed as a ; separated values/
        // Ex: Clinique; MAC; BobbiBrown; Bumble

        customfield_31002?.split(';').forEach((brand) => {
          let brandPrefix;
          const brandName = brand
            .toString()
            .toLowerCase()
            .replace(/&|\.|\s/g, '');
          brandNames.forEach((item) => {
            const hasFound = brandName.includes(item[1].toLowerCase());
            if (hasFound) {
              brandPrefix = item; // break once a match is found
            }
          });
          // No Match, NF (Not Found)
          if (brandPrefix === undefined) {
            brandPrefix = [Util.NF, brand.value];
          }
          objJiraTicket.brandsToBeTested.push(
            new JiraBrand('', '', ...brandPrefix)
          );
        });

        customfield_31003?.split(';').forEach((locale) => {
          let localePrefix;
          const localeName = locale
            .toString()
            .toLowerCase()
            .replace(/&|\.|\s/g, '');
          localeNames.forEach((item) => {
            const hasFound = localeName.includes(
              item[2].toLowerCase().replace(/&|\.|\s/g, '')
            );

            if (hasFound) {
              localePrefix = item; // break once a match is found
            }
          });
          // No Match, so adding NF (Not Found)
          if (localePrefix === undefined) {
            localePrefix = [Util.NF, Util.NF, locale.value];
          }

          objJiraTicket.localesToBeTested.push(
            new JiraLocale('', '', ...localePrefix)
          );
        });

        // Even though Feature to be tested looks like a dropdown
        //  in Jira UI but it is not - it is a simple textbox
        objJiraTicket.featureToBeTested =
          customfield_31000 === null ? '' : customfield_31000;

        objJiraTicket.scenarioToBeTested =
          customfield_31001 === null ? '' : customfield_31001;

        const device = customfield_31004 === null ? '' : customfield_31004;
        objJiraTicket.deviceToBeTested.push(
          new JiraCustomField('', device, '')
        );

        const env = customfield_31005 === null ? '' : customfield_31005;
        objJiraTicket.environmentToBeTested.push(
          new JiraCustomField('', env, '')
        );

        objJiraTicket.bypassAkamai = new JiraCustomField(
          customfield_31013?.id,
          customfield_31013?.value,
          customfield_31013?.self
        );

        objJiraTicket.bypassVarnish = new JiraCustomField(
          customfield_31014?.id,
          customfield_31014?.value,
          customfield_31014?.self
        );

        objJiraTicket.engEnvironemntParameters =
          customfield_31010 === null ? '' : customfield_31010;

        objJiraTicket.perlgemBackend = new JiraCustomField(
          customfield_31011?.id,
          customfield_31011?.value,
          customfield_31011?.self
        );

        objJiraTicket.ncsaServerNumber =
          customfield_31012 === null ? '' : customfield_31012;

        objJiraTicket.revisionTag =
          customfield_31015 === null ? '' : customfield_31015;

        objJiraTicket.apiEnvironment = new JiraCustomField(
          customfield_31016?.id,
          customfield_31016?.value,
          customfield_31016?.self
        );

        comment?.comments?.forEach((item) => {
          const { id, body, self } = item;
          objJiraTicket.comments.push(new JiraComment(id, body, self));
        });

        customfield_11513?.forEach((locale) => {
          let localePrefix;
          const localeName = locale.value
            .toString()
            .toLowerCase()
            .replace(/&|\.|\s/g, '');
          localeNames.forEach((item) => {
            const hasFound = localeName.includes(
              item[2].toLowerCase().replace(/&|\.|\s/g, '')
            );

            if (hasFound) {
              localePrefix = item; // break once a match is found
            }
          });
          // No Match, so adding NF (Not Found)
          if (localePrefix === undefined) {
            localePrefix = [Util.NF, Util.NF, locale.value];
          }

          objJiraTicket.locales.push(
            new JiraLocale(locale.id, locale.self, ...localePrefix)
          );
        });

        customfield_17804?.forEach((region) => {
          objJiraTicket.regions.push(
            new JiraRegion(region.id, region.self, region.value)
          );
        });

        customfield_13501?.forEach((brand) => {
          let brandPrefix;
          const brandName = brand.value
            .toString()
            .toLowerCase()
            .replace(/&|\.|\s/g, '');
          brandNames.forEach((item) => {
            const hasFound = brandName.includes(item[1].toLowerCase());
            if (hasFound) {
              brandPrefix = item; // break once a match is found
            }
          });
          // No Match, NF (Not Found)
          if (brandPrefix === undefined) {
            brandPrefix = [Util.NF, brand.value];
          }
          objJiraTicket.brands.push(
            new JiraBrand(brand.id, brand.self, ...brandPrefix)
          );
        });

        objJiraTicket.stepsToReproduce = customfield_10514;
        objJiraTicket.expectedResults = customfield_18401;

        objJiraTicket.responseMessage =
          'Successfully retrieved the ticket details';

        // console.log(issue);
        /*
        const stream = require('fs').createWriteStream('jiraop.json');
        stream.write(JSON.stringify(issue) + '\r\n');
        stream.end();
        */

        return objJiraTicket;
        // return issue;
      })
      .catch(function (err) {
        console.log(err);
        throw err;
      });
  }

  /**
   * Creates a new comment
   * @param {string} issueName Pass Ticket ID, ex: NAPROD-1889
   * @param {string} comment Comment to be inserted. Note: Author of the new comment is API user
   * @returns A Promise, and the caller will get the newly added comment on resolving the promise
   */
  addComment(issueName, comment) {
    return this.jira
      .addComment(issueName, comment)
      .then((newlyAddedcomment) => {
        return newlyAddedcomment;
      })
      .catch((err) => {
        throw err;
      });
  }

  /**
   *
   * @param {*} issueName
   * @returns All possible transitions except the current status. The transitions array has
   * a list of objects and each object has an id, name, to and fields properties. You shoukd use
   * transitions.id (NOT transitions.to.id) to change the ticket status
   */
  listTransitions(issueName) {
    return this.jira
      .listTransitions(issueName)
      .then((transitions) => {
        return transitions;
      })
      .catch((err) => {
        throw err;
      });
  }

  /**
   *
   * @param {*} issueName
   * @param {*} to You should set transitions.id NOT transitions.to.id, but when you fetch the status
   * from the ticket it will show transitions.to.id
   * @returns
   */
  updateStatus(issueName, to) {
    return this.jira
      .transitionIssue(issueName, to)
      .then((transitions) => {
        return transitions;
      })
      .catch((err) => {
        throw err;
      });
  }

  updateIssue(issueName, updates) {
    return this.jira
      .updateIssue(issueName, updates)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        throw err;
      });
  }

  /**
   * Get comments from a ticket
   * @param {string} issueName Pass Ticket ID, ex: NAPROD-1889
   * @returns A Promise, and the caller will get all the comments posted in issueName on resolving the promise
   */
  getComments(issueName) {
    return this.jira
      .getComments(issueName)
      .then((comments) => {
        const objJiraTicket = new JiraTicket();
        objJiraTicket.ticketName = issueName;

        comments.comments.forEach((item) => {
          const { id, body, self } = item;
          objJiraTicket.comments.push(new JiraComment(id, body, self));
        });

        return objJiraTicket;
      })
      .catch((err) => {
        // console.error(err);
        throw err;
      });
  }

  /**
   * Creates a new ticket under the specified project
   * @param {JiraTicket} objNewBug Pass the details of the new ticket as an object of JiraTicket class
   * @returns A Promise, and on resolving the promise the caller will get newly created ticket as
   * an JiraTicket object
   */
  createTicket(objNewBug) {
    return this.jira
      .addNewIssue({
        fields: {
          project: objNewBug.project,
          summary: objNewBug.summary,
          description: objNewBug.description,
          issuetype: objNewBug.issuetype,
          customfield_10041: objNewBug.brand,
          customfield_10042: objNewBug.locale,
        },

        /* fields: {
          project: {
            key: 'IJ',
            id: '10000',
          },
          summary: 'without issue name passed in',
          description:
            'Creating of an issue using project keys and issue type names using the REST API',
          issuetype: {
            id: '10002',
          },
        }, */
      })
      .then((result) => {
        /*
          TODO: result may contain errors as well, please check before proceeding further.
          Example given below
          {
            errorMessages: [],
            errors: {
              customfield_10041: "Specify a valid 'id' or 'name' for Brands",
              customfield_10042: "Specify a valid 'id' or 'name' for Locale"
          }
          }
        */
        const objNewTicket = new JiraTicket();
        objNewTicket.ticketId = result.id;
        objNewTicket.ticketName = result.key;
        objNewTicket.url = result.self;
        return objNewTicket;
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  }
}

// Export all the classes
module.exports = {
  JiraManager,
  JiraTicket,
  JiraProject,
  JiraCustomField,
  JiraComment,
  JiraUser,
  JiraBrand,
  JiraLocale,
  JiraRegion,
};
