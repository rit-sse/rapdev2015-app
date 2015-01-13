var actions = require('../constants/actions');
var Token = require('../api/token');
var hello = require('hellojs');

module.exports = {
  signIn: function(provider){
    hello(provider)
      .login({scope: 'email'})
      .then((data) => {
        console.log(data);
        console.log('looking up profile...');
        var token = data.authResponse.access_token;
        return Token.get(provider, token);
        }, function(e){
            console.log(e.error.message);
        })
      .then(() => {
        this.dispatch(actions.SIGN_IN_SUCCESS, {
            firstName: 'first',
            lastName: 'last'
        });
      });
  }
}
