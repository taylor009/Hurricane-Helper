const fs = require('fs');
const data = JSON.parse(fs.readFileSync('../data/', 'utf-8'));

exports.readFile = () => {
    return JSON.stringify(data);
}