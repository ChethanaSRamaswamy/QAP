const readline = require('readline');

class Helper {
  // process envs should always be strings
  static parsedBoolean = (setting) =>
    (setting && setting.toLowerCase() === 'true') || setting === '1';

  static parsedString = (value) =>
    value && typeof value === 'string' ? value : '';

  /**
   * getReadableTcName returns a readable name for a tag.
   * @param {String} tcTag - Testcase tag.
   * @returns {String} - Returns a readable name of testcase tag.
   */
  static getReadableTcName = (tcTag) => {
    const mapping = {
      GUPC: 'GuestUserCheckout',
      GUMOB: 'GuestUserCheckout',
      NUPC: 'NewUserCheckout',
      NUMOB: 'NewUserCheckout',
      RUPC: 'ReturnUserCheckout',
      RUMOB: 'ReturnUserCheckout',
      SANITYSEARCHPC: 'Search',
      SANITYSEARCHMOB: 'Search',
      VTO: 'VTO',
    };
    const temp = mapping[tcTag];
    return temp === undefined ? tcTag : temp;
  };

  /**
   * getCorrectedBrandCode returns a actual brand code for few brands
   * In the Functional Automation code, the short names used are
   * Kilian - BK    SmashBox - SB    TwoFaced - TF

   * The short names as listed at
   * https://confluence.esteeonline.com/display/STORELOCATOR/Brand+List
   * Kilian - KL    SmashBox - SX    TwoFaced - TO

   * This method makes that change. To be called before sending to SumoLogic
   *
   * @param {String} brandCode - Two characters brand code
   * @returns {String} - A brand code as per ELC nomenclature
   */
  static getCorrectedBrandCode = (brandCode) => {
    // TODO: Check with James - getCorrectedBrandCode is not used anywhere?
    const mapping = { BK: 'KL', SB: 'SX', TF: 'TO' };
    const temp = mapping[brandCode];
    return temp === undefined ? brandCode : temp;
  };

  /**
   * Function to prompt user for confirmation
   * @param {string} message - The text to display in the confirm.
   * @param {boolean} answer - If you want any specific answer other than Y or N.
   * @returns {boolean} - Returns true, if the user entered Y or blank, otherwise false.
   */
  static hasUserConfirmed = (message, answer = 'Y') => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    return new Promise((resolve) => {
      rl.question(message, (response) => {
        rl.close();
        resolve(response.toLowerCase() === answer.toLowerCase());
      });
    });
  };
}
module.exports = Helper;
