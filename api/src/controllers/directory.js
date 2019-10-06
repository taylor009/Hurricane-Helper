const jwt = require('jsonwebtoken');
const logger = require('../config/logger');

const Directory = require('../models/directory');

exports.getDirectory = (req, res) => {

    try {
        let token = req.query.token;

        console.log(Directory);
    } catch(err) {
        logger.error(`Error during creation of user ${err.message}`);
    }
}
