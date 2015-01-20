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
  addTag(id, tagId) {
    return core.put(`${baseEndpoint}/${id}/tags/${tagId}`);
  },
  removeTag(id, tagId) {
    return core.delete(`${baseEndpoint}/${id}/tags/${tagId}`);
  },
  addReminder(id, reminder) {
    return core.put(`${baseEndpoint}/${id}/reminders`, reminder);
  },
  removeReminder(id, reminderId) {
    return core.delete(`${baseEndpoint}/${id}/reminders/${reminderId}`);
  }
};

module.exports = Todo;
