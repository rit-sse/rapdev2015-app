var React = require('react'),
  Fluxxor = require("fluxxor"),
  FluxMixin = Fluxxor.FluxMixin(React),
  StoreWatchMixin = Fluxxor.StoreWatchMixin,
  hello = require('hellojs');

var SERVICE = 'facebook';

var LogIn = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin('UserStore')],
  
  _handleLogInButtonClick() {
    this.getFlux().actions.user.signIn('facebook');
  },
  _handleLogOutButtonClick() {
    this.getFlux().actions.user.signOut();
  },
  
  // React and Flux lifecycle methods
  getInitialState() {
    return {
      token: null
    };
  },
  getStateFromFlux() {
    var flux = this.getFlux();
    return {
      // TODO: Change this when a getter function exists.
      user: flux.stores.UserStore.data.user
    };
  },
  render() {
    hello(SERVICE).init({facebook: '1654582774769215'}, {response_type: 'token'});
    
    var containerStyle = {
      float: 'right',
      fontSize: '16px'
    };
    
    var buttonStyle = {
      borderRadius: '28px',
      width: 'auto'
    };
    
    if (this.state.user) {
      var content = (
        <div style={containerStyle}>
          <span style={{display: 'inline-block', margin: '6px 2px'}}>{this.state.user.firstName + ' ' + this.state.user.lastName}</span>
          <button style={buttonStyle} onClick={this._handleLogOutButtonClick}>Log out</button>
        </div>
      );
    } else {
      var content = (
        <div style={containerStyle}>
          <button style={buttonStyle} onClick={this._handleLogInButtonClick}>Log in</button>
        </div>
      );
    }
    
    return content;
  }
});

module.exports = LogIn;
