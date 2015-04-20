var Section_CurrentInfo = React.createClass({displayName: "Section_CurrentInfo",
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
			React.createElement("div", {className: "current_info_container row"}, 
				React.createElement(LatestPost, {data: data.latestPost}), 
				React.createElement(NextBirthday, {data: data.nextitem})
			)
		)
	}
});

var LatestPost = React.createClass({displayName: "LatestPost",
	render: function(){
		return (
			React.createElement("div", {className: "latest_post col-md-10"}, 
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
			React.createElement("div", {className: "next_birthday col-md-2"}, 
				React.createElement("div", {className: "next_birthday_title"}, "Next Birthday"), 
				React.createElement("div", {className: "next_birthday_date"}, this.props.data.date), 
				React.createElement("div", {className: "next_birthday_image"})
			)
		)
	}
});
var Section_Filters = React.createClass({displayName: "Section_Filters",
	render: function() {
		return (
			React.createElement("div", {className: "filters_container row"}, 
				React.createElement(Filter_SortBy, null), 
				React.createElement(Filter_FilterBy, null)
			)
		)
	}
});

var Filter_SortBy = React.createClass({displayName: "Filter_SortBy",
	render: function(){
		return(
			React.createElement("div", {className: "filter sort_by col-md-2 col-md-offset-8"}, 
				React.createElement("div", {className: "dropdown"}, 
				  React.createElement("button", {className: "btn btn-default dropdown-toggle", type: "button", id: "dropdownMenu1", "data-toggle": "dropdown", "aria-expanded": "false"}, 
				  	"Sort By:", 
				  	React.createElement("span", null, "none"), 
				    React.createElement("span", {className: "caret"})
				  ), 
				  React.createElement("ul", {className: "dropdown-menu", role: "menu", "aria-labelledby": "dropdownMenu1"}, 
				    React.createElement("li", {role: "presentation"}, React.createElement("a", {role: "menuitem", tabindex: "-1", href: "#"}, "Action")), 
				    React.createElement("li", {role: "presentation"}, React.createElement("a", {role: "menuitem", tabindex: "-1", href: "#"}, "Another action")), 
				    React.createElement("li", {role: "presentation"}, React.createElement("a", {role: "menuitem", tabindex: "-1", href: "#"}, "Something else here")), 
				    React.createElement("li", {role: "presentation"}, React.createElement("a", {role: "menuitem", tabindex: "-1", href: "#"}, "Separated link"))
				  )
				)
			)
		)
	}
});

var Filter_FilterBy = React.createClass({displayName: "Filter_FilterBy",
	render: function(){
		return (
			React.createElement("div", {className: "filter filter_by col-md-2"}, 
				React.createElement("div", {className: "dropdown"}, 
				  React.createElement("button", {className: "btn btn-default dropdown-toggle", type: "button", id: "dropdownMenu2", "data-toggle": "dropdown", "aria-expanded": "false"}, 
				  	"Filter By:", 
				  	React.createElement("span", null, "none"), 
				    React.createElement("span", {className: "caret"})
				  ), 
				  React.createElement("ul", {className: "dropdown-menu", role: "menu", "aria-labelledby": "dropdownMenu2"}, 
				    React.createElement("li", {role: "presentation"}, React.createElement("a", {role: "menuitem", tabindex: "-1", href: "#"}, "Action")), 
				    React.createElement("li", {role: "presentation"}, React.createElement("a", {role: "menuitem", tabindex: "-1", href: "#"}, "Another action")), 
				    React.createElement("li", {role: "presentation"}, React.createElement("a", {role: "menuitem", tabindex: "-1", href: "#"}, "Something else here")), 
				    React.createElement("li", {role: "presentation"}, React.createElement("a", {role: "menuitem", tabindex: "-1", href: "#"}, "Separated link"))
				  )
				)
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
			React.createElement("div", {className: "title col-md-10"}, 
				this.props.headerData.text
			)
		)
	}
});

var Login = React.createClass({displayName: "Login",
	render: function(){
		return (
			React.createElement("div", {className: "login col-md-2"}, 
				React.createElement("button", {className: "btn btn-default btn-sm", type: "button", value: "Login"}, "Login")
			)
		)
	}
}); 
var Item = React.createClass({displayName: "Item",
  render: function(){
    return (
      React.createElement("div", {className: "itembox col-md-3"}, 
        React.createElement("div", {className: "itemimage"}), 
        React.createElement("div", {className: "itemname"}, this.props.data.name)
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
		var items = _.map(this.props.itemsData.items, function(item){
			return(
				React.createElement(Item, {data: item})
			);
		});
		return (
			React.createElement("div", {className: "items_container row"}, 
				items
			)
		)
	}
}); 
var PageContent = React.createClass({displayName: "PageContent",
	render: function() {
		return (
			React.createElement("div", {className: "pageContent container"}, 
				React.createElement(Header, {headerData: this.props.pageData.headerData}), 
				React.createElement(Section_CurrentInfo, {currentInfoData: this.props.pageData.itemData.nextitem}), 
				React.createElement("hr", null), 
				React.createElement(Section_Filters, null), 
				React.createElement(Section_ItemsContainer, {itemsData: this.props.pageData.itemData})
			)
		)
	}
}); 