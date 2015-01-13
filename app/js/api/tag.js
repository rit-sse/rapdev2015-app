var core = require('./core');

var baseEndpoint = 'http://localhost:3001/api/tags';

var Tag = {
  all() {
    return core.get(baseEndpoint);
  },
  one(id) {
    return core.get(baseEndpoint + '/' + id);
  },
  create(tag) {
    return core.post(baseEndpoint, tag);
  },
  update(id, tag) {
    return core.put(baseEndpoint + '/' + id, tag);
  },
  remove(id) {
    return core.delete(baseEndpoint + '/' + id);
  }
};

module.exports = Tag;
