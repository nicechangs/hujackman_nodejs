//////////////////////////////////////
// TB_COMP_MAS IUD
//////////////////////////////////////

var express 	= require('express');
var dbacc 		= require('../dbaccess');
var router 		= express.Router();
var util 			= require('util'); 


// mysql database handler.
var dbhandler = dbacc();

// 전체데이타
router.get('/', function(req, res) 
{
	var pool = dbhandler.createPool();
	pool.getConnection(function(err, connection)
	{	
	  connection.query( "CALL SP_GET_COMPANY_LIST('')"
										, function (err, rows) 
										{	  
									    if(err)
									    {
									    	res.send(err);
									    	console.log(err);
									    }     
									    else 
									    {
									    	res.send(rows);
									      console.log(rows);
									    }
									  });									  
	  connection.release();
	});
});

// 업체명검색
router.get('/:name', function(req, res) 
{
	console.log(req.query);
	console.log(req.params.name);
	var pool = dbhandler.createPool();
	pool.getConnection(function(err, connection)
	{	
	  connection.query( "CALL SP_GET_COMPANY_LIST(?)"
	  								, [req.params.name] 
										, function (err, rows) 
										{	  
									    if(err)
									    {
									    	res.send(err);
									    	console.log(err);
									    }     
									    else 
									    {
									    	res.send(rows);
									      console.log(rows);
									    }
									  });									  
	  connection.release();
	});
});


// INSERT
router.post('/', function(req, res)
{  
	var in_comp_cd				= req.body["comp_cd"]			; 
	var in_comp_nm			  = req.body["comp_nm"]     ;
	var in_comp_addr		  = req.body["comp_addr"]   ;
	var in_comp_ownr_nm	  = req.body["comp_ownr_nm"];
	var in_comp_telno		  = req.body["comp_telno"]	;
	var in_use_yn				  = req.body["use_yn"]	    ;
	var in_memo					  = req.body["memo"]        ;
	
	console.log(req.body);
	
	var pool = dbhandler.createPool();
	pool.getConnection(function(err, connection)
	{				  
	  connection.query( "SET @RESULT=0; CALL TB_COMP_MAS_IUD('I',?,?,?,?,?,?,?, @RESULT); SELECT @RESULT"
	  								, [in_comp_cd, in_comp_nm, in_comp_addr, in_comp_ownr_nm, in_comp_telno, in_use_yn, in_memo] 
										, function (err, rows) 
										{	  
									    if(err)
									    {
									    	res.send(err);
									    	console.log(err);
									    }     
									    else 
									    {
									    	res.send(rows);
									      console.log(rows);
									    }
									  });									  
	  connection.release();
	});
});


// UPDATE
router.put('/', function(req, res)
{  
	var in_comp_cd				= req.body["comp_cd"]			; 
	var in_comp_nm			  = req.body["comp_nm"]     ;
	var in_comp_addr		  = req.body["comp_addr"]   ;
	var in_comp_ownr_nm	  = req.body["comp_ownr_nm"];
	var in_comp_telno		  = req.body["comp_telno"]	;
	var in_use_yn				  = req.body["use_yn"]	    ;
	var in_memo					  = req.body["memo"]        ;
	
	console.log(req.body);
	
	var pool = dbhandler.createPool();
	pool.getConnection(function(err, connection)
	{				  
	  connection.query( "SET @RESULT=0; CALL TB_COMP_MAS_IUD('U',?,?,?,?,?,?,?, @RESULT); SELECT @RESULT"
	  								, [in_comp_cd, in_comp_nm, in_comp_addr, in_comp_ownr_nm, in_comp_telno, in_use_yn, in_memo] 
										, function (err, rows) 
										{	  
									    if(err)
									    {
									    	res.send(err);
									    	console.log(err);
									    }     
									    else 
									    {
									    	res.send(rows);
									      console.log(rows);
									    }
									  });									  
	  connection.release();
	});
});

// DELETE
router.delete('/', function(req, res)
{  
	var in_comp_cd				= req.body["comp_cd"]			; 
	var in_comp_nm			  = req.body["comp_nm"]     ;
	var in_comp_addr		  = req.body["comp_addr"]   ;
	var in_comp_ownr_nm	  = req.body["comp_ownr_nm"];
	var in_comp_telno		  = req.body["comp_telno"]	;
	var in_use_yn				  = req.body["use_yn"]	    ;
	var in_memo					  = req.body["memo"]        ;
	
	console.log(req.body);
	
	var pool = dbhandler.createPool();
	pool.getConnection(function(err, connection)
	{				  
	  connection.query( "SET @RESULT=0; CALL TB_COMP_MAS_IUD('D',?,?,?,?,?,?,?, @RESULT); SELECT @RESULT"
	  								, [in_comp_cd, in_comp_nm, in_comp_addr, in_comp_ownr_nm, in_comp_telno, in_use_yn, in_memo] 
										, function (err, rows) 
										{	  
									    if(err)
									    {
									    	res.send(err);
									    	console.log(err);
									    }     
									    else 
									    {
									    	res.send(rows);
									      console.log(rows);
									    }
									  });									  
	  connection.release();
	});
});

module.exports = router;
