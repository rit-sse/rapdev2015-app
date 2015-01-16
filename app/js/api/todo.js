var core = require('./core');
var api_url = require('./config').api_url;
var baseEndpoint = `${api_url}/todos`;

var Todo = {
  all() {
    return core.get(baseEndpoint);
  },
  one(id) {
    return core.get(`${baseEndpoint}/${id}`);
  },
  create(todo) {
    return core.post(baseEndpoint, todo);
  },
  update(id, todo) {
    return core.put(`${baseEndpoint}/${id}`, todo);
  },
  remove(id) {
    return core.delete(`${baseEndpoint}/${id}`);
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

module.exports = Todo;
