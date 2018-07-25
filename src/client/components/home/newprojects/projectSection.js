import React, {Component} from 'react';
import { Link } from 'react-router-dom'

import './index.css';




class ProjectSection extends Component {
    constructor(props){
        super(props);
    }

  view = (e)=> {
    this.props.props.history.push(`/project/${e.target.id}`);
  }

    render(){
      const data = this.props.data;
      const description =data.description.substring(0, 151)
      return(
        <div dir="rtl" className='newprojects__project'>
            <img src={data.images[0]} />
            <div className='project__title'>{data.name}</div>
            <p>{description}....</p>
            <div className='newprojects__project__contents'>
                <div className='newprojects__project__col1'>
                    <div className='rooms'>
                        <img src='./assets/rooms.png'/>
                        <span>غرف</span>
                    </div>
                    <div className='bathrooms'>
                        <img src='./assets/bathroom.png'/>
                        <span>حمامات</span>
                    </div>
                    <div className='kitchen'>
                        <img src='./assets/kitchen.png'/>
                        <span>مطبخ</span>
                    </div>
                </div>
                <div className='newprojects__project__col2'>
                <div className='tennis'>
                        <img src='./assets/tennis.png'/>
                        <span>نوادي رياضية</span>
                    </div>
                    <div className='swimming'>
                        <img src='./assets/swimming.png'/>
                        <span>مسابح</span>
                    </div>
                    <div className='gardens'>
                        <img src='./assets/gardens.png'/>
                        <span>حدائق</span>
                    </div>
                </div>
            </div>
                <Link to={'/project/' + `${data._id}`}><div className='newprojects__project__seemore' id={data._id}>
                  عرض المزيد
                  <span><i class="fas fa-arrow-left"></i></span>
                </div>
                </Link>

        </div>
    )
  }
}

export default ProjectSection;
