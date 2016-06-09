import initialState from './initialState';

let userReducer = function(state = initialState.user, action) {
  switch (action.type) {
    case 'USER_CREATED':
      return {
        id: action.id
      }
    default: 
      return state;
  }
};

export default userReducer;
