var React = require('react');

var LogIn = require('./LogIn');

var AppBar = React.createClass({
  render() {
    return (
      <header className="appBar toolbar z1">
        <LogIn />
        RapDev 2015
      </header>
    );
  }
});

module.exports = AppBar;
