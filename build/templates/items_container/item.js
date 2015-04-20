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