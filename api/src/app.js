'use strict';
const path = require('path');
require('dotenv').config({path: path.resolve('./config/.env')});
const express    = require('express');
const morgan     = require('morgan');
const helmet     = require('helmet');
const bodyParser = require('body-parser');
const logger     = require('./config/logger');

const dynamoose = require('dynamoose');
const dynalite = require('dynalite');

const startUpAndReturnDynamo = async () => {
    const dynaliteServer = dynalite();
    await dynaliteServer.listen(8000);
    return dynaliteServer;
};

const createDynamooseInstance = () => {
    dynamoose.AWS.config.update({
        accessKeyId: 'AKID',
        secretAccessKey: 'SECRET',
        region: 'us-east-1'
    });
    dynamoose.local(); // This defaults to "http://localhost:8000"
};

// const createAndGetCat = async () => {
//     const Cat = dynamoose.model('Cat', {id: Number, name: String});
//     const garfield = new Cat({id: 666, name: 'Garfield'});
//     await garfield.save();
//     const badCat = await Cat.get(666);
//     return badCat;
// };

const bootStrap = async () => {
    await startUpAndReturnDynamo();
    createDynamooseInstance();
    const badCat = await createAndGetCat();
    console.log('Never trust a smiling cat. - ' + badCat.name);
};

bootStrap().then();

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


module.exports = app;
