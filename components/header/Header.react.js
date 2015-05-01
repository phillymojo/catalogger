var React = require('react');
var Title = require('./Title.react');
var Login = require('./Login.react');

module.exports = Header = React.createClass({
	render: function(){
		return(
			<div className="header row">
	    	<Title headerData={this.props.headerData} />
	    	<Login data={this.props} />
	    </div>
		)
	}
});