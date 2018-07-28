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

var _getProjectData = require('../../actions/getProjectData');

var _getProjectData2 = _interopRequireDefault(_getProjectData);

var _index = require('../header/index');

var _index2 = _interopRequireDefault(_index);

var _feature = require('./feature');

var _feature2 = _interopRequireDefault(_feature);

var _reactPlayer = require('react-player');

var _reactPlayer2 = _interopRequireDefault(_reactPlayer);

var _Map = require('../map/Map');

var _Map2 = _interopRequireDefault(_Map);

var _Gallary = require('../Gallary');

var _Gallary2 = _interopRequireDefault(_Gallary);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectPage = function (_Component) {
    _inherits(ProjectPage, _Component);

    function ProjectPage(props) {
        _classCallCheck(this, ProjectPage);

        var _this = _possibleConstructorReturn(this, (ProjectPage.__proto__ || Object.getPrototypeOf(ProjectPage)).call(this, props));

        _this.state = {
            run: false,
            controled: false
        };
        _this.runOrPauseVideo = _this.runOrPauseVideo.bind(_this);
        return _this;
    }

    _createClass(ProjectPage, [{
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
            var projectData = this.props.projectData;

            projectData(this.props.match.params.project_id);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                isFetching = _props.isFetching,
                data = _props.data;

            console.log(data[0], 'data');
            return _react2.default.createElement(
                'div',
                { className: 'pojectpage' },
                _react2.default.createElement(_index2.default, { Logo: '../assets/nabali-fares-colored.png', WhereAmI: 'ourprojectpage' }),
                isFetching || data.length === 0 ? _react2.default.createElement('div', null) : _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_Gallary2.default, { images: data[0].images }),
                    _react2.default.createElement(
                        'div',
                        { className: 'projectpage__details' },
                        _react2.default.createElement(
                            'div',
                            { className: 'projectpage__row1' },
                            _react2.default.createElement(
                                'h1',
                                { className: 'project__page__projecttitle' },
                                data[0].name
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'project__page__street' },
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    data[0].address[0]
                                ),
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    data[0].address[1],
                                    ' - ',
                                    data[0].address[2]
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'projectpage__row2' },
                            _react2.default.createElement(
                                'div',
                                null,
                                '\u0648\u0635\u0641 \u0627\u0644\u0645\u0634\u0631\u0648\u0639'
                            ),
                            _react2.default.createElement(
                                'div',
                                null,
                                data[0].description
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'projectpage__row3' },
                            _react2.default.createElement(
                                'div',
                                null,
                                '\u0645\u0645\u064A\u0632\u0627\u062A \u0627\u0644\u0645\u0634\u0631\u0648\u0639'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'projectpage__features' },
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    data[0].features
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'projectpage__CompFeature' },
                                    _react2.default.createElement(_feature2.default, { Image: '../assets/rooms.png', Title: '\u063A\u0631\u0641', Paragraph: '\u0628\u0628\u0633\u0627\u0637\u0629 \u0646\u0635 \u0634\u0643\u0644\u064A \u0628\u0645\u0639\u0646\u0649 \u0623\u0646 \u0627\u0644\u063A\u0627\u064A\u0629 \u0647\u064A \u0627\u0644\u0634\u0643\u0644 \u0648\u0644\u064A\u0633 \u0627\u0644\u0645\u062D\u062A\u0648\u0649' }),
                                    _react2.default.createElement(_feature2.default, { Image: '../assets/tennis.png', Title: '\u0646\u0648\u0627\u062F\u064A \u0631\u064A\u0627\u0636\u064A\u0629', Paragraph: '\u0628\u0628\u0633\u0627\u0637\u0629 \u0646\u0635 \u0634\u0643\u0644\u064A \u0628\u0645\u0639\u0646\u0649 \u0623\u0646 \u0627\u0644\u063A\u0627\u064A\u0629 \u0647\u064A \u0627\u0644\u0634\u0643\u0644 \u0648\u0644\u064A\u0633 \u0627\u0644\u0645\u062D\u062A\u0648\u0649' }),
                                    _react2.default.createElement(_feature2.default, { Image: '../assets/kitchen.png', Title: '\u0645\u0637\u0628\u062E', Paragraph: '\u0628\u0628\u0633\u0627\u0637\u0629 \u0646\u0635 \u0634\u0643\u0644\u064A \u0628\u0645\u0639\u0646\u0649 \u0623\u0646 \u0627\u0644\u063A\u0627\u064A\u0629 \u0647\u064A \u0627\u0644\u0634\u0643\u0644 \u0648\u0644\u064A\u0633 \u0627\u0644\u0645\u062D\u062A\u0648\u0649' }),
                                    _react2.default.createElement(_feature2.default, { Image: '../assets/gardens.png', Title: '\u062D\u062F\u0627\u0626\u0642', Paragraph: '\u0628\u0628\u0633\u0627\u0637\u0629 \u0646\u0635 \u0634\u0643\u0644\u064A \u0628\u0645\u0639\u0646\u0649 \u0623\u0646 \u0627\u0644\u063A\u0627\u064A\u0629 \u0647\u064A \u0627\u0644\u0634\u0643\u0644 \u0648\u0644\u064A\u0633 \u0627\u0644\u0645\u062D\u062A\u0648\u0649' }),
                                    _react2.default.createElement(_feature2.default, { Image: '../assets/bathroom.png', Title: '\u062D\u0645\u0627\u0645\u0627\u062A', Paragraph: '\u0628\u0628\u0633\u0627\u0637\u0629 \u0646\u0635 \u0634\u0643\u0644\u064A \u0628\u0645\u0639\u0646\u0649 \u0623\u0646 \u0627\u0644\u063A\u0627\u064A\u0629 \u0647\u064A \u0627\u0644\u0634\u0643\u0644 \u0648\u0644\u064A\u0633 \u0627\u0644\u0645\u062D\u062A\u0648\u0649' }),
                                    _react2.default.createElement(_feature2.default, { Image: '../assets/swimming.png', Title: '\u0645\u0633\u0627\u0628\u062D', Paragraph: '\u0628\u0628\u0633\u0627\u0637\u0629 \u0646\u0635 \u0634\u0643\u0644\u064A \u0628\u0645\u0639\u0646\u0649 \u0623\u0646 \u0627\u0644\u063A\u0627\u064A\u0629 \u0647\u064A \u0627\u0644\u0634\u0643\u0644 \u0648\u0644\u064A\u0633 \u0627\u0644\u0645\u062D\u062A\u0648\u0649' })
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'projectpage__row4' },
                            _react2.default.createElement(
                                'div',
                                null,
                                '\u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u0634\u0642\u0642 \u0641\u064A \u0627\u0644\u0645\u0634\u0631\u0648\u0639'
                            ),
                            _react2.default.createElement(
                                'div',
                                null,
                                data[0].typesOfApartments.map(function (e) {
                                    return _react2.default.createElement(
                                        'a',
                                        { href: '#' },
                                        _react2.default.createElement(
                                            'span',
                                            null,
                                            ' ',
                                            e
                                        )
                                    );
                                })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'projectpage__row5' },
                            _react2.default.createElement(
                                'div',
                                null,
                                '\u0641\u064A\u062F\u064A\u0648 \u0627\u0644\u0645\u0634\u0631\u0648\u0639'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'projectpage__row5__video', onClick: this.runOrPauseVideo },
                                !this.state.controled && _react2.default.createElement('input', { className: 'projectpage__runvideobutton' }),
                                _react2.default.createElement(_reactPlayer2.default, { url: [{ src: data[0].videoUrl, type: 'video/webm' }],
                                    youtubeConfig: { playerVars: { showinfo: 1 } },
                                    playing: this.state.run, controls: this.state.controled })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'prjectpage__panorama' },
                        _react2.default.createElement('img', { style: { width: '100%', height: '360px' }, src: data[0].images[0] })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'prjectpage__map', style: { display: 'flex', height: '360px', justifyContent: 'space-evenly', color: '#8492a6', marginBottom: '114px', marginTop: '35px' } },
                        _react2.default.createElement(
                            'div',
                            { style: { display: 'flex', width: '30%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' } },
                            _react2.default.createElement(
                                'h1',
                                null,
                                '\u0645\u0643\u0627\u0646 \u0627\u0644\u0645\u0634\u0631\u0648\u0639'
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: { display: 'flex', width: '100%', justifyContent: 'space-around' } },
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'h5',
                                        null,
                                        '\u0627\u0644\u0634\u0627\u0631\u0639'
                                    ),
                                    _react2.default.createElement(
                                        'h5',
                                        null,
                                        '\u0627\u0644\u062D\u064A'
                                    ),
                                    _react2.default.createElement(
                                        'h5',
                                        null,
                                        '\u0627\u0644\u0645\u062F\u064A\u0646\u0629'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'h5',
                                        null,
                                        data[0].address[0]
                                    ),
                                    _react2.default.createElement(
                                        'h5',
                                        null,
                                        data[0].address[1]
                                    ),
                                    _react2.default.createElement(
                                        'h5',
                                        null,
                                        data[0].address[2]
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { style: { width: '50%' } },
                            _react2.default.createElement(_Map2.default, { height: '360px', data: data })
                        )
                    )
                )
            );
        }
    }]);

    return ProjectPage;
}(_react.Component);

ProjectPage.propTypes = {
    projectData: _propTypes2.default.func
};
var mapStateToProps = function mapStateToProps(state) {
    return {
        data: state.projectData.projectData,
        isFetching: state.projectData.isFetching
    };
};

var mapDispatchToProps = {
    projectData: _getProjectData2.default
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProjectPage);