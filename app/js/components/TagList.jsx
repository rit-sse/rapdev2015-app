var React = require('react');

var TagListItem = require('./TagListItem');

var TagList = React.createClass({

  render() {
    var tags = this.props.tags;
    
    return (
      <ul className="list tagList">
        {this.props.tags.map((tag) =>
          <TagListItem key={tag.id} id={tag.id} color={tag.color} enabled={tag.enabled} focused={tag.focused}>{tag.name}</TagListItem>
        )}
      </ul>
    );
  }
});

module.exports = TagList;