var core = require('./core');
require('../local-storage');

var Token = {

  get: function(provider, token) {
    return core
      .get('http://localhost:3001/token?token='+ token +'&provider=' + provider)
      .then(function timeout(json){
        localStorage.setObject('jwt', json);
        setTimeout(function refresh(){
          Token.get(provider, token);
        }, 30*60000);
        return json;
      });
  }
}

module.exports = Token;
