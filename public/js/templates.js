var Section_CurrentInfo = React.createClass({displayName: "Section_CurrentInfo",
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
			React.createElement("div", {className: "current_info_container row"}, 
				React.createElement(LatestPost, {data: data.latestPost}), 
				React.createElement(NextBirthday, {data: data.nextBirthday})
			)
		)
	}
});

var LatestPost = React.createClass({displayName: "LatestPost",
	render: function(){
		return (
			React.createElement("div", {className: "latest_post col-md-9"}, 
				React.createElement("div", {className: "latest_post_title"}, this.props.data.title), 
				React.createElement("div", {className: "latest_post_content"}, this.props.data.content), 
				React.createElement("div", {className: "latest_post_all_posts"}, 
					React.createElement("button", {className: "btn btn-default btn-xs", type: "button", value: "All Posts"}, "All Posts")
				)
			)
		) 
	}
});

var NextBirthday = React.createClass({displayName: "NextBirthday",
	render: function(){
		return(
			React.createElement("div", {className: "next_birthday col-md-3"}, 
				React.createElement("div", {className: "next_birthday_title"}, this.props.data.title), 
				React.createElement("div", {className: "next_birthday_image"})
			)
		)
	}
});
var Header = React.createClass({displayName: "Header",
  render: function(){
		return (
			React.createElement("div", {className: "header row"}, 
	    	React.createElement(Title, {headerData: this.props.headerData}), 
	    	React.createElement(Login, {data: this.props})
	    )
	  )
  }
}); 

var Title = React.createClass({displayName: "Title",
	render: function(){
		return (
			React.createElement("div", {className: "title col-md-9"}, 
				this.props.headerData.text
			)
		)
	}
});

var Login = React.createClass({displayName: "Login",
	render: function(){
		return (
			React.createElement("div", {className: "login col-md-3"}, 
				React.createElement("button", {className: "btn btn-default btn-sm", type: "button", value: "Login"}, "Login")
			)
		)
	}
}); 
var Item = React.createClass({displayName: "Item",
  render: function(){
    return (
      React.createElement("div", {className: "itembox"}, 
        React.createElement(ItemImage, null)
      )
    )
  }
});
var ItemImage = React.createClass({displayName: "ItemImage",
  render: function(){
    return (
      React.createElement("div", {className: "itemImage"}

      )
    )
  }
}); 
var Section_ItemsContainer = React.createClass({displayName: "Section_ItemsContainer",
	render: function() {
		return (
			React.createElement("div", {className: "items_container"}, 
				React.createElement(Item, null)
			)
		)
	}
}); 
var PageContent = React.createClass({displayName: "PageContent",
	render: function() {
		return (
			React.createElement("div", {className: "pageContent container"}, 
				React.createElement(Header, {headerData: this.props.pageData.headerData}), 
				React.createElement(Section_CurrentInfo, null), 
				React.createElement(Section_ItemsContainer, null)
			)
		)
	}
}); 