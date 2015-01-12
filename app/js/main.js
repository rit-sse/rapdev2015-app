require('promise').polyfill();
require('fetch');

var React = require('react');
var flux = require('./flux');

var service = 'facebook';

var Login = React.createClass({
  getInitialState: function getInitialLoginState() {
    return {token: null};
  },
  handleClick: function handleLoginClick(event) {
    if (this.state.token) return;
    var self = this;
    hello(service)
      .login({scope: 'email'})
      .then(function(data) {
        console.log(data);
        console.log('looking up profile...');
        var token = data.authResponse.access_token;
        return hello(service).api('me').then(function(json){
            console.log(json.id, json.email);
            fetch('http://localhost:3001/token?token='+token+'&user='+json.id+'&provider='+service).then(function(resp) {
              return resp.json();
            }).then(function(json) {
              console.log('Got response: ');
              console.log(json);
              self.setState({token: json.token});
            });
        }, function(e){
            console.log(e.error.message);
        });
      });
  },
  render: function renderLogin() {
    hello(service).init({facebook: '1654582774769215'}, {response_type: 'token'});
    return <span onClick={this.handleClick}>{this.state.token ? 'Logged In!' : 'Login'}</span>
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
    fetch('http://localhost:3001/api/tags', {
      headers: {
        'Authorization': 'Bearer '+loginButton.state.token
      }
    }).then(function(resp) {
      self.setState({response: resp});
    });
  },
  render: function renderTestButton() {
    return <div><button onClick={this.handleClick}>Fetch a thing!</button><br/><span>{this.state.response}</span></div>
  }
});

React.render(
  <TestButton />,
  document.getElementById('request')
);