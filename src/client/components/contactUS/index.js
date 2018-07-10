import React, { Component } from 'react';

import Header from '../header'
import ContactUsInfo from './contactInfo';
import Map from '../googleMap';
import './index.css';



class ContactUs extends Component {
  render () {
    return (
      <div>
        <Header Logo='./assets/nabali-fares-colored.png' WhereAmI='contactuspage'/>
        <div className='contactUs'>
          <div className='contactUs-header'>
            <h2>نحن هنا لنسمعكم</h2>
            <h5>ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى</h5>
          </div>
          <ContactUsInfo/>
          <Map/>
        </div>
      </div>
    )

    }

}


export default ContactUs;
