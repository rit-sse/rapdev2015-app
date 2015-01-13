var core = require('./core');
var api_url = require('./config').api_url;
var baseEndpoint = `${api_url}/users`;

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
