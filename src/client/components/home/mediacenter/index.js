import React, {Component} from 'react';

import NewsBox from './newsbox/index'
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
                    <NewsBox />
                    <NewsBox />
                    <NewsBox />

                </div>
            </div>
        );
    }
}

export default MediaCenter;