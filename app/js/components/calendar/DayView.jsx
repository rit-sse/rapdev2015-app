var React = require('react'),
  Fluxxor = require('fluxxor'),
  FluxMixin = Fluxxor.FluxMixin(React),
  StoreWatchMixin = Fluxxor.StoreWatchMixin;

var DayView = React.createClass({
  mixins: [FluxMixin],
  
  // React and Flux lifecycle methods
  getInitialState() {
    return {};
  },
  getStateFromFlux() {
  },
  render() {
    return (
      <p>[DayView]</p>
    );
  }
});

module.exports = DayView;
