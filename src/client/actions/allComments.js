import {
    GET_COMMENT_START,
    GET_COMMENT_SUCCESS,
    GET_COMMENT_FAILURE
} from '../constants/actionTypes';

const getCommentStart = () =>{
    return {
        type: GET_COMMENT_START
    };
}

const getCommentSuccess = (data) => {
    return ({
        type: GET_COMMENT_SUCCESS,
        payload: data
    })
}

const getCommentFailure = (err) => {
    return ({
        type: GET_COMMENT_FAILURE,
        error: err
    })
}

const getComment = (id) => dispatch => {
    dispatch(getCommentStart())
    fetch('/api/v1/allComment', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "credentials": "same-origin"
        },
        body: JSON.stringify({id})
    }).then(response =>{
       return response.json()
    })
    .then(data => {
      console.log(data,'data in action');
        dispatch(getCommentSuccess(data))
    })
    .catch(error => {console.error(`Fetch Error =\n`, error)
        dispatch(getCommentFailure(error))
    });
};

export default getComment;
