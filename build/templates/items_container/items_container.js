var Section_ItemsContainer = React.createClass({displayName: "Section_ItemsContainer",
	render: function() {
		return (
			React.createElement("div", {className: "items_container"}, 
				React.createElement(Item, null)
			)
		)
	}
}); 