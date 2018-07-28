'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _header = require('../header');

var _header2 = _interopRequireDefault(_header);

var _contactInfo = require('./contactInfo');

var _contactInfo2 = _interopRequireDefault(_contactInfo);

var _googleMap = require('../googleMap');

var _googleMap2 = _interopRequireDefault(_googleMap);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContactUs = function (_Component) {
  _inherits(ContactUs, _Component);

  function ContactUs() {
    _classCallCheck(this, ContactUs);

    return _possibleConstructorReturn(this, (ContactUs.__proto__ || Object.getPrototypeOf(ContactUs)).apply(this, arguments));
  }

  _createClass(ContactUs, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_header2.default, { Logo: './assets/nabali-fares-colored.png', WhereAmI: 'contactuspage' }),
        _react2.default.createElement(
          'div',
          { className: 'contactUs' },
          _react2.default.createElement(
            'div',
            { className: 'contactUs-header' },
            _react2.default.createElement(
              'h2',
              null,
              '\u0646\u062D\u0646 \u0647\u0646\u0627 \u0644\u0646\u0633\u0645\u0639\u0643\u0645'
            ),
            _react2.default.createElement(
              'h5',
              null,
              '\u0628\u0628\u0633\u0627\u0637\u0629 \u0646\u0635 \u0634\u0643\u0644\u064A \u0628\u0645\u0639\u0646\u0649 \u0623\u0646 \u0627\u0644\u063A\u0627\u064A\u0629 \u0647\u064A \u0627\u0644\u0634\u0643\u0644 \u0648\u0644\u064A\u0633 \u0627\u0644\u0645\u062D\u062A\u0648\u0649'
            )
          ),
          _react2.default.createElement(_contactInfo2.default, null),
          _react2.default.createElement(_googleMap2.default, null)
        )
      );
    }
  }]);

  return ContactUs;
}(_react.Component);

exports.default = ContactUs;