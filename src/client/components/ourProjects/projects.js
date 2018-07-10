import React, { Component } from 'react';


import './index.css';


class Projects extends Component{
  render() {
    return (
      <div className='projects-section'>
        <div className='project-image'>
          <img src='./assets/project.png'/>
        </div>
        <div className='project-details'>
          <h3 style={{ margin:'0', color:'#3da5f9', padding: '9px 15px 0 0' }}>مشروع ديماس</h3>
          <h5 style={{ margin:'0',color: '#8492a6',padding: '5px 15px 0 0' }}>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها</h5>
          <div className='project-content'>
            <div className='project-content-descAndIcon'>
              <h5>
                <img src='./assets/rooms.png'/>
                غرف
              </h5>
              <h5>
                <img src='./assets/tennis.png'/>
                نوادي رياضية
              </h5>
              <h5>
                <img src='./assets/kitchen.png'/>
                مطبخ
              </h5>
            </div>
            <div className='project-content-descAndIcon'>
              <h5>
                <img src='./assets/bathroom.png'/>
                 حمامات
              </h5>
              <h5>
                <img src='./assets/swimming.png'/>
                 مسابح
              </h5>
              <h5>
                <img src='./assets/gardens.png'/>
                 حدائق
              </h5>
            </div>
          </div>
          <div className='show-more'>
            <h5>عرض المزيد <i className="fa fa-arrow-left" style={{ fontSize:'24px' }}></i></h5>
          </div>
        </div>

      </div>
    );
  }
}

export default Projects;
