'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactSlick = require('react-slick');

var _reactSlick2 = _interopRequireDefault(_reactSlick);

var _ourprojectsAction = require('../../../actions/ourprojectsAction');

var _ourprojectsAction2 = _interopRequireDefault(_ourprojectsAction);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _projectSection = require('./projectSection');

var _projectSection2 = _interopRequireDefault(_projectSection);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function SampleNextArrow(props) {
  var onClick = props.onClick;

  return _react2.default.createElement(
    'span',
    { style: { marginRight: '30px', fontWeight: '100', fontSize: '20px', position: 'absolute', top: '-43px', left: '88px' }, onClick: onClick },
    _react2.default.createElement('i', { style: { color: '#3da5f9' }, 'class': 'fas fa-arrow-left' })
  );
}

function SamplePrevArrow(props) {
  var onClick = props.onClick;

  return _react2.default.createElement(
    'span',
    { style: { marginRight: '30px', fontWeight: '100', fontSize: '20px', position: 'absolute', top: '-43px', left: '136px' }, onClick: onClick },
    _react2.default.createElement('i', { style: { color: '#3da5f9' }, 'class': 'fas fa-arrow-right' })
  );
}

var NewProjects = function (_Component) {
  _inherits(NewProjects, _Component);

  function NewProjects(props) {
    _classCallCheck(this, NewProjects);

    var _this = _possibleConstructorReturn(this, (NewProjects.__proto__ || Object.getPrototypeOf(NewProjects)).call(this, props));

    _this.state = {
      projects: []
    };
    return _this;
  }

  _createClass(NewProjects, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var fetchAllProjects = this.props.fetchAllProjects;

      fetchAllProjects();
    }
  }, {
    key: 'render',
    value: function render() {
      var settings = {
        nextArrow: _react2.default.createElement(SampleNextArrow, null),
        prevArrow: _react2.default.createElement(SamplePrevArrow, null),
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1

      };
      var allProjects = this.props.allProjects;

      return _react2.default.createElement(
        'div',
        { style: { position: 'relative' }, className: 'newprojects' },
        _react2.default.createElement(
          'div',
          { className: 'newprojects__top' },
          _react2.default.createElement(
            'div',
            { className: 'newprojects__title' },
            '\u062C\u062F\u064A\u062F \u0645\u0634\u0627\u0631\u064A\u0639\u0646\u0627'
          )
        ),
        allProjects.isFetching || allProjects.length == 0 ? _react2.default.createElement(
          'div',
          null,
          'loading'
        ) : _react2.default.createElement(
          _reactSlick2.default,
          settings,
          allProjects.length <= 3 ? _react2.default.createElement(
            'div',
            { className: 'newprojects__down' },
            _react2.default.createElement(_projectSection2.default, { data: allProjects[0], props: this.props.props }),
            _react2.default.createElement(_projectSection2.default, { data: allProjects[1], props: this.props.props }),
            _react2.default.createElement(_projectSection2.default, { data: allProjects[2], props: this.props.props })
          ) : _react2.default.createElement(
            'div',
            { className: 'newprojects__down' },
            _react2.default.createElement(_projectSection2.default, { data: allProjects[3], props: this.props.props }),
            _react2.default.createElement(_projectSection2.default, { data: allProjects[4], props: this.props.props }),
            _react2.default.createElement(_projectSection2.default, { data: allProjects[5], props: this.props.props })
          )
        )
      );
    }
  }]);

  return NewProjects;
}(_react.Component);

NewProjects.propTypes = {
  fetchAllProjects: _propTypes2.default.func
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    allProjects: state.ourprojects.projectData
  };
};

var mapDispatchToProps = {
  fetchAllProjects: _ourprojectsAction2.default
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NewProjects);

// <ProjectSection data={allProjects[0]} />
// <ProjectSection data={allProjects[1]} />
// <ProjectSection data={allProjects[2]} />
// <div className='newprojects__down'>
//   2
// <ProjectSection data={allProjects[3]} />
// <ProjectSection data={allProjects[4]} />
// <ProjectSection data={allProjects[5]} />
// </div>
// <div className='newprojects__down'>
//     3
// <ProjectSection data={allProjects[6]} />
// <ProjectSection data={allProjects[7]} />
// <ProjectSection data={allProjects[8]} />
// </div>