import React,{Component} from 'react';
import Header from '../header'
// import NewsBox from '../home/mediacenter/newsbox/index.js';

import './index.css';
class MediaCenterPage extends Component {
    render(){
        return(
            <div>
                <Header Logo='./assets/nabali-fares-colored.png'/>
                <div className='mediacenterpage__nav'>
                    <span>المركز الإعلامي</span>
                    <span>ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى</span>
                </div>
              {/*
              <NewsBox />
                <NewsBox />
                <NewsBox />
*/}
            </div>

        );
    }
}

export default MediaCenterPage;