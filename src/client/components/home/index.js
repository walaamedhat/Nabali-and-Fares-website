import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Slideshow from './slideshow';
import Map from '../map/Map';
import NewProjects from './newprojects'
import FeaturedProjects from './featuredprojects'
import MediaCenter from './mediacenter'
import fetchAllProjects from '../../actions/ourprojectsAction';
const images = ['./assets/1.png', './assets/2.jpg'];



import './index.css';
import OurApps from './ourapps';

class Home extends Component {
  componentDidMount(){
      const { fetchAllProjects } = this.props;
      fetchAllProjects();
  }

    render(){
      const {allProjects, isFetching} = this.props;
        return(
          <div className='home-component'>
            <Slideshow props={this.props}/>
            <div className='newprojects__top'  style={{justifyContent: 'center', width:'100%', marginBottom:'21px'}}>
                <div style={{color: '#3da5f9',fontSize: '22px',fontWeight: '400',
                borderBottom:'1px dashed #3da5f9'}}>خريطة مشاريع النبالي والفارس للعقارات</div>

            </div>
            <Map height='431px' data={allProjects}/>
            <NewProjects props={this.props}/>
            <FeaturedProjects />
            <MediaCenter props={this.props}/>
            <OurApps />
          </div>
        )
    }
}

Home.propTypes = {
    fetchAllProjects: PropTypes.func
}
const mapStateToProps = state =>{
    return{
      allProjects : state.ourprojects.projectData,
      isFetching : state.ourprojects.isFetching
    }
}

const mapDispatchToProps = {
    fetchAllProjects
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
