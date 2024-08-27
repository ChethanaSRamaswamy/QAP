const privateConfig = require('./private_keys');

module.exports = {
  ...privateConfig,
  rpEndPoint:
    process.env.RPENDPOINT || 'https://helix-rp.esteeonline.com/api/v1',
  rpProjectName: process.env.RPPROJECT || 'elc_tests',
  rpLaunchName: process.env.RP_LAUNCH_NAME || 'My Test',
  rpLaunchDescription: process.env.RP_LAUNCH_DESCRIPTION || 'This is my test',
};
