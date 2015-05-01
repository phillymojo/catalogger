var JSX = require('node-jsx').install();
var React = require('react');
var CataloggerApp = require('./components/CataloggerApp.react');
var Item = require('./models/Item');

module.exports = {
	index: function(req,res){
		// Item.getItems(function(items){
		// 	var markup = React.renderComponentToString(
		// 		CataloggerApp({
		// 			items: items
		// 		})
		// 	);

		// 	res.render('home', {
		// 		markup: markup,
		// 		state: JSON.stringify(items)
		// 	});
		// });
res.render('home', {});
	}
}