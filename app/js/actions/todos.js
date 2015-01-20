var actions = require('../constants/actions');

module.exports = {

  createTodo(todoObj) {
    Todo
      .create(todoObj)
      .then( (todoObj) => {
          this.dispatch(actions.CREATE_TODO_SUCCESS, {
            todoObj:todoObj
          });
      })
      .catch( (err) => {
          this.dispatch(actions.CREATE_TODO_FAILURE, err);
      })

  },

  fetchTodo(todoId) {
    Todo
      .one(todoId)
      .then((todo) => {
        this.dispatch(actions.FETCH_TODO_SUCCESS, {
          todoId:todoId
        });
      })
      .catch((err) => {
        this.dispatch(actions.FETCH_TODO_FAILURE, err);
      });
  },

  updateTodo(todoId, todoObj) {
    Todo
      .update(todoId, todoObj)
      .then( (todoObj) => {
          this.dispatch(actions.UPDATE_TODO_SUCCESS, {
            todoId:todoId,
            todoObj:todoObj
          });
      })
      .catch( (err) => {
          this.dispatch(actions.UPDATE_TODO_FAILURE, err);
      })

  },

  removeTodo(todoId) {
    Todo
      .remove(todoId)
      .then( (todoId) => {
          this.dispatch(actions.REMOVE_TODO_SUCCESS, {
            todoId:todoId
          });
      })
      .catch( (err) => {
          this.dispatch(actions.REMOVE_TODO_FAILURE, err);
      })
  },

}
