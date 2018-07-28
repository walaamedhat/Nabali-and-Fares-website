'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _slideshow = require('./slideshow');

var _slideshow2 = _interopRequireDefault(_slideshow);

var _Map = require('../map/Map');

var _Map2 = _interopRequireDefault(_Map);

var _newprojects = require('./newprojects');

var _newprojects2 = _interopRequireDefault(_newprojects);

var _featuredprojects = require('./featuredprojects');

var _featuredprojects2 = _interopRequireDefault(_featuredprojects);

var _mediacenter = require('./mediacenter');

var _mediacenter2 = _interopRequireDefault(_mediacenter);

var _ourprojectsAction = require('../../actions/ourprojectsAction');

var _ourprojectsAction2 = _interopRequireDefault(_ourprojectsAction);

require('./index.css');

var _ourapps = require('./ourapps');

var _ourapps2 = _interopRequireDefault(_ourapps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var images = ['./assets/1.png', './assets/2.jpg'];

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var fetchAllProjects = this.props.fetchAllProjects;

      fetchAllProjects();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          allProjects = _props.allProjects,
          isFetching = _props.isFetching;

      return _react2.default.createElement(
        'div',
        { className: 'home-component' },
        _react2.default.createElement(_slideshow2.default, null),
        _react2.default.createElement(_Map2.default, { height: '431px', data: allProjects }),
        _react2.default.createElement(_newprojects2.default, { props: this.props }),
        _react2.default.createElement(_featuredprojects2.default, null),
        _react2.default.createElement(_mediacenter2.default, null),
        _react2.default.createElement(_ourapps2.default, null)
      );
    }
  }]);

  return Home;
}(_react.Component);

Home.propTypes = {
  fetchAllProjects: _propTypes2.default.func
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    allProjects: state.ourprojects.projectData,
    isFetching: state.ourprojects.isFetching
  };
};

var mapDispatchToProps = {
  fetchAllProjects: _ourprojectsAction2.default
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);