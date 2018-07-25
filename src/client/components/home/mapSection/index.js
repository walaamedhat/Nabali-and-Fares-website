import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster';

export default class SimpleExample extends Component {
  state = {
    lat: 31.898043, lng: 35.204269,
    zoom: 12,
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map className='markercluster-map' center={position} zoom={this.state.zoom} style={{height:'431px'}}>

        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        <MarkerClusterGroup>
          <Marker position={position}>
            <Popup>
              مشروع ديماس
            </Popup>
          </Marker>
          <Marker position={[31.910991,35.221865]}>
            <Popup>
              مشروع اربيل
            </Popup>
          </Marker>
          <Marker position={[31.9063877,35.1897308]}>
            <Popup>
              مشروع قصر بابل
            </Popup>
          </Marker>
        </MarkerClusterGroup>

      </Map>
    )
  }
}
