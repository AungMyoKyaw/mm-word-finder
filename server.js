const express = require('express');
const mongoose = require('mongoose');
const compression = require('compression');
const next = require('next');

const config = require('./config/config');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

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

app.prepare()
.then(()=>{
	const server = express();

	//middleware
	server.use(compression());

	server.get('*',(req,res)=>{
		return handle(req,res);
	})

	server.listen(config.port,(err)=>{
		if(err){
			process.exit(1);
		} else {
			console.log(`My app is running on port ${config.port}`)
		}
	})
})
.catch(err=>{
	console.error(err.stack);
	process.exit(1);
})
