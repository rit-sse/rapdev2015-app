var core = require('./core');

var baseEndpoint = 'http://localhost:3001/api/users';

var User = {
  all: function() {
    return core.get(baseEndpoint);
  },
  one: function(id) {
    return core.get(baseEndpoint + '/' + id);
  },
  isSignedIn: function() {
    return new Date(core.getToken().exp) > Date.now();
  }
};
