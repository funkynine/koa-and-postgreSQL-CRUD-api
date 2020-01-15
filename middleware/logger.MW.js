const logger = require('../logger/logger');

module.exports = async function loggerMW ({method, url}, next) {
  // Create log
  logger({ message: `URL: ${url}`, method, status: false });

  await next();
};
