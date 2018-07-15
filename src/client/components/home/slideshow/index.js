import React, { Component } from 'react';
import { Fade } from 'react-slideshow-image';
import Header from '../../header';

import './index.css';

const images = [
  './assets/1.png',
  './assets/2.jpg'
];

class Slideshow extends Component {
  render(){
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
          <h1 className='slider-text-title'>
            هذا النص موجود فقط لتجربة منطقة العنوان الئيسي
          </h1>
          <h4 className='slider-text-desc'>
            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.
          </h4>
          <button className='slider-button'>عرض المزيد <i class="fas fa-arrow-left"></i></button>
      </div>
      <div className='slider-circle'>
        <img className='slider-circle-img' src='./assets/circle.png'/>
      </div>
    </div>
    )
  }
}
export default Slideshow;
