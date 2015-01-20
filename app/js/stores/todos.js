var Fluxxor = require('fluxxor');
var actions = require('../constants/actions');

var TodosStore = Fluxxor.createStore({
  initialize(options) {

    this.data = {
      todos: {}
    };


    this.bindActions(
      actions.CREATE_TODO_SUCCESS, this._createTodo,
      actions.CREATE_TODO_FAILURE, this._createTodo,
      actions.FETCH_TODO_SUCCESS, this._fetchTodo,
      actions.FETCH_TODO_FAILURE, this._fetchTodo,
      actions.FETCH_TODOS_SUCCESS, this._fetchTodos,
      actions.FETCH_TODOS_FAILURE, this._fetchTodos,
      actions.UPDATE_TODO_SUCCESS, this._updateTodo,
      actions.UPDATE_TODO_FAILURE, this._updateTodo,
      actions.REMOVE_TODO_SUCCESS, this._removeTodo,
      actions.REMOVE_TODO_FAILURE, this._removeTodo
    );
  },

  _createTodo(payload, type) {
    if(type == actions.CREATE_TODO_FAILURE) {
      console.log(actions.CREATE_TODO_FAILURE, payload.stack);
    }
    else {
      this.data.todos[payload.todoObj.id] = payload.todoObj;

      this.emit('change');
    }
  }

  _fetchTodo(payload, type) {
    if(type == actions.FETCH_TODO_FAILURE){
      console.log(actions.FETCH_TODO_FAILURE, payload.stack);
    }
    else {
      //TODO
      //this.data.todos[payload.todoId]
    }
  }

  _fetchTodos(payload, type) {
    if(type == actions.FETCH_TODOS_FAILURE){
      console.log(actions.FETCH_TODOS_FAILURE, payload.stack);
    }
    else {
      //TODO
    }
  }

  _updateTodo(payload, type) {
    if(type == actions.UPDATE_TODO_FAILURE) {
      console.log(actions.UPDATE_TODO_FAILURE, payload.stack);
    }
    else {
      this.data.todos[payload.todoId] = payload.todoObj;

      this.emit('change');
    }
  }

  _removeTodo(payload, type) {
    if(type == actions.REMOVE_TODO_FAILURE) {
      console.log(actions.REMOVE_TODO_FAILURE, payload.stack);
    }
    else {
      delete this.data.todos[payload.todoId];

      this.emit('change');
    }
  },


});

module.exports = TodosStore;
