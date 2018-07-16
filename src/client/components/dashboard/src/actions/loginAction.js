import {
    LOGIN_USER_START,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE
} from '../constants/actionTypes'

const loginFetchStart = () =>{
    return {
        type: LOGIN_USER_START
    };
}

const loginFetchSuccess = (projectsData) => {
    return ({
        type: LOGIN_USER_SUCCESS,
        payload: projectsData
    })
}

const loginFetchFailure = (err) => {
    return ({
        type: LOGIN_USER_FAILURE,
        error: err
    })
}

const LoginUser = (data) => dispatch => {
    dispatch(loginFetchStart())
    fetch('http://localhost:8000/api/v1/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "credentials": "same-origin"
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        dispatch(loginFetchSuccess())
    })
    .catch(error => {console.error(`Fetch Error =\n`, error)
        dispatch(loginFetchFailure(error))
    });
};

export default LoginUser;
