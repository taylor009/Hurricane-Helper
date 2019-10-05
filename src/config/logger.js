'use strict';
const winston = require('winston');
const config  = require('./config');

const logger = winston.createLogger({
    transports: [
        new (winston.transports.Console)(config.LOGGER_CONFIG.CONSOLE),
        new (winston.transports.File)(config.LOGGER_CONFIG.APP_LOG_FILE),
        new (winston.transports.File)(config.LOGGER_CONFIG.ERROR_LOG_FILE),
    ],
});

if (process.env.NODE_ENV !== 'production')
{
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}

module.exports = logger;
