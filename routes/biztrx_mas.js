//////////////////////////////////////
// �ŷ�ó���� CRUD
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
	var in_comp_cd			= req.query.comp_cd	  	// ��ü�ڵ�				  
 	var in_bizgrp_cd		= req.query.bizgrp_cd   // �ŷ�ó�׷��ڵ�
	var in_biz_nm				= req.query.biz_nm		  // �ŷ�ó��		    
	var in_use_yn				= req.query.use_yn		  // ��뿩��	
	
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
	//	��ü�ڵ�
	var in_comp_cd = req.body["comp_cd"		];
	
	// �ŷ��ڵ� 
	var in_trx_cd = '';
	if( req.body["trx_cd"] != '' ) in_trx_cd = req.body["trx_cd"];
	  
	// �԰�ó
	var in_inb_biz_cd = '';
	if( req.body["inb_biz_cd"] != '' ) in_inb_biz_cd = req.body["inb_biz_cd"];
		
	// �԰��Ͻ�  
	var in_inb_dt = null;
	if( req.body["inb_dt"] != '') in_inb_dt = req.body["inb_dt"];
		
	// �԰�����  
	var in_inb_br_cd = '';
	if( req.body["inb_br_cd" ] != '') in_inb_br_cd = req.body["inb_br_cd" ];
	
	// ǰ���ڵ�  
	var in_bscitem_cd = '';
	if( req.body["bscitem_cd"] != '' ) in_bscitem_cd = req.body["bscitem_cd"];
	
	// ���ڵ�
	var in_bar_cd = ''
	if( req.body["bar_cd"] != '' ) in_bar_cd= req.body["bar_cd"];
		
	// �ŷ�����  10:�԰�/20:���/30:����
	var in_trx_st         = '';
	if( req.body["trx_st"] != '') in_trx_st = req.body["trx_st"];
	
	// ����Ͻ�  
	var in_out_dt = null;
	if( req.body["out_dt"] != '') in_out_dt = req.body["out_dt"];
	
	// ���óCD
	var in_out_biz_cd = '';
	if( req.body["out_biz_cd"] != '') in_out_biz_cd = req.body["out_biz_cd"];
	
	// �����CD
	var in_usr_cd = '';
	if(	req.body["usr_cd"] != '')  in_usr_cd = req.body["usr_cd"];
	
	// ��뿩��
	var in_use_yn = '';
	if( req.body["use_yn"] != '') in_use_yn = req.body["use_yn"];
	
	// �޸�    
	var in_memo = '';           
	if( req.body["memo"] != '' )  in_memo = req.body["memo"];
	
	console.log(req.body);
	
	var pool = dbhandler.createPool();
	pool.getConnection(function(err, connection)
	{
	  connection.query( "SET @RESULT=0; CALL TB_BIZTRX_MAS_IUD('I',?,?,?,?,?,?,?,?,?,?,?,?,?,@RESULT); SELECT @RESULT"
	  								, [in_comp_cd ,in_trx_cd ,in_inb_biz_cd ,in_inb_dt ,in_inb_br_cd ,in_bscitem_cd ,in_bar_cd ,in_trx_st     
											,in_out_dt ,in_out_biz_cd ,in_usr_cd,in_use_yn,in_memo ] 
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
	//	��ü�ڵ�
	var in_comp_cd = req.body["comp_cd"		];
	
	// �ŷ��ڵ� 
	var in_trx_cd = '';
	if( req.body["trx_cd"] != '' ) in_trx_cd = req.body["trx_cd"];
	  
	// �԰�ó
	var in_inb_biz_cd = '';
	if( req.body["inb_biz_cd"] != '' ) in_inb_biz_cd = req.body["inb_biz_cd"];
		
	// �԰��Ͻ�  
	var in_inb_dt = null;
	if( req.body["inb_dt"] != '') in_inb_dt = req.body["inb_dt"];
		
	// �԰�����  
	var in_inb_br_cd = '';
	if( req.body["inb_br_cd" ] != '') in_inb_br_cd = req.body["inb_br_cd" ];
	
	// ǰ���ڵ�  
	var in_bscitem_cd = '';
	if( req.body["bscitem_cd"] != '' ) in_bscitem_cd = req.body["bscitem_cd"];
	
	// ���ڵ�
	var in_bar_cd = ''
	if( req.body["bar_cd"] != '' ) in_bar_cd= req.body["bar_cd"];
		
	// �ŷ�����  10:�԰�/20:���/30:����
	var in_trx_st         = '';
	if( req.body["trx_st"] != '') in_trx_st = req.body["trx_st"];
	
	// ����Ͻ�  
	var in_out_dt = null;
	if( req.body["out_dt"] != '') in_out_dt = req.body["out_dt"];
	
	// ���óCD
	var in_out_biz_cd = '';
	if( req.body["out_biz_cd"] != '') in_out_biz_cd = req.body["out_biz_cd"];
	
	// �����CD
	var in_usr_cd = '';
	if(	req.body["usr_cd"] != '')  in_usr_cd = req.body["usr_cd"];
	
	// ��뿩��
	var in_use_yn = '';
	if( req.body["use_yn"] != '') in_use_yn = req.body["use_yn"];
	
	// �޸�    
	var in_memo = '';           
	if( req.body["memo"] != '' )  in_memo = req.body["memo"];
	
	console.log(req.body);
	
	var pool = dbhandler.createPool();
	pool.getConnection(function(err, connection)
	{
	  connection.query( "SET @RESULT=0; CALL TB_BIZTRX_MAS_IUD('U',?,?,?,?,?,?,?,?,?,?,?,?,?,@RESULT); SELECT @RESULT"
	  								, [in_comp_cd ,in_trx_cd ,in_inb_biz_cd ,in_inb_dt ,in_inb_br_cd ,in_bscitem_cd ,in_bar_cd ,in_trx_st     
											,in_out_dt ,in_out_biz_cd ,in_usr_cd,in_use_yn,in_memo ] 
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
	//	��ü�ڵ�
	var in_comp_cd = req.body["comp_cd"		];
	
	// �ŷ��ڵ� 
	var in_trx_cd = '';
	if( req.body["trx_cd"] != '' ) in_trx_cd = req.body["trx_cd"];
	  
	// �԰�ó
	var in_inb_biz_cd = '';
	if( req.body["inb_biz_cd"] != '' ) in_inb_biz_cd = req.body["inb_biz_cd"];
		
	// �԰��Ͻ�  
	var in_inb_dt = null;
	if( req.body["inb_dt"] != '') in_inb_dt = req.body["inb_dt"];
		
	// �԰�����  
	var in_inb_br_cd = '';
	if( req.body["inb_br_cd" ] != '') in_inb_br_cd = req.body["inb_br_cd" ];
	
	// ǰ���ڵ�  
	var in_bscitem_cd = '';
	if( req.body["bscitem_cd"] != '' ) in_bscitem_cd = req.body["bscitem_cd"];
	
	// ���ڵ�
	var in_bar_cd = ''
	if( req.body["bar_cd"] != '' ) in_bar_cd= req.body["bar_cd"];
		
	// �ŷ�����  10:�԰�/20:���/30:����
	var in_trx_st         = '';
	if( req.body["trx_st"] != '') in_trx_st = req.body["trx_st"];
	
	// ����Ͻ�  
	var in_out_dt = null;
	if( req.body["out_dt"] != '') in_out_dt = req.body["out_dt"];
	
	// ���óCD
	var in_out_biz_cd = '';
	if( req.body["out_biz_cd"] != '') in_out_biz_cd = req.body["out_biz_cd"];
	
	// �����CD
	var in_usr_cd = '';
	if(	req.body["usr_cd"] != '')  in_usr_cd = req.body["usr_cd"];
	
	// ��뿩��
	var in_use_yn = '';
	if( req.body["use_yn"] != '') in_use_yn = req.body["use_yn"];
	
	// �޸�    
	var in_memo = '';           
	if( req.body["memo"] != '' )  in_memo = req.body["memo"];
	
	console.log(req.body);
	
	var pool = dbhandler.createPool();
	pool.getConnection(function(err, connection)
	{
	  connection.query( "SET @RESULT=0; CALL TB_BIZTRX_MAS_IUD('D',?,?,?,?,?,?,?,?,?,?,?,?,?,@RESULT); SELECT @RESULT"
	  								, [in_comp_cd ,in_trx_cd ,in_inb_biz_cd ,in_inb_dt ,in_inb_br_cd ,in_bscitem_cd ,in_bar_cd ,in_trx_st     
											,in_out_dt ,in_out_biz_cd ,in_usr_cd,in_use_yn,in_memo ] 
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