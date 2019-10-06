'use strict';
const express = require('express');
const router = express.Router();

const loginController = require('../controllers/login');

router.post('', loginController.loginUser);

module.exports = router;

