"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actionTypes = require("../constants/actionTypes");

var newsFetchStart = function newsFetchStart() {
    return {
        type: _actionTypes.GET_NEWS_DATA_START
    };
};

var newsFetchSuccess = function newsFetchSuccess(newsData) {
    return {
        type: _actionTypes.GET_NEWS_DATA_SUCCESS,
        payload: newsData
    };
};

var newsFetchFailure = function newsFetchFailure(err) {
    return {
        type: _actionTypes.GET_NEWS_DATA_FAILURE,
        error: err
    };
};

var fetchProject = function fetchProject(id) {
    return function (dispatch) {
        console.log(id);
        dispatch(newsFetchStart());
        fetch("/api/v1/post/" + id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            dispatch(newsFetchSuccess(data));
        }).catch(function (error) {
            console.error("Fetch Error =\n", error);
            dispatch(newsFetchFailure(error));
        });
    };
};

exports.default = fetchProject;