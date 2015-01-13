var core = require('./core');

var baseEndpoint = 'http://localhost:3001/api/events';

var Event = {
  all: function() {
    return core.get(baseEndpoint);
  },
  one: function(id) {
    return core.get(baseEndpoint + '/' + id);
  },
  create: function(event) {
    return core.post(baseEndpoint, event);
  },
  update: function(id, event) {
    return core.put(baseEndpoint + '/' + id, event);
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
  }
};

module.exports = Event;
