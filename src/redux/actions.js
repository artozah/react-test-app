let actions = {
  userCreated: function() {
  	console.log('USER_CREATED');
    return {
      type: 'USER_CREATED',
      id: Math.round(Math.random() * 100)
    }
  },
  authLoggedIn: function(id) {
  	console.log('AUTH_LOGGED_IN');
    return {
      type: 'AUTH_LOGGED_IN', id
    }
  },
  signOut: function() {
  	console.log('SIGN_OUT');
    return {
      type: 'SIGN_OUT'
    }
  }
};


export default actions;
