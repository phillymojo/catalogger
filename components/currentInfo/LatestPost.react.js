var React = require('react');

module.exports = LatestPost = React.createClass({
	render: function(){
		return (
			<div className="latest_post col-md-10">
				<div className="latest_post_title">{this.props.data.title}</div>
				<div className="latest_post_content">{this.props.data.content}</div>
				<div className="latest_post_all_posts">
					<button className="btn btn-default btn-xs" type="button" value="All Posts">All Posts</button>
				</div>
			</div>
		) 
	}
});