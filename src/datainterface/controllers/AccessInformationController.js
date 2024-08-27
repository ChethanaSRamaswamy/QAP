const db = require('../../utilities/db/mysql/mysql_provider');
const AccessInformationModel = require('../models/AccessInformationModel');
const TPSAccessInformationModel = require('../models/TPSAccessInformationModel');
const Util = require('../../utilities/util');
const CryptoManager = require('../../utilities/crypto/crypto_manager');

const { userId, encryptionKey, tpsEncryptionKey } =
  Util.getEnvironmentVariables();

class AccessInformationController {
  AccessInformationController() {}

  async deleteAccessInformation() {
    const cSql = 'truncate access_information';
    await db.MySQLProvider.executeQuery(cSql);
    db.MySQLProvider.disconnect();
  }

  async insertAccessInformation(brandId, displayName, username, password) {
    const {
      encrypted: securePassword,
      salt,
      iv,
    } = CryptoManager.encryptData(password, encryptionKey);

    const cSql = `insert into access_information (brand_id,
                  display_name, username, password, salt, iv, uploaded_by)
                  values (?, ?, ?, ?, ?, ?, ?)`;
    const params = [
      brandId,
      displayName,
      username,
      securePassword,
      salt,
      iv,
      userId,
    ];
    await db.MySQLProvider.insertRecord(cSql, params);
    db.MySQLProvider.disconnect();
  }

  async fetchAccessInformation(brandId) {
    const DEFAULTUSERS = [
      Util.defaultUsers.elc.username,
      Util.defaultUsers.feature.username,
      Util.defaultUsers.pincer.username,
      Util.defaultUsers.tenantWeb.username,
      Util.defaultUsers.unified.username,
      Util.defaultUsers.wafCookie.username,
      Util.defaultUsers.wafBypassCookie.username,
    ];
    const DISPLAYNAME = [Util.defaultUsers.dbtool.displayName];
    // TODO: Recordset of this query is a perfect candidate to cache in Redis
    const params = [brandId, DEFAULTUSERS, DISPLAYNAME];

    const qSql = `select access_information_id, brand_id, display_name,
                username, password, salt, iv, uploaded_by from access_information
                where brand_id = ? or username in ( ? ) or display_name in ( ? )`;

    const results = await db.MySQLProvider.executeQuery(qSql, params);
    const credentials = [];

    for (let i = 0; i < results.length; i++) {
      const {
        access_information_id: accessInformationId,
        brand_id: bId,
        display_name: displayName,
        username,
        password: securePassword,
        salt,
        iv,
        uploaded_by: uploadedBy,
      } = results[i];
      const password = CryptoManager.decryptData(
        securePassword,
        salt,
        iv,
        encryptionKey
      );
      credentials.push(
        new AccessInformationModel(
          accessInformationId,
          bId,
          displayName,
          username,
          password,
          securePassword,
          salt,
          iv,
          uploadedBy
        )
      );
    }

    db.MySQLProvider.disconnect();

    return credentials;
  }

  /**
   * insertTPSAccessInformation is used to insert a new 3rd party service secrets into the table.
   * The credentials are encrypted before inserting into the table.
   * @param {Object} params - Destructured parameters.
   * @param {String} params.toolName - Name of 3rd party service - should be from Util.TPSNames
   * @param {String} params.displayName - Short name of the 3rd party service
   * @param {String} params.username - Username to access the 3rd party service
   * @param {String} params.password - Password to access the 3rd party service
   * @param {String} params.env - Environment of the credentials. Defaulted to prod
   */
  async insertTPSAccessInformation({
    toolName,
    displayName,
    username,
    password,
    env = Util.environments.prod,
  }) {
    const {
      encrypted: securePassword,
      salt,
      iv,
    } = CryptoManager.encryptData(password, tpsEncryptionKey);

    const cSql = `insert into tps_access_information (tool_name, display_name, 
                  username, password, salt, iv, uploaded_by, env)
                  values (?, ?, ?, ?, ?, ?, ?, ?)`;
    const params = [
      toolName,
      displayName,
      username,
      securePassword,
      salt,
      iv,
      userId,
      env,
    ];
    await db.MySQLProvider.insertRecord(cSql, params);
    db.MySQLProvider.disconnect();
  }

  /**
   * fetchTPSAccessInformation is used to fetch secrets of a 3rd party service.
   * @param {String} toolName - Name of 3rd party service - should be from Util.TPSNames.
   * @param {String} username - Username to access the 3rd party service.
   * @param {String} env - Environment of the credentials. Defaulted to prod.
   * @returns {Object} - An object of type TPSAccessInformationModel.
   */
  async fetchTPSAccessInformation(
    toolName,
    username,
    env = Util.environments.prod
  ) {
    const params = [toolName, username, env];

    const qSql = `select tps_access_information_id, tool_name, display_name, env,
                username, password, salt, iv, uploaded_by from tps_access_information
                where tool_name = ? and username = ? and env = ?`;

    const results = await db.MySQLProvider.executeQuery(qSql, params);

    const {
      tps_access_information_id: tpsAccessInformationId,
      display_name: displayName,
      password: securePassword,
      salt,
      iv,
      uploaded_by: uploadedBy,
    } = results[0];

    const password = CryptoManager.decryptData(
      securePassword,
      salt,
      iv,
      tpsEncryptionKey
    );

    db.MySQLProvider.disconnect();

    return new TPSAccessInformationModel({
      tpsAccessInformationId,
      toolName,
      displayName,
      username,
      password,
      securePassword,
      salt,
      iv,
      env,
      uploadedBy,
    });
  }

  /**
   * deleteTPSAccessInformation is used to delete a 3rd party service secrets.
   * @param {String} toolName - Name of 3rd party service - should be from Util.TPSNames.
   * @param {String} username - Username to access the 3rd party service.
   * @returns {void}
   */
  async deleteTPSAccessInformation(toolName, username) {
    const cSql = `delete from tps_access_information 
                  where tool_name = ? and username = ?`;
    const params = [toolName, username];
    await db.MySQLProvider.executeQuery(cSql, params);
    db.MySQLProvider.disconnect();
  }
}

module.exports = AccessInformationController;

// (async function () {
//   const op = await new AccessInformationController().fetchAccessInformation();
//   console.table(op);

//   let objs = [];
//   for (let i = 0; i < op.length; i++) {
//     let obj = {
//       brandId: op[i].brandId,
//       displayName: op[i].displayName,
//       username: op[i].username,
//       password: op[i].password,
//     };
//     objs.push(obj);
//   }
//   console.table(objs);
// })();
