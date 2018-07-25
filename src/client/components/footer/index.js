import React, { Component } from 'react';


import './index.css'

class Footer extends Component {
  render(){
    return (
      <div className='footer' id='aboutUs'>
        <div className='footer-rightSection'>
          <img src='../assets/nabali-fares-logo.png'/>
          <p className='rightSection-paragraph' >
            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها

            جميع الحقوق محفوظة لشركة النبيالي والفارس
          </p>
        </div>
        <div className='footer-leftSection'>
          <div>
            <h3 className='grey-h3'>الشركة</h3>
            <h3 className='white-h3'>الرئيسية</h3>
            <h3 className='white-h3'>عن الشركة</h3>
            <h3 className='white-h3'>مشاريعنا</h3>
            <h3 className='white-h3'>المركز الاعلامي</h3>
          </div>
          <div style={{ paddingLeft:'33px' }}>
            <h3 className='grey-h3'>روابط</h3>
            <h3 className='white-h3'>من نحن</h3>
            <h3 className='white-h3'>إتصل بنا</h3>

          </div>
          <div>
            <h3 className='grey-h3'>تواصل معنا</h3>
            <h3 className='white-h3'>تابعنا على الفيس بوك</h3>
            <h3 className='white-h3'>تابعنا على تويتر</h3>
            <h3 className='white-h3'>تابعنا على إنستاجرام</h3>
          </div>

        </div>
      </div>
    )
  }
}



export default Footer;
