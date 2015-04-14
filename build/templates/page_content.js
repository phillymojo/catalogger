var PageContent = React.createClass({displayName: "PageContent",
	render: function() {
		return (
			React.createElement("div", {className: "pageContent container"}, 
				React.createElement(Header, {headerData: this.props.pageData.headerData}), 
				React.createElement(Section_CurrentInfo, {currentInfoData: this.props.pageData.itemData.nextitem}), 
				React.createElement("hr", null), 
				React.createElement(Section_Filters, null), 
				React.createElement(Section_ItemsContainer, {itemsData: this.props.pageData.itemData})
			)
		)
	}
}); 