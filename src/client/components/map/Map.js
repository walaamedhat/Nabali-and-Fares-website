import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster';

export default class MyMap extends Component {
  state = {
    lat: 31.898043, lng: 35.204269,
    zoom: 12,
  }

  render() {
    console.log(this.props,'prooooops');
    const position = [this.state.lat, this.state.lng];

    return (
      <Map className='markercluster-map' center={position} zoom={this.state.zoom} style={{height:this.props.height}}>

        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        <MarkerClusterGroup>
          {
            this.props.data.length==0 ? <div>...Loading</div>
            :

              this.props.data.map(e => {

                return (
                  <Marker position={position}>
                    <Popup>
                    {e.name}
                    </Popup>
                  </Marker>
                )
              })
          }

        </MarkerClusterGroup>

      </Map>
    )
  }
}
