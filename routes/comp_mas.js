//////////////////////////////////////
// ��ü���� IUD
//////////////////////////////////////


var express 	= require('express');
var dbacc 		= require('../dbaccess');
var router 		= express.Router();
var util 			= require('util'); 


// mysql database handler.
var dbhandler = dbacc();

// SELECT
// ex) http://127.0.0.1:3000/comp_mas?comp_nm=�޸�&use_yn=Y	
router.get('/', function(req, res) 
{
	var in_comp_nm			  = req.query.comp_nm;
	var in_use_yn				  = req.query.use_yn;
		
	console.log(req.query);
	
	var pool = dbhandler.createPool();
	pool.getConnection(function(err, connection)
	{	
	  connection.query( "CALL TB_COMP_MAS_SELECT(?,?,'10')"
	  								, [in_comp_nm, in_use_yn] 
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
