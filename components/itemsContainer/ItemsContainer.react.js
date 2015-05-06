var React = require('react');
var Item = require('./Item.react.js');

module.exports = ItemsContainer = React.createClass({
	render: function() {
 
		return (
			<div className="items_container row">
				{this.props.itemsData.map(function(item, i){
					return <Item key={item._id} data={item} />;
				})} 
			</div>
		);
	}
});
