'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OurApps = function OurApps() {
    return _react2.default.createElement(
        'div',
        { className: 'ourapps' },
        _react2.default.createElement(
            'div',
            { className: 'ourapps_text' },
            _react2.default.createElement(
                'div',
                { className: 'ourapps__text0' },
                '\u062D\u0645\u0644 \u062A\u0637\u0628\u064A\u0642\u0627\u062A\u0646\u0627'
            ),
            _react2.default.createElement(
                'div',
                { className: 'ourapps__text1' },
                '\u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u0646\u0628\u0627\u0644\u064A \u0648\u0627\u0644\u0641\u0627\u0631\u0633 \u0644\u0644\u0639\u0642\u0627\u0631\u0627\u062A'
            ),
            _react2.default.createElement(
                'div',
                { className: 'ourapps__text2' },
                '\u0627\u0644\u0622\u0646 \u0627\u0635\u0628\u062D \u0628\u0627\u0645\u0643\u0627\u0646\u0643\u0645 \u062A\u0646\u0632\u064A\u0644 \u0627\u0648\u0644 \u062A\u0637\u0628\u064A\u0642 \u0639\u0642\u0627\u0631\u064A \u0645\u062A\u062E\u0635\u0635 \u0641\u064A \u0641\u0644\u0633\u0637\u064A\u0646 \u0644\u0645\u062A\u0627\u0628\u0639\u0629 \u0627\u0644\u0639\u0631\u0648\u0636 \u0648\u0627\u0644\u062D\u0645\u0644\u0627\u062A.'
            ),
            _react2.default.createElement(
                'div',
                { className: 'ourapps_buttons' },
                _react2.default.createElement(
                    'div',
                    { className: 'ourapps__iosbtn' },
                    _react2.default.createElement(
                        'span',
                        null,
                        '\u0645\u062A\u062C\u0631'
                    ),
                    _react2.default.createElement(
                        'span',
                        null,
                        'App store'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'ourapps__androidbtn' },
                    _react2.default.createElement(
                        'span',
                        null,
                        '\u0645\u062A\u062C\u0631'
                    ),
                    _react2.default.createElement(
                        'span',
                        null,
                        'Google Play'
                    )
                )
            )
        ),
        _react2.default.createElement('img', { className: 'ourapps__mobilephoto', src: './assets/mobile.png' })
    );
};

exports.default = OurApps;