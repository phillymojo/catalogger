var Section_CurrentInfo = React.createClass({
	render: function() {
		var data = {
			latestPost: {
				title: "Latest Post", 
				content: "A single glance at the thing was sufficient to assure me that I was facing one of those long-extinct, prehistoric creatures whose fossilized remains are found within the outer crust as far back as the Triassic formation, a gigantic labyrinthodon.  And there I was, unarmed, and, with the exception of a loin cloth, as naked as I had come into the world.  I could imagine how my first ancestor felt that distant, prehistoric morn that he encountered for the first time the terrifying progenitor of the thing that had me cornered now beside the restless, mysterious sea."
			},
			nextBirthday: {
				title: "Next Birthday",
				content: {}
			}
		}
		return (
			<div className="current_info_container">
				<LatestPost data={data.latestPost} />
				<NextBirthday data={data.nextBirthday} />
			</div>
		)
	}
}); 

var LatestPost = React.createClass({
	render: function(){
		return (
			<div className="lastest_post">
				<div className="lastest_post_title">{this.props.data.title}</div>
				<div className="latest_post_content">{this.props.data.content}</div>
			</div>
		) 
	}
});

var NextBirthday = React.createClass({
	render: function(){
		return(
			<div className="next_birthday">
				<div className="next_birthdat_title">{this.props.data.title}</div>
				<div className="next_birthday_image"></div>
			</div>
		)
	}
});