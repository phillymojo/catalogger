var Section_ItemsContainer = React.createClass({
	render: function() {
		var items = _.map(this.props.itemsData.items, function(item){
			return(
				<Item data={item}/>
			);
		});
		return (
			<div className="items_container row">
				{items}
			</div>
		)
	}
}); 