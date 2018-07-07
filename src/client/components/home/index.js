import React, {Component} from 'react';

import Header from '../header';
import NewProjects from '../newprojects'
import FeaturedProjects from '../featuredprojects'
import MediaCenter from '../mediacenter'
const images = ['./assets/1.png', './assets/2.jpg'];

import './index.css';

class Home extends Component {
    render(){
        return(
            <div>
            <Header />
            <NewProjects />
            <FeaturedProjects />
            <MediaCenter />
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
   

