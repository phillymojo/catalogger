var Header = React.createClass({
  render: function(){
		return (
	    <div className="header">
	    	<Title headerData={this.props.headerData} />
	    	<Login data={this.props} />
	    </div>
	  )
  }
}); 

var Title = React.createClass({
	render: function(){
		return (
			<div className="title">
				{this.props.headerData.text}
			</div>
		)
	}
});

var Login = React.createClass({
	render: function(){
		return (
			<div className="login">Login</div>
		)
	}
}); 