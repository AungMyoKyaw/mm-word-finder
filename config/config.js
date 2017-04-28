const env = process.env.NODE_ENV == 'production' ? 'production' : 'development';

const config = {
	development:{
		port:3000,
		dbUrl:'mongodb://mmwordfinder:wX38M538O4zRIQzbs@ds123311.mlab.com:23311/mm-word-finder'
	},
	production:{
		port:process.env.PORT || 80,
		dbUrl:process.env.mwfDb
	}
}

module.exports = config[env];
