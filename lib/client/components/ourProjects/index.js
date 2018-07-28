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

var _ourprojectsAction = require('../../actions/ourprojectsAction');

var _ourprojectsAction2 = _interopRequireDefault(_ourprojectsAction);

var _Map = require('../map/Map');

var _Map2 = _interopRequireDefault(_Map);

var _header = require('../header');

var _header2 = _interopRequireDefault(_header);

var _projects = require('./projects');

var _projects2 = _interopRequireDefault(_projects);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OurProjects = function (_Component) {
  _inherits(OurProjects, _Component);

  function OurProjects(props) {
    _classCallCheck(this, OurProjects);

    var _this = _possibleConstructorReturn(this, (OurProjects.__proto__ || Object.getPrototypeOf(OurProjects)).call(this, props));

    _this.state = {
      projects: []
    };
    return _this;
  }

  _createClass(OurProjects, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var fetchAllProjects = this.props.fetchAllProjects;

      fetchAllProjects();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          allProjects = _props.allProjects,
          isFetching = _props.isFetching;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_header2.default, { Logo: './assets/nabali-fares-colored.png', WhereAmI: 'ourprojectpage' }),
        _react2.default.createElement(
          'div',
          { className: 'ourProjects' },
          _react2.default.createElement(
            'div',
            { className: 'ourProjects-project' },
            _react2.default.createElement(
              'div',
              { className: 'ourProjects-headers' },
              _react2.default.createElement(
                'div',
                { className: 'titleAndNumber' },
                _react2.default.createElement(
                  'h3',
                  { className: 'ourProjects-title' },
                  '\u0645\u0634\u0627\u0631\u064A\u0639\u0646\u0627'
                ),
                _react2.default.createElement(
                  'h5',
                  { className: 'ourProjects-number' },
                  allProjects.length,
                  ' \u0645\u0634\u0631\u0648\u0639'
                )
              ),
              _react2.default.createElement('div', null)
            ),
            isFetching || allProjects.length == 0 ? _react2.default.createElement(
              'div',
              null,
              '...Loading'
            ) : allProjects.map(function (e) {

              return _react2.default.createElement(_projects2.default, { props: _this2.props, data: e });
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'ourProjects-map' },
            _react2.default.createElement(_Map2.default, { height: '648px', data: allProjects })
          )
        )
      );
    }
  }]);

  return OurProjects;
}(_react.Component);

OurProjects.propTypes = {
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OurProjects);

// <h5 className='ourProjects-number'>ترتيب العرض
//   <img style={{ paddingRight:'14px' }} src='./assets/sort.png'/>
// </h5>