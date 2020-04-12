const mysql = require('mysql');

var database = mysql.createConnection({
    // host: '82.227.52.114',
    host: 'localhost',
    user: 'sondage',
    password: 'Eclipse.1991',
    database: 'steamapp'
});

module.exports = database;