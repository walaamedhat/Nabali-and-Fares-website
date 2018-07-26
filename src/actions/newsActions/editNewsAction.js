import {
    EDIT_NEWS_START,
    EDIT_NEWS_SUCCESS,
    EDIT_NEWS_FAILURE
} from '../../constants/actionTypes'

const editNewsStart = () =>{
    return {
        type: EDIT_NEWS_START
    };
}

const editNewsSuccess = (newsData) => {
    return ({
        type: EDIT_NEWS_SUCCESS,
        payload: newsData
    })
}

const editNewsFailure = (err) => {
    return ({
        type: EDIT_NEWS_FAILURE,
        error: err
    })
}

const AddNews = data => (dispatch, getState)=> {
    data.mainImage = getState().filesUrl.mainImage;
    data.secondaryImages = getState().filesUrl.secondaryImages;
    data.video = getState().filesUrl.video;

    dispatch(editNewsStart())
    fetch('http://localhost:8000/api/v1/editNews', {
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
        dispatch(editNewsSuccess(res))
    })
    .catch(error => {console.error(`Fetch Error =\n`, error)
        dispatch(editNewsFailure(error))
    });
};

export default AddNews;
