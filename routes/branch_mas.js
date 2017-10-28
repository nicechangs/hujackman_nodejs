//////////////////////////////////////
// �������� CRUD
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
	var in_comp_cd			  = req.query.comp_cd;
	var in_br_nm		  		= req.query.br_nm;
	var in_use_yn				  = req.query.use_yn;
		
	console.log(req.query);
	
	var pool = dbhandler.createPool();
	pool.getConnection(function(err, connection)
	{		
	  connection.query( "CALL TB_BRANCH_MAS_SELECT(?,?,?)"
	  								, [in_comp_cd, in_br_nm, in_use_yn] 
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
	var in_br_cd				= req.body["br_cd"			];  // �����ڵ�    			
	var in_comp_cd		  = req.body["comp_cd"		];  // ��ü�ڵ�    
	var in_br_nm			  = req.body["br_nm"			];  // ������      
	var in_br_ownr_cd	  = req.body["br_ownr_cd"	];  // �������ڵ�  
	var in_br_telno 	  = req.body["br_telno" 	];  // ������ǥ��ȣ
	var in_br_faxno 	  = req.body["br_faxno" 	];  // �����ѽ���ȣ
	var in_br_addr 		  = req.body["br_addr" 		];  // �����ּ�    
	var in_use_yn 		  = req.body["use_yn" 		];  // ��뿩��    
	var in_memo 			  = req.body["memo" 			];  // �޸�        
	

	console.log(req.body);
	
	var pool = dbhandler.createPool();
	pool.getConnection(function(err, connection)
	{				  
	  connection.query( "SET @RESULT=0; CALL TB_BRANCH_MAS_IUD('I',?,?,?,?,?,?,?,?,?, @RESULT); SELECT @RESULT"
	  								, [in_br_cd, in_comp_cd, in_br_nm, in_br_ownr_cd, in_br_telno, in_br_faxno, in_br_addr, in_use_yn, in_memo] 
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
	var in_br_cd				= req.body["br_cd"			];  // �����ڵ�    			
	var in_comp_cd		  = req.body["comp_cd"		];  // ��ü�ڵ�    
	var in_br_nm			  = req.body["br_nm"			];  // ������      
	var in_br_ownr_cd	  = req.body["br_ownr_cd"	];  // �������ڵ�  
	var in_br_telno 	  = req.body["br_telno" 	];  // ������ǥ��ȣ
	var in_br_faxno 	  = req.body["br_faxno" 	];  // �����ѽ���ȣ
	var in_br_addr 		  = req.body["br_addr" 		];  // �����ּ�    
	var in_use_yn 		  = req.body["use_yn" 		];  // ��뿩��    
	var in_memo 			  = req.body["memo" 			];  // �޸�     
	
	console.log(req.body);
	
	var pool = dbhandler.createPool();
	pool.getConnection(function(err, connection)
	{				  
	  connection.query( "SET @RESULT=0; CALL TB_BRANCH_MAS_IUD('U',?,?,?,?,?,?,?,?,?, @RESULT); SELECT @RESULT"
	  								, [in_br_cd, in_comp_cd, in_br_nm, in_br_ownr_cd, in_br_telno, in_br_faxno, in_br_addr, in_use_yn, in_memo] 
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
	var in_br_cd				= req.body["br_cd"			];  // �����ڵ�    			
	var in_comp_cd		  = req.body["comp_cd"		];  // ��ü�ڵ�    
	var in_br_nm			  = req.body["br_nm"			];  // ������      
	var in_br_ownr_cd	  = req.body["br_ownr_cd"	];  // �������ڵ�  
	var in_br_telno 	  = req.body["br_telno" 	];  // ������ǥ��ȣ
	var in_br_faxno 	  = req.body["br_faxno" 	];  // �����ѽ���ȣ
	var in_br_addr 		  = req.body["br_addr" 		];  // �����ּ�    
	var in_use_yn 		  = req.body["use_yn" 		];  // ��뿩��    
	var in_memo 			  = req.body["memo" 			];  // �޸�    
	
	console.log(req.body);
	
	var pool = dbhandler.createPool();
	pool.getConnection(function(err, connection)
	{				  
	  connection.query( "SET @RESULT=0; CALL TB_BRANCH_MAS_IUD('D',?,?,?,?,?,?,?,?,?, @RESULT); SELECT @RESULT"
	  								, [in_br_cd, in_comp_cd, in_br_nm, in_br_ownr_cd, in_br_telno, in_br_faxno, in_br_addr, in_use_yn, in_memo] 
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
