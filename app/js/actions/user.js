var actions = require('../constants/actions');

module.exports = {
  signIn: function(provider){
    this.dispatch(actions.SIGN_IN_SUCCESS, {
      firstName: 'first',
      lastName: 'last'
    })
  }
}