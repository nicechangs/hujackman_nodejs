
var mysql = require('mysql');
var config = require('./dbcfg').local;

module.exports = function () {
  return {
    init: function () {
      return mysql.createConnection({
        host: config.host,
        port: config.port,
        user: config.user,
        password: config.password,
        database: config.database
      })
    },    
    OPEN: function (con) {
      con.connect(function (err) {
        if (err) {
          console.error('mysql connection error :' + err);
          return -1;
          
        } else {
          console.info('mysql is connected successfully.');
        }
      })
    },
    CLOSE: function (con){
      con.end();
    }
  }
};