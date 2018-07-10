import React, { Component } from 'react';

import ContactUsInfo from './contactInfo';
import Map from '../googleMap';
import './index.css';



class ContactUs extends Component {
  render () {
    return (
      <div className='contactUs'>
        <div className='contactUs-header'>
          <h2>نحن هنا لنسمعكم</h2>
          <h5>ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى</h5>
        </div>
        <ContactUsInfo/>
        <Map/>
      </div>
    )

    }

}


export default ContactUs;
