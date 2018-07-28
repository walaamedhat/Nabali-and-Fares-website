'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _footer = require('./components/footer');

var _footer2 = _interopRequireDefault(_footer);

var _home = require('./components/home');

var _home2 = _interopRequireDefault(_home);

var _contactUS = require('./components/contactUS');

var _contactUS2 = _interopRequireDefault(_contactUS);

var _ourProjects = require('./components/ourProjects');

var _ourProjects2 = _interopRequireDefault(_ourProjects);

var _mediacenterpage = require('./components/mediacenterpage');

var _mediacenterpage2 = _interopRequireDefault(_mediacenterpage);

var _projectpage = require('./components/projectpage');

var _projectpage2 = _interopRequireDefault(_projectpage);

var _mediaCenterPost = require('./components/mediaCenterPost');

var _mediaCenterPost2 = _interopRequireDefault(_mediaCenterPost);

var _page = require('./components/page404');

var _page2 = _interopRequireDefault(_page);

var _apartmentpage = require('./components/apartmentpage');

var _apartmentpage2 = _interopRequireDefault(_apartmentpage);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: _store2.default },
  _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2.default.createElement(
      'div',
      { 'class': 'app' },
      _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _home2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/contactUs', component: _contactUS2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/ourprojects', component: _ourProjects2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/mediacenter', component: _mediacenterpage2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/project/:project_id', component: _projectpage2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/apartment', component: _apartmentpage2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/post/:news_id', component: _mediaCenterPost2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { component: _page2.default })
      ),
      _react2.default.createElement(_footer2.default, null)
    )
  )
), document.getElementById('root'));