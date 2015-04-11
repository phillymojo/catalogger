var PageContent = React.createClass({displayName: "PageContent",
	render: function() {
		return (
			React.createElement("div", {className: "pageContent"}, 
				React.createElement(Header, {headerData: this.props.pageData.headerData}), 
				React.createElement(Section_CurrentInfo, null), 
				React.createElement(Section_ItemsContainer, null)
			)
		)
	}
}); 