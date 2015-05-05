var React = require('react');
var LatestPost = require('./LatestPost.react');
var NextBirthday = require('./NextBirthday.react');

module.exports = CurrentInfo = React.createClass({
	render: function() {
		return (
			<div className="current_info_container row">
				<LatestPost data={this.props.currentInfoData.latestPost} />
				<NextBirthday data={this.props.currentInfoData.nextitem} />
			</div>
		)
	}
});