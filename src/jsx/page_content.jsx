var PageContent = React.createClass({
	render: function() {
		return (
			<div className="pageContent container">
				<Header headerData={this.props.pageData.headerData} />
				<Section_CurrentInfo />
				<Section_ItemsContainer />
			</div>
		)
	}
}); 