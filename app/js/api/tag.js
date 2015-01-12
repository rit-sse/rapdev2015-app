var api = require('./core');

var baseEndpoint = 'http://localhost:3001/api/tags';

var Tag = {
  all: function() {
    return api.get(baseEndpoint);
  },
  one: function(id) {
    return api.get(baseEndpoint + '/' + id);
  },
  create: function(body) {
    return api.post(baseEndpoint, body);
  },
  update: function(id, body) {
    return api.put(baseEndpoint + '/' + id, body);
  },
  remove: function(id) {
    return api.del(baseEndpoint + '/' + id);
  }
};

module.exports = Tag;
