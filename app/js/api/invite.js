var api = require('./core');

var baseEndpoint = 'http://localhost:3001/api/invites';

var Invite = {
  accept: function(id) {
    return api.post(baseEndpoint + '/' + id + '/accept');
  },
  decline: function(id) {
    return api.post(baseEndpoint + '/' + id + '/decline');
  }
};

module.exports = Invite;
