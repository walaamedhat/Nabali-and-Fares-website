import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SendComment extends Component {
  render () {
    return (
      <div className='commentOnPost'>
        <div className='commentOnPost-h3'>
          <h3>أرسل لنا تعليق</h3>
        </div>
        <div className='sendComment-inputs'>
          <div>
            <label className='contactUs-label'> الإسم كاملاً</label>
            <input type='text' placeholder='يرجى كتابة إسمك' className='comment-input'/>
            <label className='contactUs-label'>البريد الإلكتروني</label>
            <input type='text' placeholder='بريدك الإلكتروني' className='comment-input'/>
          </div>
          <label className='contactUs-label'> اكتب تعليق</label>
          <textarea className='contactUs-textarea' placeholder='أكتب نص التعليق الخاص بك'/>
          <div className='comment-button'>
            <button type='submit' className='sendComment'>إرسال التعليق</button>
          </div>
        </div>
      </div>
    )
  }
}

export default SendComment;
