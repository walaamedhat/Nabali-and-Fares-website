import React, {Component} from 'react';
const Slideshow = require('react-slidez');
const images = ['./assets/1.png', './assets/2.jpg'];


class Slider extends Component {
    render(){
        return(
            <div>
                <Slideshow
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
                />
            </div>
        )
    }
}

export default Slider;