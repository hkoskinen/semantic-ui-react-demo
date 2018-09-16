
import { combineReducers } from 'redux';

// user
const initialUserState = {

};
// A popular convention is to name reducers after the state slices they manage,
// so you can use ES6 property shorthand notation
const user = (state = initialUserState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// notebooks
const initialNotebookState = {

};
const notebooks = (state = initialNotebookState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// root
const rootReducer = combineReducers({ user, notebooks });

export default rootReducer;
