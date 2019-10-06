'use strict';
const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.get('', (req, res, next) =>
{
   res.send('Hello World');
   next();
});

router.post('', userController.createUser);

module.exports = router;
