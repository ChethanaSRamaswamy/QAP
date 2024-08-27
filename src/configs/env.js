/* eslint-disable node/no-unsupported-features/es-syntax */
/* eslint-disable no-process-env */
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const Helper = require('../utilities/helper');
const privateConfig = require('./private_keys');

module.exports = {
  ...privateConfig,
  currentEnv: process.env.ENVIRONMENT || 'PROD', // INT, INTX, PRENV
  allCookies: process.env.COOKIES || '', // The format should be like cookie1:value1,cookie2:value2,
  revTag: process.env.REVISIONTAG || '',
  featureStr: process.env.JIRAID || '', // Ex: drp10user06 Applicable for EphemeralEnv, Feature, Personal ENG, Branch Server Env
  perlgemEnv: process.env.PERLGEMENV || 'preprod', // preprod, stage, qa, Applicable for EphemeralEnv and Feature Env
  akamaiBypass: process.env.AKAMAIBYPASS || 'false',
  varnishBypass: process.env.VARNISHBYPASS || 'false',
  apiEnv: process.env.APIENV || '',
  jsRepo: process.env.JSREPO || '', // integration, qa, production
  ncsaServerNo: process.env.NCSASERVERNUM || '', // Ex: 10 Applicable for Personal ENG and Branch Server Env
  intX: process.env.INTX || '', // 3, 6, 8
  intXPGEnv: process.env.INTXPGENV || 'STAGE', // DEV, STAGE, BRANCHSERVER
  prNo: process.env.PRNO || '', // Ex: 6788 PR Number/Id
  isDiscovery: process.env.ISDISCOVERY === 'true', // Self-healing discovery
  doHeal: process.env.DOHEAL === 'true', // Self-healing
  localeInfo: process.env.LOCALEINFO || 'en_EN', // To support multi-lingual
  jiraProdPAT: process.env.JIRAPRODPAT || '',
  JiraDevPAT: process.env.JIRADEVPAT || '',
  userId: process.env.BUILD_USER_ID || 'System', // Need to warn if this is not set
  buildId: process.env.BUILD_NUMBER,
  ci: process.env.CI,
  dbUsername: process.env.DB_USERNAME || 'root',
  dbPassword: process.env.DB_PASSWORD || 'root',
  dbHostname: process.env.DB_HOSTNAME || '127.0.0.1',
  localhost: 'http://localhost:8080/',
  testGlobalOffersRequired: process.env.TESTOFFER || 'false',
  rcoGhostCookie: process.env.RCOGHOST || 'false',
  rcoVulcanCookie: process.env.VULCAN || 'false',
  toplaceorder: process.env.PLACEORDER || 'true', // true to place order and false to not place the order
  mysqldumpPath: Helper.parsedString(process.env.MYSQLDUMP_UTILITY_PATH), // Configure this path as per the installation location of your mysqldump.exe

  // TODO: Add Vulcan related cookies from the below PR
  // Create associated set<cookie> functions and expose it to the developer
  // https://bitbucket.esteeonline.com/projects/EL/repos/taiko-gauge/pull-requests/1143/overview
  // https://bitbucket.esteeonline.com/projects/EL/repos/helix/pull-requests/71/overview
  // var rcoGhostCookie = process.env.RCOGHOST || 'false';
  // var rcoVulcanCookie = process.env.VULCAN || 'false';
};
