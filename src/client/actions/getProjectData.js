import {
    GET_PROJECT_DATA_START,
    GET_PROJECT_DATA_SUCCESS,
    GET_PROJECT_DATA_FAILURE
} from '../constants/actionTypes';

const projectFetchStart = () =>{
    return {
        type: GET_PROJECT_DATA_START
    };
}

const projectFetchSuccess = (projectsData) => {
    return ({
        type: GET_PROJECT_DATA_SUCCESS,
        payload: projectsData
    })
}

const projectFetchFailure = (err) => {
    return ({
        type: GET_PROJECT_DATA_FAILURE,
        error: err
    })
}

const fetchProject = (id) => dispatch => {
    dispatch(projectFetchStart())
    fetch(`/api/v1/project/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        dispatch(projectFetchSuccess(data))
    })
    .catch(error => {console.error(`Fetch Error =\n`, error)
        dispatch(projectFetchFailure(error))
    });
};

export default fetchProject;
