var React = require('react');
var LatestPost = require('./LatestPost.react');
var NextBirthday = require('./NextBirthday.react');

module.exports = CurrentInfo = React.createClass({
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