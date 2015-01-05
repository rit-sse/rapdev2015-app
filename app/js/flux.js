var Fluxxor = require('fluxxor');
var stores = require('./stores');
var actions = require('./actions');

var app = Fluxxor.Flux(stores, actions);

module.exports = app;