const express = require('express')
const router = express.Router()

router.get("/",function(req,res){
	res.render('product')		
});


router.get("/:id",function(req,res){
	res.send(req.params)
});

module.exports = router