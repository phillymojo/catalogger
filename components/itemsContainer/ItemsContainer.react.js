var React = require('react');
var Item = require('./Item.react.js');

module.exports = ItemsContainer = React.createClass({
	render: function() {
 
		return (
			<div className="items_container row">
				{this.props.itemsData.items.map(function(item){
					return <Item key={item.id} data={item} />;
				})} 
			</div>
		);
	}
});
