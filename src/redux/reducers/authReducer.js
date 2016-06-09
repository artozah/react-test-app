import initialState from './initialState';

let authReducer = function(state = initialState.auth, action) {
  switch (action.type) {
	  case 'AUTH_LOGGED_IN':
	    return Object.assign({}, state, {
	      isLogged: true,
	      currentUserID: action.id
	    });
    case 'SIGN_OUT':
	    return Object.assign({}, state, {
	      isLogged: false,
	      currentUserID: null
	    });
    default: 
      return state;
  }
};

export default authReducer;
