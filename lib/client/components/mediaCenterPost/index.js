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

var _newsContent = require('./newsContent');

var _newsContent2 = _interopRequireDefault(_newsContent);

var _sendComment = require('./sendComment');

var _sendComment2 = _interopRequireDefault(_sendComment);

var _allComments = require('./allComments');

var _allComments2 = _interopRequireDefault(_allComments);

var _getNewsData = require('../../actions/getNewsData');

var _getNewsData2 = _interopRequireDefault(_getNewsData);

var _allComments3 = require('../../actions/allComments');

var _allComments4 = _interopRequireDefault(_allComments3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Post = function (_Component) {
  _inherits(Post, _Component);

  function Post(props) {
    _classCallCheck(this, Post);

    var _this = _possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).call(this, props));

    _this.openMore = function () {
      _this.setState({ open: true });
    };

    _this.state = { open: false };
    return _this;
  }

  _createClass(Post, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          newsData = _props.newsData,
          allComments = _props.allComments;

      newsData(this.props.match.params.news_id);
      allComments(this.props.match.params.news_id);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          isFetching = _props2.isFetching,
          data = _props2.data,
          comments = _props2.comments;

      console.log(data, 'daaaata');
      return _react2.default.createElement(
        'div',
        { className: 'posts', style: { marginBottom: '198px' } },
        isFetching || data.length === 0 ? _react2.default.createElement('div', null) : _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_newsContent2.default, { data: data }),
          _react2.default.createElement(_sendComment2.default, { id: data })
        ),
        _react2.default.createElement(
          'div',
          { className: 'allComments' },
          _react2.default.createElement(
            'div',
            { className: 'allComments-header' },
            _react2.default.createElement(
              'h3',
              null,
              '\u0627\u0644\u062A\u0639\u0644\u064A\u0642\u0627\u062A'
            ),
            comments.length <= 2 ? _react2.default.createElement(
              'h5',
              { style: { color: 'grey' } },
              '\u0639\u0631\u0636 \u0643\u0644 \u0627\u0644\u062A\u0639\u0644\u064A\u0642\u0627\u062A'
            ) : _react2.default.createElement(
              'h5',
              { onClick: this.openMore },
              '\u0639\u0631\u0636 \u0643\u0644 \u0627\u0644\u062A\u0639\u0644\u064A\u0642\u0627\u062A'
            )
          ),
          !this.state.open && comments.length > 2 || this.state.open && comments.length <= 2 ? _react2.default.createElement(
            'div',
            { style: { width: '50%' } },
            _react2.default.createElement(_allComments2.default, { comment: comments[0], width: '100%' }),
            _react2.default.createElement(_allComments2.default, { comment: comments[1], width: '100%' })
          ) : _react2.default.createElement(
            'div',
            { style: { width: '50%' } },
            comments.map(function (e) {
              return _react2.default.createElement(_allComments2.default, { comment: e });
            })
          )
        )
      );
    }
  }]);

  return Post;
}(_react.Component);

Post.propTypes = {
  newsData: _propTypes2.default.func
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    data: state.newsData.newsData,
    isFetching: state.newsData.isFetching,
    comments: state.allComment.comments
  };
};
var mapDispatchToProps = {
  newsData: _getNewsData2.default,
  allComments: _allComments4.default
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Post);