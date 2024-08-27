class Logger {
  static log = (message, suppressLogs = false) => {
    if (!suppressLogs) {
      console.log(message);
    }
  };
}

module.exports = Logger;
