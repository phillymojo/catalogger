var Section_ItemsContainer = React.createClass({displayName: "Section_ItemsContainer",
	render: function() {
		var items = _.map(this.props.itemsData.items, function(item){
			return(
				React.createElement(Item, {data: item})
			);
		});
		return (
			React.createElement("div", {className: "items_container row"}, 
				items
			)
		)
	}
}); 