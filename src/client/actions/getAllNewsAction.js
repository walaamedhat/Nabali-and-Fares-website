import {
    GET_NEWS_START,
    GET_NEWS_SUCCESS,
    GET_NEWS_FAILURE
} from '../constants/actionTypes';

const projectFetchStart = () =>{
    return {
        type: GET_NEWS_START
    };
}

const projectFetchSuccess = (projectsData) => {
    return ({
        type: GET_NEWS_SUCCESS,
        payload: projectsData
    })
}

const projectFetchFailure = (err) => {
    return ({
        type: GET_NEWS_FAILURE,
        error: err
    })
}

const allNews = type => dispatch => {
    dispatch(projectFetchStart())
    fetch(`/api/v1/allnews/${type}`, {
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

export default allNews;
