var React = require('react'),
  Fluxxor = require('fluxxor'),
  FluxMixin = Fluxxor.FluxMixin(React),
  StoreWatchMixin = Fluxxor.StoreWatchMixin;

var Calendar = React.createClass({
  mixins: [FluxMixin],
  
  // React and Flux lifecycle methods
  getStateFromFlux() {
    
  },
  render() {
    return (
      <form className="toolbar calendarToolbar" style={{margin: '-16px'}}>
        <input type="radio" role="button" name="calendarView" value="month" />
        <input type="radio" role="button" name="calendarView" value="week" />
        <input type="radio" role="button" name="calendarView" value="day" />
        <input type="radio" role="button" name="calendarView" value="agenda" />
      </form>
    );
  }
});

module.exports = Calendar;