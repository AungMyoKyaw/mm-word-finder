const word = require('../models/word.model');

function addWord(req,res){
	let newWord = new word(req.body);
	newWord.save()
		.then(saved=>{
			res.json(saved);
		})
		.catch(err=>{
			res.status(500).json({message:err.message})
		})
}

function findWord(req,res){
	let text = req.query.word;
	let isMyanmar = /[က-အ]/.test(text);
	let searchQuery = isMyanmar ? {burmese:new RegExp(text,'i')} : {english:new RegExp(text,'i')};
	word.find(searchQuery)
		.limit(10)
		.then(words=>{
			res.json(words);
		})
		.catch(err=>{
			res.status(500).json({message:err.message});
		})
}

module.exports = {
	addWord,
	findWord
}
