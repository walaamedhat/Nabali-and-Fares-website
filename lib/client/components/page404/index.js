'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page404 = function Page404() {
  return _react2.default.createElement(
    'div',
    { className: 'page404' },
    _react2.default.createElement(
      'div',
      { className: 'page404__404' },
      '404'
    ),
    _react2.default.createElement(
      'div',
      { className: 'page404__text' },
      'Oops! The Page you requested was not found!'
    ),
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '/' },
      ' Return Home Page'
    )
  );
};

exports.default = Page404;