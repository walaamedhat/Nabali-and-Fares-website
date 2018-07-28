'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

require('../index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewsBox = function (_Component) {
  _inherits(NewsBox, _Component);

  function NewsBox(props) {
    _classCallCheck(this, NewsBox);

    return _possibleConstructorReturn(this, (NewsBox.__proto__ || Object.getPrototypeOf(NewsBox)).call(this, props));
  }

  _createClass(NewsBox, [{
    key: 'render',
    value: function render() {
      var news = this.props.data;
      console.log(this.props.data, 'props box news');
      return _react2.default.createElement(
        'div',
        { className: 'mediacenter__bottom__box' },
        _react2.default.createElement('img', { src: news.mainImage }),
        _react2.default.createElement(
          'div',
          { className: 'mediacenter__bottom__icon' },
          _react2.default.createElement('img', { src: './assets/calender.png' }),
          _react2.default.createElement(
            'span',
            null,
            '\u0642\u0628\u0644 5 \u062F\u0642\u0627\u0626\u0642'
          ),
          _react2.default.createElement('img', { src: './assets/flag.png' }),
          _react2.default.createElement(
            'span',
            null,
            news.type
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'mediacenter__bottom__title' },
          news.name.substring(0, 30),
          '...'
        ),
        _react2.default.createElement(
          'p',
          { className: 'mediacenter__bottom__p' },
          news.discription.substring(0, 151),
          '...'
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/post/' + ('' + news._id) },
          _react2.default.createElement(
            'div',
            { className: 'mediacenter__bottom__readmore' },
            '\u0625\u0642\u0631\u0623 \u0627\u0644\u0645\u0632\u064A\u062F',
            _react2.default.createElement(
              'span',
              null,
              _react2.default.createElement('i', { 'class': 'fas fa-arrow-left' })
            )
          )
        )
      );
    }
  }]);

  return NewsBox;
}(_react.Component);

exports.default = NewsBox;