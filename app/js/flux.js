var Fluxxor = require('fluxxor');
var stores = require('./stores');
var actions = require('./actions');

console.log(stores);

var store_inst = {
  UserStore: new stores.UserStore(),
  TagsStore: new stores.TagsStore()
}

var app = new Fluxxor.Flux(store_inst, actions);

module.exports = app;