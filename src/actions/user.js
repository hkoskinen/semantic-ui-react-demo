import {
  USER_LOG_IN_REQUEST,
  USER_LOG_IN_FAILED,
  USER_LOG_IN_SUCCESS
} from './actionTypes';

const userLoginRequest = () => {
  return {
    type: USER_LOG_IN_REQUEST
  };
};

const userLoginFailed = (error) => {
  return {
    type: USER_LOG_IN_FAILED,
    payload: {
      error
    }
  };
};

const userLoginSuccess = (data) => {
  return {
    type: USER_LOG_IN_SUCCESS,
    payload: {
      data
    }
  };
};

const userRequest = (user) => {
  return (dispatch) => {
    dispatch(userLoginRequest());

    fetch(`${process.env.REACT_APP_NOTEBOOK_REST_API}/login`)
      .then(res => {
        dispatch(userLoginSuccess(res));
      }).catch(err => {
        dispatch(userLoginFailed(err));
      });
  };
}
