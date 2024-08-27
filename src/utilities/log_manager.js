// https://confluence.esteeonline.com/display/EOW/Standardizing+loggers+at+ELC
// node .\testlog.js
const winston = require('winston');
class Logger {
  static log1 = (message, suppressLogs = false) => {
    if (!suppressLogs) {
      console.log(message);
    }
  };

  static options = () => {
    return {
      transports: [
        new winston.transports.File({
          filename: 'test-results/logs/weird.log',
          level: 'info',
          handleExceptions: true,
          format: winston.format.combine(
            winston.format.label({ label: 'json_format-unique-name' }),
            winston.format.timestamp(),
            winston.format.json()
          ),
        }),
      ],
      defaultMeta: {
        service1: 'test_service1',
        service2: 'test_service2',
      },
    };
  };
  static log = winston.createLogger(Logger.options());
}

module.exports = Logger.log;
// module.exports = Logger.log1;

// https://betterstack.com/community/guides/logging/how-to-install-setup-and-use-winston-and-morgan-to-log-node-js-applications/
// https://www.elastic.co/webinars/introduction-elk-stack
