'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actionTypes = require('../constants/actionTypes');

var initalState = {
    newsData: [],
    error: undefined,
    isFetching: false
};

var newsData = function newsData() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initalState;
    var action = arguments[1];

    switch (action.type) {
        case _actionTypes.GET_NEWS_START:
            {
                return _extends({}, state, {
                    isFetching: true
                });
            }
        case _actionTypes.GET_NEWS_SUCCESS:
            {
                return _extends({}, state, {
                    newsData: action.payload.data,
                    isFetching: false
                });
            }
        case _actionTypes.GET_NEWS_FAILURE:
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

exports.default = newsData;