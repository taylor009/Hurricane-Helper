'use strict';
const express    = require('express');
const morgan     = require('morgan');
const helmet     = require('helmet');
const dynamoose  = require('dynamoose');
const bodyParser = require('body-parser');
const logger     = require('./config/logger');

const AWS = require('aws-sdk');
//
// const dynamo = new AWS.DynamoDB({'http://localhost:4567'});
//
// dynamo.listTables(console.log.bind(console));

const app = express();

dynamoose.local();

app.use(morgan('dev'));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


module.exports = app;
