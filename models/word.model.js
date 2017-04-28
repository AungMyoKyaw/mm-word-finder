const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wordSchema = new Schema({
	burma:{
		type:String,
		required:true
	},
	english:{
		type:String,
		required:true
	}
})

module.exports = mongoose.model('Word',wordSchema)
