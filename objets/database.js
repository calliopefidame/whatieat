const mysql = require('mysql');

var database = mysql.createConnection({
    host: 'localhost',
    user: 'sondage',
    password: 'Eclipse.1991',
    database: 'steamapp'
});

module.exports = database;