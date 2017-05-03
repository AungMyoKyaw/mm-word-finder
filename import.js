const mongoose = require('mongoose');
const config = require('./config/config');
const fs = require('fs');
const filePath = './ornagai/entab_uni.tsv';
const headers = ['english','type','burmese'];

//connecting to db
const db = mongoose.connection;
mongoose.connect(config.dbUrl);
db.on('error',()=>{
	console.log(`Error on connecting to ${config.dbUrl}`);
});
db.once('open',()=>{
	console.log(`My app is using ${config.dbUrl}`);
});
db.on('disconnected',()=>{
	console.log(`Successfully disconnected from ${config.dbUrl}`);
});
process.on('SIGINT',()=>{
	db.close(()=>{
		process.exit(0);
	});
});

const word = require('./models/word.model');

fs.readFile(filePath,'utf8',(err,data)=>{
	if(err){
		process.exit(1);
	} else {
		let stringData = data.toString();
		let result = [];
		stringData.split("\n").forEach(line=>{
			let obj = {};
			line.split("\t").forEach((word,index)=>{
				if(word!==''){
					obj[headers[index]] = word;
				} else {
					return ;
				}
			})
			result.push(obj)
		});
		result = JSON.parse(JSON.stringify(result));
		console.log('Importing,pls wait')
		Promise.all(result.map((word)=>{
			return save(word);
		}))
		.then(data=>{
			// console.log(data);
			console.log('Finished');
			process.exit(0);
		})
		.catch(err=>{
			process.exit(1);
			console.log(err);
		})
	}
})

function save(data){
	return new Promise((resolve,reject)=>{
		let newWord = new word(data);
		newWord.save()
			.then(word=>{
				console.log(word);
				resolve(true);
			})
			.catch(err=>{
				resolve(false);
			})
	})
}
