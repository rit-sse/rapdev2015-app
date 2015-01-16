var React = require('react');

var TagListItem = React.createClass({
  render() {
    var style = {
      color: this.props.color,
      borderColor: this.props.color
    };
    var className = this.props.focused ? 'focused' : '';
    return (
      <li id={'item-' + this.props.id} className={className}>
        <label role="button" htmlFor={'checkbox-' + this.props.id}>
          <input type="checkbox" id={'checkbox-' + this.props.id} style={style} defaultChecked={this.props.enabled} />
          {this.props.children}
        </label>
      </li>
    );
  }
});

module.exports = TagListItem;