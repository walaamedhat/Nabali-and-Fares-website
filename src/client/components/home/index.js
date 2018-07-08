import React, {Component} from 'react';

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
            <div>
            <Header Logo='./assets/nabali-fares-logo.png'/>
            <NewProjects />
            <FeaturedProjects />
            <MediaCenter />
            <OurApps />
            {/* <Slideshow
                showIndex
                showArrows
                autoplay
                enableKeyboard
                useDotIndex
                slideInterval={2000}
                defaultIndex={1}
                slides={images}
                effect={'fade'}
                height={'100%'}
                width={'100%'}
            /> */}
        </div>
        )
    }
} 

export default Home;
   

