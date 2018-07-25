import {
    GET_PROJECTS_START,
    GET_PROJECTS_SUCCESS,
    GET_PROJECTS_FAILURE
} from '../constants/actionTypes';

const projectFetchStart = () =>{
    return {
        type: GET_PROJECTS_START
    };
}

const projectFetchSuccess = (projectsData) => {
    return ({
        type: GET_PROJECTS_SUCCESS,
        payload: projectsData
    })
}

const projectFetchFailure = (err) => {
    return ({
        type: GET_PROJECTS_FAILURE,
        error: err
    })
}

const fetchAllProjects = () => dispatch => {
    dispatch(projectFetchStart())
    fetch('/api/v1/stars_project', {
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

export default fetchAllProjects;
