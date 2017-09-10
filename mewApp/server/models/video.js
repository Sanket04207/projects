const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const videoSchema = new Schema({

	title : string,
	url : string,
	description : string


});

module.exports = mongoose.model('video',videoSchema,'videos');
// video -> Name of Model
// videos -> name of collection in mongo database