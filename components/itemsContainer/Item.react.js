var React = require('react');

module.exports = Item = React.createClass({
  render: function(){
    return (
      <div className="itembox col-md-3" data-id={this.props.data._id}>
        <div className="itemimage"></div>
        <div className="itemname">{this.props.data.name}</div>
      </div>
    )
  }
}); 