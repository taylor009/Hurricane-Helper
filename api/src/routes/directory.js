'use strict';
const express = require('express');
const router = express.Router();

const directoryController = require('../controllers/directory');

router.post('', directoryController.getDiretory);

module.exports = router;