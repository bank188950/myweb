const express = require('express')
const router = express.Router()
var multer = require('multer')
var path = require('path')
const { check,validationResult } = require('express-validator');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
  	// file.fieldname
    cb(null, 'f-' + Date.now()+ path.extname(file.originalname))
  }
})
 
var upload = multer({ storage: storage })

router.get("/",function(req,res){
	res.render('contact')		
});


router.post("/save",upload.single('file1'),function(req,res){

	 


	// const errors = validationResult(req);
 //    console.log(req.body);

 //    if (!errors.isEmpty()) {
 //      return res.status(422).jsonp(errors.array());
 //    } else {
 //      res.send({});
 //    }



	let name = req.body.name_txt
	let email = req.body.email_txt
	let message_txt = req.body.message_txt

  let file1 = ''
  if(req.file != undefined) {
    file1 = req.file.filename;
  }
	

	console.log(name,email,message_txt,file1)
	
	res.send('Save Email')

});

module.exports = router