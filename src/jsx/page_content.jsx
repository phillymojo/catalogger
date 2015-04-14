var PageContent = React.createClass({
	render: function() {
		return (
			<div className="pageContent container">
				<Header headerData={this.props.pageData.headerData} />
				<Section_CurrentInfo currentInfoData={this.props.pageData.itemData.nextitem} />
				<hr />
				<Section_Filters />
				<Section_ItemsContainer itemsData={this.props.pageData.itemData} />
			</div>
		)
	}
}); 