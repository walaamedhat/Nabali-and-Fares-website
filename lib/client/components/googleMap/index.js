"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _recompose = require("recompose");

var _reactGoogleMaps = require("react-google-maps");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MyMapComponent = (0, _recompose.compose)((0, _recompose.withProps)({
  googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAI_W1MJfpLe8m88PQxiWMfRywyMzEI77g&v=3.exp&libraries=geometry,drawing,places",
  loadingElement: _react2.default.createElement("div", { style: { height: "100%" } }),
  containerElement: _react2.default.createElement("div", { style: { height: "500px" } }),
  mapElement: _react2.default.createElement("div", { style: { height: "100%" } })
}), _reactGoogleMaps.withScriptjs, _reactGoogleMaps.withGoogleMap)(function (props) {
  return _react2.default.createElement(
    _reactGoogleMaps.GoogleMap,
    { defaultZoom: 12, defaultCenter: { lat: 31.898043, lng: 35.204269 } },
    _react2.default.createElement(_reactGoogleMaps.Marker, { position: { lat: 31.898043, lng: 35.204269 } }),
    _react2.default.createElement(_reactGoogleMaps.Marker, { position: { lat: 31.898043, lng: 35.204269 } })
  );
});

var enhance = _lodash2.default.identity;

var ReactGoogleMaps = function ReactGoogleMaps() {
  return [_react2.default.createElement(MyMapComponent, { key: "map" })];
};

exports.default = enhance(ReactGoogleMaps);

// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';
// import { Marker } from "react-google-maps";
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
//
// class Map extends Component {
//   static defaultProps = {
//     center: {
//        lat: 31.898043, lng: 35.204269
//     },
//     zoom: 12
//   };
//
//   render() {
//     return (
//       <div style={{ height: '100vh', width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: 'AIzaSyAI_W1MJfpLe8m88PQxiWMfRywyMzEI77g' }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }
//
// export default Map;