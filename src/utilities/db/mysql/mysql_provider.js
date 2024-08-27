const mysql = require('mysql2');
const mysqlConfig = require('./mysql_config');

class MySQLProvider {
  static dbConnection = null;
  constructor() {
    // Inspired from https://gist.github.com/JimLiu/f57b71ff843d0eb0a533
  }
  static connect() {
    if (this.dbConnection === null) {
      this.dbConnection = mysql.createConnection(mysqlConfig.mysql);

      try {
        this.dbConnection.connect((dbError) => {
          if (dbError) {
            // TODO: use a logger to log the stacktrace
            // TODO: Don't exit the process, taiko should call closebrowser
            throw new Error('Unable to connect to MySQL server');
          }
        });
      } catch (ex) {
        console.log(ex);
      }
    }

    return this.dbConnection;
  }

  static disconnect() {
    if (this.dbConnection !== null) {
      this.dbConnection.end();
      this.dbConnection = null;
    }
  }

  // Execute sql query string with parameters
  static executeQuery(sql, params = [], canThrow = true) {
    return new Promise((resolve, reject) => {
      const connection = this.connect();
      connection.query(sql, params, (dbError, dataset) => {
        if (dbError) {
          reject(dbError);
          if (canThrow) {
            throw new Error(dbError);
          }
        } else {
          resolve(dataset);
        }
      });
      // TODO: Find an effective way to close the connection from the provider itself
      // connection.end();
    });
  }

  static insertRecord(sql, params) {
    return this.executeQuery(sql, params).then((results) => results.insertId);
  }

  static getValue(sql, params) {
    return this.executeQuery(sql, params).then((results) =>
      results.length ? this.getFirstProperty(results[0]) : null
    );
  }

  static getFirstProperty(object) {
    if (object && Object.keys(object).length) {
      return object[Object.keys(object)[0]];
    }
  }
}

/*
let param = [],
  insertParam = [];
param.push('1');
param.push('aveda');
MySQLProvider.executeQuery('SELECT * FROM brands', param).then((results) => {
  console.log(results);
});


insertParam.push('Origins');
insertParam.push('OR');
insertParam.push('spattabi');

MySQLProvider.insertRecord(
  'INSERT INTO brands (brand_name, brand_prefix, created_by) VALUES (?, ?, ?)',
  insertParam
).then((results) => {
  console.log(results);
});

*/

module.exports = { MySQLProvider };
