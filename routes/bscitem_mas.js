//////////////////////////////////////
// 기본품목관리 CRUD
//////////////////////////////////////


var express 	= require('express');
var dbacc 		= require('../dbaccess');
var router 		= express.Router();
var util 			= require('util'); 

require('date-utils');

// mysql database handler.
var dbhandler = dbacc();

// SELECT
router.get('/', function(req, res) 
{
  var in_comp_cd		=	req.query.comp_cd		; // 업체코드  
	var in_grp_cd			=	req.query.grp_cd			; // 품목그룹코드
	var in_bscitem_cd	=	req.query.bscitem_cd	; // 품목코드  
	var in_vendor			=	req.query.vendor			; // 사업자코드 
	var in_use_yn			=	req.query.use_yn			; // 사용여부  
			
	console.log(req.query);
		
	var pool = dbhandler.createPool();
	pool.getConnection(function(err, connection)
	{		
	  connection.query( "CALL TB_BSCITEM_MAS_SELECT(?,?,?,?,?)"
	  								, [in_comp_cd, in_grp_cd, in_bscitem_cd, in_vendor,in_use_yn] 
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

// INSERT
router.post('/', function(req, res)
{	
  var in_comp_cd				= req.body["comp_cd"			]; // 업체코드  
	var in_grp_cd					= req.body["grp_cd"				]; // 품목그룹코드
	var in_bscitem_cd			= req.body["bscitem_cd"		]; // 품목코드  
	var in_bscitem_nm			= req.body["bscitem_nm"		]; // 품목명
	var in_bscitem_color	= req.body["bscitem_color"]; // 품목색상   
	var in_vendor					= req.body["vendor"				]; // 사업자코드 
	var in_use_yn					= req.body["use_yn"				]; // 사용여부  
	var in_memo						= req.body["memo"					]; // 메모    
	
	console.log(req.body);
	
	var pool = dbhandler.createPool();
	pool.getConnection(function(err, connection)
	{				  
	  connection.query( "SET @RESULT=0; CALL TB_BSCITEM_MAS_IUD('I',?, ?, ?, ?, ?, ?, ?, ?, @RESULT); SELECT @RESULT"
	  								, [in_comp_cd, in_grp_cd, in_bscitem_cd, in_bscitem_nm, in_bscitem_color, in_vendor, in_use_yn, in_memo	] 
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
	var in_comp_cd				= req.body["comp_cd"			]; // 업체코드  
	var in_grp_cd					= req.body["grp_cd"				]; // 품목그룹코드
	var in_bscitem_cd			= req.body["bscitem_cd"		]; // 품목코드  
	var in_bscitem_nm			= req.body["bscitem_nm"		]; // 품목명
	var in_bscitem_color	= req.body["bscitem_color"]; // 품목색상   
	var in_vendor					= req.body["vendor"				]; // 사업자코드 
	var in_use_yn					= req.body["use_yn"				]; // 사용여부  
	var in_memo						= req.body["memo"					]; // 메모    
	
	console.log(req.body);
	
	var pool = dbhandler.createPool();
	pool.getConnection(function(err, connection)
	{				  
	  connection.query( "SET @RESULT=0; CALL TB_BSCITEM_MAS_IUD('U',?, ?, ?, ?, ?, ?, ?, ?, @RESULT); SELECT @RESULT"
	  								, [in_comp_cd, in_grp_cd, in_bscitem_cd, in_bscitem_nm, in_bscitem_color, in_vendor, in_use_yn, in_memo	] 
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
	var in_comp_cd				= req.body["comp_cd"			]; // 업체코드  
	var in_grp_cd					= req.body["grp_cd"				]; // 품목그룹코드
	var in_bscitem_cd			= req.body["bscitem_cd"		]; // 품목코드  
	var in_bscitem_nm			= req.body["bscitem_nm"		]; // 품목명
	var in_bscitem_color	= req.body["bscitem_color"]; // 품목색상   
	var in_vendor					= req.body["vendor"				]; // 사업자코드 
	var in_use_yn					= req.body["use_yn"				]; // 사용여부  
	var in_memo						= req.body["memo"					]; // 메모    
	
	console.log(req.body);
	
	var pool = dbhandler.createPool();
	pool.getConnection(function(err, connection)
	{				  
	  connection.query( "SET @RESULT=0; CALL TB_BSCITEM_MAS_IUD('D',?, ?, ?, ?, ?, ?, ?, ?, @RESULT); SELECT @RESULT"
	  								, [in_comp_cd, in_grp_cd, in_bscitem_cd, in_bscitem_nm, in_bscitem_color, in_vendor, in_use_yn, in_memo	] 
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
