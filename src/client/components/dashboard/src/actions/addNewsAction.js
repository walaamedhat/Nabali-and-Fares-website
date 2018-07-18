import {
    ADDING_NEWS_START,
    ADDING_NEWS_SUCCESS,
    ADDING_NEWS_FAILURE
} from '../constants/actionTypes'

const loginFetchStart = () =>{
    return {
        type: ADDING_NEWS_START
    };
}

const loginFetchSuccess = (newsData) => {
    return ({
        type: ADDING_NEWS_SUCCESS,
        payload: newsData
    })
}

const loginFetchFailure = (err) => {
    return ({
        type: ADDING_NEWS_FAILURE,
        error: err
    })
}

const AddNews = (data) => dispatch => {
    console.log(data, ' data is Action');
    
    dispatch(loginFetchStart())
    fetch('http://localhost:8000/api/v1/addNews', {
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

export default AddNews;
