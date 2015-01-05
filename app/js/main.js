var React = require('react');
var flux = require('./flux');

var Hello = React.createClass({

  render: function() {
    return <div>Hello, {this.props.name}!</div>
  }
})

React.render(
  <Hello name="World" />,
  document.getElementById('hello')
)
