var React = require('react'),
  Fluxxor = require('fluxxor'),
  FluxMixin = Fluxxor.FluxMixin(React),
  Flux = require('../flux'),
  StoreWatchMixin = Fluxxor.StoreWatchMixin;

var TagList = require('./TagList');


// Dummy data - delete later.
var HARD_CODED_TAGS = [{
  id: 'd2cd287514c44007b4794d3877cfe474',
  name: 'Tag 1',
  color: '#f44336',
  enabled: false
}, {
  id: '02ef1fe981054724a728e11cc5d30bda',
  name: 'Tag 2',
  color: '#e91e63',
  enabled: true
}, {
  id: 'bd5c4495a9d8403dafd75e089f595565',
  name: 'Tag 3',
  color: '#9c27b0',
  enabled: true
}, {
  id: 'a921a852b2b7421cba060d4a62bafe8e',
  name: 'Tag D',
  color: '#673ab7',
  enabled: true
}, {
  id: 'a6e5d56c189343c2b1485c58062a6a6d',
  name: 'Pretty tag',
  color: '#3f51b5',
  enabled: true
}, {
  id: '49053485ed60414ba18995175dcb3686',
  name: 'Blue tag',
  color: '#2196f3',
  enabled: false
}, {
  id: '3c63a1ac2b774a2492f285fb4280873a',
  name: 'Tag lighter blue',
  color: '#03a9f4',
  enabled: false
}, {
  id: '01141ae59370412fa5e7940c5378a97e',
  name: 'Not-teal tag',
  color: '#00bcd4',
  enabled: false
}, {
  id: 'adae6b1e9e8b48cfb45d92607b89fcc5',
  name: 'Not-cyan tag',
  color: '#009688',
  enabled: false
}, {
  id: '09bdcafa13d04cb395894b9d35299966',
  name: 'Green tag',
  color: '#4caf50',
  enabled: true
}];

var TagSearch = React.createClass({
  mixins: [],
  propTypes: {
    query: React.PropTypes.string
  },
  
  // Non-React methods
  /**
   * Handle changes to the tag search query.
   * @param {Event} e
   */
  _handleQueryChange(e) {
    this._updateFilteredTags(e.target.value);
    this.setState({query: e.target.value});
  },
  /**
   * Handle pressing an arrow key to navigate the tag list.
   * @param {Event} e
   */
  _handleKeyDown(e) {
    if (e.ctrlKey || e.altKey || e.metaKey) {
      return;
    }
    switch (e.keyCode) {
      case 38: // Up
        e.preventDefault();
        // Decrease the focused item index, not going lower than -1.
        this.setState({focusedItem: Math.max(this.state.focusedItem - 1, -1)});
        break;
      case 40: // Down
        e.preventDefault();
        // Increased the focused item index, not going greater than the number of tags.
        var focusedItem = this.state.focusedItem + 1;
        if (this.state.filteredTags) {
          focusedItem = Math.min(focusedItem, this.state.filteredTags.length - 1);
        } else {
          focusedItem = Math.min(focusedItem, HARD_CODED_TAGS.length - 1);
        }
        this.setState({focusedItem: focusedItem});
        break;
    }
  },
  /**
   * Handle submission of the tag search field.
   * @param {Event} e
   */
  _handleSubmit(e) {
    e.preventDefault();
    if (!this.state.focusedItem) {
      return;
    }
    var focusedTag = this.state.filteredTags ?
      this.state.filteredTags[this.state.focusedItem] :
      HARD_CODED_TAGS[this.state.focusedItem];
    if (!focusedTag) {
      return;
    }
    focusedTag = HARD_CODED_TAGS.filter((tag) => tag.id === focusedTag.id)[0];
    focusedTag.enabled = !focusedTag.enabled;
  },
  _handleBlur() {
    this.setState({focusedItem: -1});
  },
  /**
   * Sort a list of tags to first place enabled tags above disabled ones and then sort alphabetically.
   * @param {Array} tagList - A list of tag objects
   */
  _sortTags(tagList) {
    return tagList.sort((a, b) => 
          // Sort enabled tags above disabled ones, and then sort alphabetically.
          (a.enabled !== b.enabled) ?
            b.enabled - a.enabled :
            a.name - b.name
        );
  },
  /**
   * Update the filtered list of tags based on the search query.
   * @param {String} query - The search query
   */
  _updateFilteredTags(query) {
    var stateChange = {};
    if (!query) {
      // If there is no query, display the full sorted tags list.
      stateChange.filteredTags = this._sortTags(HARD_CODED_TAGS);
    } else {
      // If a query has been entered, filter the list of tags.
      query = query.toLowerCase();
      stateChange.filteredTags = HARD_CODED_TAGS.filter((tag) => tag.name.toLowerCase().indexOf(query) !== -1);
      if (this.state.focusedItem < 0 && stateChange.filteredTags.length > 0) {
        stateChange.focusedItem = 0;
      }
    }
    this.setState(stateChange);
  },
  
  // React lifecycle methods
  getInitialState() {
    Flux.actions.tags.fetchTags();
    return {
      focusedItem: -1,
      filteredTags: this._sortTags(HARD_CODED_TAGS),
      query: ''
    };
  },
  render() {
    var tags = this.state.filteredTags;
    tags.forEach((tag, i) => tag.focused = i === this.state.focusedItem);
    
    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <input type="search" placeholder="Enable or disable tags" className="tagSearchBox" onChange={this._handleQueryChange} onKeyDown={this._handleKeyDown} onBlur={this._handleBlur}/>
          <TagList tags={tags} />
        </form>
      </div>
    );
  }
});

module.exports = TagSearch;