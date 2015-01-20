var actions = require('../constants/actions');

module.exports = {

  createIdentity(identityObj) {
    Identity
      .create(identityObj)
      .then( (identityObj) => {
          this.dispatch(actions.CREATE_IDENTITY_SUCCESS, {
            identityObj:identityObj
          });
      })
      .catch( (err) => {
          this.dispatch(actions.CREATE_IDENTITY_FAILURE, err);
      })

  },

  fetchIdentity(identityId) {
    Identity
      .one(identityId)
      .then((identity) => {
        this.dispatch(actions.FETCH_IDENTITY_SUCCESS, {
          identityId:identityId
        });
      })
      .catch((err) => {
        this.dispatch(actions.FETCH_IDENTITY_FAILURE, err);
      });
  },

  fetchIdentities() {
    Identity
      .all()
      .then((identities) => {
        this.dispatch(actions.FETCH_IDENTITIES_SUCCESS, {
          identities:identities
        });
      })
      .catch((err) => {
        this.dispatch(actions.FETCH_IDENTITIES_FAILURE, err);
      });
  },

  updateIdentity(identityId, identityObj) {
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

  addTagToTodo(todoId, tagId) {
    Todo
      .addTag(todoId, tagId)
      .then( (todoId) => {
          this.dispatch(actions.ADD_TAG_TO_TODO_SUCCESS, {
            todoId:todoId,
            tagId: tagId
          });
      })
      .catch( (err) => {
          this.dispatch(actions.ADD_TAG_TO_TODO_FAILURE, err);
      })
  },

  removeTagToTodo(todoId, tagId) {
    Todo
      .removeTag(todoId, tagId)
      .then((todoId, tagId) => {
        this.dispatch(actions.REMOVE_TAG_TO_TODO_SUCCESS,{
          todoId: todoId,
          tagId: tagId
        });
      })
      .catch( (err) => {
        this.dispatch(actions.REMOVE_TAG_TO_TODO_FAILURE, err);
      })
  }

}
