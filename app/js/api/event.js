var api = require('./core');

var baseEndpoint = 'http://localhost:3001/api/events';

var Event = {
  all: function() {
    return api.get(baseEndpoint);
  },
  one: function(id) {
    return api.get(baseEndpoint + '/' + id);
  },
  create: function(event) {
    return api.post(baseEndpoint, event);
  },
  update: function(id, event) {
    return api.put(baseEndpoint + '/' + id, event);
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
};

module.exports = Event;
