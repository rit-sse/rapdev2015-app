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
  getTags(id) {
    return core.get(`${baseEndpoint}/${id}/tags`);
  },
  addTag(id, tagId) {
    return core.post(`${baseEndpoint}/${id}/tags`, { tagId });
  },
  removeTag(id, tagName) {
    return core.delete(`${baseEndpoint}/${id}/tags/${tagName}`);
  },
  getReminders(id) {
    return core.get(`${baseEndpoint}/${id}/reminders`);
  },
  addReminder(id, reminder) {
    return core.post(`${baseEndpoint}/${id}/reminders`);
  },
  removeReminder(id, reminderId) {
    return core.post(`${baseEndpoint}/${id}/reminders`, { reminderId });
  },
  complete(id) {
    return core.put(`${baseEndpoint}/${id}/complete`);
  },
  reopen(id) {
    return core.put(`${baseEndpoint}/${id}/reopen`);
  },
  subtasks(id) {
    return core.get(`${baseEndpoint}/${id}/subtasks`);
  },
  createSubtask(id, post) {
    return core.post(`${baseEndpoint}/${id}/subtasks`, post);
  }
};

module.exports = Todo;
