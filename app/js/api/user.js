var core = require('./core');

var baseEndpoint = 'http://localhost:3001/api/users';

var User = {
  one(id) {
    return core.get(`${baseEndpoint}/${id}`);
  },
  update(id, user) {
    return core.put(`${baseEndpoint}/${id}`, user);
  },
  isSignedIn() {
    return new Date(core.getToken().exp) > Date.now();
  }
};
