'use strict';

const winston = require('winston');

module.exports = function logger({message, status, method}) {
  const date = new Date();
  const YEAR = date.getFullYear();
  const MONTH = date.getMonth() + 1;
  const DAY = date.getDate();
  const HOURS = date.getHours();
  const MINUTES = date.getMinutes();
  const SECONDS = date.getSeconds();

  const loggerConfiguration = {
    level: 'info',
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.align(),
      winston.format.printf(info => `${info.timestamp} ${info.level}: Method: ${info.method}, Message: ${info.message.trim()}`)
    ),
    transports: [
      new winston.transports.Console({ level: 'info' }),
      new winston.transports.File({
        filename: `logs/${YEAR}/${MONTH}/${DAY}/${HOURS}-${MINUTES}-${SECONDS}-info.log`, level: 'info'
      }),
      new winston.transports.File({
        filename: `logs/${YEAR}/${MONTH}/${DAY}/${HOURS}-${MINUTES}-${SECONDS}-error.log`, level: 'error'
      }),
    ]
  }

  const logger = winston.createLogger(loggerConfiguration);

  logger.log({ level: 'info', message, method });

  if (status) { logger.log({ level: 'error', message, method }) }  

  if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.align(),
            winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message.trim()}`)
        )
    }));
  }
};

