'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actionTypes = require('../constants/actionTypes');

var initalState = {
    starProjects: [],
    error: undefined,
    isFetching: false
};

var projectsdata = function projectsdata() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initalState;
    var action = arguments[1];

    switch (action.type) {
        case _actionTypes.GET_PROJECTS_START:
            {
                return _extends({}, state, {
                    isFetching: true
                });
            }
        case _actionTypes.GET_PROJECTS_SUCCESS:
            {
                return _extends({}, state, {
                    starProjects: action.payload.data,
                    isFetching: false
                });
            }
        case _actionTypes.GET_PROJECTS_FAILURE:
            {
                return _extends({}, state, {
                    error: action.error,
                    isFetching: false
                });
            }
        default:
            return state;
    }
};

exports.default = projectsdata;