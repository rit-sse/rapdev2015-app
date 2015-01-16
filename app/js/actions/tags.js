var actions = require('../constants/actions');

module.exports = {

  activateTag(tag) {
    this.dispatch(actions.ACTIVATE_TAG, {
        tag: tag
    });
  },

  deactivateTag(tag) {
    this.dispatch(actions.DEACTIVATE_TAG, {
        tag: tag
    });
  },

  setActiveTags(tags) {
    this.dispatch(actions.SET_ACTIVE_TAGS, {
        tags: tags
    });
  },

  fetchTags() {
    // use api to fetch all tags for user
  }


}