var actions = require('../constants/actions');
var Token = require('../api/token');
var hello = require('hellojs');

module.exports = {
  signIn(provider) {
    hello(provider)
      .login({scope: 'email'})
      .then((data) => {
          console.log(data);
          console.log('looking up profile...');
          var token = data.authResponse.access_token;
          return Token.get(provider, token);
        }, (e) => onsole.log(e.error.message))
      .then((token) => {
        this.dispatch(actions.SIGN_IN_SUCCESS, {
            firstName: 'first',
            lastName: 'last'
        });
      });
  }
}
