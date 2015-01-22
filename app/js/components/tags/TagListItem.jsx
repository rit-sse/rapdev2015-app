var React = require('react'),
  Fluxxor = require('fluxxor'),
  FluxMixin = Fluxxor.FluxMixin(React);

var TagListItem = React.createClass({
  mixins: [FluxMixin],
  
  _toggleTag(e) {
    if (e.target.checked) {
      this.getFlux().actions.tags.activateTag(this.props.id);
    } else {
      this.getFlux().actions.tags.deactivateTag(this.props.id);
    }
  },
  
  
  render() {
    var style = {
      color: this.props.color,
      borderColor: this.props.color
    };
    var className = this.props.focused ? 'focused' : '';
    return (
      <li id={'item-' + this.props.id} className={className}>
        <label role="button" htmlFor={'checkbox-' + this.props.id}>
          <input type="checkbox" id={'checkbox-' + this.props.id} style={style} checked={this.props.active} onChange={this._toggleTag} />
          {this.props.children}
        </label>
      </li>
    );
  }
});

module.exports = TagListItem;