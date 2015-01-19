var Fluxxor = require('fluxxor');
var stores = require('../app/js/stores');
var actions = require('../app/js/actions');
var expect = require('expect.js');

var flux = new Fluxxor.Flux(stores, actions);

describe('todoActions', function() {
  describe('#createTodo', function() {
    it('correctly creates a new todo', function() {

      var newTodo = {
        "due_date": "2015-01-14T21:54:49.384Z",
        "state": "in progress",
        "topic": "Write API Documentation",
        "tags": [
          "api"
        ],
        "owner": "the-dude"
      };

      flux.actions.createTodo(newTodo);

      // check that a "change" event was emmmmited

      // check the store that a new object was made correctly


    }),
    it('correctly fails to create a todo without state', function() {

      // no state provided
      var newTodo = {
        "due_date": "2015-01-14T21:54:49.384Z",
        "topic": "Write API Documentation",
        "tags": [
          "api"
        ],
        "owner": "the-dude"
      };

      flux.actions.createTodo(newTodo);

      // check that a "change" event was not emmmmited

      // check the store that a no object was made

    })
  }),

  describe('#updateTodo', function() {

  }),

  describe('#removeTodo', function() {

  });
});
