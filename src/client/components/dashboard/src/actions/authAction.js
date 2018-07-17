import {
    START_LOGIN,
    SUCCESS_LOGIN,
    FAILURE_LOGIN
} from '../constants/actionTypes'

const start = () => {
  return {
    type: START_LOGIN
  };
};
const success = data => {
  return {
    type: SUCCESS_LOGIN,
    payload: data
  };
};

const failure = massage => {
  return {
    type: FAILURE_LOGIN,
    payload: massage
  };
};



const auth = () => dispatch => {
  dispatch(start());
  fetch('http://localhost:8000/api/v1/current_user',
    {  method: 'GET',
       credentials: 'include'
     }).then(response => response.json())
    .then(data => {
      return dispatch(success(data));
    }).catch(err => dispatch(failure(err)));
};

export default auth;
