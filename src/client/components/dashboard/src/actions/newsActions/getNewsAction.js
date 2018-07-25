import {
    GET_NEWS_START,
    GET_NEWS_SUCCESS,
    GET_NEWS_FAILURE
} from '../../constants/actionTypes'

const getFetchStart = () =>{
    return {
        type: GET_NEWS_START
    };
}

const getFetchSuccess = (newsData) => {
    return ({
        type: GET_NEWS_SUCCESS,
        payload: newsData
    })
}

const getFetchFailure = (err) => {
    return ({
        type: GET_NEWS_FAILURE,
        error: err
    })
}

const getAllNews = () => dispatch => {
    dispatch(getFetchStart())

    fetch('http://localhost:8000/api/v1/getNews', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "credentials": "same-origin"
        }
    }).then(response =>{
       return response.json()
    })
    .then(res => {
        dispatch(getFetchSuccess(res))
    })
    .catch(error => {console.error(`Fetch Error =\n`, error)
        dispatch(getFetchFailure(error))
    });
};

export default getAllNews;
