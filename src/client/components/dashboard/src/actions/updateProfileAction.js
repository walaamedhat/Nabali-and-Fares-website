import {
    UPDATE_USER_DATA_START,
    UPDATE_USER_DATA_SUCCESS,
    UPDATE_USER_DATA_FAILURE
} from '../constants/actionTypes'

const updateDataStart = () =>{
    return {
        type: UPDATE_USER_DATA_START
    };
}

const updateDataSuccess = (data) => {
    return ({
        type: UPDATE_USER_DATA_SUCCESS,
        payload: data
    })
}

const updateDataFailure = (err) => {
    return ({
        type: UPDATE_USER_DATA_FAILURE,
        error: err
    })
}

const GetUserData = (data) => dispatch => {
    dispatch(updateDataStart())
    fetch('http://localhost:8000/api/v1/updateAdminData', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Accept': "application/json",
        },
        'credentials': 'include',
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        dispatch(updateDataSuccess(data))
    })
    .catch(error => {console.error(`Fetch Error =\n`, error)
        dispatch(updateDataFailure(error))
    });
};

export default GetUserData;
