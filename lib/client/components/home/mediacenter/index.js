'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getAllNewsAction = require('../../../actions/getAllNewsAction');

var _getAllNewsAction2 = _interopRequireDefault(_getAllNewsAction);

var _index = require('./newsbox/index');

var _index2 = _interopRequireDefault(_index);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MediaCenter = function (_Component) {
    _inherits(MediaCenter, _Component);

    function MediaCenter(props) {
        _classCallCheck(this, MediaCenter);

        return _possibleConstructorReturn(this, (MediaCenter.__proto__ || Object.getPrototypeOf(MediaCenter)).call(this, props));
    }

    _createClass(MediaCenter, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var allNews = this.props.allNews;

            allNews();
        }
    }, {
        key: 'render',
        value: function render() {
            var news = this.props.news;

            console.log(news, 'props news');
            return _react2.default.createElement(
                'div',
                { className: 'mediacenter' },
                _react2.default.createElement(
                    'div',
                    { className: 'mediacenter__top' },
                    _react2.default.createElement(
                        'span',
                        { className: 'mediacenter__top__righttext' },
                        '\u0627\u0644\u0645\u0631\u0643\u0632 \u0627\u0644\u0625\u0639\u0644\u0627\u0645\u064A'
                    ),
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/mediacenter' },
                        _react2.default.createElement(
                            'span',
                            { className: 'mediacenter__top__lefttext' },
                            '\u0639\u0631\u0636 \u0643\u0644 \u0627\u0644\u0623\u062E\u0628\u0627\u0631'
                        )
                    )
                ),
                news.isFetching || news.newsData.length == 0 ? _react2.default.createElement(
                    'div',
                    null,
                    'loading'
                ) : _react2.default.createElement(
                    'div',
                    { className: 'mediacenter__bottom' },
                    _react2.default.createElement(_index2.default, { data: news.newsData[0] }),
                    _react2.default.createElement(_index2.default, { data: news.newsData[1] }),
                    _react2.default.createElement(_index2.default, { data: news.newsData[2] })
                )
            );
        }
    }]);

    return MediaCenter;
}(_react.Component);

MediaCenter.propTypes = {
    allNews: _propTypes2.default.func
};
var mapStateToProps = function mapStateToProps(state) {
    return {
        news: state.allNews
    };
};

var mapDispatchToProps = {
    allNews: _getAllNewsAction2.default
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MediaCenter);