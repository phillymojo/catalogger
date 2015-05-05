var JSX = require('node-jsx').install();
var React = require('react');
var CataloggerApp = React.createFactory(require('./components/CataloggerApp.react'));
var Item = require('./models/Item');
var pageData = require('./pageData');

module.exports = {
	index: function(req,res){
		var items = Item.getItems();
		
		var markup = React.renderToString(
			CataloggerApp({ 
				pageData: pageData
			})
		); 

		res.render('home', {
			markup: markup,
			state: JSON.stringify(items)
		});
	}
}