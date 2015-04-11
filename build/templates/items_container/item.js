var Item = React.createClass({displayName: "Item",
  render: function(){
    return (
      React.createElement("div", {className: "itembox"}, 
        React.createElement(ItemImage, null)
      )
    )
  }
});