
var mysql = require('mysql');
var config = require('./dbcfg').local;

var mysql = require('mysql');

module.exports = function () {
  return {    
    
    createPool:function()
    {	
    	 var pool = mysql.createPool({
			  connectionLimit : 10,
			  host            : '127.0.0.1',
			  user            : 'huadmin',
			  password        : '0956',
			  database        : 'hujackman_db',
			  multipleStatements : true
			  
			});
			
			return pool;			
    }
    
  }
};
