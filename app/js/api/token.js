var core = require('./core');
require('../local-storage');

var Token = {

  get(provider, token) {
    return core
      .get('http://localhost:3001/token?token='+ token +'&provider=' + provider)
      .then((json) => {
        localStorage.setObject('jwt', json);
        setTimeout(() => {
          Token.refresh();
        }, 30*60000);
        return json;
      });
  },
  refresh() {
    return core
      .get('http://localhost:3001/token?provider=refresh_token')
      .then((json) => {
        localStorage.setObject('jwt', json);
        setTimeout(() => {
          Token.refresh();
        }, 30*60000);
        return json;
      });
  }
}

module.exports = Token;
