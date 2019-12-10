import { UserActionTypes } from './user.types';

// Set intial state
const INITIAL_STATE = {
  currentUser: null
};

// The user reducer getting the INITIAL_STATE
const userReducer = (state = INITIAL_STATE, action) => {
  // based on action.type string value, do something
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state, // ... (spred state)
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
