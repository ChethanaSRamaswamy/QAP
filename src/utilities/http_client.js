const https = require('https');
const fs = require('fs');
const axios = require('axios');

class HttpClient {
  /**
   * sendJsonMessagePostRequest can be used to send http request
   * with a JSON payload
   * @param {String} url - Http Url.
   * @param {String} message - Message in JSON format.
   * @returns {void}
   */
  static sendJsonMessagePostRequest = async (url, message) => {
    try {
      await axios.post(url, message);
    } catch (error) {
      console.error(`Error posting message: ${error.message}`);
    }
  };

  /**
   * sendSecurePostRequest can used to post http request with auth and password.
   * WARNING: When we send two consecutive requests to a pramaterized Jenkins job,
   * then it discards the second request if the first request is queued up
   * @param {String} url - Http Url.
   * @param {Object} data - JSON payload
   * @param {String} username - Http auth username.
   * @param {String} token -  Access Token.
   * @returns {void}
   */
  static sendSecurePostRequest = async (url, data, username, token) => {
    try {
      await axios.post(url, data, {
        auth: {
          username: username,
          password: token,
        },
      });
      // console.log(`Message posted successfully: ${response.data}`);
    } catch (error) {
      console.error(`Error posting message: ${error}`);
    }
  };

  /**
   * sendSecureGetRequest can used to send http request with auth and password.
   * @param {String} url - Http Url.
   * @param {String} username - Http auth username.
   * @param {String} token -  Access Token.
   * @returns {Object} - An object
   */
  static sendSecureGetRequest = async (url, username, token) => {
    //
    const authString = Buffer.from(`${username}:${token}`).toString('base64');
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: 'Basic ' + authString,
        },
      });
      // console.log(res.data);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * sendJsonMessageFromFilePostRequest can used to post a HTTP message
   * @deprecated - This method is deprecated, use sendJsonMessagePostRequest instead
   * @param {*} url - Http Url
   * @param {*} jsonFilePath - Path of your file that contains your message
   */
  static sendJsonMessageFromFilePostRequest(url, jsonFilePath) {
    const jsonData = fs.readFileSync(jsonFilePath, 'utf8');

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const req = https.request(url, options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        // response if any
        console.log(data);
      });
    });

    req.on('error', (error) => {
      throw error;
    });

    // Write the payload on the request
    req.write(jsonData);
    req.end();
  }

  /**
   * @deprecated - This method is deprecated, use sendSecureGetRequest instead
   * @param {*} url - Http Url
   * @param {*} username - Http auth username
   * @param {*} token - Token
   */
  static sendSecureHttpRequest(url, username, token) {
    const authString = Buffer.from(`${username}:${token}`).toString('base64');

    const options = {
      method: 'GET',
      headers: {
        // 'Content-Type': 'application/json',
        Authorization: `Basic ${authString}`,
      },
    };

    const req = https.request(url, options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        // response if any
        console.log(data);
      });
    });

    req.on('error', (error) => {
      throw error;
    });

    req.end();
  }
}

module.exports = HttpClient;
