//////////////////////////////////////
// 거래이력조회 CRUD
//////////////////////////////////////


var express 	= require('express');
var dbacc 		= require('../dbaccess');
var router 		= express.Router();
var util 			= require('util'); 

require('date-utils');

// mysql database handler.
var dbhandler = dbacc();

router.get('/', function(req, res) 
{
	var in_comp_cd			= req.query.comp_cd	  	// 업체코드				  
 	var in_start_date		= req.query.start_date   // 시작일자
	var in_end_date				= req.query.end_date		  // 종료일자		    
	
	console.log(req.query);
		
	var pool = dbhandler.createPool();
	pool.getConnection(function(err, connection)
	{	
	  connection.query( "CALL TB_BIZTRX_HIS_SELECT(?,?,?)"
	  								, [in_comp_cd, in_start_date, in_end_date] 
										, function (err, rows) 
										{	  
									    if(err)
									    {
									    	res.send(JSON.stringify(err));
									    	console.log(err);
									    }     
									    else 
									    {
									    	res.send(JSON.stringify(rows[0]));
									      console.log(rows);
									    }
									  });									  
	  connection.release();
	});
});

module.exports = router;
