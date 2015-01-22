var React = require('react'),
  Fluxxor = require('fluxxor'),
  FluxMixin = Fluxxor.FluxMixin(React),
  StoreWatchMixin = Fluxxor.StoreWatchMixin;

var Calendar = React.createClass({
  mixins: [FluxMixin],
  
  _handleViewChange(e) {
    this.setState({
      view: e.target.value
    });
  },
  
  // React and Flux lifecycle methods
  getInitialState() {
    return {
      view: 'month'
    };
  },
  getStateFromFlux() {
    
  },
  render() {
    return (
      <form className="toolbar calendarToolbar" onChange={this._handleViewChange} style={{margin: '-16px'}}>
        <input type="radio" role="button" name="calendarView" value="month" defaultChecked={this.state.view === 'month'} />
        <input type="radio" role="button" name="calendarView" value="week" defaultChecked={this.state.view === 'week'} />
        <input type="radio" role="button" name="calendarView" value="day" defaultChecked={this.state.view === 'day'} />
        <input type="radio" role="button" name="calendarView" value="agenda" defaultChecked={this.state.view === 'agenda'} />
      </form>
    );
  }
});

module.exports = Calendar;