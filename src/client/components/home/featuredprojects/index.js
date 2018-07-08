import React, {Component} from 'react';

import './index.css';

class FeaturedProjects extends Component{
    render(){
        return(
            <div className='featured__project'>
                <span className='featured__project__title0'>مشاريع مميزة</span>
                <div className='featured__project__divAndimg'>
                    
                    <div className='featured__project__right'>
                        <div className='featured__project__title'>مشروع سكاي تاورز السكني الحديث</div>
                        <p className='featured__project__paragraph'>
                        سكاي تاورز أول مشروع سكني فاخر في مركز المدينة يحتوي على مزايا خاصة لاولئك الذين يسعون للحصول على اسلوب ونمط حياة كما يحلمون.حيث تتوفر كل وسائل الراحة من حدائق خضراء.الى جانب وسائل الراحة الاخرى التي أصبحت تمثل محور اهتمام لكل عائلة في عصرنا الحالي الذي يمتاز بضغط العمل وضيق الوقت مما لا يسمح في كثير من الأحيان لأفراد العائلة بالاستمتاع بوقتهم. سكاي تاورز جعل من المستحيل ممكن.
                        </p>                
                        <div className='featured__arrows'>
                            <span><i class="fas fa-arrow-right"></i></span>            
                            <span><i class="fas fa-arrow-left"></i></span>
                        </div>
                    </div>
                    <img src='./assets/featuredproject.png'/> 
                </div>
            </div>
        )
    }
}

export default FeaturedProjects;