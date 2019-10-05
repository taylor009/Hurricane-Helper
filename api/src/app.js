'use strict';
const express    = require('express');
const morgan     = require('morgan');
const helmet     = require('helmet');
const bodyParser = require('body-parser');
const logger     = require('./config/logger');
const loginRoutes = require('./routes/login');

const app = express();


app.use(morgan('dev'));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/v1/login', loginRoutes);

module.exports = app;
