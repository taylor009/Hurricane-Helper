'use strict';
const path = require('path');
require('dotenv').config({path: path.resolve('./.env')});
const express    = require('express');
const AWS        = require('aws-sdk');
const dynamoose  = require('dynamoose');
const morgan     = require('morgan');
const helmet     = require('helmet');
const bodyParser = require('body-parser');
const logger     = require('./config/logger');

const myCredentials = new AWS.CognitoIdentityCredentials({IdentityPoolId: 'IDENTITY_POOL_ID'});
let myConfig        = new AWS.Config({
    credentials: myCredentials, region     : 'us-east-1',
});


// Load the AWS SDK for Node.js
// Set the region
AWS.config.update({region: "us-east-1"});

// Create the DynamoDB service object
const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

const params = {
    AttributeDefinitions : [
        {
            AttributeName: 'CUSTOMER_ID',
            AttributeType: 'N'
        },
        {
            AttributeName: 'CUSTOMER_NAME',
            AttributeType: 'S'
        }
    ],
    KeySchema            : [
        {
            AttributeName: 'CUSTOMER_ID',
            KeyType      : 'HASH'
        },
        {
            AttributeName: 'CUSTOMER_NAME',
            KeyType      : 'RANGE'
        }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits : 1,
        WriteCapacityUnits: 1
    },
    TableName            : 'CUSTOMER_LIST',
    StreamSpecification  : {
        StreamEnabled: false
    }
};

const createDynamooseInstance = () => {
    dynamoose.AWS.config.update({
        accessKeyId: 'AKID',
        secretAccessKey: 'SECRET',
        region: 'us-east-1'
    });
    dynamoose.setDDB(ddb); // This defaults to "http://localhost:8000"
};


createDynamooseInstance();

// Routes
const signUpRoutes = require('./routes/signup');


const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/v1/signup', signUpRoutes);

module.exports = app;
