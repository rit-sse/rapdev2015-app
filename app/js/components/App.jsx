var React = require('react');

//var TodoPanel = require('./panels/TodoPanel');

var Panel = require('./panels/Panel');

var App = React.createClass({
  render: function(){
    var style = {
      display: 'flex',
    }

    return (
      <div className="app" style={style}>
        <Panel width="50px">
        </Panel>
        <Panel width="rest">
          <p> hi </p>
        </Panel>
      </div>
    );
  }
});

module.exports = App;