import React, { Component } from 'react';

import Map from '../googleMap'
import Header from '../header'
import Projects from './projects';
import './index.css';


class OurProjects extends Component {
    render() {
      return (
        <div>
          <Header Logo='./assets/nabali-fares-colored.png' WhereAmI='ourprojectpage'/>
          <div className='ourProjects'>
            <div className='ourProjects-project'>
              <div className='ourProjects-headers'>
                <div className='titleAndNumber'>
                  <h3 className='ourProjects-title'>مشاريعنا</h3>
                  <h5 className='ourProjects-number'>345 مشروع</h5>
                </div>
                <div>
                  <h5 className='ourProjects-number'>ترتيب العرض
                    <img style={{ paddingRight:'14px' }} src='./assets/sort.png'/>
                  </h5>
                </div>
              </div>
              <Projects/>
              <Projects/>
              <Projects/>
            </div>
            <div className='ourProjects-map'>
              <Map/>
            </div>
          </div>
        </div>

      );
    }
}



export default OurProjects;
