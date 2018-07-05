import React, {Component} from 'react';

import './index.css';
   

class Header extends Component {
    render() {
      return (
        <div className='header'>
            <div className='header__logo__div'>
                <img className='header__logo' src='./assets/nabali-fares-logo.png' />
            </div>
            <div className='header__nav'>
                <span>الرئيسية</span>
                <span>عن الشركة</span>
                <span>مشاريعنا</span>
                <span>المركز الإعلامي</span>
                <span className='header__nav__contactus'>
                    <i class="fas fa-phone"></i>
                    إتصل بنا
                </span>
            </div>
        </div>
      );
  
    }
  }
  
  export default Header;
   