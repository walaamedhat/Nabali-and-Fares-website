'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lightboxReact = require('lightbox-react');

var _lightboxReact2 = _interopRequireDefault(_lightboxReact);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Gallary = function (_Component) {
  _inherits(Gallary, _Component);

  function Gallary(props) {
    _classCallCheck(this, Gallary);

    var _this = _possibleConstructorReturn(this, (Gallary.__proto__ || Object.getPrototypeOf(Gallary)).call(this, props));

    _this.state = {
      images: props.images || [],
      photoIndex: 0,
      isOpen: false

    };

    return _this;
  }

  _createClass(Gallary, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var images = this.props.images;
      var length = images.length - 5;
      var _state = this.state,
          photoIndex = _state.photoIndex,
          isOpen = _state.isOpen;

      return _react2.default.createElement(
        'div',
        null,
        images.length > 4 ? _react2.default.createElement(
          'div',
          { className: 'porjectpage__images' },
          _react2.default.createElement('img', { className: 'porjectpage__images__img', src: this.props.images[0], onClick: function onClick() {
              return _this2.setState({ isOpen: true });
            } }),
          _react2.default.createElement(
            'div',
            { className: 'projectpage__4image' },
            _react2.default.createElement('img', { src: this.props.images[1], onClick: function onClick() {
                return _this2.setState({ isOpen: true });
              } }),
            _react2.default.createElement('img', { src: this.props.images[2], onClick: function onClick() {
                return _this2.setState({ isOpen: true });
              } }),
            _react2.default.createElement('img', { src: this.props.images[3], onClick: function onClick() {
                return _this2.setState({ isOpen: true });
              } }),
            _react2.default.createElement(
              'div',
              { className: 'last_image_container', onClick: function onClick() {
                  return _this2.setState({ isOpen: true });
                } },
              _react2.default.createElement('img', { src: this.props.images[4] }),
              _react2.default.createElement(
                'div',
                { 'class': 'content' },
                _react2.default.createElement(
                  'h1',
                  null,
                  length,
                  '+'
                ),
                _react2.default.createElement(
                  'h4',
                  null,
                  '\u0639\u0631\u0636 \u0627\u0644\u0645\u0632\u064A\u062F \u0645\u0646 \u0627\u0644\u0635\u0648\u0631'
                )
              )
            )
          )
        ) : _react2.default.createElement(
          'div',
          { className: 'porjectpage__images' },
          _react2.default.createElement('img', { style: { width: '100%', height: '360px' }, src: this.props.images[0] })
        ),
        isOpen && _react2.default.createElement(_lightboxReact2.default, {
          mainSrc: images[photoIndex],
          nextSrc: images[(photoIndex + 1) % images.length],
          prevSrc: images[(photoIndex + images.length - 1) % images.length],
          onCloseRequest: function onCloseRequest() {
            return _this2.setState({ isOpen: false });
          },
          onMovePrevRequest: function onMovePrevRequest() {
            return _this2.setState({
              photoIndex: (photoIndex + images.length - 1) % images.length
            });
          },
          onMoveNextRequest: function onMoveNextRequest() {
            return _this2.setState({
              photoIndex: (photoIndex + 1) % images.length
            });
          }
        })
      );
    }
  }]);

  return Gallary;
}(_react.Component);

exports.default = Gallary;

// import PropTypes from 'prop-types';
// import Gallery from 'react-grid-gallery';
//
//
// class Gallary extends Component {
//     constructor(props){
//         super(props)
//     this.state =
//       [{
//       src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//       thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
//       thumbnailWidth: 320,
//       thumbnailHeight: 174,
//       isSelected: true,
//       caption: "After Rain (Jeshu John - designerspics.com)"
//     },
//     {
//       src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
//       thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
//       thumbnailWidth: 320,
//       thumbnailHeight: 212,
//       tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
//       caption: "Boats (Jeshu John - designerspics.com)"
//     },
//
//     {
//       src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
//       thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
//       thumbnailWidth: 320,
//       thumbnailHeight: 212
//     }]
//
// }

//
//     render(){
//
//       return(
//         <Gallery images={this.state}/>
//
//       )
//     }
//
//   }
//
// export default Gallary