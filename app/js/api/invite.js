var core = require('./core');

var baseEndpoint = 'http://localhost:3001/api/invites';

var Invite = {
  accept: function(id) {
    return core.post(baseEndpoint + '/' + id + '/accept');
  },
  decline: function(id) {
    return core.post(baseEndpoint + '/' + id + '/decline');
  }
};

module.exports = Invite;
