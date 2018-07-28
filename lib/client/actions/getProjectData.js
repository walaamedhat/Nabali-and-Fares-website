"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actionTypes = require("../constants/actionTypes");

var projectFetchStart = function projectFetchStart() {
    return {
        type: _actionTypes.GET_PROJECT_DATA_START
    };
};

var projectFetchSuccess = function projectFetchSuccess(projectsData) {
    return {
        type: _actionTypes.GET_PROJECT_DATA_SUCCESS,
        payload: projectsData
    };
};

var projectFetchFailure = function projectFetchFailure(err) {
    return {
        type: _actionTypes.GET_PROJECT_DATA_FAILURE,
        error: err
    };
};

var fetchProject = function fetchProject(id) {
    return function (dispatch) {
        dispatch(projectFetchStart());
        fetch("/api/v1/project/" + id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            dispatch(projectFetchSuccess(data));
        }).catch(function (error) {
            console.error("Fetch Error =\n", error);
            dispatch(projectFetchFailure(error));
        });
    };
};

exports.default = fetchProject;