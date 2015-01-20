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
    Identity
      .update(identityId, identityObj)
      .then( (identityObj) => {
          this.dispatch(actions.UPDATE_IDENTITY_SUCCESS, {
            identityId:identityId,
            identityObj:identityObj
          });
      })
      .catch( (err) => {
          this.dispatch(actions.UPDATE_IDENTITY_FAILURE, err);
      })

  },

  removeIdentity(identityId) {
    Identity
      .remove(identityId)
      .then( (identityId) => {
          this.dispatch(actions.REMOVE_IDENTITY_SUCCESS, {
            identityId:identityId
          });
      })
      .catch( (err) => {
          this.dispatch(actions.REMOVE_IDENTITY_FAILURE, err);
      })
  },

  addMemberToIdentity(identityId, memberId) {
    Identity
      .addMember(identityId, memberId)
      .then( (identityId) => {
          this.dispatch(actions.ADD_MEMBER_TO_IDENTITY_SUCCESS, {
            identityId:identityId,
            memberId: memberId
          });
      })
      .catch( (err) => {
          this.dispatch(actions.ADD_MEMBER_TO_IDENTITY_FAILURE, err);
      })
  },

  removeMemberToIdentity(identityId, memberId) {
    Identity
      .removeTag(identityId, memberId)
      .then((identityId, memberId) => {
        this.dispatch(actions.REMOVE_MEMBER_FROM_IDENTITY_SUCCESS,{
          identityId: identityId,
          memberId: memberId
        });
      })
      .catch( (err) => {
        this.dispatch(actions.REMOVE_MEMBER_FROM_IDENTITY_FAILURE, err);
      })
  }

}
