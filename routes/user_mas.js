//////////////////////////////////////
// ����ڰ��� CRUD
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
	var in_comp_cd			  = req.query.comp_cd;
	var in_br_cd					= req.query.br_cd; 			// �����ڵ�
	var in_usr_nm 				= req.query.usr_nm; // ����ڸ�
	var in_use_yn				  = req.query.use_yn;
		
	console.log(req.query);
		
	var pool = dbhandler.createPool();
	pool.getConnection(function(err, connection)
	{		
	  connection.query( "CALL TB_USER_MAS_SELECT(?,?,?,?)"
	  								, [in_comp_cd, in_br_cd, in_usr_nm, in_use_yn] 
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
	var in_comp_cd				= req.body["comp_cd"			]; // ��ü�ڵ�
	var in_br_cd					= req.body["br_cd"				]; // �����ڵ�
	var in_usr_id					= req.body["usr_id"				]; // ����ھ��̵�
	var in_usr_cd					= req.body["usr_cd"				]; // ������ڵ�
	var in_usr_pwd				= req.body["usr_pwd"			]; // ����ں�й�ȣ
	var in_usr_nm 				= req.body["usr_nm" 			]; // ����ڸ�
	var in_usr_dob				= req.body["usr_dob"			]; // �������
	var in_usr_telno 			= req.body["usr_telno" 		]; // �������ȭ��ȣ
	var in_usr_email 			= req.body["usr_email" 		]; // ������̸���
	var in_usr_addr				= req.body["usr_addr"			]; // ������ּ�
	var in_usr_grant			= req.body["usr_grant"		]; // ����ڱ���
	var in_last_login_dt	= req.body["last_login_dt"]; // �������α����Ͻ�
	var in_use_yn 				= req.body["use_yn" 			]; // ��뿩��
	var in_memo 					= req.body["memo" 				]; // �޸�

	console.log(req.body);

	var pool = dbhandler.createPool();
	pool.getConnection(function(err, connection)
	{				  
	  connection.query( "SET @RESULT=0; CALL TB_USER_MAS_IUD('I',?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, @RESULT); SELECT @RESULT"
	  								, [in_comp_cd, in_br_cd, in_usr_id, in_usr_cd, in_usr_pwd, in_usr_nm, in_usr_dob, in_usr_telno, in_usr_email, in_usr_addr, in_usr_grant, in_last_login_dt, in_use_yn, in_memo] 
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
	var in_comp_cd				= req.body["comp_cd"			]; // ��ü�ڵ�
	var in_br_cd					= req.body["br_cd"				]; // �����ڵ�
	var in_usr_id					= req.body["usr_id"				]; // ����ھ��̵�
	var in_usr_cd					= req.body["usr_cd"				]; // ������ڵ�
	var in_usr_pwd				= req.body["usr_pwd"			]; // ����ں�й�ȣ
	var in_usr_nm 				= req.body["usr_nm" 			]; // ����ڸ�
	var in_usr_dob				= req.body["usr_dob"			]; // �������
	var in_usr_telno 			= req.body["usr_telno" 		]; // �������ȭ��ȣ
	var in_usr_email 			= req.body["usr_email" 		]; // ������̸���
	var in_usr_addr				= req.body["usr_addr"			]; // ������ּ�
	var in_usr_grant			= req.body["usr_grant"		]; // ����ڱ���
	var in_last_login_dt	= req.body["last_login_dt"]; // �������α����Ͻ�
	var in_use_yn 				= req.body["use_yn" 			]; // ��뿩��
	var in_memo 					= req.body["memo" 				]; // �޸�

	console.log(req.body);

	var pool = dbhandler.createPool();
	pool.getConnection(function(err, connection)
	{				  
	  connection.query( "SET @RESULT=0; CALL TB_USER_MAS_IUD('U',?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, @RESULT); SELECT @RESULT"
	  								, [in_comp_cd, in_br_cd, in_usr_id, in_usr_cd, in_usr_pwd, in_usr_nm, in_usr_dob, in_usr_telno, in_usr_email, in_usr_addr, in_usr_grant, in_last_login_dt, in_use_yn, in_memo] 
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
	var in_comp_cd				= req.body["comp_cd"			]; // ��ü�ڵ�
	var in_br_cd					= req.body["br_cd"				]; // �����ڵ�
	var in_usr_id					= req.body["usr_id"				]; // ����ھ��̵�
	var in_usr_cd					= req.body["usr_cd"				]; // ������ڵ�
	var in_usr_pwd				= req.body["usr_pwd"			]; // ����ں�й�ȣ
	var in_usr_nm 				= req.body["usr_nm" 			]; // ����ڸ�
	var in_usr_dob				= req.body["usr_dob"			]; // �������
	var in_usr_telno 			= req.body["usr_telno" 		]; // �������ȭ��ȣ
	var in_usr_email 			= req.body["usr_email" 		]; // ������̸���
	var in_usr_addr				= req.body["usr_addr"			]; // ������ּ�
	var in_usr_grant			= req.body["usr_grant"		]; // ����ڱ���
	var in_last_login_dt	= req.body["last_login_dt"]; // �������α����Ͻ�
	var in_use_yn 				= req.body["use_yn" 			]; // ��뿩��
	var in_memo 					= req.body["memo" 				]; // �޸�

	console.log(req.body);

	var pool = dbhandler.createPool();
	pool.getConnection(function(err, connection)
	{				  
	  connection.query( "SET @RESULT=0; CALL TB_USER_MAS_IUD('D',?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, @RESULT); SELECT @RESULT"
	  								, [in_comp_cd, in_br_cd, in_usr_id, in_usr_cd, in_usr_pwd, in_usr_nm, in_usr_dob, in_usr_telno, in_usr_email, in_usr_addr, in_usr_grant, in_last_login_dt, in_use_yn, in_memo] 
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