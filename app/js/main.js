require('promise').polyfill();
require('fetch');

var React = require('react');
var flux = require('./flux');
var hello = require('hello.all');

var service = 'facebook';

var Login = React.createClass({
  handleClick: function handleLoginClick(event) {
    hello(service)
      .login({scope: 'email'})
      .then(function(data) {
        console.log(data);
        console.log('looking up profile...');
        var token = data.authResponse.access_token;
        return hello(service).api('me').then(function(json){
            console.log(json.id, json.email);
            fetch('http://localhost:3001/token?token='+token+'&user='+json.id).then(function(resp) {
              var json = resp.json();
              console.log('Got response: ');
              console.log(json);
            });
        }, function(e){
            console.log(e.error.message);
        });
      });
  },
  render: function renderLogin() {
    hello(service).init({facebook: '1654582774769215'}, {response_type: 'token'});
    return <span onClick={this.handleClick}>Login</span>
  }
});

React.render(
  <Login />,
  document.getElementById('login')
);
