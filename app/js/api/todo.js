var api = require('./core');

var baseEndpoint = 'http://localhost:3001/api/todos';

var Todo = {
  all: function() {
    return api.get(baseEndpoint);
  },
  one: function(id) {
    return api.get(baseEndpoint + '/' + id);
  },
  create: function(todo) {
    return api.post(baseEndpoint, todo);
  },
  update: function(id, todo) {
    return api.put(baseEndpoint + '/' + id, todo);
  },
  remove: function(id) {
    return api.del(baseEndpoint + '/' + id);
  },
  invite: function(id, email) {
    return api.post(baseEndpoint + '/' + id + '/invite', { email: email });
  },
  getTags: function(id) {
    return api.get(baseEndpoint + '/' + id + '/tags');
  },
  addTag: function(id, tagId) {
    return api.put(baseEndpoint + '/' + id + '/tags/add', { tagId: tagId });
  },
  removeTag: function(id, tagId) {
    return api.put(baseEndpoint + '/' + id + '/tags/add', { tagId: tagId });
  },
  getReminders: function(id) {
    return api.get(baseEndpoint + '/' + id + '/reminders');
  },
  addReminder: function(id, reminder) {
    return api.post(baseEndpoint + '/' + id + '/reminders');
  },
  removeReminder: function(id, reminderId) {
    return api.post(baseEndpoint + '/' + id + '/reminders', { reminderId: reminderId });
  },
  complete: function(id) {
    return api.put(baseEndpoint + '/' + id + '/complete');
  },
  reopen: function(id) {
    return api.put(baseEndpoint + '/' + id + '/reopen');
  },
  subtasks: function(id) {
    return api.get(baseEndpoint + '/' + id + '/subtasks');
  },
  createSubtask: function(id, post) {
    return api.post(baseEndpoint + '/' + id + '/subtasks', post);
  }
};

module.exports = Todo;
