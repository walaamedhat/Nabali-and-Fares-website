'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'footer', id: 'aboutUs' },
        _react2.default.createElement(
          'div',
          { className: 'footer-rightSection' },
          _react2.default.createElement('img', { src: '../assets/nabali-fares-logo.png' }),
          _react2.default.createElement(
            'p',
            { className: 'rightSection-paragraph' },
            '\u0647\u0646\u0627\u0643 \u062D\u0642\u064A\u0642\u0629 \u0645\u062B\u0628\u062A\u0629 \u0645\u0646\u0630 \u0632\u0645\u0646 \u0637\u0648\u064A\u0644 \u0648\u0647\u064A \u0623\u0646 \u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0645\u0642\u0631\u0648\u0621 \u0644\u0635\u0641\u062D\u0629 \u0645\u0627 \u0633\u064A\u0644\u0647\u064A \u0627\u0644\u0642\u0627\u0631\u0626 \u0639\u0646 \u0627\u0644\u062A\u0631\u0643\u064A\u0632 \u0639\u0644\u0649 \u0627\u0644\u0634\u0643\u0644 \u0627\u0644\u062E\u0627\u0631\u062C\u064A \u0644\u0644\u0646\u0635 \u0623\u0648 \u0634\u0643\u0644 \u062A\u0648\u0636\u0639 \u0627\u0644\u0641\u0642\u0631\u0627\u062A \u0641\u064A \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u062A\u064A \u064A\u0642\u0631\u0623\u0647\u0627 \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629 \u0644\u0634\u0631\u0643\u0629 \u0627\u0644\u0646\u0628\u064A\u0627\u0644\u064A \u0648\u0627\u0644\u0641\u0627\u0631\u0633'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'footer-leftSection' },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h3',
              { className: 'grey-h3' },
              '\u0627\u0644\u0634\u0631\u0643\u0629'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'white-h3' },
              '\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'white-h3' },
              '\u0639\u0646 \u0627\u0644\u0634\u0631\u0643\u0629'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'white-h3' },
              '\u0645\u0634\u0627\u0631\u064A\u0639\u0646\u0627'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'white-h3' },
              '\u0627\u0644\u0645\u0631\u0643\u0632 \u0627\u0644\u0627\u0639\u0644\u0627\u0645\u064A'
            )
          ),
          _react2.default.createElement(
            'div',
            { style: { paddingLeft: '33px' } },
            _react2.default.createElement(
              'h3',
              { className: 'grey-h3' },
              '\u0631\u0648\u0627\u0628\u0637'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'white-h3' },
              '\u0645\u0646 \u0646\u062D\u0646'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'white-h3' },
              '\u0625\u062A\u0635\u0644 \u0628\u0646\u0627'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h3',
              { className: 'grey-h3' },
              '\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'white-h3' },
              '\u062A\u0627\u0628\u0639\u0646\u0627 \u0639\u0644\u0649 \u0627\u0644\u0641\u064A\u0633 \u0628\u0648\u0643'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'white-h3' },
              '\u062A\u0627\u0628\u0639\u0646\u0627 \u0639\u0644\u0649 \u062A\u0648\u064A\u062A\u0631'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'white-h3' },
              '\u062A\u0627\u0628\u0639\u0646\u0627 \u0639\u0644\u0649 \u0625\u0646\u0633\u062A\u0627\u062C\u0631\u0627\u0645'
            )
          )
        )
      );
    }
  }]);

  return Footer;
}(_react.Component);

exports.default = Footer;