const router = require('express').Router();
const word = require('../controllers/word.controller');

router.route('/word')
	.get(word.findWord)
	.post(word.addWord);

module.exports = router;
