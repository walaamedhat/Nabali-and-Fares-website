import {
    EDIT_PROJECT_START,
    EDIT_PROJECT_SUCCESS,
    EDIT_PROJECT_FAILURE
} from '../../constants/actionTypes'

const editProjectwsStart = () =>{
    return {
        type: EDIT_PROJECT_START
    };
}

const editProjectSuccess = (newsData) => {
    return ({
        type: EDIT_PROJECT_SUCCESS,
        payload: newsData
    })
}

const editProjectFailure = (err) => {
    return ({
        type: EDIT_PROJECT_FAILURE,
        error: err
    })
}

const editProject = data => (dispatch, getState)=> {
    data.images = getState().filesUrl.secondaryImages;
    data.image360Url = getState().filesUrl.image360Url;
    data.videoUrl = getState().filesUrl.video;

    console.log(data, ' data here in admin');
    
    dispatch(editProjectwsStart())
    fetch('http://localhost:8000/api/v1/editProject', {
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
        dispatch(editProjectSuccess(res))
    })
    .catch(error => {console.error(`Fetch Error =\n`, error)
        dispatch(editProjectFailure(error))
    });
};

export default editProject;
