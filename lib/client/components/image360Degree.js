'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactPannellum = require('360-react-pannellum');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // import React from 'react';
//
// import {
//   AppRegistry,
//   View,
//   Pano
// } from 'react-vr';
//
//
//
// export default class PanoramaImage extends React.Component {
//
//   constructor() {
//     super();
//
//     this.state = {
//       src: 'reactconf_00.jpg',
//     };
//   }
//
//   render() {
//     return (
//       <View>
//         <Pano source={{uri :'https://www.google.ps/search?q=360+degree+photo&tbm=isch&tbo=u&source=univ&sa=X&ved=0ahUKEwjnjNvxprjcAhUCJFAKHey8Cw0QsAQIJA&biw=1299&bih=648#imgrc=AM8IWZj4ACKRTM:'}}/>
//       </View>
//     );
//   }
// };
//
// AppRegistry.registerComponent('PanoramaImage', () => PanoramaImage);


var Example = function (_Component) {
  _inherits(Example, _Component);

  function Example() {
    _classCallCheck(this, Example);

    return _possibleConstructorReturn(this, (Example.__proto__ || Object.getPrototypeOf(Example)).apply(this, arguments));
  }

  _createClass(Example, [{
    key: 'render',
    value: function render() {
      _react2.default.createElement(_reactPannellum.Pannellum, {
        width: '100%',
        height: '200px',
        imagePath: 'https://pannellum.org/images/alma.jpg',
        isDisplayCloseButton: true,
        closeButtonTitle: 'Close',
        showZoomCtrl: false,
        showFullscreenCtrl: false,
        autoLoad: true });
    }
  }]);

  return Example;
}(_react.Component);

exports.default = Example;