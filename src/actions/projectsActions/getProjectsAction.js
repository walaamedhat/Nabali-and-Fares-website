import {
    FETCH_PROJECTS_START,
    FETCH_PROJECTS_SUCCESS,
    FETCH_PROJECTS_FAILURE
} from '../../constants/actionTypes'

const allProjectsFetchStart = () =>{
    return {
        type: FETCH_PROJECTS_START
    };
}

const allProjectsFetchSuccess = (projectData) => {
    return ({
        type: FETCH_PROJECTS_SUCCESS,
        payload: projectData
    })
}


const allProjectsFetchFailure = (err) => {
    return ({
        type: FETCH_PROJECTS_FAILURE,
        error: err
    })
}


const getAllProjects = () => (dispatch) => {
    dispatch(allProjectsFetchStart())
    fetch('http://localhost:8000/api/v1/getProjects', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "credentials": "same-origin"
        }
    })
    .then(response => {
        return response.json();
    })
    .then(res => {        
        dispatch(allProjectsFetchSuccess(res))

    })
    .catch(error => {console.error(`Fetch Error =\n`, error)
        dispatch(allProjectsFetchFailure(error))
    });
};

export default getAllProjects;
