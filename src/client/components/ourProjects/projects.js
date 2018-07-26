import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './index.css';

class Projects extends Component{
  constructor(props){
    super(props)
  }

  view = (e)=> {
    this.props.props.history.push(`/project/${e.target.id}`);
  }
  render() {
    const {data} = this.props;
    console.log();
    return (
      <div className='projects-section'>
        <div className='project-image'>
          <img src={data.images[0]}/>
        </div>
        <div className='project-details'>
          <h3 style={{ margin:'0', color:'#3da5f9', padding: '9px 15px 0 0' }}>{data.name}</h3>
          <h6 style={{ margin:'0',color: '#8492a6',padding: '5px 15px 0 0' }}>{data.description.substring(0, 151)}...</h6>
          <div className='project-content'>
            <div className='project-content-descAndIcon'>
              <h6>
                <img src='./assets/rooms.png'/>
                غرف
              </h6>
              <h6>
                <img src='./assets/tennis.png'/>
                نوادي رياضية
              </h6>
              <h6>
                <img src='./assets/kitchen.png'/>
                مطبخ
              </h6>
            </div>
            <div className='project-content-descAndIcon'>
              <h6>
                <img src='./assets/bathroom.png'/>
                 حمامات
              </h6>
              <h6>
                <img src='./assets/swimming.png'/>
                 مسابح
              </h6>
              <h6>
                <img src='./assets/gardens.png'/>
                 حدائق
              </h6>
            </div>
          </div>

            <div className='mediacenter__bottom__readmore show-more' id={data._id} onClick={this.view}>
              عرض المزيد
              <span><i class="fas fa-arrow-left"></i></span>
            </div>

          </div>
      </div>
    );
  }
}

export default Projects;
