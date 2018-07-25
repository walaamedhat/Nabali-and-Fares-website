import {
    PROJECTS_FETCH_START,
    PROJECTS_FETCH_SUCCESS,
    PROJECTS_FETCH_FAILURE
} from '../constants/actionTypes';
import { DH_NOT_SUITABLE_GENERATOR } from 'constants';

const projectFetchStart = () =>{
    return {
        type: PROJECTS_FETCH_START
    };
}

const projectFetchSuccess = (projectsData) => {
    return ({
        type: PROJECTS_FETCH_SUCCESS,
        payload: projectsData
    })
}

const projectFetchFailure = (err) => {
    return ({
        type: PROJECTS_FETCH_FAILURE,
        error: err
    })
}

const fetchAllProjects = () => dispatch => {
    dispatch(projectFetchStart())
    fetch('/api/v1/all/projects', {
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
