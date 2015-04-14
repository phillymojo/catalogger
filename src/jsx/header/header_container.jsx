var Header = React.createClass({
  render: function(){
		return (
			<div className="header row">
	    	<Title headerData={this.props.headerData} />
	    	<Login data={this.props} />
	    </div>
	  )
  }
}); 

var Title = React.createClass({
	render: function(){
		return (
			<div className="title col-md-10">
				{this.props.headerData.text}
			</div>
		)
	}
});

var Login = React.createClass({
	render: function(){
		return (
			<div className="login col-md-2">
				<button className="btn btn-default btn-sm" type="button" value="Login">Login</button>
			</div>
		)
	}
}); 