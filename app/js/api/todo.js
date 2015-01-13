var core = require('./core');

var baseEndpoint = 'http://localhost:3001/api/todos';

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
  invite(id, email) {
    return core.post(`${baseEndpoint}/${id}/invite`, { email });
  },
  getTags(id) {
    return core.get(`${baseEndpoint}/${id}/tags`);
  },
  addTag(id, tagId) {
    return core.put(`${baseEndpoint}/${id}/tags/add`, { tagId });
  },
  removeTag(id, tagId) {
    return core.put(`${baseEndpoint}/${id}/tags/add`, { tagId });
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