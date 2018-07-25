import React, {Component} from "react";
import Lightbox from 'lightbox-react';

import './index.css';

class Gallary extends Component {
    constructor(props){
        super(props);
        this.state = {
            images: props.images || [],
            photoIndex: 0,
            isOpen: false,

        };

      }

      render(){
            let images = this.props.images;
            const length = images.length-5;
            const { photoIndex, isOpen } = this.state;
            return(
              <div>
                {
                  images.length >4 ?
                <div className='porjectpage__images'>
                  <img className='porjectpage__images__img' src={this.props.images[0]} onClick={() => this.setState({ isOpen: true })}/>
                  <div className='projectpage__4image'>
                    <img src={this.props.images[1]} onClick={() => this.setState({ isOpen: true })}/>
                    <img src={this.props.images[2]} onClick={() => this.setState({ isOpen: true })}/>
                    <img src={this.props.images[3]} onClick={() => this.setState({ isOpen: true })}/>
                    <div className='last_image_container' onClick={() => this.setState({ isOpen: true })}>
                      <img src={this.props.images[4]} />
                      <div class="content">
                        <h1>{length}+</h1>
                        <h4>عرض المزيد من الصور</h4>
                      </div>
                    </div>
                  </div>
                </div>
                  :
                  <div className='porjectpage__images'>
                    <img style={{width:'100%',height:'360px'}} src={this.props.images[0]}/>
                  </div>
                }
                {isOpen && (
                  <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => this.setState({ isOpen: false })}
                    onMovePrevRequest={() =>
                      this.setState({
                        photoIndex: (photoIndex + images.length - 1) % images.length,
                      })
                    }
                    onMoveNextRequest={() =>
                      this.setState({
                        photoIndex: (photoIndex + 1) % images.length,
                      })
                    }
                  />
        )}
              </div>
            )

          }
}


export default Gallary;
























// import PropTypes from 'prop-types';
// import Gallery from 'react-grid-gallery';
//
//
// class Gallary extends Component {
//     constructor(props){
//         super(props)
    //     this.state =
    //       [{
    //       src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    //       thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
    //       thumbnailWidth: 320,
    //       thumbnailHeight: 174,
    //       isSelected: true,
    //       caption: "After Rain (Jeshu John - designerspics.com)"
    //     },
    //     {
    //       src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    //       thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
    //       thumbnailWidth: 320,
    //       thumbnailHeight: 212,
    //       tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
    //       caption: "Boats (Jeshu John - designerspics.com)"
    //     },
    //
    //     {
    //       src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    //       thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    //       thumbnailWidth: 320,
    //       thumbnailHeight: 212
    //     }]
    //
    // }

//
//     render(){
//
//       return(
//         <Gallery images={this.state}/>
//
//       )
//     }
//
//   }
//
// export default Gallary
