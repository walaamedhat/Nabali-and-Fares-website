import React, {Component} from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import fetchAllProjects from '../../../actions/ourprojectsAction';
import PropTypes from 'prop-types';
import ProjectSection from './projectSection';
import './index.css';

function SampleNextArrow(props) {
    const {onClick } = props;
    return (
        <span style={{ marginRight: '30px',fontWeight: '100',fontSize: '20px',position: 'absolute',top: '-43px',left:'88px'}} onClick={onClick}>
          <i style={{color:'#3da5f9'}} class="fas fa-arrow-left"></i>
        </span>
    )
  }

function SamplePrevArrow(props) {
  const {onClick } = props;
  return (
    <span style={{ marginRight: '30px',fontWeight: '100',fontSize: '20px',position: 'absolute',top: '-43px',left: '136px'}} onClick={onClick}>
      <i style={{color:'#3da5f9'}} class="fas fa-arrow-right"></i>
    </span>
  );
}

class NewProjects extends Component {
    constructor(props){
        super(props);

        this.state = {
            projects:[]
        }
    }
    componentDidMount(){
        const { fetchAllProjects } = this.props;
        fetchAllProjects();
    }

    render(){
      var settings = {
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

     };
      const {allProjects} = this.props;
        return(
        <div style={{position:'relative'}} className='newprojects'>
            <div className='newprojects__top'>
                <div className='newprojects__title'>جديد مشاريعنا</div>

            </div>
            {
              allProjects.isFetching || allProjects.length==0? <div>loading</div> :
              <Slider {...settings}>
                {allProjects.length<=3 ?
              <div className='newprojects__down'>
                <ProjectSection data={allProjects[0]} props={this.props.props} />
                <ProjectSection data={allProjects[1]} props={this.props.props}/>
                <ProjectSection data={allProjects[2]} props={this.props.props}/>
              </div>
              :
              <div className='newprojects__down'>
                <ProjectSection data={allProjects[3]} props={this.props.props}/>
                <ProjectSection data={allProjects[4]} props={this.props.props}/>
                <ProjectSection data={allProjects[5]} props={this.props.props}/>
              </div>}


              </Slider>

          }
        </div>
        )
    }
}
NewProjects.propTypes = {
    fetchAllProjects: PropTypes.func
}
const mapStateToProps = state =>{
    return{
      allProjects : state.ourprojects.projectData
    }
}

const mapDispatchToProps = {
    fetchAllProjects
}

export default connect(mapStateToProps, mapDispatchToProps)(NewProjects);







// <ProjectSection data={allProjects[0]} />
// <ProjectSection data={allProjects[1]} />
// <ProjectSection data={allProjects[2]} />
// <div className='newprojects__down'>
//   2
// <ProjectSection data={allProjects[3]} />
// <ProjectSection data={allProjects[4]} />
// <ProjectSection data={allProjects[5]} />
// </div>
// <div className='newprojects__down'>
//     3
// <ProjectSection data={allProjects[6]} />
// <ProjectSection data={allProjects[7]} />
// <ProjectSection data={allProjects[8]} />
// </div>
