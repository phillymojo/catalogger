var React = require('react');
var FilterSortBy = require('./FilterSortBy.react');
var FilterFilterBy = require('./FilterFilterBy.react');

module.exports = Section_Filters = React.createClass({
	render: function() {
		return (
			<div className="filters_container row">
				<FilterSortBy />
				<FilterFilterBy />
			</div>
		)
	}
});