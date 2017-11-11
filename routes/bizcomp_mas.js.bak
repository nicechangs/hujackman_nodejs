//////////////////////////////////////
// 거래처관리 CRUD
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
	var in_comp_cd			= req.query.comp_cd	  	// 업체코드				  
 	var in_bizgrp_cd		= req.query.bizgrp_cd   // 거래처그룹코드
	var in_biz_nm				= req.query.biz_nm		  // 거래처명		    
	var in_use_yn				= req.query.use_yn		  // 사용여부	
	
	console.log(req.query);
		
	var pool = dbhandler.createPool();
	pool.getConnection(function(err, connection)
	{		
	  connection.query( "CALL TB_BIZCOMP_MAS_SELECT(?,?,?,?)"
	  								, [in_comp_cd, in_bizgrp_cd, in_biz_nm, in_use_yn] 
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
	var in_comp_cd			= req.body["comp_cd"		]; // 업체코드      
	var in_bizco_cd			= req.body["bizco_cd"		]; // 거래처코드
	var in_bizgrp_cd		= req.body["bizgrp_cd"	]; // 거래처그룹코드   
	var in_bizco_t			= req.body["bizco_t"		]; // 거래처구분     10:입고처, 20:출고처, 30:개통처
	var in_biz_num			= req.body["biz_num"		]; // 거래처사업자번호       
	var in_biz_nm				= req.body["biz_nm"			]; // 거래처명      
	var in_main_telno		= req.body["main_telno"	]; // 거래처대표번호   
	var in_addr					= req.body["addr"				]; // 거래처주소     
	var in_faxno				= req.body["faxno"			]; // 거래처팩스번호   
	var in_ownr_nm			= req.body["ownr_nm"		]; // 거래처대표자명   
	var in_ownr_telno		= req.body["ownr_telno"	]; // 거래처대표자전화번호
	var in_ownr_email		= req.body["ownr_email"	]; // 거래처대표자이메일 
	var in_bnkr_nm			= req.body["bnkr_nm"		]; // 은행명       
	var in_acnt_nm			= req.body["acnt_nm"		]; // 예금주       
	var in_acnt_no			= req.body["acnt_no"		]; // 계좌번호      
	var in_use_yn				= req.body["use_yn"			]; // 사용여부      
	var in_memo					= req.body["memo"				]; // 메모    
						
	
	console.log(req.body);
	
	var pool = dbhandler.createPool();
	pool.getConnection(function(err, connection)
	{
		
	  connection.query( "SET @RESULT=0; CALL TB_BIZCOMP_MAS_IUD('I',?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?, @RESULT); SELECT @RESULT"
	  								, [in_comp_cd,in_bizco_cd,in_bizgrp_cd,in_bizco_t
											,in_biz_num,in_biz_nm,in_main_telno,in_addr
											,in_faxno,in_ownr_nm,in_ownr_telno,in_ownr_email	
											,in_bnkr_nm	,in_acnt_nm	,in_acnt_no	,in_use_yn,in_memo	] 
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
	var in_comp_cd			= req.body["comp_cd"		]; // 업체코드      
	var in_bizco_cd			= req.body["bizco_cd"		]; // 거래처코드
	var in_bizgrp_cd		= req.body["bizgrp_cd"	]; // 거래처그룹코드   
	var in_bizco_t			= req.body["bizco_t"		]; // 거래처구분     10:입고처, 20:출고처, 30:개통처
	var in_biz_num			= req.body["biz_num"		]; // 거래처사업자번호       
	var in_biz_nm				= req.body["biz_nm"			]; // 거래처명      
	var in_main_telno		= req.body["main_telno"	]; // 거래처대표번호   
	var in_addr					= req.body["addr"				]; // 거래처주소     
	var in_faxno				= req.body["faxno"			]; // 거래처팩스번호   
	var in_ownr_nm			= req.body["ownr_nm"		]; // 거래처대표자명   
	var in_ownr_telno		= req.body["ownr_telno"	]; // 거래처대표자전화번호
	var in_ownr_email		= req.body["ownr_email"	]; // 거래처대표자이메일 
	var in_bnkr_nm			= req.body["bnkr_nm"		]; // 은행명       
	var in_acnt_nm			= req.body["acnt_nm"		]; // 예금주       
	var in_acnt_no			= req.body["acnt_no"		]; // 계좌번호      
	var in_use_yn				= req.body["use_yn"			]; // 사용여부      
	var in_memo					= req.body["memo"				]; // 메모    
						
	
	console.log(req.body);
	
	var pool = dbhandler.createPool();
	pool.getConnection(function(err, connection)
	{
		
	  connection.query( "SET @RESULT=0; CALL TB_BIZCOMP_MAS_IUD('U',?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?, @RESULT); SELECT @RESULT"
	  								, [in_comp_cd,in_bizco_cd,in_bizgrp_cd,in_bizco_t
											,in_biz_num,in_biz_nm,in_main_telno,in_addr
											,in_faxno,in_ownr_nm,in_ownr_telno,in_ownr_email	
											,in_bnkr_nm	,in_acnt_nm	,in_acnt_no	,in_use_yn,in_memo	] 
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
	var in_comp_cd			= req.body["comp_cd"		]; // 업체코드      
	var in_bizco_cd			= req.body["bizco_cd"		]; // 거래처코드
	var in_bizgrp_cd		= req.body["bizgrp_cd"	]; // 거래처그룹코드   
	var in_bizco_t			= req.body["bizco_t"		]; // 거래처구분     10:입고처, 20:출고처, 30:개통처
	var in_biz_num			= req.body["biz_num"		]; // 거래처사업자번호       
	var in_biz_nm				= req.body["biz_nm"			]; // 거래처명      
	var in_main_telno		= req.body["main_telno"	]; // 거래처대표번호   
	var in_addr					= req.body["addr"				]; // 거래처주소     
	var in_faxno				= req.body["faxno"			]; // 거래처팩스번호   
	var in_ownr_nm			= req.body["ownr_nm"		]; // 거래처대표자명   
	var in_ownr_telno		= req.body["ownr_telno"	]; // 거래처대표자전화번호
	var in_ownr_email		= req.body["ownr_email"	]; // 거래처대표자이메일 
	var in_bnkr_nm			= req.body["bnkr_nm"		]; // 은행명       
	var in_acnt_nm			= req.body["acnt_nm"		]; // 예금주       
	var in_acnt_no			= req.body["acnt_no"		]; // 계좌번호      
	var in_use_yn				= req.body["use_yn"			]; // 사용여부      
	var in_memo					= req.body["memo"				]; // 메모    
						
	
	console.log(req.body);
	
	var pool = dbhandler.createPool();
	pool.getConnection(function(err, connection)
	{
		
	  connection.query( "SET @RESULT=0; CALL TB_BIZCOMP_MAS_IUD('D',?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?, @RESULT); SELECT @RESULT"
	  								, [in_comp_cd,in_bizco_cd,in_bizgrp_cd,in_bizco_t
											,in_biz_num,in_biz_nm,in_main_telno,in_addr
											,in_faxno,in_ownr_nm,in_ownr_telno,in_ownr_email	
											,in_bnkr_nm	,in_acnt_nm	,in_acnt_no	,in_use_yn,in_memo	] 
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
