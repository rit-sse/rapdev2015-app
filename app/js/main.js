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
  getInitialState: function getInitialLoginState() {
    return {token: null};
  },
  render: function renderLogin() {
    hello(service).init({facebook: '1654582774769215'}, {response_type: 'token'});
    return <span onClick={flux.actions.user.signIn.bind(null, 'facebook')}>{this.state.token ? 'Logged In!' : 'Login'}</span>
  }
});


var loginButton = React.render(
  <Login />,
  document.getElementById('login')
);

var TestButton = React.createClass({
  getInitialState: function getInitialLoginState() {
    return {response: ''};
  },
  handleClick: function handleTestButtonClick(event) {
    var self = this;
    Tag
      .create({name: 'projects', color: 'FF00FF' })
      .then(function(){
        Tag.all().then(function(json){
          console.log(json)
          self.setState({response: JSON.stringify(json, null, 4)});
        })
        .catch(function(err){
          self.setState({response: JSON.stringify(err, null, 4)});
        });
      });
  },
  render: function renderTestButton() {
    return <div><button onClick={this.handleClick}>Fetch a thing!</button><br/><span><pre>{this.state.response}</pre></span></div>
  }
});

React.render(
  <TestButton />,
  document.getElementById('request')
);
