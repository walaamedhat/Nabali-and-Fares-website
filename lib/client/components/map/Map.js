'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLeaflet = require('react-leaflet');

var _reactLeafletMarkercluster = require('react-leaflet-markercluster');

var _reactLeafletMarkercluster2 = _interopRequireDefault(_reactLeafletMarkercluster);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyMap = function (_Component) {
  _inherits(MyMap, _Component);

  function MyMap() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MyMap);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MyMap.__proto__ || Object.getPrototypeOf(MyMap)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      lat: 31.898043, lng: 35.204269,
      zoom: 12
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MyMap, [{
    key: 'render',
    value: function render() {
      console.log(this.props, 'prooooops');
      var position = [this.state.lat, this.state.lng];

      return _react2.default.createElement(
        _reactLeaflet.Map,
        { className: 'markercluster-map', center: position, zoom: this.state.zoom, style: { height: this.props.height } },
        _react2.default.createElement(_reactLeaflet.TileLayer, {
          attribution: '&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
          url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        }),
        _react2.default.createElement(
          _reactLeafletMarkercluster2.default,
          null,
          this.props.data.length == 0 ? _react2.default.createElement(
            'div',
            null,
            '...Loading'
          ) : this.props.data.map(function (e) {

            return _react2.default.createElement(
              _reactLeaflet.Marker,
              { position: position },
              _react2.default.createElement(
                _reactLeaflet.Popup,
                null,
                e.name
              )
            );
          })
        )
      );
    }
  }]);

  return MyMap;
}(_react.Component);

exports.default = MyMap;