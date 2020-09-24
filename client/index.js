const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const seed = require('./seed.js');

const connection = mysql.createConnection(mysqlConfig);

module.exports = {
  //
};