var React = require('react');

var Panel = React.createClass({
  propTypes: {
    width: React.PropTypes.oneOfType([
      React.PropTypes.oneOf(['rest']),
      React.PropTypes.number
    ])
  },

  render() {
    var style = {
      height: "100%",
      border: "1px solid gray"
    };

    if(this.props.width != "rest"){
      style.flexBasis = this.props.width;
      style.flexGrow = 0;
      style.flexShrink = 0;
    }
    else {
      style.flexGrow = 1;
    }

    return (
      <div style={style}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Panel;