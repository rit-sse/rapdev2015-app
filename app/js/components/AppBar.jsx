var React = require('react'),
  Fluxxor = require("fluxxor"),
  FluxMixin = Fluxxor.FluxMixin(React);

var AppBar = React.createClass({
  mixins: [FluxMixin],
  render() {
    return (
      <header className="appBar z1">
        RapDev 2015
      </header>
    );
  }
});

module.exports = AppBar;
