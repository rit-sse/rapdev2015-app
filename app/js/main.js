// Polyfills
require('es6-promise').polyfill();
require('fetch');


var React = require('react');
var flux = require('./flux'),
  App = require('./components/App');

React.render(
  <App flux={flux} />,
  document.body
);
