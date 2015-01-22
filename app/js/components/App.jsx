var React = require('react'),
  Fluxxor = require("fluxxor"),
  FluxMixin = Fluxxor.FluxMixin(React),
  StoreWatchMixin = Fluxxor.StoreWatchMixin;

var AppBar = require('./AppBar'),
  Panel = require('./Panel'),
  TagSearchPanel = require('./tags/TagSearchPanel'),
  CalendarPanel = require('./calendar/CalendarPanel');
//var TodoPanel = require('./panels/TodoPanel');

var App = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin('UserStore')],
  
  getInitialState() {
    return null;
  },
  getStateFromFlux() {},
  
  render() {
    return (
      <div className="app">
        <AppBar />
        <TagSearchPanel />
        <CalendarPanel />
        <Panel width={192} depth={1}>
          To-dos:
        </Panel>
      </div>
    );
  }
});

module.exports = App;
