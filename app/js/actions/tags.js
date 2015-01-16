var actions = require('../constants/actions');
var Tag = require('../api/tag');

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
    Tag
        .all()
        .then((tags) => {
            this.dispatch(actions.FETCH_TAGS_SUCCESS, tags);
        })
        .catch((err) => {
            this.dispatch(actions.FETCH_TAGS_FAILURE, err);
        });

  }


}