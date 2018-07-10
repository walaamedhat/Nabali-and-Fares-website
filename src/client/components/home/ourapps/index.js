import React from 'react';

import './index.css'

const OurApps = () => {
    return(
        <div className='ourapps'>
            <div className='ourapps_text'>
                <div className='ourapps__text0'>حمل تطبيقاتنا</div>
                <div className='ourapps__text1'>
                    تطبيق النبالي والفارس للعقارات
                </div>
                <div className='ourapps__text2'>
                الآن اصبح بامكانكم تنزيل اول تطبيق عقاري متخصص في فلسطين لمتابعة العروض والحملات.
                </div>
                <div className='ourapps_buttons'>
                    <div className='ourapps__iosbtn'>
                        <span>متجر</span>
                        <span>App store</span>
                    </div>
                    <div className='ourapps__androidbtn'>
                        <span>متجر</span>
                        <span>Google Play</span>
                    </div>
                </div>
            </div>
            <img className='ourapps__mobilephoto' src='./assets/mobile.png'/>
        </div>
    );
}

export default OurApps;