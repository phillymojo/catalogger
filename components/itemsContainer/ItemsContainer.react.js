var React = require('react');
var Item = require('./Item.react.js');

module.exports = ItemsContainer = React.createClass({
	render: function() {
		var items = _.map(this.props.itemsData.items, function(item){
			return(
				<Item key={item.id} data={item}/>
			);
		}); 
		return (
			<div className="items_container row">
				{items}
			</div>
		)
	}
});