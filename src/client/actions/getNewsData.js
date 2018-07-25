import {
    GET_NEWS_DATA_START,
    GET_NEWS_DATA_SUCCESS,
    GET_NEWS_DATA_FAILURE
} from '../constants/actionTypes';

const newsFetchStart = () =>{
    return {
        type: GET_NEWS_DATA_START
    };
}

const newsFetchSuccess = (newsData) => {
    return ({
        type: GET_NEWS_DATA_SUCCESS,
        payload: newsData
    })
}

const newsFetchFailure = (err) => {
    return ({
        type: GET_NEWS_DATA_FAILURE,
        error: err
    })
}

const fetchProject = (id) => dispatch => {
  console.log(id);
    dispatch(newsFetchStart())
    fetch(`/api/v1/post/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        dispatch(newsFetchSuccess(data))
    })
    .catch(error => {console.error(`Fetch Error =\n`, error)
        dispatch(newsFetchFailure(error))
    });
};

export default fetchProject;
