import React, { Component } from 'react';


import './index.css';


class Map extends Component {
  render(){
    return(
      <div className='map-section' style={{ position: 'relative' }}>
        <img className='map-img' src='./assets/map.png'/>
        <img className='map-marker' src='./assets/marker.png' style={{ position: 'absolute', left: '200px', top:'63px' }}/>
        <img className='map-marker' src='./assets/marker.png' style={{ position: 'absolute', left: '394px', top:'295px' }}/>

      </div>
    )
  }
}

export default Map;
