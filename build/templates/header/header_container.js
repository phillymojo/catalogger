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