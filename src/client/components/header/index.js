import React, {Component} from 'react';

import './index.css';
   

class Header extends Component {
    render() {
      return (
        <div className='header'>
            <img className='header__logo' src='./assets/nabali-fares-logo.png' />
            <div>
                <span>الرئيسية</span>
                <span>عن الشركة</span>
                <span>مشاريعنا</span>
                <span>المركز الإعلامي</span>
                <span>إتصل بنا</span>
            </div>
        </div>
      );
  
    }
  }
  
  export default Header;
   