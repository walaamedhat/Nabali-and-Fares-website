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

var _reactSlick = require('react-slick');

var _reactSlick2 = _interopRequireDefault(_reactSlick);

var _getFeaturedAction = require('../../../actions/getFeaturedAction');

var _getFeaturedAction2 = _interopRequireDefault(_getFeaturedAction);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function SampleNextArrow(props) {
  var onClick = props.onClick;

  return _react2.default.createElement(
    'span',
    { style: { marginRight: '30px', fontWeight: '100', fontSize: '20px', position: 'absolute', right: '17px', bottom: '-32px' }, onClick: onClick },
    _react2.default.createElement('i', { style: { color: '#3da5f9' }, 'class': 'fas fa-arrow-left' })
  );
}

function SamplePrevArrow(props) {
  var onClick = props.onClick;

  return _react2.default.createElement(
    'span',
    { style: { marginRight: '30px', fontWeight: '100', fontSize: '20px', position: 'absolute', right: '-30px', bottom: '-32px' }, onClick: onClick },
    _react2.default.createElement('i', { style: { color: '#3da5f9' }, 'class': 'fas fa-arrow-right' })
  );
}

var FeaturedProjects = function (_Component) {
  _inherits(FeaturedProjects, _Component);

  function FeaturedProjects(props) {
    _classCallCheck(this, FeaturedProjects);

    return _possibleConstructorReturn(this, (FeaturedProjects.__proto__ || Object.getPrototypeOf(FeaturedProjects)).call(this, props));
  }

  _createClass(FeaturedProjects, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var getStarProjects = this.props.getStarProjects;

      getStarProjects();
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
      var starProjects = this.props.starProjects;

      console.log(starProjects, 'starProjects');
      return _react2.default.createElement(
        'div',
        { className: 'featured__project', style: { position: 'relative' } },
        _react2.default.createElement(
          'span',
          { className: 'featured__project__title0' },
          '\u0645\u0634\u0627\u0631\u064A\u0639 \u0645\u0645\u064A\u0632\u0629'
        ),
        starProjects.isFetching || starProjects.starProjects.length == 0 ? _react2.default.createElement(
          'div',
          null,
          'loading'
        ) : _react2.default.createElement(
          _reactSlick2.default,
          settings,
          starProjects.starProjects.map(function (e) {
            return _react2.default.createElement(
              'div',
              { dir: 'rtl', className: 'featured__project__divAndimg' },
              _react2.default.createElement(
                'div',
                { className: 'featured__project__right' },
                _react2.default.createElement(
                  'div',
                  { className: 'featured__project__title' },
                  e.name
                ),
                _react2.default.createElement(
                  'p',
                  { className: 'featured__project__paragraph' },
                  e.description.substring(0, 250),
                  '....'
                )
              ),
              _react2.default.createElement('img', { src: e.images[0] })
            );
          })
        )
      );
    }
  }]);

  return FeaturedProjects;
}(_react.Component);

FeaturedProjects.propTypes = {
  getStarProjects: _propTypes2.default.func
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    starProjects: state.starProjects
  };
};

var mapDispatchToProps = {
  getStarProjects: _getFeaturedAction2.default
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(FeaturedProjects);

// <div dir='rtl' className='featured__project__divAndimg'>
//     <div className='featured__project__right'>
//         <div className='featured__project__title'>مشروع سكاي تاورز السكني الحديث</div>
//         <p className='featured__project__paragraph'>
//         سكاي تاورز أول مشروع سكني فاخر في مركز المدينة يحتوي على مزايا خاصة لاولئك الذين يسعون للحصول على اسلوب ونمط حياة كما يحلمون.حيث تتوفر كل وسائل الراحة من حدائق خضراء.الى جانب وسائل الراحة الاخرى التي أصبحت تمثل محور اهتمام لكل عائلة في عصرنا الحالي الذي يمتاز بضغط العمل وضيق الوقت مما لا يسمح في كثير من الأحيان لأفراد العائلة بالاستمتاع بوقتهم. سكاي تاورز جعل من المستحيل ممكن.
//         </p>
//
//     </div>
//     <img src='./assets/featuredproject.png'/>
// </div>