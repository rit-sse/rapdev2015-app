var Fluxxor = require('fluxxor');
var stores = require('./stores');
var actions = require('./actions');

console.log(stores);

var store_inst = {
  UserStore: new stores.UserStore(),
  TagStore: new stores.TagStore()
}

var app = new Fluxxor.Flux(store_inst, actions);

app.on('dispatch',function(){ console.log(arguments)});

module.exports = app;