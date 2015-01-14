var React = require('react');

var Panel = React.createClass({
  propTypes: {
    width: React.PropTypes.oneOfType([
      React.PropTypes.oneOf(['rest']),
      React.PropTypes.number
    ]),
    depth: React.PropTypes.oneOf([0, 1, 2, 3, 4, 5])
  },

  render() {
    var style = {};

    if (this.props.width !== 'rest') {
      style.flexBasis = this.props.width;
      style.flexGrow = 0;
    }

    return (
      <div style={style} className={'panel z' + this.props.depth}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Panel;