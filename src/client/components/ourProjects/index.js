import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import fetchAllProjects from '../../actions/ourprojectsAction';
import Map from '../map/Map'
import Header from '../header'
import Projects from './projects';
import './index.css';


class OurProjects extends Component {
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

    render() {
      const {allProjects, isFetching} = this.props;

      return (
        <div>
          <Header Logo='./assets/nabali-fares-colored.png' WhereAmI='ourprojectpage'/>
          <div className='ourProjects'>
            <div className='ourProjects-project'>
              <div className='ourProjects-headers'>
                <div className='titleAndNumber'>
                  <h3 className='ourProjects-title'>مشاريعنا</h3>
                  <h5 className='ourProjects-number'>{allProjects.length} مشروع</h5>
                </div>
                <div>
                </div>
              </div>
              {
                isFetching || allProjects.length==0 ? <div>...Loading</div>
                :

                  allProjects.map(e => {

                    return <Projects props={this.props} data={e}/>
                  })


              }
            </div>
            <div className='ourProjects-map'>
              <Map height='648px' data={allProjects}/>

            </div>
          </div>
        </div>

      );
    }
}

OurProjects.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(OurProjects);







// <h5 className='ourProjects-number'>ترتيب العرض
//   <img style={{ paddingRight:'14px' }} src='./assets/sort.png'/>
// </h5>
