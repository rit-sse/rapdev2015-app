require('es6-promise').polyfill();
require('fetch');


var React = require('react');
var flux = require('./flux');
var hello = require('hellojs');
var api = require('./api');
var Tag = api.Tag;
var Token = api.Token

var service = 'facebook';


var Login = React.createClass({
  getInitialState() {
    return {token: null};
  },
  render() {
    hello(service).init({facebook: '1654582774769215'}, {response_type: 'token'});
    return <span onClick={flux.actions.user.signIn.bind(null, 'facebook')}>{this.state.token ? 'Logged In!' : 'Login'}</span>
  }
});


var loginButton = React.render(
  <Login />,
  document.getElementById('login')
);

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
    return <div><button onClick={this.handleClick}>Fetch a thing!</button><br/><span><pre>{this.state.response}</pre></span></div>
  }
});

React.render(
  <TestButton />,
  document.getElementById('request')
);
