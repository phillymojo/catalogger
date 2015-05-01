var React = require('react');
var Header = require('./header/Header.react');
var CurrentInfo = require('./currentInfo/CurrentInfo.react');
var Filters = require('./filters/Filters.react');
var ItemsContainer = require('./itemsContainer/ItemsContainer.react');

module.exports = CataloggerApp = React.createClass({
	render: function(){
		return(
			<div className="catalogger-app container">
				<Header headerData={this.props.pageData.headerData} />
				<CurrentInfo currentInfoData={this.props.pageData.itemData.nextitem} />
				<hr />
				<Filters />
				<ItemsContainer itemsData={this.props.pageData.itemData} />
			</div>
		);
	}
});