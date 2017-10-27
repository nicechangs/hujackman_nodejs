//////////////////////////////////////
// 업체관리 IUD
//////////////////////////////////////


var express = require('express');
var router = express.Router();

var dbacc = require('../dbaccess')();
var connection = dbacc.init();
	dbacc.OPEN(connection);
	
router.get('/', function(req, res) 
{

	connection.query('SELECT * FROM TB_COMP_MAS', function(err, rows, fields) 
	{
		//dbacc.CLOSE(connection);
	  if (!err)
	  {
	  	res.send(rows);
	    console.log('The solution is: ', rows);
	  }
	  else
	  {
	  	res.send(err);
	  	console.log('Error while performing Query.');
	  } 
	});		
	
});



router.post('/', function(req, res)
{  
	var in_comp_cd				= req.body["comp_cd"]			; 
	var in_comp_nm			  = req.body["comp_nm"]     ;
	var in_comp_addr		  = req.body["comp_addr"]   ;
	var in_comp_ownr_nm	  = req.body["comp_ownr_nm"];
	var in_comp_telno		  = req.body["comp_telno"]	;
	var in_use_yn				  = req.body["use_yn"]	    ;
	var in_memo					  = req.body["memo"]        ;
	
	
	console.log("in_comp_cd			=[" +	in_comp_cd			+ "]");
	console.log("in_comp_nm			=[" +	in_comp_nm			+ "]");
	console.log("in_comp_addr		=[" +	in_comp_addr		+ "]");
	console.log("in_comp_ownr_nm=[" +	in_comp_ownr_nm	+ "]");
	console.log("in_comp_telno	=[" +	in_comp_telno		+ "]");
	console.log("in_use_yn			=[" +	in_use_yn				+ "]");
	console.log("in_memo				=[" +	in_memo					+ "]");
	
		
	 res.send('func name :' + in_comp_nm);
	
	/*
	// CHECK REQ VALIDITY
	if(!req.body["password"] || !req.body["name"]){
	    result["success"] = 0;
	    result["error"] = "invalid request";
	    res.json(result);
	    return;
	}
	*/
	
});







module.exports = router;
