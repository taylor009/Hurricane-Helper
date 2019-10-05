'use strict';
const express    = require('express');
const morgan     = require('morgan');
const helmet     = require('helmet');
const bodyParser = require('body-parser');
const logger     = require('./config/logger');
const loginRoutes = require('./routes/login');
const userRoutes  = require('./routes/users');
const directoriesRoutes = require('./routes/directories');
const smsRoutes = require('./routes/sms');
const sosRoutes = require('./routes/sos');
const okayRoutes = require('./routes/okay');
const signUpRoutes = require('./routes/signup');

const app = express();


app.use(morgan('dev'));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Routes
app.use('/api/v1/login', loginRoutes);
app.use('/api/v1/users/:id', userRoutes);
app.use('/api/v1/directories', directoriesRoutes);
app.use('/api/v1/sms/:id', smsRoutes);
app.use('/api/v1/sos/:id', sosRoutes);
app.use('/api/v1/okay/:id', okayRoutes);
app.use('/api/v1/signup', signUpRoutes);

module.exports = app;
