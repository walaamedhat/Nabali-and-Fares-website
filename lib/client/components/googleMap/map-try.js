// import React, { Component } from "react";
// import {
//   Map,
//   InfoWindow,
//   Marker,
//   GoogleApiWrapper
// } from "google-maps-react";
//
// export class MyMap extends Component{
//   render() {
//     return (
//       <Map google={this.props.google} zoom={14}>
//         <Marker onClick={this.onMarkerClick} name={'Current Location'} />
//           <InfoWindow onClose={this.onInfoWindowClose}>
//
//           </InfoWindow>
//
//       </Map>
//     );
//   }
// }
// export default GoogleApiWrapper({
//   apiKey: ('AIzaSyAI_W1MJfpLe8m88PQxiWMfRywyMzEI77g')
// })(MyMap);

///////////////////////////////////////////////////////////////////////////////////////////////


// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';
//
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
//
// class Map extends Component {
//   static defaultProps = {
//     center: {
//       lat: 59.95,
//       lng: 30.33
//     },
//     zoom: 11
//   };
//
//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: '100vh', width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: 'AIzaSyAI_W1MJfpLe8m88PQxiWMfRywyMzEI77g' }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <AnyReactComponent
//             lat={59.955413}
//             lng={30.337844}
//             text={'Kreyser Avrora'}
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }
//
// export default Map;

///////////////////////////////////////////////////////////////////////////////////////

// import _ from "lodash";
// import React from "react";
// import { compose, withProps } from "recompose";
// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker
// } from "react-google-maps";
//
// const MyMapComponent = compose(
//   withProps({
//     googleMapURL:
//       "https://maps.googleapis.com/maps/api/js?key=AIzaSyAI_W1MJfpLe8m88PQxiWMfRywyMzEI77g&v=3.exp&libraries=geometry,drawing,places",
//     loadingElement: <div style={{ height: `100%` }} />,
//   containerElement: <div style={{ height: `500px` }} />,
//     mapElement: <div style={{ height: `100%` }} />
//   }),
//   withScriptjs,
//   withGoogleMap
// )(props => (
//   <GoogleMap defaultZoom={12} defaultCenter={{ lat: 31.898043, lng: 35.204269 }}>
//     <Marker position={{ lat: 31.898043, lng: 35.204269 }} />
//     <Marker position={{ lat: 31.898043, lng: 35.204269 }} />
//   </GoogleMap>
// ));
//
// const enhance = _.identity;
//
// const ReactGoogleMaps = () => [
//   <MyMapComponent key="map" />
// ];
//
// export default enhance(ReactGoogleMaps);
"use strict";