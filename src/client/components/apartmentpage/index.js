import React,{ Component } from 'react';

import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

import Header from '../header'

import './index.css'

export default class Apartment extends Component{
    constructor() {
        super();
        this.state = { currentImage: 0 };
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
    }
    openLightbox(event, obj) {
        this.setState({
          currentImage: obj.index,
          lightboxIsOpen: true,
        });
    }
    closeLightbox() {
        this.setState({
          currentImage: 0,
          lightboxIsOpen: false,
        });
    }
    gotoPrevious() {
        this.setState({
          currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext() {
        this.setState({
          currentImage: this.state.currentImage + 1,
        });
    }

    render(){
        return(

            <div className='apartment'>

                <Header Logo='./assets/nabali-fares-colored.png' WhereAmI='ourprojectpage'/>

                <Gallery photos={LIGHTBOX_IMAGE_SET} onClick={this.openLightbox} />

                <Lightbox
                    images={LIGHTBOX_IMAGE_SET}
                    isOpen={this.state.lightboxIsOpen}
                    onClickPrev={this.gotoPrevious}
                    onClickNext={this.gotoNext}
                    onClose={this.closeLightbox}
                />

            </div>

        );
    }
}

const LIGHTBOX_IMAGE_SET = [
        {src: './assets/apartment1.png'},
        {src: './assets/apartment2.png'},
        {src: './assets/apartment3.png'},
        {src: './assets/apartment4.png'}  
  ]