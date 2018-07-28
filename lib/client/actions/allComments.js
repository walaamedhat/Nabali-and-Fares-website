'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actionTypes = require('../constants/actionTypes');

var getCommentStart = function getCommentStart() {
    return {
        type: _actionTypes.GET_COMMENT_START
    };
};

var getCommentSuccess = function getCommentSuccess(data) {
    return {
        type: _actionTypes.GET_COMMENT_SUCCESS,
        payload: data
    };
};

var getCommentFailure = function getCommentFailure(err) {
    return {
        type: _actionTypes.GET_COMMENT_FAILURE,
        error: err
    };
};

var getComment = function getComment(id) {
    return function (dispatch) {
        dispatch(getCommentStart());
        fetch('/api/v1/allComment', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "credentials": "same-origin"
            },
            body: JSON.stringify({ id: id })
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data, 'data in action');
            dispatch(getCommentSuccess(data));
        }).catch(function (error) {
            console.error('Fetch Error =\n', error);
            dispatch(getCommentFailure(error));
        });
    };
};

exports.default = getComment;