var React = require('react');

module.exports = FilterSortBy = React.createClass({
	render: function(){
		return(
			<div className="filter sort_by col-md-2 col-md-offset-8">
				<div className="dropdown">
				  <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="false">
				  	Sort By:
				  	<span>none</span>
				    <span className="caret"></span>
				  </button>
				  <ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
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