var Section_Filters = React.createClass({
	render: function() {
		return (
			<div className="filters_container row">
				<Filter_SortBy />
				<Filter_FilterBy />
			</div>
		)
	}
});

var Filter_SortBy = React.createClass({
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
				    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Action</a></li>
				    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Another action</a></li>
				    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Something else here</a></li>
				    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Separated link</a></li>
				  </ul>
				</div>
			</div>
		)
	}
});

var Filter_FilterBy = React.createClass({
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
				    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Action</a></li>
				    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Another action</a></li>
				    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Something else here</a></li>
				    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Separated link</a></li>
				  </ul>
				</div>
			</div>
		)
	}
});