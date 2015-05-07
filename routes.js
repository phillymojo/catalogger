var JSX = require('node-jsx').install();
var React = require('react');
var CataloggerApp = React.createFactory(require('./components/CataloggerApp.react'));
var Item = require('./models/item');
var pageData = require('./pageData');

module.exports = {
	index: function(req,res){
		Item.getItems(function(items){
			var markup = React.renderToString(
				CataloggerApp({ 
					pageData: pageData,
					items: items
				})
			); 

			res.render('home', {
				markup: markup,
				state: JSON.stringify(items)
			});
		})
	},
	addItem: function(req, res){
		var markup = React.renderToString(
			CataloggerApp({
				pageData: pageData,
				items: []
			})
		);
		res.render('addItem', {
			markup: markup
		})
	}
}