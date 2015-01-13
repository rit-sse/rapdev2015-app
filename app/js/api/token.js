var core = require('./core');
require('../local-storage');

var Token = {

  get: function(provider, token) {
    return core
      .get('http://localhost:3001/token?token='+ token +'&provider=' + provider)
      .then(function timeout(json){
        localStorage.setObject('jwt', json);
        setTimeout(function refresh(){
          Token.refresh();
        }, 30*60000);
        return json;
      });
  },
  refresh: function() {
    return core
      .get('http://localhost:3001/token?provider=refresh_token')
      .then(function timeout(json){
        localStorage.setObject('jwt', json);
        setTimeout(function refresh(){
          Token.refresh();
        }, 30*60000);
        return json;
      });
  }
}

module.exports = Token;
