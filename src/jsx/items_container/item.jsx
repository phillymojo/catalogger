var Item = React.createClass({
  render: function(){
    return (
      <div className="itembox col-md-3">
        <div className="itemimage"></div>
        <div className="itemname">{this.props.data.name}</div>
      </div>
    )
  }
}); 