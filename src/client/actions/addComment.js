import {
    ADD_COMMENT_START,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_FAILURE
} from '../constants/actionTypes';

const addCommentStart = () =>{
    return {
        type: ADD_COMMENT_START
    };
}

const addCommentSuccess = (data) => {
    return ({
        type: ADD_COMMENT_SUCCESS,
        payload: data
    })
}

const addCommentFailure = (err) => {
    return ({
        type: ADD_COMMENT_FAILURE,
        error: err
    })
}

const addComment = (comment) => dispatch => {
    dispatch(addCommentStart())
    fetch('/api/v1/addComment', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "credentials": "same-origin"
        },
        body: JSON.stringify(comment)
    }).then(response =>{
       return response.json()
    })
    .then(data => {
        dispatch(addCommentSuccess(data))
    })
    .catch(error => {console.error(`Fetch Error =\n`, error)
        dispatch(addCommentFailure(error))
    });
};

export default addComment;
