import React, { Component } from 'react';



class AllComments extends Component{
  render() {
    return (
      <div className='comments-section'>
        <div className='comments-image'>
          <img style={{ width:'77px' }} src='./assets/mark.jpg'/>
        </div>
        <div className='comments-details'>
          <div className='name-date'>
            <h3>مصطفى محمد</h3>
            <h5>منذ يوم واحد</h5>
          </div>
          <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها</p>
        </div>
      </div>
    );
  }
}


export default AllComments;
