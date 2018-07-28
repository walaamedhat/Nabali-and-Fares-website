'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectSection = function (_Component) {
    _inherits(ProjectSection, _Component);

    function ProjectSection(props) {
        _classCallCheck(this, ProjectSection);

        var _this = _possibleConstructorReturn(this, (ProjectSection.__proto__ || Object.getPrototypeOf(ProjectSection)).call(this, props));

        _this.view = function (e) {
            _this.props.props.history.push('/project/' + e.target.id);
        };

        return _this;
    }

    _createClass(ProjectSection, [{
        key: 'render',
        value: function render() {
            var data = this.props.data;
            var description = data.description.substring(0, 151);
            return _react2.default.createElement(
                'div',
                { dir: 'rtl', className: 'newprojects__project' },
                _react2.default.createElement('img', { src: data.images[0] }),
                _react2.default.createElement(
                    'div',
                    { className: 'project__title' },
                    data.name
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    description,
                    '....'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'newprojects__project__contents' },
                    _react2.default.createElement(
                        'div',
                        { className: 'newprojects__project__col1' },
                        _react2.default.createElement(
                            'div',
                            { className: 'rooms' },
                            _react2.default.createElement('img', { src: './assets/rooms.png' }),
                            _react2.default.createElement(
                                'span',
                                null,
                                '\u063A\u0631\u0641'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'bathrooms' },
                            _react2.default.createElement('img', { src: './assets/bathroom.png' }),
                            _react2.default.createElement(
                                'span',
                                null,
                                '\u062D\u0645\u0627\u0645\u0627\u062A'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'kitchen' },
                            _react2.default.createElement('img', { src: './assets/kitchen.png' }),
                            _react2.default.createElement(
                                'span',
                                null,
                                '\u0645\u0637\u0628\u062E'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'newprojects__project__col2' },
                        _react2.default.createElement(
                            'div',
                            { className: 'tennis' },
                            _react2.default.createElement('img', { src: './assets/tennis.png' }),
                            _react2.default.createElement(
                                'span',
                                null,
                                '\u0646\u0648\u0627\u062F\u064A \u0631\u064A\u0627\u0636\u064A\u0629'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'swimming' },
                            _react2.default.createElement('img', { src: './assets/swimming.png' }),
                            _react2.default.createElement(
                                'span',
                                null,
                                '\u0645\u0633\u0627\u0628\u062D'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'gardens' },
                            _react2.default.createElement('img', { src: './assets/gardens.png' }),
                            _react2.default.createElement(
                                'span',
                                null,
                                '\u062D\u062F\u0627\u0626\u0642'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/project/' + ('' + data._id) },
                    _react2.default.createElement(
                        'div',
                        { className: 'newprojects__project__seemore', id: data._id },
                        '\u0639\u0631\u0636 \u0627\u0644\u0645\u0632\u064A\u062F',
                        _react2.default.createElement(
                            'span',
                            null,
                            _react2.default.createElement('i', { 'class': 'fas fa-arrow-left' })
                        )
                    )
                )
            );
        }
    }]);

    return ProjectSection;
}(_react.Component);

exports.default = ProjectSection;