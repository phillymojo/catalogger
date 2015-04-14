var Item = React.createClass({displayName: "Item",
  render: function(){
    return (
      React.createElement("div", {className: "itembox col-md-3"}, 
        React.createElement(ItemImage, null)
      )
    )
  }
});