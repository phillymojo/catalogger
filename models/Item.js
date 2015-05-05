var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	name: String,
	birthdate: String
});

schema.statics.getItems = function(callback){
	var items = [];
	Item.find(function(err, docs){
		if(!err){
			items = docs;
		}

		return items;
	});
};

module.exports = Item = mongoose.model('Item', schema);