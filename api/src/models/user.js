'use strict';
const dynamoose = require('dynamoose');

const Schema = dynamoose.Schema;

const UserSchema = new Schema({
    phoneNumber: {
        type: String,
        require: true,
        unique: true
    },
    password: {
      type: String,
      required: true
    }
});


exports.User = dynamoose.model('User', UserSchema);
