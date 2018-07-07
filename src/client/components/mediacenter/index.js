import React, {Component} from 'react';

import './index.css'

class MediaCenter extends Component{
    render(){
        return(
            <div className='mediacenter'>
                <div className='mediacenter__top'>
                    <span className='mediacenter__top__righttext'>المركز الإعلامي</span>
                    <span className='mediacenter__top__lefttext'>عرض كل الأخبار</span>
                </div>
                <div className='mediacenter__bottom'>
                    <div className='mediacenter__bottom__box'>
                        <img src='./assets/arch.png'/>
                        <div className='mediacenter__bottom__icon'>
                            <img src='./assets/calender.png'/>
                            <span>قبل 5 دقائق</span>
                            <img src='./assets/flag.png'/>
                            <span>خبر</span>
                        </div>
                        <div className='mediacenter__bottom__title'>عنوان الخبر او المقال هنا</div>
                        <p className='mediacenter__bottom__p'>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.</p>
                        <div className='mediacenter__bottom__readmore'>
                        إقرأ المزيد
                            <span><i class="fas fa-arrow-left"></i></span>
                        </div>
                    </div>
                    <div className='mediacenter__bottom__box'></div>
                    <div className='mediacenter__bottom__box'></div>
                </div>
            </div>
        );
    }
}

export default MediaCenter;