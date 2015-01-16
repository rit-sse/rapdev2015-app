var Fluxxor = require('fluxxor');
var actions = require('../constants/actions');

var TagStore = Fluxxor.createStore({
  initialize(options) {

    this.data = {
      tags: []
    };


    this.bindActions(
      actions.ACTIVATE_TAG, this._activateTag,
      actions.DEACTIVATE_TAG, this._deactivateTag,
      actions.SET_ACTIVE_TAGS, this._setActiveTags,
      actions.FETCH_TAGS_SUCCESS, this._fetchTags,
      actions.FETCH_TAGS_FAILURE, this._fetchTags
    );
  },

  _activateTag(payload, type) {
    this.data.tags.filter((tag) => tag.id === payload.tag)[0].active = true;

    this.emit('change');
  },

  _deactivateTag(payload, type) {
    this.data.tags.filter((tag) => tag.id === payload.tag)[0].active = false;

    this.emit('change');
  },

  _setActiveTags(payload, type) {
    this.data.tags.filter((tag) => payload.tags.indexOf(tag.id) !== -1).forEach((tag) =>
      tag.active = true
    );

    this.emit('change');
  },

  _fetchTags(payload, type) {
    if(type == actions.FETCH_TAGS_FAILURE){
      console.log(actions.FETCH_TAGS_FAILURE, payload.stack);
    }
    this.data.tags = payload.map((tag) => {
      tag.active = false;
      return tag;
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

module.exports = TagStore;