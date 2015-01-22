var React = require('react');

var Panel = require('../Panel'),
  MonthView = require('./MonthView'),
  WeekView = require('./WeekView'),
  DayView = require('./DayView'),
  AgendaView = require('./AgendaView');

var Calendar = React.createClass({
  _handleViewChange(e) {
    this.setState({
      view: e.target.value
    });
  },
  
  // React lifecycle methods
  getInitialState() {
    return {
      view: 'month'
    };
  },
  render() {
    var toolbar = (
      <form className="toolbar calendarToolbar" onChange={this._handleViewChange} style={{margin: '-16px'}}>
        <input type="radio" role="button" name="calendarView" value="month" defaultChecked={this.state.view === 'month'} />
        <input type="radio" role="button" name="calendarView" value="week" defaultChecked={this.state.view === 'week'} />
        <input type="radio" role="button" name="calendarView" value="day" defaultChecked={this.state.view === 'day'} />
        <input type="radio" role="button" name="calendarView" value="agenda" defaultChecked={this.state.view === 'agenda'} />
      </form>
    );
    
    var calendarView;
    switch(this.state.view) {
      case 'month':
        calendarView = <MonthView />;
        break;
      case 'week':
        calendarView = <WeekView />;
        break;
      case 'day':
        calendarView = <DayView />;
        break;
      case 'agenda':
        calendarView = <AgendaView />;
        break;
    }
    
    return (
      <Panel width="rest" depth={0}>
        {toolbar}
        {calendarView}
      </Panel>
    );
  }
});

module.exports = Calendar;
