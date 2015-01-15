var core = require('./core');
var api_url = require('./config').api_url;
var baseEndpoint = `${api_url}/identities`;

var Identity = {
  all() {
    return core.get(baseEndpoint);
  },
  one(id) {
    return core.get(`${baseEndpoint}/${id}`);
  },
  create(identity) {
    return core.post(baseEndpoint, identity);
  },
  update(id, identity) {
    return core.put(`${baseEndpoint}/${id}`, identity);
  },
  remove(id) {
    return core.delete(`${baseEndpoint}/${id}`);
  },
  addMember(id, memberId) {
    return core.put(`${baseEndpoint}/${id}/members/${memberId}`);
  },
  removeMember(id, memberId) {
    return core.delete(`${baseEndpoint}/${id}/members/${memberId}`);
  }
};

module.exports = Identity;
