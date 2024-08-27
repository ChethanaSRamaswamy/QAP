const HttpClient = require('../../utilities/http_client');
const fs = require('fs');

/**
 * All the methods needed to interact with Slack from QAP are
 * included in the SlackManager class.
 */
class SlackManager {
  constructor() {}

  /**
   * Url of Slack Webhook
   */
  static webhookUrl = 'https://hooks.slack.com/services';
  /**
   * postJsonMessage can be used to send messages to Slack
   * Slack webhook Url: https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX
   * @param {Object} params - Destructured parameters.
   * @param {String} params.hookCreds - Slack hook credentials in the format - teamId/botId/token.
   * teamId  - Slack workspace or team Id.
   * botId   - The bot Id uniquely identifies the specific bot within that workspace.
   * token   - Unique token associated with your Slack app or bot.
   * @param {Object} params.payload - JSON message.
   * @returns {void}
   */
  static postJsonMessage = async ({ hookCreds, payload }) => {
    const slackUrl = `${SlackManager.webhookUrl}/${hookCreds}`;
    await HttpClient.sendJsonMessagePostRequest(slackUrl, payload);
  };

  /**
   * postJsonMessageFromFile can be used to send messages stored in a file to Slack.
   * Slack webhook Url: https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX
   * @param {Object} params - Destructured parameters.
   * @param {String} params.hookCreds - Slack hook credentials in the format - teamId/botId/token.
   * teamId  - Slack workspace or team Id.
   * botId   - The bot Id uniquely identifies the specific bot within that workspace.
   * token   - Unique token associated with your Slack app or bot.
   * @param {String} params.payloadPath - Path of your file that contains your JSON message.
   * @returns {void}
   */
  static postJsonMessageFromFile = async ({ hookCreds, payloadPath }) => {
    const jsonData = fs.readFileSync(payloadPath, 'utf8');

    const slackUrl = `${SlackManager.webhookUrl}/${hookCreds}`;
    await HttpClient.sendJsonMessagePostRequest(slackUrl, jsonData);
  };
}

module.exports = SlackManager;
