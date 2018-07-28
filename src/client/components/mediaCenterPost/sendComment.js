import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import addComment from '../../actions/addComment';
import SweetAlert from 'react-bootstrap-sweetalert';

class SendComment extends Component {
  constructor(props){
    super(props)
    this.state = {
      send:'',
      alert: null

    }
  }

  onSubmit = (e) =>{
    e.preventDefault()
    if ((e.target[0].value||e.target[1].value||e.target[2].value || e.target[0].value.length <= 2 ).trim()==='') {
          this.showAlert()
    }
    else {
      this.state ={
        news_id : e.target.id,
        [e.target[0].name]: e.target[0].value,
        [e.target[1].name]: e.target[1].value,
        [e.target[2].name]: e.target[2].value
      }
      const { addComment } = this.props;
      addComment(this.state);
      window.location.reload();

    }
  }

    showAlert() {
      const getAlert = () => (
        <SweetAlert
          warning
          title="عذرا"
          onConfirm={() => this.hideAlert()}
        >
          إملأ الحقول ببيانات حقيقية
        </SweetAlert>
      );

      this.setState({
        alert: getAlert()
      });
    }

    hideAlert() {
      this.setState({
        alert: null
      });
    }

  render () {
    const id =this.props.id;
    return (
      <div className='commentOnPost'>
        <div className='commentOnPost-h3'>
          <h3>أرسل لنا تعليق</h3>
        </div>
        <div className='sendComment-inputs'>
          {
            id.length != 0 ?
          <form onSubmit={this.onSubmit} id={id[0]._id}>
          <div>
            <label className='contactUs-label'> الإسم كاملاً</label>
            <input name='commenter_name' type='text' placeholder='يرجى كتابة إسمك' required className='comment-input'/>
            <label className='contactUs-label'>البريد الإلكتروني</label>
            <input name='email' type='email' placeholder='بريدك الإلكتروني' required className='comment-input'/>
          </div>
          <label className='contactUs-label'> اكتب تعليق</label>
          <textarea name='comment' className='contactUs-textarea' required laceholder='أكتب نص التعليق الخاص بك'/>
          <div className='comment-button'>
            <button type='submit' className='sendComment'>إرسال التعليق</button>
          </div>
        </form>
        :<div/>
        }
        {
          this.state.alert
        }
        </div>
      </div>
    )
  }
}

SendComment.propTypes = {
    addComment: PropTypes.func
}


const mapDispatchToProps = {
    addComment
}


export default connect(null,mapDispatchToProps)(SendComment);
