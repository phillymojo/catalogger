var Section_CurrentInfo = React.createClass({
	render: function() {
		var data = {
			latestPost: {
				title: "Latest Post", 
				content: "A single glance at the thing was sufficient to assure me that I was facing one of those long-extinct, prehistoric creatures whose fossilized remains are found within the outer crust as far back as the Triassic formation, a gigantic labyrinthodon.  And there I was, unarmed, and, with the exception of a loin cloth, as naked as I had come into the world.  I could imagine how my first ancestor felt that distant, prehistoric morn that he encountered for the first time the terrifying progenitor of the thing that had me cornered now beside the restless, mysterious sea."
			},
			nextitem: {
				data: 'April 16'
			}
		}
		return (
			<div className="current_info_container row">
				<LatestPost data={data.latestPost} />
				<NextBirthday data={data.nextitem} />
			</div>
		)
	}
});

var LatestPost = React.createClass({
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

var NextBirthday = React.createClass({
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