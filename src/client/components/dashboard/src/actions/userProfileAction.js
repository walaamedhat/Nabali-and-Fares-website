import {
    GET_USER_DATA_START,
    GET_USER_DATA_SUCCESS,
    GET_USER_DATA_FAILURE
} from '../constants/actionTypes'

const getDataStart = () =>{
    return {
        type: GET_USER_DATA_START
    };
}

const getDataSuccess = (data) => {
    return ({
        type: GET_USER_DATA_SUCCESS,
        payload: data
    })
}

const getDataFailure = (err) => {
    return ({
        type: GET_USER_DATA_FAILURE,
        error: err
    })
}

const GetUserData = () => dispatch => {
    dispatch(getDataStart())
    
    fetch('http://localhost:8000/api/v1/getAdminData', {
        method: "GET",
        'credentials': 'include'
    })
    .then(response => {
            return response.json()
        }
    )
    .then(data => {
        console.log('data in user profile Action, :',data);
        
        dispatch(getDataSuccess(data))
    })
    .catch(error => {console.error(`Fetch Error =\n`, error)
        dispatch(getDataFailure(error))
    });
};

export default GetUserData;
