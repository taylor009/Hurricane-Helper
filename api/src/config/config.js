'use strict';
const winston = require('winston');
const path    = require('path');

const alignColorsAndTime = winston.format.combine(winston.format.colorize({
    all: true,
}), winston.format.label({
    label: '[LOGGER]',
}), winston.format.timestamp({
    format: 'YY-MM-DD HH:MM:SS',
}), winston.format.printf((info) => ` ${info.label}  ${info.timestamp}  ${info.level} : ${info.message}`));

const appTimeStamp = winston.format.combine(winston.format.timestamp({
    format: 'YY-MM-DD HH:MM:SS',
}), winston.format.printf((info) => `${info.timestamp}  ${info.level} : ${info.message}`));

const errorTimeStamp = winston.format.combine(winston.format.timestamp({
    format: 'YY-MM-DD HH:MM:SS',
}), winston.format.printf((error) => `${error.timestamp}  ${error.level} : ${error.message}`));


const config = {
    EMAIL_USER    : '',
    EMAIL_PASSWORD: '',
    S3_ACCESS_ID  : 'key will be in .env',
    S3_SECRET_KEY : 'key_will be IN .env',

    BASE_URL      : 'localhost:300',
    DB_URL        : 'dynamo url',
    SMTP          : {
        host: '1.244.84.5s', port: 25,
    },
    LOCAL_DB_NAME: 'mlinkcloud',
    LOGGER_CONFIG: {
        APP_LOG_FILE: {
            level           : 'info',
            filename        : path.join('src/logs', 'app.log'),
            handleExceptions: true,
            json            : false,
            maxsize         : 5242880,
            maxFiles        : 5,
            format          : winston.format.combine(appTimeStamp),
        }, ERROR_LOG_FILE: {
            level           : 'error',
            filename        : path.join('src/logs', 'error.log'),
            handleExceptions: true,
            json            : true,
            maxsize         : 5242880,
            maxFiles        : 5,
            colorize        : true,
            format          : winston.format.combine(errorTimeStamp),
        }, CONSOLE: {
            level           : 'debug',
            handleExceptions: true,
            json            : false,
            format          : winston.format.combine(alignColorsAndTime),
        },
    },
};

module.exports = config;
