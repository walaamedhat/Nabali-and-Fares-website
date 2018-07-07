import React, {Component} from 'react';

import Header from '../header/index.js';
import NewProjects from '../newprojects/index.js'
import FeaturedProjects from '../featuredprojects'
const images = ['./assets/1.png', './assets/2.jpg'];

import './index.css';

class Home extends Component {
    render(){
        return(
            <div>
            <Header />
            <NewProjects />
            <FeaturedProjects />
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
   

