require('es6-promise').polyfill();
require('whatwg-fetch');

function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}

function getToken() {
  return (localStorage.getObject('jwt') || {});
}

function json(response) {
  return response.json();
}

function request(url, method, body) {
  return fetch(url, {
    method: method,
    headers: {
      'Authorization': `Bearer ${getToken().token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(status)
    .then(json)
}

function get(url) {
  return request(url, 'get');
}

function post(url, body) {
  return request(url, 'post', body);
}

function put(url, body) {
  return request(url, 'put', body);
}

function del(url) {
  return request(url, 'delete');
}

module.exports = {
  get: get,
  post: post,
  put: put,
  delete: del,
  getToken: getToken
}
