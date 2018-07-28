'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actionTypes = require('../constants/actionTypes');

var projectFetchStart = function projectFetchStart() {
    return {
        type: _actionTypes.GET_PROJECTS_START
    };
};

var projectFetchSuccess = function projectFetchSuccess(projectsData) {
    return {
        type: _actionTypes.GET_PROJECTS_SUCCESS,
        payload: projectsData
    };
};

var projectFetchFailure = function projectFetchFailure(err) {
    return {
        type: _actionTypes.GET_PROJECTS_FAILURE,
        error: err
    };
};

var fetchAllProjects = function fetchAllProjects() {
    return function (dispatch) {
        dispatch(projectFetchStart());
        fetch('/api/v1/stars_project', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            dispatch(projectFetchSuccess(data));
        }).catch(function (error) {
            console.error('Fetch Error =\n', error);
            dispatch(projectFetchFailure(error));
        });
    };
};

exports.default = fetchAllProjects;