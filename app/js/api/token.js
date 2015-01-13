var core = require('./core');
var host = require('./config').api_host;
require('../local-storage');

var Token = {

  get(provider, token) {
    return core
      .get(`${host}/token?token=${token}&provider=${provider}`)
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
      .get(`${host}/token?provider=refresh_token`)
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
