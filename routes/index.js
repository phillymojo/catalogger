var Item = require('../models/Item');
var express = require('express');
var router = express.Router();

router.route('/').get(function(req,res){
	res.render(res);
});

module.exports = router;