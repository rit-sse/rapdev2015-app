var api = require('./core');

var baseEndpoint = 'http://localhost:3001/api/tags';

var Tag = {
  all: function() {
    return api.get(baseEndpoint);
  },
  one: function(id) {
    return api.get(baseEndpoint + '/' + id);
  },
  create: function(tag) {
    return api.post(baseEndpoint, tag);
  },
  update: function(id, tag) {
    return api.put(baseEndpoint + '/' + id, tag);
  },
  remove: function(id) {
    return api.del(baseEndpoint + '/' + id);
  }
};

module.exports = Tag;
