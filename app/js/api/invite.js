var core = require('./core');
var api_url = require('./config').api_url;
var baseEndpoint = `${api_url}/invites`;

var Invite = {
  accept(id) {
    return core.post(`${baseEndpoint}/${id}/accept`);
  },
  decline(id) {
    return core.post(`${baseEndpoint}/${id}/decline`);
  }
};

module.exports = Invite;
