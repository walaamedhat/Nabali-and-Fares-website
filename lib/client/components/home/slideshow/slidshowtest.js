'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSlideshowImage = require('react-slideshow-image');

var _reactSlick = require('react-slick');

var _reactSlick2 = _interopRequireDefault(_reactSlick);

var _header = require('../../header');

var _header2 = _interopRequireDefault(_header);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var images = ['./assets/1.png', './assets/2.jpg'];

var Slideshow = function (_Component) {
  _inherits(Slideshow, _Component);

  function Slideshow() {
    _classCallCheck(this, Slideshow);

    return _possibleConstructorReturn(this, (Slideshow.__proto__ || Object.getPrototypeOf(Slideshow)).apply(this, arguments));
  }

  _createClass(Slideshow, [{
    key: 'render',
    value: function render() {
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      };
      return _react2.default.createElement(
        'div',
        { style: { position: 'relative' } },
        _react2.default.createElement(_reactSlideshowImage.Fade, {
          images: images,
          duration: 3000,
          transitionDuration: 1000
        }),
        _react2.default.createElement(
          'div',
          { className: 'slider-header-nav' },
          _react2.default.createElement(_header2.default, { Logo: './assets/nabali-fares-logo.png', WhereAmI: 'homepage' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'slider-text' },
          _react2.default.createElement(
            _reactSlick2.default,
            settings,
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'h1',
                { className: 'slider-text-title' },
                '\u0647\u0630\u0627 \u0627\u0644\u0646\u0635 \u0645\u0648\u062C\u0648\u062F \u0641\u0642\u0637 \u0644\u062A\u062C\u0631\u0628\u0629 \u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0626\u064A\u0633\u064A'
              ),
              _react2.default.createElement(
                'h4',
                { className: 'slider-text-desc' },
                '\u0647\u0646\u0627\u0643 \u062D\u0642\u064A\u0642\u0629 \u0645\u062B\u0628\u062A\u0629 \u0645\u0646\u0630 \u0632\u0645\u0646 \u0637\u0648\u064A\u0644 \u0648\u0647\u064A \u0623\u0646 \u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0645\u0642\u0631\u0648\u0621 \u0644\u0635\u0641\u062D\u0629 \u0645\u0627 \u0633\u064A\u0644\u0647\u064A \u0627\u0644\u0642\u0627\u0631\u0626 \u0639\u0646 \u0627\u0644\u062A\u0631\u0643\u064A\u0632 \u0639\u0644\u0649 \u0627\u0644\u0634\u0643\u0644 \u0627\u0644\u062E\u0627\u0631\u062C\u064A \u0644\u0644\u0646\u0635 \u0623\u0648 \u0634\u0643\u0644 \u062A\u0648\u0636\u0639 \u0627\u0644\u0641\u0642\u0631\u0627\u062A \u0641\u064A \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u062A\u064A \u064A\u0642\u0631\u0623\u0647\u0627.'
              ),
              _react2.default.createElement(
                'button',
                { className: 'slider-button' },
                '\u0639\u0631\u0636 \u0627\u0644\u0645\u0632\u064A\u062F ',
                _react2.default.createElement('i', { 'class': 'fas fa-arrow-left' })
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'h1',
                { className: 'slider-text-title' },
                '\u0647\u0630\u0627 \u0627\u0644\u0646\u0635 \u0645\u0648\u062C\u0648\u062F \u0641\u0642\u0637 \u0644\u062A\u062C\u0631\u0628\u0629 \u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0626\u064A\u0633\u064A'
              ),
              _react2.default.createElement(
                'h4',
                { className: 'slider-text-desc' },
                '\u0647\u0646\u0627\u0643 \u062D\u0642\u064A\u0642\u0629 \u0645\u062B\u0628\u062A\u0629 \u0645\u0646\u0630 \u0632\u0645\u0646 \u0637\u0648\u064A\u0644 \u0648\u0647\u064A \u0623\u0646 \u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0645\u0642\u0631\u0648\u0621 \u0644\u0635\u0641\u062D\u0629 \u0645\u0627 \u0633\u064A\u0644\u0647\u064A \u0627\u0644\u0642\u0627\u0631\u0626 \u0639\u0646 \u0627\u0644\u062A\u0631\u0643\u064A\u0632 \u0639\u0644\u0649 \u0627\u0644\u0634\u0643\u0644 \u0627\u0644\u062E\u0627\u0631\u062C\u064A \u0644\u0644\u0646\u0635 \u0623\u0648 \u0634\u0643\u0644 \u062A\u0648\u0636\u0639 \u0627\u0644\u0641\u0642\u0631\u0627\u062A \u0641\u064A \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u062A\u064A \u064A\u0642\u0631\u0623\u0647\u0627.'
              ),
              _react2.default.createElement(
                'button',
                { className: 'slider-button' },
                '\u0639\u0631\u0636 \u0627\u0644\u0645\u0632\u064A\u062F ',
                _react2.default.createElement('i', { 'class': 'fas fa-arrow-left' })
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'slider-circle' },
          _react2.default.createElement('img', { className: 'slider-circle-img', src: './assets/circle.png' })
        )
      );
    }
  }]);

  return Slideshow;
}(_react.Component);

exports.default = Slideshow;