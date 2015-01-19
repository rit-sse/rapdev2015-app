var React = require('react'),
  Fluxxor = require("fluxxor"),
  FluxMixin = Fluxxor.FluxMixin(React),
  StoreWatchMixin = Fluxxor.StoreWatchMixin,
  hello = require('hellojs');

var SERVICE = 'facebook';

var LogIn = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin('UserStore')],
  
  _handleLoginButtonClick() {
    this.getFlux().actions.user.signIn('facebook');
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
    
    if (this.state.user) {
      var content = <div style={{margin: '6px 2px'}}>{this.state.user.firstName + ' ' + this.state.user.lastName}</div>;
    } else {
      var content = <button style={{borderRadius: '28px', width: 'auto'}} onClick={this._handleLoginButtonClick}>Log in</button>;
    }
    
    return (
      <div style={{float: 'right', fontSize: '16px'}}>
        {content}
      </div>
    );
  }
});

module.exports = LogIn;
