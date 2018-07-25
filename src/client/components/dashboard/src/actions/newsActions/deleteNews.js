import {
    DELETE_NEWS_START,
    DELETE_NEWS_SUCCESS,
    DELETE_NEWS_FAILURE
} from '../../constants/actionTypes'

const deleteFetchStart = () =>{
    return {
        type: DELETE_NEWS_START
    };
}

const deleteFetchSuccess = (newsData) => {
    return ({
        type: DELETE_NEWS_SUCCESS,
        payload: newsData
    })
}

const deleteFetchFailure = (err) => {
    return ({
        type: DELETE_NEWS_FAILURE,
        error: err
    })
}

const DeleteNews = data => (dispatch, getState)=> {
    dispatch(deleteFetchStart())
    fetch('http://localhost:8000/api/v1/deleteNews', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "credentials": "same-origin"
        },
        body: JSON.stringify(data)
    }).then(response =>{
       return response.json()
    })
    .then(res => {
        dispatch(deleteFetchSuccess(res))
    })
    .catch(error => {console.error(`Fetch Error =\n`, error)
        dispatch(deleteFetchFailure(error))
    });
};

export default DeleteNews;
