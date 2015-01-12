require('es6-promise').polyfill();
require('fetch');

function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}

function json(response) {
  return response.json();
}

function request(url, token, method, body) {
  return fetch(url, {
    method: method,
    headers: {
      'Authorization': 'Bearer '+ token
    },
    body: JSON.stringify(body)
  })
    .then(status)
    .then(json)
}

function get(url, token) {
  return request(url, token, 'get');
}

function post(url, token, body) {
  return request(url, token, 'post', body);
}

function put(url, token, body) {
  return request(url, token, 'put', body);
}

function del(url, token) {
  return request(url, token, 'delete');
}

module.exports = {
  get: get,
  post: post,
  put: put,
  del: del
}
