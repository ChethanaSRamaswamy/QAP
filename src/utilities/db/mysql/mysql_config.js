const Util = require('../../../utilities/util');
const { dbUsername, dbPassword, dbHostname } = Util.getEnvironmentVariables();

module.exports = {
  mysql: {
    host: dbHostname,
    user: dbUsername,
    password: dbPassword,
    database: 'helix',
    port: 3306,
  },
};
