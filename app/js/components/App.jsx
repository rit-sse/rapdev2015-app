var React = require('react'),
  Fluxxor = require("fluxxor"),
  FluxMixin = Fluxxor.FluxMixin(React),
  StoreWatchMixin = Fluxxor.StoreWatchMixin;

var AppBar = require('./AppBar'),
  Panel = require('./panels/Panel'),
  TagSearch = require('./TagSearch');
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
        <Panel width={256} depth={1}>
          <TagSearch />
        </Panel>
        <Panel width="rest" depth={0}>
          <p> hi </p>
          <p><LoginButton /></p>
          <p><TestButton /></p>
        </Panel>
      </div>
    );
  }
});


var hello = require('hellojs');
var service = 'facebook';

var LoginButton = React.createClass({
  mixins: [FluxMixin],
  getInitialState() {
    return {token: null};
  },
  getStateFromFlux() {},
  render() {
    hello(service).init({facebook: '1654582774769215'}, {response_type: 'token'});
    return <button onClick={this.getFlux().actions.user.signIn.bind(null, 'facebook')} className="z1">{this.state.token ? 'Logged In!' : 'Login'}</button>
  }
});


var api = require('../api'),
  Tag = api.Tag,
  Token = api.Token;

var TestButton = React.createClass({
  getInitialState() {
    return {response: ''};
  },
  handleClick(event) {
    Tag
      .create({name: 'projects', color: 'FF00FF' })
      .then(() => {
        Tag.all().then((json) => {
          console.log(json)
          this.setState({response: JSON.stringify(json, null, 4)});
        })
        .catch((err) => {
          this.setState({response: JSON.stringify(err, null, 4)});
        });
      });
  },
  render() {
    return <div><button onClick={this.handleClick} className="z1">Fetch a thing!</button><br/><span><pre>{this.state.response}</pre></span></div>
  }
});


module.exports = App;
