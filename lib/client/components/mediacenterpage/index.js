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

var _header = require('../header');

var _header2 = _interopRequireDefault(_header);

var _index = require('../home/mediacenter/newsbox/index.js');

var _index2 = _interopRequireDefault(_index);

var _getAllNewsAction = require('../../actions/getAllNewsAction');

var _getAllNewsAction2 = _interopRequireDefault(_getAllNewsAction);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MediaCenterPage = function (_Component) {
    _inherits(MediaCenterPage, _Component);

    function MediaCenterPage(props) {
        _classCallCheck(this, MediaCenterPage);

        return _possibleConstructorReturn(this, (MediaCenterPage.__proto__ || Object.getPrototypeOf(MediaCenterPage)).call(this, props));
    }

    _createClass(MediaCenterPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var allNews = this.props.allNews;

            allNews();
        }
    }, {
        key: 'render',
        value: function render() {
            var news = this.props.news;

            console.log(this.props, 'props');
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_header2.default, { Logo: './assets/nabali-fares-colored.png', WhereAmI: 'mediacenterpage' }),
                _react2.default.createElement(
                    'div',
                    { className: 'mediacenterpage__nav' },
                    _react2.default.createElement(
                        'span',
                        null,
                        '\u0627\u0644\u0645\u0631\u0643\u0632 \u0627\u0644\u0625\u0639\u0644\u0627\u0645\u064A'
                    ),
                    _react2.default.createElement(
                        'span',
                        null,
                        '\u0628\u0628\u0633\u0627\u0637\u0629 \u0646\u0635 \u0634\u0643\u0644\u064A \u0628\u0645\u0639\u0646\u0649 \u0623\u0646 \u0627\u0644\u063A\u0627\u064A\u0629 \u0647\u064A \u0627\u0644\u0634\u0643\u0644 \u0648\u0644\u064A\u0633 \u0627\u0644\u0645\u062D\u062A\u0648\u0649'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'mediacenterpage__components' },
                    news.isFetching || news.newsData.length == 0 ? _react2.default.createElement(
                        'div',
                        null,
                        'loading'
                    ) : news.newsData.map(function (e) {
                        return _react2.default.createElement(_index2.default, { data: e });
                    })
                )
            );
        }
    }]);

    return MediaCenterPage;
}(_react.Component);

MediaCenterPage.propTypes = {
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MediaCenterPage);