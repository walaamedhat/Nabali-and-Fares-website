import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RingLoader } from 'react-spinners';
import PropTypes from 'prop-types';
import { Fade } from 'react-slideshow-image';
import Slider from "react-slick";
import Header from '../../header';
import allNews from '../../../actions/getAllNewsAction';

import './index.css';

const images = [
  './assets/1.png',
  './assets/2.jpg'
];
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

class Slideshow extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
      const { allNews } = this.props;
      allNews('lastnews');
  }

  view = (e)=> {
    console.log(e.target.id,'e.target.id');
    this.props.props.history.push(`/post/${e.target.id}`);
  }

  render(){
    const {news , isFetching} = this.props;
    var settings = {
     dots: true,
     dotsClass: "slick-dots slick-thumb",
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 4000,
     nextArrow: <SampleNextArrow />,
     prevArrow: <SamplePrevArrow />
   };
   console.log(this.props.data,'this.props.data in slideshow');
    return (
      <div style={{position: 'relative' }}>
        <Fade
          images={images}
          duration={3000}
          transitionDuration={1000}
          />
        <div className='slider-header-nav'>
          <Header Logo='./assets/nabali-fares-colored.png' WhereAmI='homepage'/>
        </div>
          <div className='slider-text'>
            <Slider {...settings}>
            {
              isFetching || news.length==0 ?
              <center style={{marginBottom:'10px'}}><RingLoader width='150' height='7' color='4A90E2'/></center>
              :

                news.map(e=> {
                  return(
                    <div dir='rtl'>
                      <h1 className='slider-text-title'>
                        {e.name.substring(0, 50)}   ....
                      </h1>
                      <h4 className='slider-text-desc'>
                        {e.discription.substring(0, 151)}  .....
                      </h4>
                      <button id={e._id} onClick={this.view} className='slider-button'>عرض المزيد <i class="fas fa-arrow-left"></i></button>
                    </div>

                  )
                })
              }
          </Slider>
        </div>
      <div className='slider-circle'>
        <img className='slider-circle-img' src='./assets/circle.png'/>
      </div>
    </div>
    )
  }
}

Slideshow.propTypes = {
    allNews: PropTypes.func
}
const mapStateToProps = state =>{
    return{
      news : state.allNews.newsData,
      isFetching : state.allNews.isFetching
    }
}

const mapDispatchToProps = {
    allNews
}


export default connect(mapStateToProps,mapDispatchToProps)(Slideshow);
