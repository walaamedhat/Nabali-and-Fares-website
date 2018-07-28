'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AllComments = function (_Component) {
  _inherits(AllComments, _Component);

  function AllComments() {
    _classCallCheck(this, AllComments);

    return _possibleConstructorReturn(this, (AllComments.__proto__ || Object.getPrototypeOf(AllComments)).apply(this, arguments));
  }

  _createClass(AllComments, [{
    key: 'render',
    value: function render() {
      var width = this.props.width;
      return _react2.default.createElement(
        'div',
        { style: { width: '100%' } },
        width ? _react2.default.createElement(
          'div',
          { className: 'comments-section' },
          _react2.default.createElement(
            'div',
            { className: 'comments-image' },
            _react2.default.createElement('img', { style: { width: '77px' }, src: '../assets/pessoa-icon.png' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'comments-details' },
            _react2.default.createElement(
              'div',
              { className: 'name-date' },
              _react2.default.createElement(
                'h3',
                null,
                ' ',
                this.props.comment.commenter_name
              ),
              _react2.default.createElement(
                'h5',
                null,
                '\u0645\u0646\u0630 \u064A\u0648\u0645 \u0648\u0627\u062D\u062F'
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              this.props.comment.comment
            )
          )
        ) : _react2.default.createElement(
          'div',
          { className: 'comments-section' },
          _react2.default.createElement(
            'div',
            { className: 'comments-image' },
            _react2.default.createElement('img', { style: { width: '77px' }, src: '../assets/pessoa-icon.png' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'comments-details' },
            _react2.default.createElement(
              'div',
              { className: 'name-date' },
              _react2.default.createElement(
                'h3',
                null,
                ' ',
                this.props.comment.commenter_name
              ),
              _react2.default.createElement(
                'h5',
                null,
                '\u0645\u0646\u0630 \u064A\u0648\u0645 \u0648\u0627\u062D\u062F'
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              this.props.comment.comment
            )
          )
        )
      );
    }
  }]);

  return AllComments;
}(_react.Component);

exports.default = AllComments;