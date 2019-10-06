'use strict';
const path = require('path');
require('dotenv').config({path: path.resolve('./config/.env')});
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

const createDynamooseInstance = () => {
    dynamoose.AWS.config.update({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: 'us-east-1'
    });
    dynamoose.setDDB(ddb); // This defaults to "http://localhost:8000"
};


createDynamooseInstance();

// Routes
const signUpRoutes = require('./routes/signup');


const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

app.use(morgan('dev'));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/v1/signup', signUpRoutes);

module.exports = app;
