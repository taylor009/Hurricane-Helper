'use strict';
const argon2 = require('argon2');
const logger = require('../config/logger');

const User = require('../models/user');

exports.createUser = async (req, res, next) =>
{
  try{
    const hash = await argon2.hash(req.body.password, {hashLength: 40}).then(hash =>
    {
      const user = new User({
        phoneNumber: req.body.phoneNumber,
        password: hash
      });
      user.save().then(result =>
      {
        res.status(201).json({
          message: 'User created!',
          result: result
        });
      }).catch(error =>
      {
        logger.error(`Error creating a User: ${error.message}`)
      })
    });
    hash()
  }
  catch(error)
  {
    logger.error(`Error during creation of user ${error.message}`);
  }
  next();
};
