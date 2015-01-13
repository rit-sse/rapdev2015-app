var core = require('./core');
require('../local-storage');

var Token = {

  get: function(id, token, provider) {
    return core
      .get('http://localhost:3001/token?token='+ token +'&user='+ id +'&provider=' + provider)
      .then(function timeout(json){
        localStorage.setObject('jwt', json);
        setTimeout(function refresh(){
          Token.get(id, token, provider);
        }, 30*60000);
        return json;
      });
  }
}

module.exports = Token;
