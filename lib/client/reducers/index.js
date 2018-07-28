'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _ourprojectsReducer = require('./ourprojectsReducer');

var _ourprojectsReducer2 = _interopRequireDefault(_ourprojectsReducer);

var _starProjectReducer = require('./starProjectReducer');

var _starProjectReducer2 = _interopRequireDefault(_starProjectReducer);

var _allNewsReducer = require('./allNewsReducer');

var _allNewsReducer2 = _interopRequireDefault(_allNewsReducer);

var _projectData = require('./projectData');

var _projectData2 = _interopRequireDefault(_projectData);

var _newsDataReducer = require('./newsDataReducer');

var _newsDataReducer2 = _interopRequireDefault(_newsDataReducer);

var _addComments = require('./addComments');

var _addComments2 = _interopRequireDefault(_addComments);

var _allComments = require('./allComments');

var _allComments2 = _interopRequireDefault(_allComments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    ourprojects: _ourprojectsReducer2.default,
    starProjects: _starProjectReducer2.default,
    allNews: _allNewsReducer2.default,
    projectData: _projectData2.default,
    newsData: _newsDataReducer2.default,
    addComment: _addComments2.default,
    allComment: _allComments2.default
});