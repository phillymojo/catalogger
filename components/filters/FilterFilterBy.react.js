var React = require('react');

module.exports = FilterFilterBy = React.createClass({
	render: function(){
		return (
			<div className="filter filter_by col-md-2">
				<div className="dropdown">
				  <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-expanded="false">
				  	Filter By:
				  	<span>none</span>
				    <span className="caret"></span>
				  </button>
				  <ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu2">
				    <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Action</a></li>
				    <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Another action</a></li>
				    <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Something else here</a></li>
				    <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Separated link</a></li>
				  </ul>
				</div>
			</div>
		)
	}
});