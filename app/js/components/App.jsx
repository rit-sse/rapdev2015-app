var React = require('react'),
  Fluxxor = require("fluxxor"),
  FluxMixin = Fluxxor.FluxMixin(React),
  StoreWatchMixin = Fluxxor.StoreWatchMixin;

var AppBar = require('./AppBar'),
  Panel = require('./panels/Panel'),
  TagSearch = require('./TagSearch'),
  Calendar = require('./Calendar');
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
        <Panel width={224} depth={1}>
          <TagSearch />
        </Panel>
        <Panel width="rest" depth={0}>
          <Calendar />
        </Panel>
        <Panel width={192} depth={1}>
          To-dos:
        </Panel>
      </div>
    );
  }
});

module.exports = App;
