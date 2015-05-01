var React = require('react');

module.exports = NextBirthday = React.createClass({
	render: function(){
		return(
			<div className="next_birthday col-md-2">
				<div className="next_birthday_title">Next Birthday</div>
				<div className="next_birthday_date">{this.props.data.date}</div>
				<div className="next_birthday_image"></div>
			</div>
		)
	}
});