var core = require('./core');

var baseEndpoint = 'http://localhost:3001/api/todos';

var Todo = {
  all: function() {
    return core.get(baseEndpoint);
  },
  one: function(id) {
    return core.get(baseEndpoint + '/' + id);
  },
  create: function(todo) {
    return core.post(baseEndpoint, todo);
  },
  update: function(id, todo) {
    return core.put(baseEndpoint + '/' + id, todo);
  },
  remove: function(id) {
    return core.delete(baseEndpoint + '/' + id);
  },
  invite: function(id, email) {
    return core.post(baseEndpoint + '/' + id + '/invite', { email: email });
  },
  getTags: function(id) {
    return core.get(baseEndpoint + '/' + id + '/tags');
  },
  addTag: function(id, tagId) {
    return core.put(baseEndpoint + '/' + id + '/tags/add', { tagId: tagId });
  },
  removeTag: function(id, tagId) {
    return core.put(baseEndpoint + '/' + id + '/tags/add', { tagId: tagId });
  },
  getReminders: function(id) {
    return core.get(baseEndpoint + '/' + id + '/reminders');
  },
  addReminder: function(id, reminder) {
    return core.post(baseEndpoint + '/' + id + '/reminders');
  },
  removeReminder: function(id, reminderId) {
    return core.post(baseEndpoint + '/' + id + '/reminders', { reminderId: reminderId });
  },
  complete: function(id) {
    return core.put(baseEndpoint + '/' + id + '/complete');
  },
  reopen: function(id) {
    return core.put(baseEndpoint + '/' + id + '/reopen');
  },
  subtasks: function(id) {
    return core.get(baseEndpoint + '/' + id + '/subtasks');
  },
  createSubtask: function(id, post) {
    return core.post(baseEndpoint + '/' + id + '/subtasks', post);
  }
};

module.exports = Todo;
