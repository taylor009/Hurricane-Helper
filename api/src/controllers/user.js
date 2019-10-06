'use strict';
const bcrypt = require("bcrypt");
const logger = require('../config/logger');

const User = require('../models/user');


exports.createUser = (req, res, next) =>
{
    bcrypt.hash(req.body.password, 10).then(hash => {
        const user = new User.User({
            phoneNumber: req.body.phoneNumber,
            password: hash,
        });
        user.save().then(result =>
        {
            res.status(201).json({
                message: 'User created!',
                result : result
            });
        }).catch(error =>
        {
            res.status(500).json({
                message: 'Invalid authentication credentials!'
            });
            logger.error(`Error occurred: ${error.message}`);
        });
        next();
    })
};


