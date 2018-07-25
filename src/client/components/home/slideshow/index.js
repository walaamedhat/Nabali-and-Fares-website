import React, { Component } from 'react';
import { Fade } from 'react-slideshow-image';
import Slider from "react-slick";
import Header from '../../header';

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
  render(){
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
    return (
      <div style={{position: 'relative' }}>
        <Fade
          images={images}
          duration={3000}
          transitionDuration={1000}
          />
        <div className='slider-header-nav'>
          <Header Logo='./assets/nabali-fares-logo.png' WhereAmI='homepage'/>
        </div>
          <div className='slider-text'>
            <Slider {...settings}>
            <div>
              <h1 className='slider-text-title'>
                هذا النص موجود فقط لتجربة منطقة العنوان الرئيسي
              </h1>
              <h4 className='slider-text-desc'>
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.
              </h4>
              <button className='slider-button'>عرض المزيد <i class="fas fa-arrow-left"></i></button>
            </div>
            <div>
              <h1 className='slider-text-title'>
                هذا النص موجود فقط لتجربة منطقة العنوان الئيسي
              </h1>
              <h4 className='slider-text-desc'>
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.
              </h4>
              <button className='slider-button'>عرض المزيد <i class="fas fa-arrow-left"></i></button>
            </div>
          </Slider>
        </div>
      <div className='slider-circle'>
        <img className='slider-circle-img' src='./assets/circle.png'/>
      </div>
    </div>
    )
  }
}
export default Slideshow;
