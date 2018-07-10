import React, { Component } from 'react';




class ContactUsInfo extends Component {
  render () {
    return (
        <div className='contactUs-content'>
          <div className='content-raightSection'>
            <div className='right-input'>
              <h1 style={{ color:'#475669',fontSize: '24px',fontWeight: '700',paddingTop:'10px'}}>أرسل لنا تعليق</h1>

              <label className='contactUs-label'>الإسم الأول</label>
              <input type='text' placeholder='يرجى كتابة إسمك الأول' className='contactUs-input'/>

              <label className='contactUs-label'>رقم الهاتف المحمول</label>
              <input type='text' placeholder='يرجى كتابة رقمك صحيحاً لتسهيل التواصل معك' className='contactUs-input'/>

              <label className='contactUs-label'>حسابك على فيس بوك</label>
              <input type='url' placeholder='facebook.com/example' className='contactUs-input'/>
            </div>
            <div className='left-input'>

              <label className='contactUs-label'>الإسم الأخير</label>
              <input type='text' placeholder='يرجى كتابة إسمك الاخير (العائلة)' className='contactUs-input'/>

              <label className='contactUs-label'>البريد الإلكتروني</label>
              <input type='email' placeholder='name@domain.com' className='contactUs-input'/>

              <label className='contactUs-label'>حسابك على إنستاجرام</label>
              <input type='url' placeholder='instagram.com/example' className='contactUs-input'/>

            </div>
            <div className='battom-input'>
              <label className='contactUs-label'>نص الرسالة</label>
              <textarea className='contactUs-textarea'/>
              <button type='submit' className='sendComment'>إرسال الرسالة</button>
            </div>
          </div>
          <div className='content-leftSection'>
            <h1 style={{ color:'#475669',fontSize: '24px',fontWeight: '700',paddingTop:'10px'}}>معلومات الإتصال</h1>
            <div>
              <h4 style={{ display: 'flex',justifyContent: 'space-around',width: '100px',color: '#8492a6'}}>
                <img src='./assets/markerImg.png'/>    العنوان
              </h4>
              <h4 style={{ color: '#475669' }}>234 شارع فلان الفلاني الحي الرئيسي المدينة الرئيسية</h4>
            </div>
            <div>
              <h4 style={{ display: 'flex',justifyContent: 'space-around',width: '117px',color: '#8492a6'}}>
                <img src='./assets/phone.png'/> رقم الهاتف
              </h4>
              <h4 style={{ color: '#475669' }}>00970599123456</h4>

            </div>
            <div>
              <h4 style={{ display: 'flex',justifyContent: 'space-around',width: '148px',color: '#8492a6'}}>
                <img src='./assets/email.png'/> البريد الإلكتروني
              </h4>
              <h4 style={{ color: '#475669' }}>info@nabalifares.ps</h4>

            </div>
            <div style={{ width: '325px'}}>
              <h4 style={{ display: 'flex',justifyContent: 'space-around',width: '184px',color: '#8492a6'}}>
                <img src='./assets/clock.png'/> ساعات الدوام الرسمي
              </h4>
              <h4 style={{ color: '#475669' }}>يومياً عد الجمعة والسبت من الساعة 9 صباحاً وحتى الساعة 5 مساءً والعطل الرسمية في البلاد</h4>
            </div>
          </div>

        </div>
    );
  }
}

export default ContactUsInfo;
