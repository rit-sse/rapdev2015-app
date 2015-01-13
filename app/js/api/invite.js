var core = require('./core');

var baseEndpoint = 'http://localhost:3001/api/invites';

var Invite = {
  accept(id) {
    return core.post(baseEndpoint + '/' + id + '/accept');
  },
  decline(id) {
    return core.post(baseEndpoint + '/' + id + '/decline');
  }
};

module.exports = Invite;
