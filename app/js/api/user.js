var core = require('./core');

var baseEndpoint = 'http://localhost:3001/api/users';

var User = {
  one: function(id) {
    return core.get(baseEndpoint + '/' + id);
  },
  update: function(id, user) {
    return core.put(baseEndpoint + '/' + id, user);
  },
  isSignedIn: function() {
    return new Date(core.getToken().exp) > Date.now();
  }
};
