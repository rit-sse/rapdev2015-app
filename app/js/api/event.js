var core = require('./core');

var baseEndpoint = 'http://localhost:3001/api/events';

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
  }
};

module.exports = Event;
