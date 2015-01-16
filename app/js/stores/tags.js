var Fluxxor = require('fluxxor');
var actions = require('../constants/actions');

var TagsStore = Fluxxor.createStore({
  initialize(options) {

    this.data = {
      tags: {}
    };


    this.bindActions(
      actions.ACTIVATE_TAG, this._activateTag,
      actions.DEACTIVATE_TAG, this._deactivateTag,
      actions.SET_ACTIVE_TAGS, this._setActiveTags
    );
  },

  _activateTag(payload, type) {
    this.data.tags[payload.tag].active = true;

    this.emit('change');
  },

  _deactivateTag(payload, type) {
    this.data.tags[payload.tag].active = false;

    this.emit('change');
  },

  _setActiveTags(payload, type) {
    payload.tags.forEach((tag) => {
      this.data.tags[tag].active = true;
    });

    this.emit('change');
  },

  getAllTags() {
    return this.data.tags;
  },

  getActiveTags() {
    return this.data.tags.filter((tag) => tag.active);
  }

});

module.exports = TagsStore;