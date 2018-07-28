'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactPlayer = require('react-player');

var _reactPlayer2 = _interopRequireDefault(_reactPlayer);

var _getAllNewsAction = require('../../actions/getAllNewsAction');

var _getAllNewsAction2 = _interopRequireDefault(_getAllNewsAction);

var _header = require('../header');

var _header2 = _interopRequireDefault(_header);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MediaCenterPost = function (_Component) {
  _inherits(MediaCenterPost, _Component);

  function MediaCenterPost(props) {
    _classCallCheck(this, MediaCenterPost);

    var _this = _possibleConstructorReturn(this, (MediaCenterPost.__proto__ || Object.getPrototypeOf(MediaCenterPost)).call(this, props));

    _this.view = function (e) {
      window.scrollTo(0, 0);
      window.location.reload();
    };

    _this.state = {
      run: false,
      controled: false
    };
    _this.runOrPauseVideo = _this.runOrPauseVideo.bind(_this);
    return _this;
  }

  _createClass(MediaCenterPost, [{
    key: 'runOrPauseVideo',
    value: function runOrPauseVideo() {
      if (this.state.run) {
        this.setState({
          run: false
        });
      } else {
        this.setState({
          run: true,
          controled: true

        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var allNews = this.props.allNews;

      allNews();
    }
  }, {
    key: 'render',
    value: function render() {
      var data = this.props.data;
      var anotherNews = this.props.anotherNews;

      var randomIndex = Math.floor(Math.random() * anotherNews.newsData.length);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_header2.default, { Logo: '../assets/nabali-fares-colored.png', WhereAmI: 'mediacenterpage' }),
        data.length != 0 ? _react2.default.createElement(
          'div',
          { className: 'media-center-post' },
          _react2.default.createElement(
            'div',
            { className: 'post-image-header' },
            _react2.default.createElement('img', { src: data[0].mainImage, className: 'header-postImage' }),
            _react2.default.createElement(
              'div',
              { 'class': 'content_over_image' },
              _react2.default.createElement(
                'h2',
                null,
                data[0].name
              ),
              _react2.default.createElement(
                'div',
                { className: 'post-desc-time' },
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement('i', { className: 'fa fa-calendar', style: { fontSize: '20px' } }),
                  '\u0642\u0628\u0644 5 \u062F\u0642\u0627\u0626\u0642'
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement('i', { style: { fontSize: '24px' }, className: 'fa fa-flag' }),
                  '\u062E\u0628\u0631'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'post-content' },
            _react2.default.createElement(
              'div',
              { className: 'content-fistSection' },
              _react2.default.createElement(
                'p',
                null,
                '\u0647\u0646\u0627\u0643 \u062D\u0642\u064A\u0642\u0629 \u0645\u062B\u0628\u062A\u0629 \u0645\u0646\u0630 \u0632\u0645\u0646 \u0637\u0648\u064A\u0644 \u0648\u0647\u064A \u0623\u0646 \u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0645\u0642\u0631\u0648\u0621 \u0644\u0635\u0641\u062D\u0629 \u0645\u0627 \u0633\u064A\u0644\u0647\u064A \u0627\u0644\u0642\u0627\u0631\u0626 \u0639\u0646 \u0627\u0644\u062A\u0631\u0643\u064A\u0632 \u0639\u0644\u0649 \u0627\u0644\u0634\u0643\u0644 \u0627\u0644\u062E\u0627\u0631\u062C\u064A \u0644\u0644\u0646\u0635 \u0623\u0648 \u0634\u0643\u0644 \u062A\u0648\u0636\u0639 \u0627\u0644\u0641\u0642\u0631\u0627\u062A \u0641\u064A \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u062A\u064A \u064A\u0642\u0631\u0623\u0647\u0627. \u0648\u0644\u0630\u0644\u0643 \u064A\u062A\u0645 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0637\u0631\u064A\u0642\u0629 \u0644\u0648\u0631\u064A\u0645 \u0625\u064A\u0628\u0633\u0648\u0645 \u0644\u0623\u0646\u0647\u0627 \u062A\u0639\u0637\u064A \u062A\u0648\u0632\u064A\u0639\u0627\u064E \u0637\u0628\u064A\u0639\u064A\u0627\u064E -\u0625\u0644\u0649 \u062D\u062F \u0645\u0627- \u0644\u0644\u0623\u062D\u0631\u0641 \u0639\u0648\u0636\u0627\u064B \u0639\u0646 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 "\u0647\u0646\u0627 \u064A\u0648\u062C\u062F \u0645\u062D\u062A\u0648\u0649 \u0646\u0635\u064A\u060C \u0647\u0646\u0627 \u064A\u0648\u062C\u062F \u0645\u062D\u062A\u0648\u0649 \u0646\u0635\u064A" \u0641\u062A\u062C\u0639\u0644\u0647\u0627 \u062A\u0628\u062F\u0648 (\u0623\u064A \u0627\u0644\u0623\u062D\u0631\u0641) \u0648\u0643\u0623\u0646\u0647\u0627 \u0646\u0635 \u0645\u0642\u0631\u0648\u0621. \u0627\u0644\u0639\u062F\u064A\u062F \u0645\u0646 \u0628\u0631\u0627\u0645\u062D \u0627\u0644\u0646\u0634\u0631 \u0627\u0644\u0645\u0643\u062A\u0628\u064A \u0648\u0628\u0631\u0627\u0645\u062D \u062A\u062D\u0631\u064A\u0631 \u0635\u0641\u062D\u0627\u062A \u0627\u0644\u0648\u064A\u0628 \u062A\u0633\u062A\u062E\u062F\u0645 \u0644\u0648\u0631\u064A\u0645 \u0625\u064A\u0628\u0633\u0648\u0645 \u0628\u0634\u0643\u0644 \u0625\u0641\u062A\u0631\u0627\u0636\u064A \u0643\u0646\u0645\u0648\u0630\u062C \u0639\u0646 \u0627\u0644\u0646\u0635\u060C \u0648\u0625\u0630\u0627 \u0642\u0645\u062A \u0628\u0625\u062F\u062E\u0627\u0644 "lorem ipsum" \u0641\u064A \u0623\u064A \u0645\u062D\u0631\u0643 \u0628\u062D\u062B \u0633\u062A\u0638\u0647\u0631 \u0627\u0644\u0639\u062F\u064A\u062F \u0645\u0646 \u0627\u0644\u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u062D\u062F\u064A\u062B\u0629 \u0627\u0644\u0639\u0647\u062F \u0641\u064A \u0646\u062A\u0627\u0626\u062C \u0627\u0644\u0628\u062D\u062B. \u0639\u0644\u0649 \u0645\u062F\u0649 \u0627\u0644\u0633\u0646\u064A\u0646 \u0638\u0647\u0631\u062A \u0646\u0633\u062E \u062C\u062F\u064A\u062F\u0629 \u0648\u0645\u062E\u062A\u0644\u0641\u0629 \u0645\u0646 \u0646\u0635 \u0644\u0648\u0631\u064A\u0645 \u0625\u064A\u0628\u0633\u0648\u0645\u060C \u0623\u062D\u064A\u0627\u0646\u0627\u064B \u0639\u0646 \u0637\u0631\u064A\u0642 \u0627\u0644\u0635\u062F\u0641\u0629\u060C \u0648\u0623\u062D\u064A\u0627\u0646\u0627\u064B \u0639\u0646 \u0639\u0645\u062F \u0643\u0625\u062F\u062E\u0627\u0644 \u0628\u0639\u0636 \u0627\u0644\u0639\u0628\u0627\u0631\u0627\u062A \u0627\u0644\u0641\u0643\u0627\u0647\u064A\u0629 \u0625\u0644\u064A\u0647\u0627'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'content-secondSection' },
              _react2.default.createElement(
                'div',
                { style: { position: 'relative' }, className: 'projectpage__row5__video', onClick: this.runOrPauseVideo },
                !this.state.controled && _react2.default.createElement('input', { className: 'secondSection__runvideobutton' }),
                _react2.default.createElement(_reactPlayer2.default, { url: [{ src: data[0].video, type: 'video/webm' }], playing: this.state.run, controls: this.state.controled })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'content-thirdSection' },
              _react2.default.createElement(
                'h3',
                null,
                '\u0639\u0646\u0648\u0627\u0646 \u0648\u0647\u0645\u064A \u0644\u0627\u0638\u0647\u0627\u0631 \u0634\u0643\u0644 \u0639\u0646\u0627\u0648\u064A\u0646 \u0627\u0644\u0641\u0642\u0631\u0627\u062A'
              ),
              _react2.default.createElement(
                'p',
                null,
                '\u0647\u0646\u0627\u0643 \u062D\u0642\u064A\u0642\u0629 \u0645\u062B\u0628\u062A\u0629 \u0645\u0646\u0630 \u0632\u0645\u0646 \u0637\u0648\u064A\u0644 \u0648\u0647\u064A \u0623\u0646 \u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0645\u0642\u0631\u0648\u0621 \u0644\u0635\u0641\u062D\u0629 \u0645\u0627 \u0633\u064A\u0644\u0647\u064A \u0627\u0644\u0642\u0627\u0631\u0626 \u0639\u0646 \u0627\u0644\u062A\u0631\u0643\u064A\u0632 \u0639\u0644\u0649 \u0627\u0644\u0634\u0643\u0644 \u0627\u0644\u062E\u0627\u0631\u062C\u064A \u0644\u0644\u0646\u0635 \u0623\u0648 \u0634\u0643\u0644 \u062A\u0648\u0636\u0639 \u0627\u0644\u0641\u0642\u0631\u0627\u062A \u0641\u064A \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u062A\u064A \u064A\u0642\u0631\u0623\u0647\u0627. \u0648\u0644\u0630\u0644\u0643 \u064A\u062A\u0645 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0637\u0631\u064A\u0642\u0629 \u0644\u0648\u0631\u064A\u0645 \u0625\u064A\u0628\u0633\u0648\u0645 \u0644\u0623\u0646\u0647\u0627 \u062A\u0639\u0637\u064A \u062A\u0648\u0632\u064A\u0639\u0627\u064E \u0637\u0628\u064A\u0639\u064A\u0627\u064E -\u0625\u0644\u0649 \u062D\u062F \u0645\u0627- \u0644\u0644\u0623\u062D\u0631\u0641 \u0639\u0648\u0636\u0627\u064B \u0639\u0646 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 "\u0647\u0646\u0627 \u064A\u0648\u062C\u062F \u0645\u062D\u062A\u0648\u0649 \u0646\u0635\u064A\u060C \u0647\u0646\u0627 \u064A\u0648\u062C\u062F \u0645\u062D\u062A\u0648\u0649 \u0646\u0635\u064A" \u0641\u062A\u062C\u0639\u0644\u0647\u0627 \u062A\u0628\u062F\u0648 (\u0623\u064A \u0627\u0644\u0623\u062D\u0631\u0641) \u0648\u0643\u0623\u0646\u0647\u0627 \u0646\u0635 \u0645\u0642\u0631\u0648\u0621. \u0627\u0644\u0639\u062F\u064A\u062F \u0645\u0646 \u0628\u0631\u0627\u0645\u062D \u0627\u0644\u0646\u0634\u0631 \u0627\u0644\u0645\u0643\u062A\u0628\u064A \u0648\u0628\u0631\u0627\u0645\u062D \u062A\u062D\u0631\u064A\u0631 \u0635\u0641\u062D\u0627\u062A \u0627\u0644\u0648\u064A\u0628 \u062A\u0633\u062A\u062E\u062F\u0645 \u0644\u0648\u0631\u064A\u0645 \u0625\u064A\u0628\u0633\u0648\u0645 \u0628\u0634\u0643\u0644 \u0625\u0641\u062A\u0631\u0627\u0636\u064A \u0643\u0646\u0645\u0648\u0630\u062C \u0639\u0646 \u0627\u0644\u0646\u0635\u060C \u0648\u0625\u0630\u0627 \u0642\u0645\u062A \u0628\u0625\u062F\u062E\u0627\u0644 "lorem ipsum" \u0641\u064A \u0623\u064A \u0645\u062D\u0631\u0643 \u0628\u062D\u062B \u0633\u062A\u0638\u0647\u0631 \u0627\u0644\u0639\u062F\u064A\u062F \u0645\u0646 \u0627\u0644\u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u062D\u062F\u064A\u062B\u0629 \u0627\u0644\u0639\u0647\u062F \u0641\u064A \u0646\u062A\u0627\u0626\u062C \u0627\u0644\u0628\u062D\u062B. \u0639\u0644\u0649 \u0645\u062F\u0649 \u0627\u0644\u0633\u0646\u064A\u0646 \u0638\u0647\u0631\u062A \u0646\u0633\u062E \u062C\u062F\u064A\u062F\u0629 \u0648\u0645\u062E\u062A\u0644\u0641\u0629 \u0645\u0646 \u0646\u0635 \u0644\u0648\u0631\u064A\u0645 \u0625\u064A\u0628\u0633\u0648\u0645\u060C \u0623\u062D\u064A\u0627\u0646\u0627\u064B \u0639\u0646 \u0637\u0631\u064A\u0642 \u0627\u0644\u0635\u062F\u0641\u0629\u060C \u0648\u0623\u062D\u064A\u0627\u0646\u0627\u064B \u0639\u0646 \u0639\u0645\u062F \u0643\u0625\u062F\u062E\u0627\u0644 \u0628\u0639\u0636 \u0627\u0644\u0639\u0628\u0627\u0631\u0627\u062A \u0627\u0644\u0641\u0643\u0627\u0647\u064A\u0629 \u0625\u0644\u064A\u0647\u0627'
              ),
              _react2.default.createElement(
                'p',
                null,
                '\u0647\u0646\u0627\u0643 \u062D\u0642\u064A\u0642\u0629 \u0645\u062B\u0628\u062A\u0629 \u0645\u0646\u0630 \u0632\u0645\u0646 \u0637\u0648\u064A\u0644 \u0648\u0647\u064A \u0623\u0646 \u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0645\u0642\u0631\u0648\u0621 \u0644\u0635\u0641\u062D\u0629 \u0645\u0627 \u0633\u064A\u0644\u0647\u064A \u0627\u0644\u0642\u0627\u0631\u0626 \u0639\u0646 \u0627\u0644\u062A\u0631\u0643\u064A\u0632 \u0639\u0644\u0649 \u0627\u0644\u0634\u0643\u0644 \u0627\u0644\u062E\u0627\u0631\u062C\u064A \u0644\u0644\u0646\u0635 \u0623\u0648 \u0634\u0643\u0644 \u062A\u0648\u0636\u0639 \u0627\u0644\u0641\u0642\u0631\u0627\u062A \u0641\u064A \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u062A\u064A \u064A\u0642\u0631\u0623\u0647\u0627. \u0648\u0644\u0630\u0644\u0643 \u064A\u062A\u0645 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0637\u0631\u064A\u0642\u0629 \u0644\u0648\u0631\u064A\u0645 \u0625\u064A\u0628\u0633\u0648\u0645 \u0644\u0623\u0646\u0647\u0627 \u062A\u0639\u0637\u064A \u062A\u0648\u0632\u064A\u0639\u0627\u064E \u0637\u0628\u064A\u0639\u064A\u0627\u064E -\u0625\u0644\u0649 \u062D\u062F \u0645\u0627- \u0644\u0644\u0623\u062D\u0631\u0641 \u0639\u0648\u0636\u0627\u064B \u0639\u0646 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 "\u0647\u0646\u0627 \u064A\u0648\u062C\u062F \u0645\u062D\u062A\u0648\u0649 \u0646\u0635\u064A\u060C \u0647\u0646\u0627 \u064A\u0648\u062C\u062F \u0645\u062D\u062A\u0648\u0649 \u0646\u0635\u064A" \u0641\u062A\u062C\u0639\u0644\u0647\u0627 \u062A\u0628\u062F\u0648 (\u0623\u064A \u0627\u0644\u0623\u062D\u0631\u0641) \u0648\u0643\u0623\u0646\u0647\u0627 \u0646\u0635 \u0645\u0642\u0631\u0648\u0621. \u0627\u0644\u0639\u062F\u064A\u062F \u0645\u0646 \u0628\u0631\u0627\u0645\u062D \u0627\u0644\u0646\u0634\u0631 \u0627\u0644\u0645\u0643\u062A\u0628\u064A \u0648\u0628\u0631\u0627\u0645\u062D \u062A\u062D\u0631\u064A\u0631 \u0635\u0641\u062D\u0627\u062A \u0627\u0644\u0648\u064A\u0628 \u062A\u0633\u062A\u062E\u062F\u0645 \u0644\u0648\u0631\u064A\u0645 \u0625\u064A\u0628\u0633\u0648\u0645 \u0628\u0634\u0643\u0644 \u0625\u0641\u062A\u0631\u0627\u0636\u064A \u0643\u0646\u0645\u0648\u0630\u062C \u0639\u0646 \u0627\u0644\u0646\u0635\u060C \u0648\u0625\u0630\u0627 \u0642\u0645\u062A \u0628\u0625\u062F\u062E\u0627\u0644 "lorem ipsum" \u0641\u064A \u0623\u064A \u0645\u062D\u0631\u0643 \u0628\u062D\u062B \u0633\u062A\u0638\u0647\u0631 \u0627\u0644\u0639\u062F\u064A\u062F \u0645\u0646 \u0627\u0644\u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u062D\u062F\u064A\u062B\u0629 \u0627\u0644\u0639\u0647\u062F \u0641\u064A \u0646\u062A\u0627\u0626\u062C \u0627\u0644\u0628\u062D\u062B. \u0639\u0644\u0649 \u0645\u062F\u0649 \u0627\u0644\u0633\u0646\u064A\u0646 \u0638\u0647\u0631\u062A \u0646\u0633\u062E \u062C\u062F\u064A\u062F\u0629 \u0648\u0645\u062E\u062A\u0644\u0641\u0629 \u0645\u0646 \u0646\u0635 \u0644\u0648\u0631\u064A\u0645 \u0625\u064A\u0628\u0633\u0648\u0645\u060C \u0623\u062D\u064A\u0627\u0646\u0627\u064B \u0639\u0646 \u0637\u0631\u064A\u0642 \u0627\u0644\u0635\u062F\u0641\u0629\u060C \u0648\u0623\u062D\u064A\u0627\u0646\u0627\u064B \u0639\u0646 \u0639\u0645\u062F \u0643\u0625\u062F\u062E\u0627\u0644 \u0628\u0639\u0636 \u0627\u0644\u0639\u0628\u0627\u0631\u0627\u062A \u0627\u0644\u0641\u0643\u0627\u0647\u064A\u0629 \u0625\u0644\u064A\u0647\u0627'
              ),
              _react2.default.createElement(
                'h3',
                null,
                '\u0639\u0646\u0648\u0627\u0646 \u0648\u0647\u0645\u064A \u062B\u0627\u0646\u064A'
              ),
              _react2.default.createElement(
                'p',
                null,
                '\u0647\u0646\u0627\u0643 \u062D\u0642\u064A\u0642\u0629 \u0645\u062B\u0628\u062A\u0629 \u0645\u0646\u0630 \u0632\u0645\u0646 \u0637\u0648\u064A\u0644 \u0648\u0647\u064A \u0623\u0646 \u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0645\u0642\u0631\u0648\u0621 \u0644\u0635\u0641\u062D\u0629 \u0645\u0627 \u0633\u064A\u0644\u0647\u064A \u0627\u0644\u0642\u0627\u0631\u0626 \u0639\u0646 \u0627\u0644\u062A\u0631\u0643\u064A\u0632 \u0639\u0644\u0649 \u0627\u0644\u0634\u0643\u0644 \u0627\u0644\u062E\u0627\u0631\u062C\u064A \u0644\u0644\u0646\u0635 \u0623\u0648 \u0634\u0643\u0644 \u062A\u0648\u0636\u0639 \u0627\u0644\u0641\u0642\u0631\u0627\u062A \u0641\u064A \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u062A\u064A \u064A\u0642\u0631\u0623\u0647\u0627. \u0648\u0644\u0630\u0644\u0643 \u064A\u062A\u0645 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0637\u0631\u064A\u0642\u0629 \u0644\u0648\u0631\u064A\u0645 \u0625\u064A\u0628\u0633\u0648\u0645 \u0644\u0623\u0646\u0647\u0627 \u062A\u0639\u0637\u064A \u062A\u0648\u0632\u064A\u0639\u0627\u064E \u0637\u0628\u064A\u0639\u064A\u0627\u064E -\u0625\u0644\u0649 \u062D\u062F \u0645\u0627- \u0644\u0644\u0623\u062D\u0631\u0641 \u0639\u0648\u0636\u0627\u064B \u0639\u0646 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 "\u0647\u0646\u0627 \u064A\u0648\u062C\u062F \u0645\u062D\u062A\u0648\u0649 \u0646\u0635\u064A\u060C \u0647\u0646\u0627 \u064A\u0648\u062C\u062F \u0645\u062D\u062A\u0648\u0649 \u0646\u0635\u064A" \u0641\u062A\u062C\u0639\u0644\u0647\u0627 \u062A\u0628\u062F\u0648 (\u0623\u064A \u0627\u0644\u0623\u062D\u0631\u0641) \u0648\u0643\u0623\u0646\u0647\u0627 \u0646\u0635 \u0645\u0642\u0631\u0648\u0621. \u0627\u0644\u0639\u062F\u064A\u062F \u0645\u0646 \u0628\u0631\u0627\u0645\u062D \u0627\u0644\u0646\u0634\u0631 \u0627\u0644\u0645\u0643\u062A\u0628\u064A \u0648\u0628\u0631\u0627\u0645\u062D \u062A\u062D\u0631\u064A\u0631 \u0635\u0641\u062D\u0627\u062A \u0627\u0644\u0648\u064A\u0628 \u062A\u0633\u062A\u062E\u062F\u0645 \u0644\u0648\u0631\u064A\u0645 \u0625\u064A\u0628\u0633\u0648\u0645 \u0628\u0634\u0643\u0644 \u0625\u0641\u062A\u0631\u0627\u0636\u064A \u0643\u0646\u0645\u0648\u0630\u062C \u0639\u0646 \u0627\u0644\u0646\u0635\u060C \u0648\u0625\u0630\u0627 \u0642\u0645\u062A \u0628\u0625\u062F\u062E\u0627\u0644 "lorem ipsum" \u0641\u064A \u0623\u064A \u0645\u062D\u0631\u0643 \u0628\u062D\u062B \u0633\u062A\u0638\u0647\u0631 \u0627\u0644\u0639\u062F\u064A\u062F \u0645\u0646 \u0627\u0644\u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u062D\u062F\u064A\u062B\u0629 \u0627\u0644\u0639\u0647\u062F \u0641\u064A \u0646\u062A\u0627\u0626\u062C \u0627\u0644\u0628\u062D\u062B. \u0639\u0644\u0649 \u0645\u062F\u0649 \u0627\u0644\u0633\u0646\u064A\u0646 \u0638\u0647\u0631\u062A \u0646\u0633\u062E \u062C\u062F\u064A\u062F\u0629 \u0648\u0645\u062E\u062A\u0644\u0641\u0629 \u0645\u0646 \u0646\u0635 \u0644\u0648\u0631\u064A\u0645 \u0625\u064A\u0628\u0633\u0648\u0645\u060C \u0623\u062D\u064A\u0627\u0646\u0627\u064B \u0639\u0646 \u0637\u0631\u064A\u0642 \u0627\u0644\u0635\u062F\u0641\u0629\u060C \u0648\u0623\u062D\u064A\u0627\u0646\u0627\u064B \u0639\u0646 \u0639\u0645\u062F \u0643\u0625\u062F\u062E\u0627\u0644 \u0628\u0639\u0636 \u0627\u0644\u0639\u0628\u0627\u0631\u0627\u062A \u0627\u0644\u0641\u0643\u0627\u0647\u064A\u0629 \u0625\u0644\u064A\u0647\u0627'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'content-fourthSection' },
              _react2.default.createElement('img', { style: { width: '100%' }, src: '../assets/post-image.png' }),
              _react2.default.createElement(
                'div',
                { style: { width: '100%' }, className: 'fourthSection-2img' },
                _react2.default.createElement('img', { src: '../assets/posts.jpg' }),
                _react2.default.createElement('img', { src: '../assets/posts.jpg' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'fourthSection-6img' },
                _react2.default.createElement('img', { src: '../assets/posts.jpg' }),
                _react2.default.createElement(
                  'div',
                  { className: 'fourthSection-6img-left' },
                  _react2.default.createElement('img', { src: '../assets/posts.jpg' }),
                  _react2.default.createElement('img', { src: '../assets/posts.jpg' }),
                  _react2.default.createElement('img', { src: '../assets/posts.jpg' }),
                  _react2.default.createElement('img', { src: '../assets/posts.jpg' })
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'content-fifthSection' },
              _react2.default.createElement(
                'p',
                null,
                '\u0647\u0646\u0627\u0643 \u062D\u0642\u064A\u0642\u0629 \u0645\u062B\u0628\u062A\u0629 \u0645\u0646\u0630 \u0632\u0645\u0646 \u0637\u0648\u064A\u0644 \u0648\u0647\u064A \u0623\u0646 \u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0645\u0642\u0631\u0648\u0621 \u0644\u0635\u0641\u062D\u0629 \u0645\u0627 \u0633\u064A\u0644\u0647\u064A \u0627\u0644\u0642\u0627\u0631\u0626 \u0639\u0646 \u0627\u0644\u062A\u0631\u0643\u064A\u0632 \u0639\u0644\u0649 \u0627\u0644\u0634\u0643\u0644 \u0627\u0644\u062E\u0627\u0631\u062C\u064A \u0644\u0644\u0646\u0635 \u0623\u0648 \u0634\u0643\u0644 \u062A\u0648\u0636\u0639 \u0627\u0644\u0641\u0642\u0631\u0627\u062A \u0641\u064A \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u062A\u064A \u064A\u0642\u0631\u0623\u0647\u0627. \u0648\u0644\u0630\u0644\u0643 \u064A\u062A\u0645 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0637\u0631\u064A\u0642\u0629 \u0644\u0648\u0631\u064A\u0645 \u0625\u064A\u0628\u0633\u0648\u0645 \u0644\u0623\u0646\u0647\u0627 \u062A\u0639\u0637\u064A \u062A\u0648\u0632\u064A\u0639\u0627\u064E \u0637\u0628\u064A\u0639\u064A\u0627\u064E -\u0625\u0644\u0649 \u062D\u062F \u0645\u0627- \u0644\u0644\u0623\u062D\u0631\u0641 \u0639\u0648\u0636\u0627\u064B \u0639\u0646 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 "\u0647\u0646\u0627 \u064A\u0648\u062C\u062F \u0645\u062D\u062A\u0648\u0649 \u0646\u0635\u064A\u060C \u0647\u0646\u0627 \u064A\u0648\u062C\u062F \u0645\u062D\u062A\u0648\u0649 \u0646\u0635\u064A" \u0641\u062A\u062C\u0639\u0644\u0647\u0627 \u062A\u0628\u062F\u0648 (\u0623\u064A \u0627\u0644\u0623\u062D\u0631\u0641) \u0648\u0643\u0623\u0646\u0647\u0627 \u0646\u0635 \u0645\u0642\u0631\u0648\u0621. \u0627\u0644\u0639\u062F\u064A\u062F \u0645\u0646 \u0628\u0631\u0627\u0645\u062D \u0627\u0644\u0646\u0634\u0631 \u0627\u0644\u0645\u0643\u062A\u0628\u064A \u0648\u0628\u0631\u0627\u0645\u062D \u062A\u062D\u0631\u064A\u0631 \u0635\u0641\u062D\u0627\u062A \u0627\u0644\u0648\u064A\u0628 \u062A\u0633\u062A\u062E\u062F\u0645 \u0644\u0648\u0631\u064A\u0645 \u0625\u064A\u0628\u0633\u0648\u0645 \u0628\u0634\u0643\u0644 \u0625\u0641\u062A\u0631\u0627\u0636\u064A \u0643\u0646\u0645\u0648\u0630\u062C \u0639\u0646 \u0627\u0644\u0646\u0635\u060C \u0648\u0625\u0630\u0627 \u0642\u0645\u062A \u0628\u0625\u062F\u062E\u0627\u0644 "lorem ipsum" \u0641\u064A \u0623\u064A \u0645\u062D\u0631\u0643 \u0628\u062D\u062B \u0633\u062A\u0638\u0647\u0631 \u0627\u0644\u0639\u062F\u064A\u062F \u0645\u0646 \u0627\u0644\u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u062D\u062F\u064A\u062B\u0629 \u0627\u0644\u0639\u0647\u062F \u0641\u064A \u0646\u062A\u0627\u0626\u062C \u0627\u0644\u0628\u062D\u062B. \u0639\u0644\u0649 \u0645\u062F\u0649 \u0627\u0644\u0633\u0646\u064A\u0646 \u0638\u0647\u0631\u062A \u0646\u0633\u062E \u062C\u062F\u064A\u062F\u0629 \u0648\u0645\u062E\u062A\u0644\u0641\u0629 \u0645\u0646 \u0646\u0635 \u0644\u0648\u0631\u064A\u0645 \u0625\u064A\u0628\u0633\u0648\u0645\u060C \u0623\u062D\u064A\u0627\u0646\u0627\u064B \u0639\u0646 \u0637\u0631\u064A\u0642 \u0627\u0644\u0635\u062F\u0641\u0629\u060C \u0648\u0623\u062D\u064A\u0627\u0646\u0627\u064B \u0639\u0646 \u0639\u0645\u062F \u0643\u0625\u062F\u062E\u0627\u0644 \u0628\u0639\u0636 \u0627\u0644\u0639\u0628\u0627\u0631\u0627\u062A \u0627\u0644\u0641\u0643\u0627\u0647\u064A\u0629 \u0625\u0644\u064A\u0647\u0627'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'content-sixthSection' },
              _react2.default.createElement(
                'div',
                { className: 'sixthSection-moreNews' },
                _react2.default.createElement(
                  'h3',
                  { style: { color: '#475669' } },
                  '\u0623\u062E\u0628\u0627\u0631 \u0623\u062E\u0631\u0649'
                ),
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/mediacenter' },
                  _react2.default.createElement(
                    'h5',
                    { style: { color: '#3da5f9' } },
                    '\u0639\u0631\u0636 \u0643\u0644 \u0627\u0644\u0623\u062E\u0628\u0627\u0631'
                  )
                )
              ),
              anotherNews.isFetching || anotherNews.newsData.length == 0 ? _react2.default.createElement(
                'div',
                null,
                'loading'
              ) : _react2.default.createElement(
                'div',
                { className: 'moreNews-desc' },
                _react2.default.createElement(
                  'div',
                  { className: 'moreNews-desc-right' },
                  _react2.default.createElement('img', { style: { width: '100%', height: '161.86px' }, src: anotherNews.newsData[randomIndex].mainImage }),
                  _react2.default.createElement(
                    'h3',
                    null,
                    anotherNews.newsData[randomIndex].name.substring(0, 55),
                    '....'
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    anotherNews.newsData[randomIndex].discription.substring(0, 55),
                    '.... '
                  ),
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/post/' + ('' + anotherNews.newsData[randomIndex]._id), onClick: this.view },
                    _react2.default.createElement(
                      'div',
                      { className: 'newprojects__project__seemore' },
                      '\u0639\u0631\u0636 \u0627\u0644\u0645\u0632\u064A\u062F',
                      _react2.default.createElement(
                        'span',
                        null,
                        _react2.default.createElement('i', { 'class': 'fas fa-arrow-left' })
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'moreNews-desc-left' },
                  _react2.default.createElement('img', { style: { width: '100%', height: '161.86px' }, src: anotherNews.newsData[randomIndex + 1].mainImage }),
                  _react2.default.createElement(
                    'h3',
                    null,
                    anotherNews.newsData[randomIndex + 1].name.substring(0, 55),
                    '....'
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    anotherNews.newsData[randomIndex + 1].discription.substring(0, 55),
                    '.... '
                  ),
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/post/' + ('' + anotherNews.newsData[randomIndex + 1]._id), onClick: this.view },
                    _react2.default.createElement(
                      'div',
                      { className: 'newprojects__project__seemore' },
                      '\u0639\u0631\u0636 \u0627\u0644\u0645\u0632\u064A\u062F',
                      _react2.default.createElement(
                        'span',
                        null,
                        _react2.default.createElement('i', { 'class': 'fas fa-arrow-left' })
                      )
                    )
                  )
                )
              )
            )
          )
        ) : _react2.default.createElement('div', null)
      );
    }
  }]);

  return MediaCenterPost;
}(_react.Component);

MediaCenterPost.propTypes = {
  allNews: _propTypes2.default.func
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    anotherNews: state.allNews
  };
};

var mapDispatchToProps = {
  allNews: _getAllNewsAction2.default
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MediaCenterPost);