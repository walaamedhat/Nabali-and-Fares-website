import React, { Component } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';

class ContactUsInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
      send:'',
      alert: null

    }
  }
  loadWindow = () =>{
  window.location.pathname = '/contactus';
  }
  submit = (e) =>{
    e.preventDefault()
    const data = {
      [e.target[0].name]: e.target[0].value,
      [e.target[1].name]: e.target[1].value,
      [e.target[2].name]: e.target[2].value,
      [e.target[3].name]: e.target[3].value,
      [e.target[4].name]: e.target[4].value,
      [e.target[5].name]: e.target[5].value,
      [e.target[6].name]: e.target[6].value
    }
    if ((data.Fname||data.Phnum||data.FaceLink||data.Lname||data.email||data.InstaLink||data.messasge).trim()==='') {
      this.showAlert('عذرا', 'إملأ جميع الحقول ', 'warning')
    }
    else if ((data.Fname.length <= 2 || data.Lname.length <= 2 ) || (!isNaN(data.Fname) || !isNaN(data.Lname))) {
      this.showAlert('نأسف', 'أدخل اسم صحيح', 'warning')
    }
    else {
      fetch('/api/v1/contactUs', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "credentials": "same-origin"
        },
        body: JSON.stringify(data)
      })
      .then(res => {
        this.showAlert('تم', 'تم إرسال رسالتك بنجاح', 'success',true)
      })
      .catch(error => {console.error(`Fetch Error =\n`, error)
        this.setState({err:error})
      });

    }
  }

  showAlert(title,desc,type,load=false) {
    if (load) {
      var getAlert = () => (
        <SweetAlert
          type={type}
          title={title}
          onConfirm={() => this.loadWindow()}
        >
        {desc}
        </SweetAlert>
      );
    }
    else {
      var getAlert = () => (
        <SweetAlert
          type={type}
          title={title}
          onConfirm={() => this.hideAlert()}
        >
        {desc}
        </SweetAlert>
      );
    }


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
    return (
      <form onSubmit={this.submit}>
        <div className='contactUs-content'>
          <div className='content-raightSection'>
            <div className='right-input'>
              <h1 style={{ color:'#475669',fontSize: '24px',fontWeight: '700',paddingTop:'10px'}}>أرسل لنا تعليق</h1>

              <label className='contactUs-label'>الإسم الأول</label>
              <input name='Fname' type='text' placeholder='يرجى كتابة إسمك الأول' className='contactUs-input' required/>

              <label className='contactUs-label'>رقم الهاتف المحمول</label>
              <input name='Phnum' type='text' placeholder='يرجى كتابة رقمك صحيحاً لتسهيل التواصل معك' className='contactUs-input' pattern="^[0-9]*$" required/>

              <label className='contactUs-label'>حسابك على فيس بوك</label>
              <input name='FaceLink' type='url' placeholder='facebook.com/example' className='contactUs-input' required/>
            </div>
            <div className='left-input'>

              <label className='contactUs-label'>الإسم الأخير</label>
              <input name='Lname' type='text' placeholder='يرجى كتابة إسمك الاخير (العائلة)' className='contactUs-input' required/>

              <label className='contactUs-label'>البريد الإلكتروني</label>
              <input name='email' type='email' placeholder='name@domain.com' className='contactUs-input' required/>

              <label className='contactUs-label'>حسابك على إنستاجرام</label>
              <input name='InstaLink' type='url' placeholder='instagram.com/example' className='contactUs-input' required/>

            </div>
            <div className='battom-input'>
              <label className='contactUs-label'>نص الرسالة</label>
              <textarea name='messasge' className='contactUs-textarea' required/>
              <button type='submit' className='sendComment'>إرسال الرسالة</button>
            </div>
          </div>
          <div className='content-leftSection'>
            <h1 style={{ color:'#475669',fontSize: '24px',fontWeight: '700',paddingTop:'10px'}}>معلومات الإتصال</h1>
            <div>
              <h4 style={{ display: 'flex',justifyContent: 'space-around',width: '100px',color: '#8492a6'}}>
                <img src='./assets/markerImg.png'/>    العنوان
              </h4>
              <h4 style={{ color: '#475669' }}>234 شارع فلان الفلاني الحي الرئيسي المدينة الرئيسية</h4>
            </div>
            <div>
              <h4 style={{ display: 'flex',justifyContent: 'space-around',width: '117px',color: '#8492a6'}}>
                <img src='./assets/phone.png'/> رقم الهاتف
              </h4>
              <h4 style={{ color: '#475669' }}>00970599123456</h4>

            </div>
            <div>
              <h4 style={{ display: 'flex',justifyContent: 'space-around',width: '148px',color: '#8492a6'}}>
                <img src='./assets/email.png'/> البريد الإلكتروني
              </h4>
              <h4 style={{ color: '#475669' }}>info@nabalifares.ps</h4>

            </div>
            <div style={{ width: '325px'}}>
              <h4 style={{ display: 'flex',justifyContent: 'space-around',width: '184px',color: '#8492a6'}}>
                <img src='./assets/clock.png'/> ساعات الدوام الرسمي
              </h4>
              <h4 style={{ color: '#475669' }}>يومياً عد الجمعة من الساعة 9 صباحاً وحتى الساعة 5 مساءً والعطل الرسمية في البلاد</h4>
            </div>
          </div>
        </div>
        {
          this.state.alert
      }
      </form>
    );
  }
}

export default ContactUsInfo;
