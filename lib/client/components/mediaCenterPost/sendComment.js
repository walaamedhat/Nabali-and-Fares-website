'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _addComment = require('../../actions/addComment');

var _addComment2 = _interopRequireDefault(_addComment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SendComment = function (_Component) {
  _inherits(SendComment, _Component);

  function SendComment(props) {
    _classCallCheck(this, SendComment);

    var _this = _possibleConstructorReturn(this, (SendComment.__proto__ || Object.getPrototypeOf(SendComment)).call(this, props));

    _this.onSubmit = function (e) {
      var _this$state;

      e.preventDefault();
      _this.state = (_this$state = {
        news_id: e.target.id
      }, _defineProperty(_this$state, e.target[0].name, e.target[0].value), _defineProperty(_this$state, e.target[1].name, e.target[1].value), _defineProperty(_this$state, e.target[2].name, e.target[2].value), _this$state);
      var addComment = _this.props.addComment;

      addComment(_this.state);
      window.location.reload();
    };

    return _this;
  }

  _createClass(SendComment, [{
    key: 'render',
    value: function render() {
      var id = this.props.id;
      return _react2.default.createElement(
        'div',
        { className: 'commentOnPost' },
        _react2.default.createElement(
          'div',
          { className: 'commentOnPost-h3' },
          _react2.default.createElement(
            'h3',
            null,
            '\u0623\u0631\u0633\u0644 \u0644\u0646\u0627 \u062A\u0639\u0644\u064A\u0642'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'sendComment-inputs' },
          id.length != 0 ? _react2.default.createElement(
            'form',
            { onSubmit: this.onSubmit, id: id[0]._id },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'label',
                { className: 'contactUs-label' },
                ' \u0627\u0644\u0625\u0633\u0645 \u0643\u0627\u0645\u0644\u0627\u064B'
              ),
              _react2.default.createElement('input', { name: 'commenter_name', type: 'text', placeholder: '\u064A\u0631\u062C\u0649 \u0643\u062A\u0627\u0628\u0629 \u0625\u0633\u0645\u0643', required: true, className: 'comment-input' }),
              _react2.default.createElement(
                'label',
                { className: 'contactUs-label' },
                '\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A'
              ),
              _react2.default.createElement('input', { name: 'email', type: 'text', placeholder: '\u0628\u0631\u064A\u062F\u0643 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A', required: true, className: 'comment-input' })
            ),
            _react2.default.createElement(
              'label',
              { className: 'contactUs-label' },
              ' \u0627\u0643\u062A\u0628 \u062A\u0639\u0644\u064A\u0642'
            ),
            _react2.default.createElement('textarea', { name: 'comment', className: 'contactUs-textarea', required: true, laceholder: '\u0623\u0643\u062A\u0628 \u0646\u0635 \u0627\u0644\u062A\u0639\u0644\u064A\u0642 \u0627\u0644\u062E\u0627\u0635 \u0628\u0643' }),
            _react2.default.createElement(
              'div',
              { className: 'comment-button' },
              _react2.default.createElement(
                'button',
                { type: 'submit', className: 'sendComment' },
                '\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u062A\u0639\u0644\u064A\u0642'
              )
            )
          ) : _react2.default.createElement('div', null)
        )
      );
    }
  }]);

  return SendComment;
}(_react.Component);

SendComment.propTypes = {
  addComment: _propTypes2.default.func
};

var mapDispatchToProps = {
  addComment: _addComment2.default
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(SendComment);