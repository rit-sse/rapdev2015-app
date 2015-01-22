var React = require('react'),
  Fluxxor = require('fluxxor'),
  FluxMixin = Fluxxor.FluxMixin(React),
  StoreWatchMixin = Fluxxor.StoreWatchMixin;

var Panel = require('../Panel'),
  TagList = require('./TagList');


var TagSearchPanel = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin('TagStore')],
  propTypes: {
    query: React.PropTypes.string
  },
  
  // Non-React methods
  /**
   * Handle changes to the tag search query.
   * @param {Event} e
   */
  _handleQueryChange(e) {
    var query = e.target.value;
    var filteredTags = this._getFilteredTags(query, this.state.tags);
    // Focus the first item when a query is entered.
    var focusedItem = (query && focusedItem < 0 && filteredTags.length > 0) ? 
      0 : this.state.focusedItem;
    
    this.setState({
      query,
      filteredTags,
      focusedItem
    });
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
          focusedItem = Math.min(focusedItem, this.state.tags.length - 1);
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
    if (this.state.focusedItem === undefined || this.state.focusedItem < 0) {
      return;
    }
    var focusedTag = this.state.filteredTags ?
      this.state.filteredTags[this.state.focusedItem] :
      this.state.tags[this.state.focusedItem];
    if (!focusedTag) {
      return;
    }
    if (focusedTag.active) {
      this.getFlux().actions.tags.deactivateTag(focusedTag.id);
    } else {
      this.getFlux().actions.tags.activateTag(focusedTag.id);
    }
    /* focusedTag = this.state.tags.filter((tag) => tag.id === focusedTag.id)[0];
    focusedTag.active = !focusedTag.active; */
  },
  _handleBlur() {
    this.setState({focusedItem: -1});
  },
  /**
   * Sort a list of tags to first place active tags above disabled ones and then sort alphabetically.
   * @param {Array} tagList - A list of tag objects
   * @returns {Array} - The sorted tag list
   */
  _sortTags(tagList) {
    return tagList.sort((a, b) => {
      // Sort active tags above disabled ones, and then sort alphabetically.
      if (a.active !== b.active) {
        return b.active - a.active;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      return 0;
    });
  },
  /**
   * Filter a list of tags based on the search query.
   * @param {String} query - The search query
   * @param {Array} tags - An array of tag objects
   * @returns {Array} - The filtered tag list
   */
  _getFilteredTags(query, tags) {
    if (!query) {
      // If there is no query, display the full sorted tags list.
      return this._sortTags(tags);
    } else {
      // If a query has been entered, filter the list of tags.
      query = query.toLowerCase();
      return tags.filter((tag) => tag.name.toLowerCase().indexOf(query) !== -1);
    }
  },
  
  // React and Flux lifecycle methods
  getInitialState() {
    // TODO: Remove this when it is no longer needed in this file.
    this.getFlux().actions.tags.fetchTags();
    return {
      query: ''
    };
  },
  getStateFromFlux() {
    var flux = this.getFlux();
    var tags = flux.stores.TagStore.getAllTags();
    var filteredTags = this._getFilteredTags(this.state ? this.state.query : '', tags);
    // Ensure the focused item is not past the end of the list.
    var focusedItem = this.state ? this.state.focusedItem : -1;
    focusedItem = focusedItem >= filteredTags.length ? filteredTags.length - 1 : focusedItem;
    return {
      tags,
      filteredTags,
      focusedItem
    };
  },
  render() {
    var tags = this.state.filteredTags;
    tags.forEach((tag, i) => tag.focused = i === this.state.focusedItem);
    
    return (
      <Panel width={224} depth={1}>
        <form onSubmit={this._handleSubmit}>
          <input type="search" placeholder="Enable or disable tags" className="tagSearchBox" onChange={this._handleQueryChange} onKeyDown={this._handleKeyDown} onBlur={this._handleBlur}/>
          <TagList tags={tags} />
        </form>
      </Panel>
    );
  }
});

module.exports = TagSearchPanel;