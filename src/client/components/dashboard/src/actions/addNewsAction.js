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

const AddNews = data => (dispatch, getState)=> {
    console.log(data, ' data is Action');
    console.log(getState().filesUrl, ' filesUrl is Action');
    data.mainImage = getState().filesUrl.mainImage;
    data.secondaryImages = getState().filesUrl.secondaryImages;
    data.video = getState().filesUrl.video;
    console.log(data, ' data after add files url');

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
