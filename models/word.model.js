const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wordSchema = new Schema({
	burmese:{
		type:String,
		required:true,
		trim:true,
		index:true
	},
	english:{
		type:String,
		required:true,
		lowercase:true,
		trim:true,
		index:true
	},
	type:{
		type:String,
		lowercase:true,
		trim:true
	}
})

wordSchema.pre('save',function(next){
	let isMyanmar = /[က-အ]/.test(this.burmese);
	// let isEng = /\w/.test(this.english);
	let isEng = true;
	if(isMyanmar && isEng){
		next();
	} else {
		next(new Error('WTF'));
	}
})

module.exports = mongoose.model('Word',wordSchema)
