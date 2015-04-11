var Header = React.createClass({displayName: "Header",
  render: function(){
		return (
	    React.createElement("div", {className: "header"}, 
	    	React.createElement(Title, {headerData: this.props.headerData}), 
	    	React.createElement(Login, {data: this.props})
	    )
	  )
  }
}); 

var Title = React.createClass({displayName: "Title",
	render: function(){
		return (
			React.createElement("div", {className: "title"}, 
				this.props.headerData.text
			)
		)
	}
});

var Login = React.createClass({displayName: "Login",
	render: function(){
		return (
			React.createElement("div", {className: "login"}, "Login")
		)
	}
}); 