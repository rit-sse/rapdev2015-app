var Fluxxor = require('fluxxor');
var actions = require('../constants/actions');
var User = require('../api/user');

var UserStore = Fluxxor.createStore({
  initialize: function(options){

    this.data = {};


    this.bindActions(
      actions.SIGN_IN_SUCCESS, this._signIn,
      actions.SIGN_IN_FAILURE, this._signInFail,
      actions.SIGN_OUT, this.signOut
    );
  },

  _signIn: function(payload, type){
    this.data.user = {
      firstName: payload.firstName,
      lastName: payload.lastName
    }

    this.emit('change');
  },

  _signOut: function(payload, type){
    this.data = {};
    this.emit('change');
  }

  isSignedIn: function(){
    return User.isSignedIn();
  },

});

