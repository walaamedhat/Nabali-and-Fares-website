'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actionTypes = require('../constants/actionTypes');

var _constants = require('constants');

var projectFetchStart = function projectFetchStart() {
    return {
        type: _actionTypes.PROJECTS_FETCH_START
    };
};

var projectFetchSuccess = function projectFetchSuccess(projectsData) {
    return {
        type: _actionTypes.PROJECTS_FETCH_SUCCESS,
        payload: projectsData
    };
};

var projectFetchFailure = function projectFetchFailure(err) {
    return {
        type: _actionTypes.PROJECTS_FETCH_FAILURE,
        error: err
    };
};

var fetchAllProjects = function fetchAllProjects() {
    return function (dispatch) {
        dispatch(projectFetchStart());
        fetch('/api/v1/all/projects', {
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