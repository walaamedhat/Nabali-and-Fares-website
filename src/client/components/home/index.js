import React, {Component} from 'react';

import Slideshow from './slideshow';
import Map from './mapSection';
import Header from '../header';
import NewProjects from './newprojects'
import FeaturedProjects from './featuredprojects'
import MediaCenter from './mediacenter'
const images = ['./assets/1.png', './assets/2.jpg'];


import './index.css';
import OurApps from './ourapps';

class Home extends Component {
    render(){
        return(
          <div className='home-component'>
            <Header Logo='./assets/nabali-fares-logo.png' WhereAmI='homepage'/>
            <Slideshow/>
            <Map/>
            <NewProjects />
            <FeaturedProjects />
            <MediaCenter />
            <OurApps />
          </div>
        )
    }
}

export default Home;
