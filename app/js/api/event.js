var core = require('./core');
var api_url = require('./config').api_url;
var baseEndpoint = `${api_url}/events`;

var Event = {
  all() {
    return core.get(baseEndpoint);
  },
  one(id) {
    return core.get(`${baseEndpoint}/${id}`);
  },
  create(event) {
    return core.post(baseEndpoint, event);
  },
  update(id, event) {
    return core.put(`${baseEndpoint}/${id}`, event);
  },
  remove(id) {
    return core.delete(`${baseEndpoint}/${id}`);
  },
  invite(id, username) {
    return core.put(`${baseEndpoint}/${id}/invitees/${username}`);
  },
  uninvite(id, username) {
    return core.delete(`${baseEndpoint}/${id}/invitees/${username}`);
  },
  addTag(id, tagName) {
    return core.put(`${baseEndpoint}/${id}/tags/${tagName}`);
  },
  removeTag(id, tagName) {
    return core.delete(`${baseEndpoint}/${id}/tags/${tagName}`);
  },
  addReminder(id, reminder) {
    return core.put(`${baseEndpoint}/${id}/reminders`, reminder);
  },
  removeReminder(id, reminderId) {
    return core.delete(`${baseEndpoint}/${id}/reminders/${reminderId}`);
  }
};

module.exports = Event;
