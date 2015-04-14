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