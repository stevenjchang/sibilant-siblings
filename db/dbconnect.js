var mysql = require('mysql');

// Create a database connection and export it from this file.

var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'foodQuest',
  multipleStatements: true
});

connection.connect();

module.exports.connection = connection;