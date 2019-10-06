const jwt = require('jsonwebtoken');
const logger = require('../config/logger');

const User = require('../models/user');

exports.loginUser = (req, res) => {

    try {
        let username = req.query.username;
        let passwd = req.query.password;

        if ( username && passwd ) {
           User.query('phoneNumber').eq(username).exec(function(err, users) {
               if ( users.password === passwd ) {
                   let token = jwt.sign({ data: username }, 'secret', { expiresIn: '1h' });
                   res.send({token: token});
               } else {
                   res.send(err);
               }
           });
        } else {
            res.send('bad request');
        }
    } catch(err) {
        logger.error(`Error during creation of user ${err.message}`);
    }
}
