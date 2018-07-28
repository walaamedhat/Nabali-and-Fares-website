'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actionTypes = require('../constants/actionTypes');

var addCommentStart = function addCommentStart() {
    return {
        type: _actionTypes.ADD_COMMENT_START
    };
};

var addCommentSuccess = function addCommentSuccess(data) {
    return {
        type: _actionTypes.ADD_COMMENT_SUCCESS,
        payload: data
    };
};

var addCommentFailure = function addCommentFailure(err) {
    return {
        type: _actionTypes.ADD_COMMENT_FAILURE,
        error: err
    };
};

var addComment = function addComment(comment) {
    return function (dispatch) {
        dispatch(addCommentStart());
        fetch('/api/v1/addComment', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "credentials": "same-origin"
            },
            body: JSON.stringify(comment)
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            dispatch(addCommentSuccess(data));
        }).catch(function (error) {
            console.error('Fetch Error =\n', error);
            dispatch(addCommentFailure(error));
        });
    };
};

exports.default = addComment;