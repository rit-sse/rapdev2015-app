var React = require('react'),
  Fluxxor = require("fluxxor"),
  FluxMixin = Fluxxor.FluxMixin(React);

var AppBar = require('./AppBar'),
  Panel = require('./panels/Panel');
//var TodoPanel = require('./panels/TodoPanel');

var App = React.createClass({
  mixins: [FluxMixin],
  render() {
    return (
      <div className="app">
        <AppBar />
        <Panel width={256} depth={1}>
          This is some text.
        </Panel>
        <Panel width="rest" depth={0}>
          <p> hi </p>
          <p><LoginButton flux={this.props.flux} /></p>
          <p><TestButton /></p>
        </Panel>
      </div>
    );
  }
});


var hello = require('hellojs');
var service = 'facebook';

var LoginButton = React.createClass({
  getInitialState() {
    return {token: null};
  },
  render() {
    hello(service).init({facebook: '1654582774769215'}, {response_type: 'token'});
    return <button onClick={this.props.flux.actions.user.signIn.bind(null, 'facebook')} className="z1">{this.state.token ? 'Logged In!' : 'Login'}</button>
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
        Tag.all().then(function(json){
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
