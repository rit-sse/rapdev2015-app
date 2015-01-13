var core = require('./core');

var baseEndpoint = 'http://localhost:3001/api/tags';

var Tag = {
  all: function() {
    return core.get(baseEndpoint);
  },
  one: function(id) {
    return core.get(baseEndpoint + '/' + id);
  },
  create: function(tag) {
    return core.post(baseEndpoint, tag);
  },
  update: function(id, tag) {
    return core.put(baseEndpoint + '/' + id, tag);
  },
  remove: function(id) {
    return core.delete(baseEndpoint + '/' + id);
  }
};

module.exports = Tag;
