import React, {Component} from 'react';
import Slideshow from './slideshow';
import Map from './mapSection';
// var Slideshow = require('react-slidez');


import './index.css';

class Home extends Component {
    render(){
        return(
            <div className='home-component'>
            <Slideshow/>
            <Map/>
        </div>
        )
    }
}

export default Home;
