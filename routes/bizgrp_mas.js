//////////////////////////////////////
// �ŷ�ó�׷���� CRUD
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
	
	var in_comp_cd			= req.query.comp_cd	 	// ��ü�ڵ�				  
	var in_grp_nm				= req.query.grp_nm		// �ŷ�ó�׷��		    
	var in_use_yn				= req.query.use_yn		// ��뿩��				  
	
	console.log(req.query);
		
	var pool = dbhandler.createPool();
	pool.getConnection(function(err, connection)
	{		
	  connection.query( "CALL TB_BIZGRP_MAS_SELECT(?,?,?)"
	  								, [in_comp_cd, in_grp_nm, in_use_yn] 
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
	var in_comp_cd			= req.body["comp_cd"	]; // ��ü�ڵ�				  
	var in_bizgrp_cd		= req.body["bizgrp_cd"]; // �ŷ�ó�׷��ڵ�
	var in_grp_nm				= req.body["grp_nm"		]; // �ŷ�ó�׷��		    
	var in_use_yn				= req.body["use_yn"		]; // ��뿩��				  
	var in_memo					= req.body["memo"			]; // �޸�						
	
	console.log(req.body);
	
	var pool = dbhandler.createPool();
	pool.getConnection(function(err, connection)
	{
	  connection.query( "SET @RESULT=0; CALL TB_BIZGRP_MAS_IUD('I',?, ?, ?, ?, ?, @RESULT); SELECT @RESULT"
	  								, [in_comp_cd, in_bizgrp_cd, in_grp_nm, in_use_yn, in_memo	] 
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
	var in_comp_cd			= req.body["comp_cd"	]; // ��ü�ڵ�				  
	var in_bizgrp_cd		= req.body["bizgrp_cd"]; // �ŷ�ó�׷��ڵ�
	var in_grp_nm				= req.body["grp_nm"		]; // �ŷ�ó�׷��		    
	var in_use_yn				= req.body["use_yn"		]; // ��뿩��				  
	var in_memo					= req.body["memo"			]; // �޸�						
	
	console.log(req.body);
	
	var pool = dbhandler.createPool();
	pool.getConnection(function(err, connection)
	{
	  connection.query( "SET @RESULT=0; CALL TB_BIZGRP_MAS_IUD('U',?, ?, ?, ?, ?, @RESULT); SELECT @RESULT"
	  								, [in_comp_cd, in_bizgrp_cd, in_grp_nm, in_use_yn, in_memo	] 
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
	var in_comp_cd			= req.body["comp_cd"	]; // ��ü�ڵ�				  
	var in_bizgrp_cd		= req.body["bizgrp_cd"]; // �ŷ�ó�׷��ڵ�
	var in_grp_nm				= req.body["grp_nm"		]; // �ŷ�ó�׷��		    
	var in_use_yn				= req.body["use_yn"		]; // ��뿩��				  
	var in_memo					= req.body["memo"			]; // �޸�						
	
	console.log(req.body);
	
	var pool = dbhandler.createPool();
	pool.getConnection(function(err, connection)
	{
	  connection.query( "SET @RESULT=0; CALL TB_BIZGRP_MAS_IUD('D',?, ?, ?, ?, ?, @RESULT); SELECT @RESULT"
	  								, [in_comp_cd, in_bizgrp_cd, in_grp_nm, in_use_yn, in_memo	] 
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