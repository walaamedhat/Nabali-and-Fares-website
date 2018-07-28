'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactPhotoGallery = require('react-photo-gallery');

var _reactPhotoGallery2 = _interopRequireDefault(_reactPhotoGallery);

var _reactImages = require('react-images');

var _reactImages2 = _interopRequireDefault(_reactImages);

var _header = require('../header');

var _header2 = _interopRequireDefault(_header);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Apartment = function (_Component) {
    _inherits(Apartment, _Component);

    function Apartment() {
        _classCallCheck(this, Apartment);

        var _this = _possibleConstructorReturn(this, (Apartment.__proto__ || Object.getPrototypeOf(Apartment)).call(this));

        _this.state = { currentImage: 0 };
        _this.closeLightbox = _this.closeLightbox.bind(_this);
        _this.openLightbox = _this.openLightbox.bind(_this);
        _this.gotoNext = _this.gotoNext.bind(_this);
        _this.gotoPrevious = _this.gotoPrevious.bind(_this);
        return _this;
    }

    _createClass(Apartment, [{
        key: 'openLightbox',
        value: function openLightbox(event, obj) {
            this.setState({
                currentImage: obj.index,
                lightboxIsOpen: true
            });
        }
    }, {
        key: 'closeLightbox',
        value: function closeLightbox() {
            this.setState({
                currentImage: 0,
                lightboxIsOpen: false
            });
        }
    }, {
        key: 'gotoPrevious',
        value: function gotoPrevious() {
            this.setState({
                currentImage: this.state.currentImage - 1
            });
        }
    }, {
        key: 'gotoNext',
        value: function gotoNext() {
            this.setState({
                currentImage: this.state.currentImage + 1
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'apartment' },
                _react2.default.createElement(_header2.default, { Logo: './assets/nabali-fares-colored.png', WhereAmI: 'ourprojectpage' }),
                _react2.default.createElement(_reactPhotoGallery2.default, { photos: LIGHTBOX_IMAGE_SET, onClick: this.openLightbox }),
                _react2.default.createElement(_reactImages2.default, {
                    images: LIGHTBOX_IMAGE_SET,
                    isOpen: this.state.lightboxIsOpen,
                    onClickPrev: this.gotoPrevious,
                    onClickNext: this.gotoNext,
                    onClose: this.closeLightbox
                })
            );
        }
    }]);

    return Apartment;
}(_react.Component);

exports.default = Apartment;


var LIGHTBOX_IMAGE_SET = [{ src: './assets/apartment1.png' }, { src: './assets/apartment2.png' }, { src: './assets/apartment3.png' }, { src: './assets/apartment4.png' }];