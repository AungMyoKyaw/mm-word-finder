const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wordSchema = new Schema({
	burmese:{
		type:String,
		required:true,
		trim:true,
	},
	english:{
		type:String,
		required:true,
		lowercase:true,
		trim:true
	}
})

module.exports = mongoose.model('Word',wordSchema)
