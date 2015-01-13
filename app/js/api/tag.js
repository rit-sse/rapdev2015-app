var core = require('./core');
var api_url = require('./config').api_url;
var baseEndpoint = `${api_url}/tags`;

var Tag = {
  all() {
    return core.get(baseEndpoint);
  },
  one(id) {
    return core.get(`${baseEndpoint}/${id}`);
  },
  create(tag) {
    return core.post(baseEndpoint, tag);
  },
  update(id, tag) {
    return core.put(`${baseEndpoint}/${id}`, tag);
  },
  remove(id) {
    return core.delete(`${baseEndpoint}/${id}`);
  }
};

module.exports = Tag;
