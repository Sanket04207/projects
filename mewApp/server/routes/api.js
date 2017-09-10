const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const db = "mongodb://usersanket:123456@ds129434.mlab.com:29434/videoplayer";
mongoose.Promise = global.Promise;  // avoid waring mongoose warning.

mongoose.connect(db,function(err){

	if(err)
	{
		console.log("Error !" + err);
	}
	

});

router.get('/',function(req,res){

	res.send('Api Works');

});

module.exports = router;