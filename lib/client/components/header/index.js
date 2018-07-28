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

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

        _this.state = {
            show: false
        };
        _this.showList = _this.showList.bind(_this);
        _this.changeColorNav = _this.changeColorNav.bind(_this);
        return _this;
    }

    _createClass(Header, [{
        key: 'showList',
        value: function showList() {
            if (this.state.show) {
                this.setState({ show: false });
            } else {
                this.setState({ show: true });
            }
        }
    }, {
        key: 'changeColorNav',
        value: function changeColorNav(location) {
            switch (location) {
                case 'homepage':
                    return _react2.default.createElement(CompHome, null);
                case 'mediacenterpage':
                    return _react2.default.createElement(CompMediaCenter, null);
                case 'ourprojectpage':
                    return _react2.default.createElement(CompOurProject, null);
                case 'contactuspage':
                    return _react2.default.createElement(CompContactUs, null);
                default:
                    return _react2.default.createElement(
                        'div',
                        null,
                        'hi you have create componet iside Header to change'
                    );
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'container__header' },
                _react2.default.createElement(
                    'div',
                    { className: 'header' },
                    _react2.default.createElement(
                        'div',
                        { className: 'header__logo__div' },
                        _react2.default.createElement('img', { className: 'header__logo', src: this.props.Logo })
                    ),
                    this.changeColorNav(this.props.WhereAmI),
                    _react2.default.createElement(
                        'div',
                        { className: 'header__burger' },
                        _react2.default.createElement('i', { style: { color: 'white' }, className: 'fas fa-align-justify', onClick: this.showList })
                    )
                ),
                this.state.show && _react2.default.createElement(
                    'div',
                    { className: 'header__list' },
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'a',
                            { href: '/' },
                            _react2.default.createElement(
                                'li',
                                null,
                                '\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629'
                            )
                        ),
                        _react2.default.createElement(
                            'a',
                            { href: '#aboutUs' },
                            _react2.default.createElement(
                                'li',
                                null,
                                '\u0639\u0646 \u0627\u0644\u0634\u0631\u0643\u0629'
                            )
                        ),
                        _react2.default.createElement(
                            'a',
                            { href: '/ourprojects' },
                            _react2.default.createElement(
                                'li',
                                null,
                                '\u0645\u0634\u0627\u0631\u064A\u0639\u0646\u0627'
                            )
                        ),
                        _react2.default.createElement(
                            'a',
                            { href: '/mediacenter' },
                            _react2.default.createElement(
                                'li',
                                null,
                                '\u0627\u0644\u0645\u0631\u0643\u0632 \u0627\u0644\u0625\u0639\u0644\u0627\u0645\u064A'
                            )
                        ),
                        _react2.default.createElement(
                            'a',
                            { href: '/contactus' },
                            _react2.default.createElement(
                                'li',
                                null,
                                '\u0625\u062A\u0635\u0644 \u0628\u0646\u0627'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Header;
}(_react.Component);

var CompHome = function CompHome() {
    return _react2.default.createElement(
        'div',
        { className: 'header__nav' },
        _react2.default.createElement(
            'a',
            { style: { color: 'white' }, href: '#', className: 'colored_blue' },
            _react2.default.createElement(
                'div',
                null,
                '\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629'
            )
        ),
        _react2.default.createElement(
            'a',
            { style: { color: 'white' }, href: '#aboutUs' },
            _react2.default.createElement(
                'div',
                null,
                '\u0639\u0646 \u0627\u0644\u0634\u0631\u0643\u0629'
            )
        ),
        _react2.default.createElement(
            'a',
            { style: { color: 'white' }, href: '/ourprojects' },
            _react2.default.createElement(
                'div',
                null,
                '\u0645\u0634\u0627\u0631\u064A\u0639\u0646\u0627'
            )
        ),
        _react2.default.createElement(
            'a',
            { style: { color: 'white' }, href: '/mediacenter' },
            _react2.default.createElement(
                'div',
                null,
                '\u0627\u0644\u0645\u0631\u0643\u0632 \u0627\u0644\u0625\u0639\u0644\u0627\u0645\u064A'
            )
        ),
        _react2.default.createElement(
            'a',
            { href: '/contactus' },
            _react2.default.createElement(
                'div',
                { className: 'header__nav__contactus' },
                _react2.default.createElement('i', { 'class': 'fas fa-phone' }),
                '\u0625\u062A\u0635\u0644 \u0628\u0646\u0627'
            )
        )
    );
};

var CompMediaCenter = function CompMediaCenter() {
    return _react2.default.createElement(
        'div',
        { className: 'header__nav' },
        _react2.default.createElement(
            'a',
            { href: '/' },
            _react2.default.createElement(
                'div',
                null,
                '\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629'
            )
        ),
        _react2.default.createElement(
            'a',
            { href: '#aboutUs' },
            _react2.default.createElement(
                'div',
                null,
                '\u0639\u0646 \u0627\u0644\u0634\u0631\u0643\u0629'
            )
        ),
        _react2.default.createElement(
            'a',
            { href: '/ourprojects' },
            _react2.default.createElement(
                'div',
                null,
                '\u0645\u0634\u0627\u0631\u064A\u0639\u0646\u0627'
            )
        ),
        _react2.default.createElement(
            'a',
            { href: '#', className: 'colored_blue' },
            _react2.default.createElement(
                'div',
                null,
                '\u0627\u0644\u0645\u0631\u0643\u0632 \u0627\u0644\u0625\u0639\u0644\u0627\u0645\u064A'
            )
        ),
        _react2.default.createElement(
            'a',
            { href: '/contactus' },
            _react2.default.createElement(
                'div',
                { className: 'header__nav__contactus' },
                _react2.default.createElement('i', { 'class': 'fas fa-phone' }),
                '\u0625\u062A\u0635\u0644 \u0628\u0646\u0627'
            )
        )
    );
};

var CompOurProject = function CompOurProject() {
    return _react2.default.createElement(
        'div',
        { className: 'header__nav' },
        _react2.default.createElement(
            'a',
            { href: '/' },
            _react2.default.createElement(
                'div',
                null,
                '\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629'
            )
        ),
        _react2.default.createElement(
            'a',
            { href: '#aboutUs' },
            _react2.default.createElement(
                'div',
                null,
                '\u0639\u0646 \u0627\u0644\u0634\u0631\u0643\u0629'
            )
        ),
        _react2.default.createElement(
            'a',
            { href: '#', className: 'colored_blue' },
            _react2.default.createElement(
                'div',
                null,
                '\u0645\u0634\u0627\u0631\u064A\u0639\u0646\u0627'
            )
        ),
        _react2.default.createElement(
            'a',
            { href: '/mediacenter' },
            _react2.default.createElement(
                'div',
                null,
                '\u0627\u0644\u0645\u0631\u0643\u0632 \u0627\u0644\u0625\u0639\u0644\u0627\u0645\u064A'
            )
        ),
        _react2.default.createElement(
            'a',
            { href: '/contactus' },
            _react2.default.createElement(
                'div',
                { className: 'header__nav__contactus' },
                _react2.default.createElement('i', { 'class': 'fas fa-phone' }),
                '\u0625\u062A\u0635\u0644 \u0628\u0646\u0627'
            )
        )
    );
};
var CompContactUs = function CompContactUs() {
    return _react2.default.createElement(
        'div',
        { className: 'header__nav' },
        _react2.default.createElement(
            'a',
            { href: '/' },
            _react2.default.createElement(
                'div',
                null,
                '\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629'
            )
        ),
        _react2.default.createElement(
            'a',
            { href: '#aboutUs' },
            _react2.default.createElement(
                'div',
                null,
                '\u0639\u0646 \u0627\u0644\u0634\u0631\u0643\u0629'
            )
        ),
        _react2.default.createElement(
            'a',
            { href: '/ourprojects' },
            _react2.default.createElement(
                'div',
                null,
                '\u0645\u0634\u0627\u0631\u064A\u0639\u0646\u0627'
            )
        ),
        _react2.default.createElement(
            'a',
            { href: '/mediacenter' },
            _react2.default.createElement(
                'div',
                null,
                '\u0627\u0644\u0645\u0631\u0643\u0632 \u0627\u0644\u0625\u0639\u0644\u0627\u0645\u064A'
            )
        ),
        _react2.default.createElement(
            'a',
            { href: '#', className: 'colored_blue' },
            _react2.default.createElement(
                'div',
                { className: 'header__nav__contactus' },
                _react2.default.createElement('i', { 'class': 'fas fa-phone' }),
                '\u0625\u062A\u0635\u0644 \u0628\u0646\u0627'
            )
        )
    );
};
exports.default = Header;