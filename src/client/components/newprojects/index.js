import React, {Component} from 'react';

import './index.css';

class NewProjects extends Component {
    render(){
        return(
        <div className='newprojects'>
            <div className='newprojects__top'>
                <div className='newprojects__title'>جديد مشاريعنا</div>
                <div className='newprojects__arrows'>
                    <span><i class="fas fa-arrow-right"></i></span>            
                    <span><i class="fas fa-arrow-left"></i></span>
                </div>
            </div>
            <div className='newprojects__down'>
                <div className='newprojects__project'>
                    <img src='./assets/1.png' />
                    <div className='project__title'>مشروع سكاي تاورز</div>
                    <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.</p>

                </div>
                <div className='newprojects__project'></div>
                <div className='newprojects__project'></div>
            </div>

        </div>
        )
    }
} 

export default NewProjects;
   

