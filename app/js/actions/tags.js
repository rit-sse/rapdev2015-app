var actions = require('../constants/actions');
var Tag = require('../api/tag');


// Dummy data - delete later.
var HARD_CODED_TAGS = [{
  id: 'd2cd287514c44007b4794d3877cfe474',
  name: 'Tag 1',
  color: '#f44336',
  active: false
}, {
  id: '02ef1fe981054724a728e11cc5d30bda',
  name: 'Tag 2',
  color: '#e91e63',
  active: true
}, {
  id: 'bd5c4495a9d8403dafd75e089f595565',
  name: 'Tag 3',
  color: '#9c27b0',
  active: true
}, {
  id: 'a921a852b2b7421cba060d4a62bafe8e',
  name: 'Tag D',
  color: '#673ab7',
  active: true
}, {
  id: 'a6e5d56c189343c2b1485c58062a6a6d',
  name: 'Pretty tag',
  color: '#3f51b5',
  active: true
}, {
  id: '49053485ed60414ba18995175dcb3686',
  name: 'Blue tag',
  color: '#2196f3',
  active: false
}, {
  id: '3c63a1ac2b774a2492f285fb4280873a',
  name: 'Tag lighter blue',
  color: '#03a9f4',
  active: false
}, {
  id: '01141ae59370412fa5e7940c5378a97e',
  name: 'Not-teal tag',
  color: '#00bcd4',
  active: false
}, {
  id: 'adae6b1e9e8b48cfb45d92607b89fcc5',
  name: 'Not-cyan tag',
  color: '#009688',
  active: false
}, {
  id: '09bdcafa13d04cb395894b9d35299966',
  name: 'Green tag',
  color: '#4caf50',
  active: true
}];

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
            // TODO: Use real tags.
            this.dispatch(actions.FETCH_TAGS_SUCCESS, HARD_CODED_TAGS);//tags);
        })
        .catch((err) => {
            this.dispatch(actions.FETCH_TAGS_FAILURE, err);
        });

  }


}