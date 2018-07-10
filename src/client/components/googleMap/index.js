import _ from "lodash";
import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyAI_W1MJfpLe8m88PQxiWMfRywyMzEI77g&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
  containerElement: <div style={{ height: `500px` }} />,
mapElement: <div style={{ height: `100%` }} />
}),
withScriptjs,
withGoogleMap
)(props => (
  <GoogleMap defaultZoom={12} defaultCenter={{ lat: 31.898043, lng: 35.204269 }}>
    <Marker position={{ lat: 31.898043, lng: 35.204269 }} />
    <Marker position={{ lat: 31.898043, lng: 35.204269 }} />
  </GoogleMap>
));

const enhance = _.identity;

const ReactGoogleMaps = () => [
  <MyMapComponent key="map" />
];

export default enhance(ReactGoogleMaps);









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
