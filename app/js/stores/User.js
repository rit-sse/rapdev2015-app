var Fluxxor = require('fluxxor');
var actions = require('../constants/actions');

var UserStore = Fluxxor.createStore({
  initialize: function(options){

    this.data = {};


    this.bindActions(
      actions.SIGN_IN_SUCCESS, this.signIn,
      actions.SIGN_IN_FAILURE, this.signInFail
    );
  },

  signIn: function(payload, type){
    this.data.user = {
      firstName: payload.firstName,
      lastName: payload.lastName
    }
  }

});